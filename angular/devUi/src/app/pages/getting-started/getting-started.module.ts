import { ToastrService } from 'ngx-toastr';
import { FormModule } from 'ng-devui';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { SampleComponent } from '../sample/sample.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ModalComponent } from '../sample/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GettingStartedComponent, SampleComponent, ModalComponent, MyModalComponent],
  imports: [SharedModule, GettingStartedRoutingModule, FormModule, ReactiveFormsModule],
  providers: [ToastrService],
})
export class GettingStartedModule {}
