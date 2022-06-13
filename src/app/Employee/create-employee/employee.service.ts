import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // httpClient: any;
  // updateEmployee(employee: Employee) {
  //   throw new Error('Method not implemented.');
  // }
  
  private baseURL ="http://localhost:1010/employee/addemployee"
  private baseURL1 ="http://localhost:1010/employee/getAllEmployee"
  //private baseURL2 ="http://localhost:1010/employee/update-employee"
  private baseURL3 ="http://localhost:1010/employee/deleteById"



  constructor(private http:HttpClient)
    
   {}
   addEmployee(employee:Employee){
    return this.http.post(`${this.baseURL}`,employee)
 }
   getallemployee():Observable<Employee[]>{
   return this.http.get<Employee[]>(`${this.baseURL1}`)
 }

deleteEmployee(userId:number):Observable<object>{
  return this.http.delete(`${this.baseURL3}/${userId}`);
}
 
  
}