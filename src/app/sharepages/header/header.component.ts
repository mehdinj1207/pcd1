import { StudentAuthService } from './../../pages/services/student/student-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service:StudentAuthService){}
  onLogout(){
    this.service.Logout();
  }
  
  ngOnInit(): void {
  }
  

}
