import { Student } from './../model/student';
import { StudentAuthService } from './../services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-loginstudent',
  templateUrl: './loginstudent.component.html',
  styleUrls: ['./loginstudent.component.css']
})
export class LoginstudentComponent implements OnInit {

  student = new Student();
  msg='';
  erreur=0;
  
  constructor(private service:StudentAuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  onLoggedin(){
   // console.log(myForm.value); //{first: '', last:''}
   // console.log(myForm.valid); //false
   /*console.log(this.student);
    this.service.loginStudentFormRemote(this.student).subscribe(
      _error =>{
        console.log("response occured");
        this.msg="Bad credentials, please enter valid email and password";
      },
      _data =>{
        console.log("response received");
       this.router.navigate(['/studenthome'])
      }
    );*/
    console.log(this.student);
    let isValidStuent: Boolean = this.service.SignIn(this.student);
    if (isValidStuent)
    this.router.navigate(['/studenthome']);
    else
    //alert('Login ou mot de passe incorrecte!')
    this.erreur=1;
  }
  }

