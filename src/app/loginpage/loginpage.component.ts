import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username!:string
  constructor() { }

  ngOnInit(): void {
  }
  login(){
      localStorage.setItem('u',this.username)
      console.log(this.username)
  }
}
