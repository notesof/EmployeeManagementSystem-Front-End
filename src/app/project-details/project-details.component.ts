// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Project } from '../project';
// import { ProjectService } from '../project.service';

// @Component({
//   selector: 'app-project-details',
//   templateUrl: './project-details.component.html',
//   styleUrls: ['./project-details.component.css']
// })
// export class ProjectDetailsComponent implements OnInit {

//   projId: number
//   project: Project
//   constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

//   ngOnInit(): void {
//     this.projId = this.route.snapshot.params['projId'];

//     this.project = new Project(0,'','');
//     this.projectService.getProjectById(this.projId).subscribe( data => {
//       this.project = data;
//     });
//   }
// }
