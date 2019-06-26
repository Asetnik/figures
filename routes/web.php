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

Route::get('/', function () {
    return view('index');
});
Route::post('/figures', 'FiguresController@store');
Route::post('/delete_figure/{id}', 'FiguresController@destroy');
Route::get('/figures', 'FiguresController@index');
Route::get('/figures_types', 'FiguresTypesController@index');
Route::get('/figures_statistics', 'FiguresTypesController@figureStatistics');