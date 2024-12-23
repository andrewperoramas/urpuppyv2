<?php

namespace App\Data;

use Spatie\LaravelData\DataCollection;
use App\Enum\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PuppyData extends Data
{

    public function __construct(
        public string $name,
        public string $slug,
        public string $gender,
        /* public string $breed, */
        /** @var \App\Data\BreedData[] */
        public DataCollection $breeds,
        public string $image,
        /** @var string[] */
        public Collection $preview_images,
        public string $description,
        public string $formatted_price,
        public int $view_count,
        public string $age,
        public BreederData $breeder,
        public ?string $published_at
    ) {

    }
}

