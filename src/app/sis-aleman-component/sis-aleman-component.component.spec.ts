import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisAlemanComponentComponent } from './sis-aleman-component.component';

describe('SisAlemanComponentComponent', () => {
  let component: SisAlemanComponentComponent;
  let fixture: ComponentFixture<SisAlemanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisAlemanComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisAlemanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
