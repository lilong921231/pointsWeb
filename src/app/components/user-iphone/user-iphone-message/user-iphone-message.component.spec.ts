import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneMessageComponent } from './user-iphone-message.component';

describe('UserIphoneMessageComponent', () => {
  let component: UserIphoneMessageComponent;
  let fixture: ComponentFixture<UserIphoneMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
