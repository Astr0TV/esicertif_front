import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateformationComponent } from '../createformation/createformation.component';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.css']
})
export class FormationadminComponent implements OnInit {
  connexionnew:any;
  formation: any;
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
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) =>
     {console.log(err); }
  });
  this.http.get('http://localhost:8089/allformation').subscribe({
    next: (data) => { this.formation = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  }

  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
  nomformation(nomformation: any):any {
    this.connexionservice.nomformation = nomformation;
    console.log(nomformation);
  }

  createformation():any{
const myDialog=this.dialog.open(CreateformationComponent);
myDialog.afterClosed().subscribe(result=>{
  this.ngOnInit();
});

  }

  
  deleteformation(p:any){
    this.http.delete('http://localhost:8089/formationremove/'+p.id).subscribe({
      next:(data)=>{
        this.ngOnInit();
      },
      error:(err)=>{console.log(err);}
      });
      

  }
}
