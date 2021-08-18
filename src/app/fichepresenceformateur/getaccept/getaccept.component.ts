import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/service/connexion.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-getaccept',
  templateUrl: './getaccept.component.html',
  styleUrls: ['./getaccept.component.css']
})
export class GetacceptComponent implements OnInit {

  getaccept: any
  value = 0;
  loading = true;

  constructor(private http: HttpClient,private connexionservice: ConnexionService) { 
    this.loadContent();
  }

  loadContent() {
    this.loading = true;
    const subs$: Subscription = interval(500).subscribe(res => {
      this.value = this.value + 10;
      if(this.value === 120) {
        subs$.unsubscribe();
        this.loading = false;
        this.value = 0;
      }
    });
  }

  getaccept2(){
    let headers2 = new HttpHeaders();
    headers2 = headers2.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');

    var getaccept2 = {
      "sender_id": "nkg6x6gn"
    };
    
    this.http.post('https://api.getaccept.com/v1/documents/'+this.connexionservice.idgetaccept.id+'/send',JSON.stringify(getaccept2),{ headers: headers2 })
    .subscribe(data => {
      console.log(data);
    });
  }

  deletegetaccept() {
    let headers2 = new HttpHeaders();
    headers2 = headers2.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');
    
    this.http.delete('https://api.getaccept.com/v1/documents/' +this.connexionservice.idgetaccept.id,{ headers: headers2 })
    .subscribe(data => {
      console.log(data);

      let headers = new HttpHeaders ();
      headers = headers.set('Content-type', 'application/json')

      this.http.delete('http://localhost:8089/getaccept/' + this.connexionservice.iddoucument.id, { headers: headers })
      .subscribe(data => {
        
      });
    });

  }

  ngOnInit(): void {
    this.connexionservice.idgetaccept.id = this.getaccept
    let headers = new HttpHeaders ();
    headers = headers.set('Content-type', 'application/json').set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBpLmdldGFjY2VwdC5jb20iLCJqdGkiOiJNV013TVRnelpUSXRPVEV3WVMwME5EWXdMV0kzTkRZdFpqazFNV1ZsTjJJME1ERmwiLCJpYXQiOjE2MjgwNzcwNzQsIm5iZiI6MTYyODA3NzExNCwiZXhwIjoxNjMzMjYxMTM0LCJjbGllbnRfaWQiOiJhcGkiLCJzY29wZSI6ImJhc2ljIiwidXNlcl9pZCI6Im5rZzZ4NmduIiwiZW50aXR5X2lkIjoicnAzajg5NG4ifQ.UI--W2HHZZFBmQkj0M21fTs9A_djNl1AAUbhX_60GhI');

    this.http.get('https://api.getaccept.com/v1/documents', { headers: headers })
      .subscribe(data => {
        this.connexionservice.idgetaccept.id = this.getaccept
      });
  }

}
