import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-candidatformateur',
  templateUrl: './candidatformateur.component.html',
  styleUrls: ['./candidatformateur.component.css']
})
export class CandidatformateurComponent implements OnInit {
  formation: any;
  connexionnew: any;

  constructor(private http: HttpClient,private route: Router,private connexionservice: ConnexionService) { }


  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('candidatformateur');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concerne les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
    this.http.get('http://localhost:8089/formation/formateur/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }

}
