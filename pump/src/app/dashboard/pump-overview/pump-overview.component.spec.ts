import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpOverviewComponent } from './pump-overview.component';

describe('PumpOverviewComponent', () => {
  let component: PumpOverviewComponent;
  let fixture: ComponentFixture<PumpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
