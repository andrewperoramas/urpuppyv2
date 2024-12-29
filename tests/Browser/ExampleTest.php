<?php

use Laravel\Dusk\Browser;

test('basic example', function () {
    $this->browse(function (Browser $browser) {
        /* dd('adi'); */

        $r = $browser->visit('/')
                ->assertSee('Find Ur Perfect Puppy Today!');

    /* dd($r); */
    });
});
