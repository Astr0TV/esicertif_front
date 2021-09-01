import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmsuppleformateurComponent } from '../confirmsuppleformateur/confirmsuppleformateur.component';
import { CreateformateurComponent } from '../createformateur/createformateur.component';
import { ConnexionService } from '../service/connexion.service';


@Component({
  selector: 'app-listeformateuradmin',
  templateUrl: './listeformateuradmin.component.html',
  styleUrls: ['./listeformateuradmin.component.css']
})
/*
* Cette page permet
*Visualiser la liste des formateur des le centre
*Creer un nouveau formateur 
*supprime un formateur existant !!!! la supprission de formateur entraine une supprission definitive de tous les informations liés

 * Faite par BEN SALAH Mariem
 */

export class ListeformateuradminComponent implements OnInit {
  connexionnew:any;
  formateur:any;
  nbreformationparformateur:any;
  scoreformateur:any;
  array: any;

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

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

/* Cette API permet la Recupération des données de l'utilisateurs connecté (son nom, son prenom) */

this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
next: (data) => { this.connexionnew = data; 
  console.log('this msg concerne la personne connecté ',data); 
 },
error: (err) =>
 {console.log(err); }
});


/**Cette API permet de retourner les utilisateurs par son role 
 * on cherche a  afficher les formateurs !
  */

this.http.get('http://localhost:8089/usersrole/formateur ').subscribe({
    next: (data) => { this.formateur = data; 
      this.connexionservice.nbreformationparformateur=data;
      console.log('information de user by role',data) },
      
    error: (err) => 
    {
      console.log(err); }
  });

/** Cette API sert a afficher le nombre de formation par formation 
 * un X formateur il a une tele et telle formations
 */
  this.http.get('http://localhost:8089/nbreformationbyformateur/'+39).subscribe({
    next: (data) => { this.nbreformationparformateur = data; 
      console.log('this msg concerne nmbre de formation par formateur',data); 
      console.log(this.connexionservice.nbreformationparformateur.id)

       },
    error: (err) => 
    {console.log(err); }
  });


}
/** Cette API permet de deconnecter l'utilisateur actuel  et le supprimer de local storage  */
goToPage(pageName:string ): void{
  this.route.navigate([`${pageName}`]);
  localStorage.clear();
}

/** Cett API permet de creer un nouveau formateur */
createformateur():any{
  const myDialog=this.dialog.open(CreateformateurComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });}

/** Cett API permet de supprimer un nouveau formateur */

deleteformateur(p:any){ 
  this.connexionservice.supprimeformateur = p;
  const myDialog=this.dialog.open(ConfirmsuppleformateurComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });}


}
