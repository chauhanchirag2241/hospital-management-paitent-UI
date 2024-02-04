import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-paitent',
  templateUrl: './paitent.component.html',
  styleUrls: ['./paitent.component.css']
})
export class PaitentComponent {
  minDate: Date;
  maxDate: Date;
  response: any;
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


  makeAppointment() {
    console.log(this.paitentFormGroup.value);
    this.http.post<any>("https://localhost:7087/api/Paitent/Add", this.paitentFormGroup.value)
      .subscribe((res: any) => {
        this.response = res;
        //this.getAllEmployee();
        // if (this.response.statusCode == 200) {
        //this.toasrt.success("Employee Created. 😎")
        //this.router.navigate(['employee']);
        //  }
        // else {
        // this.toasrt.error("Error While Creating Employee. 😒😰")
        // }
      });
  }

}
