import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDialogContent]',
})
export class DialogContentDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

@Directive({
  selector: '[appDialogFooter]',
})
export class DialogFooterDirective {
  constructor(public tpl: TemplateRef<any>) {}
}

@Directive({
  selector: '[appDialogHeader]',
})
export class DialogHeaderDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
