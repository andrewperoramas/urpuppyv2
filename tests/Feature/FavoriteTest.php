<?php

use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('shows favorites list', function () {

    $user = User::factory()->create();
    actingAs($user);

    get('/favorites')->assertStatus(200);

    get('/favorites')->assertInertia(function ($page) {
        $page->has('favorites', 13);
        $page->component('Favorite/Index');
    });
});

