import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ConnexionComponent } from '../connexion/connexion.component';
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

  constructor(private modalService: NgbModal,private http: HttpClient,private route: Router,private connexion: ConnexionService) { }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  deconnect(): any {
    localStorage.clear();
    this.route.navigateByUrl('/accueil');
  }

  redirect(): any {
    if (localStorage.getItem('user') != null) {
      this.route.navigateByUrl('acceuil');
    }
  }

  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }



  ngOnInit(): void {
    this.redirect();
   var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
   console.log(test.id);
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


