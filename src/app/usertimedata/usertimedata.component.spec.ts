import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertimedataComponent } from './usertimedata.component';

describe('UsertimedataComponent', () => {
  let component: UsertimedataComponent;
  let fixture: ComponentFixture<UsertimedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertimedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertimedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
