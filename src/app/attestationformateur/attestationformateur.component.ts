import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import { ModelattestationComponent } from './modelattestation/modelattestation.component';

@Component({
  selector: 'app-attestationformateur',
  templateUrl: './attestationformateur.component.html',
  styleUrls: ['./attestationformateur.component.css']
})
export class AttestationformateurComponent implements OnInit {
  formation: any;
  connexionnew: any;

  data: string;

  constructor(private http: HttpClient, private route: Router, private connexionservice: ConnexionService,public dialog: MatDialog) { }
  
  //deconnexion
  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  } 

 //stock id de formation et ouvrire le model  Modelattestation
  openDialog(c: any) {
    this.connexionservice.attestationsformateur = c;
    this.dialog.open(ModelattestationComponent);

  }

  ngOnInit(): void {
       //Check if user's credentials allows him to connect
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}')
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('attesttationformateur');
      } else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      } } else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      

    } else {
      this.route.navigateByUrl('connexion');

    }

    //recupration de l'utilisateur connecté
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('user connecte'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });

      //recuperation des formations par id de formateurs
    this.http.get('http://localhost:8089/formation/formateur/' + test.id).subscribe({
      next: (data) => {
        this.formation = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });
  }

}