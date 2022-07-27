import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../dash-bord/authuGaurd/authentication.service';
import { enumsobject } from '../enums.ts/login.enums';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})

export class LoginpageComponent implements OnInit,AfterViewInit {

  username!: string
  data: any
  loginForm!: FormGroup

  constructor(private router: Router, private authentication: AuthenticationService, private fb: FormBuilder, private storedData: enumsobject) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required]),
    })
    // console.log(this.loginForm.controls['userName'])
  }
  ngAfterViewInit(): void{
    if(this.authentication.auth() === true){
      this.router.navigate(['/dashBoard'])
      }
  }

  readData() {
    this.data = localStorage.getItem('loginStatus') ? JSON.parse(localStorage.getItem('loginStatus')!):{}
  }

  logginStatu(userName: string, logStatus:boolean) {
    // console.log('Login Fun', userName)
    this.storedData.loginData(userName, logStatus)
  }

  login() {
    this.logginStatu(this.loginForm.controls['userName'].value,true)
    // console.log(this.authentication.auth())
    this.router.navigate(['/dashBoard']) 
    this.readData()
  }
}
