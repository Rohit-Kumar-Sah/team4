import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecriticComponent } from './moviecritic.component';

describe('MoviecriticComponent', () => {
  let component: MoviecriticComponent;
  let fixture: ComponentFixture<MoviecriticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecriticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecriticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
