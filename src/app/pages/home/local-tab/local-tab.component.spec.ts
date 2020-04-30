import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTabComponent } from './local-tab.component';

describe('LocalTabComponent', () => {
  let component: LocalTabComponent;
  let fixture: ComponentFixture<LocalTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
