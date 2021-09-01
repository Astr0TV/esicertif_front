import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-formationsformatuer',
  templateUrl: './formationsformatuer.component.html',
  styleUrls: ['./formationsformatuer.component.css']
})
export class FormationsformatuerComponent implements OnInit {
  formation: any;
  connexionnew: any;

  data: string;

  constructor(private http: HttpClient, private route: Router, private connexionservice: ConnexionService) { }
//deconnexion
  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  ngOnInit(): void {
    //Check if user's credentials allows him to connect

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
