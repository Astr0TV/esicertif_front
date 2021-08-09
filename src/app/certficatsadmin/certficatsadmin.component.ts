import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
@Component({
  selector: 'app-certficatsadmin',
  templateUrl: './certficatsadmin.component.html',
  styleUrls: ['./certficatsadmin.component.css']
})
export class CertficatsadminComponent implements OnInit {
connexionnew:any
  constructor(private route :Router,private connexionservice:ConnexionService) {}
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  
  ngOnInit(): void {
 


  }

}
