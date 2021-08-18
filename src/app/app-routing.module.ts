import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatformateurComponent } from './candidatformateur/candidatformateur.component';
import { CertficatsadminComponent } from './certficatsadmin/certficatsadmin.component';
import { CertificationcandidatComponent } from './certificationcandidat/certificationcandidat.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FichepresenceformateurComponent } from './fichepresenceformateur/fichepresenceformateur.component';
import { FormationCandidatComponent } from './formation-candidat/formation-candidat.component';
import { FormationadminComponent } from './formationadmin/formationadmin.component';
import { FormationsformatuerComponent } from './formationsformatuer/formationsformatuer.component';
import { GetacceptformateurComponent } from './getacceptformateur/getacceptformateur.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomecandidateComponent } from './homecandidate/homecandidate.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { HomeformateurComponent } from './homeformateur/homeformateur.component';
import { PageevalcandidatComponent } from './pageevalcandidat/pageevalcandidat.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'', redirectTo: 'acceuil',pathMatch:'full'},

  {path:'acceuil', component: AccueilComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'register', component: RegisterComponent},
  {path:'homeclient', component: HomeclientComponent},
  {path:'homecandidat', component: HomecandidateComponent},
  {path:'formationcandidat', component: FormationCandidatComponent},
  {path:'certificatcandidat', component: CertificationcandidatComponent},
  {path:'pageevalcandidat', component: PageevalcandidatComponent},
  {path:'homeformateur', component: HomeformateurComponent},
  {path:'formationformateur', component: FormationsformatuerComponent},
  {path:'candidatformateur', component: CandidatformateurComponent},
  {path:'homeadmin', component: HomeadminComponent},
  {path:'formationadmin', component: FormationadminComponent},
  {path:'fichedepresence', component: FichepresenceformateurComponent},
  {path:'formateurcandidatadmin', component: FormationCandidatComponent},
  {path:'certificatadmin', component: CertficatsadminComponent},
  {path:'getacceptformateur', component: GetacceptformateurComponent},







 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
