import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  employeeid:any=0;
  employeeSalary:any=0;
    temp:string | null;
  temp1:string | null;
  deatils:SalaryDetails| undefined;
  constructor(private activateRoute:ActivatedRoute) { 
    this.temp=activateRoute.snapshot.paramMap.get("eid");
    if(this.temp!=null){
      this.employeeid=parseInt(this.temp);
    }
    this.temp1=activateRoute.snapshot.paramMap.get("esal");
    if(this.temp1!=null){
      this.employeeSalary=parseInt(this.temp1);
      
    }
    this.finDetails();
    
  }
  finDetails(){
    this.deatils=this.SalDetailsArray.find(salDetail=>salDetail.empId==this.employeeid);
  }
  ngOnInit(): void {
  }
  SalDetailsArray:SalaryDetails[]=[
    new SalaryDetails(1,50000,40000,2000),
    new SalaryDetails(2,60000,50000,4000),
    new SalaryDetails(3,80000,60000,5000),
    new SalaryDetails(4,90000,80000,6000)
  ]

}
class SalaryDetails{
  empId:number;
  grossSalary:number;
  netSalary:number;
  variablePay:number;
  constructor(id:number,gsalary:number,ntSalary:number,variablepay:number){
    this.empId=id,
    this.grossSalary=gsalary,
    this.netSalary=ntSalary,
    this.variablePay=variablepay
  }
}