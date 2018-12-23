import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpdataComponent } from './level-updata.component';

describe('LevelUpdataComponent', () => {
  let component: LevelUpdataComponent;
  let fixture: ComponentFixture<LevelUpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelUpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelUpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
