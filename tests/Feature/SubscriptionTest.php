<?php

use App\Models\Breed;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

test('shows the subscriptions page', function () {
    $user = User::factory()->create();
    actingAs($user);

    get('/subscriptions')
        ->assertInertia(function (Assert $page) {
            $page->component('Subscription/Index');
            /* $page->has('breeds.data', 20); */
    });
});


