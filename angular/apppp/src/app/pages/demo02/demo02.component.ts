import { HttpClient } from '@angular/common/http';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { from, concatMap, switchMap, map, of } from 'rxjs';
import { reduce, toArray, zip, zipAll } from 'rxjs/operators';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css'],
})
export class Demo02Component implements OnInit {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
  data = this.messageService.astate;
  ngOnInit(): void {
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
    const map = new Map([[1, 'hi']]);
    map.set(2, 'Bye');
    map.set(3, 'rxjs');
    const mapSource$ = from(map);
    const subscribe = mapSource$
      .pipe(toArray())
      .subscribe((val) => console.log(val));
  }
}
