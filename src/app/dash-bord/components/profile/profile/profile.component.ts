import { Component, Injectable, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmplyeedataService } from 'src/app/provider/emplyeedata.service';
import { MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../../edit/edit.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
@Injectable({
  providedIn: 'root'
})


export class ProfileComponent implements OnInit {
  emplyeeId:any
  emplyeelist:any

  constructor(
    private router:ActivatedRoute,
    private emplyeedata:EmplyeedataService,
    public dialog:MatDialog
    ) { }
  
  ngOnInit(): void {
    this.emplyeeId = this.router.snapshot.params
    this.getEmpData()
  }
  getEmpList(){
    this.emplyeedata.getEmpData().subscribe(
    data => this.emplyeedata = data
    )
  }
  getEmpData(){
    this.emplyeelist = this.emplyeedata.Emplyeedata.filter( emp => emp.id == this.emplyeeId.id)   
  }
  onEdit(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "50%";
    this.dialog.open(EditComponent,{data:this.emplyeelist})
  }
}
