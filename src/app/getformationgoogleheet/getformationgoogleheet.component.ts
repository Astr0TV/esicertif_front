import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";


import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import { MatDialog } from '@angular/material/dialog';

/*  tous ce codes est consacré à la foi de recuperer la liste des formation de google sheet partagé par FRED 
de faire une recherche dans une liste déroulante 
de selection la formation ainsi afficher directement les informations lié avec eux */
export interface Formation {
  id: string;
  name: string;
}

export interface FormationGroup {
  name: string;
  formations: Formation[];
}

@Component({
  selector: 'app-getformationgoogleheet',
  templateUrl: './getformationgoogleheet.component.html',
  styleUrls: ['./getformationgoogleheet.component.css']
})
export class GetformationgoogleheetComponent implements OnInit {

  getformation:any;
 data: any;
  FORMATIONS: Formation[] = [
    {name: 'Bank A (Switzerland)', id: 'A'},
    {name: 'Bank B (Switzerland)', id: 'B'},
    {name: 'Bank C (France)', id: 'C'},
    {name: 'Bank D (France)', id: 'D'},
    {name: 'Bank E (France)', id: 'E'},
    {name: 'Bank F (Italy)', id: 'F'},
    {name: 'Bank G (Italy)', id: 'G'},
    {name: 'Bank H (Italy)', id: 'H'},
    {name: 'Bank I (Italy)', id: 'I'},
    {name: 'Bank J (Italy)', id: 'J'},
    {name: 'Bank Kolombia (United States of America)', id: 'K'},
    {name: 'Bank L (Germany)', id: 'L'},
    {name: 'Bank M (Germany)', id: 'M'},
    {name: 'Bank N (Germany)', id: 'N'},
    {name: 'Bank O (Germany)', id: 'O'},
    {name: 'Bank P (Germany)', id: 'P'},
    {name: 'Bank Q (Germany)', id: 'Q'},
    {name: 'Bank R (Germany)', id: 'R'}
  ];

  /** list of banks */
  protected formations: Formation[] = this.FORMATIONS;

  /** control for the selected bank */
  public formationCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public formationFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredFormations: ReplaySubject<Formation[]> = new ReplaySubject<Formation[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  ngOnInit() {
    // set initial selection
    this.formationCtrl.setValue(this.formations[10]);

    // load the initial bank list
    this.filteredFormations.next(this.formations.slice());

    // listen for search field value changes
    this.formationFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterFormations();
      });



      this.http.get('https://api.sheety.co/dba41a05de6889f4d4f05bc684a26eb8/formationEsic/listeDesFormations').subscribe({
        next: (data) => { this.getformation= data; 
          console.log('Ce messagepour les formations de google sheets'); 
          console.log(data)
        },
        error: (err) => 
        {console.log(err); }
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredFormations
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
     
        this.singleSelect.compareWith = (a: Formation, b: Formation) => a && b && a.id === b.id;
      });
  }

  protected filterFormations() {
    if (!this.formations) {
      return;
    }
    // get the search keyword
    let search = this.formationFilterCtrl.value;
    if (!search) {
      this.filteredFormations.next(this.formations.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredFormations.next(
      this.formations.filter(formation => formation.name.toLowerCase().indexOf(search) > -1)
    );
  }

  
}