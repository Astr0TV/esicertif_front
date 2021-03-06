import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { GetacceptComponent } from './getaccept/getaccept.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-fichepresenceformateur',
  templateUrl: './fichepresenceformateur.component.html',
  styleUrls: ['./fichepresenceformateur.component.css']

})
export class FichepresenceformateurComponent implements OnInit {
  formation: any;
  candidat: any;
  condiatenew: any;
  connexionnew: any;
  seanceForm: FormGroup;
  user: any;
  nomformation: any;
  value = 0;
  loading = true;
  presence: any;
  iddoucment: any
  allpresence: any;
  sum: any


  constructor(private http: HttpClient, private route: Router, private connexionservice: ConnexionService,
    private fb: FormBuilder, public dialog: MatDialog) {
    this.seanceForm = this.fb.group({
      seance: this.fb.array([]),
    });
  }
//affiche messsage apres click sur la button
  showMessage() {
    Swal.fire({
      text: 'Ajoute avec succès !',
      icon: 'success'
    });
  }

// recuepre id de formation pour envoye a model GetacceptComponent
  openDialog(c: any) {
    this.connexionservice.modifinformation = c;
    this.dialog.open(GetacceptComponent);

  }

//deconnexion
  goToPage(pageName: string): void {
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }


  onSubmit() {
    console.log(this.seanceForm.value);
  }


// stock id lors de creation de documment getaccept
  getacceptid(idgetaccept: any) {
    this.connexionservice.idgetaccept = idgetaccept;
  }

  // la creation de document sur getaccept et stock id de documment sur notre api
  getaccept() {
    var getaccept = {
      "name": "Test Document name",
      "file_url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "value": 0,
      "recipients": [{
        "first_name": this.connexionservice.presence.prenom,
        "last_name": this.connexionservice.presence.candidat.nom,
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

        var formateur = JSON.parse(localStorage.getItem('userConnect') || '{}')
        var iddoucument = {
          "getaccept": this.connexionservice.idgetaccept.id,
          "formateur": { "id": formateur.id }

        };

        let headers = new HttpHeaders();
        headers = headers.set('Content-type', 'application/json')


        this.http.post('http://localhost:8089/getaccept', JSON.stringify(iddoucument), { headers: headers })
          .subscribe(data => {
            this.connexionservice.iddoucument = data;
            console.log(data);

          });
      });
  }

// ajoute fiche de presence d'un candidat a api
  ajoute(j: any, h1: any, h2: any, h3: any, h4: any): any {
    var formateur = JSON.parse(localStorage.getItem('userConnect') || '{}')
    // let latest_date = this.datepipe.transform(j, 'dd/MM/yyyy');
    let latest_houre = h1 + " - " + h2
    let latest_houre2 = h3 + " - " + h4
    let calcul = (parseInt(h2) - parseInt(h1));
    let calcul2 = (parseInt(h4) - parseInt(h3));
    let sum = calcul + calcul2
    var getaccept = {
      "jour1": j,
      "hours1": latest_houre,
      "hours2": latest_houre2,
      "nbheure": sum,
      "formation": { "id": this.connexionservice.nomformation.id },
      "candidat": { "id": this.connexionservice.presence.candidat.id },
      "formateur": { "id": formateur.id }

    };

    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json')

    console.log('form val ', JSON.stringify(getaccept));
    this.http.post('http://localhost:8089/presence', JSON.stringify(getaccept), { headers: headers }).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
        console.log("bien ajoute")
      }, error: (err) => { console.log(err) }
    })
  }


  ngOnInit(): void {
        //Check if user's credentials allows him to connect
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}')
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('fichedepresence');
      } else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      } else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      }

    } else {
      this.route.navigateByUrl('connexion');

    }
// recupration les information de presence de candidat par id stock de candidat
    this.http.get('http://localhost:8089/presence/candidat/' + this.connexionservice.presence.candidat.id).subscribe({
      next: (data) => {
        this.presence = data;
        console.log('presence');
        console.log(this.presence)

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

//recuperation des presences par id de formateurs
    this.http.get('http://localhost:8089/presence/formation/'+ this.connexionservice.nomformation.id).subscribe({
      next: (data) => {
        this.allpresence = data;
        console.log('all presence');
        console.log(data)
        console.log("sum")
        this.sum = this.allpresence.reduce((acc : any, val : any) => acc += val.nbheure, 0)
        console.log(this.sum);
      },
      error: (err) => { console.log(err); }
    });

    //recuperation des formations par id de formateurs
    this.http.get('http://localhost:8089/formation/' + this.connexionservice.nomformation.id).subscribe({
      next: (data) => {
        this.nomformation = data;
        console.log('this msg concernec les informations de');
        console.log("nomforation" + data)
      },
      error: (err) => { console.log(err); }
    });

    //recuperation les information de candidat par id stock sur service
    this.http.get('http://localhost:8089/user/' + this.connexionservice.presence.candidat.id).subscribe({
      next: (data) => {
        this.condiatenew = data;
        console.log(this.connexionservice.presence.candidat.id);
        console.log('condiadte recupere');
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

function newValue(newValue: any) {
  throw new Error('Function not implemented.');
}

function valuechange(newValue: (newValue: any) => void) {
  throw new Error('Function not implemented.');
}

function e(e: any) {
  throw new Error('Function not implemented.');
}

function modelChangeFn(e: (e: any) => void) {
  throw new Error('Function not implemented.');
}

