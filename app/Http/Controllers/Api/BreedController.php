<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Breed;
use App\Models\Country;
use Illuminate\Http\Request;

class BreedController extends Controller
{
    public function __invoke(Request $request)
    {
        $breedsQuery = Breed::query();

        if ($request->filled('search')) {
            $searchTerm = strtolower($request->search);
            $breeds = $breedsQuery->whereRaw('LOWER(name) LIKE ?', ['%' . $searchTerm . '%']);
        }

        $pagination = $request->has('all') ? 1000 : 10;

        $breeds = $breedsQuery->select('id', 'name')->orderBy('name')->paginate($pagination);

        $breeds->getCollection()->transform(function ($city) {
            return [
                'value' => $city->id,
                'label' => ucwords($city->name),
            ];
        });

        if ($request->has('all')) {
            $breeds->prepend([
                'value' => 'All',
                'label' => 'All',
            ]);
        }


        return response()->json($breeds);
    }
}
