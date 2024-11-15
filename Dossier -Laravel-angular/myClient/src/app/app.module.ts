import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentInscriptionComponent } from './Pages/student-inscription/student-inscription.component';
import { StudentUpdateComponent } from './Pages/student-update/student-update.component';
import { StudentUserComponent } from './Pages/student-user/student-user.component';
import { InterceptorTokenInterceptor } from './Services/interceptor-token.interceptor';
import { StudentAfficherComponent } from './Pages/student-afficher/student-afficher.component';
import { StudentListInscritComponent } from './Pages/student-list-inscrit/student-list-inscrit.component';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    StudentCreateComponent,
    StudentPageComponent,
    StudentInscriptionComponent,
    StudentUpdateComponent,
    StudentUserComponent,
    StudentAfficherComponent,
    StudentListInscritComponent,
    LoaderComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
