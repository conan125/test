import { FaceApiComponent } from './face-api/face-api.component';
import { PagesComponent } from './pages.component';
import { VrComponent } from './vr/vr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'faceapi',
        pathMatch: 'full',
      },
      {
        path: 'vr',
        component: VrComponent,
      },
      {
        path: 'faceapi',
        loadChildren: () =>
          import('./face-api/face-api.module').then((m) => m.FaceApiModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
