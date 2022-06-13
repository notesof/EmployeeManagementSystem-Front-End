import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjectById(projIdid: any) {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:1010/project/getAll"
  private baseURL1 = "http://localhost:1010/project/addProject"
  private baseURL3="http://localhost:1010/project/project/{projectId}"


  constructor(private httpClient: HttpClient) { }

  getProjectList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`${this.baseURL}`);
  }

  createProject(project:Project):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,project)
  }

  deleteProject(projId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL3}/${projId}`);
  }
}
