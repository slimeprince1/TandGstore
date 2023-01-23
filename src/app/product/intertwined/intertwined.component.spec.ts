import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntertwinedComponent } from './intertwined.component';

describe('IntertwinedComponent', () => {
  let component: IntertwinedComponent;
  let fixture: ComponentFixture<IntertwinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntertwinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntertwinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
