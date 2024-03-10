import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
@Component({
  selector: 'app-paitentvisitedetail',
  templateUrl: './paitentvisitedetail.component.html',
  styleUrls: ['./paitentvisitedetail.component.css']
})
export class PaitentvisitedetailComponent {
  //paitentId: any;
  response: any;
  paitentName: any;
  paitentId: any;
  medicineResponse: any;

  constructor(private http: HttpClient,) { }
  searchForm = new FormGroup({
    infoType: new FormControl(''),
    email: new FormControl(''),
    search: new FormControl(''),
  });
  onSubmit() {
    const infoType = this.searchForm?.get('infoType')?.value;
    const email = this.searchForm?.get('email')?.value;
    const searchValue = this.searchForm?.get('search')?.value;
    if (infoType == "1") {
      this.http.get<any>(`https://localhost:7087/api/PaitentVisite/GetPaitentDetailByPaitentId/${searchValue}/${email}`)
        .subscribe(res => {
          this.response = res;
          this.paitentName = this.response[0].paitentName;
          this.paitentId = this.response[0].paitentId;
          console.log(this.response);
        });
    }
    else if (infoType == "2") {
      this.http.get<any>(`https://localhost:7087/api/PaitentVisite/GetMedicineByPaitentId/${searchValue}/${email}`)
        .subscribe(res => {
          this.medicineResponse = res;
          console.log(this.medicineResponse);
          this.paitentName = this.medicineResponse[0].paitentName;
          this.paitentId = this.medicineResponse[0].paitentId;
        });
    }
 
  }
  calculateTotalAmount(): number {
    return this.medicineResponse.reduce((total: any, item: { amount: any; }) => total + item.amount, 0);
  }
  //generatePDF() {
  //  const element = document.getElementById('medicineTable');

  //  if (element !== null) {
  //    html2canvas(element).then(canvas => {
  //      const imgData = canvas.toDataURL('image/png');
  //      const pdf = new jsPDF('p', 'mm', 'a4');
  //      const width = pdf.internal.pageSize.getWidth();
  //      const height = pdf.internal.pageSize.getHeight();

  //      pdf.addImage(imgData, 'PNG', 0, 0, 60, 60);
  //      pdf.save('medicine_bill.pdf');
  //    });
  //  } else {
  //    console.error('Element with id "medicineTable" not found.');
  //  }
  //}
  //generatePDF() {
  //  const element = document.getElementById('medicineTable');

  //  if (element !== null) {
  //    const width = element.offsetWidth;
  //    const height = element.offsetHeight;

  //    // Increase scale to improve resolution
  //    const scale = 2;

  //    html2canvas(element, { scale: scale }).then(canvas => {
  //      const imgData = canvas.toDataURL('image/png');
  //      const pdf = new jsPDF('p', 'mm', [width / scale, height / scale]); // Set PDF page size
  //      pdf.addImage(imgData, 'PNG', 0, 0, width / scale, height / scale);
  //      pdf.save('medicine_bill.pdf');
  //    });
  //  } else {
  //    console.error('Element with id "medicineTable" not found.');
  //  }
  //}
  
  downloadPDF() {
    const doc = new jsPDF();
    let yPos = 20;

    // Add title
    doc.setFontSize(18);
    doc.text('Patient Medicine Bill', 15, yPos);
    yPos += 10;

    // Add patient info
    doc.setFontSize(14);
    doc.text(`Patient ID: ${this.paitentId}`, 15, yPos);
    yPos += 10;
    doc.text(`Patient Name: ${this.paitentName}`, 15, yPos);
    yPos += 10;

    // Add table headers
    const headers = ['Medicine Name', 'Quantity', 'Amount'];
    doc.setFont('helvetica', 'bold');
    headers.forEach((header, index) => {
      doc.text(header, 15 + (index * 60), yPos);
    });
    yPos += 10;

    // Add table data
    doc.setFont('helvetica', 'normal');
    this.medicineResponse.forEach((item: any, rowIndex: any) => {
      const rowData = [item.medicineName, item.quantity.toString(), item.amount.toString()];
      rowData.forEach((data, colIndex) => {
        doc.text(data, 15 + (colIndex * 60), yPos + (rowIndex * 10));
      });
    });

    // Add total amount
    const totalAmount = this.calculateTotalAmount().toString();
    doc.text(`Total Amount: ${totalAmount}`, 15, yPos + (this.medicineResponse.length * 10) + 10);

    // Save the PDF
    doc.save('bill.pdf');

  }
  generatePDF() {
    const element: HTMLElement | null = document.getElementById('pdfContent');

    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('visit_details.pdf');
      });
    } else {
      console.error('Element with ID "pdfContent" not found.');
    }
  }
}



