import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { Demo07Component } from './demo07.component';
import { Page } from './page';

describe('Demo07Component', () => {
  let component: Demo07Component;
  let fixture: ComponentFixture<Demo07Component>;
  let page: any;
  /** Create the HeroDetailComponent, initialize it, set test variables  */
  beforeEach(async () => {
    fixture = TestBed.createComponent(Demo07Component);
    component = fixture.componentInstance;
    page = await new Page(fixture);

    // 1st change detection triggers ngOnInit which gets a hero
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();
    });
    // await TestBed.configureTestingModule({
    //   declarations: [Demo07Component],
    // }).compileComponents();

    // fixture = TestBed.createComponent(Demo07Component);
    // component = fixture.componentInstance;

    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should navigate when click save', () => {
  //   click(page.cancelBtn);
  //   expect(page.navigateSpy.calls.any())
  //     .withContext('router.navigate called')
  //     .toBe(true);
  // });
  // it('should navigate when click cancel', () => {
  //   click(page.cancelBtn);
  //   expect(page.navigateSpy.calls.any())
  //     .withContext('router.navigate called')
  //     .toBe(true);
  // });
  it('should show quote after getQuote (marbles)', () => {
    // observable test quote value and complete(), after delay
    const q$ = cold('---xy|', { x: '1', y: 888 });
    const quoteEl = page.saveBtn;
    console.log(222, quoteEl);
    q$.subscribe(
      (x) => {
        console.log(333, x);
      },
      (e) => {
        console.error(444, e);
      }
    );
    setTimeout(() => {
      quoteEl.click();
      const getQuoteSpy = spyOn(component, 'save').and.callThrough();
      getQuoteSpy.and.returnValue(q$);

      fixture.detectChanges(); // ngOnInit()
      expect(quoteEl.textContent)
        .withContext('should show placeholder')
        .toBe('...');

      getTestScheduler().flush(); // flush the observables

      fixture.detectChanges(); // update view

      expect(quoteEl.textContent).withContext('should show quote').toBe('1');
      // expect(errorMessage()).withContext('should not show error').toBeNull();
    }, 3000);
  });
});
