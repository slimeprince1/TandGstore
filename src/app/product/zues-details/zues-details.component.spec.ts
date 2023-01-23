import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuesDetailsComponent } from './zues-details.component';

describe('ZuesDetailsComponent', () => {
  let component: ZuesDetailsComponent;
  let fixture: ComponentFixture<ZuesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
