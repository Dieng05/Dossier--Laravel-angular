import { Component } from '@angular/core';

import { StudentService,StudentsResponse } from 'src/app/Services/student.service';
import { Etudiant  } from 'src/app/models/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  constructor(private studentService: StudentService, private router: Router,private route: ActivatedRoute) {
    // ...
    this.students = new Etudiant(); 
  }
  
  students !: Etudiant;
  id_etudiant!: number ;
 
     getStudentid(){
      this.studentService.editStudent(this.id_etudiant).subscribe((res:Etudiant)=> {
       //console.log(res);
       this.students=res
      });
    }
    
    UpdateStudents(){
      this.studentService.updateStudent(this.id_etudiant, this.students).subscribe(
  
        (updatedStudent: Etudiant) => {
          console.log('Étudiant mis à jour avec succès :', updatedStudent);
          this.router.navigate(['/Etudiants']);


          // Faites quelque chose avec les données mises à jour si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'étudiant :', error);
        }
      );
    }
   
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.id_etudiant = params['id'];
      });
      this.getStudentid();
    }
   
}
