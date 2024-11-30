<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PlanFeature extends Data
{

    public function __construct(
        public string $name,
        public bool $active,
    ) {


    }
}

