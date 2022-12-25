import { test, expect } from "vitest";
import { tokenizer } from "./tokenizer";
test("tokenizer", () => {
  const code: string = `(add 2(subtract 4 2))`;
  const tokens = [
    { type: "paren", value: "(" },
    { type: "name", value: "add" },
    { type: "number", value: "2" },
    { type: "paren", value: "(" },
    { type: "name", value: "subtract" },
    { type: "number", value: "4" },
    { type: "number", value: "2" },
    { type: "paren", value: ")" },
    { type: "paren", value: ")" },
  ];
  expect(tokenizer(code)).toEqual(tokens);
});
test("paren", () => {
  const code = `(`;
  const tokens = [{ type: "paren", value: "(" }];
  expect(tokenizer(code)).toEqual(tokens);
});
