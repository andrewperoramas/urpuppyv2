<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Country;
use App\Models\State;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Configure the factory's behavior.
     */
    public function configure(): static
    {
        try {

            return $this->afterCreating(function (User $user) {
                // Use base_path() to access root-level directories
                $avatars = File::files(base_path('tests/test-avatars'));

                if (empty($avatars)) {
                    /* $this->command->warn('No avatars found in test/test-avatars'); */
                    return;
                }

                $avatar = $avatars[array_rand($avatars)];

                $user->addMedia($avatar->getPathname())
                    ->preservingOriginal()
                    ->toMediaCollection('avatars');

                /* $user->assignRole('seller'); */
                /* $user->assignRole('buyer'); */
            });

        } catch (Exception $e) {

        }
    }

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        $country = Country::query()->where('iso2', 'US')->first();
        if ($country == null) {
            /* $country = Country::factory()->create([ */
            /*     'name' => 'united states', */
            /* ]); */
        }
        /* $state = State::query()->where('country_id', $country->id)->inRandomOrder()->first(); */

        /* if ($state == null) { */
        /*     $state = State::factory()->create([ */
        /*         'country_id' => fn () => $country->id, */
        /*     ]); */

        /* } */

        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'state_id' => null,
            /* 'city_id' => , */
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
