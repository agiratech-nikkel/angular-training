import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable, of } from 'rxjs';
import { emplyeedata } from 'src/app/enums.ts/employee.enums';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  emplyeeId:any
  emplyeelist:any

  constructor(private router:ActivatedRoute,private emplyeedata:emplyeedata) { }
  
  ngOnInit(): void {
    this.emplyeeId = this.router.snapshot.params
    this.getEmpList()
  }
  getEmpData():Observable<any>{
    return of(this.emplyeedata.Emplyeedata.filter( emp => emp.id == this.emplyeeId.id))   
  }
  getEmpList(){
    this.getEmpData().subscribe({
      next:(responce) =>{
        this.emplyeelist = responce
      }
    })
  }
}
