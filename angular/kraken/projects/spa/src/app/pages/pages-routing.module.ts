import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'joke', pathMatch: 'full' },
  { path: 'joke', component: JokeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
