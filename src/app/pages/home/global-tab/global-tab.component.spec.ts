import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTabComponent } from './global-tab.component';

describe('GlobalTabComponent', () => {
  let component: GlobalTabComponent;
  let fixture: ComponentFixture<GlobalTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
