import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin Login/admin-login/admin-login.component';
import { AdminSignupComponent } from './Admin Login/admin-signup/admin-signup.component';
import { ComplianceListComponent } from './Compliance/compliance-list/compliance-list.component';
import { CreateComplianceComponent } from './Compliance/create-compliance/create-compliance.component';
import { CreateDepartmentComponent } from './Department/create-department/create-department.component';
import { DepartmentListComponent } from './Department/department-list/department-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './Project/create-project/create-project.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { CreateStatusReportComponent } from './StatusReport/create-status-report/create-status-report.component';
import { StatusReportListComponent } from './StatusReport/status-report-list/status-report-list.component';

const routes: Routes = [

  {path: `compliance`, component: ComplianceListComponent},
  {path: `compliance/compliance/create`, component: CreateComplianceComponent},
  // {path: '', redirectTo:`compliance/compliance/getall`,pathMatch:'full'},

  {path: `project`, component: ProjectListComponent},
  {path: `project/project/addProject`, component: CreateProjectComponent},
  // {path: '', redirectTo:`project/project/getAll`,pathMatch:'full'},

  {path: `department`, component: DepartmentListComponent},
  {path: `department/department/adddepartment`, component: CreateDepartmentComponent},
  // {path: '', redirectTo:`department/department/getAllDepartments`,pathMatch:'full'},

  {path: `statusreport`, component: StatusReportListComponent},
  {path: `statusreport/statusreport/create`, component: CreateStatusReportComponent},
  // {path: '', redirectTo:`statusreport/statusreport/getAll`,pathMatch:'full'},

  {path: `employee`, component: EmployeeListComponent},
  {path: `employee/employee/addemployee`, component: CreateEmployeeComponent},
  // {path: '', redirectTo:`employee/employee/getAllEmployee`,pathMatch:'full'},

  
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'AdminSignup',component:AdminSignupComponent},
  {path:'Home',component:HomeComponent},
  {path:'',redirectTo:'AdminLogin',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
