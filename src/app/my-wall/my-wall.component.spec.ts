import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWallComponent } from './my-wall.component';

describe('MyWallComponent', () => {
  let component: MyWallComponent;
  let fixture: ComponentFixture<MyWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
