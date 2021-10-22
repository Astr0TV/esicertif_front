import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnexionService } from '../service/connexion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modifformation',
  templateUrl: './modifformation.component.html',
  styleUrls: ['./modifformation.component.css']
})
export class ModifformationComponent implements OnInit {

  
/*
* Cette page permet à la fois de 
*créer une formations et  
*la  modifier  par  l'admin

 * Faite par BEN SALAH Mariem
 */
  formateurs:any;
  candidats:any;

    constructor(private http:HttpClient,public dialogRef:MatDialogRef<ModifformationComponent>,private connexionservice:ConnexionService) { }
  
    //affiche messsage apres click sur la button
  showMessage() {
    Swal.fire({
      text: 'La Formation a ete modifié !',
      icon: 'success'
    });
  }

  ngOnInit(): void {
  /** Récuperation de utilisateur par role  */
    this.http.get('http://localhost:8089/usersrole/formateur ').subscribe({
    next: (data) => { this.formateurs = data; 
      },
    error: (err) => 
    {console.log(err); }
  });
   /** Récuperation de utilisateur par role  */
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidats = data;},
    error: (err) => 
    {console.log(err); }
  });

  }

  /** Cette API permet de créer une formation 
   * l'admin remplie tous les champs (nombre des heures, l'objectif et...)
   * la formation doit etre affécté a un candidat et un utilisateur 
   */
  createformation(formation:any){
this.http.post(' http://localhost:8089/ajoutformation',formation).subscribe({
next:(data)=>{this.dialogRef.close();},
error:(err)=>{console.log(err);}

});

  }
   /** Cette API permet de modifier une formation deja créee
   * l'admin modifie  les champs (nombre des heures, l'objectif et le bloc de compétence...)
   * 
   */
  modifierformation(nb:any,obj:any,bloc:any){
   var information= 
    {
      "nom": this.connexionservice.modifinformation.nom,
      "date_debut": this.connexionservice.modifinformation.date_debut,
      "date_fin": this.connexionservice.modifinformation.date_fin,
      "nombreheursformation": nb,
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