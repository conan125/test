import { FaceApiComponent } from './face-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceviewComponent } from '../faceview/faceview.component';
import { SocketComponent } from './socket/socket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'faceapi',
    pathMatch: 'full',
  },
  {
    path: 'faceapi',
    component: FaceApiComponent,
  },
  {
    path: 'faceview',
    component: FaceviewComponent,
  },
  {
    path: 'socket',
    component: SocketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceApiRoutingModule {}
