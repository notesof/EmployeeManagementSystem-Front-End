import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compliance } from '../compliance';
import { ComplianceService } from '../compliance-list/compliance.service';

@Component({
  selector: 'app-create-compliance',
  templateUrl: './create-compliance.component.html',
  styleUrls: ['./create-compliance.component.css']
})
export class CreateComplianceComponent implements OnInit {


  compliance:Compliance=new Compliance();

  constructor(private complianceService: ComplianceService,
  private router:Router){}

  ngOnInit(): void {
  }


  saveCompliance(){
    this.complianceService.createCompliance(this.compliance).subscribe(data => {
      console.log(data);
      this.goToComplianceList();
    },
    error => console.log(error));
  }

  goToComplianceList(){
    this.router.navigate(['/compliance']);
  }

  onSubmit(){
    console.log(this.compliance);
    this.saveCompliance();
  }

}
