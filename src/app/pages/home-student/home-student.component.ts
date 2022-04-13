import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from './../../pages/services/student/student-auth.service';
@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {

  constructor(public service:StudentAuthService){}
  onLogout(){
    this.service.Logout();
  }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Nouveau message','firstname':'français avec Mehdi njema ','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img8.jpg','linkpage':'allprof'},
    {'id':2,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img2.jpg','linkpage':'allprof'},
    {'id':3,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img3.jpg','linkpage':'allprof'},
    {'id':4,'name':'Nouveau message','firstname':'français avec Mehdi njema français','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/img5.jpg','linkpage':'allprof'},
  ]
  info= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/angular.jpg','linkpage':'allprof'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/typescript.jpg','linkpage':'allprof'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/nodejs.jpg','linkpage':'allprof'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../../assets/img/reactjs.jpg','linkpage':'allprof'},
  ]
}
