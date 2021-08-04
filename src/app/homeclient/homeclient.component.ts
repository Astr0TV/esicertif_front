import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent implements OnInit {

  seanceForm: FormGroup;
  user: any;


  constructor(private http: HttpClient,private route: Router,private connexionservice:ConnexionService,private fb: FormBuilder) {
    this.seanceForm = this.fb.group({
      name: '',
      seance: this.fb.array([]),
    });
  }
  seance(): FormArray {
    return this.seanceForm.get("seance") as FormArray
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

  newSeance(): FormGroup {
    return this.fb.group({
      jour1: '',
      heure1: '',
    })
  }

  addSeance() {
    this.seance().push(this.newSeance());
  }

  removeSeance(i: number) {
    this.seance().removeAt(i);
  }

  onSubmit() {
    console.log(this.seanceForm.value);
  }
  
  ngOnInit() {
  
<<<<<<< HEAD

=======
>>>>>>> 4f5733cb81130564afa0c5323193dab7dcff3e48

  }
}