import { DbService } from './../../db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css'],
})
export class Demo02Component implements OnInit {
  constructor(private dbService: DbService) {}
  list = new Array(10).fill('').map((_, i) => i + 1);
  ngOnInit(): void {
    const ast = {
      type: 'Program',
      body: [],
    };
    this.dbService.open().subscribe((data) => {
      console.log(2, data);
    });
    this.dbService.test().subscribe((data) => {
      console.log(13, data);
    });
    const inter = new IntersectionObserver((o) => {
      if (o[0].intersectionRatio > 0) {
        this.list = this.list.concat([1, 2, 3, 4, 5, 6, 7]);
        console.log(this.list);
      }
    });
    inter.observe(document.querySelector('#loading')!);
  }
}
