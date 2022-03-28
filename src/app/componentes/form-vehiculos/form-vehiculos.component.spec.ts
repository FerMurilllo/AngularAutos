import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculosComponent } from './form-vehiculos.component';

describe('FormVehiculosComponent', () => {
  let component: FormVehiculosComponent;
  let fixture: ComponentFixture<FormVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
