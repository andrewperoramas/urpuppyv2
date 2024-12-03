<?php

use App\Models\Breed;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;

test('shows the breeds page', function () {

    Breed::factory()->times(20)->create();

    get('/breeds')
        ->assertInertia(function (Assert $page) {
            $page->component('Breed/Index');
            $page->has('breeds.data', 20);
    });
});

test('show single breed page', function () {

    $puppies = Breed::factory()->times(1)->create();
    $puppy = $puppies->first();

    get('/breeds/' . $puppy->slug)
        ->assertInertia(function (Assert $page) {
            $page->component('Breed/Show');
    });

});
