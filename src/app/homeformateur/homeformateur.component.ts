import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../service/connexion.service';
import { UpdateformationformateurComponent } from './updateformationformateur/updateformationformateur.component';
interface Nourriture {
  valeur: String;
  viewValue: String;

}

@Component({
  selector: 'app-homeformateur',
  templateUrl: './homeformateur.component.html',
  styleUrls: ['./homeformateur.component.css']
})
export class HomeformateurComponent implements OnInit {
  formation: any;
  candidat: any;
  connexionnew: any;
  selectedValue: string;
  closeResult: string | undefined;


  constructor(private http: HttpClient, private route: Router, private connexionservice: ConnexionService,
              public dialog: MatDialog, public datepipe: DatePipe) {}


  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }


  openDialog() {

    this.dialog.open(UpdateformationformateurComponent);

  }
  updateformation(updateformation: any): any {
    this.connexionservice.updateformation = updateformation;
  }
  fichepresence(presence: any): any {
    this.connexionservice.presence = presence;
    this.route.navigateByUrl('fichedepresence');
  }

  nomformation(nomformation: any): any {
    this.connexionservice.nomformation = nomformation;
    console.log(nomformation);
  }


  ngOnInit(): void {

    var test = JSON.parse(localStorage.getItem('userConnect') || '{}')

    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('homeformateur');
      } else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      } else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      }

    } else {
      this.route.navigateByUrl('connexion');

    }
    this.http.get('http://localhost:8089/user/' + test.id).subscribe({
      next: (data) => { 
        this.connexionnew = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });
    console.log(test.prenom)
    console.log(test.id)
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
