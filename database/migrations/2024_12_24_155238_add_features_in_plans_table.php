<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->json('features')->nullable();
            $table->string('badge_title')->nullable();
            $table->string('badge_color')->nullable();
            $table->string('savings_label')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('plans', function (Blueprint $table) {
            $table->dropColumn('features');
            $table->dropColumn('badge_title');
            $table->dropColumn('badge_color');
            $table->dropColumn('savings_label');
        });
    }
};
