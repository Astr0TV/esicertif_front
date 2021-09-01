import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../service/connexion.service';
import { jsPDF } from 'jspdf';
import { PdfformateurComponent } from './pdfformateur/pdfformateur.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-presenceformateur',
  templateUrl: './presenceformateur.component.html',
  styleUrls: ['./presenceformateur.component.css']
})
export class PresenceformateurComponent implements OnInit {
  formation: any;
  connexionnew: any;
  selectedValue: string;
  closeResult: string | undefined;
  presnececandiat: any;
  pdfTable: any;

  constructor(private modalService: NgbModal, private http: HttpClient, private route: Router,
    private connexionservice: ConnexionService, public dialog: MatDialog) { }


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }
  // pour valider la presence d'un candidat
  validerpresence(p: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')
    this.connexionservice.presencevalider = p;
    this.http.put('http://localhost:8089/presence/' + this.connexionservice.presencevalider.id + '/' + this.connexionservice.presencevalider.formateur.id, { headers: headers })
      .subscribe(data => {
        console.log("data getaccpet");
        console.log(data);
      });

  }


  //stock le id de presence et ouvrire le model PdfformateurComponent
  opendialog(p: any) {
    this.connexionservice.pdfformateur = p;
    this.dialog.open(PdfformateurComponent);
  }


  //deconnexion
  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  ngOnInit(): void {
    //Check if user's credentials allows him to connect
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}')
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      } else if (test.role == 'candidat') {
        this.route.navigateByUrl('presencecandidat');
      }
    } else if (test.role == 'admin') {
      this.route.navigateByUrl('homeadmin');


    } else {
      this.route.navigateByUrl('connexion');

    }

    //recupration de tout les information de presence de candiats
    this.http.get(' http://localhost:8089/allpresence').subscribe({
      next: (data) => {
        this.presnececandiat = data;
        console.log('prensece candiat');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

    //recupration de l'utilisateur connecté
    this.http.get('http://localhost:8089/user/' + test.id).subscribe({
      next: (data) => {
        this.connexionnew = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

    //recuperation des formations par id de formateurs
    this.http.get('http://localhost:8089/formation/formateur/' + test.id).subscribe({
      next: (data) => {
        this.formation = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

  }
}
