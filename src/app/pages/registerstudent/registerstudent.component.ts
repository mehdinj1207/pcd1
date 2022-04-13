import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedGender: any;
  onSubmit(myForm: NgForm){
    console.log(myForm.value); //{first: '', last:''}
    console.log(myForm.valid); //false

  }

}
