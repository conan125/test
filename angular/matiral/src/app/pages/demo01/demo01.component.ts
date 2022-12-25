import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  bindCallback,
  buffer,
  bufferCount,
  from,
  fromEvent,
  fromEventPattern,
  map,
  Observable,
  Observer,
  of,
  pipe,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css'],
})
export class Demo01Component implements OnInit {
  @ViewChild('upload', { read: ElementRef, static: true }) upload!: ElementRef;
  @ViewChild('test', { read: ElementRef, static: true }) test!: ElementRef;
  @ViewChild('merge', { read: ElementRef, static: true }) merge!: ElementRef;
  constructor() {}
  readtext(data: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(data);
      reader.onload = (x) => {
        resolve(reader.result?.slice(0));
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }
  readtext2(data: Blob) {
    return new Observable((observer: Observer<any>) => {
      const reader = new FileReader();
      reader.readAsBinaryString(data);
      reader.onload = () => {
        observer.next(reader.result?.toString());
        observer.complete();
      };
      reader.onerror = (error) => {
        observer.error(error);
        observer.complete();
      };
    });
  }

  ngOnInit(): void {
    const qqq = map((x: number) => {
      return x.toString(36);
    });

    const a = of(100, 120);
    const bb = {
      next(t: any) {
        console.log(t);
      },
      error() {
        alert('msg');
      },
    };
    const cc = {
      next() {
        console.log('data: ', bb, typeof bb);
      },
      error() {
        console.log('errors already caught... will not run');
      },
    };
    const qqq1 = (y: number) => {
      return pipe(
        map((x: number) => x - 49),
        map((x: number) => {
          return x.toString(y);
        })
      );
    };
    qqq1(10)(a).subscribe(bb);
    fromEvent(this.test?.nativeElement, 'change')
      .pipe(
        map((data: any) => data.target.files[0]),
        switchMap((data: any) => {
          return this.readtext2(data).pipe(
            tap((x) => {
              console.log(1);
            })
          );
        })
      )

      // bufferCount(1024)

      .subscribe((x) => {
        console.warn(x);
        JSON.stringify(x, (k, v) => {
          let y = JSON.parse(v, (k2, v2) => {
            if (['start', 'end'].includes(k2)) {
              return undefined;
            }
            return v2;
          });
          console.log(y, JSON.stringify(y, null, 1));
        });
        // console.log(
        //   JSON.parse(y, (k, v) => {
        //     console.log(22222, k, v);
        //     if (['start', 'end'].includes(k)) {
        //       return undefined;
        //     }
        //     return v;
        //   })
        // );
      });
    fromEvent(this.upload?.nativeElement, 'change')
      .pipe(
        map((data: any) => data.target.files[0].slice())
        // switchMap((data: any[]) => from(data.slice())),
        // bufferCount(1024)
      )
      .subscribe((data: any) => {
        console.log(data);
        const uploadSize = 1024 * 10;
        const arr = [];
        for (let i = 0; i < data.size; i += uploadSize) {
          const index = parseInt((i / uploadSize).toString(), 10) + 1;
          arr.push(data.slice(i, uploadSize * index));
        }
        console.log(arr);
        this.downloadfiles(arr, 'yyyy');
      });
  }
  downloadfile(file: Blob, name: string) {
    const a = document.createElement('a');
    a.setAttribute('download', name);
    a.href = URL.createObjectURL(file);
    a.click();
  }
  downloadfiles(arr: Blob[], name: string) {
    arr.forEach((v: Blob, i: number) => {
      this.downloadfile(v, name + '_' + i);
    });
  }
  mergeFiles() {
    const files = this.merge.nativeElement.files;
    const arr = Array.from(files).map((v: any) => {
      return v.slice(0, v.size).slice();
    });
    const name = files[0].name.replace(/_\d*.*txt$/, '');
    console.log(name, arr);

    const file = new File(arr, name);
    this.downloadfile(file, name);
  }
}
