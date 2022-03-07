import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrirodniSokoviKafanaComponent } from './prirodni-sokovi-kafana.component';

describe('PrirodniSokoviComponent', () => {
  let component: PrirodniSokoviKafanaComponent;
  let fixture: ComponentFixture<PrirodniSokoviKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrirodniSokoviKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrirodniSokoviKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
