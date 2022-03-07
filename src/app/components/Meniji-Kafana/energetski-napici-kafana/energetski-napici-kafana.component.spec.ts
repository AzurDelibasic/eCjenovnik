import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergetskiNapiciKafanaComponent } from './energetski-napici-kafana.component';

describe('EnergetskiNapiciKafanaComponent', () => {
  let component: EnergetskiNapiciKafanaComponent;
  let fixture: ComponentFixture<EnergetskiNapiciKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergetskiNapiciKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergetskiNapiciKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
