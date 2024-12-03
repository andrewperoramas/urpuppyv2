<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()?->isSubscribed()) {
            return redirect()->route('subscription.index');
        }

        $plans = Plan::ordered()->active()->get();

        return inertia()->render('Plan/Index', [
            'plans' => $plans,
        ]);
    }
}
