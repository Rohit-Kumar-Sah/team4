import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreleaseslodhiComponent } from './newreleaseslodhi.component';

describe('NewreleaseslodhiComponent', () => {
  let component: NewreleaseslodhiComponent;
  let fixture: ComponentFixture<NewreleaseslodhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewreleaseslodhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreleaseslodhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
