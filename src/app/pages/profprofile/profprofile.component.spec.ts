import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfprofileComponent } from './profprofile.component';

describe('ProfprofileComponent', () => {
  let component: ProfprofileComponent;
  let fixture: ComponentFixture<ProfprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
