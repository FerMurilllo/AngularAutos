import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVComponent } from './detalles-v.component';

describe('DetallesVComponent', () => {
  let component: DetallesVComponent;
  let fixture: ComponentFixture<DetallesVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
