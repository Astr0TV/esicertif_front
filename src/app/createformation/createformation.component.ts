import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createformation',
  templateUrl: './createformation.component.html',
  styleUrls: ['./createformation.component.css']
})
export class CreateformationComponent implements OnInit {

formateurs:any;
candidats:any;
formation:any;

  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreateformationComponent>) { }

  ngOnInit(): void {
//recuperer la liste de tous les formateurs
    this.http.get('http://localhost:8089/usersrole/formateur').subscribe({
    next: (data) => { this.formateurs = data; 
      },
    error: (err) => 
    {console.log(err); }
  });
  //recuperer la liste de tous les candidats
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidats = data;},
    error: (err) => 
    {console.log(err); }
  });

  }

   /*creer ue nouvelle formation par l'admin  */

  createformation(formation:any){
this.http.post(' http://localhost:8089/ajoutformation',formation).subscribe({
next:(data)=>{this.dialogRef.close();},
error:(err)=>{console.log(err);}

});

  }
// recupereation de la liste des formations de facon dynamique à partir de google sheet partagés 
  GetFormation():any{
    this.http.get('https://api.sheety.co/dba41a05de6889f4d4f05bc684a26eb8/formationEsic/listeDesFormations').subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => 
      {console.log(err); }
    });
  }
  
}
