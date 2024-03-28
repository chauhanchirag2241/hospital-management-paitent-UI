import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paitent',
  templateUrl: './paitent.component.html',
  styleUrls: ['./paitent.component.css']
})
export class PaitentComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  response: any;
  doctorList: any;
  showApp: boolean = false;
  showAppError: boolean = false;
  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); }
  paitentFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required]],
    mobileNo: ['', [Validators.required]],
    emergencyContectNo: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    address: ['', [Validators.required]],
    bloodGroup: ['', [Validators.required]], 
    medicalIssue: ['', [Validators.required]],
    doctorid: ['', [Validators.required]],
    visiteDate: ['', [Validators.required]],
    timeingShift: ['', [Validators.required]],

  });

  ngOnInit() {
    this.getAllDoctor();
  }
  getAllDoctor() {    
      this.http.get<any>(`https://localhost:7087/api/employee/GetAllDoctor`)
        .subscribe((res) => {
          this.doctorList = res;
        });
   
  }

  makeAppointment() {
    console.log(this.paitentFormGroup.value);
    this.http.post<any>("https://localhost:7087/api/Paitent/Add", this.paitentFormGroup.value)
      .subscribe((res: any) => {
        this.response = res;
      
        if (this.response > 0) {
          this.showApp = true;
          
          }
        else {
          this.showAppError = true;
         }
      });
  }

}
