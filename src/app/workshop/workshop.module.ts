import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './users/userslist/userslist.component';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
     
]


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [UserslistComponent, ProfileViewComponent, ProfileEditComponent]
})
export class WorkshopModule { }
