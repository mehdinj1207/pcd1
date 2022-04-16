import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { from } from 'rxjs';
import { CoursesComponent } from './pages/courses/courses.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginformerComponent } from './pages/loginformer/loginformer.component';
import { LogincenterComponent } from './pages/logincenter/logincenter.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import {MatInputModule} from '@angular/material/input';
import { BillingComponent } from './pages/billing/billing.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { HomeFormerComponent } from './pages/home-former/home-former.component';
import { DashbordFormerComponent } from './pages/dashbord-former/dashbord-former.component';
import { ProfprofileComponent } from './pages/profprofile/profprofile.component';
import { PlanningStudentComponent } from './planning-student/planning-student.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ThirdofComponent,
    RegistercenterComponent,
    RegisterstudentComponent,
    RegisterformerComponent,
    AllprofComponent,
    AllcenterComponent,
    LoginstudentComponent,
    StudenthomeComponent,
    LoginformerComponent,
    LogincenterComponent,
    ForbiddenComponent,
    HomeStudentComponent,
    UserprofileComponent,
    BillingComponent,
    MessagesComponent,
    FavoritesStudentComponent,
    FavoritesFormerComponent,
    MessagesFormerComponent,
    BillingFormerComponent,
    PlanningFormerComponent,
    HomeFormerComponent,
    DashbordFormerComponent,
    ProfprofileComponent,
    PlanningStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
