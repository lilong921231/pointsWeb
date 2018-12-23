import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbIndexKlineComponent } from './tb-index-kline.component';

describe('TbIndexKlineComponent', () => {
  let component: TbIndexKlineComponent;
  let fixture: ComponentFixture<TbIndexKlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbIndexKlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbIndexKlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
