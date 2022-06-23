var Component = (() => {
  var m = Object.create;
  var s = Object.defineProperty;
  var d = Object.getOwnPropertyDescriptor;
  var u = Object.getOwnPropertyNames;
  var x = Object.getPrototypeOf,
    f = Object.prototype.hasOwnProperty;
  var g = (t, e) => () => e || t((e = { exports: {} }).exports, e), e.exports,
    h = (t, e) => {
      for (var n in e) s(t, n, { get: e[n], enumerable: !0 });
    },
    a = (t, e, n, i) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let r of u(e))
          !f.call(t, r) && r !== n && s(t, r, { get: () => e[r], enumerable: !(i = d(e, r)) || i.enumerable });
      return t;
    };
  var j = (t, e, n) => (
      (n = t != null ? m(x(t)) : {}), a(e || !t || !t.__esModule ? s(n, 'default', { value: t, enumerable: !0 }) : n, t)
    ),
    k = t => a(s({}, '__esModule', { value: !0 }), t);
  var p = g((L, c) => {
    c.exports = _jsx_runtime;
  });
  var C = {};
  h(C, { default: () => y, frontmatter: () => _ });
  var o = j(p());
  var {
    Paragraph: M,
    TextLink: T,
    Blockquote: X,
    Ul: I,
    Ol: O,
    Li: P,
    I: S,
    Em: l,
    PostImage: w,
    Strike: D,
    InlineCode: E,
    H1: q,
    H2: z,
    H3: B,
    CodeSnippet: R,
    SandPack: U,
    HorizontalRule: v,
  } = reactMdxComp;
  var _ = {
    id: 0x2a276c3a408f2400,
    title: 'My first blog',
    description: 'This is my first blog',
    date: '22/06/2022',
    author: [{ name: 'Le Xuan Tien' }, { url: 'https://facebook.com/tienlx97' }, { id: 6969 }],
    categories: ['react'],
    meta: { keywords: ['react', 'typescript'] },
  };
  function b(t = {}) {
    let { wrapper: e } = t.components || {};
    return e ? (0, o.jsx)(e, Object.assign({}, t, { children: (0, o.jsx)(n, {}) })) : n();
    function n() {
      let i = Object.assign({ p: 'p' }, t.components);
      return (0, o.jsxs)(i.p, { children: ['Hello ', (0, o.jsx)(l, { children: 'Le Xuan Tien' })] });
    }
  }
  var y = b;
  return k(C);
})();
return Component;
