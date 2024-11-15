<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscription extends Model
{
    use HasFactory;
    protected $fillable=[
        'etudiant_id',
        'annee_id',
        'formation_id',
        'niveau_id',
    ];
    public function Etudiant() {
        return $this->belongsTo(Etudiant::class);
    }
    public function niveau() {
        return $this->belongsTo(niveau::class);
    }
    public function Formation() {
        return $this->belongsTo(Formation::class);
    }
    public function Annee() {
        return $this->belongsTo(Annee::class);
    }
}
