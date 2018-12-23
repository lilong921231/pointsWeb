import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepassComponent } from './user-repass.component';

describe('UserRepassComponent', () => {
  let component: UserRepassComponent;
  let fixture: ComponentFixture<UserRepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
