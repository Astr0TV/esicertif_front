import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {MatDialog} from '@angular/material/dialog';
import { ModelComponent } from './model/model.component';
import { HttpClient } from '@angular/common/http';


/* */
interface Rep {
  name: string;
 valeur: number;
}

/** Cette page presente la page d'evaluation qui doit etre remplie par le fomateur et le candidat 
 * Fiate par BEN SALAH MARIEM
 */
@Component({
  selector: 'app-pageevalcandidat',
  templateUrl: './pageevalcandidat.component.html',
  styleUrls: ['./pageevalcandidat.component.css'],
  providers: [{
  provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})

export class PageevalcandidatComponent implements OnInit {
  
  val:any;
  user:any;
  /**ces données sont utiisé pour stocker les reponses du candidat */
  /* rubrique 1 */ 
favoritereponse: string;
favoritereponse2: string;
  /*rubrique 2 */
favoritereponse3: string;  
favoritereponse4: string;
  /*rubrique 3 */
favoritereponse5: string;  
favoritereponse6: string;  
favoritereponse7: string;  
favoritereponse8: string;
  /*rubrique 4 */
favoritereponse9: string;
  /*rubrique 5 */
favoritereponse10: string; 
favoritereponse11: string; 
favoritereponse12: string;
/*rubrique 6 */
favoritereponse13: string; 
favoritereponse14: string;
/*rubrique 7 */ 
favoritereponse15: string;
/*rubrique 12 */ 
favoritereponse16: string;
/*rubrique 13 */ 
favoritereponse17: string;
favoritereponse18: string;
favoritereponse19: string;
/*rubrique 14*/ 
favoritereponse20: string;
favoritereponse21: string;
favoritereponse22: string;
favoritereponse23: string;
favoritereponse24: string;

/*************************************************************************************************/
/*************************************************************************************************/
/*Les champs de reponses    : rubrique 1 ; rubrique 2;rubrique 3;rubrique 5 */
reponses: Rep[] = 
[
  {name:'Pas de tout',valeur:1} ,
  {name:'Insuffisamment',valeur:2} ,
  {name:'En partie',valeur:3},
  { name:'Totalement',valeur:4}
];
/* rubrique 4 */
reponses2: Rep[] = 
[
 {name:'Trop lent',valeur:1} ,
 {name:'Adapté',valeur:2} ,
 {name:'Trop rapide',valeur:3}
];
/*rubrique 6 */
reponses3: Rep[] = 
[
 {name:'Non',valeur:1} ,
 {name:'Un peu',valeur:2} ,
 {name:'Beaucoup',valeur:3}
];
/*rubrique 7 */
reponses4: Rep[] = 
[
 {name:'Non',valeur:0} ,
 {name:'Oui',valeur:1} 
];

/*rubrique 13 */
reponses5: Rep[] = 
[
 {name:'1',valeur:1} ,
 {name:'2',valeur:2} ,
 {name:'3',valeur:3} 
];
/*************************************************************************************************/
/*************************************************************************************************/
                                                                               /*les form */ 

/*rubrique 1 */
 firstFormGroup: FormGroup;
 firstFormGroup2:FormGroup;
/*rubrique 2*/
 secondFormGroup: FormGroup;
 secondFormGroup2: FormGroup;
/*rubrique 3*/
 thirdFormGroup: FormGroup;
 thirdFormGroup2: FormGroup;
 thirdFormGroup3: FormGroup;
 thirdFormGroup4: FormGroup;
 /*rubrique 4*/
 thirdFormGroup5: FormGroup;
/*rubrique 5 */
 thirdFormGroup6: FormGroup;
 thirdFormGroup7: FormGroup;
 thirdFormGroup8: FormGroup;
/*rubrique 6 */
 thirdFormGroup9: FormGroup;
 thirdFormGroup10: FormGroup;
 /*rubrique 7 */
 thirdFormGroup11: FormGroup;
 /*rubrique 8 */
 thirdFormGroup12: FormGroup; 
 /*rubrique 9 */
 thirdFormGroup13: FormGroup;
 /*rubrique 12 */
 thirdFormGroup14:FormGroup;
 /*rubrique 13 */
 thirdFormGroup15:FormGroup;
 thirdFormGroup16:FormGroup;
 thirdFormGroup17:FormGroup;
 /*rubrique 14 */
 thirdFormGroup18:FormGroup;
 thirdFormGroup19:FormGroup;
 thirdFormGroup20:FormGroup;
 thirdFormGroup21:FormGroup;
 thirdFormGroup22:FormGroup;
 /*rubrique 15 */
 thirdFormGroup23:FormGroup;
 /*rubrique 16 */
 thirdFormGroup24:FormGroup;
  /*rubrique 17 */
 thirdFormGroup25:FormGroup;
   /*rubrique 18 */
 thirdFormGroup26:FormGroup;
  /*rubrique 119 */
 thirdFormGroup27:FormGroup;
  /*rubrique 20 */
 thirdFormGroup28:FormGroup;

/*************************************************************************************************/
/*************************************************************************************************/
                                                  /*les scores*/ 
 scoreFormation=0;
 scoreFomateur=0;
 resu: any;
 somme(){ this.resu=this.favoritereponse+this.favoritereponse2}
 calculeScoreFormation(){
    this.resu=this.favoritereponse+this.favoritereponse2+this.favoritereponse3+this.favoritereponse4+this.favoritereponse5
  
  +this.favoritereponse6+this.favoritereponse7+this.favoritereponse8+this.favoritereponse9+this.favoritereponse10+this.favoritereponse11
  +this.favoritereponse12+this.favoritereponse13+this.favoritereponse14+this.favoritereponse15+this.favoritereponse16;
  }

/*************************************************************************************************/
/*************************************************************************************************/
                                     /*Modal a la fin de fomulaire */
openDialog() {
  this.dialog.open(ModelComponent);
}
/*************************************************************************************************/
/*************************************************************************************************/
  constructor(private _formBuilder: FormBuilder, private route :Router,private connexionservice:ConnexionService,config: NgbCarouselConfig,public dialog: MatDialog,private http:HttpClient) {}
 
 /** Methode de recuperation de chaque question avec ses reponses */
  question1(val:any){
   console.log ('ici affiche les donnes de la 1er question de fiche devaluation ', val);
   this.http.post('http://localhost:8089/pageEval',val).subscribe({
    next: (data) => { this.user = data; 
      console.log('this msg concerne les informations de'+data); 
      },
    error: (err) => {console.log(err); }
  });}
     
/*************************************************************************************************/
/*************************************************************************************************/
                                                /*slide*/ 
 
 p=0 

  next(){
      this.p++
      this.resu=this.favoritereponse+this.favoritereponse2+this.favoritereponse3+this.favoritereponse4+this.favoritereponse5
      +this.favoritereponse6+this.favoritereponse7+this.favoritereponse8+this.favoritereponse9+this.favoritereponse10+this.favoritereponse11
      +this.favoritereponse12+this.favoritereponse13+this.favoritereponse14+this.favoritereponse15+this.favoritereponse16;     }
  prev(){
      this.p--
  }

/*************************************************************************************************/
/*************************************************************************************************/
                                                         /*page deconnexion */ 
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
    
  }
 
  ngOnInit() {  
    
/*************************************************************************************************/
/*************************************************************************************************/

     
/*les forms  rubrique 1*/
this.firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required]
  
});
this.firstFormGroup2 = this._formBuilder.group({
  firstCtrl: ['', Validators.required]
  
});
/*les forms  rubrique 2*/
this.secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.secondFormGroup2 = this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 3*/
this.thirdFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup2= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup3= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup4= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 4*/
this.thirdFormGroup5= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 5*/
this.thirdFormGroup6= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup7= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup8= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 6 */
this.thirdFormGroup9= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup10= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 7*/
this.thirdFormGroup11= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 8*/
this.thirdFormGroup12= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 9*/
this.thirdFormGroup13= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 12*/
this.thirdFormGroup14= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 13*/
this.thirdFormGroup15= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup16= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup17= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 14*/
this.thirdFormGroup18= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup19= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup20= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup21= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
this.thirdFormGroup22= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 15*/
this.thirdFormGroup23= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 16*/
this.thirdFormGroup24= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 17*/
this.thirdFormGroup25= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 18*/
this.thirdFormGroup26= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 19*/
this.thirdFormGroup27= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
/*les forms  rubrique 20*/
this.thirdFormGroup28= this._formBuilder.group({
  secondCtrl: ['', Validators.required]
});
  }

  rubrique1(q:any,r:any){

  }

/*rating*/
starRating = 0;    
 
}
