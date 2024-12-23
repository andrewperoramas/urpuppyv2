<?php

namespace App\Data;

use App\PuppyStatus;
use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class BreederFullData extends Data
{

    public function __construct(
        public string $full_name,
        public string $first_name,
        public string $avatar,
        public string $slug,
        public string $address,
        public string $member_since,


        public string $company_name,
        public string $company_address,
        public string $company_established_on_label,

        public ?string $website,
        public ?string $phone,
        public string $email,
        public ?string $social_fb,
        public ?string $social_tiktok,
        public ?string $social_x,
        public ?string $social_ig,

        public ?string $description,

        /* @var string[] */
        public Collection $breeds,

        /** @var \App\Data\CommentData[] */
        public ?DataCollection $comments
    ) {


    }
}

