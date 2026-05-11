import { TestBed } from '@angular/core/testing';

import { ConvertirAPdf } from './convertir-a-pdf';

describe('ConvertirAPdf', () => {
  let service: ConvertirAPdf;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertirAPdf);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
