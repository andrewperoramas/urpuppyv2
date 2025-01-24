<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
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

                VerifyEmail::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage)
                ->subject('New User')
                ->greeting('Hi! '. $notifiable->full_name)

                ->line('Thank you for signing up with UrPuppy.com! To complete your registration, please verify your email address by clicking the button below:')

                ->action('Verify Your Account', $url)
                ->line('If the button doesn’t work, you can also copy and paste the following link into your browser:' . $url)

                ->line('This step helps us ensure your account is secure and ready to go. If you didn’t sign up for an account with UrPuppy.com, please disregard this email.')
                ->line('Thank you for choosing UrPuppy.com!');
        });
    }
}
