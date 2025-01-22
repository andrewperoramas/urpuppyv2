<?php

namespace App\Http\Controllers;

use App\Data\BreedData;
use App\Data\PuppyCardData;
use App\Data\PuppyData;
use App\Data\PuppySiblingData;
use App\Data\StateData;
use App\Filter\FilterAge;
use App\Filter\FilterBreeds;
use App\Filter\FilterPrice;
use App\Filter\FilterGender;
use App\Filter\FilterState;
use App\Http\Resources\FeaturedBreedResource;
use App\Models\Breed;
use App\Models\Puppy;
use App\Models\SavedSearch;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PuppyController extends Controller
{
    public function index(Request $request)
    {
        /* dd($request->all()); */

        /* dd(request()->all()); */
        /* $mergedData = collect(request()->get('payload'))->reduce(function ($carry, $item) { */
    /* foreach ($item as $key => $value) { */
        /* if (isset($carry[$key])) { */
        /*     $carry[$key] = is_array($carry[$key]) ? array_merge($carry[$key], (array) $value) : [$carry[$key], (array) $value]; */
        /* } else { */
        /*     $carry[$key] = $value; */
        /* } */
    /* } */
    /* return $carry; */
/* }, []); */

        $puppies = QueryBuilder::for(Puppy::class)
            ->select([
                'id', 'user_id', 'name', 'price', 'birth_date', 'slug',
                'gender', 'created_at',
                'view_count', 'is_featured', 'description',
            ])
            ->with([
                'breeds:id,name,slug',
                'seller:id,first_name,email,phone,last_name,state_id,city_id,created_at,slug,is_breeder',
                'favorites',
                'media',
                'seller.state:id,name,abbreviation',
                'seller.city:id,name',
            ])
            ->allowedFilters([
            /* AllowedFilter::exact('breeds.name', null, false), */
            AllowedFilter::custom('breed', new FilterBreeds),
            AllowedFilter::custom('age', new FilterAge),
            AllowedFilter::custom('state', new FilterState),
            AllowedFilter::custom('price', new FilterPrice),
            AllowedFilter::custom('gender', new FilterGender),
                'name', // Allows filtering by name
                /* 'price', // Allows filtering by price if needed */
            ])
            ->hasSubscribedUsers()
            ->latest()
            ->paginate(12);

        if ($request->user()) {

        $payload = $request->all(); // Convert payload to JSON string


        /* $convert_payload = json_encode($payload); */

        /* /1* dd($convert_payload); *1/ */

        /* $exists = $request->user()->saved_searches() */
        /*     ->whereRaw('payload::jsonb = ?', [$convert_payload]) // Typecast payload for PostgreSQL */
        /*     ->exists(); */

        /* /1* dd($exists); *1/ */

        /* if (!$exists) { */
        /*     $request->user()->saved_searches()->create([ */
        /*         'payload' => $payload, */
        /*     ]); */
        /* } */


        if (auth()->user()) {
    $user_favorites = auth()->user()->favorites()->pluck('favoriteable_id');
}

    $puppies->getCollection()->transform(function ($puppy) use ($user_favorites) {
        if (isset($user_favorites) && $user_favorites->contains($puppy->id)) {
            $puppy->is_favorite = true;
        }
        return $puppy;
    });



}




         /* try { */

        /*     $puppies = PuppyData::collect($puppies); */
        /*     /1* dd($puppies); *1/ */
        /* } catch (\Exception $e) { */

        /*     /1* dd($e->getMessage()); *1/ */

        /* } */
        /* dd($puppies); */

        /* dd($puppies->toArray()['data']); */

        $states = State::select(['id', 'name'])
                ->whereHas('country', function ($query) {
                    $query->where('country_code', 'US');
                })
                ->orderBy('name')
                ->get()->map(function ($state) {
                    $state->name = ucwords($state->name);

                    return $state;
                });

        return inertia()->render('Puppy/Index', [
            'breeds' => BreedData::collect(Breed::query()->get()),
            'states' =>  StateData::collect($states),
            'puppies' => PuppyData::collect($puppies),
            'has_search' => count($request->all()),
        'breed_filter_list' => inertia()->optional(fn () =>
                Breed::select(['name'])->distinct()->orderBy('name')->pluck('name')
            ) ,
        'state_filter_list' => inertia()->optional(fn () =>
                State::select(['name'])->distinct()->orderBy('name')->pluck('name')
            ) ,

        ]);
    }

    public function show(Request $request, string $slug)
    {
        /* if (! $request->user()->is_seller ) { */
        /*     return redirect()->route('home')->with([ */
        /*         'message.error' => 'This puppy is not available', */
        /*     ]); */
        /* } */
        /* dd($slug); */
        // Fetch the primary puppy data
        try {

        $puppy = Puppy::with([
            'breeds',
            /* 'attributes', */
            'seller',
            /* 'breeder.attributes', */
            'seller.state',
            'puppy_colors',
            'puppy_traits',
            'siblings',
            'puppy_patterns',
            'seller.city',
            'comments' => function ($query) {
                $query->orderByDesc('created_at');
            },
            'comments.breeder',
        ])->hasSubscribedUsers()->where('slug', $slug)->firstOrFail();


        /* if ($puppy) */

        if ( auth()->user()) {
            $user_favorites = auth()->user()->favorites()->pluck('favoriteable_id');

        if (in_array($puppy->id, $user_favorites->toArray())){
            $puppy->is_favorite = true;
        }
        }




        // Log view on deferred execution
        defer(function () use ($puppy) {
            $puppy->logView();
        });

        // Cache the featured puppies for 30 minutes (1800 seconds)
        $featuredPuppies = Cache::remember('featured_puppies', 1800, function () {
            return Puppy::with('breeds', 'media', 'seller')
                ->inRandomOrder()
                ->limit(5)
                ->get();
        });

        $featured_breeds = FeaturedBreedResource::collection(Breed::withCount('puppies')->orderByDesc('puppies_count')->take(10)->get());

        $related_puppies = [];

        if ($puppy->breeds) {
            $related_puppies = Puppy::with('breeds', 'media', 'seller')
                ->whereHas('breeds', function ($query) use ($puppy) {
                    $query->whereIn('breeds.id', $puppy->breeds->pluck('id'));
                })
                ->where('id', '!=', $puppy->id)
                ->inRandomOrder()
                ->limit(4)
                ->get();
        }

/*             $siblings = Puppy::with('breeds', 'media', 'breeder') */
/*                 ->where('id', '!=', $puppy->id) */
/*                 ->inRandomOrder() */
/*                 ->limit(4) */
/*                 ->get(); */


        return inertia()->render('Puppy/Show', [
            'featured_puppies' => $featuredPuppies,
            'siblings'  => PuppySiblingData::collect($puppy->siblings()->with('media')->get()),
            'featured_breeds' => $featured_breeds,
            'related_puppies' => PuppyCardData::collect(Puppy::with('breeds', 'media', 'seller')->hasSubscribedUsers()->where('id', '!=', $puppy->id)->inRandomOrder()->limit(4)->get()),
            'puppy' => PuppyData::from($puppy),
        ]);

        } catch (\Exception $e) {
            return redirect()->route('home')->with([
                'message.error' => 'This puppy is not available',
            ]);
        }

        /* ->title($puppy->name.' - Urpuppy') */
        /* ->ogLocale('en_US') */
        /* ->description($puppy?->description ?? '') */
        /* ->ogTitle($puppy->name.' - Urpuppy') */
        /* ->ogDescription($puppy?->description ?? '') */
        /* ->ogType('website') */
        /* ->ogImage($puppy->image) */
        /* ->ogUrl(route('puppies.show', $puppy->slug)) */
        /* ->twitterCard('summary_large_image') */
        /* ->twitterTitle($puppy->name.' - Urpuppy') */
        /* ->twitterSite('@urpuppy') */
        /* ->twitterImage($puppy->image) */
        /* ->twitterDescription($puppy?->description ?? ''); */
    }
}
