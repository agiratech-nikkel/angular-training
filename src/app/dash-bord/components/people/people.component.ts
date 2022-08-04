import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EmplyeedataService } from 'src/app/provider/emplyeedata.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, sample } from 'rxjs';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit,AfterViewInit{

  search!:string
  search1!:string
  name!:string
  dat!:[]
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  filteredOptions =  Observable<string[]>;
  filteredOptions2 =  Observable<string[]>;
  dataSource = new MatTableDataSource<any>;
  onEditing = true
  empUpdate:any
  datas!:number
  eDit!:boolean

  checks = false
  displayNoRecords=false
  options = [{key: "Male", id:'Male'},{key: 'Female', id:'Female'}];
  options2 = [{key:'Developer',id:'Developer'},{key:'DevOps',id:'DevOps'}, {key:"Testing",id:"Testing"},{key:"Admin",id:"Admin"}];
  options3 = [{key:'Development',id:'Development'},{key:'Management',id:'Management'}];
  displayedColumns  = ['select','no', 'name', 'lastname','email','hiredate','phonenumber','salary',];
  displayedColumns2  = ['select1','no1', 'name1', 'lastname1','email1','hiredate1', 'phonenumber1','salary1',];

  constructor(
    private data:EmplyeedataService,
    private router:Router,
    private fb:FormBuilder
    ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;  
  @ViewChild(MatSort) sort!: MatSort;

  getEmpList(){
    this.data.getEmpData().subscribe(
    data => this.dataSource.data = data
    ) 
  }
  ngOnInit(): void {
    this.getEmpList()
    this.dat = localStorage.getItem('EmpolyeeData') ? JSON.parse(localStorage.getItem('EmpolyeeData')!):[]
    this.dataSource.data =this.dat
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }  
  logOff() {
    localStorage.removeItem('loginStatus');
  }
  filter(){
    this.dataSource.filter = this.search.trim().toLowerCase()
    if(this.dataSource.filteredData.length==0){
      this.displayNoRecords=true;
    }else{
      this.displayNoRecords=false;
   
    }
  }
  filter1(){
    this.dataSource.filter = this.search1.trim().toLowerCase()
    if(this.dataSource.filteredData.length==0){
      this.displayNoRecords=true;
    }else{
      this.displayNoRecords=false;
   
    }
  }
  op(value:string){
  this.dataSource.filter = value.trim().toLowerCase();
  }
  selectAll(e:any){
    if(e == true){
      this.checks = true
    }else {
      this.checks = false
    }
  }

  onEdit(element:any){
    if(this.onEditing == true){
      element.isEdit = false 
      console.log("inifONedit")
  }
  else{
    element.isEdit = false
    console.log("inelseONedit")
    this.empUpdate = JSON.parse(localStorage.getItem('EmpolyeeData')!)
    this.datas = this.empUpdate.findIndex((d:any) => {return  d.id == element.id})
    this.empUpdate[this.datas].name = element.name
    this.empUpdate[this.datas].lastname= element.lastname
    this.empUpdate[this.datas].phonenumber= element.phonenumber
    this.empUpdate[this.datas].email = element.email
    this.empUpdate[this.datas].hiredate = element.hiredate
    this.empUpdate[this.datas].salary = element.salary
    localStorage.setItem('EmpolyeeData', JSON.stringify(this.empUpdate)) 
    } 
}
  onSave(element:any){
    if(this.onEditing == true){
    element.isEdit = false
    console.log("inifONSave")
    this.router.navigate(['/dashBoard/profile',element.id])
    }
    else{
    element.isEdit= true
      console.log("inelseONSave")
    }
  }
  onRoute(element:any){
    this.router.navigate(['/dashBoard/profile',element.id])
  }
  enableEdit(){
    if(this.onEditing == true){
      this.onEditing = false   }
   else{ 
      this.onEditing = true
    }
    console.log()
  }
  call(){
    console.log("sknx")
  }
}