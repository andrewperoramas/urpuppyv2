<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckoutReady
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (
        !$request->user()->company_phone &&
        !$request->user()->phone     ) {
            return redirect()->route('home')->with([
                'message.error' => 'Action not allowed.'
            ]);
        }

        return $next($request);
    }
}
