import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisFlatComponentComponent } from './sis-flat-component.component';

describe('SisFlatComponentComponent', () => {
  let component: SisFlatComponentComponent;
  let fixture: ComponentFixture<SisFlatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisFlatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisFlatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
