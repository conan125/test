import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo04Component } from './demo04.component';

describe('Demo04Component', () => {
  let component: Demo04Component;
  let fixture: ComponentFixture<Demo04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
