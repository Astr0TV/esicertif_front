import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl
} from '@angular/forms';
import { MAT_DATE_FORMATS  } from '@angular/material/core';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL'
},
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY'
  },
};

@Component({
  selector: 'app-fichepresenceformateur',
  templateUrl: './fichepresenceformateur.component.html',
  styleUrls: ['./fichepresenceformateur.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class FichepresenceformateurComponent implements OnInit {
formation: any;
candidat:any;
condiatenew:any;
connexionnew: any;
seanceForm: FormGroup;
user: any;
nomformation: any;

  constructor(private http: HttpClient,private route:Router, private connexionservice:ConnexionService,
    private fb:FormBuilder) {    
      this.seanceForm = this.fb.group({
        seance: this.fb.array([]),
      });
  }

  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }


  seance(): FormArray {
    return this.seanceForm.get("seance") as FormArray
  }

  removeSeance(i: number) {
    this.seance().removeAt(i);
  }

  onSubmit() {
    console.log(this.seanceForm.value);
  }

  newSeance(): FormGroup {
    return this.fb.group({
      jour1: '',
      hours1: '',
    })
  }

  addSeance() {
    this.seance().push(this.newSeance());
  }

  ajoute(val: any): any {
    console.log ('form val ', val);
    this.http.post('http://localhost:8089/presence', val).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
        if (this.user != null ) {
          console.log("bien ajoute")
        } else {  console.log('identifiants incorrectes ! ')}
      }, error: (err) => { console.log(err) }
    })
  }

  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('fichedepresence');
      }else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      }
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }
  this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
    next: (data) => { this.connexionnew = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => {console.log(err); }
  });
  this.http.get('http://localhost:8089/formation/'+ this.connexionservice.nomformation.id).subscribe({
    next: (data) => { this.nomformation = data; 
      console.log('this msg concernec les informations de'); 
      console.log("nomforation"+data) },
    error: (err) => {console.log(err); }
  });
  this.http.get('http://localhost:8089/user/'+ this.connexionservice.presence.id).subscribe({
    next: (data) => { this.condiatenew = data; 
      console.log('colsole'+this.connexionservice.presence.nom);
      console.log('condiadte recupere'); 
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
