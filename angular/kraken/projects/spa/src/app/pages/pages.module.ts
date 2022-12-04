import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PagesComponent, JokeListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
