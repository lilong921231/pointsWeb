import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeldataComponent } from './deldata.component';

describe('DeldataComponent', () => {
  let component: DeldataComponent;
  let fixture: ComponentFixture<DeldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
