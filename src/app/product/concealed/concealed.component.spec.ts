import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcealedComponent } from './concealed.component';

describe('ConcealedComponent', () => {
  let component: ConcealedComponent;
  let fixture: ComponentFixture<ConcealedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcealedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcealedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
