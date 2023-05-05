import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisFrancesComponentComponent } from './sis-frances-component.component';

describe('SisFrancesComponentComponent', () => {
  let component: SisFrancesComponentComponent;
  let fixture: ComponentFixture<SisFrancesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisFrancesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisFrancesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
