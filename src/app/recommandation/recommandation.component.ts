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
export class RecommandationComponent implements OnInit {
  connexionnew:any;
  candidat:any;
  nbreformationparcandidat:any;
  nbrecertificatparcandidat:any;
  email:any;
  user:any
  formation:any;
  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  showMessage() {
    Swal.fire({
      text: 'Envoyé avec succès   !',
      icon: 'success'
    });
  }

  ngOnInit(): void {
    this.http.get(' http://localhost:8089/user/'+this.connexionservice.email.id).subscribe({
      next: (data) => {this.user= data; 
        console.log(data); 
        },
      error: (err) => 
      {console.log(err); }
    });

    //http://localhost:8089/formation/candidat/20
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
//
}
