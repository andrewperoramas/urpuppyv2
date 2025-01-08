<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class SiblingData extends Data
{

    public function __construct(
       #[MapInputName('id')]
        public int $value,
       #[MapInputName('name')]
        public string $label,
    ) {


    }
}
