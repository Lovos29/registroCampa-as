import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsEventsComponent } from './notifications-events.component';

describe('NotificationsEventsComponent', () => {
  let component: NotificationsEventsComponent;
  let fixture: ComponentFixture<NotificationsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
