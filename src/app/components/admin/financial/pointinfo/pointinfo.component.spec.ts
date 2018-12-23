import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointinfoComponent } from './pointinfo.component';

describe('PointinfoComponent', () => {
  let component: PointinfoComponent;
  let fixture: ComponentFixture<PointinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
