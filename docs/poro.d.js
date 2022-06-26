var Component = (() => {
  var Zr = Object.create;
  var qe = Object.defineProperty;
  var Jr = Object.getOwnPropertyDescriptor;
  var Vr = Object.getOwnPropertyNames;
  var Qr = Object.getPrototypeOf,
    es = Object.prototype.hasOwnProperty;
  var Ue = (e, t) => () => t || e((t = { exports: {} }).exports, t), t.exports,
    ts = (e, t) => {
      for (var n in t) qe(e, n, { get: t[n], enumerable: !0 });
    },
    un = (e, t, n, o) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let r of Vr(t))
          !es.call(e, r) && r !== n && qe(e, r, { get: () => t[r], enumerable: !(o = Jr(t, r)) || o.enumerable });
      return e;
    };
  var dn = (e, t, n) => (
      (n = e != null ? Zr(Qr(e)) : {}),
      un(t || !e || !e.__esModule ? qe(n, 'default', { value: e, enumerable: !0 }) : n, e)
    ),
    ns = e => un(qe({}, '__esModule', { value: !0 }), e);
  var fn = Ue((Zl, pn) => {
    pn.exports = _jsx_runtime;
  });
  var hn = Ue((Jl, gn) => {
    gn.exports = React;
  });
  var mn = Ue((Vl, yn) => {
    yn.exports = ReactDOM;
  });
  var Bo = Ue(W => {
    'use strict';
    Object.defineProperty(W, '__esModule', { value: !0 });
    var me = hn(),
      os = mn();
    function rs(e) {
      return e && typeof e == 'object' && 'default' in e ? e : { default: e };
    }
    var l = rs(me);
    function T(e, t) {
      var n = {};
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
          t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
      return n;
    }
    var ss = e => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e),
      cs = (e, t) => e.match(new RegExp(`.{${t}}`, 'g')),
      ls = e => parseInt(e.repeat(2 / e.length), 16);
    function is(e, t) {
      return typeof e < 'u' ? e / 255 : typeof t != 'number' || t < 0 || t > 1 ? 1 : t;
    }
    function as(e) {
      if (!e) return;
      if (!ss(e)) throw new Error('Invalid color string, must be a valid hex color');
      let t = Math.floor((e.length - 1) / 3),
        n = cs(e.slice(1), t),
        [o, r, s, c] = n.map(ls);
      return { r: o, g: r, b: s, a: is(c, 1) };
    }
    function us(e) {
      if (!e) return;
      let { r: t, g: n, b: o, a: r } = e,
        s = Math.round(r * 255);
      return `#${t.toString(16).padStart(2, '0')}${n.toString(16).padStart(2, '0')}${o.toString(16).padStart(2, '0')}${s
        .toString(16)
        .padStart(2, '0')}`;
    }
    function Se(e, t) {
      if (!e) return e;
      let { r: n, g: o, b: r, a: s } = as(e);
      return us({ r: n, g: o, b: r, a: s * t });
    }
    function _(e, t) {
      return { prev: t(e.prev, 'prev'), next: t(e.next, 'next') };
    }
    function qn(e, t) {
      return { prev: e?.prev === void 0 ? t : e.prev, next: e?.next === void 0 ? t : e.next };
    }
    function mt(e, t, n) {
      return _(qn(e, t), n);
    }
    function ds(e) {
      return e.lines.map(t => t.tokens.map(n => n.content).join('')).join(``);
    }
    function ps(e, t) {
      return Ct(e ? Un(e).map(Xn) : [...t.keys()].map(n => ({ [n + 1]: !0 })));
    }
    function Un(e) {
      return e.split(/,(?![^\[]*\])/g);
    }
    function Ct(e) {
      return e.reduce((t, n) => Object.assign(t, n), {});
    }
    function fs(e) {
      return !!e.match(/(\d+)\[(.+)\]/);
    }
    function Xn(e) {
      let t = e.match(/(\d+)\[(.+)\]/);
      if (t) {
        let [, n, o] = t,
          r = o.split(',').map(Yn);
        return { [Number(n)]: r };
      } else return Ct(Ft(e).map(n => ({ [n]: !0 })));
    }
    function Yn(e) {
      let [t, n] = e.split(':');
      if (!Qe(t)) throw new be(t);
      let o = Number(t);
      if (o < 1) throw new et();
      if (n) {
        if (!Qe(n)) throw new be(n);
        return { start: o, end: +n };
      } else return { start: o, end: o };
    }
    function gs(e, t) {
      if (e) {
        let n = hs(e);
        return Object.keys(n).map(r => parseInt(r, 10));
      } else return [...t.keys()];
    }
    function hs(e) {
      if (!e) throw new Error('Focus cannot be empty');
      try {
        let t = e.split(/,(?![^\[]*\])/g).map(ys);
        return ms(t.flat());
      } catch (t) {
        throw t;
      }
    }
    function ys(e) {
      let t = e.match(/(\d+)\[(.+)\]/);
      if (t) {
        let [, n, o] = t,
          r = o.split(',').map(Ft),
          s = Number(n) - 1,
          c = r.flat().map(a => a - 1);
        return [[s, c]];
      } else return Ft(e).map(n => [n - 1, !0]);
    }
    function Ft(e) {
      let [t, n] = e.split(':');
      if (!Qe(t)) throw new be(t);
      let o = Number(t);
      if (o < 1) throw new et();
      if (n) {
        if (!Qe(n)) throw new be(n);
        let r = [];
        for (let s = o; s <= +n; s++) r.push(s);
        return r;
      } else return [o];
    }
    function Qe(e) {
      e = e.toString();
      var t = Math.abs(e),
        n = parseInt(e, 10);
      return !isNaN(t) && n === t && t.toString() === e;
    }
    var et = class extends Error {
        constructor() {
          super('Invalid line or column number in focus string'), Object.setPrototypeOf(this, new.target.prototype);
        }
      },
      be = class extends Error {
        constructor(t) {
          super(`Invalid number "${t}" in focus string`),
            (this.number = t),
            Object.setPrototypeOf(this, new.target.prototype);
        }
      };
    function ms(e) {
      let t = {},
        n = -1,
        o = e == null ? 0 : e.length;
      for (; ++n < o; ) {
        var r = e[n];
        t[r[0]] = r[1];
      }
      return t;
    }
    var v;
    (function (e) {
      (e[(e.CodeForeground = 0)] = 'CodeForeground'),
        (e[(e.CodeBackground = 1)] = 'CodeBackground'),
        (e[(e.EditorForeground = 2)] = 'EditorForeground'),
        (e[(e.EditorBackground = 3)] = 'EditorBackground'),
        (e[(e.FocusBorder = 4)] = 'FocusBorder'),
        (e[(e.ActiveTabBackground = 5)] = 'ActiveTabBackground'),
        (e[(e.ActiveTabForeground = 6)] = 'ActiveTabForeground'),
        (e[(e.InactiveTabBackground = 7)] = 'InactiveTabBackground'),
        (e[(e.InactiveTabForeground = 8)] = 'InactiveTabForeground'),
        (e[(e.EditorGroupBorder = 9)] = 'EditorGroupBorder'),
        (e[(e.EditorGroupHeaderBackground = 10)] = 'EditorGroupHeaderBackground'),
        (e[(e.TabBorder = 11)] = 'TabBorder'),
        (e[(e.ActiveTabBottomBorder = 12)] = 'ActiveTabBottomBorder'),
        (e[(e.LineNumberForeground = 13)] = 'LineNumberForeground'),
        (e[(e.InputForeground = 14)] = 'InputForeground'),
        (e[(e.InputBackground = 15)] = 'InputBackground'),
        (e[(e.InputBorder = 16)] = 'InputBorder'),
        (e[(e.SelectionBackground = 17)] = 'SelectionBackground'),
        (e[(e.IconForeground = 18)] = 'IconForeground'),
        (e[(e.ListActiveSelectionBackground = 19)] = 'ListActiveSelectionBackground'),
        (e[(e.ListActiveSelectionForeground = 20)] = 'ListActiveSelectionForeground'),
        (e[(e.ListHoverBackground = 21)] = 'ListHoverBackground'),
        (e[(e.ListHoverForeground = 22)] = 'ListHoverForeground'),
        (e[(e.SideBarBackground = 23)] = 'SideBarBackground'),
        (e[(e.SideBarForeground = 24)] = 'SideBarForeground'),
        (e[(e.SideBarBorder = 25)] = 'SideBarBorder'),
        (e[(e.LineHighlightBackground = 26)] = 'LineHighlightBackground'),
        (e[(e.RangeHighlightBackground = 27)] = 'RangeHighlightBackground'),
        (e[(e.EditorInfoForeground = 28)] = 'EditorInfoForeground');
    })(v || (v = {}));
    var Xe = '#6FC3DF';
    function F(e, t) {
      var n, o;
      let r = e.colors || {};
      switch (t) {
        case v.CodeForeground:
          return ((n = bn(e)) === null || n === void 0 ? void 0 : n.foreground) || F(e, v.EditorForeground);
        case v.CodeBackground:
          return ((o = bn(e)) === null || o === void 0 ? void 0 : o.background) || F(e, v.EditorBackground);
        case v.EditorBackground:
          return r['editor.background'] || N(e, { light: '#fffffe', dark: '#1E1E1E', hc: '#000000' });
        case v.EditorForeground:
          return r['editor.foreground'] || N(e, { light: '#333333', dark: '#BBBBBB', hc: '#fffffe' });
        case v.FocusBorder:
          return r.focusBorder || N(e, { light: '#0090F1', dark: '#007FD4', hc: Xe });
        case v.ActiveTabBackground:
          return r['tab.activeBackground'] || F(e, v.EditorBackground);
        case v.ActiveTabForeground:
          return r['tab.activeForeground'] || N(e, { dark: '#ffffff', light: '#333333', hc: '#ffffff' });
        case v.InactiveTabBackground:
          return r['tab.inactiveBackground'] || N(e, { dark: '#2D2D2D', light: '#ECECEC', hc: void 0 });
        case v.InactiveTabForeground:
          return (
            r['tab.inactiveForeground'] ||
            N(e, {
              dark: Se(F(e, v.ActiveTabForeground), 0.5),
              light: Se(F(e, v.ActiveTabForeground), 0.7),
              hc: '#ffffff',
            })
          );
        case v.TabBorder:
          return r['tab.border'] || N(e, { dark: '#252526', light: '#F3F3F3', hc: Xe });
        case v.ActiveTabBottomBorder:
          return r['tab.activeBorder'] || F(e, v.ActiveTabBackground);
        case v.EditorGroupBorder:
          return r['editorGroup.border'] || N(e, { dark: '#444444', light: '#E7E7E7', hc: Xe });
        case v.EditorGroupHeaderBackground:
          return r['editorGroupHeader.tabsBackground'] || N(e, { dark: '#252526', light: '#F3F3F3', hc: void 0 });
        case v.LineNumberForeground:
          return r['editorLineNumber.foreground'] || N(e, { dark: '#858585', light: '#237893', hc: '#fffffe' });
        case v.InputBackground:
          return r['input.background'] || N(e, { dark: '#3C3C3C', light: '#fffffe', hc: '#000000' });
        case v.InputForeground:
          return r['input.foreground'] || F(e, v.EditorForeground);
        case v.InputBorder:
          return r['input.border'] || N(e, { dark: void 0, light: void 0, hc: Xe });
        case v.SelectionBackground:
          return r['editor.selectionBackground'] || N(e, { light: '#ADD6FF', dark: '#264F78', hc: '#f3f518' });
        case v.IconForeground:
          return r['icon.foreground'] || N(e, { dark: '#C5C5C5', light: '#424242', hc: '#FFFFFF' });
        case v.SideBarBackground:
          return r['sideBar.background'] || N(e, { dark: '#252526', light: '#F3F3F3', hc: '#000000' });
        case v.SideBarForeground:
          return r['sideBar.foreground'] || F(e, v.EditorForeground);
        case v.SideBarBorder:
          return r['sideBar.border'] || F(e, v.SideBarBackground);
        case v.ListActiveSelectionBackground:
          return r['list.activeSelectionBackground'] || N(e, { dark: '#094771', light: '#0060C0', hc: '#000000' });
        case v.ListActiveSelectionForeground:
          return r['list.activeSelectionForeground'] || N(e, { dark: '#fffffe', light: '#fffffe', hc: '#fffffe' });
        case v.ListHoverBackground:
          return r['list.hoverBackground'] || N(e, { dark: '#2A2D2E', light: '#F0F0F0', hc: void 0 });
        case v.ListHoverForeground:
          return r['list.hoverForeground'] || void 0;
        case v.LineHighlightBackground:
          return r['editor.lineHighlightBackground'] || N(e, { dark: void 0, light: void 0, hc: void 0 });
        case v.RangeHighlightBackground:
          return r['editor.rangeHighlightBackground'] || N(e, { dark: '#ffffff0b', light: '#fdff0033', hc: void 0 });
        case v.EditorInfoForeground:
          return r['editor.infoForeground'] || N(e, { dark: '#3794FF', light: '#1a85ff', hc: '#3794FF' });
        default:
          return '#f00';
      }
    }
    function bs(e) {
      let t = Kn(e);
      if (t === 'dark') return 'dark';
      if (t === 'light') return 'light';
    }
    function N(e, t) {
      return t[Kn(e)];
    }
    function Kn(e) {
      var t;
      return e.type
        ? e.type
        : !((t = e.name) === null || t === void 0) && t.toLowerCase().includes('light')
        ? 'light'
        : 'dark';
    }
    function vs(e) {
      return { fg: F(e, v.CodeForeground), bg: F(e, v.CodeBackground) };
    }
    function bn(e) {
      let t = e.settings ? e.settings : e.tokenColors,
        n = t ? t.find(o => !o.name && !o.scope) : void 0;
      return n?.settings;
    }
    var Zn = typeof window < 'u' ? l.default.useLayoutEffect : l.default.useEffect,
      Ye = 200;
    function Ds(e, t, n, o, r) {
      let [s, c] = l.default.useState(null),
        a = ks(),
        u = l.default.useRef(null),
        {
          prevLongestLine: d,
          nextLongestLine: p,
          element: g,
        } = l.default.useMemo(() => {
          let h = vn(e.prev, t.prev),
            b = vn(e.next, t.next),
            D = (e.prev || e.next).trimEnd().split(Jn),
            k = D.length,
            x = l.default.createElement(
              'code',
              { className: 'ch-code-scroll-parent' },
              l.default.createElement('br', null),
              D.map((B, w) =>
                l.default.createElement(
                  'div',
                  { ref: B === h ? u : void 0, key: w },
                  o ? l.default.createElement('span', { className: 'ch-code-line-number' }, '_', k) : void 0,
                  l.default.createElement(
                    'div',
                    { style: { display: 'inline-block' } },
                    l.default.createElement('span', null, B),
                  ),
                ),
              ),
              l.default.createElement('br', null),
            );
          return { prevLongestLine: h, nextLongestLine: b, element: x };
        }, [e]),
        m = [...r, a, d, p, n];
      return (
        Zn(() => {
          var h;
          if (u.current) {
            let b = u.current,
              D = b?.parentElement,
              k = b?.querySelector(':scope > div'),
              x = b?.querySelector(':scope > span'),
              B = x ? Cs(x) : 0,
              w = Dn(k),
              L = w / d.length || 1,
              P = p.length * L,
              M = (h = Cn(k)) !== null && h !== void 0 ? h : 20,
              K = {
                containerWidth: Dn(D.parentElement),
                containerHeight: Cn(D.parentElement),
                lineWidths: [w || P || Ye, P || w || Ye],
                lineWidth: [Math.max(w || P || Ye, L * n), Math.max(P || w || Ye, L * n)],
                lineHeight: M,
                colWidth: L,
                lineNumberWidth: B,
                deps: m,
              };
            c(K);
          }
        }, [m]),
        !s || Fs(s.deps, m) ? { element: g, dimensions: null } : { element: g, dimensions: s }
      );
    }
    var Jn = /\r\n|\r|\n/;
    function vn(e, t) {
      let n = e ? e.split(Jn) : [''],
        o = gs(t, n),
        r = '';
      return (
        n.forEach((s, c) => {
          o.includes(c) && s.length > r.length && (r = s);
        }),
        r
      );
    }
    function Dn(e) {
      let t = getComputedStyle(e);
      return parseFloat(t.width) - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight);
    }
    function Cs(e) {
      let t = getComputedStyle(e);
      return parseFloat(t.width);
    }
    function Cn(e) {
      if (!e) return null;
      let t = getComputedStyle(e);
      return parseFloat(t.height) - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom);
    }
    function Fs(e, t) {
      for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !0;
      return !1;
    }
    function ks() {
      let [e, t] = l.default.useState(void 0);
      return (
        l.default.useEffect(() => {
          function n() {
            t(window.innerWidth);
          }
          return window.addEventListener('resize', n), () => window.removeEventListener('resize', n);
        }, []),
        e
      );
    }
    function se() {}
    se.prototype = {
      diff: function (t, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          r = o.callback;
        typeof o == 'function' && ((r = o), (o = {})), (this.options = o);
        var s = this;
        function c(D) {
          return r
            ? (setTimeout(function () {
                r(void 0, D);
              }, 0),
              !0)
            : D;
        }
        (t = this.castInput(t)),
          (n = this.castInput(n)),
          (t = this.removeEmpty(this.tokenize(t))),
          (n = this.removeEmpty(this.tokenize(n)));
        var a = n.length,
          u = t.length,
          d = 1,
          p = a + u,
          g = [{ newPos: -1, components: [] }],
          m = this.extractCommon(g[0], n, t, 0);
        if (g[0].newPos + 1 >= a && m + 1 >= u) return c([{ value: this.join(n), count: n.length }]);
        function h() {
          for (var D = -1 * d; D <= d; D += 2) {
            var k = void 0,
              x = g[D - 1],
              B = g[D + 1],
              w = (B ? B.newPos : 0) - D;
            x && (g[D - 1] = void 0);
            var L = x && x.newPos + 1 < a,
              P = B && 0 <= w && w < u;
            if (!L && !P) {
              g[D] = void 0;
              continue;
            }
            if (
              (!L || (P && x.newPos < B.newPos)
                ? ((k = xs(B)), s.pushComponent(k.components, void 0, !0))
                : ((k = x), k.newPos++, s.pushComponent(k.components, !0, void 0)),
              (w = s.extractCommon(k, n, t, D)),
              k.newPos + 1 >= a && w + 1 >= u)
            )
              return c(Es(s, k.components, n, t, s.useLongestToken));
            g[D] = k;
          }
          d++;
        }
        if (r)
          (function D() {
            setTimeout(function () {
              if (d > p) return r();
              h() || D();
            }, 0);
          })();
        else
          for (; d <= p; ) {
            var b = h();
            if (b) return b;
          }
      },
      pushComponent: function (t, n, o) {
        var r = t[t.length - 1];
        r && r.added === n && r.removed === o
          ? (t[t.length - 1] = { count: r.count + 1, added: n, removed: o })
          : t.push({ count: 1, added: n, removed: o });
      },
      extractCommon: function (t, n, o, r) {
        for (
          var s = n.length, c = o.length, a = t.newPos, u = a - r, d = 0;
          a + 1 < s && u + 1 < c && this.equals(n[a + 1], o[u + 1]);

        )
          a++, u++, d++;
        return d && t.components.push({ count: d }), (t.newPos = a), u;
      },
      equals: function (t, n) {
        return this.options.comparator
          ? this.options.comparator(t, n)
          : t === n || (this.options.ignoreCase && t.toLowerCase() === n.toLowerCase());
      },
      removeEmpty: function (t) {
        for (var n = [], o = 0; o < t.length; o++) t[o] && n.push(t[o]);
        return n;
      },
      castInput: function (t) {
        return t;
      },
      tokenize: function (t) {
        return t.split('');
      },
      join: function (t) {
        return t.join('');
      },
    };
    function Es(e, t, n, o, r) {
      for (var s = 0, c = t.length, a = 0, u = 0; s < c; s++) {
        var d = t[s];
        if (d.removed) {
          if (((d.value = e.join(o.slice(u, u + d.count))), (u += d.count), s && t[s - 1].added)) {
            var g = t[s - 1];
            (t[s - 1] = t[s]), (t[s] = g);
          }
        } else {
          if (!d.added && r) {
            var p = n.slice(a, a + d.count);
            (p = p.map(function (h, b) {
              var D = o[u + b];
              return D.length > h.length ? D : h;
            })),
              (d.value = e.join(p));
          } else d.value = e.join(n.slice(a, a + d.count));
          (a += d.count), d.added || (u += d.count);
        }
      }
      var m = t[c - 1];
      return (
        c > 1 &&
          typeof m.value == 'string' &&
          (m.added || m.removed) &&
          e.equals('', m.value) &&
          ((t[c - 2].value += m.value), t.pop()),
        t
      );
    }
    function xs(e) {
      return { newPos: e.newPos, components: e.components.slice(0) };
    }
    var Fn = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
      kn = /\S/,
      Vn = new se();
    Vn.equals = function (e, t) {
      return (
        this.options.ignoreCase && ((e = e.toLowerCase()), (t = t.toLowerCase())),
        e === t || (this.options.ignoreWhitespace && !kn.test(e) && !kn.test(t))
      );
    };
    Vn.tokenize = function (e) {
      for (var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0; n < t.length - 1; n++)
        !t[n + 1] && t[n + 2] && Fn.test(t[n]) && Fn.test(t[n + 2]) && ((t[n] += t[n + 2]), t.splice(n + 1, 2), n--);
      return t;
    };
    var It = new se();
    It.tokenize = function (e) {
      var t = [],
        n = e.split(/(\n|\r\n)/);
      n[n.length - 1] || n.pop();
      for (var o = 0; o < n.length; o++) {
        var r = n[o];
        o % 2 && !this.options.newlineIsToken
          ? (t[t.length - 1] += r)
          : (this.options.ignoreWhitespace && (r = r.trim()), t.push(r));
      }
      return t;
    };
    function ws(e, t, n) {
      return It.diff(e, t, n);
    }
    var Bs = new se();
    Bs.tokenize = function (e) {
      return e.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    var Ts = new se();
    Ts.tokenize = function (e) {
      return e.split(/([{}:;,]|\s+)/);
    };
    function Ve(e) {
      return (
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? (Ve = function (t) {
              return typeof t;
            })
          : (Ve = function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
        Ve(e)
      );
    }
    var Ss = Object.prototype.toString,
      Oe = new se();
    Oe.useLongestToken = !0;
    Oe.tokenize = It.tokenize;
    Oe.castInput = function (e) {
      var t = this.options,
        n = t.undefinedReplacement,
        o = t.stringifyReplacer,
        r =
          o === void 0
            ? function (s, c) {
                return typeof c > 'u' ? n : c;
              }
            : o;
      return typeof e == 'string' ? e : JSON.stringify(kt(e, null, null, r), r, '  ');
    };
    Oe.equals = function (e, t) {
      return se.prototype.equals.call(Oe, e.replace(/,([\r\n])/g, '$1'), t.replace(/,([\r\n])/g, '$1'));
    };
    function kt(e, t, n, o, r) {
      (t = t || []), (n = n || []), o && (e = o(r, e));
      var s;
      for (s = 0; s < t.length; s += 1) if (t[s] === e) return n[s];
      var c;
      if (Ss.call(e) === '[object Array]') {
        for (t.push(e), c = new Array(e.length), n.push(c), s = 0; s < e.length; s += 1) c[s] = kt(e[s], t, n, o, r);
        return t.pop(), n.pop(), c;
      }
      if ((e && e.toJSON && (e = e.toJSON()), Ve(e) === 'object' && e !== null)) {
        t.push(e), (c = {}), n.push(c);
        var a = [],
          u;
        for (u in e) e.hasOwnProperty(u) && a.push(u);
        for (a.sort(), s = 0; s < a.length; s += 1) (u = a[s]), (c[u] = kt(e[u], t, n, o, u));
        t.pop(), n.pop();
      } else c = e;
      return c;
    }
    var Et = new se();
    Et.tokenize = function (e) {
      return e.slice();
    };
    Et.join = Et.removeEmpty = function (e) {
      return e;
    };
    function Os(e, t) {
      let n = 0,
        o = 0;
      return {
        lines: As(e).map(c =>
          c.next === void 0
            ? Object.assign(Object.assign({}, t.prev[c.prev]), {
                lineNumber: { prev: c.prev + 1 },
                move: 'exit',
                enterIndex: null,
                exitIndex: o++,
              })
            : c.prev === void 0
            ? Object.assign(Object.assign({}, t.next[c.next]), {
                lineNumber: { next: c.next + 1 },
                move: 'enter',
                enterIndex: n++,
                exitIndex: null,
              })
            : Object.assign(Object.assign({}, t.prev[c.prev]), {
                lineNumber: { prev: c.prev + 1, next: c.next + 1 },
                move: 'stay',
                enterIndex: null,
                exitIndex: null,
              }),
        ),
        enterCount: n,
        exitCount: o,
      };
    }
    function As(e) {
      let t = ws(e.prev, e.next),
        n = [],
        o = 0,
        r = 0;
      return (
        t.forEach(s => {
          if (s.added) for (let c = 0; c < s.count; c++) n.push({ next: r++ });
          else if (s.removed) for (let c = 0; c < s.count; c++) n.push({ prev: o++ });
          else for (let c = 0; c < s.count; c++) n.push({ prev: o++, next: r++ });
        }),
        n
      );
    }
    function Is(e, t, n) {
      let { lines: o } = e,
        r = T(e, ['lines']),
        s = _(t, p => ps(p, o)),
        c = o.map(p => {
          let { tokens: g } = p,
            m = T(p, ['tokens']),
            h = {
              prev: p.lineNumber.prev ? s.prev[p.lineNumber.prev] : !1,
              next: p.lineNumber.next ? s.next[p.lineNumber.next] : !1,
            },
            b = {
              prev: p.lineNumber.prev ? n.prev[p.lineNumber.prev] || [] : [],
              next: p.lineNumber.next ? n.next[p.lineNumber.next] || [] : [],
            };
          return Object.assign({ focused: _(h, D => !!D), groups: js(g, h, b) }, m);
        }),
        a = _(s, p => Object.keys(p).map(g => Number(g))),
        u = _(a, p => Math.min(...p)),
        d = _(a, p => Math.max(...p));
      return Object.assign({ lines: c, firstFocusedLineNumber: u, lastFocusedLineNumber: d }, r);
    }
    function js(e, t, n) {
      let o = _(t, p => (Array.isArray(p) ? p : [])),
        r = _(n, p => p.map(({ columnNumbers: g }) => g)),
        s = [...o.prev, ...o.next, ...r.prev, ...r.next],
        c = Ns(e, s),
        a = 0,
        u = null,
        d = [];
      return (
        c.forEach(p => {
          let g = En(a, t.prev),
            m = En(a, t.next),
            h = xn(a, n.prev),
            b = xn(a, n.next);
          (!u || u.focused.prev !== g || u.focused.next !== m || u.annotation.prev !== h || u.annotation.next !== b) &&
            ((u = { focused: { prev: g, next: m }, tokens: [], annotation: { prev: h, next: b } }), d.push(u)),
            u?.tokens.push(p),
            (a += p.content.length);
        }),
        d.map(p => ({ focused: p.focused, tokens: p.tokens, element: Ls(p) }))
      );
    }
    function Ls(e) {
      return l.default.createElement(
        l.default.Fragment,
        null,
        e.tokens.map(({ content: t, props: n }, o) =>
          l.default.createElement('span', Object.assign({}, n, { key: o + 1 }), t),
        ),
      );
    }
    function Ns(e, t) {
      let n = [...t.map(r => r.start - 1), ...t.map(r => r.end)],
        o = e;
      return (
        n.forEach(r => {
          let s = [],
            c = 0;
          o.forEach(a => {
            let u = c,
              d = c + a.content.length;
            if (u < r && r < d) {
              let g = r - u,
                m = a.content.slice(0, g),
                h = a.content.slice(g);
              s.push(Object.assign(Object.assign({}, a), { content: m })),
                s.push(Object.assign(Object.assign({}, a), { content: h }));
            } else s.push(a);
            c = d;
          }),
            (o = s);
        }),
        o
      );
    }
    function En(e, t) {
      return Array.isArray(t) ? t.some(({ start: n, end: o }) => n - 1 <= e && e < o) : t;
    }
    function xn(e, t) {
      return t.find(({ columnNumbers: n }) => n.start - 1 <= e && e < n.end);
    }
    function Ae(e, t) {
      if (e.fixed === !0) return e.value;
      {
        let [n, o] = e.interval,
          [r, s] = e.extremes;
        if (t < n) return r;
        if (t > o) return s;
        let c = (t - n) / (o - n),
          a = e.ease || Te.linear;
        return r + a(c) * (s - r);
      }
    }
    function wn([e, t], n, o) {
      if (o <= 1) return [e, t];
      let r = t - e,
        s = r / Math.pow(o, 1 / 8),
        c = (r - s) / (o - 1),
        a = e + c * n,
        u = a + s;
      return [a, u];
    }
    var Te = {
      linear: function (e) {
        return e;
      },
      easeInQuad: function (e) {
        return e * e;
      },
      easeOutQuad: function (e) {
        return e * (2 - e);
      },
      easeInOutCubic: function (e) {
        return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
      },
    };
    function Hs(e, t, n, o) {
      let [r, s] = t;
      return e.map(c => {
        let a = _(c.lineNumber, m => m && m - 1),
          { enterIndex: u, exitIndex: d } = c,
          p =
            c.move === 'exit'
              ? { fixed: !0, value: a.prev }
              : c.move === 'enter'
              ? { fixed: !0, value: a.next }
              : { fixed: !1, extremes: [a.prev, a.next], interval: [r, s], ease: Te.easeInOutCubic },
          g =
            c.move === 'exit'
              ? { fixed: !1, extremes: [0, -1], ease: Te.easeInQuad, interval: wn([0, r], d, o) }
              : c.move === 'enter'
              ? { fixed: !1, extremes: [1, 0], ease: Te.easeOutQuad, interval: wn([s, 1], u, n) }
              : { fixed: !0, value: 0 };
        return Object.assign(Object.assign({}, c), { tweenX: g, tweenY: p });
      });
    }
    function _s(e, t) {
      let n = mt(e, [], s => s.flatMap(c => Un(c.focus).map(a => Object.assign(Object.assign({}, c), { focus: a })))),
        o = mt(n, [], s => s.filter(Bn)),
        r = mt(n, [], s => s.filter(c => !Bn(c)));
      return { inlineAnnotations: _(o, s => Ps(s, t)), multilineAnnotations: _(r, s => Rs(s, t)) };
    }
    function Bn(e) {
      return fs(e.focus);
    }
    function Ps(e, t) {
      let n = {};
      return (
        e.forEach(o => {
          let r = Xn(o.focus),
            s = +Object.keys(r)[0],
            c = r[s],
            a = n[s] || [];
          a.push({ columnNumbers: c[0], data: o.data, theme: t, Component: o.Component || Ms() }), (n[s] = a);
        }),
        n
      );
    }
    function Ms(e, t) {
      return ({ children: n }) => l.default.createElement('span', { style: { outline: 'red 1px solid' } }, n);
    }
    function Rs(e, t) {
      return e.map(n => ({ lineNumbers: Yn(n.focus), data: n.data, theme: t, Component: n.Component || $s(n, t) }));
    }
    function $s(e, t) {
      let n = t.colors['editor.lineHighlightBackground'] || t.colors['editor.selectionHighlightBackground'];
      return ({ children: o, style: r }) =>
        l.default.createElement(
          'div',
          {
            style: Object.assign(Object.assign({}, r), { background: n, cursor: 'pointer' }),
            onClick: s => alert('clicked'),
            className: 'ch-code-bg-annotation',
          },
          l.default.createElement('span', {
            className: 'ch-code-bg-annotation-border',
            style: { background: '#00a2d3', width: '3px', height: '100%', position: 'absolute', left: 0 },
          }),
          o,
        );
    }
    function Ws(e, t) {
      return { prev: Tn(e, t.prev, n => n.lineNumber.prev), next: Tn(e, t.next, n => n.lineNumber.next) };
    }
    function Tn(e, t, n) {
      let o = [...t];
      o.sort((c, a) => c.lineNumbers.start - a.lineNumbers.start);
      let r = 0,
        s = [];
      for (; r < e.length; ) {
        let c = o[0],
          a = e[r];
        if (c && n(a) > c.lineNumbers.start) throw "Code Hike can't handle two annotations for the same line";
        if (c && n(a) === c.lineNumbers.start) {
          let u = { lines: [], annotation: c };
          for (; a && (!n(a) || n(a) <= c.lineNumbers.end); ) u.lines.push(a), (a = e[++r]);
          s.push(u), o.shift();
        } else if (!c) s.push({ lines: e.slice(r) }), (r = e.length);
        else {
          let u = { lines: [] };
          for (; a && (!n(a) || n(a) < c.lineNumbers.start); ) u.lines.push(a), (a = e[++r]);
          s.push(u);
        }
      }
      return s;
    }
    function zs(e, t) {
      return e.map(n => {
        var { groups: o } = n,
          r = T(n, ['groups']);
        let { lineNumber: s } = r,
          c = { prev: s.prev ? t.prev[s.prev] || [] : [], next: s.next ? t.next[s.next] || [] : [] };
        return Object.assign(Object.assign({}, r), { annotatedGroups: Gs(o, c) });
      });
    }
    function Gs(e, t) {
      let n = [...e],
        o = [...e],
        r = [...t.prev],
        s = [...t.next],
        c = [],
        a = 1,
        u = 1;
      for (; n.length > 0 || o.length > 0; ) {
        let d = r[0],
          p = s[0],
          g = d && d.columnNumbers.start === a,
          m = p && p.columnNumbers.start === u;
        if (a < u)
          if (g) {
            let h = d.columnNumbers.end + 1;
            c.push({ prev: { annotation: d, groups: Y(n, a, h) } }), (a = h), r.shift();
          } else {
            let h = Math.min(u, d?.columnNumbers.start || u);
            c.push({ prev: { groups: Y(n, a, h) } }), (a = h);
          }
        else if (a > u)
          if (m) {
            let h = p.columnNumbers.end + 1;
            c.push({ next: { annotation: p, groups: Y(o, u, h) } }), (u = h), s.shift();
          } else {
            let h = Math.min(a, p?.columnNumbers.start || a);
            c.push({ next: { groups: Y(o, u, h) } }), (u = h);
          }
        else if (a == u)
          if (g && m && d.columnNumbers.end === p.columnNumbers.end) {
            let h = p.columnNumbers.end + 1;
            c.push({ prev: { annotation: d, groups: Y(n, a, h) }, next: { annotation: p, groups: Y(o, u, h) } }),
              (a = h),
              (u = h),
              r.shift(),
              s.shift();
          } else if (g) {
            let h = d.columnNumbers.end + 1;
            c.push({ prev: { annotation: d, groups: Y(n, a, h) } }), (a = h), r.shift();
          } else if (m) {
            let h = p.columnNumbers.end + 1;
            c.push({ next: { annotation: p, groups: Y(o, u, h) } }), (u = h), s.shift();
          } else if (!d && !p) c.push({ prev: { groups: n }, next: { groups: o } }), (n = []), (o = []);
          else {
            let h = Math.min(d?.columnNumbers.start || Number.MAX_VALUE, p?.columnNumbers.start || Number.MAX_VALUE);
            c.push({ prev: { groups: Y(n, a, h) }, next: { groups: Y(o, u, h) } }), (a = h), (u = h);
          }
      }
      return c;
    }
    function Y(e, t, n) {
      let o = [],
        r = t;
      for (; r < n && e.length > 0; ) {
        let s = e.shift();
        o.push(s), (r += s.tokens.reduce((a, u) => a + u.content.length, 0));
      }
      return o;
    }
    function qs(e) {
      let { highlightedLines: t, theme: n, focus: o } = e;
      return l.default.useMemo(() => Us(e), [t.prev, t.next, o.prev, o.next, n]);
    }
    function Us({ theme: e, focus: t, annotations: n, highlightedLines: o }) {
      let r = Xs(o),
        s = Ys(r, o),
        { inlineAnnotations: c, multilineAnnotations: a } = Ks(n, e),
        u = Zs(s, qn(t, null), c),
        d = Js(u, c, a);
      return Vs(d, r);
    }
    function Xs(e) {
      return _(e, t =>
        t
          .map(n => n.tokens.map(o => o.content).join(''))
          .join(``)
          .trimEnd()
          .concat(``),
      );
    }
    function Ys(e, t) {
      return Os(e, t);
    }
    function Ks(e, t) {
      return _s(e, t);
    }
    function Zs(e, t, n) {
      return Is(e, t, n);
    }
    function Js(e, t, n) {
      var { lines: o } = e,
        r = T(e, ['lines']);
      let s = zs(o, t),
        c = Ws(s, n);
      return Object.assign(Object.assign({}, r), {
        lineGroups: c,
        lineCount: {
          prev: o.filter(a => a.lineNumber.prev != null).length,
          next: o.filter(a => a.lineNumber.next != null).length,
        },
      });
    }
    function Vs(e, t) {
      let n = Qs(e.enterCount, e.exitCount),
        o = _(e.lineGroups, r =>
          r.map(s => Object.assign(Object.assign({}, s), { lines: Hs(s.lines, n, e.enterCount, e.exitCount) })),
        );
      return Object.assign(Object.assign({}, e), { groups: o, verticalInterval: n, code: t });
    }
    function Qs(e, t) {
      return e <= 0 && t <= 0 ? [0, 1] : e <= 0 && t >= 1 ? [0.33, 1] : e >= 1 && t <= 0 ? [0, 0.67] : [0.25, 0.75];
    }
    function ec({
      dimensions: e,
      codeStep: t,
      children: n,
      minZoom: o = 0,
      maxZoom: r = 1.2,
      center: s = !1,
      progress: c,
    }) {
      let { prev: a, next: u } = oc({ codeStep: t, dimensions: e, minZoom: o, maxZoom: r, horizontalCenter: s }),
        d = Be(a.zoom, u.zoom, c),
        p = Be(a.dx, u.dx, c),
        g = Be(a.dy, u.dy, c, t.verticalInterval),
        m = Be(a.focusHeight, u.focusHeight, c),
        h = Be(a.focusWidth, u.focusWidth, c),
        D = (e?.lineNumberWidth || 0) * d || 16,
        k = Math.max(h + D, e.containerWidth),
        x = D / d;
      return l.default.createElement(
        tc,
        { width: e.containerWidth, height: e.containerHeight },
        l.default.createElement(
          nc,
          { dx: p, dy: g, scale: d, height: Math.max(m, e.containerHeight), width: k },
          n(h, x),
        ),
      );
    }
    function tc({ width: e, height: t, children: n }) {
      return l.default.createElement('code', {
        style: { width: e, height: t, position: 'relative', overflow: 'auto' },
        className: 'ch-code-scroll-parent',
        children: n,
      });
    }
    function nc({ dx: e, dy: t, scale: n, height: o, width: r, children: s }) {
      return l.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'top left',
            width: r,
            height: o,
            overflow: 'hidden',
          },
          className: 'ch-code-scroll-content',
        },
        l.default.createElement('div', {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translateX(${e}px) translateY(${t}px) scale(${n})`,
            transformOrigin: 'left top',
            width: r / n,
            height: (o - 2 * t) / n,
          },
          children: s,
        }),
      );
    }
    function oc(e) {
      var { codeStep: t } = e,
        n = T(e, ['codeStep']);
      let { lineHeight: o, lineWidth: r } = n.dimensions,
        s = {
          prev: {
            extremes: [t.firstFocusedLineNumber.prev - 1, t.lastFocusedLineNumber.prev - 1],
            originalContentHeight: t.lineCount.prev * o,
            lineWidth: r[0],
          },
          next: {
            extremes: [t.firstFocusedLineNumber.next - 1, t.lastFocusedLineNumber.next - 1],
            originalContentHeight: t.lineCount.next * o,
            lineWidth: r[1],
          },
        };
      return _(s, ({ extremes: c, originalContentHeight: a, lineWidth: u }) =>
        rc(Object.assign({ extremes: c, originalContentHeight: a, lineWidth: u }, n)),
      );
    }
    function rc({
      dimensions: e,
      lineWidth: t,
      minZoom: n,
      maxZoom: o,
      extremes: r,
      originalContentHeight: s,
      horizontalCenter: c,
    }) {
      let { containerWidth: a, containerHeight: u, lineHeight: d } = e,
        p = (r[1] - r[0] + 3) * d,
        g = e?.lineNumberWidth || 16,
        m = 16,
        h = Math.max(Math.min((a - g - m) / t, u / p, o), n),
        b = s * h,
        D = (r[0] - 1) * d * h,
        k = (r[1] + 2) * d * h,
        x = (k + D) / 2,
        B = k - D,
        w = u > b ? (u - b) / 2 : sc(u / 2 - x, Math.max(u - b, -D), 0),
        L = c ? Math.max(a / 2 - (t * h) / 2, 0) : 0;
      return { zoom: h, dx: L, dy: w, focusHeight: B, focusWidth: t * h };
    }
    function sc(e, t, n) {
      return e <= t ? t : e >= n ? n : e;
    }
    function Be(e, t, n, o = [0, 1]) {
      return Ae({ fixed: !1, interval: o, extremes: [e, t], ease: Te.easeInOutCubic }, n);
    }
    function cc(e) {
      return l.default.createElement(ec, Object.assign({}, e), (t, n) =>
        l.default.createElement(lc, {
          codeStep: e.codeStep,
          focusWidth: t,
          lineHeight: e.dimensions.lineHeight,
          progress: e.progress,
          theme: e.theme,
          startX: n,
          lineNumberWidth: e.dimensions.lineNumberWidth,
        }),
      );
    }
    function lc({ codeStep: e, progress: t, focusWidth: n, lineHeight: o, startX: r, theme: s, lineNumberWidth: c }) {
      let a = t < 0.5 ? e.groups.prev : e.groups.next;
      return l.default.createElement(
        l.default.Fragment,
        null,
        a.map((u, d) => {
          if (!u.annotation)
            return l.default.createElement(Sn, {
              lines: u.lines,
              t,
              focusWidth: n,
              lineHeight: o,
              startX: r,
              key: d,
              theme: s,
              lineNumberWidth: c,
            });
          let p = Ae(u.lines[0].tweenY, t),
            g = u.annotation.lineNumbers.end - u.annotation.lineNumbers.start + 1,
            m = u.annotation.Component;
          return l.default.createElement(
            m,
            {
              style: { position: 'absolute', height: g * o, width: '100%', transform: `translateY(${p * o}px)` },
              key: d,
              data: u.annotation.data,
              theme: u.annotation.theme,
              isInline: !1,
            },
            l.default.createElement(Sn, {
              lines: u.lines,
              t,
              focusWidth: n,
              lineHeight: o,
              startY: p,
              startX: r,
              theme: s,
              lineNumberWidth: c,
            }),
          );
        }),
      );
    }
    function Sn({
      lines: e,
      focusWidth: t,
      lineHeight: n,
      t: o,
      startX: r,
      startY: s = 0,
      theme: c,
      lineNumberWidth: a,
    }) {
      return l.default.createElement(
        l.default.Fragment,
        null,
        e.map((u, d) => {
          let { tweenX: p, tweenY: g, focused: m } = u,
            h = Ae(p, o),
            b = Ae(g, o),
            D = Qn(m, o, h);
          return l.default.createElement(
            l.default.Fragment,
            { key: d },
            a
              ? l.default.createElement(
                  'span',
                  {
                    className: 'ch-code-line-number',
                    style: {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      transform: `translate(${h * t}px, ${(b - s) * n}px)`,
                      width: a,
                      opacity: D,
                      color: F(c, v.LineNumberForeground),
                    },
                  },
                  o < 0.5 ? u.lineNumber.prev : u.lineNumber.next,
                )
              : void 0,
            l.default.createElement(
              uc,
              { dx: r + h * t, dy: (b - s) * n, width: t, opacity: D },
              l.default.createElement(ic, { line: u, progress: o, dx: h }),
            ),
          );
        }),
      );
    }
    function ic({ line: e, progress: t, dx: n }) {
      return l.default.createElement(
        'div',
        { style: { display: 'inline-block', width: '100%' } },
        e.annotatedGroups.map((o, r) => l.default.createElement(ac, { annotatedGroup: o, progress: t, dx: n, key: r })),
        l.default.createElement('br', null),
      );
    }
    function ac({ annotatedGroup: e, progress: t, dx: n }) {
      var o, r, s;
      let c = t < 0.5 ? e.prev : e.next,
        a = c?.groups || [],
        u = (o = c?.annotation) === null || o === void 0 ? void 0 : o.Component,
        d = a.map((p, g) => {
          let m = Qn(p.focused, t, n);
          return l.default.createElement('span', { style: { opacity: m }, key: g + 1 }, p.element);
        });
      return u
        ? l.default.createElement(u, {
            children: d,
            data: (r = c?.annotation) === null || r === void 0 ? void 0 : r.data,
            theme: (s = c?.annotation) === null || s === void 0 ? void 0 : s.theme,
            isInline: !0,
          })
        : l.default.createElement(l.default.Fragment, null, d);
    }
    function uc({ children: e, dx: t, dy: n, opacity: o, width: r }) {
      return l.default.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${t}px, ${n}px)`,
            width: r,
            display: o <= 0 ? 'none' : void 0,
          },
        },
        e,
      );
    }
    var On = 0.33;
    function Qn(e, t, n) {
      return (
        Ae({ fixed: !1, extremes: [e.prev ? 0.99 : On, e.next ? 0.99 : On], interval: [0, 1] }, t) - Math.abs(n) * 1
      );
    }
    function xt({ content: e, style: t, className: n }) {
      let [o, r] = l.default.useState(!1);
      return l.default.createElement(
        'svg',
        {
          style: t,
          onClick: () => {
            dc(e),
              r(!0),
              setTimeout(() => {
                r(!1);
              }, 1200);
          },
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          className: n,
        },
        l.default.createElement('title', null, 'Copy'),
        o
          ? l.default.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M5 13l4 4L19 7',
            })
          : l.default.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.6px',
              d: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
            }),
      );
    }
    function dc(e) {
      if (!navigator.clipboard) {
        pc(e);
        return;
      }
      navigator.clipboard.writeText(e);
    }
    function pc(e) {
      var t = document.createElement('textarea');
      (t.value = e),
        (t.style.top = '0'),
        (t.style.left = '0'),
        (t.style.position = 'fixed'),
        document.body.appendChild(t),
        t.focus(),
        t.select();
      try {
        var n = document.execCommand('copy');
      } catch {}
      document.body.removeChild(t);
    }
    function fc({ tween: e, theme: t }) {
      return qs({
        highlightedLines: _(e, n => n.code.lines),
        theme: t,
        focus: _(e, n => n.focus),
        annotations: _(e, n => n.annotations),
      });
    }
    var gc = 10;
    function eo(e) {
      var { tween: t, progress: n, config: o } = e,
        r = T(e, ['tween', 'progress', 'config']);
      let s = fc({ tween: t, theme: o.theme }),
        { element: c, dimensions: a } = Ds(
          s.code,
          _(t, u => u.focus),
          o.minColumns || gc,
          o.lineNumbers || !1,
          [o.parentHeight],
        );
      return a
        ? l.default.createElement(yc, { dimensions: a, stepInfo: s, config: o, progress: n, htmlProps: r })
        : l.default.createElement(hc, { element: c, htmlProps: r });
    }
    function hc({ element: e, htmlProps: t }) {
      return l.default.createElement(to, { htmlProps: t, style: { overflow: 'hidden', opacity: 0 } }, e);
    }
    function yc({
      config: { minZoom: e = 1, maxZoom: t = 1, horizontalCenter: n = !1, theme: o },
      dimensions: r,
      stepInfo: s,
      progress: c,
      htmlProps: a,
      config: u,
    }) {
      var d;
      let { bg: p, fg: g } = vs(o);
      return l.default.createElement(
        to,
        {
          htmlProps: a,
          style: {
            opacity: 1,
            backgroundColor: p,
            color: g,
            colorScheme: bs(o),
            ['--ch-selection-background']: F(o, v.SelectionBackground),
          },
        },
        l.default.createElement(cc, {
          codeStep: s,
          progress: c,
          dimensions: r,
          minZoom: e,
          maxZoom: t,
          center: n,
          theme: o,
        }),
        u.showCopyButton
          ? l.default.createElement(xt, {
              className: 'ch-code-button',
              content: (d = s?.code) === null || d === void 0 ? void 0 : d.prev,
            })
          : void 0,
      );
    }
    function to({ htmlProps: e, style: t, children: n }) {
      return l.default.createElement(
        'div',
        Object.assign({}, e, {
          style: Object.assign(
            Object.assign({ margin: 0, padding: 0, position: 'relative', whiteSpace: 'pre' }, t),
            e?.style,
          ),
          children: n,
        }),
      );
    }
    function jt() {
      return typeof window < 'u' ? performance.now() : 0;
    }
    function mc(e, t) {
      var n = l.default.useRef(null);
      return n.current == null && (n.current = { config: no(e, t), state: bc(e, t) }), n.current;
    }
    function no(e, t) {
      var n = t.stiffness,
        o = t.damping,
        r = t.mass,
        s = t.decimals,
        c = t.teleport;
      return { X: e, k: n ?? 170, c: o ?? 26, m: r ?? 1, teleport: c ?? !1, decimals: s ?? 2 };
    }
    function bc(e, t) {
      var n = t.from,
        o = t.initialSpeed;
      return { x0: n ?? e, v0: o ?? 0, t0: jt(), raf: null };
    }
    var bt = Math.sqrt,
      oe = Math.exp,
      An = Math.sin,
      In = Math.cos;
    function wt(e) {
      var t = e.x0,
        n = e.v0,
        o = e.t0,
        r = e.t,
        s = e.k,
        c = e.c,
        a = e.m,
        u = e.X,
        d = t - u,
        p = (r - o) / 1e3,
        g = c * c - 4 * s * a;
      if (g > 0) {
        var m = (-c + bt(g)) / (2 * a),
          h = (-c - bt(g)) / (2 * a),
          b = (d * m - n) / (m - h),
          D = (n - d * h) / (m - h);
        return { x: u + b * oe(h * p) + D * oe(m * p), v: b * h * oe(h * p) + D * m * oe(m * p) };
      } else if (g < 0) {
        var k = -c / (2 * a),
          x = bt(-g) / (2 * a),
          B = d,
          w = (n - k * d) / x;
        return {
          x: u + oe(k * p) * (B * In(x * p) + w * An(x * p)),
          v: oe(k * p) * ((w * x + B * k) * In(x * p) - (B * x - w * k) * An(x * p)),
        };
      } else {
        var L = -c / (2 * a),
          P = d,
          M = n - L * d;
        return { x: u + (P + M * p) * oe(L * p), v: (M + P * L + M * L * p) * oe(L * p) };
      }
    }
    var tt = [],
      Bt = null;
    function jn(e) {
      var t = tt.push(e);
      return t === 1 && (Bt = requestAnimationFrame(vc)), [Bt, t - 1];
    }
    function Ln(e) {
      var t = e[0],
        n = e[1];
      t === Bt && delete tt[n];
    }
    function vc() {
      var e = jt(),
        t = tt;
      (tt = []),
        os.unstable_batchedUpdates(function () {
          return t.forEach(function (n) {
            return n && n(e);
          });
        });
    }
    var Ke = typeof window < 'u' ? l.default.useLayoutEffect : l.default.useEffect;
    function Lt(e, t) {
      t === void 0 && (t = {});
      var n = l.default.useState(),
        o = n[1],
        r = no(e, t),
        s = mc(e, t),
        c = s.state,
        a = s.config,
        u = jt(),
        d = c.x0,
        p = c.v0,
        g = c.t0,
        m = a.k,
        h = a.c,
        b = a.m,
        D = a.X,
        k = r.teleport ? { x: D, v: 0 } : wt({ x0: d, v0: p, t0: g, t: u, k: m, c: h, m: b, X: D }),
        x = k.x,
        B = k.v,
        w = Dc(x, B, u, r);
      return (
        Ke(
          function () {
            Object.assign(a, r);
          },
          [r.X, r.k, r.c, r.m, r.teleport],
        ),
        Ke(
          function () {
            (c.x0 = x), (c.v0 = B), (c.t0 = u);
          },
          [x, B, u],
        ),
        Ke(function () {
          var L = function P(M) {
            var K = c.x0,
              rt = c.v0,
              st = c.t0,
              Fe = a.k,
              Ne = a.c,
              fe = a.m,
              ct = a.X,
              He = a.decimals,
              lt = wt({ x0: K, v0: rt, t0: st, t: M, k: Fe, c: Ne, m: fe, X: ct }),
              it = lt.x;
            de(it, He) !== de(K, He) ? ((c.raf = null), o(M)) : (c.raf = jn(P));
          };
          w && c.raf == null ? (c.raf = jn(L)) : !w && c.raf != null && (Ln(c.raf), (c.raf = null));
        }),
        Ke(function () {
          return function () {
            c.raf != null && Ln(c.raf);
          };
        }, []),
        [de(x, r.decimals), w]
      );
    }
    function Dc(e, t, n, o) {
      var r = o.decimals,
        s = o.X,
        c = o.k,
        a = o.c,
        u = o.m;
      if (de(e, r) !== de(s, r)) return !0;
      var d = n + 0.016,
        p = wt({ x0: e, v0: t, t0: n, t: d, k: c, c: a, m: u, X: s }),
        g = p.x;
      return de(g, r) !== de(s, r);
    }
    function de(e, t) {
      var n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    var Cc = { stiffness: 120, damping: 24, mass: 0.2, decimals: 3 };
    function Fc(e) {
      var { step: t, config: n } = e,
        o = T(e, ['step', 'config']);
      let { tween: r, t: s } = kc(t, n.spring);
      return l.default.createElement(eo, Object.assign({ tween: r, progress: s, config: n }, o));
    }
    function kc(e, t = Cc) {
      let [{ target: n, steps: o, index: r }, s] = l.default.useState({ target: 2, steps: [e, e, e], index: 0 });
      l.default.useEffect(() => {
        o[o.length - 1] != e && s(p => Ec(p, e, c));
      }, [e]);
      let [c] = Lt(n, t),
        a = c - r;
      return a <= 1 ? { tween: { prev: o[0], next: o[1] }, t: a } : { tween: { prev: o[1], next: o[2] }, t: a - 1 };
    }
    function Ec(e, t, n) {
      let { steps: o, target: r, index: s } = e,
        c = o.slice();
      return n - s < 1
        ? ((c[2] = t), Object.assign(Object.assign({}, e), { steps: c }))
        : ((c[0] = o[1]),
          (c[1] = o[2]),
          (c[2] = t),
          Object.assign(Object.assign({}, e), { steps: c, target: r + 1, index: s + 1 }));
    }
    var Tt = me.createContext({});
    function oo({ classes: e, children: t }) {
      let n = me.useContext(Tt),
        o = ro(n, e);
      return l.default.createElement(Tt.Provider, { value: o, children: t });
    }
    function Q(e, t) {
      let n = me.useContext(Tt),
        o = ro(n, t);
      return me.useCallback(xc(e, o), [e, o]);
    }
    function xc(e, t) {
      return function (...o) {
        let r = o.map(c => e + (e && c ? '-' : '') + c),
          s = r.slice();
        return (
          r.forEach(c => {
            c in t && s.push(t[c]);
          }),
          s.join(' ')
        );
      };
    }
    function ro(e, t) {
      return me.useMemo(() => Object.assign(Object.assign({}, e), t), [e, t]);
    }
    var wc = l.default.forwardRef(function (e, t) {
      var { title: n, children: o, titleBar: r, classes: s, theme: c, zoom: a = 1, overflow: u } = e,
        d = T(e, ['title', 'children', 'titleBar', 'classes', 'theme', 'zoom', 'overflow']);
      let p = Q('ch-frame', s),
        g = r || l.default.createElement(so, { title: n }),
        m = { '--ch-frame-zoom': a, overflow: u };
      return l.default.createElement(
        oo,
        { classes: s },
        l.default.createElement(
          'div',
          Object.assign({}, d, { ref: t }),
          l.default.createElement(
            'div',
            { className: p('') },
            l.default.createElement(
              'div',
              { className: p('title-bar'), style: { background: F(c, v.EditorGroupHeaderBackground) } },
              g,
            ),
            l.default.createElement(
              'div',
              { className: p('content') },
              l.default.createElement('div', { className: p('zoom'), style: m }, o),
            ),
          ),
        ),
      );
    });
    l.default.forwardRef(function (e, t) {
      var { title: n, children: o, titleBar: r, classes: s, overflow: c } = e,
        a = T(e, ['title', 'children', 'titleBar', 'classes', 'overflow']);
      let u = Q('ch', s),
        d = r || l.default.createElement(so, { title: n });
      return l.default.createElement(
        oo,
        { classes: s },
        l.default.createElement(
          'div',
          Object.assign({}, a, { ref: t }),
          l.default.createElement(
            'div',
            { className: u('simple-frame') },
            l.default.createElement('div', { className: u('frame-title-bar') }, d),
            o,
          ),
        ),
      );
    });
    function so({ title: e }) {
      let t = Q('ch-frame');
      return l.default.createElement(
        l.default.Fragment,
        null,
        l.default.createElement('div', { className: t('left-bar') }, l.default.createElement(Nt, null)),
        l.default.createElement('div', { className: t('middle-bar') }, e),
        l.default.createElement('div', { className: t('right-bar') }),
      );
    }
    function Nt() {
      let e = Q('ch-frame');
      return l.default.createElement(
        'div',
        { className: e('buttons') },
        l.default.createElement('div', { className: e('button', 'button-left') }),
        l.default.createElement('div', { className: e('button-space') }),
        l.default.createElement('div', { className: e('button', 'button-middle') }),
        l.default.createElement('div', { className: e('button-space') }),
        l.default.createElement('div', { className: e('button', 'button-right') }),
      );
    }
    var Bc = l.default.forwardRef(function (t, n) {
      var o,
        {
          northPanel: r,
          southPanel: s,
          terminalPanel: c,
          style: a,
          height: u,
          northButton: d,
          southButton: p,
          theme: g,
          className: m,
          onTabClick: h,
        } = t,
        b = T(t, [
          'northPanel',
          'southPanel',
          'terminalPanel',
          'style',
          'height',
          'northButton',
          'southButton',
          'theme',
          'className',
          'onTabClick',
        ]);
      return l.default.createElement(
        'div',
        Object.assign({ ref: n }, b, {
          className: 'ch-editor-frame',
          style: Object.assign({ background: F(g, v.EditorBackground) }, a),
        }),
        l.default.createElement(
          'div',
          {
            className: 'ch-frame-title-bar',
            style: { color: F(g, v.IconForeground), background: F(g, v.EditorGroupHeaderBackground) },
          },
          l.default.createElement(Nn, {
            tabs: r.tabs,
            showFrameButtons: !0,
            button: d,
            panel: 'north',
            theme: g,
            onTabClick: h,
          }),
        ),
        l.default.createElement('div', { 'data-ch-panel': 'north', style: r.style, children: r.children }),
        s &&
          l.default.createElement(
            l.default.Fragment,
            null,
            l.default.createElement(
              'div',
              {
                className: 'ch-frame-title-bar',
                style: {
                  transform: (o = s.style) === null || o === void 0 ? void 0 : o.transform,
                  color: F(g, v.IconForeground),
                  background: F(g, v.EditorGroupHeaderBackground),
                },
              },
              l.default.createElement(Nn, {
                tabs: s.tabs,
                showFrameButtons: !1,
                button: p,
                topBorder: !0,
                panel: 'south',
                theme: g,
                onTabClick: h,
              }),
            ),
            l.default.createElement('div', { 'data-ch-panel': 'south', children: s.children, style: s.style }),
          ),
      );
    });
    function Nn({ tabs: e, button: t, showFrameButtons: n, topBorder: o, panel: r, theme: s, onTabClick: c }) {
      let a = Q('ch-editor-tab');
      return l.default.createElement(
        l.default.Fragment,
        null,
        o &&
          l.default.createElement('div', {
            style: {
              position: 'absolute',
              height: '1px',
              background: F(s, v.EditorGroupBorder),
              width: '100%',
              top: 0,
              zIndex: 1,
            },
          }),
        n ? l.default.createElement(Nt, null) : l.default.createElement('div', null),
        e.map(({ title: u, active: d, style: p }) =>
          l.default.createElement(
            'div',
            {
              key: u,
              title: u,
              'data-ch-tab': r,
              className: a('', d ? 'active' : 'inactive'),
              style: Object.assign(Object.assign({}, p), {
                background: F(s, d ? v.ActiveTabBackground : v.InactiveTabBackground),
                color: F(s, d ? v.ActiveTabForeground : v.InactiveTabForeground),
                borderRightColor: F(s, v.TabBorder),
                borderBottomColor: F(s, d ? v.ActiveTabBottomBorder : v.InactiveTabBackground),
              }),
              onClick: c && (() => c(u)),
            },
            l.default.createElement(Tc, { title: u }),
          ),
        ),
        l.default.createElement('div', { style: { flex: 1, minWidth: '0.8em' } }),
        t,
      );
    }
    function Tc({ title: e }) {
      if (!e) return l.default.createElement('div', null);
      let t = e.lastIndexOf('/') + 1,
        n = e.substring(t),
        o = e.substring(0, t);
      return l.default.createElement('div', null, l.default.createElement('span', { style: { opacity: 0.5 } }, o), n);
    }
    function Sc(e) {
      let [, ...t] = e.split(/^\$\s*/gm),
        n = t.map(c => {
          let [a, ...u] = c.split(/\r?\n/);
          return { run: a, output: u.length > 0 ? u.join(``) : null };
        }),
        o = n[n.length - 1],
        r = n.length > 0 && o.output != null;
      return { title: r ? o.run.split(/(\s+)/)[0] : 'bash', isRunning: r, commands: n };
    }
    var Oc = l.default.createElement('span', { className: 'ch-terminal-prompt' }, '$');
    function Hn({ text: e, progress: t = 1, style: n }) {
      let o = Ac(e, t);
      return l.default.createElement(
        'pre',
        { style: n, className: 'ch-terminal-content' },
        o.map(({ run: r, output: s }, c) =>
          l.default.createElement(
            l.default.Fragment,
            { key: c },
            l.default.createElement('div', null, Oc, ' ', l.default.createElement('span', null, r)),
            s && l.default.createElement('div', { className: 'ch-terminal-output' }, s),
          ),
        ),
      );
    }
    function Ac(e, t) {
      if (!e) return [];
      let n = Math.round(e.length * t),
        { commands: o } = Sc(e.slice(0, n));
      return o;
    }
    function Ic({ prev: e = '', prevKey: t, next: n = '', nextKey: o, progress: r }) {
      return l.default.createElement(
        'div',
        { className: 'ch-terminal' },
        l.default.createElement(
          'div',
          { style: { position: 'relative', transform: `translateY(-${r * 100}%)` } },
          l.default.createElement(Hn, { text: e, progress: 1, key: t }),
          l.default.createElement(Hn, { style: { position: 'absolute' }, text: n, progress: r, key: o }),
        ),
      );
    }
    function jc({ steps: e, progress: t }) {
      let n = e.map(c => c.text),
        o = t % 1,
        r = Lc(Math.floor(t), 0, e.length - 1),
        s = r + 1;
      return l.default.createElement(Ic, { prev: n[r], prevKey: r, next: n[s] || '', nextKey: s, progress: o });
    }
    function Lc(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function Nc({ prev: e, next: t, t: n, backward: o }) {
      let r = Hc({ prev: e, next: t, t: n, backward: o });
      return r
        ? l.default.createElement(
            'div',
            { className: 'ch-editor-terminal', style: { height: r } },
            l.default.createElement(
              'div',
              { className: 'ch-editor-terminal-tab' },
              l.default.createElement('span', null, 'Terminal'),
            ),
            l.default.createElement(
              'div',
              { className: 'ch-editor-terminal-content' },
              l.default.createElement(jc, { steps: [{ text: e || '' }, { text: t || '' }], progress: n }),
              ')',
            ),
          )
        : null;
    }
    function Hc({ prev: e, next: t, t: n, backward: o }) {
      return !e && !t ? 0 : !e && t ? vt * Math.min(n * 4, 1) : e && !t ? vt * Math.max(1 - n * 4, 0) : vt;
    }
    var vt = 150;
    function _c(e, t, n, o, r, s) {
      let { prevSnapshot: c, nextSnapshot: a } = $c(e, t, n);
      if (!c) return Pc(t, n, s);
      if (!a || o === 1) return _n(t, n, s);
      let u = t.southPanel || n.southPanel,
        { prevNorthFile: d, prevSouthFile: p, nextNorthFile: g, nextSouthFile: m } = Ht(t, n, o == 0 || r),
        { northStyle: h, southStyle: b } = Mc(c, a, o),
        { northTabs: D, southTabs: k } = Rc(c, a, d.name, p?.name, o);
      return {
        northContent: De(g),
        northPanel: {
          tabs: D,
          style: h,
          children: l.default.createElement(ve, {
            codeConfig: s,
            prevFile: d,
            nextFile: g,
            t: o,
            parentHeight: h.height || h.minHeight,
          }),
        },
        southContent: De(m),
        southPanel: u && {
          tabs: k,
          style: b,
          children: l.default.createElement(ve, {
            codeConfig: s,
            prevFile: p,
            nextFile: m,
            t: o,
            parentHeight: b?.height || b?.minHeight,
          }),
        },
      };
    }
    function Pc(e, t, n) {
      let o = e.northPanel,
        r = e.southPanel,
        { prevNorthFile: s, prevSouthFile: c, nextNorthFile: a, nextSouthFile: u } = Ht(e, t, !0);
      return {
        northContent: De(s),
        northPanel: {
          tabs: o.tabs.map(d => ({ title: d, active: d === o.active, style: {} })),
          style: { flexGrow: 1, overflow: 'hidden' },
          children: l.default.createElement(ve, { codeConfig: n, prevFile: s, nextFile: s, t: 0, parentHeight: '0' }),
        },
        southContent: De(c),
        southPanel: r && {
          tabs: r.tabs.map(d => ({ title: d, active: d === r.active, style: {} })),
          style: { flexGrow: 1, overflow: 'hidden' },
          children: l.default.createElement(ve, { codeConfig: n, prevFile: c, nextFile: c, t: 0, parentHeight: '0' }),
        },
      };
    }
    function _n(e, t, n) {
      var o;
      let r = t.northPanel,
        s = t.southPanel,
        { prevNorthFile: c, prevSouthFile: a, nextNorthFile: u, nextSouthFile: d } = Ht(e, t, !1);
      return (
        !s && r.active === ((o = e?.southPanel) === null || o === void 0 ? void 0 : o.active) && (u = d),
        {
          northContent: De(u),
          northPanel: {
            tabs: r.tabs.map(g => ({ title: g, active: g === r.active, style: {} })),
            style: { flexGrow: 1, overflow: 'hidden' },
            children: l.default.createElement(ve, { codeConfig: n, prevFile: u, nextFile: u, t: 1, parentHeight: '1' }),
          },
          southContent: De(d),
          southPanel: s && {
            tabs: s.tabs.map(g => ({ title: g, active: g === s.active, style: {} })),
            style: { flexGrow: 1, overflow: 'hidden' },
            children: l.default.createElement(ve, { codeConfig: n, prevFile: d, nextFile: d, t: 1, parentHeight: '1' }),
          },
        }
      );
    }
    function ve({ prevFile: e, nextFile: t, t: n, codeConfig: o, parentHeight: r }) {
      var s;
      let c = Object.assign(Object.assign({}, o?.htmlProps), {
        style: Object.assign({ height: '100%' }, (s = o?.htmlProps) === null || s === void 0 ? void 0 : s.style),
      });
      return l.default.createElement(
        eo,
        Object.assign(
          {
            progress: n,
            tween: { prev: e, next: t },
            config: Object.assign(Object.assign({}, o), { parentHeight: r }),
          },
          c,
        ),
      );
    }
    function De(e) {
      return e ? ds(e.code) : '';
    }
    function Ht(e, t, n) {
      var o, r;
      let s = e.northPanel.active,
        c = t.northPanel.active,
        a = (o = e.southPanel) === null || o === void 0 ? void 0 : o.active,
        u = (r = t.southPanel) === null || r === void 0 ? void 0 : r.active,
        d = e.files.find(w => w.name === s),
        p = t.files.find(w => w.name === c),
        g = a ? e.files.find(w => w.name === a) : null,
        m = u ? t.files.find(w => w.name === u) : null;
      return !a && s === u
        ? { prevNorthFile: p, nextNorthFile: p, prevSouthFile: d, nextSouthFile: m }
        : !u && c === a
        ? { prevNorthFile: d, nextNorthFile: d, prevSouthFile: g, nextSouthFile: p }
        : {
            prevNorthFile: s === c || n ? d : p,
            nextNorthFile: s === c ? p : n ? d : p,
            prevSouthFile: a === u ? g : n ? g || m : m || g,
            nextSouthFile: a === u ? m : n ? g || m : m || g,
          };
    }
    function Mc(e, t, n) {
      return e.southHeight === null && t.southHeight === null
        ? { northStyle: { minHeight: e.northHeight } }
        : e.southHeight !== null && t.southHeight === null && t.northKey !== e.southKey
        ? { northStyle: { minHeight: re(e.northHeight, t.northHeight, n) }, southStyle: { minHeight: e.southHeight } }
        : e.southHeight !== null && t.southHeight === null && e.southKey === t.northKey
        ? {
            northStyle: { minHeight: e.northHeight },
            southStyle: {
              position: 'relative',
              minHeight: re(e.southHeight, t.northHeight, n),
              transform: `translateY(${re(0, -(e.northHeight + e.titleBarHeight), n)}px)`,
            },
          }
        : e.southHeight === null && t.southHeight !== null && e.northKey !== t.southKey
        ? {
            northStyle: { minHeight: re(e.northHeight, t.northHeight, n) },
            southStyle: { position: 'relative', minHeight: t.southHeight },
          }
        : e.southHeight === null && t.southHeight !== null && e.northKey === t.southKey
        ? {
            northStyle: { minHeight: t.northHeight },
            southStyle: {
              position: 'relative',
              minHeight: re(e.northHeight, t.southHeight, n),
              transform: `translateY(${re(-(t.northHeight + t.titleBarHeight), 0, n)}px)`,
            },
          }
        : {
            northStyle: { minHeight: re(e.northHeight, t.northHeight, n) },
            southStyle: { minHeight: re(e.southHeight, t.southHeight, n) },
          };
    }
    function re(e, t, n) {
      return e + (t - e) * n;
    }
    function Rc(e, t, n, o, r) {
      return !e.southTabs && ye(o, e.northTabs)
        ? {
            northTabs: he(t.northTabs, t.southTabs, e.southTabs, e.northTabs, n, r),
            southTabs: he(t.southTabs, t.northTabs, e.northTabs, e.southTabs, o, r),
          }
        : !t.southTabs && ye(o, t.northTabs)
        ? {
            northTabs: he(t.southTabs, t.northTabs, e.northTabs, e.southTabs, n, r),
            southTabs: he(t.northTabs, t.southTabs, e.southTabs, e.northTabs, o, r),
          }
        : {
            northTabs: he(t.northTabs, t.southTabs, e.northTabs, e.southTabs, n, r),
            southTabs: he(t.southTabs, t.northTabs, e.southTabs, e.northTabs, o, r),
          };
    }
    function he(e, t, n, o, r, s) {
      let c = e
          ? Object.keys(e)
              .filter(d => ye(d, n) || !n)
              .map(d => {
                let p = n && n[d],
                  g = e[d],
                  m = p ? p.left + (g.left - p.left) * s : g.left,
                  h = p ? p.width + (g.width - p.width) * s : g.width;
                return {
                  active: d === r,
                  title: d,
                  style: { position: 'absolute', transform: `translateX(${m}px)`, width: h },
                };
              })
          : [],
        a = e
          ? Object.keys(e)
              .filter(d => n && !ye(d, n))
              .map(d => {
                let p = e[d];
                return {
                  active: d === r,
                  title: d,
                  style: { position: 'absolute', transform: `translateX(${p.left}px)`, opacity: s, width: p.width },
                };
              })
          : [];
      e &&
        Object.keys(e)
          .filter(d => ye(d, o))
          .map(d => {
            let p = o[d],
              m = e[d].left - p.left;
            return { active: d === r, title: d, style: { position: 'absolute', transform: `translateX(${m}px)` } };
          });
      let u = n
        ? Object.keys(n)
            .filter(d => !ye(d, e))
            .map(d => {
              let p = n[d];
              return {
                active: d === r,
                title: d,
                style: { position: 'absolute', opacity: 1 - s, transform: `translateX(${p.left}px)`, width: p.width },
              };
            })
        : [];
      return [...a, ...c, ...u];
    }
    function ye(e, t) {
      return t && e && e in t;
    }
    var Pn = typeof window < 'u' ? l.default.useLayoutEffect : l.default.useEffect;
    function $c(e, t, n) {
      let [{ prevSnapshot: o, nextSnapshot: r }, s] = l.default.useState({ prevSnapshot: null, nextSnapshot: null });
      return (
        Pn(() => {
          (o || r) && s({ prevSnapshot: null, nextSnapshot: null });
        }, [t, n]),
        Pn(() => {
          if (o) {
            if (!r) {
              let c = e.current;
              s(a =>
                Object.assign(Object.assign({}, a), {
                  nextSnapshot: Object.assign(Object.assign({}, Mn(c, n)), Rn(c, n)),
                }),
              );
            }
          } else {
            let c = e.current;
            s(a =>
              Object.assign(Object.assign({}, a), {
                prevSnapshot: Object.assign(Object.assign({}, Mn(c, t)), Rn(c, t)),
              }),
            );
          }
        }),
        { prevSnapshot: o, nextSnapshot: r }
      );
    }
    function Mn(e, t) {
      var n;
      let o = e.querySelector("[data-ch-panel='north']"),
        r = e.querySelector("[data-ch-panel='south']");
      return {
        titleBarHeight: e.querySelector('.ch-frame-title-bar').getBoundingClientRect().height,
        northHeight: o.getBoundingClientRect().height,
        northKey: t.northPanel.active,
        southHeight: r?.getBoundingClientRect().height || null,
        southKey: (n = t.southPanel) === null || n === void 0 ? void 0 : n.active,
      };
    }
    function Rn(e, t) {
      var n;
      let o = Array.from(e.querySelectorAll("[data-ch-tab='north']")),
        r = Array.from(e.querySelectorAll("[data-ch-tab='south']"));
      return {
        northTabs: $n(o, t.northPanel.active),
        southTabs: $n(r, (n = t.southPanel) === null || n === void 0 ? void 0 : n.active),
      };
    }
    function $n(e, t) {
      if (!e[0]) return null;
      let o = e[0].parentElement.getBoundingClientRect().left,
        r = {};
      return (
        e.forEach(s => {
          let c = s.getAttribute('title'),
            a = s.getBoundingClientRect();
          r[c] = { left: a.left - o, width: a.width, active: c === t };
        }),
        r
      );
    }
    function Wc({ files: e, theme: t, startingFileName: n }) {
      let [o, r] = l.default.useState(() => e.find(s => s.name === n));
      return l.default.createElement(
        'div',
        { className: 'ch-code-browser', style: { color: F(t, v.EditorForeground) } },
        l.default.createElement(zc, { files: e, theme: t, activeFile: o, setActiveFile: r }),
        l.default.createElement(qc, { file: o, theme: t }),
      );
    }
    function zc({ theme: e, files: t, activeFile: n, setActiveFile: o }) {
      let r = l.default.useMemo(() => Uc(t), [t]);
      return l.default.createElement(
        'div',
        {
          className: 'ch-code-browser-sidebar',
          style: {
            borderColor: F(e, v.SideBarBorder),
            background: F(e, v.SideBarBackground),
            color: F(e, v.SideBarForeground),
            ['--ch-list-selection-background']: F(e, v.ListActiveSelectionBackground),
            ['--ch-list-selection-foreground']: F(e, v.ListActiveSelectionForeground),
            ['--ch-hover-background']: F(e, v.ListHoverBackground),
            ['--ch-hover-foreground']: F(e, v.ListHoverForeground),
          },
        },
        l.default.createElement(co, { tree: r, activeFile: n, setActiveFile: o }),
      );
    }
    function co({ tree: e, activeFile: t, setActiveFile: n, level: o = 0 }) {
      return l.default.createElement(
        l.default.Fragment,
        null,
        e.map(r => l.default.createElement(Gc, { key: r.name, node: r, activeFile: t, setActiveFile: n, level: o })),
      );
    }
    function Gc({ node: e, activeFile: t, setActiveFile: n, level: o }) {
      let r = e.children && e.children.length > 0,
        s = e.codeFile === t;
      return r
        ? l.default.createElement(
            'div',
            null,
            l.default.createElement(
              'div',
              { className: 'ch-code-browser-sidebar-folder' },
              l.default.createElement('div', { style: { paddingLeft: o * 1.5 + 'ch' } }, e.name),
            ),
            l.default.createElement(co, { tree: e.children, activeFile: t, setActiveFile: n, level: o + 1 }),
          )
        : l.default.createElement(
            'div',
            null,
            l.default.createElement(
              'div',
              {
                className: 'ch-code-browser-sidebar-file',
                onClick: () => n(e.codeFile),
                style: s
                  ? { color: 'var(--ch-list-selection-foreground)', background: 'var(--ch-list-selection-background)' }
                  : {},
              },
              l.default.createElement('div', { style: { paddingLeft: o * 1.5 + 'ch' } }, e.name),
            ),
          );
    }
    function qc({ file: e, theme: t }) {
      return l.default.createElement(
        'div',
        {
          className: 'ch-code-browser-content',
          style: {
            background: F(t, v.CodeBackground),
            color: F(t, v.CodeForeground),
            ['--ch-selection-background']: F(t, v.SelectionBackground),
          },
        },
        e.code.lines.map((n, o) =>
          l.default.createElement(
            'div',
            { key: o },
            n.tokens.map((r, s) => l.default.createElement('span', Object.assign({ key: s }, r.props), r.content)),
          ),
        ),
      );
    }
    function Uc(e) {
      let t = [];
      for (let n of e) {
        let o = n.name.split('/'),
          r = t;
        for (let s = 0; s < o.length; s++) {
          let c = o[s],
            a = s === o.length - 1,
            u = r.findIndex(d => d.name === c);
          if (u === -1) {
            let d = { name: c, children: [], codeFile: void 0 };
            a && (d.codeFile = n), r.push(d), (r = d.children);
          } else r = r[u].children;
        }
      }
      return (t = lo(t)), t;
    }
    function lo(e) {
      for (let t of e) t.children = lo(t.children);
      return e.sort((t, n) => {
        let o = t.children && t.children.length > 0,
          r = n.children && n.children.length > 0;
        return (o && r) || (!o && !r) ? t.name.localeCompare(n.name) : o ? -1 : 1;
      });
    }
    function Xc({ style: e, step: t, theme: n, className: o }) {
      let [r, s] = l.default.useState(!1),
        [c, a] = l.default.useState(!0),
        u = l.default.useRef(null),
        d = t.files;
      return (
        l.default.useEffect(() => {
          u.current && !u.current.showModal && a(!1);
        }, []),
        c
          ? l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(Yc, {
                className: o,
                style: e,
                onClick: () => {
                  u.current.showModal(), document.body.classList.add('ch-no-scroll'), s(!0);
                },
              }),
              l.default.createElement(
                'dialog',
                {
                  ref: u,
                  className: 'ch-expand-dialog',
                  onClose: () => {
                    s(!1);
                  },
                  onClick: p => {
                    p.currentTarget === p.target && (u.current.close(), document.body.classList.remove('ch-no-scroll'));
                  },
                },
                l.default.createElement(Kc, {
                  onClick: () => {
                    u.current.close(), document.body.classList.remove('ch-no-scroll');
                  },
                }),
                r
                  ? l.default.createElement(
                      'div',
                      { className: 'ch-expand-dialog-content', style: { borderColor: F(n, v.SideBarBorder) } },
                      l.default.createElement(Wc, { files: d, theme: n, startingFileName: t.northPanel.active }),
                    )
                  : void 0,
              ),
            )
          : null
      );
    }
    function Yc({ onClick: e, style: t, className: n }) {
      return l.default.createElement(
        'svg',
        {
          style: t,
          onClick: e,
          className: n,
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          role: 'button',
        },
        l.default.createElement('title', null, 'Expand'),
        l.default.createElement('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
          d: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
        }),
      );
    }
    function Kc({ onClick: e }) {
      return l.default.createElement(
        'svg',
        {
          onClick: e,
          className: 'ch-expand-close',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          role: 'button',
        },
        l.default.createElement('title', null, 'Close'),
        l.default.createElement('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
          d: 'M6 18L18 6M6 6l12 12',
        }),
      );
    }
    var Zc = {
      files: [{ code: { lines: [], lang: 'js' }, focus: '', name: '' }],
      northPanel: { active: '', tabs: [''], heightRatio: 1 },
    };
    function Jc(e) {
      var { prev: t = Zc, next: n, t: o, backward: r, codeConfig: s, frameProps: c = {} } = e,
        a = T(e, ['prev', 'next', 't', 'backward', 'codeConfig', 'frameProps']);
      let u = l.default.createRef(),
        { showCopyButton: d, showExpandButton: p } = s,
        g = T(s, ['showCopyButton', 'showExpandButton']),
        { northPanel: m, southPanel: h, northContent: b, southContent: D } = _c(u, t, n || t, o, r, g),
        [k, x] = l.default.useState(void 0);
      Zn(() => {
        var M;
        let K = (M = u.current) === null || M === void 0 ? void 0 : M.getBoundingClientRect().height;
        x(K);
      }, []);
      let B = Object.assign(Object.assign(Object.assign({}, c), a), {
        style: Object.assign(Object.assign({}, c?.style), a?.style),
      });
      k && ((B.style.height = k), (B.style.maxHeight = k));
      let w = l.default.createElement(
          l.default.Fragment,
          null,
          d ? l.default.createElement(xt, { className: 'ch-editor-button', content: b }) : void 0,
          p ? l.default.createElement(Xc, { className: 'ch-editor-button', step: n || t, theme: s.theme }) : void 0,
        ),
        L = d ? l.default.createElement(xt, { className: 'ch-editor-button', content: D }) : void 0,
        P = l.default.createElement(Nc, { prev: t.terminal, next: (n || t).terminal, t: o, backward: r });
      return l.default.createElement(
        Bc,
        Object.assign({ ref: u }, B, {
          northPanel: m,
          southPanel: h,
          terminalPanel: P,
          theme: s.theme,
          northButton: w,
          southButton: L,
        }),
      );
    }
    var Vc = { stiffness: 120, damping: 24, mass: 0.2, decimals: 3 };
    function io(e) {
      var { northPanel: t, southPanel: n, files: o, terminal: r, springConfig: s } = e,
        c = T(e, ['northPanel', 'southPanel', 'files', 'terminal', 'springConfig']);
      let a = l.default.useMemo(() => ({ northPanel: t, southPanel: n, files: o, terminal: r }), [t, n, o, r]),
        { prev: u, next: d, t: p } = Qc(a, s);
      return l.default.createElement(Jc, Object.assign({ t: p, backward: !1, prev: u, next: d }, c));
    }
    function Qc(e, t = Vc) {
      let [{ target: n, steps: o, index: r }, s] = l.default.useState({ target: 2, steps: [e, e, e], index: 0 });
      l.default.useEffect(() => {
        o[o.length - 1] != e && s(p => el(p, e, c));
      }, [e]);
      let [c] = Lt(n, t),
        a = c - r;
      return a <= 1 ? { prev: o[0], next: o[1], t: a } : { prev: o[1], next: o[2], t: a - 1 };
    }
    function el(e, t, n) {
      let { steps: o, target: r, index: s } = e,
        c = o.slice();
      return n - s < 1
        ? ((c[2] = t), Object.assign(Object.assign({}, e), { steps: c }))
        : ((c[0] = o[1]),
          (c[1] = o[2]),
          (c[2] = t),
          Object.assign(Object.assign({}, e), { steps: c, target: r + 1, index: s + 1 }));
    }
    function ao(e) {
      let [t, n] = l.default.useState(e);
      function o(r) {
        let s = Ce(t, r, null);
        n(Object.assign(Object.assign({}, t), s));
      }
      return l.default.createElement(Ie, Object.assign({}, t, { onTabClick: o }));
    }
    function tl(e) {
      var t, n, o, r, s, c, a;
      let { lineNumbers: u, showCopyButton: d, showExpandButton: p, minZoom: g, maxZoom: m } = e,
        h = T(e, ['lineNumbers', 'showCopyButton', 'showExpandButton', 'minZoom', 'maxZoom']),
        b = Object.assign(Object.assign({}, e.codeConfig), {
          maxZoom: m ?? ((t = e.codeConfig) === null || t === void 0 ? void 0 : t.maxZoom),
          minZoom: g ?? ((n = e.codeConfig) === null || n === void 0 ? void 0 : n.minZoom),
          horizontalCenter:
            (r = (o = e.codeConfig) === null || o === void 0 ? void 0 : o.horizontalCenter) !== null && r !== void 0
              ? r
              : e.horizontalCenter,
          lineNumbers: u ?? ((s = e.codeConfig) === null || s === void 0 ? void 0 : s.lineNumbers),
          showCopyButton: d ?? ((c = e.codeConfig) === null || c === void 0 ? void 0 : c.showCopyButton),
          showExpandButton: p ?? ((a = e.codeConfig) === null || a === void 0 ? void 0 : a.showExpandButton),
        });
      return Object.assign(Object.assign({}, h), { codeConfig: b });
    }
    function Ie(e) {
      var { onTabClick: t } = e,
        n = T(e, ['onTabClick']);
      let o = tl(n),
        { className: r, style: s, codeConfig: c } = o,
        a = T(o, ['className', 'style', 'codeConfig']);
      if (!n.southPanel && n.files.length === 1 && !n.files[0].name)
        return l.default.createElement(
          'div',
          { className: `ch-codeblock not-prose ${r || ''}`, style: s },
          l.default.createElement(Fc, { className: 'ch-code', config: c, step: a.files[0] }),
        );
      {
        let u = Object.assign(Object.assign({}, a?.frameProps), { onTabClick: t });
        return l.default.createElement(
          'div',
          { className: `ch-codegroup not-prose ${r || ''}`, style: s },
          l.default.createElement(io, Object.assign({}, a, { frameProps: u, codeConfig: c })),
        );
      }
    }
    function Ce(e, t, n) {
      let o = t || e.northPanel.active,
        r = e.files.map(a =>
          a.name === o ? Object.assign(Object.assign({}, a), { focus: n === null ? a.focus : n }) : a,
        ),
        s = Object.assign({}, e.northPanel),
        c = e.southPanel && Object.assign({}, e.southPanel);
      return (
        e.northPanel.tabs.includes(o) ? (s.active = o) : c && (c.active = o), { files: r, northPanel: s, southPanel: c }
      );
    }
    var uo = l.default.createContext({ props: null, setFocus: () => {} });
    function po(e) {
      var { children: t } = e,
        n = T(e, ['children']);
      let [o, r] = l.default.useState(n),
        s = () => r(n),
        c = ({ fileName: u, focus: d, id: p }) => {
          let g = Ce(o, u, d);
          r(Object.assign(Object.assign(Object.assign({}, o), g), { selectedId: p }));
        },
        a = T(o, ['selectedId']);
      return l.default.createElement(
        'section',
        null,
        l.default.createElement(
          uo.Provider,
          { value: { props: a, setFocus: c } },
          l.default.createElement(yo, { onActivation: c, onReset: s }, t),
        ),
      );
    }
    function fo(e) {
      let { props: t, setFocus: n } = l.default.useContext(uo),
        o = r => {
          n({ fileName: r, focus: null, id: '' });
        };
      return l.default.createElement(Ie, Object.assign({}, e, t, { onTabClick: o }));
    }
    function go({ focus: e, file: t, children: n, id: o }) {
      let { activate: r, reset: s, activatedId: c } = l.default.useContext(ho),
        a = c === o;
      return l.default.createElement('span', {
        className: 'ch-section-link',
        'data-active': a,
        children: n,
        onMouseOver: () => r({ fileName: t, focus: e, id: o }),
        onMouseOut: s,
      });
    }
    var ho = l.default.createContext({ activatedId: void 0, activate: () => {}, reset: () => {} });
    function yo({ onActivation: e, onReset: t, children: n }) {
      let [o, r] = l.default.useState(void 0),
        s = l.default.useCallback(
          a => {
            r(a.id), e(a);
          },
          [e],
        ),
        c = l.default.useCallback(() => {
          r(void 0), t();
        }, [t]);
      return l.default.createElement(ho.Provider, { value: { activate: s, reset: c, activatedId: o } }, n);
    }
    function nl() {
      let e = Q('ch-browser');
      return l.default.createElement(
        'svg',
        {
          fill: 'currentColor',
          preserveAspectRatio: 'xMidYMid meet',
          height: '1em',
          viewBox: '13 10 14 23',
          className: e('button', 'back-button'),
        },
        l.default.createElement(
          'g',
          null,
          l.default.createElement('path', {
            d: 'm26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z',
          }),
        ),
      );
    }
    function ol() {
      let e = Q('ch-browser');
      return l.default.createElement(
        'svg',
        {
          fill: 'currentColor',
          preserveAspectRatio: 'xMidYMid meet',
          height: '1em',
          viewBox: '13 10 14 23',
          className: e('button', 'forward-button'),
        },
        l.default.createElement(
          'g',
          null,
          l.default.createElement('path', {
            d: 'm26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z',
          }),
        ),
      );
    }
    function rl({ href: e, style: t }) {
      let n = Q('ch-browser');
      return l.default.createElement(
        'a',
        {
          className: n('button', 'open-button'),
          title: 'Open in new tab',
          href: e,
          style: t,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        l.default.createElement(
          'svg',
          {
            stroke: 'currentColor',
            fill: 'currentColor',
            strokeWidth: '0',
            viewBox: '3 3 18 18',
            height: '1em',
            width: '1em',
            className: n('open-icon'),
            xmlns: 'http://www.w3.org/2000/svg',
          },
          l.default.createElement('path', {
            d: 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
          }),
        ),
      );
    }
    function sl({ url: e, linkUrl: t, theme: n }) {
      let o = F(n, v.InputBorder);
      return l.default.createElement(
        l.default.Fragment,
        null,
        l.default.createElement(Nt, null),
        l.default.createElement(nl, null),
        l.default.createElement(ol, null),
        l.default.createElement('input', {
          value: e || '',
          readOnly: !0,
          style: {
            background: F(n, v.InputBackground),
            color: F(n, v.InputForeground),
            border: o ? `1px solid ${o}` : void 0,
          },
        }),
        l.default.createElement(rl, { href: t, style: { color: F(n, v.EditorForeground) } }),
      );
    }
    function cl(e) {
      return l.default.useMemo(
        () =>
          e
            ? e.map(t => {
                let { displayUrl: n, loadUrl: o } = ll(t.url, t.loadUrl, t.prependOrigin);
                return { zoom: t.zoom || 1, displayUrl: n, loadUrl: o, children: t.children };
              })
            : [{ zoom: 1 }],
        [e],
      );
    }
    function ll(e, t, n) {
      let o = typeof window < 'u' ? window.origin : '',
        r = e && n === !0 ? o + e : e;
      return { displayUrl: r, loadUrl: t || r };
    }
    var il = l.default.forwardRef(al);
    function al(e, t) {
      var { progress: n = 0, backward: o = !1, steps: r, transition: s = 'none', classes: c, theme: a } = e,
        u = T(e, ['progress', 'backward', 'steps', 'transition', 'classes', 'theme']);
      let d = Q('ch-mini-browser', c),
        p = cl(r),
        g = Math.round(n),
        { zoom: m, displayUrl: h, loadUrl: b, children: D } = p[g];
      return l.default.createElement(
        wc,
        Object.assign({}, u, {
          zoom: m,
          className: `${d('')} ${u.className || ''}`,
          style: Object.assign(Object.assign({}, ul({ progress: n, transition: s })), u.style),
          classes: c,
          titleBar: l.default.createElement(sl, { url: h, linkUrl: b, theme: a }),
          theme: a,
        }),
        D || l.default.createElement('iframe', { ref: t, src: b }),
      );
    }
    function ul({ progress: e, transition: t }) {
      if (t === 'slide') {
        let o = e - Math.floor(e),
          r = o <= 0.5 ? -50 * o : 50 - 50 * o,
          s = Math.abs(o - 0.5) * 2;
        return { transform: `translateX(${r}px)`, opacity: s * s };
      }
      return {};
    }
    function mo(e) {
      var { url: t, loadUrl: n, prependOrigin: o, children: r, zoom: s } = e,
        c = T(e, ['url', 'loadUrl', 'prependOrigin', 'children', 'zoom']);
      let [a, u] = dl({ url: t, loadUrl: n, prependOrigin: o, children: r, zoom: s });
      return l.default.createElement(il, Object.assign({}, c, { steps: a, progress: u }));
    }
    function dl({ url: e, loadUrl: t, prependOrigin: n, children: o, zoom: r }) {
      let [s, c] = l.default.useState({
        target: 0,
        steps: [{ url: e, loadUrl: t, prependOrigin: n, children: o, zoom: r }],
      });
      l.default.useEffect(() => {
        let u = s.steps[s.steps.length - 1];
        (u.url !== e || u.loadUrl !== t || u.prependOrigin !== n || u.children !== o) &&
          c(d => ({
            target: d.target + 1,
            steps: [...d.steps, { url: e, loadUrl: t, prependOrigin: n, children: o, zoom: r }],
          }));
      }, [e, t, n, o, r]);
      let [a] = Lt(s.target, { stiffness: 100, decimals: 3 });
      return [s.steps, a];
    }
    var Ze =
        typeof globalThis < 'u'
          ? globalThis
          : typeof window < 'u'
          ? window
          : typeof global < 'u'
          ? global
          : typeof self < 'u'
          ? self
          : {},
      _t = {};
    Object.defineProperty(_t, '__esModule', { value: !0 });
    function pl(e) {
      return e === 'vue-cli'
        ? 'src/main.js'
        : e === 'angular-cli'
        ? 'src/main.ts'
        : e === 'create-react-app-typescript'
        ? 'src/index.tsx'
        : e === 'parcel'
        ? 'index.html'
        : e === 'gatsby'
        ? 'src/pages/index.js'
        : e === 'nuxt' || e === 'next' || e === 'apollo' || e === 'reason' || e === 'sapper'
        ? 'package.json'
        : e === 'nest'
        ? 'src/main.ts'
        : e === 'static'
        ? 'index.html'
        : 'src/index.js';
    }
    _t.getMainFile = pl;
    var Wn = 'sandbox.config.json';
    function fl(e, t) {
      var n = t[Wn] || t['/' + Wn];
      if (n)
        try {
          var o = JSON.parse(n.content);
          if (o.template) return o.template;
        } catch {}
      var r = e.dependencies,
        s = r === void 0 ? {} : r,
        c = e.devDependencies,
        a = c === void 0 ? {} : c,
        u = Object.keys(s).concat(Object.keys(a)),
        d = ['nuxt', 'nuxt-edge'];
      if (
        u.some(function (h) {
          return d.indexOf(h) > -1;
        })
      )
        return 'nuxt';
      if (u.indexOf('next') > -1) return 'next';
      var p = [
        'apollo-server',
        'apollo-server-express',
        'apollo-server-hapi',
        'apollo-server-koa',
        'apollo-server-lambda',
        'apollo-server-micro',
      ];
      if (
        u.some(function (h) {
          return p.indexOf(h) > -1;
        })
      )
        return 'apollo';
      if (u.indexOf('ember-cli') > -1) return 'ember';
      if (u.indexOf('sapper') > -1) return 'sapper';
      var g = Object.keys(t);
      if (
        g.some(function (h) {
          return h.endsWith('.vue');
        })
      )
        return 'vue-cli';
      if (
        g.some(function (h) {
          return h.endsWith('.re');
        })
      )
        return 'reason';
      if (u.indexOf('gatsby') > -1) return 'gatsby';
      if (u.indexOf('parcel-bundler') > -1) return 'parcel';
      if (u.indexOf('react-scripts') > -1) return 'create-react-app';
      if (u.indexOf('react-scripts-ts') > -1) return 'create-react-app-typescript';
      if (u.indexOf('@angular/core') > -1) return 'angular-cli';
      if (u.indexOf('preact-cli') > -1) return 'preact-cli';
      if (u.indexOf('svelte') > -1) return 'svelte';
      if (u.indexOf('vue') > -1) return 'vue-cli';
      var m = ['@dojo/core', '@dojo/framework'];
      if (
        u.some(function (h) {
          return m.indexOf(h) > -1;
        })
      )
        return '@dojo/cli-create-app';
      if (u.indexOf('cx') > -1) return 'cxjs';
      if (u.indexOf('@nestjs/core') > -1 || u.indexOf('@nestjs/common') > -1) return 'nest';
    }
    var gl = (_t.getTemplate = fl),
      St = { exports: {} };
    (function (e, t) {
      var n = 200,
        o = '__lodash_hash_undefined__',
        r = 1,
        s = 2,
        c = 9007199254740991,
        a = '[object Arguments]',
        u = '[object Array]',
        d = '[object AsyncFunction]',
        p = '[object Boolean]',
        g = '[object Date]',
        m = '[object Error]',
        h = '[object Function]',
        b = '[object GeneratorFunction]',
        D = '[object Map]',
        k = '[object Number]',
        x = '[object Null]',
        B = '[object Object]',
        w = '[object Promise]',
        L = '[object Proxy]',
        P = '[object RegExp]',
        M = '[object Set]',
        K = '[object String]',
        rt = '[object Symbol]',
        st = '[object Undefined]',
        Fe = '[object WeakMap]',
        Ne = '[object ArrayBuffer]',
        fe = '[object DataView]',
        ct = '[object Float32Array]',
        He = '[object Float64Array]',
        lt = '[object Int8Array]',
        it = '[object Int16Array]',
        Ao = '[object Int32Array]',
        Io = '[object Uint8Array]',
        jo = '[object Uint8ClampedArray]',
        Lo = '[object Uint16Array]',
        No = '[object Uint32Array]',
        Ho = /[\\^$.*+?()[\]{}|]/g,
        _o = /^\[object .+?Constructor\]$/,
        Po = /^(?:0|[1-9]\d*)$/,
        S = {};
      (S[ct] = S[He] = S[lt] = S[it] = S[Ao] = S[Io] = S[jo] = S[Lo] = S[No] = !0),
        (S[a] =
          S[u] =
          S[Ne] =
          S[p] =
          S[fe] =
          S[g] =
          S[m] =
          S[h] =
          S[D] =
          S[k] =
          S[B] =
          S[P] =
          S[M] =
          S[K] =
          S[Fe] =
            !1);
      var Mt = typeof Ze == 'object' && Ze && Ze.Object === Object && Ze,
        Mo = typeof self == 'object' && self && self.Object === Object && self,
        Z = Mt || Mo || Function('return this')(),
        Rt = t && !t.nodeType && t,
        $t = Rt && !0 && e && !e.nodeType && e,
        Wt = $t && $t.exports === Rt,
        at = Wt && Mt.process,
        zt = (function () {
          try {
            return at && at.binding && at.binding('util');
          } catch {}
        })(),
        Gt = zt && zt.isTypedArray;
      function Ro(i, f) {
        for (var y = -1, C = i == null ? 0 : i.length, O = 0, E = []; ++y < C; ) {
          var I = i[y];
          f(I, y, i) && (E[O++] = I);
        }
        return E;
      }
      function $o(i, f) {
        for (var y = -1, C = f.length, O = i.length; ++y < C; ) i[O + y] = f[y];
        return i;
      }
      function Wo(i, f) {
        for (var y = -1, C = i == null ? 0 : i.length; ++y < C; ) if (f(i[y], y, i)) return !0;
        return !1;
      }
      function zo(i, f) {
        for (var y = -1, C = Array(i); ++y < i; ) C[y] = f(y);
        return C;
      }
      function Go(i) {
        return function (f) {
          return i(f);
        };
      }
      function qo(i, f) {
        return i.has(f);
      }
      function Uo(i, f) {
        return i?.[f];
      }
      function Xo(i) {
        var f = -1,
          y = Array(i.size);
        return (
          i.forEach(function (C, O) {
            y[++f] = [O, C];
          }),
          y
        );
      }
      function Yo(i, f) {
        return function (y) {
          return i(f(y));
        };
      }
      function Ko(i) {
        var f = -1,
          y = Array(i.size);
        return (
          i.forEach(function (C) {
            y[++f] = C;
          }),
          y
        );
      }
      var Zo = Array.prototype,
        Jo = Function.prototype,
        _e = Object.prototype,
        ut = Z['__core-js_shared__'],
        qt = Jo.toString,
        X = _e.hasOwnProperty,
        Ut = (function () {
          var i = /[^.]+$/.exec((ut && ut.keys && ut.keys.IE_PROTO) || '');
          return i ? 'Symbol(src)_1.' + i : '';
        })(),
        Xt = _e.toString,
        Vo = RegExp(
          '^' +
            qt
              .call(X)
              .replace(Ho, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        ),
        Yt = Wt ? Z.Buffer : void 0,
        Pe = Z.Symbol,
        Kt = Z.Uint8Array,
        Zt = _e.propertyIsEnumerable,
        Qo = Zo.splice,
        ce = Pe ? Pe.toStringTag : void 0,
        Jt = Object.getOwnPropertySymbols,
        er = Yt ? Yt.isBuffer : void 0,
        tr = Yo(Object.keys, Object),
        dt = ge(Z, 'DataView'),
        ke = ge(Z, 'Map'),
        pt = ge(Z, 'Promise'),
        ft = ge(Z, 'Set'),
        gt = ge(Z, 'WeakMap'),
        Ee = ge(Object, 'create'),
        nr = ae(dt),
        or = ae(ke),
        rr = ae(pt),
        sr = ae(ft),
        cr = ae(gt),
        Vt = Pe ? Pe.prototype : void 0,
        ht = Vt ? Vt.valueOf : void 0;
      function le(i) {
        var f = -1,
          y = i == null ? 0 : i.length;
        for (this.clear(); ++f < y; ) {
          var C = i[f];
          this.set(C[0], C[1]);
        }
      }
      function lr() {
        (this.__data__ = Ee ? Ee(null) : {}), (this.size = 0);
      }
      function ir(i) {
        var f = this.has(i) && delete this.__data__[i];
        return (this.size -= f ? 1 : 0), f;
      }
      function ar(i) {
        var f = this.__data__;
        if (Ee) {
          var y = f[i];
          return y === o ? void 0 : y;
        }
        return X.call(f, i) ? f[i] : void 0;
      }
      function ur(i) {
        var f = this.__data__;
        return Ee ? f[i] !== void 0 : X.call(f, i);
      }
      function dr(i, f) {
        var y = this.__data__;
        return (this.size += this.has(i) ? 0 : 1), (y[i] = Ee && f === void 0 ? o : f), this;
      }
      (le.prototype.clear = lr),
        (le.prototype.delete = ir),
        (le.prototype.get = ar),
        (le.prototype.has = ur),
        (le.prototype.set = dr);
      function J(i) {
        var f = -1,
          y = i == null ? 0 : i.length;
        for (this.clear(); ++f < y; ) {
          var C = i[f];
          this.set(C[0], C[1]);
        }
      }
      function pr() {
        (this.__data__ = []), (this.size = 0);
      }
      function fr(i) {
        var f = this.__data__,
          y = Re(f, i);
        if (y < 0) return !1;
        var C = f.length - 1;
        return y == C ? f.pop() : Qo.call(f, y, 1), --this.size, !0;
      }
      function gr(i) {
        var f = this.__data__,
          y = Re(f, i);
        return y < 0 ? void 0 : f[y][1];
      }
      function hr(i) {
        return Re(this.__data__, i) > -1;
      }
      function yr(i, f) {
        var y = this.__data__,
          C = Re(y, i);
        return C < 0 ? (++this.size, y.push([i, f])) : (y[C][1] = f), this;
      }
      (J.prototype.clear = pr),
        (J.prototype.delete = fr),
        (J.prototype.get = gr),
        (J.prototype.has = hr),
        (J.prototype.set = yr);
      function ie(i) {
        var f = -1,
          y = i == null ? 0 : i.length;
        for (this.clear(); ++f < y; ) {
          var C = i[f];
          this.set(C[0], C[1]);
        }
      }
      function mr() {
        (this.size = 0), (this.__data__ = { hash: new le(), map: new (ke || J)(), string: new le() });
      }
      function br(i) {
        var f = $e(this, i).delete(i);
        return (this.size -= f ? 1 : 0), f;
      }
      function vr(i) {
        return $e(this, i).get(i);
      }
      function Dr(i) {
        return $e(this, i).has(i);
      }
      function Cr(i, f) {
        var y = $e(this, i),
          C = y.size;
        return y.set(i, f), (this.size += y.size == C ? 0 : 1), this;
      }
      (ie.prototype.clear = mr),
        (ie.prototype.delete = br),
        (ie.prototype.get = vr),
        (ie.prototype.has = Dr),
        (ie.prototype.set = Cr);
      function Me(i) {
        var f = -1,
          y = i == null ? 0 : i.length;
        for (this.__data__ = new ie(); ++f < y; ) this.add(i[f]);
      }
      function Fr(i) {
        return this.__data__.set(i, o), this;
      }
      function kr(i) {
        return this.__data__.has(i);
      }
      (Me.prototype.add = Me.prototype.push = Fr), (Me.prototype.has = kr);
      function ee(i) {
        var f = (this.__data__ = new J(i));
        this.size = f.size;
      }
      function Er() {
        (this.__data__ = new J()), (this.size = 0);
      }
      function xr(i) {
        var f = this.__data__,
          y = f.delete(i);
        return (this.size = f.size), y;
      }
      function wr(i) {
        return this.__data__.get(i);
      }
      function Br(i) {
        return this.__data__.has(i);
      }
      function Tr(i, f) {
        var y = this.__data__;
        if (y instanceof J) {
          var C = y.__data__;
          if (!ke || C.length < n - 1) return C.push([i, f]), (this.size = ++y.size), this;
          y = this.__data__ = new ie(C);
        }
        return y.set(i, f), (this.size = y.size), this;
      }
      (ee.prototype.clear = Er),
        (ee.prototype.delete = xr),
        (ee.prototype.get = wr),
        (ee.prototype.has = Br),
        (ee.prototype.set = Tr);
      function Sr(i, f) {
        var y = We(i),
          C = !y && Gr(i),
          O = !y && !C && yt(i),
          E = !y && !C && !O && ln(i),
          I = y || C || O || E,
          H = I ? zo(i.length, String) : [],
          R = H.length;
        for (var A in i)
          (f || X.call(i, A)) &&
            !(
              I &&
              (A == 'length' ||
                (O && (A == 'offset' || A == 'parent')) ||
                (E && (A == 'buffer' || A == 'byteLength' || A == 'byteOffset')) ||
                Mr(A, R))
            ) &&
            H.push(A);
        return H;
      }
      function Re(i, f) {
        for (var y = i.length; y--; ) if (on(i[y][0], f)) return y;
        return -1;
      }
      function Or(i, f, y) {
        var C = f(i);
        return We(i) ? C : $o(C, y(i));
      }
      function xe(i) {
        return i == null ? (i === void 0 ? st : x) : ce && ce in Object(i) ? _r(i) : zr(i);
      }
      function Qt(i) {
        return we(i) && xe(i) == a;
      }
      function en(i, f, y, C, O) {
        return i === f ? !0 : i == null || f == null || (!we(i) && !we(f)) ? i !== i && f !== f : Ar(i, f, y, C, en, O);
      }
      function Ar(i, f, y, C, O, E) {
        var I = We(i),
          H = We(f),
          R = I ? u : te(i),
          A = H ? u : te(f);
        (R = R == a ? B : R), (A = A == a ? B : A);
        var z = R == B,
          U = A == B,
          $ = R == A;
        if ($ && yt(i)) {
          if (!yt(f)) return !1;
          (I = !0), (z = !1);
        }
        if ($ && !z) return E || (E = new ee()), I || ln(i) ? tn(i, f, y, C, O, E) : Nr(i, f, R, y, C, O, E);
        if (!(y & r)) {
          var G = z && X.call(i, '__wrapped__'),
            q = U && X.call(f, '__wrapped__');
          if (G || q) {
            var ne = G ? i.value() : i,
              V = q ? f.value() : f;
            return E || (E = new ee()), O(ne, V, y, C, E);
          }
        }
        return $ ? (E || (E = new ee()), Hr(i, f, y, C, O, E)) : !1;
      }
      function Ir(i) {
        if (!cn(i) || $r(i)) return !1;
        var f = rn(i) ? Vo : _o;
        return f.test(ae(i));
      }
      function jr(i) {
        return we(i) && sn(i.length) && !!S[xe(i)];
      }
      function Lr(i) {
        if (!Wr(i)) return tr(i);
        var f = [];
        for (var y in Object(i)) X.call(i, y) && y != 'constructor' && f.push(y);
        return f;
      }
      function tn(i, f, y, C, O, E) {
        var I = y & r,
          H = i.length,
          R = f.length;
        if (H != R && !(I && R > H)) return !1;
        var A = E.get(i);
        if (A && E.get(f)) return A == f;
        var z = -1,
          U = !0,
          $ = y & s ? new Me() : void 0;
        for (E.set(i, f), E.set(f, i); ++z < H; ) {
          var G = i[z],
            q = f[z];
          if (C) var ne = I ? C(q, G, z, f, i, E) : C(G, q, z, i, f, E);
          if (ne !== void 0) {
            if (ne) continue;
            U = !1;
            break;
          }
          if ($) {
            if (
              !Wo(f, function (V, ue) {
                if (!qo($, ue) && (G === V || O(G, V, y, C, E))) return $.push(ue);
              })
            ) {
              U = !1;
              break;
            }
          } else if (!(G === q || O(G, q, y, C, E))) {
            U = !1;
            break;
          }
        }
        return E.delete(i), E.delete(f), U;
      }
      function Nr(i, f, y, C, O, E, I) {
        switch (y) {
          case fe:
            if (i.byteLength != f.byteLength || i.byteOffset != f.byteOffset) return !1;
            (i = i.buffer), (f = f.buffer);
          case Ne:
            return !(i.byteLength != f.byteLength || !E(new Kt(i), new Kt(f)));
          case p:
          case g:
          case k:
            return on(+i, +f);
          case m:
            return i.name == f.name && i.message == f.message;
          case P:
          case K:
            return i == f + '';
          case D:
            var H = Xo;
          case M:
            var R = C & r;
            if ((H || (H = Ko), i.size != f.size && !R)) return !1;
            var A = I.get(i);
            if (A) return A == f;
            (C |= s), I.set(i, f);
            var z = tn(H(i), H(f), C, O, E, I);
            return I.delete(i), z;
          case rt:
            if (ht) return ht.call(i) == ht.call(f);
        }
        return !1;
      }
      function Hr(i, f, y, C, O, E) {
        var I = y & r,
          H = nn(i),
          R = H.length,
          A = nn(f),
          z = A.length;
        if (R != z && !I) return !1;
        for (var U = R; U--; ) {
          var $ = H[U];
          if (!(I ? $ in f : X.call(f, $))) return !1;
        }
        var G = E.get(i);
        if (G && E.get(f)) return G == f;
        var q = !0;
        E.set(i, f), E.set(f, i);
        for (var ne = I; ++U < R; ) {
          $ = H[U];
          var V = i[$],
            ue = f[$];
          if (C) var an = I ? C(ue, V, $, f, i, E) : C(V, ue, $, i, f, E);
          if (!(an === void 0 ? V === ue || O(V, ue, y, C, E) : an)) {
            q = !1;
            break;
          }
          ne || (ne = $ == 'constructor');
        }
        if (q && !ne) {
          var ze = i.constructor,
            Ge = f.constructor;
          ze != Ge &&
            'constructor' in i &&
            'constructor' in f &&
            !(typeof ze == 'function' && ze instanceof ze && typeof Ge == 'function' && Ge instanceof Ge) &&
            (q = !1);
        }
        return E.delete(i), E.delete(f), q;
      }
      function nn(i) {
        return Or(i, Xr, Pr);
      }
      function $e(i, f) {
        var y = i.__data__;
        return Rr(f) ? y[typeof f == 'string' ? 'string' : 'hash'] : y.map;
      }
      function ge(i, f) {
        var y = Uo(i, f);
        return Ir(y) ? y : void 0;
      }
      function _r(i) {
        var f = X.call(i, ce),
          y = i[ce];
        try {
          i[ce] = void 0;
          var C = !0;
        } catch {}
        var O = Xt.call(i);
        return C && (f ? (i[ce] = y) : delete i[ce]), O;
      }
      var Pr = Jt
          ? function (i) {
              return i == null
                ? []
                : ((i = Object(i)),
                  Ro(Jt(i), function (f) {
                    return Zt.call(i, f);
                  }));
            }
          : Yr,
        te = xe;
      ((dt && te(new dt(new ArrayBuffer(1))) != fe) ||
        (ke && te(new ke()) != D) ||
        (pt && te(pt.resolve()) != w) ||
        (ft && te(new ft()) != M) ||
        (gt && te(new gt()) != Fe)) &&
        (te = function (i) {
          var f = xe(i),
            y = f == B ? i.constructor : void 0,
            C = y ? ae(y) : '';
          if (C)
            switch (C) {
              case nr:
                return fe;
              case or:
                return D;
              case rr:
                return w;
              case sr:
                return M;
              case cr:
                return Fe;
            }
          return f;
        });
      function Mr(i, f) {
        return (f = f ?? c), !!f && (typeof i == 'number' || Po.test(i)) && i > -1 && i % 1 == 0 && i < f;
      }
      function Rr(i) {
        var f = typeof i;
        return f == 'string' || f == 'number' || f == 'symbol' || f == 'boolean' ? i !== '__proto__' : i === null;
      }
      function $r(i) {
        return !!Ut && Ut in i;
      }
      function Wr(i) {
        var f = i && i.constructor,
          y = (typeof f == 'function' && f.prototype) || _e;
        return i === y;
      }
      function zr(i) {
        return Xt.call(i);
      }
      function ae(i) {
        if (i != null) {
          try {
            return qt.call(i);
          } catch {}
          try {
            return i + '';
          } catch {}
        }
        return '';
      }
      function on(i, f) {
        return i === f || (i !== i && f !== f);
      }
      var Gr = Qt(
          (function () {
            return arguments;
          })(),
        )
          ? Qt
          : function (i) {
              return we(i) && X.call(i, 'callee') && !Zt.call(i, 'callee');
            },
        We = Array.isArray;
      function qr(i) {
        return i != null && sn(i.length) && !rn(i);
      }
      var yt = er || Kr;
      function Ur(i, f) {
        return en(i, f);
      }
      function rn(i) {
        if (!cn(i)) return !1;
        var f = xe(i);
        return f == h || f == b || f == d || f == L;
      }
      function sn(i) {
        return typeof i == 'number' && i > -1 && i % 1 == 0 && i <= c;
      }
      function cn(i) {
        var f = typeof i;
        return i != null && (f == 'object' || f == 'function');
      }
      function we(i) {
        return i != null && typeof i == 'object';
      }
      var ln = Gt ? Go(Gt) : jr;
      function Xr(i) {
        return qr(i) ? Sr(i) : Lr(i);
      }
      function Yr() {
        return [];
      }
      function Kr() {
        return !1;
      }
      e.exports = Ur;
    })(St, St.exports);
    var hl = St.exports,
      zn = () => Math.floor(Math.random() * 1e6 + Math.random() * 1e6),
      yl = e => {
        try {
          return e.constructor.name;
        } catch {
          return '';
        }
      },
      ml = class {
        constructor(e, t, n) {
          (this.type = e),
            (this.handleMessage = t),
            (this.target = n),
            (this.outgoingMessages = new Set()),
            (this._messageListener = async o => {
              var r;
              let { data: s } = o;
              if (s.$type !== this.getTypeId() || this.outgoingMessages.has(s.$id)) return;
              let c = { $originId: this.internalId, $type: this.getTypeId(), $id: s.$id };
              try {
                let a = await this.handleMessage(s.$data);
                c.$data = a;
              } catch (a) {
                a.message || console.error(a), (c.$error = { message: (r = a.message) != null ? r : 'Unknown error' });
              }
              o.source ? o.source.postMessage(c, '*') : this._postMessage(c);
            }),
            this.createConnection(),
            (this.internalId = zn()),
            (this.isWorker = yl(n) === 'Worker');
        }
        getTypeId() {
          return `p-${this.type}`;
        }
        createConnection() {
          self.addEventListener('message', this._messageListener);
        }
        dispose() {
          self.removeEventListener('message', this._messageListener);
        }
        sendMessage(e) {
          return new Promise(t => {
            let n = zn(),
              o = { $originId: this.internalId, $type: this.getTypeId(), $data: e, $id: n };
            this.outgoingMessages.add(n);
            let r = s => {
              let { data: c } = s;
              c.$type === this.getTypeId() &&
                c.$id === n &&
                c.$originId !== this.internalId &&
                (t(c.$data), self.removeEventListener('message', r));
            };
            self.addEventListener('message', r), this._postMessage(o);
          });
        }
        _postMessage(e) {
          this.isWorker ||
          (typeof DedicatedWorkerGlobalScope < 'u' && this.target instanceof DedicatedWorkerGlobalScope)
            ? this.target.postMessage(e)
            : this.target.postMessage(e, '*');
        }
      },
      bl = class {
        constructor(e, t) {
          (this.globalListeners = {}),
            (this.globalListenersCount = 0),
            (this.channelListeners = {}),
            (this.channelListenersCount = 0),
            (this.channelId = Math.floor(Math.random() * 1e6)),
            (this.frameWindow = e.contentWindow),
            (this.origin = t),
            (this.globalListeners = []),
            (this.channelListeners = []),
            (this.eventListener = this.eventListener.bind(this)),
            typeof window < 'u' && window.addEventListener('message', this.eventListener);
        }
        cleanup() {
          window.removeEventListener('message', this.eventListener),
            (this.globalListeners = {}),
            (this.channelListeners = {}),
            (this.globalListenersCount = 0),
            (this.channelListenersCount = 0);
        }
        register() {
          !this.frameWindow ||
            this.frameWindow.postMessage(
              { type: 'register-frame', origin: document.location.origin, id: this.channelId },
              this.origin,
            );
        }
        dispatch(e) {
          !this.frameWindow ||
            this.frameWindow.postMessage({ $id: this.channelId, codesandbox: !0, ...e }, this.origin);
        }
        globalListen(e) {
          if (typeof e != 'function') return () => {};
          let t = this.globalListenersCount;
          return (
            (this.globalListeners[t] = e),
            this.globalListenersCount++,
            () => {
              delete this.globalListeners[t];
            }
          );
        }
        channelListen(e) {
          if (typeof e != 'function') return () => {};
          let t = this.channelListenersCount;
          return (
            (this.channelListeners[t] = e),
            this.channelListenersCount++,
            () => {
              delete this.channelListeners[t];
            }
          );
        }
        eventListener(e) {
          if (e.source !== this.frameWindow) return;
          let t = e.data;
          !t.codesandbox ||
            (Object.values(this.globalListeners).forEach(n => n(t)),
            t.$id === this.channelId && Object.values(this.channelListeners).forEach(n => n(t)));
        }
      };
    function bo(e = {}, t = {}, n = '/index.js') {
      return JSON.stringify({ name: 'sandpack-project', main: n, dependencies: e, devDependencies: t }, null, 2);
    }
    function vl(e, t, n, o) {
      let r = { ...e };
      if (!r['/package.json']) {
        if (!t) throw new Error('No dependencies specified, please specify either a package.json or dependencies.');
        if (!o)
          throw new Error(
            "Missing 'entry' parameter. Either specify an entry point, or pass in a package.json with the 'main' field set.",
          );
        r['/package.json'] = { code: bo(t, n, o) };
      }
      return r;
    }
    function Dl(e) {
      if (e.title === 'SyntaxError') {
        let { title: s, path: c, message: a, line: u, column: d } = e;
        return { title: s, path: c, message: a, line: u, column: d };
      }
      let t = Cl(e.payload.frames);
      if (!t) return { message: e.message };
      let n = kl(t),
        o = Fl(t);
      return {
        message: El(t._originalFileName, e.message, o, n),
        title: e.title,
        path: t._originalFileName,
        line: t._originalLineNumber,
        column: t._originalColumnNumber,
      };
    }
    function Cl(e) {
      if (!!e) return e.find(t => !!t._originalFileName);
    }
    function Fl(e) {
      return e ? ` (${e._originalLineNumber}:${e._originalColumnNumber})` : '';
    }
    function kl(e) {
      let n = e._originalScriptCode[e._originalScriptCode.length - 1].lineNumber.toString().length,
        o = 2,
        r = 3,
        s = o + n + r + e._originalColumnNumber;
      return e._originalScriptCode.reduce((c, a) => {
        let u = a.highlight ? '>' : ' ',
          d = a.lineNumber.toString().length === n ? `${a.lineNumber}` : ` ${a.lineNumber}`,
          p = a.highlight ? `` + ' '.repeat(s) + '^' : '';
        return c + `` + u + ' ' + d + ' | ' + a.content + p;
      }, '');
    }
    function El(e, t, n, o) {
      return `${e}: ${t}${n}${o}`;
    }
    var xl = `https://${'0.19.0'.replace(/\./g, '-')}-sandpack.codesandbox.io/`,
      wl = class {
        constructor(e, t, n = {}) {
          this.getTranspilerContext = () =>
            new Promise(s => {
              let c = this.listen(a => {
                a.type === 'transpiler-context' && (s(a.data), c());
              });
              this.dispatch({ type: 'get-transpiler-context' });
            });
          var o;
          if (
            ((this.options = n),
            (this.sandboxInfo = t),
            (this.bundlerURL = n.bundlerURL || xl),
            (this.bundlerState = void 0),
            (this.errors = []),
            (this.status = 'initializing'),
            typeof e == 'string')
          ) {
            this.selector = e;
            let s = document.querySelector(e);
            if (!s) throw new Error(`No element found for selector '${e}'`);
            (this.element = s), (this.iframe = document.createElement('iframe')), this.initializeElement();
          } else (this.element = e), (this.iframe = e);
          this.iframe.getAttribute('sandbox') ||
            this.iframe.setAttribute(
              'sandbox',
              'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
            );
          let r = n.startRoute ? new URL(n.startRoute, this.bundlerURL).toString() : this.bundlerURL;
          (o = this.iframe.contentWindow) == null || o.location.replace(r),
            (this.iframeProtocol = new bl(this.iframe, this.bundlerURL)),
            (this.unsubscribeGlobalListener = this.iframeProtocol.globalListen(s => {
              s.type !== 'initialized' ||
                !this.iframe.contentWindow ||
                (this.iframeProtocol.register(),
                this.options.fileResolver &&
                  (this.fileResolverProtocol = new ml(
                    'file-resolver',
                    async c =>
                      c.m === 'isFile'
                        ? this.options.fileResolver.isFile(c.p)
                        : this.options.fileResolver.readFile(c.p),
                    this.iframe.contentWindow,
                  )),
                this.updatePreview(this.sandboxInfo, !0));
            })),
            (this.unsubscribeChannelListener = this.iframeProtocol.channelListen(s => {
              switch (s.type) {
                case 'start': {
                  this.errors = [];
                  break;
                }
                case 'status': {
                  this.status = s.status;
                  break;
                }
                case 'action': {
                  s.action === 'show-error' && (this.errors = [...this.errors, Dl(s)]);
                  break;
                }
                case 'state': {
                  this.bundlerState = s.state;
                  break;
                }
              }
            }));
        }
        cleanup() {
          this.unsubscribeChannelListener(), this.unsubscribeGlobalListener(), this.iframeProtocol.cleanup();
        }
        updateOptions(e) {
          hl(this.options, e) || ((this.options = e), this.updatePreview());
        }
        updatePreview(e = this.sandboxInfo, t) {
          var n, o, r, s;
          this.sandboxInfo = { ...this.sandboxInfo, ...e };
          let c = this.getFiles(),
            a = Object.keys(c).reduce((p, g) => ({ ...p, [g]: { code: c[g].code, path: g } }), {}),
            u = JSON.parse(bo(this.sandboxInfo.dependencies, this.sandboxInfo.devDependencies, this.sandboxInfo.entry));
          try {
            u = JSON.parse(c['/package.json'].code);
          } catch (p) {
            console.error('Could not parse package.json file: ' + p.message);
          }
          let d = Object.keys(c).reduce((p, g) => ({ ...p, [g]: { content: c[g].code, path: g } }), {});
          this.dispatch({
            type: 'compile',
            codesandbox: !0,
            version: 3,
            isInitializationCompile: t,
            modules: a,
            reactDevTools: this.options.reactDevTools,
            externalResources: this.options.externalResources || [],
            hasFileResolver: Boolean(this.options.fileResolver),
            disableDependencyPreprocessing: this.sandboxInfo.disableDependencyPreprocessing,
            template: this.sandboxInfo.template || gl(u, d),
            showOpenInCodeSandbox: (n = this.options.showOpenInCodeSandbox) != null ? n : !0,
            showErrorScreen: (o = this.options.showErrorScreen) != null ? o : !0,
            showLoadingScreen: (r = this.options.showLoadingScreen) != null ? r : !0,
            skipEval: this.options.skipEval || !1,
            clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile,
            logLevel: (s = this.options.logLevel) != null ? s : Ot.Info,
          });
        }
        dispatch(e) {
          this.iframeProtocol.dispatch(e);
        }
        listen(e) {
          return this.iframeProtocol.channelListen(e);
        }
        getCodeSandboxURL() {
          let e = this.getFiles(),
            t = Object.keys(e).reduce(
              (n, o) => ({ ...n, [o.replace('/', '')]: { content: e[o].code, isBinary: !1 } }),
              {},
            );
          return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: 'POST',
            body: JSON.stringify({ files: t }),
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          })
            .then(n => n.json())
            .then(n => ({
              sandboxId: n.sandbox_id,
              editorUrl: `https://codesandbox.io/s/${n.sandbox_id}`,
              embedUrl: `https://codesandbox.io/embed/${n.sandbox_id}`,
            }));
        }
        getFiles() {
          let { sandboxInfo: e } = this;
          return e.files['/package.json'] === void 0
            ? vl(e.files, e.dependencies, e.devDependencies, e.entry)
            : this.sandboxInfo.files;
        }
        initializeElement() {
          if (
            ((this.iframe.style.border = '0'),
            (this.iframe.style.width = this.options.width || '100%'),
            (this.iframe.style.height = this.options.height || '100%'),
            (this.iframe.style.overflow = 'hidden'),
            !this.element.parentNode)
          )
            throw new Error('Given element does not have a parent.');
          this.element.parentNode.replaceChild(this.iframe, this.element);
        }
      },
      Ot;
    (function (e) {
      (e[(e.None = 0)] = 'None'),
        (e[(e.Error = 10)] = 'Error'),
        (e[(e.Warning = 20)] = 'Warning'),
        (e[(e.Info = 30)] = 'Info'),
        (e[(e.Debug = 40)] = 'Debug');
    })(Ot || (Ot = {}));
    function je(e) {
      var { className: t, files: n, presetConfig: o, show: r, children: s, codeConfig: c, style: a } = e,
        u = T(e, ['className', 'files', 'presetConfig', 'show', 'children', 'codeConfig', 'style']);
      return l.default.createElement(
        'div',
        { className: 'ch-preview' + (t ? ' ' + t : ''), style: a },
        l.default.createElement(
          mo,
          Object.assign({ loadUrl: r, theme: c.theme }, u, {
            children: o ? l.default.createElement(Bl, { files: n, presetConfig: o }) : s,
          }),
        ),
      );
    }
    function Bl({ files: e, presetConfig: t }) {
      let n = l.default.useRef(null),
        o = l.default.useRef(null);
      return (
        l.default.useEffect(() => {
          o.current = new wl(n.current, Object.assign(Object.assign({}, t), { files: Gn(t.files, e) }), {
            showOpenInCodeSandbox: !1,
          });
        }, []),
        l.default.useEffect(() => {
          o.current && o.current.updatePreview(Object.assign(Object.assign({}, t), { files: Gn(t.files, e) }));
        }, [e]),
        l.default.createElement('iframe', { ref: n })
      );
    }
    function Gn(e, t) {
      let n = Object.assign({}, e);
      return (
        t.forEach(o => {
          n['/' + o.name] = { code: o.code.lines.map(r => r.tokens.map(s => s.content).join('')).join(``) };
        }),
        n
      );
    }
    function vo(e) {
      var t,
        { children: n, editorSteps: o, codeConfig: r, start: s = 0, presetConfig: c } = e,
        a = T(e, ['children', 'editorSteps', 'codeConfig', 'start', 'presetConfig']);
      let u = l.default.Children.toArray(n),
        [d, p] = l.default.useState({ stepIndex: s, step: o[s] }),
        g = d.step;
      function m(b) {
        let D = Ce(d.step, b, null);
        p(Object.assign(Object.assign({}, d), { step: D }));
      }
      let h = u[0];
      return l.default.createElement(
        'div',
        { className: `ch-spotlight ${c ? 'ch-spotlight-with-preview' : ''}` },
        l.default.createElement(
          'div',
          { className: 'ch-spotlight-tabs' },
          !((t = h?.props) === null || t === void 0) && t.children ? l.default.createElement('div', null, u[0]) : null,
          u.map((b, D) =>
            D === 0
              ? null
              : l.default.createElement(
                  'div',
                  {
                    key: D,
                    onClick: () => p({ stepIndex: D, step: o[D] }),
                    className: 'ch-spotlight-tab',
                    'data-selected': D === d.stepIndex ? 'true' : void 0,
                  },
                  b,
                ),
          ),
        ),
        l.default.createElement(
          'div',
          { className: 'ch-spotlight-sticker' },
          l.default.createElement(Ie, Object.assign({}, a, g, { codeConfig: r, onTabClick: m })),
          c &&
            l.default.createElement(je, {
              className: 'ch-spotlight-preview',
              files: g.files,
              presetConfig: c,
              codeConfig: r,
            }),
        ),
      );
    }
    function Tl(e) {
      e.forEach(Sl);
    }
    function Sl(e) {
      var t;
      let n = ((t = e.rootBounds) === null || t === void 0 ? void 0 : t.height) || 0;
      Dt(e.rootBounds, {
        border: `${Math.min(10, n / 2)}px solid ${Je.rootColor}`,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }),
        Dt(e.boundingClientRect, {
          border: `${Math.min(10, e.boundingClientRect.height / 2)}px solid ${
            e.isIntersecting ? Je.enterColor : Je.exitColor
          }`,
          overflow: 'hidden',
          boxSizing: 'border-box',
        }),
        Dt(e.intersectionRect, { backgroundColor: Je.interColor, zIndex: 2 });
    }
    function Dt(e, t = {}) {
      let { width: n, left: o, height: r, top: s } = e,
        c = document.createElement('div');
      return (
        (c.style.position = 'fixed'),
        (c.style.width = n + 'px'),
        (c.style.left = o + 'px'),
        (c.style.top = s + 'px'),
        (c.style.height = r + 'px'),
        (c.style.pointerEvents = 'none'),
        (c.style.transition = 'opacity 2s ease-in'),
        Object.assign(c.style, t),
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            c.style.opacity = '0';
          }),
        ),
        c.addEventListener('transitionend', () => {
          document.body.removeChild(c);
        }),
        document.body.appendChild(c),
        c
      );
    }
    var Je = { rootColor: '#9428AB', enterColor: '#B35C00', exitColor: '#035570', interColor: '#9CAF00BB' },
      Ol = typeof window < 'u' ? l.default.useLayoutEffect : l.default.useEffect;
    function Al() {
      let e = typeof window == 'object';
      function t() {
        return e ? document.documentElement.clientHeight : void 0;
      }
      let [n, o] = l.default.useState(t);
      return (
        l.default.useEffect(() => {
          function r() {
            o(t());
          }
          return window.addEventListener('resize', r), () => window.removeEventListener('resize', r);
        }, []),
        Ol(() => {
          o(t());
        }, []),
        n
      );
    }
    var Do = l.default.createContext(void 0),
      At = typeof window < 'u' ? l.default.useLayoutEffect : l.default.useEffect;
    function Il({ onStepChange: e, children: t, getRootMargin: n = Nl, debug: o = !1 }) {
      let [r, s] = l.default.useState(),
        c = Al();
      return (
        At(() => {
          let d = Ll(p => {
            (o || window.chDebugScroller) && Tl(p),
              p.forEach(g => {
                if (g.intersectionRatio > 0) {
                  let m = g.target;
                  e(+m.stepIndex);
                }
              });
          }, n(c || 0));
          return s(d), () => d.disconnect();
        }, [c]),
        l.default.createElement(Do.Provider, { value: r }, t)
      );
    }
    function jl(e) {
      var { as: t = 'section', index: n } = e,
        o = T(e, ['as', 'index']);
      let r = l.default.useRef(null),
        s = l.default.useContext(Do);
      return (
        At(() => (s && s.observe(r.current), () => s && s.unobserve(r.current)), [s]),
        At(() => {
          let c = r.current;
          c.stepIndex = n;
        }, [n]),
        l.default.createElement(t, Object.assign(Object.assign({}, o), { ref: r }))
      );
    }
    function Ll(e, t) {
      return new IntersectionObserver(e, { rootMargin: t, threshold: 1e-6, root: null });
    }
    function Nl(e) {
      return `-${e / 2 - 2}px 0px`;
    }
    function Co(e) {
      var { children: t, editorSteps: n, codeConfig: o, presetConfig: r, start: s = 0 } = e,
        c = T(e, ['children', 'editorSteps', 'codeConfig', 'presetConfig', 'start']);
      let a = l.default.Children.toArray(t),
        [u, d] = l.default.useState({ stepIndex: s, step: n[s] }),
        p = u.step;
      function g(b) {
        d({ stepIndex: b, step: n[b] });
      }
      function m(b) {
        let D = Ce(u.step, b, null);
        d(Object.assign(Object.assign({}, u), { step: D }));
      }
      function h(b, D, k) {
        let x = Ce(n[b], D, k);
        d(Object.assign(Object.assign({}, u), { stepIndex: b, step: x }));
      }
      return l.default.createElement(
        'section',
        { className: `ch-scrollycoding ${r ? 'ch-scrollycoding-with-preview' : ''}` },
        l.default.createElement(
          'div',
          { className: 'ch-scrollycoding-content' },
          l.default.createElement(
            Il,
            { onStepChange: g },
            a.map((b, D) =>
              l.default.createElement(
                jl,
                {
                  as: 'div',
                  key: D,
                  index: D,
                  onClick: () => g(D),
                  className: 'ch-scrollycoding-step-content',
                  'data-selected': D === u.stepIndex ? 'true' : void 0,
                },
                l.default.createElement(
                  yo,
                  {
                    onActivation: ({ fileName: k, focus: x }) => {
                      h(D, k, x);
                    },
                    onReset: () => {
                      g(D);
                    },
                  },
                  b,
                ),
              ),
            ),
          ),
        ),
        l.default.createElement(
          'div',
          { className: 'ch-scrollycoding-sticker' },
          l.default.createElement(Ie, Object.assign({ showExpandButton: !0 }, c, p, { codeConfig: o, onTabClick: m })),
          r &&
            l.default.createElement(je, {
              className: 'ch-scrollycoding-preview',
              files: p.files,
              presetConfig: r,
              codeConfig: o,
            }),
        ),
      );
    }
    function Fo(e) {
      var { children: t, editorSteps: n, codeConfig: o, presetConfig: r, code: s } = e,
        c = T(e, ['children', 'editorSteps', 'codeConfig', 'presetConfig', 'code']);
      let a = l.default.Children.toArray(t),
        u = a.some(h => {
          var b;
          return (b = h.props) === null || b === void 0 ? void 0 : b.children;
        }),
        [d, p] = l.default.useState({ stepIndex: 0, step: n[0] }),
        g = d.step;
      function m(h) {
        let b = Ce(d.step, h, null);
        p(Object.assign(Object.assign({}, d), { step: b }));
      }
      return l.default.createElement(
        'div',
        { className: `ch-slideshow ${r ? 'ch-slideshow-with-preview' : ''}` },
        l.default.createElement(
          'div',
          { className: 'ch-slideshow-slide' },
          l.default.createElement(
            Ie,
            Object.assign({}, c, g, { codeConfig: Object.assign(Object.assign({}, o), s), onTabClick: m }),
          ),
          r &&
            l.default.createElement(je, {
              className: 'ch-slideshow-preview',
              files: g.files,
              presetConfig: r,
              codeConfig: o,
            }),
        ),
        l.default.createElement(
          'div',
          { className: 'ch-slideshow-notes' },
          l.default.createElement(
            'div',
            { className: 'ch-slideshow-range' },
            l.default.createElement(
              'button',
              {
                onClick: () =>
                  p(h => {
                    let b = Math.max(0, h.stepIndex - 1);
                    return { stepIndex: b, step: n[b] };
                  }),
              },
              'Prev',
            ),
            l.default.createElement('input', {
              type: 'range',
              min: 0,
              max: n.length - 1,
              value: d.stepIndex,
              step: 1,
              onChange: h => p({ stepIndex: +h.target.value, step: n[+h.target.value] }),
            }),
            l.default.createElement(
              'button',
              {
                onClick: () =>
                  p(h => {
                    let b = Math.min(n.length - 1, h.stepIndex + 1);
                    return { stepIndex: b, step: n[b] };
                  }),
              },
              'Next',
            ),
          ),
          u && l.default.createElement('div', { className: 'ch-slideshow-note' }, a[d.stepIndex]),
        ),
      );
    }
    function ko() {
      return "error: code hike remark plugin not running or annotation isn't at the right place";
    }
    var Eo = { box: Ml, bg: xo, label: $l, link: Wl, mark: Hl, withClass: Rl };
    function Hl(e) {
      return e.isInline
        ? l.default.createElement(_l, Object.assign({}, e))
        : l.default.createElement(xo, Object.assign({}, e));
    }
    function xo({ children: e, data: t, style: n, theme: o }) {
      let r = 'ch-code-multiline-mark ' + (t ?? ''),
        s = F(o, v.RangeHighlightBackground),
        c = F(o, v.EditorInfoForeground);
      return l.default.createElement(
        'div',
        { style: Object.assign(Object.assign({}, n), { background: s }), className: r },
        l.default.createElement('span', { className: 'ch-code-multiline-mark-border', style: { background: c } }),
        e,
      );
    }
    function _l({ children: e, data: t, theme: n }) {
      let o = Pl(e) || Se(F(n, v.CodeForeground), 0.2),
        r = 'ch-code-inline-mark ' + (t ?? '');
      return l.default.createElement('span', { className: r, style: { background: o } }, e);
    }
    function Pl(e) {
      var t, n, o;
      let r = l.default.Children.toArray(e)[0],
        s = l.default.Children.toArray(((t = r?.props) === null || t === void 0 ? void 0 : t.children) || [])[0],
        c = l.default.Children.toArray(((n = s?.props) === null || n === void 0 ? void 0 : n.children) || [])[0],
        { color: a } = ((o = c?.props) === null || o === void 0 ? void 0 : o.style) || {};
      if (a) return Se(a, 0.2);
    }
    function Ml({ children: e, data: t, theme: n }) {
      var o, r;
      let s =
        typeof t == 'string'
          ? t
          : ((r =
              (o = n.tokenColors.find(c => {
                var a;
                return (a = c.scope) === null || a === void 0 ? void 0 : a.includes('string');
              })) === null || o === void 0
                ? void 0
                : o.settings) === null || r === void 0
              ? void 0
              : r.foreground) || 'yellow';
      return l.default.createElement(
        'span',
        { className: 'ch-code-box-annotation', style: { outline: `2px solid ${s}` } },
        e,
      );
    }
    function Rl({ children: e, data: t, style: n, theme: o }) {
      let r = t;
      return l.default.createElement('span', { style: n, className: r }, e);
    }
    function $l({ children: e, data: t, style: n, theme: o }) {
      let r = o.colors['editor.lineHighlightBackground'] || o.colors['editor.selectionHighlightBackground'],
        [s, c] = l.default.useState(!1);
      return l.default.createElement(
        'div',
        {
          style: Object.assign(Object.assign({}, n), { background: s ? r : void 0 }),
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
        },
        e,
        l.default.createElement(
          'div',
          { style: { position: 'absolute', right: 0, paddingRight: 16, display: s ? 'block' : 'none', opacity: 0.7 } },
          t?.children || t,
        ),
      );
    }
    function Wl({ children: e, isInline: t, style: n, data: o }) {
      let r = o?.url || o,
        s = o?.title;
      return l.default.createElement(
        'a',
        { href: r, title: s, className: t ? 'ch-code-inline-link' : 'ch-code-link', style: n },
        e,
      );
    }
    function wo(e) {
      var { className: t, codeConfig: n, children: o, code: r } = e,
        s = T(e, ['className', 'codeConfig', 'children', 'code']);
      let { theme: c } = n,
        { lines: a } = r,
        u = a.flatMap(p => p.tokens),
        d = F(c, v.CodeForeground);
      return l.default.createElement(
        'span',
        Object.assign({ className: 'ch-inline-code not-prose' + (t ? ' ' + t : '') }, s),
        l.default.createElement(
          'code',
          { style: { ['--ch-code-foreground']: d, background: Se(F(c, v.CodeBackground), 0.9), color: d } },
          u.map((p, g) => l.default.createElement('span', Object.assign({ key: g }, p.props), p.content)),
        ),
      );
    }
    var zl = {
        Code: ao,
        Section: po,
        SectionLink: go,
        SectionCode: fo,
        Spotlight: vo,
        Scrollycoding: Co,
        Preview: je,
        annotations: Eo,
        Annotation: ko,
        Slideshow: Fo,
        InlineCode: wo,
      },
      Gl = { MiniBrowser: mo, EditorSpring: io };
    W.Annotation = ko;
    W.CH = zl;
    W.Code = ao;
    W.InlineCode = wo;
    W.Preview = je;
    W.Scrollycoding = Co;
    W.Section = po;
    W.SectionCode = fo;
    W.SectionLink = go;
    W.Slideshow = Fo;
    W.Spotlight = vo;
    W.annotations = Eo;
    W.internal = Gl;
  });
  var Yl = {};
  ts(Yl, { CH: () => pe, chCodeConfig: () => Le, default: () => Xl, frontmatter: () => ql });
  var j = dn(fn()),
    ot = dn(Bo());
  var {
    Paragraph: oi,
    TextLink: ri,
    Blockquote: si,
    Ul: ci,
    Ol: li,
    Li: ii,
    I: ai,
    Em: ui,
    PostImage: di,
    Strike: pi,
    InlineCode: nt,
    CH1: fi,
    CH2: gi,
    CH3: hi,
    H1: yi,
    H2: mi,
    H3: bi,
    ContentHeading: vi,
    Heading: Di,
    CodeSnippet: Ci,
    SandPack: To,
    HorizontalRule: Fi,
    SideNote: So,
    Expanded: ki,
    CodeBlock: Ei,
  } = reactMdxComp;
  var pe = { annotations: ot.annotations, Code: ot.Code },
    Le = {
      theme: {
        name: 'github-dark',
        colors: {
          focusBorder: '#1f6feb',
          foreground: '#c9d1d9',
          descriptionForeground: '#8b949e',
          errorForeground: '#f85149',
          'textLink.foreground': '#58a6ff',
          'textLink.activeForeground': '#58a6ff',
          'textBlockQuote.background': '#010409',
          'textBlockQuote.border': '#30363d',
          'textCodeBlock.background': '#6e768166',
          'textPreformat.foreground': '#8b949e',
          'textSeparator.foreground': '#21262d',
          'button.background': '#238636',
          'button.foreground': '#ffffff',
          'button.hoverBackground': '#2ea043',
          'button.secondaryBackground': '#282e33',
          'button.secondaryForeground': '#c9d1d9',
          'button.secondaryHoverBackground': '#30363d',
          'checkbox.background': '#161b22',
          'checkbox.border': '#30363d',
          'dropdown.background': '#161b22',
          'dropdown.border': '#30363d',
          'dropdown.foreground': '#c9d1d9',
          'dropdown.listBackground': '#161b22',
          'input.background': '#0d1117',
          'input.border': '#30363d',
          'input.foreground': '#c9d1d9',
          'input.placeholderForeground': '#484f58',
          'badge.foreground': '#f0f6fc',
          'badge.background': '#1f6feb',
          'progressBar.background': '#1f6feb',
          'titleBar.activeForeground': '#8b949e',
          'titleBar.activeBackground': '#0d1117',
          'titleBar.inactiveForeground': '#8b949e',
          'titleBar.inactiveBackground': '#010409',
          'titleBar.border': '#30363d',
          'activityBar.foreground': '#c9d1d9',
          'activityBar.inactiveForeground': '#8b949e',
          'activityBar.background': '#0d1117',
          'activityBarBadge.foreground': '#f0f6fc',
          'activityBarBadge.background': '#1f6feb',
          'activityBar.activeBorder': '#f78166',
          'activityBar.border': '#30363d',
          'sideBar.foreground': '#c9d1d9',
          'sideBar.background': '#010409',
          'sideBar.border': '#30363d',
          'sideBarTitle.foreground': '#c9d1d9',
          'sideBarSectionHeader.foreground': '#c9d1d9',
          'sideBarSectionHeader.background': '#010409',
          'sideBarSectionHeader.border': '#30363d',
          'list.hoverForeground': '#c9d1d9',
          'list.inactiveSelectionForeground': '#c9d1d9',
          'list.activeSelectionForeground': '#c9d1d9',
          'list.hoverBackground': '#6e76811a',
          'list.inactiveSelectionBackground': '#6e768166',
          'list.activeSelectionBackground': '#6e768166',
          'list.focusForeground': '#c9d1d9',
          'list.focusBackground': '#388bfd26',
          'list.inactiveFocusBackground': '#388bfd26',
          'list.highlightForeground': '#58a6ff',
          'tree.indentGuidesStroke': '#21262d',
          'notificationCenterHeader.foreground': '#8b949e',
          'notificationCenterHeader.background': '#161b22',
          'notifications.foreground': '#c9d1d9',
          'notifications.background': '#161b22',
          'notifications.border': '#30363d',
          'notificationsErrorIcon.foreground': '#f85149',
          'notificationsWarningIcon.foreground': '#d29922',
          'notificationsInfoIcon.foreground': '#58a6ff',
          'pickerGroup.border': '#30363d',
          'pickerGroup.foreground': '#8b949e',
          'quickInput.background': '#161b22',
          'quickInput.foreground': '#c9d1d9',
          'statusBar.foreground': '#8b949e',
          'statusBar.background': '#0d1117',
          'statusBar.border': '#30363d',
          'statusBar.noFolderBackground': '#0d1117',
          'statusBar.debuggingBackground': '#da3633',
          'statusBar.debuggingForeground': '#f0f6fc',
          'statusBarItem.prominentBackground': '#161b22',
          'editorGroupHeader.tabsBackground': '#010409',
          'editorGroupHeader.tabsBorder': '#30363d',
          'editorGroup.border': '#30363d',
          'tab.activeForeground': '#c9d1d9',
          'tab.inactiveForeground': '#8b949e',
          'tab.inactiveBackground': '#010409',
          'tab.activeBackground': '#0d1117',
          'tab.hoverBackground': '#0d1117',
          'tab.unfocusedHoverBackground': '#6e76811a',
          'tab.border': '#30363d',
          'tab.unfocusedActiveBorderTop': '#30363d',
          'tab.activeBorder': '#0d1117',
          'tab.unfocusedActiveBorder': '#0d1117',
          'tab.activeBorderTop': '#f78166',
          'breadcrumb.foreground': '#8b949e',
          'breadcrumb.focusForeground': '#c9d1d9',
          'breadcrumb.activeSelectionForeground': '#8b949e',
          'breadcrumbPicker.background': '#161b22',
          'editor.foreground': '#c9d1d9',
          'editor.background': '#0d1117',
          'editorWidget.background': '#161b22',
          'editor.foldBackground': '#6e76811a',
          'editor.lineHighlightBackground': '#6e76811a',
          'editorLineNumber.foreground': '#8b949e',
          'editorLineNumber.activeForeground': '#c9d1d9',
          'editorIndentGuide.background': '#21262d',
          'editorIndentGuide.activeBackground': '#30363d',
          'editorWhitespace.foreground': '#484f58',
          'editorCursor.foreground': '#58a6ff',
          'editor.findMatchBackground': '#9e6a03',
          'editor.findMatchHighlightBackground': '#f2cc6080',
          'editor.linkedEditingBackground': '#58a6ff12',
          'editor.inactiveSelectionBackground': '#58a6ff12',
          'editor.selectionBackground': '#58a6ff33',
          'editor.selectionHighlightBackground': '#3fb95040',
          'editor.wordHighlightBackground': '#6e768180',
          'editor.wordHighlightBorder': '#6e768199',
          'editor.wordHighlightStrongBackground': '#6e76814d',
          'editor.wordHighlightStrongBorder': '#6e768199',
          'editorBracketMatch.background': '#3fb95040',
          'editorBracketMatch.border': '#3fb95099',
          'editorGutter.modifiedBackground': '#bb800966',
          'editorGutter.addedBackground': '#2ea04366',
          'editorGutter.deletedBackground': '#f8514966',
          'diffEditor.insertedTextBackground': '#2ea04326',
          'diffEditor.removedTextBackground': '#f8514926',
          'scrollbar.shadow': '#484f5833',
          'scrollbarSlider.background': '#6e768133',
          'scrollbarSlider.hoverBackground': '#6e768145',
          'scrollbarSlider.activeBackground': '#6e768187',
          'editorOverviewRuler.border': '#010409',
          'panel.background': '#010409',
          'panel.border': '#30363d',
          'panelTitle.activeBorder': '#f78166',
          'panelTitle.activeForeground': '#c9d1d9',
          'panelTitle.inactiveForeground': '#8b949e',
          'panelInput.border': '#30363d',
          'terminal.foreground': '#8b949e',
          'terminal.ansiBlack': '#484f58',
          'terminal.ansiRed': '#ff7b72',
          'terminal.ansiGreen': '#3fb950',
          'terminal.ansiYellow': '#d29922',
          'terminal.ansiBlue': '#58a6ff',
          'terminal.ansiMagenta': '#bc8cff',
          'terminal.ansiCyan': '#39c5cf',
          'terminal.ansiWhite': '#b1bac4',
          'terminal.ansiBrightBlack': '#6e7681',
          'terminal.ansiBrightRed': '#ffa198',
          'terminal.ansiBrightGreen': '#56d364',
          'terminal.ansiBrightYellow': '#e3b341',
          'terminal.ansiBrightBlue': '#79c0ff',
          'terminal.ansiBrightMagenta': '#d2a8ff',
          'terminal.ansiBrightCyan': '#56d4dd',
          'terminal.ansiBrightWhite': '#f0f6fc',
          'gitDecoration.addedResourceForeground': '#3fb950',
          'gitDecoration.modifiedResourceForeground': '#d29922',
          'gitDecoration.deletedResourceForeground': '#f85149',
          'gitDecoration.untrackedResourceForeground': '#3fb950',
          'gitDecoration.ignoredResourceForeground': '#484f58',
          'gitDecoration.conflictingResourceForeground': '#db6d28',
          'gitDecoration.submoduleResourceForeground': '#8b949e',
          'debugToolBar.background': '#161b22',
          'editor.stackFrameHighlightBackground': '#bb800966',
          'editor.focusedStackFrameHighlightBackground': '#2ea04366',
          'peekViewEditor.matchHighlightBackground': '#bb800966',
          'peekViewResult.matchHighlightBackground': '#bb800966',
          'peekViewEditor.background': '#6e76811a',
          'peekViewResult.background': '#0d1117',
          'settings.headerForeground': '#8b949e',
          'settings.modifiedItemIndicator': '#bb800966',
          'welcomePage.buttonBackground': '#21262d',
          'welcomePage.buttonHoverBackground': '#30363d',
        },
        semanticHighlighting: !0,
        tokenColors: [
          { settings: { foreground: '#c9d1d9', background: '#0d1117' } },
          {
            scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
            settings: { foreground: '#8b949e' },
          },
          {
            scope: ['constant', 'entity.name.constant', 'variable.other.constant', 'variable.language', 'entity'],
            settings: { foreground: '#79c0ff' },
          },
          {
            scope: ['entity.name', 'meta.export.default', 'meta.definition.variable'],
            settings: { foreground: '#ffa657' },
          },
          {
            scope: [
              'variable.parameter.function',
              'meta.jsx.children',
              'meta.block',
              'meta.tag.attributes',
              'entity.name.constant',
              'meta.object.member',
              'meta.embedded.expression',
            ],
            settings: { foreground: '#c9d1d9' },
          },
          { scope: 'entity.name.function', settings: { foreground: '#d2a8ff' } },
          { scope: ['entity.name.tag', 'support.class.component'], settings: { foreground: '#7ee787' } },
          { scope: 'keyword', settings: { foreground: '#ff7b72' } },
          { scope: ['storage', 'storage.type'], settings: { foreground: '#ff7b72' } },
          {
            scope: ['storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
            settings: { foreground: '#c9d1d9' },
          },
          {
            scope: ['string', 'punctuation.definition.string', 'string punctuation.section.embedded source'],
            settings: { foreground: '#a5d6ff' },
          },
          { scope: 'support', settings: { foreground: '#79c0ff' } },
          { scope: 'meta.property-name', settings: { foreground: '#79c0ff' } },
          { scope: 'variable', settings: { foreground: '#ffa657' } },
          { scope: 'variable.other', settings: { foreground: '#c9d1d9' } },
          { scope: 'invalid.broken', settings: { fontStyle: 'italic', foreground: '#ffa198' } },
          { scope: 'invalid.deprecated', settings: { fontStyle: 'italic', foreground: '#ffa198' } },
          { scope: 'invalid.illegal', settings: { fontStyle: 'italic', foreground: '#ffa198' } },
          { scope: 'invalid.unimplemented', settings: { fontStyle: 'italic', foreground: '#ffa198' } },
          {
            scope: 'carriage-return',
            settings: { fontStyle: 'italic underline', background: '#ff7b72', foreground: '#f0f6fc', content: '^M' },
          },
          { scope: 'message.error', settings: { foreground: '#ffa198' } },
          { scope: 'string source', settings: { foreground: '#c9d1d9' } },
          { scope: 'string variable', settings: { foreground: '#79c0ff' } },
          { scope: ['source.regexp', 'string.regexp'], settings: { foreground: '#a5d6ff' } },
          {
            scope: [
              'string.regexp.character-class',
              'string.regexp constant.character.escape',
              'string.regexp source.ruby.embedded',
              'string.regexp string.regexp.arbitrary-repitition',
            ],
            settings: { foreground: '#a5d6ff' },
          },
          { scope: 'string.regexp constant.character.escape', settings: { fontStyle: 'bold', foreground: '#7ee787' } },
          { scope: 'support.constant', settings: { foreground: '#79c0ff' } },
          { scope: 'support.variable', settings: { foreground: '#79c0ff' } },
          { scope: 'meta.module-reference', settings: { foreground: '#79c0ff' } },
          { scope: 'punctuation.definition.list.begin.markdown', settings: { foreground: '#ffa657' } },
          {
            scope: ['markup.heading', 'markup.heading entity.name'],
            settings: { fontStyle: 'bold', foreground: '#79c0ff' },
          },
          { scope: 'markup.quote', settings: { foreground: '#7ee787' } },
          { scope: 'markup.italic', settings: { fontStyle: 'italic', foreground: '#c9d1d9' } },
          { scope: 'markup.bold', settings: { fontStyle: 'bold', foreground: '#c9d1d9' } },
          { scope: 'markup.raw', settings: { foreground: '#79c0ff' } },
          {
            scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
            settings: { background: '#490202', foreground: '#ffa198' },
          },
          {
            scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
            settings: { background: '#04260f', foreground: '#7ee787' },
          },
          {
            scope: ['markup.changed', 'punctuation.definition.changed'],
            settings: { background: '#5a1e02', foreground: '#ffa657' },
          },
          { scope: ['markup.ignored', 'markup.untracked'], settings: { foreground: '#161b22', background: '#79c0ff' } },
          { scope: 'meta.diff.range', settings: { foreground: '#d2a8ff', fontStyle: 'bold' } },
          { scope: 'meta.diff.header', settings: { foreground: '#79c0ff' } },
          { scope: 'meta.separator', settings: { fontStyle: 'bold', foreground: '#79c0ff' } },
          { scope: 'meta.output', settings: { foreground: '#79c0ff' } },
          {
            scope: [
              'brackethighlighter.tag',
              'brackethighlighter.curly',
              'brackethighlighter.round',
              'brackethighlighter.square',
              'brackethighlighter.angle',
              'brackethighlighter.quote',
            ],
            settings: { foreground: '#8b949e' },
          },
          { scope: 'brackethighlighter.unmatched', settings: { foreground: '#ffa198' } },
          {
            scope: ['constant.other.reference.link', 'string.other.link'],
            settings: { foreground: '#a5d6ff', fontStyle: 'underline' },
          },
        ],
      },
      lineNumbers: !1,
      showCopyButton: !0,
      autoImport: !0,
    },
    ql = {
      id: 3038517924585219e3,
      title: 'How to use async functions in useEffect',
      slugify: 'how-to-use-async-functions-in-useeffect',
      description: 'useEffect in deep',
      date: '24/06/2022',
      author: ['Le Xuan Tien', 'https://facebook.com/tienlx97', 6969],
      post: 'stories',
      categories: ['react'],
      meta: { keywords: ['useEffect', 'async'] },
    };
  function Oo(e) {
    let t = Object.assign({ p: 'p', h1: 'h1' }, e.components),
      { TextLink: n } = t;
    return (
      pe || Pt('CH', !1),
      pe.Code || Pt('CH.Code', !0),
      n || Pt('TextLink', !0),
      (0, j.jsxs)(j.Fragment, {
        children: [
          (0, j.jsxs)(t.p, {
            children: [
              (0, j.jsx)(nt, { children: 'useEffect' }),
              ` is usually the place where data fetching happensin React. Data fetching means using asynchronous functions, and using them in `,
              (0, j.jsx)(nt, { children: `useEffect` }),
              ` might not be as straightforward as you'd think. Read on to learn moreabout it!`,
            ],
          }),
          ``,
          (0, j.jsx)(t.h1, { children: 'The wrong way' }),
          ``,
          (0, j.jsxs)(t.p, {
            children: [
              "There's one wrong way to do data fetching in ",
              (0, j.jsx)(nt, { children: 'useEffect' }),
              ' . If you write the following code, your linter will scream at you!',
            ],
          }),
          ``,
          (0, j.jsxs)(So, {
            type: 'success',
            children: [
              (0, j.jsxs)(t.p, { children: ['You are using a linter right? If not,', ' '] }),
              (0, j.jsx)(n, {
                href: 'https://reactjs.org/docs/hooks-rules.html',
                children: (0, j.jsx)(t.p, { children: 'you really should!' }),
              }),
            ],
          }),
          ``,
          (0, j.jsxs)(To, {
            children: [
              (0, j.jsx)(pe.Code, {
                codeConfig: Le,
                northPanel: { tabs: ['App.js'], active: 'App.js', heightRatio: 1 },
                files: [
                  {
                    name: 'App.js',
                    focus: '',
                    code: {
                      lines: [
                        {
                          tokens: [
                            { content: 'import', props: { style: { color: '#FF7B72' } } },
                            { content: ' { useReducer } ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'from', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"react"', props: { style: { color: '#A5D6FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: 'import', props: { style: { color: '#FF7B72' } } },
                            { content: ' AddTask ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'from', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"./AddTask.js"', props: { style: { color: '#A5D6FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: 'import', props: { style: { color: '#FF7B72' } } },
                            { content: ' TaskList ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'from', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"./TaskList.js"', props: { style: { color: '#A5D6FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'export', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'default', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'TaskApp', props: { style: { color: '#D2A8FF' } } },
                            { content: '() ', props: { style: { color: '#FFA657' } } },
                            { content: '{', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'const', props: { style: { color: '#FF7B72' } } },
                            { content: ' [', props: { style: { color: '#C9D1D9' } } },
                            { content: 'tasks', props: { style: { color: '#79C0FF' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'dispatch', props: { style: { color: '#79C0FF' } } },
                            { content: '] ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'useReducer', props: { style: { color: '#D2A8FF' } } },
                            { content: '(tasksReducer, initialTasks);', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'handleAddTask', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'text', props: { style: { color: '#FFA657' } } },
                            { content: ') {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'dispatch', props: { style: { color: '#D2A8FF' } } },
                            { content: '({', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      type: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"added"', props: { style: { color: '#A5D6FF' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      id: nextId', props: { style: { color: '#C9D1D9' } } },
                            { content: '++', props: { style: { color: '#FF7B72' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      text: text,', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'handleChangeTask', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'task', props: { style: { color: '#FFA657' } } },
                            { content: ') {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'dispatch', props: { style: { color: '#D2A8FF' } } },
                            { content: '({', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      type: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"changed"', props: { style: { color: '#A5D6FF' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      task: task,', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'handleDeleteTask', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'taskId', props: { style: { color: '#FFA657' } } },
                            { content: ') {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'dispatch', props: { style: { color: '#D2A8FF' } } },
                            { content: '({', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      type: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"deleted"', props: { style: { color: '#A5D6FF' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      id: taskId,', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '    <>', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'h1', props: { style: { color: '#7EE787' } } },
                            { content: '>Day off in Kyoto</', props: { style: { color: '#C9D1D9' } } },
                            { content: 'h1', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'AddTask', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onAddTask', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{handleAddTask} />', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'TaskList', props: { style: { color: '#7EE787' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'tasks', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{tasks}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChangeTask', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{handleChangeTask}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onDeleteTask', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{handleDeleteTask}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      />', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    </>', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  );', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'tasksReducer', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'tasks', props: { style: { color: '#FFA657' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'action', props: { style: { color: '#FFA657' } } },
                            { content: ') {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'switch', props: { style: { color: '#FF7B72' } } },
                            { content: ' (action.type) {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'case', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"added"', props: { style: { color: '#A5D6FF' } } },
                            { content: ': {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' [', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: '...', props: { style: { color: '#FF7B72' } } },
                            { content: 'tasks,', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '        {', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '          id: action.id,', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [{ content: '          text: action.text,', props: { style: { color: '#C9D1D9' } } }],
                        },
                        {
                          tokens: [
                            { content: '          done: ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'false', props: { style: { color: '#79C0FF' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '        },', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '      ];', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    }', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'case', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"changed"', props: { style: { color: '#A5D6FF' } } },
                            { content: ': {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' tasks.', props: { style: { color: '#C9D1D9' } } },
                            { content: 'map', props: { style: { color: '#D2A8FF' } } },
                            { content: '((', props: { style: { color: '#C9D1D9' } } },
                            { content: 't', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'if', props: { style: { color: '#FF7B72' } } },
                            { content: ' (t.id ', props: { style: { color: '#C9D1D9' } } },
                            { content: '===', props: { style: { color: '#FF7B72' } } },
                            { content: ' action.task.id) {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' action.task;', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        } ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'else', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' t;', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '        }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '      });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    }', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'case', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"deleted"', props: { style: { color: '#A5D6FF' } } },
                            { content: ': {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' tasks.', props: { style: { color: '#C9D1D9' } } },
                            { content: 'filter', props: { style: { color: '#D2A8FF' } } },
                            { content: '((', props: { style: { color: '#C9D1D9' } } },
                            { content: 't', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' t.id ', props: { style: { color: '#C9D1D9' } } },
                            { content: '!==', props: { style: { color: '#FF7B72' } } },
                            { content: ' action.id);', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '    }', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'default', props: { style: { color: '#FF7B72' } } },
                            { content: ': {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'throw', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'Error', props: { style: { color: '#79C0FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: '"Unknown action: "', props: { style: { color: '#A5D6FF' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '+', props: { style: { color: '#FF7B72' } } },
                            { content: ' action.type);', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '    }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  }', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'let', props: { style: { color: '#FF7B72' } } },
                            { content: ' nextId ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '3', props: { style: { color: '#79C0FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: 'const', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'initialTasks', props: { style: { color: '#79C0FF' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' [', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  { id: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '0', props: { style: { color: '#79C0FF' } } },
                            { content: ', text: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"Philosopher\u2019s Path"', props: { style: { color: '#A5D6FF' } } },
                            { content: ', done: ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'true', props: { style: { color: '#79C0FF' } } },
                            { content: ' },', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  { id: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '1', props: { style: { color: '#79C0FF' } } },
                            { content: ', text: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"Visit the temple"', props: { style: { color: '#A5D6FF' } } },
                            { content: ', done: ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'false', props: { style: { color: '#79C0FF' } } },
                            { content: ' },', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  { id: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '2', props: { style: { color: '#79C0FF' } } },
                            { content: ', text: ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"Drink matcha"', props: { style: { color: '#A5D6FF' } } },
                            { content: ', done: ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'false', props: { style: { color: '#79C0FF' } } },
                            { content: ' },', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '];', props: { style: { color: '#C9D1D9' } } }] },
                      ],
                      lang: 'js',
                    },
                    annotations: [],
                  },
                ],
              }),
              (0, j.jsx)(pe.Code, {
                codeConfig: Le,
                northPanel: { tabs: ['AddTask.js'], active: 'AddTask.js', heightRatio: 1 },
                files: [
                  {
                    name: 'AddTask.js',
                    focus: '',
                    code: {
                      lines: [
                        {
                          tokens: [
                            { content: 'import', props: { style: { color: '#FF7B72' } } },
                            { content: ' { useState } ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'from', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"react"', props: { style: { color: '#A5D6FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'export', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'default', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'AddTask', props: { style: { color: '#D2A8FF' } } },
                            { content: '({ onAddTask }) ', props: { style: { color: '#FFA657' } } },
                            { content: '{', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'const', props: { style: { color: '#FF7B72' } } },
                            { content: ' [', props: { style: { color: '#C9D1D9' } } },
                            { content: 'text', props: { style: { color: '#79C0FF' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setText', props: { style: { color: '#79C0FF' } } },
                            { content: '] ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'useState', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: '""', props: { style: { color: '#A5D6FF' } } },
                            { content: ');', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '    <>', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'input', props: { style: { color: '#7EE787' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'placeholder', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '"Add task"', props: { style: { color: '#A5D6FF' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'value', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{text}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'e', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setText', props: { style: { color: '#D2A8FF' } } },
                            { content: '(e.target.value)}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      />', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onClick', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{() ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setText', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: '""', props: { style: { color: '#A5D6FF' } } },
                            { content: ');', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onAddTask', props: { style: { color: '#D2A8FF' } } },
                            { content: '(text);', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '        }}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '      >', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '        Add', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '      </', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '    </>', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  );', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                      ],
                      lang: 'js',
                    },
                    annotations: [],
                  },
                ],
              }),
              (0, j.jsx)(pe.Code, {
                codeConfig: Le,
                northPanel: { tabs: ['TaskList.js'], active: 'TaskList.js', heightRatio: 1 },
                files: [
                  {
                    name: 'TaskList.js',
                    focus: '',
                    code: {
                      lines: [
                        {
                          tokens: [
                            { content: 'import', props: { style: { color: '#FF7B72' } } },
                            { content: ' { useState } ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'from', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '"react"', props: { style: { color: '#A5D6FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'export', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'default', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#FFA657' } } },
                            { content: 'TaskList', props: { style: { color: '#D2A8FF' } } },
                            {
                              content: '({ tasks, onChangeTask, onDeleteTask }) ',
                              props: { style: { color: '#FFA657' } },
                            },
                            { content: '{', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'ul', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      {tasks.', props: { style: { color: '#C9D1D9' } } },
                            { content: 'map', props: { style: { color: '#D2A8FF' } } },
                            { content: '((', props: { style: { color: '#C9D1D9' } } },
                            { content: 'task', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'li', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'key', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{task.id}>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'Task', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'task', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{task} ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{onChangeTask} ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onDelete', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{onDeleteTask} />', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        </', props: { style: { color: '#C9D1D9' } } },
                            { content: 'li', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      ))}', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '    </', props: { style: { color: '#C9D1D9' } } },
                            { content: 'ul', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '  );', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [] },
                        {
                          tokens: [
                            { content: 'function', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'Task', props: { style: { color: '#D2A8FF' } } },
                            { content: '({ ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'task', props: { style: { color: '#FFA657' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#FFA657' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onDelete', props: { style: { color: '#FFA657' } } },
                            { content: ' }) {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'const', props: { style: { color: '#FF7B72' } } },
                            { content: ' [', props: { style: { color: '#C9D1D9' } } },
                            { content: 'isEditing', props: { style: { color: '#79C0FF' } } },
                            { content: ', ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setIsEditing', props: { style: { color: '#79C0FF' } } },
                            { content: '] ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'useState', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'false', props: { style: { color: '#79C0FF' } } },
                            { content: ');', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'let', props: { style: { color: '#FF7B72' } } },
                            { content: ' taskContent;', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'if', props: { style: { color: '#FF7B72' } } },
                            { content: ' (isEditing) {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'taskContent', props: { style: { color: '#D2A8FF' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      <>', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '        <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'input', props: { style: { color: '#7EE787' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'value', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{task.text}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'e', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '            ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#D2A8FF' } } },
                            { content: '({', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '              ', props: { style: { color: '#C9D1D9' } } },
                            { content: '...', props: { style: { color: '#FF7B72' } } },
                            { content: 'task,', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '              text: e.target.value,', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '            });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '          }}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '        />', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '        <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onClick', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{() ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setIsEditing', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'false', props: { style: { color: '#79C0FF' } } },
                            { content: ')}>Save</', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      </>', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    );', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '  } ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'else', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'taskContent', props: { style: { color: '#D2A8FF' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      <>', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '        {task.text}', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '        <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onClick', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{() ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'setIsEditing', props: { style: { color: '#D2A8FF' } } },
                            { content: '(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'true', props: { style: { color: '#79C0FF' } } },
                            { content: ')}>Edit</', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '      </>', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '    );', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '  }', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'return', props: { style: { color: '#FF7B72' } } },
                            { content: ' (', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'label', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'input', props: { style: { color: '#7EE787' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'type', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '"checkbox"', props: { style: { color: '#A5D6FF' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'checked', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{task.done}', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '        ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{(', props: { style: { color: '#C9D1D9' } } },
                            { content: 'e', props: { style: { color: '#FFA657' } } },
                            { content: ') ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '          ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onChange', props: { style: { color: '#D2A8FF' } } },
                            { content: '({', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '            ', props: { style: { color: '#C9D1D9' } } },
                            { content: '...', props: { style: { color: '#FF7B72' } } },
                            { content: 'task,', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '            done: e.target.checked,', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '          });', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '        }}', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '      />', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '      {taskContent}', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: '      <', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onClick', props: { style: { color: '#79C0FF' } } },
                            { content: '=', props: { style: { color: '#FF7B72' } } },
                            { content: '{() ', props: { style: { color: '#C9D1D9' } } },
                            { content: '=>', props: { style: { color: '#FF7B72' } } },
                            { content: ' ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'onDelete', props: { style: { color: '#D2A8FF' } } },
                            { content: '(task.id)}>Delete</', props: { style: { color: '#C9D1D9' } } },
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '    </', props: { style: { color: '#C9D1D9' } } },
                            { content: 'label', props: { style: { color: '#7EE787' } } },
                            { content: '>', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '  );', props: { style: { color: '#C9D1D9' } } }] },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                      ],
                      lang: 'js',
                    },
                    annotations: [],
                  },
                ],
              }),
              (0, j.jsx)(pe.Code, {
                codeConfig: Le,
                northPanel: { tabs: [''], active: '', heightRatio: 1 },
                files: [
                  {
                    name: '',
                    focus: '',
                    code: {
                      lines: [
                        {
                          tokens: [
                            { content: 'button', props: { style: { color: '#7EE787' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'margin', props: { style: { color: '#79C0FF' } } },
                            { content: ': ', props: { style: { color: '#C9D1D9' } } },
                            { content: '5', props: { style: { color: '#79C0FF' } } },
                            { content: 'px', props: { style: { color: '#FF7B72' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: 'li', props: { style: { color: '#7EE787' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'list-style-type', props: { style: { color: '#79C0FF' } } },
                            { content: ': ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'none', props: { style: { color: '#79C0FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                        {
                          tokens: [
                            { content: 'ul', props: { style: { color: '#7EE787' } } },
                            { content: ',', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: 'li', props: { style: { color: '#7EE787' } } },
                            { content: ' {', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'margin', props: { style: { color: '#79C0FF' } } },
                            { content: ': ', props: { style: { color: '#C9D1D9' } } },
                            { content: '0', props: { style: { color: '#79C0FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        {
                          tokens: [
                            { content: '  ', props: { style: { color: '#C9D1D9' } } },
                            { content: 'padding', props: { style: { color: '#79C0FF' } } },
                            { content: ': ', props: { style: { color: '#C9D1D9' } } },
                            { content: '0', props: { style: { color: '#79C0FF' } } },
                            { content: ';', props: { style: { color: '#C9D1D9' } } },
                          ],
                        },
                        { tokens: [{ content: '}', props: { style: { color: '#C9D1D9' } } }] },
                      ],
                      lang: 'css',
                    },
                    annotations: [],
                  },
                ],
              }),
            ],
          }),
        ],
      })
    );
  }
  function Ul(e = {}) {
    let { wrapper: t } = e.components || {};
    return t ? (0, j.jsx)(t, Object.assign({}, e, { children: (0, j.jsx)(Oo, e) })) : Oo(e);
  }
  var Xl = Ul;
  function Pt(e, t) {
    throw new Error(
      'Expected ' +
        (t ? 'component' : 'object') +
        ' `' +
        e +
        '` to be defined: you likely forgot to import, pass, or provide it.',
    );
  }
  return ns(Yl);
})(); /*! *****************************************************************************Copyright (c) Microsoft Corporation.Permission to use, copy, modify, and/or distribute this software for anypurpose with or without fee is hereby granted.THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITHREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITYAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROMLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OROTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE ORPERFORMANCE OF THIS SOFTWARE.***************************************************************************** */
return Component;
