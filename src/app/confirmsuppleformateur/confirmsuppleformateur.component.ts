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
export class ConfirmsuppleformateurComponent implements OnInit {

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  deleteformateur() {
    this.http.delete('http://localhost:8089/userremove/'+ this.connexionservice.supprimeformateur.id).subscribe({
      next:(data)=>{
         this.ngOnInit();
        console.log(data)
      },
      error:(err)=>{console.log(err);}
      });
  }
/*
  confirmsupprissionformateur():any{
    const myDialog=this.dialog.open(ConfirmsuppleformateurComponent);
    myDialog.afterClosed().subscribe(result=>{
      this.ngOnInit();
    });
    
      }*/

  ngOnInit(): void {
    console.log(this.connexionservice.supprimeformateur.id)
  }


}
