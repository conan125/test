import { Directive, ElementRef, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NgControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[appMyForm]',
})
export class MyFormDirective {
  constructor(private ngControl: NgControl, private el: ElementRef) {}
  static EMAIL_REG = new RegExp(
    '\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+.)+[A-Za-z]{2,14}'
  );
  //  email(emailForm: FormControl): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //    if (emailForm.value !== control.value ) {
  //     return {
  //      errMsg: '请输入相同邮箱地址'
  //     };
  //    }
  //    return {};
  //   };
  //  }
  myValidator(s: number): ValidatorFn {
    return (control: AbstractControl) => {
      let flag = true;
      if (control.value.length > s) {
        flag = false;
      }
      return !flag
        ? { myValidator: { length: `length>${s}=${control.value.length > s}` } }
        : null;
    };
  }
  @HostListener('input', ['$event'])
  onblur(event: Event) {
    event.preventDefault();
    console.log(this.ngControl.control?.hasValidator(Validators.required));

    console.log('change:', this.ngControl.control?.value);
    if (this.ngControl.control?.value.length > 5) {
      this.ngControl.control?.addValidators(this.myValidator(5));
      console.warn('length>5');
    }
    if (this.ngControl.control?.value.length > 8) {
      // this.ngControl.control?.removeValidators(this.myValidator(5));
      this.ngControl.control?.setValue(123456);

      this.ngControl.control?.updateValueAndValidity();

      console.warn('length>8');
    }
  }
}
