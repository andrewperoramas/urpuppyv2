<?php

namespace App\Data;

use Spatie\LaravelData\DataCollection;
use App\Enum\PuppyStatus;
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
        public string $description,
        public \Cknow\Money\Money $price,
        public string $birth_date,
        public BreederData $breeder
    ) {


    }
}

