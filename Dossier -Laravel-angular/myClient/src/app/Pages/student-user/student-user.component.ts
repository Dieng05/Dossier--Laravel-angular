import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-student-user',
  templateUrl: './student-user.component.html',
  styleUrls: ['./student-user.component.css']
})
export class StudentUserComponent {

  user : User = new User();

  constructor(private studentService: UserService, private router: Router,private route: ActivatedRoute) {

  }

  
  errors!:any[];
  
  SaveRisgister() {
    console.log('Formulaire soumis avec les valeurs :');
    console.log('User est :', this.user);

    this.studentService.saveResgister(this.user).subscribe({
      next: (res: any) => {
        console.log(res, 'response token');
        //this.user['reset']();
        this.router.navigate(['/']);
       
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
      }
    });

}
}