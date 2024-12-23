<?php

namespace App\Filter;

use App\Models\Puppy;
use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class FilterGender implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        /* $value = [$value[0] . '00',   $value[1] . '00']; */
        /* dd($value); */
        /* $value = array_map('intval', $value);  // Use 'intval' for integers if needed */
        /* $value = collect($value)->map(fn ($price) => $price . '00')->toArray(); */
        $query->where('gender', $value);
    }
}
