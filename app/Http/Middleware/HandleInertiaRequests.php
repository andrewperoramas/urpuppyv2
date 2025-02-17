<?php

namespace App\Http\Middleware;

use App\Data\UserData;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Jenssegers\Agent\Agent;

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
    $agent = new Agent();


    /* $min--; */
        /* dd(UserData::from($request->user()->load('media','city', 'state'))); */
    /* $max++; */
        return [
            ...parent::share($request),
            'auth' => [
                'user' => UserData::optional($request->user()?->load('state', 'company_state', 'media', 'breeds')),
            ],
            'price_filter_range' => [$min, $max],
            'csrf_token' => csrf_token(),
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
           'isMobile' => $agent->isMobile(),


            /* 'ziggy' => fn () => [ */
            /*     ...(new Ziggy)->toArray(), */
            /*     'location' => $request->url(), */
            /* ], */
        ];
    }
}
