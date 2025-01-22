<?php

use App\Data\PuppyCardData;
use App\Models\Puppy;

if (!function_exists('guest_puppy')) {
    function guest_puppy() : PuppyCardData {
        return PuppyCardData::optional(Puppy::with(['breeds', 'seller'])->whereHas('seller')->whereHas('breeds')->inRandomOrder()->first());
    }
}


