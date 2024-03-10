import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaitentComponent } from './paitent/paitent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { PaitentvisitedetailComponent } from './paitentvisitedetail/paitentvisitedetail.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ServiceComponent } from './service/service.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
//import { provideNativeDateAdapter } from '@angular/material/core';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PaitentComponent,
    NavbarComponent,
    PaitentvisitedetailComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ServiceComponent,
    OurteamComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    //MatMomentDateModule
    //provideNativeDateAdapter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
