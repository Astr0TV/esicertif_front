import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fichepresenceformateur',
  templateUrl: './fichepresenceformateur.component.html',
  styleUrls: ['./fichepresenceformateur.component.css']
})
export class FichepresenceformateurComponent implements OnInit {

  constructor(private route:Router) { }

  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }



  ngOnInit(): void {

  }

}
