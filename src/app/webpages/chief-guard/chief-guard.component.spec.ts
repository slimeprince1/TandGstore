import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiefGuardComponent } from './chief-guard.component';

describe('ChiefGuardComponent', () => {
  let component: ChiefGuardComponent;
  let fixture: ComponentFixture<ChiefGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiefGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiefGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
