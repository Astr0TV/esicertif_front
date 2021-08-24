import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from 'src/app/service/connexion.service';

@Component({
  selector: 'app-updateformationformateur',
  templateUrl: './updateformationformateur.component.html',
  styleUrls: ['./updateformationformateur.component.css']
})
export class UpdateformationformateurComponent implements OnInit {

  constructor(private modalService: NgbModal,private http: HttpClient,private route: Router,
    private connexionservice: ConnexionService,public dialog: MatDialog) { }

  modifierformation(datefin:any){
    var information= 
     {
       "nom": this.connexionservice.updateformation.nom,
       "date_debut": this.connexionservice.updateformation.date_debut,
       "date_fin": datefin,
       "nombreheursformation": this.connexionservice.updateformation.nombreheursformation,
       "progress":this.connexionservice.updateformation.progress,"valider": this.connexionservice.updateformation.valider,
       "candidat":{"id": this.connexionservice.updateformation.candidat.id},
       "formateur":{"id": this.connexionservice.updateformation.formateur.id}
     };
    let headers = new HttpHeaders();
    headers = headers.set('content-type','application/json');

      this.http.put('http://localhost:8089/formation/'+ this.connexionservice.updateformation.id ,JSON.stringify(information),{headers: headers}).subscribe({
       next:(data)=>{
         console.log(data)
         this.ngOnInit();
       },
       error:(err)=>{console.log(err);}
       });
      }

  ngOnInit(): void {
  }

}
