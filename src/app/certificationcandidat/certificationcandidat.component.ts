import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
@Component({
  selector: 'app-certificationcandidat',
  templateUrl: './certificationcandidat.component.html',
  styleUrls: ['./certificationcandidat.component.css']
})
export class CertificationcandidatComponent implements OnInit {
  formation: any;
  connexionnew: any;

  constructor(private http: HttpClient,private route :Router,private connexionservice:ConnexionService) { }
  
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
 
  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('certificatformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('certificatcandidat');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }

    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
    this.http.get('http://localhost:8089/formation/candidat/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }

}
