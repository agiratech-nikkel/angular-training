import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class enumsobject {
    dat:any
    loginData(userName:string,logStatus:boolean) {
        localStorage.setItem('loginStatus',JSON.stringify({ userName,logStatus}))
      }
}

