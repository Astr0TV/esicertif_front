import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateurs-candidat-admin',
  templateUrl: './formateurs-candidat-admin.component.html',
  styleUrls: ['./formateurs-candidat-admin.component.css']
})
export class FormateursCandidatAdminComponent implements OnInit {

  constructor(private route:Router) { }
  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }
  ngOnInit(): void {
  }

}
