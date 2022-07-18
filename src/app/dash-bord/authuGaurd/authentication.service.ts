import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login: any
  constructor(private router:Router) { }
  loginStatus(value: string) {
    localStorage.setItem('loginStatus', value)
  }
  canActivate():boolean {
    this.login = window.localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')!):Boolean
    console.log(this.login)
    if(this.login === true) {
      return true
    }else{
    this.router.navigate([''])
    }
    return false;
  }
}
