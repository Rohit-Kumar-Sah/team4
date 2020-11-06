import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherusercommentsComponent } from './otherusercomments.component';

describe('OtherusercommentsComponent', () => {
  let component: OtherusercommentsComponent;
  let fixture: ComponentFixture<OtherusercommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherusercommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherusercommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
