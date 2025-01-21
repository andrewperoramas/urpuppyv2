<?php

namespace App\Filter;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterBreeds implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        $query->whereHas('breeds', function (Builder $query) use ($value, $property) {
            $query->where('name', 'LIKE', "%{$value}%");
        });
    }
}
