import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-formation-candidat',
  templateUrl: './formation-candidat.component.html',
  styleUrls: ['./formation-candidat.component.css']
})

/*
* Cette page permet
*Visualiser les formateurs et le candidats 
*c'est au formateurs de choisir 

 * Faite par BEN SALAH Mariem
 */
export class FormationCandidatComponent implements OnInit {
  formation: any;
  connexionnew: any;

  constructor(private http: HttpClient , private route:Router,private connexionservice:ConnexionService) { }

 
  ngOnInit(): void {
      /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
    * l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role*/
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('formationformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('formationcandidat');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }
/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });

/* Cette API permet la Recupération des formatins par chaque candidat  */

    this.http.get('http://localhost:8089/formation/candidat/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }
  /**Cette API permet de deconnecter l'utilisateur connecté */

  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
}
