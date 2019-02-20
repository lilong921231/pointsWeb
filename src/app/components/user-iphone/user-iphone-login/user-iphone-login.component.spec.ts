import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneLoginComponent } from './user-iphone-login.component';

describe('UserIphoneLoginComponent', () => {
  let component: UserIphoneLoginComponent;
  let fixture: ComponentFixture<UserIphoneLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
