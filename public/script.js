!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 95));
})([
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        Function("return this")();
    }.call(this, n(50)));
  },
  function (e, t, n) {
    var i = n(0),
      o = n(11),
      r = n(6),
      s = n(31),
      a = n(32),
      l = n(57),
      c = o("wks"),
      u = i.Symbol,
      d = l ? u : s;
    e.exports = function (e) {
      return (
        r(c, e) || (a && r(u, e) ? (c[e] = u[e]) : (c[e] = d("Symbol." + e))),
        c[e]
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var i = n(5);
    e.exports = function (e) {
      if (!i(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var i = n(12),
      o = n(18),
      r = n(30);
    e.exports = i
      ? function (e, t, n) {
          return o.f(e, t, r(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var i = n(0),
      o = n(11),
      r = n(7),
      s = n(6),
      a = n(21),
      l = n(34),
      c = n(35),
      u = c.get,
      d = c.enforce,
      p = String(l).split("toString");
    o("inspectSource", function (e) {
      return l.call(e);
    }),
      (e.exports = function (e, t, n, o) {
        var l = !!o && !!o.unsafe,
          c = !!o && !!o.enumerable,
          u = !!o && !!o.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof t || s(n, "name") || r(n, "name", t),
          (d(n).source = p.join("string" == typeof t ? t : ""))),
          e !== i
            ? (l ? !u && e[t] && (c = !0) : delete e[t],
              c ? (e[t] = n) : r(e, t, n))
            : c
            ? (e[t] = n)
            : a(t, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || l.call(this);
      });
  },
  function (e, t, n) {
    var i = n(72),
      o = n(0),
      r = function (e) {
        return "function" == typeof e ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2
        ? r(i[e]) || r(o[e])
        : (i[e] && i[e][t]) || (o[e] && o[e][t]);
    };
  },
  function (e, t, n) {
    var i = n(0),
      o = n(51),
      r = n(52),
      s = n(7);
    for (var a in o) {
      var l = i[a],
        c = l && l.prototype;
      if (c && c.forEach !== r)
        try {
          s(c, "forEach", r);
        } catch (e) {
          c.forEach = r;
        }
    }
  },
  function (e, t, n) {
    var i = n(20),
      o = n(56);
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.4.2",
      mode: i ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var i = n(2);
    e.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var r = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = r.slice,
        c = r.concat,
        u = r.push,
        d = r.indexOf,
        p = {},
        f = p.toString,
        h = p.hasOwnProperty,
        v = h.toString,
        g = v.call(Object),
        y = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        w = function (e) {
          return null != e && e === e.window;
        },
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function b(e, t, n) {
        var i,
          o,
          r = (n = n || s).createElement("script");
        if (((r.text = e), t))
          for (i in x)
            (o = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? p[f.call(e)] || "object"
          : typeof e;
      }
      var k = function (e, t) {
          return new k.fn.init(e, t);
        },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !m(e) &&
          !w(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (k.fn = k.prototype = {
        jquery: "3.4.1",
        constructor: k,
        length: 0,
        toArray: function () {
          return l.call(this);
        },
        get: function (e) {
          return null == e
            ? l.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = k.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return k.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            k.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: r.sort,
        splice: r.splice,
      }),
        (k.extend = k.fn.extend = function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || m(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (i = e[t]),
                  "__proto__" !== t &&
                    s !== i &&
                    (c && i && (k.isPlainObject(i) || (o = Array.isArray(i)))
                      ? ((n = s[t]),
                        (r =
                          o && !Array.isArray(n)
                            ? []
                            : o || k.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (s[t] = k.extend(c, r, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
        k.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== f.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = h.call(t, "constructor") && t.constructor) &&
                  v.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            b(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (C(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(S, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? k.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : d.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
              !t(e[o], o) !== s && i.push(e[o]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              o,
              r = 0,
              s = [];
            if (C(e))
              for (i = e.length; r < i; r++)
                null != (o = t(e[r], r, n)) && s.push(o);
            else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return c.apply([], s);
          },
          guid: 1,
          support: y,
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = r[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var $ =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            v,
            g,
            y,
            m,
            w,
            x = "sizzle" + 1 * new Date(),
            b = e.document,
            T = 0,
            k = 0,
            S = le(),
            C = le(),
            $ = le(),
            E = le(),
            A = function (e, t) {
              return e === t && (d = !0), 0;
            },
            j = {}.hasOwnProperty,
            L = [],
            O = L.pop,
            D = L.push,
            N = L.push,
            P = L.slice,
            H = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            q =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            _ =
              "\\[" +
              M +
              "*(" +
              I +
              ")(?:" +
              M +
              "*([*^$|!~]?=)" +
              M +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              M +
              "*\\]",
            R =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              _ +
              ")*)|.*)\\)|)",
            z = new RegExp(M + "+", "g"),
            W = new RegExp(
              "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
              "g"
            ),
            F = new RegExp("^" + M + "*," + M + "*"),
            B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(R),
            G = new RegExp("^" + I + "$"),
            Y = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + _),
              PSEUDO: new RegExp("^" + R),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  M +
                  "*(?:([+-]|)" +
                  M +
                  "*(\\d+)|))" +
                  M +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + q + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  M +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  M +
                  "*((?:-\\d)?\\d*)" +
                  M +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            V = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)",
              "ig"
            ),
            ne = function (e, t, n) {
              var i = "0x" + t - 65536;
              return i != i || n
                ? t
                : i < 0
                ? String.fromCharCode(i + 65536)
                : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            re = function () {
              p();
            },
            se = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            N.apply((L = P.call(b.childNodes)), b.childNodes),
              L[b.childNodes.length].nodeType;
          } catch (e) {
            N = {
              apply: L.length
                ? function (e, t) {
                    D.apply(e, P.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, i, o) {
            var r,
              a,
              c,
              u,
              d,
              h,
              y,
              m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return i;
            if (
              !o &&
              ((t ? t.ownerDocument || t : b) !== f && p(t), (t = t || f), v)
            ) {
              if (11 !== T && (d = Z.exec(e)))
                if ((r = d[1])) {
                  if (9 === T) {
                    if (!(c = t.getElementById(r))) return i;
                    if (c.id === r) return i.push(c), i;
                  } else if (
                    m &&
                    (c = m.getElementById(r)) &&
                    w(t, c) &&
                    c.id === r
                  )
                    return i.push(c), i;
                } else {
                  if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (r = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return N.apply(i, t.getElementsByClassName(r)), i;
                }
              if (
                n.qsa &&
                !E[e + " "] &&
                (!g || !g.test(e)) &&
                (1 !== T || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((y = e), (m = t), 1 === T && U.test(e))) {
                  for (
                    (u = t.getAttribute("id"))
                      ? (u = u.replace(ie, oe))
                      : t.setAttribute("id", (u = x)),
                      a = (h = s(e)).length;
                    a--;

                  )
                    h[a] = "#" + u + " " + we(h[a]);
                  (y = h.join(",")),
                    (m = (ee.test(e) && ye(t.parentNode)) || t);
                }
                try {
                  return N.apply(i, m.querySelectorAll(y)), i;
                } catch (t) {
                  E(e, !0);
                } finally {
                  u === x && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(W, "$1"), t, i, o);
          }
          function le() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function ce(e) {
            return (e[x] = !0), e;
          }
          function ue(e) {
            var t = f.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              i.attrHandle[n[o]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ve(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, i) {
                  for (var o, r = e([], n.length, t), s = r.length; s--; )
                    n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
                })
              );
            });
          }
          function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (r = ae.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !V.test(t || (n && n.nodeName) || "HTML");
          }),
          (p = ae.setDocument = function (e) {
            var t,
              o,
              s = e ? e.ownerDocument || e : b;
            return s !== f && 9 === s.nodeType && s.documentElement
              ? ((h = (f = s).documentElement),
                (v = !r(f)),
                b !== f &&
                  (o = f.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", re, !1)
                    : o.attachEvent && o.attachEvent("onunload", re)),
                (n.attributes = ue(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ue(function (e) {
                  return (
                    e.appendChild(f.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(f.getElementsByClassName)),
                (n.getById = ue(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !f.getElementsByName || !f.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (i.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (i.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n,
                          i,
                          o,
                          r = t.getElementById(e);
                        if (r) {
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                          for (
                            o = t.getElementsByName(e), i = 0;
                            (r = o[i++]);

                          )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && v)
                      return t.getElementsByClassName(e);
                  }),
                (y = []),
                (g = []),
                (n.qsa = K.test(f.querySelectorAll)) &&
                  (ue(function (e) {
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + M + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + M + "*(?:value|" + q + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        g.push("~="),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  ue(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + M + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (m =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ue(function (e) {
                    (n.disconnectedMatch = m.call(e, "*")),
                      m.call(e, "[s!='']:x"),
                      y.push("!=", R);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (y = y.length && new RegExp(y.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (w =
                  t || K.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e === f || (e.ownerDocument === b && w(b, e))
                            ? -1
                            : t === f || (t.ownerDocument === b && w(b, t))
                            ? 1
                            : u
                            ? H(u, e) - H(u, t)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!o || !r)
                        return e === f
                          ? -1
                          : t === f
                          ? 1
                          : o
                          ? -1
                          : r
                          ? 1
                          : u
                          ? H(u, e) - H(u, t)
                          : 0;
                      if (o === r) return pe(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[i] === a[i]; ) i++;
                      return i
                        ? pe(s[i], a[i])
                        : s[i] === b
                        ? -1
                        : a[i] === b
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== f && p(e),
              n.matchesSelector &&
                v &&
                !E[t + " "] &&
                (!y || !y.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var i = m.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {
                E(t, !0);
              }
            return ae(t, f, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), w(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) !== f && p(e);
            var o = i.attrHandle[t.toLowerCase()],
              r =
                o && j.call(i.attrHandle, t.toLowerCase())
                  ? o(e, t, !v)
                  : void 0;
            return void 0 !== r
              ? r
              : n.attributes || !v
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(ie, oe);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              i = [],
              o = 0,
              r = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(A),
              d)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
              for (; o--; ) e.splice(i[o], 1);
            }
            return (u = null), e;
          }),
          (o = ae.getText = function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += o(t);
            return n;
          }),
          ((i = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || ae.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && ae.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return Y.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        X.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = S[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                    S(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (i) {
                  var o = ae.attr(i, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                          ? o !== n
                          : "^=" === t
                          ? n && 0 === o.indexOf(n)
                          : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                          ? n && o.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + o.replace(z, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        d,
                        p,
                        f,
                        h,
                        v = r !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        y = a && t.nodeName.toLowerCase(),
                        m = !l && !a,
                        w = !1;
                      if (g) {
                        if (r) {
                          for (; v; ) {
                            for (p = t; (p = p[v]); )
                              if (
                                a
                                  ? p.nodeName.toLowerCase() === y
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = v = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && m)) {
                          for (
                            w =
                              (f =
                                (c =
                                  (u =
                                    (d = (p = g)[x] || (p[x] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && c[1]) && c[2],
                              p = f && g.childNodes[f];
                            (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++w && p === t) {
                              u[e] = [T, f, w];
                              break;
                            }
                        } else if (
                          (m &&
                            (w = f =
                              (c =
                                (u =
                                  (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] || [])[0] === T &&
                              c[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                            ((a
                              ? p.nodeName.toLowerCase() !== y
                              : 1 !== p.nodeType) ||
                              !++w ||
                              (m &&
                                ((u =
                                  (d = p[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] = [T, w]),
                              p !== t));

                          );
                        return (w -= o) === i || (w % i == 0 && w / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    i.pseudos[e] ||
                    i.setFilters[e.toLowerCase()] ||
                    ae.error("unsupported pseudo: " + e);
                return o[x]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, "", t]),
                    i.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ce(function (e, n) {
                          for (var i, r = o(e, t), s = r.length; s--; )
                            e[(i = H(e, r[s]))] = !(n[i] = r[s]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: ce(function (e) {
                var t = [],
                  n = [],
                  i = a(e.replace(W, "$1"));
                return i[x]
                  ? ce(function (e, t, n, o) {
                      for (var r, s = i(e, null, o, []), a = e.length; a--; )
                        (r = s[a]) && (e[a] = !(t[a] = r));
                    })
                  : function (e, o, r) {
                      return (
                        (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ce(function (e) {
                return function (t) {
                  return ae(e, t).length > 0;
                };
              }),
              contains: ce(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ce(function (e) {
                return (
                  G.test(e || "") || ae.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = v
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ve(!1),
              disabled: ve(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !i.pseudos.empty(e);
              },
              header: function (e) {
                return J.test(e.nodeName);
              },
              input: function (e) {
                return Q.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ge(function () {
                return [0];
              }),
              last: ge(function (e, t) {
                return [t - 1];
              }),
              eq: ge(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function (e, t, n) {
                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                  e.push(i);
                return e;
              }),
              gt: ge(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
          function me() {}
          function we(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function xe(e, t, n) {
            var i = t.dir,
              o = t.next,
              r = o || i,
              s = n && "parentNode" === r,
              a = k++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s) return e(t, n, o);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    p = [T, a];
                  if (l) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((u =
                            (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((c = u[r]) && c[0] === T && c[1] === a)
                            return (p[2] = c[2]);
                          if (((u[r] = p), (p[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function be(e) {
            return e.length > 1
              ? function (t, n, i) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
              (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
            return s;
          }
          function ke(e, t, n, i, o, r) {
            return (
              i && !i[x] && (i = ke(i)),
              o && !o[x] && (o = ke(o, r)),
              ce(function (r, s, a, l) {
                var c,
                  u,
                  d,
                  p = [],
                  f = [],
                  h = s.length,
                  v =
                    r ||
                    (function (e, t, n) {
                      for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  g = !e || (!r && t) ? v : Te(v, p, e, a, l),
                  y = n ? (o || (r ? e : h || i) ? [] : s) : g;
                if ((n && n(g, y, a, l), i))
                  for (c = Te(y, f), i(c, [], a, l), u = c.length; u--; )
                    (d = c[u]) && (y[f[u]] = !(g[f[u]] = d));
                if (r) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = y.length; u--; )
                        (d = y[u]) && c.push((g[u] = d));
                      o(null, (y = []), c, l);
                    }
                    for (u = y.length; u--; )
                      (d = y[u]) &&
                        (c = o ? H(r, d) : p[u]) > -1 &&
                        (r[c] = !(s[c] = d));
                  }
                } else (y = Te(y === s ? y.splice(h, y.length) : y)), o ? o(null, s, y, l) : N.apply(s, y);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                o,
                r = e.length,
                s = i.relative[e[0].type],
                a = s || i.relative[" "],
                l = s ? 1 : 0,
                u = xe(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = xe(
                  function (e) {
                    return H(t, e) > -1;
                  },
                  a,
                  !0
                ),
                p = [
                  function (e, n, i) {
                    var o =
                      (!s && (i || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return (t = null), o;
                  },
                ];
              l < r;
              l++
            )
              if ((n = i.relative[e[l].type])) p = [xe(be(p), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                  for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                  return ke(
                    l > 1 && be(p),
                    l > 1 &&
                      we(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(W, "$1"),
                    n,
                    l < o && Se(e.slice(l, o)),
                    o < r && Se((e = e.slice(o))),
                    o < r && we(e)
                  );
                }
                p.push(n);
              }
            return be(p);
          }
          return (
            (me.prototype = i.filters = i.pseudos),
            (i.setFilters = new me()),
            (s = ae.tokenize = function (e, t) {
              var n,
                o,
                r,
                s,
                a,
                l,
                c,
                u = C[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (a = e, l = [], c = i.preFilter; a; ) {
                for (s in ((n && !(o = F.exec(a))) ||
                  (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (n = !1),
                (o = B.exec(a)) &&
                  ((n = o.shift()),
                  r.push({ value: n, type: o[0].replace(W, " ") }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(o = Y[s].exec(a)) ||
                    (c[s] && !(o = c[s](o))) ||
                    ((n = o.shift()),
                    r.push({ value: n, type: s, matches: o }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
            }),
            (a = ae.compile = function (e, t) {
              var n,
                o = [],
                r = [],
                a = $[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Se(t[n]))[x] ? o.push(a) : r.push(a);
                (a = $(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      r = function (r, s, a, l, u) {
                        var d,
                          h,
                          g,
                          y = 0,
                          m = "0",
                          w = r && [],
                          x = [],
                          b = c,
                          k = r || (o && i.find.TAG("*", u)),
                          S = (T += null == b ? 1 : Math.random() || 0.1),
                          C = k.length;
                        for (
                          u && (c = s === f || s || u);
                          m !== C && null != (d = k[m]);
                          m++
                        ) {
                          if (o && d) {
                            for (
                              h = 0,
                                s || d.ownerDocument === f || (p(d), (a = !v));
                              (g = e[h++]);

                            )
                              if (g(d, s || f, a)) {
                                l.push(d);
                                break;
                              }
                            u && (T = S);
                          }
                          n && ((d = !g && d) && y--, r && w.push(d));
                        }
                        if (((y += m), n && m !== y)) {
                          for (h = 0; (g = t[h++]); ) g(w, x, s, a);
                          if (r) {
                            if (y > 0)
                              for (; m--; ) w[m] || x[m] || (x[m] = O.call(l));
                            x = Te(x);
                          }
                          N.apply(l, x),
                            u &&
                              !r &&
                              x.length > 0 &&
                              y + t.length > 1 &&
                              ae.uniqueSort(l);
                        }
                        return u && ((T = S), (c = b)), w;
                      };
                    return n ? ce(r) : r;
                  })(r, o)
                )).selector = e;
              }
              return a;
            }),
            (l = ae.select = function (e, t, n, o) {
              var r,
                l,
                c,
                u,
                d,
                p = "function" == typeof e && e,
                f = !o && s((e = p.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if (
                  (l = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (c = l[0]).type &&
                  9 === t.nodeType &&
                  v &&
                  i.relative[l[1].type]
                ) {
                  if (
                    !(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  p && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  r = Y.needsContext.test(e) ? 0 : l.length;
                  r-- && ((c = l[r]), !i.relative[(u = c.type)]);

                )
                  if (
                    (d = i.find[u]) &&
                    (o = d(
                      c.matches[0].replace(te, ne),
                      (ee.test(l[0].type) && ye(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(r, 1), !(e = o.length && we(l))))
                      return N.apply(n, o), n;
                    break;
                  }
              }
              return (
                (p || a(e, f))(
                  o,
                  t,
                  !v,
                  n,
                  !t || (ee.test(e) && ye(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = x.split("").sort(A).join("") === x),
            (n.detectDuplicates = !!d),
            p(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(q, function (e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
              }),
            ae
          );
        })(n);
      (k.find = $),
        (k.expr = $.selectors),
        (k.expr[":"] = k.expr.pseudos),
        (k.uniqueSort = k.unique = $.uniqueSort),
        (k.text = $.getText),
        (k.isXMLDoc = $.isXML),
        (k.contains = $.contains),
        (k.escapeSelector = $.escape);
      var E = function (e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && k(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = k.expr.match.needsContext;
      function L(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function D(e, t, n) {
        return m(t)
          ? k.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? k.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? k.grep(e, function (e) {
              return d.call(t, e) > -1 !== n;
            })
          : k.filter(t, e, n);
      }
      (k.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? k.find.matchesSelector(i, e)
              ? [i]
              : []
            : k.find.matches(
                e,
                k.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function () {
                  for (t = 0; t < i; t++) if (k.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, o[t], n);
            return i > 1 ? k.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(D(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(D(this, e || [], !0));
          },
          is: function (e) {
            return !!D(
              this,
              "string" == typeof e && j.test(e) ? k(e) : e || [],
              !1
            ).length;
          },
        });
      var N,
        P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((k.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || N), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : P.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof k ? t[0] : t),
              k.merge(
                this,
                k.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              O.test(i[1]) && k.isPlainObject(t))
            )
              for (i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = s.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(k)
          : k.makeArray(e, this);
      }).prototype = k.fn),
        (N = k(s));
      var H = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function (e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof e && k(e);
          if (!j.test(e))
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? k.uniqueSort(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? d.call(k(e), this[0])
              : d.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        k.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return E(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function (e) {
              return M(e, "nextSibling");
            },
            prev: function (e) {
              return M(e, "previousSibling");
            },
            nextAll: function (e) {
              return E(e, "nextSibling");
            },
            prevAll: function (e) {
              return E(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (L(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            },
          },
          function (e, t) {
            k.fn[e] = function (n, i) {
              var o = k.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = k.filter(i, o)),
                this.length > 1 &&
                  (q[e] || k.uniqueSort(o), H.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function _(e) {
        return e;
      }
      function R(e) {
        throw e;
      }
      function z(e, t, n, i) {
        var o;
        try {
          e && m((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && m((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  k.each(e.match(I) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : k.extend({}, e);
        var t,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < r.length; )
                !1 === r[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                r &&
                  (n && !t && ((a = r.length - 1), s.push(n)),
                  (function t(n) {
                    k.each(n, function (n, i) {
                      m(i)
                        ? (e.unique && c.has(i)) || r.push(i)
                        : i && i.length && "string" !== T(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                k.each(arguments, function (e, t) {
                  for (var n; (n = k.inArray(t, r, n)) > -1; )
                    r.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? k.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function () {
              return r && (r = []), this;
            },
            disable: function () {
              return (o = s = []), (r = n = ""), this;
            },
            disabled: function () {
              return !r;
            },
            lock: function () {
              return (o = s = []), n || t || (r = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        k.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              o = {
                state: function () {
                  return i;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return k
                    .Deferred(function (n) {
                      k.each(t, function (t, i) {
                        var o = m(e[i[4]]) && e[i[4]];
                        r[i[1]](function () {
                          var e = o && o.apply(this, arguments);
                          e && m(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, i, o) {
                  var r = 0;
                  function s(e, t, i, o) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(c)
                                ? o
                                  ? c.call(n, s(r, t, _, o), s(r, t, R, o))
                                  : (r++,
                                    c.call(
                                      n,
                                      s(r, t, _, o),
                                      s(r, t, R, o),
                                      s(r, t, _, t.notifyWith)
                                    ))
                                : (i !== _ && ((a = void 0), (l = [n])),
                                  (o || t.resolveWith)(a, l));
                          }
                        },
                        u = o
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= r &&
                                    (i !== R && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (k.Deferred.getStackHook &&
                            (u.stackTrace = k.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return k
                    .Deferred(function (n) {
                      t[0][3].add(s(0, n, m(o) ? o : _, n.notifyWith)),
                        t[1][3].add(s(0, n, m(e) ? e : _)),
                        t[2][3].add(s(0, n, m(i) ? i : R));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? k.extend(e, o) : o;
                },
              },
              r = {};
            return (
              k.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (r[n[0]] = function () {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = s.fireWith);
              }),
              o.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              o = l.call(arguments),
              r = k.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (o[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || r.resolveWith(i, o);
                };
              };
            if (
              t <= 1 &&
              (z(e, r.done(s(n)).resolve, r.reject, !t),
              "pending" === r.state() || m(o[n] && o[n].then))
            )
              return r.then();
            for (; n--; ) z(o[n], s(n), r.reject);
            return r.promise();
          },
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (k.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          W.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (k.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = k.Deferred();
      function B() {
        s.removeEventListener("DOMContentLoaded", B),
          n.removeEventListener("load", B),
          k.ready();
      }
      (k.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0),
              (!0 !== e && --k.readyWait > 0) || F.resolveWith(s, [k]));
          },
        }),
        (k.ready.then = F.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(k.ready)
          : (s.addEventListener("DOMContentLoaded", B),
            n.addEventListener("load", B));
      var U = function (e, t, n, i, o, r, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === T(n))
            for (a in ((o = !0), n)) U(e, t, a, n[a], !0, r, s);
          else if (
            void 0 !== i &&
            ((o = !0),
            m(i) || (s = !0),
            c &&
              (s
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(k(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        X = /^-ms-/,
        G = /-([a-z])/g;
      function Y(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace(X, "ms-").replace(G, Y);
      }
      var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function J() {
        this.expando = k.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Q(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if ("string" == typeof t) o[V(t)] = n;
            else for (i in t) o[V(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][V(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(V)
                  : (t = V(t)) in i
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || k.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          },
        });
      var K = new J(),
        Z = new J(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      k.extend({
        hasData: function (e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function (e, t) {
          Z.remove(e, t);
        },
        _data: function (e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function (e, t) {
          K.remove(e, t);
        },
      }),
        k.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              r = this[0],
              s = r && r.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = Z.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = V(i.slice(5))), ne(r, i, o[i]));
                K.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Z.set(this, e);
                })
              : U(
                  this,
                  function (t) {
                    var n;
                    if (r && void 0 === t)
                      return void 0 !== (n = Z.get(r, e))
                        ? n
                        : void 0 !== (n = ne(r, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Z.remove(this, e);
            });
          },
        }),
        k.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = K.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = K.access(e, t, k.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = k._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  e,
                  function () {
                    k.dequeue(e, t);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                  K.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        k.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? k.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              k.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = k.Deferred(),
              r = this,
              s = this.length,
              a = function () {
                --i || o.resolveWith(r, [r]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = K.get(r[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), o.promise(t);
          },
        });
      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        se = s.documentElement,
        ae = function (e) {
          return k.contains(e.ownerDocument, e);
        },
        le = { composed: !0 };
      se.getRootNode &&
        (ae = function (e) {
          return (
            k.contains(e.ownerDocument, e) ||
            e.getRootNode(le) === e.ownerDocument
          );
        });
      var ce = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ae(e) && "none" === k.css(e, "display"))
          );
        },
        ue = function (e, t, n, i) {
          var o,
            r,
            s = {};
          for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
          return o;
        };
      function de(e, t, n, i) {
        var o,
          r,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return k.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (k.cssNumber[t] || ("px" !== c && +l)) &&
            oe.exec(k.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            k.style(e, t, u + c),
              (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= r);
          (u *= 2), k.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = o))),
          o
        );
      }
      var pe = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = pe[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = k.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (pe[i] = o),
          o)
        );
      }
      function he(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
          (i = e[r]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((o[r] = K.get(i, "display") || null),
                  o[r] || (i.style.display = "")),
                "" === i.style.display && ce(i) && (o[r] = fe(i)))
              : "none" !== n && ((o[r] = "none"), K.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
      }
      k.fn.extend({
        show: function () {
          return he(this, !0);
        },
        hide: function () {
          return he(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ce(this) ? k(this).show() : k(this).hide();
              });
        },
      });
      var ve = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ye = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function we(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && L(e, t)) ? k.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td);
      var be,
        Te,
        ke = /<|&#?\w+;/;
      function Se(e, t, n, i, o) {
        for (
          var r,
            s,
            a,
            l,
            c,
            u,
            d = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((r = e[f]) || 0 === r)
            if ("object" === T(r)) k.merge(p, r.nodeType ? [r] : r);
            else if (ke.test(r)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  a = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                  l = me[a] || me._default,
                  s.innerHTML = l[1] + k.htmlPrefilter(r) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              k.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
            } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; (r = p[f++]); )
          if (i && k.inArray(r, i) > -1) o && o.push(r);
          else if (
            ((c = ae(r)), (s = we(d.appendChild(r), "script")), c && xe(s), n)
          )
            for (u = 0; (r = s[u++]); ) ye.test(r.type || "") && n.push(r);
        return d;
      }
      (be = s.createDocumentFragment().appendChild(s.createElement("div"))),
        (Te = s.createElement("input")).setAttribute("type", "radio"),
        Te.setAttribute("checked", "checked"),
        Te.setAttribute("name", "t"),
        be.appendChild(Te),
        (y.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (be.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue);
      var Ce = /^key/,
        $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function je() {
        return !1;
      }
      function Le(e, t) {
        return (
          (e ===
            (function () {
              try {
                return s.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Oe(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            Oe(e, a, n, i, t[a], r);
          return e;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          !1 === o)
        )
          o = je;
        else if (!o) return e;
        return (
          1 === r &&
            ((s = o),
            ((o = function (e) {
              return k().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = k.guid++))),
          e.each(function () {
            k.event.add(this, t, o, i, n);
          })
        );
      }
      function De(e, t, n) {
        n
          ? (K.set(e, t, !1),
            k.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var i,
                  o,
                  r = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (r.length)
                    (k.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = l.call(arguments)),
                    K.set(this, t, r),
                    (i = n(this, t)),
                    this[t](),
                    r !== (o = K.get(this, t)) || i
                      ? K.set(this, t, !1)
                      : (o = {}),
                    r !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  r.length &&
                    (K.set(this, t, {
                      value: k.event.trigger(
                        k.extend(r[0], k.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === K.get(e, t) && k.event.add(e, t, Ae);
      }
      (k.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            v,
            g = K.get(e);
          if (g)
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
                o && k.find.matchesSelector(se, o),
                n.guid || (n.guid = k.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) ||
                  (s = g.handle = function (t) {
                    return void 0 !== k && k.event.triggered !== t.type
                      ? k.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                c = (t = (t || "").match(I) || [""]).length;
              c--;

            )
              (f = v = (a = Ee.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f &&
                  ((d = k.event.special[f] || {}),
                  (f = (o ? d.delegateType : d.bindType) || f),
                  (d = k.event.special[f] || {}),
                  (u = k.extend(
                    {
                      type: f,
                      origType: v,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && k.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    r
                  )),
                  (p = l[f]) ||
                    (((p = l[f] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  (k.event.global[f] = !0));
        },
        remove: function (e, t, n, i, o) {
          var r,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            v,
            g = K.hasData(e) && K.get(e);
          if (g && (l = g.events)) {
            for (c = (t = (t || "").match(I) || [""]).length; c--; )
              if (
                ((f = v = (a = Ee.exec(t[c]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  d = k.event.special[f] || {},
                    p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = r = p.length;
                  r--;

                )
                  (u = p[r]),
                    (!o && v !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (p.splice(r, 1),
                      u.selector && p.delegateCount--,
                      d.remove && d.remove.call(e, u));
                s &&
                  !p.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                    k.removeEvent(e, f, g.handle),
                  delete l[f]);
              } else for (f in l) k.event.remove(e, f + t[c], n, i, !0);
            k.isEmptyObject(l) && K.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a = k.event.fix(e),
            l = new Array(arguments.length),
            c = (K.get(this, "events") || {})[a.type] || [],
            u = k.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, a))
          ) {
            for (
              s = k.event.handlers.call(this, a, c), t = 0;
              (o = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== r.namespace &&
                  !a.rnamespace.test(r.namespace)) ||
                  ((a.handleObj = r),
                  (a.data = r.data),
                  void 0 !==
                    (i = (
                      (k.event.special[r.origType] || {}).handle || r.handler
                    ).apply(o.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            r,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (r = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(o = (i = t[n]).selector + " ")] &&
                    (s[o] = i.needsContext
                      ? k(o, this).index(c) > -1
                      : k.find(o, this, null, [c]).length),
                    s[o] && r.push(i);
                r.length && a.push({ elem: c, handlers: r });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) &&
                  t.click &&
                  L(t, "input") &&
                  De(t, "click", Ae),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ve.test(t.type) && t.click && L(t, "input") && De(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ve.test(t.type) &&
                  t.click &&
                  L(t, "input") &&
                  K.get(t, "click")) ||
                L(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (k.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function (e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : je),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: je,
          isPropagationStopped: je,
          isImmediatePropagationStopped: je,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        k.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ce.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && $e.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          k.event.special[e] = {
            setup: function () {
              return De(this, e, Le), !1;
            },
            trigger: function () {
              return De(this, e), !0;
            },
            delegateType: t,
          };
        }),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            k.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  o = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (o && (o === i || k.contains(i, o))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        k.fn.extend({
          on: function (e, t, n, i) {
            return Oe(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return Oe(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                k(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = je),
              this.each(function () {
                k.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        He = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Me(e, t) {
        return (
          (L(e, "table") &&
            L(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function _e(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Re(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
          if (
            K.hasData(e) &&
            ((r = K.access(e)), (s = K.set(t, r)), (c = r.events))
          )
            for (o in (delete s.handle, (s.events = {}), c))
              for (n = 0, i = c[o].length; n < i; n++)
                k.event.add(t, o, c[o][n]);
          Z.hasData(e) &&
            ((a = Z.access(e)), (l = k.extend({}, a)), Z.set(t, l));
        }
      }
      function ze(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ve.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function We(e, t, n, i) {
        t = c.apply([], t);
        var o,
          r,
          s,
          a,
          l,
          u,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          v = m(h);
        if (v || (p > 1 && "string" == typeof h && !y.checkClone && He.test(h)))
          return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = h.call(this, o, r.html())), We(r, t, n, i);
          });
        if (
          p &&
          ((r = (o = Se(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || i)
        ) {
          for (a = (s = k.map(we(o, "script"), Ie)).length; d < p; d++)
            (l = o),
              d !== f &&
                ((l = k.clone(l, !0, !0)), a && k.merge(s, we(l, "script"))),
              n.call(e[d], l, d);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, k.map(s, _e), d = 0;
              d < a;
              d++
            )
              (l = s[d]),
                ye.test(l.type || "") &&
                  !K.access(l, "globalEval") &&
                  k.contains(u, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? k._evalUrl &&
                      !l.noModule &&
                      k._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce"),
                      })
                    : b(l.textContent.replace(qe, ""), l, u));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var i, o = t ? k.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
          n || 1 !== i.nodeType || k.cleanData(we(i)),
            i.parentNode &&
              (n && ae(i) && xe(we(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      k.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a = e.cloneNode(!0),
            l = ae(e);
          if (
            !(
              y.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (s = we(a), i = 0, o = (r = we(e)).length; i < o; i++)
              ze(r[i], s[i]);
          if (t)
            if (n)
              for (
                r = r || we(e), s = s || we(a), i = 0, o = r.length;
                i < o;
                i++
              )
                Re(r[i], s[i]);
            else Re(e, a);
          return (
            (s = we(a, "script")).length > 0 && xe(s, !l && we(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, o = k.event.special, r = 0;
            void 0 !== (n = e[r]);
            r++
          )
            if (Q(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        k.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return We(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Me(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return We(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Me(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return We(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return We(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (k.cleanData(we(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return k.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Pe.test(e) &&
                  !me[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(we(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return We(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                k.inArray(this, e) < 0 &&
                  (k.cleanData(we(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            k.fn[e] = function (e) {
              for (
                var n, i = [], o = k(e), r = o.length - 1, s = 0;
                s <= r;
                s++
              )
                (n = s === r ? this : this.clone(!0)),
                  k(o[s])[t](n),
                  u.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
        Ue = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Xe = new RegExp(re.join("|"), "i");
      function Ge(e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.style;
        return (
          (n = n || Ue(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (s = k.style(e, t)),
            !y.pixelBoxStyles() &&
              Be.test(s) &&
              Xe.test(t) &&
              ((i = a.width),
              (o = a.minWidth),
              (r = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = r))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ye(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              se.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (a = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (r = 12 === t(u.offsetWidth / 3)),
              se.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          r,
          a,
          l,
          c = s.createElement("div"),
          u = s.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
          k.extend(y, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), r;
            },
          }));
      })();
      var Ve = ["Webkit", "Moz", "ms"],
        Qe = s.createElement("div").style,
        Je = {};
      function Ke(e) {
        var t = k.cssProps[e] || Je[e];
        return (
          t ||
          (e in Qe
            ? e
            : (Je[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Qe) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
      function it(e, t, n) {
        var i = oe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function ot(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += k.css(e, n + re[s], !0, o)),
            i
              ? ("content" === n && (l -= k.css(e, "padding" + re[s], !0, o)),
                "margin" !== n &&
                  (l -= k.css(e, "border" + re[s] + "Width", !0, o)))
              : ((l += k.css(e, "padding" + re[s], !0, o)),
                "padding" !== n
                  ? (l += k.css(e, "border" + re[s] + "Width", !0, o))
                  : (a += k.css(e, "border" + re[s] + "Width", !0, o)));
        return (
          !i &&
            r >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    r -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function rt(e, t, n) {
        var i = Ue(e),
          o =
            (!y.boxSizingReliable() || n) &&
            "border-box" === k.css(e, "boxSizing", !1, i),
          r = o,
          s = Ge(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Be.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!y.boxSizingReliable() && o) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === k.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((o = "border-box" === k.css(e, "boxSizing", !1, i)),
            (r = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            ot(e, t, n || (o ? "border" : "content"), r, i, s) +
            "px"
        );
      }
      function st(e, t, n, i, o) {
        return new st.prototype.init(e, t, n, i, o);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ge(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              r,
              s,
              a = V(t),
              l = et.test(t),
              c = e.style;
            if (
              (l || (t = Ke(a)),
              (s = k.cssHooks[t] || k.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                ? o
                : c[t];
            "string" === (r = typeof n) &&
              (o = oe.exec(n)) &&
              o[1] &&
              ((n = de(e, t, o)), (r = "number")),
              null != n &&
                n == n &&
                ("number" !== r ||
                  l ||
                  (n += (o && o[3]) || (k.cssNumber[a] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var o,
            r,
            s,
            a = V(t);
          return (
            et.test(t) || (t = Ke(a)),
            (s = k.cssHooks[t] || k.cssHooks[a]) &&
              "get" in s &&
              (o = s.get(e, !0, n)),
            void 0 === o && (o = Ge(e, t, i)),
            "normal" === o && t in nt && (o = nt[t]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        },
      }),
        k.each(["height", "width"], function (e, t) {
          k.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !Ze.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, i)
                  : ue(e, tt, function () {
                      return rt(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var o,
                r = Ue(e),
                s = !y.scrollboxSize() && "absolute" === r.position,
                a = (s || i) && "border-box" === k.css(e, "boxSizing", !1, r),
                l = i ? ot(e, t, i, a, r) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(r[t]) -
                      ot(e, t, "border", !1, r) -
                      0.5
                  )),
                l &&
                  (o = oe.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = k.css(e, t))),
                it(0, n, l)
              );
            },
          };
        }),
        (k.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ge(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ue(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (k.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            },
          }),
            "margin" !== e && (k.cssHooks[e + t].set = it);
        }),
        k.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var i,
                  o,
                  r = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Ue(e), o = t.length; s < o; s++)
                    r[t[s]] = k.css(e, t[s], !1, i);
                  return r;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (k.Tween = st),
        (st.prototype = {
          constructor: st,
          init: function (e, t, n, i, o, r) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = r || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = st.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = k.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : st.propHooks._default.set(this),
              this
            );
          },
        }),
        (st.prototype.init.prototype = st.prototype),
        (st.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!k.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : k.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (st.propHooks.scrollTop = st.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (k.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (k.fx = st.prototype.init),
        (k.fx.step = {});
      var at,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function dt() {
        lt &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(dt)
            : n.setTimeout(dt, k.fx.interval),
          k.fx.tick());
      }
      function pt() {
        return (
          n.setTimeout(function () {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          o["margin" + (n = re[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function ht(e, t, n) {
        for (
          var i,
            o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
            r = 0,
            s = o.length;
          r < s;
          r++
        )
          if ((i = o[r].call(n, t, e))) return i;
      }
      function vt(e, t, n) {
        var i,
          o,
          r = 0,
          s = vt.prefilters.length,
          a = k.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var t = at || pt(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                r = 0,
                s = c.tweens.length;
              r < s;
              r++
            )
              c.tweens[r].run(i);
            return (
              a.notifyWith(e, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: at || pt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = k.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, o, r, s;
            for (n in e)
              if (
                ((o = t[(i = V(n))]),
                (r = e[n]),
                Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                n !== i && ((e[i] = r), delete e[n]),
                (s = k.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((r = s.expand(r)), delete e[i], r))
                  (n in e) || ((e[n] = r[n]), (t[n] = o));
              else t[i] = o;
          })(u, c.opts.specialEasing);
          r < s;
          r++
        )
          if ((i = vt.prefilters[r].call(c, e, u, c.opts)))
            return (
              m(i.stop) &&
                (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          k.map(u, ht, c),
          m(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          k.fx.timer(k.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (k.Animation = k.extend(vt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return de(n.elem, e, oe.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (vt.tweeners[n] = vt.tweeners[n] || []),
              vt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              v = e.nodeType && ce(e),
              g = K.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = k._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, k.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((o = t[i]), ct.test(o))) {
                if (
                  (delete t[i],
                  (r = r || "toggle" === o),
                  o === (v ? "hide" : "show"))
                ) {
                  if ("show" !== o || !g || void 0 === g[i]) continue;
                  v = !0;
                }
                f[i] = (g && g[i]) || k.style(e, i);
              }
            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(f))
              for (i in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = K.get(e, "display")),
                "none" === (u = k.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (he([e], !0),
                      (c = e.style.display || c),
                      (u = k.css(e, "display")),
                      he([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === k.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (g
                    ? "hidden" in g && (v = g.hidden)
                    : (g = K.access(e, "fxshow", { display: c })),
                  r && (g.hidden = !v),
                  v && he([e], !0),
                  p.done(function () {
                    for (i in (v || he([e]), K.remove(e, "fxshow"), f))
                      k.style(e, i, f[i]);
                  })),
                  (l = ht(v ? g[i] : 0, i, p)),
                  i in g ||
                    ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
        },
      })),
        (k.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            k.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in k.fx.speeds
                  ? (i.duration = k.fx.speeds[i.duration])
                  : (i.duration = k.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              m(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
            }),
            i
          );
        }),
        k.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(ce)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var o = k.isEmptyObject(e),
              r = k.speed(t, n, i),
              s = function () {
                var t = vt(this, k.extend({}, e), r);
                (o || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = k.timers,
                  s = K.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && ut.test(o) && i(s[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this ||
                    (null != e && r[o].queue !== e) ||
                    (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || k.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = K.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = k.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    k.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length;
                  t--;

                )
                  r[t].elem === this &&
                    r[t].queue === e &&
                    (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        k.each(["toggle", "show", "hide"], function (e, t) {
          var n = k.fn[t];
          k.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, i, o);
          };
        }),
        k.each(
          {
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            k.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function () {
          var e,
            t = 0,
            n = k.timers;
          for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (at = void 0);
        }),
        (k.fx.timer = function (e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function () {
          lt || ((lt = !0), dt());
        }),
        (k.fx.stop = function () {
          lt = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function (e, t) {
          return (
            (e = (k.fx && k.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var o = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = s.createElement("input"),
            t = s
              .createElement("select")
              .appendChild(s.createElement("option"));
          (e.type = "checkbox"),
            (y.checkOn = "" !== e.value),
            (y.optSelected = t.selected),
            ((e = s.createElement("input")).value = "t"),
            (e.type = "radio"),
            (y.radioValue = "t" === e.value);
        })();
      var gt,
        yt = k.expr.attrHandle;
      k.fn.extend({
        attr: function (e, t) {
          return U(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            k.removeAttr(this, e);
          });
        },
      }),
        k.extend({
          attr: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? k.prop(e, t, n)
                : ((1 === r && k.isXMLDoc(e)) ||
                    (o =
                      k.attrHooks[t.toLowerCase()] ||
                      (k.expr.match.bool.test(t) ? gt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void k.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                    ? i
                    : null == (i = k.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!y.radioValue && "radio" === t && L(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(I);
            if (o && 1 === e.nodeType)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (gt = {
          set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = yt[t] || k.find.attr;
          yt[t] = function (e, t, i) {
            var o,
              r,
              s = t.toLowerCase();
            return (
              i ||
                ((r = yt[s]),
                (yt[s] = o),
                (o = null != n(e, t, i) ? s : null),
                (yt[s] = r)),
              o
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
      function xt(e) {
        return (e.match(I) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Tt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      k.fn.extend({
        prop: function (e, t) {
          return U(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e];
          });
        },
      }),
        k.extend({
          prop: function (e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (o = k.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
          (k.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        k.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                k(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = Tt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + xt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (a = xt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                k(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Tt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = bt(n)), (i = 1 === n.nodeType && " " + xt(o) + " "))
                ) {
                  for (s = 0; (r = t[s++]); )
                    for (; i.indexOf(" " + r + " ") > -1; )
                      i = i.replace(" " + r + " ", " ");
                  o !== (a = xt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  k(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, o, r, s;
                  if (i)
                    for (o = 0, r = k(this), s = Tt(e); (t = s[o++]); )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + xt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var kt = /\r/g;
      k.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = m(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? e.call(this, n, k(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = k.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    k.valHooks[this.type] ||
                    k.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(kt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        k.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : xt(k.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  r = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? r + 1 : o.length;
                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                  if (
                    ((n = o[i]).selected || i === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))
                  ) {
                    if (((t = k(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, r = k.makeArray(t), s = o.length;
                  s--;

                )
                  ((i = o[s]).selected =
                    k.inArray(k.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        k.each(["radio", "checkbox"], function () {
          (k.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = k.inArray(k(e).val(), t) > -1);
            },
          }),
            y.checkOn ||
              (k.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (y.focusin = "onfocusin" in n);
      var St = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function (e) {
          e.stopPropagation();
        };
      k.extend(k.event, {
        trigger: function (e, t, i, o) {
          var r,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            v = [i || s],
            g = h.call(e, "type") ? e.type : e,
            y = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = f = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !St.test(g + k.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((y = g.split(".")), (g = y.shift()), y.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((e = e[k.expando]
                ? e
                : new k.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = y.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : k.makeArray(t, [e])),
              (p = k.event.special[g] || {}),
              o || !p.trigger || !1 !== p.trigger.apply(i, t)))
          ) {
            if (!o && !p.noBubble && !w(i)) {
              for (
                c = p.delegateType || g, St.test(c + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                v.push(a), (l = a);
              l === (i.ownerDocument || s) &&
                v.push(l.defaultView || l.parentWindow || n);
            }
            for (r = 0; (a = v[r++]) && !e.isPropagationStopped(); )
              (f = a),
                (e.type = r > 1 ? c : p.bindType || g),
                (d =
                  (K.get(a, "events") || {})[e.type] && K.get(a, "handle")) &&
                  d.apply(a, t),
                (d = u && a[u]) &&
                  d.apply &&
                  Q(a) &&
                  ((e.result = d.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(v.pop(), t)) ||
                !Q(i) ||
                (u &&
                  m(i[g]) &&
                  !w(i) &&
                  ((l = i[u]) && (i[u] = null),
                  (k.event.triggered = g),
                  e.isPropagationStopped() && f.addEventListener(g, Ct),
                  i[g](),
                  e.isPropagationStopped() && f.removeEventListener(g, Ct),
                  (k.event.triggered = void 0),
                  l && (i[u] = l))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
          k.event.trigger(i, null, t);
        },
      }),
        k.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          },
        }),
        y.focusin ||
          k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              k.event.simulate(t, e.target, k.event.fix(e));
            };
            k.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  o = K.access(i, t);
                o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  o = K.access(i, t) - 1;
                o
                  ? K.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), K.remove(i, t));
              },
            };
          });
      var $t = n.location,
        Et = Date.now(),
        At = /\?/;
      k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            k.error("Invalid XML: " + e),
          t
        );
      };
      var jt = /\[\]$/,
        Lt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
      function Nt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          k.each(t, function (t, o) {
            n || jt.test(e)
              ? i(e, o)
              : Nt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  i
                );
          });
        else if (n || "object" !== T(t)) i(e, t);
        else for (o in t) Nt(e + "[" + o + "]", t[o], n, i);
      }
      (k.param = function (e, t) {
        var n,
          i = [],
          o = function (e, t) {
            var n = m(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Nt(n, e[n], t, o);
        return i.join("&");
      }),
        k.fn.extend({
          serialize: function () {
            return k.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  Dt.test(this.nodeName) &&
                  !Ot.test(e) &&
                  (this.checked || !ve.test(e))
                );
              })
              .map(function (e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? k.map(n, function (e) {
                      return { name: t.name, value: e.replace(Lt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Lt, "\r\n") };
              })
              .get();
          },
        });
      var Pt = /%20/g,
        Ht = /#.*$/,
        qt = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        Rt = {},
        zt = {},
        Wt = "*/".concat("*"),
        Ft = s.createElement("a");
      function Bt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            o = 0,
            r = t.toLowerCase().match(I) || [];
          if (m(n))
            for (; (i = r[o++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Ut(e, t, n, i) {
        var o = {},
          r = e === zt;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            k.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || r || o[c]
                ? r
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function Xt(e, t) {
        var n,
          i,
          o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && k.extend(!0, e, i), e;
      }
      (Ft.href = $t.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: $t.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              $t.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Wt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, k.ajaxSettings), t) : Xt(k.ajaxSettings, e);
          },
          ajaxPrefilter: Bt(Rt),
          ajaxTransport: Bt(zt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              r,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h = k.ajaxSetup({}, t),
              v = h.context || h,
              g = h.context && (v.nodeType || v.jquery) ? k(v) : k.event,
              y = k.Deferred(),
              m = k.Callbacks("once memory"),
              w = h.statusCode || {},
              x = {},
              b = {},
              T = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!a)
                      for (a = {}; (t = Mt.exec(r)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? r : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) S.always(e[S.status]);
                    else for (t in e) w[t] = [w[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return i && i.abort(t), C(0, t), this;
                },
              };
            if (
              (y.promise(S),
              (h.url = ((e || h.url || $t.href) + "").replace(
                _t,
                $t.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              c = s.createElement("a");
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain =
                    Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = k.param(h.data, h.traditional)),
              Ut(Rt, h, t, S),
              u)
            )
              return S;
            for (p in ((d = k.event && h.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !It.test(h.type)),
            (o = h.url.replace(Ht, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Pt, "+"))
              : ((f = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (At.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(qt, "$1")),
                  (f = (At.test(o) ? "&" : "?") + "_=" + Et++ + f)),
                (h.url = o + f)),
            h.ifModified &&
              (k.lastModified[o] &&
                S.setRequestHeader("If-Modified-Since", k.lastModified[o]),
              k.etag[o] && S.setRequestHeader("If-None-Match", k.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(v, S, h) || u))
              return S.abort();
            if (
              ((T = "abort"),
              m.add(h.complete),
              S.done(h.success),
              S.fail(h.error),
              (i = Ut(zt, h, t, S)))
            ) {
              if (((S.readyState = 1), d && g.trigger("ajaxSend", [S, h]), u))
                return S;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function () {
                  S.abort("timeout");
                }, h.timeout));
              try {
                (u = !1), i.send(x, C);
              } catch (e) {
                if (u) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, s, a) {
              var c,
                p,
                f,
                x,
                b,
                T = t;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (r = a || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (x = (function (e, t, n) {
                    for (
                      var i, o, r, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in a)
                        if (a[o] && a[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        s || (s = o);
                      }
                      r = r || s;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(h, S, s)),
                (x = (function (e, t, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (r = u.shift(); r; )
                    if (
                      (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = r),
                      (r = u.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                          for (o in c)
                            if (
                              (a = o.split(" "))[1] === r &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[o])
                                : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + r,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, x, S, c)),
                c
                  ? (h.ifModified &&
                      ((b = S.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[o] = b),
                      (b = S.getResponseHeader("etag")) && (k.etag[o] = b)),
                    204 === e || "HEAD" === h.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = x.state), (p = x.data), (c = !(f = x.error))))
                  : ((f = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || T) + ""),
                c ? y.resolveWith(v, [p, T, S]) : y.rejectWith(v, [S, T, f]),
                S.statusCode(w),
                (w = void 0),
                d &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]),
                m.fireWith(v, [S, T]),
                d &&
                  (g.trigger("ajaxComplete", [S, h]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return k.get(e, void 0, t, "script");
          },
        }),
        k.each(["get", "post"], function (e, t) {
          k[t] = function (e, n, i, o) {
            return (
              m(n) && ((o = o || i), (i = n), (n = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: t, dataType: o, data: n, success: i },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (k._evalUrl = function (e, t) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              k.globalEval(e, t);
            },
          });
        }),
        k.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  k(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = k(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (k.expr.pseudos.hidden = function (e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Gt = { 0: 200, 1223: 204 },
        Yt = k.ajaxSettings.xhr();
      (y.cors = !!Yt && "withCredentials" in Yt),
        (y.ajax = Yt = !!Yt),
        k.ajaxTransport(function (e) {
          var t, i;
          if (y.cors || (Yt && !e.crossDomain))
            return {
              send: function (o, r) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  a.setRequestHeader(s, o[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                            Gt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        k.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return k.globalEval(e), e;
            },
          },
        }),
        k.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, o) {
                (t = k("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Vt,
        Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Qt.pop() || k.expando + "_" + Et++;
          return (this[e] = !0), e;
        },
      }),
        k.ajaxPrefilter("json jsonp", function (e, t, i) {
          var o,
            r,
            s,
            a =
              !1 !== e.jsonp &&
              (Jt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Jt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = m(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Jt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return s || k.error(o + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === r ? k(n).removeProp(o) : (n[o] = r),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(o)),
                  s && m(r) && r(s[0]),
                  (s = r = void 0);
              }),
              "script"
            );
        }),
        (y.createHTMLDocument =
          (((Vt = s.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Vt.childNodes.length)),
        (k.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (y.createHTMLDocument
                  ? (((i = (t = s.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = s.location.href),
                    t.head.appendChild(i))
                  : (t = s)),
              (r = !n && []),
              (o = O.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Se([e], t, r)),
                  r && r.length && k(r).remove(),
                  k.merge([], o.childNodes)));
          var i, o, r;
        }),
        (k.fn.load = function (e, t, n) {
          var i,
            o,
            r,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = xt(e.slice(a))), (e = e.slice(0, a))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            s.length > 0 &&
              k
                .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (r = arguments),
                    s.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, r || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        k.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            k.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (k.expr.pseudos.animated = function (e) {
          return k.grep(k.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (k.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c = k.css(e, "position"),
              u = k(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (r = k.css(e, "top")),
              (l = k.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (r + l).indexOf("auto") > -1
                ? ((s = (i = u.position()).top), (o = i.left))
                : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, k.extend({}, a))),
              null != t.top && (d.top = t.top - a.top + s),
              null != t.left && (d.left = t.left - a.left + o),
              "using" in t ? t.using.call(e, d) : u.css(d);
          },
        }),
        k.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    k.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === k.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === k.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                  (o.left += k.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - k.css(i, "marginTop", !0),
                left: t.left - o.left - k.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === k.css(e, "position");

              )
                e = e.offsetParent;
              return e || se;
            });
          },
        }),
        k.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function (i) {
              return U(
                this,
                function (e, i, o) {
                  var r;
                  if (
                    (w(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                  )
                    return r ? r[t] : e[i];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                    : (e[i] = o);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        k.each(["top", "left"], function (e, t) {
          k.cssHooks[t] = Ye(y.pixelPosition, function (e, n) {
            if (n)
              return (n = Ge(e, t)), Be.test(n) ? k(e).position()[t] + "px" : n;
          });
        }),
        k.each({ Height: "height", Width: "width" }, function (e, t) {
          k.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              k.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return U(
                  this,
                  function (t, n, o) {
                    var r;
                    return w(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === o
                      ? k.css(t, n, a)
                      : k.style(t, n, o, a);
                  },
                  t,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }),
        k.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            k.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        k.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        k.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (k.proxy = function (e, t) {
          var n, i, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
            return (
              (i = l.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, i.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || k.guid++),
              o
            );
        }),
        (k.holdReady = function (e) {
          e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = L),
        (k.isFunction = m),
        (k.isWindow = w),
        (k.camelCase = V),
        (k.type = T),
        (k.now = Date.now),
        (k.isNumeric = function (e) {
          var t = k.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (i = function () {
            return k;
          }.apply(t, [])) || (e.exports = i);
      var Kt = n.jQuery,
        Zt = n.$;
      return (
        (k.noConflict = function (e) {
          return (
            n.$ === k && (n.$ = Zt), e && n.jQuery === k && (n.jQuery = Kt), k
          );
        }),
        o || (n.jQuery = n.$ = k),
        k
      );
    });
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var i = n(17),
      o = Math.min;
    e.exports = function (e) {
      return e > 0 ? o(i(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
    };
  },
  function (e, t, n) {
    var i = n(12),
      o = n(27),
      r = n(3),
      s = n(29),
      a = Object.defineProperty;
    t.f = i
      ? a
      : function (e, t, n) {
          if ((r(e), (t = s(t, !0)), r(n), o))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var i = n(14);
    e.exports = function (e, t, n) {
      if ((i(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, o) {
            return e.call(t, n, i, o);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var i = n(0),
      o = n(7);
    e.exports = function (e, t) {
      try {
        o(i, e, t);
      } catch (n) {
        i[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    var i = {};
    (i[n(1)("toStringTag")] = "z"), (e.exports = "[object z]" === String(i));
  },
  function (e, t, n) {
    var i = n(12),
      o = n(69),
      r = n(30),
      s = n(24),
      a = n(29),
      l = n(6),
      c = n(27),
      u = Object.getOwnPropertyDescriptor;
    t.f = i
      ? u
      : function (e, t) {
          if (((e = s(e)), (t = a(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (l(e, t)) return r(!o.f.call(e, t), e[t]);
        };
  },
  function (e, t, n) {
    var i = n(25),
      o = n(15);
    e.exports = function (e) {
      return i(o(e));
    };
  },
  function (e, t, n) {
    var i = n(2),
      o = n(4),
      r = "".split;
    e.exports = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == o(e) ? r.call(e, "") : Object(e);
        }
      : Object;
  },
  function (e, t, n) {
    var i = n(15);
    e.exports = function (e) {
      return Object(i(e));
    };
  },
  function (e, t, n) {
    var i = n(12),
      o = n(2),
      r = n(28);
    e.exports =
      !i &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(r("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var i = n(0),
      o = n(5),
      r = i.document,
      s = o(r) && o(r.createElement);
    e.exports = function (e) {
      return s ? r.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var i = n(5);
    e.exports = function (e, t) {
      if (!i(e)) return e;
      var n, o;
      if (t && "function" == typeof (n = e.toString) && !i((o = n.call(e))))
        return o;
      if ("function" == typeof (n = e.valueOf) && !i((o = n.call(e)))) return o;
      if (!t && "function" == typeof (n = e.toString) && !i((o = n.call(e))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = 0,
      i = Math.random();
    e.exports = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++n + i).toString(36)
      );
    };
  },
  function (e, t, n) {
    var i = n(2);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      });
  },
  function (e, t, n) {
    "use strict";
    var i = n(59),
      o = n(3),
      r = n(26),
      s = n(16),
      a = n(17),
      l = n(15),
      c = n(63),
      u = n(65),
      d = Math.max,
      p = Math.min,
      f = Math.floor,
      h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      v = /\$([$&'`]|\d\d?)/g;
    i("replace", 2, function (e, t, n) {
      return [
        function (n, i) {
          var o = l(this),
            r = null == n ? void 0 : n[e];
          return void 0 !== r ? r.call(n, o, i) : t.call(String(o), n, i);
        },
        function (e, r) {
          var l = n(t, e, this, r);
          if (l.done) return l.value;
          var f = o(e),
            h = String(this),
            v = "function" == typeof r;
          v || (r = String(r));
          var g = f.global;
          if (g) {
            var y = f.unicode;
            f.lastIndex = 0;
          }
          for (var m = []; ; ) {
            var w = u(f, h);
            if (null === w) break;
            if ((m.push(w), !g)) break;
            "" === String(w[0]) && (f.lastIndex = c(h, s(f.lastIndex), y));
          }
          for (var x, b = "", T = 0, k = 0; k < m.length; k++) {
            w = m[k];
            for (
              var S = String(w[0]),
                C = d(p(a(w.index), h.length), 0),
                $ = [],
                E = 1;
              E < w.length;
              E++
            )
              $.push(void 0 === (x = w[E]) ? x : String(x));
            var A = w.groups;
            if (v) {
              var j = [S].concat($, C, h);
              void 0 !== A && j.push(A);
              var L = String(r.apply(void 0, j));
            } else L = i(S, h, C, $, A, r);
            C >= T && ((b += h.slice(T, C) + L), (T = C + S.length));
          }
          return b + h.slice(T);
        },
      ];
      function i(e, n, i, o, s, a) {
        var l = i + e.length,
          c = o.length,
          u = v;
        return (
          void 0 !== s && ((s = r(s)), (u = h)),
          t.call(a, u, function (t, r) {
            var a;
            switch (r.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return n.slice(0, i);
              case "'":
                return n.slice(l);
              case "<":
                a = s[r.slice(1, -1)];
                break;
              default:
                var u = +r;
                if (0 === u) return t;
                if (u > c) {
                  var d = f(u / 10);
                  return 0 === d
                    ? t
                    : d <= c
                    ? void 0 === o[d - 1]
                      ? r.charAt(1)
                      : o[d - 1] + r.charAt(1)
                    : t;
                }
                a = o[u - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  function (e, t, n) {
    var i = n(11);
    e.exports = i("native-function-to-string", Function.toString);
  },
  function (e, t, n) {
    var i,
      o,
      r,
      s = n(60),
      a = n(0),
      l = n(5),
      c = n(7),
      u = n(6),
      d = n(61),
      p = n(36),
      f = a.WeakMap;
    if (s) {
      var h = new f(),
        v = h.get,
        g = h.has,
        y = h.set;
      (i = function (e, t) {
        return y.call(h, e, t), t;
      }),
        (o = function (e) {
          return v.call(h, e) || {};
        }),
        (r = function (e) {
          return g.call(h, e);
        });
    } else {
      var m = d("state");
      (p[m] = !0),
        (i = function (e, t) {
          return c(e, m, t), t;
        }),
        (o = function (e) {
          return u(e, m) ? e[m] : {};
        }),
        (r = function (e) {
          return u(e, m);
        });
    }
    e.exports = {
      set: i,
      get: o,
      has: r,
      enforce: function (e) {
        return r(e) ? o(e) : i(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!l(t) || (n = o(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    "use strict";
    var i,
      o,
      r = n(62),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      l = s,
      c =
        ((i = /a/),
        (o = /b*/g),
        s.call(i, "a"),
        s.call(o, "a"),
        0 !== i.lastIndex || 0 !== o.lastIndex),
      u = void 0 !== /()??/.exec("")[1];
    (c || u) &&
      (l = function (e) {
        var t,
          n,
          i,
          o,
          l = this;
        return (
          u && (n = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))),
          c && (t = l.lastIndex),
          (i = s.call(l, e)),
          c && i && (l.lastIndex = l.global ? i.index + i[0].length : t),
          u &&
            i &&
            i.length > 1 &&
            a.call(i[0], n, function () {
              for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (i[o] = void 0);
            }),
          i
        );
      }),
      (e.exports = l);
  },
  function (e, t, n) {
    var i = n(22),
      o = n(4),
      r = n(1)("toStringTag"),
      s =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })()
        );
    e.exports = i
      ? o
      : function (e) {
          var t, n, i;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), r))
            ? n
            : s
            ? o(t)
            : "Object" == (i = o(t)) && "function" == typeof t.callee
            ? "Arguments"
            : i;
        };
  },
  function (e, t, n) {
    var i = n(0),
      o = n(23).f,
      r = n(7),
      s = n(8),
      a = n(21),
      l = n(70),
      c = n(40);
    e.exports = function (e, t) {
      var n,
        u,
        d,
        p,
        f,
        h = e.target,
        v = e.global,
        g = e.stat;
      if ((n = v ? i : g ? i[h] || a(h, {}) : (i[h] || {}).prototype))
        for (u in t) {
          if (
            ((p = t[u]),
            (d = e.noTargetGet ? (f = o(n, u)) && f.value : n[u]),
            !c(v ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== d)
          ) {
            if (typeof p == typeof d) continue;
            l(p, d);
          }
          (e.sham || (d && d.sham)) && r(p, "sham", !0), s(n, u, p, e);
        }
    };
  },
  function (e, t, n) {
    var i = n(2),
      o = /#|\.prototype\./,
      r = function (e, t) {
        var n = a[s(e)];
        return n == c || (n != l && ("function" == typeof t ? i(t) : !!t));
      },
      s = (r.normalize = function (e) {
        return String(e).replace(o, ".").toLowerCase();
      }),
      a = (r.data = {}),
      l = (r.NATIVE = "N"),
      c = (r.POLYFILL = "P");
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(0);
    e.exports = i.Promise;
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var i = n(3),
      o = n(14),
      r = n(1)("species");
    e.exports = function (e, t) {
      var n,
        s = i(e).constructor;
      return void 0 === s || null == (n = i(s)[r]) ? t : o(n);
    };
  },
  function (e, t, n) {
    var i,
      o,
      r,
      s = n(0),
      a = n(2),
      l = n(4),
      c = n(19),
      u = n(88),
      d = n(28),
      p = n(45),
      f = s.location,
      h = s.setImmediate,
      v = s.clearImmediate,
      g = s.process,
      y = s.MessageChannel,
      m = s.Dispatch,
      w = 0,
      x = {},
      b = function (e) {
        if (x.hasOwnProperty(e)) {
          var t = x[e];
          delete x[e], t();
        }
      },
      T = function (e) {
        return function () {
          b(e);
        };
      },
      k = function (e) {
        b(e.data);
      },
      S = function (e) {
        s.postMessage(e + "", f.protocol + "//" + f.host);
      };
    (h && v) ||
      ((h = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (x[++w] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
          }),
          i(w),
          w
        );
      }),
      (v = function (e) {
        delete x[e];
      }),
      "process" == l(g)
        ? (i = function (e) {
            g.nextTick(T(e));
          })
        : m && m.now
        ? (i = function (e) {
            m.now(T(e));
          })
        : y && !p
        ? ((r = (o = new y()).port2),
          (o.port1.onmessage = k),
          (i = c(r.postMessage, r, 1)))
        : !s.addEventListener ||
          "function" != typeof postMessage ||
          s.importScripts ||
          a(S)
        ? (i =
            "onreadystatechange" in d("script")
              ? function (e) {
                  u.appendChild(d("script")).onreadystatechange = function () {
                    u.removeChild(this), b(e);
                  };
                }
              : function (e) {
                  setTimeout(T(e), 0);
                })
        : ((i = S), s.addEventListener("message", k, !1))),
      (e.exports = { set: h, clear: v });
  },
  function (e, t, n) {
    var i = n(46);
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(i);
  },
  function (e, t, n) {
    var i = n(9);
    e.exports = i("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    var i = n(3),
      o = n(5),
      r = n(48);
    e.exports = function (e, t) {
      if ((i(e), o(t) && t.constructor === e)) return t;
      var n = r.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(14),
      o = function (e) {
        var t, n;
        (this.promise = new e(function (e, i) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError("Bad Promise constructor");
          (t = e), (n = i);
        })),
          (this.resolve = i(t)),
          (this.reject = i(n));
      };
    e.exports.f = function (e) {
      return new o(e);
    };
  },
  function (e, t, n) {
    var i, o, r;
    !(function (s) {
      "use strict";
      (o = [n(13)]),
        void 0 ===
          (r =
            "function" ==
            typeof (i = function (e) {
              var t = window.Slick || {};
              (((n = 0),
              (t = function (t, i) {
                var o,
                  r = this;
                (r.defaults = {
                  accessibility: !0,
                  adaptiveHeight: !1,
                  appendArrows: e(t),
                  appendDots: e(t),
                  arrows: !0,
                  asNavFor: null,
                  prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                  nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                  autoplay: !1,
                  autoplaySpeed: 3e3,
                  centerMode: !1,
                  centerPadding: "50px",
                  cssEase: "ease",
                  customPaging: function (t, n) {
                    return e('<button type="button" />').text(n + 1);
                  },
                  dots: !1,
                  dotsClass: "slick-dots",
                  draggable: !0,
                  easing: "linear",
                  edgeFriction: 0.35,
                  fade: !1,
                  focusOnSelect: !1,
                  focusOnChange: !1,
                  infinite: !0,
                  initialSlide: 0,
                  lazyLoad: "ondemand",
                  mobileFirst: !1,
                  pauseOnHover: !0,
                  pauseOnFocus: !0,
                  pauseOnDotsHover: !1,
                  respondTo: "window",
                  responsive: null,
                  rows: 1,
                  rtl: !1,
                  slide: "",
                  slidesPerRow: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 500,
                  swipe: !0,
                  swipeToSlide: !1,
                  touchMove: !0,
                  touchThreshold: 5,
                  useCSS: !0,
                  useTransform: !0,
                  variableWidth: !1,
                  vertical: !1,
                  verticalSwiping: !1,
                  waitForAnimate: !0,
                  zIndex: 1e3,
                }),
                  (r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                  }),
                  e.extend(r, r.initials),
                  (r.activeBreakpoint = null),
                  (r.animType = null),
                  (r.animProp = null),
                  (r.breakpoints = []),
                  (r.breakpointSettings = []),
                  (r.cssTransitions = !1),
                  (r.focussed = !1),
                  (r.interrupted = !1),
                  (r.hidden = "hidden"),
                  (r.paused = !0),
                  (r.positionProp = null),
                  (r.respondTo = null),
                  (r.rowCount = 1),
                  (r.shouldClick = !0),
                  (r.$slider = e(t)),
                  (r.$slidesCache = null),
                  (r.transformType = null),
                  (r.transitionType = null),
                  (r.visibilityChange = "visibilitychange"),
                  (r.windowWidth = 0),
                  (r.windowTimer = null),
                  (o = e(t).data("slick") || {}),
                  (r.options = e.extend({}, r.defaults, i, o)),
                  (r.currentSlide = r.options.initialSlide),
                  (r.originalSettings = r.options),
                  void 0 !== document.mozHidden
                    ? ((r.hidden = "mozHidden"),
                      (r.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((r.hidden = "webkitHidden"),
                      (r.visibilityChange = "webkitvisibilitychange")),
                  (r.autoPlay = e.proxy(r.autoPlay, r)),
                  (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
                  (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
                  (r.changeSlide = e.proxy(r.changeSlide, r)),
                  (r.clickHandler = e.proxy(r.clickHandler, r)),
                  (r.selectHandler = e.proxy(r.selectHandler, r)),
                  (r.setPosition = e.proxy(r.setPosition, r)),
                  (r.swipeHandler = e.proxy(r.swipeHandler, r)),
                  (r.dragHandler = e.proxy(r.dragHandler, r)),
                  (r.keyHandler = e.proxy(r.keyHandler, r)),
                  (r.instanceUid = n++),
                  (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                  r.registerBreakpoints(),
                  r.init(!0);
              })).prototype.activateADA = function () {
                this.$slideTrack
                  .find(".slick-active")
                  .attr({ "aria-hidden": "false" })
                  .find("a, input, button, select")
                  .attr({ tabindex: "0" });
              }),
                (t.prototype.addSlide = t.prototype.slickAdd = function (
                  t,
                  n,
                  i
                ) {
                  var o = this;
                  if ("boolean" == typeof n) (i = n), (n = null);
                  else if (n < 0 || n >= o.slideCount) return !1;
                  o.unload(),
                    "number" == typeof n
                      ? 0 === n && 0 === o.$slides.length
                        ? e(t).appendTo(o.$slideTrack)
                        : i
                        ? e(t).insertBefore(o.$slides.eq(n))
                        : e(t).insertAfter(o.$slides.eq(n))
                      : !0 === i
                      ? e(t).prependTo(o.$slideTrack)
                      : e(t).appendTo(o.$slideTrack),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    o.$slides.each(function (t, n) {
                      e(n).attr("data-slick-index", t);
                    }),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
                }),
                (t.prototype.animateHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                  }
                }),
                (t.prototype.animateSlide = function (t, n) {
                  var i = {},
                    o = this;
                  o.animateHeight(),
                    !0 === o.options.rtl &&
                      !1 === o.options.vertical &&
                      (t = -t),
                    !1 === o.transformsEnabled
                      ? !1 === o.options.vertical
                        ? o.$slideTrack.animate(
                            { left: t },
                            o.options.speed,
                            o.options.easing,
                            n
                          )
                        : o.$slideTrack.animate(
                            { top: t },
                            o.options.speed,
                            o.options.easing,
                            n
                          )
                      : !1 === o.cssTransitions
                      ? (!0 === o.options.rtl &&
                          (o.currentLeft = -o.currentLeft),
                        e({ animStart: o.currentLeft }).animate(
                          { animStart: t },
                          {
                            duration: o.options.speed,
                            easing: o.options.easing,
                            step: function (e) {
                              (e = Math.ceil(e)),
                                !1 === o.options.vertical
                                  ? ((i[o.animType] =
                                      "translate(" + e + "px, 0px)"),
                                    o.$slideTrack.css(i))
                                  : ((i[o.animType] =
                                      "translate(0px," + e + "px)"),
                                    o.$slideTrack.css(i));
                            },
                            complete: function () {
                              n && n.call();
                            },
                          }
                        ))
                      : (o.applyTransition(),
                        (t = Math.ceil(t)),
                        !1 === o.options.vertical
                          ? (i[o.animType] =
                              "translate3d(" + t + "px, 0px, 0px)")
                          : (i[o.animType] =
                              "translate3d(0px," + t + "px, 0px)"),
                        o.$slideTrack.css(i),
                        n &&
                          setTimeout(function () {
                            o.disableTransition(), n.call();
                          }, o.options.speed));
                }),
                (t.prototype.getNavTarget = function () {
                  var t = this.options.asNavFor;
                  return t && null !== t && (t = e(t).not(this.$slider)), t;
                }),
                (t.prototype.asNavFor = function (t) {
                  var n = this.getNavTarget();
                  null !== n &&
                    "object" == typeof n &&
                    n.each(function () {
                      var n = e(this).slick("getSlick");
                      n.unslicked || n.slideHandler(t, !0);
                    });
                }),
                (t.prototype.applyTransition = function (e) {
                  var t = this,
                    n = {};
                  !1 === t.options.fade
                    ? (n[t.transitionType] =
                        t.transformType +
                        " " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase)
                    : (n[t.transitionType] =
                        "opacity " +
                        t.options.speed +
                        "ms " +
                        t.options.cssEase),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (t.prototype.autoPlay = function () {
                  var e = this;
                  e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow &&
                      (e.autoPlayTimer = setInterval(
                        e.autoPlayIterator,
                        e.options.autoplaySpeed
                      ));
                }),
                (t.prototype.autoPlayClear = function () {
                  this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (t.prototype.autoPlayIterator = function () {
                  var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                  e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                      (1 === e.direction &&
                      e.currentSlide + 1 === e.slideCount - 1
                        ? (e.direction = 0)
                        : 0 === e.direction &&
                          ((t = e.currentSlide - e.options.slidesToScroll),
                          e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
                }),
                (t.prototype.buildArrows = function () {
                  var t = this;
                  !0 === t.options.arrows &&
                    ((t.$prevArrow = e(t.options.prevArrow).addClass(
                      "slick-arrow"
                    )),
                    (t.$nextArrow = e(t.options.nextArrow).addClass(
                      "slick-arrow"
                    )),
                    t.slideCount > t.options.slidesToShow
                      ? (t.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                        t.htmlExpr.test(t.options.prevArrow) &&
                          t.$prevArrow.prependTo(t.options.appendArrows),
                        t.htmlExpr.test(t.options.nextArrow) &&
                          t.$nextArrow.appendTo(t.options.appendArrows),
                        !0 !== t.options.infinite &&
                          t.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"))
                      : t.$prevArrow
                          .add(t.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (t.prototype.buildDots = function () {
                  var t,
                    n,
                    i = this;
                  if (
                    !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow
                  ) {
                    for (
                      i.$slider.addClass("slick-dotted"),
                        n = e("<ul />").addClass(i.options.dotsClass),
                        t = 0;
                      t <= i.getDotCount();
                      t += 1
                    )
                      n.append(
                        e("<li />").append(
                          i.options.customPaging.call(this, i, t)
                        )
                      );
                    (i.$dots = n.appendTo(i.options.appendDots)),
                      i.$dots.find("li").first().addClass("slick-active");
                  }
                }),
                (t.prototype.buildOut = function () {
                  var t = this;
                  (t.$slides = t.$slider
                    .children(t.options.slide + ":not(.slick-cloned)")
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, n) {
                      e(n)
                        .attr("data-slick-index", t)
                        .data("originalStyling", e(n).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack =
                      0 === t.slideCount
                        ? e('<div class="slick-track"/>').appendTo(t.$slider)
                        : t.$slides
                            .wrapAll('<div class="slick-track"/>')
                            .parent()),
                    (t.$list = t.$slideTrack
                      .wrap('<div class="slick-list"/>')
                      .parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode &&
                      !0 !== t.options.swipeToSlide) ||
                      (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider)
                      .not("[src]")
                      .addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
                }),
                (t.prototype.buildRows = function () {
                  var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  if (
                    ((i = document.createDocumentFragment()),
                    (r = a.$slider.children()),
                    a.options.rows > 0)
                  ) {
                    for (
                      s = a.options.slidesPerRow * a.options.rows,
                        o = Math.ceil(r.length / s),
                        e = 0;
                      e < o;
                      e++
                    ) {
                      var l = document.createElement("div");
                      for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                          var u = e * s + (t * a.options.slidesPerRow + n);
                          r.get(u) && c.appendChild(r.get(u));
                        }
                        l.appendChild(c);
                      }
                      i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                      a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                          width: 100 / a.options.slidesPerRow + "%",
                          display: "inline-block",
                        });
                  }
                }),
                (t.prototype.checkResponsive = function (t, n) {
                  var i,
                    o,
                    r,
                    s = this,
                    a = !1,
                    l = s.$slider.width(),
                    c = window.innerWidth || e(window).width();
                  if (
                    ("window" === s.respondTo
                      ? (r = c)
                      : "slider" === s.respondTo
                      ? (r = l)
                      : "min" === s.respondTo && (r = Math.min(c, l)),
                    s.options.responsive &&
                      s.options.responsive.length &&
                      null !== s.options.responsive)
                  ) {
                    for (i in ((o = null), s.breakpoints))
                      s.breakpoints.hasOwnProperty(i) &&
                        (!1 === s.originalSettings.mobileFirst
                          ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                          : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o
                      ? null !== s.activeBreakpoint
                        ? (o !== s.activeBreakpoint || n) &&
                          ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend(
                                {},
                                s.originalSettings,
                                s.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (s.currentSlide = s.options.initialSlide),
                              s.refresh(t)),
                          (a = o))
                        : ((s.activeBreakpoint = o),
                          "unslick" === s.breakpointSettings[o]
                            ? s.unslick(o)
                            : ((s.options = e.extend(
                                {},
                                s.originalSettings,
                                s.breakpointSettings[o]
                              )),
                              !0 === t &&
                                (s.currentSlide = s.options.initialSlide),
                              s.refresh(t)),
                          (a = o))
                      : null !== s.activeBreakpoint &&
                        ((s.activeBreakpoint = null),
                        (s.options = s.originalSettings),
                        !0 === t && (s.currentSlide = s.options.initialSlide),
                        s.refresh(t),
                        (a = o)),
                      t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
                  }
                }),
                (t.prototype.changeSlide = function (t, n) {
                  var i,
                    o,
                    r = this,
                    s = e(t.currentTarget);
                  switch (
                    (s.is("a") && t.preventDefault(),
                    s.is("li") || (s = s.closest("li")),
                    (i =
                      r.slideCount % r.options.slidesToScroll != 0
                        ? 0
                        : (r.slideCount - r.currentSlide) %
                          r.options.slidesToScroll),
                    t.data.message)
                  ) {
                    case "previous":
                      (o =
                        0 === i
                          ? r.options.slidesToScroll
                          : r.options.slidesToShow - i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide - o, !1, n);
                      break;
                    case "next":
                      (o = 0 === i ? r.options.slidesToScroll : i),
                        r.slideCount > r.options.slidesToShow &&
                          r.slideHandler(r.currentSlide + o, !1, n);
                      break;
                    case "index":
                      var a =
                        0 === t.data.index
                          ? 0
                          : t.data.index ||
                            s.index() * r.options.slidesToScroll;
                      r.slideHandler(r.checkNavigable(a), !1, n),
                        s.children().trigger("focus");
                      break;
                    default:
                      return;
                  }
                }),
                (t.prototype.checkNavigable = function (e) {
                  var t, n;
                  if (
                    ((n = 0),
                    e > (t = this.getNavigableIndexes())[t.length - 1])
                  )
                    e = t[t.length - 1];
                  else
                    for (var i in t) {
                      if (e < t[i]) {
                        e = n;
                        break;
                      }
                      n = t[i];
                    }
                  return e;
                }),
                (t.prototype.cleanUpEvents = function () {
                  var t = this;
                  t.options.dots &&
                    null !== t.$dots &&
                    (e("li", t.$dots)
                      .off("click.slick", t.changeSlide)
                      .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                      .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility &&
                      t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                      t.slideCount > t.options.slidesToShow &&
                      (t.$prevArrow &&
                        t.$prevArrow.off("click.slick", t.changeSlide),
                      t.$nextArrow &&
                        t.$nextArrow.off("click.slick", t.changeSlide),
                      !0 === t.options.accessibility &&
                        (t.$prevArrow &&
                          t.$prevArrow.off("keydown.slick", t.keyHandler),
                        t.$nextArrow &&
                          t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off(
                      "touchstart.slick mousedown.slick",
                      t.swipeHandler
                    ),
                    t.$list.off(
                      "touchmove.slick mousemove.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off(
                      "touchcancel.slick mouseleave.slick",
                      t.swipeHandler
                    ),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility &&
                      t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .off("click.slick", t.selectHandler),
                    e(window).off(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      t.orientationChange
                    ),
                    e(window).off(
                      "resize.slick.slick-" + t.instanceUid,
                      t.resize
                    ),
                    e("[draggable!=true]", t.$slideTrack).off(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).off(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    );
                }),
                (t.prototype.cleanUpSlideEvents = function () {
                  var t = this;
                  t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    );
                }),
                (t.prototype.cleanUpRows = function () {
                  var e,
                    t = this;
                  t.options.rows > 0 &&
                    ((e = t.$slides.children().children()).removeAttr("style"),
                    t.$slider.empty().append(e));
                }),
                (t.prototype.clickHandler = function (e) {
                  !1 === this.shouldClick &&
                    (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault());
                }),
                (t.prototype.destroy = function (t) {
                  var n = this;
                  n.autoPlayClear(),
                    (n.touchObject = {}),
                    n.cleanUpEvents(),
                    e(".slick-cloned", n.$slider).detach(),
                    n.$dots && n.$dots.remove(),
                    n.$prevArrow &&
                      n.$prevArrow.length &&
                      (n.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.prevArrow) &&
                        n.$prevArrow.remove()),
                    n.$nextArrow &&
                      n.$nextArrow.length &&
                      (n.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                      n.htmlExpr.test(n.options.nextArrow) &&
                        n.$nextArrow.remove()),
                    n.$slides &&
                      (n.$slides
                        .removeClass(
                          "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                          e(this).attr(
                            "style",
                            e(this).data("originalStyling")
                          );
                        }),
                      n.$slideTrack.children(this.options.slide).detach(),
                      n.$slideTrack.detach(),
                      n.$list.detach(),
                      n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    (n.unslicked = !0),
                    t || n.$slider.trigger("destroy", [n]);
                }),
                (t.prototype.disableTransition = function (e) {
                  var t = this,
                    n = {};
                  (n[t.transitionType] = ""),
                    !1 === t.options.fade
                      ? t.$slideTrack.css(n)
                      : t.$slides.eq(e).css(n);
                }),
                (t.prototype.fadeSlide = function (e, t) {
                  var n = this;
                  !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
                      n.$slides
                        .eq(e)
                        .animate(
                          { opacity: 1 },
                          n.options.speed,
                          n.options.easing,
                          t
                        ))
                    : (n.applyTransition(e),
                      n.$slides
                        .eq(e)
                        .css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                        setTimeout(function () {
                          n.disableTransition(e), t.call();
                        }, n.options.speed));
                }),
                (t.prototype.fadeSlideOut = function (e) {
                  var t = this;
                  !1 === t.cssTransitions
                    ? t.$slides
                        .eq(e)
                        .animate(
                          { opacity: 0, zIndex: t.options.zIndex - 2 },
                          t.options.speed,
                          t.options.easing
                        )
                    : (t.applyTransition(e),
                      t.$slides
                        .eq(e)
                        .css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
                }),
                (t.prototype.filterSlides = t.prototype.slickFilter = function (
                  e
                ) {
                  var t = this;
                  null !== e &&
                    ((t.$slidesCache = t.$slides),
                    t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                    t.reinit());
                }),
                (t.prototype.focusHandler = function () {
                  var t = this;
                  t.$slider
                    .off("focus.slick blur.slick")
                    .on("focus.slick blur.slick", "*", function (n) {
                      n.stopImmediatePropagation();
                      var i = e(this);
                      setTimeout(function () {
                        t.options.pauseOnFocus &&
                          ((t.focussed = i.is(":focus")), t.autoPlay());
                      }, 0);
                    });
                }),
                (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                  return this.currentSlide;
                }),
                (t.prototype.getDotCount = function () {
                  var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                  if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else
                      for (; t < e.slideCount; )
                        ++i,
                          (t = n + e.options.slidesToScroll),
                          (n +=
                            e.options.slidesToScroll <= e.options.slidesToShow
                              ? e.options.slidesToScroll
                              : e.options.slidesToShow);
                  else if (!0 === e.options.centerMode) i = e.slideCount;
                  else if (e.options.asNavFor)
                    for (; t < e.slideCount; )
                      ++i,
                        (t = n + e.options.slidesToScroll),
                        (n +=
                          e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
                  else
                    i =
                      1 +
                      Math.ceil(
                        (e.slideCount - e.options.slidesToShow) /
                          e.options.slidesToScroll
                      );
                  return i - 1;
                }),
                (t.prototype.getLeft = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this,
                    s = 0;
                  return (
                    (r.slideOffset = 0),
                    (n = r.$slides.first().outerHeight(!0)),
                    !0 === r.options.infinite
                      ? (r.slideCount > r.options.slidesToShow &&
                          ((r.slideOffset =
                            r.slideWidth * r.options.slidesToShow * -1),
                          (o = -1),
                          !0 === r.options.vertical &&
                            !0 === r.options.centerMode &&
                            (2 === r.options.slidesToShow
                              ? (o = -1.5)
                              : 1 === r.options.slidesToShow && (o = -2)),
                          (s = n * r.options.slidesToShow * o)),
                        r.slideCount % r.options.slidesToScroll != 0 &&
                          e + r.options.slidesToScroll > r.slideCount &&
                          r.slideCount > r.options.slidesToShow &&
                          (e > r.slideCount
                            ? ((r.slideOffset =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                r.slideWidth *
                                -1),
                              (s =
                                (r.options.slidesToShow - (e - r.slideCount)) *
                                n *
                                -1))
                            : ((r.slideOffset =
                                (r.slideCount % r.options.slidesToScroll) *
                                r.slideWidth *
                                -1),
                              (s =
                                (r.slideCount % r.options.slidesToScroll) *
                                n *
                                -1))))
                      : e + r.options.slidesToShow > r.slideCount &&
                        ((r.slideOffset =
                          (e + r.options.slidesToShow - r.slideCount) *
                          r.slideWidth),
                        (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                    r.slideCount <= r.options.slidesToShow &&
                      ((r.slideOffset = 0), (s = 0)),
                    !0 === r.options.centerMode &&
                    r.slideCount <= r.options.slidesToShow
                      ? (r.slideOffset =
                          (r.slideWidth * Math.floor(r.options.slidesToShow)) /
                            2 -
                          (r.slideWidth * r.slideCount) / 2)
                      : !0 === r.options.centerMode && !0 === r.options.infinite
                      ? (r.slideOffset +=
                          r.slideWidth *
                            Math.floor(r.options.slidesToShow / 2) -
                          r.slideWidth)
                      : !0 === r.options.centerMode &&
                        ((r.slideOffset = 0),
                        (r.slideOffset +=
                          r.slideWidth *
                          Math.floor(r.options.slidesToShow / 2))),
                    (t =
                      !1 === r.options.vertical
                        ? e * r.slideWidth * -1 + r.slideOffset
                        : e * n * -1 + s),
                    !0 === r.options.variableWidth &&
                      ((i =
                        r.slideCount <= r.options.slidesToShow ||
                        !1 === r.options.infinite
                          ? r.$slideTrack.children(".slick-slide").eq(e)
                          : r.$slideTrack
                              .children(".slick-slide")
                              .eq(e + r.options.slidesToShow)),
                      (t =
                        !0 === r.options.rtl
                          ? i[0]
                            ? -1 *
                              (r.$slideTrack.width() -
                                i[0].offsetLeft -
                                i.width())
                            : 0
                          : i[0]
                          ? -1 * i[0].offsetLeft
                          : 0),
                      !0 === r.options.centerMode &&
                        ((i =
                          r.slideCount <= r.options.slidesToShow ||
                          !1 === r.options.infinite
                            ? r.$slideTrack.children(".slick-slide").eq(e)
                            : r.$slideTrack
                                .children(".slick-slide")
                                .eq(e + r.options.slidesToShow + 1)),
                        (t =
                          !0 === r.options.rtl
                            ? i[0]
                              ? -1 *
                                (r.$slideTrack.width() -
                                  i[0].offsetLeft -
                                  i.width())
                              : 0
                            : i[0]
                            ? -1 * i[0].offsetLeft
                            : 0),
                        (t += (r.$list.width() - i.outerWidth()) / 2))),
                    t
                  );
                }),
                (t.prototype.getOption = t.prototype.slickGetOption = function (
                  e
                ) {
                  return this.options[e];
                }),
                (t.prototype.getNavigableIndexes = function () {
                  var e,
                    t = this,
                    n = 0,
                    i = 0,
                    o = [];
                  for (
                    !1 === t.options.infinite
                      ? (e = t.slideCount)
                      : ((n = -1 * t.options.slidesToScroll),
                        (i = -1 * t.options.slidesToScroll),
                        (e = 2 * t.slideCount));
                    n < e;

                  )
                    o.push(n),
                      (n = i + t.options.slidesToScroll),
                      (i +=
                        t.options.slidesToScroll <= t.options.slidesToShow
                          ? t.options.slidesToScroll
                          : t.options.slidesToShow);
                  return o;
                }),
                (t.prototype.getSlick = function () {
                  return this;
                }),
                (t.prototype.getSlideCount = function () {
                  var t,
                    n,
                    i = this;
                  return (
                    (n =
                      !0 === i.options.centerMode
                        ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
                        : 0),
                    !0 === i.options.swipeToSlide
                      ? (i.$slideTrack
                          .find(".slick-slide")
                          .each(function (o, r) {
                            if (
                              r.offsetLeft - n + e(r).outerWidth() / 2 >
                              -1 * i.swipeLeft
                            )
                              return (t = r), !1;
                          }),
                        Math.abs(
                          e(t).attr("data-slick-index") - i.currentSlide
                        ) || 1)
                      : i.options.slidesToScroll
                  );
                }),
                (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                  this.changeSlide(
                    { data: { message: "index", index: parseInt(e) } },
                    t
                  );
                }),
                (t.prototype.init = function (t) {
                  var n = this;
                  e(n.$slider).hasClass("slick-initialized") ||
                    (e(n.$slider).addClass("slick-initialized"),
                    n.buildRows(),
                    n.buildOut(),
                    n.setProps(),
                    n.startLoad(),
                    n.loadSlider(),
                    n.initializeEvents(),
                    n.updateArrows(),
                    n.updateDots(),
                    n.checkResponsive(!0),
                    n.focusHandler()),
                    t && n.$slider.trigger("init", [n]),
                    !0 === n.options.accessibility && n.initADA(),
                    n.options.autoplay && ((n.paused = !1), n.autoPlay());
                }),
                (t.prototype.initADA = function () {
                  var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter(function (e) {
                      return e >= 0 && e < t.slideCount;
                    });
                  t.$slides
                    .add(t.$slideTrack.find(".slick-cloned"))
                    .attr({ "aria-hidden": "true", tabindex: "-1" })
                    .find("a, input, button, select")
                    .attr({ tabindex: "-1" }),
                    null !== t.$dots &&
                      (t.$slides
                        .not(t.$slideTrack.find(".slick-cloned"))
                        .each(function (n) {
                          var o = i.indexOf(n);
                          if (
                            (e(this).attr({
                              role: "tabpanel",
                              id: "slick-slide" + t.instanceUid + n,
                              tabindex: -1,
                            }),
                            -1 !== o)
                          ) {
                            var r = "slick-slide-control" + t.instanceUid + o;
                            e("#" + r).length &&
                              e(this).attr({ "aria-describedby": r });
                          }
                        }),
                      t.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (o) {
                          var r = i[o];
                          e(this).attr({ role: "presentation" }),
                            e(this)
                              .find("button")
                              .first()
                              .attr({
                                role: "tab",
                                id: "slick-slide-control" + t.instanceUid + o,
                                "aria-controls":
                                  "slick-slide" + t.instanceUid + r,
                                "aria-label": o + 1 + " of " + n,
                                "aria-selected": null,
                                tabindex: "-1",
                              });
                        })
                        .eq(t.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
                  for (
                    var o = t.currentSlide, r = o + t.options.slidesToShow;
                    o < r;
                    o++
                  )
                    t.options.focusOnChange
                      ? t.$slides.eq(o).attr({ tabindex: "0" })
                      : t.$slides.eq(o).removeAttr("tabindex");
                  t.activateADA();
                }),
                (t.prototype.initArrowEvents = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow
                      .off("click.slick")
                      .on(
                        "click.slick",
                        { message: "previous" },
                        e.changeSlide
                      ),
                    e.$nextArrow
                      .off("click.slick")
                      .on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility &&
                      (e.$prevArrow.on("keydown.slick", e.keyHandler),
                      e.$nextArrow.on("keydown.slick", e.keyHandler)));
                }),
                (t.prototype.initDotEvents = function () {
                  var t = this;
                  !0 === t.options.dots &&
                    t.slideCount > t.options.slidesToShow &&
                    (e("li", t.$dots).on(
                      "click.slick",
                      { message: "index" },
                      t.changeSlide
                    ),
                    !0 === t.options.accessibility &&
                      t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots &&
                      !0 === t.options.pauseOnDotsHover &&
                      t.slideCount > t.options.slidesToShow &&
                      e("li", t.$dots)
                        .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
                        .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
                }),
                (t.prototype.initSlideEvents = function () {
                  var t = this;
                  t.options.pauseOnHover &&
                    (t.$list.on(
                      "mouseenter.slick",
                      e.proxy(t.interrupt, t, !0)
                    ),
                    t.$list.on(
                      "mouseleave.slick",
                      e.proxy(t.interrupt, t, !1)
                    ));
                }),
                (t.prototype.initializeEvents = function () {
                  var t = this;
                  t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on(
                      "touchstart.slick mousedown.slick",
                      { action: "start" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchmove.slick mousemove.slick",
                      { action: "move" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchend.slick mouseup.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on(
                      "touchcancel.slick mouseleave.slick",
                      { action: "end" },
                      t.swipeHandler
                    ),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(
                      t.visibilityChange,
                      e.proxy(t.visibility, t)
                    ),
                    !0 === t.options.accessibility &&
                      t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    e(window).on(
                      "orientationchange.slick.slick-" + t.instanceUid,
                      e.proxy(t.orientationChange, t)
                    ),
                    e(window).on(
                      "resize.slick.slick-" + t.instanceUid,
                      e.proxy(t.resize, t)
                    ),
                    e("[draggable!=true]", t.$slideTrack).on(
                      "dragstart",
                      t.preventDefault
                    ),
                    e(window).on(
                      "load.slick.slick-" + t.instanceUid,
                      t.setPosition
                    ),
                    e(t.setPosition);
                }),
                (t.prototype.initUI = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.show(), e.$nextArrow.show()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.show();
                }),
                (t.prototype.keyHandler = function (e) {
                  var t = this;
                  e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                      ? t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "next" : "previous",
                          },
                        })
                      : 39 === e.keyCode &&
                        !0 === t.options.accessibility &&
                        t.changeSlide({
                          data: {
                            message: !0 === t.options.rtl ? "previous" : "next",
                          },
                        }));
                }),
                (t.prototype.lazyLoad = function () {
                  var t,
                    n,
                    i,
                    o = this;
                  function r(t) {
                    e("img[data-lazy]", t).each(function () {
                      var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        r =
                          e(this).attr("data-sizes") ||
                          o.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                      (s.onload = function () {
                        t.animate({ opacity: 0 }, 100, function () {
                          i && (t.attr("srcset", i), r && t.attr("sizes", r)),
                            t
                              .attr("src", n)
                              .animate({ opacity: 1 }, 200, function () {
                                t.removeAttr(
                                  "data-lazy data-srcset data-sizes"
                                ).removeClass("slick-loading");
                              }),
                            o.$slider.trigger("lazyLoaded", [o, t, n]);
                        });
                      }),
                        (s.onerror = function () {
                          t
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            o.$slider.trigger("lazyLoadError", [o, t, n]);
                        }),
                        (s.src = n);
                    });
                  }
                  if (
                    (!0 === o.options.centerMode
                      ? !0 === o.options.infinite
                        ? (i =
                            (n =
                              o.currentSlide +
                              (o.options.slidesToShow / 2 + 1)) +
                            o.options.slidesToShow +
                            2)
                        : ((n = Math.max(
                            0,
                            o.currentSlide - (o.options.slidesToShow / 2 + 1)
                          )),
                          (i =
                            o.options.slidesToShow / 2 +
                            1 +
                            2 +
                            o.currentSlide))
                      : ((n = o.options.infinite
                          ? o.options.slidesToShow + o.currentSlide
                          : o.currentSlide),
                        (i = Math.ceil(n + o.options.slidesToShow)),
                        !0 === o.options.fade &&
                          (n > 0 && n--, i <= o.slideCount && i++)),
                    (t = o.$slider.find(".slick-slide").slice(n, i)),
                    "anticipated" === o.options.lazyLoad)
                  )
                    for (
                      var s = n - 1,
                        a = i,
                        l = o.$slider.find(".slick-slide"),
                        c = 0;
                      c < o.options.slidesToScroll;
                      c++
                    )
                      s < 0 && (s = o.slideCount - 1),
                        (t = (t = t.add(l.eq(s))).add(l.eq(a))),
                        s--,
                        a++;
                  r(t),
                    o.slideCount <= o.options.slidesToShow
                      ? r(o.$slider.find(".slick-slide"))
                      : o.currentSlide >= o.slideCount - o.options.slidesToShow
                      ? r(
                          o.$slider
                            .find(".slick-cloned")
                            .slice(0, o.options.slidesToShow)
                        )
                      : 0 === o.currentSlide &&
                        r(
                          o.$slider
                            .find(".slick-cloned")
                            .slice(-1 * o.options.slidesToShow)
                        );
                }),
                (t.prototype.loadSlider = function () {
                  var e = this;
                  e.setPosition(),
                    e.$slideTrack.css({ opacity: 1 }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad &&
                      e.progressiveLazyLoad();
                }),
                (t.prototype.next = t.prototype.slickNext = function () {
                  this.changeSlide({ data: { message: "next" } });
                }),
                (t.prototype.orientationChange = function () {
                  this.checkResponsive(), this.setPosition();
                }),
                (t.prototype.pause = t.prototype.slickPause = function () {
                  this.autoPlayClear(), (this.paused = !0);
                }),
                (t.prototype.play = t.prototype.slickPlay = function () {
                  var e = this;
                  e.autoPlay(),
                    (e.options.autoplay = !0),
                    (e.paused = !1),
                    (e.focussed = !1),
                    (e.interrupted = !1);
                }),
                (t.prototype.postSlide = function (t) {
                  var n = this;
                  n.unslicked ||
                    (n.$slider.trigger("afterChange", [n, t]),
                    (n.animating = !1),
                    n.slideCount > n.options.slidesToShow && n.setPosition(),
                    (n.swipeLeft = null),
                    n.options.autoplay && n.autoPlay(),
                    !0 === n.options.accessibility &&
                      (n.initADA(),
                      n.options.focusOnChange &&
                        e(n.$slides.get(n.currentSlide))
                          .attr("tabindex", 0)
                          .focus()));
                }),
                (t.prototype.prev = t.prototype.slickPrev = function () {
                  this.changeSlide({ data: { message: "previous" } });
                }),
                (t.prototype.preventDefault = function (e) {
                  e.preventDefault();
                }),
                (t.prototype.progressiveLazyLoad = function (t) {
                  t = t || 1;
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a = this,
                    l = e("img[data-lazy]", a.$slider);
                  l.length
                    ? ((n = l.first()),
                      (i = n.attr("data-lazy")),
                      (o = n.attr("data-srcset")),
                      (r =
                        n.attr("data-sizes") || a.$slider.attr("data-sizes")),
                      ((s = document.createElement(
                        "img"
                      )).onload = function () {
                        o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                          n
                            .attr("src", i)
                            .removeAttr("data-lazy data-srcset data-sizes")
                            .removeClass("slick-loading"),
                          !0 === a.options.adaptiveHeight && a.setPosition(),
                          a.$slider.trigger("lazyLoaded", [a, n, i]),
                          a.progressiveLazyLoad();
                      }),
                      (s.onerror = function () {
                        t < 3
                          ? setTimeout(function () {
                              a.progressiveLazyLoad(t + 1);
                            }, 500)
                          : (n
                              .removeAttr("data-lazy")
                              .removeClass("slick-loading")
                              .addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, n, i]),
                            a.progressiveLazyLoad());
                      }),
                      (s.src = i))
                    : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (t.prototype.refresh = function (t) {
                  var n,
                    i,
                    o = this;
                  (i = o.slideCount - o.options.slidesToShow),
                    !o.options.infinite &&
                      o.currentSlide > i &&
                      (o.currentSlide = i),
                    o.slideCount <= o.options.slidesToShow &&
                      (o.currentSlide = 0),
                    (n = o.currentSlide),
                    o.destroy(!0),
                    e.extend(o, o.initials, { currentSlide: n }),
                    o.init(),
                    t ||
                      o.changeSlide(
                        { data: { message: "index", index: n } },
                        !1
                      );
                }),
                (t.prototype.registerBreakpoints = function () {
                  var t,
                    n,
                    i,
                    o = this,
                    r = o.options.responsive || null;
                  if ("array" === e.type(r) && r.length) {
                    for (t in ((o.respondTo = o.options.respondTo || "window"),
                    r))
                      if (
                        ((i = o.breakpoints.length - 1), r.hasOwnProperty(t))
                      ) {
                        for (n = r[t].breakpoint; i >= 0; )
                          o.breakpoints[i] &&
                            o.breakpoints[i] === n &&
                            o.breakpoints.splice(i, 1),
                            i--;
                        o.breakpoints.push(n),
                          (o.breakpointSettings[n] = r[t].settings);
                      }
                    o.breakpoints.sort(function (e, t) {
                      return o.options.mobileFirst ? e - t : t - e;
                    });
                  }
                }),
                (t.prototype.reinit = function () {
                  var t = this;
                  (t.$slides = t.$slideTrack
                    .children(t.options.slide)
                    .addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount &&
                      0 !== t.currentSlide &&
                      (t.currentSlide =
                        t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow &&
                      (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect &&
                      e(t.$slideTrack)
                        .children()
                        .on("click.slick", t.selectHandler),
                    t.setSlideClasses(
                      "number" == typeof t.currentSlide ? t.currentSlide : 0
                    ),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
                }),
                (t.prototype.resize = function () {
                  var t = this;
                  e(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                      (t.windowWidth = e(window).width()),
                        t.checkResponsive(),
                        t.unslicked || t.setPosition();
                    }, 50)));
                }),
                (t.prototype.removeSlide = t.prototype.slickRemove = function (
                  e,
                  t,
                  n
                ) {
                  var i = this;
                  if (
                    ((e =
                      "boolean" == typeof e
                        ? !0 === (t = e)
                          ? 0
                          : i.slideCount - 1
                        : !0 === t
                        ? --e
                        : e),
                    i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
                  )
                    return !1;
                  i.unload(),
                    !0 === n
                      ? i.$slideTrack.children().remove()
                      : i.$slideTrack
                          .children(this.options.slide)
                          .eq(e)
                          .remove(),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
                }),
                (t.prototype.setCSS = function (e) {
                  var t,
                    n,
                    i = this,
                    o = {};
                  !0 === i.options.rtl && (e = -e),
                    (t =
                      "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[i.positionProp] = e),
                    !1 === i.transformsEnabled
                      ? i.$slideTrack.css(o)
                      : ((o = {}),
                        !1 === i.cssTransitions
                          ? ((o[i.animType] =
                              "translate(" + t + ", " + n + ")"),
                            i.$slideTrack.css(o))
                          : ((o[i.animType] =
                              "translate3d(" + t + ", " + n + ", 0px)"),
                            i.$slideTrack.css(o)));
                }),
                (t.prototype.setDimensions = function () {
                  var e = this;
                  !1 === e.options.vertical
                    ? !0 === e.options.centerMode &&
                      e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(
                        e.$slides.first().outerHeight(!0) *
                          e.options.slidesToShow
                      ),
                      !0 === e.options.centerMode &&
                        e.$list.css({
                          padding: e.options.centerPadding + " 0px",
                        })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                      ? ((e.slideWidth = Math.ceil(
                          e.listWidth / e.options.slidesToShow
                        )),
                        e.$slideTrack.width(
                          Math.ceil(
                            e.slideWidth *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ))
                      : !0 === e.options.variableWidth
                      ? e.$slideTrack.width(5e3 * e.slideCount)
                      : ((e.slideWidth = Math.ceil(e.listWidth)),
                        e.$slideTrack.height(
                          Math.ceil(
                            e.$slides.first().outerHeight(!0) *
                              e.$slideTrack.children(".slick-slide").length
                          )
                        ));
                  var t =
                    e.$slides.first().outerWidth(!0) -
                    e.$slides.first().width();
                  !1 === e.options.variableWidth &&
                    e.$slideTrack
                      .children(".slick-slide")
                      .width(e.slideWidth - t);
                }),
                (t.prototype.setFade = function () {
                  var t,
                    n = this;
                  n.$slides.each(function (i, o) {
                    (t = n.slideWidth * i * -1),
                      !0 === n.options.rtl
                        ? e(o).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          })
                        : e(o).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0,
                          });
                  }),
                    n.$slides
                      .eq(n.currentSlide)
                      .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
                }),
                (t.prototype.setHeight = function () {
                  var e = this;
                  if (
                    1 === e.options.slidesToShow &&
                    !0 === e.options.adaptiveHeight &&
                    !1 === e.options.vertical
                  ) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                  }
                }),
                (t.prototype.setOption = t.prototype.slickSetOption = function () {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    s = this,
                    a = !1;
                  if (
                    ("object" === e.type(arguments[0])
                      ? ((i = arguments[0]),
                        (a = arguments[1]),
                        (r = "multiple"))
                      : "string" === e.type(arguments[0]) &&
                        ((i = arguments[0]),
                        (o = arguments[1]),
                        (a = arguments[2]),
                        "responsive" === arguments[0] &&
                        "array" === e.type(arguments[1])
                          ? (r = "responsive")
                          : void 0 !== arguments[1] && (r = "single")),
                    "single" === r)
                  )
                    s.options[i] = o;
                  else if ("multiple" === r)
                    e.each(i, function (e, t) {
                      s.options[e] = t;
                    });
                  else if ("responsive" === r)
                    for (n in o)
                      if ("array" !== e.type(s.options.responsive))
                        s.options.responsive = [o[n]];
                      else {
                        for (t = s.options.responsive.length - 1; t >= 0; )
                          s.options.responsive[t].breakpoint ===
                            o[n].breakpoint &&
                            s.options.responsive.splice(t, 1),
                            t--;
                        s.options.responsive.push(o[n]);
                      }
                  a && (s.unload(), s.reinit());
                }),
                (t.prototype.setPosition = function () {
                  var e = this;
                  e.setDimensions(),
                    e.setHeight(),
                    !1 === e.options.fade
                      ? e.setCSS(e.getLeft(e.currentSlide))
                      : e.setFade(),
                    e.$slider.trigger("setPosition", [e]);
                }),
                (t.prototype.setProps = function () {
                  var e = this,
                    t = document.body.style;
                  (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp
                      ? e.$slider.addClass("slick-vertical")
                      : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition &&
                      void 0 === t.MozTransition &&
                      void 0 === t.msTransition) ||
                      (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade &&
                      ("number" == typeof e.options.zIndex
                        ? e.options.zIndex < 3 && (e.options.zIndex = 3)
                        : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform &&
                      ((e.animType = "OTransform"),
                      (e.transformType = "-o-transform"),
                      (e.transitionType = "OTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                      ((e.animType = "MozTransform"),
                      (e.transformType = "-moz-transform"),
                      (e.transitionType = "MozTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.MozPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                      ((e.animType = "webkitTransform"),
                      (e.transformType = "-webkit-transform"),
                      (e.transitionType = "webkitTransition"),
                      void 0 === t.perspectiveProperty &&
                        void 0 === t.webkitPerspective &&
                        (e.animType = !1)),
                    void 0 !== t.msTransform &&
                      ((e.animType = "msTransform"),
                      (e.transformType = "-ms-transform"),
                      (e.transitionType = "msTransition"),
                      void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform &&
                      !1 !== e.animType &&
                      ((e.animType = "transform"),
                      (e.transformType = "transform"),
                      (e.transitionType = "transition")),
                    (e.transformsEnabled =
                      e.options.useTransform &&
                      null !== e.animType &&
                      !1 !== e.animType);
                }),
                (t.prototype.setSlideClasses = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r = this;
                  if (
                    ((n = r.$slider
                      .find(".slick-slide")
                      .removeClass("slick-active slick-center slick-current")
                      .attr("aria-hidden", "true")),
                    r.$slides.eq(e).addClass("slick-current"),
                    !0 === r.options.centerMode)
                  ) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(r.options.slidesToShow / 2)),
                      !0 === r.options.infinite &&
                        (e >= t && e <= r.slideCount - 1 - t
                          ? r.$slides
                              .slice(e - t + s, e + t + 1)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : ((i = r.options.slidesToShow + e),
                            n
                              .slice(i - t + 1 + s, i + t + 2)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")),
                        0 === e
                          ? n
                              .eq(n.length - 1 - r.options.slidesToShow)
                              .addClass("slick-center")
                          : e === r.slideCount - 1 &&
                            n
                              .eq(r.options.slidesToShow)
                              .addClass("slick-center")),
                      r.$slides.eq(e).addClass("slick-center");
                  } else
                    e >= 0 && e <= r.slideCount - r.options.slidesToShow
                      ? r.$slides
                          .slice(e, e + r.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                      : n.length <= r.options.slidesToShow
                      ? n.addClass("slick-active").attr("aria-hidden", "false")
                      : ((o = r.slideCount % r.options.slidesToShow),
                        (i =
                          !0 === r.options.infinite
                            ? r.options.slidesToShow + e
                            : e),
                        r.options.slidesToShow == r.options.slidesToScroll &&
                        r.slideCount - e < r.options.slidesToShow
                          ? n
                              .slice(i - (r.options.slidesToShow - o), i + o)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                          : n
                              .slice(i, i + r.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
                  ("ondemand" !== r.options.lazyLoad &&
                    "anticipated" !== r.options.lazyLoad) ||
                    r.lazyLoad();
                }),
                (t.prototype.setupInfinite = function () {
                  var t,
                    n,
                    i,
                    o = this;
                  if (
                    (!0 === o.options.fade && (o.options.centerMode = !1),
                    !0 === o.options.infinite &&
                      !1 === o.options.fade &&
                      ((n = null), o.slideCount > o.options.slidesToShow))
                  ) {
                    for (
                      i =
                        !0 === o.options.centerMode
                          ? o.options.slidesToShow + 1
                          : o.options.slidesToShow,
                        t = o.slideCount;
                      t > o.slideCount - i;
                      t -= 1
                    )
                      (n = t - 1),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n - o.slideCount)
                          .prependTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1)
                      (n = t),
                        e(o.$slides[n])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", n + o.slideCount)
                          .appendTo(o.$slideTrack)
                          .addClass("slick-cloned");
                    o.$slideTrack
                      .find(".slick-cloned")
                      .find("[id]")
                      .each(function () {
                        e(this).attr("id", "");
                      });
                  }
                }),
                (t.prototype.interrupt = function (e) {
                  e || this.autoPlay(), (this.interrupted = e);
                }),
                (t.prototype.selectHandler = function (t) {
                  var n = this,
                    i = e(t.target).is(".slick-slide")
                      ? e(t.target)
                      : e(t.target).parents(".slick-slide"),
                    o = parseInt(i.attr("data-slick-index"));
                  o || (o = 0),
                    n.slideCount <= n.options.slidesToShow
                      ? n.slideHandler(o, !1, !0)
                      : n.slideHandler(o);
                }),
                (t.prototype.slideHandler = function (e, t, n) {
                  var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = this;
                  if (
                    ((t = t || !1),
                    !(
                      (!0 === c.animating && !0 === c.options.waitForAnimate) ||
                      (!0 === c.options.fade && c.currentSlide === e)
                    ))
                  )
                    if (
                      (!1 === t && c.asNavFor(e),
                      (i = e),
                      (a = c.getLeft(i)),
                      (s = c.getLeft(c.currentSlide)),
                      (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                      !1 === c.options.infinite &&
                        !1 === c.options.centerMode &&
                        (e < 0 ||
                          e > c.getDotCount() * c.options.slidesToScroll))
                    )
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                        !0 !== n && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                          : c.postSlide(i));
                    else if (
                      !1 === c.options.infinite &&
                      !0 === c.options.centerMode &&
                      (e < 0 || e > c.slideCount - c.options.slidesToScroll)
                    )
                      !1 === c.options.fade &&
                        ((i = c.currentSlide),
                        !0 !== n && c.slideCount > c.options.slidesToShow
                          ? c.animateSlide(s, function () {
                              c.postSlide(i);
                            })
                          : c.postSlide(i));
                    else {
                      if (
                        (c.options.autoplay && clearInterval(c.autoPlayTimer),
                        (o =
                          i < 0
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? c.slideCount -
                                (c.slideCount % c.options.slidesToScroll)
                              : c.slideCount + i
                            : i >= c.slideCount
                            ? c.slideCount % c.options.slidesToScroll != 0
                              ? 0
                              : i - c.slideCount
                            : i),
                        (c.animating = !0),
                        c.$slider.trigger("beforeChange", [
                          c,
                          c.currentSlide,
                          o,
                        ]),
                        (r = c.currentSlide),
                        (c.currentSlide = o),
                        c.setSlideClasses(c.currentSlide),
                        c.options.asNavFor &&
                          (l = (l = c.getNavTarget()).slick("getSlick"))
                            .slideCount <= l.options.slidesToShow &&
                          l.setSlideClasses(c.currentSlide),
                        c.updateDots(),
                        c.updateArrows(),
                        !0 === c.options.fade)
                      )
                        return (
                          !0 !== n
                            ? (c.fadeSlideOut(r),
                              c.fadeSlide(o, function () {
                                c.postSlide(o);
                              }))
                            : c.postSlide(o),
                          void c.animateHeight()
                        );
                      !0 !== n && c.slideCount > c.options.slidesToShow
                        ? c.animateSlide(a, function () {
                            c.postSlide(o);
                          })
                        : c.postSlide(o);
                    }
                }),
                (t.prototype.startLoad = function () {
                  var e = this;
                  !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots &&
                      e.slideCount > e.options.slidesToShow &&
                      e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
                }),
                (t.prototype.swipeDirection = function () {
                  var e,
                    t,
                    n,
                    i,
                    o = this;
                  return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 &&
                      (i = 360 - Math.abs(i)),
                    i <= 45 && i >= 0
                      ? !1 === o.options.rtl
                        ? "left"
                        : "right"
                      : i <= 360 && i >= 315
                      ? !1 === o.options.rtl
                        ? "left"
                        : "right"
                      : i >= 135 && i <= 225
                      ? !1 === o.options.rtl
                        ? "right"
                        : "left"
                      : !0 === o.options.verticalSwiping
                      ? i >= 35 && i <= 135
                        ? "down"
                        : "up"
                      : "vertical"
                  );
                }),
                (t.prototype.swipeEnd = function (e) {
                  var t,
                    n,
                    i = this;
                  if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
                    return (i.scrolling = !1), !1;
                  if (
                    ((i.interrupted = !1),
                    (i.shouldClick = !(i.touchObject.swipeLength > 10)),
                    void 0 === i.touchObject.curX)
                  )
                    return !1;
                  if (
                    (!0 === i.touchObject.edgeHit &&
                      i.$slider.trigger("edge", [i, i.swipeDirection()]),
                    i.touchObject.swipeLength >= i.touchObject.minSwipe)
                  ) {
                    switch ((n = i.swipeDirection())) {
                      case "left":
                      case "down":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                          : i.currentSlide + i.getSlideCount()),
                          (i.currentDirection = 0);
                        break;
                      case "right":
                      case "up":
                        (t = i.options.swipeToSlide
                          ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                          : i.currentSlide - i.getSlideCount()),
                          (i.currentDirection = 1);
                    }
                    "vertical" != n &&
                      (i.slideHandler(t),
                      (i.touchObject = {}),
                      i.$slider.trigger("swipe", [i, n]));
                  } else
                    i.touchObject.startX !== i.touchObject.curX &&
                      (i.slideHandler(i.currentSlide), (i.touchObject = {}));
                }),
                (t.prototype.swipeHandler = function (e) {
                  var t = this;
                  if (
                    !(
                      !1 === t.options.swipe ||
                      ("ontouchend" in document && !1 === t.options.swipe) ||
                      (!1 === t.options.draggable &&
                        -1 !== e.type.indexOf("mouse"))
                    )
                  )
                    switch (
                      ((t.touchObject.fingerCount =
                        e.originalEvent && void 0 !== e.originalEvent.touches
                          ? e.originalEvent.touches.length
                          : 1),
                      (t.touchObject.minSwipe =
                        t.listWidth / t.options.touchThreshold),
                      !0 === t.options.verticalSwiping &&
                        (t.touchObject.minSwipe =
                          t.listHeight / t.options.touchThreshold),
                      e.data.action)
                    ) {
                      case "start":
                        t.swipeStart(e);
                        break;
                      case "move":
                        t.swipeMove(e);
                        break;
                      case "end":
                        t.swipeEnd(e);
                    }
                }),
                (t.prototype.swipeMove = function (e) {
                  var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                  return (
                    (r =
                      void 0 !== e.originalEvent
                        ? e.originalEvent.touches
                        : null),
                    !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                      ((t = a.getLeft(a.currentSlide)),
                      (a.touchObject.curX =
                        void 0 !== r ? r[0].pageX : e.clientX),
                      (a.touchObject.curY =
                        void 0 !== r ? r[0].pageY : e.clientY),
                      (a.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                        )
                      )),
                      (s = Math.round(
                        Math.sqrt(
                          Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                        )
                      )),
                      !a.options.verticalSwiping && !a.swiping && s > 4
                        ? ((a.scrolling = !0), !1)
                        : (!0 === a.options.verticalSwiping &&
                            (a.touchObject.swipeLength = s),
                          (n = a.swipeDirection()),
                          void 0 !== e.originalEvent &&
                            a.touchObject.swipeLength > 4 &&
                            ((a.swiping = !0), e.preventDefault()),
                          (o =
                            (!1 === a.options.rtl ? 1 : -1) *
                            (a.touchObject.curX > a.touchObject.startX
                              ? 1
                              : -1)),
                          !0 === a.options.verticalSwiping &&
                            (o =
                              a.touchObject.curY > a.touchObject.startY
                                ? 1
                                : -1),
                          (i = a.touchObject.swipeLength),
                          (a.touchObject.edgeHit = !1),
                          !1 === a.options.infinite &&
                            ((0 === a.currentSlide && "right" === n) ||
                              (a.currentSlide >= a.getDotCount() &&
                                "left" === n)) &&
                            ((i =
                              a.touchObject.swipeLength *
                              a.options.edgeFriction),
                            (a.touchObject.edgeHit = !0)),
                          !1 === a.options.vertical
                            ? (a.swipeLeft = t + i * o)
                            : (a.swipeLeft =
                                t + i * (a.$list.height() / a.listWidth) * o),
                          !0 === a.options.verticalSwiping &&
                            (a.swipeLeft = t + i * o),
                          !0 !== a.options.fade &&
                            !1 !== a.options.touchMove &&
                            (!0 === a.animating
                              ? ((a.swipeLeft = null), !1)
                              : void a.setCSS(a.swipeLeft))))
                  );
                }),
                (t.prototype.swipeStart = function (e) {
                  var t,
                    n = this;
                  if (
                    ((n.interrupted = !0),
                    1 !== n.touchObject.fingerCount ||
                      n.slideCount <= n.options.slidesToShow)
                  )
                    return (n.touchObject = {}), !1;
                  void 0 !== e.originalEvent &&
                    void 0 !== e.originalEvent.touches &&
                    (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX =
                      void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY =
                      void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
                }),
                (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                  var e = this;
                  null !== e.$slidesCache &&
                    (e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.appendTo(e.$slideTrack),
                    e.reinit());
                }),
                (t.prototype.unload = function () {
                  var t = this;
                  e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                      t.htmlExpr.test(t.options.prevArrow) &&
                      t.$prevArrow.remove(),
                    t.$nextArrow &&
                      t.htmlExpr.test(t.options.nextArrow) &&
                      t.$nextArrow.remove(),
                    t.$slides
                      .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                      )
                      .attr("aria-hidden", "true")
                      .css("width", "");
                }),
                (t.prototype.unslick = function (e) {
                  var t = this;
                  t.$slider.trigger("unslick", [t, e]), t.destroy();
                }),
                (t.prototype.updateArrows = function () {
                  var e = this;
                  Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                      e.slideCount > e.options.slidesToShow &&
                      !e.options.infinite &&
                      (e.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      e.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                      0 === e.currentSlide
                        ? (e.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$nextArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : e.currentSlide >=
                            e.slideCount - e.options.slidesToShow &&
                          !1 === e.options.centerMode
                        ? (e.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false"))
                        : e.currentSlide >= e.slideCount - 1 &&
                          !0 === e.options.centerMode &&
                          (e.$nextArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                          e.$prevArrow
                            .removeClass("slick-disabled")
                            .attr("aria-disabled", "false")));
                }),
                (t.prototype.updateDots = function () {
                  var e = this;
                  null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                      .find("li")
                      .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                      .addClass("slick-active"));
                }),
                (t.prototype.visibility = function () {
                  var e = this;
                  e.options.autoplay &&
                    (document[e.hidden]
                      ? (e.interrupted = !0)
                      : (e.interrupted = !1));
                }),
                (e.fn.slick = function () {
                  var e,
                    n,
                    i = this,
                    o = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    s = i.length;
                  for (e = 0; e < s; e++)
                    if (
                      ("object" == typeof o || void 0 === o
                        ? (i[e].slick = new t(i[e], o))
                        : (n = i[e].slick[o].apply(i[e].slick, r)),
                      void 0 !== n)
                    )
                      return n;
                  return i;
                });
              var n;
            })
              ? i.apply(t, o)
              : i) || (e.exports = r);
    })();
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(53).forEach,
      o = n(58);
    e.exports = o("forEach")
      ? function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  },
  function (e, t, n) {
    var i = n(19),
      o = n(25),
      r = n(26),
      s = n(16),
      a = n(54),
      l = [].push,
      c = function (e) {
        var t = 1 == e,
          n = 2 == e,
          c = 3 == e,
          u = 4 == e,
          d = 6 == e,
          p = 5 == e || d;
        return function (f, h, v, g) {
          for (
            var y,
              m,
              w = r(f),
              x = o(w),
              b = i(h, v, 3),
              T = s(x.length),
              k = 0,
              S = g || a,
              C = t ? S(f, T) : n ? S(f, 0) : void 0;
            T > k;
            k++
          )
            if ((p || k in x) && ((m = b((y = x[k]), k, w)), e))
              if (t) C[k] = m;
              else if (m)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return k;
                  case 2:
                    l.call(C, y);
                }
              else if (u) return !1;
          return d ? -1 : c || u ? u : C;
        };
      };
    e.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
    };
  },
  function (e, t, n) {
    var i = n(5),
      o = n(55),
      r = n(1)("species");
    e.exports = function (e, t) {
      var n;
      return (
        o(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !o(n.prototype))
            ? i(n) && null === (n = n[r]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    };
  },
  function (e, t, n) {
    var i = n(4);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == i(e);
      };
  },
  function (e, t, n) {
    var i = n(0),
      o = n(21),
      r = i["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = r;
  },
  function (e, t, n) {
    var i = n(32);
    e.exports = i && !Symbol.sham && "symbol" == typeof Symbol();
  },
  function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = function (e, t) {
      var n = [][e];
      return (
        !n ||
        !i(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(7),
      o = n(8),
      r = n(2),
      s = n(1),
      a = n(37),
      l = s("species"),
      c = !r(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      u = !r(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    e.exports = function (e, t, n, d) {
      var p = s(e),
        f = !r(function () {
          var t = {};
          return (
            (t[p] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        h =
          f &&
          !r(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[l] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[p] = /./[p])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[p](""),
              !t
            );
          });
      if (!f || !h || ("replace" === e && !c) || ("split" === e && !u)) {
        var v = /./[p],
          g = n(p, ""[e], function (e, t, n, i, o) {
            return t.exec === a
              ? f && !o
                ? { done: !0, value: v.call(t, n, i) }
                : { done: !0, value: e.call(n, t, i) }
              : { done: !1 };
          }),
          y = g[0],
          m = g[1];
        o(String.prototype, e, y),
          o(
            RegExp.prototype,
            p,
            2 == t
              ? function (e, t) {
                  return m.call(e, this, t);
                }
              : function (e) {
                  return m.call(e, this);
                }
          ),
          d && i(RegExp.prototype[p], "sham", !0);
      }
    };
  },
  function (e, t, n) {
    var i = n(0),
      o = n(34),
      r = i.WeakMap;
    e.exports = "function" == typeof r && /native code/.test(o.call(r));
  },
  function (e, t, n) {
    var i = n(11),
      o = n(31),
      r = i("keys");
    e.exports = function (e) {
      return r[e] || (r[e] = o(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(3);
    e.exports = function () {
      var e = i(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(64).charAt;
    e.exports = function (e, t, n) {
      return t + (n ? i(e, t).length : 1);
    };
  },
  function (e, t, n) {
    var i = n(17),
      o = n(15),
      r = function (e) {
        return function (t, n) {
          var r,
            s,
            a = String(o(t)),
            l = i(n),
            c = a.length;
          return l < 0 || l >= c
            ? e
              ? ""
              : void 0
            : (r = a.charCodeAt(l)) < 55296 ||
              r > 56319 ||
              l + 1 === c ||
              (s = a.charCodeAt(l + 1)) < 56320 ||
              s > 57343
            ? e
              ? a.charAt(l)
              : r
            : e
            ? a.slice(l, l + 2)
            : s - 56320 + ((r - 55296) << 10) + 65536;
        };
      };
    e.exports = { codeAt: r(!1), charAt: r(!0) };
  },
  function (e, t, n) {
    var i = n(4),
      o = n(37);
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== i(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return o.call(e, t);
    };
  },
  function (e, t, n) {
    var i = n(22),
      o = n(8),
      r = n(67);
    i || o(Object.prototype, "toString", r, { unsafe: !0 });
  },
  function (e, t, n) {
    "use strict";
    var i = n(22),
      o = n(38);
    e.exports = i
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (e, t, n) {
    "use strict";
    var i,
      o,
      r,
      s,
      a = n(39),
      l = n(20),
      c = n(0),
      u = n(9),
      d = n(41),
      p = n(8),
      f = n(79),
      h = n(11),
      v = n(80),
      g = n(81),
      y = n(5),
      m = n(14),
      w = n(82),
      x = n(4),
      b = n(83),
      T = n(87),
      k = n(43),
      S = n(44).set,
      C = n(89),
      $ = n(47),
      E = n(90),
      A = n(48),
      j = n(91),
      L = n(35),
      O = n(40),
      D = n(1),
      N = n(92),
      P = D("species"),
      H = "Promise",
      q = L.get,
      M = L.set,
      I = L.getterFor(H),
      _ = d,
      R = c.TypeError,
      z = c.document,
      W = c.process,
      F = h("inspectSource"),
      B = u("fetch"),
      U = A.f,
      X = U,
      G = "process" == x(W),
      Y = !!(z && z.createEvent && c.dispatchEvent),
      V = O(H, function () {
        if (!(F(_) !== String(_))) {
          if (66 === N) return !0;
          if (!G && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (l && !_.prototype.finally) return !0;
        if (N >= 51 && /native code/.test(_)) return !1;
        var e = _.resolve(1),
          t = function (e) {
            e(
              function () {},
              function () {}
            );
          };
        return (
          ((e.constructor = {})[P] = t), !(e.then(function () {}) instanceof t)
        );
      }),
      Q =
        V ||
        !T(function (e) {
          _.all(e).catch(function () {});
        }),
      J = function (e) {
        var t;
        return !(!y(e) || "function" != typeof (t = e.then)) && t;
      },
      K = function (e, t, n) {
        if (!t.notified) {
          t.notified = !0;
          var i = t.reactions;
          C(function () {
            for (var o = t.value, r = 1 == t.state, s = 0; i.length > s; ) {
              var a,
                l,
                c,
                u = i[s++],
                d = r ? u.ok : u.fail,
                p = u.resolve,
                f = u.reject,
                h = u.domain;
              try {
                d
                  ? (r || (2 === t.rejection && ne(e, t), (t.rejection = 1)),
                    !0 === d
                      ? (a = o)
                      : (h && h.enter(), (a = d(o)), h && (h.exit(), (c = !0))),
                    a === u.promise
                      ? f(R("Promise-chain cycle"))
                      : (l = J(a))
                      ? l.call(a, p, f)
                      : p(a))
                  : f(o);
              } catch (e) {
                h && !c && h.exit(), f(e);
              }
            }
            (t.reactions = []),
              (t.notified = !1),
              n && !t.rejection && ee(e, t);
          });
        }
      },
      Z = function (e, t, n) {
        var i, o;
        Y
          ? (((i = z.createEvent("Event")).promise = t),
            (i.reason = n),
            i.initEvent(e, !1, !0),
            c.dispatchEvent(i))
          : (i = { promise: t, reason: n }),
          (o = c["on" + e])
            ? o(i)
            : "unhandledrejection" === e && E("Unhandled promise rejection", n);
      },
      ee = function (e, t) {
        S.call(c, function () {
          var n,
            i = t.value;
          if (
            te(t) &&
            ((n = j(function () {
              G
                ? W.emit("unhandledRejection", i, e)
                : Z("unhandledrejection", e, i);
            })),
            (t.rejection = G || te(t) ? 2 : 1),
            n.error)
          )
            throw n.value;
        });
      },
      te = function (e) {
        return 1 !== e.rejection && !e.parent;
      },
      ne = function (e, t) {
        S.call(c, function () {
          G ? W.emit("rejectionHandled", e) : Z("rejectionhandled", e, t.value);
        });
      },
      ie = function (e, t, n, i) {
        return function (o) {
          e(t, n, o, i);
        };
      },
      oe = function (e, t, n, i) {
        t.done ||
          ((t.done = !0),
          i && (t = i),
          (t.value = n),
          (t.state = 2),
          K(e, t, !0));
      },
      re = function (e, t, n, i) {
        if (!t.done) {
          (t.done = !0), i && (t = i);
          try {
            if (e === n) throw R("Promise can't be resolved itself");
            var o = J(n);
            o
              ? C(function () {
                  var i = { done: !1 };
                  try {
                    o.call(n, ie(re, e, i, t), ie(oe, e, i, t));
                  } catch (n) {
                    oe(e, i, n, t);
                  }
                })
              : ((t.value = n), (t.state = 1), K(e, t, !1));
          } catch (n) {
            oe(e, { done: !1 }, n, t);
          }
        }
      };
    V &&
      ((_ = function (e) {
        w(this, _, H), m(e), i.call(this);
        var t = q(this);
        try {
          e(ie(re, this, t), ie(oe, this, t));
        } catch (e) {
          oe(this, t, e);
        }
      }),
      ((i = function (e) {
        M(this, {
          type: H,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = f(_.prototype, {
        then: function (e, t) {
          var n = I(this),
            i = U(k(this, _));
          return (
            (i.ok = "function" != typeof e || e),
            (i.fail = "function" == typeof t && t),
            (i.domain = G ? W.domain : void 0),
            (n.parent = !0),
            n.reactions.push(i),
            0 != n.state && K(this, n, !1),
            i.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (o = function () {
        var e = new i(),
          t = q(e);
        (this.promise = e),
          (this.resolve = ie(re, e, t)),
          (this.reject = ie(oe, e, t));
      }),
      (A.f = U = function (e) {
        return e === _ || e === r ? new o(e) : X(e);
      }),
      l ||
        "function" != typeof d ||
        ((s = d.prototype.then),
        p(
          d.prototype,
          "then",
          function (e, t) {
            var n = this;
            return new _(function (e, t) {
              s.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        "function" == typeof B &&
          a(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (e) {
                return $(_, B.apply(c, arguments));
              },
            }
          ))),
      a({ global: !0, wrap: !0, forced: V }, { Promise: _ }),
      v(_, H, !1, !0),
      g(H),
      (r = u(H)),
      a(
        { target: H, stat: !0, forced: V },
        {
          reject: function (e) {
            var t = U(this);
            return t.reject.call(void 0, e), t.promise;
          },
        }
      ),
      a(
        { target: H, stat: !0, forced: l || V },
        {
          resolve: function (e) {
            return $(l && this === r ? _ : this, e);
          },
        }
      ),
      a(
        { target: H, stat: !0, forced: Q },
        {
          all: function (e) {
            var t = this,
              n = U(t),
              i = n.resolve,
              o = n.reject,
              r = j(function () {
                var n = m(t.resolve),
                  r = [],
                  s = 0,
                  a = 1;
                b(e, function (e) {
                  var l = s++,
                    c = !1;
                  r.push(void 0),
                    a++,
                    n.call(t, e).then(function (e) {
                      c || ((c = !0), (r[l] = e), --a || i(r));
                    }, o);
                }),
                  --a || i(r);
              });
            return r.error && o(r.value), n.promise;
          },
          race: function (e) {
            var t = this,
              n = U(t),
              i = n.reject,
              o = j(function () {
                var o = m(t.resolve);
                b(e, function (e) {
                  o.call(t, e).then(n.resolve, i);
                });
              });
            return o.error && i(o.value), n.promise;
          },
        }
      );
  },
  function (e, t, n) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      r = o && !i.call({ 1: 2 }, 1);
    t.f = r
      ? function (e) {
          var t = o(this, e);
          return !!t && t.enumerable;
        }
      : i;
  },
  function (e, t, n) {
    var i = n(6),
      o = n(71),
      r = n(23),
      s = n(18);
    e.exports = function (e, t) {
      for (var n = o(t), a = s.f, l = r.f, c = 0; c < n.length; c++) {
        var u = n[c];
        i(e, u) || a(e, u, l(t, u));
      }
    };
  },
  function (e, t, n) {
    var i = n(9),
      o = n(73),
      r = n(78),
      s = n(3);
    e.exports =
      i("Reflect", "ownKeys") ||
      function (e) {
        var t = o.f(s(e)),
          n = r.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function (e, t, n) {
    e.exports = n(0);
  },
  function (e, t, n) {
    var i = n(74),
      o = n(77).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return i(e, o);
      };
  },
  function (e, t, n) {
    var i = n(6),
      o = n(24),
      r = n(75).indexOf,
      s = n(36);
    e.exports = function (e, t) {
      var n,
        a = o(e),
        l = 0,
        c = [];
      for (n in a) !i(s, n) && i(a, n) && c.push(n);
      for (; t.length > l; ) i(a, (n = t[l++])) && (~r(c, n) || c.push(n));
      return c;
    };
  },
  function (e, t, n) {
    var i = n(24),
      o = n(16),
      r = n(76),
      s = function (e) {
        return function (t, n, s) {
          var a,
            l = i(t),
            c = o(l.length),
            u = r(s, c);
          if (e && n != n) {
            for (; c > u; ) if ((a = l[u++]) != a) return !0;
          } else
            for (; c > u; u++)
              if ((e || u in l) && l[u] === n) return e || u || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (e, t, n) {
    var i = n(17),
      o = Math.max,
      r = Math.min;
    e.exports = function (e, t) {
      var n = i(e);
      return n < 0 ? o(n + t, 0) : r(n, t);
    };
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var i = n(8);
    e.exports = function (e, t, n) {
      for (var o in t) i(e, o, t[o], n);
      return e;
    };
  },
  function (e, t, n) {
    var i = n(18).f,
      o = n(6),
      r = n(1)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !o((e = n ? e : e.prototype), r) &&
        i(e, r, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    "use strict";
    var i = n(9),
      o = n(18),
      r = n(1),
      s = n(12),
      a = r("species");
    e.exports = function (e) {
      var t = i(e),
        n = o.f;
      s &&
        t &&
        !t[a] &&
        n(t, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  },
  function (e, t, n) {
    var i = n(3),
      o = n(84),
      r = n(16),
      s = n(19),
      a = n(85),
      l = n(86),
      c = function (e, t) {
        (this.stopped = e), (this.result = t);
      };
    (e.exports = function (e, t, n, u, d) {
      var p,
        f,
        h,
        v,
        g,
        y,
        m,
        w = s(t, n, u ? 2 : 1);
      if (d) p = e;
      else {
        if ("function" != typeof (f = a(e)))
          throw TypeError("Target is not iterable");
        if (o(f)) {
          for (h = 0, v = r(e.length); v > h; h++)
            if ((g = u ? w(i((m = e[h]))[0], m[1]) : w(e[h])) && g instanceof c)
              return g;
          return new c(!1);
        }
        p = f.call(e);
      }
      for (y = p.next; !(m = y.call(p)).done; )
        if ("object" == typeof (g = l(p, w, m.value, u)) && g && g instanceof c)
          return g;
      return new c(!1);
    }).stop = function (e) {
      return new c(!0, e);
    };
  },
  function (e, t, n) {
    var i = n(1),
      o = n(42),
      r = i("iterator"),
      s = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (o.Array === e || s[r] === e);
    };
  },
  function (e, t, n) {
    var i = n(38),
      o = n(42),
      r = n(1)("iterator");
    e.exports = function (e) {
      if (null != e) return e[r] || e["@@iterator"] || o[i(e)];
    };
  },
  function (e, t, n) {
    var i = n(3);
    e.exports = function (e, t, n, o) {
      try {
        return o ? t(i(n)[0], n[1]) : t(n);
      } catch (t) {
        var r = e.return;
        throw (void 0 !== r && i(r.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var i = n(1)("iterator"),
      o = !1;
    try {
      var r = 0,
        s = {
          next: function () {
            return { done: !!r++ };
          },
          return: function () {
            o = !0;
          },
        };
      (s[i] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var r = {};
        (r[i] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    var i = n(9);
    e.exports = i("document", "documentElement");
  },
  function (e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      c,
      u,
      d = n(0),
      p = n(23).f,
      f = n(4),
      h = n(44).set,
      v = n(45),
      g = d.MutationObserver || d.WebKitMutationObserver,
      y = d.process,
      m = d.Promise,
      w = "process" == f(y),
      x = p(d, "queueMicrotask"),
      b = x && x.value;
    b ||
      ((i = function () {
        var e, t;
        for (w && (e = y.domain) && e.exit(); o; ) {
          (t = o.fn), (o = o.next);
          try {
            t();
          } catch (e) {
            throw (o ? s() : (r = void 0), e);
          }
        }
        (r = void 0), e && e.enter();
      }),
      w
        ? (s = function () {
            y.nextTick(i);
          })
        : g && !v
        ? ((a = !0),
          (l = document.createTextNode("")),
          new g(i).observe(l, { characterData: !0 }),
          (s = function () {
            l.data = a = !a;
          }))
        : m && m.resolve
        ? ((c = m.resolve(void 0)),
          (u = c.then),
          (s = function () {
            u.call(c, i);
          }))
        : (s = function () {
            h.call(d, i);
          })),
      (e.exports =
        b ||
        function (e) {
          var t = { fn: e, next: void 0 };
          r && (r.next = t), o || ((o = t), s()), (r = t);
        });
  },
  function (e, t, n) {
    var i = n(0);
    e.exports = function (e, t) {
      var n = i.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    };
  },
  function (e, t, n) {
    var i,
      o,
      r = n(0),
      s = n(46),
      a = r.process,
      l = a && a.versions,
      c = l && l.v8;
    c
      ? (o = (i = c.split("."))[0] + i[1])
      : s &&
        (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
        (i = s.match(/Chrome\/(\d+)/)) &&
        (o = i[1]),
      (e.exports = o && +o);
  },
  function (e, t, n) {
    "use strict";
    var i = n(39),
      o = n(20),
      r = n(41),
      s = n(9),
      a = n(43),
      l = n(47),
      c = n(8);
    i(
      { target: "Promise", proto: !0, real: !0 },
      {
        finally: function (e) {
          var t = a(this, s("Promise")),
            n = "function" == typeof e;
          return this.then(
            n
              ? function (n) {
                  return l(t, e()).then(function () {
                    return n;
                  });
                }
              : e,
            n
              ? function (n) {
                  return l(t, e()).then(function () {
                    throw n;
                  });
                }
              : e
          );
        },
      }
    ),
      o ||
        "function" != typeof r ||
        r.prototype.finally ||
        c(r.prototype, "finally", s("Promise").prototype.finally);
  },
  function (e, t) {
    !(function (t) {
      "use strict";
      var n,
        i = Object.prototype,
        o = i.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        s = r.iterator || "@@iterator",
        a = r.asyncIterator || "@@asyncIterator",
        l = r.toStringTag || "@@toStringTag",
        c = "object" == typeof e,
        u = t.regeneratorRuntime;
      if (u) c && (e.exports = u);
      else {
        (u = t.regeneratorRuntime = c ? e.exports : {}).wrap = x;
        var d = "suspendedStart",
          p = "suspendedYield",
          f = "executing",
          h = "completed",
          v = {},
          g = {};
        g[s] = function () {
          return this;
        };
        var y = Object.getPrototypeOf,
          m = y && y(y(O([])));
        m && m !== i && o.call(m, s) && (g = m);
        var w = (S.prototype = T.prototype = Object.create(g));
        (k.prototype = w.constructor = S),
          (S.constructor = k),
          (S[l] = k.displayName = "GeneratorFunction"),
          (u.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === k || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (u.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, S)
                : ((e.__proto__ = S), l in e || (e[l] = "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (u.awrap = function (e) {
            return { __await: e };
          }),
          C($.prototype),
          ($.prototype[a] = function () {
            return this;
          }),
          (u.AsyncIterator = $),
          (u.async = function (e, t, n, i) {
            var o = new $(x(e, t, n, i));
            return u.isGeneratorFunction(t)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          C(w),
          (w[l] = "Generator"),
          (w[s] = function () {
            return this;
          }),
          (w.toString = function () {
            return "[object Generator]";
          }),
          (u.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var i = t.pop();
                  if (i in e) return (n.value = i), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (u.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = n),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(i, o) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = i),
                  o && ((t.method = "next"), (t.arg = n)),
                  !!o
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var s = this.tryEntries[r],
                  a = s.completion;
                if ("root" === s.tryLoc) return i("end");
                if (s.tryLoc <= this.prev) {
                  var l = o.call(s, "catchLoc"),
                    c = o.call(s, "finallyLoc");
                  if (l && c) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  } else if (l) {
                    if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  o.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var r = i;
                  break;
                }
              }
              r &&
                ("break" === e || "continue" === e) &&
                r.tryLoc <= t &&
                t <= r.finallyLoc &&
                (r = null);
              var s = r ? r.completion : {};
              return (
                (s.type = e),
                (s.arg = t),
                r
                  ? ((this.method = "next"), (this.next = r.finallyLoc), v)
                  : this.complete(s)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                v
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var i = n.completion;
                  if ("throw" === i.type) {
                    var o = i.arg;
                    j(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, i) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: i }),
                "next" === this.method && (this.arg = n),
                v
              );
            },
          });
      }
      function x(e, t, n, i) {
        var o = t && t.prototype instanceof T ? t : T,
          r = Object.create(o.prototype),
          s = new L(i || []);
        return (
          (r._invoke = (function (e, t, n) {
            var i = d;
            return function (o, r) {
              if (i === f) throw new Error("Generator is already running");
              if (i === h) {
                if ("throw" === o) throw r;
                return D();
              }
              for (n.method = o, n.arg = r; ; ) {
                var s = n.delegate;
                if (s) {
                  var a = E(s, n);
                  if (a) {
                    if (a === v) continue;
                    return a;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (i === d) throw ((i = h), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                i = f;
                var l = b(e, t, n);
                if ("normal" === l.type) {
                  if (((i = n.done ? h : p), l.arg === v)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((i = h), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(e, n, s)),
          r
        );
      }
      function b(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function T() {}
      function k() {}
      function S() {}
      function C(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function $(e) {
        var t;
        this._invoke = function (n, i) {
          function r() {
            return new Promise(function (t, r) {
              !(function t(n, i, r, s) {
                var a = b(e[n], e, i);
                if ("throw" !== a.type) {
                  var l = a.arg,
                    c = l.value;
                  return c && "object" == typeof c && o.call(c, "__await")
                    ? Promise.resolve(c.__await).then(
                        function (e) {
                          t("next", e, r, s);
                        },
                        function (e) {
                          t("throw", e, r, s);
                        }
                      )
                    : Promise.resolve(c).then(function (e) {
                        (l.value = e), r(l);
                      }, s);
                }
                s(a.arg);
              })(n, i, t, r);
            });
          }
          return (t = t ? t.then(r, r) : r());
        };
      }
      function E(e, t) {
        var i = e.iterator[t.method];
        if (i === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = n),
              E(e, t),
              "throw" === t.method)
            )
              return v;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return v;
        }
        var o = b(i, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), v;
        var r = o.arg;
        return r
          ? r.done
            ? ((t[e.resultName] = r.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = n)),
              (t.delegate = null),
              v)
            : r
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            v);
      }
      function A(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function j(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function L(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(A, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var t = e[s];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              r = function t() {
                for (; ++i < e.length; )
                  if (o.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: D };
      }
      function D() {
        return { value: n, done: !0 };
      }
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(13),
      o = n.n(i);
    n(49);
    o()(document).ready(function () {
      o()(".glazing_slider").slick({
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 4,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              prevArrow: '<button class="prev arrow"></button>',
              nextArrow: '<button class="next arrow"></button>',
              slidesToScroll: 1,
            },
          },
        ],
      }),
        o()(".decoration_slider").slick({
          infinite: !0,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev arrow"></button>',
                nextArrow: '<button class="next arrow"></button>',
                slidesToScroll: 1,
              },
            },
          ],
        });
    });
    n(10);
    var r = function () {
        function e(e, t, n) {
          var i =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            o = document.querySelectorAll(e),
            r = document.querySelector(t),
            s = document.querySelector(n),
            a = document.querySelectorAll("[data-modal]"),
            l = (function () {
              var e = document.createElement("div");
              (e.style.width = "50px"),
                (e.style.height = "50px"),
                (e.style.overflowY = "scroll"),
                (e.style.visibility = "hidden"),
                document.body.appendChild(e);
              var t = e.offsetWidth - e.clientWidth;
              return e.remove(), t;
            })();
          o.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.target && e.preventDefault(),
                a.forEach(function (e) {
                  e.style.display = "none";
                }),
                (r.style.display = "block"),
                (document.body.style.overflow = "hidden"),
                (document.body.style.marginRight = "".concat(l, "px"));
            });
          }),
            s.addEventListener("click", function () {
              a.forEach(function (e) {
                e.style.display = "none";
              }),
                (r.style.display = "none"),
                (document.body.style.overflow = ""),
                (document.body.style.marginRight = "0px");
            }),
            r.addEventListener("click", function (e) {
              e.target === r &&
                i &&
                (a.forEach(function (e) {
                  e.style.display = "none";
                }),
                (r.style.display = "none"),
                (document.body.style.overflow = ""),
                (document.body.style.marginRight = "0px"));
            });
        }
        e(
          ".popup_engineer_btn",
          ".popup_engineer",
          ".popup_engineer .popup_close"
        ),
          e(".phone_link", ".popup", ".popup .popup_close"),
          e(".popup_calc_btn", ".popup_calc", ".popup_calc_close"),
          e(
            ".popup_calc_button",
            ".popup_calc_profile",
            ".popup_calc_profile_close",
            !1
          ),
          e(
            ".popup_calc_profile_button",
            ".popup_calc_end",
            ".popup_calc_end_close",
            !1
          );
      },
      s =
        (n(33),
        function (e, t, n, i) {
          var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "block",
            r = document.querySelector(e),
            s = document.querySelectorAll(t),
            a = document.querySelectorAll(n);
          function l() {
            a.forEach(function (e) {
              e.style.display = "none";
            }),
              s.forEach(function (e) {
                e.classList.remove(i);
              });
          }
          function c() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            (a[e].style.display = o), s[e].classList.add(i);
          }
          l(),
            c(),
            r.addEventListener("click", function (e) {
              var n = e.target;
              n &&
                (n.classList.contains(t.replace(/\./, "")) ||
                  n.parentNode.classList.contains(t.replace(/\./, ""))) &&
                s.forEach(function (e, t) {
                  (n != e && n.parentNode != e) || (l(), c(t));
                });
            });
        }),
      a =
        (n(66),
        n(68),
        n(93),
        n(94),
        function (e) {
          document.querySelectorAll(e).forEach(function (e) {
            e.addEventListener("input", function () {
              e.value = e.value.replace(/\D/, "");
            });
          });
        }),
      l = function (e) {
        var t = document.querySelectorAll("form"),
          n = document.querySelectorAll("input");
        a('input[name="user_phone"]');
        var i = "Загрузка...",
          o = "Спасибо! Скоро мы с вами свяжемся",
          r = "Что-то пошло не так...";
        t.forEach(function (t) {
          t.addEventListener("submit", function (s) {
            s.preventDefault();
            var a = document.createElement("div");
            a.classList.add("status"), t.appendChild(a);
            var l,
              c,
              u,
              d = new FormData(t);
            if ("end" === t.getAttribute("data-calc"))
              for (var p in e) d.append(p, e[p]);
            ((l = "assets/server.php"),
            (c = d),
            regeneratorRuntime.async(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (document.querySelector(".status").textContent = i),
                      (e.next = 3),
                      regeneratorRuntime.awrap(
                        fetch(l, { method: "POST", body: c })
                      )
                    );
                  case 3:
                    return (
                      (u = e.sent),
                      (e.next = 6),
                      regeneratorRuntime.awrap(u.text())
                    );
                  case 6:
                    return e.abrupt("return", e.sent);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }))
              .then(function (e) {
                console.log(e), (a.textContent = o);
              })
              .catch(function () {
                return (a.textContent = r);
              })
              .finally(function () {
                n.forEach(function (e) {
                  e.value = "";
                }),
                  setTimeout(function () {
                    a.remove();
                  }, 5e3);
              });
          });
        });
      },
      c = function (e) {
        var t = document.querySelectorAll(".balcon_icons_img"),
          n = document.querySelectorAll("#width"),
          i = document.querySelectorAll("#height"),
          o = document.querySelectorAll("#view_type"),
          r = document.querySelectorAll(".checkbox");
        function s(t, n, i) {
          n.forEach(function (o, r) {
            o.addEventListener(t, function () {
              switch (o.nodeName) {
                case "SPAN":
                  e[i] = r;
                  break;
                case "INPUT":
                  "checkbox" === o.getAttribute("type")
                    ? ((e[i] = 0 === r ? "Холодное" : "Теплое"),
                      n.forEach(function (e, t) {
                        (e.checked = !1), r == t && (e.checked = !0);
                      }))
                    : (e[i] = o.value);
                  break;
                case "SELECT":
                  e[i] = o.value;
              }
              console.log(e);
            });
          });
        }
        a("#width"),
          a("#height"),
          s("click", t, "form"),
          s("input", i, "height"),
          s("input", n, "width"),
          s("change", o, "type"),
          s("change", r, "profile");
      },
      u = function (e, t) {
        var n = function (e) {
            return e <= 9 ? "0" + e : e;
          },
          i = function (e) {
            var t = Date.parse(e) - Date.parse(new Date()),
              n = Math.floor((t / 1e3) % 60),
              i = Math.floor((t / 1e3 / 60) % 60),
              o = Math.floor((t / 36e5) % 24);
            return {
              total: t,
              days: Math.floor(t / 864e5),
              hours: o,
              minutes: i,
              seconds: n,
            };
          };
        !(function (e, t) {
          var o = document.querySelector(e),
            r = o.querySelector("#days"),
            s = o.querySelector("#hours"),
            a = o.querySelector("#minutes"),
            l = o.querySelector("#seconds"),
            c = setInterval(u, 1e3);
          function u() {
            var e = i(t);
            (r.textContent = n(e.days)),
              (s.textContent = n(e.hours)),
              (a.textContent = n(e.minutes)),
              (l.textContent = n(e.seconds)),
              e.total <= 0 &&
                ((r.textContent = "00"),
                (s.textContent = "00"),
                (a.textContent = "00"),
                (l.textContent = "00"),
                clearInterval(c));
          }
          u();
        })(e, t);
      },
      d = function () {
        var e = document.createElement("div"),
          t = document.querySelector(".works"),
          n = document.createElement("img");
        e.classList.add("popup"),
          t.appendChild(e),
          (e.style.justifyContent = "center"),
          (e.style.alignItems = "center"),
          (e.style.display = "none"),
          e.appendChild(n),
          t.addEventListener("click", function (t) {
            t.preventDefault();
            var i = t.target;
            if (i && i.classList.contains("preview")) {
              e.style.display = "flex";
              var o = i.parentNode.getAttribute("href");
              n.setAttribute("src", o);
            }
            i && i.matches("div.popup") && (e.style.display = "none");
          });
      };
    window.addEventListener("DOMContentLoaded", function () {
      var e = {};
      c(e),
        r(),
        s(".glazing_slider ", ".glazing_block", ".glazing_content", "active"),
        s(
          ".decoration_slider",
          ".no_click",
          ".decoration_content > div > div",
          "after_click"
        ),
        s(
          ".balcon_icons",
          ".balcon_icons_img",
          ".big_img > img",
          "do_image_more",
          "inline-block"
        ),
        l(e),
        u(".container1", "2020-02-01"),
        d();
    });
  },
]);
