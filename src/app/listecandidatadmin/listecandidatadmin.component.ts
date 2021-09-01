import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatecandidatComponentComponent } from '../createcandidat-component/createcandidat-component.component';
import { RecommandationComponent } from '../recommandation/recommandation.component';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-listecandidatadmin',
  templateUrl: './listecandidatadmin.component.html',
  styleUrls: ['./listecandidatadmin.component.css']
})

/*
* Cette page permet
*Visualiser la liste des candidats des le centre
*Creer un nouveau candidat 
*supprime un candidat existant !!!! la supprission de formateur entraine une supprission definitive de tous les informations liés

 * Faite par BEN SALAH Mariem
 */
export class ListecandidatadminComponent implements OnInit {

  connexionnew:any;
  candidat:any;
  nbreformationparcandidat:any;
  nbrecertificatparcandidat:any;
  email:any

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
  /*methode qui permet de tester l'éligibilité de connexion pour l'utilisateur 
   *l'utilisateur une fois connecté ;il sera redériger vers son interface personnel selon son role
   */
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
  console.log('this msg concernec les informations de'); 
  console.log(data) },
error: (err) =>
 {console.log(err); }
});



/**Cette API permet de retourner les utilisateurs par son role 
 * on cherche a  afficher les candaidats !
  */
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

  
/** Cette API sert a afficher le nombre de formation par candidat 
 * un X candidat il suit une telle et telle formations
 */
  this.http.get('http://localhost:8089/nbreformationbycandidat').subscribe({
    next: (data) => { this.nbreformationparcandidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

/** Cette API sert a afficher le nombre de certification par candidat 
 * un X candidat il suit une telle et telle certificat
 */
  this.http.get('http://localhost:8089/nbrecertificatbycandidat').subscribe({
    next: (data) => { this.nbrecertificatparcandidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(this.nbrecertificatparcandidat.id) },
    error: (err) => 
    {console.log(err); }
  });}

  /** Cette API permet de deconnecter l'utilisateur actuel  et le supprimer de local storage  */
goToPage(pageName:string ): void{
  this.route.navigate([`${pageName}`]);
  localStorage.clear();
}
/** Cett API permet de creer un nouveau candidat */

createcandidat():any{
  const myDialog=this.dialog.open(CreatecandidatComponentComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });}

/** Cett API permet de supprimer un nouveau candidat */
deletecandidat(p:any){ 
  this.http.delete(' http://localhost:8089/userremove/'+p.id).subscribe({
  next:(data)=>{ 
     this.ngOnInit();
  },
  error:(err)=>{console.log(err);}
  });}

  /** Cette Fonction utilise l'API d'envoie le msg en recuperant l'id de destinataire (en utilisant le service )  */

  recommander(p:any){
this.connexionservice.email=p;
  this.http.get(' http://localhost:8089/send/'+this.connexionservice.email.email).subscribe({
    next: (data) => {this.email= data; 
      console.log('this msg concernec les informations de'+data); 
      },
    error: (err) => 
    {console.log(err); }
  });
  }
/**Ouvrir le modal pour envoyer un mail 
 * le mail sera envoyé direct pour l'email de candidat inscrit 
 * en affichant son nom et la la formation dont il inscrit 
 */
  openDialog(p:any) {
    this.connexionservice.email=p;
    const dialogRef = this.dialog.open(RecommandationComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}




