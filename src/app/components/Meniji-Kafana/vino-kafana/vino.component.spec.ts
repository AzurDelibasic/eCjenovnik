import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoKafanaComponent } from './vino-kafana.component';

describe('VinoComponent', () => {
  let component: VinoKafanaComponent;
  let fixture: ComponentFixture<VinoKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinoKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
