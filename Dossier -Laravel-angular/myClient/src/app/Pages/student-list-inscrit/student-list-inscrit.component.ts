// student-list-inscrit.component.ts

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { InfosStudent } from 'src/app/models/infos-student.model';

@Component({
  selector: 'app-student-list-inscrit',
  templateUrl: './student-list-inscrit.component.html',
  styleUrls: ['./student-list-inscrit.component.css']
})
export class StudentListInscritComponent implements OnInit {
  students: InfosStudent[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getInscriptions();
    
  }
  
  getInscriptions() {
    this.studentService.getInscriptions().subscribe((res: InfosStudent[]) => {
      this.students = res;
      console.log('Tableau récupéré en JSON :', this.students);
    });
  }
}
