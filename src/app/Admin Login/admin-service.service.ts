import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginAdmin } from './login-admin';
import { Loginadminresponse } from './loginadminresponse';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  rootEndPoint:string='http://localhost:1010/admin/add';
  loginEndPoint:string = 'http://localhost:1010/admin/login';
 // createAdminEndPoint:string = this.rootEndPoint+'addemployee';

  constructor(private http:HttpClient) { }

  addAdmin(admin:Admin):Observable<Object>
  {
    console.log('Admin Service - Create Admin called ');
    return this.http.post<Admin>(`${this.rootEndPoint}`,admin);
  }
  // public addUser(user:UserModels){
  //   return this.http.post(`${baseUrl}/user/createUser`,user)
  // }
 doLoginAction(loginDetails:LoginAdmin):Observable<Loginadminresponse>
 {
  return this.http.post<Loginadminresponse>(`${this.loginEndPoint}`,loginDetails);
}
  
}