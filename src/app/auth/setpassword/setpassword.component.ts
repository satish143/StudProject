import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  userForm: FormGroup;
  response: any;
  
  logoName: string = 'assets/logo.svg';
  constructor(private authService: AuthService, private router: Router) { 
    this.userForm = new FormGroup({
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }
  setpasswordUser(){
    //console.log(this.userForm.value);
    let user = {
      email: this.authService.getParam('id'),
      password: this.userForm.value.password
    }
   
    console.log(user);
    this.authService.setpassword(user).subscribe( 
        (response) => {
          this.response = response;
         if(this.response.status == 1){
          this.router.navigate(['/login']);
         }else{
           this.router.navigate(['/setpassword']);
         }
      },
      (error) => {
        this.response = "Something went wrong, Please try again";
      }
    )
  }
}
