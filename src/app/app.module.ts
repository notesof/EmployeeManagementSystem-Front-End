import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplianceListComponent } from './Compliance/compliance-list/compliance-list.component';

import { AdminNavbarComponent } from './Admin-Navbar/admin-navbar.component';
import { EmployeeNavbarComponent } from './Employee-Navbar/employee-navbar.component';
import { CreateComplianceComponent } from './Compliance/create-compliance/create-compliance.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { CreateProjectComponent } from './Project/create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { CreateDepartmentComponent } from './Department/create-department/create-department.component';
import { DepartmentListComponent } from './Department/department-list/department-list.component';
import { CreateStatusReportComponent } from './StatusReport/create-status-report/create-status-report.component';
import { StatusReportListComponent } from './StatusReport/status-report-list/status-report-list.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { AdminLoginComponent } from './Admin Login/admin-login/admin-login.component';
import { AdminSignupComponent } from './Admin Login/admin-signup/admin-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    ComplianceListComponent,
    AdminNavbarComponent,
    EmployeeNavbarComponent,
    CreateComplianceComponent,
    ProjectListComponent,
    CreateProjectComponent,
    HomeComponent,
    CreateDepartmentComponent,
    DepartmentListComponent,
    CreateStatusReportComponent,
    StatusReportListComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
