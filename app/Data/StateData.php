<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class StateData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
    ) {


    }
}
