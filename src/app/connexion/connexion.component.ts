import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  user: any
  msg: any

  constructor(private http: HttpClient,private route: Router) { }

  ngOnInit(): void {
  }
connexion(val: any): any {
  this.http.post('http://localhost:8089/connexion', val).subscribe({
    next: (data) => {
      console.log(data);
      this.user = data;
      if (this.user != null) {
        this.route.navigateByUrl('homecandidat')
      } else { this.msg = 'mdp ou login est inscorect'; console.log('id incorr...')}
    }, error: (err) => { console.log(err) }
  })
}
}
