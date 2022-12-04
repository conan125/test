import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModal]',
})
export class ModalDirective {
  @Input() appModal!: any;
  constructor(private viewContainerRef: ViewContainerRef) {
    setTimeout(() => {
      this.viewContainerRef.remove();
      this.viewContainerRef.createEmbeddedView(this.appModal, {
        $implict: 'modal',
      });
    });
  }
}
