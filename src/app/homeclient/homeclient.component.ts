import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrls: ['./homeclient.component.css']
})
export class HomeclientComponent implements OnInit {
@ViewChild('content',{static:false}) el!: ElementRef;

  constructor(private http: HttpClient,private route: Router,private contact:ConnexionService,private builder: FormBuilder ) {
  } 

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/xwkawyda',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

  
  ngOnInit() {

    }
   
  makePDF(){
    let pdf =new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
   
  }

    }