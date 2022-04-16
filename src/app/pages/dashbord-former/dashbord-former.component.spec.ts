import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordFormerComponent } from './dashbord-former.component';

describe('DashbordFormerComponent', () => {
  let component: DashbordFormerComponent;
  let fixture: ComponentFixture<DashbordFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordFormerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
