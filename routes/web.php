<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/', '\App\Http\Controllers\Dataget@index');
Route::post('/send/{id}', '\App\Http\Controllers\Dataget@store');

Route::get('/newpage', function () {
    return view('newpage');
})->name('newpage');
Route::get('/newpage2', function () {
    return view('newpage2');
})->name('newpage2');
