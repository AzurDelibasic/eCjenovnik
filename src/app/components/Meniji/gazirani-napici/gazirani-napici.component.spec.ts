import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaziraniNapiciComponent } from './gazirani-napici.component';

describe('GaziraniSokoviComponent', () => {
  let component: GaziraniNapiciComponent;
  let fixture: ComponentFixture<GaziraniNapiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaziraniNapiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaziraniNapiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
