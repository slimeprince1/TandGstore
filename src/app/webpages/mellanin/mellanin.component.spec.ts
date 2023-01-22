import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MellaninComponent } from './mellanin.component';

describe('MellaninComponent', () => {
  let component: MellaninComponent;
  let fixture: ComponentFixture<MellaninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MellaninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MellaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
