import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username!:string
  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  login(){
      localStorage.setItem('userName',this.username)
      console.log(this.username)
      this.Router.navigate(['/dashBoard'])
    }
}
