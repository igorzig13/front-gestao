import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Associados } from './associados';

describe('Associados', () => {
  let component: Associados;
  let fixture: ComponentFixture<Associados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Associados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Associados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
