import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css']
})
/**Cette page sert a envoyer un email pour recommander une formation!
 * en 1 er lieu on a pu recupérer  les formations pou chaquue candidats 
 * Mais on a un probléme lors de l'envoie  de mail (on peut envoyer un mail standard pour tt le monde pas de specification de formation
 * faite par BEN SALAH MARIEM* */
export class RecommandationComponent implements OnInit {

  connexionnew:any;
  candidat:any;
  nbreformationparcandidat:any;
  nbrecertificatparcandidat:any;
  email:any;
  user:any
  formation:any;

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  
/**En tant qu'utilisateur du système, 
je veux écrire un message à un contact et l'envoyer .*/
  ngOnInit(): void {
    this.http.get(' http://localhost:8089/user/'+this.connexionservice.email.id).subscribe({
      next: (data) => {this.user= data; 
        console.log(data); 
        },
      error: (err) => 
      {console.log(err); }
    });

    /** */
    this.http.get('http://localhost:8089/formation/candidat/'+this.connexionservice.email.id).subscribe({
      next: (data) => {this.formation= data; 
        console.log(data); 
        },
      error: (err) => 
      {console.log(err); }
    });


  }
  recommander(p:any){
    this.connexionservice.email=p;
      this.http.get(' http://localhost:8089/send/'+this.connexionservice.email.email).subscribe({
        next: (data) => {this.email= data; 
          console.log('envoie de mail'+data); 
          },
        error: (err) => 
        {console.log(err); }
      });
      }
      /**Indique sur l'ecran que le message est envoyé */
showMessage() {
    Swal.fire({
      text: 'Envoyé avec succès   !',
      icon: 'success'
    });
  }
}
