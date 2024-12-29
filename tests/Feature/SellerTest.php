<?php

use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;
use function Pest\Laravel\post;

test('seller registration page works', function () {

    get('/seller/create')->assertInertia()
        ->assertInertia(function (Assert $page) {

            $page->component('Seller/Registration');

    });
});

test('seller can register', function () {

    post('/seller/store', [
        'name' => 'John Doe',
    ])->assertInertia()
        ->assertInertia(function (Assert $page) {

        dd($page);
            /* $page->component('Seller/Registration'); */

    });

});
