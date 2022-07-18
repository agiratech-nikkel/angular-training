import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../dash-bord/authuGaurd/authentication.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username!:string
  userName:any
  constructor(private Router:Router, private Authentication:AuthenticationService) { }
  ngOnInit(): void {
    this.userName = window.localStorage.getItem('userName');
    console.log(this.userName)
    this.Router.navigate(['/dashBoard'])
  }
  logginStatus(value: string){
    console.log('Login Fun', value)
    this.Authentication.loginStatus(value)
  }
  login(){
      localStorage.setItem('userName',this.username)
      console.log(this.username)
      if(!this.userName){
        this.logginStatus('false')
      }
      else{
      this.logginStatus('true')
      }
      this.Router.navigate(['/dashBoard'])
      
    }
  
}
