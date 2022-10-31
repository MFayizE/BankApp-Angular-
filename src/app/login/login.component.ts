import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails:any={
    1000:{acno:1000,user:"arjun",pass:1000,balance:1000},
    1001:{acno:1001,user:"arjun",pass:1001,balance:1000}
  }
  acno = "";
  pswd = "";
  

  
  constructor() { }

  ngOnInit(): void {
  }

  changeacc(event:any){
    this.acno=(event.target.value)
  }
  changepass(event:any){
    this.pswd=(event.target.value)
  }

  logIn(){
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(pswd==userDetails[acno]["pass"]){
        alert("Success")
      }
      else{
        alert("wrong pas")
      }
    }
    else{
      alert("wrong user")
    }
  }
}
