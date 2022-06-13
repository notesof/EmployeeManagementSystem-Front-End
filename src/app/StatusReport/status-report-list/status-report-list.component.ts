import { Component, OnInit } from '@angular/core';
import { StatusReport } from '../status-report';
import { StatusReportService } from '../status-report.service';


@Component({
  selector: 'app-status-report-list',
  templateUrl: './status-report-list.component.html',
  styleUrls: ['.status-report-list.component.css']
})
export class StatusReportListComponent implements OnInit {

 statusReports:StatusReport[]=[];

  constructor(private statusReportService: StatusReportService) { }

  ngOnInit(): void {

    this.getStatusReports();
  

  }
 

  private getStatusReports(){
    this.statusReportService.getStatusReportList().subscribe(data=> {
      this.statusReports=data;
    });
  }

}