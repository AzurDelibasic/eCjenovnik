import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergetskiNapiciComponent } from './energetski-napici.component';

describe('EnergetskiNapiciComponent', () => {
  let component: EnergetskiNapiciComponent;
  let fixture: ComponentFixture<EnergetskiNapiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergetskiNapiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergetskiNapiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
