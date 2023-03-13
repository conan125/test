import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.css'],
})
export class Demo03Component implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  readFile = (x: any) => {
    return new Observable((o) => {
      const reader = new FileReader();
      reader.readAsDataURL(x);

      reader.onload = (r) => {
        console.warn(r.target?.result);
        o.next(r);
      };
      reader.onerror = (y) => {
        console.error(y);
        o.error(y);
      };
    });
  };
  ngAfterViewInit(): void {
    fromEvent(this.img.nativeElement, 'input')
      .pipe(
        switchMap(() => {
          const file = (document.querySelector('#img') as HTMLInputElement)
            .files?.[0];
          return this.readFile(file);
        })
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }
  @ViewChild('img') private img!: ElementRef<any>;

  binding: any;
}
