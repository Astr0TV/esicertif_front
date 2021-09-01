import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-exemplecertificat',
  templateUrl: './exemplecertificat.component.html',
  styleUrls: ['./exemplecertificat.component.css']
})
/*
* Cette page permet
*Visualiser l'exemplaire de certificat 
 

 * Faite par BEN SALAH Mariem
 */
export class ExemplecertificatComponent implements OnInit {
  
  connexionnew: any;
  certificat:any;
  formation:any;
  
  constructor(private http: HttpClient,private route :Router,private connexionservice:ConnexionService,public dialog: MatDialog) { }
  
  // recuperer le pdf
  @ViewChild('card',{static:false}) el!: ElementRef;

  ngOnInit(): void {
      /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
    * l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role*/
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('certificatformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('certificatcandidat');
      }
  } else {
    this.route.navigateByUrl('connexion');
  }
/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les  de'); 
        console.log(this.connexionservice.cartif.id)
        console.log(data) },
      error: (err) => {console.log(err); }
    });

/**Cette API permet de la recuperation de formation par id*/

    this.http.get(' http://localhost:8089/formation/'+ this.connexionservice.cartif.id).subscribe({
      next: (data) => { this.formation = data; 
         },
      error: (err) => {console.log(err); }
    });

/**Cette API permet de la recuperation de certificat par candidat
 * */   
 this.http.get(' http://localhost:8089/certifbyidcandidat/Candidat/'+ test.id).subscribe({
      next: (data) => { this.certificat = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }
  /**Cette API permet de  generer le pdf (certificat sous format pdf)
 * */   

  makePDF(){
    let pdf =new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
   
  }
}
