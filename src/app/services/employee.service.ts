import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee[]=[
    new Employee(1,'Smit',60000,'Uk',900378787),
    new Employee(2,'Scot',70000,'Inda',98987878),
    new Employee(3,'Mary',80000,'Usa',80786767),
    new Employee(4,'Tony',90000,'Japan',56765466),
  ]

  constructor() { }
  getEmployee(){
   return this.employee;
  }
}

export class Employee{
  empId:number;
  empName:string;
  empSalary:number;
  empAddress:string;
  empPhone:number;
  constructor(id:number,name:string,salary:number,address:string,phone:number){
    this.empId=id
    this.empName=name;
    this.empSalary=salary;
    this.empAddress=address;
    this.empPhone=phone;
  }
}