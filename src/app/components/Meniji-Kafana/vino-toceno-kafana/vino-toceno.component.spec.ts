import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoTocenoKafanaComponent } from './vino-toceno-kafana.component';

describe('VinoTocenoComponent', () => {
  let component: VinoTocenoKafanaComponent;
  let fixture: ComponentFixture<VinoTocenoKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoTocenoKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinoTocenoKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
