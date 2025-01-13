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
        public CityData $city,
        public StateData $state,
        public string $address,
        public ?string $email_verified_at,
        public string $member_since,
    ) {


    }
}

