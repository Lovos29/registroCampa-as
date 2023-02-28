import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinquentCustomerReminderComponent } from './delinquent-customer-reminder.component';

describe('DelinquentCustomerReminderComponent', () => {
  let component: DelinquentCustomerReminderComponent;
  let fixture: ComponentFixture<DelinquentCustomerReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelinquentCustomerReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelinquentCustomerReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
