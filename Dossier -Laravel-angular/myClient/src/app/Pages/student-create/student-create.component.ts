import { Component } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Etudiant } from '../../models/etudiant.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
[x: string]: any;
  etudiant: Etudiant = new Etudiant();
  errors: any = [];
  LoadingTitle: string='loading'

  constructor(private studentService: StudentService, private router: Router) {}
  isLoading: boolean = false;
  saveStudent() {

    this.isLoading = true;
    this.LoadingTitle = 'saving';

    console.log('Formulaire soumis avec les valeurs :');
    console.log('Code Étudiant:', this.etudiant);
    this.studentService.saveStudent(this.etudiant).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        this.isLoading = true;
        this.router.navigate(['/Etudiants']);
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
        console.log(err.error.errors, 'errors');
      }
    });
  }
}
