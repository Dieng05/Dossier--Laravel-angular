import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private studentService: StudentService, private router: Router,private userService: UserService,private route: ActivatedRoute) {
    // ...
  }
  logout() {
    this.userService.logout().subscribe(
      (response) => {
        this.router.navigate(['/']);
        // Gérer la réponse du serveur (par exemple, redirection)
      },
      (error) => {
        // Gérer les erreurs
      }
    );
  }
}
