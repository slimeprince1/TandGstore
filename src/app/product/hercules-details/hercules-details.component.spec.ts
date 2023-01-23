import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerculesDetailsComponent } from './hercules-details.component';

describe('HerculesDetailsComponent', () => {
  let component: HerculesDetailsComponent;
  let fixture: ComponentFixture<HerculesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerculesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerculesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
