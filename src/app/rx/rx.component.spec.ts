import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RXComponent } from './rx.component';

describe('RXComponent', () => {
  let component: RXComponent;
  let fixture: ComponentFixture<RXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
