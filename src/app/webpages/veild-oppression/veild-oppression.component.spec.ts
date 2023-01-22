import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeildOppressionComponent } from './veild-oppression.component';

describe('VeildOppressionComponent', () => {
  let component: VeildOppressionComponent;
  let fixture: ComponentFixture<VeildOppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeildOppressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeildOppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
