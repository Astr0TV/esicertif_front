import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { RegisterComponent } from './register/register.component';
import { HomecandidateComponent } from './homecandidate/homecandidate.component';
import { FormationCandidatComponent } from './formation-candidat/formation-candidat.component';
import { CertificationcandidatComponent } from './certificationcandidat/certificationcandidat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { PageevalcandidatComponent } from './pageevalcandidat/pageevalcandidat.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeformateurComponent } from './homeformateur/homeformateur.component';
import { FormationsformatuerComponent } from './formationsformatuer/formationsformatuer.component';
import { CandidatformateurComponent } from './candidatformateur/candidatformateur.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { FormationadminComponent } from './formationadmin/formationadmin.component';
import { FormateursCandidatAdminComponent } from './formateurs-candidat-admin/formateurs-candidat-admin.component';
import { CertficatsadminComponent } from './certficatsadmin/certficatsadmin.component';
import { FichepresenceformateurComponent } from './fichepresenceformateur/fichepresenceformateur.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { CreateformationComponent } from './createformation/createformation.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListecandidatadminComponent } from './listecandidatadmin/listecandidatadmin.component';
import { ListeformateuradminComponent } from './listeformateuradmin/listeformateuradmin.component';
import { CreatecandidatComponentComponent } from './createcandidat-component/createcandidat-component.component';
import { CreateformateurComponent } from './createformateur/createformateur.component';
import { DetailsformationComponent } from './detailsformation/detailsformation.component';
import { ModifformationComponent } from './modifformation/modifformation.component';
import { ConfirmsuppleformateurComponent } from './confirmsuppleformateur/confirmsuppleformateur.component';
import { StatadminComponent } from './statadmin/statadmin.component';
import { ExemplecertificatComponent } from './exemplecertificat/exemplecertificat.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    HomeclientComponent,
    RegisterComponent,
    HomecandidateComponent,
    FormationCandidatComponent,
    CertificationcandidatComponent,
    PageevalcandidatComponent,
    HomeformateurComponent,
    FormationsformatuerComponent,
    CandidatformateurComponent,
    HomeadminComponent,
    FormationadminComponent,
    FormateursCandidatAdminComponent,
    CertficatsadminComponent,
    FichepresenceformateurComponent,
    CreateformationComponent,
    ListecandidatadminComponent,
    ListeformateuradminComponent,
    CreatecandidatComponentComponent,
    CreateformateurComponent,
    DetailsformationComponent,
    ModifformationComponent,
    ConfirmsuppleformateurComponent,
    StatadminComponent,
    ExemplecertificatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule, MatRadioModule,
    MatCarouselModule.forRoot(),
    MatTabsModule,
    CdkAccordionModule,
    MatTableModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule

  ],
  entryComponents:[

    CreateformationComponent,CreatecandidatComponentComponent,CreateformateurComponent,ModifformationComponent,ConfirmsuppleformateurComponent,ExemplecertificatComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
