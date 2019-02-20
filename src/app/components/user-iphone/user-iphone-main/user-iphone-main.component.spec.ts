import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneMainComponent } from './user-iphone-main.component';

describe('UserIphoneMainComponent', () => {
  let component: UserIphoneMainComponent;
  let fixture: ComponentFixture<UserIphoneMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
