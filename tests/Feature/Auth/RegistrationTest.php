<?php

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {

      Storage::fake('avatars');

    $petImagesPath = base_path('tests/test-puppies');
    $petImages = File::files($petImagesPath);

    // Pick a random file from the directory
    $randomImage = $petImages[array_rand($petImages)]->getPathname();

    // Create a fake uploaded file
    $uploadedFile = new UploadedFile(
        $randomImage,
        basename($randomImage),
        null, // MIME type (null lets the system infer it)
        null, // Error code (null means no error)
        true  // Test mode (true means the file isn't actually uploaded)
    );
    /* dd($petImages[array_rand($petImages)]->getPathname()); */

    $response = $this->post('/register', [
        'first_name' => 'Test User',
        'last_name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
        'avatar' => $uploadedFile,
    ]);
    dd($response->json());


    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});
