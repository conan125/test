import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import {
  bindNodeCallback,
  from,
  fromEvent,
  map,
  Observable,
  ReplaySubject,
  scan,
  switchMap,
  catchError,
  concatMap,
  of,
  reduce,
  range,
} from 'rxjs';

@Directive({
  selector: '[appSelect]',
})
export class SelectDirective {
  public bb = new ReplaySubject(10);
  constructor(private elementRef: ElementRef, public http: HttpClient) {
    // const someFunction = (err: undefined, a: undefined, b: undefined) => {
    //   console.log(err); // null
    //   console.log(a); // 5
    //   console.log(b); // "some string"
    // };
    // var rename = bindNodeCallback(someFunction);
    // someFunction().subscribe(() => console.log('Renamed!'));
    this.bb.subscribe(console.table);

    fromEvent(this.elementRef.nativeElement, 'keypress')
      .pipe(
        map((x: any) => x.which),
        scan((x: any, y: any) => x.concat(y), ''),
        // map((x: any) => from(x)),
        switchMap((x) => of(`https://www.baidu.com/s?ie=UTF-8&wd=${x}`)),
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((res: any) => {
        console.log(res);
        range(1, 100)
          .pipe(reduce((i, j) => i + j))
          .subscribe(console.info);
      });
    // this.messages =
    // 当得到一条新消息时进行渲染
    // messages
    // 在数组中累积我们的消息
    // .scan((messages, message) => [message].concat(messages), []);
  }
  // @HostListener('change', ['$event'])
  // onblur(event: Event) {
  //   event.preventDefault();
  //   console.warn(
  //     1,
  //     this.elementRef.nativeElement.value,
  //     this.ngControl.control?.parent
  //   );
  //   console.warn(2, this.elementRef.nativeElement.checked);
  // }
}
//
