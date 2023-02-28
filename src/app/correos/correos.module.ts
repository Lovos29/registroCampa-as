import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthDayComponent } from './pages/birth-day/birth-day.component';
import { NotificationsEventsComponent } from './pages/notifications-events/notifications-events.component';
import { PaymentReminderComponent } from './pages/payment-reminder/payment-reminder.component';
import { DelinquentCustomerReminderComponent } from './pages/delinquent-customer-reminder/delinquent-customer-reminder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateCampanignsComponent } from './pages/update-campanigns/update-campanigns.component';
import { AniversityDeadComponent } from './pages/aniversity-dead/aniversity-dead.component';
import { DeathAnniversaryComponent } from './pages/death-anniversary/death-anniversary.component';




@NgModule({
  declarations: [
    BirthDayComponent,
    NotificationsEventsComponent,
    PaymentReminderComponent,
    DelinquentCustomerReminderComponent,
    UpdateCampanignsComponent,
    DeathAnniversaryComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CorreosModule { }
