import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../dash-bord/authuGaurd/authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})

export class LoginpageComponent implements OnInit {

  username!: string
  userName: any
  loginForm!: FormGroup

  constructor(private Router: Router, private Authentication: AuthenticationService,private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.readData()
    // console.log(this.userName)
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('',[Validators.required]),
    })
    this.Router.navigate(['/dashBoard'])
    console.log(this.loginForm.controls['userName'])
  }

  logginStatus(value: string) {
    console.log('Login Fun', value)
    this.Authentication.loginStatus(value)
  }

  readData() {
    this.userName = window.localStorage.getItem('userName');
  }

  login() {
    localStorage.setItem('userName', this.loginForm.controls['userName'].value)
    this.readData()
    console.log(this.username)
    if (!this.userName) {
      this.logginStatus('false')
    } else {
      this.logginStatus('true')
    }
    this.Router.navigate(['/dashBoard'])
    console.log(this.loginForm.controls['userName'].value)

  }
}
