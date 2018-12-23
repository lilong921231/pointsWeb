import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTbKlineComponent } from './user-tb-kline.component';

describe('UserTbKlineComponent', () => {
  let component: UserTbKlineComponent;
  let fixture: ComponentFixture<UserTbKlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTbKlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTbKlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
