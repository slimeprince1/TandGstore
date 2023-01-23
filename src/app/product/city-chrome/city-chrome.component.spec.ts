import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityChromeComponent } from './city-chrome.component';

describe('CityChromeComponent', () => {
  let component: CityChromeComponent;
  let fixture: ComponentFixture<CityChromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityChromeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
