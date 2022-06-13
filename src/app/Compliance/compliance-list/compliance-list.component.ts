import { Component, OnInit } from '@angular/core';
import { Compliance } from '../compliance';
import { ComplianceService } from './compliance.service';

@Component({
  selector: 'app-compliance-list',
  templateUrl: './compliance-list.component.html',
  styleUrls: ['./compliance-list.component.css']
})
export class ComplianceListComponent implements OnInit {

  compliances:Compliance[] | undefined;

  constructor(private complianceService: ComplianceService) { }

  ngOnInit(): void {

    // this.compliances=[{
    //   "complianceId":1,
    //   "rlType":"social",
    //   "details":"respect",
    //   "createDate":"10-jan-1998"
    // },
    // {
    //   "complianceId":2,
    //   "rlType":"social",
    //   "details":"respect",
    //   "createDate":"10-jan-1998"
    // }
    // ];

    this.getCompliances()
  

  }
 

  private getCompliances(){
    this.complianceService.getComplianceList().subscribe(data=> {
      this.compliances=data;
    });
  }

}
