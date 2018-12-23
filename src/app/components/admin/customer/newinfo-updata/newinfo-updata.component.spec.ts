import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinfoUpdataComponent } from './newinfo-updata.component';

describe('NewinfoUpdataComponent', () => {
  let component: NewinfoUpdataComponent;
  let fixture: ComponentFixture<NewinfoUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinfoUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinfoUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
