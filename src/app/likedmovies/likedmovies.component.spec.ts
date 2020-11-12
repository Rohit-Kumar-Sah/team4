import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedmoviesComponent } from './likedmovies.component';

describe('LikedmoviesComponent', () => {
  let component: LikedmoviesComponent;
  let fixture: ComponentFixture<LikedmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
