import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PatronComponent } from './patron/patron.component';
import { EnforcerComponent } from './enforcer/enforcer.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatronProfileComponent } from './patron/patron-profile/patron-profile.component';
import { EnforcerProfileComponent } from './enforcer/enforcer-profile/enforcer-profile.component';
import { IncidentListComponent } from './enforcer/incident-list/incident-list.component';
import { ReportIncidentComponent } from './patron/report-incident/report-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EnforcerComponent,
    PatronComponent,
    TopBarComponent,
    PatronProfileComponent,
    EnforcerProfileComponent,
    IncidentListComponent,
    ReportIncidentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "patron", component: PatronComponent },
      { path: "patron/profile", component: PatronProfileComponent},
      { path: "patron/report", component: ReportIncidentComponent},
      { path: "enforcer", component: EnforcerComponent },
      { path: "enforcer/profile", component: EnforcerProfileComponent },
      { path: "enforcer/incidents", component: IncidentListComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
