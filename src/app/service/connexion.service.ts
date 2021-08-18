import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  user: any;
  presence: any;
  nomformation: any;
<<<<<<< HEAD
  idgetaccept: any
  updateformation: any
  iddoucument: any
=======
  modifinformation:any;
  supprimeformateur: any

>>>>>>> 56322e97f54d503e4635c834fe63bd531fe0307a
  constructor(private route: Router) { }

  setUserSession(u: any): any {
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserConnect(): any {
    this.user = localStorage.getItem('userConnect');
    if (this.user != null) {
      return JSON.parse(this.user);
    }
    else {
      return null;
    }
  }

<<<<<<< HEAD
  deconnect(): any {
    localStorage.clear();
    this.route.navigateByUrl('');
  }
=======
>>>>>>> 56322e97f54d503e4635c834fe63bd531fe0307a

  isConnected(): boolean {
    if (this.getUserConnect() != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
