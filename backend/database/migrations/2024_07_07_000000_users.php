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
       Schema::create('users_info', function (Blueprint $table) {
            $table->increments('id');
            $table->char('user_name', length: 100);
            $table->char('password', length: 100);
            $table->char('name', length: 100);
            $table->integer('user_access');
            $table->tinyInteger('active');
       
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
