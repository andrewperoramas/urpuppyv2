<?php

namespace App\Http\Controllers;

use App\Http\Resources\BreedResource;
use App\Models\Breed;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class BreedController extends Controller
{
    public function index()
    {
        $breeds = Cache::remember('breeds_cache', Carbon::now()->addHours(12), function () {
            return BreedResource::collection(
                Breed::select(['id', 'name', 'slug'])
                    ->orderBy('name')
                    ->get()
            );
        });
        /* dd('adi'); */

        return inertia()->render('Breed/Index', [
            'breeds' => $breeds,
        ]);
            /* ->title('Breeds') */
            /* ->description('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.') */
            /* ->image(asset('logo.png')) */
            /* ->ogTitle('Breeds') */
            /* ->ogDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.') */
            /* ->ogImage(asset('logo.png')) */
            /* ->ogUrl(route('breeds.index')) */
            /* ->twitterTitle('Breeds') */
            /* ->twitterSite('@urpuppy') */
            /* ->twitterImage(asset('logo.png')) */
            /* ->twitterDescription('Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure.'); */
    }

    public function show(string $slug)
    {
        // Cache individual breed by slug for 12 hours using Carbon
        $breed = Cache::remember("breed_cache_{$slug}", Carbon::now()->addHours(12), function () use ($slug) {
            return Breed::query()->where('slug', $slug)->firstOrFail();
        });

        return inertia()->render('Breed/Show', [
            'breed' => $breed,
        ]);
            /* ->title($breed->name) */
            /* ->description($breed->description ?? "Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure." ) */
            /* ->image($breed->thumbnail ?? asset('logo.png')) */
            /* ->ogTitle($breed->name) */
            /* ->ogDescription($breed->description ?? "Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure." ) */
            /* ->ogImage($breed->thumbnail ?? asset('logo.png')) */
            /* ->ogUrl(route('breed.show', $breed->slug)) */
            /* ->twitterTitle($breed->name) */
            /* ->twitterSite('@urpuppy') */
            /* ->twitterImage($breed->thumbnail ?? asset('logo.png')) */
            /* ->twitterDescription($breed->description ?? "Find your perfect puppy! Discover diverse dog breeds, connect with trusted breeders, and register as a buyer or breeder to make pet ownership easy and secure." ); */

    }
}
