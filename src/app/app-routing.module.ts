import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from "src/app/userlist/userlist.component";
import { ReportsComponent } from "src/app/reports/reports.component";
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'app-userlist', component: UserlistComponent },
  {path : 'app-reports', component: ReportsComponent},
  {path: '', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  
}
