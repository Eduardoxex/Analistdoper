import { TestBed } from '@angular/core/testing';

import { CvAnalisis } from './cv-analisis';

describe('CvAnalisis', () => {
  let service: CvAnalisis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvAnalisis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
