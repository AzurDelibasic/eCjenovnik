import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NargilaKafanaComponent } from './nargila-kafana.component';

describe('NargilaKafanaComponent', () => {
  let component: NargilaKafanaComponent;
  let fixture: ComponentFixture<NargilaKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NargilaKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NargilaKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
