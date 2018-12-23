import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdataComponent } from './admin-updata.component';

describe('AdminUpdataComponent', () => {
  let component: AdminUpdataComponent;
  let fixture: ComponentFixture<AdminUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
