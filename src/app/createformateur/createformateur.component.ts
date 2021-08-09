import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createformateur',
  templateUrl: './createformateur.component.html',
  styleUrls: ['./createformateur.component.css']
})
export class CreateformateurComponent implements OnInit {
formation :any;
formations:any;
  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreateformateurComponent>) { }

  ngOnInit(): void {
 
   
 
  }
  createformateur(formateur:any){
    console.log('formateur et formation' ,formateur)
    this.http.post('http://localhost:8089/user',formateur).subscribe({
    next:(data)=>{this.dialogRef.close();},
    error:(err)=>{console.log(err);}
    
    })
    
      }
}
