import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './users/userslist/userslist.component';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../workshop/users/users.service';
import { UserService } from '../workshop/user/user.service';
const routes: Routes = [
  { path: '', redirectTo: 'userslist', pathMatch: 'full'},
  { path: 'userslist', component: UserslistComponent},
  { path: 'profile-view', component: ProfileViewComponent},
  { path: 'profile-edit', component: ProfileEditComponent},
     
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [UserslistComponent, ProfileViewComponent, ProfileEditComponent],
  providers: [UsersService, UserService]
})
export class WorkshopModule { }
