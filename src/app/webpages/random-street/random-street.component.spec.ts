import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomStreetComponent } from './random-street.component';

describe('RandomStreetComponent', () => {
  let component: RandomStreetComponent;
  let fixture: ComponentFixture<RandomStreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomStreetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
