import { Component, OnInit } from '@angular/core';
// RxJS v6+
import {
  take,
  map,
  combineAll,
  window,
  mergeMap,
  mergeAll,
  scan,
  windowTime,
  timestamp,
  toArray,
  pairwise,
  filter,
  findIndex,
  find,
  groupBy,
  materialize,
  sample,
  first,
  zip,
} from 'rxjs/operators';
import { fromEvent, interval, timer, of } from 'rxjs';
type abc<T extends number, A extends number[]> = A['length'] extends T
  ? A
  : `abc<T, [...A, 1]>`;
type c = abc<4, [1, 2, 3]>;
type Whitespace = ' ' | '\n' | '\r' | '\t';

type TrimStart<
  S extends string,
  P extends string = Whitespace
> = S extends `${P}${infer R}` ? TrimStart<R, P> : S;
type String1 = '\t  \r  \n   value';
type Trimmed1 = TrimStart<String1>;

type String2 = '---value';
type Trimmed2 = TrimStart<String2, '-'>;
type bbb = `http://${string}`;
@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.css'],
})
export class Demo08Component implements OnInit {
  constructor() {
    fromEvent(document, 'click')
      .pipe()
      .subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    const a = timer(1, 1000);
    const b = timer(1, 2000);
    // a.pipe(window(b), mergeAll()).subscribe(console.info);
    const source = timer(7, 1000);
    const example = a.pipe(window(b));
    const count = example.pipe(scan((acc, curr) => acc + 1, 0));
    // const subscribe = count.subscribe((val) => console.log(`Window ${val}:`));
    // const subscribeTwo = example
    //   .pipe(mergeAll())
    //   .subscribe((val) => console.log(val));
    const clicks = fromEvent(document, 'click');
    const sec = interval(5000);
    const result = a.pipe(
      // map((i) => sample(clicks))
      // window(sec),
      // windowTime(3000),
      // mergeMap((win) => win.pipe(take(9))), // each window has at most 2 emissions
      // mergeAll(), // flatten the Observable-of-Observables
      // mergeMap((i) => b.pipe(take(5))),
      // pairwise(),
      // toArray(),
      // timestamp()
      // filter((i) => !!(i % 3))
      // groupBy((i) => !!(i % 3)),
      // materialize()
      // mergeMap(([i, j]) => `${i}has${j}`)
      // mergeAll()

      first()
    );
    result.subscribe((x) => {
      // console.log(navigator.permissions);
      console.log(x);
      // document.execCommand('2D-Position', false, 'true');
      // document.execCommand('selectAll');
      // document.execCommand('open');
      // document.execCommand('SaveAs');
      // document.execCommand('Open');
      // document.execCommand('BackgroundImageCache', false, 'true');
    });
  }
  clickOn() {
    document.execCommand('SaveAs', true, 'mycodes.txt');

    const copy = document.querySelector('#red') as HTMLElement;
    const range = document.createRange();
    range.selectNode(copy);
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);
    document.execCommand('copy');
    console.log('copyed');
    document.execCommand('Cut');
    document.execCommand('CreateLink', true, 'true'); //
  }
}
