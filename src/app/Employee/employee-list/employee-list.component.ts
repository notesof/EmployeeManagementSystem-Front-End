import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../create-employee/employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  getEmployees: any;

  constructor(private employeeService:EmployeeService,
    private router:Router ){}
  employee : Employee[] = [];
  ngOnInit(): void {
   this.getallemployee();
  }
private getallemployee(){this.employeeService.getallemployee().subscribe((data)=>{
  this.employee=data;
});
}
// updateEmployee(userId:number){ 
//   this.router.navigate(['update-employee',userId]);
//  }
 deleteEmployee(id:number){
   this.employeeService.deleteEmployee(id).subscribe((data) =>{
     console.log(data);
     this.getallemployee();
   })
 }
}