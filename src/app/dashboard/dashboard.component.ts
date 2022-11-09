import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  depo_acno=""
  depo_pswd=""
  depo_amount=""
  withd_acno=""
  withd_pswd=""
  withd_amount=""
  user=''
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.user=this.service.currentuser
  }
  Deposit(){
    var acno = this.depo_acno
    var pswd = this.depo_pswd
    var amount = this.depo_amount
    const result=this.service.deposit(acno,pswd,amount)

    if (result){
      alert(`${amount} deposited successfully, Remaining balance is ${result}`)
    }
  }
  Withdraw(){
    var acno = this.withd_acno
    var pswd = this.withd_pswd
    var amount = this.withd_amount
    const result=this.service.withdraw(acno,pswd,amount)

    if (result){
      alert(`${amount} Withdraw successful, Remaining balance is ${result}`)
    }
  }
}
