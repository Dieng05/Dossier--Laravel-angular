import { Component } from '@angular/core';
import { StudentService,StudentsResponse } from 'src/app/Services/student.service';
import { Etudiant  } from 'src/app/models/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
 
})
export class StudentPageComponent {
  constructor(private studentService: StudentService, private router: Router,private userService: UserService,private route: ActivatedRoute) {
    // ...
  }
  
     students !: Etudiant[];
     id_etudiant!: number;
     student !: Etudiant;
     user : User = new User();
     errors!:any[];

     
      
     ngOnInit(){
      this.getStudentsLists();
      //this.getStudentid();
      this.route.queryParams.subscribe(params => {
      this.id_etudiant = params['id'];
     });
     this.getStudentid();
    }
   
    getStudentid(){
      this.studentService.editStudent(this.id_etudiant).subscribe((res2:Etudiant)=> {
       console.log(res2);
       this.student=res2
      });
    }
     getStudentsLists(){
       this.studentService.getStudents().subscribe((res:Etudiant[])=> {
        console.log(res);
        this.students=res
       });
       this.userService.saveResgister(this.user).subscribe({
        next: (res: any) => {
          console.log(res, 'response token');
          this.user['reset']();
          this.router.navigate(['/']);
         
        },
        error: (err: any) => {
          this.errors = err.error.errors;
          console.log(err.error.errors, 'errors');
        }
      });
     }
     DeleteStudent(id: any){
      this.studentService. deleteStudent(id).subscribe(res =>{
        
        this.getStudentsLists();
        this.router.navigate;
      })
     }

     
    
    
     redirectToInscription(itemId: number): void {
      // Utilisez le service Router pour naviguer vers la route '/Inscription' avec l'ID
      this.router.navigate(['Inscription/:id', itemId]);
    }
    

}
