import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { RegisterComponent } from './register/register.component';
import { HomecandidateComponent } from './homecandidate/homecandidate.component';
import { FormationCandidatComponent } from './formation-candidat/formation-candidat.component';
import { CertificationcandidatComponent } from './certificationcandidat/certificationcandidat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    HomeclientComponent,
    RegisterComponent,
    HomecandidateComponent,
    FormationCandidatComponent,
    CertificationcandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,MatFormFieldModule,MatSelectModule,MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
