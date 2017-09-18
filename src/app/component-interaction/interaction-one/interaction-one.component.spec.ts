import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionOneComponent } from './interaction-one.component';

describe('InteractionOneComponent', () => {
  let component: InteractionOneComponent;
  let fixture: ComponentFixture<InteractionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
