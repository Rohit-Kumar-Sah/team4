import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistpageComponent } from './watchlistpage.component';

describe('WatchlistpageComponent', () => {
  let component: WatchlistpageComponent;
  let fixture: ComponentFixture<WatchlistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
