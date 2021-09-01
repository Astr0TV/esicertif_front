import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { jsPDF } from 'jspdf';
import { ConnexionService } from 'src/app/service/connexion.service';

@Component({
  selector: 'app-pdfformateur',
  templateUrl: './pdfformateur.component.html',
  styleUrls: ['./pdfformateur.component.css']
})
export class PdfformateurComponent implements OnInit {
  formation: any;
  connexionnew: any;
  selectedValue: string;
  closeResult: string | undefined;
  presnececandiat: any;
  pdfTable: any;
  uploadAndProgress: any;

  constructor(private modalService: NgbModal, private http: HttpClient, private route: Router,
    private connexionservice: ConnexionService, public dialog: MatDialog) { }
  @ViewChild('card', { static: false }) el!: ElementRef;

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  upload(files: File[]){
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
  }

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
  
  getaccept() {
    var getaccept = {
      "name": "Fiche de Presence",
      "file_url": "file:///C:/Users/Huawei/OneDrive/Bureau/presence.pdf",
      "value": 0,
      "recipients": [{
        "first_name": "lam",
        "last_name": "ismail",
        "email": "lamsaouriismail@gmail.com",
        "role": "signer"
      }]
    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');

    this.http.post('https://api.getaccept.com/v1/documents', JSON.stringify(getaccept), { headers: headers })
      .subscribe(data => {
        this.connexionservice.idgetaccept = data
        console.log(data);
        console.log(this.connexionservice.idgetaccept.id);
      });
  }

  makePDF() {

  }

  opendialog(p: any) {
    this.connexionservice.pdfformateur = p;
    this.dialog.open(PdfformateurComponent);
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

    this.http.get('http://localhost:8089/formation/' + this.connexionservice.pdfformateur.id).subscribe({
      next: (data) => {
        this.formation = data;
        console.log('this msg concernec les informations de');
        console.log(data)
      },
      error: (err) => { console.log(err); }
    });

  }
}