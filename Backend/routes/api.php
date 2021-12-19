<?php

use Illuminate\Http\Request;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/user', 'AuthenticationController@user')->middleware('auth:api');
Route::get('/users', 'AuthenticationController@allusers');
Route::post('/delete/{user}', 'AuthenticationController@deleteuser');
Route::post('/signup', 'AuthenticationController@register');
Route::post('/signin', 'AuthenticationController@login');
Route::post('/forgot', 'AuthenticationController@forgot');
Route::post('/reset', 'AuthenticationController@reset');

Route::apiResource('blogs', 'BlogController');
Route::get('/blog/search', 'BlogController@search');
Route::get('/category/{id}', 'BlogController@categoryblog');
Route::apiResource('blog_categories', 'BlogCategoryController');

Route::apiResource('contacts', 'ContactController');