import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createcandidat-component',
  templateUrl: './createcandidat-component.component.html',
  styleUrls: ['./createcandidat-component.component.css']
})
/*
* Cette page permet
*creer un candidat
 * Faite par BEN SALAH Mariem
 */
export class CreatecandidatComponentComponent implements OnInit {

  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreatecandidatComponentComponent>) { }

  ngOnInit(): void {
  }

  /*creer un nouveau candiat par l'admin  et l'asssocier a un formateur et une formation */
  createcandidat(nom:any,prenom:any,tele:any,email:any,mdp:any){
      var newcandidat =  {
        "nom": nom,
        "prenom": prenom,
        "tele": tele,
        "email": email,
        "mdp": mdp,
        "role": "candidat",
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
