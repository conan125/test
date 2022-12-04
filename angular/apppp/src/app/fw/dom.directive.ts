import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Demo01Component } from '../pages/demo01/demo01.component';
import { Demo02Component } from '../pages/demo02/demo02.component';
import { Demo03Component } from '../pages/demo03/demo03.component';

@Directive({
  selector: '[appDom]',
})
export class DomDirective implements OnInit {
  constructor(
    private applicationRef: ApplicationRef,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit() {
    console.log(8);

    // const a = this.viewContainerRef.createComponent(Demo03Component);
    // const b = a.injector.get(Router);
    let node = document.createElement('div');
    node.id = 'me';
    this.elementRef.nativeElement.appendChild(node);
    this.elementRef.nativeElement.after(node);
    let factory =
      this.componentFactoryResolver.resolveComponentFactory(Demo02Component);
    const ref = factory.create(this.injector, [], node);

    setTimeout(() => {
      // this.applicationRef.attachView(ref.hostView);
      // this.viewContainerRef.insert(ref.hostView);
      // this.viewContainerRef.clear();
      // this.viewContainerRef.createComponent(Demo03Component);
      // console.log(
      //   this.applicationRef,
      //   this.componentFactoryResolver,
      //   this.viewContainerRef
      // );
    });
  }
  @HostListener('paste', ['$event'])
  onpaste(e: Event) {
    e.preventDefault();
  }
}
