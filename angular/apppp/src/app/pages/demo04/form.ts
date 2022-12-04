import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Demo04Form {
  private _form!: FormGroup;
  private fb!: FormBuilder;
  get form(): FormGroup {
    return this._form;
  }
  constructor() {
    this.fb = new FormBuilder();
    this._form = this.fb.group({
      name: [false],
      age: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(4)]),
      ],
      books: this.fb.array([]),
    });
    for (let i = 0; i < 4; i++)
      this.books.push(
        this.fb.group({
          val: this.fb.control([true]),
        })
      );
    this.form.get('name')?.valueChanges.subscribe((x) => {
      if (x) {
        this.books.patchValue([
          {
            val: true,
          },
          {
            val: true,
          },
          {
            val: true,
          },
          {
            val: true,
          },
        ]);
      } else {
        for (let i = 0; i < 4; i++) {
          this.books.at(i).patchValue({ val: false });
        }
      }
    });
    this.form.valueChanges.subscribe((x) => {});
  }

  get name(): boolean {
    return this._form.get('name')?.value;
  }
  get age(): number {
    return this._form.get('age')?.value;
  }
  get books(): FormArray {
    return this._form.get('books') as FormArray;
  }
}
