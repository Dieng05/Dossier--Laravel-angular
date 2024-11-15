<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\AnneeController;
use App\Http\Controllers\NiveauController;
use App\Http\Controllers\FormationController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);



Route::middleware('auth:sanctum')->group(function ()
{
    Route::get('/logout', [UserController::class, 'logout']);

    Route::get('/etudiants',[EtudiantController::class, 'ListEtu']);

    Route::post('/ajouter',[EtudiantController::class, 'ajoutEtu']);
    Route::post('/Inscription',[InscriptionController::class, 'InscriptionEtu']);
    Route::get('/etudiants/{id}', [EtudiantController::class , 'showid']);
    Route::delete('/etudiantdelete/{id}',[EtudiantController::class , 'delete'] );
    Route::put('/etudiantsUpdate/{id}',[EtudiantController::class , 'update']);
    
    Route::get('/annees', [AnneeController::class , 'index']);
    
    Route::get('/formations', [FormationController::class , 'index']);
    
    Route::get('/niveaux', [NiveauController::class , 'index']);
    
    
    Route::post('/inscrire', [InscriptionController::class, 'createInscription']);
    Route::get('/inscrire', [InscriptionController::class, 'index']);
    Route::get('/liste', [InscriptionController::class, 'ListeInscrit']);
    
    //return $request->user();

});

/*Route::middleware('auth:sanctum')->group('/user', function (Request $request) {
    

   

});*/



