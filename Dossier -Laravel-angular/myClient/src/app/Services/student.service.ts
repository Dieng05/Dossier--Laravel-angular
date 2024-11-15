import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Etudiant } from '../models/etudiant.model';
import { Inscription } from '../models/inscription.model';
import { Formation } from '../models/formation.model';
import { Annee } from '../models/annee.model';
import { Niveau } from '../models/niveau.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { InfosStudent } from '../models/infos-student.model';


export interface StudentsResponse{
        id: number
        created_at: string
        updated_at: string
        codeEtudiant: string
        nom: string
        prenom: string
        ine: string
        email_ugb: string
        date_naiss_etu: Date
        lieu_naiss_etu: string
        sexe: string
        adresse_etu: string
        telephone_etu: string       
}


const etudiant= new Etudiant();
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
token = localStorage.getItem("token");

private headers= new HttpHeaders().set(
  'Authorization',
  'Bearer '+ this.token 
);

  constructor(private httpClient: HttpClient) {}
  
  getStudents(){

    return this.httpClient.get<Etudiant[]>('http://localhost:8000/api/etudiants',{headers:this.headers});

  }
  getFormations(){

    return this.httpClient.get<Formation[]>('http://localhost:8000/api/formations',{headers:this.headers});

  }
  getNiveaux(){

    return this.httpClient.get<Niveau[]>('http://localhost:8000/api/niveaux',{headers:this.headers});

  }
  getAnnees(){

    return this.httpClient.get<Annee[]>('http://localhost:8000/api/annees',{headers:this.headers});

  }
  getInscriptions(){

    return this.httpClient.get<InfosStudent[]>('http://localhost:8000/api/liste',{headers:this.headers});

  }

  saveStudent(inputData: Etudiant){

    return this.httpClient.post('http://localhost:8000/api/ajouter',inputData,{headers:this.headers});

  }
  saveInscription(inputData: Inscription){

    return this.httpClient.post('http://localhost:8000/api/Inscription',inputData,{headers:this.headers});

  }
  
  editStudent(id: number): Observable<Etudiant> {
    
    return this.httpClient.get<Etudiant>(`http://localhost:8000/api/etudiants/${id}`,{headers:this.headers})
  }
  updateStudent(id: number, updatedStudentData: Etudiant): Observable<Etudiant> {
    
    return this.httpClient.put<Etudiant>(`http://localhost:8000/api/etudiantsUpdate/${id}`, updatedStudentData,{headers:this.headers});
  }
  
  deleteStudent(id: number): Observable<any> {
   
    return this.httpClient.delete(`http://localhost:8000/api/etudiantdelete/${id}`,{headers:this.headers});
  }
  
}




