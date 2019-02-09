import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { AboutComponent } from './pages/about/about.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emp/:id', component: EmployeesComponent },
  { path: 'emps', component: EmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
