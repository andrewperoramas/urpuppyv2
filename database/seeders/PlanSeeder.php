<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // FREE ACCOUNT
        Plan::create([
            'name' => 'Free Account',
            'price' => 2499,
            'type' => 'free',
            'interval' => 'month',
            'trial_days' => 3,
            'active' => true,
            'listing_limit' => 10,
            'image_per_listing' => 5,
            'video_per_listing' => 1,
            'is_featured' => false,
        ]);

        // STANDARD PACKAGE
        Plan::create([
            'name' => 'Standard Package',

            'type' => 'premium',
            'price' => 2499,
            'interval' => 'month',
            'trial_days' => 0,
            'active' => true,
            'listing_limit' => 10,
            'image_per_listing' => 5,
            'video_per_listing' => 1,
            'is_featured' => true,
        ]);

        // PREMIUM PACKAGE
        Plan::create([
            'name' => 'Premium Package',

            'type' => 'premium',
            'price' => 6999,
            'interval' => 'month',
            'interval_count' => 3,
            'active' => true,
            'trial_days' => 0,
            'listing_limit' => 10,
            'image_per_listing' => 5,
            'video_per_listing' => 1,
            'is_featured' => true,
        ]);

        // BREEDER SPECIAL
        Plan::create([
            'name' => 'Breeder Special',
            'price' => 17999,
            'interval' => 'year',
            'type' => 'breeder',
            'trial_days' => 0,
            'active' => true,
            'listing_limit' => null,
            'image_per_listing' => 5,
            'video_per_listing' => 1,
            'is_featured' => true,
        ]);

    }
}
