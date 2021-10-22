import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createformateur',
  templateUrl: './createformateur.component.html',
  styleUrls: ['./createformateur.component.css']
})
/*
* Cette page permet
*creer un formateur 
 * Faite par BEN SALAH Mariem
 */
export class CreateformateurComponent implements OnInit {
formation :any;
formations:any;
  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreateformateurComponent>) { }

  ngOnInit(): void {}

    /*creer un nouveau formateur par l'admin  et l'asssocier a une formation */

  createformateur(nom:any,prenom:any,tele:any,email:any,mdp:any){
    var newcandidat =  {
      "nom": nom,
      "prenom": prenom,
      "tele": tele,
      "email": email,
      "mdp": mdp,
      "role": "formateur",
    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');

    this.http.post('http://localhost:8089/user', JSON.stringify(newcandidat), { headers: headers })
    .subscribe({
      next:(data)=>{this.dialogRef.close();},
      error:(err)=>{console.log(err);}
      })
    
      }
}
