<?php

namespace App\Data;

use App\PuppyStatus;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PlanData extends Data
{

    public function __construct(
        public int $id,
        public string $name,
        public string $price,
        public int $trial_days,
        public string $interval,
        public int $interval_count,
        /** @var \App\Data\PlanDetail[] */
        public DataCollection  $details,
        /** @var \App\Data\PlanFeature[] */
        public DataCollection $special_features
    ) {


    }
}

