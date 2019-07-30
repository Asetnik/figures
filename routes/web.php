<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/figures', 'FiguresController');
Route::resource('/figures_types', 'FiguresTypesController');
Route::get('/figures_statistics', 'FiguresTypesController@figureStatistics');

Route::fallback(function () {
    return view('index');
});
