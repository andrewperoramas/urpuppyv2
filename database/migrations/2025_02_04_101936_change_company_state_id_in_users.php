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

                  DB::statement('
            ALTER TABLE users
            ALTER COLUMN company_state_id TYPE bigint USING company_state_id::bigint,
            ALTER COLUMN company_state_id DROP NOT NULL,
            ALTER COLUMN company_state_id DROP DEFAULT,
            ALTER COLUMN company_state_id DROP IDENTITY IF EXISTS
        ');


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
