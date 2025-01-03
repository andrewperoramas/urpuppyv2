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
        public string $full_name,
        public string $avatar,
        public string $slug,
        public string $email,
        public string $address,
        public ?string $email_verified_at,
        public string $member_since,
    ) {


    }
}

