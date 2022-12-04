import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { VrComponent } from './vr/vr.component';
import { DevUIModule } from 'ng-devui';

@NgModule({
  declarations: [PagesComponent, VrComponent],
  imports: [CommonModule, DevUIModule, PagesRoutingModule],
})
export class PagesModule {}
