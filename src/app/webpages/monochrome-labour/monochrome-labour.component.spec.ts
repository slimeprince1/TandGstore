import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonochromeLabourComponent } from './monochrome-labour.component';

describe('MonochromeLabourComponent', () => {
  let component: MonochromeLabourComponent;
  let fixture: ComponentFixture<MonochromeLabourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonochromeLabourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonochromeLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
