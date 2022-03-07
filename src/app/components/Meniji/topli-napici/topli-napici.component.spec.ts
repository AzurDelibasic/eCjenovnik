import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopliNapiciComponent } from './topli-napici.component';

describe('TopliNapiciComponent', () => {
  let component: TopliNapiciComponent;
  let fixture: ComponentFixture<TopliNapiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopliNapiciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopliNapiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
