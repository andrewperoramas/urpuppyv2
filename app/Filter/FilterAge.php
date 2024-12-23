<?php

namespace App\Filter;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterAge implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {

        $back = now()->subWeeks($value === '0' ? 100000 : $value);
        $query->whereBetween('birth_date', [$back, now()]);

/*         $query->whereHas('breeds', function (Builder $query) use ($value, $property) { */
/*             $query->whereIn('name', $value); */
/*         }); */
    }
}
