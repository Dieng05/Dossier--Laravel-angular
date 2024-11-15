import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { Etudiant  } from 'src/app/models/etudiant.model';

@Component({
  selector: 'app-student-afficher',
  templateUrl: './student-afficher.component.html',
  styleUrls: ['./student-afficher.component.css']
})
export class StudentAfficherComponent {
  constructor(private studentService: StudentService, private router: Router,private route: ActivatedRoute) {
    // ...
     
  }

  student !: Etudiant;
  id_etudiant!: number ;

  getStudentid(){
    this.studentService.editStudent(this.id_etudiant).subscribe((res:Etudiant)=> {
     //console.log(res);
     this.student=res
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_etudiant = params['id'];
    });
    this.getStudentid();
  }
}
