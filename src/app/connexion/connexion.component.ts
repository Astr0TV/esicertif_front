import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  user: any
  msg: any

  constructor(private http: HttpClient,private route: Router,private  connexionservice: ConnexionService) { }


<<<<<<< HEAD
  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      }
      else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      }
  } else {
    this.route.navigateByUrl('connexion');
  
  }
}

=======
  ngOnInit(): void {}
//Check if user's credentials allows him to connect
>>>>>>> 9ea0bc75759b4eab108a05dd9172549a2a0a2f72
connexion(val: any): any {
  this.http.post('http://localhost:8089/connexion', val).subscribe({
    next: (data) => {
      this.user = data;
      if (this.user != null ) {
        if(this.user.role=='candidat')
        {this.connexionservice.setUserSession(this.user);
        this.route.navigateByUrl('homecandidat');
        }
        else if (this.user.role=='formateur')
        {this.connexionservice.setUserSession(this.user);
        this.route.navigateByUrl('homeformateur');
        }else {
          this.connexionservice.setUserSession(this.user);
          this.route.navigateByUrl('homeadmin'); }

      } else { this.msg = 'Identifiants incorrectes !! '; 
      console.log('identifiants incorrectes ! ')}
    }, error: (err) => { console.log(err) }
  })
}




}

