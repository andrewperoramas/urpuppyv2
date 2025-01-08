<?php

namespace App\Http\Controllers;

use App\Http\Resources\BreedResource;
use App\Models\Breed;
use App\Models\City;
use App\Models\Puppy;
use App\Models\State;
use App\PuppyStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        /* $uniqueBreedIds = Cache::remember('unique_breed_ids', 30, function () { */
        /*     return DB::table('puppies')->select('breed_id')->distinct()->pluck('breed_id'); */
        /* }); */

        $breeds = Cache::remember('breeds_list', now()->addDays(3), function () {
            return BreedResource::collection(
                Breed::select(['id', 'name', 'slug'])
                    ->orderBy('name')
                    ->get()
            );
        });

        $states = Cache::remember('state_list', now()->addDays(3), function () {
            return State::select(['id', 'name'])
                ->whereHas('country', function ($query) {
                    $query->where('iso2', 'US');
                })
                ->orderBy('name')
                ->get()->map(function ($state) {
                    $state->name = ucwords($state->name);

                    return $state;
                });
        });

        $minPrice = Cache::remember('min_price', 30, fn () => Puppy::min('price') / 100);
        $maxPrice = Cache::remember('max_price', 30, function () {
            $max = Puppy::max('price') / 100;

            return $max > 0 ? $max : 10000;
        });

        if ($minPrice == $maxPrice) {
            $maxPrice += 2000;
        }

        /* dd($minPrice, $maxPrice); */

        $searchQuery = $request->input('query.searchQueryFilter');
        $breedFilter = $request->input('query.breedQueryFilter');
        $priceFilter = $request->input('query.priceQueryFilter');
        $locationFilter = $request->input('query.locationQueryFilter');
        $ageFilter = $request->input('query.ageQueryFilter');
        $stateFilter = $request->input('query.stateQueryFilter');
        $genderFilter = $request->input('query.genderQueryFilter');
        $travelFilter = $request->input('query.travelQueryFilter');
        $sortFilter = $request->input('query.sortQueryFilter');
        $page = $request->input('page');

        $cacheKey = 'puppies_'.md5(json_encode([
            $searchQuery, $breedFilter, $priceFilter, $locationFilter,
            $ageFilter, $genderFilter, $travelFilter, $sortFilter, $stateFilter, $page,
        ]));

        $puppies = Cache::remember($cacheKey, 30, function () use (
            $searchQuery, $breedFilter, $priceFilter, $locationFilter,
            $ageFilter, $genderFilter, $travelFilter, $sortFilter, $stateFilter
        ) {

            return Puppy::query()
                ->select(['id', 'user_id', 'name', 'price', 'birth_date', 'slug', 'gender', 'created_at', 'view_count', 'is_featured', 'description'])
                ->with([
                    'breeds:id,name,slug',
                    'breeder:id,first_name,last_name,state_id,city_id,created_at,slug',
                    'favorites',
                    'media', // Load media relationship
                    'breeder.state:id,name', // Explicitly load state relationship
                    'breeder.city:id,name',   // Explicitly load city relationship
                ])
                ->where('status', PuppyStatus::PUBLISHED)
                ->when($searchQuery, function ($query) use ($searchQuery) {
                    $puppyIds = Puppy::search($searchQuery)->keys();
                    $query->whereIn('id', $puppyIds);
                })
                ->when($breedFilter, function ($query) use ($breedFilter) {
                    $query->whereHas('breeds', function ($query) use ($breedFilter) {
                        $query->whereIn('breeds.id', $breedFilter); // Qualify the "id" column with the table name
                    });
                })

                ->when($stateFilter, function ($query) use ($stateFilter) {
                    $query->whereHas('breeder', function ($query) use ($stateFilter) {
                        $query->whereHas('state', fn ($q) => $q->whereIn('id', $stateFilter));
                    });
                })
                ->when($sortFilter, function ($query, $sortFilter) {
                    return match ($sortFilter) {
                        'price_low_to_high' => $query->orderBy('is_featured', 'desc')->orderBy('price', 'asc'),
                        'price_high_to_low' => $query->orderBy('is_featured', 'desc')->orderBy('price', 'desc'),
                        'age_old_to_young' => $query->orderBy('is_featured', 'desc')->orderBy('birth_date', 'asc'),
                        'age_young_to_old' => $query->orderBy('is_featured', 'desc')->orderBy('birth_date', 'desc'),
                        default => $query->orderBy('is_featured', 'desc')->orderBy('created_at', 'desc'),
                    };
                })
                ->when($ageFilter, function ($query, $ageFilter) {
                    $back = now()->subWeeks($ageFilter === 'old' ? 100000 : $ageFilter);
                    $query->whereBetween('birth_date', [$back, now()]);
                })
                ->when($genderFilter, fn ($query) => $query->where('gender', $genderFilter))
                ->when($priceFilter, function ($query) use ($priceFilter) {
                    $priceFilter = collect($priceFilter)->map(fn ($price) => $price * 100);
                    $query->whereBetween('price', $priceFilter);
                })
                ->when($locationFilter, function ($query) use ($locationFilter) {
                    $states = State::search($locationFilter)->keys();
                    $cities = City::search($locationFilter)->keys();

                    $query->whereHas('breeder', function ($query) use ($states, $cities) {
                        $query->whereHas('city', fn ($q) => $q->whereIn('id', $cities))
                            ->orWhereHas('state', fn ($q) => $q->whereIn('id', $states));
                    });
                })
                ->latest()
                ->paginate(12) // Ensure paginate is called here
                ->onEachSide(4);

        });

        /* $query = $request->query()['query']['breedQueryFilter'] = @$request->query()['query']['breedQueryFilter']; */

        $queryParams = @$request->query()['query'];

        if (isset($queryParams['breedQueryFilter']) && is_array($queryParams['breedQueryFilter'])) {
            $queryParams['breedQueryFilter'] = array_map('intval', $queryParams['breedQueryFilter']);
        }

        if (isset($queryParams['stateQueryFilter']) && is_array($queryParams['stateQueryFilter'])) {
            $queryParams['stateQueryFilter'] = array_map('intval', $queryParams['stateQueryFilter']);
        }

        if (isset($queryParams['priceQueryFilter']) && is_array($queryParams['priceQueryFilter'])) {
            $queryParams['priceQueryFilter'] = array_map('intval', $queryParams['priceQueryFilter']);
        }

        /* dd($queryParams); */

        /* if (isset($page)) { */
        /*     $queryParams['page'] = $page; */
        /* } */
        /* $queryParams['query'] = $request->query()['query'] ?? []; */
        /* $queryParams['page'] = (int) $page ?? 1; */

        return Inertia::render('Home', [
            'puppies' => $puppies,
            'breeds' => $breeds,
            'states' => $states,
            'queryParams' => $queryParams,
            /* 'page' => $page, */
            'minPrice' => (int) $minPrice,
            'maxPrice' => (int) $maxPrice,
        ])
            ->title('Home')
            ->description('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.')
            ->image(asset('logo.png'))
            ->ogTitle('Home')
            ->ogDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.')
            ->ogImage(asset('logo.png'))
            ->ogUrl(route('home'))
            ->twitterTitle('Home')
            ->twitterSite('@urpuppy')
            ->twitterImage(asset('logo.png'))
            ->twitterDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.');

    }
}
