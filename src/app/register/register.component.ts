import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router,private connexionservice:ConnexionService) { }

  ngOnInit(): void {
    if (this.connexionservice.isConnected()) {
      this.route.navigateByUrl('homecandidat');
  } else {
    this.route.navigateByUrl('connexion');
  }

  }

}
