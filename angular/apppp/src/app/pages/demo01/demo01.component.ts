import { MessageService } from './../../services/message.service';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  fromEvent,
  interval,
  Subject,
  scan,
  reduce,
  take,
  of,
  from,
  map,
  mergeMap,
  tap,
  switchMap,
  flatMap,
} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  bufferCount,
  bufferTime,
  catchError,
  concat,
  concatMap,
  delay,
  empty,
  filter,
  from,
  interval,
  map,
  mergeAll,
  mergeMap,
  Observable,
  observable,
  of,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css'],
})
export class Demo01Component implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private http: HttpClient,
    private router: Router,
    private msg: MessageService
  ) {}
  @ViewChild('xx', { read: true }) xx!: TemplateRef<any>;
  public a = new Subject();
  ngOnInit(): void {
    // this.a.subscribe(console.log);
    // const b = fromEvent(document, 'click');
    const b = interval(1000).pipe(
      scan((i, j) => i + j),
      map((x) => {
        return of({ a: x ** 2 });
      }),
      mergeMap((y) => this.http.get('assets/work/json/a.json')),
      switchMap((x: any) => of(x['w'])),
      take(5)
      // reduce((i, j) => i + j)
    );
    b.subscribe((x) => {
      // console.log(x);
      // console.log('element', this.elementRef.nativeElement);
      // console.log('view', this.viewContainerRef);
      // this.elementRef.nativeElement.innerHTML = `<p>${JSON.stringify(x)}</p>`;
      // fetch('assets/work/js/a.js').then(console.log);
    });
    const work = new Worker('assets/work/js/a.js');
    work.onmessage = (data) => {
      // console.log(data);
    };
  }
  onclick(): void {
    this.a.next([1, 2, 3, 7, 45, 5]);
    this.msg.goto();
    this.router.navigate(['/pages/demo02']);
  }
}
