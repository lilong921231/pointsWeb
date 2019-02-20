import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneRepassComponent } from './user-iphone-repass.component';

describe('UserIphoneRepassComponent', () => {
  let component: UserIphoneRepassComponent;
  let fixture: ComponentFixture<UserIphoneRepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneRepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneRepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
