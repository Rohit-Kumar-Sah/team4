import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commentpage872957Component } from './commentpage872957.component';

describe('Commentpage872957Component', () => {
  let component: Commentpage872957Component;
  let fixture: ComponentFixture<Commentpage872957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commentpage872957Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Commentpage872957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
