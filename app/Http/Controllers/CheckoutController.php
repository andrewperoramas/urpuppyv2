<?php

namespace App\Http\Controllers;

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
        $plan = Plan::find($request->plan_id);

        if (! $plan) {
            return response()->json([
                'message' => 'Plan not found',
            ]);
        }


        /* $subscription = $request->user()->newSubscription('standard', $plan->stripe_plan_id); */

        /* if ($plan->trial_days > 0) { */
        /*     $subscription = $subscription->trialDays($plan->trial_days); */
        /* } */

        /* if ($plan->type == 'breeder') { */
        $is_created = $request->user()->newSubscription($plan->type, $plan->stripe_plan_id)->create($request->paymentMethod);

        if (!$is_created) {

            return redirect()->back()->with([
                'tab' => 'My Subscription',
                'message.error' => 'Something went wrong. Please try again later',
            ]);
        }

        if ($plan->type == 'breeder') {
            $request->user()->update([
                'is_breeder' => true
            ]);
        }

        /* } else { */
           /* $request->user()->newSubscription('standard', $plan->stripe_plan_id)->create($request->paymentMethod); */
        /* } */

        return redirect()->route('profile.edit', [
            'tab' => 'My Subscription',
            'message.success' => 'Successfully subscribed to breeder plan',
        ]);
        /* return inertia()->render(''); */
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
