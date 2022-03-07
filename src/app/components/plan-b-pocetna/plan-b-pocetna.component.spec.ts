import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBPocetnaComponent } from './plan-b-pocetna.component';

describe('PlanBPocetnaComponent', () => {
  let component: PlanBPocetnaComponent;
  let fixture: ComponentFixture<PlanBPocetnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBPocetnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
