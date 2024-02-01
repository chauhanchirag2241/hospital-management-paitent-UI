import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaitentComponent } from './paitent/paitent.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "paitent", component: PaitentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
