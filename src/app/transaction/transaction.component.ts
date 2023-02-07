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
transaction:any = []
  constructor(private service:DataService, private router:Router) { 
    
  }

  ngOnInit(): void {
    if(!localStorage.getItem('CurrentAccount')){
      alert('Please Login First')
      this.router.navigateByUrl('')
    }
    this.acno=JSON.parse(localStorage.getItem('CurrentAccount') || '')
    this.service.getTransaction(this.acno).subscribe(result => {

      this.transaction = result;
      console.log(result)

    },
      result => {
        alert(result.error.message)
      })
  }

}
