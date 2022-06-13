import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseURL ="http://localhost:1010/department/getAllDepartments";
  private baseURL1 ="http://localhost:1010/department/adddepartment";
 
 
  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.baseURL}`);
  }
  createDepatrment(department:Department):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,department);
  }
 
  
  
}