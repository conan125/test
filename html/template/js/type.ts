const a = {
  name: "",
  age: 2,
  b: {
    c: {
      d: { a: "" },
    },
  },
};
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
function create(Constructor: typeof Point, a: number, b: number) {
  return new Constructor(a, b);
}
class Animal {
  x: string;
  y: string;
  z: string;
  constructor(a: string, b: string, c: string) {
    this.x = a;
    this.y = b;
    this.z = c;
  }
}
type Bb = typeof a;
type cc = typeof Animal;
type DD = typeof create;
create(Point, 2, 2);
type E = ReturnType<DD>;
type F = Parameters<DD>;
function fn(a = null, b = "", c = {}) {
  return new Function('console.log("r")');
}
type G = typeof fn;
