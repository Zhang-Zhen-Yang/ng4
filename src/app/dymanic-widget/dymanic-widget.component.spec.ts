import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DymanicWidgetComponent } from './dymanic-widget.component';

describe('DymanicWidgetComponent', () => {
  let component: DymanicWidgetComponent;
  let fixture: ComponentFixture<DymanicWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DymanicWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DymanicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
