import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/Http';
//import { pipe } from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }



  register(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/register';
    return this.http.post(url, data).pipe( (res) => { return res;})
  }

  login(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/login';
    return this.http.post(url, data).pipe( (res) => { return res;})
  }
  setpassword(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/setpassword';
    return this.http.post(url, data).pipe( (res) => { return res;})
  }


}
