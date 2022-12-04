import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';
import { shareReplay, map, switchMap } from 'rxjs/operators';
const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 10;
@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}
  private cache$!: Observable<Array<Joke>>;

  get jokes() {
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each tick make an http request to fetch new data
      this.cache$ = timer$.pipe(
        switchMap((_) => this.requestJokes()),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  private requestJokes() {
    return this.http
      .get<JokeResponse>(API_ENDPOINT)
      .pipe(map((response: { value: any }) => response.value));
  }
}
