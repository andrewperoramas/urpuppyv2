<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('puppies', function (Blueprint $table) {
            $table->integer('view_count')->default(0);
        });
    }

    public function down(): void
    {
        Schema::table('puppies', function (Blueprint $table) {
            $table->dropColumn('view_count');
        });
    }
};
