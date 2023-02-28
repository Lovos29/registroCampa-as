import { BirthDayComponent } from './correos/pages/birth-day/birth-day.component';
import { birthDay } from './correos/interfaces/happybirthday.interface';
import { LoginComponent } from './correos/pages/login/login.component';
import { CorreosModule } from './correos/correos.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrincipalComponent } from './correos/pages/principal/principal.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { EmailComponent } from './pages/email/email.component';
import { DeathAnniversaryComponent } from './correos/pages/death-anniversary/death-anniversary.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DataTablesModule
  ],
  providers: [
   {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
