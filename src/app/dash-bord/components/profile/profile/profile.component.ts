import {Component, Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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


export class ProfileComponent implements OnInit{
  emplyeeId:any
  emplyeelist:any
  dat!:[]
  call = true

  constructor(
    private router:ActivatedRoute,
    public dialog:MatDialog
    ) { }
  
  ngOnInit(): void {
    this.emplyeeId = this.router.snapshot.params
    this.getEmpData()
  }
  getEmpData(){
    this.dat = localStorage.getItem('EmpolyeeData') ? JSON.parse(localStorage.getItem('EmpolyeeData')!):{}
    this.emplyeelist = this.dat.filter( (d: { id: number; }) => d.id == this.emplyeeId.id)  
  }
  onEdit(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "70%";
    dialogconfig.autoFocus = true
    this.dialog.open(EditComponent,{data:this.emplyeelist,disableClose:true}).afterClosed().subscribe(
    result =>{
    this.dat = localStorage.getItem('EmpolyeeData') ? JSON.parse(localStorage.getItem('EmpolyeeData')!):{}
    this.emplyeelist = this.dat.filter( (d: { id: number; }) => d.id == this.emplyeeId.id)  
      }
    )
  }
}
