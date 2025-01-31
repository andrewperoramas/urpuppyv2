<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Spatie\SchemaOrg\Schema;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\URL;
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

                  VerifyEmail::createUrlUsing(function ($notifiable) {
                    return URL::temporarySignedRoute(
                        'verification.verify',
                        now()->addMinutes(60), // Expiry time
                        [
                            'id' => $notifiable->getKey(),
                            'hash' => sha1($notifiable->getEmailForVerification()),
                            'role' => $notifiable->roles->first(),
                        ]
                    );
                });

                VerifyEmail::toMailUsing(function ($notifiable, $url) {

                $roles = $notifiable->roles;

                if ($roles->contains('buyer')) {

                    /* $url = $url . '&role=buyer'; */
                     $mail =  (new MailMessage)
                    ->subject('New Buyer')
                    ->greeting('Hi! '. $notifiable->full_name)


                    ->action('Verify Your Account', $url)

                    ->line('Thank you for choosing UrPuppy.com!');
                }  else if ($roles->contains('seller')) {

                    /* $url = $url . '&role=seller'; */
                    $mail =  (new MailMessage)
                    ->subject('New Seller')
                    ->greeting('Hi! '. $notifiable->full_name)
                    ->action('Verify Your Account', $url)
                    ->line('Thank you for choosing UrPuppy.com!');
                } else if ($roles->contains('breeder')) {

                    /* $url = $url . '&role=breeder'; */
                    $mail =  (new MailMessage)
                    ->subject('New Breeder')
                    ->greeting('Hi! '. $notifiable->full_name)
                    ->action('Verify Your Account', $url)
                    ->line('Thank you for choosing UrPuppy.com!');
                }

                return $mail;
        });
    }
}
