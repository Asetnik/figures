<?php

use Illuminate\Database\Seeder;

class FiguresTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('figures_type')->insert([
            'id' => 1,
            'type' => 'circle',
        ]);
        DB::table('figures_type')->insert([
            'id' => 2,
            'type' => 'triangle',
        ]);
        DB::table('figures_type')->insert([
            'id' => 3,
            'type' => 'square',
        ]);
        DB::table('figures_type')->insert([
            'id' => 4,
            'type' => 'rectangle',
        ]);
    }
}
