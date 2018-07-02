import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  profileView(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/details';
    console.log(data)
    return this.http.get(url + '?id=' + data)
  }
}
