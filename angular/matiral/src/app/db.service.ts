import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}
  open(name = 'db', v = 1): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      let openRequest = indexedDB.open(name, v);

      openRequest.onupgradeneeded = () => {
        let db = openRequest.result;

        console.log('db init');
        let objectStore = db.createObjectStore('people', { keyPath: 'ssn' });
        for (var i in [1, 2, 3, 4, 5]) {
          objectStore.add([i]);
        }
        observer.next(db);
      };

      openRequest.onerror = () => {
        console.error('Error', openRequest.error);
        observer.error(openRequest.error);
      };

      openRequest.onsuccess = () => {
        // 继续使用 db 对象处理数据库
        console.log('open request2');
        let db = openRequest.result;

        db.onversionchange = () => {
          db.close();
          alert('Database is outdated, please reload the page.');
        };

        observer.next(db);
      };
      openRequest.onblocked = () => {
        alert('onblocked');
        // 如果我们正确处理了 onversionchange 事件，这个事件就不应该触发
        // 这意味着还有另一个指向同一数据库的连接
        // 并且在 db.onversionchange 被触发后，该连接没有被关闭
      };
    });
  }
  test() {
    return new Observable((observer: Observer<any>) => {
      observer.next(9);
    });
  }
}
