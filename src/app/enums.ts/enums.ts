import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class enumsobject {
    dat:any
    loginData(userName:string,logStatus:string) {
        localStorage.setItem('loginStatus',JSON.stringify({ userName,logStatus}))
      }
}

