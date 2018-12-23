import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdataComponent } from './user-updata.component';

describe('UserUpdataComponent', () => {
  let component: UserUpdataComponent;
  let fixture: ComponentFixture<UserUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
