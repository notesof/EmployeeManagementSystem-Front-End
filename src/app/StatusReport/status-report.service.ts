import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusReport } from './status-report';



@Injectable({
  providedIn: 'root'
})
export class StatusReportService {

  
 
  private baseURL1= "http://localhost:1010/statusreport/getAll"
  private baseURL= "http://localhost:1010/statusreport/create"

  constructor(private httpClient: HttpClient) { }

  getStatusReportList(): Observable<StatusReport[]>{
    return this.httpClient.get<StatusReport[]>(`${this.baseURL1}`);
  }

  createStatusReport(statusReport:StatusReport):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,statusReport);
  }
}