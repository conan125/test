import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { from, groupBy, mergeAll, mergeMap, reduce, toArray } from 'rxjs';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.css'],
})
export class Demo07Component implements OnInit {
  public formgroup!: FormGroup;
  public value: any[] = [];
  constructor(private fb: FormBuilder) {}
  getInnerArray() {
    return this.fb.group({
      a: [],
      b: [],
      c: [],
    });
  }
  get arr(): FormArray {
    return this.formgroup.get('arr') as FormArray;
  }
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      arr: this.fb.array([]),
    });

    const a = [
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'world', c: 3 },
      { a: 1, b: 'world', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'hello', c: 3 },
      { a: 1, b: 'aaa', c: 3 },
      { a: 1, b: 'bbb', c: 3 },
      { a: 1, b: 'ccc', c: 3 },
    ];
    for (let i = 0, ii = a.length; i < ii; i++) {
      this.arr.push(this.getInnerArray());
      this.arr.at(i).setValue(a[i]);
    }
    let b = a
      .map((i) => i.b)
      .reduce((p: any, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
      }, {});
    const c = Object.keys(b).map((item) => a.filter((atem) => atem.b === item));
    console.log(b, c);
    from(a)
      .pipe(
        groupBy((person) => person.b),
        // mergeAll(),
        toArray()
      )
      .subscribe(console.log);
    from(a)
      .pipe(
        groupBy((person) => person.b),
        mergeMap((group) =>
          group.pipe(
            reduce(
              (acc: any, cur: any) => {
                acc.values.push(cur);
                return acc;
              },
              { key: group.key, values: [] }
            )
          )
        ),
        toArray()
      )
      .subscribe(console.log);
  }

  handle(item: any) {
    this.value.push(item);
    console.log(this.formgroup.value);
  }
}
