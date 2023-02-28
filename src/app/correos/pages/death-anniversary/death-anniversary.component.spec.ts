import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathAnniversaryComponent } from './death-anniversary.component';

describe('DeathAnniversaryComponent', () => {
  let component: DeathAnniversaryComponent;
  let fixture: ComponentFixture<DeathAnniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathAnniversaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathAnniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
