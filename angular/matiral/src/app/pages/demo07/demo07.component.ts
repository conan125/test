import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.css'],
})
export class Demo07Component implements OnInit {
  constructor() {}
  expression = 0;
  hero = { id: 1, name: 'long guosong' };
  ngOnInit(): void {}
  save() {
    return timer(0, 1000);
  }
  cancel() {}
}
