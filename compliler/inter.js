const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
const fs = require("fs");
const path = require("path");
const code = `
function getData2() {
  console.log('data')
}
`;
const ast = require("./ast/ast.json");
const code2 = generator.default(
  ast,
  {
    comments: true,
    minified: false,
    numbers: "binary",
    es6: true,
    indentLevel: 4,
    compact: true,
    retainLines: true,
    auxiliaryCommentBefore: "11111111",
    sourceRoot: "string",
    auxiliaryCommentAfter: "22222222",
    shouldPrintComment: () => {
      return true;
    },
    retainLines: true,
    retainFunctionParens: true,
    filename: "helloworld",
    indentLevel: 10,
  },
  code
);
fs.writeFileSync("ast/interresult.js", code2.code);

console.log(code2);
