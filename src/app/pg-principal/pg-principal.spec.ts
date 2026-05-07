import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPrincipal } from './pg-principal';

describe('PgPrincipal', () => {
  let component: PgPrincipal;
  let fixture: ComponentFixture<PgPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
