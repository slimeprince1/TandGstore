import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenRoseComponent } from './hidden-rose.component';

describe('HiddenRoseComponent', () => {
  let component: HiddenRoseComponent;
  let fixture: ComponentFixture<HiddenRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenRoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
