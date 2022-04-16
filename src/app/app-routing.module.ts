import { StudentGuard } from './pages/guard/student.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { AboutComponent } from './pages/about/about.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { DashbordFormerComponent } from './pages/dashbord-former/dashbord-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { ProfprofileComponent } from './pages/profprofile/profprofile.component';
import { PlanningStudentComponent } from './planning-student/planning-student.component';
import { HomeFormerComponent } from './pages/home-former/home-former.component';

const routes: Routes = [{path:"",component:HomeComponent   },
{path:"home",component:HomeComponent   },
{path:"home-student",component:HomeStudentComponent},
{path:"login",component:LoginComponent   },
{path:"about",component:AboutComponent   },
{path:"register",component:RegisterComponent   },
{path:"contact",component:ContactComponent  },
{path:"courses",component:CoursesComponent  },
{path:"home/courses",component:CoursesComponent},
{path:"home/register",component:RegisterComponent},
{path:"thirdof",component:ThirdofComponent},
{path:"home/thirdof",component:ThirdofComponent},
{path:"home/thirdof/registerstudent",component:RegisterstudentComponent},
{path:"home/thirdof/registerformer",component:RegisterformerComponent},
{path:"home/thirdof/registercenter",component:RegistercenterComponent},
{path:"thirdof/registerstudent",component:RegisterstudentComponent},
{path:"thirdof/registerformer",component:RegisterformerComponent},
{path:"thirdof/registercenter",component:RegistercenterComponent},
{path:"courses/allprof",component:AllprofComponent},
{path:"home/courses/allprof",component:AllprofComponent},
{path:"allcenter",component:AllcenterComponent },
{path:"loginstudent", component:LoginstudentComponent},
{path:"studenthome", component:StudenthomeComponent},
{path: "forbidden", component: ForbiddenComponent},
{path:"home-student/courses",component:CoursesComponent},
{path:"home-student/userprofile",component:UserprofileComponent},
{path:"userprofile",component:UserprofileComponent},
{path:"billing",component:BillingComponent},
{path:"messages",component:MessagesComponent},
{path:"studenthome/courses",component:CoursesComponent},
{path:"home-former/planningformer",component:PlanningFormerComponent},
{path:"billing-former",component:BillingFormerComponent},
{path:"dashbord-former",component:DashbordFormerComponent},
{path:"favorites-former",component:FavoritesFormerComponent},
{path:"favorites-student",component:FavoritesStudentComponent},
{path:"messagesformer",component:MessagesFormerComponent},
{path:"planningformer",component:PlanningFormerComponent},
{path:"profprofile",component:ProfprofileComponent},
{path:"studenthome/billing",component:BillingComponent},
{path:"studenthome/messages",component:MessagesComponent},
{path:"studenthome/favorites-student",component:FavoritesStudentComponent},
{path:"studenthome/planning-student",component:PlanningStudentComponent},
{path:"home-former/favorites-former",component:FavoritesFormerComponent},
{path:"home-former/messages-former",component:MessagesFormerComponent},
{path:"home-former/planning-former",component:PlanningFormerComponent},
{path:"dashbord-former",component:DashbordFormerComponent},
{path:"home-former",component:HomeFormerComponent},
{path:"studenthome/userprofile",component:UserprofileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
