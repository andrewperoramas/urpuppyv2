<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function __invoke(Request $request)
    {

        $countryState = Country::query()->where('iso2', 'US')->first()?->states();

        $states = [];
        if ($countryState !== null) {
            $states = $countryState->select('id', 'name');

            if ($request->filled('search')) {
                $stateIds = State::search($request->search)->keys();
                $states = $countryState->whereIn('id', $stateIds);
            }

            $states = $states->paginate(10);

            $states->getCollection()->transform(function ($state) {
                return [
                    'value' => $state->id,
                    'label' => ucwords($state->name),
                ];
            });
        }

        return $states;
    }
}

