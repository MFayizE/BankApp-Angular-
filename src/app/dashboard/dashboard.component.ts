import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deleteAccount:boolean = false;
  user = ''
  acno = ''
  accountNumber: any
  systemDate: any;
  withdrawForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(8)]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(8)]],
    amount: ['', Validators.required]
  })
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(8)]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4), Validators.maxLength(8)]],
    amount: ['', Validators.required]
  })
  constructor(private service: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.systemDate = new Date()
    this.user = JSON.parse(localStorage.getItem('CurrentUser') || '')
    this.accountNumber = JSON.parse(localStorage.getItem('CurrentAccount') || '')
    if (!localStorage.getItem('CurrentAccount')) {
      alert('Please Login First')
      this.router.navigateByUrl('')
    }
  }

  logOut() {
    localStorage.removeItem('CurrentAccount')
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('token')
    this.router.navigateByUrl('')

  }
  Deposit() {
    let acno = this.depositForm.value.acno
    let pswd = this.depositForm.value.pswd
    let amount = this.depositForm.value.amount
    const result = this.service.deposit(acno, pswd, amount).subscribe((result: any) => {
      alert(result.message);
    },
      result => {
        alert(result.error.message)
      })

  }
  Withdraw() {
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount
    const result = this.service.withdraw(acno, pswd, amount).subscribe((result: any) => {
      alert(result.message);
    },
      result => {
        alert(result.error.message)
      })
  }
  delete() {
    this.deleteAccount = true;
  }
  deleteOff(){
    this.deleteAccount = false;
  }
  onCancel() {
    this.acno = ""
  }
  deleteOn(){
    const result = this.service.deleteAccount(this.accountNumber).subscribe((result: any) => {
      alert(result.message);
      this.router.navigateByUrl('');
    },
      result => {
        alert(result.error.message)
      })
  }

  }

