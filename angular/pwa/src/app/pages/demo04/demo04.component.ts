/*
 * @Author: matu-lgs 442285570@qq.com
 * @Date: 2023-01-09 22:37:44
 * @LastEditors: matu-lgs 442285570@qq.com
 * @LastEditTime: 2023-01-24 10:53:19
 * @FilePath: /pwa/src/app/pages/demo04/demo04.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, OnInit } from '@angular/core';
import {
  buffer,
  bufferCount,
  filter,
  from,
  map,
  Observable,
  of,
  reduce,
  switchMap,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.css'],
})
export class Demo04Component implements OnInit {
  result: any;
  result2: any;
  mmm: any;
  ngOnInit(): void {
    this.read('assets/in.db').subscribe((res) => {
      console.log(res);
      this.result = res;
    });
    this.fromb([233, 190, 153, 98, 10]);
  }
  read(path: string) {
    return new Observable((obserber) => {
      fetch(path).then(
        (x) => {
          x.arrayBuffer().then((b) => {
            obserber.next(b.slice(0));
          });
        },
        (err) => {
          obserber.error(err);
        }
      );
    });
    ajax(path).pipe(
      switchMap((x) => {
        console.log(x);
        return of(x.response);
      })
    );
  }

  fromb(x: any[]) {
    from(x)
      .pipe(
        filter((x) => x !== 10),
        map((x) => `${x.toString(16)}`),
        // bufferCount(2),
        // map(([a, b]) => `%${a}${b}`),
        map((a) => `%${a}`),
        tap(console.warn),
        reduce((p, c) => p.concat(c), ''),
        map(decodeURIComponent)
      )
      .subscribe((res) => {
        this.result2 = res;
        const mmm = new Blob(['\ufeff' + res], {
          type: 'text/csv,charset=UTF-8',
        });
        this.mmm = URL.createObjectURL(mmm);
        const link = document.createElement('a');
        link.download = 'filename.csv';
        link.href = this.mmm;
        link.click();
      });
  }
}
