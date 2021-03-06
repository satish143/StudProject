import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) { 
    this.usersService.userslist().subscribe( (response) => { this.users = response;})
  }

  ngOnInit() {
  }

}
