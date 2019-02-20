import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphonePointComponent } from './user-iphone-point.component';

describe('UserIphonePointComponent', () => {
  let component: UserIphonePointComponent;
  let fixture: ComponentFixture<UserIphonePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphonePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphonePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
