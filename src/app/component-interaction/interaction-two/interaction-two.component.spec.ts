import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionTwoComponent } from './interaction-two.component';

describe('InteractionTwoComponent', () => {
  let component: InteractionTwoComponent;
  let fixture: ComponentFixture<InteractionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
