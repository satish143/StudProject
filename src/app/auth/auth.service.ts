import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppService } from '../shared/service/app.service';
import { Storage }from '../shared/utils/storage';
import {  map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  token: string;
  constructor(private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute, private appService: AppService) { }



  register(data: any){
    let url = 'http://localhost:5000/register';
    return this.http.post(url, data);
  }

  login(data: any){
    let url = 'http://localhost:5000/login';
    // return this.http.get(url + '?email=' + data.email + '&password=' + data.password);
     return this.http.post(url, data);
  }
  setpassword(data: any): Observable<any>{
    let url = 'https://dlworkshop.herokuapp.com/password';
    return this.http.post(url, data);
  }


  storageSave(data: any){
    if(data) {
        Storage.setSessionUser(data);
        // let data2 = JSON.stringify(data);
        // sessionStorage.setItem('user', data);
        this.appService.sessionUserEmit(data);
  }
 }

 logout(): void {
  this.token = null;
  localStorage.removeItem('currentUser');
}
getParam(key: string){
  return this.activatedroute.snapshot.queryParams[key];
}

}
