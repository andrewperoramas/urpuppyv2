<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function index(Request $request)
{
    $plan = Plan::find($request->get('plan_id'));

    if (! $plan) {
        return response()->json([
            'message' => 'Plan not found',
        ]);
    }

    $subscription = $request->user()->newSubscription('standard', $plan->stripe_plan_id);

    if ($plan->trial_days > 0) {
        $subscription = $subscription->trialDays($plan->trial_days);
    }
        /* dd($plan->type); */

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

        ])->title('Success');
    }
}
