<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Etudiant;
use Illuminate\Support\Facades\DB;

class EtudiantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void

 
    {

        DB::table('etudiants')->delete();
        DB::table('etudiants')->insert([
                [
                'codeEtudiant'=>'P282394',
                'nom'=>'sanokho',
                'prenom'=>'cira',
                'ine'=>'12345566',
                'email_ugb'=>'sanokho.ugb.edu.sn',
                'date_naiss_etu'=>'1998-09-09',
                'lieu_naiss_etu'=>'tambacounda',
                'sexe'=>'feminin',
                'adresse_etu'=>'9j',
                'telephone_etu'=>'77 777 77 77'
                ],
           [
            'codeEtudiant'=>'P32456',
            'nom'=>'dia',
            'prenom'=>'fatima',
            'ine'=>'456778899',
            'email_ugb'=>'dia.ugb.edu.sn',
            'date_naiss_etu'=>'1998-09-09',
            'lieu_naiss_etu'=>'tamba',
            'sexe'=>'feminin',
            'adresse_etu'=>'7j',
            'telephone_etu'=>'78 777 77 77'
            
           ],
        [
            'codeEtudiant'=>'p2845',
            'nom'=>'diasse',
            'prenom'=>'omar',
            'ine'=>'ine2018234',
            'email_ugb'=>'diasse.ugb.edu.sn',
            'date_naiss_etu'=>'1999-01-01',
            'lieu_naiss_etu'=>'dakar',
            'sexe'=>'masculin',
            'adresse_etu'=>'villageA',
            'telephone_etu'=>'77 797 77 77'
            

        ],
        [
            'codeEtudiant'=>'P28',
            'nom'=>'dieng',
            'prenom'=>'bamba',
            'ine'=>'ine2018',
            'email_ugb'=>'dieng.ugb.edu.sn',
            'date_naiss_etu'=>'1998-03-01',
            'lieu_naiss_etu'=>'kaolack',
            'sexe'=>'masculin',
            'adresse_etu'=>'village C',
            'telephone_etu'=>'77 777 77 77'

        ],
        [
            'codeEtudiant'=>'P2789',
            'nom'=>'thiam',
            'prenom'=>'aicha',
            'ine'=>'ine2019',
            'email_ugb'=>'thiam.ugb.edu.sn',
            'date_naiss_etu'=>'2002-01-13',
            'lieu_naiss_etu'=>'kolda',
            'sexe'=>'feminin',
            'adresse_etu'=>'1j',
            'telephone_etu'=>'77 777 77 77'
            
        ]
   ] );
    }
}
