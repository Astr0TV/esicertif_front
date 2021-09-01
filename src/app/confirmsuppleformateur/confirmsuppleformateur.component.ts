import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmsuppleformateur',
  templateUrl: './confirmsuppleformateur.component.html',
  styleUrls: ['./confirmsuppleformateur.component.css']
})
/*
* Ce modal  permet
*confirmer la supprission de formateur 
 * Faite par BEN SALAH Mariem
 */
export class ConfirmsuppleformateurComponent implements OnInit {

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }
/* Cette API permet de la supprission de formateur */
  deleteformateur() {
    this.http.delete('http://localhost:8089/userremove/'+ this.connexionservice.supprimeformateur.id).subscribe({
      next:(data)=>{
         this.ngOnInit();
        console.log(data)
      },
      error:(err)=>{console.log(err);}
      });
  }
  ngOnInit(): void {
    console.log(this.connexionservice.supprimeformateur.id)
  }


}
