import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  buffer,
  bufferCount,
  from,
  fromEvent,
  map,
  Observable,
  Observer,
  switchMap,
  tap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.css'],
})
export class Demo04Component implements OnInit {
  constructor() {
    window.onerror = function (
      errorMessage,
      scriptURI,
      lineNumber,
      columnNumber,
      errorObj
    ) {
      console.log('错误信息：', errorMessage);
      console.log('出错文件：', scriptURI);
      console.log('出错行号：', lineNumber);
      console.log('出错列号：', columnNumber);
      console.log('错误详情：', errorObj);
    };
    fromEvent(window, 'error')
      .pipe(tap(() => alert('error')))
      .subscribe((errorMessage) => {
        console.log('错误信息：', errorMessage);
        // console.log('出错文件：', scriptURI);
        // console.log('出错行号：', lineNumber);
        // console.log('出错列号：', columnNumber);
        // console.log('错误详情：', errorObj);
      });
  }
  public result: any;
  @ViewChild('test', { read: ElementRef, static: true }) test!: ElementRef;

  readText(data: Blob) {
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
  readText2(data: Blob) {
    return new Observable((observer: Observer<any>) => {
      // 从 blob 获取可读流（readableStream）
      const readableStream = data.stream();
      const stream = readableStream.getReader();

      // 对于每次迭代：value 是下一个 blob 数据片段
      stream.read().then(
        ({ done, value }) => {
          if (done) {
            observer.complete();
          }
          observer.next(value);
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }
  downloadFile(file: Blob, name: string) {
    const a = document.createElement('a');
    a.setAttribute('download', name);
    a.href = URL.createObjectURL(file);
    a.click();
  }
  ngOnInit(): void {
    fromEvent(this.test?.nativeElement, 'change')
      .pipe(
        map((data: any) => data.target.files[0]),
        tap((x) => {
          // this.readText2(x).subscribe((b) => console.log(11, b));
        }),
        switchMap((data: any) => {
          return this.readText2(data).pipe();
        })
      )
      .subscribe((a: Uint8Array) => {
        this.result = a;
        this.downloadFile(
          new File([a], new Date().getTime().toString()),
          new Date().getTime().toString()
        );
      });
  }
}
