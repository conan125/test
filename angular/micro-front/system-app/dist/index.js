System.register(["react", "react-dom"], function (e, t) {
  var r = {},
    o = {};
  return {
    setters: [
      function () {},
      function (e) {
        o.default = e.default;
      },
    ],
    execute: function () {
      e(
        (() => {
          "use strict";
          var e = {
              954: (e) => {
                e.exports = r;
              },
              493: (e) => {
                e.exports = o;
              },
            },
            t = {};
          function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var u = (t[r] = { exports: {} });
            return e[r](u, u.exports, n), u.exports;
          }
          n.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          };
          var u = {};
          return (
            n.r(u),
            n(954),
            n(493).default.render(
              "<h1>hello react</h1>",
              document.getElementById("root")
            ),
            u
          );
        })()
      );
    },
  };
});
