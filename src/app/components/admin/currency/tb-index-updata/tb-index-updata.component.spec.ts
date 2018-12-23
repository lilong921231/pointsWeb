import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbIndexUpdataComponent } from './tb-index-updata.component';

describe('TbIndexUpdataComponent', () => {
  let component: TbIndexUpdataComponent;
  let fixture: ComponentFixture<TbIndexUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbIndexUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbIndexUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
