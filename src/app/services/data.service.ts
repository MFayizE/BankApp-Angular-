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
  
  constructor() { }

  register(acno:any, user:any, pass:any){
    var userDetails=this.userDetails
    acno=parseInt(acno)
    pass=parseInt(pass)
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={
        acno,
        user,
        pass,
        balance:0,
        transaction:[]
      }
      console.log(userDetails)
      return true
    }
  }
  login(acno:any, pass:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(pass==userDetails[acno].pass)
      {
        this.currentuser=userDetails[acno].user
        this.currentacno=acno
        return true;
      }
      else{
        alert("wrong password")
        return false;
      }
    }
    else{
      alert("wrong username")
      return false;
    }
  }
  deposit(acno:any,pass:any,amt:any){
    var userDetails=this.userDetails
    var amount=parseInt(amt)
    if(acno in userDetails){
      if(pass==userDetails[acno].pass)
      {
        userDetails[acno].balance+=amount
        userDetails[acno].transaction.push(
          {type:'Credit',
          amount
          }
        )
        console.log(userDetails)
        return userDetails[acno].balance
      }
      else{
        alert("wrong password")
        return false;
      }
    }
    else{
      alert("wrong username")
      return false;
    }

  }
  withdraw(acno:any,pass:any,amt:any){
    var userDetails=this.userDetails
    console.log(userDetails)
    var amount=parseInt(amt)
    if(acno in userDetails){
      if(pass==userDetails[acno].pass)
      {
        if(userDetails[acno].balance>amount){
          userDetails[acno].balance-=amount
          userDetails[acno].transaction.push(
            {type:'Debit',
            amount
            }
          )
          console.log(userDetails)
          return userDetails[acno].balance
        }
        else{
          alert("Insuffient Balance")
          return false;
        }
      }
      else{
        alert("wrong password")
        return false;
      }
    }
    else{
      alert("wrong username")
      return false;
    }

  }

  getTransaction(acno:any){
    return this.userDetails[acno].transaction
  }
}
