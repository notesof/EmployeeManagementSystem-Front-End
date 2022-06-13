import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Project/project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Project[] | undefined;

  
  constructor(private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {

    

    this.getProjects()
  

  }
 

  private getProjects(){
    this.projectService.getProjectList().subscribe(data=> {
      this.projects=data;
    });
  }

  deleteProject(projId: number){
    this.projectService.deleteProject(projId).subscribe( data => {
      console.log(data);
      this.getProjects();
    })
  }

  projectDetails(id: number){
    this.router.navigate(['project-details', id]);
  }
}
