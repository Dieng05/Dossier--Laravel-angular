import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Inscription } from '../../models/inscription.model';
import { Formation } from '../../models/formation.model';
import { Annee } from '../../models/annee.model';
import { Niveau } from '../../models/niveau.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-inscription',
  templateUrl: './student-inscription.component.html',
  styleUrls: ['./student-inscription.component.css']
})
export class StudentInscriptionComponent  {

  inscription: Inscription = new Inscription();
  errors: any = [];
  id_etudiant!: number ;
 
  constructor(private studentService: StudentService, private router: Router,private route: ActivatedRoute) {}
  annees !: Annee[];
  formations !: Formation[];
  niveaux !: Niveau[];

  
  getFormationsLists(){
    this.studentService.getFormations().subscribe((resf:Formation[])=> {
     console.log(resf);
     this.formations=resf
    });
  }
  getAnneesLists(){
    this.studentService.getAnnees().subscribe((resA:Annee[])=> {
     console.log(resA);
     this.annees=resA
    });
  }
  getNiveauxLists(){
    this.studentService.getNiveaux().subscribe((resN:Niveau[])=> {
     console.log(resN);
     this.niveaux=resN
    });
  }
  saveInscription() {
    console.log('Formulaire soumis avec les valeurs :');
    console.log('Code Étudiant:', this.inscription);

    this.inscription.etudiant_id = this.id_etudiant;
    this.studentService.saveInscription(this.inscription).subscribe({
      
      next: (res: any) => {
        console.log(res, 'response');
        this.router.navigate(['/Etudiants']);
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
      }
    });
  }
  ngOnInit() {
    // Récupérer la valeur de 'id' depuis les paramètres de la route
    this.getFormationsLists();
    this.getAnneesLists();
    this.getNiveauxLists();
    this.route.queryParams.subscribe(params => {
      this.id_etudiant = params['id'];
    });

}
}
