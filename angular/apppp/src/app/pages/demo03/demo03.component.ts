import {
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
  interval,
  reduce,
  take,
} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.css'],
})
export class Demo03Component implements OnInit {
  constructor(private router: Router) {
    this.subject.subscribe((x) => console.log('subject', this.subject));
    this.behiubject.subscribe((x) => console.log('subject', this.behiubject));
    this.asyncSubject.subscribe((x) =>
      console.log('asyncSubject', this.asyncSubject)
    );
    this.replaySubject.subscribe((x) =>
      console.log('replaySubject', this.replaySubject)
    );
  }
  public subject = new Subject();
  public behiubject = new BehaviorSubject<any>('');
  public asyncSubject = new AsyncSubject();
  public replaySubject = new ReplaySubject(3);
  public a = new ReplaySubject();
  ngOnInit(): void {
    interval(2000)
      .pipe(take(8))
      .subscribe((x) => {
        this.subject.next(x);
        this.behiubject.next(x);
        this.asyncSubject.next(x);
        this.replaySubject.next(x);
      });
  }
  onclick() {
    // this.router.navigate(['pages/demo04']);
    this.asyncSubject.complete();
    this.replaySubject.complete();
    this.replaySubject
      .pipe(reduce((i: any, j: any) => i.concat(j), []))
      .subscribe();
    this.a = this.replaySubject;
  }
}
