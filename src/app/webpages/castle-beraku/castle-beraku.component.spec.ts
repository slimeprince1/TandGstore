import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleBerakuComponent } from './castle-beraku.component';

describe('CastleBerakuComponent', () => {
  let component: CastleBerakuComponent;
  let fixture: ComponentFixture<CastleBerakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastleBerakuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastleBerakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
