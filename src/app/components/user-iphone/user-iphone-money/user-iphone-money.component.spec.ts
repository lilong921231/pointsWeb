import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneMoneyComponent } from './user-iphone-money.component';

describe('UserIphoneMoneyComponent', () => {
  let component: UserIphoneMoneyComponent;
  let fixture: ComponentFixture<UserIphoneMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
