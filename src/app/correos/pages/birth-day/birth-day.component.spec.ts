import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthDayComponent } from './birth-day.component';

describe('BirthDayComponent', () => {
  let component: BirthDayComponent;
  let fixture: ComponentFixture<BirthDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
