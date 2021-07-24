import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.css']
})
export class FormationadminComponent implements OnInit {

  constructor(private route:Router,private connexionservice:ConnexionService) { }
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
  ngOnInit(): void {
    if (this.connexionservice.isConnected()) {
      this.route.navigateByUrl('homecandidat');
  } else {
    this.route.navigateByUrl('connexion');
  }

 
 
  }

}
