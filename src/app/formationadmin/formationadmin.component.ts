import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateformationComponent } from '../createformation/createformation.component';
import { ModifformationComponent } from '../modifformation/modifformation.component';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.css']
})
export class FormationadminComponent implements OnInit {
  connexionnew:any;
  formation: any;
  data: any;

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }
 
  ngOnInit(): void {
//Check if user's credentials allows him to connect

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
  //recuperation de l'utilisateur connecté
  this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
    next: (data) => { this.connexionnew = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) =>
     {console.log(err); }
  });

  //recuperation de la liste de la formation 
  this.http.get('http://localhost:8089/allformation').subscribe({
    next: (data) => { this.formation = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  }

  // deconnexion
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
  //affichage de nom de la formation
  nomformation(nomformation: any):any {
    this.connexionservice.nomformation = nomformation;
    console.log(nomformation);
  }


//recuperation de la formation de google sheet
  GetFormation():any{
    this.http.get('https://api.sheety.co/dba41a05de6889f4d4f05bc684a26eb8/formationEsic/listeDesFormations').subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => 
      {console.log(err); }
    });
  }

//creeation d'une nouvelle formation par l'admin
  createformation():any{
const myDialog=this.dialog.open(CreateformationComponent);
myDialog.afterClosed().subscribe(result=>{
  this.ngOnInit();
});

  }

  //supprimer une formation definitivement par l'admin
  deleteformation(p:any){
    this.http.delete('http://localhost:8089/formationremove/'+p.id).subscribe({
      next:(data)=>{
        this.ngOnInit();
      },
      error:(err)=>{console.log(err);}
      });
      

  }

//modifier les informations de la formations l'objectif et les bloc de compétence
  modifierformation(modifinformation:any){
    this.connexionservice.modifinformation = modifinformation;
    const myDialog=this.dialog.open(ModifformationComponent);
    myDialog.afterClosed().subscribe(result=>{
      this.ngOnInit();
    });
  }
}
