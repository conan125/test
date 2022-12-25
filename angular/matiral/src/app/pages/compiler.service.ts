import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompilerService {
  constructor() {}
  codeGenerator = (node: any): any => {
    switch (node.type) {
      case 'Program':
        return node.body?.map(this.codeGenerator)?.join('\n');
      case 'ExpressionStatement':
        return this.codeGenerator(node.expression) + ';';
      case 'CallExpression':
        return (
          this.codeGenerator(node.callee) +
          '(' +
          node.arguments?.map(this.codeGenerator).join(', ') +
          ')'
        );
      case 'Identifier':
        return node.name;
      case 'NumberLiteral':
        return node.value;
      case 'StringLiteral':
        return '"' + node.value + '"';
      default:
        throw new TypeError(node.type);
    }
  };
  readfile = (path: Blob) => {
    return new Observable((observer: Observer<any>) => {
      const filereader = new FileReader();
      filereader.readAsBinaryString(path);
      filereader.onloadend = () => {
        observer.next(filereader.result);
      };
      filereader.onerror = (err) => {
        observer.error(err);
      };
    });
  };
}
