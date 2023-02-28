import { customer } from 'src/app/common/customer';
import { PaymentReminderComponent } from './correos/pages/payment-reminder/payment-reminder.component';
import { NotificationsEventsComponent } from './correos/pages/notifications-events/notifications-events.component';
import { DelinquentCustomerReminderComponent } from './correos/pages/delinquent-customer-reminder/delinquent-customer-reminder.component';
import { BirthDayComponent } from './correos/pages/birth-day/birth-day.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './correos/pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PrincipalComponent } from './correos/pages/principal/principal.component';
import { UpdateCampanignsComponent } from './correos/pages/update-campanigns/update-campanigns.component';
import { EmailComponent } from './pages/email/email.component';
import { DeathAnniversaryComponent } from './correos/pages/death-anniversary/death-anniversary.component';

 const routes: Routes = [ 
  {
    path:'LoginComponent',
    component:LoginComponent, 
    //pathMatch:'full' // CUANDO NO HUBIQUEMOS EN UNA RUTA QUE NO EXISTA NOS REDIRIJIRA A ESTA MIRA RUTA
  },
  {
    path:'BirthDayComponent', 
    component:BirthDayComponent, // CAMPAÑA CUMPLEAÑOS 
  },
  {
    path:'Principal/Actualizar-Registro/edit/:id', 
    component:UpdateCampanignsComponent, // UPDATE DELINQUENT
  },
  
  {
    path:'delinquent-customer-reminder', // recordatorio clientes morosos
    component:DelinquentCustomerReminderComponent,
  },
  
  {
    path:'notifications-events', // notificaciones de eventos
    component:NotificationsEventsComponent,
  },
  {
    path:'payment-reminder', // Recordatorio de pago cliente al dia
    component:PaymentReminderComponent,
  },
  {
    path:'', 
    component:PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path:'Aniversario Fallecidos', // Campaña anversario de fallecidos
    component:DeathAnniversaryComponent,
  },
  {
    path:'Principal',
    component:PrincipalComponent,
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
