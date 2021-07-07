import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormationCandidatComponent } from './formation-candidat/formation-candidat.component';
import { HomecandidateComponent } from './homecandidate/homecandidate.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'acceuil',pathMatch:'full'},

  {path:'acceuil', component: AccueilComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'register', component: RegisterComponent},
  {path:'homeclient', component: HomeclientComponent},
  {path:'homecandidat', component: HomecandidateComponent},
  {path:'formationcandidat', component: FormationCandidatComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
