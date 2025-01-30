<?php

use App\Http\Middleware\CheckoutReady;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


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

           $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
        if (! app()->environment(['testing', 'local']) && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
                return Inertia::render('Error', ['status' => $response->getStatusCode(),
                    'puppy' => guest_puppy()
                ])
                ->toResponse($request)
                ->setStatusCode($response->getStatusCode());
        } elseif ($response->getStatusCode() === 419) {
            return back()->with([
                'message' => 'The page expired, please try again.',
            ]);
        }

        return $response;
    });
        //
    })->create();
