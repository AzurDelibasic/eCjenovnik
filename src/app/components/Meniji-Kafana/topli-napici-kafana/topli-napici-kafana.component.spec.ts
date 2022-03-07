import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopliNapiciKafanaComponent } from './topli-napici-kafana.component';

describe('TopliNapiciComponent', () => {
  let component: TopliNapiciKafanaComponent;
  let fixture: ComponentFixture<TopliNapiciKafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopliNapiciKafanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopliNapiciKafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
