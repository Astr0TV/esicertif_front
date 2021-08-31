import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatecandidatComponentComponent } from '../createcandidat-component/createcandidat-component.component';
import { RecommandationComponent } from '../recommandation/recommandation.component';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-listecandidatadmin',
  templateUrl: './listecandidatadmin.component.html',
  styleUrls: ['./listecandidatadmin.component.css']
})
export class ListecandidatadminComponent implements OnInit {
  connexionnew:any;
  candidat:any;
  nbreformationparcandidat:any;
  nbrecertificatparcandidat:any;
  email:any

  constructor(private route:Router,private connexionservice:ConnexionService, private http: HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
  
var test = JSON.parse(localStorage.getItem('userConnect') || '{}' ) 
if (this.connexionservice.isConnected()) {
  if (test.role == 'Formateur') {
    this.route.navigateByUrl('homeformateur');
  }else if (test.role == 'candidat') {
    this.route.navigateByUrl('homecandidat');
  }
  
} else {
this.route.navigateByUrl('connexion');

}
this.http.get('http://localhost:8089/user/'+ test.id).subscribe({
next: (data) => { this.connexionnew = data; 
  console.log('this msg concernec les informations de'); 
  console.log(data) },
error: (err) =>
 {console.log(err); }
});
this.http.get('http://localhost:8089/usersrole/candidat').subscribe({
    next: (data) => { this.candidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  this.http.get('http://localhost:8089/nbreformationbycandidat').subscribe({
    next: (data) => { this.nbreformationparcandidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(data) },
    error: (err) => 
    {console.log(err); }
  });
  this.http.get('http://localhost:8089/nbrecertificatbycandidat').subscribe({
    next: (data) => { this.nbrecertificatparcandidat = data; 
      console.log('this msg concernec les informations de'); 
      console.log(this.nbrecertificatparcandidat.id) },
    error: (err) => 
    {console.log(err); }
  });





}
goToPage(pageName:string ): void{
  this.route.navigate([`${pageName}`]);
  localStorage.clear();
}
createcandidat():any{
  const myDialog=this.dialog.open(CreatecandidatComponentComponent);
  myDialog.afterClosed().subscribe(result=>{
    this.ngOnInit();
  });
  
    }
deletecandidat(p:any){ 
  this.http.delete(' http://localhost:8089/userremove/'+p.id).subscribe({
  next:(data)=>{ 
     this.ngOnInit();
  },
  error:(err)=>{console.log(err);}
  });}

  recommander(p:any){
this.connexionservice.email=p;
  this.http.get(' http://localhost:8089/send/'+this.connexionservice.email.email).subscribe({
    next: (data) => {this.email= data; 
      console.log('this msg concernec les informations de'+data); 
      },
    error: (err) => 
    {console.log(err); }
  });
  }

  openDialog(p:any) {
    this.connexionservice.email=p;


    const dialogRef = this.dialog.open(RecommandationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}




