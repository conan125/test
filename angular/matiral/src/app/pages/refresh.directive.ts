import { Directive, ElementRef, ViewContainerRef } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Directive({
  selector: '[appRefresh]',
})
export class RefreshDirective {
  constructor(
    private elementRef: ElementRef,
    private viewcontainerRef: ViewContainerRef
  ) {
    const inter = new IntersectionObserver((a) => {
      let b = a[0].intersectionRatio > 0.01;
      if (b) {
        this.elementRef.nativeElement.classList.add('show');
        console.log('yes');
      } else {
        this.elementRef.nativeElement.classList.remove('show');
        console.log('no');
      }
    });
    inter.observe(this.elementRef.nativeElement);

    fromEvent(window, 'scroll')
      .pipe
      // tap(() => {
      //   let height = window.innerHeight * 0.95;
      //   let height2 = window.innerHeight * 0.05;
      //   let a = this.elementRef.nativeElement.getBoundingClientRect().top;
      //   let b = this.elementRef.nativeElement.getBoundingClientRect().bottom;
      //   if (a < height) {
      //     this.elementRef.nativeElement.classList.add('show');
      //   } else {
      //     this.elementRef.nativeElement.classList.remove('show');
      //   }
      //   if (b < height2) {
      //     this.elementRef.nativeElement.classList.remove('show');
      //   }
      // console.log(a, height);
      // })
      ()
      .subscribe((a) => {
        // console.warn(this.elementRef.nativeElement.classList);
      });
  }
}
