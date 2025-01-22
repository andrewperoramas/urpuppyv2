<?php

namespace App\Data;

use App\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;




#[TypeScript]
class UserData extends Data
{

    public function __construct(
        public int $id,
        public string $full_name,
        public string $first_name,
        public string $last_name,
        public string $avatar,
        public string $slug,
        public string $email,
        public ?CityData $city,
        public ?StateData $state,
        public ?string $zip_code,
        public string $address,
        public string $initial_name,
        public ?string $email_verified_at,
        public string $member_since,
        public ?string $social_fb,
        public ?string $social_ig,
        public ?string $social_tiktok,
        public ?string $social_x,
        public bool $enable_notification,
        public ?SubscriptionData $premium_plan,
        public ?SubscriptionData $breeder_plan,
    ) {


    }
}

