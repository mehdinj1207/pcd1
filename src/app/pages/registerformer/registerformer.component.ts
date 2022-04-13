import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registerformer',
  templateUrl: './registerformer.component.html',
  styleUrls: ['./registerformer.component.css']
})
export class RegisterformerComponent implements OnInit {

  constructor() { }
  selectedFile =null;

  onFileSelected(event: any){
    console.log(event);

  }
  ngOnInit(): void {
  }
  selectedGender: any;
  onSubmit(myForm: NgForm){
    console.log(myForm.value); //{first: '', last:''}
    console.log(myForm.valid); //false

  }
}
