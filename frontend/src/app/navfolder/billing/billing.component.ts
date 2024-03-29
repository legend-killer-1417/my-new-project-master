import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit {
  bills: any[] = [];
  selectedBill: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData('Bills').subscribe(
      (data) => {
        this.bills = data;
        console.log(this.bills);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onBillSelect(event: any): void {
    const billnumber = event.target.value;
    console.log(billnumber);
    this.selectedBill = this.bills.find(bill => bill.Bill_Number === billnumber);
  }
}