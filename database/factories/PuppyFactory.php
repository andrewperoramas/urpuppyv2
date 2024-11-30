<?php

namespace Database\Factories;

use App\Models\Breed;
use App\Models\Puppy;
use App\Models\User;
use Exception;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Puppy>
 */
class PuppyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function configure(): static
    {
        return $this->afterCreating(function (Puppy $puppy) {
            $petImagesPath = base_path('tests/test-puppies');
            if (! is_dir($petImagesPath)) {
                Log::warning('Pet images directory not found: ' . $petImagesPath);

                return;
            }

            $petImages = File::files($petImagesPath);
            if (empty($petImages)) {
                Log::warning('No images found in the directory: ' . $petImagesPath);

                return;
            }

            $avatar = $petImages[array_rand($petImages)];

            try {
                $puppy->addMedia($avatar->getPathname())
                    ->preservingOriginal()
                    ->toMediaCollection('puppy_files');
            } catch (Exception $e) {
                Log::error('Failed to add media: ' . $e->getMessage());
            }
        });
    }

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'gender' => collect(['Female', 'Male'])->random(),
            'is_ready_to_travel' => false,
            'user_id' => User::factory()->create()->id,
            'price' => fake()->numberBetween(100000, 200000),
            'description' => fake()->paragraph(3, true),
        ];
    }
}
