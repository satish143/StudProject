import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  userslist(): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/users';
    return this.http.get(url);
  }

  profileView(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/details';
    return this.http.get(url + '?id=' + data)
  }

}
