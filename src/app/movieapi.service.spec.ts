import { TestBed } from '@angular/core/testing';

import { MovieapiService } from './movieapi.service';

describe('MovieapiService', () => {
  let service: MovieapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
