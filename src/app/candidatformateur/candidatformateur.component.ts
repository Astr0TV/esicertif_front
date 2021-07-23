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

  constructor(private http: HttpClient,private route: Router,private connexion: ConnexionService) { }

  deconnect(): any {
    localStorage.clear();
    this.route.navigateByUrl('/accueil');
  }

  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les informations de'); 
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
