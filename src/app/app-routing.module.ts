import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatformateurComponent } from './candidatformateur/candidatformateur.component';
import { CertficatsadminComponent } from './certficatsadmin/certficatsadmin.component';
import { CertificationcandidatComponent } from './certificationcandidat/certificationcandidat.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FichepresenceformateurComponent } from './fichepresenceformateur/fichepresenceformateur.component';
import { FormateursCandidatAdminComponent } from './formateurs-candidat-admin/formateurs-candidat-admin.component';
import { FormationCandidatComponent } from './formation-candidat/formation-candidat.component';
import { CreateformationComponent } from './createformation/createformation.component';
import { FormationadminComponent } from './formationadmin/formationadmin.component';
import { FormationsformatuerComponent } from './formationsformatuer/formationsformatuer.component';
import { GetacceptformateurComponent } from './getacceptformateur/getacceptformateur.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomecandidateComponent } from './homecandidate/homecandidate.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { HomeformateurComponent } from './homeformateur/homeformateur.component';
import { PageevalcandidatComponent } from './pageevalcandidat/pageevalcandidat.component';
import { RegisterComponent } from './register/register.component';
import { ListecandidatadminComponent } from './listecandidatadmin/listecandidatadmin.component';
import { ListeformateuradminComponent } from './listeformateuradmin/listeformateuradmin.component';
import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { CreatecandidatComponentComponent } from './createcandidat-component/createcandidat-component.component';
import { DetailsformationComponent } from './detailsformation/detailsformation.component';
import { ModifformationComponent } from './modifformation/modifformation.component';
import { ConfirmsuppleformateurComponent } from './confirmsuppleformateur/confirmsuppleformateur.component';
import { StatadminComponent } from './statadmin/statadmin.component';
import { ExemplecertificatComponent } from './exemplecertificat/exemplecertificat.component';
import { GetformationgoogleheetComponent } from './getformationgoogleheet/getformationgoogleheet.component';
import { PresencecandidatComponent } from './presencecandidat/presencecandidat.component';
import { PresenceformateurComponent } from './presenceformateur/presenceformateur.component';
import { AttestationformateurComponent } from './attestationformateur/attestationformateur.component';


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
  {path:'formateurcandidatadmin', component: FormateursCandidatAdminComponent},
  {path:'certificatadmin', component: CertficatsadminComponent},
  {path:'createformation', component: CreateformationComponent},
  {path:'listecandidatadmin', component: ListecandidatadminComponent},
  {path:'listeformateuradmin', component: ListeformateuradminComponent},
  {path:'CreatecandidatComponent', component: CreatecandidatComponentComponent},
  {path:'detailsformation', component: DetailsformationComponent},
  {path:'modifformation', component: ModifformationComponent},
  {path:'confirmationlasupprissionduformateur', component: ConfirmsuppleformateurComponent},
  {path:'statadmin', component: StatadminComponent},
  {path: 'getacceptformateur', component: GetacceptformateurComponent},
  {path:'exemplecertificat', component: ExemplecertificatComponent},
<<<<<<< HEAD
  {path: 'presencecandidat', component: PresencecandidatComponent},
  {path: 'presenceformateur', component: PresenceformateurComponent},
  {path: 'attesttationformateur', component: AttestationformateurComponent}
=======
  {path:'getformationgooglesheet', component: GetformationgoogleheetComponent},
  {path: 'presencecandidat', component: PresencecandidatComponent}
>>>>>>> c1a066527c3b27f08ae7f2ac44a3347409d48d5f
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
