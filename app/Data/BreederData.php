<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class BreederData extends Data
{

    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $slug,
        public string $address,
    ) {


    }
}

