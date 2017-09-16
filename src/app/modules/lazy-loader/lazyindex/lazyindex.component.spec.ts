import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyindexComponent } from './lazyindex.component';

describe('LazyindexComponent', () => {
  let component: LazyindexComponent;
  let fixture: ComponentFixture<LazyindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
