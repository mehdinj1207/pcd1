import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registercenter',
  templateUrl: './registercenter.component.html',
  styleUrls: ['./registercenter.component.css']
})
export class RegistercenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    console.log(myForm.value); //{first: '', last:''}
    console.log(myForm.valid); //false

  }
}

