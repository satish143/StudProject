import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../shared/utils/storage';
import { UserService } from '../user.service';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) { 
    this.user = Storage.getSessionItem('user');
    let id = this.user.message._id;
    console.log(this.user)
    this.userService.profileView(id).subscribe( (res) => console.log(res))
  }

  ngOnInit() {
  }

}
