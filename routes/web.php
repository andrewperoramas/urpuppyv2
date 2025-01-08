<?php

use App\Data\BreedData;
use App\Data\BreederData;
use App\Data\BreederFullData;
use App\Data\PuppyData;
use App\Http\Controllers\BreedController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\BreederController;
use App\Http\Controllers\BreederListingController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuppyController;
use App\Models\Breed;
use App\Models\Plan;
use App\Models\Puppy;
use App\Models\State;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Stripe\PaymentIntent;
use Stripe\Stripe;

Route::get('adi', function () {
    dd(State::first());
});


Route::post('/create-intent', function (Request $request) {
    try {
        // Retrieve the user and the selected plan
        $user = $request->user();
        $plan = Plan::findOrFail($request->plan_id);

        // Set up Stripe API key
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // Create a SetupIntent for the user
        $setupIntent = $user->createSetupIntent();

        // Respond with the client secret of the SetupIntent
        return response()->json([
            'client_secret' => $setupIntent->client_secret,
            'plan_id' => $request->plan_id,
        ]);
    } catch (\Exception $e) {
        // Handle exceptions and return an error response
        return response()->json([
            'error' => $e->getMessage(),
        ], 500);
    }
});

Route::post('/complete-subscription', function (Request $request) {
    $user = $request->user();
    $paymentMethod = $request->payment_method; // Retrieve from the frontend
    $plan = Plan::findOrFail($request->plan_id);

    $user->updateDefaultPaymentMethod($paymentMethod);

    $user->newSubscription('standard', $plan->stripe_plan_id)
         ->create($paymentMethod);

    return response()->json(['success' => true]);
});




Route::get('/', function () {

    $top_picks = Puppy::with('breeds', 'breeder')->inRandomOrder()->first();




    $spotlights = PuppyData::collect(Puppy::with('breeds', 'breeder')->inRandomOrder()->take(4)->get());

    $new = PuppyData::collect(Puppy::with('breeds:name,slug', 'breeder')->inRandomOrder()->take(4)->get());

    if ( auth()->user()) {
        $user_favorites = auth()->user()->favorites()->pluck('favoriteable_id');

    if ($top_picks != null) {
      $top_picks = PuppyData::from($top_picks);

            if (in_array($top_picks->id, $user_favorites->toArray())){

                $top_picks->is_favorite = true;
            }
    }

    $spotlights->map(function ($puppy) use ($user_favorites) {

            if (in_array($puppy->id , $user_favorites->toArray())){

                $puppy->is_favorite = true;
            }
    });

    $new->map(function ($puppy) use ($user_favorites) {

            if (in_array($puppy->id , $user_favorites->toArray())){

                $puppy->is_favorite = true;
            }
    });

    }


    return Inertia::render('Home/Index', [
        'breed_filter_list' => inertia()->optional(fn () =>
                Breed::select(['name'])->distinct()->orderBy('name')->pluck('name')
            ) ,
        /* 'favorites' => auth()->user() ? auth()->user()->favorites()->pluck('favoriteable_id') : [], */

        'state_filter_list' => inertia()->optional(fn () =>
                State::select(['name'])->distinct()->orderBy('name')->pluck('name')

            ) ,
        'top_pick_puppy' => $top_picks,

        'puppy_spotlights' => $spotlights ,
        'trusted_breeders' => BreederFullData::collect(User::with(['breeds' => fn ($q) => $q->select('name') ])->breeders()->take(4)->inRandomOrder()->get()),
        'new_arrivals' => $new,
        'featured_breeds' => BreedData::collect(Breed::with('media')->inRandomOrder()->take(8)->get()),

        /* 'canLogin' => Route::has('login'), */
        /* 'canRegister' => Route::has('register'), */
        /* 'laravelVersion' => Application::VERSION, */
        /* 'phpVersion' => PHP_VERSION, */
    ]);
})->name('home');

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


Route::middleware('auth')->group(function () {

Route::group(['prefix' => 'plans'], function () {
    Route::get('/', [PlanController::class, 'index'])->name('plans.index');
    Route::get('/breeder', [PlanController::class, 'breeder'])->name('plans.breeder');
});

});

Route::group(['prefix' => 'breeds'], function () {
    Route::get('/', [BreedController::class, 'index'])->name('breeds.index');
    Route::get('/{slug}', [BreedController::class, 'show'])->name('breeds.show');
});

Route::group(['prefix' => 'breeders'], function () {
    Route::get('/', [BreederController::class, 'index'])->name('breeders.index');
    Route::get('create', [BreederController::class, 'create'])->name('breeders.create');
    Route::get('/{slug}', [BreederController::class, 'show'])->name('breeders.show');
});

Route::group(['prefix' => 'favorites'], function () {

    Route::get('/', [FavoriteController::class, 'index'])->name('favorites.index');
    Route::patch('{puppy}', FavoriteController::class)->name('favorite.toggle');

});

Route::group(['prefix' => 'subscriptions'], function () {

    Route::get('/', [SubscriptionController::class, 'index'])->name('subscriptions.index');
    Route::delete('/', [SubscriptionController::class, 'destroy'])->name('subscriptions.cancel');

});

Route::post('/comment/{seller}', [CommentController::class, 'store'])->name('comment.store');

Route::group(['prefix' => 'checkout'], function () {

    Route::get('{plan_id}', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::get('/', CheckoutController::class)->name('checkout.pay');
    Route::post('/complete', [CheckoutController::class, 'complete'])->name('checkout.complete');
    Route::get('/payment-methods', [CheckoutController::class, 'payment_methods'])->name('checkout.payment_methods');
    Route::get('success', [CheckoutController::class, 'success'])->name('checkout.success');



    Route::get('subscription/success', [CheckoutController::class, 'success'])->name('subscription.success');

});

Route::group(['prefix' => 'seller'], function () {
    Route::get('create', [SellerController::class, 'create'])->name('seller.create');
    Route::post('store', [SellerController::class, 'store'])->name('seller.store');
});

Route::middleware(['auth', 'role:super_admin'])->group(function () {

    Route::get('filemanager', function () {
        return view('filemanager');
    });

});

Route::group(['prefix' => 'breeder-listings'], function () {
    Route::get('/', [BreederListingController::class, 'index'])->name('breeder_listings.index');

    Route::get('/create', [BreederListingController::class, 'create'])->name('breeder_listings.create');

    Route::post('/', [BreederListingController::class, 'store'])->name('breeder_listings.store');

    Route::put('/', [BreederListingController::class, 'update'])->name('breeder_listings.update');

    Route::get('/{slug}', [BreederListingController::class, 'show'])->name('breeder_listings.show');

});


Route::get('/contact-us', [ContactUsController::class, 'index']);
Route::get('/privacy-policy', [PrivacyPolicyController::class, 'index']);
Route::get('/terms-of-use', [PrivacyPolicyController::class, 'terms']);

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
