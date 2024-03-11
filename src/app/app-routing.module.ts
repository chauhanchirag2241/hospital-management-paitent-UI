import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaitentComponent } from './paitent/paitent.component';
import { PaitentvisitedetailComponent } from './paitentvisitedetail/paitentvisitedetail.component';
import { ServiceComponent } from './service/service.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "paitent", component: PaitentComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "features", component: FeaturesComponent },
  { path: "service", component: ServiceComponent },
  { path: "ourteam", component: OurteamComponent },
  { path: "testimonial", component: TestimonialComponent },
  { path: "paitentdetail", component: PaitentvisitedetailComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
