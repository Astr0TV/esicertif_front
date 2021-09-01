import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-statadmin',
  templateUrl: './statadmin.component.html',
  styleUrls: ['./statadmin.component.css']
})
/** Cette page permet de donner une vue d'ensemble sur 
 * le nombre des candidats inscrits(nbre de  candidats certifiés par rapport le nombre total des candidats)
 * *nombre de formations(nbre de formations certifiés) et le nombre de formateurs 
 *  
 * * faite par BEN SALAH MARIEM*
 */
export class StatadminComponent implements OnInit {
  
  connexionnew: any;
  candidat: any;
  formateur:any;
  formation:any;
  formationnonvalide:any;
  formationvalide:any;
  candidatcertifie:any;

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
      }
      
  } else {
 
    this.route.navigateByUrl('connexion');
  
  }
  /*
  * Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */
  this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
    next: (data) => { this.connexionnew = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) =>
     {console.log(err); }
  }); 

/**Cette API permet de retourner le nombre total des candidats inscrits dans l'etablissement  */
  this.http.get(' http://localhost:8089/nbrecandidat').subscribe({
    next: (data) => { this.candidat = data; 
      console.log('C e message affiche le nombre totale des etudiants'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  
/**Cette API permet de retourner le nombre total des formatuers  dans l'etablissement  */

  this.http.get('  http://localhost:8089/nbreformateur').subscribe({
    next: (data) => { this.formateur = data; 
      console.log('C e message affiche le nombre totale des formateurs'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

/**Cette API permet de retourner le nombre total des formations  dans l'etablissement  */

  this.http.get('   http://localhost:8089/nbreformation').subscribe({
    next: (data) => { this.formation= data; 
      console.log('C e message affiche le nombre totale des formation'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

/**Cette API permet de retourner le nombre total des formations non validées dans l'etablissement  */

  this.http.get('    http://localhost:8089/formationnonvalide').subscribe({
    next: (data) => { this.formationnonvalide= data; 
      console.log('C e message affiche le nombre totale des formations non valides'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

/**Cette API permet de retourner le nombre total des formations  validées dans l'etablissement  */

  this.http.get('    http://localhost:8089/formationvalide').subscribe({
    next: (data) => { this.formationvalide= data; 
      console.log('C e message affiche le nombre totale des formateurs'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
/**Cette API permet de retourner le nombre total des candidats certifié dans l'etablissement  */

  this.http.get('     http://localhost:8089/nbrecandidatcertifie').subscribe({
    next: (data) => { this.candidatcertifie= data; 
      console.log('C e message affiche le nombre totale des candidats'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });


  }
  /*Fonction qui permet la deconnexion de l'utilisateur 
  * et de supprimer tout ses données de local storage
   */
 goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  } 

}



