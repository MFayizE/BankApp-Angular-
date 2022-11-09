import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

RegistrationForm=this.fb.group({
  acc:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(8)]],
  pass:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4),Validators.maxLength(8)]],
  user:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
})
  constructor(private router:Router, private service:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  signUp(){
    let acc=this.RegistrationForm.value.acc
    let pass=this.RegistrationForm.value.pass
    let user=this.RegistrationForm.value.user
    const result=this.service.register(acc,user,pass)
    if(this.RegistrationForm.valid){
    if(result){
      alert("Successfully Registered")
      this.router.navigateByUrl('')
    }
    else{
      alert("Failed to register")
      this.router.navigateByUrl('register')
    }
  }
  else{
    alert("Enter Valid Details")
    console.log(this.RegistrationForm.get('user')?.errors);
    
  }
  }
}
