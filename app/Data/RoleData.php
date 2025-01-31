<?php

namespace App\Data;

use Spatie\LaravelData\DataCollection;
use App\Enum\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class RoleData extends Data
{

    public function __construct(
        /** @var string[] */
        public string $name,

    ) {

    }
}

