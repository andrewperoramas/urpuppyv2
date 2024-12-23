<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class BreedDataCollection extends Data
{
    public function __construct(
        public string $name
    ) {

    }
}
