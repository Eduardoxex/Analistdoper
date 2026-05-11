import { TestBed } from '@angular/core/testing';

import { ObtenerRegistros } from './obtener-registros';

describe('ObtenerRegistros', () => {
  let service: ObtenerRegistros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerRegistros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
