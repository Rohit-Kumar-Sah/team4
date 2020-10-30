import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerspageComponent } from './carrerspage.component';


describe('CarrerspageComponent', () => {
  let component: CarrerspageComponent;
  let fixture: ComponentFixture<CarrerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
