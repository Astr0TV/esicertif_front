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

  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  } 

  openDialog(c: any) {
    this.connexionservice.attestationsformateur = c;
    this.dialog.open(ModelattestationComponent);

  }

  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}')
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('formationformateur');
      } else if (test.role == 'candidat') {
        this.route.navigateByUrl('formationcandidat');
      }

    } else {
      this.route.navigateByUrl('connexion');

    }

    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('user connecte'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });

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