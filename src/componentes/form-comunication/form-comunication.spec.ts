import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComunication } from './form-comunication';

describe('FormComunication', () => {
  let component: FormComunication;
  let fixture: ComponentFixture<FormComunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComunication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComunication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
