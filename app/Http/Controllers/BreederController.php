<?php

namespace App\Http\Controllers;

use App\Data\BreedData;
use App\Data\BreederData;
use App\Data\BreederFullData;
use App\Models\User;

class BreederController extends Controller
{
    public function index()
    {
        $breeders = User::with([
            'breeds:name',

            'media',
            'state',
            'city',

        ])->breeders()->paginate(10);

        return inertia()->render('Breeders/Index', [
            'breeders' => BreederFullData::collect($breeders),
        ]);

    }

    public function create()
    {
        return inertia('Breeders/Registration');
    }

    public function show($slug = null)
    {
        if ($slug == null) {
            return redirect()->back();
        }
        $userId = User::decodeSlug($slug);

        $breeder = User::with([
            'breeds:name',
            'comments' => function ($query) {
                $query->orderBy('created_at', 'desc');
            },
            'comments.reviewer',
            'comments.reviewer.media',
            'media',
            /* 'attributes' => function ($query) { */
            /*     $query->select('title', 'value', 'attributable_id'); */
            /* }, */
        ])->find($userId);

        /* if ($breeder) { */
        /*     $breeder->attr = $breeder->attributes */
        /*         ->mapWithKeys(fn ($attribute) => (object)[$attribute->title => $attribute->value]); */
        /* } */

        /* dd($breeder->comments->first(), $breeder->comments[1]); */

        if (!auth()->user()) {

            /* $breeder->attr['public_email'] = null; */
            /* $breeder->attr['public_mobile'] = null; */

        }
        /* dd($breeder->attr); */

        $puppies = $breeder->puppies()->with(['breeds:id,name,slug','breeder', 'media', 'favorites'])->limit(3)->get();

        return inertia('Breeders/Show', [
            'rating_count' => $breeder->comments->count(),
            'rating_average' => $breeder->comments->pluck('rating')->avg(),
            'breeder' => BreederFullData::from($breeder),
            'puppies' => $puppies,
        ]);
            /* ->title('Breeder: '.$breeder->name) */
            /* ->description('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.') */
            /* ->image($breeder->avatar) */
            /* ->ogTitle('Breeder: '.$breeder->name) */
            /* ->ogDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.') */
            /* ->ogImage($breeder->avatar) */
            /* ->ogUrl(route('breeder-directory')) */
            /* ->twitterTitle('Breeder: '.$breeder->name) */
            /* ->twitterSite('@urpuppy') */
            /* ->twitterImage($breeder->avatar) */
            /* ->twitterDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.'); */
    }

    /* public function listings($slug) */
    /* { */
    /*     $breeder = User::query()->where('slug', $slug)->first(); */
    /*     $puppies = $breeder->puppies()->with(['breeds','media', 'favorites'])->paginate(12); */

    /*     return inertia()->render('Breeder/Listings', */
    /*         [ */
    /*             'puppies' => $puppies, */
    /*             'breeder' => $breeder */
    /*         ] */
    /*     )->title('Breeder: '.$breeder->name); */
    /* } */
}
