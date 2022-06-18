import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
private isUserLoggedSubject:BehaviorSubject<boolean>;
  constructor() {
    this.isUserLoggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);
   }

  login(email:string,password:string) { 
    //call login api and get access token from api
    let userToken='2510123456';
    localStorage.setItem("token",userToken);
    this.isUserLoggedSubject.next(true);

  }
  logout() { 
    localStorage.removeItem("token");
    this.isUserLoggedSubject.next(false);

  }

  // property => check if user is already exist in local storage
  get isUserLogged():boolean {
    return (localStorage.getItem("token"))?true:false;
  }

  // getUserLoggedStatus() {
  //   return this.isUserLoggedSubject;
  // }
  getUserLoggedStatus():Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
  }
}
