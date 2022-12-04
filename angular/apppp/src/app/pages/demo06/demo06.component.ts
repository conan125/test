import { groupBy, startWith, windowCount } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  from,
  map,
  of,
  pluck,
  mergeMap,
  reduce,
  tap,
  mergeAll,
  forkJoin,
  switchMap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.css'],
})
export class Demo06Component implements OnInit {
  formgroup!: FormGroup;

  constructor(private fb: FormBuilder) {}
  getInnerArray(): FormArray {
    return this.fb.array([
      this.fb.control(false),
      this.fb.control(false),
      this.fb.control(false),
    ]);
  }
  getOuterArray(): FormArray {
    return this.fb.array([
      this.getInnerArray(),
      this.getInnerArray(),
      this.getInnerArray(),
    ]);
  }
  get zhs(): FormArray {
    return this.formgroup.get('zhs') as FormArray;
  }
  get value(): boolean {
    return this.zhs.value?.every((item: boolean[]) => item.every(Boolean));
  }
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      zhs: this.getOuterArray(),
    });
  }
  all(array: FormArray): boolean {
    return !array.value.some((item: boolean) => !item);
  }
  getZhs_index(i: number): FormArray {
    return this.zhs.at(i) as FormArray;
  }
  seti(e: Event, index: number) {
    const value = (e.target as HTMLInputElement).checked;
    this.zhs.at(index).patchValue([value, value, value]);
  }
  changeAll(e: Event): void {
    const val = (e.target as HTMLInputElement).checked;
    for (let i = 0, len = this.zhs.length; i < len; i++) {
      this.zhs.at(i).patchValue([val, val, val]);
    }
  }
}
