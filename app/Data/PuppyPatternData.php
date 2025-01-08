<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PuppyPatternData extends Data
{
    public function __construct(
        public int $amount,
        public string $currency,
        public string $formatted,
    ) {


    }
}
