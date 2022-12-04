import { Component, OnInit } from '@angular/core';
import { interval, take, tap } from 'rxjs';
import { Demo04Form } from './form';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.css'],
})
export class Demo04Component implements OnInit {
  public demo04Form!: Demo04Form;
  constructor() {
    this.demo04Form = new Demo04Form();
  }

  ngOnInit(): void {}
  mySubmit(x: any): void {
    console.log(x, this.demo04Form.form);
  }
}
