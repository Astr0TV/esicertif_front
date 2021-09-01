import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-exemplecertificat',
  templateUrl: './exemplecertificat.component.html',
  styleUrls: ['./exemplecertificat.component.css']
})
export class ExemplecertificatComponent implements OnInit {
  connexionnew: any;
  certificat:any;
  formation:any;
  constructor(private http: HttpClient,private route :Router,private connexionservice:ConnexionService,public dialog: MatDialog) { }
  @ViewChild('card',{static:false}) el!: ElementRef;
  ngOnInit(): void {

    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
    
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }

    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les  de'); 
        console.log(this.connexionservice.cartif.id)
        console.log(data) },
      error: (err) => {console.log(err); }
    });

    this.http.get(' http://localhost:8089/formation/'+ this.connexionservice.cartif.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  
    this.http.get(' http://localhost:8089/certifbyidcandidat/Candidat/'+ test.id).subscribe({
      next: (data) => { this.certificat = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }

  makePDF(){
    let pdf =new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
   
  }
}
