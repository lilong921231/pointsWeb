import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneMessageInfoComponent } from './user-iphone-message-info.component';

describe('UserIphoneMessageInfoComponent', () => {
  let component: UserIphoneMessageInfoComponent;
  let fixture: ComponentFixture<UserIphoneMessageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneMessageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneMessageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
