import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversityDeadComponent } from './aniversity-dead.component';

describe('AniversityDeadComponent', () => {
  let component: AniversityDeadComponent;
  let fixture: ComponentFixture<AniversityDeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniversityDeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniversityDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
