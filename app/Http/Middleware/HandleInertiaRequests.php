<?php

namespace App\Http\Middleware;

use App\Models\Puppy;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }


    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

    $min = Puppy::min('price') ?? 1;
    $max = Puppy::max('price') ?? 500;
    /* $min--; */
    /* $max++; */
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'price_filter_range' => [$min, $max],
            'csrf_token' => csrf_token(),
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],


            /* 'ziggy' => fn () => [ */
            /*     ...(new Ziggy)->toArray(), */
            /*     'location' => $request->url(), */
            /* ], */
        ];
    }
}
