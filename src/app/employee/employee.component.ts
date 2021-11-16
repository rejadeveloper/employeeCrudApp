import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public searchFilter:any='';
  query:any;
  constructor(private employeeService:EmployeeService) { }
  employee:Employee[]=[];

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
   this.employee= this.employeeService.getEmployee();
   console.log(this.employee);
  }
  deleteDetails(id:any){
    this.employee.forEach((value,index)=>{
      if(value.empId==id){
        this.employee.splice(index,1);
      }
       console.log('value',value);//array object
       console.log('index',index);//index start with 0
    });
  }
}
