import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmplyeedataService } from 'src/app/provider/emplyeedata.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm!:FormGroup
  empUpdate:any
  dat!:number
  editObj!:{}

  deprtment = [{key:"Development",value:"Development"},{key:"Testing",value:"testing"},{key:"Management",value:"Management"}]
  division = [{key:"Quality Analyst",value:"Quality Analyst"},{key:"RoR",value:"RoR"},{key:"Node Js",value:"Node Js"},{key:"FrontEnd UI",value:"FrontEnd UI"},{key:"HR & Admin",value:"HR & Admin"}]
  gender = [{key:"Male",value:"Male"},{key:"Female",value:"Female"}]
  rating = [{key:"1",value:"1"},{key:"2",value:"2"},{key:"3",value:"3"},{key:"4",value:"4"},{key:"5",value:"5"},]
  lastProject = [{key:"Jail",value:"Jail"},{key:"Intercity",value:"Intercity"},{key:"Raw",value:"Raw"},{key:"None",value:"None"}]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private emplyeeData:EmplyeedataService,
    private router: Router, 
    public dialogRef: MatDialogRef<EditComponent>
  ) {
   }


  ngOnInit(): void {
    localStorage.getItem('EmpolyeeData') ? JSON.parse(localStorage.getItem('EmpolyeeData')!):[]
    this.editForm = this.fb.group({
      name: new FormControl(this.data[0].name, [Validators.required]),
      lastName: new FormControl(this.data[0].lastname, [Validators.required]),
      id: new FormControl(this.data[0].id, [Validators.required]),
      phoneNumber: new FormControl (this.data[0].phonenumber,[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      email: new FormControl (this.data[0].email,[Validators.required,Validators.email]),
      deprtment: new FormControl (this.data[0].Department,[Validators.required]),
      division: new FormControl (this.data[0].division,[Validators.required]),
      dob: new FormControl (this.data[0].dob,[Validators.required]),
      expericnce: new FormControl (this.data[0].Expericnce,[Validators.required]),
      gender: new FormControl (this.data[0].salary,[Validators.required]),    
      rating: new FormControl (this.data[0].rateing,[Validators.required]),    
      lastProject: new FormControl (this.data[0].lastproject,[Validators.required]),    
    })  
  }

  editSubmit(){
    this.empUpdate = JSON.parse(localStorage.getItem('EmpolyeeData')!)
    this.dat = this.empUpdate.findIndex((d:any) => {return  d.id == this.data[0].id})
    this.editObj = {
      lastname : this.editForm.controls['lastName'].value,
      name:this.editForm.controls['name'].value,
      id: this.editForm.controls['id'].value,
      phonenumber: this.editForm.controls['phoneNumber'].value,
      email:this.editForm.controls['email'].value,
      Department : this.editForm.controls['deprtment'].value,
      lastproject : this.editForm.controls['lastProject'].value,
      rateing : this.editForm.controls['rating'].value,
      salary : this.editForm.controls['gender'].value,
      Expericnce : this.editForm.controls['expericnce'].value,
      dob : this.editForm.controls['dob'].value,
      division : this.editForm.controls['division'].value,
      image:this.data[0].image,
      hiredate:this.data[0].hiredate
    }
    this.empUpdate[this.dat] = this.editObj
      localStorage.setItem('EmpolyeeData', JSON.stringify(this.empUpdate))
      localStorage.getItem('EmpolyeeData') ? JSON.parse(localStorage.getItem('EmpolyeeData')!):[]
    this.dialogRef.close();

  }
  cancelSubmit(){
    this.dialogRef.close();
  }
}


