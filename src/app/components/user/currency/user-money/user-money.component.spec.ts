import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoneyComponent } from './user-money.component';

describe('UserMoneyComponent', () => {
  let component: UserMoneyComponent;
  let fixture: ComponentFixture<UserMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
