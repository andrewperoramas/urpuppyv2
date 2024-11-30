<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PuppyData extends Data
{

    public function __construct(
        public string $title,
        public string $slug,
        public string $gender,
        public string $breed,
        public string $image,
        public string $description,
        public int $price,
        public string $birth_date,
        public PuppyStatus $status,
        public BreederData $breeder
    ) {


    }
}

