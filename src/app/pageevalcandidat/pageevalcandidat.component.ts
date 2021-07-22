import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pageevalcandidat',
  templateUrl: './pageevalcandidat.component.html',
  styleUrls: ['./pageevalcandidat.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PageevalcandidatComponent implements OnInit {
 

  firstFormGroup: FormGroup;
  firstFormGroup2:FormGroup;
  secondFormGroup: FormGroup;secondFormGroup2: FormGroup;
  isEditable = false;
  isLinear = false;
  reponse :any; 
  reponse2 :any;
  reponse3:any;
  reponse4:any;
 
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
      
    });
    this.firstFormGroup2 = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
      
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.secondFormGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  favoritereponse: string;
  favoritereponse2: string;
  favoritereponse3: string;  
  favoritereponse4: string;
  reponses: string[] = ['Pas du tout', 'Insuffisamment', 'En partie', 'Totalement'];
  
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
