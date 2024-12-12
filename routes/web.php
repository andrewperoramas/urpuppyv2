<?php

use App\Http\Controllers\BreedController;
use App\Http\Controllers\BreederController;
use App\Http\Controllers\BreederListingController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuppyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('adi', function () {
    dd('adixhanxx');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'users' => Inertia::optional(
            function () {
                sleep(10);
                return 'bertud';
            }
        ),


        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/ui/{path?}', function ($path = null) {
    $storybookPath = public_path();

    $filePath = $storybookPath . ($path ? '/' . $path : '/index.html');

    if (! file_exists($filePath)) {
        abort(404);
    }

    return response()->file($filePath);
})->where('path', '.*');

Route::group(['prefix' => 'puppies'], function () {
    Route::get('/', [PuppyController::class, 'index'])->name('puppies.index');
    Route::get('/{slug}', [PuppyController::class, 'show'])->name('puppies.show');
});

Route::group(['prefix' => 'plans'], function () {
    Route::get('/', [PlanController::class, 'index'])->name('plans.index');
    /* Route::get('/{slug}', [BreedController::class, 'show'])->name('breeds.show'); */
});

Route::group(['prefix' => 'breeds'], function () {
    Route::get('/', [BreedController::class, 'index'])->name('breeds.index');
    Route::get('/{slug}', [BreedController::class, 'show'])->name('breeds.show');
});

Route::group(['prefix' => 'breeders'], function () {
    Route::get('/', [BreederController::class, 'index'])->name('breeders.index');
    Route::get('/{slug}', [BreederController::class, 'show'])->name('breeders.show');
});

Route::group(['prefix' => 'favorites'], function () {

    Route::get('/', [FavoriteController::class, 'index'])->name('favorites.index');

});

Route::group(['prefix' => 'subscriptions'], function () {

    Route::get('/', [SubscriptionController::class, 'index'])->name('subscriptions.index');

});

Route::group(['prefix' => 'breeder-listings'], function () {
    Route::get('/', [BreederListingController::class, 'index'])->name('breeder_listings.index');

    Route::get('/create', [BreederListingController::class, 'create'])->name('breeder_listings.create');

    Route::post('/', [BreederListingController::class, 'store'])->name('breeder_listings.store');

    Route::put('/', [BreederListingController::class, 'update'])->name('breeder_listings.update');

    Route::get('/{slug}', [BreederListingController::class, 'show'])->name('breeder_listings.show');

});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

/* Auth::routes(); */

/* Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); */
