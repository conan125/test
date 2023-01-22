import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05Component } from './demo05.component';

describe('Demo05Component', () => {
  let component: Demo05Component;
  let fixture: ComponentFixture<Demo05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
