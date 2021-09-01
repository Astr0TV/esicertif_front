import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {jsPDF} from 'jspdf';
import { ExemplecertificatComponent } from '../exemplecertificat/exemplecertificat.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-certficatsadmin',
  templateUrl: './certficatsadmin.component.html',
  styleUrls: ['./certficatsadmin.component.css']
})
/*
* Cette page permet
*de visualier certificat pour l'admin'
 * Faite par BEN SALAH Mariem
 */
export class CertficatsadminComponent implements OnInit {
  connexionnew:any
  certificat:any
  candidatcertifie:any;
  data:any;

constructor(private route:Router, private connexionservice:ConnexionService, private http: HttpClient,public dialog: MatDialog) { }
/*Télècharger le pdf de certificat*/ 
@ViewChild('card',{static:false}) el!: ElementRef;

  ngOnInit(): void {
      /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
    * l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role*/    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'admin') {
        this.route.navigateByUrl('certificatadmin');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      } else if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      }
  } else {
    this.route.navigateByUrl('connexion');
  }
/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
    next: (data) => { this.connexionnew = data; 
       },
    error: (err) =>
     {console.log(err); }
  });
/* Cette API permet la Recupération de tt les candidat certifié*/ 
  this.http.get('http://localhost:8089/candidatcertifie').subscribe({
    next: (data) => { this.candidatcertifie= data; 
      },
    error: (err) => 
    {console.log(err); }
  });
  }
  /*Deconnexion*/ 
goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
/*genrer le pdf  */
  makePDF(){
    let pdf =new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
   
  }
  /*modal pour telecharger le certificat  */
  opendialog(p:any){
    this.connexionservice.cartif =  p;
    this.dialog.open(ExemplecertificatComponent);
  }

    }

