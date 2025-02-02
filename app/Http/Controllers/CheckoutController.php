<?php

namespace App\Http\Controllers;

use App\Data\PlanData;
use App\Models\Plan;
use Illuminate\Http\Request;
use Stripe\Stripe;

class CheckoutController extends Controller
{
    public function __invoke()
    {
        dd('adi');
    }

    public function payment_methods(Request $request)
{

/*         return inertia()->render('Subscription/PaymentMethod', [ */
/*             'payment_methods' => '', */
/*         ]); */
/*         dd($request->user()->paymentMethods()); */
    try {
        /* Stripe::setApiKey(env('STRIPE_SECRET')); */

        /* dd('adi'); */
        $user = $request->user();
            /* dd($user); */

        $payment_methods = $user->paymentMethods();

        return inertia()->render('Subscription/PaymentMethod', [
            'payment_methods' => $payment_methods,
        ]);
    } catch (\Exception $e) {
        return inertia()->render('Subscription/PaymentMethod', [
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

    if (! $plan) {
        return response()->json([
            'message' => 'Plan not found',
        ]);
    }

    return inertia()->render('Subscription/Checkout', [
            'plan_id' => $plan->id,
            'plan' => PlanData::from($plan),
            'intent' => auth()->user()->createSetupIntent()
    ]);

    return $subscription->checkout([
        'success_url' => route('subscription.success'),
        'cancel_url' => route('plans.index'),
        'subscription_data' => [
                 'metadata' => [
                'plan_id' => (string) $plan->id, // Cast to string
                'plan_name' => (string) $plan->name, // Ensure this is a string
                'plan_price' => (string) $plan->price, // Cast to string
                'user_id' => (string) $request->user()->id, // Cast to string
                'plan_type' =>(string) $plan->type, // This is already a string
            ],

        ],
    ]);
}



    public function success()
    {
        return inertia()->render('Checkout/Success', [

        ]);
    }
}
