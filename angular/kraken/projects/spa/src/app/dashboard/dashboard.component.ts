import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, range, timer } from 'rxjs';
import {
  mergeMap,
  scan,
  reduce,
  toArray,
  tap,
  switchMap,
  take,
  map,
  bufferCount,
  bufferTime,
  mergeAll,
  delay,
  filter,
} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // setTimeout()

    console.log('13');
    const array = [
      'https://httpbin.org/ip',
      'https://httpbin.org/user-agent',
      'https://httpbin.org/delay/3',
    ];
    // 假设这是你的http请求函数
    function httpGet(url: any) {
      return new Promise((resolve) =>
        setTimeout(() => resolve(`Result: ${url}`), 2000)
      );
    }
    httpGet('222');
    // mergeMap是专门用来处理并发处理的rxjs操作符
    // mergeMap第二个参数2的意思是，from(array)每次并发量是2，只有promise执行结束才接着取array里面的数据
    // mergeMap第一个参数httpGet的意思是每次并发，从from(array)中取的数据如何包装，这里是作为httpGet的参数
    const source = timer(0, 4000)
      .pipe(
        scan((i: any, j: any) => {
          return i.concat(j);
        }, []),
        map((x) => x.slice(-1)),
        mergeMap((x) => from(x)),
        mergeMap(httpGet, 1),
        take(9)
      )
      .subscribe((val: any) => console.log(val));
    /**
     * 取每第N个值的操作符
     */
    const takeEveryNth =
      (n: number) =>
      <T>(source: Observable<T>) =>
        new Observable<T>((observer) => {
          let count = 0;
          return source.subscribe({
            next(x) {
              if (count++ % n === 0) observer.next(x);
            },
            error(err) {
              observer.error(err);
            },
            complete() {
              observer.complete();
            },
          });
        });
    const attacker = () => (source: Observable<any>) =>
      new Observable<any>((observer) => {
        let count = 0;

        return source.pipe().subscribe({
          next(x) {
            count++;
            observer.next(of(count * 2));
          },
          error(err) {
            observer.error(err);
          },
          complete() {
            observer.complete();
          },
        });
      });
    /**
     * 还可以使用现有的操作符
     */

    const takeEveryNthSimple =
      (n: number) =>
      <T>(source: Observable<T>) =>
        fromEvent(document, 'click').pipe(bufferCount(n), toArray());

    range(1, 20)
      .pipe(
        takeEveryNthSimple(3),
        switchMap((x) => x)
      )
      .subscribe(console.log);
    takeEveryNthSimple(5);
  }
}
