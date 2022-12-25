import { CompilerService } from './../compiler.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.css'],
})
export class Demo03Component implements OnInit {
  constructor(private compilerService: CompilerService) {}

  ngOnInit(): void {
    ajax('assets/json/ast.json').subscribe((ast) => {
      let result = this.compilerService.codeGenerator(ast.response);
      console.log(result);
    });
  }
}
