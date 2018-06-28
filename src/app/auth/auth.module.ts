import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {MatCardModule, MatInputModule, MatSelectModule, MatButtonModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'setpassword', component: SetpasswordComponent}

];



@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, SetpasswordComponent],
  providers: [AuthService]
})
export class AuthModule { }
