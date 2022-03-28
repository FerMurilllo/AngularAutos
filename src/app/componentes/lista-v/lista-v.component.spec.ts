import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVComponent } from './lista-v.component';

describe('ListaVComponent', () => {
  let component: ListaVComponent;
  let fixture: ComponentFixture<ListaVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
