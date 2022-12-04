import { ModalService } from './modal.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
type myType = '123';
type B = { a: string };
type C = myType & B;
interface D {
  b: C;
}
type E = keyof D;
enum F {
  A,
  B,
  C,
}
type G = keyof F;
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        // 我只监听了一个对象
        let entry = entries[0];
        console.log('entries', entries);
        console.log(entry);
        document.querySelector('#el-boundingClientRect').innerHTML = JSON.stringify(entry.boundingClientRect);
        document.querySelector('#el-intersectionRatio').innerHTML = JSON.stringify(entry.intersectionRatio);
        document.querySelector('#el-intersectionRect').innerHTML = JSON.stringify(entry.intersectionRect);
        document.querySelector('#el-isIntersecting').innerHTML = JSON.stringify(entry.isIntersecting);
        document.querySelector('#el-rootBounds').innerHTML = JSON.stringify(entry.rootBounds);
        document.querySelector('#el-time').innerHTML = JSON.stringify(entry.time);
        //document.querySelector("el-target").innerHTML = entry.target;
      },
      {
        threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );
    observer.observe(document.querySelector('#el-time'));
    let x = { name: 'long', age: 32 };
    let y = new Proxy(x, {
      get(target, prop, rec) {
        console.log('target', target, 'prop', prop, 'rec', rec);
        return 'longguosong';
      },
      set(target, prop, value, rec): boolean {
        console.log('target', target, 'prop', prop, 'value', value, 'rec', rec);
        target[prop] = value;
        return true;
      },
    });
    console.log(1111111, y.name, x.name);
    y.name = 'song';
    console.log(22222, y.name, x.name);
    let uerId = [1, 2, 3];
    let p = [
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          console.log('a', 1);
        }, 1000);
        resolve();
      }),
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          console.log('a', 2);
        }, 2000);
        resolve();
      }),
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          console.log('a', 3);
        }, 3000);
        resolve();
      }),
    ];
    p.reduce(async (previousPromise, nextId) => {
      await previousPromise;
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   console.log(2, nextId);
        // }, 2000);
        // console.log(1, nextId);
        console.log(nextId);
        console.log(document.referrer, 2232);
        resolve();
      });
    }, Promise.resolve());
  }

  // 图片点击
  imageClick() {
    this.modalService.modalState.emit(' in');
  }
  state = {
    modal1: false,
  };
  onClose(key: string | number) {
    this.state[key] = false;
  }
  showModal(key: string) {
    this.state[key] = true;
  }
  test(s) {
    console.log(s);
  }
}
