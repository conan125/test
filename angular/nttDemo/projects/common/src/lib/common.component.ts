import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-common',
  template: `
    <p>
      common works!
    </p>
  `,
  styles: [
  ]
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
