<?php

namespace App\Http\Controllers;

use App\Models\Inscription;
use Illuminate\Http\Request;

class InscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $inscription = Inscription::all();
        return response()->json($inscription);
    }
    public function InscriptionEtu(Request $request){
        $etudiant = Inscription::create($request->all()); 
        return response($etudiant, 201);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function createInscription(Request $request)
    {
        
        // Créer une nouvelle inscription
        $inscription = new Inscription();
        $inscription->etudiant_id = $request->input('etudiant_id');
        $inscription->niveau_id = $request->input('niveau_id');
        $inscription->formation_id = $request->input('formation_id');
        $inscription->annee_id = $request->input('annee_id');
        //$inscription->date_inscription = now(); // Utilisation de la date actuelle

        // Enregistrer l'inscription dans la base de données
        $inscription->save();

        return response()->json(['message' => 'Inscription réussie']);
    }


    public function ListeInscrit()
    {
        //
        $inscription = Inscription::with('Etudiant', 'niveau', 'Formation', 'Annee')->get();
        return response()->json($inscription);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Inscription $inscriptionModel)
    {
        //
    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inscription $inscriptionModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Inscription $inscriptionModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inscription $inscriptionModel)
    {
        //
    }
}
