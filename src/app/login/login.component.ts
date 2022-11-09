import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(8)]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(8)]]
  })
  

  
  constructor(private router:Router, private service:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // changeacc(event:any){
  //   this.acno=(event.target.value)
  // }
  // changepass(event:any){
  //   this.pswd=(event.target.value)
  // }

  logIn(){
    let acno=this.loginForm.value.acno
    let pswd=this.loginForm.value.pswd

    const result=this.service.login(acno,pswd)
    if(this.loginForm.valid){
    if(result){
      alert("Login Successfull")
      this.router.navigateByUrl('dashboard')
    }
  }
  else{
    alert("Enter Valid Details")
  }
  }
}
