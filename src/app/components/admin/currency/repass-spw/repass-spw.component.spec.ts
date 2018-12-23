import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepassSpwComponent } from './repass-spw.component';

describe('RepassSpwComponent', () => {
  let component: RepassSpwComponent;
  let fixture: ComponentFixture<RepassSpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepassSpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepassSpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
