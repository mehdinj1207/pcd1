import { Router } from '@angular/router';
import { StudentAuthService } from './pages/services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pcd'
  constructor(public service:StudentAuthService, private router :Router){}

  ngOnInit () {
    let isloggedin: string;
    let loggedStudent:string;

    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedStudent = localStorage.getItem('loggedUser')!;
    if (isloggedin!="true" || !loggedStudent)
    this.router.navigate(['/home']);
    else
    this.service.setLoggedUserFromLocalStorage(loggedStudent);
    }
  onLogout(){
    this.service.Logout();
  }
  
}



