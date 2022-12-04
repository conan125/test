import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, shareReplay, map, takeUntil } from 'rxjs/operators';
import { Observable, Subject, timer } from 'rxjs';

export interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}
get<Joke[]>().s;

export interface JokeResponse {
  type: string;
  value: Array<Joke>;
}

const API_ENDPOINT = 'assets/api/data.json';
const REFRESH_INTERVAL = 10000;
const CACHE_SIZE = 1;

@Injectable()
export class JokeService {
  private cache$!: Observable<Array<Joke>> | null;
  private reload$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  // This method is responsible for fetching the data.
  // The first one who calls this function will initiate
  // the process of fetching data.
  get jokes() {
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      /* For each timer tick make an http request to fetch new data
         We use shareReplay(X) to multicast the cache so that all
         subscribers share one underlying source and do not re-create
         the source over and over again. We use takeUntil to complete
         this stream when the user forces an update.*/
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestJokes()),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  // Public facing API to force the cache to reload the data
  forceReload() {
    this.reload$.next();
    this.cache$ = null;
  }

  // Helper method to actually fetch the jokes
  private requestJokes() {
    return this.http
      .get<JokeResponse>(API_ENDPOINT)
      .pipe(map((response) => response.value));
  }
}
