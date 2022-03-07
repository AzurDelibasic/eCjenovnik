import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaziraniNapiciKafanaComponent } from './gazirani-napici-kafana.component';

describe('GaziraniNapiciComponent', () => {
  let component: GaziraniNapiciKafanaComponent;
  let fixture: ComponentFixture<GaziraniNapiciKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaziraniNapiciKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaziraniNapiciKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
