<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NiveauSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        DB::table('niveaux')->delete();
        DB::table('niveaux')->insert([

            [
             'libelle' => 'Licence1',
           ],
           
           [
            'libelle' => 'Licence2',
           ],
           [
            'libelle' => 'Licence3',
           ],
           [
            'libelle' => 'Master1',
           ],
           [
            'libelle' => 'Master2',
           ],
           [
            'libelle' => 'D1',
           ],
           [
            'libelle' => 'D2',
           ],
           [
            'libelle' => 'D3',
           ],

        ]);
    }
}
