import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnspokenComponent } from './unspoken.component';

describe('UnspokenComponent', () => {
  let component: UnspokenComponent;
  let fixture: ComponentFixture<UnspokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnspokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnspokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
