import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';




@Component({
  selector: 'app-pageevalcandidat',
  templateUrl: './pageevalcandidat.component.html',
  styleUrls: ['./pageevalcandidat.component.css'],
  providers: [{
  provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PageevalcandidatComponent implements OnInit {

resu: any;
selectedValue = "";
selectedValue2 = "";
  items = [
    {groupeName: 'Pas de tout', value: 1},
    {groupeName: 'Insuffisamment', value: 2},
    {groupeName: 'En partie', value: 3},
    {groupeName: 'Totalement', value: 4}
  ]  
  items2 = [
    {groupeName: 'Adapté', value: 4},
    {groupeName: 'Trop rapide', value: 2},
    {groupeName: 'Trop lent', value: 3}
  ]  
  items3 = [
    {groupeName: 'Non', value: 2},
    {groupeName: 'Un peu', value: 3},
    {groupeName: 'Beaucoup', value: 4}
  ]  
  items4 = [
    {groupeName: 'Non', value: 2},
    {groupeName: 'Oui', value: 3},
    {groupeName: 'Beaucoup', value: 4}
  ]  
  calcule(){
    this.resu=this.selectedValue+this.selectedValue2
  }
   /*les scores*/ 

scoreFormation=0;
scoreFomateur=0;

calculScoreFormation(){}
calculScoreFormatur(){}
 /*radio button */ 

firstFormGroup: FormGroup;
secondFormGroup: FormGroup;


  /*card */
 public carditems=[{cardNumber:1},{cardNumber:2},{cardNumber:3},{cardNumber:4},{cardNumber:5},{cardNumber:6},{cardNumber:7},{cardNumber:8},{cardNumber:9},{cardNumber:10},{cardNumber:11}];
 public pageSlice =this.carditems.slice(0,3);

 /*slide*/ 
 
 p=0 
 OnPageChange(event:any){
   console.log(event);
  const startIndex=event.pageIndex*event.pageSize;
  let endIndex =startIndex+event.pageSize;
  if(endIndex>this.carditems.length){
    endIndex=this.carditems.length;
  }
  this.pageSlice=this.carditems.slice(startIndex,endIndex);
}

 /**/ 
  constructor(private _formBuilder: FormBuilder, private route :Router,private connexionservice:ConnexionService,config: NgbCarouselConfig) {}
  
  next(){
      this.p++
  }
  prev(){
      this.p--
  }
 /*ok*/ 
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
    
  }
 
  ngOnInit() {    
    /*if (this.connexionservice.isConnected()) {
      this.route.navigateByUrl('homecandidat');
  } else {
    this.route.navigateByUrl('connexion');
  }
*/
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
      
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
 
  }
 

/*rating*/
starRating = 0;    
 
}
