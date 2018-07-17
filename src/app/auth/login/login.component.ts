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
      email: new FormControl('admin@gmail.com', [Validators.required]),
      password: new FormControl('admin123', [Validators.required])
    })
  }

  ngOnInit() {
  }

  loginUser(){
   
    this.authService.login(this.userForm.value).subscribe( 
        (response) => {
          this.response = response;
          console.log(this.response._body);
         if(this.response.status == 'success'){
          this.authService.storageSave(response);
          this.router.navigate(['/userslist']);
         }else{
           this.router.navigate(['/login']);
           this.response = 'a';
         }
      },
      (error) => {
        this.response = "Something went wrong, Please try again";
      }
    )
  }

}
