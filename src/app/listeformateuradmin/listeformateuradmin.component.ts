import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmsuppleformateurComponent } from '../confirmsuppleformateur/confirmsuppleformateur.component';
import { CreateformateurComponent } from '../createformateur/createformateur.component';
import { ConnexionService } from '../service/connexion.service';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-listeformateuradmin',
  templateUrl: './listeformateuradmin.component.html',
  styleUrls: ['./listeformateuradmin.component.css']
})
export class ListeformateuradminComponent implements OnInit {
  connexionnew:any;
  formateur:any;
  nbreformationparformateur:any;
  scoreformateur:any;
  array: any;
  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
  
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
this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
next: (data) => { this.connexionnew = data; 
  console.log('this msg concerne la personne connecté ',data); 
 },
error: (err) =>
 {console.log(err); }
});
this.http.get('http://localhost:8089/usersrole/formateur ').subscribe({
    next: (data) => { this.formateur = data; 
      this.connexionservice.nbreformationparformateur=data;
      console.log('information de user by role',data) },
      
    error: (err) => 
    {
      console.log(err); }
  });
  this.http.get('http://localhost:8089/nbreformationbyformateur/'+39).subscribe({
    next: (data) => { this.nbreformationparformateur = data; 
      console.log('this msg concerne nmbre de formation par formateur',data); 
      console.log(this.connexionservice.nbreformationparformateur.id)

       },
    error: (err) => 
    {console.log(err); }
  });


}

goToPage(pageName:string ): void{
  this.route.navigate([`${pageName}`]);
  localStorage.clear();
}
createformateur():any{
  const myDialog=this.dialog.open(CreateformateurComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });
  
    }
deleteformateur(p:any){ 
  this.connexionservice.supprimeformateur = p;
  const myDialog=this.dialog.open(ConfirmsuppleformateurComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });}


}
