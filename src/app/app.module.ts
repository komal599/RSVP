import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReportsComponent } from './reports/reports.component';
import { ChartsModule } from 'ng2-charts';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ReportsComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
