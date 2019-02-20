import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneRegComponent } from './user-iphone-reg.component';

describe('UserIphoneRegComponent', () => {
  let component: UserIphoneRegComponent;
  let fixture: ComponentFixture<UserIphoneRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
