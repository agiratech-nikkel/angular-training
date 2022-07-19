import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService{

  data:any
  isAuthenticate = false;
  constructor(private router:Router) { }

  auth(): boolean {
    this.data = localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')!):{}
    if (this.data.logStatus === 'true') {
      this.isAuthenticate = true
      return true
    }else{
     this.isAuthenticate = false
    return false
    }
  }
}
