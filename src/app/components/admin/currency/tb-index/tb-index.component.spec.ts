import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbIndexComponent } from './tb-index.component';

describe('TbIndexComponent', () => {
  let component: TbIndexComponent;
  let fixture: ComponentFixture<TbIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
