import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EtatServeService } from 'src/app/Services/etat-serve.service';
import { StudentService } from 'src/app/Services/student.service';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  user : User = new User();
  errors!: any[];
  constructor(private studentService: UserService, private router: Router,private route: ActivatedRoute,private tokenService :TokenService,private etatService: EtatServeService) {

  }
  //token!:any;
 
  /*errors!:any[];
  token= localStorage.getItem("token");
  private headers =new HttpHeaders().set(
    'Authorization',
    'Bearer ${this.token}'
  );*/

  login() {

    
  }
  SaveUser() {
    console.log('Formulaire soumis avec les valeurs :');
    console.log('Code Étudiant:', this.user);

    const credentials = { email: this.user.email, password: this.user.password };
    this.studentService.saveUser(credentials);
    

    /*this.studentService.saveUser(this.user).subscribe(
      (res) => {
        this.responsableHandler(res);
        console.log(res, 'response du token');
    
        if (res.auth_token && res.auth_token.token) {
          localStorage.setItem('token', res.auth_token.token);
        }
    
        localStorage.setItem('name', res.name);
        localStorage.setItem('email', res.email);
        this.setEtatAuth(true);
        this.router.navigate(['/Etudiants']);
      },
      (err) => {
        console.error('Error during saveUser:', err);
        this.errors = err.error.errors;
      },
      () => {
        console.log(this.etatService);
        this.etatService.setAuthState(true);
        // this.user.reset();
        
      }
    );*/
}
  /*setEtatAuth(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
responsableHandler(result:any){
console.log('Token handling results: ',result);
this.tokenService.handleData(result.tokenService);
}*/
}

