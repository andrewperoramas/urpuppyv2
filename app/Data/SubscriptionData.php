<?php

namespace App\Data;

use App\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;




#[TypeScript]
class SubscriptionData extends Data
{

    public function __construct(
        public int $id,
        public string $type,
       #[MapInputName('stripe_status')]
        public string $status,
        public ?string $trial_ends_at,
        public ?string $ends_at,
        public string $created_at,

    ) {

    }
}

