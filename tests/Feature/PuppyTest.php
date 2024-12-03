<?php

use App\Models\Puppy;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;

test('shows the puppies page', function () {

    Puppy::factory()->times(20)->create();

    get('/puppies')
        ->assertInertia(function (Assert $page) {
            $page->component('Puppy/Index');
            $page->has('puppies.data', 12);
    });
});

test('show single puppy page', function () {

    $puppies = Puppy::factory()->times(20)->create();
    $puppy = $puppies->first();

    $sengil = get('/puppies/' . $puppy->slug)
        ->assertInertia(function (Assert $page) {
            $page->component('Puppy/Show');
            /* $page->has('puppies.data', 12); */
    });

});
