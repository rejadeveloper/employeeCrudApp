import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  empName:string="";
  empSalary:number=0;
  empAddress:string="";
  empPhone:number=0;

  registerForm:FormGroup=new FormGroup({});
  

  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      empName:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      empSalary:new FormControl("",[Validators.required]),
      empAddress:new FormControl("",[Validators.required]),
      empPhone:new FormControl("",[Validators.required])
    }
    );
  }
  get eName(){
    return this.registerForm.get("empName");
  }
  get eSalary(){
    return this.registerForm.get("empSalary");
  }
  get eAddress(){
    return this.registerForm.get("empAddress");
  }
  get ePhone(){
    return this.registerForm.get("empPhone");
  }
  registerFun(){
    console.log(this.registerForm.value);
   
  }
}
