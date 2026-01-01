var Cc = (e) => {
  throw TypeError(e);
};
var ml = (e, t, n) => t.has(e) || Cc("Cannot " + n);
var P = (e, t, n) => (
    ml(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Z = (e, t, n) =>
    t.has(e)
      ? Cc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  B = (e, t, n, r) => (
    ml(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Pe = (e, t, n) => (ml(e, t, "access private method"), n);
var wi = (e, t, n, r) => ({
  set _(o) {
    B(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Av(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rf = { exports: {} },
  Ds = {},
  Of = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
  Lv = Symbol.for("react.portal"),
  jv = Symbol.for("react.fragment"),
  Mv = Symbol.for("react.strict_mode"),
  Iv = Symbol.for("react.profiler"),
  Dv = Symbol.for("react.provider"),
  zv = Symbol.for("react.context"),
  Fv = Symbol.for("react.forward_ref"),
  $v = Symbol.for("react.suspense"),
  Uv = Symbol.for("react.memo"),
  Bv = Symbol.for("react.lazy"),
  kc = Symbol.iterator;
function Wv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kc && e[kc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _f = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  Lf = {};
function to(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || _f);
}
to.prototype.isReactComponent = {};
to.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
to.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jf() {}
jf.prototype = to.prototype;
function ou(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || _f);
}
var iu = (ou.prototype = new jf());
iu.constructor = ou;
Af(iu, to.prototype);
iu.isPureReactComponent = !0;
var bc = Array.isArray,
  Mf = Object.prototype.hasOwnProperty,
  su = { current: null },
  If = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Mf.call(t, r) && !If.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: si,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: su.current,
  };
}
function Vv(e, t) {
  return {
    $$typeof: si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === si;
}
function Hv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pc = /\/+/g;
function vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hv("" + e.key)
    : t.toString(36);
}
function Wi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case si:
          case Lv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + vl(s, 0) : r),
      bc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pc, "$&/") + "/"),
          Wi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (lu(o) &&
            (o = Vv(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), bc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + vl(i, l);
      s += Wi(i, t, n, a, o);
    }
  else if (((a = Wv(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + vl(i, l++)), (s += Wi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function xi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Wi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Qv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null },
  Vi = { transition: null },
  Kv = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: su,
  };
function zf() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: xi,
  forEach: function (e, t, n) {
    xi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = to;
G.Fragment = jv;
G.Profiler = Iv;
G.PureComponent = ou;
G.StrictMode = Mv;
G.Suspense = $v;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv;
G.act = zf;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Af({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = su.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Mf.call(t, a) &&
        !If.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: si, type: e.type, key: o, ref: i, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: zv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dv, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Df;
G.createFactory = function (e) {
  var t = Df.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Fv, render: e };
};
G.isValidElement = lu;
G.lazy = function (e) {
  return { $$typeof: Bv, _payload: { _status: -1, _result: e }, _init: Qv };
};
G.memo = function (e, t) {
  return { $$typeof: Uv, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
G.unstable_act = zf;
G.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Ie.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
G.useId = function () {
  return Ie.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Ie.current.useRef(e);
};
G.useState = function (e) {
  return Ie.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Ie.current.useTransition();
};
G.version = "18.3.1";
Of.exports = G;
var y = Of.exports;
const _ = Nf(y),
  Ff = Av({ __proto__: null, default: _ }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gv = y,
  Yv = Symbol.for("react.element"),
  Xv = Symbol.for("react.fragment"),
  qv = Object.prototype.hasOwnProperty,
  Zv = Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jv = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) qv.call(t, r) && !Jv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Zv.current,
  };
}
Ds.Fragment = Xv;
Ds.jsx = $f;
Ds.jsxs = $f;
Rf.exports = Ds;
var E = Rf.exports,
  Uf = { exports: {} },
  qe = {},
  Bf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, N) {
    var M = T.length;
    T.push(N);
    e: for (; 0 < M; ) {
      var V = (M - 1) >>> 1,
        z = T[V];
      if (0 < o(z, N)) (T[V] = N), (T[M] = z), (M = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var N = T[0],
      M = T.pop();
    if (M !== N) {
      T[0] = M;
      e: for (var V = 0, z = T.length, K = z >>> 1; V < K; ) {
        var X = 2 * (V + 1) - 1,
          he = T[X],
          be = X + 1,
          J = T[be];
        if (0 > o(he, M))
          be < z && 0 > o(J, he)
            ? ((T[V] = J), (T[be] = M), (V = be))
            : ((T[V] = he), (T[X] = M), (V = X));
        else if (be < z && 0 > o(J, M)) (T[V] = J), (T[be] = M), (V = be);
        else break e;
      }
    }
    return N;
  }
  function o(T, N) {
    var M = T.sortIndex - N.sortIndex;
    return M !== 0 ? M : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    d = !1,
    x = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= T)
        r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function S(T) {
    if (((g = !1), v(T), !x))
      if (n(a) !== null) (x = !0), $(C);
      else {
        var N = n(u);
        N !== null && W(S, N.startTime - T);
      }
  }
  function C(T, N) {
    (x = !1), g && ((g = !1), m(R), (R = -1)), (d = !0);
    var M = h;
    try {
      for (
        v(N), f = n(a);
        f !== null && (!(f.expirationTime > N) || (T && !F()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var z = V(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(a) && r(a),
            v(N);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var K = !0;
      else {
        var X = n(u);
        X !== null && W(S, X.startTime - N), (K = !1);
      }
      return K;
    } finally {
      (f = null), (h = M), (d = !1);
    }
  }
  var k = !1,
    b = null,
    R = -1,
    L = 5,
    A = -1;
  function F() {
    return !(e.unstable_now() - A < L);
  }
  function D() {
    if (b !== null) {
      var T = e.unstable_now();
      A = T;
      var N = !0;
      try {
        N = b(!0, T);
      } finally {
        N ? Q() : ((k = !1), (b = null));
      }
    } else k = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(D);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      Y = j.port2;
    (j.port1.onmessage = D),
      (Q = function () {
        Y.postMessage(null);
      });
  } else
    Q = function () {
      w(D, 0);
    };
  function $(T) {
    (b = T), k || ((k = !0), Q());
  }
  function W(T, N) {
    R = w(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || d || ((x = !0), $(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var M = h;
      h = N;
      try {
        return T();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = h;
      h = T;
      try {
        return N();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, M) {
      var V = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? V + M : V))
          : (M = V),
        T)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = M + z),
        (T = {
          id: c++,
          callback: N,
          priorityLevel: T,
          startTime: M,
          expirationTime: z,
          sortIndex: -1,
        }),
        M > V
          ? ((T.sortIndex = M),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (g ? (m(R), (R = -1)) : (g = !0), W(S, M - V)))
          : ((T.sortIndex = z), t(a, T), x || d || ((x = !0), $(C))),
        T
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (T) {
      var N = h;
      return function () {
        var M = h;
        h = N;
        try {
          return T.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(Wf);
Bf.exports = Wf;
var eg = Bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg = y,
  Xe = eg;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vf = new Set(),
  Mo = {};
function sr(e, t) {
  Qr(e, t), Qr(e + "Capture", t);
}
function Qr(e, t) {
  for (Mo[e] = t, e = 0; e < t.length; e++) Vf.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  ng =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tc = {},
  Nc = {};
function rg(e) {
  return Xl.call(Nc, e)
    ? !0
    : Xl.call(Tc, e)
    ? !1
    : ng.test(e)
    ? (Nc[e] = !0)
    : ((Tc[e] = !0), !1);
}
function og(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ig(e, t, n, r) {
  if (t === null || typeof t > "u" || og(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var au = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(au, uu);
    ke[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(au, uu);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(au, uu);
  ke[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ig(t, n, o, r) && (n = null),
    r || o === null
      ? rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Si = Symbol.for("react.element"),
  yr = Symbol.for("react.portal"),
  wr = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  ql = Symbol.for("react.profiler"),
  Hf = Symbol.for("react.provider"),
  Qf = Symbol.for("react.context"),
  fu = Symbol.for("react.forward_ref"),
  Zl = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  an = Symbol.for("react.lazy"),
  Kf = Symbol.for("react.offscreen"),
  Rc = Symbol.iterator;
function co(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rc && e[Rc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  gl;
function So(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var yl = !1;
function wl(e, t) {
  if (!e || yl) return "";
  yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? So(e) : "";
}
function sg(e) {
  switch (e.tag) {
    case 5:
      return So(e.type);
    case 16:
      return So("Lazy");
    case 13:
      return So("Suspense");
    case 19:
      return So("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wl(e.type, !1)), e;
    case 11:
      return (e = wl(e.type.render, !1)), e;
    case 1:
      return (e = wl(e.type, !0)), e;
    default:
      return "";
  }
}
function ea(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wr:
      return "Fragment";
    case yr:
      return "Portal";
    case ql:
      return "Profiler";
    case du:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qf:
        return (e.displayName || "Context") + ".Consumer";
      case Hf:
        return (e._context.displayName || "Context") + ".Provider";
      case fu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pu:
        return (
          (t = e.displayName || null), t !== null ? t : ea(e.type) || "Memo"
        );
      case an:
        (t = e._payload), (e = e._init);
        try {
          return ea(e(t));
        } catch {}
    }
  return null;
}
function lg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ea(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ag(e) {
  var t = Gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ei(e) {
  e._valueTracker || (e._valueTracker = ag(e));
}
function Yf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xf(e, t) {
  (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function na(e, t) {
  Xf(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ra(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ra(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _c(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ra(e, t, n) {
  (t !== "number" || is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function oa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Eo(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function qf(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ci,
  Jf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ci = Ci || document.createElement("div"),
          Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(bo).forEach(function (e) {
  ug.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bo[t] = bo[e]);
  });
});
function ep(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bo.hasOwnProperty(e) && bo[e])
    ? ("" + t).trim()
    : t + "px";
}
function tp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ep(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var cg = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function sa(e, t) {
  if (t) {
    if (cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function la(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var aa = null;
function hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ua = null,
  _r = null,
  Ar = null;
function jc(e) {
  if ((e = ui(e))) {
    if (typeof ua != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Bs(t)), ua(e.stateNode, e.type, t));
  }
}
function np(e) {
  _r ? (Ar ? Ar.push(e) : (Ar = [e])) : (_r = e);
}
function rp() {
  if (_r) {
    var e = _r,
      t = Ar;
    if (((Ar = _r = null), jc(e), t)) for (e = 0; e < t.length; e++) jc(t[e]);
  }
}
function op(e, t) {
  return e(t);
}
function ip() {}
var xl = !1;
function sp(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return op(e, t, n);
  } finally {
    (xl = !1), (_r !== null || Ar !== null) && (ip(), rp());
  }
}
function Do(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var ca = !1;
if (Vt)
  try {
    var fo = {};
    Object.defineProperty(fo, "passive", {
      get: function () {
        ca = !0;
      },
    }),
      window.addEventListener("test", fo, fo),
      window.removeEventListener("test", fo, fo);
  } catch {
    ca = !1;
  }
function dg(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Po = !1,
  ss = null,
  ls = !1,
  da = null,
  fg = {
    onError: function (e) {
      (Po = !0), (ss = e);
    },
  };
function pg(e, t, n, r, o, i, s, l, a) {
  (Po = !1), (ss = null), dg.apply(fg, arguments);
}
function hg(e, t, n, r, o, i, s, l, a) {
  if ((pg.apply(this, arguments), Po)) {
    if (Po) {
      var u = ss;
      (Po = !1), (ss = null);
    } else throw Error(O(198));
    ls || ((ls = !0), (da = u));
  }
}
function lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (lr(e) !== e) throw Error(O(188));
}
function mg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Mc(o), e;
        if (i === r) return Mc(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function ap(e) {
  return (e = mg(e)), e !== null ? up(e) : null;
}
function up(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = up(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cp = Xe.unstable_scheduleCallback,
  Ic = Xe.unstable_cancelCallback,
  vg = Xe.unstable_shouldYield,
  gg = Xe.unstable_requestPaint,
  pe = Xe.unstable_now,
  yg = Xe.unstable_getCurrentPriorityLevel,
  mu = Xe.unstable_ImmediatePriority,
  dp = Xe.unstable_UserBlockingPriority,
  as = Xe.unstable_NormalPriority,
  wg = Xe.unstable_LowPriority,
  fp = Xe.unstable_IdlePriority,
  zs = null,
  _t = null;
function xg(e) {
  if (_t && typeof _t.onCommitFiberRoot == "function")
    try {
      _t.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : Cg,
  Sg = Math.log,
  Eg = Math.LN2;
function Cg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sg(e) / Eg) | 0)) | 0;
}
var ki = 64,
  bi = 4194304;
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Co(l)) : ((i &= s), i !== 0 && (r = Co(i)));
  } else (s = n & ~o), s !== 0 ? (r = Co(s)) : i !== 0 && (r = Co(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function kg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - yt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = kg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function fa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pp() {
  var e = ki;
  return (ki <<= 1), !(ki & 4194240) && (ki = 64), e;
}
function Sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function li(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function Pg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function vu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function hp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mp,
  gu,
  vp,
  gp,
  yp,
  pa = !1,
  Pi = [],
  xn = null,
  Sn = null,
  En = null,
  zo = new Map(),
  Fo = new Map(),
  cn = [],
  Tg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Dc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fo.delete(t.pointerId);
  }
}
function po(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ui(t)), t !== null && gu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ng(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xn = po(xn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Sn = po(Sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (En = po(En, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return zo.set(i, po(zo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Fo.set(i, po(Fo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function wp(e) {
  var t = Wn(e.target);
  if (t !== null) {
    var n = lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lp(n)), t !== null)) {
          (e.blockedOn = t),
            yp(e.priority, function () {
              vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ha(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (aa = r), n.target.dispatchEvent(r), (aa = null);
    } else return (t = ui(n)), t !== null && gu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zc(e, t, n) {
  Hi(e) && n.delete(t);
}
function Rg() {
  (pa = !1),
    xn !== null && Hi(xn) && (xn = null),
    Sn !== null && Hi(Sn) && (Sn = null),
    En !== null && Hi(En) && (En = null),
    zo.forEach(zc),
    Fo.forEach(zc);
}
function ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pa ||
      ((pa = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Rg)));
}
function $o(e) {
  function t(o) {
    return ho(o, e);
  }
  if (0 < Pi.length) {
    ho(Pi[0], e);
    for (var n = 1; n < Pi.length; n++) {
      var r = Pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && ho(xn, e),
      Sn !== null && ho(Sn, e),
      En !== null && ho(En, e),
      zo.forEach(t),
      Fo.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    wp(n), n.blockedOn === null && cn.shift();
}
var Lr = Xt.ReactCurrentBatchConfig,
  cs = !0;
function Og(e, t, n, r) {
  var o = ee,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (ee = 1), yu(e, t, n, r);
  } finally {
    (ee = o), (Lr.transition = i);
  }
}
function _g(e, t, n, r) {
  var o = ee,
    i = Lr.transition;
  Lr.transition = null;
  try {
    (ee = 4), yu(e, t, n, r);
  } finally {
    (ee = o), (Lr.transition = i);
  }
}
function yu(e, t, n, r) {
  if (cs) {
    var o = ha(e, t, n, r);
    if (o === null) _l(e, t, r, ds, n), Dc(e, r);
    else if (Ng(o, e, t, n, r)) r.stopPropagation();
    else if ((Dc(e, r), t & 4 && -1 < Tg.indexOf(e))) {
      for (; o !== null; ) {
        var i = ui(o);
        if (
          (i !== null && mp(i),
          (i = ha(e, t, n, r)),
          i === null && _l(e, t, r, ds, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else _l(e, t, r, null, n);
  }
}
var ds = null;
function ha(e, t, n, r) {
  if (((ds = null), (e = hu(r)), (e = Wn(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ds = e), null;
}
function xp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yg()) {
        case mu:
          return 1;
        case dp:
          return 4;
        case as:
        case wg:
          return 16;
        case fp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  wu = null,
  Qi = null;
function Sp() {
  if (Qi) return Qi;
  var e,
    t = wu,
    n = t.length,
    r,
    o = "value" in gn ? gn.value : gn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Qi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ki(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ti() {
  return !0;
}
function Fc() {
  return !1;
}
function Ze(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ti
        : Fc),
      (this.isPropagationStopped = Fc),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ti));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ti));
      },
      persist: function () {},
      isPersistent: Ti,
    }),
    t
  );
}
var no = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xu = Ze(no),
  ai = ce({}, no, { view: 0, detail: 0 }),
  Ag = Ze(ai),
  El,
  Cl,
  mo,
  Fs = ce({}, ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mo &&
            (mo && e.type === "mousemove"
              ? ((El = e.screenX - mo.screenX), (Cl = e.screenY - mo.screenY))
              : (Cl = El = 0),
            (mo = e)),
          El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Cl;
    },
  }),
  $c = Ze(Fs),
  Lg = ce({}, Fs, { dataTransfer: 0 }),
  jg = Ze(Lg),
  Mg = ce({}, ai, { relatedTarget: 0 }),
  kl = Ze(Mg),
  Ig = ce({}, no, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dg = Ze(Ig),
  zg = ce({}, no, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fg = Ze(zg),
  $g = ce({}, no, { data: 0 }),
  Uc = Ze($g),
  Ug = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Bg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wg[e]) ? !!t[e] : !1;
}
function Su() {
  return Vg;
}
var Hg = ce({}, ai, {
    key: function (e) {
      if (e.key) {
        var t = Ug[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Bg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function (e) {
      return e.type === "keypress" ? Ki(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ki(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Qg = Ze(Hg),
  Kg = ce({}, Fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bc = Ze(Kg),
  Gg = ce({}, ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su,
  }),
  Yg = Ze(Gg),
  Xg = ce({}, no, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qg = Ze(Xg),
  Zg = ce({}, Fs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Jg = Ze(Zg),
  ey = [9, 13, 27, 32],
  Eu = Vt && "CompositionEvent" in window,
  To = null;
Vt && "documentMode" in document && (To = document.documentMode);
var ty = Vt && "TextEvent" in window && !To,
  Ep = Vt && (!Eu || (To && 8 < To && 11 >= To)),
  Wc = " ",
  Vc = !1;
function Cp(e, t) {
  switch (e) {
    case "keyup":
      return ey.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function ny(e, t) {
  switch (e) {
    case "compositionend":
      return kp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vc = !0), Wc);
    case "textInput":
      return (e = t.data), e === Wc && Vc ? null : e;
    default:
      return null;
  }
}
function ry(e, t) {
  if (xr)
    return e === "compositionend" || (!Eu && Cp(e, t))
      ? ((e = Sp()), (Qi = wu = gn = null), (xr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ep && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var oy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oy[e.type] : t === "textarea";
}
function bp(e, t, n, r) {
  np(r),
    (t = fs(t, "onChange")),
    0 < t.length &&
      ((n = new xu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var No = null,
  Uo = null;
function iy(e) {
  Ip(e, 0);
}
function $s(e) {
  var t = Cr(e);
  if (Yf(t)) return e;
}
function sy(e, t) {
  if (e === "change") return t;
}
var Pp = !1;
if (Vt) {
  var bl;
  if (Vt) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var Qc = document.createElement("div");
      Qc.setAttribute("oninput", "return;"),
        (Pl = typeof Qc.oninput == "function");
    }
    bl = Pl;
  } else bl = !1;
  Pp = bl && (!document.documentMode || 9 < document.documentMode);
}
function Kc() {
  No && (No.detachEvent("onpropertychange", Tp), (Uo = No = null));
}
function Tp(e) {
  if (e.propertyName === "value" && $s(Uo)) {
    var t = [];
    bp(t, Uo, e, hu(e)), sp(iy, t);
  }
}
function ly(e, t, n) {
  e === "focusin"
    ? (Kc(), (No = t), (Uo = n), No.attachEvent("onpropertychange", Tp))
    : e === "focusout" && Kc();
}
function ay(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $s(Uo);
}
function uy(e, t) {
  if (e === "click") return $s(t);
}
function cy(e, t) {
  if (e === "input" || e === "change") return $s(t);
}
function dy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : dy;
function Bo(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xl.call(t, o) || !xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yc(e, t) {
  var n = Gc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Gc(n);
  }
}
function Np(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Np(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rp() {
  for (var e = window, t = is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = is(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fy(e) {
  var t = Rp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Np(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Yc(n, i));
        var s = Yc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var py = Vt && "documentMode" in document && 11 >= document.documentMode,
  Sr = null,
  ma = null,
  Ro = null,
  va = !1;
function Xc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  va ||
    Sr == null ||
    Sr !== is(r) ||
    ((r = Sr),
    "selectionStart" in r && Cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ro && Bo(Ro, r)) ||
      ((Ro = r),
      (r = fs(ma, "onSelect")),
      0 < r.length &&
        ((t = new xu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sr))));
}
function Ni(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Er = {
    animationend: Ni("Animation", "AnimationEnd"),
    animationiteration: Ni("Animation", "AnimationIteration"),
    animationstart: Ni("Animation", "AnimationStart"),
    transitionend: Ni("Transition", "TransitionEnd"),
  },
  Tl = {},
  Op = {};
Vt &&
  ((Op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Er.animationend.animation,
    delete Er.animationiteration.animation,
    delete Er.animationstart.animation),
  "TransitionEvent" in window || delete Er.transitionend.transition);
function Us(e) {
  if (Tl[e]) return Tl[e];
  if (!Er[e]) return e;
  var t = Er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Op) return (Tl[e] = t[n]);
  return e;
}
var _p = Us("animationend"),
  Ap = Us("animationiteration"),
  Lp = Us("animationstart"),
  jp = Us("transitionend"),
  Mp = new Map(),
  qc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Mn(e, t) {
  Mp.set(e, t), sr(t, [e]);
}
for (var Nl = 0; Nl < qc.length; Nl++) {
  var Rl = qc[Nl],
    hy = Rl.toLowerCase(),
    my = Rl[0].toUpperCase() + Rl.slice(1);
  Mn(hy, "on" + my);
}
Mn(_p, "onAnimationEnd");
Mn(Ap, "onAnimationIteration");
Mn(Lp, "onAnimationStart");
Mn("dblclick", "onDoubleClick");
Mn("focusin", "onFocus");
Mn("focusout", "onBlur");
Mn(jp, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ko =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  vy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));
function Zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hg(r, t, void 0, e), (e.currentTarget = null);
}
function Ip(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Zc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Zc(o, l, u), (i = a);
        }
    }
  }
  if (ls) throw ((e = da), (ls = !1), (da = null), e);
}
function oe(e, t) {
  var n = t[Sa];
  n === void 0 && (n = t[Sa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dp(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Dp(n, e, r, t);
}
var Ri = "_reactListening" + Math.random().toString(36).slice(2);
function Wo(e) {
  if (!e[Ri]) {
    (e[Ri] = !0),
      Vf.forEach(function (n) {
        n !== "selectionchange" && (vy.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ri] || ((t[Ri] = !0), Ol("selectionchange", !1, t));
  }
}
function Dp(e, t, n, r) {
  switch (xp(t)) {
    case 1:
      var o = Og;
      break;
    case 4:
      o = _g;
      break;
    default:
      o = yu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ca ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function _l(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Wn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sp(function () {
    var u = i,
      c = hu(n),
      f = [];
    e: {
      var h = Mp.get(e);
      if (h !== void 0) {
        var d = xu,
          x = e;
        switch (e) {
          case "keypress":
            if (Ki(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Qg;
            break;
          case "focusin":
            (x = "focus"), (d = kl);
            break;
          case "focusout":
            (x = "blur"), (d = kl);
            break;
          case "beforeblur":
          case "afterblur":
            d = kl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = $c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = jg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Yg;
            break;
          case _p:
          case Ap:
          case Lp:
            d = Dg;
            break;
          case jp:
            d = qg;
            break;
          case "scroll":
            d = Ag;
            break;
          case "wheel":
            d = Jg;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Fg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Bc;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          m = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = Do(p, m)), S != null && g.push(Vo(p, S, v)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((h = new d(h, x, null, n, c)), f.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          h &&
            n !== aa &&
            (x = n.relatedTarget || n.fromElement) &&
            (Wn(x) || x[Ht]))
        )
          break e;
        if (
          (d || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          d
            ? ((x = n.relatedTarget || n.toElement),
              (d = u),
              (x = x ? Wn(x) : null),
              x !== null &&
                ((w = lr(x)), x !== w || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((d = null), (x = u)),
          d !== x)
        ) {
          if (
            ((g = $c),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Bc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = d == null ? h : Cr(d)),
            (v = x == null ? h : Cr(x)),
            (h = new g(S, p + "leave", d, n, c)),
            (h.target = w),
            (h.relatedTarget = v),
            (S = null),
            Wn(c) === u &&
              ((g = new g(m, p + "enter", x, n, c)),
              (g.target = v),
              (g.relatedTarget = w),
              (S = g)),
            (w = S),
            d && x)
          )
            t: {
              for (g = d, m = x, p = 0, v = g; v; v = gr(v)) p++;
              for (v = 0, S = m; S; S = gr(S)) v++;
              for (; 0 < p - v; ) (g = gr(g)), p--;
              for (; 0 < v - p; ) (m = gr(m)), v--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = gr(g)), (m = gr(m));
              }
              g = null;
            }
          else g = null;
          d !== null && Jc(f, h, d, g, !1),
            x !== null && w !== null && Jc(f, w, x, g, !0);
        }
      }
      e: {
        if (
          ((h = u ? Cr(u) : window),
          (d = h.nodeName && h.nodeName.toLowerCase()),
          d === "select" || (d === "input" && h.type === "file"))
        )
          var C = sy;
        else if (Hc(h))
          if (Pp) C = cy;
          else {
            C = ay;
            var k = ly;
          }
        else
          (d = h.nodeName) &&
            d.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = uy);
        if (C && (C = C(e, u))) {
          bp(f, C, n, c);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            ra(h, "number", h.value);
      }
      switch (((k = u ? Cr(u) : window), e)) {
        case "focusin":
          (Hc(k) || k.contentEditable === "true") &&
            ((Sr = k), (ma = u), (Ro = null));
          break;
        case "focusout":
          Ro = ma = Sr = null;
          break;
        case "mousedown":
          va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (va = !1), Xc(f, n, c);
          break;
        case "selectionchange":
          if (py) break;
        case "keydown":
        case "keyup":
          Xc(f, n, c);
      }
      var b;
      if (Eu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        xr
          ? Cp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Ep &&
          n.locale !== "ko" &&
          (xr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && xr && (b = Sp())
            : ((gn = c),
              (wu = "value" in gn ? gn.value : gn.textContent),
              (xr = !0))),
        (k = fs(u, R)),
        0 < k.length &&
          ((R = new Uc(R, e, null, n, c)),
          f.push({ event: R, listeners: k }),
          b ? (R.data = b) : ((b = kp(n)), b !== null && (R.data = b)))),
        (b = ty ? ny(e, n) : ry(e, n)) &&
          ((u = fs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Uc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Ip(f, t);
  });
}
function Vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Do(e, n)),
      i != null && r.unshift(Vo(e, i, o)),
      (i = Do(e, t)),
      i != null && r.push(Vo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function gr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Do(n, i)), a != null && s.unshift(Vo(n, a, l)))
        : o || ((a = Do(n, i)), a != null && s.push(Vo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var gy = /\r\n?/g,
  yy = /\u0000|\uFFFD/g;
function ed(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gy,
      `
`
    )
    .replace(yy, "");
}
function Oi(e, t, n) {
  if (((t = ed(t)), ed(e) !== t && n)) throw Error(O(425));
}
function ps() {}
var ga = null,
  ya = null;
function wa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xa = typeof setTimeout == "function" ? setTimeout : void 0,
  wy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  td = typeof Promise == "function" ? Promise : void 0,
  xy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof td < "u"
      ? function (e) {
          return td.resolve(null).then(e).catch(Sy);
        }
      : xa;
function Sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), $o(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  $o(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ro = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + ro,
  Ho = "__reactProps$" + ro,
  Ht = "__reactContainer$" + ro,
  Sa = "__reactEvents$" + ro,
  Ey = "__reactListeners$" + ro,
  Cy = "__reactHandles$" + ro;
function Wn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nd(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = nd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ui(e) {
  return (
    (e = e[Rt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Bs(e) {
  return e[Ho] || null;
}
var Ea = [],
  kr = -1;
function In(e) {
  return { current: e };
}
function ie(e) {
  0 > kr || ((e.current = Ea[kr]), (Ea[kr] = null), kr--);
}
function ne(e, t) {
  kr++, (Ea[kr] = e.current), (e.current = t);
}
var On = {},
  _e = In(On),
  Ue = In(!1),
  er = On;
function Kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function hs() {
  ie(Ue), ie(_e);
}
function rd(e, t, n) {
  if (_e.current !== On) throw Error(O(168));
  ne(_e, t), ne(Ue, n);
}
function zp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, lg(e) || "Unknown", o));
  return ce({}, n, r);
}
function ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    (er = _e.current),
    ne(_e, e),
    ne(Ue, Ue.current),
    !0
  );
}
function od(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = zp(e, t, er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Ue),
      ie(_e),
      ne(_e, e))
    : ie(Ue),
    ne(Ue, n);
}
var Ft = null,
  Ws = !1,
  Ll = !1;
function Fp(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function ky(e) {
  (Ws = !0), Fp(e);
}
function Dn() {
  if (!Ll && Ft !== null) {
    Ll = !0;
    var e = 0,
      t = ee;
    try {
      var n = Ft;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (Ws = !1);
    } catch (o) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), cp(mu, Dn), o);
    } finally {
      (ee = t), (Ll = !1);
    }
  }
  return null;
}
var br = [],
  Pr = 0,
  vs = null,
  gs = 0,
  tt = [],
  nt = 0,
  tr = null,
  Ut = 1,
  Bt = "";
function Un(e, t) {
  (br[Pr++] = gs), (br[Pr++] = vs), (vs = e), (gs = t);
}
function $p(e, t, n) {
  (tt[nt++] = Ut), (tt[nt++] = Bt), (tt[nt++] = tr), (tr = e);
  var r = Ut;
  e = Bt;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - yt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ut = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Bt = i + e);
  } else (Ut = (1 << i) | (n << o) | r), (Bt = e);
}
function ku(e) {
  e.return !== null && (Un(e, 1), $p(e, 1, 0));
}
function bu(e) {
  for (; e === vs; )
    (vs = br[--Pr]), (br[Pr] = null), (gs = br[--Pr]), (br[Pr] = null);
  for (; e === tr; )
    (tr = tt[--nt]),
      (tt[nt] = null),
      (Bt = tt[--nt]),
      (tt[nt] = null),
      (Ut = tt[--nt]),
      (tt[nt] = null);
}
var Ge = null,
  Ke = null,
  le = !1,
  gt = null;
function Up(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function id(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (Ke = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: Ut, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ka(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!id(e, t)) {
        if (Ca(e)) throw Error(O(418));
        t = Cn(n.nextSibling);
        var r = Ge;
        t && id(e, t)
          ? Up(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ge = e));
      }
    } else {
      if (Ca(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ge = e);
    }
  }
}
function sd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function _i(e) {
  if (e !== Ge) return !1;
  if (!le) return sd(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Ca(e)) throw (Bp(), Error(O(418)));
    for (; t; ) Up(e, t), (t = Cn(t.nextSibling));
  }
  if ((sd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ge ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Bp() {
  for (var e = Ke; e; ) e = Cn(e.nextSibling);
}
function Gr() {
  (Ke = Ge = null), (le = !1);
}
function Pu(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var by = Xt.ReactCurrentBatchConfig;
function vo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ai(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ld(e) {
  var t = e._init;
  return t(e._payload);
}
function Wp(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = Tn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, v, S) {
    return p === null || p.tag !== 6
      ? ((p = $l(v, m.mode, S)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function a(m, p, v, S) {
    var C = v.type;
    return C === wr
      ? c(m, p, v.props.children, S, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === an &&
            ld(C) === p.type))
      ? ((S = o(p, v.props)), (S.ref = vo(m, p, v)), (S.return = m), S)
      : ((S = es(v.type, v.key, v.props, null, m.mode, S)),
        (S.ref = vo(m, p, v)),
        (S.return = m),
        S);
  }
  function u(m, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Ul(v, m.mode, S)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function c(m, p, v, S, C) {
    return p === null || p.tag !== 7
      ? ((p = Jn(v, m.mode, S, C)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = $l("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Si:
          return (
            (v = es(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = vo(m, null, p)),
            (v.return = m),
            v
          );
        case yr:
          return (p = Ul(p, m.mode, v)), (p.return = m), p;
        case an:
          var S = p._init;
          return f(m, S(p._payload), v);
      }
      if (Eo(p) || co(p))
        return (p = Jn(p, m.mode, v, null)), (p.return = m), p;
      Ai(m, p);
    }
    return null;
  }
  function h(m, p, v, S) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(m, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Si:
          return v.key === C ? a(m, p, v, S) : null;
        case yr:
          return v.key === C ? u(m, p, v, S) : null;
        case an:
          return (C = v._init), h(m, p, C(v._payload), S);
      }
      if (Eo(v) || co(v)) return C !== null ? null : c(m, p, v, S, null);
      Ai(m, v);
    }
    return null;
  }
  function d(m, p, v, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(v) || null), l(p, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Si:
          return (m = m.get(S.key === null ? v : S.key) || null), a(p, m, S, C);
        case yr:
          return (m = m.get(S.key === null ? v : S.key) || null), u(p, m, S, C);
        case an:
          var k = S._init;
          return d(m, p, v, k(S._payload), C);
      }
      if (Eo(S) || co(S)) return (m = m.get(v) || null), c(p, m, S, C, null);
      Ai(p, S);
    }
    return null;
  }
  function x(m, p, v, S) {
    for (
      var C = null, k = null, b = p, R = (p = 0), L = null;
      b !== null && R < v.length;
      R++
    ) {
      b.index > R ? ((L = b), (b = null)) : (L = b.sibling);
      var A = h(m, b, v[R], S);
      if (A === null) {
        b === null && (b = L);
        break;
      }
      e && b && A.alternate === null && t(m, b),
        (p = i(A, p, R)),
        k === null ? (C = A) : (k.sibling = A),
        (k = A),
        (b = L);
    }
    if (R === v.length) return n(m, b), le && Un(m, R), C;
    if (b === null) {
      for (; R < v.length; R++)
        (b = f(m, v[R], S)),
          b !== null &&
            ((p = i(b, p, R)), k === null ? (C = b) : (k.sibling = b), (k = b));
      return le && Un(m, R), C;
    }
    for (b = r(m, b); R < v.length; R++)
      (L = d(b, m, R, v[R], S)),
        L !== null &&
          (e && L.alternate !== null && b.delete(L.key === null ? R : L.key),
          (p = i(L, p, R)),
          k === null ? (C = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        b.forEach(function (F) {
          return t(m, F);
        }),
      le && Un(m, R),
      C
    );
  }
  function g(m, p, v, S) {
    var C = co(v);
    if (typeof C != "function") throw Error(O(150));
    if (((v = C.call(v)), v == null)) throw Error(O(151));
    for (
      var k = (C = null), b = p, R = (p = 0), L = null, A = v.next();
      b !== null && !A.done;
      R++, A = v.next()
    ) {
      b.index > R ? ((L = b), (b = null)) : (L = b.sibling);
      var F = h(m, b, A.value, S);
      if (F === null) {
        b === null && (b = L);
        break;
      }
      e && b && F.alternate === null && t(m, b),
        (p = i(F, p, R)),
        k === null ? (C = F) : (k.sibling = F),
        (k = F),
        (b = L);
    }
    if (A.done) return n(m, b), le && Un(m, R), C;
    if (b === null) {
      for (; !A.done; R++, A = v.next())
        (A = f(m, A.value, S)),
          A !== null &&
            ((p = i(A, p, R)), k === null ? (C = A) : (k.sibling = A), (k = A));
      return le && Un(m, R), C;
    }
    for (b = r(m, b); !A.done; R++, A = v.next())
      (A = d(b, m, R, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && b.delete(A.key === null ? R : A.key),
          (p = i(A, p, R)),
          k === null ? (C = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        b.forEach(function (D) {
          return t(m, D);
        }),
      le && Un(m, R),
      C
    );
  }
  function w(m, p, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === wr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Si:
          e: {
            for (var C = v.key, k = p; k !== null; ) {
              if (k.key === C) {
                if (((C = v.type), C === wr)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (p = o(k, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === an &&
                    ld(C) === k.type)
                ) {
                  n(m, k.sibling),
                    (p = o(k, v.props)),
                    (p.ref = vo(m, k, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            v.type === wr
              ? ((p = Jn(v.props.children, m.mode, S, v.key)),
                (p.return = m),
                (m = p))
              : ((S = es(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = vo(m, p, v)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case yr:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ul(v, m.mode, S)), (p.return = m), (m = p);
          }
          return s(m);
        case an:
          return (k = v._init), w(m, p, k(v._payload), S);
      }
      if (Eo(v)) return x(m, p, v, S);
      if (co(v)) return g(m, p, v, S);
      Ai(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = $l(v, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return w;
}
var Yr = Wp(!0),
  Vp = Wp(!1),
  ys = In(null),
  ws = null,
  Tr = null,
  Tu = null;
function Nu() {
  Tu = Tr = ws = null;
}
function Ru(e) {
  var t = ys.current;
  ie(ys), (e._currentValue = t);
}
function ba(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jr(e, t) {
  (ws = e),
    (Tu = Tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (Tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tr === null)) {
      if (ws === null) throw Error(O(308));
      (Tr = e), (ws.dependencies = { lanes: 0, firstContext: e });
    } else Tr = Tr.next = e;
  return t;
}
var Vn = null;
function Ou(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
function Hp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ou(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function _u(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ou(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function Gi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
function ad(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xs(e, t, n, r) {
  var o = e.updateQueue;
  un = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        d = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            g = l;
          switch (((h = t), (d = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                f = x.call(d, f, h);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (h = typeof x == "function" ? x.call(d, f, h) : x),
                h == null)
              )
                break e;
              f = ce({}, f, h);
              break e;
            case 2:
              un = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (d = {
          eventTime: d,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (a = f)) : (c = c.next = d),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (rr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function ud(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var ci = {},
  At = In(ci),
  Qo = In(ci),
  Ko = In(ci);
function Hn(e) {
  if (e === ci) throw Error(O(174));
  return e;
}
function Au(e, t) {
  switch ((ne(Ko, t), ne(Qo, e), ne(At, ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ia(t, e));
  }
  ie(At), ne(At, t);
}
function Xr() {
  ie(At), ie(Qo), ie(Ko);
}
function Kp(e) {
  Hn(Ko.current);
  var t = Hn(At.current),
    n = ia(t, e.type);
  t !== n && (ne(Qo, e), ne(At, n));
}
function Lu(e) {
  Qo.current === e && (ie(At), ie(Qo));
}
var ae = In(0);
function Ss(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var jl = [];
function ju() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var Yi = Xt.ReactCurrentDispatcher,
  Ml = Xt.ReactCurrentBatchConfig,
  nr = 0,
  ue = null,
  ge = null,
  xe = null,
  Es = !1,
  Oo = !1,
  Go = 0,
  Py = 0;
function Te() {
  throw Error(O(321));
}
function Mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, o, i) {
  if (
    ((nr = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yi.current = e === null || e.memoizedState === null ? Oy : _y),
    (e = n(r, o)),
    Oo)
  ) {
    i = 0;
    do {
      if (((Oo = !1), (Go = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (Yi.current = Ay),
        (e = n(r, o));
    } while (Oo);
  }
  if (
    ((Yi.current = Cs),
    (t = ge !== null && ge.next !== null),
    (nr = 0),
    (xe = ge = ue = null),
    (Es = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Du() {
  var e = Go !== 0;
  return (Go = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function st() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(O(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Il(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ge,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((nr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ue.lanes |= c),
          (rr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      xt(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ue.lanes |= i), (rr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    xt(i, t.memoizedState) || ($e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Gp() {}
function Yp(e, t) {
  var n = ue,
    r = st(),
    o = t(),
    i = !xt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), ($e = !0)),
    (r = r.queue),
    zu(Zp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xo(9, qp.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(O(349));
    nr & 30 || Xp(n, t, o);
  }
  return o;
}
function Xp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jp(t) && eh(e);
}
function Zp(e, t, n) {
  return n(function () {
    Jp(t) && eh(e);
  });
}
function Jp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function eh(e) {
  var t = Qt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function cd(e) {
  var t = bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ry.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function th() {
  return st().memoizedState;
}
function Xi(e, t, n, r) {
  var o = bt();
  (ue.flags |= e),
    (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((i = s.destroy), r !== null && Mu(r, s.deps))) {
      o.memoizedState = Xo(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (o.memoizedState = Xo(1 | t, n, i, r));
}
function dd(e, t) {
  return Xi(8390656, 8, e, t);
}
function zu(e, t) {
  return Vs(2048, 8, e, t);
}
function nh(e, t) {
  return Vs(4, 2, e, t);
}
function rh(e, t) {
  return Vs(4, 4, e, t);
}
function oh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ih(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, oh.bind(null, t, e), n)
  );
}
function Fu() {}
function sh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ah(e, t, n) {
  return nr & 21
    ? (xt(n, t) || ((n = pp()), (ue.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Ty(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ml.transition;
  Ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Ml.transition = r);
  }
}
function uh() {
  return st().memoizedState;
}
function Ny(e, t, n) {
  var r = Pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ch(e))
  )
    dh(t, n);
  else if (((n = Hp(e, t, n, r)), n !== null)) {
    var o = Me();
    wt(n, e, r, o), fh(n, t, r);
  }
}
function Ry(e, t, n) {
  var r = Pn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ch(e)) dh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), xt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Ou(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hp(e, t, o, r)),
      n !== null && ((o = Me()), wt(n, e, r, o), fh(n, t, r));
  }
}
function ch(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function dh(e, t) {
  Oo = Es = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
var Cs = {
    readContext: it,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  Oy = {
    readContext: it,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: dd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xi(4194308, 4, oh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ny.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cd,
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = cd(!1),
        t = e[0];
      return (e = Ty.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        o = bt();
      if (le) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(O(349));
        nr & 30 || Xp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        dd(Zp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xo(9, qp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Bt,
          r = Ut;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Go++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Py++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: it,
    useCallback: sh,
    useContext: it,
    useEffect: zu,
    useImperativeHandle: ih,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: lh,
    useReducer: Il,
    useRef: th,
    useState: function () {
      return Il(Yo);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = st();
      return ah(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(Yo)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: Yp,
    useId: uh,
    unstable_isNewReconciler: !1,
  },
  Ay = {
    readContext: it,
    useCallback: sh,
    useContext: it,
    useEffect: zu,
    useImperativeHandle: ih,
    useInsertionEffect: nh,
    useLayoutEffect: rh,
    useMemo: lh,
    useReducer: Dl,
    useRef: th,
    useState: function () {
      return Dl(Yo);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = st();
      return ge === null ? (t.memoizedState = e) : ah(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(Yo)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: Yp,
    useId: uh,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Pn(e),
      i = Wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = kn(e, i, o)),
      t !== null && (wt(t, e, o, r), Gi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Pn(e),
      i = Wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kn(e, i, o)),
      t !== null && (wt(t, e, o, r), Gi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Pn(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kn(e, o, r)),
      t !== null && (wt(t, e, r, n), Gi(t, e, r));
  },
};
function fd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bo(n, r) || !Bo(o, i)
      : !0
  );
}
function ph(e, t, n) {
  var r = !1,
    o = On,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((o = Be(t) ? er : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Kr(e, o) : On)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function pd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function Ta(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), _u(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = it(i))
    : ((i = Be(t) ? er : _e.current), (o.context = Kr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Pa(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Hs.enqueueReplaceState(o, o.state, null),
      xs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function qr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += sg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Na(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ly = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bs || ((bs = !0), (za = r)), Na(e, t);
    }),
    n
  );
}
function mh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Na(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Na(e, t),
          typeof r != "function" &&
            (bn === null ? (bn = new Set([this])) : bn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function hd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ly();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Ky.bind(null, e, t, n)), t.then(e, e));
}
function md(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jy = Xt.ReactCurrentOwner,
  $e = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Vp(t, null, n, r) : Yr(t, e.child, n, r);
}
function gd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    jr(t, o),
    (r = Iu(e, t, n, r, i, o)),
    (n = Du()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (le && n && ku(t), (t.flags |= 1), Le(e, t, r, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ku(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vh(e, t, i, r, o))
      : ((e = es(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bo), n(s, r) && e.ref === t.ref)
    )
      return Kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bo(i, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && ($e = !0);
      else return (t.lanes = e.lanes), Kt(e, t, o);
  }
  return Ra(e, t, n, r, o);
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Rr, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Rr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Rr, He),
        (He |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Rr, He),
      (He |= r);
  return Le(e, t, o, n), t.child;
}
function yh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ra(e, t, n, r, o) {
  var i = Be(n) ? er : _e.current;
  return (
    (i = Kr(t, i)),
    jr(t, o),
    (n = Iu(e, t, n, r, i, o)),
    (r = Du()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (le && r && ku(t), (t.flags |= 1), Le(e, t, n, o), t.child)
  );
}
function wd(e, t, n, r, o) {
  if (Be(n)) {
    var i = !0;
    ms(t);
  } else i = !1;
  if ((jr(t, o), t.stateNode === null))
    qi(e, t), ph(t, n, r), Ta(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = it(u))
      : ((u = Be(n) ? er : _e.current), (u = Kr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && pd(t, s, r, u)),
      (un = !1);
    var h = t.memoizedState;
    (s.state = h),
      xs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || Ue.current || un
        ? (typeof c == "function" && (Pa(t, n, c, r), (a = t.memoizedState)),
          (l = un || fd(t, n, l, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Qp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ft(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = Be(n) ? er : _e.current), (a = Kr(t, a)));
    var d = n.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && pd(t, s, r, a)),
      (un = !1),
      (h = t.memoizedState),
      (s.state = h),
      xs(t, r, s, o);
    var x = t.memoizedState;
    l !== f || h !== x || Ue.current || un
      ? (typeof d == "function" && (Pa(t, n, d, r), (x = t.memoizedState)),
        (u = un || fd(t, n, u, r, h, x, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Oa(e, t, n, r, i, o);
}
function Oa(e, t, n, r, o, i) {
  yh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && od(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (jy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yr(t, e.child, null, i)), (t.child = Yr(t, null, l, i)))
      : Le(e, t, l, i),
    (t.memoizedState = r.state),
    o && od(t, n, !0),
    t.child
  );
}
function wh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rd(e, t.context, !1),
    Au(e, t.containerInfo);
}
function xd(e, t, n, r, o) {
  return Gr(), Pu(o), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Aa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xh(e, t, n) {
  var r = t.pendingProps,
    o = ae.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
  )
    return (
      ka(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Gs(s, r, 0, null)),
              (e = Jn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Aa(n)),
              (t.memoizedState = _a),
              e)
            : $u(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return My(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Tn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Tn(l, i)) : ((i = Jn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Aa(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Tn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $u(e, t) {
  return (
    (t = Gs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Li(e, t, n, r) {
  return (
    r !== null && Pu(r),
    Yr(t, e.child, null, n),
    (e = $u(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function My(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zl(Error(O(422)))), Li(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Gs({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Jn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, s),
        (t.child.memoizedState = Aa(s)),
        (t.memoizedState = _a),
        i);
  if (!(t.mode & 1)) return Li(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(O(419))), (r = zl(i, r, void 0)), Li(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), $e || l)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Qt(e, o), wt(r, e, o, -1));
    }
    return Qu(), (r = zl(Error(O(421)))), Li(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Cn(o.nextSibling)),
      (Ge = t),
      (le = !0),
      (gt = null),
      e !== null &&
        ((tt[nt++] = Ut),
        (tt[nt++] = Bt),
        (tt[nt++] = tr),
        (Ut = e.id),
        (Bt = e.overflow),
        (tr = t)),
      (t = $u(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ba(e.return, t, n);
}
function Fl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Le(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sd(e, n, t);
        else if (e.tag === 19) Sd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ss(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ss(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fl(t, !0, n, null, i);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Iy(e, t, n) {
  switch (t.tag) {
    case 3:
      wh(t), Gr();
      break;
    case 5:
      Kp(t);
      break;
    case 1:
      Be(t.type) && ms(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(ys, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xh(e, t, n)
          : (ne(ae, ae.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gh(e, t, n);
  }
  return Kt(e, t, n);
}
var Eh, La, Ch, kh;
Eh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
La = function () {};
Ch = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(At.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ta(e, o)), (r = ta(e, r)), (i = []);
        break;
      case "select":
        (o = ce({}, o, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = oa(e, o)), (r = oa(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ps);
    }
    sa(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Mo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && oe("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function go(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dy(e, t, n) {
  var r = t.pendingProps;
  switch ((bu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return Be(t.type) && hs(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xr(),
        ie(Ue),
        ie(_e),
        ju(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_i(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Ua(gt), (gt = null)))),
        La(e, t),
        Ne(t),
        null
      );
    case 5:
      Lu(t);
      var o = Hn(Ko.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ch(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ne(t), null;
        }
        if (((e = Hn(At.current)), _i(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[Ho] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ko.length; o++) oe(ko[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Oc(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Ac(r, i), oe("invalid", r);
          }
          sa(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Mo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              Ei(r), _c(r, i, !0);
              break;
            case "textarea":
              Ei(r), Lc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ps);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[Ho] = r),
            Eh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = la(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ko.length; o++) oe(ko[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                Oc(e, r), (o = ta(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ce({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Ac(e, r), (o = oa(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            sa(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? tp(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Jf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Io(e, a)
                    : typeof a == "number" && Io(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Mo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && oe("scroll", e)
                      : a != null && cu(e, i, a, s));
              }
            switch (n) {
              case "input":
                Ei(e), _c(e, r, !1);
                break;
              case "textarea":
                Ei(e), Lc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Or(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ps);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Hn(Ko.current)), Hn(At.current), _i(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (i = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (ie(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Bp(), Gr(), (t.flags |= 98560), (i = !1);
        else if (((i = _i(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[Rt] = t;
          } else
            Gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else gt !== null && (Ua(gt), (gt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? we === 0 && (we = 3) : Qu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Xr(), La(e, t), e === null && Wo(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Ru(t.type._context), Ne(t), null;
    case 17:
      return Be(t.type) && hs(), Ne(t), null;
    case 19:
      if ((ie(ae), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) go(i, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ss(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    go(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > Zr &&
            ((t.flags |= 128), (r = !0), go(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ss(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              go(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * pe() - i.renderingStartTime > Zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), go(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ne(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Hu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function zy(e, t) {
  switch ((bu(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xr(),
        ie(Ue),
        ie(_e),
        ju(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ae), null;
    case 4:
      return Xr(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ji = !1,
  Oe = !1,
  Fy = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function ja(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Ed = !1;
function $y(e, t) {
  if (((ga = cs), (e = Rp()), Cu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var d;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (d = f.firstChild) !== null;

            )
              (h = f), (f = d);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (d = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = d;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ya = { focusedElem: e, selectionRange: n }, cs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    w = x.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : ft(t.type, g),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (S) {
          fe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (x = Ed), (Ed = !1), x;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ja(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ma(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Ho], delete t[Sa], delete t[Ey], delete t[Cy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ph(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ph(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ps));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), (e = e.sibling);
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null; ) Da(e, t, n), (e = e.sibling);
}
var Ee = null,
  vt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) Th(e, t, n), (n = n.sibling);
}
function Th(e, t, n) {
  if (_t && typeof _t.onCommitFiberUnmount == "function")
    try {
      _t.onCommitFiberUnmount(zs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || Nr(n, t);
    case 6:
      var r = Ee,
        o = vt;
      (Ee = null),
        rn(e, t, n),
        (Ee = r),
        (vt = o),
        Ee !== null &&
          (vt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (vt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            $o(e))
          : Al(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (o = vt),
        (Ee = n.stateNode.containerInfo),
        (vt = !0),
        rn(e, t, n),
        (Ee = r),
        (vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && ja(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (Nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), rn(e, t, n), (Oe = r))
        : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function kd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fy()),
      t.forEach(function (r) {
        var o = Yy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ee = l.stateNode), (vt = !1);
              break e;
            case 3:
              (Ee = l.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ee = l.stateNode.containerInfo), (vt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ee === null) throw Error(O(160));
        Th(i, s, o), (Ee = null), (vt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling);
}
function Nh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), kt(e), r & 4)) {
        try {
          _o(3, e, e.return), Qs(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          _o(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      ct(t, e), kt(e), r & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        kt(e),
        r & 512 && n !== null && Nr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Io(o, "");
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Xf(o, i),
              la(l, s);
            var u = la(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? tp(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Jf(o, f)
                : c === "children"
                ? Io(o, f)
                : cu(o, c, f, u);
            }
            switch (l) {
              case "input":
                na(o, i);
                break;
              case "textarea":
                qf(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var d = i.value;
                d != null
                  ? Or(o, !!i.multiple, d, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(o, !!i.multiple, i.defaultValue, !0)
                      : Or(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ho] = i;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ct(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $o(t.containerInfo);
        } catch (g) {
          fe(e, e.return, g);
        }
      break;
    case 4:
      ct(t, e), kt(e);
      break;
    case 13:
      ct(t, e),
        kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wu = pe())),
        r & 4 && kd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || c), ct(t, e), (Oe = u)) : ct(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((h = I), (d = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, h, h.return);
                  break;
                case 1:
                  Nr(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Nr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Pd(f);
                    continue;
                  }
              }
              d !== null ? ((d.return = h), (I = d)) : Pd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ep("display", s)));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                fe(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), kt(e), r & 4 && kd(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ph(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Io(o, ""), (r.flags &= -33));
          var i = Cd(e);
          Da(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Cd(e);
          Ia(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uy(e, t, n) {
  (I = e), Rh(e);
}
function Rh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ji;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Oe;
        l = ji;
        var u = Oe;
        if (((ji = s), (Oe = a) && !u))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Td(o)
                : a !== null
                ? ((a.return = s), (I = a))
                : Td(o);
        for (; i !== null; ) (I = i), Rh(i), (i = i.sibling);
        (I = o), (ji = l), (Oe = u);
      }
      bd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : bd(e);
  }
}
function bd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ud(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ud(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && $o(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Oe || (t.flags & 512 && Ma(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Pd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Td(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qs(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ma(t);
          } catch (a) {
            fe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ma(t);
          } catch (a) {
            fe(t, s, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var By = Math.ceil,
  ks = Xt.ReactCurrentDispatcher,
  Uu = Xt.ReactCurrentOwner,
  ot = Xt.ReactCurrentBatchConfig,
  q = 0,
  Se = null,
  me = null,
  Ce = 0,
  He = 0,
  Rr = In(0),
  we = 0,
  qo = null,
  rr = 0,
  Ks = 0,
  Bu = 0,
  Ao = null,
  Fe = null,
  Wu = 0,
  Zr = 1 / 0,
  zt = null,
  bs = !1,
  za = null,
  bn = null,
  Mi = !1,
  yn = null,
  Ps = 0,
  Lo = 0,
  Fa = null,
  Zi = -1,
  Ji = 0;
function Me() {
  return q & 6 ? pe() : Zi !== -1 ? Zi : (Zi = pe());
}
function Pn(e) {
  return e.mode & 1
    ? q & 2 && Ce !== 0
      ? Ce & -Ce
      : by.transition !== null
      ? (Ji === 0 && (Ji = pp()), Ji)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xp(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < Lo) throw ((Lo = 0), (Fa = null), Error(O(185)));
  li(e, n, r),
    (!(q & 2) || e !== Se) &&
      (e === Se && (!(q & 2) && (Ks |= n), we === 4 && dn(e, Ce)),
      We(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((Zr = pe() + 500), Ws && Dn()));
}
function We(e, t) {
  var n = e.callbackNode;
  bg(e, t);
  var r = us(e, e === Se ? Ce : 0);
  if (r === 0)
    n !== null && Ic(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ic(n), t === 1))
      e.tag === 0 ? ky(Nd.bind(null, e)) : Fp(Nd.bind(null, e)),
        xy(function () {
          !(q & 6) && Dn();
        }),
        (n = null);
    else {
      switch (hp(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = dp;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = fp;
          break;
        default:
          n = as;
      }
      n = Dh(n, Oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Oh(e, t) {
  if (((Zi = -1), (Ji = 0), q & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Mr() && e.callbackNode !== n) return null;
  var r = us(e, e === Se ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ts(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = Ah();
    (Se !== e || Ce !== t) && ((zt = null), (Zr = pe() + 500), Zn(e, t));
    do
      try {
        Hy();
        break;
      } catch (l) {
        _h(e, l);
      }
    while (!0);
    Nu(),
      (ks.current = i),
      (q = o),
      me !== null ? (t = 0) : ((Se = null), (Ce = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = fa(e)), o !== 0 && ((r = o), (t = $a(e, o)))), t === 1)
    )
      throw ((n = qo), Zn(e, 0), dn(e, r), We(e, pe()), n);
    if (t === 6) dn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Wy(o) &&
          ((t = Ts(e, r)),
          t === 2 && ((i = fa(e)), i !== 0 && ((r = i), (t = $a(e, i)))),
          t === 1))
      )
        throw ((n = qo), Zn(e, 0), dn(e, r), We(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Bn(e, Fe, zt);
          break;
        case 3:
          if (
            (dn(e, r), (r & 130023424) === r && ((t = Wu + 500 - pe()), 10 < t))
          ) {
            if (us(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = xa(Bn.bind(null, e, Fe, zt), t);
            break;
          }
          Bn(e, Fe, zt);
          break;
        case 4:
          if ((dn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - yt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * By(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xa(Bn.bind(null, e, Fe, zt), r);
            break;
          }
          Bn(e, Fe, zt);
          break;
        case 5:
          Bn(e, Fe, zt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return We(e, pe()), e.callbackNode === n ? Oh.bind(null, e) : null;
}
function $a(e, t) {
  var n = Ao;
  return (
    e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    (e = Ts(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && Ua(t)),
    e
  );
}
function Ua(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Wy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dn(e, t) {
  for (
    t &= ~Bu,
      t &= ~Ks,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nd(e) {
  if (q & 6) throw Error(O(327));
  Mr();
  var t = us(e, 0);
  if (!(t & 1)) return We(e, pe()), null;
  var n = Ts(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fa(e);
    r !== 0 && ((t = r), (n = $a(e, r)));
  }
  if (n === 1) throw ((n = qo), Zn(e, 0), dn(e, t), We(e, pe()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, Fe, zt),
    We(e, pe()),
    null
  );
}
function Vu(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((Zr = pe() + 500), Ws && Dn());
  }
}
function or(e) {
  yn !== null && yn.tag === 0 && !(q & 6) && Mr();
  var t = q;
  q |= 1;
  var n = ot.transition,
    r = ee;
  try {
    if (((ot.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (ot.transition = n), (q = t), !(q & 6) && Dn();
  }
}
function Hu() {
  (He = Rr.current), ie(Rr);
}
function Zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wy(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((bu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hs();
          break;
        case 3:
          Xr(), ie(Ue), ie(_e), ju();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          Xr();
          break;
        case 13:
          ie(ae);
          break;
        case 19:
          ie(ae);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Hu();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (me = e = Tn(e.current, null)),
    (Ce = He = t),
    (we = 0),
    (qo = null),
    (Bu = Ks = rr = 0),
    (Fe = Ao = null),
    Vn !== null)
  ) {
    for (t = 0; t < Vn.length; t++)
      if (((n = Vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Vn = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var n = me;
    try {
      if ((Nu(), (Yi.current = Cs), Es)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Es = !1;
      }
      if (
        ((nr = 0),
        (xe = ge = ue = null),
        (Oo = !1),
        (Go = 0),
        (Uu.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (qo = t), (me = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = md(s);
          if (d !== null) {
            (d.flags &= -257),
              vd(d, s, l, i, t),
              d.mode & 1 && hd(i, u, t),
              (t = d),
              (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              hd(i, u, t), Qu();
              break e;
            }
            a = Error(O(426));
          }
        } else if (le && l.mode & 1) {
          var w = md(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              vd(w, s, l, i, t),
              Pu(qr(a, l));
            break e;
          }
        }
        (i = a = qr(a, l)),
          we !== 4 && (we = 2),
          Ao === null ? (Ao = [i]) : Ao.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = hh(i, a, t);
              ad(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (bn === null || !bn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = mh(i, l, t);
                ad(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jh(n);
    } catch (C) {
      (t = C), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ah() {
  var e = ks.current;
  return (ks.current = Cs), e === null ? Cs : e;
}
function Qu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Se === null || (!(rr & 268435455) && !(Ks & 268435455)) || dn(Se, Ce);
}
function Ts(e, t) {
  var n = q;
  q |= 2;
  var r = Ah();
  (Se !== e || Ce !== t) && ((zt = null), Zn(e, t));
  do
    try {
      Vy();
      break;
    } catch (o) {
      _h(e, o);
    }
  while (!0);
  if ((Nu(), (q = n), (ks.current = r), me !== null)) throw Error(O(261));
  return (Se = null), (Ce = 0), we;
}
function Vy() {
  for (; me !== null; ) Lh(me);
}
function Hy() {
  for (; me !== null && !vg(); ) Lh(me);
}
function Lh(e) {
  var t = Ih(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? jh(e) : (me = t),
    (Uu.current = null);
}
function jh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = zy(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (me = null);
        return;
      }
    } else if (((n = Dy(n, t, He)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Bn(e, t, n) {
  var r = ee,
    o = ot.transition;
  try {
    (ot.transition = null), (ee = 1), Qy(e, t, n, r);
  } finally {
    (ot.transition = o), (ee = r);
  }
  return null;
}
function Qy(e, t, n, r) {
  do Mr();
  while (yn !== null);
  if (q & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Pg(e, i),
    e === Se && ((me = Se = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mi ||
      ((Mi = !0),
      Dh(as, function () {
        return Mr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ot.transition), (ot.transition = null);
    var s = ee;
    ee = 1;
    var l = q;
    (q |= 4),
      (Uu.current = null),
      $y(e, n),
      Nh(n, e),
      fy(ya),
      (cs = !!ga),
      (ya = ga = null),
      (e.current = n),
      Uy(n),
      gg(),
      (q = l),
      (ee = s),
      (ot.transition = i);
  } else e.current = n;
  if (
    (Mi && ((Mi = !1), (yn = e), (Ps = o)),
    (i = e.pendingLanes),
    i === 0 && (bn = null),
    xg(n.stateNode),
    We(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bs) throw ((bs = !1), (e = za), (za = null), e);
  return (
    Ps & 1 && e.tag !== 0 && Mr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fa ? Lo++ : ((Lo = 0), (Fa = e))) : (Lo = 0),
    Dn(),
    null
  );
}
function Mr() {
  if (yn !== null) {
    var e = hp(Ps),
      t = ot.transition,
      n = ee;
    try {
      if (((ot.transition = null), (ee = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (Ps = 0), q & 6)) throw Error(O(331));
        var o = q;
        for (q |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var h = c.sibling,
                        d = c.return;
                      if ((bh(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = d), (I = h);
                        break;
                      }
                      I = d;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (I = m);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          s = I;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (I = v);
          else
            e: for (s = p; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs(9, l);
                  }
                } catch (C) {
                  fe(l, l.return, C);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (I = S);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((q = o), Dn(), _t && typeof _t.onPostCommitFiberRoot == "function")
        )
          try {
            _t.onPostCommitFiberRoot(zs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (ot.transition = t);
    }
  }
  return !1;
}
function Rd(e, t, n) {
  (t = qr(n, t)),
    (t = hh(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = Me()),
    e !== null && (li(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Rd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bn === null || !bn.has(r)))
        ) {
          (e = qr(n, e)),
            (e = mh(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = Me()),
            t !== null && (li(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ky(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Ce & n) === n &&
      (we === 4 || (we === 3 && (Ce & 130023424) === Ce && 500 > pe() - Wu)
        ? Zn(e, 0)
        : (Bu |= n)),
    We(e, t);
}
function Mh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bi), (bi <<= 1), !(bi & 130023424) && (bi = 4194304))
      : (t = 1));
  var n = Me();
  (e = Qt(e, t)), e !== null && (li(e, t, n), We(e, n));
}
function Gy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mh(e, n);
}
function Yy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Mh(e, n);
}
var Ih;
Ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), Iy(e, t, n);
      $e = !!(e.flags & 131072);
    }
  else ($e = !1), le && t.flags & 1048576 && $p(t, gs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qi(e, t), (e = t.pendingProps);
      var o = Kr(t, _e.current);
      jr(t, n), (o = Iu(null, t, r, e, o, n));
      var i = Du();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), ms(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            _u(t),
            (o.updater = Hs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ta(t, r, e, n),
            (t = Oa(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && ku(t), Le(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = qy(r)),
          (e = ft(r, e)),
          o)
        ) {
          case 0:
            t = Ra(null, t, r, e, n);
            break e;
          case 1:
            t = wd(null, t, r, e, n);
            break e;
          case 11:
            t = gd(null, t, r, e, n);
            break e;
          case 14:
            t = yd(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        Ra(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        wd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Qp(e, t),
          xs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = qr(Error(O(423)), t)), (t = xd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qr(Error(O(424)), t)), (t = xd(e, t, r, n, o));
            break e;
          } else
            for (
              Ke = Cn(t.stateNode.containerInfo.firstChild),
                Ge = t,
                le = !0,
                gt = null,
                n = Vp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gr(), r === o)) {
            t = Kt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kp(t),
        e === null && ka(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        wa(r, o) ? (s = null) : i !== null && wa(r, i) && (t.flags |= 32),
        yh(e, t),
        Le(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ka(t), null;
    case 13:
      return xh(e, t, n);
    case 4:
      return (
        Au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        gd(e, t, r, o, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(ys, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (xt(i.value, s)) {
            if (i.children === o.children && !Ue.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Wt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ba(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  ba(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Le(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        jr(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ft(r, t.pendingProps)),
        (o = ft(r.type, o)),
        yd(e, t, r, o, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        qi(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), ms(t)) : (e = !1),
        jr(t, n),
        ph(t, r, o),
        Ta(t, r, o, n),
        Oa(null, t, r, !0, e, n)
      );
    case 19:
      return Sh(e, t, n);
    case 22:
      return gh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Dh(e, t) {
  return cp(e, t);
}
function Xy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new Xy(e, t, n, r);
}
function Ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qy(e) {
  if (typeof e == "function") return Ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fu)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function Tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function es(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ku(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wr:
        return Jn(n.children, o, i, t);
      case du:
        (s = 8), (o |= 8);
        break;
      case ql:
        return (
          (e = rt(12, n, t, o | 2)), (e.elementType = ql), (e.lanes = i), e
        );
      case Zl:
        return (e = rt(13, n, t, o)), (e.elementType = Zl), (e.lanes = i), e;
      case Jl:
        return (e = rt(19, n, t, o)), (e.elementType = Jl), (e.lanes = i), e;
      case Kf:
        return Gs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hf:
              s = 10;
              break e;
            case Qf:
              s = 9;
              break e;
            case fu:
              s = 11;
              break e;
            case pu:
              s = 14;
              break e;
            case an:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Jn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Gs(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Kf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $l(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function Ul(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Sl(0)),
    (this.expirationTimes = Sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Zy(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    _u(i),
    e
  );
}
function Jy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zh(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return zp(e, n, t);
  }
  return t;
}
function Fh(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Gu(n, r, !0, e, o, i, s, l, a)),
    (e.context = zh(null)),
    (n = e.current),
    (r = Me()),
    (o = Pn(n)),
    (i = Wt(r, o)),
    (i.callback = t ?? null),
    kn(n, i, o),
    (e.current.lanes = o),
    li(e, o, r),
    We(e, r),
    e
  );
}
function Ys(e, t, n, r) {
  var o = t.current,
    i = Me(),
    s = Pn(o);
  return (
    (n = zh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kn(o, t, s)),
    e !== null && (wt(e, o, s, i), Gi(e, o, s)),
    s
  );
}
function Ns(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Od(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Od(e, t), (e = e.alternate) && Od(e, t);
}
function e0() {
  return null;
}
var $h =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xu(e) {
  this._internalRoot = e;
}
Xs.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ys(e, t, null, null);
};
Xs.prototype.unmount = Xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function () {
      Ys(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function Xs(e) {
  this._internalRoot = e;
}
Xs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && wp(e);
  }
};
function qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _d() {}
function t0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ns(s);
        i.call(u);
      };
    }
    var s = Fh(t, r, e, 0, null, !1, !1, "", _d);
    return (
      (e._reactRootContainer = s),
      (e[Ht] = s.current),
      Wo(e.nodeType === 8 ? e.parentNode : e),
      or(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ns(a);
      l.call(u);
    };
  }
  var a = Gu(e, 0, !1, null, null, !1, !1, "", _d);
  return (
    (e._reactRootContainer = a),
    (e[Ht] = a.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      Ys(t, a, n, r);
    }),
    a
  );
}
function Zs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ns(s);
        l.call(a);
      };
    }
    Ys(t, s, e, o);
  } else s = t0(n, t, e, o, r);
  return Ns(s);
}
mp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes);
        n !== 0 &&
          (vu(t, n | 1), We(t, pe()), !(q & 6) && ((Zr = pe() + 500), Dn()));
      }
      break;
    case 13:
      or(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var o = Me();
          wt(r, e, 1, o);
        }
      }),
        Yu(e, 1);
  }
};
gu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Me();
      wt(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
vp = function (e) {
  if (e.tag === 13) {
    var t = Pn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Me();
      wt(n, e, t, r);
    }
    Yu(e, t);
  }
};
gp = function () {
  return ee;
};
yp = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
ua = function (e, t, n) {
  switch (t) {
    case "input":
      if ((na(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bs(r);
            if (!o) throw Error(O(90));
            Yf(r), na(r, o);
          }
        }
      }
      break;
    case "textarea":
      qf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Or(e, !!n.multiple, t, !1);
  }
};
op = Vu;
ip = or;
var n0 = { usingClientEntryPoint: !1, Events: [ui, Cr, Bs, np, rp, Vu] },
  yo = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  r0 = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ap(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || e0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (zs = Ii.inject(r0)), (_t = Ii);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t)) throw Error(O(200));
  return Jy(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!qu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = $h;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = ap(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return or(e);
};
qe.hydrate = function (e, t, n) {
  if (!qs(t)) throw Error(O(200));
  return Zs(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!qu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = $h;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ht] = t.current),
    Wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xs(t);
};
qe.render = function (e, t, n) {
  if (!qs(t)) throw Error(O(200));
  return Zs(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!qs(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (or(function () {
        Zs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = Vu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qs(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Zs(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh);
    } catch (e) {
      console.error(e);
    }
}
Uh(), (Uf.exports = qe);
var di = Uf.exports;
const Bh = Nf(di);
var Wh,
  Ad = di;
(Wh = Ad.createRoot), Ad.hydrateRoot;
const o0 = 1,
  i0 = 1e6;
let Bl = 0;
function s0() {
  return (Bl = (Bl + 1) % Number.MAX_SAFE_INTEGER), Bl.toString();
}
const Wl = new Map(),
  Ld = (e) => {
    if (Wl.has(e)) return;
    const t = setTimeout(() => {
      Wl.delete(e), jo({ type: "REMOVE_TOAST", toastId: e });
    }, i0);
    Wl.set(e, t);
  },
  l0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, o0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Ld(n)
            : e.toasts.forEach((r) => {
                Ld(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  ts = [];
let ns = { toasts: [] };
function jo(e) {
  (ns = l0(ns, e)),
    ts.forEach((t) => {
      t(ns);
    });
}
function a0({ ...e }) {
  const t = s0(),
    n = (o) => jo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => jo({ type: "DISMISS_TOAST", toastId: t });
  return (
    jo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function u0() {
  const [e, t] = y.useState(ns);
  return (
    y.useEffect(
      () => (
        ts.push(t),
        () => {
          const n = ts.indexOf(t);
          n > -1 && ts.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: a0,
      dismiss: (n) => jo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ye(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function jd(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Vh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = jd(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : jd(e[o], null);
        }
      };
  };
}
function St(...e) {
  return y.useCallback(Vh(...e), e);
}
function Js(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = y.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var m;
      const { scope: h, children: d, ...x } = f,
        g = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
        w = y.useMemo(() => x, Object.values(x));
      return E.jsx(g.Provider, { value: w, children: d });
    };
    u.displayName = i + "Provider";
    function c(f, h) {
      var g;
      const d = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[a]) || l,
        x = y.useContext(d);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, c0(o, ...t)];
}
function c0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ba(e) {
  const t = d0(e),
    n = y.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = y.Children.toArray(i),
        a = l.find(p0);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? y.Children.count(u) > 1
                ? y.Children.only(null)
                : y.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return E.jsx(t, {
          ...s,
          ref: o,
          children: y.isValidElement(u) ? y.cloneElement(u, void 0, c) : null,
        });
      }
      return E.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function d0(e) {
  const t = y.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (y.isValidElement(o)) {
      const s = m0(o),
        l = h0(i, o.props);
      return (
        o.type !== y.Fragment && (l.ref = r ? Vh(r, s) : s),
        y.cloneElement(o, l)
      );
    }
    return y.Children.count(o) > 1 ? y.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Hh = Symbol("radix.slottable");
function f0(e) {
  const t = ({ children: n }) => E.jsx(E.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Hh), t;
}
function p0(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Hh
  );
}
function h0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function m0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function v0(e) {
  const t = e + "CollectionProvider",
    [n, r] = Js(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: m } = g,
        p = _.useRef(null),
        v = _.useRef(new Map()).current;
      return E.jsx(o, { scope: w, itemMap: v, collectionRef: p, children: m });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Ba(l),
    u = _.forwardRef((g, w) => {
      const { scope: m, children: p } = g,
        v = i(l, m),
        S = St(w, v.collectionRef);
      return E.jsx(a, { ref: S, children: p });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = Ba(c),
    d = _.forwardRef((g, w) => {
      const { scope: m, children: p, ...v } = g,
        S = _.useRef(null),
        C = St(w, S),
        k = i(c, m);
      return (
        _.useEffect(
          () => (
            k.itemMap.set(S, { ref: S, ...v }), () => void k.itemMap.delete(S)
          )
        ),
        E.jsx(h, { [f]: "", ref: C, children: p })
      );
    });
  d.displayName = c;
  function x(g) {
    const w = i(e + "CollectionConsumer", g);
    return _.useCallback(() => {
      const p = w.collectionRef.current;
      if (!p) return [];
      const v = Array.from(p.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (k, b) => v.indexOf(k.ref.current) - v.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: d }, x, r];
}
var g0 = [
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
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ve = g0.reduce((e, t) => {
    const n = Ba(`Primitive.${t}`),
      r = y.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          E.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Qh(e, t) {
  e && di.flushSync(() => e.dispatchEvent(t));
}
function _n(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function y0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var w0 = "DismissableLayer",
  Wa = "dismissableLayer.update",
  x0 = "dismissableLayer.pointerDownOutside",
  S0 = "dismissableLayer.focusOutside",
  Md,
  Kh = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Zu = y.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = y.useContext(Kh),
      [c, f] = y.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = y.useState({}),
      x = St(t, (b) => f(b)),
      g = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(w),
      p = c ? g.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      C = C0((b) => {
        const R = b.target,
          L = [...u.branches].some((A) => A.contains(R));
        !S ||
          L ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, h),
      k = k0((b) => {
        const R = b.target;
        [...u.branches].some((A) => A.contains(R)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, h);
    return (
      y0((b) => {
        p === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && l && (b.preventDefault(), l()));
      }, h),
      y.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Md = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Id(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Md);
            }
          );
      }, [c, h, n, u]),
      y.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Id());
        },
        [c, u]
      ),
      y.useEffect(() => {
        const b = () => d({});
        return (
          document.addEventListener(Wa, b),
          () => document.removeEventListener(Wa, b)
        );
      }, []),
      E.jsx(Ve.div, {
        ...a,
        ref: x,
        style: {
          pointerEvents: v ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ye(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ye(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
Zu.displayName = w0;
var E0 = "DismissableLayerBranch",
  Gh = y.forwardRef((e, t) => {
    const n = y.useContext(Kh),
      r = y.useRef(null),
      o = St(t, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      E.jsx(Ve.div, { ...e, ref: o })
    );
  });
Gh.displayName = E0;
function C0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = y.useRef(!1),
    o = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Yh(x0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _n(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Yh(S0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Id() {
  const e = new CustomEvent(Wa);
  document.dispatchEvent(e);
}
function Yh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Qh(o, i) : o.dispatchEvent(i);
}
var b0 = Zu,
  P0 = Gh,
  An = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  T0 = "Portal",
  Xh = y.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = y.useState(!1);
    An(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Bh.createPortal(E.jsx(Ve.div, { ...r, ref: t }), s) : null;
  });
Xh.displayName = T0;
function N0(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ju = (e) => {
  const { present: t, children: n } = e,
    r = R0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
    i = St(r.ref, O0(o));
  return typeof n == "function" || r.isPresent
    ? y.cloneElement(o, { ref: i })
    : null;
};
Ju.displayName = "Presence";
function R0(e) {
  const [t, n] = y.useState(),
    r = y.useRef(null),
    o = y.useRef(e),
    i = y.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = N0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const u = Di(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    An(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          d = Di(u);
        e
          ? a("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    An(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (d) => {
            const g = Di(r.current).includes(d.animationName);
            if (d.target === t && g && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          h = (d) => {
            d.target === t && (i.current = Di(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: y.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Di(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function O0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var _0 = Ff[" useInsertionEffect ".trim().toString()] || An;
function A0({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = L0({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const c = y.useRef(e !== void 0);
    y.useEffect(() => {
      const f = c.current;
      f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = l);
    }, [l, r]);
  }
  const u = y.useCallback(
    (c) => {
      var f;
      if (l) {
        const h = j0(c) ? c(e) : c;
        h !== e && ((f = s.current) == null || f.call(s, h));
      } else i(c);
    },
    [l, e, i, s]
  );
  return [a, u];
}
function L0({ defaultProp: e, onChange: t }) {
  const [n, r] = y.useState(e),
    o = y.useRef(n),
    i = y.useRef(t);
  return (
    _0(() => {
      i.current = t;
    }, [t]),
    y.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function j0(e) {
  return typeof e == "function";
}
var M0 = Object.freeze({
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
  }),
  I0 = "VisuallyHidden",
  el = y.forwardRef((e, t) =>
    E.jsx(Ve.span, { ...e, ref: t, style: { ...M0, ...e.style } })
  );
el.displayName = I0;
var D0 = el,
  ec = "ToastProvider",
  [tc, z0, F0] = v0("Toast"),
  [qh, HE] = Js("Toast", [F0]),
  [$0, tl] = qh(ec),
  Zh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = y.useState(null),
      [u, c] = y.useState(0),
      f = y.useRef(!1),
      h = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${ec}\`. Expected non-empty \`string\`.`
        ),
      E.jsx(tc.Provider, {
        scope: t,
        children: E.jsx($0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: y.useCallback(() => c((d) => d + 1), []),
          onToastRemove: y.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: s,
        }),
      })
    );
  };
Zh.displayName = ec;
var Jh = "ToastViewport",
  U0 = ["F8"],
  Va = "toast.viewportPause",
  Ha = "toast.viewportResume",
  em = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = U0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = tl(Jh, n),
      l = z0(n),
      a = y.useRef(null),
      u = y.useRef(null),
      c = y.useRef(null),
      f = y.useRef(null),
      h = St(t, f, s.onViewportChange),
      d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      x = s.toastCount > 0;
    y.useEffect(() => {
      const w = (m) => {
        var v;
        r.length !== 0 &&
          r.every((S) => m[S] || m.code === S) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      y.useEffect(() => {
        const w = a.current,
          m = f.current;
        if (x && w && m) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const k = new CustomEvent(Va);
                m.dispatchEvent(k), (s.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const k = new CustomEvent(Ha);
                m.dispatchEvent(k), (s.isClosePausedRef.current = !1);
              }
            },
            S = (k) => {
              !w.contains(k.relatedTarget) && v();
            },
            C = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", p),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
              w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [x, s.isClosePausedRef]);
    const g = y.useCallback(
      ({ tabbingDirection: w }) => {
        const p = l().map((v) => {
          const S = v.ref.current,
            C = [S, ...ew(S)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? p.reverse() : p).flat();
      },
      [l]
    );
    return (
      y.useEffect(() => {
        const w = f.current;
        if (w) {
          const m = (p) => {
            var C, k, b;
            const v = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !v) {
              const R = document.activeElement,
                L = p.shiftKey;
              if (p.target === w && L) {
                (C = u.current) == null || C.focus();
                return;
              }
              const D = g({ tabbingDirection: L ? "backwards" : "forwards" }),
                Q = D.findIndex((j) => j === R);
              Vl(D.slice(Q + 1))
                ? p.preventDefault()
                : L
                ? (k = u.current) == null || k.focus()
                : (b = c.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
          );
        }
      }, [l, g]),
      E.jsxs(P0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x &&
            E.jsx(Qa, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "forwards" });
                Vl(w);
              },
            }),
          E.jsx(tc.Slot, {
            scope: n,
            children: E.jsx(Ve.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          x &&
            E.jsx(Qa, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = g({ tabbingDirection: "backwards" });
                Vl(w);
              },
            }),
        ],
      })
    );
  });
em.displayName = Jh;
var tm = "ToastFocusProxy",
  Qa = y.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = tl(tm, n);
    return E.jsx(el, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Qa.displayName = tm;
var fi = "Toast",
  B0 = "toast.swipeStart",
  W0 = "toast.swipeMove",
  V0 = "toast.swipeCancel",
  H0 = "toast.swipeEnd",
  nm = y.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = A0({ prop: r, defaultProp: o ?? !0, onChange: i, caller: fi });
    return E.jsx(Ju, {
      present: n || l,
      children: E.jsx(G0, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: _n(e.onPause),
        onResume: _n(e.onResume),
        onSwipeStart: ye(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ye(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: ye(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ye(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
nm.displayName = fi;
var [Q0, K0] = qh(fi, { onClose() {} }),
  G0 = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: d,
        ...x
      } = e,
      g = tl(fi, n),
      [w, m] = y.useState(null),
      p = St(t, (j) => m(j)),
      v = y.useRef(null),
      S = y.useRef(null),
      C = o || g.duration,
      k = y.useRef(0),
      b = y.useRef(C),
      R = y.useRef(0),
      { onToastAdd: L, onToastRemove: A } = g,
      F = _n(() => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((Y = g.viewport) == null || Y.focus()),
          s();
      }),
      D = y.useCallback(
        (j) => {
          !j ||
            j === 1 / 0 ||
            (window.clearTimeout(R.current),
            (k.current = new Date().getTime()),
            (R.current = window.setTimeout(F, j)));
        },
        [F]
      );
    y.useEffect(() => {
      const j = g.viewport;
      if (j) {
        const Y = () => {
            D(b.current), u == null || u();
          },
          $ = () => {
            const W = new Date().getTime() - k.current;
            (b.current = b.current - W),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          j.addEventListener(Va, $),
          j.addEventListener(Ha, Y),
          () => {
            j.removeEventListener(Va, $), j.removeEventListener(Ha, Y);
          }
        );
      }
    }, [g.viewport, C, a, u, D]),
      y.useEffect(() => {
        i && !g.isClosePausedRef.current && D(C);
      }, [i, C, g.isClosePausedRef, D]),
      y.useEffect(() => (L(), () => A()), [L, A]);
    const Q = y.useMemo(() => (w ? um(w) : null), [w]);
    return g.viewport
      ? E.jsxs(E.Fragment, {
          children: [
            Q &&
              E.jsx(Y0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            E.jsx(Q0, {
              scope: n,
              onClose: F,
              children: di.createPortal(
                E.jsx(tc.ItemSlot, {
                  scope: n,
                  children: E.jsx(b0, {
                    asChild: !0,
                    onEscapeKeyDown: ye(l, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || F(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: E.jsx(Ve.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...x,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ye(e.onKeyDown, (j) => {
                        j.key === "Escape" &&
                          (l == null || l(j.nativeEvent),
                          j.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: ye(e.onPointerDown, (j) => {
                        j.button === 0 &&
                          (v.current = { x: j.clientX, y: j.clientY });
                      }),
                      onPointerMove: ye(e.onPointerMove, (j) => {
                        if (!v.current) return;
                        const Y = j.clientX - v.current.x,
                          $ = j.clientY - v.current.y,
                          W = !!S.current,
                          T = ["left", "right"].includes(g.swipeDirection),
                          N = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          M = T ? N(0, Y) : 0,
                          V = T ? 0 : N(0, $),
                          z = j.pointerType === "touch" ? 10 : 2,
                          K = { x: M, y: V },
                          X = { originalEvent: j, delta: K };
                        W
                          ? ((S.current = K), zi(W0, f, X, { discrete: !1 }))
                          : Dd(K, g.swipeDirection, z)
                          ? ((S.current = K),
                            zi(B0, c, X, { discrete: !1 }),
                            j.target.setPointerCapture(j.pointerId))
                          : (Math.abs(Y) > z || Math.abs($) > z) &&
                            (v.current = null);
                      }),
                      onPointerUp: ye(e.onPointerUp, (j) => {
                        const Y = S.current,
                          $ = j.target;
                        if (
                          ($.hasPointerCapture(j.pointerId) &&
                            $.releasePointerCapture(j.pointerId),
                          (S.current = null),
                          (v.current = null),
                          Y)
                        ) {
                          const W = j.currentTarget,
                            T = { originalEvent: j, delta: Y };
                          Dd(Y, g.swipeDirection, g.swipeThreshold)
                            ? zi(H0, d, T, { discrete: !0 })
                            : zi(V0, h, T, { discrete: !0 }),
                            W.addEventListener(
                              "click",
                              (N) => N.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Y0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = tl(fi, t),
      [i, s] = y.useState(!1),
      [l, a] = y.useState(!1);
    return (
      Z0(() => s(!0)),
      y.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : E.jsx(Xh, {
            asChild: !0,
            children: E.jsx(el, {
              ...r,
              children:
                i && E.jsxs(E.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  X0 = "ToastTitle",
  rm = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(Ve.div, { ...r, ref: t });
  });
rm.displayName = X0;
var q0 = "ToastDescription",
  om = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(Ve.div, { ...r, ref: t });
  });
om.displayName = q0;
var im = "ToastAction",
  sm = y.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? E.jsx(am, {
          altText: n,
          asChild: !0,
          children: E.jsx(nc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${im}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
sm.displayName = im;
var lm = "ToastClose",
  nc = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = K0(lm, n);
    return E.jsx(am, {
      asChild: !0,
      children: E.jsx(Ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ye(e.onClick, o.onClose),
      }),
    });
  });
nc.displayName = lm;
var am = y.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return E.jsx(Ve.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function um(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        J0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...um(r));
      }
    }),
    t
  );
}
function zi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Qh(o, i) : o.dispatchEvent(i);
}
var Dd = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Z0(e = () => {}) {
  const t = _n(e);
  An(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function J0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ew(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var tw = Zh,
  cm = em,
  dm = nm,
  fm = rm,
  pm = om,
  hm = sm,
  mm = nc;
function vm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = vm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function gm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = vm(e)) && (r && (r += " "), (r += t));
  return r;
}
const zd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Fd = gm,
  nw = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Fd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = zd(c) || zd(f);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, h] = c;
          return h === void 0 || (u[f] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: h, ...d } = c;
              return Object.entries(d).every((x) => {
                let [g, w] = x;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[g])
                  : { ...i, ...l }[g] === w;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return Fd(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ym = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ow = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = y.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    y.createElement(
      "svg",
      {
        ref: a,
        ...ow,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: ym("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => y.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nl = (e, t) => {
  const n = y.forwardRef(({ className: r, ...o }, i) =>
    y.createElement(iw, {
      ref: i,
      iconNode: t,
      className: ym(`lucide-${rw(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = nl("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = nl("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = nl("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rs = nl("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  rc = "-",
  aw = (e) => {
    const t = cw(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(rc);
        return l[0] === "" && l.length !== 1 && l.shift(), wm(l, t) || uw(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  wm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? wm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(rc);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Ud = /^\[(.+)\]$/,
  uw = (e) => {
    if (Ud.test(e)) {
      const t = Ud.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  cw = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      fw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Ka(s, r, i, t);
      }),
      r
    );
  },
  Ka = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Bd(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (dw(o)) {
          Ka(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Ka(s, Bd(t, i), n, r);
      });
    });
  },
  Bd = (e, t) => {
    let n = e;
    return (
      t.split(rc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  dw = (e) => e.isThemeGetter,
  fw = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  pw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  xm = "!",
  hw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let m = l[w];
          if (u === 0) {
            if (m === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(c, w)), (c = w + i);
              continue;
            }
            if (m === "/") {
              f = w;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(c),
          d = h.startsWith(xm),
          x = d ? h.substring(1) : h,
          g = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: d,
          baseClassName: x,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  mw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  vw = (e) => ({ cache: pw(e.cacheSize), parseClassName: hw(e), ...aw(e) }),
  gw = /\s+/,
  yw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(gw);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: d,
        } = n(u);
      let x = !!d,
        g = r(x ? h.substring(0, d) : h);
      if (!g) {
        if (!x) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((g = r(h)), !g)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        x = !1;
      }
      const w = mw(c).join(":"),
        m = f ? w + xm : w,
        p = m + g;
      if (i.includes(p)) continue;
      i.push(p);
      const v = o(g, x);
      for (let S = 0; S < v.length; ++S) {
        const C = v[S];
        i.push(m + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function ww() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Sm(t)) && (r && (r += " "), (r += n));
  return r;
}
const Sm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Sm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function xw(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = vw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = yw(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(ww.apply(null, arguments));
  };
}
const re = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Em = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Sw = /^\d+\/\d+$/,
  Ew = new Set(["px", "full", "screen"]),
  Cw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  kw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  bw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Pw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Tw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  It = (e) => Ir(e) || Ew.has(e) || Sw.test(e),
  on = (e) => oo(e, "length", Mw),
  Ir = (e) => !!e && !Number.isNaN(Number(e)),
  Hl = (e) => oo(e, "number", Ir),
  wo = (e) => !!e && Number.isInteger(Number(e)),
  Nw = (e) => e.endsWith("%") && Ir(e.slice(0, -1)),
  H = (e) => Em.test(e),
  sn = (e) => Cw.test(e),
  Rw = new Set(["length", "size", "percentage"]),
  Ow = (e) => oo(e, Rw, Cm),
  _w = (e) => oo(e, "position", Cm),
  Aw = new Set(["image", "url"]),
  Lw = (e) => oo(e, Aw, Dw),
  jw = (e) => oo(e, "", Iw),
  xo = () => !0,
  oo = (e, t, n) => {
    const r = Em.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Mw = (e) => kw.test(e) && !bw.test(e),
  Cm = () => !1,
  Iw = (e) => Pw.test(e),
  Dw = (e) => Tw.test(e),
  zw = () => {
    const e = re("colors"),
      t = re("spacing"),
      n = re("blur"),
      r = re("brightness"),
      o = re("borderColor"),
      i = re("borderRadius"),
      s = re("borderSpacing"),
      l = re("borderWidth"),
      a = re("contrast"),
      u = re("grayscale"),
      c = re("hueRotate"),
      f = re("invert"),
      h = re("gap"),
      d = re("gradientColorStops"),
      x = re("gradientColorStopPositions"),
      g = re("inset"),
      w = re("margin"),
      m = re("opacity"),
      p = re("padding"),
      v = re("saturate"),
      S = re("scale"),
      C = re("sepia"),
      k = re("skew"),
      b = re("space"),
      R = re("translate"),
      L = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", H, t],
      D = () => [H, t],
      Q = () => ["", It, on],
      j = () => ["auto", Ir, H],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", H],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [Ir, H];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [xo],
        spacing: [It, on],
        blur: ["none", "", sn, H],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", sn, H],
        borderSpacing: D(),
        borderWidth: Q(),
        contrast: V(),
        grayscale: N(),
        hueRotate: V(),
        invert: N(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Nw, on],
        inset: F(),
        margin: F(),
        opacity: V(),
        padding: D(),
        saturate: V(),
        scale: V(),
        sepia: N(),
        skew: V(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", H] }],
        container: ["container"],
        columns: [{ columns: [sn] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), H] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", wo, H] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", H] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", wo, H] }],
        "grid-cols": [{ "grid-cols": [xo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", wo, H] }, H] }],
        "col-start": [{ "col-start": j() }],
        "col-end": [{ "col-end": j() }],
        "grid-rows": [{ "grid-rows": [xo] }],
        "row-start-end": [{ row: ["auto", { span: [wo, H] }, H] }],
        "row-start": [{ "row-start": j() }],
        "row-end": [{ "row-end": j() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
        "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              H,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [sn] },
              sn,
            ],
          },
        ],
        h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", sn, on] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Hl,
            ],
          },
        ],
        "font-family": [{ font: [xo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              H,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ir, Hl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              It,
              H,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", H] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", It, on] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", It, H] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", H] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), _w] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Ow] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Lw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [It, H] }],
        "outline-w": [{ outline: [It, on] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [It, on] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", sn, jw] }],
        "shadow-color": [{ shadow: [xo] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": W() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", sn, H] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              H,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [wo, H] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              H,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", H] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [It, on, Hl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Fw = xw(zw);
function ar(...e) {
  return Fw(gm(e));
}
const $w = tw,
  km = y.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(cm, {
      ref: n,
      className: ar(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
km.displayName = cm.displayName;
const Uw = nw(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  bm = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    E.jsx(dm, { ref: r, className: ar(Uw({ variant: t }), e), ...n })
  );
bm.displayName = dm.displayName;
const Bw = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(hm, {
    ref: n,
    className: ar(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
Bw.displayName = hm.displayName;
const Pm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(mm, {
    ref: n,
    className: ar(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: E.jsx(Rs, { className: "h-4 w-4" }),
  })
);
Pm.displayName = mm.displayName;
const Tm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(fm, { ref: n, className: ar("text-sm font-semibold", e), ...t })
);
Tm.displayName = fm.displayName;
const Nm = y.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(pm, { ref: n, className: ar("text-sm opacity-90", e), ...t })
);
Nm.displayName = pm.displayName;
function Ww() {
  const { toasts: e } = u0();
  return E.jsxs($w, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return E.jsxs(
          bm,
          {
            ...i,
            children: [
              E.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && E.jsx(Tm, { children: n }),
                  r && E.jsx(Nm, { children: r }),
                ],
              }),
              o,
              E.jsx(Pm, {}),
            ],
          },
          t
        );
      }),
      E.jsx(km, {}),
    ],
  });
}
var Wd = ["light", "dark"],
  Vw = "(prefers-color-scheme: dark)",
  Hw = y.createContext(void 0),
  Qw = { setTheme: (e) => {}, themes: [] },
  Kw = () => {
    var e;
    return (e = y.useContext(Hw)) != null ? e : Qw;
  };
y.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((x) => `'${x}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Wd.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (x, g = !1, w = !0) => {
        let m = s ? s[x] : x,
          p = g ? x + "|| ''" : `'${m}'`,
          v = "";
        return (
          o &&
            w &&
            !g &&
            Wd.includes(x) &&
            (v += `d.style.colorScheme = '${x}';`),
          n === "class"
            ? g || m
              ? (v += `c.add(${p})`)
              : (v += "null")
            : m && (v += `d[s](n,${p})`),
          v
        );
      },
      d = e
        ? `!function(){${c}${h(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Vw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h(
            "dark"
          )}}else{${h("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${h(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + h(i, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${h(s ? "x[e]" : "e", !0)}}else{${h(
            i,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return y.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: d },
    });
  }
);
var Gw = (e) => {
    switch (e) {
      case "success":
        return qw;
      case "info":
        return Jw;
      case "warning":
        return Zw;
      case "error":
        return ex;
      default:
        return null;
    }
  },
  Yw = Array(12).fill(0),
  Xw = ({ visible: e, className: t }) =>
    _.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      _.createElement(
        "div",
        { className: "sonner-spinner" },
        Yw.map((n, r) =>
          _.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  qw = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Zw = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Jw = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ex = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  tx = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    _.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    _.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  nx = () => {
    let [e, t] = _.useState(document.hidden);
    return (
      _.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ga = 1,
  rx = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ga++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), _.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (ix(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ga++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  ze = new rx(),
  ox = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ga++;
    return ze.addToast({ title: e, ...t, id: n }), n;
  },
  ix = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  sx = ox,
  lx = () => ze.toasts,
  ax = () => ze.getActiveToasts();
Object.assign(
  sx,
  {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading,
  },
  { getHistory: lx, getToasts: ax }
);
function ux(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
ux(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fi(e) {
  return e.label !== void 0;
}
var cx = 3,
  dx = "32px",
  fx = "16px",
  Vd = 4e3,
  px = 356,
  hx = 14,
  mx = 20,
  vx = 200;
function dt(...e) {
  return e.filter(Boolean).join(" ");
}
function gx(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var yx = (e) => {
  var t, n, r, o, i, s, l, a, u, c, f;
  let {
      invert: h,
      toast: d,
      unstyled: x,
      interacting: g,
      setHeights: w,
      visibleToasts: m,
      heights: p,
      index: v,
      toasts: S,
      expanded: C,
      removeToast: k,
      defaultRichColors: b,
      closeButton: R,
      style: L,
      cancelButtonStyle: A,
      actionButtonStyle: F,
      className: D = "",
      descriptionClassName: Q = "",
      duration: j,
      position: Y,
      gap: $,
      loadingIcon: W,
      expandByDefault: T,
      classNames: N,
      icons: M,
      closeButtonAriaLabel: V = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [K, X] = _.useState(null),
    [he, be] = _.useState(null),
    [J, dr] = _.useState(!1),
    [qt, zn] = _.useState(!1),
    [Zt, fr] = _.useState(!1),
    [Jt, vi] = _.useState(!1),
    [dl, gi] = _.useState(!1),
    [fl, ao] = _.useState(0),
    [pr, gc] = _.useState(0),
    uo = _.useRef(d.duration || j || Vd),
    yc = _.useRef(null),
    Fn = _.useRef(null),
    Cv = v === 0,
    kv = v + 1 <= m,
    Je = d.type,
    hr = d.dismissible !== !1,
    bv = d.className || "",
    Pv = d.descriptionClassName || "",
    yi = _.useMemo(
      () => p.findIndex((U) => U.toastId === d.id) || 0,
      [p, d.id]
    ),
    Tv = _.useMemo(() => {
      var U;
      return (U = d.closeButton) != null ? U : R;
    }, [d.closeButton, R]),
    wc = _.useMemo(() => d.duration || j || Vd, [d.duration, j]),
    pl = _.useRef(0),
    mr = _.useRef(0),
    xc = _.useRef(0),
    vr = _.useRef(null),
    [Nv, Rv] = Y.split("-"),
    Sc = _.useMemo(
      () => p.reduce((U, te, se) => (se >= yi ? U : U + te.height), 0),
      [p, yi]
    ),
    Ec = nx(),
    Ov = d.invert || h,
    hl = Je === "loading";
  (mr.current = _.useMemo(() => yi * $ + Sc, [yi, Sc])),
    _.useEffect(() => {
      uo.current = wc;
    }, [wc]),
    _.useEffect(() => {
      dr(!0);
    }, []),
    _.useEffect(() => {
      let U = Fn.current;
      if (U) {
        let te = U.getBoundingClientRect().height;
        return (
          gc(te),
          w((se) => [
            { toastId: d.id, height: te, position: d.position },
            ...se,
          ]),
          () => w((se) => se.filter((lt) => lt.toastId !== d.id))
        );
      }
    }, [w, d.id]),
    _.useLayoutEffect(() => {
      if (!J) return;
      let U = Fn.current,
        te = U.style.height;
      U.style.height = "auto";
      let se = U.getBoundingClientRect().height;
      (U.style.height = te),
        gc(se),
        w((lt) =>
          lt.find((at) => at.toastId === d.id)
            ? lt.map((at) => (at.toastId === d.id ? { ...at, height: se } : at))
            : [{ toastId: d.id, height: se, position: d.position }, ...lt]
        );
    }, [J, d.title, d.description, w, d.id]);
  let en = _.useCallback(() => {
    zn(!0),
      ao(mr.current),
      w((U) => U.filter((te) => te.toastId !== d.id)),
      setTimeout(() => {
        k(d);
      }, vx);
  }, [d, k, w, mr]);
  _.useEffect(() => {
    if (
      (d.promise && Je === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let U;
    return (
      C || g || (z && Ec)
        ? (() => {
            if (xc.current < pl.current) {
              let te = new Date().getTime() - pl.current;
              uo.current = uo.current - te;
            }
            xc.current = new Date().getTime();
          })()
        : uo.current !== 1 / 0 &&
          ((pl.current = new Date().getTime()),
          (U = setTimeout(() => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d), en();
          }, uo.current))),
      () => clearTimeout(U)
    );
  }, [C, g, d, Je, z, Ec, en]),
    _.useEffect(() => {
      d.delete && en();
    }, [en, d.delete]);
  function _v() {
    var U, te, se;
    return M != null && M.loading
      ? _.createElement(
          "div",
          {
            className: dt(
              N == null ? void 0 : N.loader,
              (U = d == null ? void 0 : d.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": Je === "loading",
          },
          M.loading
        )
      : W
      ? _.createElement(
          "div",
          {
            className: dt(
              N == null ? void 0 : N.loader,
              (te = d == null ? void 0 : d.classNames) == null
                ? void 0
                : te.loader,
              "sonner-loader"
            ),
            "data-visible": Je === "loading",
          },
          W
        )
      : _.createElement(Xw, {
          className: dt(
            N == null ? void 0 : N.loader,
            (se = d == null ? void 0 : d.classNames) == null
              ? void 0
              : se.loader
          ),
          visible: Je === "loading",
        });
  }
  return _.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Fn,
      className: dt(
        D,
        bv,
        N == null ? void 0 : N.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        N == null ? void 0 : N.default,
        N == null ? void 0 : N[Je],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Je]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : b,
      "data-styled": !(d.jsx || d.unstyled || x),
      "data-mounted": J,
      "data-promise": !!d.promise,
      "data-swiped": dl,
      "data-removed": qt,
      "data-visible": kv,
      "data-y-position": Nv,
      "data-x-position": Rv,
      "data-index": v,
      "data-front": Cv,
      "data-swiping": Zt,
      "data-dismissible": hr,
      "data-type": Je,
      "data-invert": Ov,
      "data-swipe-out": Jt,
      "data-swipe-direction": he,
      "data-expanded": !!(C || (T && J)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": S.length - v,
        "--offset": `${qt ? fl : mr.current}px`,
        "--initial-height": T ? "auto" : `${pr}px`,
        ...L,
        ...d.style,
      },
      onDragEnd: () => {
        fr(!1), X(null), (vr.current = null);
      },
      onPointerDown: (U) => {
        hl ||
          !hr ||
          ((yc.current = new Date()),
          ao(mr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (fr(!0), (vr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, te, se, lt;
        if (Jt || !hr) return;
        vr.current = null;
        let at = Number(
            ((U = Fn.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          tn = Number(
            ((te = Fn.current) == null
              ? void 0
              : te.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          $n =
            new Date().getTime() -
            ((se = yc.current) == null ? void 0 : se.getTime()),
          ut = K === "x" ? at : tn,
          nn = Math.abs(ut) / $n;
        if (Math.abs(ut) >= mx || nn > 0.11) {
          ao(mr.current),
            (lt = d.onDismiss) == null || lt.call(d, d),
            be(
              K === "x" ? (at > 0 ? "right" : "left") : tn > 0 ? "down" : "up"
            ),
            en(),
            vi(!0),
            gi(!1);
          return;
        }
        fr(!1), X(null);
      },
      onPointerMove: (U) => {
        var te, se, lt, at;
        if (
          !vr.current ||
          !hr ||
          ((te = window.getSelection()) == null
            ? void 0
            : te.toString().length) > 0
        )
          return;
        let tn = U.clientY - vr.current.y,
          $n = U.clientX - vr.current.x,
          ut = (se = e.swipeDirections) != null ? se : gx(Y);
        !K &&
          (Math.abs($n) > 1 || Math.abs(tn) > 1) &&
          X(Math.abs($n) > Math.abs(tn) ? "x" : "y");
        let nn = { x: 0, y: 0 };
        K === "y"
          ? (ut.includes("top") || ut.includes("bottom")) &&
            ((ut.includes("top") && tn < 0) ||
              (ut.includes("bottom") && tn > 0)) &&
            (nn.y = tn)
          : K === "x" &&
            (ut.includes("left") || ut.includes("right")) &&
            ((ut.includes("left") && $n < 0) ||
              (ut.includes("right") && $n > 0)) &&
            (nn.x = $n),
          (Math.abs(nn.x) > 0 || Math.abs(nn.y) > 0) && gi(!0),
          (lt = Fn.current) == null ||
            lt.style.setProperty("--swipe-amount-x", `${nn.x}px`),
          (at = Fn.current) == null ||
            at.style.setProperty("--swipe-amount-y", `${nn.y}px`);
      },
    },
    Tv && !d.jsx
      ? _.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": hl,
            "data-close-button": !0,
            onClick:
              hl || !hr
                ? () => {}
                : () => {
                    var U;
                    en(), (U = d.onDismiss) == null || U.call(d, d);
                  },
            className: dt(
              N == null ? void 0 : N.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = M == null ? void 0 : M.close) != null ? i : tx
        )
      : null,
    d.jsx || y.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
        ? d.title()
        : d.title
      : _.createElement(
          _.Fragment,
          null,
          Je || d.icon || d.promise
            ? _.createElement(
                "div",
                {
                  "data-icon": "",
                  className: dt(
                    N == null ? void 0 : N.icon,
                    (s = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || _v()
                  : null,
                d.type !== "loading"
                  ? d.icon || (M == null ? void 0 : M[Je]) || Gw(Je)
                  : null
              )
            : null,
          _.createElement(
            "div",
            {
              "data-content": "",
              className: dt(
                N == null ? void 0 : N.content,
                (l = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            _.createElement(
              "div",
              {
                "data-title": "",
                className: dt(
                  N == null ? void 0 : N.title,
                  (a = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof d.title == "function" ? d.title() : d.title
            ),
            d.description
              ? _.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: dt(
                      Q,
                      Pv,
                      N == null ? void 0 : N.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description
                )
              : null
          ),
          y.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && Fi(d.cancel)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || A,
                  onClick: (U) => {
                    var te, se;
                    Fi(d.cancel) &&
                      hr &&
                      ((se = (te = d.cancel).onClick) == null || se.call(te, U),
                      en());
                  },
                  className: dt(
                    N == null ? void 0 : N.cancelButton,
                    (c = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          y.isValidElement(d.action)
            ? d.action
            : d.action && Fi(d.action)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || F,
                  onClick: (U) => {
                    var te, se;
                    Fi(d.action) &&
                      ((se = (te = d.action).onClick) == null || se.call(te, U),
                      !U.defaultPrevented && en());
                  },
                  className: dt(
                    N == null ? void 0 : N.actionButton,
                    (f = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function Hd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function wx(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? fx : dx;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var xx = y.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: c = "light",
      richColors: f,
      duration: h,
      style: d,
      visibleToasts: x = cx,
      toastOptions: g,
      dir: w = Hd(),
      gap: m = hx,
      loadingIcon: p,
      icons: v,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [k, b] = _.useState([]),
    R = _.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(k.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [k, r]
    ),
    [L, A] = _.useState([]),
    [F, D] = _.useState(!1),
    [Q, j] = _.useState(!1),
    [Y, $] = _.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    W = _.useRef(null),
    T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    N = _.useRef(null),
    M = _.useRef(!1),
    V = _.useCallback((z) => {
      b((K) => {
        var X;
        return (
          ((X = K.find((he) => he.id === z.id)) != null && X.delete) ||
            ze.dismiss(z.id),
          K.filter(({ id: he }) => he !== z.id)
        );
      });
    }, []);
  return (
    _.useEffect(
      () =>
        ze.subscribe((z) => {
          if (z.dismiss) {
            b((K) => K.map((X) => (X.id === z.id ? { ...X, delete: !0 } : X)));
            return;
          }
          setTimeout(() => {
            Bh.flushSync(() => {
              b((K) => {
                let X = K.findIndex((he) => he.id === z.id);
                return X !== -1
                  ? [...K.slice(0, X), { ...K[X], ...z }, ...K.slice(X + 1)]
                  : [z, ...K];
              });
            });
          });
        }),
      []
    ),
    _.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: K }) => {
          $(K ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: X }) => {
          try {
            $(X ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [c]),
    _.useEffect(() => {
      k.length <= 1 && D(!1);
    }, [k]),
    _.useEffect(() => {
      let z = (K) => {
        var X, he;
        o.every((be) => K[be] || K.code === be) &&
          (D(!0), (X = W.current) == null || X.focus()),
          K.code === "Escape" &&
            (document.activeElement === W.current ||
              ((he = W.current) != null &&
                he.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [o]),
    _.useEffect(() => {
      if (W.current)
        return () => {
          N.current &&
            (N.current.focus({ preventScroll: !0 }),
            (N.current = null),
            (M.current = !1));
        };
    }, [W.current]),
    _.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((z, K) => {
        var X;
        let [he, be] = z.split("-");
        return k.length
          ? _.createElement(
              "ol",
              {
                key: z,
                dir: w === "auto" ? Hd() : w,
                tabIndex: -1,
                ref: W,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": Y,
                "data-y-position": he,
                "data-lifted": F && k.length > 1 && !i,
                "data-x-position": be,
                style: {
                  "--front-toast-height": `${
                    ((X = L[0]) == null ? void 0 : X.height) || 0
                  }px`,
                  "--width": `${px}px`,
                  "--gap": `${m}px`,
                  ...d,
                  ...wx(a, u),
                },
                onBlur: (J) => {
                  M.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((M.current = !1),
                    N.current &&
                      (N.current.focus({ preventScroll: !0 }),
                      (N.current = null)));
                },
                onFocus: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    M.current ||
                    ((M.current = !0), (N.current = J.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  Q || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    j(!0);
                },
                onPointerUp: () => j(!1),
              },
              k
                .filter((J) => (!J.position && K === 0) || J.position === z)
                .map((J, dr) => {
                  var qt, zn;
                  return _.createElement(yx, {
                    key: J.id,
                    icons: v,
                    index: dr,
                    toast: J,
                    defaultRichColors: f,
                    duration:
                      (qt = g == null ? void 0 : g.duration) != null ? qt : h,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: x,
                    closeButton:
                      (zn = g == null ? void 0 : g.closeButton) != null
                        ? zn
                        : s,
                    interacting: Q,
                    position: z,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: V,
                    toasts: k.filter((Zt) => Zt.position == J.position),
                    heights: L.filter((Zt) => Zt.position == J.position),
                    setHeights: A,
                    expandByDefault: i,
                    gap: m,
                    loadingIcon: p,
                    expanded: F,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
const Sx = ({ ...e }) => {
    const { theme: t = "system" } = Kw();
    return E.jsx(xx, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Ex = ["top", "right", "bottom", "left"],
  Ln = Math.min,
  Qe = Math.max,
  Os = Math.round,
  $i = Math.floor,
  Lt = (e) => ({ x: e, y: e }),
  Cx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  kx = { start: "end", end: "start" };
function Ya(e, t, n) {
  return Qe(e, Ln(t, n));
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Yt(e) {
  return e.split("-")[0];
}
function io(e) {
  return e.split("-")[1];
}
function oc(e) {
  return e === "x" ? "y" : "x";
}
function ic(e) {
  return e === "y" ? "height" : "width";
}
const bx = new Set(["top", "bottom"]);
function Ot(e) {
  return bx.has(Yt(e)) ? "y" : "x";
}
function sc(e) {
  return oc(Ot(e));
}
function Px(e, t, n) {
  n === void 0 && (n = !1);
  const r = io(e),
    o = sc(e),
    i = ic(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = _s(s)), [s, _s(s)];
}
function Tx(e) {
  const t = _s(e);
  return [Xa(e), t, Xa(t)];
}
function Xa(e) {
  return e.replace(/start|end/g, (t) => kx[t]);
}
const Qd = ["left", "right"],
  Kd = ["right", "left"],
  Nx = ["top", "bottom"],
  Rx = ["bottom", "top"];
function Ox(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Kd : Qd) : t ? Qd : Kd;
    case "left":
    case "right":
      return t ? Nx : Rx;
    default:
      return [];
  }
}
function _x(e, t, n, r) {
  const o = io(e);
  let i = Ox(Yt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Xa)))), i
  );
}
function _s(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cx[t]);
}
function Ax(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Rm(e) {
  return typeof e != "number"
    ? Ax(e)
    : { top: e, right: e, bottom: e, left: e };
}
function As(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Gd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Ot(t),
    s = sc(t),
    l = ic(s),
    a = Yt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: c, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: f };
      break;
    case "left":
      d = { x: r.x - o.width, y: f };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (io(t)) {
    case "start":
      d[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += h * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Lx = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = Gd(u, r, a),
    h = r,
    d = {},
    x = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: w, fn: m } = l[g],
      {
        x: p,
        y: v,
        data: S,
        reset: C,
      } = await m({
        x: c,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: d,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (f = v ?? f),
      (d = { ...d, [w]: { ...d[w], ...S } }),
      C &&
        x <= 50 &&
        (x++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: f } = Gd(u, h, a))),
        (g = -1));
  }
  return { x: c, y: f, placement: h, strategy: o, middlewareData: d };
};
async function Zo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: d = 0,
    } = Gt(t, e),
    x = Rm(d),
    w = l[h ? (f === "floating" ? "reference" : "floating") : f],
    m = As(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    p =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = As(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: p,
            offsetParent: v,
            strategy: a,
          })
        : p
    );
  return {
    top: (m.top - C.top + x.top) / S.y,
    bottom: (C.bottom - m.bottom + x.bottom) / S.y,
    left: (m.left - C.left + x.left) / S.x,
    right: (C.right - m.right + x.right) / S.x,
  };
}
const jx = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Gt(e, t) || {};
      if (u == null) return {};
      const f = Rm(c),
        h = { x: n, y: r },
        d = sc(o),
        x = ic(d),
        g = await s.getDimensions(u),
        w = d === "y",
        m = w ? "top" : "left",
        p = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        S = i.reference[x] + i.reference[d] - h[d] - i.floating[x],
        C = h[d] - i.reference[d],
        k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let b = k ? k[v] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
        (b = l.floating[v] || i.floating[x]);
      const R = S / 2 - C / 2,
        L = b / 2 - g[x] / 2 - 1,
        A = Ln(f[m], L),
        F = Ln(f[p], L),
        D = A,
        Q = b - g[x] - F,
        j = b / 2 - g[x] / 2 + R,
        Y = Ya(D, j, Q),
        $ =
          !a.arrow &&
          io(o) != null &&
          j !== Y &&
          i.reference[x] / 2 - (j < D ? A : F) - g[x] / 2 < 0,
        W = $ ? (j < D ? j - D : j - Q) : 0;
      return {
        [d]: h[d] + W,
        data: {
          [d]: Y,
          centerOffset: j - Y - W,
          ...($ && { alignmentOffset: W }),
        },
        reset: $,
      };
    },
  }),
  Mx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: g = !0,
              ...w
            } = Gt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Yt(o),
            p = Ot(l),
            v = Yt(l) === l,
            S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = h || (v || !g ? [_s(l)] : Tx(l)),
            k = x !== "none";
          !h && k && C.push(..._x(l, g, x, S));
          const b = [l, ...C],
            R = await Zo(t, w),
            L = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && L.push(R[m]), f)) {
            const j = Px(o, s, S);
            L.push(R[j[0]], R[j[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: L }]),
            !L.every((j) => j <= 0))
          ) {
            var F, D;
            const j = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              Y = b[j];
            if (
              Y &&
              (!(f === "alignment" ? p !== Ot(Y) : !1) ||
                A.every((T) => T.overflows[0] > 0 && Ot(T.placement) === p))
            )
              return {
                data: { index: j, overflows: A },
                reset: { placement: Y },
              };
            let $ =
              (D = A.filter((W) => W.overflows[0] <= 0).sort(
                (W, T) => W.overflows[1] - T.overflows[1]
              )[0]) == null
                ? void 0
                : D.placement;
            if (!$)
              switch (d) {
                case "bestFit": {
                  var Q;
                  const W =
                    (Q = A.filter((T) => {
                      if (k) {
                        const N = Ot(T.placement);
                        return N === p || N === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((N) => N > 0)
                          .reduce((N, M) => N + M, 0),
                      ])
                      .sort((T, N) => T[1] - N[1])[0]) == null
                      ? void 0
                      : Q[0];
                  W && ($ = W);
                  break;
                }
                case "initialPlacement":
                  $ = l;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Yd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xd(e) {
  return Ex.some((t) => e[t] >= 0);
}
const Ix = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Gt(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Zo(t, { ...o, elementContext: "reference" }),
                s = Yd(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Xd(s) },
              };
            }
            case "escaped": {
              const i = await Zo(t, { ...o, altBoundary: !0 }),
                s = Yd(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Xd(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Om = new Set(["left", "top"]);
async function Dx(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Yt(n),
    l = io(n),
    a = Ot(n) === "y",
    u = Om.has(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    f = Gt(t, e);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: x,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof x == "number" && (d = l === "end" ? x * -1 : x),
    a ? { x: d * c, y: h * u } : { x: h * u, y: d * c }
  );
}
const zx = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await Dx(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Fx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: m, y: p } = w;
                  return { x: m, y: p };
                },
              },
              ...a
            } = Gt(e, t),
            u = { x: n, y: r },
            c = await Zo(t, a),
            f = Ot(Yt(o)),
            h = oc(f);
          let d = u[h],
            x = u[f];
          if (i) {
            const w = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = d + c[w],
              v = d - c[m];
            d = Ya(p, d, v);
          }
          if (s) {
            const w = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = x + c[w],
              v = x - c[m];
            x = Ya(p, x, v);
          }
          const g = l.fn({ ...t, [h]: d, [f]: x });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [h]: i, [f]: s } },
          };
        },
      }
    );
  },
  $x = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Gt(e, t),
            c = { x: n, y: r },
            f = Ot(o),
            h = oc(f);
          let d = c[h],
            x = c[f];
          const g = Gt(l, t),
            w =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const v = h === "y" ? "height" : "width",
              S = i.reference[h] - i.floating[v] + w.mainAxis,
              C = i.reference[h] + i.reference[v] - w.mainAxis;
            d < S ? (d = S) : d > C && (d = C);
          }
          if (u) {
            var m, p;
            const v = h === "y" ? "width" : "height",
              S = Om.has(Yt(o)),
              C =
                i.reference[f] -
                i.floating[v] +
                ((S && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
                (S ? 0 : w.crossAxis),
              k =
                i.reference[f] +
                i.reference[v] +
                (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
                (S ? w.crossAxis : 0);
            x < C ? (x = C) : x > k && (x = k);
          }
          return { [h]: d, [f]: x };
        },
      }
    );
  },
  Ux = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Gt(e, t),
            c = await Zo(t, u),
            f = Yt(o),
            h = io(o),
            d = Ot(o) === "y",
            { width: x, height: g } = i.floating;
          let w, m;
          f === "top" || f === "bottom"
            ? ((w = f),
              (m =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (w = h === "end" ? "top" : "bottom"));
          const p = g - c.top - c.bottom,
            v = x - c.left - c.right,
            S = Ln(g - c[w], p),
            C = Ln(x - c[m], v),
            k = !t.middlewareData.shift;
          let b = S,
            R = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = p),
            k && !h)
          ) {
            const A = Qe(c.left, 0),
              F = Qe(c.right, 0),
              D = Qe(c.top, 0),
              Q = Qe(c.bottom, 0);
            d
              ? (R = x - 2 * (A !== 0 || F !== 0 ? A + F : Qe(c.left, c.right)))
              : (b =
                  g - 2 * (D !== 0 || Q !== 0 ? D + Q : Qe(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: b });
          const L = await s.getDimensions(l.floating);
          return x !== L.width || g !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function rl() {
  return typeof window < "u";
}
function so(e) {
  return _m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Mt(e) {
  var t;
  return (t = (_m(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function _m(e) {
  return rl() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function Et(e) {
  return rl() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function jt(e) {
  return rl() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function qd(e) {
  return !rl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
const Bx = new Set(["inline", "contents"]);
function pi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Bx.has(o);
}
const Wx = new Set(["table", "td", "th"]);
function Vx(e) {
  return Wx.has(so(e));
}
const Hx = [":popover-open", ":modal"];
function ol(e) {
  return Hx.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Qx = ["transform", "translate", "scale", "rotate", "perspective"],
  Kx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Gx = ["paint", "layout", "strict", "content"];
function lc(e) {
  const t = ac(),
    n = Et(e) ? Ct(e) : e;
  return (
    Qx.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    Kx.some((r) => (n.willChange || "").includes(r)) ||
    Gx.some((r) => (n.contain || "").includes(r))
  );
}
function Yx(e) {
  let t = jn(e);
  for (; jt(t) && !Jr(t); ) {
    if (lc(t)) return t;
    if (ol(t)) return null;
    t = jn(t);
  }
  return null;
}
function ac() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Xx = new Set(["html", "body", "#document"]);
function Jr(e) {
  return Xx.has(so(e));
}
function Ct(e) {
  return Ye(e).getComputedStyle(e);
}
function il(e) {
  return Et(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function jn(e) {
  if (so(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (qd(e) && e.host) || Mt(e);
  return qd(t) ? t.host : t;
}
function Am(e) {
  const t = jn(e);
  return Jr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : jt(t) && pi(t)
    ? t
    : Am(t);
}
function Jo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Am(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ye(o);
  if (i) {
    const l = qa(s);
    return t.concat(
      s,
      s.visualViewport || [],
      pi(o) ? o : [],
      l && n ? Jo(l) : []
    );
  }
  return t.concat(o, Jo(o, [], n));
}
function qa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Lm(e) {
  const t = Ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = jt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Os(n) !== i || Os(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function uc(e) {
  return Et(e) ? e : e.contextElement;
}
function Dr(e) {
  const t = uc(e);
  if (!jt(t)) return Lt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Lm(t);
  let s = (i ? Os(n.width) : n.width) / r,
    l = (i ? Os(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const qx = Lt(0);
function jm(e) {
  const t = Ye(e);
  return !ac() || !t.visualViewport
    ? qx
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Zx(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ye(e)) ? !1 : t;
}
function ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = uc(e);
  let s = Lt(1);
  t && (r ? Et(r) && (s = Dr(r)) : (s = Dr(e)));
  const l = Zx(i, n, r) ? jm(i) : Lt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const h = Ye(i),
      d = r && Et(r) ? Ye(r) : r;
    let x = h,
      g = qa(x);
    for (; g && r && d !== x; ) {
      const w = Dr(g),
        m = g.getBoundingClientRect(),
        p = Ct(g),
        v = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x,
        S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (c *= w.x),
        (f *= w.y),
        (a += v),
        (u += S),
        (x = Ye(g)),
        (g = qa(x));
    }
  }
  return As({ width: c, height: f, x: a, y: u });
}
function cc(e, t) {
  const n = il(e).scrollLeft;
  return t ? t.left + n : ir(Mt(e)).left + n;
}
function Mm(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : cc(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function Jx(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Mt(r),
    l = t ? ol(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Lt(1);
  const c = Lt(0),
    f = jt(r);
  if (
    (f || (!f && !i)) &&
    ((so(r) !== "body" || pi(s)) && (a = il(r)), jt(r))
  ) {
    const d = ir(r);
    (u = Dr(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
  }
  const h = s && !f && !i ? Mm(s, a, !0) : Lt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
  };
}
function e1(e) {
  return Array.from(e.getClientRects());
}
function t1(e) {
  const t = Mt(e),
    n = il(e),
    r = e.ownerDocument.body,
    o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + cc(e);
  const l = -n.scrollTop;
  return (
    Ct(r).direction === "rtl" && (s += Qe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function n1(e, t) {
  const n = Ye(e),
    r = Mt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = ac();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const r1 = new Set(["absolute", "fixed"]);
function o1(e, t) {
  const n = ir(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = jt(e) ? Dr(e) : Lt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Zd(e, t, n) {
  let r;
  if (t === "viewport") r = n1(e, n);
  else if (t === "document") r = t1(Mt(e));
  else if (Et(t)) r = o1(t, n);
  else {
    const o = jm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return As(r);
}
function Im(e, t) {
  const n = jn(e);
  return n === t || !Et(n) || Jr(n)
    ? !1
    : Ct(n).position === "fixed" || Im(n, t);
}
function i1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Jo(e, [], !1).filter((l) => Et(l) && so(l) !== "body"),
    o = null;
  const i = Ct(e).position === "fixed";
  let s = i ? jn(e) : e;
  for (; Et(s) && !Jr(s); ) {
    const l = Ct(s),
      a = lc(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && r1.has(o.position)) ||
            (pi(s) && !a && Im(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = jn(s));
  }
  return t.set(e, r), r;
}
function s1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? ol(t)
          ? []
          : i1(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, c) => {
      const f = Zd(t, c, o);
      return (
        (u.top = Qe(f.top, u.top)),
        (u.right = Ln(f.right, u.right)),
        (u.bottom = Ln(f.bottom, u.bottom)),
        (u.left = Qe(f.left, u.left)),
        u
      );
    }, Zd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function l1(e) {
  const { width: t, height: n } = Lm(e);
  return { width: t, height: n };
}
function a1(e, t, n) {
  const r = jt(t),
    o = Mt(t),
    i = n === "fixed",
    s = ir(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Lt(0);
  function u() {
    a.x = cc(o);
  }
  if (r || (!r && !i))
    if (((so(t) !== "body" || pi(o)) && (l = il(t)), r)) {
      const d = ir(t, !0, i, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Mm(o, l) : Lt(0),
    f = s.left + l.scrollLeft - a.x - c.x,
    h = s.top + l.scrollTop - a.y - c.y;
  return { x: f, y: h, width: s.width, height: s.height };
}
function Ql(e) {
  return Ct(e).position === "static";
}
function Jd(e, t) {
  if (!jt(e) || Ct(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Mt(e) === n && (n = n.ownerDocument.body), n;
}
function Dm(e, t) {
  const n = Ye(e);
  if (ol(e)) return n;
  if (!jt(e)) {
    let o = jn(e);
    for (; o && !Jr(o); ) {
      if (Et(o) && !Ql(o)) return o;
      o = jn(o);
    }
    return n;
  }
  let r = Jd(e, t);
  for (; r && Vx(r) && Ql(r); ) r = Jd(r, t);
  return r && Jr(r) && Ql(r) && !lc(r) ? n : r || Yx(e) || n;
}
const u1 = async function (e) {
  const t = this.getOffsetParent || Dm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: a1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function c1(e) {
  return Ct(e).direction === "rtl";
}
const d1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jx,
  getDocumentElement: Mt,
  getClippingRect: s1,
  getOffsetParent: Dm,
  getElementRects: u1,
  getClientRects: e1,
  getDimensions: l1,
  getScale: Dr,
  isElement: Et,
  isRTL: c1,
};
function zm(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function f1(e, t) {
  let n = null,
    r;
  const o = Mt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: h, height: d } = u;
    if ((l || t(), !h || !d)) return;
    const x = $i(f),
      g = $i(o.clientWidth - (c + h)),
      w = $i(o.clientHeight - (f + d)),
      m = $i(c),
      v = {
        rootMargin: -x + "px " + -g + "px " + -w + "px " + -m + "px",
        threshold: Qe(0, Ln(1, a)) || 1,
      };
    let S = !0;
    function C(k) {
      const b = k[0].intersectionRatio;
      if (b !== a) {
        if (!S) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !zm(u, e.getBoundingClientRect()) && s(), (S = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function p1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = uc(e),
    c = o || i ? [...(u ? Jo(u) : []), ...Jo(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const f = u && l ? f1(u, n) : null;
  let h = -1,
    d = null;
  s &&
    ((d = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var v;
          (v = d) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && d.observe(u),
    d.observe(t));
  let x,
    g = a ? ir(e) : null;
  a && w();
  function w() {
    const m = ir(e);
    g && !zm(g, m) && n(), (g = m), (x = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = d) == null || m.disconnect(),
        (d = null),
        a && cancelAnimationFrame(x);
    }
  );
}
const h1 = zx,
  m1 = Fx,
  v1 = Mx,
  g1 = Ux,
  y1 = Ix,
  ef = jx,
  w1 = $x,
  x1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: d1, ...n },
      i = { ...o.platform, _c: r };
    return Lx(e, t, { ...o, platform: i });
  };
var S1 = typeof document < "u",
  E1 = function () {},
  rs = S1 ? y.useLayoutEffect : E1;
function Ls(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ls(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ls(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tf(e, t) {
  const n = Fm(e);
  return Math.round(t * n) / n;
}
function Kl(e) {
  const t = y.useRef(e);
  return (
    rs(() => {
      t.current = e;
    }),
    t
  );
}
function C1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, f] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, d] = y.useState(r);
  Ls(h, r) || d(r);
  const [x, g] = y.useState(null),
    [w, m] = y.useState(null),
    p = y.useCallback((T) => {
      T !== k.current && ((k.current = T), g(T));
    }, []),
    v = y.useCallback((T) => {
      T !== b.current && ((b.current = T), m(T));
    }, []),
    S = i || x,
    C = s || w,
    k = y.useRef(null),
    b = y.useRef(null),
    R = y.useRef(c),
    L = a != null,
    A = Kl(a),
    F = Kl(o),
    D = Kl(u),
    Q = y.useCallback(() => {
      if (!k.current || !b.current) return;
      const T = { placement: t, strategy: n, middleware: h };
      F.current && (T.platform = F.current),
        x1(k.current, b.current, T).then((N) => {
          const M = { ...N, isPositioned: D.current !== !1 };
          j.current &&
            !Ls(R.current, M) &&
            ((R.current = M),
            di.flushSync(() => {
              f(M);
            }));
        });
    }, [h, t, n, F, D]);
  rs(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const j = y.useRef(!1);
  rs(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    []
  ),
    rs(() => {
      if ((S && (k.current = S), C && (b.current = C), S && C)) {
        if (A.current) return A.current(S, C, Q);
        Q();
      }
    }, [S, C, Q, A, L]);
  const Y = y.useMemo(
      () => ({ reference: k, floating: b, setReference: p, setFloating: v }),
      [p, v]
    ),
    $ = y.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    W = y.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!$.floating) return T;
      const N = tf($.floating, c.x),
        M = tf($.floating, c.y);
      return l
        ? {
            ...T,
            transform: "translate(" + N + "px, " + M + "px)",
            ...(Fm($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: M };
    }, [n, l, $.floating, c.x, c.y]);
  return y.useMemo(
    () => ({ ...c, update: Q, refs: Y, elements: $, floatingStyles: W }),
    [c, Q, Y, $, W]
  );
}
const k1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ef({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? ef({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  b1 = (e, t) => ({ ...h1(e), options: [e, t] }),
  P1 = (e, t) => ({ ...m1(e), options: [e, t] }),
  T1 = (e, t) => ({ ...w1(e), options: [e, t] }),
  N1 = (e, t) => ({ ...v1(e), options: [e, t] }),
  R1 = (e, t) => ({ ...g1(e), options: [e, t] }),
  O1 = (e, t) => ({ ...y1(e), options: [e, t] }),
  _1 = (e, t) => ({ ...k1(e), options: [e, t] });
var A1 = "Arrow",
  $m = y.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return E.jsx(Ve.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
$m.displayName = A1;
var L1 = $m;
function j1(e) {
  const [t, n] = y.useState(void 0);
  return (
    An(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Um = "Popper",
  [Bm, Wm] = Js(Um),
  [QE, Vm] = Bm(Um),
  Hm = "PopperAnchor",
  Qm = y.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Vm(Hm, n),
      s = y.useRef(null),
      l = St(t, s);
    return (
      y.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : E.jsx(Ve.div, { ...o, ref: l })
    );
  });
Qm.displayName = Hm;
var dc = "PopperContent",
  [M1, I1] = Bm(dc),
  Km = y.forwardRef((e, t) => {
    var J, dr, qt, zn, Zt, fr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: x,
        ...g
      } = e,
      w = Vm(dc, n),
      [m, p] = y.useState(null),
      v = St(t, (Jt) => p(Jt)),
      [S, C] = y.useState(null),
      k = j1(S),
      b = (k == null ? void 0 : k.width) ?? 0,
      R = (k == null ? void 0 : k.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      D = F.length > 0,
      Q = { padding: A, boundary: F.filter(z1), altBoundary: D },
      {
        refs: j,
        floatingStyles: Y,
        placement: $,
        isPositioned: W,
        middlewareData: T,
      } = C1({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...Jt) =>
          p1(...Jt, { animationFrame: d === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          b1({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            P1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? T1() : void 0,
              ...Q,
            }),
          a && N1({ ...Q }),
          R1({
            ...Q,
            apply: ({
              elements: Jt,
              rects: vi,
              availableWidth: dl,
              availableHeight: gi,
            }) => {
              const { width: fl, height: ao } = vi.reference,
                pr = Jt.floating.style;
              pr.setProperty("--radix-popper-available-width", `${dl}px`),
                pr.setProperty("--radix-popper-available-height", `${gi}px`),
                pr.setProperty("--radix-popper-anchor-width", `${fl}px`),
                pr.setProperty("--radix-popper-anchor-height", `${ao}px`);
            },
          }),
          S && _1({ element: S, padding: l }),
          F1({ arrowWidth: b, arrowHeight: R }),
          h && O1({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [N, M] = Xm($),
      V = _n(x);
    An(() => {
      W && (V == null || V());
    }, [W, V]);
    const z = (J = T.arrow) == null ? void 0 : J.x,
      K = (dr = T.arrow) == null ? void 0 : dr.y,
      X = ((qt = T.arrow) == null ? void 0 : qt.centerOffset) !== 0,
      [he, be] = y.useState();
    return (
      An(() => {
        m && be(window.getComputedStyle(m).zIndex);
      }, [m]),
      E.jsx("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: W ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (zn = T.transformOrigin) == null ? void 0 : zn.x,
            (Zt = T.transformOrigin) == null ? void 0 : Zt.y,
          ].join(" "),
          ...(((fr = T.hide) == null ? void 0 : fr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: E.jsx(M1, {
          scope: n,
          placedSide: N,
          onArrowChange: C,
          arrowX: z,
          arrowY: K,
          shouldHideArrow: X,
          children: E.jsx(Ve.div, {
            "data-side": N,
            "data-align": M,
            ...g,
            ref: v,
            style: { ...g.style, animation: W ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Km.displayName = dc;
var Gm = "PopperArrow",
  D1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ym = y.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = I1(Gm, r),
      s = D1[i.placedSide];
    return E.jsx("span", {
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
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: E.jsx(L1, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Ym.displayName = Gm;
function z1(e) {
  return e !== null;
}
var F1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = Xm(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
      d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
    let x = "",
      g = "";
    return (
      u === "bottom"
        ? ((x = s ? f : `${h}px`), (g = `${-a}px`))
        : u === "top"
        ? ((x = s ? f : `${h}px`), (g = `${r.floating.height + a}px`))
        : u === "right"
        ? ((x = `${-a}px`), (g = s ? f : `${d}px`))
        : u === "left" &&
          ((x = `${r.floating.width + a}px`), (g = s ? f : `${d}px`)),
      { data: { x, y: g } }
    );
  },
});
function Xm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var $1 = Qm,
  U1 = Km,
  B1 = Ym,
  [sl, KE] = Js("Tooltip", [Wm]),
  fc = Wm(),
  qm = "TooltipProvider",
  W1 = 700,
  nf = "tooltip.open",
  [V1, Zm] = sl(qm),
  Jm = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = W1,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = y.useRef(!0),
      l = y.useRef(!1),
      a = y.useRef(0);
    return (
      y.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      E.jsx(V1, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: y.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: y.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: y.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Jm.displayName = qm;
var ev = "Tooltip",
  [GE, ll] = sl(ev),
  Za = "TooltipTrigger",
  H1 = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ll(Za, n),
      i = Zm(Za, n),
      s = fc(n),
      l = y.useRef(null),
      a = St(t, l, o.onTriggerChange),
      u = y.useRef(!1),
      c = y.useRef(!1),
      f = y.useCallback(() => (u.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      E.jsx($1, {
        asChild: !0,
        ...s,
        children: E.jsx(Ve.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ye(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ye(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ye(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ye(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ye(e.onBlur, o.onClose),
          onClick: ye(e.onClick, o.onClose),
        }),
      })
    );
  });
H1.displayName = Za;
var Q1 = "TooltipPortal",
  [YE, K1] = sl(Q1, { forceMount: void 0 }),
  eo = "TooltipContent",
  tv = y.forwardRef((e, t) => {
    const n = K1(eo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = ll(eo, e.__scopeTooltip);
    return E.jsx(Ju, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? E.jsx(nv, { side: o, ...i, ref: t })
        : E.jsx(G1, { side: o, ...i, ref: t }),
    });
  }),
  G1 = y.forwardRef((e, t) => {
    const n = ll(eo, e.__scopeTooltip),
      r = Zm(eo, e.__scopeTooltip),
      o = y.useRef(null),
      i = St(t, o),
      [s, l] = y.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: f } = r,
      h = y.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      d = y.useCallback(
        (x, g) => {
          const w = x.currentTarget,
            m = { x: x.clientX, y: x.clientY },
            p = J1(m, w.getBoundingClientRect()),
            v = eS(m, p),
            S = tS(g.getBoundingClientRect()),
            C = rS([...v, ...S]);
          l(C), f(!0);
        },
        [f]
      );
    return (
      y.useEffect(() => () => h(), [h]),
      y.useEffect(() => {
        if (a && c) {
          const x = (w) => d(w, c),
            g = (w) => d(w, a);
          return (
            a.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", g),
            () => {
              a.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [a, c, d, h]),
      y.useEffect(() => {
        if (s) {
          const x = (g) => {
            const w = g.target,
              m = { x: g.clientX, y: g.clientY },
              p =
                (a == null ? void 0 : a.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              v = !nS(m, s);
            p ? h() : v && (h(), u());
          };
          return (
            document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
          );
        }
      }, [a, c, s, u, h]),
      E.jsx(nv, { ...e, ref: i })
    );
  }),
  [Y1, X1] = sl(ev, { isInside: !1 }),
  q1 = f0("TooltipContent"),
  nv = y.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = ll(eo, n),
      u = fc(n),
      { onClose: c } = a;
    return (
      y.useEffect(
        () => (
          document.addEventListener(nf, c),
          () => document.removeEventListener(nf, c)
        ),
        [c]
      ),
      y.useEffect(() => {
        if (a.trigger) {
          const f = (h) => {
            const d = h.target;
            d != null && d.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      E.jsx(Zu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: E.jsxs(U1, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            E.jsx(q1, { children: r }),
            E.jsx(Y1, {
              scope: n,
              isInside: !0,
              children: E.jsx(D0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
tv.displayName = eo;
var rv = "TooltipArrow",
  Z1 = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = fc(n);
    return X1(rv, n).isInside ? null : E.jsx(B1, { ...o, ...r, ref: t });
  });
Z1.displayName = rv;
function J1(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function eS(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function tS(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function nS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      c = l.y,
      f = a.x,
      h = a.y;
    c > r != h > r && n < ((f - u) * (r - c)) / (h - c) + u && (o = !o);
  }
  return o;
}
function rS(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    oS(t)
  );
}
function oS(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var iS = Jm,
  ov = tv;
const sS = iS,
  lS = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    E.jsx(ov, {
      ref: r,
      sideOffset: t,
      className: ar(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
lS.displayName = ov.displayName;
var al = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ul = typeof window > "u" || "Deno" in globalThis;
function pt() {}
function aS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function cS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ja(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== pc(s, t.options)) return !1;
    } else if (!ti(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function of(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ei(t.options.mutationKey) !== ei(i)) return !1;
    } else if (!ti(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function pc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ei)(e);
}
function ei(e) {
  return JSON.stringify(e, (t, n) =>
    eu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function ti(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => ti(e[n], t[n]))
    : !1;
}
function iv(e, t) {
  if (e === t) return e;
  const n = sf(e) && sf(t);
  if (n || (eu(e) && eu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const f = n ? c : i[c];
      ((!n && a.has(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((l[f] = void 0), u++)
        : ((l[f] = iv(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function sf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function eu(e) {
  if (!lf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !lf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function lf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function fS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function pS(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? iv(e, t)
    : t;
}
function hS(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function mS(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var hc = Symbol();
function sv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === hc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Qn,
  fn,
  zr,
  xf,
  vS =
    ((xf = class extends al {
      constructor() {
        super();
        Z(this, Qn);
        Z(this, fn);
        Z(this, zr);
        B(this, zr, (t) => {
          if (!ul && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, fn) || this.setEventListener(P(this, zr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, fn)) == null || t.call(this), B(this, fn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, zr, t),
          (n = P(this, fn)) == null || n.call(this),
          B(
            this,
            fn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, Qn) !== t && (B(this, Qn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Qn) == "boolean"
          ? P(this, Qn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Qn = new WeakMap()),
    (fn = new WeakMap()),
    (zr = new WeakMap()),
    xf),
  lv = new vS(),
  Fr,
  pn,
  $r,
  Sf,
  gS =
    ((Sf = class extends al {
      constructor() {
        super();
        Z(this, Fr, !0);
        Z(this, pn);
        Z(this, $r);
        B(this, $r, (t) => {
          if (!ul && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, pn) || this.setEventListener(P(this, $r));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, pn)) == null || t.call(this), B(this, pn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, $r, t),
          (n = P(this, pn)) == null || n.call(this),
          B(this, pn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, Fr) !== t &&
          (B(this, Fr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, Fr);
      }
    }),
    (Fr = new WeakMap()),
    (pn = new WeakMap()),
    ($r = new WeakMap()),
    Sf),
  js = new gS();
function yS() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function wS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function av(e) {
  return (e ?? "online") === "online" ? js.isOnline() : !0;
}
var uv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Gl(e) {
  return e instanceof uv;
}
function cv(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = yS(),
    s = (g) => {
      var w;
      r || (h(new uv(g)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      lv.isFocused() &&
      (e.networkMode === "always" || js.isOnline()) &&
      e.canRun(),
    c = () => av(e.networkMode) && e.canRun(),
    f = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, g),
        o == null || o(),
        i.resolve(g));
    },
    h = (g) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, g),
        o == null || o(),
        i.reject(g));
    },
    d = () =>
      new Promise((g) => {
        var w;
        (o = (m) => {
          (r || u()) && g(m);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var g;
        (o = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    x = () => {
      if (r) return;
      let g;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        g = w ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(f)
        .catch((m) => {
          var k;
          if (r) return;
          const p = e.retry ?? (ul ? 0 : 3),
            v = e.retryDelay ?? wS,
            S = typeof v == "function" ? v(n, m) : v,
            C =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !C) {
            h(m);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, m),
            fS(S)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                t ? h(m) : x();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? x() : d().then(x), i),
  };
}
var xS = (e) => setTimeout(e, 0);
function SS() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = xS;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var je = SS(),
  Kn,
  Ef,
  dv =
    ((Ef = class {
      constructor() {
        Z(this, Kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          uS(this.gcTime) &&
            B(
              this,
              Kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ul ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, Kn) && (clearTimeout(P(this, Kn)), B(this, Kn, void 0));
      }
    }),
    (Kn = new WeakMap()),
    Ef),
  Ur,
  Gn,
  et,
  Yn,
  Re,
  oi,
  Xn,
  ht,
  Dt,
  Cf,
  ES =
    ((Cf = class extends dv {
      constructor(t) {
        super();
        Z(this, ht);
        Z(this, Ur);
        Z(this, Gn);
        Z(this, et);
        Z(this, Yn);
        Z(this, Re);
        Z(this, oi);
        Z(this, Xn);
        B(this, Xn, !1),
          B(this, oi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          B(this, Yn, t.client),
          B(this, et, P(this, Yn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          B(this, Ur, kS(this.options)),
          (this.state = t.state ?? P(this, Ur)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Re)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, oi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, et).remove(this);
      }
      setData(t, n) {
        const r = pS(this.state.data, t, this.options);
        return (
          Pe(this, ht, Dt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Pe(this, ht, Dt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, Re)) == null ? void 0 : r.promise;
        return (
          (o = P(this, Re)) == null || o.cancel(t),
          n ? n.then(pt).catch(pt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, Ur));
      }
      isActive() {
        return this.observers.some((t) => dS(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === hc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Ja(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !cS(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Re)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Re)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, et).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Re) &&
              (P(this, Xn)
                ? P(this, Re).cancel({ revert: !0 })
                : P(this, Re).cancelRetry()),
            this.scheduleGc()),
          P(this, et).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Pe(this, ht, Dt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Re))
            return P(this, Re).continueRetry(), P(this, Re).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((d) => d.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          o = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (B(this, Xn, !0), r.signal),
            });
          },
          i = () => {
            const h = sv(this.options, n),
              x = (() => {
                const g = {
                  client: P(this, Yn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(g), g;
              })();
            return (
              B(this, Xn, !1),
              this.options.persister ? this.options.persister(h, x, this) : h(x)
            );
          },
          l = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Yn),
              state: this.state,
              fetchFn: i,
            };
            return o(h), h;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          B(this, Gn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
            Pe(this, ht, Dt).call(this, {
              type: "fetch",
              meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
            });
        const a = (h) => {
          var d, x, g, w;
          (Gl(h) && h.silent) ||
            Pe(this, ht, Dt).call(this, { type: "error", error: h }),
            Gl(h) ||
              ((x = (d = P(this, et).config).onError) == null ||
                x.call(d, h, this),
              (w = (g = P(this, et).config).onSettled) == null ||
                w.call(g, this.state.data, h, this)),
            this.scheduleGc();
        };
        return (
          B(
            this,
            Re,
            cv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var d, x, g, w;
                if (h === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (m) {
                  a(m);
                  return;
                }
                (x = (d = P(this, et).config).onSuccess) == null ||
                  x.call(d, h, this),
                  (w = (g = P(this, et).config).onSettled) == null ||
                    w.call(g, h, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (h, d) => {
                Pe(this, ht, Dt).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: d,
                });
              },
              onPause: () => {
                Pe(this, ht, Dt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Pe(this, ht, Dt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, Re).start()
        );
      }
    }),
    (Ur = new WeakMap()),
    (Gn = new WeakMap()),
    (et = new WeakMap()),
    (Yn = new WeakMap()),
    (Re = new WeakMap()),
    (oi = new WeakMap()),
    (Xn = new WeakMap()),
    (ht = new WeakSet()),
    (Dt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...CS(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              B(this, Gn, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return Gl(o) && o.revert && P(this, Gn)
              ? { ...P(this, Gn), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        je.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, et).notify({ query: this, type: "updated", action: t });
        });
    }),
    Cf);
function CS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: av(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function kS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Pt,
  kf,
  bS =
    ((kf = class extends al {
      constructor(t = {}) {
        super();
        Z(this, Pt);
        (this.config = t), B(this, Pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? pc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new ES({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, Pt).has(t.queryHash) ||
          (P(this, Pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, Pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, Pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, Pt).get(t);
      }
      getAll() {
        return [...P(this, Pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => rf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => rf(t, r)) : n;
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Pt = new WeakMap()),
    kf),
  Tt,
  Ae,
  qn,
  Nt,
  ln,
  bf,
  PS =
    ((bf = class extends dv {
      constructor(t) {
        super();
        Z(this, Nt);
        Z(this, Tt);
        Z(this, Ae);
        Z(this, qn);
        (this.mutationId = t.mutationId),
          B(this, Ae, t.mutationCache),
          B(this, Tt, []),
          (this.state = t.state || TS()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Tt).includes(t) ||
          (P(this, Tt).push(t),
          this.clearGcTimeout(),
          P(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        B(
          this,
          Tt,
          P(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ae).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, qn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, c, f, h, d, x, g, w, m, p, v, S, C, k, b, R;
        const n = () => {
          Pe(this, Nt, ln).call(this, { type: "continue" });
        };
        B(
          this,
          qn,
          cv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (L, A) => {
              Pe(this, Nt, ln).call(this, {
                type: "failed",
                failureCount: L,
                error: A,
              });
            },
            onPause: () => {
              Pe(this, Nt, ln).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ae).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !P(this, qn).canStart();
        try {
          if (r) n();
          else {
            Pe(this, Nt, ln).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = P(this, Ae).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const A = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            A !== this.state.context &&
              Pe(this, Nt, ln).call(this, {
                type: "pending",
                context: A,
                variables: t,
                isPaused: o,
              });
          }
          const L = await P(this, qn).start();
          return (
            await ((c = (u = P(this, Ae).config).onSuccess) == null
              ? void 0
              : c.call(u, L, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null
              ? void 0
              : h.call(f, L, t, this.state.context)),
            await ((x = (d = P(this, Ae).config).onSettled) == null
              ? void 0
              : x.call(
                  d,
                  L,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (g = this.options).onSettled) == null
              ? void 0
              : w.call(g, L, null, t, this.state.context)),
            Pe(this, Nt, ln).call(this, { type: "success", data: L }),
            L
          );
        } catch (L) {
          try {
            throw (
              (await ((p = (m = P(this, Ae).config).onError) == null
                ? void 0
                : p.call(m, L, t, this.state.context, this)),
              await ((S = (v = this.options).onError) == null
                ? void 0
                : S.call(v, L, t, this.state.context)),
              await ((k = (C = P(this, Ae).config).onSettled) == null
                ? void 0
                : k.call(
                    C,
                    void 0,
                    L,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (b = this.options).onSettled) == null
                ? void 0
                : R.call(b, void 0, L, t, this.state.context)),
              L)
            );
          } finally {
            Pe(this, Nt, ln).call(this, { type: "error", error: L });
          }
        } finally {
          P(this, Ae).runNext(this);
        }
      }
    }),
    (Tt = new WeakMap()),
    (Ae = new WeakMap()),
    (qn = new WeakMap()),
    (Nt = new WeakSet()),
    (ln = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        je.batch(() => {
          P(this, Tt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ae).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    bf);
function TS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var $t,
  mt,
  ii,
  Pf,
  NS =
    ((Pf = class extends al {
      constructor(t = {}) {
        super();
        Z(this, $t);
        Z(this, mt);
        Z(this, ii);
        (this.config = t),
          B(this, $t, new Set()),
          B(this, mt, new Map()),
          B(this, ii, 0);
      }
      build(t, n, r) {
        const o = new PS({
          mutationCache: this,
          mutationId: ++wi(this, ii)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        P(this, $t).add(t);
        const n = Ui(t);
        if (typeof n == "string") {
          const r = P(this, mt).get(n);
          r ? r.push(t) : P(this, mt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, $t).delete(t)) {
          const n = Ui(t);
          if (typeof n == "string") {
            const r = P(this, mt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, mt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Ui(t);
        if (typeof n == "string") {
          const r = P(this, mt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Ui(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, mt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        je.batch(() => {
          P(this, $t).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, $t).clear(),
            P(this, mt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, $t));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => of(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => of(t, n));
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return je.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(pt)))
        );
      }
    }),
    ($t = new WeakMap()),
    (mt = new WeakMap()),
    (ii = new WeakMap()),
    Pf);
function Ui(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function af(e) {
  return {
    onFetch: (t, n) => {
      var c, f, h, d, x;
      const r = t.options,
        o =
          (h =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let g = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = sv(t.options, t.fetchOptions),
          p = async (v, S, C) => {
            if (g) return Promise.reject();
            if (S == null && v.pages.length) return Promise.resolve(v);
            const b = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w(F), F;
              })(),
              R = await m(b),
              { maxPages: L } = t.options,
              A = C ? mS : hS;
            return {
              pages: A(v.pages, R, L),
              pageParams: A(v.pageParams, S, L),
            };
          };
        if (o && i.length) {
          const v = o === "backward",
            S = v ? RS : uf,
            C = { pages: i, pageParams: s },
            k = S(r, C);
          l = await p(C, k, v);
        } else {
          const v = e ?? i.length;
          do {
            const S = a === 0 ? s[0] ?? r.initialPageParam : uf(r, l);
            if (a > 0 && S == null) break;
            (l = await p(l, S)), a++;
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, w;
            return (w = (g = t.options).persister) == null
              ? void 0
              : w.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function uf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function RS(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var de,
  hn,
  mn,
  Br,
  Wr,
  vn,
  Vr,
  Hr,
  Tf,
  OS =
    ((Tf = class {
      constructor(e = {}) {
        Z(this, de);
        Z(this, hn);
        Z(this, mn);
        Z(this, Br);
        Z(this, Wr);
        Z(this, vn);
        Z(this, Vr);
        Z(this, Hr);
        B(this, de, e.queryCache || new bS()),
          B(this, hn, e.mutationCache || new NS()),
          B(this, mn, e.defaultOptions || {}),
          B(this, Br, new Map()),
          B(this, Wr, new Map()),
          B(this, vn, 0);
      }
      mount() {
        wi(this, vn)._++,
          P(this, vn) === 1 &&
            (B(
              this,
              Vr,
              lv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, de).onFocus());
              })
            ),
            B(
              this,
              Hr,
              js.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, de).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        wi(this, vn)._--,
          P(this, vn) === 0 &&
            ((e = P(this, Vr)) == null || e.call(this),
            B(this, Vr, void 0),
            (t = P(this, Hr)) == null || t.call(this),
            B(this, Hr, void 0));
      }
      isFetching(e) {
        return P(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, hn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, de).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, de).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Ja(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, de)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, de).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = aS(t, i);
        if (s !== void 0)
          return P(this, de)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return je.batch(() =>
          P(this, de)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, de);
        je.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, de);
        return je.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = je.batch(() =>
            P(this, de)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(pt).catch(pt);
      }
      invalidateQueries(e, t = {}) {
        return je.batch(
          () => (
            P(this, de)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = je.batch(() =>
            P(this, de)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(pt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(pt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, de).build(this, t);
        return n.isStaleByTime(Ja(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = af(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = af(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return js.isOnline()
          ? P(this, hn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, de);
      }
      getMutationCache() {
        return P(this, hn);
      }
      getDefaultOptions() {
        return P(this, mn);
      }
      setDefaultOptions(e) {
        B(this, mn, e);
      }
      setQueryDefaults(e, t) {
        P(this, Br).set(ei(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Br).values()],
          n = {};
        return (
          t.forEach((r) => {
            ti(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, Wr).set(ei(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, Wr).values()],
          n = {};
        return (
          t.forEach((r) => {
            ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, mn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = pc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === hc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, mn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, de).clear(), P(this, hn).clear();
      }
    }),
    (de = new WeakMap()),
    (hn = new WeakMap()),
    (mn = new WeakMap()),
    (Br = new WeakMap()),
    (Wr = new WeakMap()),
    (vn = new WeakMap()),
    (Vr = new WeakMap()),
    (Hr = new WeakMap()),
    Tf),
  _S = y.createContext(void 0),
  AS = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    E.jsx(_S.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ni.apply(this, arguments)
  );
}
var wn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(wn || (wn = {}));
const cf = "popstate";
function LS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return tu(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Ms(o);
  }
  return MS(t, n, null, e);
}
function ve(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jS() {
  return Math.random().toString(36).substr(2, 8);
}
function df(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ni(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? lo(t) : t,
      { state: n, key: (t && t.key) || r || jS() }
    )
  );
}
function Ms(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function lo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function MS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = wn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(ni({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = wn.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: g.location, delta: m });
  }
  function h(w, m) {
    l = wn.Push;
    let p = tu(g.location, w, m);
    u = c() + 1;
    let v = df(p, u),
      S = g.createHref(p);
    try {
      s.pushState(v, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    i && a && a({ action: l, location: g.location, delta: 1 });
  }
  function d(w, m) {
    l = wn.Replace;
    let p = tu(g.location, w, m);
    u = c();
    let v = df(p, u),
      S = g.createHref(p);
    s.replaceState(v, "", S),
      i && a && a({ action: l, location: g.location, delta: 0 });
  }
  function x(w) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof w == "string" ? w : Ms(w);
    return (
      (p = p.replace(/ $/, "%20")),
      ve(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let g = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(cf, f),
        (a = w),
        () => {
          o.removeEventListener(cf, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: x,
    encodeLocation(w) {
      let m = x(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: d,
    go(w) {
      return s.go(w);
    },
  };
  return g;
}
var ff;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ff || (ff = {}));
function IS(e, t, n) {
  return n === void 0 && (n = "/"), DS(e, t, n, !1);
}
function DS(e, t, n, r) {
  let o = typeof t == "string" ? lo(t) : t,
    i = mc(o.pathname || "/", n);
  if (i == null) return null;
  let s = pv(e);
  zS(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = YS(i);
    l = KS(s[a], u, r);
  }
  return l;
}
function pv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ve(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Nn([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ve(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      pv(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: HS(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of hv(i.path)) o(i, s, a);
    }),
    t
  );
}
function hv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = hv(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function zS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : QS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const FS = /^:[\w-]+$/,
  $S = 3,
  US = 2,
  BS = 1,
  WS = 10,
  VS = -2,
  pf = (e) => e === "*";
function HS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pf) && (r += VS),
    t && (r += US),
    n
      .filter((o) => !pf(o))
      .reduce((o, i) => o + (FS.test(i) ? $S : i === "" ? BS : WS), r)
  );
}
function QS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function KS(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = hf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      h = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = hf(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Nn([i, f.pathname]),
        pathnameBase: JS(Nn([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = Nn([i, f.pathnameBase]));
  }
  return s;
}
function hf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = GS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: d } = c;
      if (h === "*") {
        let g = l[f] || "";
        s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = l[f];
      return (
        d && !x ? (u[h] = void 0) : (u[h] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function GS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function YS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      fv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function mc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function XS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? lo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qS(n, t)) : t,
    search: eE(r),
    hash: tE(o),
  };
}
function qS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ZS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function mv(e, t) {
  let n = ZS(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function vv(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = lo(e))
    : ((o = ni({}, e)),
      ve(
        !o.pathname || !o.pathname.includes("?"),
        Yl("?", "pathname", "search", o)
      ),
      ve(
        !o.pathname || !o.pathname.includes("#"),
        Yl("#", "pathname", "hash", o)
      ),
      ve(!o.search || !o.search.includes("#"), Yl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = XS(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Nn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  JS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  tE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function nE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const gv = ["post", "put", "patch", "delete"];
new Set(gv);
const rE = ["get", ...gv];
new Set(rE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ri() {
  return (
    (ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ri.apply(this, arguments)
  );
}
const vc = y.createContext(null),
  oE = y.createContext(null),
  ur = y.createContext(null),
  cl = y.createContext(null),
  cr = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  yv = y.createContext(null);
function iE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  hi() || ve(!1);
  let { basename: r, navigator: o } = y.useContext(ur),
    { hash: i, pathname: s, search: l } = xv(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Nn([r, s])),
    o.createHref({ pathname: a, search: l, hash: i })
  );
}
function hi() {
  return y.useContext(cl) != null;
}
function mi() {
  return hi() || ve(!1), y.useContext(cl).location;
}
function wv(e) {
  y.useContext(ur).static || y.useLayoutEffect(e);
}
function sE() {
  let { isDataRoute: e } = y.useContext(cr);
  return e ? wE() : lE();
}
function lE() {
  hi() || ve(!1);
  let e = y.useContext(vc),
    { basename: t, future: n, navigator: r } = y.useContext(ur),
    { matches: o } = y.useContext(cr),
    { pathname: i } = mi(),
    s = JSON.stringify(mv(o, n.v7_relativeSplatPath)),
    l = y.useRef(!1);
  return (
    wv(() => {
      l.current = !0;
    }),
    y.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = vv(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Nn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function xv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(ur),
    { matches: o } = y.useContext(cr),
    { pathname: i } = mi(),
    s = JSON.stringify(mv(o, r.v7_relativeSplatPath));
  return y.useMemo(() => vv(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function aE(e, t) {
  return uE(e, t);
}
function uE(e, t, n, r) {
  hi() || ve(!1);
  let { navigator: o } = y.useContext(ur),
    { matches: i } = y.useContext(cr),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = mi(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? lo(t) : t;
    a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || ve(!1),
      (c = w);
  } else c = u;
  let h = c.pathname || "/",
    d = h;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    d = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let x = IS(e, { pathname: d }),
    g = hE(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Nn([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Nn([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? y.createElement(
        cl.Provider,
        {
          value: {
            location: ri(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: wn.Pop,
          },
        },
        g
      )
    : g;
}
function cE() {
  let e = yE(),
    t = nE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null
  );
}
const dE = y.createElement(cE, null);
class fE extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          cr.Provider,
          { value: this.props.routeContext },
          y.createElement(yv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function pE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(vc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(cr.Provider, { value: t }, r)
  );
}
function hE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    c >= 0 || ve(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: h, errors: d } = n,
          x =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!d || d[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, h) => {
    let d,
      x = !1,
      g = null,
      w = null;
    n &&
      ((d = l && f.route.id ? l[f.route.id] : void 0),
      (g = f.route.errorElement || dE),
      a &&
        (u < 0 && h === 0
          ? ((x = !0), (w = null))
          : u === h &&
            ((x = !0), (w = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, h + 1)),
      p = () => {
        let v;
        return (
          d
            ? (v = g)
            : x
            ? (v = w)
            : f.route.Component
            ? (v = y.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = c),
          y.createElement(pE, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? y.createElement(fE, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: d,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Sv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Sv || {}),
  Is = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Is || {});
function mE(e) {
  let t = y.useContext(vc);
  return t || ve(!1), t;
}
function vE(e) {
  let t = y.useContext(oE);
  return t || ve(!1), t;
}
function gE(e) {
  let t = y.useContext(cr);
  return t || ve(!1), t;
}
function Ev(e) {
  let t = gE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ve(!1), n.route.id;
}
function yE() {
  var e;
  let t = y.useContext(yv),
    n = vE(Is.UseRouteError),
    r = Ev(Is.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function wE() {
  let { router: e } = mE(Sv.UseNavigateStable),
    t = Ev(Is.UseNavigateStable),
    n = y.useRef(!1);
  return (
    wv(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ri({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function xE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function os(e) {
  ve(!1);
}
function SE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = wn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  hi() && ve(!1);
  let a = t.replace(/^\/*/, "/"),
    u = y.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: ri({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = lo(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: h = "",
      state: d = null,
      key: x = "default",
    } = r,
    g = y.useMemo(() => {
      let w = mc(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: d, key: x },
            navigationType: o,
          };
    }, [a, c, f, h, d, x, o]);
  return g == null
    ? null
    : y.createElement(
        ur.Provider,
        { value: u },
        y.createElement(cl.Provider, { children: n, value: g })
      );
}
function EE(e) {
  let { children: t, location: n } = e;
  return aE(nu(t), n);
}
new Promise(() => {});
function nu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, nu(r.props.children, i));
        return;
      }
      r.type !== os && ve(!1), !r.props.index || !r.props.children || ve(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = nu(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ru() {
  return (
    (ru = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ru.apply(this, arguments)
  );
}
function CE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function kE(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bE(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kE(e);
}
const PE = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  TE = "6";
try {
  window.__reactRouterVersion = TE;
} catch {}
const NE = "startTransition",
  mf = Ff[NE];
function RE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = LS({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = y.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = y.useCallback(
      (f) => {
        u && mf ? mf(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    y.useLayoutEffect(() => s.listen(c), [s, c]),
    y.useEffect(() => xE(r), [r]),
    y.createElement(SE, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const OE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _E = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  AE = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      h = CE(t, PE),
      { basename: d } = y.useContext(ur),
      x,
      g = !1;
    if (typeof u == "string" && _E.test(u) && ((x = u), OE))
      try {
        let v = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          C = mc(S.pathname, d);
        S.origin === v.origin && C != null
          ? (u = C + S.search + S.hash)
          : (g = !0);
      } catch {}
    let w = iE(u, { relative: o }),
      m = LE(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: o,
        viewTransition: f,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return y.createElement(
      "a",
      ru({}, h, { href: x || w, onClick: g || i ? r : p, ref: n, target: a })
    );
  });
var vf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vf || (vf = {}));
var gf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gf || (gf = {}));
function LE(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = sE(),
    u = mi(),
    c = xv(e, { relative: s });
  return y.useCallback(
    (f) => {
      if (bE(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Ms(u) === Ms(c);
        a(e, {
          replace: h,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l,
        });
      }
    },
    [u, a, c, r, o, n, e, i, s, l]
  );
}
const jE = [
    "2026 is ours.",
    "2026, we make history.",
    "Built for 2026 and beyond.",
    "The future starts in 2026.",
    "We rise together.",
    "One vision. One community.",
    "Together, unstoppable.",
    "Stronger as one.",
    "We're all gonna make it.",
    "Patience pays.",
    "Trust the process.",
    "Built, not hyped.",
    "Early, not late.",
    "This is just the beginning.",
    "From vision to reality.",
    "Conviction over noise.",
    "Believe. Build. Win.",
    "Eyes forward.",
    "No shortcuts.",
  ],
  yf = ({ direction: e = "left", position: t = "header" }) => {
    const n = jE.join(" • "),
      r =
        t === "header"
          ? "border-b-2 border-dashed border-foreground"
          : "border-t-2 border-dashed border-foreground";
    return E.jsx("div", {
      className: `w-full overflow-hidden bg-black ${r} py-5`,
      children: E.jsxs("div", {
        className: `flex whitespace-nowrap ${
          e === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`,
        style: { fontFamily: "'Orbitron', sans-serif" },
        children: [
          E.jsxs("span", {
            className:
              "text-foreground text-sm md:text-base tracking-wider px-4",
            style: { textShadow: "0 0 5px rgba(255,255,255,0.3)" },
            children: [n, " • ", n, " •"],
          }),
          E.jsxs("span", {
            className:
              "text-foreground text-sm md:text-base tracking-wider px-4",
            style: { textShadow: "0 0 5px rgba(255,255,255,0.3)" },
            children: [n, " • ", n, " •"],
          }),
        ],
      }),
    });
  },
  ME = [
    { name: "X", href: "https://x.com/newyear2026eth" },
    {
      name: "Telegram",
      href: "https://x.com/i/communities/1999647908522504425",
    },
    {
      name: "Dexscreener",
      href: "https://dexscreener.com/ethereum/0xcomingsoon",
    },
    {
      name: "Dextools",
      href: "https://www.dextools.io/app/ether/pair-explorer/0xcomingsoon",
    },
  ],
  wf = "0xcomingsoon",
  IE = [
    "/videos/vibe-1.mov",
    "/videos/vibe-2.mov",
    "/videos/vibe-3.mov",
    "/videos/vibe-4.mov",
    "/videos/vibe-5.mov",
    "/videos/vibe-6.mp4",
    "/videos/vibe-7.mov",
    "/videos/vibe-8.mp4",
    "/videos/vibe-9.mov",
    "/videos/vibe-10.mov",
    "/videos/vibe-11.mov",
    "/videos/vibe-12.mov",
    "/videos/vibe-13.mp4",
    "/videos/vibe-14.mov",
  ],
  DE = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(!0);
    y.useEffect(
      () => (
        n
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto"),
        () => {
          document.body.style.overflow = "auto";
        }
      ),
      [n]
    );
    const o = () => {
        r(!1);
      },
      i = async () => {
        await navigator.clipboard.writeText(wf),
          t(!0),
          setTimeout(() => t(!1), 2e3);
      };
    return E.jsxs("div", {
      className: "w-full border-4 border-dashed border-foreground",
      children: [
        E.jsx(yf, { direction: "left", position: "header" }),
        E.jsxs("div", {
          className: "min-h-screen relative flex flex-col justify-between",
          children: [
            E.jsx("video", {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: "fixed inset-0 w-full h-full -z-10 object-cover",
              src: "/videos/background-main.mp4",
            }),
            n &&
              E.jsx("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
                children: E.jsxs("div", {
                  className:
                    "relative w-[70%] max-h-[80vh] overflow-y-auto bg-black/90 backdrop-blur-sm border-2 border-foreground rounded-xl p-8 md:p-12",
                  children: [
                    E.jsx("button", {
                      onClick: o,
                      className:
                        "absolute top-4 right-4 text-foreground hover:text-foreground/70 transition-colors",
                      children: E.jsx(Rs, { size: 32 }),
                    }),
                    E.jsxs("div", {
                      className: "text-center font-mono space-y-6",
                      style: {
                        color: "#fff",
                        textShadow: "0 0 5px rgba(255,255,255,0.3)",
                      },
                      children: [
                        E.jsx("h2", {
                          className: "text-2xl md:text-3xl font-bold",
                          children:
                            "2026 will be the greatest year of our lives.",
                        }),
                        E.jsx("p", {
                          className: "text-base md:text-lg leading-relaxed",
                          children:
                            "In 2026, our portfolios will be at ATHs. Our network will be stronger than ever. In crypto, your network is everything and that's exactly why the 2026 community exists.",
                        }),
                        E.jsx("p", {
                          className: "text-base md:text-lg leading-relaxed",
                          children:
                            "This is not some short term coin. We will be here the entirety of 2026. Too many teams in this space give up on great coins and communities based on price action. This is so much more than just numbers on a screen. This is about building the largest community of people who want to better themselves and connect with likeminded people.",
                        }),
                        E.jsx("p", {
                          className: "text-base md:text-lg leading-relaxed",
                          children: "We build up together. We win together.",
                        }),
                        E.jsx("p", {
                          className: "text-xl md:text-2xl font-bold",
                          children: "2026 is our year",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            E.jsxs("div", {
              className:
                "flex justify-center gap-8 md:gap-12 p-8 flex-wrap pl-[1%]",
              children: [
                ME.map((s) =>
                  E.jsx(
                    "a",
                    {
                      href: s.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "px-10 py-5 border-2 border-dashed border-foreground rounded-xl text-foreground text-base md:text-lg tracking-wide hover:bg-foreground/10 transition-colors",
                      style: { fontFamily: "'Orbitron', sans-serif" },
                      children: s.name,
                    },
                    s.name
                  )
                ),
              ],
            }),
            E.jsx("div", {
              className: "flex justify-center p-8 pb-[15vh]",
              children: E.jsxs("button", {
                onClick: i,
                className:
                  "w-[90%] md:w-[65%] flex items-center justify-center gap-4 px-8 py-6 border-2 border-dashed border-foreground rounded-xl text-foreground font-mono text-sm md:text-lg tracking-wide hover:bg-foreground/10 transition-colors",
                children: [
                  E.jsx("span", { children: wf }),
                  e ? E.jsx(sw, { size: 24 }) : E.jsx(lw, { size: 24 }),
                ],
              }),
            }),
          ],
        }),
        E.jsxs("div", {
          className:
            "min-h-screen flex flex-col justify-center py-16 bg-black overflow-hidden",
          children: [
            E.jsx("h2", {
              className:
                "text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 animate-thunder-left",
              style: { fontFamily: "'Orbitron', sans-serif" },
              children: "2026 VIBES",
            }),
            E.jsx("div", {
              className: "relative w-full overflow-hidden",
              children: E.jsx("div", {
                className: "flex gap-6 animate-scroll-right",
                style: { width: "max-content" },
                children: IE.map((s, l) =>
                  E.jsx(
                    "div",
                    {
                      className:
                        "flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-xl overflow-hidden border-2 border-dashed border-foreground",
                      children: E.jsx("video", {
                        src: s,
                        controls: !0,
                        muted: !0,
                        className: "w-full h-full object-cover",
                        preload: "metadata",
                      }),
                    },
                    `video-${l}`
                  )
                ),
              }),
            }),
            E.jsx("h2", {
              className:
                "text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-12 animate-thunder-right",
              style: { fontFamily: "'Orbitron', sans-serif" },
              children: "2026 VIBES",
            }),
          ],
        }),
        E.jsx(yf, { direction: "right", position: "footer" }),
      ],
    });
  },
  zE = "/assets/weekly-challenge-title-Ce0Ge8h5.png",
  Bi = [
    {
      username: "@Grandyt55",
      xLink: "https://x.com/Grandyt55",
      prize: "2 ETH",
      videoUrl: "/videos/week1-winner.mp4",
      week: "Week 1",
    },
    {
      username: "TBA",
      xLink: "",
      prize: "? ETH",
      videoUrl: null,
      week: "Week 2",
    },
    {
      username: "TBA",
      xLink: "",
      prize: "? ETH",
      videoUrl: null,
      week: "Week 3",
    },
    {
      username: "TBA",
      xLink: "",
      prize: "? ETH",
      videoUrl: null,
      week: "Week 4",
    },
    {
      username: "TBA",
      xLink: "",
      prize: "? ETH",
      videoUrl: null,
      week: "Week 5",
    },
  ],
  FE = [...Bi, ...Bi, ...Bi, ...Bi],
  $E = () => {
    const [e, t] = y.useState(!0),
      [n, r] = y.useState(null);
    y.useEffect(
      () => (
        e || n
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto"),
        () => {
          document.body.style.overflow = "auto";
        }
      ),
      [e, n]
    );
    const o = () => {
        t(!1);
      },
      i = (s) => {
        s && r(s);
      };
    return E.jsxs("div", {
      className:
        "h-screen w-full bg-black border-4 border-dashed border-foreground flex flex-col overflow-hidden",
      children: [
        e &&
          E.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            children: E.jsxs("div", {
              className:
                "relative w-[70%] max-h-[80vh] overflow-y-auto bg-black/90 backdrop-blur-sm border-2 border-foreground rounded-xl p-8 md:p-12",
              children: [
                E.jsx("button", {
                  onClick: o,
                  className:
                    "absolute top-4 right-4 text-foreground hover:text-foreground/70 transition-colors",
                  children: E.jsx(Rs, { size: 32 }),
                }),
                E.jsxs("div", {
                  className: "text-center font-mono space-y-6",
                  style: {
                    color: "#fff",
                    textShadow: "0 0 5px rgba(255,255,255,0.3)",
                  },
                  children: [
                    E.jsx("h2", {
                      className: "text-2xl md:text-3xl font-bold",
                      children: "Welcome to $2026 weekly challenges.",
                    }),
                    E.jsx("p", {
                      className: "text-base md:text-lg leading-relaxed",
                      children:
                        "Follow our X to receive notifications of upcoming events.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        n &&
          E.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
            children: E.jsxs("div", {
              className:
                "relative w-[50%] max-h-[90vh] flex items-center justify-center",
              children: [
                E.jsx("button", {
                  onClick: () => r(null),
                  className:
                    "absolute -top-2 -right-2 z-10 text-foreground hover:text-foreground/70 transition-colors bg-black/50 rounded-full p-2",
                  children: E.jsx(Rs, { size: 28 }),
                }),
                E.jsx("video", {
                  src: n,
                  controls: !0,
                  autoPlay: !0,
                  className:
                    "max-w-full max-h-[90vh] rounded-xl border-2 border-dashed border-foreground",
                }),
              ],
            }),
          }),
        E.jsx("div", {
          className:
            "flex-1 flex flex-col justify-center -mt-[10%] overflow-hidden",
          children: E.jsx("div", {
            className: "relative w-full overflow-hidden",
            children: E.jsx("div", {
              className: "flex gap-8 animate-scroll-right",
              style: { width: "max-content" },
              children: FE.map((s, l) =>
                E.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center flex-shrink-0",
                    children: [
                      E.jsx("span", {
                        className:
                          "px-4 py-2 border-2 border-dashed border-foreground rounded-xl text-foreground text-sm md:text-base tracking-wide mb-3",
                        style: { fontFamily: "'Orbitron', sans-serif" },
                        children: s.week,
                      }),
                      E.jsx("div", {
                        className: `w-[160px] md:w-[200px] aspect-[9/16] rounded-xl overflow-hidden border-2 border-dashed border-foreground mb-3 ${
                          s.videoUrl
                            ? "cursor-pointer hover:border-foreground/70 transition-colors"
                            : ""
                        }`,
                        onClick: () => i(s.videoUrl),
                        children: s.videoUrl
                          ? E.jsx("video", {
                              src: s.videoUrl,
                              muted: !0,
                              loop: !0,
                              autoPlay: !0,
                              playsInline: !0,
                              className: "w-full h-full object-cover",
                              preload: "metadata",
                            })
                          : E.jsx("div", {
                              className:
                                "w-full h-full bg-black flex items-center justify-center",
                              children: E.jsx("pre", {
                                className:
                                  "text-foreground text-[6px] md:text-[8px] font-mono leading-none text-center whitespace-pre",
                                children: ` ██████   ██████  ██████   ██████ 
      ██ ██  ████      ██ ██       
  █████  ██ ██ ██  █████  ███████  
 ██      ████  ██ ██      ██    ██ 
 ███████  ██████  ███████  ██████  `,
                              }),
                            }),
                      }),
                      E.jsxs("div", {
                        className:
                          "flex flex-col items-center gap-2 text-center",
                        children: [
                          E.jsxs("h3", {
                            className: "text-foreground text-base md:text-lg",
                            style: {
                              fontFamily: "'Orbitron', sans-serif",
                              textShadow: "0 0 10px rgba(255,255,255,0.3)",
                            },
                            children: [
                              E.jsx($d, { className: "inline w-5 h-5" }),
                              " WINNER ",
                              E.jsx($d, { className: "inline w-5 h-5" }),
                            ],
                          }),
                          E.jsx("a", {
                            href: s.xLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "px-4 py-1.5 border-2 border-dashed border-foreground rounded-xl text-foreground text-sm md:text-base tracking-wide hover:bg-foreground/10 transition-colors",
                            style: { fontFamily: "'Orbitron', sans-serif" },
                            children: s.username,
                          }),
                          E.jsxs("div", {
                            className: "text-foreground text-sm md:text-base",
                            style: {
                              fontFamily: "'Orbitron', sans-serif",
                              textShadow: "0 0 10px rgba(255,255,255,0.3)",
                            },
                            children: [
                              "Prize: ",
                              E.jsx("span", {
                                className: "font-bold",
                                children: s.prize,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  `winner-${l}`
                )
              ),
            }),
          }),
        }),
        E.jsx("div", {
          className: "flex justify-center pb-6",
          children: E.jsx(AE, {
            to: "/",
            className:
              "px-8 py-3 border-2 border-dashed border-foreground rounded-xl text-foreground text-sm md:text-base tracking-wide hover:bg-foreground/10 transition-colors",
            style: { fontFamily: "'Orbitron', sans-serif" },
            children: "Back to Home",
          }),
        }),
      ],
    });
  },
  UE = () => {
    const e = mi();
    return (
      y.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      E.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: E.jsxs("div", {
          className: "text-center",
          children: [
            E.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            E.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            E.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  BE = new OS(),
  WE = () =>
    E.jsx(AS, {
      client: BE,
      children: E.jsxs(sS, {
        children: [
          E.jsx(Ww, {}),
          E.jsx(Sx, {}),
          E.jsx(RE, {
            children: E.jsxs(EE, {
              children: [
                E.jsx(os, { path: "/", element: E.jsx(DE, {}) }),
                E.jsx(os, { path: "*", element: E.jsx(UE, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Wh(document.getElementById("root")).render(E.jsx(WE, {}));
