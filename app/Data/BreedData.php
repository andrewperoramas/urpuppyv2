<?php

namespace App\Data;

use App\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class BreedData extends Data
{

    public function __construct(
        public string $name,
        public string $slug,
        public string $image,

    ) {


    }
}

