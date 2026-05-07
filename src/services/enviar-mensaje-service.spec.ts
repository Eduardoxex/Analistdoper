import { TestBed } from '@angular/core/testing';

import { EnviarMensajeService } from './enviar-mensaje-service';

describe('EnviarMensajeService', () => {
  let service: EnviarMensajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarMensajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
