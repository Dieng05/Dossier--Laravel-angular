<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;


class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function ListEtu(){
        $Listetudiant = Etudiant::all();
    
        return response()->json($Listetudiant);
    }
    public function ajoutEtu(Request $request){
        $etudiant = Etudiant::create($request->all()); 
        return response($etudiant, 201);
    }
    
    
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(Etudiant $etudiant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Etudiant $etudiant)
    {
        //
    }

    public function showid($id)
    {
        //
        $etudiants = Etudiant::find($id);
        if($etudiants){
            return response()->json($etudiants);

        }else {
            return response()->json(['message' => 'Etudiant non trouvé'], 404);
        }
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)

    {
        //
        $etudiant = Etudiant::find($id);
        $etudiant->codeEtudiant = $request->input('codeEtudiant');
        $etudiant->nom = $request->input('nom');
        $etudiant->prenom = $request->input('prenom');
        $etudiant->date_naiss_etu = $request->input('date_naiss_etu');
        $etudiant->telephone_etu = $request->input('telephone_etu');
        $etudiant->adresse_etu = $request->input('adresse_etu');
        $etudiant->lieu_naiss_etu = $request->input('lieu_naiss_etu');
        $etudiant->email_ugb = $request->input('email_ugb');
        $etudiant->sexe = $request->input('sexe');
        $etudiant->ine = $request->input('ine');
        $etudiant->save();
        return response()->json($etudiant);
    }
    public function delete (Request $request, $id){


        $etudiant = Etudiant::find($id);
        if ($etudiant) {
            $etudiant->delete();
            return response()->json(['message' => 'Etudiant supprimé avec succès'], 200);
        } else {
            return response()->json(['message' => 'Etudiant non trouvé'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Etudiant $etudiant)
    {
        //
    }
}
