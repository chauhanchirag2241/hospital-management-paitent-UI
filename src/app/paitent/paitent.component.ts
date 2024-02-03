import { getLocaleDateTimeFormat } from '@angular/common';
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

  constructor(private _formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31); }
  paitentFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required]],
    mobileNo: ['', [Validators.required]],
    emgMobileNo: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    address: ['', [Validators.required]],
    booldGroup: ['', [Validators.required]],
    medicalIssue: ['', [Validators.required]],
    doctorid: ['', [Validators.required]],
    visiteDate: ['', [Validators.required]],
    visiteTime: ['', [Validators.required]],

  });


  makeAppointment() {
    console.log(this.paitentFormGroup.value);
  }

}
