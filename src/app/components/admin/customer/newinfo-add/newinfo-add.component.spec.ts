import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinfoAddComponent } from './newinfo-add.component';

describe('NewinfoAddComponent', () => {
  let component: NewinfoAddComponent;
  let fixture: ComponentFixture<NewinfoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinfoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
