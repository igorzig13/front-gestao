import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAssociado } from './cadastro-associado';

describe('CadastroAssociado', () => {
  let component: CadastroAssociado;
  let fixture: ComponentFixture<CadastroAssociado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAssociado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAssociado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
