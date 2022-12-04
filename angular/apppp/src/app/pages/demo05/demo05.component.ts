import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-demo05',
  templateUrl: './demo05.component.html',
  styleUrls: ['./demo05.component.css'],
})
export class Demo05Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  save(data: any, dialog: DialogComponent) {
    timer(1000).subscribe(() => {
      dialog.close();
    });
  }
}
