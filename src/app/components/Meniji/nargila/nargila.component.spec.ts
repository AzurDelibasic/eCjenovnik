import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NargilaComponent } from './nargila.component';

describe('NargilaComponent', () => {
  let component: NargilaComponent;
  let fixture: ComponentFixture<NargilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NargilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NargilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
