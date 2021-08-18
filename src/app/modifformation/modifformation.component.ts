import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-modifformation',
  templateUrl: './modifformation.component.html',
  styleUrls: ['./modifformation.component.css']
})
export class ModifformationComponent implements OnInit {

  formateurs:any;
  candidats:any;
    constructor(private http:HttpClient,public dialogRef:MatDialogRef<ModifformationComponent>,private connexionservice:ConnexionService) { }
  

  ngOnInit(): void {
  
    this.http.get('http://localhost:8089/usersrole/formateur ').subscribe({
    next: (data) => { this.formateurs = data; 
      },
    error: (err) => 
    {console.log(err); }
  });
  
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidats = data;},
    error: (err) => 
    {console.log(err); }
  });

  }
  createformation(formation:any){
this.http.post(' http://localhost:8089/ajoutformation',formation).subscribe({
next:(data)=>{this.dialogRef.close();},
error:(err)=>{console.log(err);}

});

  }
  
  modifierformation(nb:any,obj:any,bloc:any){
   var information= 
    {
      "nom": this.connexionservice.modifinformation.nom,
      "date_debut": this.connexionservice.modifinformation.date_debut,
      "date_fin": this.connexionservice.modifinformation.date_fin,
      "nombreHeure": nb,
      "objectif": obj,
      "bloc": bloc,
      "progress":this.connexionservice.modifinformation.progress,"valider": this.connexionservice.modifinformation.valider,
      "formateur":{"id": this.connexionservice.modifinformation.formateur.id},
      "candidat":{"id": this.connexionservice.modifinformation.candidat.id}
    };
   let headers = new HttpHeaders();
   headers = headers.set('content-type','application/json');
   console.log(this.connexionservice.modifinformation.id)
     this.http.put('http://localhost:8089/formation/'+ this.connexionservice.modifinformation.id ,JSON.stringify(information),{headers: headers}).subscribe({
      next:(data)=>{
        console.log(data)
        this.ngOnInit();
      },
      error:(err)=>{console.log(err);}
      });


  }
}