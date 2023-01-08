import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Demo07Component } from './demo07.component';

export class Page {
  // getter properties wait to query the DOM until called.
  get buttons() {
    return this.queryAll<HTMLButtonElement>('button');
  }
  get saveBtn() {
    return this.buttons[0];
  }
  get cancelBtn() {
    return this.buttons[1];
  }
  get nameDisplay() {
    return this.query<HTMLElement>('span');
  }
  get nameInput() {
    return this.query<HTMLInputElement>('input');
  }

  gotoListSpy: jasmine.Spy;
  navigateSpy: jasmine.Spy;
  fixture: any;
  constructor(someFixture: ComponentFixture<Demo07Component>) {
    // get the navigate spy from the injected router spy object
    const routerSpy = someFixture.debugElement.injector.get(Router) as any;
    this.navigateSpy = routerSpy.navigate;
    this.fixture = someFixture;
    // spy on component's `gotoList()` method
    const someComponent = someFixture.componentInstance;
    this.gotoListSpy = spyOn(someComponent, 'save').and.callThrough();
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return this.fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return this.fixture.nativeElement.querySelectorAll(selector);
  }
}
