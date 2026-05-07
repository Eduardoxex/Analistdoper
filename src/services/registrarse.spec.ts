import { TestBed } from '@angular/core/testing';

import { Registrarse } from './registrarse';

describe('Registrarse', () => {
  let service: Registrarse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registrarse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
