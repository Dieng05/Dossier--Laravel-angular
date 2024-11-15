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
        Schema::create('etudiants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->String('codeEtudiant');
            $table->String('nom');
            $table->String('prenom');
            $table->String('ine');
            $table->String('email_ugb');
            $table->date('date_naiss_etu');
            $table->String('lieu_naiss_etu');
            $table->String('sexe');
            $table->String('adresse_etu');
            $table->String('telephone_etu');
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('etudiants');
    }
};
