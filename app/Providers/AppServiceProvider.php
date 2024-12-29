<?php

namespace App\Providers;

use App\Models\User;
use Spatie\SchemaOrg\Schema;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);


        Gate::define('viewPulse', function (User $user) {
            return in_array($user->email, [
                'admin@urpuppy.com',
            ]);
        });

        Gate::define('viewLogViewer', function (User $user) {
            return in_array($user->email, [
                'admin@urpuppy.com',
            ]);
        });
    }
}
