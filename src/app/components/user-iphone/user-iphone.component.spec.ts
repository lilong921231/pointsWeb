import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIphoneComponent } from './user-iphone.component';

describe('UserIphoneComponent', () => {
  let component: UserIphoneComponent;
  let fixture: ComponentFixture<UserIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
