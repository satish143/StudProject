import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  response: any;
  logoName: string = 'assets/logo.svg';
  constructor(private authService: AuthService, private router: Router) { 
    this.userForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

  loginUser(){
    //console.log(this.userForm.value);
    this.authService.login(this.userForm.value).subscribe( 
        (response) => {
          this.response = response;
         if(this.response.status == 1){
          this.router.navigate(['/userslist']);
         }else{
           this.router.navigate(['/login']);
         }
      },
      (error) => {
        this.response = "Something went wrong, Please try again";
      }
    )
  }

}
