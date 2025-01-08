<?php

use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CountryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StateController;
use App\Models\Plan;
use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;

Route::get('/puppy/countries', CountryController::class);
Route::get('/puppy/states', StateController::class);
Route::get('/puppy/cities', CityController::class);


