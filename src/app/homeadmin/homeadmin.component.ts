import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
/*
* Cette page permet
*Visualiser la liste des formations terminé et en cours
*le formateur responsable 
*le nombre d'h
*le'etat de formation


 * Faite par BEN SALAH Mariem
 */
export class HomeadminComponent implements OnInit {

  connexionnew: any;
  formation: any;
  data: any;

  constructor(private route:Router,private connexionservice:ConnexionService,private http: HttpClient) { }
  
  ngOnInit(): void {

      /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
    * l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role*/
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      }else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }
/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
    next: (data) => { this.connexionnew = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) =>
     {console.log(err); }
  });

  //Cette API permet la recuperation de toute la liste des formations
  this.http.get('http://localhost:8089/allformation').subscribe({
    next: (data) => { this.formation = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  } 
   /**Cette API permet la recuperation du nom de formation*/
  nomformation(nomformation: any):any {
    this.connexionservice.nomformation = nomformation;
    console.log(nomformation);
  }
   /**Cette API permet la deconnexion  de l'utilisateur en cours*/
   goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  } 


  
}
