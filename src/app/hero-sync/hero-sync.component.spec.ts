import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSyncComponent } from './hero-sync.component';

describe('HeroSyncComponent', () => {
  let component: HeroSyncComponent;
  let fixture: ComponentFixture<HeroSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
