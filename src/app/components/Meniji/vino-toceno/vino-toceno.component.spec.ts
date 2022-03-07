import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoTocenoComponent } from './vino-toceno.component';

describe('VinoTocenoComponent', () => {
  let component: VinoTocenoComponent;
  let fixture: ComponentFixture<VinoTocenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoTocenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinoTocenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
