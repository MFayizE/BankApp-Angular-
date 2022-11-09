import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
acno:any;
transaction:any
  constructor(private service:DataService) { 
    this.acno=this.service.currentacno;
    console.log(this.acno)
    this.transaction=this.service.getTransaction(this.acno)
  }

  ngOnInit(): void {
  }

}
