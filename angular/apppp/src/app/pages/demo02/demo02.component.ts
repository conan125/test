import { HttpClient } from '@angular/common/http';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { from, concatMap, switchMap, map, of } from 'rxjs';
import { reduce, zip, zipAll } from 'rxjs/operators';

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
    let source = from(userInfo).pipe(
      concatMap((group: any) => {
        return from(group['users']).pipe(
          map((user: any) => {
            user['parent'] = group.id;
            return user;
          })
        );
      }),
      reduce((i, j) => i.concat(j), [])
    );
    from([1, 2, 3, 4])
      .pipe(
        switchMap((x) => of({ age: x + 4 })),
        map((item: any) => ((item['name'] = `HELLO${item.age}`), item)),
        reduce((i, j) => i.concat(j), [])
      )
      .subscribe(console.log);

    source.subscribe(console.log);
    this.messageService.a.next('assdfsdfa');
    setTimeout(() => {
      this.messageService.a.next(789);
    }, 3000);
    // this.messageService.astate.subscribe(console.log);
    // this.messageService.a.subscribe(console.warn);
    setTimeout(() => {
      this.messageService.goto();
    }, 5000);
    this.messageService.message.onmessage = (e) => {
      // console.log('demo2event', e);
    };
    this.http
      .get('assets/work/json/a.json')
      .subscribe((x) => console.log(222, x));
  }
}
