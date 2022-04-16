<?php

use App\Http\Controllers\Api\ProductsCartController;
use App\Http\Controllers\Api\ProductsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'Api'], function () {
    Route::get('/products', [ProductsController::class, 'index']);
    Route::get('/products/{product}', [ProductsController::class, 'show']);

    Route::get('/cart', [ProductsCartController::class, 'index']);
    Route::post('/cart', [ProductsCartController::class, 'store']);
    Route::delete('/cart/{productId}', [ProductsCartController::class, 'destroy']);
    Route::delete('/cart', [ProductsCartController::class, 'destroyAll']);
});
