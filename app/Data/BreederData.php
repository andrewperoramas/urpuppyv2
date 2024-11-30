<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class BreederData extends Data
{

    public function __construct(
        public string $name,
        public string $gender,
        public string $slug,
        public string $address,
    ) {


    }
}

