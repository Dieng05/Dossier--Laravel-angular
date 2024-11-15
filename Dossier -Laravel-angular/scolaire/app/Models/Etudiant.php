<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable = ['codeEtudiant','nom','prenom','ine','email_ugb','date_naiss_etu','lieu_naiss_etu','sexe','adresse_etu','telephone_etu','libelle_niveau','annee_niveau','annee_debut','annee_fin','filiere','departement','ufr'];
}
