import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ObservablesComponent,
    WeatherComponent,
    UserComponent,
    EmployeeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule, FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
