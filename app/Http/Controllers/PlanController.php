<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()?->isSubscribed()) {
            return redirect()->route('profile.edit', [
                'tab' => 'My Subscription'
            ]);
        }

        $plans = Plan::ordered()->active()->where('is_featured', false)->get();

        return inertia()->render('Plan/Index', [
            'plans' => $plans,
        ]);
    }

    public function breeder()
    {
        $plan = Plan::ordered()->active()->where('is_featured', true)->first();
        return inertia()->render('Plan/Breeder', [
            'plan' => $plan
        ]);
    }

}
