import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { EmplyeedataService } from 'src/app/provider/emplyeedata.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit,AfterViewInit{

  search!:string
  search1!:string
  dat!:any
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  filteredOptions =  Observable<string[]>;
  filteredOptions2 =  Observable<string[]>;
  dataSource = new MatTableDataSource<any>;
  
  checks = false
  displayNoRecords=false
  options = [{key: "Male", id:'Male'},{key: 'Female', id:'Female'}];
  options2 = [{key:'Developer',id:'Developer'},{key:'DevOps',id:'DevOps'}, {key:"Testing",id:"Testing"},{key:"Admin",id:"Admin"}];
  displayedColumns  = ['select','no', 'name', 'lastname','email','hiredate','phonenumber','salary'];
  displayedColumns2  = ['select1','no1', 'name1', 'lastname1','email1','hiredate1', 'phonenumber1','salary1'];

  constructor(private data:EmplyeedataService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;  
  @ViewChild(MatSort) sort!: MatSort;

  getEmpList(){
    this.data.getEmpData().subscribe(
    data => this.dataSource.data = data
    ) 
  }
  ngOnInit(): void {
    this.getEmpList()
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

}
