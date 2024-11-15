<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{      
    protected $fillable = [
        'etudiant_id',
        'annee_id',
        'formation_id',
        'niveau_id',
        // Ajoutez les autres champs si nécessaire
    ];
    use HasFactory;
}
