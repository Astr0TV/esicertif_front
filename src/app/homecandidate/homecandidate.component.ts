import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../service/connexion.service';
interface Nourriture {
  valeur : String ;
  viewValue : String ;
 
}

@Component({
  selector: 'app-homecandidate',
  templateUrl: './homecandidate.component.html',
  styleUrls: ['./homecandidate.component.css']
})


export class HomecandidateComponent implements OnInit {
formation: any;
connexionnew: any;
selectedValue: string;
closeResult: string | undefined;
data: any;

  constructor(private modalService: NgbModal,private http: HttpClient,private route: Router,private connexionservice: ConnexionService) { }
    
  ngOnInit(): void {
    //Check if user's credentials allows him to connect
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      }else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }
  //recuperation de l'utilisateur connécté
   this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
//recuperation de la formation par id de candidat
    this.http.get('http://localhost:8089/formation/candidat/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  
  }
//ouvrr le modal 
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
//fermer le modal 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

//Deconnexion
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
}


