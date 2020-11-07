import { TestBed } from '@angular/core/testing';

import { QuizapiService } from './quizapi.service';

describe('QuizapiService', () => {
  let service: QuizapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
