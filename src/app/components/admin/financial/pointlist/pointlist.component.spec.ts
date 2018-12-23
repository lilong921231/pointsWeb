import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointlistComponent } from './pointlist.component';

describe('PointlistComponent', () => {
  let component: PointlistComponent;
  let fixture: ComponentFixture<PointlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
