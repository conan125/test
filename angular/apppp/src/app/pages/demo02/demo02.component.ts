import { HttpClient } from '@angular/common/http';
import { MessageService } from './../../services/message.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { from, concatMap, switchMap, map, of } from 'rxjs';
import { bufferCount, reduce, toArray, zip, zipAll } from 'rxjs/operators';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo02Component implements OnInit {
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    // http.get('/demo02').subscribe(console.log);
  }
  data = this.messageService.astate;
  response = [0x65, 0x97, 0x34, 0x78, 0x98];
  ngOnInit(): void {
    var uInt8Array = new Uint8Array(this.response);
    var i = uInt8Array.length;
    var binaryString = new Array(i);
    while (i--) {
      binaryString[i] = String.fromCharCode(uInt8Array[i]);
    }
    var data = binaryString.join('');
    var base64 = window.btoa(data);
    // console.log(base64);
    let a = new Array(17).fill(0).map((_, i) => i - 8);
    let b = new Array(15)
      .fill(0)
      .map((_, i) => i - 6)
      .reverse();

    // a.forEach((w) => {
    //   b.forEach((y) =>
    //     console.warn(
    //       a
    //         .map((x) =>
    //           (x * x + y * y - 25) ** 3 < 25 * x * x * y ** 3
    //             ? String.fromCharCode(w + 255)
    //             : ' '
    //         )
    //         .join('')
    //     )
    //   );
    // });

    let userInfo = [
      {
        id: 'id1',
        users: [
          {
            name: 'userName1',
            job: 'userJob',
          },
          {
            name: 'userName2',
            job: 'userJob',
          },
        ],
      },
      {
        id: 'id2',
        users: [
          {
            name: 'userName3',
            job: 'userJob',
          },
          {
            name: 'userName4',
            job: 'userJob',
          },
        ],
      },
    ];
    a = [656667];
    const mapSource$ = from([6, 5]).pipe(
      bufferCount(2, 2),

      map(([x, y]) => String.fromCharCode(Number(`0x${x}${y}`)))
    );
    const subscribe = mapSource$
      .pipe(
        toArray(),
        map((x) => x.join(''))
      )
      .subscribe((val) => console.log(val));
  }
}
