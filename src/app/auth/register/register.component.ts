import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../../entities/register.entity';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  logoName: string = 'assets/logo.svg';
  user: any;
  userForm: FormGroup;
  response: any;
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
  constructor(private authService: AuthService) {
    this.user = new RegisterUser();
    this.userForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobile: new FormControl(''),
      interstedTech: new FormControl(''),
      workingstatus: new FormControl('')
    })
   }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.userForm.value);
    this.authService.register(this.userForm.value).subscribe( 
        (response) => {
          this.response = response;
          console.log(this.response);
      },
      (error) => {
        this.response = "Something went wrong, Please try again";
      }
    )
  }
  
}
