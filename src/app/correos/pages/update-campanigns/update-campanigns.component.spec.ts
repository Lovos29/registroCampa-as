import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampanignsComponent } from './update-campanigns.component';

describe('UpdateCampanignsComponent', () => {
  let component: UpdateCampanignsComponent;
  let fixture: ComponentFixture<UpdateCampanignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCampanignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCampanignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
