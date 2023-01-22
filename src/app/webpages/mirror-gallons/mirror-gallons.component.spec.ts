import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirrorGallonsComponent } from './mirror-gallons.component';

describe('MirrorGallonsComponent', () => {
  let component: MirrorGallonsComponent;
  let fixture: ComponentFixture<MirrorGallonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirrorGallonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirrorGallonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
