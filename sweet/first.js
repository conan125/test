syntax new = function (ctx) {
  let ident = ctx.next().value;
  let params = ctx.next().value;
 return #`${ident}.create ((${params}))`;
};

new Droid('BB-8', 'orange');
// syntax let = function (ctx) {
//   let ident = ctx.next().value;
//   ctx.next(); // eat `=`
//   let init = ctx.expand('expr').value;
//   return #`
//     (function (${ident}) {
//       ${ctx} // <2>
//     }(${init}))
//   `
// };

// let bb8 = new Droid('BB-8', 'orange');
// operator >>= left 1 = (left, right) => {
//   return #`${left}.then(${right})`;
// };

// fetch('/foo.json') >>= resp => { return resp.json() }
//                    >>= json => { return processJson(json) }