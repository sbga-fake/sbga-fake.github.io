/*! ©SEGA */
"use strict";
!(function (o) {
  var r = {};
  function i(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { exports: {}, id: t, loaded: !1 });
    return o[t].call(e.exports, e, e.exports, i), (e.loaded = !0), e.exports;
  }
  (i.m = o), (i.c = r), (i.p = ""), i(0);
})([
  function (t, e, o) {
    (t.exports = { title: "404 Not Found" }),
      Zero.init({ template: o(1), data: { hasnotSideber: !0 }, methods: {} });
  },
  function (t, e) {
    t.exports =
      "<maiTitle text=404エラー class=title404 /> <div class=error> 申し訳ありません！404というエラーです。 お探しのページは別の場所に移動、もしくは削除された可能性があります。 URLを直接入力された場合は、誤りがないかお確かめください。 </div> ";
  },
]);
