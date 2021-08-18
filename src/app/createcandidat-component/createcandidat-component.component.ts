import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createcandidat-component',
  templateUrl: './createcandidat-component.component.html',
  styleUrls: ['./createcandidat-component.component.css']
})
export class CreatecandidatComponentComponent implements OnInit {

  constructor(private http:HttpClient,public dialogRef:MatDialogRef<CreatecandidatComponentComponent>) { }

  ngOnInit(): void {
  }
  createcandidat(candidat:any){
    this.http.post('http://localhost:8089/user',candidat).subscribe({
    next:(data)=>{this.dialogRef.close();},
    error:(err)=>{console.log(err);}
    
    })
    
      }
}
