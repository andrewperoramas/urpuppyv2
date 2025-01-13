<?php

namespace App\Http\Controllers\Auth;

use App\Data\PuppyData;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Puppy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'puppy'  => PuppyData::optional(Puppy::with(['breeds', 'seller'])->inRandomOrder()->first())
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        inertia()->clearHistory();
        $request->authenticate();

        $request->session()->regenerate();

        /* dd($request->user()->puppies()->count()); */
        if ($request->user()->puppies()->count() && !$request->user()->is_subscribed ) {
            return redirect()->intended(route('plans.index', absolute: false));

        }

        return redirect()->intended(route('home', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        inertia()->clearHistory();

        return redirect('/');
    }
}
