import { Injectable, EventEmitter, Testability } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  public modalState = new EventEmitter();
  public test: any;
  public sun(a: string, fun: Function) {
    this.test = a;
    fun(a);
  }
}
