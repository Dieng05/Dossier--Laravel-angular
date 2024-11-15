<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class FormationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        DB::table('formations')->delete();
        DB::table('formations')->insert([

            [
             'libelle' => 'MIAGE',
           ],
           
           [
            'libelle' => 'INFO',
           ],
           [
            'libelle' => 'MATH',
           ],
           [
            'libelle' => 'GESTION',
           ],
           [
            'libelle' => 'ECONNOMIE',
           ],
           [
            'libelle' => 'DROIT',
           ],

        ]);
    }
}
