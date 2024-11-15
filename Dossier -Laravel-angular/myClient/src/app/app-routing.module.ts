import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentInscriptionComponent } from './Pages/student-inscription/student-inscription.component';
import { StudentUpdateComponent } from './Pages/student-update/student-update.component';
import { StudentAfficherComponent } from './Pages/student-afficher/student-afficher.component';
import { StudentUserComponent } from './Pages/student-user/student-user.component';
import { StudentListInscritComponent } from './Pages/student-list-inscrit/student-list-inscrit.component';

const routes: Routes = [

  { path: '',component: HomePageComponent,title: 'Home Page'},
  { path: 'about-us',component: AboutPageComponent,title: 'About Us'},
  { path: 'contact-us',component: ContactPageComponent,title: 'Contact Us'},
  { path: 'Etudiants',component:StudentPageComponent,title: 'Liste Des Etudiant'},
  { path: 'Etudiants/Inscription',component:StudentCreateComponent,title: 'Ajout Etudiant'},
  { path: 'Inscription',component:StudentInscriptionComponent,title: 'Inscription Etudiant'},
  { path: 'Update',component:StudentUpdateComponent,title: 'Update Etudiant'},
  { path: 'EditStudent',component:StudentAfficherComponent,title: 'Afficher Etudiant'},
  { path: 'Inscrit',component:StudentUserComponent,title: 'Connexion'},
  { path: 'ListInscrit',component:StudentListInscritComponent,title: 'ListInscrit'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
