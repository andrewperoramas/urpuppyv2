<?php

namespace App\Http\Controllers;

use App\Data\BreedData;
use App\Data\BreederData;
use App\Data\BreederFullData;
use App\Data\BreedOptionData;
use App\Http\Requests\BreederRegistrationRequest;
use App\Models\Breed;
use App\Models\State;
use App\Models\User;

class BreederController extends Controller
{
    public function index()
    {
        /* dd(request()->all()); */
        $breeders = User::with([
            'breeds',
            'media',
            'state',
            'city',

        ]);

        if (request()->breed && request()->breed != 'undefined') {
          $breeders = $breeders->whereHas('breeds' , function ($query) {
                $query->where('name', request()->breed);
            });
        }

        if (request()->state && request()->state != 'undefined') {
            $breeders->whereHas('state' , function ($query) {
            $query->where('name', request()->state);
        });
        }

        $breeders = $breeders->breeders()->paginate(10);

        return inertia()->render('Breeders/Index', [
            'breeders' => BreederFullData::collect($breeders),
            'breed_filter_list' => fn () =>
                Breed::select(['name'])->distinct()->orderBy('name')->pluck('name')
             ,
            'state_filter_list' => fn () =>
                State::select(['name'])->distinct()->orderBy('name')->pluck('name')
             ,
        ]);

    }

    public function create()
    {
        return inertia('Breeders/Registration', [
            'breeds' => BreedOptionData::collect(Breed::query()->get())
        ]);
    }

    public function store(BreederRegistrationRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();

        $user->update([
            'kennel_name' => $data['kennel_name'],
            'company_name' => $data['fullname'],
            'company_email_address' => $data['email'],
            'company_phone' => $data['phone'],
            'company_city_id' => $data['city_id'],
            'company_state_id' => $data['state_id'],
            'company_established_on' => $data['established_date'],
            'company_zip_code' => $data['zip_code'],
            'company_about' => $data['about_company'],
            'has_usda_registration' => $data['has_usda_registration'] == 'yes' ? true : false

        ]);

        $user->breeds()->attach($data['breeds']);


        collect($data['gallery'])->each(function ($image) use ($user) {
            $user->addMedia($image)->toMediaCollection('gallery');
        });



        $user->addMedia(collect($data['videos'])->first())->toMediaCollection('videos');

        $user->addMedia($data['company_logo'])->toMediaCollection('company_logo');

        /* if (!$request->user()->is_subscribed && $request->user()->puppies()->count() == 1) { */
        /* return redirect()->to(route('plans.index'))->with([ */
        /*     'message.success' => 'Subscribe to any plan to activate your listing' */
        /* ]); */
        /* } */


        return redirect()->to(route('plans.breeder'))->with([
            'message.success' => 'Subscribe to activate your breeders account'
        ]);

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

        if ($breeder->is_breeder == false) {
            return redirect()->back()->with([
                'message.error' => 'This user is not a breeder'
            ]);
        }


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

        $puppies = $breeder->puppies()->with(['breeds:id,name,slug','seller', 'media', 'favorites'])->limit(3)->get();

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
