import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  user: any;
  presence: any;
  nomformation: any;

  constructor(private route: Router) { }

  setUserSession(u: any): any{
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserConnect(): any{​​
    this.user = localStorage.getItem('userConnect');
    if(this.user != null) {​​
    return JSON.parse(this.user);
    }​​
    else {​​
    return null;
    }​​
    }​​


 isConnected(): boolean{
   if (this.getUserConnect() != null) {
     return true;
   }
   else {
     return false;
   }
 }
}
