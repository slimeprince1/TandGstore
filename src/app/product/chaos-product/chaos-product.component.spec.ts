import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaosProductComponent } from './chaos-product.component';

describe('ChaosProductComponent', () => {
  let component: ChaosProductComponent;
  let fixture: ComponentFixture<ChaosProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaosProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaosProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
