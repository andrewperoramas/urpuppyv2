<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Breed>
 */
class BreedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->firstName(),
            'description' => fake()->paragraph(3, true),
            'history_description' => fake()->paragraph(3, true),
            'size_description' => fake()->paragraph(3, true),
            'coat_description' => fake()->paragraph(3, true),
            'temperament_description' => fake()->paragraph(3, true),
            'lifestyle_description' => fake()->paragraph(3, true),
            'activities_description' => fake()->paragraph(3, true),
        ];
    }
}
