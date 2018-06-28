import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../../entities/register.entity';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logoName: string = 'assets/logo.svg';
  user: any;
  userForm: FormGroup;
  workingStatus = [
    {value: 'student', viewValue: 'Student'},
    {value: 'employee', viewValue: 'Employee'},
    {value: 'others', viewValue: 'Others'}
  ]
  technologiesIntrested = [
    {value: 'FrontEndDevelopment', viewValue: 'Front End Development'},
    {value: 'MeanStackDevelopment', viewValue: 'Mean Stack Development'},
    {value: 'PythonDeveloper', viewValue: 'Python Developer'},
    {value: 'GameDeveloper', viewValue: 'Game Developer'}
  ]
  constructor() {
    this.user = new RegisterUser();
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl('')
    })
   }

  ngOnInit() {
  }

  registerUser(){

  }
  
}
