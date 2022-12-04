import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject, timer } from 'rxjs';
import {
  take,
  switchMap,
  mergeMap,
  skip,
  mapTo,
  merge,
  mergeAll,
} from 'rxjs/operators';
import { Joke, JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeListComponent implements OnInit {
  jokes$!: Observable<Array<Joke>>;
  showNotification$!: Observable<boolean>;
  update$ = new Subject<void>();
  forceReload$ = new Subject<void>();

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    const a = document.querySelector('meed') as HTMLInputElement;

    console.log(a.checked);

    const initialJokes$ = this.getDataOnce();

    const updates$ = of(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce())
    );

    this.jokes$ = of(initialJokes$, updates$).pipe(mergeAll());

    const reload$ = this.forceReload$.pipe(
      switchMap(() => this.getNotifications())
    );
    const initialNotifications$ = this.getNotifications();
    const show$ = of(initialNotifications$, reload$).pipe(
      mergeAll(),
      mapTo(true)
    );
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = of(show$, hide$).pipe(mergeAll());
    // this.showNotification$ = merge(show$, hide$);
  }

  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }

  getNotifications() {
    return this.jokeService.jokes.pipe(skip(1));
  }

  forceReload() {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }
}
