import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  isRoot!: Observable<boolean>;
  constructor(private router: Router) {}
  ngOnInit() {
    this.isRoot = this.router.events.pipe(
      filter((x: any) => x instanceof NavigationEnd),
      map((x: RouterEvent) => x.url != '/')
    );
  }
}
