import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExemplecertificatComponent } from '../exemplecertificat/exemplecertificat.component';
import { ConnexionService } from '../service/connexion.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-certificationcandidat',
  templateUrl: './certificationcandidat.component.html',
  styleUrls: ['./certificationcandidat.component.css']
})
/*
* Cette page permet
*creer certificat pour le canidat 
 * Faite par BEN SALAH Mariem
 */
export class CertificationcandidatComponent implements OnInit {
  
  formation: any;
  connexionnew: any;

  constructor(private http: HttpClient,private route :Router,private connexionservice:ConnexionService,public dialog: MatDialog) { }
  
  /*Deconnexion */
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
 
  ngOnInit(): void {
      /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
    * l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role*/    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('certificatformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('certificatcandidat');
      }
      else if (test.role == 'admin') {
        this.route.navigateByUrl('certificatadmin');
      }
  } else {
    this.route.navigateByUrl('connexion');
  
  }
/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        },
      error: (err) => {console.log(err); }
    });
/**Cette API permet de recuperer la liste des personnes certifiés*/
    this.http.get('http://localhost:8089/formation/candidat/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }

/**Cette fonction permet de lancer un modal d'afficher l'exemplaire de certificat */

  opendialog(p:any){
    this.connexionservice.cartif =  p;
    this.dialog.open(ExemplecertificatComponent);
  }

}
