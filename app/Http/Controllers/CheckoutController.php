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
        // Validate the request to ensure plan_id and paymentMethod are present
        $request->validate([
            'plan_id' => 'required|exists:plans,id',
            'paymentMethod' => 'required',
        ]);

        // Find the plan
        $plan = Plan::find($request->plan_id);

        if (!$plan) {
            return response()->json([
                'message' => 'Plan not found',
            ], 404);
        }

        // Create the subscription with metadata
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
                ->create($request->paymentMethod, [
                    'email' => $request->user()->email, // User's email for customer creation
                ]);

            if (!$subscription) {
                throw new \Exception('Subscription creation failed.');
            }

            // Update user roles based on the plan type
            if ($plan->type == 'breeder') {
                $request->user()->update(['is_breeder' => true]);
            } elseif ($plan->type == 'premium') {
                $request->user()->update(['is_seller' => true]);
            }

            // Redirect with success message
            return redirect()->route('profile.edit', [
                'tab' => 'My Subscription',
                'message.success' => 'Successfully subscribed to ' . $plan->type . ' plan',
            ]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Subscription Error: ' . $e->getMessage());

            // Redirect back with an error message
            return redirect()->back()->with([
                'tab' => 'My Subscription',
                'message.error' => 'Something went wrong. Please try again later.',
            ]);
        }
    }

    public function index(int $plan_id, Request $request)
    {
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
