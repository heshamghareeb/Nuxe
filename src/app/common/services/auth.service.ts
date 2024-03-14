import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,  private _Router:Router) {
    if (localStorage.getItem("userToken") != null) {
      this.saveUserData();
    }
  };
  userData:any = new BehaviorSubject(null);

  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem("_token"));
    let decodedToken:object = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  };

  signup(userData:object):Observable<any>{
    return this._HttpClient.post('https://movies-api.routemisr.com/signup/', userData);
  }

  signin(userData:object):Observable<any>{
    return this._HttpClient.post('https://movies-api.routemisr.com/signin/', userData);
  }

  signOut(){
    localStorage.removeItem("_token");
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
