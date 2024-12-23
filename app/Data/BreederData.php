<?php

namespace App\Data;

use App\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;




#[TypeScript]
class BreederData extends Data
{

    public function __construct(
        public string $full_name,
        public string $avatar,
        public string $slug,
        public string $address,
        public string $member_since,
        /** @var \App\Data\BreedDataCollection[] */
        public ?DataCollection $breeds,
    ) {


    }
}

