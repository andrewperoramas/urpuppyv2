<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        $role = $request->query('role');

        $redirect_url = "home";

        if ($role == 'breeder') {
            $redirect_url = "breeders.create";
        } else if ($role == 'seller') {
            $redirect_url = "seller.create";
        }

        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route($redirect_url, absolute: false).'?verified=1&role='. $role);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended(route($redirect_url, absolute: false).'?verified=1'.'&role='. $role);
    }
}
