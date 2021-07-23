import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formationsformatuer',
  templateUrl: './formationsformatuer.component.html',
  styleUrls: ['./formationsformatuer.component.css']
})
export class FormationsformatuerComponent implements OnInit {
  formation: any;
  connexionnew: any;

  constructor(private http: HttpClient, private route:Router) { }
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
 
  ngOnInit(): void {

    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/formation/formateur/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }

}
