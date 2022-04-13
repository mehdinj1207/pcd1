import { Router } from '@angular/router';
import { Student } from './../../model/student';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {
 students: Student[] = [{"username":"chaima","email":"chaima.elouni@ensi-uma.tn","password":"123","roles":['Student']},
                         {"username":"mehdi","email":"mehdinjema@gmail.com","password":"123","roles":['Student']} ]
  
                         
public loggedStudent!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

constructor(private router:Router){}
SignIn(student :Student):Boolean{
  let validStudent: Boolean = false;
 
  this.students.forEach((curUser) => {
  if(student.email=== curUser.email && student.password==curUser.password) {
  validStudent = true;
  
  this.loggedStudent = curUser.username;
  this.isloggedIn = true;
  this.roles = curUser.roles;
  localStorage.setItem('loggedUser',this.loggedStudent);
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
 

  }
  });
  return validStudent;
  }
  isStudent():Boolean{
    if (!this.roles && this.isloggedIn) //this.roles== undefiened
    return false;
    return (this.roles.indexOf('Student') >-1) ;
    ;

  }
  Logout(){
      this.isloggedIn= false;
    
      this.loggedStudent != undefined;
      this.roles!= undefined;
      localStorage.removeItem('loggedUser');
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
     
      this.router.navigate(['/loginstudent']);

  }
  setLoggedUserFromLocalStorage(login : string) {
    this.loggedStudent = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
    }
    getUserRoles(email :string){
    this.students.forEach((curUser) => {
    if( curUser.email == email) {
    this.roles = curUser.roles;
    }
    });
    }

 /* constructor(private http: HttpClient ) { 
  }
  public loginStudentFormRemote(student: Student):Observable<any>{

    return this.http.post("http://localhost:8090/StudentLogin",student);
 

  }*/
}
