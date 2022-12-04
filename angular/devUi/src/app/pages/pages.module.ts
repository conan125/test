import { NgModule } from '@angular/core';
import { DialogService, BackTopModule, ModalModule } from 'ng-devui';
import { SharedModule } from '../@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DaLayoutModule } from '../@shared/layouts/da-layout';
import { TooltipModule } from 'ng-devui/tooltip';
@NgModule({
  imports: [PagesRoutingModule, SharedModule, TooltipModule, ModalModule, BackTopModule, DaLayoutModule],
  declarations: [PagesComponent],
  providers: [DialogService],
})
export class PagesModule {}
