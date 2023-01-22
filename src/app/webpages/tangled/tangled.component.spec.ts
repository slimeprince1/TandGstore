import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TangledComponent } from './tangled.component';

describe('TangledComponent', () => {
  let component: TangledComponent;
  let fixture: ComponentFixture<TangledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TangledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TangledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
