<?php

namespace App\Http\Controllers;

use App\Data\PlanData;
use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Stripe;
use Stripe\SetupIntent;

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
        return response()->json([
            'message' => 'Plan not found',
        ], 404);
    }

    try {
        $user = $request->user();

        // Attempt to create a subscription
        $subscription = $user
            ->newSubscription($plan->type, $plan->stripe_plan_id)
            ->withMetadata([
                'plan_id' => (string) $plan->id,
                'plan_name' => (string) $plan->name,
                'plan_price' => (string) $plan->price,
                'user_id' => (string) $user->id,
                'plan_type' => (string) $plan->type,
            ])
            ->create($request->paymentMethod, [
                'email' => $user->email,
            ]);

        // Check if subscription requires additional authentication
        if ($subscription->latest_invoice && $subscription->latest_invoice->payment_intent) {
            $paymentIntent = \Stripe\PaymentIntent::retrieve(
                $subscription->latest_invoice->payment_intent
            );

            if ($paymentIntent->status === 'requires_action' || $paymentIntent->status === 'requires_payment_method') {
                return redirect()->route('billing.confirm', [
                    'payment_intent' => $paymentIntent->id,
                    'client_secret' => $paymentIntent->client_secret,
                ]);
            }
        }

        // Update user roles based on the plan type
        if ($plan->type == 'breeder') {
            $user->update(['is_breeder' => true]);
        } elseif ($plan->type == 'premium') {
            $user->update(['is_seller' => true]);
        }

        return redirect()->route('profile.edit', [
            'tab' => 'My Subscription',
            'message.success' => 'Successfully subscribed to ' . $plan->type . ' plan',
        ]);

    } catch (\Exception $e) {
        \Log::error('Subscription Error: ' . $e->getMessage());

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

        $setupIntentId = $request->query('setup_intent');
        $redirectStatus = $request->query('redirect_status');

       if ($setupIntentId && $redirectStatus) {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // Retrieve the SetupIntent from Stripe
        $setupIntent = \Stripe\SetupIntent::retrieve($setupIntentId);

        if ($setupIntent->status === 'succeeded') {
            // Payment succeeded, process the payment
            $paymentMethod = $setupIntent->payment_method;

            // Create the subscription
            $plan = Plan::find($plan_id);
            if (!$plan) {
                return response()->json([
                    'message' => 'Plan not found',
                ], 404);
            }

            try {
                $subscription = $request->user()
                    ->newSubscription($plan->type, $plan->stripe_plan_id)
                    ->withMetadata([
                        'plan_id' => (string) $plan->id,
                        'plan_name' => (string) $plan->name,
                        'plan_price' => (string) $plan->price,
                        'user_id' => (string) $request->user()->id,
                        'plan_type' => (string) $plan->type,
                    ])
                    ->create($paymentMethod, [
                        'email' => $request->user()->email,
                    ]);

                if (!$subscription) {
                    throw new \Exception('Subscription creation failed.');
                }

                // Redirect to the success page
                return redirect()->route('checkout.success', [
                    'plan_id' => $plan_id,
                ]);
            } catch (\Exception $e) {
                // Log the error for debugging
                \Log::error('Subscription Error: ' . $e->getMessage());

                // Redirect back with an error message
                return redirect()->route('checkout.index', [
                    'plan_id' => $plan_id,
                ])->with('error', 'Payment failed. Please try again.');
            }
        } else {
            // Payment failed, redirect back with an error message
            return redirect()->route('checkout.index', [
                'plan_id' => $plan_id,
            ])->with('error', 'Payment failed. Please try again.');
        }
    }

        $plan = Plan::find($plan_id);

        if (!$plan) {
            return response()->json([
                'message' => 'Plan not found',
            ], 404);
        }

        return Inertia::render('Subscription/Checkout', [
            'plan_id' => $plan->id,
            'plan' => PlanData::from($plan),
            'intent' => $request->user()->createSetupIntent(),
        ]);
    }

    public function success(Request $request)
    {
        return Inertia::render('Checkout/Success', [
            /* 'setupIntent' => $setupIntent, */
            /* 'redirectStatus' => $redirectStatus, */
            /* 'planId' => $planId, */
        ]);

        // Retrieve the setup_intent and redirect_status from the query parameters
        $setupIntentId = $request->query('setup_intent');
        $redirectStatus = $request->query('redirect_status');

        // Verify the SetupIntent with Stripe
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $setupIntent = SetupIntent::retrieve($setupIntentId);

        if ($setupIntent->status === 'succeeded') {
            // Payment succeeded, process the payment
            $paymentMethod = $setupIntent->payment_method;
            $planId = $request->query('plan_id');

            // Pass data to the frontend
            return Inertia::render('Checkout/Success', [
                'setupIntent' => $setupIntent,
                'redirectStatus' => $redirectStatus,
                'planId' => $planId,
            ]);
        } else {
            // Payment failed, handle the error
            return Inertia::render('Checkout/Success', [
                'error' => 'Payment failed. Please try again.',
            ]);
        }
    }
}
