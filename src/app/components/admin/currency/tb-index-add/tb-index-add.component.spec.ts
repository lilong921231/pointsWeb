import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbIndexAddComponent } from './tb-index-add.component';

describe('TbIndexAddComponent', () => {
  let component: TbIndexAddComponent;
  let fixture: ComponentFixture<TbIndexAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbIndexAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
