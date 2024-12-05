var At, M, fo, je, xr, po, Cn, ho, Vn, En, Pn, mo, Et = {}, go = [], js = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, en = Array.isArray;
function Ee(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function zn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function ee(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? At.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return St(e, s, r, o, null);
}
function St(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++fo, __i: -1, __u: 0 };
  return o == null && M.vnode != null && M.vnode(i), i;
}
function vo() {
  return { current: null };
}
function oe(e) {
  return e.children;
}
function pe(e, t) {
  this.props = e, this.context = t;
}
function it(e, t) {
  if (t == null) return e.__ ? it(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? it(e) : null;
}
function _o(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return _o(e);
  }
}
function Nn(e) {
  (!e.__d && (e.__d = !0) && je.push(e) && !Gt.__r++ || xr !== M.debounceRendering) && ((xr = M.debounceRendering) || po)(Gt);
}
function Gt() {
  var e, t, n, r, o, i, s, a;
  for (je.sort(Cn); e = je.shift(); ) e.__d && (t = je.length, r = void 0, i = (o = (n = e).__v).__e, s = [], a = [], n.__P && ((r = Ee({}, o)).__v = o.__v + 1, M.vnode && M.vnode(r), jn(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? it(o), !!(32 & o.__u), a), r.__v = o.__v, r.__.__k[r.__i] = r, wo(s, r, a), r.__e != i && _o(r)), je.length > t && je.sort(Cn));
  Gt.__r = 0;
}
function yo(e, t, n, r, o, i, s, a, c, l, f) {
  var u, h, p, _, d, m, g = r && r.__k || go, v = t.length;
  for (c = Gs(n, t, g, c), u = 0; u < v; u++) (p = n.__k[u]) != null && (h = p.__i === -1 ? Et : g[p.__i] || Et, p.__i = u, m = jn(e, p, h, o, i, s, a, c, l, f), _ = p.__e, p.ref && h.ref != p.ref && (h.ref && Gn(h.ref, null, p), f.push(p.ref, p.__c || _, p)), d == null && _ != null && (d = _), 4 & p.__u || h.__k === p.__k ? c = bo(p, c, e) : typeof p.type == "function" && m !== void 0 ? c = m : _ && (c = _.nextSibling), p.__u &= -7);
  return n.__e = d, c;
}
function Gs(e, t, n, r) {
  var o, i, s, a, c, l = t.length, f = n.length, u = f, h = 0;
  for (e.__k = [], o = 0; o < l; o++) (i = t[o]) != null && typeof i != "boolean" && typeof i != "function" ? (a = o + h, (i = e.__k[o] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? St(null, i, null, null, null) : en(i) ? St(oe, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? St(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = e, i.__b = e.__b + 1, s = null, (c = i.__i = Ks(i, n, a, u)) !== -1 && (u--, (s = n[c]) && (s.__u |= 2)), s == null || s.__v === null ? (c == -1 && h--, typeof i.type != "function" && (i.__u |= 4)) : c !== a && (c == a - 1 ? h-- : c == a + 1 ? h++ : (c > a ? h-- : h++, i.__u |= 4))) : i = e.__k[o] = null;
  if (u) for (o = 0; o < f; o++) (s = n[o]) != null && !(2 & s.__u) && (s.__e == r && (r = it(s)), xo(s, s));
  return r;
}
function bo(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = bo(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = it(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Pe(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (en(e) ? e.some(function(n) {
    Pe(n, t);
  }) : t.push(e)), t;
}
function Ks(e, t, n, r) {
  var o = e.key, i = e.type, s = n - 1, a = n + 1, c = t[n];
  if (c === null || c && o == c.key && i === c.type && !(2 & c.__u)) return n;
  if ((typeof i != "function" || i === oe || o) && r > (c != null && !(2 & c.__u) ? 1 : 0)) for (; s >= 0 || a < t.length; ) {
    if (s >= 0) {
      if ((c = t[s]) && !(2 & c.__u) && o == c.key && i === c.type) return s;
      s--;
    }
    if (a < t.length) {
      if ((c = t[a]) && !(2 & c.__u) && o == c.key && i === c.type) return a;
      a++;
    }
  }
  return -1;
}
function Sr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || js.test(t) ? n : n + "px";
}
function kt(e, t, n, r, o) {
  var i;
  e: if (t === "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || Sr(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || Sr(e.style, t, n[t]);
  }
  else if (t[0] === "o" && t[1] === "n") i = t !== (t = t.replace(ho, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Vn, e.addEventListener(t, i ? Pn : En, i)) : e.removeEventListener(t, i ? Pn : En, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Cr(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = Vn++;
      else if (t.t < n.u) return;
      return n(M.event ? M.event(t) : t);
    }
  };
}
function jn(e, t, n, r, o, i, s, a, c, l) {
  var f, u, h, p, _, d, m, g, v, b, w, x, P, S, A, L, $, k = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (c = !!(32 & n.__u), i = [a = t.__e = n.__e]), (f = M.__b) && f(t);
  e: if (typeof k == "function") try {
    if (g = t.props, v = "prototype" in k && k.prototype.render, b = (f = k.contextType) && r[f.__c], w = f ? b ? b.props.value : f.__ : r, n.__c ? m = (u = t.__c = n.__c).__ = u.__E : (v ? t.__c = u = new k(g, w) : (t.__c = u = new pe(g, w), u.constructor = k, u.render = Ys), b && b.sub(u), u.props = g, u.state || (u.state = {}), u.context = w, u.__n = r, h = u.__d = !0, u.__h = [], u._sb = []), v && u.__s == null && (u.__s = u.state), v && k.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Ee({}, u.__s)), Ee(u.__s, k.getDerivedStateFromProps(g, u.__s))), p = u.props, _ = u.state, u.__v = t, h) v && k.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), v && u.componentDidMount != null && u.__h.push(u.componentDidMount);
    else {
      if (v && k.getDerivedStateFromProps == null && g !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(g, w), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(g, u.__s, w) === !1 || t.__v === n.__v)) {
        for (t.__v !== n.__v && (u.props = g, u.state = u.__s, u.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(E) {
          E && (E.__ = t);
        }), x = 0; x < u._sb.length; x++) u.__h.push(u._sb[x]);
        u._sb = [], u.__h.length && s.push(u);
        break e;
      }
      u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, w), v && u.componentDidUpdate != null && u.__h.push(function() {
        u.componentDidUpdate(p, _, d);
      });
    }
    if (u.context = w, u.props = g, u.__P = e, u.__e = !1, P = M.__r, S = 0, v) {
      for (u.state = u.__s, u.__d = !1, P && P(t), f = u.render(u.props, u.state, u.context), A = 0; A < u._sb.length; A++) u.__h.push(u._sb[A]);
      u._sb = [];
    } else do
      u.__d = !1, P && P(t), f = u.render(u.props, u.state, u.context), u.state = u.__s;
    while (u.__d && ++S < 25);
    u.state = u.__s, u.getChildContext != null && (r = Ee(Ee({}, r), u.getChildContext())), v && !h && u.getSnapshotBeforeUpdate != null && (d = u.getSnapshotBeforeUpdate(p, _)), a = yo(e, en(L = f != null && f.type === oe && f.key == null ? f.props.children : f) ? L : [L], t, n, r, o, i, s, a, c, l), u.base = t.__e, t.__u &= -161, u.__h.length && s.push(u), m && (u.__E = u.__ = null);
  } catch (E) {
    if (t.__v = null, c || i != null) if (E.then) {
      for (t.__u |= c ? 160 : 128; a && a.nodeType === 8 && a.nextSibling; ) a = a.nextSibling;
      i[i.indexOf(a)] = null, t.__e = a;
    } else for ($ = i.length; $--; ) zn(i[$]);
    else t.__e = n.__e, t.__k = n.__k;
    M.__e(E, t, n);
  }
  else i == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : a = t.__e = qs(n.__e, t, n, r, o, i, s, c, l);
  return (f = M.diffed) && f(t), 128 & t.__u ? void 0 : a;
}
function wo(e, t, n) {
  for (var r = 0; r < n.length; r++) Gn(n[r], n[++r], n[++r]);
  M.__c && M.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      M.__e(i, o.__v);
    }
  });
}
function qs(e, t, n, r, o, i, s, a, c) {
  var l, f, u, h, p, _, d, m = n.props, g = t.props, v = t.type;
  if (v === "svg" ? o = "http://www.w3.org/2000/svg" : v === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (l = 0; l < i.length; l++) if ((p = i[l]) && "setAttribute" in p == !!v && (v ? p.localName === v : p.nodeType === 3)) {
      e = p, i[l] = null;
      break;
    }
  }
  if (e == null) {
    if (v === null) return document.createTextNode(g);
    e = document.createElementNS(o, v, g.is && g), a && (M.__m && M.__m(t, i), a = !1), i = null;
  }
  if (v === null) m === g || a && e.data === g || (e.data = g);
  else {
    if (i = i && At.call(e.childNodes), m = n.props || Et, !a && i != null) for (m = {}, l = 0; l < e.attributes.length; l++) m[(p = e.attributes[l]).name] = p.value;
    for (l in m) if (p = m[l], l != "children") {
      if (l == "dangerouslySetInnerHTML") u = p;
      else if (!(l in g)) {
        if (l == "value" && "defaultValue" in g || l == "checked" && "defaultChecked" in g) continue;
        kt(e, l, null, p, o);
      }
    }
    for (l in g) p = g[l], l == "children" ? h = p : l == "dangerouslySetInnerHTML" ? f = p : l == "value" ? _ = p : l == "checked" ? d = p : a && typeof p != "function" || m[l] === p || kt(e, l, p, m[l], o);
    if (f) a || u && (f.__html === u.__html || f.__html === e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
    else if (u && (e.innerHTML = ""), yo(e, en(h) ? h : [h], t, n, r, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && it(n, 0), a, c), i != null) for (l = i.length; l--; ) zn(i[l]);
    a || (l = "value", v === "progress" && _ == null ? e.removeAttribute("value") : _ !== void 0 && (_ !== e[l] || v === "progress" && !_ || v === "option" && _ !== m[l]) && kt(e, l, _, m[l], o), l = "checked", d !== void 0 && d !== e[l] && kt(e, l, d, m[l], o));
  }
  return e;
}
function Gn(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    M.__e(o, n);
  }
}
function xo(e, t, n) {
  var r, o;
  if (M.unmount && M.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Gn(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      M.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && xo(r[o], t, n || typeof e.type != "function");
  n || zn(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ys(e, t, n) {
  return this.constructor(e, n);
}
function st(e, t, n) {
  var r, o, i, s;
  t === document && (t = document.documentElement), M.__ && M.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], jn(t, e = (!r && n || t).__k = ee(oe, null, [e]), o || Et, Et, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? At.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), wo(i, e, s);
}
function So(e, t) {
  st(e, t, So);
}
function Xs(e, t, n) {
  var r, o, i, s, a = Ee({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? At.call(arguments, 2) : n), St(e.type, a, r || e.key, o || e.ref, null);
}
function Ne(e, t) {
  var n = { __c: t = "__cC" + mo++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.forEach(function(a) {
        a.__e = !0, Nn(a);
      });
    }, this.sub = function(s) {
      o.add(s);
      var a = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o && o.delete(s), a && a.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
At = go.slice, M = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (a) {
    e = a;
  }
  throw e;
} }, fo = 0, pe.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ee({}, this.state), typeof e == "function" && (e = e(Ee({}, n), this.props)), e && Ee(n, e), e != null && this.__v && (t && this._sb.push(t), Nn(this));
}, pe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Nn(this));
}, pe.prototype.render = oe, je = [], po = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Cn = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Gt.__r = 0, ho = /(PointerCapture)$|Capture$/i, Vn = 0, En = Cr(!1), Pn = Cr(!0), mo = 0;
var Zs = 0;
function y(e, t, n, r, o, i) {
  t || (t = {});
  var s, a, c = t;
  "ref" in t && (s = t.ref, delete t.ref);
  var l = { type: e, props: c, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Zs, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (a in s) c[a] === void 0 && (c[a] = s[a]);
  return M.vnode && M.vnode(l), l;
}
var Ae, G, fn, Er, at = 0, Co = [], J = M, Pr = J.__b, Nr = J.__r, Ar = J.diffed, Tr = J.__c, Rr = J.unmount, Or = J.__;
function Ye(e, t) {
  J.__h && J.__h(G, e, at || t), at = 0;
  var n = G.__H || (G.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function N(e) {
  return at = 1, Tt(Eo, e);
}
function Tt(e, t, n) {
  var r = Ye(Ae++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Eo(void 0, t), function(a) {
    var c = r.__N ? r.__N[0] : r.__[0], l = r.t(c, a);
    c !== l && (r.__N = [l, r.__[1]], r.__c.setState({}));
  }], r.__c = G, !G.u)) {
    var o = function(a, c, l) {
      if (!r.__c.__H) return !0;
      var f = r.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (f.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, a, c, l);
      var u = r.__c.props !== a;
      return f.forEach(function(h) {
        if (h.__N) {
          var p = h.__[0];
          h.__ = h.__N, h.__N = void 0, p !== h.__[0] && (u = !0);
        }
      }), i && i.call(this, a, c, l) || u;
    };
    G.u = !0;
    var i = G.shouldComponentUpdate, s = G.componentWillUpdate;
    G.componentWillUpdate = function(a, c, l) {
      if (this.__e) {
        var f = i;
        i = void 0, o(a, c, l), i = f;
      }
      s && s.call(this, a, c, l);
    }, G.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function F(e, t) {
  var n = Ye(Ae++, 3);
  !J.__s && Xn(n.__H, t) && (n.__ = e, n.i = t, G.__H.__h.push(n));
}
function Me(e, t) {
  var n = Ye(Ae++, 4);
  !J.__s && Xn(n.__H, t) && (n.__ = e, n.i = t, G.__h.push(n));
}
function O(e) {
  return at = 5, ne(function() {
    return { current: e };
  }, []);
}
function Kn(e, t, n) {
  at = 6, Me(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = Ye(Ae++, 7);
  return Xn(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function V(e, t) {
  return at = 8, ne(function() {
    return e;
  }, t);
}
function ke(e) {
  var t = G.context[e.__c], n = Ye(Ae++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(G)), t.props.value) : e.__;
}
function qn(e, t) {
  J.useDebugValue && J.useDebugValue(t ? t(e) : e);
}
function Qs(e) {
  var t = Ye(Ae++, 10), n = N();
  return t.__ = e, G.componentDidCatch || (G.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Yn() {
  var e = Ye(Ae++, 11);
  if (!e.__) {
    for (var t = G.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function Js() {
  for (var e; e = Co.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Ut), e.__H.__h.forEach(An), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], J.__e(t, e.__v);
  }
}
J.__b = function(e) {
  G = null, Pr && Pr(e);
}, J.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Or && Or(e, t);
}, J.__r = function(e) {
  Nr && Nr(e), Ae = 0;
  var t = (G = e.__c).__H;
  t && (fn === G ? (t.__h = [], G.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Ut), t.__h.forEach(An), t.__h = [], Ae = 0)), fn = G;
}, J.diffed = function(e) {
  Ar && Ar(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Co.push(t) !== 1 && Er === J.requestAnimationFrame || ((Er = J.requestAnimationFrame) || ea)(Js)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), fn = G = null;
}, J.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ut), n.__h = n.__h.filter(function(r) {
        return !r.__ || An(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], J.__e(r, n.__v);
    }
  }), Tr && Tr(e, t);
}, J.unmount = function(e) {
  Rr && Rr(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ut(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && J.__e(t, n.__v));
};
var Ir = typeof requestAnimationFrame == "function";
function ea(e) {
  var t, n = function() {
    clearTimeout(r), Ir && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Ir && (t = requestAnimationFrame(n));
}
function Ut(e) {
  var t = G, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), G = t;
}
function An(e) {
  var t = G;
  e.__c = e.__(), G = t;
}
function Xn(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tn(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Zn(e, t) {
  var n = t(), r = N({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Me(function() {
    o.__ = n, o.u = t, pn(o) && i({ t: o });
  }, [e, n, t]), F(function() {
    return pn(o) && i({ t: o }), e(function() {
      pn(o) && i({ t: o });
    });
  }, [e]), n;
}
function pn(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Qn(e) {
  e();
}
function Jn(e) {
  return e;
}
function er() {
  return [!1, Qn];
}
var tr = Me;
function Kt(e, t) {
  this.props = e, this.context = t;
}
function Po(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Tn(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, ee(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Kt.prototype = new pe()).isPureReactComponent = !0, Kt.prototype.shouldComponentUpdate = function(e, t) {
  return Tn(this.props, e) || Tn(this.state, t);
};
var Mr = M.__b;
M.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Mr && Mr(e);
};
var ta = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function C(e) {
  function t(n) {
    if (!("ref" in n)) return e(n, null);
    var r = n.ref;
    delete n.ref;
    var o = e(n, r);
    return n.ref = r, o;
  }
  return t.$$typeof = ta, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var kr = function(e, t) {
  return e == null ? null : Pe(Pe(e).map(t));
}, ye = { map: kr, forEach: kr, count: function(e) {
  return e ? Pe(e).length : 0;
}, only: function(e) {
  var t = Pe(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: Pe }, na = M.__e;
M.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  na(e, t, n, r);
};
var Dr = M.unmount;
function No(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = function(r, o) {
    for (var i in o) r[i] = o[i];
    return r;
  }({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return No(r, t, n);
  })), e;
}
function Ao(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ao(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Ct() {
  this.__u = 0, this.o = null, this.__b = null;
}
function To(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ro(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r) throw r;
    if (!n) throw t;
    return ee(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function et() {
  this.i = null, this.l = null;
}
M.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Dr && Dr(e);
}, (Ct.prototype = new pe()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = To(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(a) : a());
  };
  n.__R = s;
  var a = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var c = r.state.__a;
        r.__v.__k[0] = Ao(c, c.__c.__P, c.__c.__O);
      }
      var l;
      for (r.setState({ __a: r.__b = null }); l = r.o.pop(); ) l.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, Ct.prototype.componentWillUnmount = function() {
  this.o = [];
}, Ct.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = No(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && ee(oe, null, e.fallback);
  return o && (o.__u &= -33), [ee(oe, null, t.__a ? null : e.children), o];
};
var Lr = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function ra(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function oa(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    st(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), st(ee(ra, { context: t.context }, e.__v), t.v);
}
function tn(e, t) {
  var n = ee(oa, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(et.prototype = new pe()).__a = function(e) {
  var t = this, n = To(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Lr(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, et.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = Pe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, et.prototype.componentDidUpdate = et.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Lr(e, n, t);
  });
};
var Oo = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ia = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, sa = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, aa = /[A-Z0-9]/g, ca = typeof document < "u", la = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Io(e, t, n) {
  return t.__k == null && (t.textContent = ""), st(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Mo(e, t, n) {
  return So(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
pe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(pe.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var $r = M.event;
function ua() {
}
function da() {
  return this.cancelBubble;
}
function fa() {
  return this.defaultPrevented;
}
M.event = function(e) {
  return $r && (e = $r(e)), e.persist = ua, e.isPropagationStopped = da, e.isDefaultPrevented = fa, e.nativeEvent = e;
};
var nr, pa = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Fr = M.vnode;
M.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var a = n[s];
      if (!(s === "value" && "defaultValue" in n && a == null || ca && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : c === "translate" && a === "no" ? a = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || r !== "input" && r !== "textarea" || la(n.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : sa.test(s) && (s = c) : c = s = "oninput" : i && ia.test(s) ? s = s.replace(aa, "-$&").toLowerCase() : a === null && (a = void 0), c === "oninput" && o[s = c] && (s = "oninputCapture"), o[s] = a;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = Pe(n.children).forEach(function(l) {
      l.props.selected = o.value.indexOf(l.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = Pe(n.children).forEach(function(l) {
      l.props.selected = o.multiple ? o.defaultValue.indexOf(l.props.value) != -1 : o.defaultValue == l.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", pa)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Oo, Fr && Fr(e);
};
var Wr = M.__r;
M.__r = function(e) {
  Wr && Wr(e), nr = e.__c;
};
var Hr = M.diffed;
M.diffed = function(e) {
  Hr && Hr(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), nr = null;
};
var ko = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return nr.__n[e.__c].props.value;
}, useCallback: V, useContext: ke, useDebugValue: qn, useDeferredValue: Jn, useEffect: F, useId: Yn, useImperativeHandle: Kn, useInsertionEffect: tr, useLayoutEffect: Me, useMemo: ne, useReducer: Tt, useRef: O, useState: N, useSyncExternalStore: Zn, useTransition: er } } }, ha = "18.3.1";
function Do(e) {
  return ee.bind(null, e);
}
function Te(e) {
  return !!e && e.$$typeof === Oo;
}
function Lo(e) {
  return Te(e) && e.type === oe;
}
function $o(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function ut(e) {
  return Te(e) ? Xs.apply(null, arguments) : e;
}
function Fo(e) {
  return !!e.__k && (st(null, e), !0);
}
function Wo(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ho = function(e, t) {
  return e(t);
}, nn = function(e, t) {
  return e(t);
}, Bo = oe, Uo = Te, Ce = { useState: N, useId: Yn, useReducer: Tt, useEffect: F, useLayoutEffect: Me, useInsertionEffect: tr, useTransition: er, useDeferredValue: Jn, useSyncExternalStore: Zn, startTransition: Qn, useRef: O, useImperativeHandle: Kn, useMemo: ne, useCallback: V, useContext: ke, useDebugValue: qn, version: "18.3.1", Children: ye, render: Io, hydrate: Mo, unmountComponentAtNode: Fo, createPortal: tn, createElement: ee, createContext: Ne, createFactory: Do, cloneElement: ut, createRef: vo, Fragment: oe, isValidElement: Te, isElement: Uo, isFragment: Lo, isMemo: $o, findDOMNode: Wo, Component: pe, PureComponent: Kt, memo: Po, forwardRef: C, flushSync: nn, unstable_batchedUpdates: Ho, StrictMode: Bo, Suspense: Ct, SuspenseList: et, lazy: Ro, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ko };
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: ye,
  Component: pe,
  Fragment: oe,
  PureComponent: Kt,
  StrictMode: Bo,
  Suspense: Ct,
  SuspenseList: et,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ko,
  cloneElement: ut,
  createContext: Ne,
  createElement: ee,
  createFactory: Do,
  createPortal: tn,
  createRef: vo,
  default: Ce,
  findDOMNode: Wo,
  flushSync: nn,
  forwardRef: C,
  hydrate: Mo,
  isElement: Uo,
  isFragment: Lo,
  isMemo: $o,
  isValidElement: Te,
  lazy: Ro,
  memo: Po,
  render: Io,
  startTransition: Qn,
  unmountComponentAtNode: Fo,
  unstable_batchedUpdates: Ho,
  useCallback: V,
  useContext: ke,
  useDebugValue: qn,
  useDeferredValue: Jn,
  useEffect: F,
  useErrorBoundary: Qs,
  useId: Yn,
  useImperativeHandle: Kn,
  useInsertionEffect: tr,
  useLayoutEffect: Me,
  useMemo: ne,
  useReducer: Tt,
  useRef: O,
  useState: N,
  useSyncExternalStore: Zn,
  useTransition: er,
  version: ha
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vo = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var va = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = C(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, c) => ee(
    "svg",
    {
      ref: c,
      ...va,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Vo("lucide", o),
      ...a
    },
    [
      ...s.map(([l, f]) => ee(l, f)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = (e, t) => {
  const n = C(
    ({ className: r, ...o }, i) => ee(_a, {
      ref: i,
      iconNode: t,
      className: Vo(`lucide-${ga(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = Rt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = Rt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = Rt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = Rt("GitPullRequest", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = Rt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Sa(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function jo(...e) {
  return (t) => e.forEach((n) => Sa(n, t));
}
function te(...e) {
  return V(jo(...e), e);
}
function Ca(e, t) {
  const n = Ne(t), r = (i) => {
    const { children: s, ...a } = i, c = ne(() => a, Object.values(a));
    return /* @__PURE__ */ y(n.Provider, { value: c, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = ke(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Go(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = Ne(s), c = n.length;
    n = [...n, s];
    const l = (u) => {
      var g;
      const { scope: h, children: p, ..._ } = u, d = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || a, m = ne(() => _, Object.values(_));
      return /* @__PURE__ */ y(d.Provider, { value: m, children: p });
    };
    l.displayName = i + "Provider";
    function f(u, h) {
      var d;
      const p = ((d = h == null ? void 0 : h[e]) == null ? void 0 : d[c]) || a, _ = ke(p);
      if (_) return _;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [l, f];
  }
  const o = () => {
    const i = n.map((s) => Ne(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return ne(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Ea(o, ...t)];
}
function Ea(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return ne(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ae = globalThis != null && globalThis.document ? Me : () => {
}, Pa = ma.useId || (() => {
}), Na = 0;
function tt(e) {
  const [t, n] = N(Pa());
  return ae(() => {
    n((r) => r ?? String(Na++));
  }, [e]), t ? `radix-${t}` : "";
}
function Re(e) {
  const t = O(e);
  return F(() => {
    t.current = e;
  }), ne(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Rn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Aa({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = Re(n), c = V(
    (l) => {
      if (i) {
        const u = typeof l == "function" ? l(e) : l;
        u !== e && a(u);
      } else
        o(l);
    },
    [i, e, o, a]
  );
  return [s, c];
}
function Aa({
  defaultProp: e,
  onChange: t
}) {
  const n = N(e), [r] = n, o = O(r), i = Re(t);
  return F(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var ct = C((e, t) => {
  const { children: n, ...r } = e, o = ye.toArray(n), i = o.find(Ra);
  if (i) {
    const s = i.props.children, a = o.map((c) => c === i ? ye.count(s) > 1 ? ye.only(null) : Te(s) ? s.props.children : null : c);
    return /* @__PURE__ */ y(On, { ...r, ref: t, children: Te(s) ? ut(s, void 0, a) : null });
  }
  return /* @__PURE__ */ y(On, { ...r, ref: t, children: n });
});
ct.displayName = "Slot";
var On = C((e, t) => {
  const { children: n, ...r } = e;
  if (Te(n)) {
    const o = Ia(n);
    return ut(n, {
      ...Oa(r, n.props),
      // @ts-ignore
      ref: t ? jo(t, o) : o
    });
  }
  return ye.count(n) > 1 ? ye.only(null) : null;
});
On.displayName = "SlotClone";
var Ta = ({ children: e }) => /* @__PURE__ */ y(oe, { children: e });
function Ra(e) {
  return Te(e) && e.type === Ta;
}
function Oa(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ia(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ma = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Q = Ma.reduce((e, t) => {
  const n = C((r, o) => {
    const { asChild: i, ...s } = r, a = i ? ct : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y(a, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function ka(e, t) {
  e && nn(() => e.dispatchEvent(t));
}
function Da(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e);
  F(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var La = "DismissableLayer", In = "dismissableLayer.update", $a = "dismissableLayer.pointerDownOutside", Fa = "dismissableLayer.focusOutside", Br, Ko = Ne({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rr = C(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...c
    } = e, l = ke(Ko), [f, u] = N(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = N({}), _ = te(t, (S) => u(S)), d = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), g = d.indexOf(m), v = f ? d.indexOf(f) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, w = v >= g, x = Ba((S) => {
      const A = S.target, L = [...l.branches].some(($) => $.contains(A));
      !w || L || (o == null || o(S), s == null || s(S), S.defaultPrevented || a == null || a());
    }, h), P = Ua((S) => {
      const A = S.target;
      [...l.branches].some(($) => $.contains(A)) || (i == null || i(S), s == null || s(S), S.defaultPrevented || a == null || a());
    }, h);
    return Da((S) => {
      v === l.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
    }, h), F(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Br = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Ur(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Br);
        };
    }, [f, h, n, l]), F(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Ur());
    }, [f, l]), F(() => {
      const S = () => p({});
      return document.addEventListener(In, S), () => document.removeEventListener(In, S);
    }, []), /* @__PURE__ */ y(
      Q.div,
      {
        ...c,
        ref: _,
        style: {
          pointerEvents: b ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Z(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
rr.displayName = La;
var Wa = "DismissableLayerBranch", Ha = C((e, t) => {
  const n = ke(Ko), r = O(null), o = te(t, r);
  return F(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ y(Q.div, { ...e, ref: o });
});
Ha.displayName = Wa;
function Ba(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e), r = O(!1), o = O(() => {
  });
  return F(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          qo(
            $a,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ua(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Re(e), r = O(!1);
  return F(() => {
    const o = (i) => {
      i.target && !r.current && qo(Fa, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ur() {
  const e = new CustomEvent(In);
  document.dispatchEvent(e);
}
function qo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ka(o, i) : o.dispatchEvent(i);
}
var hn = "focusScope.autoFocusOnMount", mn = "focusScope.autoFocusOnUnmount", Vr = { bubbles: !1, cancelable: !0 }, Va = "FocusScope", or = C((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, c] = N(null), l = Re(o), f = Re(i), u = O(null), h = te(t, (d) => c(d)), p = O({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  F(() => {
    if (r) {
      let d = function(b) {
        if (p.paused || !a) return;
        const w = b.target;
        a.contains(w) ? u.current = w : Fe(u.current, { select: !0 });
      }, m = function(b) {
        if (p.paused || !a) return;
        const w = b.relatedTarget;
        w !== null && (a.contains(w) || Fe(u.current, { select: !0 }));
      }, g = function(b) {
        if (document.activeElement === document.body)
          for (const x of b)
            x.removedNodes.length > 0 && Fe(a);
      };
      document.addEventListener("focusin", d), document.addEventListener("focusout", m);
      const v = new MutationObserver(g);
      return a && v.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", d), document.removeEventListener("focusout", m), v.disconnect();
      };
    }
  }, [r, a, p.paused]), F(() => {
    if (a) {
      jr.add(p);
      const d = document.activeElement;
      if (!a.contains(d)) {
        const g = new CustomEvent(hn, Vr);
        a.addEventListener(hn, l), a.dispatchEvent(g), g.defaultPrevented || (za(Ya(Yo(a)), { select: !0 }), document.activeElement === d && Fe(a));
      }
      return () => {
        a.removeEventListener(hn, l), setTimeout(() => {
          const g = new CustomEvent(mn, Vr);
          a.addEventListener(mn, f), a.dispatchEvent(g), g.defaultPrevented || Fe(d ?? document.body, { select: !0 }), a.removeEventListener(mn, f), jr.remove(p);
        }, 0);
      };
    }
  }, [a, l, f, p]);
  const _ = V(
    (d) => {
      if (!n && !r || p.paused) return;
      const m = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, g = document.activeElement;
      if (m && g) {
        const v = d.currentTarget, [b, w] = ja(v);
        b && w ? !d.shiftKey && g === w ? (d.preventDefault(), n && Fe(b, { select: !0 })) : d.shiftKey && g === b && (d.preventDefault(), n && Fe(w, { select: !0 })) : g === v && d.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ y(Q.div, { tabIndex: -1, ...s, ref: h, onKeyDown: _ });
});
or.displayName = Va;
function za(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Fe(r, { select: t }), document.activeElement !== n) return;
}
function ja(e) {
  const t = Yo(e), n = zr(t, e), r = zr(t.reverse(), e);
  return [n, r];
}
function Yo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zr(e, t) {
  for (const n of e)
    if (!Ga(n, { upTo: t })) return n;
}
function Ga(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ka(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Fe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ka(e) && t && e.select();
  }
}
var jr = qa();
function qa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Gr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Gr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Gr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ya(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Xa = "Portal", ir = C((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = N(!1);
  ae(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Ce.createPortal(/* @__PURE__ */ y(Q.div, { ...r, ref: t }), s) : null;
});
ir.displayName = Xa;
function Za(e, t) {
  return Tt((n, r) => t[n][r] ?? n, e);
}
var rn = (e) => {
  const { present: t, children: n } = e, r = Qa(t), o = typeof n == "function" ? n({ present: r.isPresent }) : ye.only(n), i = te(r.ref, Ja(o));
  return typeof n == "function" || r.isPresent ? ut(o, { ref: i }) : null;
};
rn.displayName = "Presence";
function Qa(e) {
  const [t, n] = N(), r = O({}), o = O(e), i = O("none"), s = e ? "mounted" : "unmounted", [a, c] = Za(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return F(() => {
    const l = Dt(r.current);
    i.current = a === "mounted" ? l : "none";
  }, [a]), ae(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = i.current, p = Dt(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ae(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, u = (p) => {
        const d = Dt(r.current).includes(p.animationName);
        if (p.target === t && d && (c("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, h = (p) => {
        p.target === t && (i.current = Dt(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: V((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Dt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ja(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gn = 0;
function Xo() {
  F(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Kr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Kr()), gn++, () => {
      gn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gn--;
    };
  }, []);
}
function Kr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _e = function() {
  return _e = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function Zo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ec(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Vt = "right-scroll-bar-position", zt = "width-before-scroll-bar", tc = "with-scroll-bars-hidden", nc = "--removed-body-scroll-bar-size";
function vn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rc(e, t) {
  var n = N(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var oc = typeof window < "u" ? Me : F, qr = /* @__PURE__ */ new WeakMap();
function ic(e, t) {
  var n = rc(null, function(r) {
    return e.forEach(function(o) {
      return vn(o, r);
    });
  });
  return oc(function() {
    var r = qr.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || vn(a, null);
      }), i.forEach(function(a) {
        o.has(a) || vn(a, s);
      });
    }
    qr.set(n, e);
  }, [e]), n;
}
function sc(e) {
  return e;
}
function ac(e, t) {
  t === void 0 && (t = sc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var c = function() {
        var f = s;
        s = [], f.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(f) {
          s.push(f), l();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function cc(e) {
  e === void 0 && (e = {});
  var t = ac(null);
  return t.options = _e({ async: !0, ssr: !1 }, e), t;
}
var Qo = function(e) {
  var t = e.sideCar, n = Zo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return ee(r, _e({}, n));
};
Qo.isSideCarExport = !0;
function lc(e, t) {
  return e.useMedium(t), Qo;
}
var Jo = cc(), _n = function() {
}, on = C(function(e, t) {
  var n = O(null), r = N({
    onScrollCapture: _n,
    onWheelCapture: _n,
    onTouchMoveCapture: _n
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noIsolation, _ = e.inert, d = e.allowPinchZoom, m = e.as, g = m === void 0 ? "div" : m, v = e.gapMode, b = Zo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, x = ic([n, t]), P = _e(_e({}, b), o);
  return ee(
    oe,
    null,
    f && ee(w, { sideCar: Jo, removeScrollBar: l, shards: u, noIsolation: p, inert: _, setCallbacks: i, allowPinchZoom: !!d, lockRef: n, gapMode: v }),
    s ? ut(ye.only(a), _e(_e({}, P), { ref: x })) : ee(g, _e({}, P, { className: c, ref: x }), a)
  );
});
on.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
on.classNames = {
  fullWidth: zt,
  zeroRight: Vt
};
var uc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function dc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uc();
  return t && e.setAttribute("nonce", t), e;
}
function fc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function pc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = dc()) && (fc(t, n), pc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mc = function() {
  var e = hc();
  return function(t, n) {
    F(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ei = function() {
  var e = mc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, gc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yn = function(e) {
  return parseInt(e || "", 10) || 0;
}, vc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yn(n), yn(r), yn(o)];
}, _c = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gc;
  var t = vc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yc = ei(), nt = "data-scroll-locked", bc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(tc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(nt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(zt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(zt, " .").concat(zt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nt, `] {
    `).concat(nc, ": ").concat(a, `px;
  }
`);
}, Yr = function() {
  var e = parseInt(document.body.getAttribute(nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, wc = function() {
  F(function() {
    return document.body.setAttribute(nt, (Yr() + 1).toString()), function() {
      var e = Yr() - 1;
      e <= 0 ? document.body.removeAttribute(nt) : document.body.setAttribute(nt, e.toString());
    };
  }, []);
}, xc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  wc();
  var i = ne(function() {
    return _c(o);
  }, [o]);
  return ee(yc, { styles: bc(i, !t, o, n ? "" : "!important") });
}, Mn = !1;
if (typeof window < "u")
  try {
    var Lt = Object.defineProperty({}, "passive", {
      get: function() {
        return Mn = !0, !0;
      }
    });
    window.addEventListener("test", Lt, Lt), window.removeEventListener("test", Lt, Lt);
  } catch {
    Mn = !1;
  }
var Ze = Mn ? { passive: !1 } : !1, Sc = function(e) {
  return e.tagName === "TEXTAREA";
}, ti = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Sc(e) && n[t] === "visible")
  );
}, Cc = function(e) {
  return ti(e, "overflowY");
}, Ec = function(e) {
  return ti(e, "overflowX");
}, Xr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ni(e, r);
    if (o) {
      var i = ri(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Pc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Nc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ni = function(e, t) {
  return e === "v" ? Cc(t) : Ec(t);
}, ri = function(e, t) {
  return e === "v" ? Pc(t) : Nc(t);
}, Ac = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Tc = function(e, t, n, r, o) {
  var i = Ac(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, c = t.contains(a), l = !1, f = s > 0, u = 0, h = 0;
  do {
    var p = ri(e, a), _ = p[0], d = p[1], m = p[2], g = d - m - i * _;
    (_ || g) && ni(e, a) && (u += g, h += _), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (f && (Math.abs(u) < 1 || !o) || !f && (Math.abs(h) < 1 || !o)) && (l = !0), l;
}, $t = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zr = function(e) {
  return [e.deltaX, e.deltaY];
}, Qr = function(e) {
  return e && "current" in e ? e.current : e;
}, Rc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Oc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ic = 0, Qe = [];
function Mc(e) {
  var t = O([]), n = O([0, 0]), r = O(), o = N(Ic++)[0], i = N(ei)[0], s = O(e);
  F(function() {
    s.current = e;
  }, [e]), F(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var d = ec([e.lockRef.current], (e.shards || []).map(Qr), !0).filter(Boolean);
      return d.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), d.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = V(function(d, m) {
    if ("touches" in d && d.touches.length === 2 || d.type === "wheel" && d.ctrlKey)
      return !s.current.allowPinchZoom;
    var g = $t(d), v = n.current, b = "deltaX" in d ? d.deltaX : v[0] - g[0], w = "deltaY" in d ? d.deltaY : v[1] - g[1], x, P = d.target, S = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in d && S === "h" && P.type === "range")
      return !1;
    var A = Xr(S, P);
    if (!A)
      return !0;
    if (A ? x = S : (x = S === "v" ? "h" : "v", A = Xr(S, P)), !A)
      return !1;
    if (!r.current && "changedTouches" in d && (b || w) && (r.current = x), !x)
      return !0;
    var L = r.current || x;
    return Tc(L, m, d, L === "h" ? b : w, !0);
  }, []), c = V(function(d) {
    var m = d;
    if (!(!Qe.length || Qe[Qe.length - 1] !== i)) {
      var g = "deltaY" in m ? Zr(m) : $t(m), v = t.current.filter(function(x) {
        return x.name === m.type && (x.target === m.target || m.target === x.shadowParent) && Rc(x.delta, g);
      })[0];
      if (v && v.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!v) {
        var b = (s.current.shards || []).map(Qr).filter(Boolean).filter(function(x) {
          return x.contains(m.target);
        }), w = b.length > 0 ? a(m, b[0]) : !s.current.noIsolation;
        w && m.cancelable && m.preventDefault();
      }
    }
  }, []), l = V(function(d, m, g, v) {
    var b = { name: d, delta: m, target: g, should: v, shadowParent: kc(g) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), f = V(function(d) {
    n.current = $t(d), r.current = void 0;
  }, []), u = V(function(d) {
    l(d.type, Zr(d), d.target, a(d, e.lockRef.current));
  }, []), h = V(function(d) {
    l(d.type, $t(d), d.target, a(d, e.lockRef.current));
  }, []);
  F(function() {
    return Qe.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Ze), document.addEventListener("touchmove", c, Ze), document.addEventListener("touchstart", f, Ze), function() {
      Qe = Qe.filter(function(d) {
        return d !== i;
      }), document.removeEventListener("wheel", c, Ze), document.removeEventListener("touchmove", c, Ze), document.removeEventListener("touchstart", f, Ze);
    };
  }, []);
  var p = e.removeScrollBar, _ = e.inert;
  return ee(
    oe,
    null,
    _ ? ee(i, { styles: Oc(o) }) : null,
    p ? ee(xc, { gapMode: e.gapMode }) : null
  );
}
function kc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Dc = lc(Jo, Mc);
var sr = C(function(e, t) {
  return ee(on, _e({}, e, { ref: t, sideCar: Dc }));
});
sr.classNames = on.classNames;
var Lc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Je = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Wt = {}, bn = 0, oi = function(e) {
  return e && (e.host || oi(e.parentNode));
}, $c = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = oi(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Fc = function(e, t, n, r) {
  var o = $c(t, Array.isArray(e) ? e : [e]);
  Wt[n] || (Wt[n] = /* @__PURE__ */ new WeakMap());
  var i = Wt[n], s = [], a = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || a.has(u) || (a.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var f = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (a.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), _ = p !== null && p !== "false", d = (Je.get(h) || 0) + 1, m = (i.get(h) || 0) + 1;
          Je.set(h, d), i.set(h, m), s.push(h), d === 1 && _ && Ft.set(h, !0), m === 1 && h.setAttribute(n, "true"), _ || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return f(t), a.clear(), bn++, function() {
    s.forEach(function(u) {
      var h = Je.get(u) - 1, p = i.get(u) - 1;
      Je.set(u, h), i.set(u, p), h || (Ft.has(u) || u.removeAttribute(r), Ft.delete(u)), p || u.removeAttribute(n);
    }), bn--, bn || (Je = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), Wt = {});
  };
}, ii = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Lc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Fc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ar = "Dialog", [si, Rd] = Go(ar), [Wc, ge] = si(ar), ai = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = O(null), c = O(null), [l = !1, f] = Rn({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ y(
    Wc,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: tt(),
      titleId: tt(),
      descriptionId: tt(),
      open: l,
      onOpenChange: f,
      onOpenToggle: V(() => f((u) => !u), [f]),
      modal: s,
      children: n
    }
  );
};
ai.displayName = ar;
var ci = "DialogTrigger", Hc = C(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ge(ci, n), i = te(t, o.triggerRef);
    return /* @__PURE__ */ y(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ur(o.open),
        ...r,
        ref: i,
        onClick: Z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Hc.displayName = ci;
var cr = "DialogPortal", [Bc, li] = si(cr, {
  forceMount: void 0
}), ui = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = ge(cr, t);
  return /* @__PURE__ */ y(Bc, { scope: t, forceMount: n, children: ye.map(r, (s) => /* @__PURE__ */ y(rn, { present: n || i.open, children: /* @__PURE__ */ y(ir, { asChild: !0, container: o, children: s }) })) });
};
ui.displayName = cr;
var qt = "DialogOverlay", di = C(
  (e, t) => {
    const n = li(qt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ge(qt, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ y(rn, { present: r || i.open, children: /* @__PURE__ */ y(Uc, { ...o, ref: t }) }) : null;
  }
);
di.displayName = qt;
var Uc = C(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ge(qt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ y(sr, { as: ct, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ y(
        Q.div,
        {
          "data-state": ur(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ge = "DialogContent", fi = C(
  (e, t) => {
    const n = li(Ge, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = ge(Ge, e.__scopeDialog);
    return /* @__PURE__ */ y(rn, { present: r || i.open, children: i.modal ? /* @__PURE__ */ y(Vc, { ...o, ref: t }) : /* @__PURE__ */ y(zc, { ...o, ref: t }) });
  }
);
fi.displayName = Ge;
var Vc = C(
  (e, t) => {
    const n = ge(Ge, e.__scopeDialog), r = O(null), o = te(t, n.contentRef, r);
    return F(() => {
      const i = r.current;
      if (i) return ii(i);
    }, []), /* @__PURE__ */ y(
      pi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: Z(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), zc = C(
  (e, t) => {
    const n = ge(Ge, e.__scopeDialog), r = O(!1), o = O(!1);
    return /* @__PURE__ */ y(
      pi,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), pi = C(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = ge(Ge, n), c = O(null), l = te(t, c);
    return Xo(), /* @__PURE__ */ y(oe, { children: [
      /* @__PURE__ */ y(
        or,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ y(
            rr,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": ur(a.open),
              ...s,
              ref: l,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y(oe, { children: [
        /* @__PURE__ */ y(jc, { titleId: a.titleId }),
        /* @__PURE__ */ y(Kc, { contentRef: c, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), lr = "DialogTitle", hi = C(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ge(lr, n);
    return /* @__PURE__ */ y(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
hi.displayName = lr;
var mi = "DialogDescription", gi = C(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ge(mi, n);
    return /* @__PURE__ */ y(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
gi.displayName = mi;
var vi = "DialogClose", _i = C(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ge(vi, n);
    return /* @__PURE__ */ y(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
_i.displayName = vi;
function ur(e) {
  return e ? "open" : "closed";
}
var yi = "DialogTitleWarning", [Od, bi] = Ca(yi, {
  contentName: Ge,
  titleName: lr,
  docsSlug: "dialog"
}), jc = ({ titleId: e }) => {
  const t = bi(yi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return F(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Gc = "DialogDescriptionWarning", Kc = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bi(Gc).contentName}}.`;
  return F(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, qc = ai, Yc = ui, wi = di, xi = fi, Si = hi, Ci = gi, Xc = _i;
function Ei(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ei(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Zc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ei(e)) && (r && (r += " "), r += t);
  return r;
}
const dr = "-", Qc = (e) => {
  const t = el(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(dr);
      return a[0] === "" && a.length !== 1 && a.shift(), Pi(a, t) || Jc(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const c = n[s] || [];
      return a && r[s] ? [...c, ...r[s]] : c;
    }
  };
}, Pi = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Pi(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(dr);
  return (s = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, Jr = /^\[(.+)\]$/, Jc = (e) => {
  if (Jr.test(e)) {
    const t = Jr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, el = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return nl(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    kn(s, r, i, t);
  }), r;
}, kn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : eo(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (tl(o)) {
        kn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      kn(s, eo(t, i), n, r);
    });
  });
}, eo = (e, t) => {
  let n = e;
  return t.split(dr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, tl = (e) => e.isThemeGetter, nl = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
  return [n, o];
}) : e, rl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : o(i, s);
    }
  };
}, Ni = "!", ol = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], i = t.length, s = (a) => {
    const c = [];
    let l = 0, f = 0, u;
    for (let m = 0; m < a.length; m++) {
      let g = a[m];
      if (l === 0) {
        if (g === o && (r || a.slice(m, m + i) === t)) {
          c.push(a.slice(f, m)), f = m + i;
          continue;
        }
        if (g === "/") {
          u = m;
          continue;
        }
      }
      g === "[" ? l++ : g === "]" && l--;
    }
    const h = c.length === 0 ? a : a.substring(f), p = h.startsWith(Ni), _ = p ? h.substring(1) : h, d = u && u > f ? u - f : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: d
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: s
  }) : s;
}, il = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, sl = (e) => ({
  cache: rl(e.cacheSize),
  parseClassName: ol(e),
  ...Qc(e)
}), al = /\s+/, cl = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = [], s = e.trim().split(al);
  let a = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const l = s[c], {
      modifiers: f,
      hasImportantModifier: u,
      baseClassName: h,
      maybePostfixModifierPosition: p
    } = n(l);
    let _ = !!p, d = r(_ ? h.substring(0, p) : h);
    if (!d) {
      if (!_) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (d = r(h), !d) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      _ = !1;
    }
    const m = il(f).join(":"), g = u ? m + Ni : m, v = g + d;
    if (i.includes(v))
      continue;
    i.push(v);
    const b = o(d, _);
    for (let w = 0; w < b.length; ++w) {
      const x = b[w];
      i.push(g + x);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function ll() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ai(t)) && (r && (r += " "), r += n);
  return r;
}
const Ai = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ai(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ul(e, ...t) {
  let n, r, o, i = s;
  function s(c) {
    const l = t.reduce((f, u) => u(f), e());
    return n = sl(l), r = n.cache.get, o = n.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l)
      return l;
    const f = cl(c, n);
    return o(c, f), f;
  }
  return function() {
    return i(ll.apply(null, arguments));
  };
}
const X = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Ti = /^\[(?:([a-z-]+):)?(.+)\]$/i, dl = /^\d+\/\d+$/, fl = /* @__PURE__ */ new Set(["px", "full", "screen"]), pl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ml = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Se = (e) => rt(e) || fl.has(e) || dl.test(e), Le = (e) => dt(e, "length", El), rt = (e) => !!e && !Number.isNaN(Number(e)), wn = (e) => dt(e, "number", rt), bt = (e) => !!e && Number.isInteger(Number(e)), _l = (e) => e.endsWith("%") && rt(e.slice(0, -1)), I = (e) => Ti.test(e), $e = (e) => pl.test(e), yl = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bl = (e) => dt(e, yl, Ri), wl = (e) => dt(e, "position", Ri), xl = /* @__PURE__ */ new Set(["image", "url"]), Sl = (e) => dt(e, xl, Nl), Cl = (e) => dt(e, "", Pl), wt = () => !0, dt = (e, t, n) => {
  const r = Ti.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, El = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hl.test(e) && !ml.test(e)
), Ri = () => !1, Pl = (e) => gl.test(e), Nl = (e) => vl.test(e), Al = () => {
  const e = X("colors"), t = X("spacing"), n = X("blur"), r = X("brightness"), o = X("borderColor"), i = X("borderRadius"), s = X("borderSpacing"), a = X("borderWidth"), c = X("contrast"), l = X("grayscale"), f = X("hueRotate"), u = X("invert"), h = X("gap"), p = X("gradientColorStops"), _ = X("gradientColorStopPositions"), d = X("inset"), m = X("margin"), g = X("opacity"), v = X("padding"), b = X("saturate"), w = X("scale"), x = X("sepia"), P = X("skew"), S = X("space"), A = X("translate"), L = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", I, t], E = () => [I, t], B = () => ["", Se, Le], W = () => ["auto", rt, I], q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], D = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], U = () => ["", "0", I], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], re = () => [rt, I];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wt],
      spacing: [Se, Le],
      blur: ["none", "", $e, I],
      brightness: re(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $e, I],
      borderSpacing: E(),
      borderWidth: B(),
      contrast: re(),
      grayscale: U(),
      hueRotate: re(),
      invert: U(),
      gap: E(),
      gradientColorStops: [e],
      gradientColorStopPositions: [_l, Le],
      inset: k(),
      margin: k(),
      opacity: re(),
      padding: E(),
      saturate: re(),
      scale: re(),
      sepia: U(),
      skew: re(),
      space: E(),
      translate: E()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", I]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [$e]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...q(), I]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [d]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [d]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [d]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [d]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [d]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [d]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [d]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [d]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [d]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", bt, I]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", bt, I]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", bt, I]
        }, I]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [bt, I]
        }, I]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...T()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...T(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...T(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [S]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [S]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [I, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [I, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$e]
        }, $e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [I, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $e, Le]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", rt, wn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Se, I]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", I]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...D(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Se, Le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Se, I]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", I]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...q(), wl]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", bl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Sl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [_]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...D(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: D()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...D()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Se, I]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Se, Le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Se, Le]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", $e, Cl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", $e, I]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [x]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [x]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", I]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [bt, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [A]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [A]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", I]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Se, Le, wn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Tl = /* @__PURE__ */ ul(Al);
function ce(...e) {
  return Tl(Zc(e));
}
const Rl = qc, Ol = Yc, Oi = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  wi,
  {
    ref: n,
    className: ce(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Oi.displayName = wi.displayName;
const Ii = C(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y(Ol, { children: [
  /* @__PURE__ */ y(Oi, {}),
  /* @__PURE__ */ y(
    xi,
    {
      ref: r,
      className: ce(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ y(Xc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ y(xa, { className: "h-4 w-4" }),
          /* @__PURE__ */ y("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ii.displayName = xi.displayName;
const Mi = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y(
  "div",
  {
    className: ce(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Mi.displayName = "DialogHeader";
const ki = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  Si,
  {
    ref: n,
    className: ce(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ki.displayName = Si.displayName;
const Il = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  Ci,
  {
    ref: n,
    className: ce("text-sm text-muted-foreground", e),
    ...t
  }
));
Il.displayName = Ci.displayName;
function to(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Di(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = Ne(s), c = n.length;
    n = [...n, s];
    function l(u) {
      const { scope: h, children: p, ..._ } = u, d = (h == null ? void 0 : h[e][c]) || a, m = ne(() => _, Object.values(_));
      return /* @__PURE__ */ y(d.Provider, { value: m, children: p });
    }
    function f(u, h) {
      const p = (h == null ? void 0 : h[e][c]) || a, _ = ke(p);
      if (_) return _;
      if (s !== void 0) return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [l, f];
  }
  const o = () => {
    const i = n.map((s) => Ne(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return ne(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Ml(o, ...t)];
}
function Ml(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return { ...a, ...u };
      }, {});
      return ne(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function kl(e) {
  const t = e + "CollectionProvider", [n, r] = Di(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (p) => {
    const { scope: _, children: d } = p, m = Ce.useRef(null), g = Ce.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y(o, { scope: _, itemMap: g, collectionRef: m, children: d });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", c = Ce.forwardRef(
    (p, _) => {
      const { scope: d, children: m } = p, g = i(a, d), v = te(_, g.collectionRef);
      return /* @__PURE__ */ y(ct, { ref: v, children: m });
    }
  );
  c.displayName = a;
  const l = e + "CollectionItemSlot", f = "data-radix-collection-item", u = Ce.forwardRef(
    (p, _) => {
      const { scope: d, children: m, ...g } = p, v = Ce.useRef(null), b = te(_, v), w = i(l, d);
      return Ce.useEffect(() => (w.itemMap.set(v, { ref: v, ...g }), () => void w.itemMap.delete(v))), /* @__PURE__ */ y(ct, { [f]: "", ref: b, children: m });
    }
  );
  u.displayName = l;
  function h(p) {
    const _ = i(e + "CollectionConsumer", p);
    return Ce.useCallback(() => {
      const m = _.collectionRef.current;
      if (!m) return [];
      const g = Array.from(m.querySelectorAll(`[${f}]`));
      return Array.from(_.itemMap.values()).sort(
        (w, x) => g.indexOf(w.ref.current) - g.indexOf(x.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: u },
    h,
    r
  ];
}
var Dl = Ne(void 0);
function Ll(e) {
  const t = ke(Dl);
  return e || t || "ltr";
}
const $l = ["top", "right", "bottom", "left"], We = Math.min, ue = Math.max, Yt = Math.round, Ht = Math.floor, be = (e) => ({
  x: e,
  y: e
}), Fl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wl = {
  start: "end",
  end: "start"
};
function Dn(e, t, n) {
  return ue(e, We(t, n));
}
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ie(e) {
  return e.split("-")[0];
}
function ft(e) {
  return e.split("-")[1];
}
function fr(e) {
  return e === "x" ? "y" : "x";
}
function pr(e) {
  return e === "y" ? "height" : "width";
}
function He(e) {
  return ["top", "bottom"].includes(Ie(e)) ? "y" : "x";
}
function hr(e) {
  return fr(He(e));
}
function Hl(e, t, n) {
  n === void 0 && (n = !1);
  const r = ft(e), o = hr(e), i = pr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Xt(s)), [s, Xt(s)];
}
function Bl(e) {
  const t = Xt(e);
  return [Ln(e), t, Ln(t)];
}
function Ln(e) {
  return e.replace(/start|end/g, (t) => Wl[t]);
}
function Ul(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Vl(e, t, n, r) {
  const o = ft(e);
  let i = Ul(Ie(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ln)))), i;
}
function Xt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fl[t]);
}
function zl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Li(e) {
  return typeof e != "number" ? zl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function no(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = He(t), s = hr(t), a = pr(s), c = Ie(t), l = i === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (ft(t)) {
    case "start":
      p[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const jl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: u
  } = no(l, r, c), h = r, p = {}, _ = 0;
  for (let d = 0; d < a.length; d++) {
    const {
      name: m,
      fn: g
    } = a[d], {
      x: v,
      y: b,
      data: w,
      reset: x
    } = await g({
      x: f,
      y: u,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = v ?? f, u = b ?? u, p = {
      ...p,
      [m]: {
        ...p[m],
        ...w
      }
    }, x && _ <= 50 && (_++, typeof x == "object" && (x.placement && (h = x.placement), x.rects && (l = x.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : x.rects), {
      x: f,
      y: u
    } = no(l, h, c)), d = -1);
  }
  return {
    x: f,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Pt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = Oe(t, e), _ = Li(p), m = a[h ? u === "floating" ? "reference" : "floating" : u], g = Zt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), v = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), w = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Zt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: v,
    offsetParent: b,
    strategy: c
  }) : v);
  return {
    top: (g.top - x.top + _.top) / w.y,
    bottom: (x.bottom - g.bottom + _.bottom) / w.y,
    left: (g.left - x.left + _.left) / w.x,
    right: (x.right - g.right + _.right) / w.x
  };
}
const Gl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: f = 0
    } = Oe(e, t) || {};
    if (l == null)
      return {};
    const u = Li(f), h = {
      x: n,
      y: r
    }, p = hr(o), _ = pr(p), d = await s.getDimensions(l), m = p === "y", g = m ? "top" : "left", v = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", w = i.reference[_] + i.reference[p] - h[p] - i.floating[_], x = h[p] - i.reference[p], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = P ? P[b] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(P))) && (S = a.floating[b] || i.floating[_]);
    const A = w / 2 - x / 2, L = S / 2 - d[_] / 2 - 1, $ = We(u[g], L), k = We(u[v], L), E = $, B = S - d[_] - k, W = S / 2 - d[_] / 2 + A, q = Dn(E, W, B), D = !c.arrow && ft(o) != null && W !== q && i.reference[_] / 2 - (W < E ? $ : k) - d[_] / 2 < 0, H = D ? W < E ? W - E : W - B : 0;
    return {
      [p]: h[p] + H,
      data: {
        [p]: q,
        centerOffset: W - q - H,
        ...D && {
          alignmentOffset: H
        }
      },
      reset: D
    };
  }
}), Kl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: d = !0,
        ...m
      } = Oe(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = Ie(o), v = He(a), b = Ie(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), x = h || (b || !d ? [Xt(a)] : Bl(a)), P = _ !== "none";
      !h && P && x.push(...Vl(a, d, _, w));
      const S = [a, ...x], A = await Pt(t, m), L = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && L.push(A[g]), u) {
        const W = Hl(o, s, w);
        L.push(A[W[0]], A[W[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: L
      }], !L.every((W) => W <= 0)) {
        var k, E;
        const W = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, q = S[W];
        if (q)
          return {
            data: {
              index: W,
              overflows: $
            },
            reset: {
              placement: q
            }
          };
        let D = (E = $.filter((H) => H.overflows[0] <= 0).sort((H, T) => H.overflows[1] - T.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!D)
          switch (p) {
            case "bestFit": {
              var B;
              const H = (B = $.filter((T) => {
                if (P) {
                  const U = He(T.placement);
                  return U === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((U) => U > 0).reduce((U, ie) => U + ie, 0)]).sort((T, U) => T[1] - U[1])[0]) == null ? void 0 : B[0];
              H && (D = H);
              break;
            }
            case "initialPlacement":
              D = a;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function ro(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function oo(e) {
  return $l.some((t) => e[t] >= 0);
}
const ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Oe(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Pt(t, {
            ...o,
            elementContext: "reference"
          }), s = ro(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: oo(s)
            }
          };
        }
        case "escaped": {
          const i = await Pt(t, {
            ...o,
            altBoundary: !0
          }), s = ro(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: oo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Yl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ie(n), a = ft(n), c = He(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = i && c ? -1 : 1, u = Oe(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: _
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof _ == "number" && (p = a === "end" ? _ * -1 : _), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const Xl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await Yl(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Zl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (m) => {
            let {
              x: g,
              y: v
            } = m;
            return {
              x: g,
              y: v
            };
          }
        },
        ...c
      } = Oe(e, t), l = {
        x: n,
        y: r
      }, f = await Pt(t, c), u = He(Ie(o)), h = fr(u);
      let p = l[h], _ = l[u];
      if (i) {
        const m = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", v = p + f[m], b = p - f[g];
        p = Dn(v, p, b);
      }
      if (s) {
        const m = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = _ + f[m], b = _ - f[g];
        _ = Dn(v, _, b);
      }
      const d = a.fn({
        ...t,
        [h]: p,
        [u]: _
      });
      return {
        ...d,
        data: {
          x: d.x - n,
          y: d.y - r,
          enabled: {
            [h]: i,
            [u]: s
          }
        }
      };
    }
  };
}, Ql = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Oe(e, t), f = {
        x: n,
        y: r
      }, u = He(o), h = fr(u);
      let p = f[h], _ = f[u];
      const d = Oe(a, t), m = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...d
      };
      if (c) {
        const b = h === "y" ? "height" : "width", w = i.reference[h] - i.floating[b] + m.mainAxis, x = i.reference[h] + i.reference[b] - m.mainAxis;
        p < w ? p = w : p > x && (p = x);
      }
      if (l) {
        var g, v;
        const b = h === "y" ? "width" : "height", w = ["top", "left"].includes(Ie(o)), x = i.reference[u] - i.floating[b] + (w && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (w ? 0 : m.crossAxis), P = i.reference[u] + i.reference[b] + (w ? 0 : ((v = s.offset) == null ? void 0 : v[u]) || 0) - (w ? m.crossAxis : 0);
        _ < x ? _ = x : _ > P && (_ = P);
      }
      return {
        [h]: p,
        [u]: _
      };
    }
  };
}, Jl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Oe(e, t), f = await Pt(t, l), u = Ie(o), h = ft(o), p = He(o) === "y", {
        width: _,
        height: d
      } = i.floating;
      let m, g;
      u === "top" || u === "bottom" ? (m = u, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, m = h === "end" ? "top" : "bottom");
      const v = d - f.top - f.bottom, b = _ - f.left - f.right, w = We(d - f[m], v), x = We(_ - f[g], b), P = !t.middlewareData.shift;
      let S = w, A = x;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = b), (r = t.middlewareData.shift) != null && r.enabled.y && (S = v), P && !h) {
        const $ = ue(f.left, 0), k = ue(f.right, 0), E = ue(f.top, 0), B = ue(f.bottom, 0);
        p ? A = _ - 2 * ($ !== 0 || k !== 0 ? $ + k : ue(f.left, f.right)) : S = d - 2 * (E !== 0 || B !== 0 ? E + B : ue(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: A,
        availableHeight: S
      });
      const L = await s.getDimensions(a.floating);
      return _ !== L.width || d !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function sn() {
  return typeof window < "u";
}
function pt(e) {
  return $i(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xe(e) {
  var t;
  return (t = ($i(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $i(e) {
  return sn() ? e instanceof Node || e instanceof de(e).Node : !1;
}
function he(e) {
  return sn() ? e instanceof Element || e instanceof de(e).Element : !1;
}
function we(e) {
  return sn() ? e instanceof HTMLElement || e instanceof de(e).HTMLElement : !1;
}
function io(e) {
  return !sn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function Ot(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function eu(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function an(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function mr(e) {
  const t = gr(), n = he(e) ? me(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tu(e) {
  let t = Be(e);
  for (; we(t) && !lt(t); ) {
    if (mr(t))
      return t;
    if (an(t))
      return null;
    t = Be(t);
  }
  return null;
}
function gr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function lt(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function me(e) {
  return de(e).getComputedStyle(e);
}
function cn(e) {
  return he(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Be(e) {
  if (pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    io(e) && e.host || // Fallback.
    xe(e)
  );
  return io(t) ? t.host : t;
}
function Fi(e) {
  const t = Be(e);
  return lt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : we(t) && Ot(t) ? t : Fi(t);
}
function Nt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Fi(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = de(o);
  if (i) {
    const a = $n(s);
    return t.concat(s, s.visualViewport || [], Ot(o) ? o : [], a && n ? Nt(a) : []);
  }
  return t.concat(o, Nt(o, [], n));
}
function $n(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wi(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = we(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Yt(n) !== i || Yt(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function vr(e) {
  return he(e) ? e : e.contextElement;
}
function ot(e) {
  const t = vr(e);
  if (!we(t))
    return be(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Wi(t);
  let s = (i ? Yt(n.width) : n.width) / r, a = (i ? Yt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const nu = /* @__PURE__ */ be(0);
function Hi(e) {
  const t = de(e);
  return !gr() || !t.visualViewport ? nu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ru(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function Ke(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = vr(e);
  let s = be(1);
  t && (r ? he(r) && (s = ot(r)) : s = ot(e));
  const a = ru(i, n, r) ? Hi(i) : be(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, f = o.width / s.x, u = o.height / s.y;
  if (i) {
    const h = de(i), p = r && he(r) ? de(r) : r;
    let _ = h, d = $n(_);
    for (; d && r && p !== _; ) {
      const m = ot(d), g = d.getBoundingClientRect(), v = me(d), b = g.left + (d.clientLeft + parseFloat(v.paddingLeft)) * m.x, w = g.top + (d.clientTop + parseFloat(v.paddingTop)) * m.y;
      c *= m.x, l *= m.y, f *= m.x, u *= m.y, c += b, l += w, _ = de(d), d = $n(_);
    }
  }
  return Zt({
    width: f,
    height: u,
    x: c,
    y: l
  });
}
function _r(e, t) {
  const n = cn(e).scrollLeft;
  return t ? t.left + n : Ke(xe(e)).left + n;
}
function Bi(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    _r(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ou(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = xe(r), a = t ? an(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = be(1);
  const f = be(0), u = we(r);
  if ((u || !u && !i) && ((pt(r) !== "body" || Ot(s)) && (c = cn(r)), we(r))) {
    const p = Ke(r);
    l = ot(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = s && !u && !i ? Bi(s, c, !0) : be(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function iu(e) {
  return Array.from(e.getClientRects());
}
function su(e) {
  const t = xe(e), n = cn(e), r = e.ownerDocument.body, o = ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + _r(e);
  const a = -n.scrollTop;
  return me(r).direction === "rtl" && (s += ue(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function au(e, t) {
  const n = de(e), r = xe(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = gr();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function cu(e, t) {
  const n = Ke(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = we(e) ? ot(e) : be(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function so(e, t, n) {
  let r;
  if (t === "viewport")
    r = au(e, n);
  else if (t === "document")
    r = su(xe(e));
  else if (he(t))
    r = cu(t, n);
  else {
    const o = Hi(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Zt(r);
}
function Ui(e, t) {
  const n = Be(e);
  return n === t || !he(n) || lt(n) ? !1 : me(n).position === "fixed" || Ui(n, t);
}
function lu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nt(e, [], !1).filter((a) => he(a) && pt(a) !== "body"), o = null;
  const i = me(e).position === "fixed";
  let s = i ? Be(e) : e;
  for (; he(s) && !lt(s); ) {
    const a = me(s), c = mr(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ot(s) && !c && Ui(e, s)) ? r = r.filter((f) => f !== s) : o = a, s = Be(s);
  }
  return t.set(e, r), r;
}
function uu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? an(t) ? [] : lu(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, f) => {
    const u = so(t, f, o);
    return l.top = ue(u.top, l.top), l.right = We(u.right, l.right), l.bottom = We(u.bottom, l.bottom), l.left = ue(u.left, l.left), l;
  }, so(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function du(e) {
  const {
    width: t,
    height: n
  } = Wi(e);
  return {
    width: t,
    height: n
  };
}
function fu(e, t, n) {
  const r = we(t), o = xe(t), i = n === "fixed", s = Ke(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = be(0);
  if (r || !r && !i)
    if ((pt(t) !== "body" || Ot(o)) && (a = cn(t)), r) {
      const h = Ke(t, !0, i, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && (c.x = _r(o));
  const l = o && !r && !i ? Bi(o, a) : be(0), f = s.left + a.scrollLeft - c.x - l.x, u = s.top + a.scrollTop - c.y - l.y;
  return {
    x: f,
    y: u,
    width: s.width,
    height: s.height
  };
}
function xn(e) {
  return me(e).position === "static";
}
function ao(e, t) {
  if (!we(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return xe(e) === n && (n = n.ownerDocument.body), n;
}
function Vi(e, t) {
  const n = de(e);
  if (an(e))
    return n;
  if (!we(e)) {
    let o = Be(e);
    for (; o && !lt(o); ) {
      if (he(o) && !xn(o))
        return o;
      o = Be(o);
    }
    return n;
  }
  let r = ao(e, t);
  for (; r && eu(r) && xn(r); )
    r = ao(r, t);
  return r && lt(r) && xn(r) && !mr(r) ? n : r || tu(e) || n;
}
const pu = async function(e) {
  const t = this.getOffsetParent || Vi, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: fu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function hu(e) {
  return me(e).direction === "rtl";
}
const mu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ou,
  getDocumentElement: xe,
  getClippingRect: uu,
  getOffsetParent: Vi,
  getElementRects: pu,
  getClientRects: iu,
  getDimensions: du,
  getScale: ot,
  isElement: he,
  isRTL: hu
};
function gu(e, t) {
  let n = null, r;
  const o = xe(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: f,
      width: u,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !u || !h)
      return;
    const p = Ht(f), _ = Ht(o.clientWidth - (l + u)), d = Ht(o.clientHeight - (f + h)), m = Ht(l), v = {
      rootMargin: -p + "px " + -_ + "px " + -d + "px " + -m + "px",
      threshold: ue(0, We(1, c)) || 1
    };
    let b = !0;
    function w(x) {
      const P = x[0].intersectionRatio;
      if (P !== c) {
        if (!b)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, v);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function vu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = vr(e), f = o || i ? [...l ? Nt(l) : [], ...Nt(t)] : [];
  f.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = l && a ? gu(l, n) : null;
  let h = -1, p = null;
  s && (p = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let _, d = c ? Ke(e) : null;
  c && m();
  function m() {
    const g = Ke(e);
    d && (g.x !== d.x || g.y !== d.y || g.width !== d.width || g.height !== d.height) && n(), d = g, _ = requestAnimationFrame(m);
  }
  return n(), () => {
    var g;
    f.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), u == null || u(), (g = p) == null || g.disconnect(), p = null, c && cancelAnimationFrame(_);
  };
}
const _u = Xl, yu = Zl, bu = Kl, wu = Jl, xu = ql, co = Gl, Su = Ql, Cu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mu,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return jl(e, t, {
    ...o,
    platform: i
  });
};
var jt = typeof document < "u" ? Me : F;
function Qt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Qt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Qt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lo(e, t) {
  const n = zi(e);
  return Math.round(t * n) / n;
}
function Sn(e) {
  const t = O(e);
  return jt(() => {
    t.current = e;
  }), t;
}
function Eu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [f, u] = N({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = N(r);
  Qt(h, r) || p(r);
  const [_, d] = N(null), [m, g] = N(null), v = V((T) => {
    T !== P.current && (P.current = T, d(T));
  }, []), b = V((T) => {
    T !== S.current && (S.current = T, g(T));
  }, []), w = i || _, x = s || m, P = O(null), S = O(null), A = O(f), L = c != null, $ = Sn(c), k = Sn(o), E = Sn(l), B = V(() => {
    if (!P.current || !S.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: h
    };
    k.current && (T.platform = k.current), Cu(P.current, S.current, T).then((U) => {
      const ie = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: E.current !== !1
      };
      W.current && !Qt(A.current, ie) && (A.current = ie, nn(() => {
        u(ie);
      }));
    });
  }, [h, t, n, k, E]);
  jt(() => {
    l === !1 && A.current.isPositioned && (A.current.isPositioned = !1, u((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [l]);
  const W = O(!1);
  jt(() => (W.current = !0, () => {
    W.current = !1;
  }), []), jt(() => {
    if (w && (P.current = w), x && (S.current = x), w && x) {
      if ($.current)
        return $.current(w, x, B);
      B();
    }
  }, [w, x, B, $, L]);
  const q = ne(() => ({
    reference: P,
    floating: S,
    setReference: v,
    setFloating: b
  }), [v, b]), D = ne(() => ({
    reference: w,
    floating: x
  }), [w, x]), H = ne(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return T;
    const U = lo(D.floating, f.x), ie = lo(D.floating, f.y);
    return a ? {
      ...T,
      transform: "translate(" + U + "px, " + ie + "px)",
      ...zi(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: ie
    };
  }, [n, a, D.floating, f.x, f.y]);
  return ne(() => ({
    ...f,
    update: B,
    refs: q,
    elements: D,
    floatingStyles: H
  }), [f, B, q, D, H]);
}
const Pu = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? co({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? co({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Nu = (e, t) => ({
  ..._u(e),
  options: [e, t]
}), Au = (e, t) => ({
  ...yu(e),
  options: [e, t]
}), Tu = (e, t) => ({
  ...Su(e),
  options: [e, t]
}), Ru = (e, t) => ({
  ...bu(e),
  options: [e, t]
}), Ou = (e, t) => ({
  ...wu(e),
  options: [e, t]
}), Iu = (e, t) => ({
  ...xu(e),
  options: [e, t]
}), Mu = (e, t) => ({
  ...Pu(e),
  options: [e, t]
});
var ku = "Arrow", ji = C((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ y(
    Q.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ y("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ji.displayName = ku;
var Du = ji;
function Lu(e) {
  const [t, n] = N(void 0);
  return ae(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var yr = "Popper", [Gi, Ki] = Di(yr), [$u, qi] = Gi(yr), Yi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = N(null);
  return /* @__PURE__ */ y($u, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Yi.displayName = yr;
var Xi = "PopperAnchor", Zi = C(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = qi(Xi, n), s = O(null), a = te(t, s);
    return F(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ y(Q.div, { ...o, ref: a });
  }
);
Zi.displayName = Xi;
var br = "PopperContent", [Fu, Wu] = Gi(br), Qi = C(
  (e, t) => {
    var R, Y, se, K, z, j;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: _,
      ...d
    } = e, m = qi(br, n), [g, v] = N(null), b = te(t, (le) => v(le)), [w, x] = N(null), P = Lu(w), S = (P == null ? void 0 : P.width) ?? 0, A = (P == null ? void 0 : P.height) ?? 0, L = r + (i !== "center" ? "-" + i : ""), $ = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, k = Array.isArray(l) ? l : [l], E = k.length > 0, B = {
      padding: $,
      boundary: k.filter(Bu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: E
    }, { refs: W, floatingStyles: q, placement: D, isPositioned: H, middlewareData: T } = Eu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...le) => vu(...le, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        Nu({ mainAxis: o + A, alignmentAxis: s }),
        c && Au({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Tu() : void 0,
          ...B
        }),
        c && Ru({ ...B }),
        Ou({
          ...B,
          apply: ({ elements: le, rects: ve, availableWidth: vt, availableHeight: _t }) => {
            const { width: yt, height: zs } = ve.reference, Mt = le.floating.style;
            Mt.setProperty("--radix-popper-available-width", `${vt}px`), Mt.setProperty("--radix-popper-available-height", `${_t}px`), Mt.setProperty("--radix-popper-anchor-width", `${yt}px`), Mt.setProperty("--radix-popper-anchor-height", `${zs}px`);
          }
        }),
        w && Mu({ element: w, padding: a }),
        Uu({ arrowWidth: S, arrowHeight: A }),
        h && Iu({ strategy: "referenceHidden", ...B })
      ]
    }), [U, ie] = ts(D), re = Re(_);
    ae(() => {
      H && (re == null || re());
    }, [H, re]);
    const mt = (R = T.arrow) == null ? void 0 : R.x, gt = (Y = T.arrow) == null ? void 0 : Y.y, De = ((se = T.arrow) == null ? void 0 : se.centerOffset) !== 0, [Xe, ze] = N();
    return ae(() => {
      g && ze(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ y(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: H ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Xe,
          "--radix-popper-transform-origin": [
            (K = T.transformOrigin) == null ? void 0 : K.x,
            (z = T.transformOrigin) == null ? void 0 : z.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = T.hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ y(
          Fu,
          {
            scope: n,
            placedSide: U,
            onArrowChange: x,
            arrowX: mt,
            arrowY: gt,
            shouldHideArrow: De,
            children: /* @__PURE__ */ y(
              Q.div,
              {
                "data-side": U,
                "data-align": ie,
                ...d,
                ref: b,
                style: {
                  ...d.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Qi.displayName = br;
var Ji = "PopperArrow", Hu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, es = C(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Wu(Ji, r), s = Hu[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ y(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ y(
          Du,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
es.displayName = Ji;
function Bu(e) {
  return e !== null;
}
var Uu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var m, g, v;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, f] = ts(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, p = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
    let _ = "", d = "";
    return l === "bottom" ? (_ = s ? u : `${h}px`, d = `${-c}px`) : l === "top" ? (_ = s ? u : `${h}px`, d = `${r.floating.height + c}px`) : l === "right" ? (_ = `${-c}px`, d = s ? u : `${p}px`) : l === "left" && (_ = `${r.floating.width + c}px`, d = s ? u : `${p}px`), { data: { x: _, y: d } };
  }
});
function ts(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Vu = Yi, zu = Zi, ju = Qi, Gu = es;
function Ku(e) {
  const t = O({ value: e, previous: e });
  return ne(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var qu = "VisuallyHidden", ns = C(
  (e, t) => /* @__PURE__ */ y(
    Q.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
ns.displayName = qu;
var Yu = [" ", "Enter", "ArrowUp", "ArrowDown"], Xu = [" ", "Enter"], It = "Select", [ln, un, Zu] = kl(It), [ht, Id] = Go(It, [
  Zu,
  Ki
]), dn = Ki(), [Qu, Ue] = ht(It), [Ju, ed] = ht(It), rs = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: c,
    dir: l,
    name: f,
    autoComplete: u,
    disabled: h,
    required: p,
    form: _
  } = e, d = dn(t), [m, g] = N(null), [v, b] = N(null), [w, x] = N(!1), P = Ll(l), [S = !1, A] = Rn({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [L, $] = Rn({
    prop: s,
    defaultProp: a,
    onChange: c
  }), k = O(null), E = m ? _ || !!m.closest("form") : !0, [B, W] = N(/* @__PURE__ */ new Set()), q = Array.from(B).map((D) => D.props.value).join(";");
  return /* @__PURE__ */ y(Vu, { ...d, children: /* @__PURE__ */ y(
    Qu,
    {
      required: p,
      scope: t,
      trigger: m,
      onTriggerChange: g,
      valueNode: v,
      onValueNodeChange: b,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: x,
      contentId: tt(),
      value: L,
      onValueChange: $,
      open: S,
      onOpenChange: A,
      dir: P,
      triggerPointerDownPosRef: k,
      disabled: h,
      children: [
        /* @__PURE__ */ y(ln.Provider, { scope: t, children: /* @__PURE__ */ y(
          Ju,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: V((D) => {
              W((H) => new Set(H).add(D));
            }, []),
            onNativeOptionRemove: V((D) => {
              W((H) => {
                const T = new Set(H);
                return T.delete(D), T;
              });
            }, []),
            children: n
          }
        ) }),
        E ? /* @__PURE__ */ y(
          As,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: L,
            onChange: (D) => $(D.target.value),
            disabled: h,
            form: _,
            children: [
              L === void 0 ? /* @__PURE__ */ y("option", { value: "" }) : null,
              Array.from(B)
            ]
          },
          q
        ) : null
      ]
    }
  ) });
};
rs.displayName = It;
var os = "SelectTrigger", is = C(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = dn(n), s = Ue(os, n), a = s.disabled || r, c = te(t, s.onTriggerChange), l = un(n), f = O("touch"), [u, h, p] = Ts((d) => {
      const m = l().filter((b) => !b.disabled), g = m.find((b) => b.value === s.value), v = Rs(m, d, g);
      v !== void 0 && s.onValueChange(v.value);
    }), _ = (d) => {
      a || (s.onOpenChange(!0), p()), d && (s.triggerPointerDownPosRef.current = {
        x: Math.round(d.pageX),
        y: Math.round(d.pageY)
      });
    };
    return /* @__PURE__ */ y(zu, { asChild: !0, ...i, children: /* @__PURE__ */ y(
      Q.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Ns(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Z(o.onClick, (d) => {
          d.currentTarget.focus(), f.current !== "mouse" && _(d);
        }),
        onPointerDown: Z(o.onPointerDown, (d) => {
          f.current = d.pointerType;
          const m = d.target;
          m.hasPointerCapture(d.pointerId) && m.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (_(d), d.preventDefault());
        }),
        onKeyDown: Z(o.onKeyDown, (d) => {
          const m = u.current !== "";
          !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && h(d.key), !(m && d.key === " ") && Yu.includes(d.key) && (_(), d.preventDefault());
        })
      }
    ) });
  }
);
is.displayName = os;
var ss = "SelectValue", as = C(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, c = Ue(ss, n), { onValueNodeHasChildrenChange: l } = c, f = i !== void 0, u = te(t, c.onValueNodeChange);
    return ae(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ y(
      Q.span,
      {
        ...a,
        ref: u,
        style: { pointerEvents: "none" },
        children: Ns(c.value) ? /* @__PURE__ */ y(oe, { children: s }) : i
      }
    );
  }
);
as.displayName = ss;
var td = "SelectIcon", cs = C(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ y(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
cs.displayName = td;
var nd = "SelectPortal", ls = (e) => /* @__PURE__ */ y(ir, { asChild: !0, ...e });
ls.displayName = nd;
var qe = "SelectContent", us = C(
  (e, t) => {
    const n = Ue(qe, e.__scopeSelect), [r, o] = N();
    if (ae(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? tn(
        /* @__PURE__ */ y(ds, { scope: e.__scopeSelect, children: /* @__PURE__ */ y(ln.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ y("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ y(fs, { ...e, ref: t });
  }
);
us.displayName = qe;
var fe = 10, [ds, Ve] = ht(qe), rd = "SelectContentImpl", fs = C(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: _,
      hideWhenDetached: d,
      avoidCollisions: m,
      //
      ...g
    } = e, v = Ue(qe, n), [b, w] = N(null), [x, P] = N(null), S = te(t, (R) => w(R)), [A, L] = N(null), [$, k] = N(
      null
    ), E = un(n), [B, W] = N(!1), q = O(!1);
    F(() => {
      if (b) return ii(b);
    }, [b]), Xo();
    const D = V(
      (R) => {
        const [Y, ...se] = E().map((j) => j.ref.current), [K] = se.slice(-1), z = document.activeElement;
        for (const j of R)
          if (j === z || (j == null || j.scrollIntoView({ block: "nearest" }), j === Y && x && (x.scrollTop = 0), j === K && x && (x.scrollTop = x.scrollHeight), j == null || j.focus(), document.activeElement !== z)) return;
      },
      [E, x]
    ), H = V(
      () => D([A, b]),
      [D, A, b]
    );
    F(() => {
      B && H();
    }, [B, H]);
    const { onOpenChange: T, triggerPointerDownPosRef: U } = v;
    F(() => {
      if (b) {
        let R = { x: 0, y: 0 };
        const Y = (K) => {
          var z, j;
          R = {
            x: Math.abs(Math.round(K.pageX) - (((z = U.current) == null ? void 0 : z.x) ?? 0)),
            y: Math.abs(Math.round(K.pageY) - (((j = U.current) == null ? void 0 : j.y) ?? 0))
          };
        }, se = (K) => {
          R.x <= 10 && R.y <= 10 ? K.preventDefault() : b.contains(K.target) || T(!1), document.removeEventListener("pointermove", Y), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", se, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", se, { capture: !0 });
        };
      }
    }, [b, T, U]), F(() => {
      const R = () => T(!1);
      return window.addEventListener("blur", R), window.addEventListener("resize", R), () => {
        window.removeEventListener("blur", R), window.removeEventListener("resize", R);
      };
    }, [T]);
    const [ie, re] = Ts((R) => {
      const Y = E().filter((z) => !z.disabled), se = Y.find((z) => z.ref.current === document.activeElement), K = Rs(Y, R, se);
      K && setTimeout(() => K.ref.current.focus());
    }), mt = V(
      (R, Y, se) => {
        const K = !q.current && !se;
        (v.value !== void 0 && v.value === Y || K) && (L(R), K && (q.current = !0));
      },
      [v.value]
    ), gt = V(() => b == null ? void 0 : b.focus(), [b]), De = V(
      (R, Y, se) => {
        const K = !q.current && !se;
        (v.value !== void 0 && v.value === Y || K) && k(R);
      },
      [v.value]
    ), Xe = r === "popper" ? Fn : ps, ze = Xe === Fn ? {
      side: a,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: _,
      hideWhenDetached: d,
      avoidCollisions: m
    } : {};
    return /* @__PURE__ */ y(
      ds,
      {
        scope: n,
        content: b,
        viewport: x,
        onViewportChange: P,
        itemRefCallback: mt,
        selectedItem: A,
        onItemLeave: gt,
        itemTextRefCallback: De,
        focusSelectedItem: H,
        selectedItemText: $,
        position: r,
        isPositioned: B,
        searchRef: ie,
        children: /* @__PURE__ */ y(sr, { as: ct, allowPinchZoom: !0, children: /* @__PURE__ */ y(
          or,
          {
            asChild: !0,
            trapped: v.open,
            onMountAutoFocus: (R) => {
              R.preventDefault();
            },
            onUnmountAutoFocus: Z(o, (R) => {
              var Y;
              (Y = v.trigger) == null || Y.focus({ preventScroll: !0 }), R.preventDefault();
            }),
            children: /* @__PURE__ */ y(
              rr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (R) => R.preventDefault(),
                onDismiss: () => v.onOpenChange(!1),
                children: /* @__PURE__ */ y(
                  Xe,
                  {
                    role: "listbox",
                    id: v.contentId,
                    "data-state": v.open ? "open" : "closed",
                    dir: v.dir,
                    onContextMenu: (R) => R.preventDefault(),
                    ...g,
                    ...ze,
                    onPlaced: () => W(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: Z(g.onKeyDown, (R) => {
                      const Y = R.ctrlKey || R.altKey || R.metaKey;
                      if (R.key === "Tab" && R.preventDefault(), !Y && R.key.length === 1 && re(R.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(R.key)) {
                        let K = E().filter((z) => !z.disabled).map((z) => z.ref.current);
                        if (["ArrowUp", "End"].includes(R.key) && (K = K.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(R.key)) {
                          const z = R.target, j = K.indexOf(z);
                          K = K.slice(j + 1);
                        }
                        setTimeout(() => D(K)), R.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
fs.displayName = rd;
var od = "SelectItemAlignedPosition", ps = C((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Ue(qe, n), s = Ve(qe, n), [a, c] = N(null), [l, f] = N(null), u = te(t, (S) => f(S)), h = un(n), p = O(!1), _ = O(!0), { viewport: d, selectedItem: m, selectedItemText: g, focusSelectedItem: v } = s, b = V(() => {
    if (i.trigger && i.valueNode && a && l && d && m && g) {
      const S = i.trigger.getBoundingClientRect(), A = l.getBoundingClientRect(), L = i.valueNode.getBoundingClientRect(), $ = g.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const z = $.left - A.left, j = L.left - z, le = S.left - j, ve = S.width + le, vt = Math.max(ve, A.width), _t = window.innerWidth - fe, yt = to(j, [
          fe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(fe, _t - vt)
        ]);
        a.style.minWidth = ve + "px", a.style.left = yt + "px";
      } else {
        const z = A.right - $.right, j = window.innerWidth - L.right - z, le = window.innerWidth - S.right - j, ve = S.width + le, vt = Math.max(ve, A.width), _t = window.innerWidth - fe, yt = to(j, [
          fe,
          Math.max(fe, _t - vt)
        ]);
        a.style.minWidth = ve + "px", a.style.right = yt + "px";
      }
      const k = h(), E = window.innerHeight - fe * 2, B = d.scrollHeight, W = window.getComputedStyle(l), q = parseInt(W.borderTopWidth, 10), D = parseInt(W.paddingTop, 10), H = parseInt(W.borderBottomWidth, 10), T = parseInt(W.paddingBottom, 10), U = q + D + B + T + H, ie = Math.min(m.offsetHeight * 5, U), re = window.getComputedStyle(d), mt = parseInt(re.paddingTop, 10), gt = parseInt(re.paddingBottom, 10), De = S.top + S.height / 2 - fe, Xe = E - De, ze = m.offsetHeight / 2, R = m.offsetTop + ze, Y = q + D + R, se = U - Y;
      if (Y <= De) {
        const z = k.length > 0 && m === k[k.length - 1].ref.current;
        a.style.bottom = "0px";
        const j = l.clientHeight - d.offsetTop - d.offsetHeight, le = Math.max(
          Xe,
          ze + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (z ? gt : 0) + j + H
        ), ve = Y + le;
        a.style.height = ve + "px";
      } else {
        const z = k.length > 0 && m === k[0].ref.current;
        a.style.top = "0px";
        const le = Math.max(
          De,
          q + d.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (z ? mt : 0) + ze
        ) + se;
        a.style.height = le + "px", d.scrollTop = Y - De + d.offsetTop;
      }
      a.style.margin = `${fe}px 0`, a.style.minHeight = ie + "px", a.style.maxHeight = E + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    i.trigger,
    i.valueNode,
    a,
    l,
    d,
    m,
    g,
    i.dir,
    r
  ]);
  ae(() => b(), [b]);
  const [w, x] = N();
  ae(() => {
    l && x(window.getComputedStyle(l).zIndex);
  }, [l]);
  const P = V(
    (S) => {
      S && _.current === !0 && (b(), v == null || v(), _.current = !1);
    },
    [b, v]
  );
  return /* @__PURE__ */ y(
    sd,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ y(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w
          },
          children: /* @__PURE__ */ y(
            Q.div,
            {
              ...o,
              ref: u,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
ps.displayName = od;
var id = "SelectPopperPosition", Fn = C((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = fe,
    ...i
  } = e, s = dn(n);
  return /* @__PURE__ */ y(
    ju,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Fn.displayName = id;
var [sd, wr] = ht(qe, {}), Wn = "SelectViewport", hs = C(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Ve(Wn, n), s = wr(Wn, n), a = te(t, i.onViewportChange), c = O(0);
    return /* @__PURE__ */ y(oe, { children: [
      /* @__PURE__ */ y(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ y(ln.Slot, { scope: n, children: /* @__PURE__ */ y(
        Q.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: Z(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && u) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const _ = window.innerHeight - fe * 2, d = parseFloat(u.style.minHeight), m = parseFloat(u.style.height), g = Math.max(d, m);
                if (g < _) {
                  const v = g + p, b = Math.min(_, v), w = v - b;
                  u.style.height = b + "px", u.style.bottom === "0px" && (f.scrollTop = w > 0 ? w : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
hs.displayName = Wn;
var ms = "SelectGroup", [ad, cd] = ht(ms), ld = C(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = tt();
    return /* @__PURE__ */ y(ad, { scope: n, id: o, children: /* @__PURE__ */ y(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ld.displayName = ms;
var gs = "SelectLabel", vs = C(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = cd(gs, n);
    return /* @__PURE__ */ y(Q.div, { id: o.id, ...r, ref: t });
  }
);
vs.displayName = gs;
var Jt = "SelectItem", [ud, _s] = ht(Jt), ys = C(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = Ue(Jt, n), c = Ve(Jt, n), l = a.value === r, [f, u] = N(i ?? ""), [h, p] = N(!1), _ = te(
      t,
      (v) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, v, r, o);
      }
    ), d = tt(), m = O("touch"), g = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ y(
      ud,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: d,
        isSelected: l,
        onItemTextChange: V((v) => {
          u((b) => b || ((v == null ? void 0 : v.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ y(
          ln.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ y(
              Q.div,
              {
                role: "option",
                "aria-labelledby": d,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: _,
                onFocus: Z(s.onFocus, () => p(!0)),
                onBlur: Z(s.onBlur, () => p(!1)),
                onClick: Z(s.onClick, () => {
                  m.current !== "mouse" && g();
                }),
                onPointerUp: Z(s.onPointerUp, () => {
                  m.current === "mouse" && g();
                }),
                onPointerDown: Z(s.onPointerDown, (v) => {
                  m.current = v.pointerType;
                }),
                onPointerMove: Z(s.onPointerMove, (v) => {
                  var b;
                  m.current = v.pointerType, o ? (b = c.onItemLeave) == null || b.call(c) : m.current === "mouse" && v.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Z(s.onPointerLeave, (v) => {
                  var b;
                  v.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: Z(s.onKeyDown, (v) => {
                  var w;
                  ((w = c.searchRef) == null ? void 0 : w.current) !== "" && v.key === " " || (Xu.includes(v.key) && g(), v.key === " " && v.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ys.displayName = Jt;
var xt = "SelectItemText", bs = C(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = Ue(xt, n), a = Ve(xt, n), c = _s(xt, n), l = ed(xt, n), [f, u] = N(null), h = te(
      t,
      (g) => u(g),
      c.onItemTextChange,
      (g) => {
        var v;
        return (v = a.itemTextRefCallback) == null ? void 0 : v.call(a, g, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, _ = ne(
      () => /* @__PURE__ */ y("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: d, onNativeOptionRemove: m } = l;
    return ae(() => (d(_), () => m(_)), [d, m, _]), /* @__PURE__ */ y(oe, { children: [
      /* @__PURE__ */ y(Q.span, { id: c.textId, ...i, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? tn(i.children, s.valueNode) : null
    ] });
  }
);
bs.displayName = xt;
var ws = "SelectItemIndicator", xs = C(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return _s(ws, n).isSelected ? /* @__PURE__ */ y(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
xs.displayName = ws;
var Hn = "SelectScrollUpButton", Ss = C((e, t) => {
  const n = Ve(Hn, e.__scopeSelect), r = wr(Hn, e.__scopeSelect), [o, i] = N(!1), s = te(t, r.onScrollButtonChange);
  return ae(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const l = c.scrollTop > 0;
        i(l);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ y(
    Es,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Ss.displayName = Hn;
var Bn = "SelectScrollDownButton", Cs = C((e, t) => {
  const n = Ve(Bn, e.__scopeSelect), r = wr(Bn, e.__scopeSelect), [o, i] = N(!1), s = te(t, r.onScrollButtonChange);
  return ae(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        i(f);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ y(
    Es,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Cs.displayName = Bn;
var Es = C((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Ve("SelectScrollButton", n), s = O(null), a = un(n), c = V(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return F(() => () => c(), [c]), ae(() => {
    var f;
    const l = a().find((u) => u.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ y(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Z(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: Z(o.onPointerMove, () => {
        var l;
        (l = i.onItemLeave) == null || l.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Z(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), dd = "SelectSeparator", Ps = C(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ y(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ps.displayName = dd;
var Un = "SelectArrow", fd = C(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = dn(n), i = Ue(Un, n), s = Ve(Un, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ y(Gu, { ...o, ...r, ref: t }) : null;
  }
);
fd.displayName = Un;
function Ns(e) {
  return e === "" || e === void 0;
}
var As = C(
  (e, t) => {
    const { value: n, ...r } = e, o = O(null), i = te(t, o), s = Ku(n);
    return F(() => {
      const a = o.current, c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== n && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(u);
      }
    }, [s, n]), /* @__PURE__ */ y(ns, { asChild: !0, children: /* @__PURE__ */ y("select", { ...r, ref: i, defaultValue: n }) });
  }
);
As.displayName = "BubbleSelect";
function Ts(e) {
  const t = Re(e), n = O(""), r = O(0), o = V(
    (s) => {
      const a = n.current + s;
      t(a), function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), i = V(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return F(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Rs(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = pd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function pd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var hd = rs, Os = is, md = as, gd = cs, vd = ls, Is = us, _d = hs, Ms = vs, ks = ys, yd = bs, bd = xs, Ds = Ss, Ls = Cs, $s = Ps;
const wd = hd, xd = md, Fs = C(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y(
  Os,
  {
    ref: r,
    className: ce(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ y(gd, { asChild: !0, children: /* @__PURE__ */ y(zo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Fs.displayName = Os.displayName;
const Ws = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  Ds,
  {
    ref: n,
    className: ce(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ y(ba, { className: "h-4 w-4" })
  }
));
Ws.displayName = Ds.displayName;
const Hs = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  Ls,
  {
    ref: n,
    className: ce(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ y(zo, { className: "h-4 w-4" })
  }
));
Hs.displayName = Ls.displayName;
const Bs = C(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ y(vd, { children: /* @__PURE__ */ y(
  Is,
  {
    ref: o,
    className: ce(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ y(Ws, {}),
      /* @__PURE__ */ y(
        _d,
        {
          className: ce(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ y(Hs, {})
    ]
  }
) }));
Bs.displayName = Is.displayName;
const Sd = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  Ms,
  {
    ref: n,
    className: ce("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Sd.displayName = Ms.displayName;
const Us = C(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y(
  ks,
  {
    ref: r,
    className: ce(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ y("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y(bd, { children: /* @__PURE__ */ y(ya, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ y(yd, { children: t })
    ]
  }
));
Us.displayName = ks.displayName;
const Cd = C(({ className: e, ...t }, n) => /* @__PURE__ */ y(
  $s,
  {
    ref: n,
    className: ce("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Cd.displayName = $s.displayName;
function Bt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: ce("animate-pulse rounded-md bg-primary/10", e),
      ...t
    }
  );
}
const Ed = [
  "ui-kit",
  "merchant-center-application-kit",
  // 'merchant-center-frontend',
  // 'merchant-center-services',
  // 'monster',
  // 'identity',
  "test-data"
  // 'test-data-generation'
], Vs = "__fec-dashboard-open-event__", uo = (e, t) => {
  const o = new DOMParser().parseFromString(e, "text/html").querySelectorAll('div[id*="issue_"]');
  return Array.from(o).map((i) => {
    var h, p;
    const s = i.id.split("_")[1], a = i.querySelector("a.markdown-title").textContent, c = "https://github.com" + i.querySelector("a.markdown-title").getAttribute("href"), l = i.querySelector(".opened-by").textContent, f = (h = i.querySelector("img.avatar-user")) == null ? void 0 : h.getAttribute("src"), u = (p = i.querySelector("img.avatar-user")) == null ? void 0 : p.getAttribute("alt");
    return {
      id: s,
      title: a,
      url: c,
      description: l,
      userAvatarUrl: f,
      userName: u,
      repositoryName: t
    };
  });
}, Pd = async (e) => {
  if (window.location.hostname === "localhost")
    return new Promise((r) => {
      setTimeout(async () => {
        const o = await import("./repository-prs-html-response-CqvM6TSW.js");
        r(uo(o.prsListHtml, e));
      }, 1e3);
    });
  const n = await (await fetch(
    `https://github.com/commercetools/${e}/pulls?q=is%3Apr+label%3Afe-chapter-rotation+is%3Aopen`
  )).text();
  return uo(n, e);
}, Nd = async () => (await Promise.all(Ed.map(Pd))).flat();
function Ad() {
  const [e, t] = N(!1), [n, r] = N([]), [o, i] = N(!1);
  return F(() => {
    (async () => {
      t(!0);
      try {
        const a = await Nd();
        r(a);
      } catch (a) {
        console.error("Failed to fetch PRs:", a);
      } finally {
        t(!1);
      }
    })();
  }, []), F(() => {
    window.__fe_chapter_dashboard_modal_loaded = !0, window.addEventListener("message", (s) => {
      s.data === Vs && i(!0);
    });
  }, [o]), {
    isLoading: e,
    pullRequests: n,
    isModalOpened: o,
    closeModal: () => i(!1)
  };
}
function Td() {
  const [e, t] = N("all"), {
    isLoading: n,
    pullRequests: r,
    isModalOpened: o,
    closeModal: i
  } = Ad(), s = ["all", ...new Set(r.map((c) => c.repositoryName))], a = r.filter(
    (c) => e === "all" || c.repositoryName === e
  );
  return /* @__PURE__ */ y(Rl, { open: o, onOpenChange: i, children: /* @__PURE__ */ y(Ii, { className: "max-w-screen-md", children: [
    /* @__PURE__ */ y(Mi, { children: /* @__PURE__ */ y(ki, { children: "Frontend Chapter PRs" }) }),
    /* @__PURE__ */ y("div", { className: "flex flex-col space-y-4", children: [
      /* @__PURE__ */ y("div", { className: "flex space-x-2", children: /* @__PURE__ */ y(wd, { value: e, onValueChange: t, children: [
        /* @__PURE__ */ y(Fs, { className: "w-[180px]", children: /* @__PURE__ */ y(xd, { placeholder: "Select repository" }) }),
        /* @__PURE__ */ y(Bs, { children: s.map((c) => /* @__PURE__ */ y(Us, { value: c, children: c === "all" ? "All Repositories" : c }, c)) })
      ] }) }),
      /* @__PURE__ */ y("div", { className: "max-h-[400px] overflow-y-auto", children: n ? (
        // Loading state
        Array.from({ length: 5 }).map((c, l) => /* @__PURE__ */ y("div", { className: "flex items-center space-x-4 p-4 border-b last:border-b-0", children: [
          /* @__PURE__ */ y(Bt, { className: "h-6 w-6 rounded-full" }),
          /* @__PURE__ */ y("div", { className: "flex-grow space-y-2", children: [
            /* @__PURE__ */ y(Bt, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ y(Bt, { className: "h-3 w-1/2" })
          ] }),
          /* @__PURE__ */ y(Bt, { className: "h-6 w-16 rounded-full" })
        ] }, l))
      ) : (
        // Loaded state
        a.map((c) => /* @__PURE__ */ y("div", { className: "flex items-center space-x-4 p-4 border-b last:border-b-0", children: [
          /* @__PURE__ */ y(wa, { className: "h-6 w-6 text-green-500" }),
          /* @__PURE__ */ y("div", { className: "flex-grow", children: [
            /* @__PURE__ */ y("a", { href: c.url, target: "_blank", children: /* @__PURE__ */ y("h3", { className: "text-sm font-medium hover:underline", children: c.title }) }),
            /* @__PURE__ */ y("p", { className: "text-sm text-muted-foreground", children: [
              c.description,
              " in ",
              c.repositoryName
            ] })
          ] }),
          c.userAvatarUrl && c.userName && /* @__PURE__ */ y("img", { className: "h-6 w-6 rounded", src: c.userAvatarUrl, alt: c.userName })
        ] }, `${c.repositoryName}_${c.id}`))
      ) })
    ] })
  ] }) });
}
if (!window.__fe_chapter_dashboard_modal_loaded) {
  const e = document.createElement("div");
  document.body.appendChild(e), st(/* @__PURE__ */ y(Td, {}), e);
}
window.postMessage(Vs);
