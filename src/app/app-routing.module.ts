import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ObservablesComponent } from './observables/observables.component';
import { WeatherComponent } from './weather/weather.component';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path : "dashboard",component:DashboardComponent},
  {path : "about", component:AboutComponent},
  {path : "observables", component:ObservablesComponent},
  {path : "weather", component:WeatherComponent},
  {path : "user", component:UserComponent},
  {path : "employee", component:EmployeeComponent},  
  {path : "company", component:CompanyComponent},  

  {path : "", redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
