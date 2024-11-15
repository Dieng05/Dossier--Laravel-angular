<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class AnneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('annees')->delete();
        DB::table('annees')->insert([

            [
             'libelle' => '2022-2023',
           ],
           
           [
            'libelle' => '2023-2024',
           ],
           [
            'libelle' => '2024-2025',
           ],
           [
            'libelle' => '2025-2026',
           ],
           [
            'libelle' => '2026-2027',
           ],

        ]);
    }
}
