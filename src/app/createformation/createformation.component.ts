import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createformation',
  templateUrl: './createformation.component.html',
  styleUrls: ['./createformation.component.css']
})
export class CreateformationComponent implements OnInit {
formateurs:any;
candidats:any;
  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreateformationComponent>) { }

  ngOnInit(): void {
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidats = data;},
    error: (err) => 
    {console.log(err); }
  });
    this.http.get('http://localhost:8089/usersrole/formateur ').subscribe({
    next: (data) => { this.formateurs = data; 
      },
    error: (err) => 
    {console.log(err); }
  });
  


  }
  createformation(formation:any){

this.http.post(' http://localhost:8089/formation',formation).subscribe({
next:(data)=>{this.dialogRef.close();},
error:(err)=>{console.log(err);}

});

  }
  
}
