import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-presencecandidat',
  templateUrl: './presencecandidat.component.html',
  styleUrls: ['./presencecandidat.component.css']
})
export class PresencecandidatComponent implements OnInit {

  formation: any;
  connexionnew: any;
  selectedValue: string;
  closeResult: string | undefined;
  presnececandiat: any;

  constructor(private modalService: NgbModal, private http: HttpClient, private route: Router, private connexionservice: ConnexionService) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  validerpresence(p:any){
    let headers = new HttpHeaders();
  headers = headers.set('Content-type', 'application/json')
    this.connexionservice.presencevalider = p;
    this.http.put('http://localhost:8089/presence/'+this.connexionservice.presencevalider.id+'/'+this.connexionservice.presencevalider.formateur.id, { headers: headers })
    .subscribe(data => {
      console.log("data getaccpet");
      console.log(data);
    });

  }



  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  ngOnInit(): void {
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

    this.http.get(' http://localhost:8089/allpresence').subscribe({
      next: (data) => {
        this.presnececandiat = data;
        console.log('prensece candiat');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

    this.http.get('http://localhost:8089/user/' + test.id).subscribe({
      next: (data) => {
        this.connexionnew = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

    this.http.get('http://localhost:8089/formation/candidat/' + test.id).subscribe({
      next: (data) => {
        this.formation = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

  }
}
