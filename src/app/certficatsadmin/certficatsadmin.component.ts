import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-certficatsadmin',
  templateUrl: './certficatsadmin.component.html',
  styleUrls: ['./certficatsadmin.component.css']
})
export class CertficatsadminComponent implements OnInit {

  constructor(private route :Router) {}
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  
  ngOnInit(): void {
    

  }

}
