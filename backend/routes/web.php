<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductcategoryController;
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
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/profile', 'ProfileController@index')->name('profile');
Route::put('/profile', 'ProfileController@update')->name('profile.update');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/blank', function () {
    return view('blank');
})->name('blank');

Route::middleware('auth')->group(function() {
    Route::resource('basic', BasicController::class);
});

Route::get('/product/createProd',[ProductController::class, 'create'])->name('product.create');
Route::post('/product',[ProductController::class, 'store'])->name('product.store');
Route::delete('/product/{id}',[ProductController::class, 'destroy'])->name('product.destroy');
Route::get('/prodoct/getDatabyId/{id}',[ProductController::class, 'getDatabyId'])->name('product.getDatabyId');
Route::put('/product', [ProductController::class, 'update'])->name('product.update');
Route::put('/product/status/{id}',[ProductcategoryController::class, 'status'])->name('product.status');


Route::get('/category/getDatabyId/{id}',[ProductcategoryController::class, 'getDatabyId'])->name('category.getDatabyId');
Route::put('/category', [ProductcategoryController::class, 'update'])->name('category.update');
Route::put('/category/status/{id}',[ProductcategoryController::class, 'status'])->name('category.status');
Route::get('/category/createCat',[ProductcategoryController::class, 'create'])->name('category.createCat');
Route::post('/category',[ProductcategoryController::class, 'storeP'])->name('category.storeP');
Route::delete('/category/{id}',[ProductcategoryController::class, 'destroy'])->name('category.destroy');
