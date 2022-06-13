import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
   

  constructor(private departmentService:DepartmentService) { }
  department: Department[]=[];

  ngOnInit(): void {
    this.getDepartment();
  }
  private getDepartment(){
    this.departmentService.getDepartmentList().subscribe(data=> {
       this.department = data;
    });
  }
  
  
}