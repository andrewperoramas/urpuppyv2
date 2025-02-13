<?php

namespace App\Http\Controllers;

use App\Data\PlanData;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\SetupIntent;
use Stripe\PaymentIntent;
use Stripe\PaymentMethod;
use Laravel\Cashier\Subscription;
use Illuminate\Support\Facades\Log;

class CheckoutController extends Controller
{
    public function __invoke()
    {
        dd('adi');
    }

    public function payment_methods(Request $request)
    {
        try {
            $user = $request->user();
            $payment_methods = $user->paymentMethods();

            return Inertia::render('Subscription/PaymentMethod', [
                'payment_methods' => $payment_methods,
            ]);
        } catch (\Exception $e) {
            return Inertia::render('Subscription/PaymentMethod', [
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function complete(Request $request)
    {
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'paymentMethod' => 'required',
        ]);

        $plan = Plan::find($request->plan_id);

        if (!$plan) {
            return response()->json(['message' => 'Plan not found'], 404);
        }

        try {
            $user = $request->user();

            // Create the subscription
            $subscription = $this->createSubscription($user, $plan, $request->paymentMethod);

            // Handle payment authentication if required
            if ($subscription->latest_invoice && $subscription->latest_invoice->payment_intent) {
                $paymentIntent = PaymentIntent::retrieve($subscription->latest_invoice->payment_intent);

                if (in_array($paymentIntent->status, ['requires_action', 'requires_payment_method'])) {
                    return redirect()->route('billing.confirm', [
                        'payment_intent' => $paymentIntent->id,
                        'client_secret' => $paymentIntent->client_secret,
                    ]);
                }
            }

            // Update user roles based on the plan type
            $this->updateUserRoles($user, $plan, $subscription);

            return redirect()->route('profile.edit', [
                'tab' => 'My Subscription',
                'message.success' => 'Successfully subscribed to ' . $plan->type . ' plan',
            ]);

        } catch (\Exception $e) {
            Log::error('Subscription Error: ' . $e->getMessage());

            return redirect()->back()->with([
                'tab' => 'My Subscription',
                'error' => 'Payment failed: ' . $e->getMessage(),
            ]);
        }
    }

    public function confirm(Request $request)
    {
        return inertia('Subscription/BillingConfirmation', [
            'payment_intent' => $request->query('payment_intent'),
            'client_secret' => $request->query('client_secret'),
        ]);
    }

    public function index(int|string $plan_id, Request $request)
    {
        $user = $request->user();
        $setupIntentId = $request->query('setup_intent');
        $redirectStatus = $request->query('redirect_status');

        if ($setupIntentId && $redirectStatus) {
            Stripe::setApiKey(env('STRIPE_SECRET'));

            // Retrieve the SetupIntent from Stripe
            $setupIntent = SetupIntent::retrieve($setupIntentId);

            if ($setupIntent->status === 'succeeded') {
                $paymentMethod = $setupIntent->payment_method;
                $plan = Plan::find($plan_id);

                if (!$plan) {
                    return response()->json(['message' => 'Plan not found'], 404);
                }

                try {
                    $subscription = $this->createSubscription($user, $plan, $paymentMethod);

                    // Update user roles based on the plan type
                    $this->updateUserRoles($user, $plan, $subscription);

                    return redirect()->route('checkout.success', ['plan_id' => $plan_id]);

                } catch (\Exception $e) {
                    Log::error('Subscription Error: ' . $e->getMessage());

                    return redirect()->route('checkout.index', ['plan_id' => $plan_id])
                        ->with('error', 'Payment failed. Please try again.');
                }
            } else {
                return redirect()->route('checkout.index', ['plan_id' => $plan_id])
                    ->with('error', 'Payment failed. Please try again.');
            }
        }

        $plan = Plan::find($plan_id);

        if (!$plan) {
            return response()->json(['message' => 'Plan not found'], 404);
        }

        return Inertia::render('Subscription/Checkout', [
            'plan_id' => $plan->id,
            'plan' => PlanData::from($plan),
            'intent' => $user->createSetupIntent(),
        ]);
    }

    public function success(Request $request)
    {
        $setupIntentId = $request->query('setup_intent');
        $redirectStatus = $request->query('redirect_status');

        if ($setupIntentId && $redirectStatus) {
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $setupIntent = SetupIntent::retrieve($setupIntentId);

            if ($setupIntent->status === 'succeeded') {
                return Inertia::render('Checkout/Success', [
                    'setupIntent' => $setupIntent,
                    'redirectStatus' => $redirectStatus,
                    'planId' => $request->query('plan_id'),
                ]);
            }
        }

        return Inertia::render('Checkout/Success', [
            'error' => 'Payment failed. Please try again.',
        ]);
    }

    /**
     * Create a subscription for the user.
     */
    protected function createSubscription($user, $plan, $paymentMethod): Subscription
    {
        return $user->newSubscription($plan->type, $plan->stripe_plan_id)
            ->withMetadata([
                'plan_id' => (string) $plan->id,
                'plan_name' => (string) $plan->name,
                'plan_price' => (string) $plan->price,
                'user_id' => (string) $user->id,
                'plan_type' => (string) $plan->type,
            ])
            ->create($paymentMethod, [
                'email' => $user->email,
            ]);
    }

    /**
     * Update user roles based on the plan type.
     */
    protected function updateUserRoles($user, $plan, $subscription): void
    {
        if ($plan->type == 'breeder') {
            $user->update(['is_breeder' => true]);
        } elseif ($plan->type == 'premium') {
            $user->update(['is_seller' => true]);
        } elseif ($plan->type == 'free') {
            $user->update(['is_seller' => true]);
            $subscription->cancel();
        }
    }
}
