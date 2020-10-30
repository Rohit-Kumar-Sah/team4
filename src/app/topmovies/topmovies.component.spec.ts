import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmoviesComponent } from './topmovies.component';

describe('TopmoviesComponent', () => {
  let component: TopmoviesComponent;
  let fixture: ComponentFixture<TopmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
