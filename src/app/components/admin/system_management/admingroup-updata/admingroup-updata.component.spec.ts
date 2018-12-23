import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingroupUpdataComponent } from './admingroup-updata.component';

describe('AdmingroupUpdataComponent', () => {
  let component: AdmingroupUpdataComponent;
  let fixture: ComponentFixture<AdmingroupUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingroupUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingroupUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
