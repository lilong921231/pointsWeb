import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageinfoComponent } from './messageinfo.component';

describe('MessageinfoComponent', () => {
  let component: MessageinfoComponent;
  let fixture: ComponentFixture<MessageinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
