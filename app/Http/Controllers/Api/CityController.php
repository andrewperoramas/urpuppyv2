<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Country;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function __invoke(Request $request)
    {
        $country = Country::where('iso2', 'US')->first();

        if (!$country) {
            return response()->json(['message' => 'Country not found'], 404);
        }

        /* $selectedStateId = (int) $request->input('state', null); */
        $citiesQuery = City::query();



        /* dd($citiesQuery->get()->first()); */

        if ($request->filled('search')) {
            $cityIds = City::search($request->search)->keys();
            $citiesQuery->whereIn('id', $cityIds);
        }

        $cities = $citiesQuery->select('id', 'name')->paginate(10);

        /* dd($cities); */

        $cities->getCollection()->transform(function ($city) {
            return [
                'value' => $city->id,
                'label' => ucwords($city->name),
            ];
        });

        return response()->json($cities);
    }
}

