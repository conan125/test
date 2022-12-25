const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
const fs = require("fs");
const path = require("path");

function compile(code) {
  // 1.parse
  const ast = parser.parse(code);
  fs.writeFileSync("ast/ast.json", JSON.stringify(ast));
  // 2,traverse
  const visitor = {
    CallExpression(path) {
      const { callee } = path.node;
      const isConsoleLog =
        types.isMemberExpression(callee) &&
        callee.object.name === "console" &&
        callee.property.name === "log";
      if (isConsoleLog) {
        const funcPath = path.findParent((p) => {
          return p.isFunctionDeclaration();
        });
        const funcName = funcPath.node.id.name;
        fs.writeFileSync(
          "./ast/funcPath.json",
          JSON.stringify(funcPath.node),
          (err) => {
            if (err) throw err;
            console.log("写入成功");
          }
        );
        path.node.arguments.unshift(types.stringLiteral(funcName));
      }
    },
  };
  traverse.default(ast, visitor);

  // 3. generator
  return generator.default(ast, {}, code);
}

const code = fs.readFileSync("./input.txt", "utf-8");
console.log(code);
console.log(compile(code).code);
// fs.writeFileSync("ast/ast2.json", JSON.stringify(ast));

fs.writeFileSync("ast/compile.json", JSON.stringify(compile(code)));
