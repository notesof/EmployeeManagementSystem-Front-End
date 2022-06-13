import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee = new Employee('','',0,'','','',new Date());
  

  constructor(
    private employeeService:EmployeeService) { }

ngOnInit(): void {
}

register(){
this.employeeService.addEmployee(this.employee).subscribe(
(data:any) => { 
    console.log(data);
    alert('added Successful!!');
},
(error: any) => {
  console.log(error);
  alert('add Failed');
}
);
}
}