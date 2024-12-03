<?php

namespace App\Http\Controllers;

use App\Data\PuppyData;
use App\Filter\FilterBreeds;
use App\Http\Resources\FeaturedBreedResource;
use App\Models\Breed;
use App\Models\Puppy;
use Illuminate\Support\Facades\Cache;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PuppyController extends Controller
{
    public function index()
    {

        /* dd(request()->all()); */
        $puppies = QueryBuilder::for(Puppy::class)
            ->select([
                'id', 'user_id', 'name', 'price', 'birth_date', 'slug',
                'is_ready_to_travel', 'gender', 'created_at',
                'view_count', 'is_featured', 'description',
            ])
            ->with([
                'breeds:id,name,slug',
                'breeder:id,first_name,last_name,state_id,city_id,created_at,slug',
                'favorites',
                'media',
                'breeder.state:id,name',
                'breeder.city:id,name',
            ])
            ->allowedFilters([
            /* AllowedFilter::exact('breeds.name', null, false), */
            AllowedFilter::custom('breeds', new FilterBreeds),
                'name', // Allows filtering by name
                'price', // Allows filtering by price if needed
            ])
            ->latest()
            ->paginate(12);

        /* try { */

        /*     $puppies = PuppyData::collect($puppies); */
        /*     /1* dd($puppies); *1/ */
        /* } catch (\Exception $e) { */

        /*     /1* dd($e->getMessage()); *1/ */

        /* } */
        /* dd($puppies); */

        /* dd($puppies->toArray()['data']); */

        return inertia()->render('Puppy/Index', [
            'puppies' => PuppyData::collect($puppies),
        ]);
    }

    public function show(string $slug)
    {
        /* dd($slug); */
        // Fetch the primary puppy data
        $puppy = Puppy::with([
            'breeds',
            /* 'attributes', */
            'breeder',
            /* 'breeder.attributes', */
            'breeder.state',
            'puppy_colors',
            'puppy_traits',
            'puppy_patterns',
            'breeder.city',
            'comments' => function ($query) {
                $query->orderByDesc('created_at');
            },
            'comments.breeder',
        ])->where('slug', $slug)->firstOrFail();

        // Log view on deferred execution
        defer(function () use ($puppy) {
            $puppy->logView();
        });

        // Cache the featured puppies for 30 minutes (1800 seconds)
        $featuredPuppies = Cache::remember('featured_puppies', 1800, function () {
            return Puppy::with('breeds', 'media', 'breeder')
                ->inRandomOrder()
                ->limit(5)
                ->get();
        });

        $featured_breeds = FeaturedBreedResource::collection(Breed::withCount('puppies')->orderByDesc('puppies_count')->take(10)->get());

        $related_puppies = [];

        if ($puppy->breeds) {
            $related_puppies = Puppy::with('breeds', 'media', 'breeder')
                ->whereHas('breeds', function ($query) use ($puppy) {
                    $query->whereIn('breeds.id', $puppy->breeds->pluck('id'));
                })
                ->where('id', '!=', $puppy->id)
                ->inRandomOrder()
                ->limit(3)
                ->get();
        }

        /* dd($puppy); */

        return inertia()->render('Puppy/Show', [
            'featured_puppies' => $featuredPuppies,
            'featured_breeds' => $featured_breeds,
            'related_puppies' => $related_puppies,
            'puppy' => $puppy,
        ]);

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
