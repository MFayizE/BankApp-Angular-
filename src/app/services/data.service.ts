import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1000:{acno:1000,user:"arjun",pass:1000,balance:1000,transaction:[]},
    1001:{acno:1001,user:"akhil",pass:1001,balance:1000,transactio:[]}
  }
  
  

  currentuser=''
  currentacno=''
  
  constructor( private http:HttpClient) { 
    // this.getDetails()
  }
  ngOnInit(): void {
   
  }
  

  // saveDetails(){
  //   if(this.userDetails){
  //     localStorage.setItem('DataBase',JSON.stringify(this.userDetails))
  //   }
  //   if(this.currentacno){
  //     localStorage.setItem('CurrentAccount',JSON.stringify(this.currentacno))
  //   }
  //   if(this.currentuser){
  //     localStorage.setItem("CurrentUser", JSON.stringify(this.currentuser))
  //   }
  // }
  // getDetails(){
  //   if(localStorage.getItem('DataBase')){
  //     this.userDetails=JSON.parse(localStorage.getItem('DataBase')||'')
  //   }
  //   if(localStorage.getItem('CurrentAccount')){
  //     this.currentacno=JSON.parse(localStorage.getItem('CurrentAccount')||'')
  //   }
  //   if(localStorage.getItem('CurrentUser')){
  //     this.currentuser=JSON.parse(localStorage.getItem('CurrentUser')||'')
  //   }
  // }

  register(acno:any, user:any, pass:any){
    const data = {
      acno,user,pass
    }

  return this.http.post('http://localhost:3000/register',data)
  }
  //   var userDetails=this.userDetails
  //   acno=parseInt(acno)
  //   pass=parseInt(pass)
  //   if(acno in userDetails){
  //     return false
  //   }
  //   else{
  //     userDetails[acno]={
  //       acno,
  //       user,
  //       pass,
  //       balance:0,
  //       transaction:[]
  //     }
  //     console.log(userDetails)
  //     this.saveDetails()
  //     return true
  //   }
  // }
  getToken(){
    const headerOptions = {
      headers: new HttpHeaders(
        {
          'x-access-token': JSON.parse(localStorage.getItem('token')||'')
        }
      )
    }
    return headerOptions
  }
  login(acno:any, pass:any){
    const data = {
      acno,pass
    }
  return this.http.post('http://localhost:3000/login',data)
  }

  deposit(acno:any, pass:any, amount:any){
    amount=parseInt(amount)
    acno=parseInt(acno)
    
    const data = {
      acno,pass,amount
    }
    
  return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }


  withdraw(acno:any, pass:any, amount:any){
    amount=parseInt(amount)
    acno=parseInt(acno)
    const headerOptions = {
      headers: new HttpHeaders(
        {
          'x-access-token': JSON.parse(localStorage.getItem('token')||'')
        }
      )
    }
    const data = {
      acno,pass,amount
    }
    
  return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  }

  deleteAccount(acno:any){
    acno=parseInt(acno)
    const data = {
      acno
    }
    return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
  }
  //   var userDetails=this.userDetails
  //   if(acno in userDetails){
  //     if(pass==userDetails[acno].pass)
  //     {
  //       this.currentuser=userDetails[acno].user
  //       this.currentacno=acno
  //       this.saveDetails()
  //       return true;
  //     }
  //     else{
  //       alert("wrong password")
  //       return false;
  //     }
  //   }
  //   else{
  //     alert("wrong username")
  //     return false;
  //   }
  // }
  // deposit(acno:any,pass:any,amt:any){
  //   var userDetails=this.userDetails
  //   var amount=parseInt(amt)
  //   if(acno in userDetails){
  //     if(pass==userDetails[acno].pass)
  //     {
  //       userDetails[acno].balance+=amount
  //       userDetails[acno].transaction.push(
  //         {type:'Credit',
  //         amount
  //         }
  //       )
  //       console.log(userDetails)
  //       this.saveDetails()
  //       return userDetails[acno].balance
  //     }
  //     else{
  //       alert("wrong password")
  //       return false;
  //     }
  //   }
  //   else{
  //     alert("wrong username")
  //     return false;
  //   }

  // }
  // withdraw(acno:any,pass:any,amt:any){
  //   var userDetails=this.userDetails
  //   console.log(userDetails)
  //   var amount=parseInt(amt)
  //   if(acno in userDetails){
  //     if(pass==userDetails[acno].pass)
  //     {
  //       if(userDetails[acno].balance>amount){
  //         userDetails[acno].balance-=amount
  //         userDetails[acno].transaction.push(
  //           {type:'Debit',
  //           amount
  //           }
  //         )
  //         console.log(userDetails)
  //         this.saveDetails()
  //         return userDetails[acno].balance
  //       }
  //       else{
  //         alert("Insuffient Balance")
  //         return false;
  //       }
  //     }
  //     else{
  //       alert("wrong password")
  //       return false;
  //     }
  //   }
  //   else{
  //     alert("wrong username")
  //     return false;
  //   }

  // }

  getTransaction(acno:any){
    acno=parseInt(acno)
    const headerOptions = {
      headers: new HttpHeaders(
        {
          'x-access-token': JSON.parse(localStorage.getItem('token')||'')
        }
      )
    }
    const data = {
      acno
    }
    
    return this.http.post('http://localhost:3000/transaction',data,headerOptions)
  }
}
