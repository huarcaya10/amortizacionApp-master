import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisInglesComponentComponent } from './sis-ingles-component.component';

describe('SisInglesComponentComponent', () => {
  let component: SisInglesComponentComponent;
  let fixture: ComponentFixture<SisInglesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisInglesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisInglesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
