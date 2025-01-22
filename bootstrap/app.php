<?php

use App\Http\Middleware\CheckoutReady;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->trustProxies(at: '*');
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);


        $middleware->validateCsrfTokens(except: [
            'stripe/*',
        ]);

        $middleware->alias([
            'role' => \App\Http\Middleware\CheckRole::class,
            'admin' => IsSuperAdmin::class,
            'subscriber.only' => RedirectIfNotSubscribed::class,
            'redirect.external' => RedirectExternalUrl::class,
            'checkout.ready' => CheckoutReady::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
