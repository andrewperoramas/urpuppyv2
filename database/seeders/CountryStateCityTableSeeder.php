<?php

namespace Database\Seeders;

use App\DataProviders\CityDataProvider;
use App\DataProviders\CountryDataProvider;
use App\DataProviders\StateDataProvider;
use App\Models\City;
use App\Models\Country;
use App\Models\State;
use Illuminate\Database\Seeder;

class CountryStateCityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Country::insertOrIgnore(CountryDataProvider::data());
        State::insertOrIgnore(StateDataProvider::data());
        foreach (collect(CityDataProvider::data())->chunk(15000) as $chunkCities) {
            City::insertOrIgnore($chunkCities->toArray());
        }
    }
}
