import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-statadmin',
  templateUrl: './statadmin.component.html',
  styleUrls: ['./statadmin.component.css']
})
export class StatadminComponent implements OnInit {
  connexionnew: any;
  candidat: any;
  formateur:any;
  formation:any;
  formationnonvalide:any;
  formationvalide:any;
  candidatcertifie:any;
  constructor(private route:Router,private connexionservice:ConnexionService,private http: HttpClient) { }
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  } 

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


  this.http.get(' http://localhost:8089/nbrecandidat').subscribe({
    next: (data) => { this.candidat = data; 
      console.log('C e message affiche le nombre totale des etudiants'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  

  this.http.get('  http://localhost:8089/nbreformateur').subscribe({
    next: (data) => { this.formateur = data; 
      console.log('C e message affiche le nombre totale des formateurs'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

  this.http.get('   http://localhost:8089/nbreformation').subscribe({
    next: (data) => { this.formation= data; 
      console.log('C e message affiche le nombre totale des formation'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });


  this.http.get('    http://localhost:8089/formationnonvalide').subscribe({
    next: (data) => { this.formationnonvalide= data; 
      console.log('C e message affiche le nombre totale des formations non valides'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

  this.http.get('    http://localhost:8089/formationvalide').subscribe({
    next: (data) => { this.formationvalide= data; 
      console.log('C e message affiche le nombre totale des formateurs'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });

  this.http.get('     http://localhost:8089/nbrecandidatcertifie').subscribe({
    next: (data) => { this.candidatcertifie= data; 
      console.log('C e message affiche le nombre totale des formateurs'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });


  }

}



