import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneInfoComponent } from './user-iphone-info.component';

describe('UserIphoneInfoComponent', () => {
  let component: UserIphoneInfoComponent;
  let fixture: ComponentFixture<UserIphoneInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
