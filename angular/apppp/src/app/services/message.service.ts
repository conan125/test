import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public a = new BehaviorSubject<any>(null);
  public astate = this.a.asObservable();
  public message = new Worker('assets/work/js/a.js');
  constructor() {
    this.message.onmessage = (data) => {
      // console.log(data);
    };
  }
  goto() {
    this.a.next(6);
  }
}
