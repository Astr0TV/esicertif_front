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

  ngOnInit(): void {
    this.redirect();
  }

  redirect(): any {
    if (localStorage.getItem('user') != null) {
      this.route.navigateByUrl('/accueil');
    }
  }

connexion(val: any): any {
  this.http.post('http://localhost:8089/connexion', val).subscribe({
    next: (data) => {
      console.log(data);
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

      } else { this.msg = 'Identifiants incorrectes !! '; console.log('identifiants incorrectes ! ')}
    }, error: (err) => { console.log(err) }
  })
}




}

