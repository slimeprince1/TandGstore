import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkingdetailsComponent } from './sinkingdetails.component';

describe('SinkingdetailsComponent', () => {
  let component: SinkingdetailsComponent;
  let fixture: ComponentFixture<SinkingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinkingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinkingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
