<?php

namespace App\Data;

use Spatie\LaravelData\DataCollection;
use App\Enum\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class SavedSearchData extends Data
{

    public function __construct(
        public int $id,
        public ?string $name,
        public array $payload,
        public string $created_at,
        /* public string $image, */
        /* public string $gender, */
    ) {

    }
}

