<?php

namespace App\Data;

use Spatie\LaravelData\DataCollection;
use App\Enum\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PuppyCardData extends Data
{

    public function __construct(
        public int $id,
        public string $name,
        public string $slug,
        public string $image,
        public string $gender,
        public string $formatted_price,
        public ?bool $is_favorite,
        public ?bool $is_new,
        public string $age,
        public int $view_count,
        /** @var \App\Data\BreedData[] */
        public DataCollection $breeds,

        public BreederData $seller,
    ) {

    }
}

