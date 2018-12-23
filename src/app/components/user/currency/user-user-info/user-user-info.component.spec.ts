import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUserInfoComponent } from './user-user-info.component';

describe('UserUserInfoComponent', () => {
  let component: UserUserInfoComponent;
  let fixture: ComponentFixture<UserUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
