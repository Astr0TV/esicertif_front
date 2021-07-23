import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.css']
})
export class FormationadminComponent implements OnInit {

  constructor(private route:Router) { }
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
  ngOnInit(): void {
  }

}
