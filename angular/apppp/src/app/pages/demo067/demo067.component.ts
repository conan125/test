import { Component, OnInit } from '@angular/core';
import { Observable, Subject, take, mergeMap } from 'rxjs';
import { merge } from 'rxjs/operators';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-demo067',
  templateUrl: './demo067.component.html',
  styleUrls: ['./demo067.component.css'],
})
export class Demo067Component implements OnInit {
  jokes$!: Observable<Array<Joke>>;
  update$ = new Subject<void>();
  constructor(private jokeService: JokeService) {}
  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }
  ngOnInit() {
    this.jokes$ = this.getDataOnce();
    const updates$ = this.update$.pipe(mergeMap(() => this.getDataOnce()));
    const initialJokes$ = this.getDataOnce();

    // this.jokes$ = merge(initialJokes$, updates$);
  }
}
