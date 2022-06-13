import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compliance } from '../compliance';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {

  private baseURL = "http://localhost:1010/compliance/getall"
  private baseURL1 = "http://localhost:1010/compliance/create"


  constructor(private httpClient: HttpClient) { }

  getComplianceList(): Observable<Compliance[]>{
    return this.httpClient.get<Compliance[]>(`${this.baseURL}`);
  }

  createCompliance(compliance:Compliance):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,compliance)
  }
}
