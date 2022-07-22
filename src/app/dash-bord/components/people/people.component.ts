import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { enumsobject } from 'src/app/enums.ts/enums';
import { MatPaginator } from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit,AfterViewInit{

  search!:string
  search1!:string
  
  myControl = new FormControl('');
  myControl2 = new FormControl('');
  options: string[] = ['Male', 'Female'];
  options2: string[] = ['developer', 'testing','Admin'];
  filteredOptions!: Observable<string[]>;
  filteredOptions2!: Observable<string[]>;
  displayedColumns  = ['select','no', 'name', 'lastname','email','hiredate','phonenumber','salary'];
  displayedColumns2  = ['select1','no1', 'name1', 'lastname1','email1','hiredate1', 'phonenumber1','salary1'];
  dataSource = new MatTableDataSource<any>(this.data.Emplyeedata);

  constructor(private data:enumsobject,private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
  }

  logOff() {
    localStorage.removeItem('loginStatus');
  }
  filter(){
    this.dataSource.filter = this.search.trim().toLowerCase()
  }
  filter1(){
    this.dataSource.filter = this.search1.trim().toLowerCase()
  }
  op(value:any){
    this.dataSource.filter = value.trim().toLowerCase()
  }
}
