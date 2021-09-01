import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-getacceptformateur',
  templateUrl: './getacceptformateur.component.html',
  styleUrls: ['./getacceptformateur.component.css']
})
export class GetacceptformateurComponent implements OnInit {
  formation: any;
  connexionnew: any;
  getaccept: any
  data: any
  idoucument: any;


  constructor(private http: HttpClient,private route: Router,private connexionservice: ConnexionService) { }


  goToPage(pageName:string ): void{
    this.route.navigate([`${pageName}`]);
    localStorage.clear();
  }

  download(id:any){
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');
  
    this.http.get('https://api.getaccept.com/v1/documents/'+id+'/download', { headers: headers })
      .subscribe(data => {
        this.getaccept = data
        console.log("id SALU");
        console.log(id);
        console.log(data);
      });

  }

  ngOnInit(): void {
    var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
    if (this.connexionservice.isConnected()) {
      if (test.role == 'Formateur') {
        this.route.navigateByUrl('getacceptformateur');
      }} else if (test.role == 'candidat') {
        this.route.navigateByUrl('homecandidat');
      } else if (test.role == 'admin') {
        this.route.navigateByUrl('homeadmin');
      
      
  } else {
    this.route.navigateByUrl('connexion');
  
  }

  let headers = new HttpHeaders();
  headers = headers.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');

  this.http.get('https://api.getaccept.com/v1/documents', { headers: headers })
    .subscribe(data => {
      this.getaccept = data
      console.log("data getaccpet");
      console.log(data);
    });


    this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
      next: (data) => { this.connexionnew = data; 
        console.log('user connecte'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });

    this.http.get('http://localhost:8089/getaccept/formateur/'+ test.id).subscribe({
      next: (data) => { this.idoucument = data; 
        console.log('id doucument stock'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });

    this.http.get('http://localhost:8089/formation/formateur/'+ test.id).subscribe({
      next: (data) => { this.formation = data; 
        console.log('this msg concernec les informations de'); 
        console.log(data) },
      error: (err) => {console.log(err); }
    });
  }


}
