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
{path:"messages",component:MessagesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
