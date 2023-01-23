import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedMajestyComponent } from './divided-majesty.component';

describe('DividedMajestyComponent', () => {
  let component: DividedMajestyComponent;
  let fixture: ComponentFixture<DividedMajestyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividedMajestyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedMajestyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
