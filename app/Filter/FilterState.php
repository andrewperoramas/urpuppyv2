<?php

namespace App\Filter;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterState implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        $query->whereHas('seller', function ($query) use ($value) {
                $query->whereHas('state', fn ($q) => $q->where('name', $value));
        });

    }
}
