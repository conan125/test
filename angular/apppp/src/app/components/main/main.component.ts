import { Demo05Component } from './../../pages/demo05/demo05.component';
import {
  Component,
  ContentChild,
  ContentChildren,
  OnInit,
} from '@angular/core';
import { interval, pipe, take } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ContentChild(Demo05Component) child: any;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    console.log('this.child', this.child);
  }
}
