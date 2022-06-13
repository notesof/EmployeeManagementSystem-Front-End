import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusReport } from '../status-report';
import { StatusReportService } from '../status-report.service';

@Component({
  selector: 'app-create-status-report',
  templateUrl: './create-status-report.component.html',
  styleUrls: ['./create-status-report.component.css']
})
export class CreateStatusReportComponent implements OnInit {


  statusReport:StatusReport=new StatusReport(0,'','','',0);

  constructor(private statusReportService: StatusReportService,
  private router:Router){}

  ngOnInit(): void {
  }


  saveStatusReport(){
    this.statusReportService.createStatusReport(this.statusReport).subscribe(data => {
      console.log(data);
      this.goToStatusReportList();
     
    },
    error => console.log(error));
  }
  goToStatusReportList(){
    this.router.navigate(['/statusreport']);
  } 
  
  onSubmit(){
    console.log(this.statusReport);
    this.saveStatusReport();
  }

}
