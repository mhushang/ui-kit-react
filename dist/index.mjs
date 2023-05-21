function E5(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Re = {}, C5 = {
  get exports() {
    return Re;
  },
  set exports(d) {
    Re = d;
  }
}, kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q2;
function w5() {
  if (Q2)
    return kt;
  Q2 = 1;
  var d = Symbol.for("react.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), S = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), F = Symbol.iterator;
  function G(_) {
    return _ === null || typeof _ != "object" ? null : (_ = F && _[F] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, se = {};
  function te(_, ne, we) {
    this.props = _, this.context = ne, this.refs = se, this.updater = we || Q;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(_, ne) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, ne, "setState");
  }, te.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = te.prototype;
  function ke(_, ne, we) {
    this.props = _, this.context = ne, this.refs = se, this.updater = we || Q;
  }
  var he = ke.prototype = new ve();
  he.constructor = ke, ee(he, te.prototype), he.isPureReactComponent = !0;
  var me = Array.isArray, re = Object.prototype.hasOwnProperty, le = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Fe(_, ne, we) {
    var tt, Ie = {}, pt = null, ct = null;
    if (ne != null)
      for (tt in ne.ref !== void 0 && (ct = ne.ref), ne.key !== void 0 && (pt = "" + ne.key), ne)
        re.call(ne, tt) && !ce.hasOwnProperty(tt) && (Ie[tt] = ne[tt]);
    var St = arguments.length - 2;
    if (St === 1)
      Ie.children = we;
    else if (1 < St) {
      for (var st = Array(St), At = 0; At < St; At++)
        st[At] = arguments[At + 2];
      Ie.children = st;
    }
    if (_ && _.defaultProps)
      for (tt in St = _.defaultProps, St)
        Ie[tt] === void 0 && (Ie[tt] = St[tt]);
    return { $$typeof: d, type: _, key: pt, ref: ct, props: Ie, _owner: le.current };
  }
  function Pe(_, ne) {
    return { $$typeof: d, type: _.type, key: ne, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function be(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === d;
  }
  function Ee(_) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(we) {
      return ne[we];
    });
  }
  var et = /\/+/g;
  function Ne(_, ne) {
    return typeof _ == "object" && _ !== null && _.key != null ? Ee("" + _.key) : ne.toString(36);
  }
  function it(_, ne, we, tt, Ie) {
    var pt = typeof _;
    (pt === "undefined" || pt === "boolean") && (_ = null);
    var ct = !1;
    if (_ === null)
      ct = !0;
    else
      switch (pt) {
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case d:
            case v:
              ct = !0;
          }
      }
    if (ct)
      return ct = _, Ie = Ie(ct), _ = tt === "" ? "." + Ne(ct, 0) : tt, me(Ie) ? (we = "", _ != null && (we = _.replace(et, "$&/") + "/"), it(Ie, ne, we, "", function(At) {
        return At;
      })) : Ie != null && (be(Ie) && (Ie = Pe(Ie, we + (!Ie.key || ct && ct.key === Ie.key ? "" : ("" + Ie.key).replace(et, "$&/") + "/") + _)), ne.push(Ie)), 1;
    if (ct = 0, tt = tt === "" ? "." : tt + ":", me(_))
      for (var St = 0; St < _.length; St++) {
        pt = _[St];
        var st = tt + Ne(pt, St);
        ct += it(pt, ne, we, st, Ie);
      }
    else if (st = G(_), typeof st == "function")
      for (_ = st.call(_), St = 0; !(pt = _.next()).done; )
        pt = pt.value, st = tt + Ne(pt, St++), ct += it(pt, ne, we, st, Ie);
    else if (pt === "object")
      throw ne = String(_), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return ct;
  }
  function wt(_, ne, we) {
    if (_ == null)
      return _;
    var tt = [], Ie = 0;
    return it(_, tt, "", "", function(pt) {
      return ne.call(we, pt, Ie++);
    }), tt;
  }
  function We(_) {
    if (_._status === -1) {
      var ne = _._result;
      ne = ne(), ne.then(function(we) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = we);
      }, function(we) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = we);
      }), _._status === -1 && (_._status = 0, _._result = ne);
    }
    if (_._status === 1)
      return _._result.default;
    throw _._result;
  }
  var Te = { current: null }, de = { transition: null }, He = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: de, ReactCurrentOwner: le };
  return kt.Children = { map: wt, forEach: function(_, ne, we) {
    wt(_, function() {
      ne.apply(this, arguments);
    }, we);
  }, count: function(_) {
    var ne = 0;
    return wt(_, function() {
      ne++;
    }), ne;
  }, toArray: function(_) {
    return wt(_, function(ne) {
      return ne;
    }) || [];
  }, only: function(_) {
    if (!be(_))
      throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, kt.Component = te, kt.Fragment = m, kt.Profiler = T, kt.PureComponent = ke, kt.StrictMode = w, kt.Suspense = O, kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, kt.cloneElement = function(_, ne, we) {
    if (_ == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var tt = ee({}, _.props), Ie = _.key, pt = _.ref, ct = _._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (pt = ne.ref, ct = le.current), ne.key !== void 0 && (Ie = "" + ne.key), _.type && _.type.defaultProps)
        var St = _.type.defaultProps;
      for (st in ne)
        re.call(ne, st) && !ce.hasOwnProperty(st) && (tt[st] = ne[st] === void 0 && St !== void 0 ? St[st] : ne[st]);
    }
    var st = arguments.length - 2;
    if (st === 1)
      tt.children = we;
    else if (1 < st) {
      St = Array(st);
      for (var At = 0; At < st; At++)
        St[At] = arguments[At + 2];
      tt.children = St;
    }
    return { $$typeof: d, type: _.type, key: Ie, ref: pt, props: tt, _owner: ct };
  }, kt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: k, _context: _ }, _.Consumer = _;
  }, kt.createElement = Fe, kt.createFactory = function(_) {
    var ne = Fe.bind(null, _);
    return ne.type = _, ne;
  }, kt.createRef = function() {
    return { current: null };
  }, kt.forwardRef = function(_) {
    return { $$typeof: U, render: _ };
  }, kt.isValidElement = be, kt.lazy = function(_) {
    return { $$typeof: M, _payload: { _status: -1, _result: _ }, _init: We };
  }, kt.memo = function(_, ne) {
    return { $$typeof: L, type: _, compare: ne === void 0 ? null : ne };
  }, kt.startTransition = function(_) {
    var ne = de.transition;
    de.transition = {};
    try {
      _();
    } finally {
      de.transition = ne;
    }
  }, kt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, kt.useCallback = function(_, ne) {
    return Te.current.useCallback(_, ne);
  }, kt.useContext = function(_) {
    return Te.current.useContext(_);
  }, kt.useDebugValue = function() {
  }, kt.useDeferredValue = function(_) {
    return Te.current.useDeferredValue(_);
  }, kt.useEffect = function(_, ne) {
    return Te.current.useEffect(_, ne);
  }, kt.useId = function() {
    return Te.current.useId();
  }, kt.useImperativeHandle = function(_, ne, we) {
    return Te.current.useImperativeHandle(_, ne, we);
  }, kt.useInsertionEffect = function(_, ne) {
    return Te.current.useInsertionEffect(_, ne);
  }, kt.useLayoutEffect = function(_, ne) {
    return Te.current.useLayoutEffect(_, ne);
  }, kt.useMemo = function(_, ne) {
    return Te.current.useMemo(_, ne);
  }, kt.useReducer = function(_, ne, we) {
    return Te.current.useReducer(_, ne, we);
  }, kt.useRef = function(_) {
    return Te.current.useRef(_);
  }, kt.useState = function(_) {
    return Te.current.useState(_);
  }, kt.useSyncExternalStore = function(_, ne, we) {
    return Te.current.useSyncExternalStore(_, ne, we);
  }, kt.useTransition = function() {
    return Te.current.useTransition();
  }, kt.version = "18.2.0", kt;
}
var wv = {}, b5 = {
  get exports() {
    return wv;
  },
  set exports(d) {
    wv = d;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W2;
function R5() {
  return W2 || (W2 = 1, function(d, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.2.0", w = Symbol.for("react.element"), T = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), L = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), te = Symbol.iterator, ve = "@@iterator";
      function ke(g) {
        if (g === null || typeof g != "object")
          return null;
        var D = te && g[te] || g[ve];
        return typeof D == "function" ? D : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {
        transition: null
      }, re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, Fe = null;
      function Pe(g) {
        Fe = g;
      }
      ce.setExtraStackFrame = function(g) {
        Fe = g;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var g = "";
        Fe && (g += Fe);
        var D = ce.getCurrentStack;
        return D && (g += D() || ""), g;
      };
      var be = !1, Ee = !1, et = !1, Ne = !1, it = !1, wt = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: me,
        ReactCurrentOwner: le
      };
      wt.ReactDebugCurrentFrame = ce, wt.ReactCurrentActQueue = re;
      function We(g) {
        {
          for (var D = arguments.length, I = new Array(D > 1 ? D - 1 : 0), q = 1; q < D; q++)
            I[q - 1] = arguments[q];
          de("warn", g, I);
        }
      }
      function Te(g) {
        {
          for (var D = arguments.length, I = new Array(D > 1 ? D - 1 : 0), q = 1; q < D; q++)
            I[q - 1] = arguments[q];
          de("error", g, I);
        }
      }
      function de(g, D, I) {
        {
          var q = wt.ReactDebugCurrentFrame, fe = q.getStackAddendum();
          fe !== "" && (D += "%s", I = I.concat([fe]));
          var Ze = I.map(function(Ce) {
            return String(Ce);
          });
          Ze.unshift("Warning: " + D), Function.prototype.apply.call(console[g], console, Ze);
        }
      }
      var He = {};
      function _(g, D) {
        {
          var I = g.constructor, q = I && (I.displayName || I.name) || "ReactClass", fe = q + "." + D;
          if (He[fe])
            return;
          Te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, q), He[fe] = !0;
        }
      }
      var ne = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, D, I) {
          _(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, D, I, q) {
          _(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, D, I, q) {
          _(g, "setState");
        }
      }, we = Object.assign, tt = {};
      Object.freeze(tt);
      function Ie(g, D, I) {
        this.props = g, this.context = D, this.refs = tt, this.updater = I || ne;
      }
      Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(g, D) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, D, "setState");
      }, Ie.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var pt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ct = function(g, D) {
          Object.defineProperty(Ie.prototype, g, {
            get: function() {
              We("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var St in pt)
          pt.hasOwnProperty(St) && ct(St, pt[St]);
      }
      function st() {
      }
      st.prototype = Ie.prototype;
      function At(g, D, I) {
        this.props = g, this.context = D, this.refs = tt, this.updater = I || ne;
      }
      var Fa = At.prototype = new st();
      Fa.constructor = At, we(Fa, Ie.prototype), Fa.isPureReactComponent = !0;
      function Fn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var Kr = Array.isArray;
      function rn(g) {
        return Kr(g);
      }
      function jn(g) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, I = D && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return I;
        }
      }
      function sr(g) {
        try {
          return Gn(g), !1;
        } catch {
          return !0;
        }
      }
      function Gn(g) {
        return "" + g;
      }
      function En(g) {
        if (sr(g))
          return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(g)), Gn(g);
      }
      function Jr(g, D, I) {
        var q = g.displayName;
        if (q)
          return q;
        var fe = D.displayName || D.name || "";
        return fe !== "" ? I + "(" + fe + ")" : I;
      }
      function ja(g) {
        return g.displayName || "Context";
      }
      function an(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case k:
            return "Fragment";
          case T:
            return "Portal";
          case U:
            return "Profiler";
          case S:
            return "StrictMode";
          case F:
            return "Suspense";
          case G:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case L:
              var D = g;
              return ja(D) + ".Consumer";
            case O:
              var I = g;
              return ja(I._context) + ".Provider";
            case M:
              return Jr(g, g.render, "ForwardRef");
            case Q:
              var q = g.displayName || null;
              return q !== null ? q : an(g.type) || "Memo";
            case ee: {
              var fe = g, Ze = fe._payload, Ce = fe._init;
              try {
                return an(Ce(Ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var _n = Object.prototype.hasOwnProperty, ea = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, qn, gr, Xn;
      Xn = {};
      function Mr(g) {
        if (_n.call(g, "ref")) {
          var D = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function Tn(g) {
        if (_n.call(g, "key")) {
          var D = Object.getOwnPropertyDescriptor(g, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function cr(g, D) {
        var I = function() {
          qn || (qn = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
      function Xl(g, D) {
        var I = function() {
          gr || (gr = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: I,
          configurable: !0
        });
      }
      function ni(g) {
        if (typeof g.ref == "string" && le.current && g.__self && le.current.stateNode !== g.__self) {
          var D = an(le.current.type);
          Xn[D] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, g.ref), Xn[D] = !0);
        }
      }
      var Se = function(g, D, I, q, fe, Ze, Ce) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: w,
          // Built-in properties that belong on the element
          type: g,
          key: D,
          ref: I,
          props: Ce,
          // Record the component responsible for creating this element.
          _owner: Ze
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: fe
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function Ye(g, D, I) {
        var q, fe = {}, Ze = null, Ce = null, qe = null, yt = null;
        if (D != null) {
          Mr(D) && (Ce = D.ref, ni(D)), Tn(D) && (En(D.key), Ze = "" + D.key), qe = D.__self === void 0 ? null : D.__self, yt = D.__source === void 0 ? null : D.__source;
          for (q in D)
            _n.call(D, q) && !ea.hasOwnProperty(q) && (fe[q] = D[q]);
        }
        var Ot = arguments.length - 2;
        if (Ot === 1)
          fe.children = I;
        else if (Ot > 1) {
          for (var It = Array(Ot), Vt = 0; Vt < Ot; Vt++)
            It[Vt] = arguments[Vt + 2];
          Object.freeze && Object.freeze(It), fe.children = It;
        }
        if (g && g.defaultProps) {
          var Yt = g.defaultProps;
          for (q in Yt)
            fe[q] === void 0 && (fe[q] = Yt[q]);
        }
        if (Ze || Ce) {
          var Xt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Ze && cr(fe, Xt), Ce && Xl(fe, Xt);
        }
        return Se(g, Ze, Ce, qe, yt, le.current, fe);
      }
      function ht(g, D) {
        var I = Se(g.type, D, g.ref, g._self, g._source, g._owner, g.props);
        return I;
      }
      function jt(g, D, I) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var q, fe = we({}, g.props), Ze = g.key, Ce = g.ref, qe = g._self, yt = g._source, Ot = g._owner;
        if (D != null) {
          Mr(D) && (Ce = D.ref, Ot = le.current), Tn(D) && (En(D.key), Ze = "" + D.key);
          var It;
          g.type && g.type.defaultProps && (It = g.type.defaultProps);
          for (q in D)
            _n.call(D, q) && !ea.hasOwnProperty(q) && (D[q] === void 0 && It !== void 0 ? fe[q] = It[q] : fe[q] = D[q]);
        }
        var Vt = arguments.length - 2;
        if (Vt === 1)
          fe.children = I;
        else if (Vt > 1) {
          for (var Yt = Array(Vt), Xt = 0; Xt < Vt; Xt++)
            Yt[Xt] = arguments[Xt + 2];
          fe.children = Yt;
        }
        return Se(g.type, Ze, Ce, qe, yt, Ot, fe);
      }
      function Bt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === w;
      }
      var Ln = ".", Cn = ":";
      function Ur(g) {
        var D = /[=:]/g, I = {
          "=": "=0",
          ":": "=2"
        }, q = g.replace(D, function(fe) {
          return I[fe];
        });
        return "$" + q;
      }
      var Zt = !1, pa = /\/+/g;
      function sn(g) {
        return g.replace(pa, "$&/");
      }
      function qt(g, D) {
        return typeof g == "object" && g !== null && g.key != null ? (En(g.key), Ur("" + g.key)) : D.toString(36);
      }
      function Zl(g, D, I, q, fe) {
        var Ze = typeof g;
        (Ze === "undefined" || Ze === "boolean") && (g = null);
        var Ce = !1;
        if (g === null)
          Ce = !0;
        else
          switch (Ze) {
            case "string":
            case "number":
              Ce = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case w:
                case T:
                  Ce = !0;
              }
          }
        if (Ce) {
          var qe = g, yt = fe(qe), Ot = q === "" ? Ln + qt(qe, 0) : q;
          if (rn(yt)) {
            var It = "";
            Ot != null && (It = sn(Ot) + "/"), Zl(yt, D, It, "", function(pd) {
              return pd;
            });
          } else
            yt != null && (Bt(yt) && (yt.key && (!qe || qe.key !== yt.key) && En(yt.key), yt = ht(
              yt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              I + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (yt.key && (!qe || qe.key !== yt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                sn("" + yt.key) + "/"
              ) : "") + Ot
            )), D.push(yt));
          return 1;
        }
        var Vt, Yt, Xt = 0, bt = q === "" ? Ln : q + Cn;
        if (rn(g))
          for (var xi = 0; xi < g.length; xi++)
            Vt = g[xi], Yt = bt + qt(Vt, xi), Xt += Zl(Vt, D, I, Yt, fe);
        else {
          var ru = ke(g);
          if (typeof ru == "function") {
            var os = g;
            ru === os.entries && (Zt || We("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zt = !0);
            for (var dd = ru.call(os), Ya, us = 0; !(Ya = dd.next()).done; )
              Vt = Ya.value, Yt = bt + qt(Vt, us++), Xt += Zl(Vt, D, I, Yt, fe);
          } else if (Ze === "object") {
            var ss = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (ss === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : ss) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Xt;
      }
      function bi(g, D, I) {
        if (g == null)
          return g;
        var q = [], fe = 0;
        return Zl(g, q, "", "", function(Ze) {
          return D.call(I, Ze, fe++);
        }), q;
      }
      function Io(g) {
        var D = 0;
        return bi(g, function() {
          D++;
        }), D;
      }
      function cc(g, D, I) {
        bi(g, function() {
          D.apply(this, arguments);
        }, I);
      }
      function fc(g) {
        return bi(g, function(D) {
          return D;
        }) || [];
      }
      function Yo(g) {
        if (!Bt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function es(g) {
        var D = {
          $$typeof: L,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: O,
          _context: D
        };
        var I = !1, q = !1, fe = !1;
        {
          var Ze = {
            $$typeof: L,
            _context: D
          };
          Object.defineProperties(Ze, {
            Provider: {
              get: function() {
                return q || (q = !0, Te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Ce) {
                D.Provider = Ce;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Ce) {
                D._currentValue = Ce;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Ce) {
                D._currentValue2 = Ce;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Ce) {
                D._threadCount = Ce;
              }
            },
            Consumer: {
              get: function() {
                return I || (I = !0, Te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Ce) {
                fe || (We("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ce), fe = !0);
              }
            }
          }), D.Consumer = Ze;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var Va = -1, tl = 0, ri = 1, nl = 2;
      function ta(g) {
        if (g._status === Va) {
          var D = g._result, I = D();
          if (I.then(function(Ze) {
            if (g._status === tl || g._status === Va) {
              var Ce = g;
              Ce._status = ri, Ce._result = Ze;
            }
          }, function(Ze) {
            if (g._status === tl || g._status === Va) {
              var Ce = g;
              Ce._status = nl, Ce._result = Ze;
            }
          }), g._status === Va) {
            var q = g;
            q._status = tl, q._result = I;
          }
        }
        if (g._status === ri) {
          var fe = g._result;
          return fe === void 0 && Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, fe), "default" in fe || Te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, fe), fe.default;
        } else
          throw g._result;
      }
      function Ba(g) {
        var D = {
          // We use these fields to store the result.
          _status: Va,
          _result: g
        }, I = {
          $$typeof: ee,
          _payload: D,
          _init: ta
        };
        {
          var q, fe;
          Object.defineProperties(I, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ze) {
                Te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ze, Object.defineProperty(I, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return fe;
              },
              set: function(Ze) {
                Te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), fe = Ze, Object.defineProperty(I, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return I;
      }
      function rl(g) {
        g != null && g.$$typeof === Q ? Te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? Te("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && Te("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && Te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: M,
          render: g
        };
        {
          var I;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(q) {
              I = q, !g.name && !g.displayName && (g.displayName = q);
            }
          });
        }
        return D;
      }
      var al;
      al = Symbol.for("react.module.reference");
      function Qo(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === k || g === U || it || g === S || g === F || g === G || Ne || g === se || be || Ee || et || typeof g == "object" && g !== null && (g.$$typeof === ee || g.$$typeof === Q || g.$$typeof === O || g.$$typeof === L || g.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === al || g.getModuleId !== void 0));
      }
      function ts(g, D) {
        Qo(g) || Te("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var I = {
          $$typeof: Q,
          type: g,
          compare: D === void 0 ? null : D
        };
        {
          var q;
          Object.defineProperty(I, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(fe) {
              q = fe, !g.name && !g.displayName && (g.displayName = fe);
            }
          });
        }
        return I;
      }
      function hn() {
        var g = he.current;
        return g === null && Te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function va(g) {
        var D = hn();
        if (g._context !== void 0) {
          var I = g._context;
          I.Consumer === g ? Te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : I.Provider === g && Te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(g);
      }
      function Kl(g) {
        var D = hn();
        return D.useState(g);
      }
      function il(g, D, I) {
        var q = hn();
        return q.useReducer(g, D, I);
      }
      function Zn(g) {
        var D = hn();
        return D.useRef(g);
      }
      function dc(g, D) {
        var I = hn();
        return I.useEffect(g, D);
      }
      function pc(g, D) {
        var I = hn();
        return I.useInsertionEffect(g, D);
      }
      function ns(g, D) {
        var I = hn();
        return I.useLayoutEffect(g, D);
      }
      function vc(g, D) {
        var I = hn();
        return I.useCallback(g, D);
      }
      function ud(g, D) {
        var I = hn();
        return I.useMemo(g, D);
      }
      function sd(g, D, I) {
        var q = hn();
        return q.useImperativeHandle(g, D, I);
      }
      function ln(g, D) {
        {
          var I = hn();
          return I.useDebugValue(g, D);
        }
      }
      function cd() {
        var g = hn();
        return g.useTransition();
      }
      function Pa(g) {
        var D = hn();
        return D.useDeferredValue(g);
      }
      function mt() {
        var g = hn();
        return g.useId();
      }
      function ai(g, D, I) {
        var q = hn();
        return q.useSyncExternalStore(g, D, I);
      }
      var ll = 0, Wo, ol, Ar, rs, Sr, as, is;
      function hc() {
      }
      hc.__reactDisabledLog = !0;
      function Go() {
        {
          if (ll === 0) {
            Wo = console.log, ol = console.info, Ar = console.warn, rs = console.error, Sr = console.group, as = console.groupCollapsed, is = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: hc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          ll++;
        }
      }
      function ul() {
        {
          if (ll--, ll === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: we({}, g, {
                value: Wo
              }),
              info: we({}, g, {
                value: ol
              }),
              warn: we({}, g, {
                value: Ar
              }),
              error: we({}, g, {
                value: rs
              }),
              group: we({}, g, {
                value: Sr
              }),
              groupCollapsed: we({}, g, {
                value: as
              }),
              groupEnd: we({}, g, {
                value: is
              })
            });
          }
          ll < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $a = wt.ReactCurrentDispatcher, Er;
      function sl(g, D, I) {
        {
          if (Er === void 0)
            try {
              throw Error();
            } catch (fe) {
              var q = fe.stack.trim().match(/\n( *(at )?)/);
              Er = q && q[1] || "";
            }
          return `
` + Er + g;
        }
      }
      var cl = !1, fl;
      {
        var qo = typeof WeakMap == "function" ? WeakMap : Map;
        fl = new qo();
      }
      function Xo(g, D) {
        if (!g || cl)
          return "";
        {
          var I = fl.get(g);
          if (I !== void 0)
            return I;
        }
        var q;
        cl = !0;
        var fe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ze;
        Ze = $a.current, $a.current = null, Go();
        try {
          if (D) {
            var Ce = function() {
              throw Error();
            };
            if (Object.defineProperty(Ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ce, []);
              } catch (bt) {
                q = bt;
              }
              Reflect.construct(g, [], Ce);
            } else {
              try {
                Ce.call();
              } catch (bt) {
                q = bt;
              }
              g.call(Ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bt) {
              q = bt;
            }
            g();
          }
        } catch (bt) {
          if (bt && q && typeof bt.stack == "string") {
            for (var qe = bt.stack.split(`
`), yt = q.stack.split(`
`), Ot = qe.length - 1, It = yt.length - 1; Ot >= 1 && It >= 0 && qe[Ot] !== yt[It]; )
              It--;
            for (; Ot >= 1 && It >= 0; Ot--, It--)
              if (qe[Ot] !== yt[It]) {
                if (Ot !== 1 || It !== 1)
                  do
                    if (Ot--, It--, It < 0 || qe[Ot] !== yt[It]) {
                      var Vt = `
` + qe[Ot].replace(" at new ", " at ");
                      return g.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", g.displayName)), typeof g == "function" && fl.set(g, Vt), Vt;
                    }
                  while (Ot >= 1 && It >= 0);
                break;
              }
          }
        } finally {
          cl = !1, $a.current = Ze, ul(), Error.prepareStackTrace = fe;
        }
        var Yt = g ? g.displayName || g.name : "", Xt = Yt ? sl(Yt) : "";
        return typeof g == "function" && fl.set(g, Xt), Xt;
      }
      function Ri(g, D, I) {
        return Xo(g, !1);
      }
      function fd(g) {
        var D = g.prototype;
        return !!(D && D.isReactComponent);
      }
      function ii(g, D, I) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return Xo(g, fd(g));
        if (typeof g == "string")
          return sl(g);
        switch (g) {
          case F:
            return sl("Suspense");
          case G:
            return sl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case M:
              return Ri(g.render);
            case Q:
              return ii(g.type, D, I);
            case ee: {
              var q = g, fe = q._payload, Ze = q._init;
              try {
                return ii(Ze(fe), D, I);
              } catch {
              }
            }
          }
        return "";
      }
      var Lt = {}, Zo = wt.ReactDebugCurrentFrame;
      function Jl(g) {
        if (g) {
          var D = g._owner, I = ii(g.type, g._source, D ? D.type : null);
          Zo.setExtraStackFrame(I);
        } else
          Zo.setExtraStackFrame(null);
      }
      function Ko(g, D, I, q, fe) {
        {
          var Ze = Function.call.bind(_n);
          for (var Ce in g)
            if (Ze(g, Ce)) {
              var qe = void 0;
              try {
                if (typeof g[Ce] != "function") {
                  var yt = Error((q || "React class") + ": " + I + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw yt.name = "Invariant Violation", yt;
                }
                qe = g[Ce](D, Ce, q, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ot) {
                qe = Ot;
              }
              qe && !(qe instanceof Error) && (Jl(fe), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", I, Ce, typeof qe), Jl(null)), qe instanceof Error && !(qe.message in Lt) && (Lt[qe.message] = !0, Jl(fe), Te("Failed %s type: %s", I, qe.message), Jl(null));
            }
        }
      }
      function Dt(g) {
        if (g) {
          var D = g._owner, I = ii(g.type, g._source, D ? D.type : null);
          Pe(I);
        } else
          Pe(null);
      }
      var Jo;
      Jo = !1;
      function eu() {
        if (le.current) {
          var g = an(le.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function lt(g) {
        if (g !== void 0) {
          var D = g.fileName.replace(/^.*[\\\/]/, ""), I = g.lineNumber;
          return `

Check your code at ` + D + ":" + I + ".";
        }
        return "";
      }
      function eo(g) {
        return g != null ? lt(g.__source) : "";
      }
      var cn = {};
      function zr(g) {
        var D = eu();
        if (!D) {
          var I = typeof g == "string" ? g : g.displayName || g.name;
          I && (D = `

Check the top-level render call using <` + I + ">.");
        }
        return D;
      }
      function Cr(g, D) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var I = zr(D);
          if (!cn[I]) {
            cn[I] = !0;
            var q = "";
            g && g._owner && g._owner !== le.current && (q = " It was passed a child from " + an(g._owner.type) + "."), Dt(g), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, q), Dt(null);
          }
        }
      }
      function dl(g, D) {
        if (typeof g == "object") {
          if (rn(g))
            for (var I = 0; I < g.length; I++) {
              var q = g[I];
              Bt(q) && Cr(q, D);
            }
          else if (Bt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var fe = ke(g);
            if (typeof fe == "function" && fe !== g.entries)
              for (var Ze = fe.call(g), Ce; !(Ce = Ze.next()).done; )
                Bt(Ce.value) && Cr(Ce.value, D);
          }
        }
      }
      function mn(g) {
        {
          var D = g.type;
          if (D == null || typeof D == "string")
            return;
          var I;
          if (typeof D == "function")
            I = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === Q))
            I = D.propTypes;
          else
            return;
          if (I) {
            var q = an(D);
            Ko(I, g.props, "prop", q, g);
          } else if (D.PropTypes !== void 0 && !Jo) {
            Jo = !0;
            var fe = an(D);
            Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", fe || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zt(g) {
        {
          for (var D = Object.keys(g.props), I = 0; I < D.length; I++) {
            var q = D[I];
            if (q !== "children" && q !== "key") {
              Dt(g), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Dt(null);
              break;
            }
          }
          g.ref !== null && (Dt(g), Te("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
        }
      }
      function mc(g, D, I) {
        var q = Qo(g);
        if (!q) {
          var fe = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = eo(D);
          Ze ? fe += Ze : fe += eu();
          var Ce;
          g === null ? Ce = "null" : rn(g) ? Ce = "array" : g !== void 0 && g.$$typeof === w ? (Ce = "<" + (an(g.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof g, Te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, fe);
        }
        var qe = Ye.apply(this, arguments);
        if (qe == null)
          return qe;
        if (q)
          for (var yt = 2; yt < arguments.length; yt++)
            dl(arguments[yt], g);
        return g === k ? zt(qe) : mn(qe), qe;
      }
      var Hr = !1;
      function Vn(g) {
        var D = mc.bind(null, g);
        return D.type = g, Hr || (Hr = !0, We("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return We("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), D;
      }
      function li(g, D, I) {
        for (var q = jt.apply(this, arguments), fe = 2; fe < arguments.length; fe++)
          dl(arguments[fe], q.type);
        return mn(q), q;
      }
      function yc(g, D) {
        var I = me.transition;
        me.transition = {};
        var q = me.transition;
        me.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (me.transition = I, I === null && q._updatedFibers) {
            var fe = q._updatedFibers.size;
            fe > 10 && We("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Ti = !1, pl = null;
      function gc(g) {
        if (pl === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), I = d && d[D];
            pl = I.call(d, "timers").setImmediate;
          } catch {
            pl = function(fe) {
              Ti === !1 && (Ti = !0, typeof MessageChannel > "u" && Te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ze = new MessageChannel();
              Ze.port1.onmessage = fe, Ze.port2.postMessage(void 0);
            };
          }
        return pl(g);
      }
      var ha = 0, vl = !1;
      function hl(g) {
        {
          var D = ha;
          ha++, re.current === null && (re.current = []);
          var I = re.isBatchingLegacy, q;
          try {
            if (re.isBatchingLegacy = !0, q = g(), !I && re.didScheduleLegacyUpdate) {
              var fe = re.current;
              fe !== null && (re.didScheduleLegacyUpdate = !1, yl(fe));
            }
          } catch (Yt) {
            throw ma(D), Yt;
          } finally {
            re.isBatchingLegacy = I;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ze = q, Ce = !1, qe = {
              then: function(Yt, Xt) {
                Ce = !0, Ze.then(function(bt) {
                  ma(D), ha === 0 ? tu(bt, Yt, Xt) : Yt(bt);
                }, function(bt) {
                  ma(D), Xt(bt);
                });
              }
            };
            return !vl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ce || (vl = !0, Te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var yt = q;
            if (ma(D), ha === 0) {
              var Ot = re.current;
              Ot !== null && (yl(Ot), re.current = null);
              var It = {
                then: function(Yt, Xt) {
                  re.current === null ? (re.current = [], tu(yt, Yt, Xt)) : Yt(yt);
                }
              };
              return It;
            } else {
              var Vt = {
                then: function(Yt, Xt) {
                  Yt(yt);
                }
              };
              return Vt;
            }
          }
        }
      }
      function ma(g) {
        g !== ha - 1 && Te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ha = g;
      }
      function tu(g, D, I) {
        {
          var q = re.current;
          if (q !== null)
            try {
              yl(q), gc(function() {
                q.length === 0 ? (re.current = null, D(g)) : tu(g, D, I);
              });
            } catch (fe) {
              I(fe);
            }
          else
            D(g);
        }
      }
      var ml = !1;
      function yl(g) {
        if (!ml) {
          ml = !0;
          var D = 0;
          try {
            for (; D < g.length; D++) {
              var I = g[D];
              do
                I = I(!0);
              while (I !== null);
            }
            g.length = 0;
          } catch (q) {
            throw g = g.slice(D + 1), q;
          } finally {
            ml = !1;
          }
        }
      }
      var to = mc, nu = li, ls = Vn, Ia = {
        map: bi,
        forEach: cc,
        count: Io,
        toArray: fc,
        only: Yo
      };
      v.Children = Ia, v.Component = Ie, v.Fragment = k, v.Profiler = U, v.PureComponent = At, v.StrictMode = S, v.Suspense = F, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, v.cloneElement = nu, v.createContext = es, v.createElement = to, v.createFactory = ls, v.createRef = Fn, v.forwardRef = rl, v.isValidElement = Bt, v.lazy = Ba, v.memo = ts, v.startTransition = yc, v.unstable_act = hl, v.useCallback = vc, v.useContext = va, v.useDebugValue = ln, v.useDeferredValue = Pa, v.useEffect = dc, v.useId = mt, v.useImperativeHandle = sd, v.useInsertionEffect = pc, v.useLayoutEffect = ns, v.useMemo = ud, v.useReducer = il, v.useRef = Zn, v.useState = Kl, v.useSyncExternalStore = ai, v.useTransition = cd, v.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(b5, wv)), wv;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = w5() : d.exports = R5();
})(C5);
const R = /* @__PURE__ */ E5(Re);
function dw(d) {
  var v, m, w = "";
  if (typeof d == "string" || typeof d == "number")
    w += d;
  else if (typeof d == "object")
    if (Array.isArray(d))
      for (v = 0; v < d.length; v++)
        d[v] && (m = dw(d[v])) && (w && (w += " "), w += m);
    else
      for (v in d)
        d[v] && (w && (w += " "), w += v);
  return w;
}
function vt() {
  for (var d, v, m = 0, w = ""; m < arguments.length; )
    (d = arguments[m++]) && (v = dw(d)) && (w && (w += " "), w += v);
  return w;
}
var $o = /* @__PURE__ */ ((d) => (d.orange = "orange", d.white = "white", d))($o || {});
const Ey = ({ color: d = $o.orange }) => /* @__PURE__ */ R.createElement(
  "div",
  {
    className: vt({
      ["Loader-wrapper"]: !0,
      ["Loader-orange"]: d === $o.orange,
      ["Loader-white"]: d === $o.white
    })
  },
  /* @__PURE__ */ R.createElement("div", { className: "Loader-dot-left" }),
  /* @__PURE__ */ R.createElement("div", { className: "Loader-dot-center" }),
  /* @__PURE__ */ R.createElement("div", { className: "Loader-dot-right" })
);
var Gt = /* @__PURE__ */ ((d) => (d.default = "default", d.primaryOrange = "primary-orange", d.primaryGrey = "primary-grey", d.primaryGreen = "primary-green", d.primaryRed = "primary-red", d.noBorder = "no-border", d.link = "link", d.hoverUnderline = "hoverUnderline", d.underline = "underline", d))(Gt || {});
const Nr = ({
  ariaLabel: d,
  text: v,
  theme: m,
  error: w,
  disabled: T = !1,
  className: k,
  rightIcon: S,
  centralIcon: U,
  leftIcon: O,
  loading: L,
  handleClick: M,
  id: F,
  name: G,
  tabIndex: Q,
  submit: ee = !1
}) => {
  const se = () => {
    switch (m) {
      case Gt.primaryGreen:
        return $o.white;
      case Gt.primaryGrey:
        return $o.white;
      case Gt.primaryOrange:
        return $o.white;
      case Gt.primaryRed:
        return $o.white;
      default:
        return $o.orange;
    }
  };
  return /* @__PURE__ */ R.createElement(
    "button",
    {
      "aria-label": d || "button",
      onClick: M,
      disabled: T || L,
      className: vt({
        Button: !0,
        ["Button-default"]: !m || m === Gt.default,
        ["Button-no-border"]: m === Gt.noBorder,
        ["Button-link"]: m === Gt.link,
        ["Buton-link-hover-underline"]: m === Gt.hoverUnderline,
        ["Button-underline"]: m === Gt.underline,
        ["Button-primary-orange"]: m === Gt.primaryOrange,
        ["Button-primary-grey"]: m === Gt.primaryGrey,
        ["Button-primary-green"]: m === Gt.primaryGreen,
        ["Button-primary-red"]: m === Gt.primaryRed,
        ["Button-error"]: w,
        [k || ""]: !!k
      }),
      id: F,
      name: G,
      tabIndex: Q,
      type: ee ? "submit" : "button"
    },
    !L && O && /* @__PURE__ */ R.createElement("div", { className: "left-icon" }, O),
    L ? /* @__PURE__ */ R.createElement(Ey, { color: se() }) : /* @__PURE__ */ R.createElement("div", { className: "center-icon" }, U || v),
    !L && S && /* @__PURE__ */ R.createElement("div", { className: "right-icon" }, S)
  );
};
const T5 = () => /* @__PURE__ */ R.createElement("svg", { width: "12", height: "10", viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.00005 1C7.38665 1 8.68178 1.53327 9.63 2.2395C10.1023 2.59129 10.4641 2.96813 10.6993 3.30955C10.9464 3.66814 11.0001 3.90699 11.0001 4C11.0001 4.09301 10.9464 4.33186 10.6993 4.69045C10.4641 5.03187 10.1023 5.40871 9.63 5.7605C8.68193 6.46662 7.38706 6.99983 6.00072 7H6.00005C4.61346 7 3.31833 6.46673 2.3701 5.7605C1.89777 5.40871 1.53603 5.03187 1.30079 4.69045C1.05373 4.33186 1.00005 4.09301 1.00005 4C1.00005 3.90699 1.05373 3.66814 1.30079 3.30955C1.53603 2.96813 1.89777 2.59129 2.3701 2.2395C3.31833 1.53327 4.61346 1 6.00005 1ZM5.50005 7.98066C4.92624 7.93639 4.37342 7.81802 3.85406 7.64553L3.48512 9.12127C3.41815 9.38916 3.14668 9.55205 2.87879 9.48507C2.61089 9.4181 2.44801 9.14663 2.51498 8.87873L2.91918 7.26193C2.48937 7.0504 2.09371 6.80445 1.74157 6.53912L0.916078 7.77735C0.762902 8.00711 0.452467 8.0692 0.222703 7.91603C-0.00706127 7.76285 -0.0691482 7.45241 0.0840279 7.22265L0.984272 5.87228C0.363508 5.22844 5.31203e-05 4.54759 5.31203e-05 4C5.31203e-05 2.5 2.72732 0 6.00005 0C9.27278 0 12.0001 2.5 12.0001 4C12.0001 4.54759 11.6366 5.22844 11.0158 5.87228L11.9161 7.22265C12.0693 7.45241 12.0072 7.76285 11.7774 7.91603C11.5476 8.0692 11.2372 8.00711 11.084 7.77735L10.2585 6.53912C9.9064 6.80445 9.51074 7.0504 9.08092 7.26193L9.48512 8.87873C9.5521 9.14663 9.38922 9.4181 9.12132 9.48507C8.85342 9.55205 8.58196 9.38916 8.51498 9.12127L8.14605 7.64553C7.62669 7.81802 7.07387 7.93639 6.50005 7.98066V9.5C6.50005 9.77614 6.2762 10 6.00005 10C5.72391 10 5.50005 9.77614 5.50005 9.5V7.98066Z",
    fill: "currentColor"
  }
)), x5 = () => /* @__PURE__ */ R.createElement("svg", { width: "12", height: "10", viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.50005 0.5C6.50005 0.223858 6.2762 0 6.00005 0C5.72391 0 5.50005 0.223858 5.50005 0.5V2.01934C4.92624 2.06361 4.37342 2.18198 3.85406 2.35447L3.48512 0.878732C3.41815 0.610835 3.14668 0.447954 2.87879 0.514929C2.61089 0.581903 2.44801 0.85337 2.51498 1.12127L2.91918 2.73807C2.48937 2.94961 2.09371 3.19555 1.74157 3.46088L0.916078 2.22265C0.762902 1.99289 0.452467 1.9308 0.222703 2.08397C-0.00706134 2.23715 -0.0691482 2.54759 0.084028 2.77735L0.984273 4.12772C0.363508 4.77156 5.31629e-05 5.45241 5.31629e-05 6C5.31629e-05 7.5 2.72733 10 6.00005 10C9.27278 10 12.0001 7.5 12.0001 6C12.0001 5.45241 11.6366 4.77156 11.0158 4.12772L11.9161 2.77735C12.0693 2.54759 12.0072 2.23715 11.7774 2.08397C11.5476 1.9308 11.2372 1.99289 11.084 2.22265L10.2585 3.46088C9.9064 3.19555 9.51074 2.94961 9.08092 2.73807L9.48512 1.12127C9.5521 0.85337 9.38922 0.581903 9.12132 0.514929C8.85342 0.447954 8.58196 0.610835 8.51498 0.878732L8.14605 2.35447C7.62669 2.18198 7.07387 2.06361 6.50005 2.01934V0.5ZM6.00005 3C4.61346 3 3.31833 3.53327 2.3701 4.2395C1.89777 4.59129 1.53603 4.96813 1.30079 5.30955C1.05373 5.66814 1.00005 5.90699 1.00005 6C1.00005 6.09301 1.05373 6.33186 1.30079 6.69045C1.53603 7.03187 1.89777 7.40871 2.3701 7.7605C3.31833 8.46673 4.61346 9 6.00005 9C7.38665 9 8.68178 8.46673 9.63 7.7605C10.1023 7.40871 10.4641 7.03187 10.6993 6.69045C10.9464 6.33186 11.0001 6.09301 11.0001 6C11.0001 5.90699 10.9464 5.66814 10.6993 5.30955C10.4641 4.96813 10.1023 4.59129 9.63 4.2395C8.68178 3.53327 7.38665 3 6.00005 3ZM7.00005 6C7.00005 6.55228 6.55234 7 6.00005 7C5.44777 7 5.00005 6.55228 5.00005 6C5.00005 5.44772 5.44777 5 6.00005 5C6.55234 5 7.00005 5.44772 7.00005 6Z",
    fill: "currentColor"
  }
)), Cy = () => /* @__PURE__ */ R.createElement(
  "svg",
  {
    "data-testid": "arrow-down-bold",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ R.createElement(
    "path",
    {
      d: "M13.5303 5.46967C13.8232 5.76256 13.8232 6.23744 13.5303 6.53033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L2.46967 6.53033C2.17678 6.23744 2.17678 5.76256 2.46967 5.46967C2.76256 5.17678 3.23744 5.17678 3.53033 5.46967L8 9.93934L12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967Z",
      fill: "currentColor"
    }
  )
), k5 = () => /* @__PURE__ */ R.createElement(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ R.createElement("path", { d: "M13 6L8 11L3 6", stroke: "currentColor" })
), wy = () => /* @__PURE__ */ R.createElement(
  "svg",
  {
    "data-testid": "arrow-up-bold",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  /* @__PURE__ */ R.createElement(
    "path",
    {
      d: "M2.21967 11.2803C1.92678 10.9874 1.92678 10.5126 2.21967 10.2197L7.21967 5.21967C7.51256 4.92678 7.98744 4.92678 8.28033 5.21967L13.2803 10.2197C13.5732 10.5126 13.5732 10.9874 13.2803 11.2803C12.9874 11.5732 12.5126 11.5732 12.2197 11.2803L7.75 6.81066L3.28033 11.2803C2.98744 11.5732 2.51256 11.5732 2.21967 11.2803Z",
      fill: "currentColor"
    }
  )
), D5 = () => /* @__PURE__ */ R.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    d: "M11.4041 2.02822C11.6273 2.25141 11.6272 2.61322 11.404 2.83635L4.26117 9.97751C4.15372 10.0849 4.00789 10.1452 3.85594 10.1448C3.70399 10.1445 3.55843 10.0837 3.45143 9.97579L0.594289 7.09492C0.372057 6.87084 0.373553 6.50903 0.597631 6.2868C0.821708 6.06457 1.18351 6.06606 1.40575 6.29014L3.85888 8.76365L10.596 2.02813C10.8192 1.805 11.181 1.80504 11.4041 2.02822Z",
    fill: "white"
  }
)), O5 = () => /* @__PURE__ */ R.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 6.5C10.5 6.77614 10.2761 7 10 7H1.5C1.22386 7 1 6.77614 1 6.5V6.5C1 6.22386 1.22386 6 1.5 6H10C10.2761 6 10.5 6.22386 10.5 6.5V6.5Z",
    fill: "white"
  }
)), _5 = () => /* @__PURE__ */ R.createElement(
  "svg",
  {
    viewBox: "0 0 1024 1024",
    focusable: "false",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  /* @__PURE__ */ R.createElement("path", { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" })
), L5 = () => /* @__PURE__ */ R.createElement(
  "svg",
  {
    viewBox: "0 0 1024 1024",
    focusable: "false",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  },
  /* @__PURE__ */ R.createElement("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" })
), N5 = () => /* @__PURE__ */ R.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("path", { d: "M8 13.0005L3 7.50049L8 1.00049", stroke: "currentColor" })), M5 = () => /* @__PURE__ */ R.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("path", { d: "M4 1.00049L9 7.00049L4 13.0005", stroke: "currentColor" })), pw = () => /* @__PURE__ */ R.createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    d: "M1.85355 1.14626C1.65829 0.951001 1.34171 0.951001 1.14645 1.14626C0.951185 1.34153 0.951185 1.65811 1.14645 1.85337L5.29289 5.99982L1.14645 10.1463C0.951185 10.3415 0.951185 10.6581 1.14645 10.8534C1.34171 11.0486 1.65829 11.0486 1.85355 10.8534L6 6.70692L10.1464 10.8534C10.3417 11.0486 10.6583 11.0486 10.8536 10.8534C11.0488 10.6581 11.0488 10.3415 10.8536 10.1463L6.70711 5.99982L10.8536 1.85337C11.0488 1.65811 11.0488 1.34153 10.8536 1.14626C10.6583 0.951001 10.3417 0.951001 10.1464 1.14626L6 5.29271L1.85355 1.14626Z",
    fill: "currentColor"
  }
)), vw = () => /* @__PURE__ */ R.createElement("svg", { width: "41", height: "41", viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#F03E3E" }), /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM16.0303 14.9697C15.7374 14.6768 15.2625 14.6768 14.9696 14.9697C14.6768 15.2626 14.6768 15.7374 14.9696 16.0303L19.4393 20.5L14.9696 24.9697C14.6768 25.2626 14.6768 25.7374 14.9696 26.0303C15.2625 26.3232 15.7374 26.3232 16.0303 26.0303L20.5 21.5607L24.9696 26.0303C25.2625 26.3232 25.7374 26.3232 26.0303 26.0303C26.3232 25.7374 26.3232 25.2626 26.0303 24.9697L21.5607 20.5L26.0303 16.0303C26.3232 15.7374 26.3232 15.2626 26.0303 14.9697C25.7374 14.6768 25.2625 14.6768 24.9696 14.9697L20.5 19.4393L16.0303 14.9697Z",
    fill: "white"
  }
)), hw = () => /* @__PURE__ */ R.createElement("svg", { width: "41", height: "41", viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#35C04C" }), /* @__PURE__ */ R.createElement("mask", { id: "path-2-inside-1_4021_73443", fill: "white" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM26.6123 16.5513C27.0002 16.9445 26.9958 17.5777 26.6026 17.9655L19.4625 25.0082C19.2655 25.2025 19.0084 25.2983 18.7521 25.2962C18.5006 25.2947 18.2494 25.1988 18.0562 25.0082L15.2001 22.1911C14.8069 21.8033 14.8026 21.1701 15.1904 20.7769C15.5782 20.3837 16.2114 20.3794 16.6046 20.7672L18.7593 22.8926L25.1982 16.5416C25.5914 16.1538 26.2245 16.1581 26.6123 16.5513Z"
  }
)), /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM26.6123 16.5513C27.0002 16.9445 26.9958 17.5777 26.6026 17.9655L19.4625 25.0082C19.2655 25.2025 19.0084 25.2983 18.7521 25.2962C18.5006 25.2947 18.2494 25.1988 18.0562 25.0082L15.2001 22.1911C14.8069 21.8033 14.8026 21.1701 15.1904 20.7769C15.5782 20.3837 16.2114 20.3794 16.6046 20.7672L18.7593 22.8926L25.1982 16.5416C25.5914 16.1538 26.2245 16.1581 26.6123 16.5513Z",
    fill: "white"
  }
), /* @__PURE__ */ R.createElement(
  "path",
  {
    d: "M26.6026 17.9655L25.9004 17.2535V17.2535L26.6026 17.9655ZM19.4625 25.0082L18.7602 24.2963L18.7602 24.2963L19.4625 25.0082ZM18.7521 25.2962L18.7602 24.2963L18.7583 24.2963L18.7521 25.2962ZM18.0562 25.0082L17.3539 25.7202L17.3539 25.7202L18.0562 25.0082ZM15.2001 22.1911L14.4979 22.9031H14.4979L15.2001 22.1911ZM15.1904 20.7769L15.9023 21.4792L15.9023 21.4792L15.1904 20.7769ZM16.6046 20.7672L17.3068 20.0553H17.3068L16.6046 20.7672ZM18.7593 22.8926L18.0571 23.6045L18.7593 24.2972L19.4616 23.6045L18.7593 22.8926ZM25.1982 16.5416L25.9004 17.2535L25.9004 17.2535L25.1982 16.5416ZM31.5 20.5C31.5 26.5751 26.5751 31.5 20.5 31.5V33.5C27.6797 33.5 33.5 27.6797 33.5 20.5H31.5ZM20.5 9.5C26.5751 9.5 31.5 14.4249 31.5 20.5H33.5C33.5 13.3203 27.6797 7.5 20.5 7.5V9.5ZM9.5 20.5C9.5 14.4249 14.4249 9.5 20.5 9.5V7.5C13.3203 7.5 7.5 13.3203 7.5 20.5H9.5ZM20.5 31.5C14.4249 31.5 9.5 26.5751 9.5 20.5H7.5C7.5 27.6797 13.3203 33.5 20.5 33.5V31.5ZM27.3049 18.6774C28.0913 17.9018 28.1 16.6355 27.3243 15.8491L25.9004 17.2535V17.2535L27.3049 18.6774ZM20.1647 25.7202L27.3049 18.6774L25.9004 17.2535L18.7602 24.2963L20.1647 25.7202ZM18.744 26.2962C19.2551 26.3004 19.771 26.1084 20.1647 25.7202L18.7602 24.2963L18.7602 24.2963L18.744 26.2962ZM17.3539 25.7202C17.7401 26.1011 18.2442 26.2931 18.7459 26.2962L18.7583 24.2963L18.7584 24.2963L17.3539 25.7202ZM14.4979 22.9031L17.3539 25.7202L18.7584 24.2963L15.9023 21.4792L14.4979 22.9031ZM14.4785 20.0747C13.7028 20.8611 13.7115 22.1274 14.4979 22.9031L15.9023 21.4792L15.9023 21.4792L14.4785 20.0747ZM17.3068 20.0553C16.5204 19.2796 15.2541 19.2883 14.4784 20.0747L15.9023 21.4792H15.9023L17.3068 20.0553ZM19.4616 22.1806L17.3068 20.0553L15.9023 21.4792L18.0571 23.6045L19.4616 22.1806ZM24.4959 15.8296L18.0571 22.1806L19.4616 23.6045L25.9004 17.2535L24.4959 15.8296ZM27.3243 15.8491C26.5486 15.0627 25.2823 15.054 24.4959 15.8296L25.9004 17.2535L25.9004 17.2535L27.3243 15.8491Z",
    fill: "white",
    mask: "url(#path-2-inside-1_4021_73443)"
  }
)), mw = () => /* @__PURE__ */ R.createElement("svg", { width: "41", height: "41", viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#FF881A" }), /* @__PURE__ */ R.createElement(
  "path",
  {
    d: "M20.5 8.5C18.1266 8.5 15.8066 9.20379 13.8332 10.5224C11.8598 11.8409 10.3217 13.7151 9.41345 15.9078C8.5052 18.1005 8.26756 20.5133 8.73058 22.8411C9.1936 25.1689 10.3365 27.307 12.0147 28.9853C13.693 30.6635 15.8311 31.8064 18.1589 32.2694C20.4867 32.7324 22.8995 32.4948 25.0922 31.5865C27.2849 30.6783 29.1591 29.1402 30.4776 27.1668C31.7962 25.1934 32.5 22.8734 32.5 20.5C32.5 18.9241 32.1896 17.3637 31.5866 15.9078C30.9835 14.4519 30.0996 13.129 28.9853 12.0147C27.871 10.9004 26.5481 10.0165 25.0922 9.41345C23.6363 8.81039 22.0759 8.5 20.5 8.5ZM20.5 27.7C20.2437 27.7 19.9931 27.624 19.78 27.4816C19.5669 27.3392 19.4007 27.1368 19.3027 26.9C19.2046 26.6631 19.1789 26.4026 19.2289 26.1512C19.2789 25.8998 19.4023 25.6688 19.5836 25.4876C19.7648 25.3063 19.9958 25.1829 20.2472 25.1329C20.4986 25.0829 20.7591 25.1086 20.996 25.2066C21.2328 25.3047 21.4352 25.4709 21.5776 25.684C21.72 25.8971 21.796 26.1477 21.796 26.404C21.796 26.7477 21.6595 27.0774 21.4164 27.3204C21.1734 27.5635 20.8437 27.7 20.5 27.7ZM21.796 22.084C21.796 22.4277 21.6595 22.7574 21.4164 23.0004C21.1734 23.2435 20.8437 23.38 20.5 23.38C20.1563 23.38 19.8266 23.2435 19.5836 23.0004C19.3405 22.7574 19.204 22.4277 19.204 22.084V14.596C19.204 14.2523 19.3405 13.9226 19.5836 13.6796C19.8266 13.4365 20.1563 13.3 20.5 13.3C20.8437 13.3 21.1734 13.4365 21.4164 13.6796C21.6595 13.9226 21.796 14.2523 21.796 14.596V22.084Z",
    fill: "white"
  }
)), yw = () => /* @__PURE__ */ R.createElement("svg", { width: "41", height: "41", viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#CCD5DD" }), /* @__PURE__ */ R.createElement(
  "path",
  {
    d: "M20.3394 8.50108C13.7134 8.58903 8.41197 14.0345 8.50111 20.6614C8.58905 27.2856 14.0341 32.5858 20.6606 32.4989C27.2854 32.4097 32.588 26.9642 32.4989 20.3386C32.4109 13.7132 26.9672 8.41308 20.3394 8.50108ZM21.53 12.5478C22.794 12.5478 23.1659 13.2653 23.1659 14.0838C23.1659 15.108 22.3273 16.0546 20.8992 16.0546C19.7047 16.0546 19.1339 15.4653 19.1674 14.4932C19.1687 13.6744 19.8687 12.5478 21.53 12.5478ZM18.7688 28.5003C17.9436 28.5003 17.3383 27.9644 17.9168 25.6056L18.8661 21.4242C19.0301 20.7534 19.058 20.4856 18.8661 20.4856C18.6181 20.4856 17.5447 20.9496 16.9115 21.4043L16.4994 20.6816C18.5101 18.8855 20.8194 17.8335 21.8099 17.8335C22.6365 17.8335 22.774 18.8788 22.3606 20.4869L21.2754 24.8831C21.0834 25.659 21.166 25.9271 21.3566 25.9271C21.6046 25.9271 22.4166 25.6043 23.2152 24.9337L23.6833 25.6045C21.7287 27.6952 19.5955 28.5006 18.7688 28.5006L18.7688 28.5003Z",
    fill: "white"
  }
)), U5 = () => /* @__PURE__ */ R.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ R.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2043 6.70142C11.2043 8.9693 9.36575 10.8078 7.09783 10.8078C4.8299 10.8078 2.99139 8.9693 2.99139 6.70142C2.99139 4.43353 4.8299 2.59503 7.09783 2.59503C9.36575 2.59503 11.2043 4.43353 11.2043 6.70142ZM10.8917 10.1194C11.7076 9.21437 12.2043 8.01589 12.2043 6.70142C12.2043 3.88124 9.91803 1.59503 7.09783 1.59503C4.27762 1.59503 1.99139 3.88124 1.99139 6.70142C1.99139 9.52159 4.27762 11.8078 7.09783 11.8078C8.20964 11.8078 9.23846 11.4525 10.0769 10.8492L12.6055 13.3777C12.9046 13.6769 13.1645 13.591 13.3777 13.3778C13.591 13.1645 13.6769 12.9046 13.3778 12.6055L10.8917 10.1194Z",
    fill: "currentColor"
  }
));
var Gl = /* @__PURE__ */ ((d) => (d.text = "text", d.number = "number", d.password = "password", d))(Gl || {});
const aS = ({
  readOnly: d = !1,
  ariaLabel: v,
  styles: m,
  placeholder: w,
  error: T,
  errorText: k,
  bigLabel: S,
  smallLabel: U,
  disabled: O,
  maxLength: L,
  width: M = "100%",
  value: F,
  type: G,
  icon: Q,
  firstIconButton: ee,
  secondIconButton: se,
  handleChange: te,
  handleBlur: ve,
  handleKeyPress: ke,
  name: he,
  id: me,
  nativeProps: re
}) => {
  const le = F ? String(F).length : 0, [ce, Fe] = Re.useState(le), [Pe, be] = Re.useState(!1), Ee = (We) => {
    Fe(We.target.value.length), te && te(We);
  }, et = (We) => {
    ve && ve(We);
  }, Ne = (We) => {
    ke && ke(We);
  }, it = () => G && G !== Gl.password ? G : G === Gl.password ? Pe || (re == null ? void 0 : re.autoComplete) === "off" ? Gl.text : Gl.password : Gl.text, wt = (We) => {
    We.preventDefault(), be(!Pe);
  };
  return /* @__PURE__ */ R.createElement(
    "div",
    {
      className: "Input-wrapper",
      style: {
        width: M
      }
    },
    (S || U || L) && /* @__PURE__ */ R.createElement("div", { className: "Input-top-elements", style: { width: M } }, /* @__PURE__ */ R.createElement("div", null, S && /* @__PURE__ */ R.createElement(
      "div",
      {
        className: vt({
          ["Input-big-label"]: !0,
          ["Input-big-label-default"]: !O || !T,
          ["Input-big-label-disabled"]: O,
          ["Input-big-label-error"]: T
        })
      },
      S
    ), U && /* @__PURE__ */ R.createElement(
      "div",
      {
        className: vt({
          ["Input-small-label"]: !0,
          ["Input-small-label-default "]: !O || !T,
          ["Input-small-label-disabled"]: O,
          ["Input-small-label-error"]: T
        })
      },
      U
    )), L && /* @__PURE__ */ R.createElement(
      "div",
      {
        className: vt({
          ["Input-counter"]: !0,
          ["Input-counter-disabled"]: O
        }),
        style: {
          top: S && "12px" || U && "3px" || ""
        }
      },
      ce,
      "/",
      L
    )),
    /* @__PURE__ */ R.createElement(
      "div",
      {
        className: vt({
          Input: !0,
          ["Input-disabled"]: O,
          ["Input-error"]: T
        }),
        style: {
          width: M
        }
      },
      Q && /* @__PURE__ */ R.createElement(
        "span",
        {
          className: vt({
            ["Input-icon"]: !0,
            ["Input-icon-disabled"]: O
          })
        },
        Q
      ),
      /* @__PURE__ */ R.createElement(
        "input",
        {
          readOnly: d,
          ...re,
          className: vt({
            ["Input-textfield"]: !0,
            ["Input-textfield-disabled"]: O,
            ["Input-security"]: Gl.password && !Pe && (re == null ? void 0 : re.autoComplete) === "off",
            [(re == null ? void 0 : re.className) || ""]: re == null ? void 0 : re.className
          }),
          "aria-label": v || "",
          type: it(),
          placeholder: w || "",
          disabled: O,
          maxLength: L,
          onBlur: et,
          onChange: Ee,
          onKeyPress: Ne,
          value: F,
          name: he || v || "",
          id: me,
          style: { width: M, ...m }
        }
      ),
      ee && /* @__PURE__ */ R.createElement(
        "button",
        {
          className: vt({
            ["Input-button"]: !0,
            ["Input-button-disabled"]: O || ee.disabled
          }),
          onClick: ee.handleClick,
          disabled: O || ee.disabled
        },
        ee.icon
      ),
      ee && se && /* @__PURE__ */ R.createElement("div", { className: "Input-button-divider" }),
      se && G !== `${Gl.password}` && /* @__PURE__ */ R.createElement(
        "button",
        {
          className: vt({
            ["Input-button"]: !0,
            ["Input-button-disabled"]: O || se.disabled
          }),
          onClick: se.handleClick,
          disabled: O || se.disabled,
          type: "button"
        },
        se.icon
      ),
      G === `${Gl.password}` && /* @__PURE__ */ R.createElement(
        "button",
        {
          "aria-label": Pe ? "password visiable" : "password not visiable",
          className: vt({
            ["Input-button"]: !0,
            ["Input-button-password"]: !0,
            ["Input-button-disabled"]: O
          }),
          onClick: wt,
          type: "button"
        },
        Pe ? /* @__PURE__ */ R.createElement(x5, null) : /* @__PURE__ */ R.createElement(T5, null)
      )
    ),
    k && /* @__PURE__ */ R.createElement("div", { className: "Input-error-text" }, k)
  );
};
const T4 = ({
  ariaLabel: d,
  disabled: v,
  error: m,
  defaultValue: w,
  value: T,
  label: k,
  handleClick: S,
  handleChange: U
}) => {
  const O = (L) => {
    U && U(L.target.checked);
  };
  return /* @__PURE__ */ R.createElement("div", { className: "Toggle-wrapper" }, /* @__PURE__ */ R.createElement(
    "label",
    {
      className: vt({
        Toggle: !0,
        ["Toggle-default"]: !0,
        ["Toggle-disabled"]: v,
        ["Toggle-error"]: m
      })
    },
    /* @__PURE__ */ R.createElement(
      "input",
      {
        id: "toggle",
        type: "checkbox",
        className: "Toggle-focus",
        "aria-label": d || "",
        onClick: S,
        onChange: O,
        checked: T,
        defaultChecked: w,
        disabled: v
      }
    ),
    /* @__PURE__ */ R.createElement(
      "span",
      {
        className: vt({
          ["Toggle-slider"]: !0,
          ["Toggle-slider-default"]: !0,
          ["Toggle-slider-disabled"]: v,
          ["Toggle-slider-error"]: m
        })
      }
    )
  ), /* @__PURE__ */ R.createElement(
    "label",
    {
      htmlFor: "toggle",
      className: vt({
        ["Toggle-label"]: !0,
        ["Toggle-label-error"]: m,
        ["Toggle-label-disabled"]: v
      })
    },
    k
  ));
};
const x4 = ({
  children: d,
  size: v,
  bold: m,
  underline: w,
  uppercase: T,
  color: k,
  spacing: S,
  className: U,
  display: O
}) => /* @__PURE__ */ R.createElement(
  "div",
  {
    className: vt({
      Text: !0,
      ["Text-display "]: !!O,
      ["Text-bold"]: !!m,
      ["Text-underline"]: !!w,
      ["Text-uppercase"]: !!T,
      [U || ""]: !!U
    }),
    style: {
      fontSize: v,
      color: k,
      letterSpacing: S
    }
  },
  d
);
const k4 = ({
  header: d,
  ariaLabel: v,
  content: m,
  className: w,
  label: T
}) => {
  const [k, S] = Re.useState(!1);
  return /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        Expanded: !0,
        ["Expanded-opened"]: k,
        [w || ""]: !!w
      })
    },
    /* @__PURE__ */ R.createElement("div", { className: "Expanded-header" }, /* @__PURE__ */ R.createElement(
      Nr,
      {
        handleClick: () => S(!k),
        leftIcon: k ? /* @__PURE__ */ R.createElement(wy, null) : /* @__PURE__ */ R.createElement(Cy, null),
        theme: Gt.noBorder,
        ariaLabel: v,
        className: "Expanded-header-toggle-button",
        text: T
      }
    ), /* @__PURE__ */ R.createElement("div", { className: "Expanded-header-content" }, d)),
    k && /* @__PURE__ */ R.createElement("div", { className: "Expanded-content" }, m)
  );
};
var G2 = function(v) {
  return v.reduce(function(m, w) {
    var T = w[0], k = w[1];
    return m[T] = k, m;
  }, {});
}, q2 = typeof window < "u" && window.document && window.document.createElement ? Re.useLayoutEffect : Re.useEffect, J1 = {}, A5 = {
  get exports() {
    return J1;
  },
  set exports(d) {
    J1 = d;
  }
}, Ua = {}, gy = {}, z5 = {
  get exports() {
    return gy;
  },
  set exports(d) {
    gy = d;
  }
}, Z1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X2;
function H5() {
  return X2 || (X2 = 1, function(d) {
    function v(de, He) {
      var _ = de.length;
      de.push(He);
      e:
        for (; 0 < _; ) {
          var ne = _ - 1 >>> 1, we = de[ne];
          if (0 < T(we, He))
            de[ne] = He, de[_] = we, _ = ne;
          else
            break e;
        }
    }
    function m(de) {
      return de.length === 0 ? null : de[0];
    }
    function w(de) {
      if (de.length === 0)
        return null;
      var He = de[0], _ = de.pop();
      if (_ !== He) {
        de[0] = _;
        e:
          for (var ne = 0, we = de.length, tt = we >>> 1; ne < tt; ) {
            var Ie = 2 * (ne + 1) - 1, pt = de[Ie], ct = Ie + 1, St = de[ct];
            if (0 > T(pt, _))
              ct < we && 0 > T(St, pt) ? (de[ne] = St, de[ct] = _, ne = ct) : (de[ne] = pt, de[Ie] = _, ne = Ie);
            else if (ct < we && 0 > T(St, _))
              de[ne] = St, de[ct] = _, ne = ct;
            else
              break e;
          }
      }
      return He;
    }
    function T(de, He) {
      var _ = de.sortIndex - He.sortIndex;
      return _ !== 0 ? _ : de.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      d.unstable_now = function() {
        return k.now();
      };
    } else {
      var S = Date, U = S.now();
      d.unstable_now = function() {
        return S.now() - U;
      };
    }
    var O = [], L = [], M = 1, F = null, G = 3, Q = !1, ee = !1, se = !1, te = typeof setTimeout == "function" ? setTimeout : null, ve = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function he(de) {
      for (var He = m(L); He !== null; ) {
        if (He.callback === null)
          w(L);
        else if (He.startTime <= de)
          w(L), He.sortIndex = He.expirationTime, v(O, He);
        else
          break;
        He = m(L);
      }
    }
    function me(de) {
      if (se = !1, he(de), !ee)
        if (m(O) !== null)
          ee = !0, We(re);
        else {
          var He = m(L);
          He !== null && Te(me, He.startTime - de);
        }
    }
    function re(de, He) {
      ee = !1, se && (se = !1, ve(Fe), Fe = -1), Q = !0;
      var _ = G;
      try {
        for (he(He), F = m(O); F !== null && (!(F.expirationTime > He) || de && !Ee()); ) {
          var ne = F.callback;
          if (typeof ne == "function") {
            F.callback = null, G = F.priorityLevel;
            var we = ne(F.expirationTime <= He);
            He = d.unstable_now(), typeof we == "function" ? F.callback = we : F === m(O) && w(O), he(He);
          } else
            w(O);
          F = m(O);
        }
        if (F !== null)
          var tt = !0;
        else {
          var Ie = m(L);
          Ie !== null && Te(me, Ie.startTime - He), tt = !1;
        }
        return tt;
      } finally {
        F = null, G = _, Q = !1;
      }
    }
    var le = !1, ce = null, Fe = -1, Pe = 5, be = -1;
    function Ee() {
      return !(d.unstable_now() - be < Pe);
    }
    function et() {
      if (ce !== null) {
        var de = d.unstable_now();
        be = de;
        var He = !0;
        try {
          He = ce(!0, de);
        } finally {
          He ? Ne() : (le = !1, ce = null);
        }
      } else
        le = !1;
    }
    var Ne;
    if (typeof ke == "function")
      Ne = function() {
        ke(et);
      };
    else if (typeof MessageChannel < "u") {
      var it = new MessageChannel(), wt = it.port2;
      it.port1.onmessage = et, Ne = function() {
        wt.postMessage(null);
      };
    } else
      Ne = function() {
        te(et, 0);
      };
    function We(de) {
      ce = de, le || (le = !0, Ne());
    }
    function Te(de, He) {
      Fe = te(function() {
        de(d.unstable_now());
      }, He);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, d.unstable_continueExecution = function() {
      ee || Q || (ee = !0, We(re));
    }, d.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pe = 0 < de ? Math.floor(1e3 / de) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, d.unstable_getFirstCallbackNode = function() {
      return m(O);
    }, d.unstable_next = function(de) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = G;
      }
      var _ = G;
      G = He;
      try {
        return de();
      } finally {
        G = _;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(de, He) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var _ = G;
      G = de;
      try {
        return He();
      } finally {
        G = _;
      }
    }, d.unstable_scheduleCallback = function(de, He, _) {
      var ne = d.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? ne + _ : ne) : _ = ne, de) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = _ + we, de = { id: M++, callback: He, priorityLevel: de, startTime: _, expirationTime: we, sortIndex: -1 }, _ > ne ? (de.sortIndex = _, v(L, de), m(O) === null && de === m(L) && (se ? (ve(Fe), Fe = -1) : se = !0, Te(me, _ - ne))) : (de.sortIndex = we, v(O, de), ee || Q || (ee = !0, We(re))), de;
    }, d.unstable_shouldYield = Ee, d.unstable_wrapCallback = function(de) {
      var He = G;
      return function() {
        var _ = G;
        G = He;
        try {
          return de.apply(this, arguments);
        } finally {
          G = _;
        }
      };
    };
  }(Z1)), Z1;
}
var K1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z2;
function F5() {
  return Z2 || (Z2 = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, m = !1, w = 5;
      function T(Se, Ye) {
        var ht = Se.length;
        Se.push(Ye), U(Se, Ye, ht);
      }
      function k(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function S(Se) {
        if (Se.length === 0)
          return null;
        var Ye = Se[0], ht = Se.pop();
        return ht !== Ye && (Se[0] = ht, O(Se, ht, 0)), Ye;
      }
      function U(Se, Ye, ht) {
        for (var jt = ht; jt > 0; ) {
          var Bt = jt - 1 >>> 1, Ln = Se[Bt];
          if (L(Ln, Ye) > 0)
            Se[Bt] = Ye, Se[jt] = Ln, jt = Bt;
          else
            return;
        }
      }
      function O(Se, Ye, ht) {
        for (var jt = ht, Bt = Se.length, Ln = Bt >>> 1; jt < Ln; ) {
          var Cn = (jt + 1) * 2 - 1, Ur = Se[Cn], Zt = Cn + 1, pa = Se[Zt];
          if (L(Ur, Ye) < 0)
            Zt < Bt && L(pa, Ur) < 0 ? (Se[jt] = pa, Se[Zt] = Ye, jt = Zt) : (Se[jt] = Ur, Se[Cn] = Ye, jt = Cn);
          else if (Zt < Bt && L(pa, Ye) < 0)
            Se[jt] = pa, Se[Zt] = Ye, jt = Zt;
          else
            return;
        }
      }
      function L(Se, Ye) {
        var ht = Se.sortIndex - Ye.sortIndex;
        return ht !== 0 ? ht : Se.id - Ye.id;
      }
      var M = 1, F = 2, G = 3, Q = 4, ee = 5;
      function se(Se, Ye) {
      }
      var te = typeof performance == "object" && typeof performance.now == "function";
      if (te) {
        var ve = performance;
        d.unstable_now = function() {
          return ve.now();
        };
      } else {
        var ke = Date, he = ke.now();
        d.unstable_now = function() {
          return ke.now() - he;
        };
      }
      var me = 1073741823, re = -1, le = 250, ce = 5e3, Fe = 1e4, Pe = me, be = [], Ee = [], et = 1, Ne = null, it = G, wt = !1, We = !1, Te = !1, de = typeof setTimeout == "function" ? setTimeout : null, He = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(Se) {
        for (var Ye = k(Ee); Ye !== null; ) {
          if (Ye.callback === null)
            S(Ee);
          else if (Ye.startTime <= Se)
            S(Ee), Ye.sortIndex = Ye.expirationTime, T(be, Ye);
          else
            return;
          Ye = k(Ee);
        }
      }
      function we(Se) {
        if (Te = !1, ne(Se), !We)
          if (k(be) !== null)
            We = !0, Mr(tt);
          else {
            var Ye = k(Ee);
            Ye !== null && Tn(we, Ye.startTime - Se);
          }
      }
      function tt(Se, Ye) {
        We = !1, Te && (Te = !1, cr()), wt = !0;
        var ht = it;
        try {
          var jt;
          if (!m)
            return Ie(Se, Ye);
        } finally {
          Ne = null, it = ht, wt = !1;
        }
      }
      function Ie(Se, Ye) {
        var ht = Ye;
        for (ne(ht), Ne = k(be); Ne !== null && !v && !(Ne.expirationTime > ht && (!Se || ja())); ) {
          var jt = Ne.callback;
          if (typeof jt == "function") {
            Ne.callback = null, it = Ne.priorityLevel;
            var Bt = Ne.expirationTime <= ht, Ln = jt(Bt);
            ht = d.unstable_now(), typeof Ln == "function" ? Ne.callback = Ln : Ne === k(be) && S(be), ne(ht);
          } else
            S(be);
          Ne = k(be);
        }
        if (Ne !== null)
          return !0;
        var Cn = k(Ee);
        return Cn !== null && Tn(we, Cn.startTime - ht), !1;
      }
      function pt(Se, Ye) {
        switch (Se) {
          case M:
          case F:
          case G:
          case Q:
          case ee:
            break;
          default:
            Se = G;
        }
        var ht = it;
        it = Se;
        try {
          return Ye();
        } finally {
          it = ht;
        }
      }
      function ct(Se) {
        var Ye;
        switch (it) {
          case M:
          case F:
          case G:
            Ye = G;
            break;
          default:
            Ye = it;
            break;
        }
        var ht = it;
        it = Ye;
        try {
          return Se();
        } finally {
          it = ht;
        }
      }
      function St(Se) {
        var Ye = it;
        return function() {
          var ht = it;
          it = Ye;
          try {
            return Se.apply(this, arguments);
          } finally {
            it = ht;
          }
        };
      }
      function st(Se, Ye, ht) {
        var jt = d.unstable_now(), Bt;
        if (typeof ht == "object" && ht !== null) {
          var Ln = ht.delay;
          typeof Ln == "number" && Ln > 0 ? Bt = jt + Ln : Bt = jt;
        } else
          Bt = jt;
        var Cn;
        switch (Se) {
          case M:
            Cn = re;
            break;
          case F:
            Cn = le;
            break;
          case ee:
            Cn = Pe;
            break;
          case Q:
            Cn = Fe;
            break;
          case G:
          default:
            Cn = ce;
            break;
        }
        var Ur = Bt + Cn, Zt = {
          id: et++,
          callback: Ye,
          priorityLevel: Se,
          startTime: Bt,
          expirationTime: Ur,
          sortIndex: -1
        };
        return Bt > jt ? (Zt.sortIndex = Bt, T(Ee, Zt), k(be) === null && Zt === k(Ee) && (Te ? cr() : Te = !0, Tn(we, Bt - jt))) : (Zt.sortIndex = Ur, T(be, Zt), !We && !wt && (We = !0, Mr(tt))), Zt;
      }
      function At() {
      }
      function Fa() {
        !We && !wt && (We = !0, Mr(tt));
      }
      function Fn() {
        return k(be);
      }
      function Kr(Se) {
        Se.callback = null;
      }
      function rn() {
        return it;
      }
      var jn = !1, sr = null, Gn = -1, En = w, Jr = -1;
      function ja() {
        var Se = d.unstable_now() - Jr;
        return !(Se < En);
      }
      function an() {
      }
      function _n(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? En = Math.floor(1e3 / Se) : En = w;
      }
      var ea = function() {
        if (sr !== null) {
          var Se = d.unstable_now();
          Jr = Se;
          var Ye = !0, ht = !0;
          try {
            ht = sr(Ye, Se);
          } finally {
            ht ? qn() : (jn = !1, sr = null);
          }
        } else
          jn = !1;
      }, qn;
      if (typeof _ == "function")
        qn = function() {
          _(ea);
        };
      else if (typeof MessageChannel < "u") {
        var gr = new MessageChannel(), Xn = gr.port2;
        gr.port1.onmessage = ea, qn = function() {
          Xn.postMessage(null);
        };
      } else
        qn = function() {
          de(ea, 0);
        };
      function Mr(Se) {
        sr = Se, jn || (jn = !0, qn());
      }
      function Tn(Se, Ye) {
        Gn = de(function() {
          Se(d.unstable_now());
        }, Ye);
      }
      function cr() {
        He(Gn), Gn = -1;
      }
      var Xl = an, ni = null;
      d.unstable_IdlePriority = ee, d.unstable_ImmediatePriority = M, d.unstable_LowPriority = Q, d.unstable_NormalPriority = G, d.unstable_Profiling = ni, d.unstable_UserBlockingPriority = F, d.unstable_cancelCallback = Kr, d.unstable_continueExecution = Fa, d.unstable_forceFrameRate = _n, d.unstable_getCurrentPriorityLevel = rn, d.unstable_getFirstCallbackNode = Fn, d.unstable_next = ct, d.unstable_pauseExecution = At, d.unstable_requestPaint = Xl, d.unstable_runWithPriority = pt, d.unstable_scheduleCallback = st, d.unstable_shouldYield = ja, d.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(K1)), K1;
}
var K2;
function gw() {
  return K2 || (K2 = 1, function(d) {
    process.env.NODE_ENV === "production" ? d.exports = H5() : d.exports = F5();
  }(z5)), gy;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J2;
function j5() {
  if (J2)
    return Ua;
  J2 = 1;
  var d = Re, v = gw();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var w = /* @__PURE__ */ new Set(), T = {};
  function k(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (T[n] = r, n = 0; n < r.length; n++)
      w.add(r[n]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, F = {};
  function G(n) {
    return O.call(F, n) ? !0 : O.call(M, n) ? !1 : L.test(n) ? F[n] = !0 : (M[n] = !0, !1);
  }
  function Q(n, r, l, u) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ee(n, r, l, u) {
    if (r === null || typeof r > "u" || Q(n, r, l, u))
      return !0;
    if (u)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function se(n, r, l, u, c, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    te[n] = new se(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    te[r] = new se(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    te[n] = new se(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    te[n] = new se(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    te[n] = new se(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    te[n] = new se(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    te[n] = new se(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    te[n] = new se(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    te[n] = new se(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ve = /[\-:]([a-z])/g;
  function ke(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ve,
      ke
    );
    te[r] = new se(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ve, ke);
    te[r] = new se(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ve, ke);
    te[r] = new se(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    te[n] = new se(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), te.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    te[n] = new se(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function he(n, r, l, u) {
    var c = te.hasOwnProperty(r) ? te[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, l, c, u) && (l = null), u || c === null ? G(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var me = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, re = Symbol.for("react.element"), le = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), Fe = Symbol.for("react.strict_mode"), Pe = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), et = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function He(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _ = Object.assign, ne;
  function we(n) {
    if (ne === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        ne = r && r[1] || "";
      }
    return `
` + ne + n;
  }
  var tt = !1;
  function Ie(n, r) {
    if (!n || tt)
      return "";
    tt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (W) {
            var u = W;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (W) {
            u = W;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          u = W;
        }
        n();
      }
    } catch (W) {
      if (W && u && typeof W.stack == "string") {
        for (var c = W.stack.split(`
`), p = u.stack.split(`
`), E = c.length - 1, x = p.length - 1; 1 <= E && 0 <= x && c[E] !== p[x]; )
          x--;
        for (; 1 <= E && 0 <= x; E--, x--)
          if (c[E] !== p[x]) {
            if (E !== 1 || x !== 1)
              do
                if (E--, x--, 0 > x || c[E] !== p[x]) {
                  var N = `
` + c[E].replace(" at new ", " at ");
                  return n.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", n.displayName)), N;
                }
              while (1 <= E && 0 <= x);
            break;
          }
      }
    } finally {
      tt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ie(n.type, !1), n;
      case 11:
        return n = Ie(n.type.render, !1), n;
      case 1:
        return n = Ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ce:
        return "Fragment";
      case le:
        return "Portal";
      case Pe:
        return "Profiler";
      case Fe:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ee:
          return (n.displayName || "Context") + ".Consumer";
        case be:
          return (n._context.displayName || "Context") + ".Provider";
        case et:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case wt:
          return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
        case We:
          r = n._payload, n = n._init;
          try {
            return ct(n(r));
          } catch {
          }
      }
    return null;
  }
  function St(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ct(r);
      case 8:
        return r === Fe ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function st(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function At(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Fa(n) {
    var r = At(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(E) {
        u = "" + E, p.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Fn(n) {
    n._valueTracker || (n._valueTracker = Fa(n));
  }
  function Kr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = At(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function jn(n, r) {
    var l = r.checked;
    return _({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function sr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = st(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Gn(n, r) {
    r = r.checked, r != null && he(n, "checked", r, !1);
  }
  function En(n, r) {
    Gn(n, r);
    var l = st(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ja(n, r.type, l) : r.hasOwnProperty("defaultValue") && ja(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Jr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ja(n, r, l) {
    (r !== "number" || rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var an = Array.isArray;
  function _n(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + st(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ea(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return _({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (an(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: st(l) };
  }
  function gr(n, r) {
    var l = st(r.value), u = st(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function Xn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Mr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Tn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cr, Xl = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ni(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Se = {
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
    strokeWidth: !0
  }, Ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Se).forEach(function(n) {
    Ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Se[r] = Se[n];
    });
  });
  function ht(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Se.hasOwnProperty(n) && Se[n] ? ("" + r).trim() : r + "px";
  }
  function jt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = ht(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Bt = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ln(n, r) {
    if (r) {
      if (Bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function Cn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var Ur = null;
  function Zt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var pa = null, sn = null, qt = null;
  function Zl(n) {
    if (n = Es(n)) {
      if (typeof pa != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = Qe(r), pa(n.stateNode, n.type, r));
    }
  }
  function bi(n) {
    sn ? qt ? qt.push(n) : qt = [n] : sn = n;
  }
  function Io() {
    if (sn) {
      var n = sn, r = qt;
      if (qt = sn = null, Zl(n), r)
        for (n = 0; n < r.length; n++)
          Zl(r[n]);
    }
  }
  function cc(n, r) {
    return n(r);
  }
  function fc() {
  }
  var Yo = !1;
  function es(n, r, l) {
    if (Yo)
      return n(r, l);
    Yo = !0;
    try {
      return cc(n, r, l);
    } finally {
      Yo = !1, (sn !== null || qt !== null) && (fc(), Io());
    }
  }
  function Va(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = Qe(l);
    if (u === null)
      return null;
    l = u[r];
    e:
      switch (r) {
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
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(m(231, r, typeof l));
    return l;
  }
  var tl = !1;
  if (U)
    try {
      var ri = {};
      Object.defineProperty(ri, "passive", { get: function() {
        tl = !0;
      } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
    } catch {
      tl = !1;
    }
  function nl(n, r, l, u, c, p, E, x, N) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, W);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var ta = !1, Ba = null, rl = !1, al = null, Qo = { onError: function(n) {
    ta = !0, Ba = n;
  } };
  function ts(n, r, l, u, c, p, E, x, N) {
    ta = !1, Ba = null, nl.apply(Qo, arguments);
  }
  function hn(n, r, l, u, c, p, E, x, N) {
    if (ts.apply(this, arguments), ta) {
      if (ta) {
        var W = Ba;
        ta = !1, Ba = null;
      } else
        throw Error(m(198));
      rl || (rl = !0, al = W);
    }
  }
  function va(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Kl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function il(n) {
    if (va(n) !== n)
      throw Error(m(188));
  }
  function Zn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = va(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === l)
            return il(c), n;
          if (p === u)
            return il(c), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== u.return)
        l = c, u = p;
      else {
        for (var E = !1, x = c.child; x; ) {
          if (x === l) {
            E = !0, l = c, u = p;
            break;
          }
          if (x === u) {
            E = !0, u = c, l = p;
            break;
          }
          x = x.sibling;
        }
        if (!E) {
          for (x = p.child; x; ) {
            if (x === l) {
              E = !0, l = p, u = c;
              break;
            }
            if (x === u) {
              E = !0, u = p, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!E)
            throw Error(m(189));
        }
      }
      if (l.alternate !== u)
        throw Error(m(190));
    }
    if (l.tag !== 3)
      throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function dc(n) {
    return n = Zn(n), n !== null ? pc(n) : null;
  }
  function pc(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = pc(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var ns = v.unstable_scheduleCallback, vc = v.unstable_cancelCallback, ud = v.unstable_shouldYield, sd = v.unstable_requestPaint, ln = v.unstable_now, cd = v.unstable_getCurrentPriorityLevel, Pa = v.unstable_ImmediatePriority, mt = v.unstable_UserBlockingPriority, ai = v.unstable_NormalPriority, ll = v.unstable_LowPriority, Wo = v.unstable_IdlePriority, ol = null, Ar = null;
  function rs(n) {
    if (Ar && typeof Ar.onCommitFiberRoot == "function")
      try {
        Ar.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Sr = Math.clz32 ? Math.clz32 : hc, as = Math.log, is = Math.LN2;
  function hc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (as(n) / is | 0) | 0;
  }
  var Go = 64, ul = 4194304;
  function $a(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Er(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var x = E & ~c;
      x !== 0 ? u = $a(x) : (p &= E, p !== 0 && (u = $a(p)));
    } else
      E = l & ~c, E !== 0 ? u = $a(E) : p !== 0 && (u = $a(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Sr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function sl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function cl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var E = 31 - Sr(p), x = 1 << E, N = c[E];
      N === -1 ? (!(x & l) || x & u) && (c[E] = sl(x, r)) : N <= r && (n.expiredLanes |= x), p &= ~x;
    }
  }
  function fl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qo() {
    var n = Go;
    return Go <<= 1, !(Go & 4194240) && (Go = 64), n;
  }
  function Xo(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ri(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Sr(r), n[r] = l;
  }
  function fd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Sr(l), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~p;
    }
  }
  function ii(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Sr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function Zo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jl, Ko, Dt, Jo, eu, lt = !1, eo = [], cn = null, zr = null, Cr = null, dl = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map(), zt = [], mc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Hr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        cn = null;
        break;
      case "dragenter":
      case "dragleave":
        zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Cr = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mn.delete(r.pointerId);
    }
  }
  function Vn(n, r, l, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = Es(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function li(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return cn = Vn(cn, n, r, l, u, c), !0;
      case "dragenter":
        return zr = Vn(zr, n, r, l, u, c), !0;
      case "mouseover":
        return Cr = Vn(Cr, n, r, l, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return dl.set(p, Vn(dl.get(p) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, mn.set(p, Vn(mn.get(p) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function yc(n) {
    var r = ga(n.target);
    if (r !== null) {
      var l = va(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Kl(l), r !== null) {
            n.blockedOn = r, eu(n.priority, function() {
              Dt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ti(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = nu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Ur = u, l.target.dispatchEvent(u), Ur = null;
      } else
        return r = Es(l), r !== null && Ko(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function pl(n, r, l) {
    Ti(n) && l.delete(r);
  }
  function gc() {
    lt = !1, cn !== null && Ti(cn) && (cn = null), zr !== null && Ti(zr) && (zr = null), Cr !== null && Ti(Cr) && (Cr = null), dl.forEach(pl), mn.forEach(pl);
  }
  function ha(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lt || (lt = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, gc)));
  }
  function vl(n) {
    function r(c) {
      return ha(c, n);
    }
    if (0 < eo.length) {
      ha(eo[0], n);
      for (var l = 1; l < eo.length; l++) {
        var u = eo[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (cn !== null && ha(cn, n), zr !== null && ha(zr, n), Cr !== null && ha(Cr, n), dl.forEach(r), mn.forEach(r), l = 0; l < zt.length; l++)
      u = zt[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < zt.length && (l = zt[0], l.blockedOn === null); )
      yc(l), l.blockedOn === null && zt.shift();
  }
  var hl = me.ReactCurrentBatchConfig, ma = !0;
  function tu(n, r, l, u) {
    var c = Lt, p = hl.transition;
    hl.transition = null;
    try {
      Lt = 1, yl(n, r, l, u);
    } finally {
      Lt = c, hl.transition = p;
    }
  }
  function ml(n, r, l, u) {
    var c = Lt, p = hl.transition;
    hl.transition = null;
    try {
      Lt = 4, yl(n, r, l, u);
    } finally {
      Lt = c, hl.transition = p;
    }
  }
  function yl(n, r, l, u) {
    if (ma) {
      var c = nu(n, r, l, u);
      if (c === null)
        kc(n, r, u, to, l), Hr(n, u);
      else if (li(c, n, r, l, u))
        u.stopPropagation();
      else if (Hr(n, u), r & 4 && -1 < mc.indexOf(n)) {
        for (; c !== null; ) {
          var p = Es(c);
          if (p !== null && Jl(p), p = nu(n, r, l, u), p === null && kc(n, r, u, to, l), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        kc(n, r, u, null, l);
    }
  }
  var to = null;
  function nu(n, r, l, u) {
    if (to = null, n = Zt(u), n = ga(n), n !== null)
      if (r = va(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Kl(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return to = n, null;
  }
  function ls(n) {
    switch (n) {
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
        switch (cd()) {
          case Pa:
            return 1;
          case mt:
            return 4;
          case ai:
          case ll:
            return 16;
          case Wo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ia = null, g = null, D = null;
  function I() {
    if (D)
      return D;
    var n, r = g, l = r.length, u, c = "value" in Ia ? Ia.value : Ia.textContent, p = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var E = l - n;
    for (u = 1; u <= E && r[l - u] === c[p - u]; u++)
      ;
    return D = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function fe() {
    return !0;
  }
  function Ze() {
    return !1;
  }
  function Ce(n) {
    function r(l, u, c, p, E) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = E, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(p) : p[x]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? fe : Ze, this.isPropagationStopped = Ze, this;
    }
    return _(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = fe);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = fe);
    }, persist: function() {
    }, isPersistent: fe }), r;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yt = Ce(qe), Ot = _({}, qe, { view: 0, detail: 0 }), It = Ce(Ot), Vt, Yt, Xt, bt = _({}, Ot, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: md, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (Vt = n.screenX - Xt.screenX, Yt = n.screenY - Xt.screenY) : Yt = Vt = 0, Xt = n), Vt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Yt;
  } }), xi = Ce(bt), ru = _({}, bt, { dataTransfer: 0 }), os = Ce(ru), dd = _({}, Ot, { relatedTarget: 0 }), Ya = Ce(dd), us = _({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ss = Ce(us), pd = _({}, qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), xy = Ce(pd), ky = _({}, qe, { data: 0 }), vd = Ce(ky), hd = {
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
    MozPrintableKey: "Unidentified"
  }, Ov = {
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
    224: "Meta"
  }, _v = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = _v[n]) ? !!r[n] : !1;
  }
  function md() {
    return Lv;
  }
  var ki = _({}, Ot, { key: function(n) {
    if (n.key) {
      var r = hd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ov[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: md, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Dy = Ce(ki), yd = _({}, bt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = Ce(yd), gd = _({}, Ot, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: md }), Oy = Ce(gd), Ec = _({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nv = Ce(Ec), Fr = _({}, bt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Di = Ce(Fr), xn = [9, 13, 27, 32], Qa = U && "CompositionEvent" in window, no = null;
  U && "documentMode" in document && (no = document.documentMode);
  var Cc = U && "TextEvent" in window && !no, Mv = U && (!Qa || no && 8 < no && 11 >= no), au = String.fromCharCode(32), Uv = !1;
  function Av(n, r) {
    switch (n) {
      case "keyup":
        return xn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var iu = !1;
  function _y(n, r) {
    switch (n) {
      case "compositionend":
        return wc(r);
      case "keypress":
        return r.which !== 32 ? null : (Uv = !0, au);
      case "textInput":
        return n = r.data, n === au && Uv ? null : n;
      default:
        return null;
    }
  }
  function Ly(n, r) {
    if (iu)
      return n === "compositionend" || !Qa && Av(n, r) ? (n = I(), D = g = Ia = null, iu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Mv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var zv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!zv[n.type] : r === "textarea";
  }
  function Fv(n, r, l, u) {
    bi(u), r = ys(r, "onChange"), 0 < r.length && (l = new yt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var cs = null, lu = null;
  function ou(n) {
    xc(n, 0);
  }
  function uu(n) {
    var r = cu(n);
    if (Kr(r))
      return n;
  }
  function jv(n, r) {
    if (n === "change")
      return r;
  }
  var Sd = !1;
  if (U) {
    var Ed;
    if (U) {
      var Cd = "oninput" in document;
      if (!Cd) {
        var Vv = document.createElement("div");
        Vv.setAttribute("oninput", "return;"), Cd = typeof Vv.oninput == "function";
      }
      Ed = Cd;
    } else
      Ed = !1;
    Sd = Ed && (!document.documentMode || 9 < document.documentMode);
  }
  function Bv() {
    cs && (cs.detachEvent("onpropertychange", Pv), lu = cs = null);
  }
  function Pv(n) {
    if (n.propertyName === "value" && uu(lu)) {
      var r = [];
      Fv(r, lu, n, Zt(n)), es(ou, r);
    }
  }
  function Ny(n, r, l) {
    n === "focusin" ? (Bv(), cs = r, lu = l, cs.attachEvent("onpropertychange", Pv)) : n === "focusout" && Bv();
  }
  function My(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return uu(lu);
  }
  function Uy(n, r) {
    if (n === "click")
      return uu(r);
  }
  function $v(n, r) {
    if (n === "input" || n === "change")
      return uu(r);
  }
  function Ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ya = typeof Object.is == "function" ? Object.is : Ay;
  function fs(n, r) {
    if (ya(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!O.call(r, c) || !ya(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Iv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Yv(n, r) {
    var l = Iv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r)
          return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Iv(l);
    }
  }
  function Qv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Qv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function bc() {
    for (var n = window, r = rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = rn(n.document);
    }
    return r;
  }
  function Oi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Rc(n) {
    var r = bc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Qv(l.ownerDocument.documentElement, l)) {
      if (u !== null && Oi(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = Yv(l, p);
          var E = Yv(
            l,
            u
          );
          c && E && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Wv = U && "documentMode" in document && 11 >= document.documentMode, Wa = null, wd = null, ds = null, bd = !1;
  function Gv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    bd || Wa == null || Wa !== rn(u) || (u = Wa, "selectionStart" in u && Oi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ds && fs(ds, u) || (ds = u, u = ys(wd, "onSelect"), 0 < u.length && (r = new yt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = Wa)));
  }
  function Tc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ro = { animationend: Tc("Animation", "AnimationEnd"), animationiteration: Tc("Animation", "AnimationIteration"), animationstart: Tc("Animation", "AnimationStart"), transitionend: Tc("Transition", "TransitionEnd") }, Rd = {}, Td = {};
  U && (Td = document.createElement("div").style, "AnimationEvent" in window || (delete ro.animationend.animation, delete ro.animationiteration.animation, delete ro.animationstart.animation), "TransitionEvent" in window || delete ro.transitionend.transition);
  function Bn(n) {
    if (Rd[n])
      return Rd[n];
    if (!ro[n])
      return n;
    var r = ro[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Td)
        return Rd[n] = r[l];
    return n;
  }
  var xd = Bn("animationend"), qv = Bn("animationiteration"), Xv = Bn("animationstart"), Zv = Bn("transitionend"), Kv = /* @__PURE__ */ new Map(), Jv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _i(n, r) {
    Kv.set(n, r), k(r, [n]);
  }
  for (var ps = 0; ps < Jv.length; ps++) {
    var ao = Jv[ps], zy = ao.toLowerCase(), vs = ao[0].toUpperCase() + ao.slice(1);
    _i(zy, "on" + vs);
  }
  _i(xd, "onAnimationEnd"), _i(qv, "onAnimationIteration"), _i(Xv, "onAnimationStart"), _i("dblclick", "onDoubleClick"), _i("focusin", "onFocus"), _i("focusout", "onBlur"), _i(Zv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), k("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(hs));
  function eh(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, hn(u, r, void 0, n), n.currentTarget = null;
  }
  function xc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var E = u.length - 1; 0 <= E; E--) {
            var x = u[E], N = x.instance, W = x.currentTarget;
            if (x = x.listener, N !== p && c.isPropagationStopped())
              break e;
            eh(c, x, W), p = N;
          }
        else
          for (E = 0; E < u.length; E++) {
            if (x = u[E], N = x.instance, W = x.currentTarget, x = x.listener, N !== p && c.isPropagationStopped())
              break e;
            eh(c, x, W), p = N;
          }
      }
    }
    if (rl)
      throw n = al, rl = !1, al = null, n;
  }
  function Qt(n, r) {
    var l = r[Md];
    l === void 0 && (l = r[Md] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (th(r, n, 2, !1), l.add(u));
  }
  function gl(n, r, l) {
    var u = 0;
    r && (u |= 4), th(l, n, u, r);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function su(n) {
    if (!n[Li]) {
      n[Li] = !0, w.forEach(function(l) {
        l !== "selectionchange" && (Hy.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Li] || (r[Li] = !0, gl("selectionchange", !1, r));
    }
  }
  function th(n, r, l, u) {
    switch (ls(r)) {
      case 1:
        var c = tu;
        break;
      case 4:
        c = ml;
        break;
      default:
        c = yl;
    }
    l = c.bind(null, r, l, n), c = void 0, !tl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function kc(n, r, l, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var E = u.tag;
          if (E === 3 || E === 4) {
            var x = u.stateNode.containerInfo;
            if (x === c || x.nodeType === 8 && x.parentNode === c)
              break;
            if (E === 4)
              for (E = u.return; E !== null; ) {
                var N = E.tag;
                if ((N === 3 || N === 4) && (N = E.stateNode.containerInfo, N === c || N.nodeType === 8 && N.parentNode === c))
                  return;
                E = E.return;
              }
            for (; x !== null; ) {
              if (E = ga(x), E === null)
                return;
              if (N = E.tag, N === 5 || N === 6) {
                u = p = E;
                continue e;
              }
              x = x.parentNode;
            }
          }
          u = u.return;
        }
    es(function() {
      var W = p, ie = Zt(l), oe = [];
      e: {
        var ae = Kv.get(n);
        if (ae !== void 0) {
          var De = yt, Ue = n;
          switch (n) {
            case "keypress":
              if (q(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              De = Dy;
              break;
            case "focusin":
              Ue = "focus", De = Ya;
              break;
            case "focusout":
              Ue = "blur", De = Ya;
              break;
            case "beforeblur":
            case "afterblur":
              De = Ya;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              De = xi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              De = os;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              De = Oy;
              break;
            case xd:
            case qv:
            case Xv:
              De = ss;
              break;
            case Zv:
              De = Nv;
              break;
            case "scroll":
              De = It;
              break;
            case "wheel":
              De = Di;
              break;
            case "copy":
            case "cut":
            case "paste":
              De = xy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              De = Sc;
          }
          var je = (r & 4) !== 0, bn = !je && n === "scroll", j = je ? ae !== null ? ae + "Capture" : null : ae;
          je = [];
          for (var z = W, P; z !== null; ) {
            P = z;
            var pe = P.stateNode;
            if (P.tag === 5 && pe !== null && (P = pe, j !== null && (pe = Va(z, j), pe != null && je.push(ms(z, pe, P)))), bn)
              break;
            z = z.return;
          }
          0 < je.length && (ae = new De(ae, Ue, null, l, ie), oe.push({ event: ae, listeners: je }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ae = n === "mouseover" || n === "pointerover", De = n === "mouseout" || n === "pointerout", ae && l !== Ur && (Ue = l.relatedTarget || l.fromElement) && (ga(Ue) || Ue[Ni]))
            break e;
          if ((De || ae) && (ae = ie.window === ie ? ie : (ae = ie.ownerDocument) ? ae.defaultView || ae.parentWindow : window, De ? (Ue = l.relatedTarget || l.toElement, De = W, Ue = Ue ? ga(Ue) : null, Ue !== null && (bn = va(Ue), Ue !== bn || Ue.tag !== 5 && Ue.tag !== 6) && (Ue = null)) : (De = null, Ue = W), De !== Ue)) {
            if (je = xi, pe = "onMouseLeave", j = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (je = Sc, pe = "onPointerLeave", j = "onPointerEnter", z = "pointer"), bn = De == null ? ae : cu(De), P = Ue == null ? ae : cu(Ue), ae = new je(pe, z + "leave", De, l, ie), ae.target = bn, ae.relatedTarget = P, pe = null, ga(ie) === W && (je = new je(j, z + "enter", Ue, l, ie), je.target = P, je.relatedTarget = bn, pe = je), bn = pe, De && Ue)
              t: {
                for (je = De, j = Ue, z = 0, P = je; P; P = io(P))
                  z++;
                for (P = 0, pe = j; pe; pe = io(pe))
                  P++;
                for (; 0 < z - P; )
                  je = io(je), z--;
                for (; 0 < P - z; )
                  j = io(j), P--;
                for (; z--; ) {
                  if (je === j || j !== null && je === j.alternate)
                    break t;
                  je = io(je), j = io(j);
                }
                je = null;
              }
            else
              je = null;
            De !== null && kd(oe, ae, De, je, !1), Ue !== null && bn !== null && kd(oe, bn, Ue, je, !0);
          }
        }
        e: {
          if (ae = W ? cu(W) : window, De = ae.nodeName && ae.nodeName.toLowerCase(), De === "select" || De === "input" && ae.type === "file")
            var Ve = jv;
          else if (Hv(ae))
            if (Sd)
              Ve = $v;
            else {
              Ve = My;
              var Ae = Ny;
            }
          else
            (De = ae.nodeName) && De.toLowerCase() === "input" && (ae.type === "checkbox" || ae.type === "radio") && (Ve = Uy);
          if (Ve && (Ve = Ve(n, W))) {
            Fv(oe, Ve, l, ie);
            break e;
          }
          Ae && Ae(n, ae, W), n === "focusout" && (Ae = ae._wrapperState) && Ae.controlled && ae.type === "number" && ja(ae, "number", ae.value);
        }
        switch (Ae = W ? cu(W) : window, n) {
          case "focusin":
            (Hv(Ae) || Ae.contentEditable === "true") && (Wa = Ae, wd = W, ds = null);
            break;
          case "focusout":
            ds = wd = Wa = null;
            break;
          case "mousedown":
            bd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bd = !1, Gv(oe, l, ie);
            break;
          case "selectionchange":
            if (Wv)
              break;
          case "keydown":
          case "keyup":
            Gv(oe, l, ie);
        }
        var $e;
        if (Qa)
          e: {
            switch (n) {
              case "compositionstart":
                var at = "onCompositionStart";
                break e;
              case "compositionend":
                at = "onCompositionEnd";
                break e;
              case "compositionupdate":
                at = "onCompositionUpdate";
                break e;
            }
            at = void 0;
          }
        else
          iu ? Av(n, l) && (at = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (Mv && l.locale !== "ko" && (iu || at !== "onCompositionStart" ? at === "onCompositionEnd" && iu && ($e = I()) : (Ia = ie, g = "value" in Ia ? Ia.value : Ia.textContent, iu = !0)), Ae = ys(W, at), 0 < Ae.length && (at = new vd(at, n, null, l, ie), oe.push({ event: at, listeners: Ae }), $e ? at.data = $e : ($e = wc(l), $e !== null && (at.data = $e)))), ($e = Cc ? _y(n, l) : Ly(n, l)) && (W = ys(W, "onBeforeInput"), 0 < W.length && (ie = new vd("onBeforeInput", "beforeinput", null, l, ie), oe.push({ event: ie, listeners: W }), ie.data = $e));
      }
      xc(oe, r);
    });
  }
  function ms(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ys(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = Va(n, l), p != null && u.unshift(ms(n, p, c)), p = Va(n, r), p != null && u.push(ms(n, p, c))), n = n.return;
    }
    return u;
  }
  function io(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kd(n, r, l, u, c) {
    for (var p = r._reactName, E = []; l !== null && l !== u; ) {
      var x = l, N = x.alternate, W = x.stateNode;
      if (N !== null && N === u)
        break;
      x.tag === 5 && W !== null && (x = W, c ? (N = Va(l, p), N != null && E.unshift(ms(l, N, x))) : c || (N = Va(l, p), N != null && E.push(ms(l, N, x)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Dd = /\r\n?/g, Fy = /\u0000|\uFFFD/g;
  function Od(n) {
    return (typeof n == "string" ? n : "" + n).replace(Dd, `
`).replace(Fy, "");
  }
  function Dc(n, r, l) {
    if (r = Od(r), Od(n) !== r && l)
      throw Error(m(425));
  }
  function Oc() {
  }
  var _d = null, lo = null;
  function gs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var oo = typeof setTimeout == "function" ? setTimeout : void 0, nh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(n) {
    return Ld.resolve(null).then(n).catch(jy);
  } : oo;
  function jy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sl(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (u === 0) {
            n.removeChild(c), vl(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    vl(r);
  }
  function Ga(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ss(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var El = Math.random().toString(36).slice(2), oi = "__reactFiber$" + El, uo = "__reactProps$" + El, Ni = "__reactContainer$" + El, Md = "__reactEvents$" + El, Vy = "__reactListeners$" + El, Ud = "__reactHandles$" + El;
  function ga(n) {
    var r = n[oi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ni] || l[oi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ss(n); n !== null; ) {
            if (l = n[oi])
              return l;
            n = Ss(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Es(n) {
    return n = n[oi] || n[Ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function cu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function Qe(n) {
    return n[uo] || null;
  }
  var Cl = [], Kt = -1;
  function ft(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > Kt || (n.current = Cl[Kt], Cl[Kt] = null, Kt--);
  }
  function Ht(n, r) {
    Kt++, Cl[Kt] = n.current, n.current = r;
  }
  var ui = {}, rt = ft(ui), yn = ft(!1), jr = ui;
  function Sa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ui;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in l)
      c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function on(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ea() {
    Ut(yn), Ut(rt);
  }
  function wl(n, r, l) {
    if (rt.current !== ui)
      throw Error(m(168));
    Ht(rt, r), Ht(yn, l);
  }
  function Cs(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(m(108, St(n) || "Unknown", c));
    return _({}, l, u);
  }
  function _c(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ui, jr = rt.current, Ht(rt, n), Ht(yn, yn.current), !0;
  }
  function rh(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(m(169));
    l ? (n = Cs(n, r, jr), u.__reactInternalMemoizedMergedChildContext = n, Ut(yn), Ut(rt), Ht(rt, n)) : Ut(yn), Ht(yn, l);
  }
  var na = null, Pn = !1, ws = !1;
  function Ad(n) {
    na === null ? na = [n] : na.push(n);
  }
  function zd(n) {
    Pn = !0, Ad(n);
  }
  function Vr() {
    if (!ws && na !== null) {
      ws = !0;
      var n = 0, r = Lt;
      try {
        var l = na;
        for (Lt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        na = null, Pn = !1;
      } catch (c) {
        throw na !== null && (na = na.slice(n + 1)), ns(Pa, Vr), c;
      } finally {
        Lt = r, ws = !1;
      }
    }
    return null;
  }
  var bl = [], Br = 0, so = null, fu = 0, Pr = [], fr = 0, Ca = null, Kn = 1, Mi = "";
  function ra(n, r) {
    bl[Br++] = fu, bl[Br++] = so, so = n, fu = r;
  }
  function Hd(n, r, l) {
    Pr[fr++] = Kn, Pr[fr++] = Mi, Pr[fr++] = Ca, Ca = n;
    var u = Kn;
    n = Mi;
    var c = 32 - Sr(u) - 1;
    u &= ~(1 << c), l += 1;
    var p = 32 - Sr(r) + c;
    if (30 < p) {
      var E = c - c % 5;
      p = (u & (1 << E) - 1).toString(32), u >>= E, c -= E, Kn = 1 << 32 - Sr(r) + c | l << c | u, Mi = p + n;
    } else
      Kn = 1 << p | l << c | u, Mi = n;
  }
  function Lc(n) {
    n.return !== null && (ra(n, 1), Hd(n, 1, 0));
  }
  function Fd(n) {
    for (; n === so; )
      so = bl[--Br], bl[Br] = null, fu = bl[--Br], bl[Br] = null;
    for (; n === Ca; )
      Ca = Pr[--fr], Pr[fr] = null, Mi = Pr[--fr], Pr[fr] = null, Kn = Pr[--fr], Pr[fr] = null;
  }
  var aa = null, $r = null, Jt = !1, wa = null;
  function jd(n, r) {
    var l = Da(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function ah(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, aa = n, $r = Ga(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, aa = n, $r = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ca !== null ? { id: Kn, overflow: Mi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Da(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, aa = n, $r = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Nc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Mc(n) {
    if (Jt) {
      var r = $r;
      if (r) {
        var l = r;
        if (!ah(n, r)) {
          if (Nc(n))
            throw Error(m(418));
          r = Ga(l.nextSibling);
          var u = aa;
          r && ah(n, r) ? jd(u, l) : (n.flags = n.flags & -4097 | 2, Jt = !1, aa = n);
        }
      } else {
        if (Nc(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Jt = !1, aa = n;
      }
    }
  }
  function ih(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    aa = n;
  }
  function Uc(n) {
    if (n !== aa)
      return !1;
    if (!Jt)
      return ih(n), Jt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !gs(n.type, n.memoizedProps)), r && (r = $r)) {
      if (Nc(n))
        throw lh(), Error(m(418));
      for (; r; )
        jd(n, r), r = Ga(r.nextSibling);
    }
    if (ih(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                $r = Ga(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        $r = null;
      }
    } else
      $r = aa ? Ga(n.stateNode.nextSibling) : null;
    return !0;
  }
  function lh() {
    for (var n = $r; n; )
      n = Ga(n.nextSibling);
  }
  function fn() {
    $r = aa = null, Jt = !1;
  }
  function Vd(n) {
    wa === null ? wa = [n] : wa.push(n);
  }
  var Ac = me.ReactCurrentBatchConfig;
  function ia(n, r) {
    if (n && n.defaultProps) {
      r = _({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var si = ft(null), zc = null, Rl = null, Bd = null;
  function Pd() {
    Bd = Rl = zc = null;
  }
  function Tl(n) {
    var r = si.current;
    Ut(si), n._currentValue = r;
  }
  function $n(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ye(n, r) {
    zc = n, Bd = Rl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (kn = !0), n.firstContext = null);
  }
  function wn(n) {
    var r = n._currentValue;
    if (Bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Rl === null) {
        if (zc === null)
          throw Error(m(308));
        Rl = n, zc.dependencies = { lanes: 0, firstContext: n };
      } else
        Rl = Rl.next = n;
    return r;
  }
  var Jn = null;
  function $d(n) {
    Jn === null ? Jn = [n] : Jn.push(n);
  }
  function oh(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, $d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ui(n, u);
  }
  function Ui(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xl = !1;
  function Id(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ai(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Et & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ui(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, $d(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ui(n, l);
  }
  function Hc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ii(n, l);
    }
  }
  function Yd(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? c = p = E : p = p.next = E, l = l.next;
        } while (l !== null);
        p === null ? c = p = r : p = p.next = r;
      } else
        c = p = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Dl(n, r, l, u) {
    var c = n.updateQueue;
    xl = !1;
    var p = c.firstBaseUpdate, E = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var N = x, W = N.next;
      N.next = null, E === null ? p = W : E.next = W, E = N;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, x = ie.lastBaseUpdate, x !== E && (x === null ? ie.firstBaseUpdate = W : x.next = W, ie.lastBaseUpdate = N));
    }
    if (p !== null) {
      var oe = c.baseState;
      E = 0, ie = W = N = null, x = p;
      do {
        var ae = x.lane, De = x.eventTime;
        if ((u & ae) === ae) {
          ie !== null && (ie = ie.next = {
            eventTime: De,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ue = n, je = x;
            switch (ae = r, De = l, je.tag) {
              case 1:
                if (Ue = je.payload, typeof Ue == "function") {
                  oe = Ue.call(De, oe, ae);
                  break e;
                }
                oe = Ue;
                break e;
              case 3:
                Ue.flags = Ue.flags & -65537 | 128;
              case 0:
                if (Ue = je.payload, ae = typeof Ue == "function" ? Ue.call(De, oe, ae) : Ue, ae == null)
                  break e;
                oe = _({}, oe, ae);
                break e;
              case 2:
                xl = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ae = c.effects, ae === null ? c.effects = [x] : ae.push(x));
        } else
          De = { eventTime: De, lane: ae, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, ie === null ? (W = ie = De, N = oe) : ie = ie.next = De, E |= ae;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null)
            break;
          ae = x, x = ae.next, ae.next = null, c.lastBaseUpdate = ae, c.shared.pending = null;
        }
      } while (1);
      if (ie === null && (N = oe), c.baseState = N, c.firstBaseUpdate = W, c.lastBaseUpdate = ie, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          E |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      ji |= E, n.lanes = E, n.memoizedState = oe;
    }
  }
  function co(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = l, typeof c != "function")
            throw Error(m(191, c));
          c.call(u);
        }
      }
  }
  var uh = new d.Component().refs;
  function Qd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : _({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Fc = { isMounted: function(n) {
    return (n = n._reactInternals) ? va(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = hr(), c = Dn(n), p = Ai(u, c);
    p.payload = r, l != null && (p.callback = l), r = kl(n, p, c), r !== null && (mr(r, n, c, u), Hc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = hr(), c = Dn(n), p = Ai(u, c);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = kl(n, p, c), r !== null && (mr(r, n, c, u), Hc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = hr(), u = Dn(n), c = Ai(l, u);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, u), r !== null && (mr(r, n, u, l), Hc(r, n, u));
  } };
  function sh(n, r, l, u, c, p, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, E) : r.prototype && r.prototype.isPureReactComponent ? !fs(l, u) || !fs(c, p) : !0;
  }
  function ch(n, r, l) {
    var u = !1, c = ui, p = r.contextType;
    return typeof p == "object" && p !== null ? p = wn(p) : (c = on(r) ? jr : rt.current, u = r.contextTypes, p = (u = u != null) ? Sa(n, c) : ui), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Fc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function fh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Fc.enqueueReplaceState(r, r.state, null);
  }
  function jc(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = uh, Id(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = wn(p) : (p = on(r) ? jr : rt.current, c.context = Sa(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Qd(n, r, p, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Fc.enqueueReplaceState(c, c.state, null), Dl(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function du(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(m(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(m(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(E) {
          var x = c.refs;
          x === uh && (x = c.refs = {}), E === null ? delete x[p] : x[p] = E;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function Vc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function dh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ph(n) {
    function r(j, z) {
      if (n) {
        var P = j.deletions;
        P === null ? (j.deletions = [z], j.flags |= 16) : P.push(z);
      }
    }
    function l(j, z) {
      if (!n)
        return null;
      for (; z !== null; )
        r(j, z), z = z.sibling;
      return null;
    }
    function u(j, z) {
      for (j = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? j.set(z.key, z) : j.set(z.index, z), z = z.sibling;
      return j;
    }
    function c(j, z) {
      return j = zl(j, z), j.index = 0, j.sibling = null, j;
    }
    function p(j, z, P) {
      return j.index = P, n ? (P = j.alternate, P !== null ? (P = P.index, P < z ? (j.flags |= 2, z) : P) : (j.flags |= 2, z)) : (j.flags |= 1048576, z);
    }
    function E(j) {
      return n && j.alternate === null && (j.flags |= 2), j;
    }
    function x(j, z, P, pe) {
      return z === null || z.tag !== 6 ? (z = Bs(P, j.mode, pe), z.return = j, z) : (z = c(z, P), z.return = j, z);
    }
    function N(j, z, P, pe) {
      var Ve = P.type;
      return Ve === ce ? ie(j, z, P.props.children, pe, P.key) : z !== null && (z.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === We && dh(Ve) === z.type) ? (pe = c(z, P.props), pe.ref = du(j, z, P), pe.return = j, pe) : (pe = Sf(P.type, P.key, P.props, null, j.mode, pe), pe.ref = du(j, z, P), pe.return = j, pe);
    }
    function W(j, z, P, pe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== P.containerInfo || z.stateNode.implementation !== P.implementation ? (z = _o(P, j.mode, pe), z.return = j, z) : (z = c(z, P.children || []), z.return = j, z);
    }
    function ie(j, z, P, pe, Ve) {
      return z === null || z.tag !== 7 ? (z = Oo(P, j.mode, pe, Ve), z.return = j, z) : (z = c(z, P), z.return = j, z);
    }
    function oe(j, z, P) {
      if (typeof z == "string" && z !== "" || typeof z == "number")
        return z = Bs("" + z, j.mode, P), z.return = j, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case re:
            return P = Sf(z.type, z.key, z.props, null, j.mode, P), P.ref = du(j, null, z), P.return = j, P;
          case le:
            return z = _o(z, j.mode, P), z.return = j, z;
          case We:
            var pe = z._init;
            return oe(j, pe(z._payload), P);
        }
        if (an(z) || He(z))
          return z = Oo(z, j.mode, P, null), z.return = j, z;
        Vc(j, z);
      }
      return null;
    }
    function ae(j, z, P, pe) {
      var Ve = z !== null ? z.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return Ve !== null ? null : x(j, z, "" + P, pe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case re:
            return P.key === Ve ? N(j, z, P, pe) : null;
          case le:
            return P.key === Ve ? W(j, z, P, pe) : null;
          case We:
            return Ve = P._init, ae(
              j,
              z,
              Ve(P._payload),
              pe
            );
        }
        if (an(P) || He(P))
          return Ve !== null ? null : ie(j, z, P, pe, null);
        Vc(j, P);
      }
      return null;
    }
    function De(j, z, P, pe, Ve) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number")
        return j = j.get(P) || null, x(z, j, "" + pe, Ve);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case re:
            return j = j.get(pe.key === null ? P : pe.key) || null, N(z, j, pe, Ve);
          case le:
            return j = j.get(pe.key === null ? P : pe.key) || null, W(z, j, pe, Ve);
          case We:
            var Ae = pe._init;
            return De(j, z, P, Ae(pe._payload), Ve);
        }
        if (an(pe) || He(pe))
          return j = j.get(P) || null, ie(z, j, pe, Ve, null);
        Vc(z, pe);
      }
      return null;
    }
    function Ue(j, z, P, pe) {
      for (var Ve = null, Ae = null, $e = z, at = z = 0, Qn = null; $e !== null && at < P.length; at++) {
        $e.index > at ? (Qn = $e, $e = null) : Qn = $e.sibling;
        var _t = ae(j, $e, P[at], pe);
        if (_t === null) {
          $e === null && ($e = Qn);
          break;
        }
        n && $e && _t.alternate === null && r(j, $e), z = p(_t, z, at), Ae === null ? Ve = _t : Ae.sibling = _t, Ae = _t, $e = Qn;
      }
      if (at === P.length)
        return l(j, $e), Jt && ra(j, at), Ve;
      if ($e === null) {
        for (; at < P.length; at++)
          $e = oe(j, P[at], pe), $e !== null && (z = p($e, z, at), Ae === null ? Ve = $e : Ae.sibling = $e, Ae = $e);
        return Jt && ra(j, at), Ve;
      }
      for ($e = u(j, $e); at < P.length; at++)
        Qn = De($e, j, at, P[at], pe), Qn !== null && (n && Qn.alternate !== null && $e.delete(Qn.key === null ? at : Qn.key), z = p(Qn, z, at), Ae === null ? Ve = Qn : Ae.sibling = Qn, Ae = Qn);
      return n && $e.forEach(function(Hl) {
        return r(j, Hl);
      }), Jt && ra(j, at), Ve;
    }
    function je(j, z, P, pe) {
      var Ve = He(P);
      if (typeof Ve != "function")
        throw Error(m(150));
      if (P = Ve.call(P), P == null)
        throw Error(m(151));
      for (var Ae = Ve = null, $e = z, at = z = 0, Qn = null, _t = P.next(); $e !== null && !_t.done; at++, _t = P.next()) {
        $e.index > at ? (Qn = $e, $e = null) : Qn = $e.sibling;
        var Hl = ae(j, $e, _t.value, pe);
        if (Hl === null) {
          $e === null && ($e = Qn);
          break;
        }
        n && $e && Hl.alternate === null && r(j, $e), z = p(Hl, z, at), Ae === null ? Ve = Hl : Ae.sibling = Hl, Ae = Hl, $e = Qn;
      }
      if (_t.done)
        return l(
          j,
          $e
        ), Jt && ra(j, at), Ve;
      if ($e === null) {
        for (; !_t.done; at++, _t = P.next())
          _t = oe(j, _t.value, pe), _t !== null && (z = p(_t, z, at), Ae === null ? Ve = _t : Ae.sibling = _t, Ae = _t);
        return Jt && ra(j, at), Ve;
      }
      for ($e = u(j, $e); !_t.done; at++, _t = P.next())
        _t = De($e, j, at, _t.value, pe), _t !== null && (n && _t.alternate !== null && $e.delete(_t.key === null ? at : _t.key), z = p(_t, z, at), Ae === null ? Ve = _t : Ae.sibling = _t, Ae = _t);
      return n && $e.forEach(function(lg) {
        return r(j, lg);
      }), Jt && ra(j, at), Ve;
    }
    function bn(j, z, P, pe) {
      if (typeof P == "object" && P !== null && P.type === ce && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case re:
            e: {
              for (var Ve = P.key, Ae = z; Ae !== null; ) {
                if (Ae.key === Ve) {
                  if (Ve = P.type, Ve === ce) {
                    if (Ae.tag === 7) {
                      l(j, Ae.sibling), z = c(Ae, P.props.children), z.return = j, j = z;
                      break e;
                    }
                  } else if (Ae.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === We && dh(Ve) === Ae.type) {
                    l(j, Ae.sibling), z = c(Ae, P.props), z.ref = du(j, Ae, P), z.return = j, j = z;
                    break e;
                  }
                  l(j, Ae);
                  break;
                } else
                  r(j, Ae);
                Ae = Ae.sibling;
              }
              P.type === ce ? (z = Oo(P.props.children, j.mode, pe, P.key), z.return = j, j = z) : (pe = Sf(P.type, P.key, P.props, null, j.mode, pe), pe.ref = du(j, z, P), pe.return = j, j = pe);
            }
            return E(j);
          case le:
            e: {
              for (Ae = P.key; z !== null; ) {
                if (z.key === Ae)
                  if (z.tag === 4 && z.stateNode.containerInfo === P.containerInfo && z.stateNode.implementation === P.implementation) {
                    l(j, z.sibling), z = c(z, P.children || []), z.return = j, j = z;
                    break e;
                  } else {
                    l(j, z);
                    break;
                  }
                else
                  r(j, z);
                z = z.sibling;
              }
              z = _o(P, j.mode, pe), z.return = j, j = z;
            }
            return E(j);
          case We:
            return Ae = P._init, bn(j, z, Ae(P._payload), pe);
        }
        if (an(P))
          return Ue(j, z, P, pe);
        if (He(P))
          return je(j, z, P, pe);
        Vc(j, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, z !== null && z.tag === 6 ? (l(j, z.sibling), z = c(z, P), z.return = j, j = z) : (l(j, z), z = Bs(P, j.mode, pe), z.return = j, j = z), E(j)) : l(j, z);
    }
    return bn;
  }
  var pu = ph(!0), vh = ph(!1), bs = {}, qa = ft(bs), Rs = ft(bs), vu = ft(bs);
  function fo(n) {
    if (n === bs)
      throw Error(m(174));
    return n;
  }
  function Wd(n, r) {
    switch (Ht(vu, r), Ht(Rs, n), Ht(qa, bs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Tn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Tn(r, n);
    }
    Ut(qa), Ht(qa, r);
  }
  function Ol() {
    Ut(qa), Ut(Rs), Ut(vu);
  }
  function Xe(n) {
    fo(vu.current);
    var r = fo(qa.current), l = Tn(r, n.type);
    r !== l && (Ht(Rs, n), Ht(qa, l));
  }
  function gt(n) {
    Rs.current === n && (Ut(qa), Ut(Rs));
  }
  var Ke = ft(0);
  function dn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ba = [];
  function Bc() {
    for (var n = 0; n < ba.length; n++)
      ba[n]._workInProgressVersionPrimary = null;
    ba.length = 0;
  }
  var Pc = me.ReactCurrentDispatcher, Gd = me.ReactCurrentBatchConfig, po = 0, en = null, K = null, Rt = null, Je = !1, ci = !1, la = 0, vo = 0;
  function tn() {
    throw Error(m(321));
  }
  function ho(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ya(n[l], r[l]))
        return !1;
    return !0;
  }
  function _l(n, r, l, u, c, p) {
    if (po = p, en = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Pc.current = n === null || n.memoizedState === null ? Py : $y, n = l(u, c), ci) {
      p = 0;
      do {
        if (ci = !1, la = 0, 25 <= p)
          throw Error(m(301));
        p += 1, Rt = K = null, r.updateQueue = null, Pc.current = Xd, n = l(u, c);
      } while (ci);
    }
    if (Pc.current = af, r = K !== null && K.next !== null, po = 0, Rt = K = en = null, Je = !1, r)
      throw Error(m(300));
    return n;
  }
  function mo() {
    var n = la !== 0;
    return la = 0, n;
  }
  function Ra() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Rt === null ? en.memoizedState = Rt = n : Rt = Rt.next = n, Rt;
  }
  function Ir() {
    if (K === null) {
      var n = en.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = K.next;
    var r = Rt === null ? en.memoizedState : Rt.next;
    if (r !== null)
      Rt = r, K = n;
    else {
      if (n === null)
        throw Error(m(310));
      K = n, n = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, Rt === null ? en.memoizedState = Rt = n : Rt = Rt.next = n;
    }
    return Rt;
  }
  function yo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ts(n) {
    var r = Ir(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = K, c = u.baseQueue, p = l.pending;
    if (p !== null) {
      if (c !== null) {
        var E = c.next;
        c.next = p.next, p.next = E;
      }
      u.baseQueue = c = p, l.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var x = E = null, N = null, W = p;
      do {
        var ie = W.lane;
        if ((po & ie) === ie)
          N !== null && (N = N.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), u = W.hasEagerState ? W.eagerState : n(u, W.action);
        else {
          var oe = {
            lane: ie,
            action: W.action,
            hasEagerState: W.hasEagerState,
            eagerState: W.eagerState,
            next: null
          };
          N === null ? (x = N = oe, E = u) : N = N.next = oe, en.lanes |= ie, ji |= ie;
        }
        W = W.next;
      } while (W !== null && W !== p);
      N === null ? E = u : N.next = x, ya(u, r.memoizedState) || (kn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = N, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, en.lanes |= p, ji |= p, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xs(n) {
    var r = Ir(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, p = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var E = c = c.next;
      do
        p = n(p, E.action), E = E.next;
      while (E !== c);
      ya(p, r.memoizedState) || (kn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, u];
  }
  function $c() {
  }
  function Ic(n, r) {
    var l = en, u = Ir(), c = r(), p = !ya(u.memoizedState, c);
    if (p && (u.memoizedState = c, kn = !0), u = u.queue, ks(Wc.bind(null, l, u, n), [n]), u.getSnapshot !== r || p || Rt !== null && Rt.memoizedState.tag & 1) {
      if (l.flags |= 2048, go(9, Qc.bind(null, l, u, c, r), void 0, null), pn === null)
        throw Error(m(349));
      po & 30 || Yc(l, r, c);
    }
    return c;
  }
  function Yc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = en.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, en.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Qc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Gc(r) && qc(n);
  }
  function Wc(n, r, l) {
    return l(function() {
      Gc(r) && qc(n);
    });
  }
  function Gc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ya(n, l);
    } catch {
      return !0;
    }
  }
  function qc(n) {
    var r = Ui(n, 1);
    r !== null && mr(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Ra();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yo, lastRenderedState: n }, r.queue = n, n = n.dispatch = rf.bind(null, en, n), [r.memoizedState, n];
  }
  function go(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = en.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, en.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Zc() {
    return Ir().memoizedState;
  }
  function So(n, r, l, u) {
    var c = Ra();
    en.flags |= n, c.memoizedState = go(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function zi(n, r, l, u) {
    var c = Ir();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (K !== null) {
      var E = K.memoizedState;
      if (p = E.destroy, u !== null && ho(u, E.deps)) {
        c.memoizedState = go(r, l, p, u);
        return;
      }
    }
    en.flags |= n, c.memoizedState = go(1 | r, l, p, u);
  }
  function Kc(n, r) {
    return So(8390656, 8, n, r);
  }
  function ks(n, r) {
    return zi(2048, 8, n, r);
  }
  function Jc(n, r) {
    return zi(4, 2, n, r);
  }
  function ef(n, r) {
    return zi(4, 4, n, r);
  }
  function qd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function hu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, zi(4, 4, qd.bind(null, r, n), l);
  }
  function tf() {
  }
  function mu(n, r) {
    var l = Ir();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && ho(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = Ir();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && ho(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Yr(n, r, l) {
    return po & 21 ? (ya(l, r) || (l = qo(), en.lanes |= l, ji |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, kn = !0), n.memoizedState = l);
  }
  function By(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Gd.transition;
    Gd.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Gd.transition = u;
    }
  }
  function Wt() {
    return Ir().memoizedState;
  }
  function nf(n, r, l) {
    var u = Dn(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, yu(n))
      Ds(r, l);
    else if (l = oh(n, r, l, u), l !== null) {
      var c = hr();
      mr(l, n, u, c), hh(l, r, u);
    }
  }
  function rf(n, r, l) {
    var u = Dn(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (yu(n))
      Ds(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var E = r.lastRenderedState, x = p(E, l);
          if (c.hasEagerState = !0, c.eagerState = x, ya(x, E)) {
            var N = r.interleaved;
            N === null ? (c.next = c, $d(r)) : (c.next = N.next, N.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = oh(n, r, c, u), l !== null && (c = hr(), mr(l, n, u, c), hh(l, r, u));
    }
  }
  function yu(n) {
    var r = n.alternate;
    return n === en || r !== null && r === en;
  }
  function Ds(n, r) {
    ci = Je = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function hh(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ii(n, l);
    }
  }
  var af = { readContext: wn, useCallback: tn, useContext: tn, useEffect: tn, useImperativeHandle: tn, useInsertionEffect: tn, useLayoutEffect: tn, useMemo: tn, useReducer: tn, useRef: tn, useState: tn, useDebugValue: tn, useDeferredValue: tn, useTransition: tn, useMutableSource: tn, useSyncExternalStore: tn, useId: tn, unstable_isNewReconciler: !1 }, Py = { readContext: wn, useCallback: function(n, r) {
    return Ra().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: wn, useEffect: Kc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(
      4194308,
      4,
      qd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return So(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return So(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ra();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Ra();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = nf.bind(null, en, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Ra();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: tf, useDeferredValue: function(n) {
    return Ra().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = By.bind(null, n[1]), Ra().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = en, c = Ra();
    if (Jt) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), pn === null)
        throw Error(m(349));
      po & 30 || Yc(u, r, l);
    }
    c.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return c.queue = p, Kc(Wc.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, go(9, Qc.bind(null, u, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ra(), r = pn.identifierPrefix;
    if (Jt) {
      var l = Mi, u = Kn;
      l = (u & ~(1 << 32 - Sr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = la++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = vo++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $y = {
    readContext: wn,
    useCallback: mu,
    useContext: wn,
    useEffect: ks,
    useImperativeHandle: hu,
    useInsertionEffect: Jc,
    useLayoutEffect: ef,
    useMemo: Ll,
    useReducer: Ts,
    useRef: Zc,
    useState: function() {
      return Ts(yo);
    },
    useDebugValue: tf,
    useDeferredValue: function(n) {
      var r = Ir();
      return Yr(r, K.memoizedState, n);
    },
    useTransition: function() {
      var n = Ts(yo)[0], r = Ir().memoizedState;
      return [n, r];
    },
    useMutableSource: $c,
    useSyncExternalStore: Ic,
    useId: Wt,
    unstable_isNewReconciler: !1
  }, Xd = { readContext: wn, useCallback: mu, useContext: wn, useEffect: ks, useImperativeHandle: hu, useInsertionEffect: Jc, useLayoutEffect: ef, useMemo: Ll, useReducer: xs, useRef: Zc, useState: function() {
    return xs(yo);
  }, useDebugValue: tf, useDeferredValue: function(n) {
    var r = Ir();
    return K === null ? r.memoizedState = n : Yr(r, K.memoizedState, n);
  }, useTransition: function() {
    var n = xs(yo)[0], r = Ir().memoizedState;
    return [n, r];
  }, useMutableSource: $c, useSyncExternalStore: Ic, useId: Wt, unstable_isNewReconciler: !1 };
  function gu(n, r) {
    try {
      var l = "", u = r;
      do
        l += pt(u), u = u.return;
      while (u);
      var c = l;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Os(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function lf(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Iy = typeof WeakMap == "function" ? WeakMap : Map;
  function mh(n, r, l) {
    l = Ai(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      pf || (pf = !0, Ro = u), lf(n, r);
    }, l;
  }
  function _s(n, r, l) {
    l = Ai(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        lf(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      lf(n, r), typeof u != "function" && (pi === null ? pi = /* @__PURE__ */ new Set([this]) : pi.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function yh(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Iy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Zy.bind(null, n, r, l), r.then(n, n));
  }
  function Zd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Kd(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ai(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var Yy = me.ReactCurrentOwner, kn = !1;
  function Mn(n, r, l, u) {
    r.child = n === null ? vh(r, null, l, u) : pu(r, n.child, l, u);
  }
  function Nl(n, r, l, u, c) {
    l = l.render;
    var p = r.ref;
    return ye(r, c), u = _l(n, r, l, u, p, c), l = mo(), n !== null && !kn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, er(n, r, c)) : (Jt && l && Lc(r), r.flags |= 1, Mn(n, r, u, c), r.child);
  }
  function of(n, r, l, u, c) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !yp(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, Qr(n, r, p, u, c)) : (n = Sf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var E = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : fs, l(E, u) && n.ref === r.ref)
        return er(n, r, c);
    }
    return r.flags |= 1, n = zl(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Qr(n, r, l, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (fs(p, u) && n.ref === r.ref)
        if (kn = !1, r.pendingProps = u = p, (n.lanes & c) !== 0)
          n.flags & 131072 && (kn = !0);
        else
          return r.lanes = n.lanes, er(n, r, c);
    }
    return Su(n, r, l, u, c);
  }
  function Eo(n, r, l) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Tu, oa), oa |= l;
      else {
        if (!(l & 1073741824))
          return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Tu, oa), oa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : l, Ht(Tu, oa), oa |= u;
      }
    else
      p !== null ? (u = p.baseLanes | l, r.memoizedState = null) : u = l, Ht(Tu, oa), oa |= u;
    return Mn(n, r, c, l), r.child;
  }
  function dt(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Su(n, r, l, u, c) {
    var p = on(l) ? jr : rt.current;
    return p = Sa(r, p), ye(r, c), l = _l(n, r, l, u, p, c), u = mo(), n !== null && !kn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, er(n, r, c)) : (Jt && u && Lc(r), r.flags |= 1, Mn(n, r, l, c), r.child);
  }
  function Jd(n, r, l, u, c) {
    if (on(l)) {
      var p = !0;
      _c(r);
    } else
      p = !1;
    if (ye(r, c), r.stateNode === null)
      dr(n, r), ch(r, l, u), jc(r, l, u, c), u = !0;
    else if (n === null) {
      var E = r.stateNode, x = r.memoizedProps;
      E.props = x;
      var N = E.context, W = l.contextType;
      typeof W == "object" && W !== null ? W = wn(W) : (W = on(l) ? jr : rt.current, W = Sa(r, W));
      var ie = l.getDerivedStateFromProps, oe = typeof ie == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      oe || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== u || N !== W) && fh(r, E, u, W), xl = !1;
      var ae = r.memoizedState;
      E.state = ae, Dl(r, u, E, c), N = r.memoizedState, x !== u || ae !== N || yn.current || xl ? (typeof ie == "function" && (Qd(r, l, ie, u), N = r.memoizedState), (x = xl || sh(r, l, x, u, ae, N, W)) ? (oe || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = N), E.props = u, E.state = N, E.context = W, u = x) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, Nn(n, r), x = r.memoizedProps, W = r.type === r.elementType ? x : ia(r.type, x), E.props = W, oe = r.pendingProps, ae = E.context, N = l.contextType, typeof N == "object" && N !== null ? N = wn(N) : (N = on(l) ? jr : rt.current, N = Sa(r, N));
      var De = l.getDerivedStateFromProps;
      (ie = typeof De == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (x !== oe || ae !== N) && fh(r, E, u, N), xl = !1, ae = r.memoizedState, E.state = ae, Dl(r, u, E, c);
      var Ue = r.memoizedState;
      x !== oe || ae !== Ue || yn.current || xl ? (typeof De == "function" && (Qd(r, l, De, u), Ue = r.memoizedState), (W = xl || sh(r, l, W, u, ae, Ue, N) || !1) ? (ie || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Ue, N), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Ue, N)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ue), E.props = u, E.state = Ue, E.context = N, u = W) : (typeof E.componentDidUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ae === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return gh(n, r, l, u, p, c);
  }
  function gh(n, r, l, u, c, p) {
    dt(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E)
      return c && rh(r, l, !1), er(n, r, p);
    u = r.stateNode, Yy.current = r;
    var x = E && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = pu(r, n.child, null, p), r.child = pu(r, null, x, p)) : Mn(n, r, x, p), r.memoizedState = u.state, c && rh(r, l, !0), r.child;
  }
  function Sh(n) {
    var r = n.stateNode;
    r.pendingContext ? wl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wl(n, r.context, !1), Wd(n, r.containerInfo);
  }
  function uf(n, r, l, u, c) {
    return fn(), Vd(c), r.flags |= 256, Mn(n, r, l, u), r.child;
  }
  var Co = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ep(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function tp(n, r, l) {
    var u = r.pendingProps, c = Ke.current, p = !1, E = (r.flags & 128) !== 0, x;
    if ((x = E) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ht(Ke, c & 1), n === null)
      return Mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, E = { mode: "hidden", children: E }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = E) : p = Vs(E, u, 0, null), n = Oo(n, u, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = ep(l), r.memoizedState = Co, n) : np(r, E));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null))
      return Qy(n, r, E, u, x, c, l);
    if (p) {
      p = u.fallback, E = r.mode, c = n.child, x = c.sibling;
      var N = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = N, r.deletions = null) : (u = zl(c, N), u.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? p = zl(x, p) : (p = Oo(p, E, l, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, E = n.child.memoizedState, E = E === null ? ep(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, p.memoizedState = E, p.childLanes = n.childLanes & ~l, r.memoizedState = Co, u;
    }
    return p = n.child, n = p.sibling, u = zl(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function np(n, r) {
    return r = Vs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Eu(n, r, l, u) {
    return u !== null && Vd(u), pu(r, n.child, null, l), n = np(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qy(n, r, l, u, c, p, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Os(Error(m(422))), Eu(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = Vs({ mode: "visible", children: u.children }, c, 0, null), p = Oo(p, c, E, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && pu(r, n.child, null, E), r.child.memoizedState = ep(E), r.memoizedState = Co, p);
    if (!(r.mode & 1))
      return Eu(n, r, E, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var x = u.dgst;
      return u = x, p = Error(m(419)), u = Os(p, u, void 0), Eu(n, r, E, u);
    }
    if (x = (E & n.childLanes) !== 0, kn || x) {
      if (u = pn, u !== null) {
        switch (E & -E) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | E) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, Ui(n, c), mr(u, n, c, -1));
      }
      return vp(), u = Os(Error(m(421))), Eu(n, r, E, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ky.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, $r = Ga(c.nextSibling), aa = r, Jt = !0, wa = null, n !== null && (Pr[fr++] = Kn, Pr[fr++] = Mi, Pr[fr++] = Ca, Kn = n.id, Mi = n.overflow, Ca = r), r = np(r, u.children), r.flags |= 4096, r);
  }
  function rp(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), $n(n.return, r, l);
  }
  function sf(n, r, l, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = l, p.tailMode = c);
  }
  function ap(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (Mn(n, r, u.children, l), u = Ke.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && rp(n, l, r);
            else if (n.tag === 19)
              rp(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Ht(Ke, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && dn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), sf(r, !1, c, l, p);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && dn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          sf(r, !0, l, null, p);
          break;
        case "together":
          sf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function dr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function er(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), ji |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = zl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = zl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Hi(n, r, l) {
    switch (r.tag) {
      case 3:
        Sh(r), fn();
        break;
      case 5:
        Xe(r);
        break;
      case 1:
        on(r.type) && _c(r);
        break;
      case 4:
        Wd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Ht(si, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ht(Ke, Ke.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? tp(n, r, l) : (Ht(Ke, Ke.current & 1), n = er(n, r, l), n !== null ? n.sibling : null);
        Ht(Ke, Ke.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return ap(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ht(Ke, Ke.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Eo(n, r, l);
    }
    return er(n, r, l);
  }
  var Ls, wo, Ta, Un;
  Ls = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, wo = function() {
  }, Ta = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, fo(qa.current);
      var p = null;
      switch (l) {
        case "input":
          c = jn(n, c), u = jn(n, u), p = [];
          break;
        case "select":
          c = _({}, c, { value: void 0 }), u = _({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = ea(n, c), u = ea(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Oc);
      }
      Ln(l, u);
      var E;
      l = null;
      for (W in c)
        if (!u.hasOwnProperty(W) && c.hasOwnProperty(W) && c[W] != null)
          if (W === "style") {
            var x = c[W];
            for (E in x)
              x.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
          } else
            W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (T.hasOwnProperty(W) ? p || (p = []) : (p = p || []).push(W, null));
      for (W in u) {
        var N = u[W];
        if (x = c != null ? c[W] : void 0, u.hasOwnProperty(W) && N !== x && (N != null || x != null))
          if (W === "style")
            if (x) {
              for (E in x)
                !x.hasOwnProperty(E) || N && N.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
              for (E in N)
                N.hasOwnProperty(E) && x[E] !== N[E] && (l || (l = {}), l[E] = N[E]);
            } else
              l || (p || (p = []), p.push(
                W,
                l
              )), l = N;
          else
            W === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, x = x ? x.__html : void 0, N != null && x !== N && (p = p || []).push(W, N)) : W === "children" ? typeof N != "string" && typeof N != "number" || (p = p || []).push(W, "" + N) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (T.hasOwnProperty(W) ? (N != null && W === "onScroll" && Qt("scroll", n), p || x === N || (p = [])) : (p = p || []).push(W, N));
      }
      l && (p = p || []).push("style", l);
      var W = p;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, Un = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Ns(n, r) {
    if (!Jt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function pr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Wy(n, r, l) {
    var u = r.pendingProps;
    switch (Fd(r), r.tag) {
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
        return pr(r), null;
      case 1:
        return on(r.type) && Ea(), pr(r), null;
      case 3:
        return u = r.stateNode, Ol(), Ut(yn), Ut(rt), Bc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, wa !== null && (js(wa), wa = null))), wo(n, r), pr(r), null;
      case 5:
        gt(r);
        var c = fo(vu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ta(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(m(166));
            return pr(r), null;
          }
          if (n = fo(qa.current), Uc(r)) {
            u = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (u[oi] = r, u[uo] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Qt("cancel", u), Qt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Qt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < hs.length; c++)
                  Qt(hs[c], u);
                break;
              case "source":
                Qt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Qt(
                  "error",
                  u
                ), Qt("load", u);
                break;
              case "details":
                Qt("toggle", u);
                break;
              case "input":
                sr(u, p), Qt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Qt("invalid", u);
                break;
              case "textarea":
                qn(u, p), Qt("invalid", u);
            }
            Ln(l, p), c = null;
            for (var E in p)
              if (p.hasOwnProperty(E)) {
                var x = p[E];
                E === "children" ? typeof x == "string" ? u.textContent !== x && (p.suppressHydrationWarning !== !0 && Dc(u.textContent, x, n), c = ["children", x]) : typeof x == "number" && u.textContent !== "" + x && (p.suppressHydrationWarning !== !0 && Dc(
                  u.textContent,
                  x,
                  n
                ), c = ["children", "" + x]) : T.hasOwnProperty(E) && x != null && E === "onScroll" && Qt("scroll", u);
              }
            switch (l) {
              case "input":
                Fn(u), Jr(u, p, !0);
                break;
              case "textarea":
                Fn(u), Xn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Oc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(l, { is: u.is }) : (n = E.createElement(l), l === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, l), n[oi] = r, n[uo] = u, Ls(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = Cn(l, u), l) {
                case "dialog":
                  Qt("cancel", n), Qt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Qt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < hs.length; c++)
                    Qt(hs[c], n);
                  c = u;
                  break;
                case "source":
                  Qt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Qt(
                    "error",
                    n
                  ), Qt("load", n), c = u;
                  break;
                case "details":
                  Qt("toggle", n), c = u;
                  break;
                case "input":
                  sr(n, u), c = jn(n, u), Qt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = _({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  qn(n, u), c = ea(n, u), Qt("invalid", n);
                  break;
                default:
                  c = u;
              }
              Ln(l, c), x = c;
              for (p in x)
                if (x.hasOwnProperty(p)) {
                  var N = x[p];
                  p === "style" ? jt(n, N) : p === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && Xl(n, N)) : p === "children" ? typeof N == "string" ? (l !== "textarea" || N !== "") && ni(n, N) : typeof N == "number" && ni(n, "" + N) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (T.hasOwnProperty(p) ? N != null && p === "onScroll" && Qt("scroll", n) : N != null && he(n, p, N, E));
                }
              switch (l) {
                case "input":
                  Fn(n), Jr(n, u, !1);
                  break;
                case "textarea":
                  Fn(n), Xn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + st(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? _n(n, !!u.multiple, p, !1) : u.defaultValue != null && _n(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Oc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return pr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Un(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = fo(vu.current), fo(qa.current), Uc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[oi] = r, (p = u.nodeValue !== l) && (n = aa, n !== null))
              switch (n.tag) {
                case 3:
                  Dc(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Dc(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[oi] = r, r.stateNode = u;
        }
        return pr(r), null;
      case 13:
        if (Ut(Ke), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Jt && $r !== null && r.mode & 1 && !(r.flags & 128))
            lh(), fn(), r.flags |= 98560, p = !1;
          else if (p = Uc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(m(317));
              p[oi] = r;
            } else
              fn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            pr(r), p = !1;
          } else
            wa !== null && (js(wa), wa = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ke.current & 1 ? zn === 0 && (zn = 3) : vp())), r.updateQueue !== null && (r.flags |= 4), pr(r), null);
      case 4:
        return Ol(), wo(n, r), n === null && su(r.stateNode.containerInfo), pr(r), null;
      case 10:
        return Tl(r.type._context), pr(r), null;
      case 17:
        return on(r.type) && Ea(), pr(r), null;
      case 19:
        if (Ut(Ke), p = r.memoizedState, p === null)
          return pr(r), null;
        if (u = (r.flags & 128) !== 0, E = p.rendering, E === null)
          if (u)
            Ns(p, !1);
          else {
            if (zn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = dn(n), E !== null) {
                  for (r.flags |= 128, Ns(p, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    p = l, n = u, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ht(Ke, Ke.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && ln() > ku && (r.flags |= 128, u = !0, Ns(p, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = dn(E), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ns(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !Jt)
                return pr(r), null;
            } else
              2 * ln() - p.renderingStartTime > ku && l !== 1073741824 && (r.flags |= 128, u = !0, Ns(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (l = p.last, l !== null ? l.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = ln(), r.sibling = null, l = Ke.current, Ht(Ke, u ? l & 1 | 2 : l & 1), r) : (pr(r), null);
      case 22:
      case 23:
        return pp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? oa & 1073741824 && (pr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : pr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function ip(n, r) {
    switch (Fd(r), r.tag) {
      case 1:
        return on(r.type) && Ea(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ol(), Ut(yn), Ut(rt), Bc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return gt(r), null;
      case 13:
        if (Ut(Ke), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          fn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(Ke), null;
      case 4:
        return Ol(), null;
      case 10:
        return Tl(r.type._context), null;
      case 22:
      case 23:
        return pp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ms = !1, An = !1, Eh = typeof WeakSet == "function" ? WeakSet : Set, Me = null;
  function Cu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Sn(n, r, u);
        }
      else
        l.current = null;
  }
  function Us(n, r, l) {
    try {
      l();
    } catch (u) {
      Sn(n, r, u);
    }
  }
  var Ch = !1;
  function wh(n, r) {
    if (_d = ma, n = bc(), Oi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var c = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var E = 0, x = -1, N = -1, W = 0, ie = 0, oe = n, ae = null;
            t:
              for (; ; ) {
                for (var De; oe !== l || c !== 0 && oe.nodeType !== 3 || (x = E + c), oe !== p || u !== 0 && oe.nodeType !== 3 || (N = E + u), oe.nodeType === 3 && (E += oe.nodeValue.length), (De = oe.firstChild) !== null; )
                  ae = oe, oe = De;
                for (; ; ) {
                  if (oe === n)
                    break t;
                  if (ae === l && ++W === c && (x = E), ae === p && ++ie === u && (N = E), (De = oe.nextSibling) !== null)
                    break;
                  oe = ae, ae = oe.parentNode;
                }
                oe = De;
              }
            l = x === -1 || N === -1 ? null : { start: x, end: N };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (lo = { focusedElem: n, selectionRange: l }, ma = !1, Me = r; Me !== null; )
      if (r = Me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Me = n;
      else
        for (; Me !== null; ) {
          r = Me;
          try {
            var Ue = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ue !== null) {
                    var je = Ue.memoizedProps, bn = Ue.memoizedState, j = r.stateNode, z = j.getSnapshotBeforeUpdate(r.elementType === r.type ? je : ia(r.type, je), bn);
                    j.__reactInternalSnapshotBeforeUpdate = z;
                  }
                  break;
                case 3:
                  var P = r.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (pe) {
            Sn(r, r.return, pe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Me = n;
            break;
          }
          Me = r.return;
        }
    return Ue = Ch, Ch = !1, Ue;
  }
  function As(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && Us(r, l, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function zs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function lp(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function op(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, op(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[oi], delete r[uo], delete r[Md], delete r[Vy], delete r[Ud])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function bh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function cf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || bh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function wu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Oc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (wu(n, r, l), n = n.sibling; n !== null; )
        wu(n, r, l), n = n.sibling;
  }
  function fi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (fi(n, r, l), n = n.sibling; n !== null; )
        fi(n, r, l), n = n.sibling;
  }
  var un = null, In = !1;
  function xa(n, r, l) {
    for (l = l.child; l !== null; )
      bu(n, r, l), l = l.sibling;
  }
  function bu(n, r, l) {
    if (Ar && typeof Ar.onCommitFiberUnmount == "function")
      try {
        Ar.onCommitFiberUnmount(ol, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        An || Cu(l, r);
      case 6:
        var u = un, c = In;
        un = null, xa(n, r, l), un = u, In = c, un !== null && (In ? (n = un, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : un.removeChild(l.stateNode));
        break;
      case 18:
        un !== null && (In ? (n = un, l = l.stateNode, n.nodeType === 8 ? Sl(n.parentNode, l) : n.nodeType === 1 && Sl(n, l), vl(n)) : Sl(un, l.stateNode));
        break;
      case 4:
        u = un, c = In, un = l.stateNode.containerInfo, In = !0, xa(n, r, l), un = u, In = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!An && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, E = p.destroy;
            p = p.tag, E !== void 0 && (p & 2 || p & 4) && Us(l, r, E), c = c.next;
          } while (c !== u);
        }
        xa(n, r, l);
        break;
      case 1:
        if (!An && (Cu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (x) {
            Sn(l, r, x);
          }
        xa(n, r, l);
        break;
      case 21:
        xa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (An = (u = An) || l.memoizedState !== null, xa(n, r, l), An = u) : xa(n, r, l);
        break;
      default:
        xa(n, r, l);
    }
  }
  function Fi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Eh()), r.forEach(function(u) {
        var c = Jy.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function Xa(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        try {
          var p = n, E = r, x = E;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  un = x.stateNode, In = !1;
                  break e;
                case 3:
                  un = x.stateNode.containerInfo, In = !0;
                  break e;
                case 4:
                  un = x.stateNode.containerInfo, In = !0;
                  break e;
              }
              x = x.return;
            }
          if (un === null)
            throw Error(m(160));
          bu(p, E, c), un = null, In = !1;
          var N = c.alternate;
          N !== null && (N.return = null), c.return = null;
        } catch (W) {
          Sn(c, r, W);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Rh(r, n), r = r.sibling;
  }
  function Rh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Xa(r, n), di(n), u & 4) {
          try {
            As(3, n, n.return), zs(3, n);
          } catch (je) {
            Sn(n, n.return, je);
          }
          try {
            As(5, n, n.return);
          } catch (je) {
            Sn(n, n.return, je);
          }
        }
        break;
      case 1:
        Xa(r, n), di(n), u & 512 && l !== null && Cu(l, l.return);
        break;
      case 5:
        if (Xa(r, n), di(n), u & 512 && l !== null && Cu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ni(c, "");
          } catch (je) {
            Sn(n, n.return, je);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, E = l !== null ? l.memoizedProps : p, x = n.type, N = n.updateQueue;
          if (n.updateQueue = null, N !== null)
            try {
              x === "input" && p.type === "radio" && p.name != null && Gn(c, p), Cn(x, E);
              var W = Cn(x, p);
              for (E = 0; E < N.length; E += 2) {
                var ie = N[E], oe = N[E + 1];
                ie === "style" ? jt(c, oe) : ie === "dangerouslySetInnerHTML" ? Xl(c, oe) : ie === "children" ? ni(c, oe) : he(c, ie, oe, W);
              }
              switch (x) {
                case "input":
                  En(c, p);
                  break;
                case "textarea":
                  gr(c, p);
                  break;
                case "select":
                  var ae = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var De = p.value;
                  De != null ? _n(c, !!p.multiple, De, !1) : ae !== !!p.multiple && (p.defaultValue != null ? _n(
                    c,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : _n(c, !!p.multiple, p.multiple ? [] : "", !1));
              }
              c[uo] = p;
            } catch (je) {
              Sn(n, n.return, je);
            }
        }
        break;
      case 6:
        if (Xa(r, n), di(n), u & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (je) {
            Sn(n, n.return, je);
          }
        }
        break;
      case 3:
        if (Xa(r, n), di(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            vl(r.containerInfo);
          } catch (je) {
            Sn(n, n.return, je);
          }
        break;
      case 4:
        Xa(r, n), di(n);
        break;
      case 13:
        Xa(r, n), di(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (cp = ln())), u & 4 && Fi(n);
        break;
      case 22:
        if (ie = l !== null && l.memoizedState !== null, n.mode & 1 ? (An = (W = An) || ie, Xa(r, n), An = W) : Xa(r, n), di(n), u & 8192) {
          if (W = n.memoizedState !== null, (n.stateNode.isHidden = W) && !ie && n.mode & 1)
            for (Me = n, ie = n.child; ie !== null; ) {
              for (oe = Me = ie; Me !== null; ) {
                switch (ae = Me, De = ae.child, ae.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    As(4, ae, ae.return);
                    break;
                  case 1:
                    Cu(ae, ae.return);
                    var Ue = ae.stateNode;
                    if (typeof Ue.componentWillUnmount == "function") {
                      u = ae, l = ae.return;
                      try {
                        r = u, Ue.props = r.memoizedProps, Ue.state = r.memoizedState, Ue.componentWillUnmount();
                      } catch (je) {
                        Sn(u, l, je);
                      }
                    }
                    break;
                  case 5:
                    Cu(ae, ae.return);
                    break;
                  case 22:
                    if (ae.memoizedState !== null) {
                      up(oe);
                      continue;
                    }
                }
                De !== null ? (De.return = ae, Me = De) : up(oe);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, oe = n; ; ) {
              if (oe.tag === 5) {
                if (ie === null) {
                  ie = oe;
                  try {
                    c = oe.stateNode, W ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (x = oe.stateNode, N = oe.memoizedProps.style, E = N != null && N.hasOwnProperty("display") ? N.display : null, x.style.display = ht("display", E));
                  } catch (je) {
                    Sn(n, n.return, je);
                  }
                }
              } else if (oe.tag === 6) {
                if (ie === null)
                  try {
                    oe.stateNode.nodeValue = W ? "" : oe.memoizedProps;
                  } catch (je) {
                    Sn(n, n.return, je);
                  }
              } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
                oe.child.return = oe, oe = oe.child;
                continue;
              }
              if (oe === n)
                break e;
              for (; oe.sibling === null; ) {
                if (oe.return === null || oe.return === n)
                  break e;
                ie === oe && (ie = null), oe = oe.return;
              }
              ie === oe && (ie = null), oe.sibling.return = oe.return, oe = oe.sibling;
            }
        }
        break;
      case 19:
        Xa(r, n), di(n), u & 4 && Fi(n);
        break;
      case 21:
        break;
      default:
        Xa(
          r,
          n
        ), di(n);
    }
  }
  function di(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (bh(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ni(c, ""), u.flags &= -33);
            var p = cf(n);
            fi(n, p, c);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, x = cf(n);
            wu(n, x, E);
            break;
          default:
            throw Error(m(161));
        }
      } catch (N) {
        Sn(n, n.return, N);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Th(n, r, l) {
    Me = n, Ru(n);
  }
  function Ru(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Me !== null; ) {
      var c = Me, p = c.child;
      if (c.tag === 22 && u) {
        var E = c.memoizedState !== null || Ms;
        if (!E) {
          var x = c.alternate, N = x !== null && x.memoizedState !== null || An;
          x = Ms;
          var W = An;
          if (Ms = E, (An = N) && !W)
            for (Me = c; Me !== null; )
              E = Me, N = E.child, E.tag === 22 && E.memoizedState !== null ? kh(c) : N !== null ? (N.return = E, Me = N) : kh(c);
          for (; p !== null; )
            Me = p, Ru(p), p = p.sibling;
          Me = c, Ms = x, An = W;
        }
        xh(n);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, Me = p) : xh(n);
    }
  }
  function xh(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                An || zs(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !An)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ia(r.type, l.memoizedProps);
                    u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && co(r, p, u);
                break;
              case 3:
                var E = r.updateQueue;
                if (E !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  co(r, E, l);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = x;
                  var N = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && l.focus();
                      break;
                    case "img":
                      N.src && (l.src = N.src);
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
                if (r.memoizedState === null) {
                  var W = r.alternate;
                  if (W !== null) {
                    var ie = W.memoizedState;
                    if (ie !== null) {
                      var oe = ie.dehydrated;
                      oe !== null && vl(oe);
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
                throw Error(m(163));
            }
          An || r.flags & 512 && lp(r);
        } catch (ae) {
          Sn(r, r.return, ae);
        }
      }
      if (r === n) {
        Me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Me = l;
        break;
      }
      Me = r.return;
    }
  }
  function up(n) {
    for (; Me !== null; ) {
      var r = Me;
      if (r === n) {
        Me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Me = l;
        break;
      }
      Me = r.return;
    }
  }
  function kh(n) {
    for (; Me !== null; ) {
      var r = Me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              zs(4, r);
            } catch (N) {
              Sn(r, l, N);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (N) {
                Sn(r, c, N);
              }
            }
            var p = r.return;
            try {
              lp(r);
            } catch (N) {
              Sn(r, p, N);
            }
            break;
          case 5:
            var E = r.return;
            try {
              lp(r);
            } catch (N) {
              Sn(r, E, N);
            }
        }
      } catch (N) {
        Sn(r, r.return, N);
      }
      if (r === n) {
        Me = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Me = x;
        break;
      }
      Me = r.return;
    }
  }
  var ff = Math.ceil, Hs = me.ReactCurrentDispatcher, sp = me.ReactCurrentOwner, vr = me.ReactCurrentBatchConfig, Et = 0, pn = null, gn = null, Yn = 0, oa = 0, Tu = ft(0), zn = 0, Fs = null, ji = 0, df = 0, xu = 0, bo = null, wr = null, cp = 0, ku = 1 / 0, Vi = null, pf = !1, Ro = null, pi = null, Ml = !1, Ul = null, vf = 0, Du = 0, hf = null, To = -1, xo = 0;
  function hr() {
    return Et & 6 ? ln() : To !== -1 ? To : To = ln();
  }
  function Dn(n) {
    return n.mode & 1 ? Et & 2 && Yn !== 0 ? Yn & -Yn : Ac.transition !== null ? (xo === 0 && (xo = qo()), xo) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ls(n.type)), n) : 1;
  }
  function mr(n, r, l, u) {
    if (50 < Du)
      throw Du = 0, hf = null, Error(m(185));
    Ri(n, l, u), (!(Et & 2) || n !== pn) && (n === pn && (!(Et & 2) && (df |= l), zn === 4 && ka(n, Yn)), yr(n, u), l === 1 && Et === 0 && !(r.mode & 1) && (ku = ln() + 500, Pn && Vr()));
  }
  function yr(n, r) {
    var l = n.callbackNode;
    cl(n, r);
    var u = Er(n, n === pn ? Yn : 0);
    if (u === 0)
      l !== null && vc(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && vc(l), r === 1)
        n.tag === 0 ? zd(Dh.bind(null, n)) : Ad(Dh.bind(null, n)), Nd(function() {
          !(Et & 6) && Vr();
        }), l = null;
      else {
        switch (Zo(u)) {
          case 1:
            l = Pa;
            break;
          case 4:
            l = mt;
            break;
          case 16:
            l = ai;
            break;
          case 536870912:
            l = Wo;
            break;
          default:
            l = ai;
        }
        l = mp(l, Ou.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Ou(n, r) {
    if (To = -1, xo = 0, Et & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (Lu() && n.callbackNode !== l)
      return null;
    var u = Er(n, n === pn ? Yn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = yf(n, u);
    else {
      r = u;
      var c = Et;
      Et |= 2;
      var p = mf();
      (pn !== n || Yn !== r) && (Vi = null, ku = ln() + 500, ko(n, r));
      do
        try {
          qy();
          break;
        } catch (x) {
          Oh(n, x);
        }
      while (1);
      Pd(), Hs.current = p, Et = c, gn !== null ? r = 0 : (pn = null, Yn = 0, r = zn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fl(n), c !== 0 && (u = c, r = fp(n, c))), r === 1)
        throw l = Fs, ko(n, 0), ka(n, u), yr(n, ln()), l;
      if (r === 6)
        ka(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !dp(c) && (r = yf(n, u), r === 2 && (p = fl(n), p !== 0 && (u = p, r = fp(n, p))), r === 1))
          throw l = Fs, ko(n, 0), ka(n, u), yr(n, ln()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Do(n, wr, Vi);
            break;
          case 3:
            if (ka(n, u), (u & 130023424) === u && (r = cp + 500 - ln(), 10 < r)) {
              if (Er(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                hr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = oo(Do.bind(null, n, wr, Vi), r);
              break;
            }
            Do(n, wr, Vi);
            break;
          case 4:
            if (ka(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var E = 31 - Sr(u);
              p = 1 << E, E = r[E], E > c && (c = E), u &= ~p;
            }
            if (u = c, u = ln() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ff(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = oo(Do.bind(null, n, wr, Vi), u);
              break;
            }
            Do(n, wr, Vi);
            break;
          case 5:
            Do(n, wr, Vi);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return yr(n, ln()), n.callbackNode === l ? Ou.bind(null, n) : null;
  }
  function fp(n, r) {
    var l = bo;
    return n.current.memoizedState.isDehydrated && (ko(n, r).flags |= 256), n = yf(n, r), n !== 2 && (r = wr, wr = l, r !== null && js(r)), n;
  }
  function js(n) {
    wr === null ? wr = n : wr.push.apply(wr, n);
  }
  function dp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var u = 0; u < l.length; u++) {
            var c = l[u], p = c.getSnapshot;
            c = c.value;
            try {
              if (!ya(p(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ka(n, r) {
    for (r &= ~xu, r &= ~df, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Sr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Dh(n) {
    if (Et & 6)
      throw Error(m(327));
    Lu();
    var r = Er(n, 0);
    if (!(r & 1))
      return yr(n, ln()), null;
    var l = yf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = fl(n);
      u !== 0 && (r = u, l = fp(n, u));
    }
    if (l === 1)
      throw l = Fs, ko(n, 0), ka(n, r), yr(n, ln()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Do(n, wr, Vi), yr(n, ln()), null;
  }
  function _u(n, r) {
    var l = Et;
    Et |= 1;
    try {
      return n(r);
    } finally {
      Et = l, Et === 0 && (ku = ln() + 500, Pn && Vr());
    }
  }
  function Al(n) {
    Ul !== null && Ul.tag === 0 && !(Et & 6) && Lu();
    var r = Et;
    Et |= 1;
    var l = vr.transition, u = Lt;
    try {
      if (vr.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = u, vr.transition = l, Et = r, !(Et & 6) && Vr();
    }
  }
  function pp() {
    oa = Tu.current, Ut(Tu);
  }
  function ko(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, nh(l)), gn !== null)
      for (l = gn.return; l !== null; ) {
        var u = l;
        switch (Fd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Ea();
            break;
          case 3:
            Ol(), Ut(yn), Ut(rt), Bc();
            break;
          case 5:
            gt(u);
            break;
          case 4:
            Ol();
            break;
          case 13:
            Ut(Ke);
            break;
          case 19:
            Ut(Ke);
            break;
          case 10:
            Tl(u.type._context);
            break;
          case 22:
          case 23:
            pp();
        }
        l = l.return;
      }
    if (pn = n, gn = n = zl(n.current, null), Yn = oa = r, zn = 0, Fs = null, xu = df = ji = 0, wr = bo = null, Jn !== null) {
      for (r = 0; r < Jn.length; r++)
        if (l = Jn[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var c = u.next, p = l.pending;
          if (p !== null) {
            var E = p.next;
            p.next = c, u.next = E;
          }
          l.pending = u;
        }
      Jn = null;
    }
    return n;
  }
  function Oh(n, r) {
    do {
      var l = gn;
      try {
        if (Pd(), Pc.current = af, Je) {
          for (var u = en.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Je = !1;
        }
        if (po = 0, Rt = K = en = null, ci = !1, la = 0, sp.current = null, l === null || l.return === null) {
          zn = 1, Fs = r, gn = null;
          break;
        }
        e: {
          var p = n, E = l.return, x = l, N = r;
          if (r = Yn, x.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var W = N, ie = x, oe = ie.tag;
            if (!(ie.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ae = ie.alternate;
              ae ? (ie.updateQueue = ae.updateQueue, ie.memoizedState = ae.memoizedState, ie.lanes = ae.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var De = Zd(E);
            if (De !== null) {
              De.flags &= -257, Kd(De, E, x, p, r), De.mode & 1 && yh(p, W, r), r = De, N = W;
              var Ue = r.updateQueue;
              if (Ue === null) {
                var je = /* @__PURE__ */ new Set();
                je.add(N), r.updateQueue = je;
              } else
                Ue.add(N);
              break e;
            } else {
              if (!(r & 1)) {
                yh(p, W, r), vp();
                break e;
              }
              N = Error(m(426));
            }
          } else if (Jt && x.mode & 1) {
            var bn = Zd(E);
            if (bn !== null) {
              !(bn.flags & 65536) && (bn.flags |= 256), Kd(bn, E, x, p, r), Vd(gu(N, x));
              break e;
            }
          }
          p = N = gu(N, x), zn !== 4 && (zn = 2), bo === null ? bo = [p] : bo.push(p), p = E;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var j = mh(p, N, r);
                Yd(p, j);
                break e;
              case 1:
                x = N;
                var z = p.type, P = p.stateNode;
                if (!(p.flags & 128) && (typeof z.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (pi === null || !pi.has(P)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var pe = _s(p, x, r);
                  Yd(p, pe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        hp(l);
      } catch (Ve) {
        r = Ve, gn === l && l !== null && (gn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function mf() {
    var n = Hs.current;
    return Hs.current = af, n === null ? af : n;
  }
  function vp() {
    (zn === 0 || zn === 3 || zn === 2) && (zn = 4), pn === null || !(ji & 268435455) && !(df & 268435455) || ka(pn, Yn);
  }
  function yf(n, r) {
    var l = Et;
    Et |= 2;
    var u = mf();
    (pn !== n || Yn !== r) && (Vi = null, ko(n, r));
    do
      try {
        Gy();
        break;
      } catch (c) {
        Oh(n, c);
      }
    while (1);
    if (Pd(), Et = l, Hs.current = u, gn !== null)
      throw Error(m(261));
    return pn = null, Yn = 0, zn;
  }
  function Gy() {
    for (; gn !== null; )
      _h(gn);
  }
  function qy() {
    for (; gn !== null && !ud(); )
      _h(gn);
  }
  function _h(n) {
    var r = Nh(n.alternate, n, oa);
    n.memoizedProps = n.pendingProps, r === null ? hp(n) : gn = r, sp.current = null;
  }
  function hp(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ip(l, r), l !== null) {
          l.flags &= 32767, gn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          zn = 6, gn = null;
          return;
        }
      } else if (l = Wy(l, r, oa), l !== null) {
        gn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        gn = r;
        return;
      }
      gn = r = n;
    } while (r !== null);
    zn === 0 && (zn = 5);
  }
  function Do(n, r, l) {
    var u = Lt, c = vr.transition;
    try {
      vr.transition = null, Lt = 1, Xy(n, r, l, u);
    } finally {
      vr.transition = c, Lt = u;
    }
    return null;
  }
  function Xy(n, r, l, u) {
    do
      Lu();
    while (Ul !== null);
    if (Et & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (fd(n, p), n === pn && (gn = pn = null, Yn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ml || (Ml = !0, mp(ai, function() {
      return Lu(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = vr.transition, vr.transition = null;
      var E = Lt;
      Lt = 1;
      var x = Et;
      Et |= 4, sp.current = null, wh(n, l), Rh(l, n), Rc(lo), ma = !!_d, lo = _d = null, n.current = l, Th(l), sd(), Et = x, Lt = E, vr.transition = p;
    } else
      n.current = l;
    if (Ml && (Ml = !1, Ul = n, vf = c), p = n.pendingLanes, p === 0 && (pi = null), rs(l.stateNode), yr(n, ln()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (pf)
      throw pf = !1, n = Ro, Ro = null, n;
    return vf & 1 && n.tag !== 0 && Lu(), p = n.pendingLanes, p & 1 ? n === hf ? Du++ : (Du = 0, hf = n) : Du = 0, Vr(), null;
  }
  function Lu() {
    if (Ul !== null) {
      var n = Zo(vf), r = vr.transition, l = Lt;
      try {
        if (vr.transition = null, Lt = 16 > n ? 16 : n, Ul === null)
          var u = !1;
        else {
          if (n = Ul, Ul = null, vf = 0, Et & 6)
            throw Error(m(331));
          var c = Et;
          for (Et |= 4, Me = n.current; Me !== null; ) {
            var p = Me, E = p.child;
            if (Me.flags & 16) {
              var x = p.deletions;
              if (x !== null) {
                for (var N = 0; N < x.length; N++) {
                  var W = x[N];
                  for (Me = W; Me !== null; ) {
                    var ie = Me;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(8, ie, p);
                    }
                    var oe = ie.child;
                    if (oe !== null)
                      oe.return = ie, Me = oe;
                    else
                      for (; Me !== null; ) {
                        ie = Me;
                        var ae = ie.sibling, De = ie.return;
                        if (op(ie), ie === W) {
                          Me = null;
                          break;
                        }
                        if (ae !== null) {
                          ae.return = De, Me = ae;
                          break;
                        }
                        Me = De;
                      }
                  }
                }
                var Ue = p.alternate;
                if (Ue !== null) {
                  var je = Ue.child;
                  if (je !== null) {
                    Ue.child = null;
                    do {
                      var bn = je.sibling;
                      je.sibling = null, je = bn;
                    } while (je !== null);
                  }
                }
                Me = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null)
              E.return = p, Me = E;
            else
              e:
                for (; Me !== null; ) {
                  if (p = Me, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(9, p, p.return);
                    }
                  var j = p.sibling;
                  if (j !== null) {
                    j.return = p.return, Me = j;
                    break e;
                  }
                  Me = p.return;
                }
          }
          var z = n.current;
          for (Me = z; Me !== null; ) {
            E = Me;
            var P = E.child;
            if (E.subtreeFlags & 2064 && P !== null)
              P.return = E, Me = P;
            else
              e:
                for (E = z; Me !== null; ) {
                  if (x = Me, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zs(9, x);
                      }
                    } catch (Ve) {
                      Sn(x, x.return, Ve);
                    }
                  if (x === E) {
                    Me = null;
                    break e;
                  }
                  var pe = x.sibling;
                  if (pe !== null) {
                    pe.return = x.return, Me = pe;
                    break e;
                  }
                  Me = x.return;
                }
          }
          if (Et = c, Vr(), Ar && typeof Ar.onPostCommitFiberRoot == "function")
            try {
              Ar.onPostCommitFiberRoot(ol, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Lt = l, vr.transition = r;
      }
    }
    return !1;
  }
  function Lh(n, r, l) {
    r = gu(l, r), r = mh(n, r, 1), n = kl(n, r, 1), r = hr(), n !== null && (Ri(n, 1, r), yr(n, r));
  }
  function Sn(n, r, l) {
    if (n.tag === 3)
      Lh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Lh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (pi === null || !pi.has(u))) {
            n = gu(l, n), n = _s(r, n, 1), r = kl(r, n, 1), n = hr(), r !== null && (Ri(r, 1, n), yr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Zy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = hr(), n.pingedLanes |= n.suspendedLanes & l, pn === n && (Yn & l) === l && (zn === 4 || zn === 3 && (Yn & 130023424) === Yn && 500 > ln() - cp ? ko(n, 0) : xu |= l), yr(n, r);
  }
  function gf(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = hr();
    n = Ui(n, r), n !== null && (Ri(n, r, l), yr(n, l));
  }
  function Ky(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), gf(n, l);
  }
  function Jy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(r), gf(n, l);
  }
  var Nh;
  Nh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || yn.current)
        kn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return kn = !1, Hi(n, r, l);
        kn = !!(n.flags & 131072);
      }
    else
      kn = !1, Jt && r.flags & 1048576 && Hd(r, fu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        dr(n, r), n = r.pendingProps;
        var c = Sa(r, rt.current);
        ye(r, l), c = _l(null, r, u, n, c, l);
        var p = mo();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, on(u) ? (p = !0, _c(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Id(r), c.updater = Fc, r.stateNode = c, c._reactInternals = r, jc(r, u, n, l), r = gh(null, r, u, !0, p, l)) : (r.tag = 0, Jt && p && Lc(r), Mn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (dr(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = tg(u), n = ia(u, n), c) {
            case 0:
              r = Su(null, r, u, n, l);
              break e;
            case 1:
              r = Jd(null, r, u, n, l);
              break e;
            case 11:
              r = Nl(null, r, u, n, l);
              break e;
            case 14:
              r = of(null, r, u, ia(u.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), Su(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), Jd(n, r, u, c, l);
      case 3:
        e: {
          if (Sh(r), n === null)
            throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, Nn(n, r), Dl(r, u, null, l);
          var E = r.memoizedState;
          if (u = E.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = gu(Error(m(423)), r), r = uf(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = gu(Error(m(424)), r), r = uf(n, r, u, l, c);
              break e;
            } else
              for ($r = Ga(r.stateNode.containerInfo.firstChild), aa = r, Jt = !0, wa = null, l = vh(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (fn(), u === c) {
              r = er(n, r, l);
              break e;
            }
            Mn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Xe(r), n === null && Mc(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, E = c.children, gs(u, c) ? E = null : p !== null && gs(u, p) && (r.flags |= 32), dt(n, r), Mn(n, r, E, l), r.child;
      case 6:
        return n === null && Mc(r), null;
      case 13:
        return tp(n, r, l);
      case 4:
        return Wd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = pu(r, null, u, l) : Mn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), Nl(n, r, u, c, l);
      case 7:
        return Mn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Mn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, E = c.value, Ht(si, u._currentValue), u._currentValue = E, p !== null)
            if (ya(p.value, E)) {
              if (p.children === c.children && !yn.current) {
                r = er(n, r, l);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var x = p.dependencies;
                if (x !== null) {
                  E = p.child;
                  for (var N = x.firstContext; N !== null; ) {
                    if (N.context === u) {
                      if (p.tag === 1) {
                        N = Ai(-1, l & -l), N.tag = 2;
                        var W = p.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var ie = W.pending;
                          ie === null ? N.next = N : (N.next = ie.next, ie.next = N), W.pending = N;
                        }
                      }
                      p.lanes |= l, N = p.alternate, N !== null && (N.lanes |= l), $n(
                        p.return,
                        l,
                        r
                      ), x.lanes |= l;
                      break;
                    }
                    N = N.next;
                  }
                } else if (p.tag === 10)
                  E = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (E = p.return, E === null)
                    throw Error(m(341));
                  E.lanes |= l, x = E.alternate, x !== null && (x.lanes |= l), $n(E, l, r), E = p.sibling;
                } else
                  E = p.child;
                if (E !== null)
                  E.return = p;
                else
                  for (E = p; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (p = E.sibling, p !== null) {
                      p.return = E.return, E = p;
                      break;
                    }
                    E = E.return;
                  }
                p = E;
              }
          Mn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, ye(r, l), c = wn(c), u = u(c), r.flags |= 1, Mn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = ia(u, r.pendingProps), c = ia(u.type, c), of(n, r, u, c, l);
      case 15:
        return Qr(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ia(u, c), dr(n, r), r.tag = 1, on(u) ? (n = !0, _c(r)) : n = !1, ye(r, l), ch(r, u, c), jc(r, u, c, l), gh(null, r, u, !0, n, l);
      case 19:
        return ap(n, r, l);
      case 22:
        return Eo(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function mp(n, r) {
    return ns(n, r);
  }
  function eg(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Da(n, r, l, u) {
    return new eg(n, r, l, u);
  }
  function yp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function tg(n) {
    if (typeof n == "function")
      return yp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === et)
        return 11;
      if (n === wt)
        return 14;
    }
    return 2;
  }
  function zl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Da(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Sf(n, r, l, u, c, p) {
    var E = 2;
    if (u = n, typeof n == "function")
      yp(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case ce:
            return Oo(l.children, c, p, r);
          case Fe:
            E = 8, c |= 8;
            break;
          case Pe:
            return n = Da(12, l, r, c | 2), n.elementType = Pe, n.lanes = p, n;
          case Ne:
            return n = Da(13, l, r, c), n.elementType = Ne, n.lanes = p, n;
          case it:
            return n = Da(19, l, r, c), n.elementType = it, n.lanes = p, n;
          case Te:
            return Vs(l, c, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case be:
                  E = 10;
                  break e;
                case Ee:
                  E = 9;
                  break e;
                case et:
                  E = 11;
                  break e;
                case wt:
                  E = 14;
                  break e;
                case We:
                  E = 16, u = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = Da(E, l, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function Oo(n, r, l, u) {
    return n = Da(7, n, u, r), n.lanes = l, n;
  }
  function Vs(n, r, l, u) {
    return n = Da(22, n, u, r), n.elementType = Te, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Bs(n, r, l) {
    return n = Da(6, n, null, r), n.lanes = l, n;
  }
  function _o(n, r, l) {
    return r = Da(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ng(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xo(0), this.expirationTimes = Xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xo(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ef(n, r, l, u, c, p, E, x, N) {
    return n = new ng(n, r, l, x, N), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Da(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Id(p), n;
  }
  function Mh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function gp(n) {
    if (!n)
      return ui;
    n = n._reactInternals;
    e: {
      if (va(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (on(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (on(l))
        return Cs(n, l, r);
    }
    return r;
  }
  function Uh(n, r, l, u, c, p, E, x, N) {
    return n = Ef(l, u, !0, n, c, p, E, x, N), n.context = gp(null), l = n.current, u = hr(), c = Dn(l), p = Ai(u, c), p.callback = r ?? null, kl(l, p, c), n.current.lanes = c, Ri(n, c, u), yr(n, u), n;
  }
  function Ps(n, r, l, u) {
    var c = r.current, p = hr(), E = Dn(c);
    return l = gp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ai(p, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = kl(c, r, E), n !== null && (mr(n, c, E, p), Hc(n, c, E)), E;
  }
  function Cf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Sp(n, r) {
    Ah(n, r), (n = n.alternate) && Ah(n, r);
  }
  function zh() {
    return null;
  }
  var Ep = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function wf(n) {
    this._internalRoot = n;
  }
  Bi.prototype.render = wf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    Ps(n, r, null, null);
  }, Bi.prototype.unmount = wf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Al(function() {
        Ps(null, n, null, null);
      }), r[Ni] = null;
    }
  };
  function Bi(n) {
    this._internalRoot = n;
  }
  Bi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Jo();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < zt.length && r !== 0 && r < zt[l].priority; l++)
        ;
      zt.splice(l, 0, n), l === 0 && yc(n);
    }
  };
  function Cp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function bf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function rg(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var W = Cf(E);
          p.call(W);
        };
      }
      var E = Uh(r, u, n, 0, null, !1, !1, "", Hh);
      return n._reactRootContainer = E, n[Ni] = E.current, su(n.nodeType === 8 ? n.parentNode : n), Al(), E;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var x = u;
      u = function() {
        var W = Cf(N);
        x.call(W);
      };
    }
    var N = Ef(n, 0, !1, null, null, !1, !1, "", Hh);
    return n._reactRootContainer = N, n[Ni] = N.current, su(n.nodeType === 8 ? n.parentNode : n), Al(function() {
      Ps(r, N, l, u);
    }), N;
  }
  function Rf(n, r, l, u, c) {
    var p = l._reactRootContainer;
    if (p) {
      var E = p;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var N = Cf(E);
          x.call(N);
        };
      }
      Ps(r, E, n, c);
    } else
      E = rg(l, r, n, c, u);
    return Cf(E);
  }
  Jl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = $a(r.pendingLanes);
          l !== 0 && (ii(r, l | 1), yr(r, ln()), !(Et & 6) && (ku = ln() + 500, Vr()));
        }
        break;
      case 13:
        Al(function() {
          var u = Ui(n, 1);
          if (u !== null) {
            var c = hr();
            mr(u, n, 1, c);
          }
        }), Sp(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = Ui(n, 134217728);
      if (r !== null) {
        var l = hr();
        mr(r, n, 134217728, l);
      }
      Sp(n, 134217728);
    }
  }, Dt = function(n) {
    if (n.tag === 13) {
      var r = Dn(n), l = Ui(n, r);
      if (l !== null) {
        var u = hr();
        mr(l, n, r, u);
      }
      Sp(n, r);
    }
  }, Jo = function() {
    return Lt;
  }, eu = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, pa = function(n, r, l) {
    switch (r) {
      case "input":
        if (En(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Qe(u);
              if (!c)
                throw Error(m(90));
              Kr(u), En(u, c);
            }
          }
        }
        break;
      case "textarea":
        gr(n, l);
        break;
      case "select":
        r = l.value, r != null && _n(n, !!l.multiple, r, !1);
    }
  }, cc = _u, fc = Al;
  var ag = { usingClientEntryPoint: !1, Events: [Es, cu, Qe, bi, Io, _u] }, Nu = { findFiberByHostInstance: ga, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, ig = { bundleType: Nu.bundleType, version: Nu.version, rendererPackageName: Nu.rendererPackageName, rendererConfig: Nu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = dc(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Nu.findFiberByHostInstance || zh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tf.isDisabled && Tf.supportsFiber)
      try {
        ol = Tf.inject(ig), Ar = Tf;
      } catch {
      }
  }
  return Ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ag, Ua.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Cp(r))
      throw Error(m(200));
    return Mh(n, r, null, l);
  }, Ua.createRoot = function(n, r) {
    if (!Cp(n))
      throw Error(m(299));
    var l = !1, u = "", c = Ep;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ef(n, 1, !1, null, null, l, !1, u, c), n[Ni] = r.current, su(n.nodeType === 8 ? n.parentNode : n), new wf(r);
  }, Ua.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = dc(r), n = n === null ? null : n.stateNode, n;
  }, Ua.flushSync = function(n) {
    return Al(n);
  }, Ua.hydrate = function(n, r, l) {
    if (!bf(r))
      throw Error(m(200));
    return Rf(null, n, r, !0, l);
  }, Ua.hydrateRoot = function(n, r, l) {
    if (!Cp(n))
      throw Error(m(405));
    var u = l != null && l.hydratedSources || null, c = !1, p = "", E = Ep;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = Uh(r, null, n, 1, l ?? null, c, !1, p, E), n[Ni] = r.current, su(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Bi(r);
  }, Ua.render = function(n, r, l) {
    if (!bf(r))
      throw Error(m(200));
    return Rf(null, n, r, !1, l);
  }, Ua.unmountComponentAtNode = function(n) {
    if (!bf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Al(function() {
      Rf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ni] = null;
      });
    }), !0) : !1;
  }, Ua.unstable_batchedUpdates = _u, Ua.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!bf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Rf(n, r, l, !1, u);
  }, Ua.version = "18.2.0-next-9e3b772b8-20220608", Ua;
}
var Aa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ew;
function V5() {
  return ew || (ew = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = Re, v = gw(), m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = !1;
    function T(e) {
      w = e;
    }
    function k(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function S(e) {
      if (!w) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var O = 0, L = 1, M = 2, F = 3, G = 4, Q = 5, ee = 6, se = 7, te = 8, ve = 9, ke = 10, he = 11, me = 12, re = 13, le = 14, ce = 15, Fe = 16, Pe = 17, be = 18, Ee = 19, et = 21, Ne = 22, it = 23, wt = 24, We = 25, Te = !0, de = !1, He = !1, _ = !1, ne = !1, we = !0, tt = !1, Ie = !1, pt = !0, ct = !0, St = !0, st = /* @__PURE__ */ new Set(), At = {}, Fa = {};
    function Fn(e, t) {
      Kr(e, t), Kr(e + "Capture", t);
    }
    function Kr(e, t) {
      At[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), At[e] = t;
      {
        var a = e.toLowerCase();
        Fa[a] = e, e === "onDoubleClick" && (Fa.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        st.add(t[i]);
    }
    var rn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jn = Object.prototype.hasOwnProperty;
    function sr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Gn(e) {
      try {
        return En(e), !1;
      } catch {
        return !0;
      }
    }
    function En(e) {
      return "" + e;
    }
    function Jr(e, t) {
      if (Gn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), En(e);
    }
    function ja(e) {
      if (Gn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), En(e);
    }
    function an(e, t) {
      if (Gn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), En(e);
    }
    function _n(e, t) {
      if (Gn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, sr(e)), En(e);
    }
    function ea(e) {
      if (Gn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), En(e);
    }
    function qn(e) {
      if (Gn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", sr(e)), En(e);
    }
    var gr = 0, Xn = 1, Mr = 2, Tn = 3, cr = 4, Xl = 5, ni = 6, Se = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ye = Se + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ht = new RegExp("^[" + Se + "][" + Ye + "]*$"), jt = {}, Bt = {};
    function Ln(e) {
      return jn.call(Bt, e) ? !0 : jn.call(jt, e) ? !1 : ht.test(e) ? (Bt[e] = !0, !0) : (jt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Cn(e, t, a) {
      return t !== null ? t.type === gr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ur(e, t, a, i) {
      if (a !== null && a.type === gr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Zt(e, t, a, i) {
      if (t === null || typeof t > "u" || Ur(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Tn:
            return !t;
          case cr:
            return t === !1;
          case Xl:
            return isNaN(t);
          case ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function pa(e) {
      return qt.hasOwnProperty(e) ? qt[e] : null;
    }
    function sn(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Mr || t === Tn || t === cr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var qt = {}, Zl = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Zl.forEach(function(e) {
      qt[e] = new sn(
        e,
        gr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      qt[t] = new sn(
        t,
        Xn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      qt[e] = new sn(
        e,
        Mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      qt[e] = new sn(
        e,
        Mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      qt[e] = new sn(
        e,
        Tn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new sn(
        e,
        Tn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new sn(
        e,
        cr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      qt[e] = new sn(
        e,
        ni,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      qt[e] = new sn(
        e,
        Xl,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var bi = /[\-\:]([a-z])/g, Io = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(bi, Io);
      qt[t] = new sn(
        t,
        Xn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(bi, Io);
      qt[t] = new sn(
        t,
        Xn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(bi, Io);
      qt[t] = new sn(
        t,
        Xn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      qt[e] = new sn(
        e,
        Xn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var cc = "xlinkHref";
    qt[cc] = new sn(
      "xlinkHref",
      Xn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      qt[e] = new sn(
        e,
        Xn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var fc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Yo = !1;
    function es(e) {
      !Yo && fc.test(e) && (Yo = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Va(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Jr(a, t), i.sanitizeURL && es("" + a);
        var s = i.attributeName, f = null;
        if (i.type === cr) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Zt(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Zt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Tn)
            return a;
          f = e.getAttribute(s);
        }
        return Zt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tl(e, t, a, i) {
      {
        if (!Ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Jr(a, t), o === "" + a ? a : o;
      }
    }
    function ri(e, t, a, i) {
      var o = pa(t);
      if (!Cn(t, o, i)) {
        if (Zt(t, a, o, i) && (a = null), i || o === null) {
          if (Ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Jr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var h = o.propertyName;
          if (a === null) {
            var y = o.type;
            e[h] = y === Tn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var C = o.attributeName, b = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var H = o.type, A;
          H === Tn || H === cr && a === !0 ? A = "" : (Jr(a, C), A = "" + a, o.sanitizeURL && es(A.toString())), b ? e.setAttributeNS(b, C, A) : e.setAttribute(C, A);
        }
      }
    }
    var nl = Symbol.for("react.element"), ta = Symbol.for("react.portal"), Ba = Symbol.for("react.fragment"), rl = Symbol.for("react.strict_mode"), al = Symbol.for("react.profiler"), Qo = Symbol.for("react.provider"), ts = Symbol.for("react.context"), hn = Symbol.for("react.forward_ref"), va = Symbol.for("react.suspense"), Kl = Symbol.for("react.suspense_list"), il = Symbol.for("react.memo"), Zn = Symbol.for("react.lazy"), dc = Symbol.for("react.scope"), pc = Symbol.for("react.debug_trace_mode"), ns = Symbol.for("react.offscreen"), vc = Symbol.for("react.legacy_hidden"), ud = Symbol.for("react.cache"), sd = Symbol.for("react.tracing_marker"), ln = Symbol.iterator, cd = "@@iterator";
    function Pa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ln && e[ln] || e[cd];
      return typeof t == "function" ? t : null;
    }
    var mt = Object.assign, ai = 0, ll, Wo, ol, Ar, rs, Sr, as;
    function is() {
    }
    is.__reactDisabledLog = !0;
    function hc() {
      {
        if (ai === 0) {
          ll = console.log, Wo = console.info, ol = console.warn, Ar = console.error, rs = console.group, Sr = console.groupCollapsed, as = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: is,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ai++;
      }
    }
    function Go() {
      {
        if (ai--, ai === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: mt({}, e, {
              value: ll
            }),
            info: mt({}, e, {
              value: Wo
            }),
            warn: mt({}, e, {
              value: ol
            }),
            error: mt({}, e, {
              value: Ar
            }),
            group: mt({}, e, {
              value: rs
            }),
            groupCollapsed: mt({}, e, {
              value: Sr
            }),
            groupEnd: mt({}, e, {
              value: as
            })
          });
        }
        ai < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ul = m.ReactCurrentDispatcher, $a;
    function Er(e, t, a) {
      {
        if ($a === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            $a = i && i[1] || "";
          }
        return `
` + $a + e;
      }
    }
    var sl = !1, cl;
    {
      var fl = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new fl();
    }
    function qo(e, t) {
      if (!e || sl)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      sl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ul.current, ul.current = null, hc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var h = Y.stack.split(`
`), y = i.stack.split(`
`), C = h.length - 1, b = y.length - 1; C >= 1 && b >= 0 && h[C] !== y[b]; )
            b--;
          for (; C >= 1 && b >= 0; C--, b--)
            if (h[C] !== y[b]) {
              if (C !== 1 || b !== 1)
                do
                  if (C--, b--, b < 0 || h[C] !== y[b]) {
                    var H = `
` + h[C].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, H), H;
                  }
                while (C >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        sl = !1, ul.current = s, Go(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", $ = A ? Er(A) : "";
      return typeof e == "function" && cl.set(e, $), $;
    }
    function Xo(e, t, a) {
      return qo(e, !0);
    }
    function Ri(e, t, a) {
      return qo(e, !1);
    }
    function fd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ii(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return qo(e, fd(e));
      if (typeof e == "string")
        return Er(e);
      switch (e) {
        case va:
          return Er("Suspense");
        case Kl:
          return Er("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case hn:
            return Ri(e.render);
          case il:
            return ii(e.type, t, a);
          case Zn: {
            var i = e, o = i._payload, s = i._init;
            try {
              return ii(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Q:
          return Er(e.type);
        case Fe:
          return Er("Lazy");
        case re:
          return Er("Suspense");
        case Ee:
          return Er("SuspenseList");
        case O:
        case M:
        case ce:
          return Ri(e.type);
        case he:
          return Ri(e.type.render);
        case L:
          return Xo(e.type);
        default:
          return "";
      }
    }
    function Zo(e) {
      try {
        var t = "", a = e;
        do
          t += Lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Jl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Ko(e) {
      return e.displayName || "Context";
    }
    function Dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ba:
          return "Fragment";
        case ta:
          return "Portal";
        case al:
          return "Profiler";
        case rl:
          return "StrictMode";
        case va:
          return "Suspense";
        case Kl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ts:
            var t = e;
            return Ko(t) + ".Consumer";
          case Qo:
            var a = e;
            return Ko(a._context) + ".Provider";
          case hn:
            return Jl(e, e.render, "ForwardRef");
          case il:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case Zn: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Dt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Jo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function lt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case ve:
          var i = a;
          return eu(i) + ".Consumer";
        case ke:
          var o = a;
          return eu(o._context) + ".Provider";
        case be:
          return "DehydratedFragment";
        case he:
          return Jo(a, a.render, "ForwardRef");
        case se:
          return "Fragment";
        case Q:
          return a;
        case G:
          return "Portal";
        case F:
          return "Root";
        case ee:
          return "Text";
        case Fe:
          return Dt(a);
        case te:
          return a === rl ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case me:
          return "Profiler";
        case et:
          return "Scope";
        case re:
          return "Suspense";
        case Ee:
          return "SuspenseList";
        case We:
          return "TracingMarker";
        case L:
        case O:
        case Pe:
        case M:
        case le:
        case ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var eo = m.ReactDebugCurrentFrame, cn = null, zr = !1;
    function Cr() {
      {
        if (cn === null)
          return null;
        var e = cn._debugOwner;
        if (e !== null && typeof e < "u")
          return lt(e);
      }
      return null;
    }
    function dl() {
      return cn === null ? "" : Zo(cn);
    }
    function mn() {
      eo.getCurrentStack = null, cn = null, zr = !1;
    }
    function zt(e) {
      eo.getCurrentStack = e === null ? null : dl, cn = e, zr = !1;
    }
    function mc() {
      return cn;
    }
    function Hr(e) {
      zr = e;
    }
    function Vn(e) {
      return "" + e;
    }
    function li(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qn(e), e;
        default:
          return "";
      }
    }
    var yc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ti(e, t) {
      yc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function gc(e) {
      return e._valueTracker;
    }
    function ha(e) {
      e._valueTracker = null;
    }
    function vl(e) {
      var t = "";
      return e && (pl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function hl(e) {
      var t = pl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(h) {
            qn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            qn(h), i = "" + h;
          },
          stopTracking: function() {
            ha(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ma(e) {
      gc(e) || (e._valueTracker = hl(e));
    }
    function tu(e) {
      if (!e)
        return !1;
      var t = gc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ml(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yl = !1, to = !1, nu = !1, ls = !1;
    function Ia(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, o = mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function D(e, t) {
      Ti("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Cr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Cr() || "A component", t.type), yl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: li(t.value != null ? t.value : i),
        controlled: Ia(t)
      };
    }
    function I(e, t) {
      var a = e, i = t.checked;
      i != null && ri(a, "checked", i, !1);
    }
    function q(e, t) {
      var a = e;
      {
        var i = Ia(t);
        !a._wrapperState.controlled && i && !ls && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ls = !0), a._wrapperState.controlled && !i && !nu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), nu = !0);
      }
      I(e, t);
      var o = li(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Vn(o)) : a.value !== Vn(o) && (a.value = Vn(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qe(a, t.type, o) : t.hasOwnProperty("defaultValue") && qe(a, t.type, li(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function fe(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Vn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function Ze(e, t) {
      var a = e;
      q(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Jr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var h = em(f);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            tu(f), q(f, h);
          }
        }
      }
    }
    function qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ml(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Vn(e._wrapperState.initialValue) : e.defaultValue !== Vn(a) && (e.defaultValue = Vn(a)));
    }
    var yt = !1, Ot = !1, It = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ot || (Ot = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (It || (It = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !yt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), yt = !0);
    }
    function Yt(e, t) {
      t.value != null && e.setAttribute("value", Vn(li(t.value)));
    }
    var Xt = Array.isArray;
    function bt(e) {
      return Xt(e);
    }
    var xi;
    xi = !1;
    function ru() {
      var e = Cr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var os = ["value", "defaultValue"];
    function dd(e) {
      {
        Ti("select", e);
        for (var t = 0; t < os.length; t++) {
          var a = os[t];
          if (e[a] != null) {
            var i = bt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ru()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ru());
          }
        }
      }
    }
    function Ya(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, h = 0; h < s.length; h++)
          f["$" + s[h]] = !0;
        for (var y = 0; y < o.length; y++) {
          var C = f.hasOwnProperty("$" + o[y].value);
          o[y].selected !== C && (o[y].selected = C), C && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var b = Vn(li(a)), H = null, A = 0; A < o.length; A++) {
          if (o[A].value === b) {
            o[A].selected = !0, i && (o[A].defaultSelected = !0);
            return;
          }
          H === null && !o[A].disabled && (H = o[A]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function us(e, t) {
      return mt({}, t, {
        value: void 0
      });
    }
    function ss(e, t) {
      var a = e;
      dd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !xi && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), xi = !0);
    }
    function pd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ya(a, !!t.multiple, i, !1) : t.defaultValue != null && Ya(a, !!t.multiple, t.defaultValue, !0);
    }
    function xy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Ya(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ya(a, !!t.multiple, t.defaultValue, !0) : Ya(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ky(e, t) {
      var a = e, i = t.value;
      i != null && Ya(a, !!t.multiple, i, !1);
    }
    var vd = !1;
    function hd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Vn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ov(e, t) {
      var a = e;
      Ti("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vd && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Cr() || "A component"), vd = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (bt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: li(i)
      };
    }
    function _v(e, t) {
      var a = e, i = li(t.value), o = li(t.defaultValue);
      if (i != null) {
        var s = Vn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Vn(o));
    }
    function Lv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function md(e, t) {
      _v(e, t);
    }
    var ki = "http://www.w3.org/1999/xhtml", Dy = "http://www.w3.org/1998/Math/MathML", yd = "http://www.w3.org/2000/svg";
    function Sc(e) {
      switch (e) {
        case "svg":
          return yd;
        case "math":
          return Dy;
        default:
          return ki;
      }
    }
    function gd(e, t) {
      return e == null || e === ki ? Sc(t) : e === yd && t === "foreignObject" ? ki : e;
    }
    var Oy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Ec, Nv = Oy(function(e, t) {
      if (e.namespaceURI === yd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Fr = 1, Di = 3, xn = 8, Qa = 9, no = 11, Cc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Di) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Mv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, au = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(au).forEach(function(e) {
      Av.forEach(function(t) {
        au[Uv(t, e)] = au[e];
      });
    });
    function wc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(au.hasOwnProperty(e) && au[e]) ? t + "px" : (_n(t, e), ("" + t).trim());
    }
    var iu = /([A-Z])/g, _y = /^ms-/;
    function Ly(e) {
      return e.replace(iu, "-$1").toLowerCase().replace(_y, "-ms-");
    }
    var zv = function() {
    };
    {
      var Hv = /^(?:webkit|moz|o)[A-Z]/, Fv = /^-ms-/, cs = /-(.)/g, lu = /;\s*$/, ou = {}, uu = {}, jv = !1, Sd = !1, Ed = function(e) {
        return e.replace(cs, function(t, a) {
          return a.toUpperCase();
        });
      }, Cd = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ed(e.replace(Fv, "ms-"))
        ));
      }, Vv = function(e) {
        ou.hasOwnProperty(e) && ou[e] || (ou[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Bv = function(e, t) {
        uu.hasOwnProperty(t) && uu[t] || (uu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(lu, "")));
      }, Pv = function(e, t) {
        jv || (jv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ny = function(e, t) {
        Sd || (Sd = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      zv = function(e, t) {
        e.indexOf("-") > -1 ? Cd(e) : Hv.test(e) ? Vv(e) : lu.test(t) && Bv(e, t), typeof t == "number" && (isNaN(t) ? Pv(e, t) : isFinite(t) || Ny(e, t));
      };
    }
    var My = zv;
    function Uy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ly(i)) + ":", t += wc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function $v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || My(i, t[i]);
          var s = wc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ya(e) {
      var t = {};
      for (var a in e)
        for (var i = Mv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function fs(e, t) {
      {
        if (!t)
          return;
        var a = ya(e), i = ya(t), o = {};
        for (var s in a) {
          var f = a[s], h = i[s];
          if (h && f !== h) {
            var y = f + "," + h;
            if (o[y])
              continue;
            o[y] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ay(e[f]) ? "Removing" : "Updating", f, h);
          }
        }
      }
    }
    var Iv = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Yv = mt({
      menuitem: !0
    }, Iv), Qv = "__html";
    function bc(e, t) {
      if (t) {
        if (Yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Qv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Oi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Rc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Wv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Wa = {}, wd = new RegExp("^(aria)-[" + Ye + "]*$"), ds = new RegExp("^(aria)[A-Z][" + Ye + "]*$");
    function bd(e, t) {
      {
        if (jn.call(Wa, t) && Wa[t])
          return !0;
        if (ds.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Wv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Wa[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Wa[t] = !0, !0;
        }
        if (wd.test(t)) {
          var o = t.toLowerCase(), s = Wv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Wa[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Wa[t] = !0, !0;
        }
      }
      return !0;
    }
    function Gv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = bd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Tc(e, t) {
      Oi(e, t) || Gv(e, t);
    }
    var ro = !1;
    function Rd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ro && (ro = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Td = function() {
    };
    {
      var Bn = {}, xd = /^on./, qv = /^on[^A-Z]/, Xv = new RegExp("^(aria)-[" + Ye + "]*$"), Zv = new RegExp("^(aria)[A-Z][" + Ye + "]*$");
      Td = function(e, t, a, i) {
        if (jn.call(Bn, t) && Bn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Bn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = f.hasOwnProperty(o) ? f[o] : null;
          if (h != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Bn[t] = !0, !0;
          if (xd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Bn[t] = !0, !0;
        } else if (xd.test(t))
          return qv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Bn[t] = !0, !0;
        if (Xv.test(t) || Zv.test(t))
          return !0;
        if (o === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Bn[t] = !0, !0;
        if (o === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Bn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Bn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Bn[t] = !0, !0;
        var y = pa(t), C = y !== null && y.type === gr;
        if (Rc.hasOwnProperty(o)) {
          var b = Rc[o];
          if (b !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, b), Bn[t] = !0, !0;
        } else if (!C && t !== o)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Bn[t] = !0, !0;
        return typeof a == "boolean" && Ur(t, a, y, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Bn[t] = !0, !0) : C ? !0 : Ur(t, a, y, !1) ? (Bn[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === Tn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Bn[t] = !0), !0);
      };
    }
    var Kv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Td(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Jv(e, t, a) {
      Oi(e, t) || Kv(e, t, a);
    }
    var _i = 1, ps = 1 << 1, ao = 1 << 2, zy = _i | ps | ao, vs = null;
    function hs(e) {
      vs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vs = e;
    }
    function Hy() {
      vs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vs = null;
    }
    function eh(e) {
      return e === vs;
    }
    function xc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Di ? t.parentNode : t;
    }
    var Qt = null, gl = null, Li = null;
    function su(e) {
      var t = Au(e);
      if (t) {
        if (typeof Qt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = em(a);
          Qt(t.stateNode, t.type, i);
        }
      }
    }
    function th(e) {
      Qt = e;
    }
    function kc(e) {
      gl ? Li ? Li.push(e) : Li = [e] : gl = e;
    }
    function ms() {
      return gl !== null || Li !== null;
    }
    function ys() {
      if (gl) {
        var e = gl, t = Li;
        if (gl = null, Li = null, su(e), t)
          for (var a = 0; a < t.length; a++)
            su(t[a]);
      }
    }
    var io = function(e, t) {
      return e(t);
    }, kd = function() {
    }, Dd = !1;
    function Fy() {
      var e = ms();
      e && (kd(), ys());
    }
    function Od(e, t, a) {
      if (Dd)
        return e(t, a);
      Dd = !0;
      try {
        return io(e, t, a);
      } finally {
        Dd = !1, Fy();
      }
    }
    function Dc(e, t, a) {
      io = e, kd = a;
    }
    function Oc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _d(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Oc(t));
        default:
          return !1;
      }
    }
    function lo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = em(a);
      if (i === null)
        return null;
      var o = i[t];
      if (_d(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var gs = !1;
    if (rn)
      try {
        var oo = {};
        Object.defineProperty(oo, "passive", {
          get: function() {
            gs = !0;
          }
        }), window.addEventListener("test", oo, oo), window.removeEventListener("test", oo, oo);
      } catch {
        gs = !1;
      }
    function nh(e, t, a, i, o, s, f, h, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (b) {
        this.onError(b);
      }
    }
    var Ld = nh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nd = document.createElement("react");
      Ld = function(t, a, i, o, s, f, h, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), H = !1, A = !0, $ = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          Nd.removeEventListener(Z, Ge, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function Ge() {
          H = !0, X(), a.apply(i, _e), A = !1;
        }
        var Be, xt = !1, Ct = !1;
        function V(B) {
          if (Be = B.error, xt = !0, Be === null && B.colno === 0 && B.lineno === 0 && (Ct = !0), B.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var Z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", V), Nd.addEventListener(Z, Ge, !1), b.initEvent(Z, !1, !1), Nd.dispatchEvent(b), Y && Object.defineProperty(window, "event", Y), H && A && (xt ? Ct && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", V), !H)
          return X(), nh.apply(this, arguments);
      };
    }
    var jy = Ld, Sl = !1, Ga = null, Ss = !1, El = null, oi = {
      onError: function(e) {
        Sl = !0, Ga = e;
      }
    };
    function uo(e, t, a, i, o, s, f, h, y) {
      Sl = !1, Ga = null, jy.apply(oi, arguments);
    }
    function Ni(e, t, a, i, o, s, f, h, y) {
      if (uo.apply(this, arguments), Sl) {
        var C = Ud();
        Ss || (Ss = !0, El = C);
      }
    }
    function Md() {
      if (Ss) {
        var e = El;
        throw Ss = !1, El = null, e;
      }
    }
    function Vy() {
      return Sl;
    }
    function Ud() {
      if (Sl) {
        var e = Ga;
        return Sl = !1, Ga = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ga(e) {
      return e._reactInternals;
    }
    function Es(e) {
      return e._reactInternals !== void 0;
    }
    function cu(e, t) {
      e._reactInternals = t;
    }
    var Qe = (
      /*                      */
      0
    ), Cl = (
      /*                */
      1
    ), Kt = (
      /*                    */
      2
    ), ft = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), Ht = (
      /*                 */
      32
    ), ui = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), jr = (
      /*                          */
      512
    ), Sa = (
      /*                     */
      1024
    ), on = (
      /*                      */
      2048
    ), Ea = (
      /*                    */
      4096
    ), wl = (
      /*                   */
      8192
    ), Cs = (
      /*             */
      16384
    ), _c = on | ft | ui | jr | Sa | Cs, rh = (
      /*               */
      32767
    ), na = (
      /*                   */
      32768
    ), Pn = (
      /*                */
      65536
    ), ws = (
      /* */
      131072
    ), Ad = (
      /*                       */
      1048576
    ), zd = (
      /*                    */
      2097152
    ), Vr = (
      /*                 */
      4194304
    ), bl = (
      /*                */
      8388608
    ), Br = (
      /*               */
      16777216
    ), so = (
      /*              */
      33554432
    ), fu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ft | Sa | 0
    ), Pr = Kt | ft | Ut | Ht | jr | Ea | wl, fr = ft | ui | jr | wl, Ca = on | Ut, Kn = Vr | bl | zd, Mi = m.ReactCurrentOwner;
    function ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Kt | Ea)) !== Qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Hd(e) {
      if (e.tag === re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Lc(e) {
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Fd(e) {
      return ra(e) === e;
    }
    function aa(e) {
      {
        var t = Mi.current;
        if (t !== null && t.tag === L) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", lt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = ga(e);
      return o ? ra(o) === o : !1;
    }
    function $r(e) {
      if (ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jt(e) {
      var t = e.alternate;
      if (!t) {
        var a = ra(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var h = s.return;
          if (h !== null) {
            i = o = h;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return $r(s), e;
            if (y === o)
              return $r(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var C = !1, b = s.child; b; ) {
            if (b === i) {
              C = !0, i = s, o = f;
              break;
            }
            if (b === o) {
              C = !0, o = s, i = f;
              break;
            }
            b = b.sibling;
          }
          if (!C) {
            for (b = f.child; b; ) {
              if (b === i) {
                C = !0, i = f, o = s;
                break;
              }
              if (b === o) {
                C = !0, o = f, i = s;
                break;
              }
              b = b.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function wa(e) {
      var t = Jt(e);
      return t !== null ? jd(t) : null;
    }
    function jd(e) {
      if (e.tag === Q || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = jd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ah(e) {
      var t = Jt(e);
      return t !== null ? Nc(t) : null;
    }
    function Nc(e) {
      if (e.tag === Q || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== G) {
          var a = Nc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Mc = v.unstable_scheduleCallback, ih = v.unstable_cancelCallback, Uc = v.unstable_shouldYield, lh = v.unstable_requestPaint, fn = v.unstable_now, Vd = v.unstable_getCurrentPriorityLevel, Ac = v.unstable_ImmediatePriority, ia = v.unstable_UserBlockingPriority, si = v.unstable_NormalPriority, zc = v.unstable_LowPriority, Rl = v.unstable_IdlePriority, Bd = v.unstable_yieldValue, Pd = v.unstable_setDisableYieldValue, Tl = null, $n = null, ye = null, wn = !1, Jn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function $d(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        pt && (e = mt({}, e, {
          getLaneLabelMap: kl,
          injectProfilingHooks: Ai
        })), Tl = t.inject(e), $n = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function oh(e, t) {
      if ($n && typeof $n.onScheduleFiberRoot == "function")
        try {
          $n.onScheduleFiberRoot(Tl, e, t);
        } catch (a) {
          wn || (wn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ui(e, t) {
      if ($n && typeof $n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (ct) {
            var i;
            switch (t) {
              case dr:
                i = Ac;
                break;
              case er:
                i = ia;
                break;
              case Hi:
                i = si;
                break;
              case Ls:
                i = Rl;
                break;
              default:
                i = si;
                break;
            }
            $n.onCommitFiberRoot(Tl, e, i, a);
          }
        } catch (o) {
          wn || (wn = !0, S("React instrumentation encountered an error: %s", o));
        }
    }
    function xl(e) {
      if ($n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(Tl, e);
        } catch (t) {
          wn || (wn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Id(e) {
      if ($n && typeof $n.onCommitFiberUnmount == "function")
        try {
          $n.onCommitFiberUnmount(Tl, e);
        } catch (t) {
          wn || (wn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Nn(e) {
      if (typeof Bd == "function" && (Pd(e), T(e)), $n && typeof $n.setStrictMode == "function")
        try {
          $n.setStrictMode(Tl, e);
        } catch (t) {
          wn || (wn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ai(e) {
      ye = e;
    }
    function kl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < en; a++) {
          var i = By(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Hc(e) {
      ye !== null && typeof ye.markCommitStarted == "function" && ye.markCommitStarted(e);
    }
    function Yd() {
      ye !== null && typeof ye.markCommitStopped == "function" && ye.markCommitStopped();
    }
    function Dl(e) {
      ye !== null && typeof ye.markComponentRenderStarted == "function" && ye.markComponentRenderStarted(e);
    }
    function co() {
      ye !== null && typeof ye.markComponentRenderStopped == "function" && ye.markComponentRenderStopped();
    }
    function uh(e) {
      ye !== null && typeof ye.markComponentPassiveEffectMountStarted == "function" && ye.markComponentPassiveEffectMountStarted(e);
    }
    function Qd() {
      ye !== null && typeof ye.markComponentPassiveEffectMountStopped == "function" && ye.markComponentPassiveEffectMountStopped();
    }
    function Fc(e) {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStarted == "function" && ye.markComponentPassiveEffectUnmountStarted(e);
    }
    function sh() {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStopped == "function" && ye.markComponentPassiveEffectUnmountStopped();
    }
    function ch(e) {
      ye !== null && typeof ye.markComponentLayoutEffectMountStarted == "function" && ye.markComponentLayoutEffectMountStarted(e);
    }
    function fh() {
      ye !== null && typeof ye.markComponentLayoutEffectMountStopped == "function" && ye.markComponentLayoutEffectMountStopped();
    }
    function jc(e) {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStarted == "function" && ye.markComponentLayoutEffectUnmountStarted(e);
    }
    function du() {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStopped == "function" && ye.markComponentLayoutEffectUnmountStopped();
    }
    function Vc(e, t, a) {
      ye !== null && typeof ye.markComponentErrored == "function" && ye.markComponentErrored(e, t, a);
    }
    function dh(e, t, a) {
      ye !== null && typeof ye.markComponentSuspended == "function" && ye.markComponentSuspended(e, t, a);
    }
    function ph(e) {
      ye !== null && typeof ye.markLayoutEffectsStarted == "function" && ye.markLayoutEffectsStarted(e);
    }
    function pu() {
      ye !== null && typeof ye.markLayoutEffectsStopped == "function" && ye.markLayoutEffectsStopped();
    }
    function vh(e) {
      ye !== null && typeof ye.markPassiveEffectsStarted == "function" && ye.markPassiveEffectsStarted(e);
    }
    function bs() {
      ye !== null && typeof ye.markPassiveEffectsStopped == "function" && ye.markPassiveEffectsStopped();
    }
    function qa(e) {
      ye !== null && typeof ye.markRenderStarted == "function" && ye.markRenderStarted(e);
    }
    function Rs() {
      ye !== null && typeof ye.markRenderYielded == "function" && ye.markRenderYielded();
    }
    function vu() {
      ye !== null && typeof ye.markRenderStopped == "function" && ye.markRenderStopped();
    }
    function fo(e) {
      ye !== null && typeof ye.markRenderScheduled == "function" && ye.markRenderScheduled(e);
    }
    function Wd(e, t) {
      ye !== null && typeof ye.markForceUpdateScheduled == "function" && ye.markForceUpdateScheduled(e, t);
    }
    function Ol(e, t) {
      ye !== null && typeof ye.markStateUpdateScheduled == "function" && ye.markStateUpdateScheduled(e, t);
    }
    var Xe = (
      /*                         */
      0
    ), gt = (
      /*                 */
      1
    ), Ke = (
      /*                    */
      2
    ), dn = (
      /*               */
      8
    ), ba = (
      /*              */
      16
    ), Bc = Math.clz32 ? Math.clz32 : po, Pc = Math.log, Gd = Math.LN2;
    function po(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Pc(t) / Gd | 0) | 0;
    }
    var en = 31, K = (
      /*                        */
      0
    ), Rt = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), ci = (
      /*    */
      2
    ), la = (
      /*             */
      4
    ), vo = (
      /*            */
      8
    ), tn = (
      /*                     */
      16
    ), ho = (
      /*                */
      32
    ), _l = (
      /*                       */
      4194240
    ), mo = (
      /*                        */
      64
    ), Ra = (
      /*                        */
      128
    ), Ir = (
      /*                        */
      256
    ), yo = (
      /*                        */
      512
    ), Ts = (
      /*                        */
      1024
    ), xs = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), Ic = (
      /*                        */
      8192
    ), Yc = (
      /*                        */
      16384
    ), Qc = (
      /*                       */
      32768
    ), Wc = (
      /*                       */
      65536
    ), Gc = (
      /*                       */
      131072
    ), qc = (
      /*                       */
      262144
    ), Xc = (
      /*                       */
      524288
    ), go = (
      /*                       */
      1048576
    ), Zc = (
      /*                       */
      2097152
    ), So = (
      /*                            */
      130023424
    ), zi = (
      /*                             */
      4194304
    ), Kc = (
      /*                             */
      8388608
    ), ks = (
      /*                             */
      16777216
    ), Jc = (
      /*                             */
      33554432
    ), ef = (
      /*                             */
      67108864
    ), qd = zi, hu = (
      /*          */
      134217728
    ), tf = (
      /*                          */
      268435455
    ), mu = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), Yr = (
      /*                   */
      1073741824
    );
    function By(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & ci)
          return "InputContinuousHydration";
        if (e & la)
          return "InputContinuous";
        if (e & vo)
          return "DefaultHydration";
        if (e & tn)
          return "Default";
        if (e & ho)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & So)
          return "Retry";
        if (e & hu)
          return "SelectiveHydration";
        if (e & mu)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & Yr)
          return "Offscreen";
      }
    }
    var Wt = -1, nf = mo, rf = zi;
    function yu(e) {
      switch (kn(e)) {
        case Je:
          return Je;
        case ci:
          return ci;
        case la:
          return la;
        case vo:
          return vo;
        case tn:
          return tn;
        case ho:
          return ho;
        case mo:
        case Ra:
        case Ir:
        case yo:
        case Ts:
        case xs:
        case $c:
        case Ic:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case qc:
        case Xc:
        case go:
        case Zc:
          return e & _l;
        case zi:
        case Kc:
        case ks:
        case Jc:
        case ef:
          return e & So;
        case hu:
          return hu;
        case mu:
          return mu;
        case Ll:
          return Ll;
        case Yr:
          return Yr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ds(e, t) {
      var a = e.pendingLanes;
      if (a === K)
        return K;
      var i = K, o = e.suspendedLanes, s = e.pingedLanes, f = a & tf;
      if (f !== K) {
        var h = f & ~o;
        if (h !== K)
          i = yu(h);
        else {
          var y = f & s;
          y !== K && (i = yu(y));
        }
      } else {
        var C = a & ~o;
        C !== K ? i = yu(C) : s !== K && (i = yu(s));
      }
      if (i === K)
        return K;
      if (t !== K && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === K) {
        var b = kn(i), H = kn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === tn && (H & _l) !== K
        )
          return t;
      }
      (i & la) !== K && (i |= a & tn);
      var A = e.entangledLanes;
      if (A !== K)
        for (var $ = e.entanglements, Y = i & A; Y > 0; ) {
          var X = Nl(Y), _e = 1 << X;
          i |= $[X], Y &= ~_e;
        }
      return i;
    }
    function hh(e, t) {
      for (var a = e.eventTimes, i = Wt; t > 0; ) {
        var o = Nl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function af(e, t) {
      switch (e) {
        case Je:
        case ci:
        case la:
          return t + 250;
        case vo:
        case tn:
        case ho:
        case mo:
        case Ra:
        case Ir:
        case yo:
        case Ts:
        case xs:
        case $c:
        case Ic:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case qc:
        case Xc:
        case go:
        case Zc:
          return t + 5e3;
        case zi:
        case Kc:
        case ks:
        case Jc:
        case ef:
          return Wt;
        case hu:
        case mu:
        case Ll:
        case Yr:
          return Wt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Wt;
      }
    }
    function Py(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Nl(f), y = 1 << h, C = s[h];
        C === Wt ? ((y & i) === K || (y & o) !== K) && (s[h] = af(y, t)) : C <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function $y(e) {
      return yu(e.pendingLanes);
    }
    function Xd(e) {
      var t = e.pendingLanes & ~Yr;
      return t !== K ? t : t & Yr ? Yr : K;
    }
    function gu(e) {
      return (e & Je) !== K;
    }
    function Os(e) {
      return (e & tf) !== K;
    }
    function lf(e) {
      return (e & So) === e;
    }
    function Iy(e) {
      var t = Je | la | tn;
      return (e & t) === K;
    }
    function mh(e) {
      return (e & _l) === e;
    }
    function _s(e, t) {
      var a = ci | la | vo | tn;
      return (t & a) !== K;
    }
    function yh(e, t) {
      return (t & e.expiredLanes) !== K;
    }
    function Zd(e) {
      return (e & _l) !== K;
    }
    function Kd() {
      var e = nf;
      return nf <<= 1, (nf & _l) === K && (nf = mo), e;
    }
    function Yy() {
      var e = rf;
      return rf <<= 1, (rf & So) === K && (rf = zi), e;
    }
    function kn(e) {
      return e & -e;
    }
    function Mn(e) {
      return kn(e);
    }
    function Nl(e) {
      return 31 - Bc(e);
    }
    function of(e) {
      return Nl(e);
    }
    function Qr(e, t) {
      return (e & t) !== K;
    }
    function Eo(e, t) {
      return (e & t) === t;
    }
    function dt(e, t) {
      return e | t;
    }
    function Su(e, t) {
      return e & ~t;
    }
    function Jd(e, t) {
      return e & t;
    }
    function gh(e) {
      return e;
    }
    function Sh(e, t) {
      return e !== Rt && e < t ? e : t;
    }
    function uf(e) {
      for (var t = [], a = 0; a < en; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = K, e.pingedLanes = K);
      var i = e.eventTimes, o = of(t);
      i[o] = a;
    }
    function ep(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Nl(i), s = 1 << o;
        a[o] = Wt, i &= ~s;
      }
    }
    function tp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function np(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = K, e.pingedLanes = K, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Nl(f), y = 1 << h;
        i[h] = K, o[h] = Wt, s[h] = Wt, f &= ~y;
      }
    }
    function Eu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Nl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Qy(e, t) {
      var a = kn(t), i;
      switch (a) {
        case la:
          i = ci;
          break;
        case tn:
          i = vo;
          break;
        case mo:
        case Ra:
        case Ir:
        case yo:
        case Ts:
        case xs:
        case $c:
        case Ic:
        case Yc:
        case Qc:
        case Wc:
        case Gc:
        case qc:
        case Xc:
        case go:
        case Zc:
        case zi:
        case Kc:
        case ks:
        case Jc:
        case ef:
          i = ho;
          break;
        case Ll:
          i = mu;
          break;
        default:
          i = Rt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Rt ? Rt : i;
    }
    function rp(e, t, a) {
      if (Jn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = of(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function sf(e, t) {
      if (Jn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = of(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), f.clear()), t &= ~s;
        }
    }
    function ap(e, t) {
      return null;
    }
    var dr = Je, er = la, Hi = tn, Ls = Ll, wo = Rt;
    function Ta() {
      return wo;
    }
    function Un(e) {
      wo = e;
    }
    function Ns(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function pr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ip(e, t) {
      return e !== 0 && e < t;
    }
    function Ms(e) {
      var t = kn(e);
      return ip(dr, t) ? ip(er, t) ? Os(t) ? Hi : Ls : er : dr;
    }
    function An(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Eh;
    function Me(e) {
      Eh = e;
    }
    function Cu(e) {
      Eh(e);
    }
    var Us;
    function Ch(e) {
      Us = e;
    }
    var wh;
    function As(e) {
      wh = e;
    }
    var zs;
    function lp(e) {
      zs = e;
    }
    var op;
    function bh(e) {
      op = e;
    }
    var cf = !1, wu = [], fi = null, un = null, In = null, xa = /* @__PURE__ */ new Map(), bu = /* @__PURE__ */ new Map(), Fi = [], Xa = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Rh(e) {
      return Xa.indexOf(e) > -1;
    }
    function di(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Th(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fi = null;
          break;
        case "dragenter":
        case "dragleave":
          un = null;
          break;
        case "mouseover":
        case "mouseout":
          In = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          xa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          bu.delete(i);
          break;
        }
      }
    }
    function Ru(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = di(t, a, i, o, s);
        if (t !== null) {
          var h = Au(t);
          h !== null && Us(h);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function xh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return fi = Ru(fi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return un = Ru(un, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var h = o;
          return In = Ru(In, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var y = o, C = y.pointerId;
          return xa.set(C, Ru(xa.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var b = o, H = b.pointerId;
          return bu.set(H, Ru(bu.get(H) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function up(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = ra(t);
        if (a !== null) {
          var i = a.tag;
          if (i === re) {
            var o = Hd(a);
            if (o !== null) {
              e.blockedOn = o, op(e.priority, function() {
                wh(a);
              });
              return;
            }
          } else if (i === F) {
            var s = a.stateNode;
            if (An(s)) {
              e.blockedOn = Lc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function kh(e) {
      for (var t = zs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fi.length && ip(t, Fi[i].priority); i++)
        ;
      Fi.splice(i, 0, a), i === 0 && up(a);
    }
    function ff(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = bo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          hs(s), o.target.dispatchEvent(s), Hy();
        } else {
          var f = Au(i);
          return f !== null && Us(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Hs(e, t, a) {
      ff(e) && a.delete(t);
    }
    function sp() {
      cf = !1, fi !== null && ff(fi) && (fi = null), un !== null && ff(un) && (un = null), In !== null && ff(In) && (In = null), xa.forEach(Hs), bu.forEach(Hs);
    }
    function vr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, cf || (cf = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, sp)));
    }
    function Et(e) {
      if (wu.length > 0) {
        vr(wu[0], e);
        for (var t = 1; t < wu.length; t++) {
          var a = wu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fi !== null && vr(fi, e), un !== null && vr(un, e), In !== null && vr(In, e);
      var i = function(h) {
        return vr(h, e);
      };
      xa.forEach(i), bu.forEach(i);
      for (var o = 0; o < Fi.length; o++) {
        var s = Fi[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fi.length > 0; ) {
        var f = Fi[0];
        if (f.blockedOn !== null)
          break;
        up(f), f.blockedOn === null && Fi.shift();
      }
    }
    var pn = m.ReactCurrentBatchConfig, gn = !0;
    function Yn(e) {
      gn = !!e;
    }
    function oa() {
      return gn;
    }
    function Tu(e, t, a) {
      var i = wr(t), o;
      switch (i) {
        case dr:
          o = zn;
          break;
        case er:
          o = Fs;
          break;
        case Hi:
        default:
          o = ji;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function zn(e, t, a, i) {
      var o = Ta(), s = pn.transition;
      pn.transition = null;
      try {
        Un(dr), ji(e, t, a, i);
      } finally {
        Un(o), pn.transition = s;
      }
    }
    function Fs(e, t, a, i) {
      var o = Ta(), s = pn.transition;
      pn.transition = null;
      try {
        Un(er), ji(e, t, a, i);
      } finally {
        Un(o), pn.transition = s;
      }
    }
    function ji(e, t, a, i) {
      gn && df(e, t, a, i);
    }
    function df(e, t, a, i) {
      var o = bo(e, t, a, i);
      if (o === null) {
        pg(e, t, i, xu, a), Th(e, i);
        return;
      }
      if (xh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Th(e, i), t & ao && Rh(e)) {
        for (; o !== null; ) {
          var s = Au(o);
          s !== null && Cu(s);
          var f = bo(e, t, a, i);
          if (f === null && pg(e, t, i, xu, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      pg(e, t, i, null, a);
    }
    var xu = null;
    function bo(e, t, a, i) {
      xu = null;
      var o = xc(i), s = Ys(o);
      if (s !== null) {
        var f = ra(s);
        if (f === null)
          s = null;
        else {
          var h = f.tag;
          if (h === re) {
            var y = Hd(f);
            if (y !== null)
              return y;
            s = null;
          } else if (h === F) {
            var C = f.stateNode;
            if (An(C))
              return Lc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return xu = s, null;
    }
    function wr(e) {
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
          return dr;
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
          return er;
        case "message": {
          var t = Vd();
          switch (t) {
            case Ac:
              return dr;
            case ia:
              return er;
            case si:
            case zc:
              return Hi;
            case Rl:
              return Ls;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function cp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ku(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function pf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ro = null, pi = null, Ml = null;
    function Ul(e) {
      return Ro = e, pi = hf(), !0;
    }
    function vf() {
      Ro = null, pi = null, Ml = null;
    }
    function Du() {
      if (Ml)
        return Ml;
      var e, t = pi, a = t.length, i, o = hf(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Ml = o.slice(e, h), Ml;
    }
    function hf() {
      return "value" in Ro ? Ro.value : Ro.textContent;
    }
    function To(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function hr() {
      return !1;
    }
    function Dn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = xo : this.isDefaultPrevented = hr, this.isPropagationStopped = hr, this;
      }
      return mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xo
      }), t;
    }
    var mr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, yr = Dn(mr), Ou = mt({}, mr, {
      view: 0,
      detail: 0
    }), fp = Dn(Ou), js, dp, ka;
    function Dh(e) {
      e !== ka && (ka && e.type === "mousemove" ? (js = e.screenX - ka.screenX, dp = e.screenY - ka.screenY) : (js = 0, dp = 0), ka = e);
    }
    var _u = mt({}, Ou, {
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
      getModifierState: gf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dh(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dp;
      }
    }), Al = Dn(_u), pp = mt({}, _u, {
      dataTransfer: 0
    }), ko = Dn(pp), Oh = mt({}, Ou, {
      relatedTarget: 0
    }), mf = Dn(Oh), vp = mt({}, mr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yf = Dn(vp), Gy = mt({}, mr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qy = Dn(Gy), _h = mt({}, mr, {
      data: 0
    }), hp = Dn(_h), Do = hp, Xy = {
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
      MozPrintableKey: "Unidentified"
    }, Lu = {
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
      224: "Meta"
    };
    function Lh(e) {
      if (e.key) {
        var t = Xy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = To(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Lu[e.keyCode] || "Unidentified" : "";
    }
    var Sn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Sn[e];
      return i ? !!a[i] : !1;
    }
    function gf(e) {
      return Zy;
    }
    var Ky = mt({}, Ou, {
      key: Lh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? To(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? To(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Jy = Dn(Ky), Nh = mt({}, _u, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), mp = Dn(Nh), eg = mt({}, Ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gf
    }), Da = Dn(eg), yp = mt({}, mr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), tg = Dn(yp), zl = mt({}, _u, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Sf = Dn(zl), Oo = [9, 13, 27, 32], Vs = 229, Bs = rn && "CompositionEvent" in window, _o = null;
    rn && "documentMode" in document && (_o = document.documentMode);
    var ng = rn && "TextEvent" in window && !_o, Ef = rn && (!Bs || _o && _o > 8 && _o <= 11), Mh = 32, gp = String.fromCharCode(Mh);
    function Uh() {
      Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ps = !1;
    function Cf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ah(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Sp(e, t) {
      return e === "keydown" && t.keyCode === Vs;
    }
    function zh(e, t) {
      switch (e) {
        case "keyup":
          return Oo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Vs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ep(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function wf(e) {
      return e.locale === "ko";
    }
    var Bi = !1;
    function Cp(e, t, a, i, o) {
      var s, f;
      if (Bs ? s = Ah(t) : Bi ? zh(t, i) && (s = "onCompositionEnd") : Sp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !wf(i) && (!Bi && s === "onCompositionStart" ? Bi = Ul(o) : s === "onCompositionEnd" && Bi && (f = Du()));
      var h = Bh(a, s);
      if (h.length > 0) {
        var y = new hp(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: h
        }), f)
          y.data = f;
        else {
          var C = Ep(i);
          C !== null && (y.data = C);
        }
      }
    }
    function bf(e, t) {
      switch (e) {
        case "compositionend":
          return Ep(t);
        case "keypress":
          var a = t.which;
          return a !== Mh ? null : (Ps = !0, gp);
        case "textInput":
          var i = t.data;
          return i === gp && Ps ? null : i;
        default:
          return null;
      }
    }
    function Hh(e, t) {
      if (Bi) {
        if (e === "compositionend" || !Bs && zh(e, t)) {
          var a = Du();
          return vf(), Bi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Cf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ef && !wf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function rg(e, t, a, i, o) {
      var s;
      if (ng ? s = bf(t, i) : s = Hh(t, i), !s)
        return null;
      var f = Bh(a, "onBeforeInput");
      if (f.length > 0) {
        var h = new Do("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: h,
          listeners: f
        }), h.data = s;
      }
    }
    function Rf(e, t, a, i, o, s, f) {
      Cp(e, t, a, i, o), rg(e, t, a, i, o);
    }
    var ag = {
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
      week: !0
    };
    function Nu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ag[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ig(e) {
      if (!rn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Tf() {
      Fn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      kc(i);
      var o = Bh(t, "onChange");
      if (o.length > 0) {
        var s = new yr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var r = null, l = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, xc(e)), Od(p, t);
    }
    function p(e) {
      RS(e, 0);
    }
    function E(e) {
      var t = Lf(e);
      if (tu(t))
        return e;
    }
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var N = !1;
    rn && (N = ig("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", oe);
    }
    function ie() {
      r && (r.detachEvent("onpropertychange", oe), r = null, l = null);
    }
    function oe(e) {
      e.propertyName === "value" && E(l) && c(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (ie(), W(t, a)) : e === "focusout" && ie();
    }
    function De(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(l);
    }
    function Ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function je(e, t) {
      if (e === "click")
        return E(t);
    }
    function bn(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function j(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qe(e, "number", e.value);
    }
    function z(e, t, a, i, o, s, f) {
      var h = a ? Lf(a) : window, y, C;
      if (u(h) ? y = x : Nu(h) ? N ? y = bn : (y = De, C = ae) : Ue(h) && (y = je), y) {
        var b = y(t, a);
        if (b) {
          n(e, b, i, o);
          return;
        }
      }
      C && C(t, h, a), t === "focusout" && j(h);
    }
    function P() {
      Kr("onMouseEnter", ["mouseout", "mouseover"]), Kr("onMouseLeave", ["mouseout", "mouseover"]), Kr("onPointerEnter", ["pointerout", "pointerover"]), Kr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function pe(e, t, a, i, o, s, f) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !eh(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Ys(C) || Ap(C)))
          return;
      }
      if (!(!y && !h)) {
        var b;
        if (o.window === o)
          b = o;
        else {
          var H = o.ownerDocument;
          H ? b = H.defaultView || H.parentWindow : b = window;
        }
        var A, $;
        if (y) {
          var Y = i.relatedTarget || i.toElement;
          if (A = a, $ = Y ? Ys(Y) : null, $ !== null) {
            var X = ra($);
            ($ !== X || $.tag !== Q && $.tag !== ee) && ($ = null);
          }
        } else
          A = null, $ = a;
        if (A !== $) {
          var _e = Al, Ge = "onMouseLeave", Be = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = mp, Ge = "onPointerLeave", Be = "onPointerEnter", xt = "pointer");
          var Ct = A == null ? b : Lf(A), V = $ == null ? b : Lf($), Z = new _e(Ge, xt + "leave", A, i, o);
          Z.target = Ct, Z.relatedTarget = V;
          var B = null, ue = Ys(o);
          if (ue === a) {
            var Le = new _e(Be, xt + "enter", $, i, o);
            Le.target = V, Le.relatedTarget = Ct, B = Le;
          }
          Jw(e, Z, B, A, $);
        }
      }
    }
    function Ve(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ae = typeof Object.is == "function" ? Object.is : Ve;
    function $e(e, t) {
      if (Ae(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!jn.call(t, s) || !Ae(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function at(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Qn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function _t(e, t) {
      for (var a = at(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Di) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = at(Qn(a));
      }
    }
    function Hl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return lg(e, o, s, f, h);
    }
    function lg(e, t, a, i, o) {
      var s = 0, f = -1, h = -1, y = 0, C = 0, b = e, H = null;
      e:
        for (; ; ) {
          for (var A = null; b === t && (a === 0 || b.nodeType === Di) && (f = s + a), b === i && (o === 0 || b.nodeType === Di) && (h = s + o), b.nodeType === Di && (s += b.nodeValue.length), (A = b.firstChild) !== null; )
            H = b, b = A;
          for (; ; ) {
            if (b === e)
              break e;
            if (H === t && ++y === a && (f = s), H === i && ++C === o && (h = s), (A = b.nextSibling) !== null)
              break;
            b = H, H = b.parentNode;
          }
          b = A;
        }
      return f === -1 || h === -1 ? null : {
        start: f,
        end: h
      };
    }
    function Uw(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), h = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > h) {
          var y = h;
          h = f, f = y;
        }
        var C = _t(e, f), b = _t(e, h);
        if (C && b) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === b.node && o.focusOffset === b.offset)
            return;
          var H = a.createRange();
          H.setStart(C.node, C.offset), o.removeAllRanges(), f > h ? (o.addRange(H), o.extend(b.node, b.offset)) : (H.setEnd(b.node, b.offset), o.addRange(H));
        }
      }
    }
    function dS(e) {
      return e && e.nodeType === Di;
    }
    function pS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : dS(e) ? !1 : dS(t) ? pS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Aw(e) {
      return e && e.ownerDocument && pS(e.ownerDocument.documentElement, e);
    }
    function zw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function vS() {
      for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
        if (zw(t))
          e = t.contentWindow;
        else
          return t;
        t = ml(e.document);
      }
      return t;
    }
    function og(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hw() {
      var e = vS();
      return {
        focusedElem: e,
        selectionRange: og(e) ? jw(e) : null
      };
    }
    function Fw(e) {
      var t = vS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Aw(a)) {
        i !== null && og(a) && Vw(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Fr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var h = o[f];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function jw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Hl(e), t || {
        start: 0,
        end: 0
      };
    }
    function Vw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Uw(e, t);
    }
    var Bw = rn && "documentMode" in document && document.documentMode <= 11;
    function Pw() {
      Fn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var xf = null, ug = null, wp = null, sg = !1;
    function $w(e) {
      if ("selectionStart" in e && og(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Iw(e) {
      return e.window === e ? e.document : e.nodeType === Qa ? e : e.ownerDocument;
    }
    function hS(e, t, a) {
      var i = Iw(a);
      if (!(sg || xf == null || xf !== ml(i))) {
        var o = $w(xf);
        if (!wp || !$e(wp, o)) {
          wp = o;
          var s = Bh(ug, "onSelect");
          if (s.length > 0) {
            var f = new yr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = xf;
          }
        }
      }
    }
    function Yw(e, t, a, i, o, s, f) {
      var h = a ? Lf(a) : window;
      switch (t) {
        case "focusin":
          (Nu(h) || h.contentEditable === "true") && (xf = h, ug = a, wp = null);
          break;
        case "focusout":
          xf = null, ug = null, wp = null;
          break;
        case "mousedown":
          sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          sg = !1, hS(e, i, o);
          break;
        case "selectionchange":
          if (Bw)
            break;
        case "keydown":
        case "keyup":
          hS(e, i, o);
      }
    }
    function Fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var kf = {
      animationend: Fh("Animation", "AnimationEnd"),
      animationiteration: Fh("Animation", "AnimationIteration"),
      animationstart: Fh("Animation", "AnimationStart"),
      transitionend: Fh("Transition", "TransitionEnd")
    }, cg = {}, mS = {};
    rn && (mS = document.createElement("div").style, "AnimationEvent" in window || (delete kf.animationend.animation, delete kf.animationiteration.animation, delete kf.animationstart.animation), "TransitionEvent" in window || delete kf.transitionend.transition);
    function jh(e) {
      if (cg[e])
        return cg[e];
      if (!kf[e])
        return e;
      var t = kf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in mS)
          return cg[e] = t[a];
      return e;
    }
    var yS = jh("animationend"), gS = jh("animationiteration"), SS = jh("animationstart"), ES = jh("transitionend"), CS = /* @__PURE__ */ new Map(), wS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Mu(e, t) {
      CS.set(e, t), Fn(t, [e]);
    }
    function Qw() {
      for (var e = 0; e < wS.length; e++) {
        var t = wS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Mu(a, "on" + i);
      }
      Mu(yS, "onAnimationEnd"), Mu(gS, "onAnimationIteration"), Mu(SS, "onAnimationStart"), Mu("dblclick", "onDoubleClick"), Mu("focusin", "onFocus"), Mu("focusout", "onBlur"), Mu(ES, "onTransitionEnd");
    }
    function Ww(e, t, a, i, o, s, f) {
      var h = CS.get(t);
      if (h !== void 0) {
        var y = yr, C = t;
        switch (t) {
          case "keypress":
            if (To(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = Jy;
            break;
          case "focusin":
            C = "focus", y = mf;
            break;
          case "focusout":
            C = "blur", y = mf;
            break;
          case "beforeblur":
          case "afterblur":
            y = mf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Al;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ko;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Da;
            break;
          case yS:
          case gS:
          case SS:
            y = yf;
            break;
          case ES:
            y = tg;
            break;
          case "scroll":
            y = fp;
            break;
          case "wheel":
            y = Sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = qy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = mp;
            break;
        }
        var b = (s & ao) !== 0;
        {
          var H = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = Zw(a, h, i.type, b, H);
          if (A.length > 0) {
            var $ = new y(h, C, null, i, o);
            e.push({
              event: $,
              listeners: A
            });
          }
        }
      }
    }
    Qw(), P(), Tf(), Pw(), Uh();
    function Gw(e, t, a, i, o, s, f) {
      Ww(e, t, a, i, o, s);
      var h = (s & zy) === 0;
      h && (pe(e, t, a, i, o), z(e, t, a, i, o), Yw(e, t, a, i, o), Rf(e, t, a, i, o));
    }
    var bp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], fg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(bp));
    function bS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ni(i, t, void 0, e), e.currentTarget = null;
    }
    function qw(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, h = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          bS(e, y, h), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var b = t[C], H = b.instance, A = b.currentTarget, $ = b.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          bS(e, $, A), i = H;
        }
    }
    function RS(e, t) {
      for (var a = (t & ao) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        qw(s, f, a);
      }
      Md();
    }
    function Xw(e, t, a, i, o) {
      var s = xc(a), f = [];
      Gw(f, e, i, a, s, t), RS(f, t);
    }
    function vn(e, t) {
      fg.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = xR(t), o = eb(e, a);
      i.has(o) || (TS(t, e, ps, a), i.add(o));
    }
    function dg(e, t, a) {
      fg.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ao), TS(a, e, i, t);
    }
    var Vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Rp(e) {
      if (!e[Vh]) {
        e[Vh] = !0, st.forEach(function(a) {
          a !== "selectionchange" && (fg.has(a) || dg(a, !1, e), dg(a, !0, e));
        });
        var t = e.nodeType === Qa ? e : e.ownerDocument;
        t !== null && (t[Vh] || (t[Vh] = !0, dg("selectionchange", !1, t)));
      }
    }
    function TS(e, t, a, i, o) {
      var s = Tu(e, t, a), f = void 0;
      gs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vi(e, t, s, f) : ku(e, t, s) : f !== void 0 ? pf(e, t, s, f) : cp(e, t, s);
    }
    function xS(e, t) {
      return e === t || e.nodeType === xn && e.parentNode === t;
    }
    function pg(e, t, a, i, o) {
      var s = i;
      if (!(t & _i) && !(t & ps)) {
        var f = o;
        if (i !== null) {
          var h = i;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var y = h.tag;
              if (y === F || y === G) {
                var C = h.stateNode.containerInfo;
                if (xS(C, f))
                  break;
                if (y === G)
                  for (var b = h.return; b !== null; ) {
                    var H = b.tag;
                    if (H === F || H === G) {
                      var A = b.stateNode.containerInfo;
                      if (xS(A, f))
                        return;
                    }
                    b = b.return;
                  }
                for (; C !== null; ) {
                  var $ = Ys(C);
                  if ($ === null)
                    return;
                  var Y = $.tag;
                  if (Y === Q || Y === ee) {
                    h = s = $;
                    continue e;
                  }
                  C = C.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      Od(function() {
        return Xw(e, t, a, s);
      });
    }
    function Tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Zw(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, y = [], C = e, b = null; C !== null; ) {
        var H = C, A = H.stateNode, $ = H.tag;
        if ($ === Q && A !== null && (b = A, h !== null)) {
          var Y = lo(C, h);
          Y != null && y.push(Tp(C, Y, b));
        }
        if (o)
          break;
        C = C.return;
      }
      return y;
    }
    function Bh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, h = s.tag;
        if (h === Q && f !== null) {
          var y = f, C = lo(o, a);
          C != null && i.unshift(Tp(o, C, y));
          var b = lo(o, t);
          b != null && i.push(Tp(o, b, y));
        }
        o = o.return;
      }
      return i;
    }
    function Df(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Q);
      return e || null;
    }
    function Kw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Df(s))
        o++;
      for (var f = 0, h = i; h; h = Df(h))
        f++;
      for (; o - f > 0; )
        a = Df(a), o--;
      for (; f - o > 0; )
        i = Df(i), f--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Df(a), i = Df(i);
      }
      return null;
    }
    function kS(e, t, a, i, o) {
      for (var s = t._reactName, f = [], h = a; h !== null && h !== i; ) {
        var y = h, C = y.alternate, b = y.stateNode, H = y.tag;
        if (C !== null && C === i)
          break;
        if (H === Q && b !== null) {
          var A = b;
          if (o) {
            var $ = lo(h, s);
            $ != null && f.unshift(Tp(h, $, A));
          } else if (!o) {
            var Y = lo(h, s);
            Y != null && f.push(Tp(h, Y, A));
          }
        }
        h = h.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function Jw(e, t, a, i, o) {
      var s = i && o ? Kw(i, o) : null;
      i !== null && kS(e, t, i, s, !1), o !== null && a !== null && kS(e, a, o, s, !0);
    }
    function eb(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Oa = !1, xp = "dangerouslySetInnerHTML", Ph = "suppressContentEditableWarning", Uu = "suppressHydrationWarning", DS = "autoFocus", $s = "children", Is = "style", $h = "__html", vg, Ih, kp, OS, Yh, _S, LS;
    vg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ih = function(e, t) {
      Tc(e, t), Rd(e, t), Jv(e, t, {
        registrationNameDependencies: At,
        possibleRegistrationNames: Fa
      });
    }, _S = rn && !document.documentMode, kp = function(e, t, a) {
      if (!Oa) {
        var i = Qh(a), o = Qh(t);
        o !== i && (Oa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, OS = function(e) {
      if (!Oa) {
        Oa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Yh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, LS = function(e, t) {
      var a = e.namespaceURI === ki ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var tb = /\r\n?/g, nb = /\u0000|\uFFFD/g;
    function Qh(e) {
      ea(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(tb, `
`).replace(nb, "");
    }
    function Wh(e, t, a, i) {
      var o = Qh(t), s = Qh(e);
      if (s !== o && (i && (Oa || (Oa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Te))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function NS(e) {
      return e.nodeType === Qa ? e : e.ownerDocument;
    }
    function rb() {
    }
    function Gh(e) {
      e.onclick = rb;
    }
    function ab(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), $v(t, f);
          else if (s === xp) {
            var h = f ? f[$h] : void 0;
            h != null && Nv(t, h);
          } else if (s === $s)
            if (typeof f == "string") {
              var y = e !== "textarea" || f !== "";
              y && Cc(t, f);
            } else
              typeof f == "number" && Cc(t, "" + f);
          else
            s === Ph || s === Uu || s === DS || (At.hasOwnProperty(s) ? f != null && (typeof f != "function" && Yh(s, f), s === "onScroll" && vn("scroll", t)) : f != null && ri(t, s, f, o));
        }
    }
    function ib(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Is ? $v(e, f) : s === xp ? Nv(e, f) : s === $s ? Cc(e, f) : ri(e, s, f, i);
      }
    }
    function lb(e, t, a, i) {
      var o, s = NS(a), f, h = i;
      if (h === ki && (h = Sc(e)), h === ki) {
        if (o = Oi(e, t), !o && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          f = y.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var b = f;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        f = s.createElementNS(h, e);
      return h === ki && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !jn.call(vg, e) && (vg[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ob(e, t) {
      return NS(t).createTextNode(e);
    }
    function ub(e, t, a, i) {
      var o = Oi(t, a);
      Ih(t, a);
      var s;
      switch (t) {
        case "dialog":
          vn("cancel", e), vn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < bp.length; f++)
            vn(bp[f], e);
          s = a;
          break;
        case "source":
          vn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e), s = a;
          break;
        case "details":
          vn("toggle", e), s = a;
          break;
        case "input":
          D(e, a), s = g(e, a), vn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          ss(e, a), s = us(e, a), vn("invalid", e);
          break;
        case "textarea":
          Ov(e, a), s = hd(e, a), vn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (bc(t, s), ab(t, e, i, s, o), t) {
        case "input":
          ma(e), fe(e, a, !1);
          break;
        case "textarea":
          ma(e), Lv(e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          pd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Gh(e);
          break;
      }
    }
    function sb(e, t, a, i, o) {
      Ih(t, i);
      var s = null, f, h;
      switch (t) {
        case "input":
          f = g(e, a), h = g(e, i), s = [];
          break;
        case "select":
          f = us(e, a), h = us(e, i), s = [];
          break;
        case "textarea":
          f = hd(e, a), h = hd(e, i), s = [];
          break;
        default:
          f = a, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && Gh(e);
          break;
      }
      bc(t, h);
      var y, C, b = null;
      for (y in f)
        if (!(h.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === Is) {
            var H = f[y];
            for (C in H)
              H.hasOwnProperty(C) && (b || (b = {}), b[C] = "");
          } else
            y === xp || y === $s || y === Ph || y === Uu || y === DS || (At.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var A = h[y], $ = f != null ? f[y] : void 0;
        if (!(!h.hasOwnProperty(y) || A === $ || A == null && $ == null))
          if (y === Is)
            if (A && Object.freeze(A), $) {
              for (C in $)
                $.hasOwnProperty(C) && (!A || !A.hasOwnProperty(C)) && (b || (b = {}), b[C] = "");
              for (C in A)
                A.hasOwnProperty(C) && $[C] !== A[C] && (b || (b = {}), b[C] = A[C]);
            } else
              b || (s || (s = []), s.push(y, b)), b = A;
          else if (y === xp) {
            var Y = A ? A[$h] : void 0, X = $ ? $[$h] : void 0;
            Y != null && X !== Y && (s = s || []).push(y, Y);
          } else
            y === $s ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(y, "" + A) : y === Ph || y === Uu || (At.hasOwnProperty(y) ? (A != null && (typeof A != "function" && Yh(y, A), y === "onScroll" && vn("scroll", e)), !s && $ !== A && (s = [])) : (s = s || []).push(y, A));
      }
      return b && (fs(b, h[Is]), (s = s || []).push(Is, b)), s;
    }
    function cb(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && I(e, o);
      var s = Oi(a, i), f = Oi(a, o);
      switch (ib(e, t, s, f), a) {
        case "input":
          q(e, o);
          break;
        case "textarea":
          _v(e, o);
          break;
        case "select":
          xy(e, o);
          break;
      }
    }
    function fb(e) {
      {
        var t = e.toLowerCase();
        return Rc.hasOwnProperty(t) && Rc[t] || null;
      }
    }
    function db(e, t, a, i, o, s, f) {
      var h, y;
      switch (h = Oi(t, a), Ih(t, a), t) {
        case "dialog":
          vn("cancel", e), vn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          vn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < bp.length; C++)
            vn(bp[C], e);
          break;
        case "source":
          vn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          vn("error", e), vn("load", e);
          break;
        case "details":
          vn("toggle", e);
          break;
        case "input":
          D(e, a), vn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          ss(e, a), vn("invalid", e);
          break;
        case "textarea":
          Ov(e, a), vn("invalid", e);
          break;
      }
      bc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var b = e.attributes, H = 0; H < b.length; H++) {
          var A = b[H].name.toLowerCase();
          switch (A) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(b[H].name);
          }
        }
      }
      var $ = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var X = a[Y];
          if (Y === $s)
            typeof X == "string" ? e.textContent !== X && (a[Uu] !== !0 && Wh(e.textContent, X, s, f), $ = [$s, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Uu] !== !0 && Wh(e.textContent, X, s, f), $ = [$s, "" + X]);
          else if (At.hasOwnProperty(Y))
            X != null && (typeof X != "function" && Yh(Y, X), Y === "onScroll" && vn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var _e = void 0, Ge = h && tt ? null : pa(Y);
            if (a[Uu] !== !0) {
              if (!(Y === Ph || Y === Uu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === xp) {
                  var Be = e.innerHTML, xt = X ? X[$h] : void 0;
                  if (xt != null) {
                    var Ct = LS(e, xt);
                    Ct !== Be && kp(Y, Be, Ct);
                  }
                } else if (Y === Is) {
                  if (y.delete(Y), _S) {
                    var V = Uy(X);
                    _e = e.getAttribute("style"), V !== _e && kp(Y, _e, V);
                  }
                } else if (h && !tt)
                  y.delete(Y.toLowerCase()), _e = tl(e, Y, X), X !== _e && kp(Y, _e, X);
                else if (!Cn(Y, Ge, h) && !Zt(Y, X, Ge, h)) {
                  var Z = !1;
                  if (Ge !== null)
                    y.delete(Ge.attributeName), _e = Va(e, Y, X, Ge);
                  else {
                    var B = i;
                    if (B === ki && (B = Sc(t)), B === ki)
                      y.delete(Y.toLowerCase());
                    else {
                      var ue = fb(Y);
                      ue !== null && ue !== Y && (Z = !0, y.delete(ue)), y.delete(Y);
                    }
                    _e = tl(e, Y, X);
                  }
                  var Le = tt;
                  !Le && X !== _e && !Z && kp(Y, _e, X);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Uu] !== !0 && OS(y), t) {
        case "input":
          ma(e), fe(e, a, !0);
          break;
        case "textarea":
          ma(e), Lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Gh(e);
          break;
      }
      return $;
    }
    function pb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function hg(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function mg(e, t) {
      {
        if (Oa)
          return;
        Oa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function yg(e, t, a) {
      {
        if (Oa)
          return;
        Oa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function gg(e, t) {
      {
        if (t === "" || Oa)
          return;
        Oa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function vb(e, t, a) {
      switch (t) {
        case "input":
          Ze(e, a);
          return;
        case "textarea":
          md(e, a);
          return;
        case "select":
          ky(e, a);
          return;
      }
    }
    var Dp = function() {
    }, Op = function() {
    };
    {
      var hb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], MS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], mb = MS.concat(["button"]), yb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], US = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Op = function(e, t) {
        var a = mt({}, e || US), i = {
          tag: t
        };
        return MS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), mb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var gb = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return yb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Sb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, AS = {};
      Dp = function(e, t, a) {
        a = a || US;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = gb(e, o) ? null : i, f = s ? null : Sb(e, a), h = s || f;
        if (h) {
          var y = h.tag, C = !!s + "|" + e + "|" + y;
          if (!AS[C]) {
            AS[C] = !0;
            var b = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", s) {
              var A = "";
              y === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, y, H, A);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, y);
          }
        }
      };
    }
    var qh = "suppressHydrationWarning", Xh = "$", Zh = "/$", _p = "$?", Lp = "$!", Eb = "style", Sg = null, Eg = null;
    function Cb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Qa:
        case no: {
          t = i === Qa ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : gd(null, "");
          break;
        }
        default: {
          var s = i === xn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = gd(f, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = Op(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function wb(e, t, a) {
      {
        var i = e, o = gd(i.namespace, t), s = Op(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function w4(e) {
      return e;
    }
    function bb(e) {
      Sg = oa(), Eg = Hw();
      var t = null;
      return Yn(!1), t;
    }
    function Rb(e) {
      Fw(Eg), Yn(Sg), Sg = null, Eg = null;
    }
    function Tb(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (Dp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = Op(f.ancestorInfo, e);
          Dp(null, h, y);
        }
        s = f.namespace;
      }
      var C = lb(e, t, a, s);
      return Up(o, C), Dg(C, t), C;
    }
    function xb(e, t) {
      e.appendChild(t);
    }
    function kb(e, t, a, i, o) {
      switch (ub(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Db(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = Op(f.ancestorInfo, t);
          Dp(null, h, y);
        }
      }
      return sb(e, t, a, i);
    }
    function Cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ob(e, t, a, i) {
      {
        var o = a;
        Dp(null, e, o.ancestorInfo);
      }
      var s = ob(e, t);
      return Up(i, s), s;
    }
    function _b() {
      var e = window.event;
      return e === void 0 ? Hi : wr(e.type);
    }
    var wg = typeof setTimeout == "function" ? setTimeout : void 0, Lb = typeof clearTimeout == "function" ? clearTimeout : void 0, bg = -1, zS = typeof Promise == "function" ? Promise : void 0, Nb = typeof queueMicrotask == "function" ? queueMicrotask : typeof zS < "u" ? function(e) {
      return zS.resolve(null).then(e).catch(Mb);
    } : wg;
    function Mb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ub(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Ab(e, t, a, i, o, s) {
      cb(e, t, a, i, o), Dg(e, o);
    }
    function HS(e) {
      Cc(e, "");
    }
    function zb(e, t, a) {
      e.nodeValue = a;
    }
    function Hb(e, t) {
      e.appendChild(t);
    }
    function Fb(e, t) {
      var a;
      e.nodeType === xn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Gh(a);
    }
    function jb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Vb(e, t, a) {
      e.nodeType === xn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Bb(e, t) {
      e.removeChild(t);
    }
    function Pb(e, t) {
      e.nodeType === xn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Rg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === xn) {
          var s = o.data;
          if (s === Zh)
            if (i === 0) {
              e.removeChild(o), Et(t);
              return;
            } else
              i--;
          else
            (s === Xh || s === _p || s === Lp) && i++;
        }
        a = o;
      } while (a);
      Et(t);
    }
    function $b(e, t) {
      e.nodeType === xn ? Rg(e.parentNode, t) : e.nodeType === Fr && Rg(e, t), Et(e);
    }
    function Ib(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Yb(e) {
      e.nodeValue = "";
    }
    function Qb(e, t) {
      e = e;
      var a = t[Eb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wc("display", i);
    }
    function Wb(e, t) {
      e.nodeValue = t;
    }
    function Gb(e) {
      e.nodeType === Fr ? e.textContent = "" : e.nodeType === Qa && e.documentElement && e.removeChild(e.documentElement);
    }
    function qb(e, t, a) {
      return e.nodeType !== Fr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Xb(e, t) {
      return t === "" || e.nodeType !== Di ? null : e;
    }
    function Zb(e) {
      return e.nodeType !== xn ? null : e;
    }
    function FS(e) {
      return e.data === _p;
    }
    function Tg(e) {
      return e.data === Lp;
    }
    function Kb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Jb(e, t) {
      e._reactRetry = t;
    }
    function Kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Fr || t === Di)
          break;
        if (t === xn) {
          var a = e.data;
          if (a === Xh || a === Lp || a === _p)
            break;
          if (a === Zh)
            return null;
        }
      }
      return e;
    }
    function Np(e) {
      return Kh(e.nextSibling);
    }
    function eR(e) {
      return Kh(e.firstChild);
    }
    function tR(e) {
      return Kh(e.firstChild);
    }
    function nR(e) {
      return Kh(e.nextSibling);
    }
    function rR(e, t, a, i, o, s, f) {
      Up(s, e), Dg(e, a);
      var h;
      {
        var y = o;
        h = y.namespace;
      }
      var C = (s.mode & gt) !== Xe;
      return db(e, t, a, h, i, C, f);
    }
    function aR(e, t, a, i) {
      return Up(a, e), a.mode & gt, pb(e, t);
    }
    function iR(e, t) {
      Up(t, e);
    }
    function lR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === Zh) {
            if (a === 0)
              return Np(t);
            a--;
          } else
            (i === Xh || i === Lp || i === _p) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function jS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === xn) {
          var i = t.data;
          if (i === Xh || i === Lp || i === _p) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function oR(e) {
      Et(e);
    }
    function uR(e) {
      Et(e);
    }
    function sR(e) {
      return e !== "head" && e !== "body";
    }
    function cR(e, t, a, i) {
      var o = !0;
      Wh(t.nodeValue, a, i, o);
    }
    function fR(e, t, a, i, o, s) {
      if (t[qh] !== !0) {
        var f = !0;
        Wh(i.nodeValue, o, s, f);
      }
    }
    function dR(e, t) {
      t.nodeType === Fr ? hg(e, t) : t.nodeType === xn || mg(e, t);
    }
    function pR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Fr ? hg(a, t) : t.nodeType === xn || mg(a, t));
      }
    }
    function vR(e, t, a, i, o) {
      (o || t[qh] !== !0) && (i.nodeType === Fr ? hg(a, i) : i.nodeType === xn || mg(a, i));
    }
    function hR(e, t, a) {
      yg(e, t);
    }
    function mR(e, t) {
      gg(e, t);
    }
    function yR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && yg(i, t);
      }
    }
    function gR(e, t) {
      {
        var a = e.parentNode;
        a !== null && gg(a, t);
      }
    }
    function SR(e, t, a, i, o, s) {
      (s || t[qh] !== !0) && yg(a, i);
    }
    function ER(e, t, a, i, o) {
      (o || t[qh] !== !0) && gg(a, i);
    }
    function CR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function wR(e) {
      Rp(e);
    }
    var Of = Math.random().toString(36).slice(2), _f = "__reactFiber$" + Of, xg = "__reactProps$" + Of, Mp = "__reactContainer$" + Of, kg = "__reactEvents$" + Of, bR = "__reactListeners$" + Of, RR = "__reactHandles$" + Of;
    function TR(e) {
      delete e[_f], delete e[xg], delete e[kg], delete e[bR], delete e[RR];
    }
    function Up(e, t) {
      t[_f] = e;
    }
    function Jh(e, t) {
      t[Mp] = e;
    }
    function VS(e) {
      e[Mp] = null;
    }
    function Ap(e) {
      return !!e[Mp];
    }
    function Ys(e) {
      var t = e[_f];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Mp] || a[_f], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = jS(e); o !== null; ) {
              var s = o[_f];
              if (s)
                return s;
              o = jS(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Au(e) {
      var t = e[_f] || e[Mp];
      return t && (t.tag === Q || t.tag === ee || t.tag === re || t.tag === F) ? t : null;
    }
    function Lf(e) {
      if (e.tag === Q || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function em(e) {
      return e[xg] || null;
    }
    function Dg(e, t) {
      e[xg] = t;
    }
    function xR(e) {
      var t = e[kg];
      return t === void 0 && (t = e[kg] = /* @__PURE__ */ new Set()), t;
    }
    var BS = {}, PS = m.ReactDebugCurrentFrame;
    function tm(e) {
      if (e) {
        var t = e._owner, a = ii(e.type, e._source, t ? t.type : null);
        PS.setExtraStackFrame(a);
      } else
        PS.setExtraStackFrame(null);
    }
    function Pi(e, t, a, i, o) {
      {
        var s = Function.call.bind(jn);
        for (var f in e)
          if (s(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              h = C;
            }
            h && !(h instanceof Error) && (tm(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof h), tm(null)), h instanceof Error && !(h.message in BS) && (BS[h.message] = !0, tm(o), S("Failed %s type: %s", a, h.message), tm(null));
          }
      }
    }
    var Og = [], nm;
    nm = [];
    var Lo = -1;
    function zu(e) {
      return {
        current: e
      };
    }
    function Wr(e, t) {
      if (Lo < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== nm[Lo] && S("Unexpected Fiber popped."), e.current = Og[Lo], Og[Lo] = null, nm[Lo] = null, Lo--;
    }
    function Gr(e, t, a) {
      Lo++, Og[Lo] = e.current, nm[Lo] = a, e.current = t;
    }
    var _g;
    _g = {};
    var Za = {};
    Object.freeze(Za);
    var No = zu(Za), Fl = zu(!1), Lg = Za;
    function Nf(e, t, a) {
      return a && jl(t) ? Lg : No.current;
    }
    function $S(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Mf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Za;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var h = lt(e) || "Unknown";
          Pi(i, s, "context", h);
        }
        return o && $S(e, t, s), s;
      }
    }
    function rm() {
      return Fl.current;
    }
    function jl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function am(e) {
      Wr(Fl, e), Wr(No, e);
    }
    function Ng(e) {
      Wr(Fl, e), Wr(No, e);
    }
    function IS(e, t, a) {
      {
        if (No.current !== Za)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Gr(No, t, e), Gr(Fl, a, e);
      }
    }
    function YS(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = lt(e) || "Unknown";
            _g[s] || (_g[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var h in f)
          if (!(h in o))
            throw new Error((lt(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = lt(e) || "Unknown";
          Pi(o, f, "child context", y);
        }
        return mt({}, a, f);
      }
    }
    function im(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Za;
        return Lg = No.current, Gr(No, a, e), Gr(Fl, Fl.current, e), !0;
      }
    }
    function QS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = YS(e, t, Lg);
          i.__reactInternalMemoizedMergedChildContext = o, Wr(Fl, e), Wr(No, e), Gr(No, o, e), Gr(Fl, a, e);
        } else
          Wr(Fl, e), Gr(Fl, a, e);
      }
    }
    function kR(e) {
      {
        if (!Fd(e) || e.tag !== L)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case L: {
              var a = t.type;
              if (jl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Hu = 0, lm = 1, Mo = null, Mg = !1, Ug = !1;
    function WS(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    function DR(e) {
      Mg = !0, WS(e);
    }
    function GS() {
      Mg && Fu();
    }
    function Fu() {
      if (!Ug && Mo !== null) {
        Ug = !0;
        var e = 0, t = Ta();
        try {
          var a = !0, i = Mo;
          for (Un(dr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Mo = null, Mg = !1;
        } catch (s) {
          throw Mo !== null && (Mo = Mo.slice(e + 1)), Mc(Ac, Fu), s;
        } finally {
          Un(t), Ug = !1;
        }
      }
      return null;
    }
    var Uf = [], Af = 0, om = null, um = 0, vi = [], hi = 0, Qs = null, Uo = 1, Ao = "";
    function OR(e) {
      return Gs(), (e.flags & Ad) !== Qe;
    }
    function _R(e) {
      return Gs(), um;
    }
    function LR() {
      var e = Ao, t = Uo, a = t & ~NR(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Gs(), Uf[Af++] = um, Uf[Af++] = om, om = e, um = t;
    }
    function qS(e, t, a) {
      Gs(), vi[hi++] = Uo, vi[hi++] = Ao, vi[hi++] = Qs, Qs = e;
      var i = Uo, o = Ao, s = sm(i) - 1, f = i & ~(1 << s), h = a + 1, y = sm(t) + s;
      if (y > 30) {
        var C = s - s % 5, b = (1 << C) - 1, H = (f & b).toString(32), A = f >> C, $ = s - C, Y = sm(t) + $, X = h << $, _e = X | A, Ge = H + o;
        Uo = 1 << Y | _e, Ao = Ge;
      } else {
        var Be = h << s, xt = Be | f, Ct = o;
        Uo = 1 << y | xt, Ao = Ct;
      }
    }
    function Ag(e) {
      Gs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), qS(e, a, i);
      }
    }
    function sm(e) {
      return 32 - Bc(e);
    }
    function NR(e) {
      return 1 << sm(e) - 1;
    }
    function zg(e) {
      for (; e === om; )
        om = Uf[--Af], Uf[Af] = null, um = Uf[--Af], Uf[Af] = null;
      for (; e === Qs; )
        Qs = vi[--hi], vi[hi] = null, Ao = vi[--hi], vi[hi] = null, Uo = vi[--hi], vi[hi] = null;
    }
    function MR() {
      return Gs(), Qs !== null ? {
        id: Uo,
        overflow: Ao
      } : null;
    }
    function UR(e, t) {
      Gs(), vi[hi++] = Uo, vi[hi++] = Ao, vi[hi++] = Qs, Uo = t.id, Ao = t.overflow, Qs = e;
    }
    function Gs() {
      Rr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var br = null, mi = null, $i = !1, qs = !1, ju = null;
    function AR() {
      $i && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function XS() {
      qs = !0;
    }
    function zR() {
      return qs;
    }
    function HR(e) {
      var t = e.stateNode.containerInfo;
      return mi = tR(t), br = e, $i = !0, ju = null, qs = !1, !0;
    }
    function FR(e, t, a) {
      return mi = nR(t), br = e, $i = !0, ju = null, qs = !1, a !== null && UR(e, a), !0;
    }
    function ZS(e, t) {
      switch (e.tag) {
        case F: {
          dR(e.stateNode.containerInfo, t);
          break;
        }
        case Q: {
          var a = (e.mode & gt) !== Xe;
          vR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case re: {
          var i = e.memoizedState;
          i.dehydrated !== null && pR(i.dehydrated, t);
          break;
        }
      }
    }
    function KS(e, t) {
      ZS(e, t);
      var a = Bx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Hg(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Q:
                var i = t.type;
                t.pendingProps, hR(a, i);
                break;
              case ee:
                var o = t.pendingProps;
                mR(a, o);
                break;
            }
            break;
          }
          case Q: {
            var s = e.type, f = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case Q: {
                var y = t.type, C = t.pendingProps, b = (e.mode & gt) !== Xe;
                SR(
                  s,
                  f,
                  h,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case ee: {
                var H = t.pendingProps, A = (e.mode & gt) !== Xe;
                ER(
                  s,
                  f,
                  h,
                  H,
                  // TODO: Delete this argument when we remove the legacy root API.
                  A
                );
                break;
              }
            }
            break;
          }
          case re: {
            var $ = e.memoizedState, Y = $.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case Q:
                  var X = t.type;
                  t.pendingProps, yR(Y, X);
                  break;
                case ee:
                  var _e = t.pendingProps;
                  gR(Y, _e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function JS(e, t) {
      t.flags = t.flags & ~Ea | Kt, Hg(e, t);
    }
    function eE(e, t) {
      switch (e.tag) {
        case Q: {
          var a = e.type;
          e.pendingProps;
          var i = qb(t, a);
          return i !== null ? (e.stateNode = i, br = e, mi = eR(i), !0) : !1;
        }
        case ee: {
          var o = e.pendingProps, s = Xb(t, o);
          return s !== null ? (e.stateNode = s, br = e, mi = null, !0) : !1;
        }
        case re: {
          var f = Zb(t);
          if (f !== null) {
            var h = {
              dehydrated: f,
              treeContext: MR(),
              retryLane: Yr
            };
            e.memoizedState = h;
            var y = Px(f);
            return y.return = e, e.child = y, br = e, mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Fg(e) {
      return (e.mode & gt) !== Xe && (e.flags & rt) === Qe;
    }
    function jg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Vg(e) {
      if ($i) {
        var t = mi;
        if (!t) {
          Fg(e) && (Hg(br, e), jg()), JS(br, e), $i = !1, br = e;
          return;
        }
        var a = t;
        if (!eE(e, t)) {
          Fg(e) && (Hg(br, e), jg()), t = Np(a);
          var i = br;
          if (!t || !eE(e, t)) {
            JS(br, e), $i = !1, br = e;
            return;
          }
          KS(i, a);
        }
      }
    }
    function jR(e, t, a) {
      var i = e.stateNode, o = !qs, s = rR(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function VR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = aR(t, a, e);
      if (i) {
        var o = br;
        if (o !== null)
          switch (o.tag) {
            case F: {
              var s = o.stateNode.containerInfo, f = (o.mode & gt) !== Xe;
              cR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Q: {
              var h = o.type, y = o.memoizedProps, C = o.stateNode, b = (o.mode & gt) !== Xe;
              fR(
                h,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return i;
    }
    function BR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      iR(a, e);
    }
    function PR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return lR(a);
    }
    function tE(e) {
      for (var t = e.return; t !== null && t.tag !== Q && t.tag !== F && t.tag !== re; )
        t = t.return;
      br = t;
    }
    function cm(e) {
      if (e !== br)
        return !1;
      if (!$i)
        return tE(e), $i = !0, !1;
      if (e.tag !== F && (e.tag !== Q || sR(e.type) && !Cg(e.type, e.memoizedProps))) {
        var t = mi;
        if (t)
          if (Fg(e))
            nE(e), jg();
          else
            for (; t; )
              KS(e, t), t = Np(t);
      }
      return tE(e), e.tag === re ? mi = PR(e) : mi = br ? Np(e.stateNode) : null, !0;
    }
    function $R() {
      return $i && mi !== null;
    }
    function nE(e) {
      for (var t = mi; t; )
        ZS(e, t), t = Np(t);
    }
    function zf() {
      br = null, mi = null, $i = !1, qs = !1;
    }
    function rE() {
      ju !== null && (ZC(ju), ju = null);
    }
    function Rr() {
      return $i;
    }
    function Bg(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    var IR = m.ReactCurrentBatchConfig, YR = null;
    function QR() {
      return IR.transition;
    }
    var Ii = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var WR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & dn && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, zp = [], Hp = [], Fp = [], jp = [], Vp = [], Bp = [], Zs = /* @__PURE__ */ new Set();
      Ii.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & dn && typeof t.UNSAFE_componentWillMount == "function" && Hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & dn && typeof t.UNSAFE_componentWillReceiveProps == "function" && jp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & dn && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, Ii.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(A) {
          e.add(lt(A) || "Component"), Zs.add(A.type);
        }), zp = []);
        var t = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(A) {
          t.add(lt(A) || "Component"), Zs.add(A.type);
        }), Hp = []);
        var a = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(A) {
          a.add(lt(A) || "Component"), Zs.add(A.type);
        }), Fp = []);
        var i = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(A) {
          i.add(lt(A) || "Component"), Zs.add(A.type);
        }), jp = []);
        var o = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(A) {
          o.add(lt(A) || "Component"), Zs.add(A.type);
        }), Vp = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(A) {
          s.add(lt(A) || "Component"), Zs.add(A.type);
        }), Bp = []), t.size > 0) {
          var f = Xs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var h = Xs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var y = Xs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = Xs(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var b = Xs(a);
          k(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (o.size > 0) {
          var H = Xs(o);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var fm = /* @__PURE__ */ new Map(), aE = /* @__PURE__ */ new Set();
      Ii.recordLegacyContextWarning = function(e, t) {
        var a = WR(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aE.has(e.type)) {
          var i = fm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], fm.set(a, i)), i.push(e));
        }
      }, Ii.flushLegacyContextWarning = function() {
        fm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(lt(s) || "Component"), aE.add(s.type);
            });
            var o = Xs(i);
            try {
              zt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              mn();
            }
          }
        });
      }, Ii.discardPendingWarnings = function() {
        zp = [], Hp = [], Fp = [], jp = [], Vp = [], Bp = [], fm = /* @__PURE__ */ new Map();
      };
    }
    function Yi(e, t) {
      if (e && e.defaultProps) {
        var a = mt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Pg = zu(null), $g;
    $g = {};
    var dm = null, Hf = null, Ig = null, pm = !1;
    function vm() {
      dm = null, Hf = null, Ig = null, pm = !1;
    }
    function iE() {
      pm = !0;
    }
    function lE() {
      pm = !1;
    }
    function oE(e, t, a) {
      Gr(Pg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $g && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $g;
    }
    function Yg(e, t) {
      var a = Pg.current;
      Wr(Pg, t), e._currentValue = a;
    }
    function Qg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Eo(i.childLanes, t) ? o !== null && !Eo(o.childLanes, t) && (o.childLanes = dt(o.childLanes, t)) : (i.childLanes = dt(i.childLanes, t), o !== null && (o.childLanes = dt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function GR(e, t, a) {
      qR(e, t, a);
    }
    function qR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === L) {
                var h = Mn(a), y = zo(Wt, h);
                y.tag = mm;
                var C = i.updateQueue;
                if (C !== null) {
                  var b = C.shared, H = b.pending;
                  H === null ? y.next = y : (y.next = H.next, H.next = y), b.pending = y;
                }
              }
              i.lanes = dt(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = dt(A.lanes, a)), Qg(i.return, a, e), s.lanes = dt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ke)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === be) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = dt($.lanes, a);
          var Y = $.alternate;
          Y !== null && (Y.lanes = dt(Y.lanes, a)), Qg($, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var X = o.sibling;
            if (X !== null) {
              X.return = o.return, o = X;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Ff(e, t) {
      dm = e, Hf = null, Ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Qr(a.lanes, t) && tv(), a.firstContext = null);
      }
    }
    function Wn(e) {
      pm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, dm.dependencies = {
            lanes: K,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var Ks = null;
    function Wg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function XR() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function uE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Wg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function ZR(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Wg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function KR(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Wg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, hm(e, i);
    }
    function _a(e, t) {
      return hm(e, t);
    }
    var JR = hm;
    function hm(e, t) {
      e.lanes = dt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = dt(a.lanes, t)), a === null && (e.flags & (Kt | Ea)) !== Qe && s2(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = dt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = dt(a.childLanes, t) : (o.flags & (Kt | Ea)) !== Qe && s2(e), i = o, o = o.return;
      if (i.tag === F) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var sE = 0, cE = 1, mm = 2, Gg = 3, ym = !1, qg, gm;
    qg = !1, gm = null;
    function Xg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: K
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function fE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function zo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: sE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (gm === o && !qg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), qg = !0), JT()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, JR(e, a);
      } else
        return KR(e, o, t, a);
    }
    function Sm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Zd(a)) {
          var s = o.lanes;
          s = Jd(s, e.pendingLanes);
          var f = dt(s, a);
          o.lanes = f, Eu(e, f);
        }
      }
    }
    function Zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var y = h;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), y = y.next;
            } while (y !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function e3(e, t, a, i, o, s) {
      switch (a.tag) {
        case cE: {
          var f = a.payload;
          if (typeof f == "function") {
            iE();
            var h = f.call(s, i, o);
            {
              if (e.mode & dn) {
                Nn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Nn(!1);
                }
              }
              lE();
            }
            return h;
          }
          return f;
        }
        case Gg:
          e.flags = e.flags & ~Pn | rt;
        case sE: {
          var y = a.payload, C;
          if (typeof y == "function") {
            iE(), C = y.call(s, i, o);
            {
              if (e.mode & dn) {
                Nn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  Nn(!1);
                }
              }
              lE();
            }
          } else
            C = y;
          return C == null ? i : mt({}, i, C);
        }
        case mm:
          return ym = !0, i;
      }
      return i;
    }
    function Em(e, t, a, i) {
      var o = e.updateQueue;
      ym = !1, gm = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, C = y.next;
        y.next = null, f === null ? s = C : f.next = C, f = y;
        var b = e.alternate;
        if (b !== null) {
          var H = b.updateQueue, A = H.lastBaseUpdate;
          A !== f && (A === null ? H.firstBaseUpdate = C : A.next = C, H.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var $ = o.baseState, Y = K, X = null, _e = null, Ge = null, Be = s;
        do {
          var xt = Be.lane, Ct = Be.eventTime;
          if (Eo(i, xt)) {
            if (Ge !== null) {
              var Z = {
                eventTime: Ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rt,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              Ge = Ge.next = Z;
            }
            $ = e3(e, o, Be, $, t, a);
            var B = Be.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== Rt) {
              e.flags |= ui;
              var ue = o.effects;
              ue === null ? o.effects = [Be] : ue.push(Be);
            }
          } else {
            var V = {
              eventTime: Ct,
              lane: xt,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            Ge === null ? (_e = Ge = V, X = $) : Ge = Ge.next = V, Y = dt(Y, xt);
          }
          if (Be = Be.next, Be === null) {
            if (h = o.shared.pending, h === null)
              break;
            var Le = h, xe = Le.next;
            Le.next = null, Be = xe, o.lastBaseUpdate = Le, o.shared.pending = null;
          }
        } while (!0);
        Ge === null && (X = $), o.baseState = X, o.firstBaseUpdate = _e, o.lastBaseUpdate = Ge;
        var nt = o.shared.interleaved;
        if (nt !== null) {
          var ut = nt;
          do
            Y = dt(Y, ut.lane), ut = ut.next;
          while (ut !== nt);
        } else
          s === null && (o.shared.lanes = K);
        pv(Y), e.lanes = Y, e.memoizedState = $;
      }
      gm = null;
    }
    function t3(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function dE() {
      ym = !1;
    }
    function Cm() {
      return ym;
    }
    function pE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, t3(f, a));
        }
    }
    var Kg = {}, vE = new d.Component().refs, Jg, e0, t0, n0, r0, hE, wm, a0, i0, l0;
    {
      Jg = /* @__PURE__ */ new Set(), e0 = /* @__PURE__ */ new Set(), t0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), i0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set();
      var mE = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mE.has(a) || (mE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, hE = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
          r0.has(a) || (r0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function o0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & dn) {
          Nn(!0);
          try {
            s = a(i, o);
          } finally {
            Nn(!1);
          }
        }
        hE(t, s);
      }
      var f = s == null ? o : mt({}, o, s);
      if (e.memoizedState = f, e.lanes === K) {
        var h = e.updateQueue;
        h.baseState = f;
      }
    }
    var u0 = {
      isMounted: aa,
      enqueueSetState: function(e, t, a) {
        var i = ga(e), o = ca(), s = Gu(i), f = zo(o, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var h = Vu(i, f, s);
        h !== null && (ur(h, i, s, o), Sm(h, i, s)), Ol(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ga(e), o = ca(), s = Gu(i), f = zo(o, s);
        f.tag = cE, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var h = Vu(i, f, s);
        h !== null && (ur(h, i, s, o), Sm(h, i, s)), Ol(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ga(e), i = ca(), o = Gu(a), s = zo(i, o);
        s.tag = mm, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = Vu(a, s, o);
        f !== null && (ur(f, a, o, i), Sm(f, a, o)), Wd(a, o);
      }
    };
    function yE(e, t, a, i, o, s, f) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & dn) {
            Nn(!0);
            try {
              y = h.shouldComponentUpdate(i, s, f);
            } finally {
              Nn(!1);
            }
          }
          y === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(o, s) : !0;
    }
    function n3(e, t, a) {
      var i = e.stateNode;
      {
        var o = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !i0.has(t) && (i0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !t0.has(t) && (t0.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = i.state;
        h && (typeof h != "object" || bt(h)) && S("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function gE(e, t) {
      t.updater = u0, e.stateNode = t, cu(t, e), t._reactInternalInstance = Kg;
    }
    function SE(e, t, a) {
      var i = !1, o = Za, s = Za, f = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ts && f._context === void 0
        );
        if (!h && !l0.has(t)) {
          l0.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === Qo ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Wn(f);
      else {
        o = Nf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Mf(e, o) : Za;
      }
      var b = new t(a, s);
      if (e.mode & dn) {
        Nn(!0);
        try {
          b = new t(a, s);
        } finally {
          Nn(!1);
        }
      }
      var H = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      gE(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var A = Dt(t) || "Component";
          e0.has(A) || (e0.add(A), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, b.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var $ = null, Y = null, X = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), $ !== null || Y !== null || X !== null) {
            var _e = Dt(t) || "Component", Ge = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            n0.has(_e) || (n0.add(_e), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, Ge, $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && $S(e, o, s), b;
    }
    function r3(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", lt(e) || "Component"), u0.enqueueReplaceState(t, t.state, null));
    }
    function EE(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = lt(e) || "Component";
          Jg.has(s) || (Jg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        u0.enqueueReplaceState(t, t.state, null);
      }
    }
    function s0(e, t, a, i) {
      n3(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = vE, Xg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = Wn(s);
      else {
        var f = Nf(e, t, !0);
        o.context = Mf(e, f);
      }
      {
        if (o.state === a) {
          var h = Dt(t) || "Component";
          a0.has(h) || (a0.add(h), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & dn && Ii.recordLegacyContextWarning(e, o), Ii.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (o0(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (r3(e, o), Em(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = ft;
        C |= Vr, (e.mode & ba) !== Xe && (C |= Br), e.flags |= C;
      }
    }
    function a3(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, h = t.contextType, y = Za;
      if (typeof h == "object" && h !== null)
        y = Wn(h);
      else {
        var C = Nf(e, t, !0);
        y = Mf(e, C);
      }
      var b = t.getDerivedStateFromProps, H = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !H && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== y) && EE(e, o, a, y), dE();
      var A = e.memoizedState, $ = o.state = A;
      if (Em(e, a, o, i), $ = e.memoizedState, s === a && A === $ && !rm() && !Cm()) {
        if (typeof o.componentDidMount == "function") {
          var Y = ft;
          Y |= Vr, (e.mode & ba) !== Xe && (Y |= Br), e.flags |= Y;
        }
        return !1;
      }
      typeof b == "function" && (o0(e, t, b, a), $ = e.memoizedState);
      var X = Cm() || yE(e, t, s, a, A, $, y);
      if (X) {
        if (!H && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var _e = ft;
          _e |= Vr, (e.mode & ba) !== Xe && (_e |= Br), e.flags |= _e;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ge = ft;
          Ge |= Vr, (e.mode & ba) !== Xe && (Ge |= Br), e.flags |= Ge;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return o.props = a, o.state = $, o.context = y, X;
    }
    function i3(e, t, a, i, o) {
      var s = t.stateNode;
      fE(e, t);
      var f = t.memoizedProps, h = t.type === t.elementType ? f : Yi(t.type, f);
      s.props = h;
      var y = t.pendingProps, C = s.context, b = a.contextType, H = Za;
      if (typeof b == "object" && b !== null)
        H = Wn(b);
      else {
        var A = Nf(t, a, !0);
        H = Mf(t, A);
      }
      var $ = a.getDerivedStateFromProps, Y = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || C !== H) && EE(t, s, i, H), dE();
      var X = t.memoizedState, _e = s.state = X;
      if (Em(t, i, s, o), _e = t.memoizedState, f === y && X === _e && !rm() && !Cm() && !He)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Sa), !1;
      typeof $ == "function" && (o0(t, a, $, i), _e = t.memoizedState);
      var Ge = Cm() || yE(t, a, h, i, X, _e, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return Ge ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, _e, H), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, _e, H)), typeof s.componentDidUpdate == "function" && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Sa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Sa), t.memoizedProps = i, t.memoizedState = _e), s.props = i, s.state = _e, s.context = H, Ge;
    }
    var c0, f0, d0, p0, v0, CE = function(e, t) {
    };
    c0 = !1, f0 = !1, d0 = {}, p0 = {}, v0 = {}, CE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = lt(t) || "Component";
        p0[a] || (p0[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & dn || Ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = lt(e) || "Component";
          d0[o] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), d0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var h = s;
            if (h.tag !== L)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = h.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = f;
          an(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var b = function(H) {
            var A = y.refs;
            A === vE && (A = y.refs = {}), H === null ? delete A[C] : A[C] = H;
          };
          return b._stringRef = C, b;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function bm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Rm(e) {
      {
        var t = lt(e) || "Component";
        if (v0[t])
          return;
        v0[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function wE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function bE(e) {
      function t(V, Z) {
        if (e) {
          var B = V.deletions;
          B === null ? (V.deletions = [Z], V.flags |= Ut) : B.push(Z);
        }
      }
      function a(V, Z) {
        if (!e)
          return null;
        for (var B = Z; B !== null; )
          t(V, B), B = B.sibling;
        return null;
      }
      function i(V, Z) {
        for (var B = /* @__PURE__ */ new Map(), ue = Z; ue !== null; )
          ue.key !== null ? B.set(ue.key, ue) : B.set(ue.index, ue), ue = ue.sibling;
        return B;
      }
      function o(V, Z) {
        var B = lc(V, Z);
        return B.index = 0, B.sibling = null, B;
      }
      function s(V, Z, B) {
        if (V.index = B, !e)
          return V.flags |= Ad, Z;
        var ue = V.alternate;
        if (ue !== null) {
          var Le = ue.index;
          return Le < Z ? (V.flags |= Kt, Z) : Le;
        } else
          return V.flags |= Kt, Z;
      }
      function f(V) {
        return e && V.alternate === null && (V.flags |= Kt), V;
      }
      function h(V, Z, B, ue) {
        if (Z === null || Z.tag !== ee) {
          var Le = B1(B, V.mode, ue);
          return Le.return = V, Le;
        } else {
          var xe = o(Z, B);
          return xe.return = V, xe;
        }
      }
      function y(V, Z, B, ue) {
        var Le = B.type;
        if (Le === Ba)
          return b(V, Z, B.props.children, ue, B.key);
        if (Z !== null && (Z.elementType === Le || // Keep this check inline so it only runs on the false path:
        p2(Z, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Le == "object" && Le !== null && Le.$$typeof === Zn && wE(Le) === Z.type)) {
          var xe = o(Z, B.props);
          return xe.ref = Pp(V, Z, B), xe.return = V, xe._debugSource = B._source, xe._debugOwner = B._owner, xe;
        }
        var nt = V1(B, V.mode, ue);
        return nt.ref = Pp(V, Z, B), nt.return = V, nt;
      }
      function C(V, Z, B, ue) {
        if (Z === null || Z.tag !== G || Z.stateNode.containerInfo !== B.containerInfo || Z.stateNode.implementation !== B.implementation) {
          var Le = P1(B, V.mode, ue);
          return Le.return = V, Le;
        } else {
          var xe = o(Z, B.children || []);
          return xe.return = V, xe;
        }
      }
      function b(V, Z, B, ue, Le) {
        if (Z === null || Z.tag !== se) {
          var xe = Xu(B, V.mode, ue, Le);
          return xe.return = V, xe;
        } else {
          var nt = o(Z, B);
          return nt.return = V, nt;
        }
      }
      function H(V, Z, B) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var ue = B1("" + Z, V.mode, B);
          return ue.return = V, ue;
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case nl: {
              var Le = V1(Z, V.mode, B);
              return Le.ref = Pp(V, null, Z), Le.return = V, Le;
            }
            case ta: {
              var xe = P1(Z, V.mode, B);
              return xe.return = V, xe;
            }
            case Zn: {
              var nt = Z._payload, ut = Z._init;
              return H(V, ut(nt), B);
            }
          }
          if (bt(Z) || Pa(Z)) {
            var $t = Xu(Z, V.mode, B, null);
            return $t.return = V, $t;
          }
          bm(V, Z);
        }
        return typeof Z == "function" && Rm(V), null;
      }
      function A(V, Z, B, ue) {
        var Le = Z !== null ? Z.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return Le !== null ? null : h(V, Z, "" + B, ue);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case nl:
              return B.key === Le ? y(V, Z, B, ue) : null;
            case ta:
              return B.key === Le ? C(V, Z, B, ue) : null;
            case Zn: {
              var xe = B._payload, nt = B._init;
              return A(V, Z, nt(xe), ue);
            }
          }
          if (bt(B) || Pa(B))
            return Le !== null ? null : b(V, Z, B, ue, null);
          bm(V, B);
        }
        return typeof B == "function" && Rm(V), null;
      }
      function $(V, Z, B, ue, Le) {
        if (typeof ue == "string" && ue !== "" || typeof ue == "number") {
          var xe = V.get(B) || null;
          return h(Z, xe, "" + ue, Le);
        }
        if (typeof ue == "object" && ue !== null) {
          switch (ue.$$typeof) {
            case nl: {
              var nt = V.get(ue.key === null ? B : ue.key) || null;
              return y(Z, nt, ue, Le);
            }
            case ta: {
              var ut = V.get(ue.key === null ? B : ue.key) || null;
              return C(Z, ut, ue, Le);
            }
            case Zn:
              var $t = ue._payload, Nt = ue._init;
              return $(V, Z, B, Nt($t), Le);
          }
          if (bt(ue) || Pa(ue)) {
            var Hn = V.get(B) || null;
            return b(Z, Hn, ue, Le, null);
          }
          bm(Z, ue);
        }
        return typeof ue == "function" && Rm(Z), null;
      }
      function Y(V, Z, B) {
        {
          if (typeof V != "object" || V === null)
            return Z;
          switch (V.$$typeof) {
            case nl:
            case ta:
              CE(V, B);
              var ue = V.key;
              if (typeof ue != "string")
                break;
              if (Z === null) {
                Z = /* @__PURE__ */ new Set(), Z.add(ue);
                break;
              }
              if (!Z.has(ue)) {
                Z.add(ue);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ue);
              break;
            case Zn:
              var Le = V._payload, xe = V._init;
              Y(xe(Le), Z, B);
              break;
          }
        }
        return Z;
      }
      function X(V, Z, B, ue) {
        for (var Le = null, xe = 0; xe < B.length; xe++) {
          var nt = B[xe];
          Le = Y(nt, Le, V);
        }
        for (var ut = null, $t = null, Nt = Z, Hn = 0, Mt = 0, On = null; Nt !== null && Mt < B.length; Mt++) {
          Nt.index > Mt ? (On = Nt, Nt = null) : On = Nt.sibling;
          var Xr = A(V, Nt, B[Mt], ue);
          if (Xr === null) {
            Nt === null && (Nt = On);
            break;
          }
          e && Nt && Xr.alternate === null && t(V, Nt), Hn = s(Xr, Hn, Mt), $t === null ? ut = Xr : $t.sibling = Xr, $t = Xr, Nt = On;
        }
        if (Mt === B.length) {
          if (a(V, Nt), Rr()) {
            var Lr = Mt;
            Ws(V, Lr);
          }
          return ut;
        }
        if (Nt === null) {
          for (; Mt < B.length; Mt++) {
            var Ja = H(V, B[Mt], ue);
            Ja !== null && (Hn = s(Ja, Hn, Mt), $t === null ? ut = Ja : $t.sibling = Ja, $t = Ja);
          }
          if (Rr()) {
            var fa = Mt;
            Ws(V, fa);
          }
          return ut;
        }
        for (var da = i(V, Nt); Mt < B.length; Mt++) {
          var Zr = $(da, V, Mt, B[Mt], ue);
          Zr !== null && (e && Zr.alternate !== null && da.delete(Zr.key === null ? Mt : Zr.key), Hn = s(Zr, Hn, Mt), $t === null ? ut = Zr : $t.sibling = Zr, $t = Zr);
        }
        if (e && da.forEach(function(td) {
          return t(V, td);
        }), Rr()) {
          var Po = Mt;
          Ws(V, Po);
        }
        return ut;
      }
      function _e(V, Z, B, ue) {
        var Le = Pa(B);
        if (typeof Le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (f0 || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), f0 = !0), B.entries === Le && (c0 || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), c0 = !0);
          var xe = Le.call(B);
          if (xe)
            for (var nt = null, ut = xe.next(); !ut.done; ut = xe.next()) {
              var $t = ut.value;
              nt = Y($t, nt, V);
            }
        }
        var Nt = Le.call(B);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Hn = null, Mt = null, On = Z, Xr = 0, Lr = 0, Ja = null, fa = Nt.next(); On !== null && !fa.done; Lr++, fa = Nt.next()) {
          On.index > Lr ? (Ja = On, On = null) : Ja = On.sibling;
          var da = A(V, On, fa.value, ue);
          if (da === null) {
            On === null && (On = Ja);
            break;
          }
          e && On && da.alternate === null && t(V, On), Xr = s(da, Xr, Lr), Mt === null ? Hn = da : Mt.sibling = da, Mt = da, On = Ja;
        }
        if (fa.done) {
          if (a(V, On), Rr()) {
            var Zr = Lr;
            Ws(V, Zr);
          }
          return Hn;
        }
        if (On === null) {
          for (; !fa.done; Lr++, fa = Nt.next()) {
            var Po = H(V, fa.value, ue);
            Po !== null && (Xr = s(Po, Xr, Lr), Mt === null ? Hn = Po : Mt.sibling = Po, Mt = Po);
          }
          if (Rr()) {
            var td = Lr;
            Ws(V, td);
          }
          return Hn;
        }
        for (var gv = i(V, On); !fa.done; Lr++, fa = Nt.next()) {
          var Wl = $(gv, V, Lr, fa.value, ue);
          Wl !== null && (e && Wl.alternate !== null && gv.delete(Wl.key === null ? Lr : Wl.key), Xr = s(Wl, Xr, Lr), Mt === null ? Hn = Wl : Mt.sibling = Wl, Mt = Wl);
        }
        if (e && gv.forEach(function(S5) {
          return t(V, S5);
        }), Rr()) {
          var g5 = Lr;
          Ws(V, g5);
        }
        return Hn;
      }
      function Ge(V, Z, B, ue) {
        if (Z !== null && Z.tag === ee) {
          a(V, Z.sibling);
          var Le = o(Z, B);
          return Le.return = V, Le;
        }
        a(V, Z);
        var xe = B1(B, V.mode, ue);
        return xe.return = V, xe;
      }
      function Be(V, Z, B, ue) {
        for (var Le = B.key, xe = Z; xe !== null; ) {
          if (xe.key === Le) {
            var nt = B.type;
            if (nt === Ba) {
              if (xe.tag === se) {
                a(V, xe.sibling);
                var ut = o(xe, B.props.children);
                return ut.return = V, ut._debugSource = B._source, ut._debugOwner = B._owner, ut;
              }
            } else if (xe.elementType === nt || // Keep this check inline so it only runs on the false path:
            p2(xe, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof nt == "object" && nt !== null && nt.$$typeof === Zn && wE(nt) === xe.type) {
              a(V, xe.sibling);
              var $t = o(xe, B.props);
              return $t.ref = Pp(V, xe, B), $t.return = V, $t._debugSource = B._source, $t._debugOwner = B._owner, $t;
            }
            a(V, xe);
            break;
          } else
            t(V, xe);
          xe = xe.sibling;
        }
        if (B.type === Ba) {
          var Nt = Xu(B.props.children, V.mode, ue, B.key);
          return Nt.return = V, Nt;
        } else {
          var Hn = V1(B, V.mode, ue);
          return Hn.ref = Pp(V, Z, B), Hn.return = V, Hn;
        }
      }
      function xt(V, Z, B, ue) {
        for (var Le = B.key, xe = Z; xe !== null; ) {
          if (xe.key === Le)
            if (xe.tag === G && xe.stateNode.containerInfo === B.containerInfo && xe.stateNode.implementation === B.implementation) {
              a(V, xe.sibling);
              var nt = o(xe, B.children || []);
              return nt.return = V, nt;
            } else {
              a(V, xe);
              break;
            }
          else
            t(V, xe);
          xe = xe.sibling;
        }
        var ut = P1(B, V.mode, ue);
        return ut.return = V, ut;
      }
      function Ct(V, Z, B, ue) {
        var Le = typeof B == "object" && B !== null && B.type === Ba && B.key === null;
        if (Le && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case nl:
              return f(Be(V, Z, B, ue));
            case ta:
              return f(xt(V, Z, B, ue));
            case Zn:
              var xe = B._payload, nt = B._init;
              return Ct(V, Z, nt(xe), ue);
          }
          if (bt(B))
            return X(V, Z, B, ue);
          if (Pa(B))
            return _e(V, Z, B, ue);
          bm(V, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? f(Ge(V, Z, "" + B, ue)) : (typeof B == "function" && Rm(V), a(V, Z));
      }
      return Ct;
    }
    var jf = bE(!0), RE = bE(!1);
    function l3(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = lc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = lc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function o3(e, t) {
      for (var a = e.child; a !== null; )
        zx(a, t), a = a.sibling;
    }
    var $p = {}, Bu = zu($p), Ip = zu($p), Tm = zu($p);
    function xm(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function TE() {
      var e = xm(Tm.current);
      return e;
    }
    function h0(e, t) {
      Gr(Tm, t, e), Gr(Ip, e, e), Gr(Bu, $p, e);
      var a = Cb(t);
      Wr(Bu, e), Gr(Bu, a, e);
    }
    function Vf(e) {
      Wr(Bu, e), Wr(Ip, e), Wr(Tm, e);
    }
    function m0() {
      var e = xm(Bu.current);
      return e;
    }
    function xE(e) {
      xm(Tm.current);
      var t = xm(Bu.current), a = wb(t, e.type);
      t !== a && (Gr(Ip, e, e), Gr(Bu, a, e));
    }
    function y0(e) {
      Ip.current === e && (Wr(Bu, e), Wr(Ip, e));
    }
    var u3 = 0, kE = 1, DE = 1, Yp = 2, Qi = zu(u3);
    function g0(e, t) {
      return (e & t) !== 0;
    }
    function Bf(e) {
      return e & kE;
    }
    function S0(e, t) {
      return e & kE | t;
    }
    function s3(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      Gr(Qi, t, e);
    }
    function Pf(e) {
      Wr(Qi, e);
    }
    function c3(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function km(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || FS(i) || Tg(i))
              return t;
          }
        } else if (t.tag === Ee && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & rt) !== Qe;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var La = (
      /*   */
      0
    ), tr = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), nr = (
      /*    */
      4
    ), Tr = (
      /*   */
      8
    ), E0 = [];
    function C0() {
      for (var e = 0; e < E0.length; e++) {
        var t = E0[e];
        t._workInProgressVersionPrimary = null;
      }
      E0.length = 0;
    }
    function f3(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Oe = m.ReactCurrentDispatcher, Qp = m.ReactCurrentBatchConfig, w0, $f;
    w0 = /* @__PURE__ */ new Set();
    var Js = K, Pt = null, rr = null, ar = null, Dm = !1, Wp = !1, Gp = 0, d3 = 0, p3 = 25, J = null, yi = null, $u = -1, b0 = !1;
    function Ft() {
      {
        var e = J;
        yi === null ? yi = [e] : yi.push(e);
      }
    }
    function ge() {
      {
        var e = J;
        yi !== null && ($u++, yi[$u] !== e && v3(e));
      }
    }
    function If(e) {
      e != null && !bt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function v3(e) {
      {
        var t = lt(Pt);
        if (!w0.has(t) && (w0.add(t), yi !== null)) {
          for (var a = "", i = 30, o = 0; o <= $u; o++) {
            for (var s = yi[o], f = o === $u ? e : s, h = o + 1 + ". " + s; h.length < i; )
              h += " ";
            h += f + `
`, a += h;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function qr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function R0(e, t) {
      if (b0)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ae(e[a], t[a]))
          return !1;
      return !0;
    }
    function Yf(e, t, a, i, o, s) {
      Js = s, Pt = t, yi = e !== null ? e._debugHookTypes : null, $u = -1, b0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = K, e !== null && e.memoizedState !== null ? Oe.current = XE : yi !== null ? Oe.current = qE : Oe.current = GE;
      var f = a(i, o);
      if (Wp) {
        var h = 0;
        do {
          if (Wp = !1, Gp = 0, h >= p3)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, b0 = !1, rr = null, ar = null, t.updateQueue = null, $u = -1, Oe.current = ZE, f = a(i, o);
        } while (Wp);
      }
      Oe.current = Bm, t._debugHookTypes = yi;
      var y = rr !== null && rr.next !== null;
      if (Js = K, Pt = null, rr = null, ar = null, J = null, yi = null, $u = -1, e !== null && (e.flags & Kn) !== (t.flags & Kn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & gt) !== Xe && S("Internal React error: Expected static flag was missing. Please notify the React team."), Dm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Qf() {
      var e = Gp !== 0;
      return Gp = 0, e;
    }
    function OE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ba) !== Xe ? t.flags &= ~(so | Br | on | ft) : t.flags &= ~(on | ft), e.lanes = Su(e.lanes, a);
    }
    function _E() {
      if (Oe.current = Bm, Dm) {
        for (var e = Pt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dm = !1;
      }
      Js = K, Pt = null, rr = null, ar = null, yi = null, $u = -1, J = null, $E = !1, Wp = !1, Gp = 0;
    }
    function Bl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ar === null ? Pt.memoizedState = ar = e : ar = ar.next = e, ar;
    }
    function gi() {
      var e;
      if (rr === null) {
        var t = Pt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = rr.next;
      var a;
      if (ar === null ? a = Pt.memoizedState : a = ar.next, a !== null)
        ar = a, a = ar.next, rr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        rr = e;
        var i = {
          memoizedState: rr.memoizedState,
          baseState: rr.baseState,
          baseQueue: rr.baseQueue,
          queue: rr.queue,
          next: null
        };
        ar === null ? Pt.memoizedState = ar = i : ar = ar.next = i;
      }
      return ar;
    }
    function LE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function T0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function x0(e, t, a) {
      var i = Bl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: K,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = g3.bind(null, Pt, s);
      return [i.memoizedState, f];
    }
    function k0(e, t, a) {
      var i = gi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = rr, f = s.baseQueue, h = o.pending;
      if (h !== null) {
        if (f !== null) {
          var y = f.next, C = h.next;
          f.next = C, h.next = y;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = h, o.pending = null;
      }
      if (f !== null) {
        var b = f.next, H = s.baseState, A = null, $ = null, Y = null, X = b;
        do {
          var _e = X.lane;
          if (Eo(Js, _e)) {
            if (Y !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rt,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              Y = Y.next = Be;
            }
            if (X.hasEagerState)
              H = X.eagerState;
            else {
              var xt = X.action;
              H = e(H, xt);
            }
          } else {
            var Ge = {
              lane: _e,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            Y === null ? ($ = Y = Ge, A = H) : Y = Y.next = Ge, Pt.lanes = dt(Pt.lanes, _e), pv(_e);
          }
          X = X.next;
        } while (X !== null && X !== b);
        Y === null ? A = H : Y.next = $, Ae(H, i.memoizedState) || tv(), i.memoizedState = H, i.baseState = A, i.baseQueue = Y, o.lastRenderedState = H;
      }
      var Ct = o.interleaved;
      if (Ct !== null) {
        var V = Ct;
        do {
          var Z = V.lane;
          Pt.lanes = dt(Pt.lanes, Z), pv(Z), V = V.next;
        } while (V !== Ct);
      } else
        f === null && (o.lanes = K);
      var B = o.dispatch;
      return [i.memoizedState, B];
    }
    function D0(e, t, a) {
      var i = gi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, h = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var y = f.next, C = y;
        do {
          var b = C.action;
          h = e(h, b), C = C.next;
        } while (C !== y);
        Ae(h, i.memoizedState) || tv(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), o.lastRenderedState = h;
      }
      return [h, s];
    }
    function b4(e, t, a) {
    }
    function R4(e, t, a) {
    }
    function O0(e, t, a) {
      var i = Pt, o = Bl(), s, f = Rr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), $f || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), $f = !0);
      } else {
        if (s = t(), !$f) {
          var h = t();
          Ae(s, h) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
        }
        var y = iy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(y, Js) || NE(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, Mm(UE.bind(null, i, C, e), [e]), i.flags |= on, qp(tr | Tr, ME.bind(null, i, C, s, t), void 0, null), s;
    }
    function Om(e, t, a) {
      var i = Pt, o = gi(), s = t();
      if (!$f) {
        var f = t();
        Ae(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
      }
      var h = o.memoizedState, y = !Ae(h, s);
      y && (o.memoizedState = s, tv());
      var C = o.queue;
      if (Zp(UE.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ar !== null && ar.memoizedState.tag & tr) {
        i.flags |= on, qp(tr | Tr, ME.bind(null, i, C, s, t), void 0, null);
        var b = iy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(b, Js) || NE(i, t, s);
      }
      return s;
    }
    function NE(e, t, a) {
      e.flags |= Cs;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Pt.updateQueue;
      if (o === null)
        o = LE(), Pt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && zE(e);
    }
    function UE(e, t, a) {
      var i = function() {
        AE(t) && zE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ae(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = _a(e, Je);
      t !== null && ur(t, e, Je, Wt);
    }
    function _m(e) {
      var t = Bl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: K,
        dispatch: null,
        lastRenderedReducer: T0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = S3.bind(null, Pt, a);
      return [t.memoizedState, i];
    }
    function _0(e) {
      return k0(T0);
    }
    function L0(e) {
      return D0(T0);
    }
    function qp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Pt.updateQueue;
      if (s === null)
        s = LE(), Pt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var h = f.next;
          f.next = o, o.next = h, s.lastEffect = o;
        }
      }
      return o;
    }
    function N0(e) {
      var t = Bl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Lm(e) {
      var t = gi();
      return t.memoizedState;
    }
    function Xp(e, t, a, i) {
      var o = Bl(), s = i === void 0 ? null : i;
      Pt.flags |= e, o.memoizedState = qp(tr | t, a, void 0, s);
    }
    function Nm(e, t, a, i) {
      var o = gi(), s = i === void 0 ? null : i, f = void 0;
      if (rr !== null) {
        var h = rr.memoizedState;
        if (f = h.destroy, s !== null) {
          var y = h.deps;
          if (R0(s, y)) {
            o.memoizedState = qp(t, a, f, s);
            return;
          }
        }
      }
      Pt.flags |= e, o.memoizedState = qp(tr | t, a, f, s);
    }
    function Mm(e, t) {
      return (Pt.mode & ba) !== Xe ? Xp(so | on | bl, Tr, e, t) : Xp(on | bl, Tr, e, t);
    }
    function Zp(e, t) {
      return Nm(on, Tr, e, t);
    }
    function M0(e, t) {
      return Xp(ft, Vl, e, t);
    }
    function Um(e, t) {
      return Nm(ft, Vl, e, t);
    }
    function U0(e, t) {
      var a = ft;
      return a |= Vr, (Pt.mode & ba) !== Xe && (a |= Br), Xp(a, nr, e, t);
    }
    function Am(e, t) {
      return Nm(ft, nr, e, t);
    }
    function HE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function A0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = ft;
      return o |= Vr, (Pt.mode & ba) !== Xe && (o |= Br), Xp(o, nr, HE.bind(null, t, e), i);
    }
    function zm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Nm(ft, nr, HE.bind(null, t, e), i);
    }
    function h3(e, t) {
    }
    var Hm = h3;
    function z0(e, t) {
      var a = Bl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Fm(e, t) {
      var a = gi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (R0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function H0(e, t) {
      var a = Bl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function jm(e, t) {
      var a = gi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (R0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function F0(e) {
      var t = Bl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = gi(), a = rr, i = a.memoizedState;
      return VE(t, i, e);
    }
    function jE(e) {
      var t = gi();
      if (rr === null)
        return t.memoizedState = e, e;
      var a = rr.memoizedState;
      return VE(t, a, e);
    }
    function VE(e, t, a) {
      var i = !Iy(Js);
      if (i) {
        if (!Ae(a, t)) {
          var o = Kd();
          Pt.lanes = dt(Pt.lanes, o), pv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tv()), e.memoizedState = a, a;
    }
    function m3(e, t, a) {
      var i = Ta();
      Un(pr(i, er)), e(!0);
      var o = Qp.transition;
      Qp.transition = {};
      var s = Qp.transition;
      Qp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Un(i), Qp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function j0() {
      var e = _m(!1), t = e[0], a = e[1], i = m3.bind(null, a), o = Bl();
      return o.memoizedState = i, [t, i];
    }
    function BE() {
      var e = _0(), t = e[0], a = gi(), i = a.memoizedState;
      return [t, i];
    }
    function PE() {
      var e = L0(), t = e[0], a = gi(), i = a.memoizedState;
      return [t, i];
    }
    var $E = !1;
    function y3() {
      return $E;
    }
    function V0() {
      var e = Bl(), t = iy(), a = t.identifierPrefix, i;
      if (Rr()) {
        var o = LR();
        i = ":" + a + "R" + o;
        var s = Gp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = d3++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Vm() {
      var e = gi(), t = e.memoizedState;
      return t;
    }
    function g3(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        YE(t, o);
      else {
        var s = uE(e, t, o, i);
        if (s !== null) {
          var f = ca();
          ur(s, e, i, f), QE(s, t, i);
        }
      }
      WE(e, i);
    }
    function S3(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (IE(e))
        YE(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === K && (s === null || s.lanes === K)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var h;
            h = Oe.current, Oe.current = Wi;
            try {
              var y = t.lastRenderedState, C = f(y, a);
              if (o.hasEagerState = !0, o.eagerState = C, Ae(C, y)) {
                ZR(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Oe.current = h;
            }
          }
        }
        var b = uE(e, t, o, i);
        if (b !== null) {
          var H = ca();
          ur(b, e, i, H), QE(b, t, i);
        }
      }
      WE(e, i);
    }
    function IE(e) {
      var t = e.alternate;
      return e === Pt || t !== null && t === Pt;
    }
    function YE(e, t) {
      Wp = Dm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = Jd(i, e.pendingLanes);
        var o = dt(i, a);
        t.lanes = o, Eu(e, o);
      }
    }
    function WE(e, t, a) {
      Ol(e, t);
    }
    var Bm = {
      readContext: Wn,
      useCallback: qr,
      useContext: qr,
      useEffect: qr,
      useImperativeHandle: qr,
      useInsertionEffect: qr,
      useLayoutEffect: qr,
      useMemo: qr,
      useReducer: qr,
      useRef: qr,
      useState: qr,
      useDebugValue: qr,
      useDeferredValue: qr,
      useTransition: qr,
      useMutableSource: qr,
      useSyncExternalStore: qr,
      useId: qr,
      unstable_isNewReconciler: de
    }, GE = null, qE = null, XE = null, ZE = null, Pl = null, Wi = null, Pm = null;
    {
      var B0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ot = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Ft(), If(t), z0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Ft(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Ft(), If(t), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Ft(), If(a), A0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Ft(), If(t), M0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Ft(), If(t), U0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Ft(), If(t);
          var a = Oe.current;
          Oe.current = Pl;
          try {
            return H0(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Ft();
          var i = Oe.current;
          Oe.current = Pl;
          try {
            return x0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Ft(), N0(e);
        },
        useState: function(e) {
          J = "useState", Ft();
          var t = Oe.current;
          Oe.current = Pl;
          try {
            return _m(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Ft(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Ft(), F0(e);
        },
        useTransition: function() {
          return J = "useTransition", Ft(), j0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Ft(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Ft(), O0(e, t, a);
        },
        useId: function() {
          return J = "useId", Ft(), V0();
        },
        unstable_isNewReconciler: de
      }, qE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ge(), z0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ge(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ge(), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ge(), A0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ge(), M0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ge(), U0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ge();
          var a = Oe.current;
          Oe.current = Pl;
          try {
            return H0(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ge();
          var i = Oe.current;
          Oe.current = Pl;
          try {
            return x0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ge(), N0(e);
        },
        useState: function(e) {
          J = "useState", ge();
          var t = Oe.current;
          Oe.current = Pl;
          try {
            return _m(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ge(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ge(), F0(e);
        },
        useTransition: function() {
          return J = "useTransition", ge(), j0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ge(), O0(e, t, a);
        },
        useId: function() {
          return J = "useId", ge(), V0();
        },
        unstable_isNewReconciler: de
      }, XE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ge(), Fm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ge(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ge(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ge(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ge(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ge(), Am(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ge();
          var a = Oe.current;
          Oe.current = Wi;
          try {
            return jm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ge();
          var i = Oe.current;
          Oe.current = Wi;
          try {
            return k0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ge(), Lm();
        },
        useState: function(e) {
          J = "useState", ge();
          var t = Oe.current;
          Oe.current = Wi;
          try {
            return _0(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ge(), Hm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ge(), FE(e);
        },
        useTransition: function() {
          return J = "useTransition", ge(), BE();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ge(), Om(e, t);
        },
        useId: function() {
          return J = "useId", ge(), Vm();
        },
        unstable_isNewReconciler: de
      }, ZE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ge(), Fm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ge(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ge(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ge(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ge(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ge(), Am(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ge();
          var a = Oe.current;
          Oe.current = Pm;
          try {
            return jm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ge();
          var i = Oe.current;
          Oe.current = Pm;
          try {
            return D0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ge(), Lm();
        },
        useState: function(e) {
          J = "useState", ge();
          var t = Oe.current;
          Oe.current = Pm;
          try {
            return L0(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ge(), Hm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ge(), jE(e);
        },
        useTransition: function() {
          return J = "useTransition", ge(), PE();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ge(), Om(e, t);
        },
        useId: function() {
          return J = "useId", ge(), Vm();
        },
        unstable_isNewReconciler: de
      }, Pl = {
        readContext: function(e) {
          return B0(), Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ot(), Ft(), z0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ot(), Ft(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ot(), Ft(), Mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ot(), Ft(), A0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ot(), Ft(), M0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ot(), Ft(), U0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ot(), Ft();
          var a = Oe.current;
          Oe.current = Pl;
          try {
            return H0(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ot(), Ft();
          var i = Oe.current;
          Oe.current = Pl;
          try {
            return x0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ot(), Ft(), N0(e);
        },
        useState: function(e) {
          J = "useState", ot(), Ft();
          var t = Oe.current;
          Oe.current = Pl;
          try {
            return _m(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ot(), Ft(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ot(), Ft(), F0(e);
        },
        useTransition: function() {
          return J = "useTransition", ot(), Ft(), j0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ot(), Ft(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ot(), Ft(), O0(e, t, a);
        },
        useId: function() {
          return J = "useId", ot(), Ft(), V0();
        },
        unstable_isNewReconciler: de
      }, Wi = {
        readContext: function(e) {
          return B0(), Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ot(), ge(), Fm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ot(), ge(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ot(), ge(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ot(), ge(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ot(), ge(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ot(), ge(), Am(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ot(), ge();
          var a = Oe.current;
          Oe.current = Wi;
          try {
            return jm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ot(), ge();
          var i = Oe.current;
          Oe.current = Wi;
          try {
            return k0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ot(), ge(), Lm();
        },
        useState: function(e) {
          J = "useState", ot(), ge();
          var t = Oe.current;
          Oe.current = Wi;
          try {
            return _0(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ot(), ge(), Hm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ot(), ge(), FE(e);
        },
        useTransition: function() {
          return J = "useTransition", ot(), ge(), BE();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ot(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ot(), ge(), Om(e, t);
        },
        useId: function() {
          return J = "useId", ot(), ge(), Vm();
        },
        unstable_isNewReconciler: de
      }, Pm = {
        readContext: function(e) {
          return B0(), Wn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ot(), ge(), Fm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ot(), ge(), Wn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ot(), ge(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ot(), ge(), zm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ot(), ge(), Um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ot(), ge(), Am(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ot(), ge();
          var a = Oe.current;
          Oe.current = Wi;
          try {
            return jm(e, t);
          } finally {
            Oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ot(), ge();
          var i = Oe.current;
          Oe.current = Wi;
          try {
            return D0(e, t, a);
          } finally {
            Oe.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ot(), ge(), Lm();
        },
        useState: function(e) {
          J = "useState", ot(), ge();
          var t = Oe.current;
          Oe.current = Wi;
          try {
            return L0(e);
          } finally {
            Oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ot(), ge(), Hm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ot(), ge(), jE(e);
        },
        useTransition: function() {
          return J = "useTransition", ot(), ge(), PE();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ot(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ot(), ge(), Om(e, t);
        },
        useId: function() {
          return J = "useId", ot(), ge(), Vm();
        },
        unstable_isNewReconciler: de
      };
    }
    var Iu = v.unstable_now, KE = 0, $m = -1, Kp = -1, Im = -1, P0 = !1, Ym = !1;
    function JE() {
      return P0;
    }
    function E3() {
      Ym = !0;
    }
    function C3() {
      P0 = !1, Ym = !1;
    }
    function w3() {
      P0 = Ym, Ym = !1;
    }
    function eC() {
      return KE;
    }
    function tC() {
      KE = Iu();
    }
    function $0(e) {
      Kp = Iu(), e.actualStartTime < 0 && (e.actualStartTime = Iu());
    }
    function nC(e) {
      Kp = -1;
    }
    function Qm(e, t) {
      if (Kp >= 0) {
        var a = Iu() - Kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kp = -1;
      }
    }
    function $l(e) {
      if ($m >= 0) {
        var t = Iu() - $m;
        $m = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case me:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function I0(e) {
      if (Im >= 0) {
        var t = Iu() - Im;
        Im = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case me:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Il() {
      $m = Iu();
    }
    function Y0() {
      Im = Iu();
    }
    function Q0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ec(e, t) {
      return {
        value: e,
        source: t,
        stack: Zo(t),
        digest: null
      };
    }
    function W0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function b3(e, t) {
      return !0;
    }
    function G0(e, t) {
      try {
        var a = b3(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === L)
            return;
          console.error(i);
        }
        var h = o ? lt(o) : null, y = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === F)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = lt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var H = y + `
` + f + `

` + ("" + C);
        console.error(H);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var R3 = typeof WeakMap == "function" ? WeakMap : Map;
    function rC(e, t, a) {
      var i = zo(Wt, a);
      i.tag = Gg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        mx(o), G0(e, t);
      }, i;
    }
    function q0(e, t, a) {
      var i = zo(Wt, a);
      i.tag = Gg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          v2(e), G0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        v2(e), G0(e, t), typeof o != "function" && vx(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (Qr(e.lanes, Je) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", lt(e) || "Unknown"));
      }), i;
    }
    function aC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new R3(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = yx.bind(null, e, t, a);
        Jn && vv(e, a), t.then(s, s);
      }
    }
    function T3(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function x3(e, t) {
      var a = e.tag;
      if ((e.mode & gt) === Xe && (a === O || a === he || a === ce)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function iC(e) {
      var t = e;
      do {
        if (t.tag === re && c3(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function lC(e, t, a, i, o) {
      if ((e.mode & gt) === Xe) {
        if (e === t)
          e.flags |= Pn;
        else {
          if (e.flags |= rt, a.flags |= ws, a.flags &= ~(_c | na), a.tag === L) {
            var s = a.alternate;
            if (s === null)
              a.tag = Pe;
            else {
              var f = zo(Wt, Je);
              f.tag = mm, Vu(a, f, Je);
            }
          }
          a.lanes = dt(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= Pn, e.lanes = o, e;
    }
    function k3(e, t, a, i, o) {
      if (a.flags |= na, Jn && vv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        x3(a), Rr() && a.mode & gt && XS();
        var f = iC(t);
        if (f !== null) {
          f.flags &= ~yn, lC(f, t, a, e, o), f.mode & gt && aC(e, s, o), T3(f, e, s);
          return;
        } else {
          if (!gu(o)) {
            aC(e, s, o), D1();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Rr() && a.mode & gt) {
        XS();
        var y = iC(t);
        if (y !== null) {
          (y.flags & Pn) === Qe && (y.flags |= yn), lC(y, t, a, e, o), Bg(ec(i, a));
          return;
        }
      }
      i = ec(i, a), lx(i);
      var C = t;
      do {
        switch (C.tag) {
          case F: {
            var b = i;
            C.flags |= Pn;
            var H = Mn(o);
            C.lanes = dt(C.lanes, H);
            var A = rC(C, b, H);
            Zg(C, A);
            return;
          }
          case L:
            var $ = i, Y = C.type, X = C.stateNode;
            if ((C.flags & rt) === Qe && (typeof Y.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !i2(X))) {
              C.flags |= Pn;
              var _e = Mn(o);
              C.lanes = dt(C.lanes, _e);
              var Ge = q0(C, $, _e);
              Zg(C, Ge);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function D3() {
      return null;
    }
    var Jp = m.ReactCurrentOwner, Gi = !1, X0, ev, Z0, K0, J0, tc, e1, Wm;
    X0 = {}, ev = {}, Z0 = {}, K0 = {}, J0 = {}, tc = !1, e1 = {}, Wm = {};
    function ua(e, t, a, i) {
      e === null ? t.child = RE(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function O3(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function oC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Pi(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f = a.render, h = t.ref, y, C;
      Ff(t, o), Dl(t);
      {
        if (Jp.current = t, Hr(!0), y = Yf(e, t, f, i, h, o), C = Qf(), t.mode & dn) {
          Nn(!0);
          try {
            y = Yf(e, t, f, i, h, o), C = Qf();
          } finally {
            Nn(!1);
          }
        }
        Hr(!1);
      }
      return co(), e !== null && !Gi ? (OE(e, t, o), Ho(e, t, o)) : (Rr() && C && Ag(t), t.flags |= Cl, ua(e, t, y, o), t.child);
    }
    function uC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (Ux(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ed(s), t.tag = ce, t.type = f, r1(t, s), sC(e, t, f, i, o);
        }
        {
          var h = s.propTypes;
          h && Pi(
            h,
            i,
            // Resolved props
            "prop",
            Dt(s)
          );
        }
        var y = j1(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var C = a.type, b = C.propTypes;
        b && Pi(
          b,
          i,
          // Resolved props
          "prop",
          Dt(C)
        );
      }
      var H = e.child, A = s1(e, o);
      if (!A) {
        var $ = H.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : $e, Y($, i) && e.ref === t.ref)
          return Ho(e, t, o);
      }
      t.flags |= Cl;
      var X = lc(H, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function sC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Zn) {
          var f = s, h = f._payload, y = f._init;
          try {
            s = y(h);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && Pi(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if ($e(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Gi = !1, t.pendingProps = i = b, s1(e, o))
            (e.flags & ws) !== Qe && (Gi = !0);
          else
            return t.lanes = e.lanes, Ho(e, t, o);
      }
      return t1(e, t, a, i, o);
    }
    function cC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & gt) === Xe) {
          var f = {
            baseLanes: K,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, ly(t, a);
        } else if (Qr(a, Yr)) {
          var H = {
            baseLanes: K,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var A = s !== null ? s.baseLanes : a;
          ly(t, A);
        } else {
          var h = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = dt(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = Yr;
          var b = {
            baseLanes: y,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, ly(t, y), null;
        }
      else {
        var $;
        s !== null ? ($ = dt(s.baseLanes, a), t.memoizedState = null) : $ = a, ly(t, $);
      }
      return ua(e, t, o, a), t.child;
    }
    function _3(e, t, a) {
      var i = t.pendingProps;
      return ua(e, t, i, a), t.child;
    }
    function L3(e, t, a) {
      var i = t.pendingProps.children;
      return ua(e, t, i, a), t.child;
    }
    function N3(e, t, a) {
      {
        t.flags |= ft;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ua(e, t, s, a), t.child;
    }
    function fC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= jr, t.flags |= zd);
    }
    function t1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Pi(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f;
      {
        var h = Nf(t, a, !0);
        f = Mf(t, h);
      }
      var y, C;
      Ff(t, o), Dl(t);
      {
        if (Jp.current = t, Hr(!0), y = Yf(e, t, a, i, f, o), C = Qf(), t.mode & dn) {
          Nn(!0);
          try {
            y = Yf(e, t, a, i, f, o), C = Qf();
          } finally {
            Nn(!1);
          }
        }
        Hr(!1);
      }
      return co(), e !== null && !Gi ? (OE(e, t, o), Ho(e, t, o)) : (Rr() && C && Ag(t), t.flags |= Cl, ua(e, t, y, o), t.child);
    }
    function dC(e, t, a, i, o) {
      {
        switch (qx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, h = new f(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= Pn;
            var C = new Error("Simulated error coming from DevTools"), b = Mn(o);
            t.lanes = dt(t.lanes, b);
            var H = q0(t, ec(C, t), b);
            Zg(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var A = a.propTypes;
          A && Pi(
            A,
            i,
            // Resolved props
            "prop",
            Dt(a)
          );
        }
      }
      var $;
      jl(a) ? ($ = !0, im(t)) : $ = !1, Ff(t, o);
      var Y = t.stateNode, X;
      Y === null ? (qm(e, t), SE(t, a, i), s0(t, a, i, o), X = !0) : e === null ? X = a3(t, a, i, o) : X = i3(e, t, a, i, o);
      var _e = n1(e, t, a, X, $, o);
      {
        var Ge = t.stateNode;
        X && Ge.props !== i && (tc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", lt(t) || "a component"), tc = !0);
      }
      return _e;
    }
    function n1(e, t, a, i, o, s) {
      fC(e, t);
      var f = (t.flags & rt) !== Qe;
      if (!i && !f)
        return o && QS(t, a, !1), Ho(e, t, s);
      var h = t.stateNode;
      Jp.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, nC();
      else {
        Dl(t);
        {
          if (Hr(!0), y = h.render(), t.mode & dn) {
            Nn(!0);
            try {
              h.render();
            } finally {
              Nn(!1);
            }
          }
          Hr(!1);
        }
        co();
      }
      return t.flags |= Cl, e !== null && f ? O3(e, t, y, s) : ua(e, t, y, s), t.memoizedState = h.state, o && QS(t, a, !0), t.child;
    }
    function pC(e) {
      var t = e.stateNode;
      t.pendingContext ? IS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && IS(e, t.context, !1), h0(e, t.containerInfo);
    }
    function M3(e, t, a) {
      if (pC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      fE(e, t), Em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var h = f.element;
      if (o.isDehydrated) {
        var y = {
          element: h,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & yn) {
          var b = ec(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return vC(e, t, h, a, b);
        } else if (h !== s) {
          var H = ec(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return vC(e, t, h, a, H);
        } else {
          HR(t);
          var A = RE(t, null, h, a);
          t.child = A;
          for (var $ = A; $; )
            $.flags = $.flags & ~Kt | Ea, $ = $.sibling;
        }
      } else {
        if (zf(), h === s)
          return Ho(e, t, a);
        ua(e, t, h, a);
      }
      return t.child;
    }
    function vC(e, t, a, i, o) {
      return zf(), Bg(o), t.flags |= yn, ua(e, t, a, i), t.child;
    }
    function U3(e, t, a) {
      xE(t), e === null && Vg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, h = Cg(i, o);
      return h ? f = null : s !== null && Cg(i, s) && (t.flags |= Ht), fC(e, t), ua(e, t, f, a), t.child;
    }
    function A3(e, t) {
      return e === null && Vg(t), null;
    }
    function z3(e, t, a, i) {
      qm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, h = s._init, y = h(f);
      t.type = y;
      var C = t.tag = Ax(y), b = Yi(y, o), H;
      switch (C) {
        case O:
          return r1(t, y), t.type = y = ed(y), H = t1(null, t, y, b, i), H;
        case L:
          return t.type = y = M1(y), H = dC(null, t, y, b, i), H;
        case he:
          return t.type = y = U1(y), H = oC(null, t, y, b, i), H;
        case le: {
          if (t.type !== t.elementType) {
            var A = y.propTypes;
            A && Pi(
              A,
              b,
              // Resolved for outer only
              "prop",
              Dt(y)
            );
          }
          return H = uC(
            null,
            t,
            y,
            Yi(y.type, b),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var $ = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Zn && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function H3(e, t, a, i, o) {
      qm(e, t), t.tag = L;
      var s;
      return jl(a) ? (s = !0, im(t)) : s = !1, Ff(t, o), SE(t, a, i), s0(t, a, i, o), n1(null, t, a, !0, s, o);
    }
    function F3(e, t, a, i) {
      qm(e, t);
      var o = t.pendingProps, s;
      {
        var f = Nf(t, a, !1);
        s = Mf(t, f);
      }
      Ff(t, i);
      var h, y;
      Dl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Dt(a) || "Unknown";
          X0[C] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), X0[C] = !0);
        }
        t.mode & dn && Ii.recordLegacyContextWarning(t, null), Hr(!0), Jp.current = t, h = Yf(null, t, a, o, s, i), y = Qf(), Hr(!1);
      }
      if (co(), t.flags |= Cl, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var b = Dt(a) || "Unknown";
        ev[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), ev[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var H = Dt(a) || "Unknown";
          ev[H] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), ev[H] = !0);
        }
        t.tag = L, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return jl(a) ? (A = !0, im(t)) : A = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Xg(t), gE(t, h), s0(t, a, o, i), n1(null, t, a, !0, A, i);
      } else {
        if (t.tag = O, t.mode & dn) {
          Nn(!0);
          try {
            h = Yf(null, t, a, o, s, i), y = Qf();
          } finally {
            Nn(!1);
          }
        }
        return Rr() && y && Ag(t), ua(null, t, h, i), r1(t, a), t.child;
      }
    }
    function r1(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Cr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), J0[o] || (J0[o] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Dt(t) || "Unknown";
          K0[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), K0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Dt(t) || "Unknown";
          Z0[h] || (S("%s: Function components do not support contextType.", h), Z0[h] = !0);
        }
      }
    }
    var a1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Rt
    };
    function i1(e) {
      return {
        baseLanes: e,
        cachePool: D3(),
        transitions: null
      };
    }
    function j3(e, t) {
      var a = null;
      return {
        baseLanes: dt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function V3(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return g0(e, Yp);
    }
    function B3(e, t) {
      return Su(e.childLanes, t);
    }
    function hC(e, t, a) {
      var i = t.pendingProps;
      Xx(t) && (t.flags |= rt);
      var o = Qi.current, s = !1, f = (t.flags & rt) !== Qe;
      if (f || V3(o, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (o = s3(o, DE)), o = Bf(o), Pu(t, o), e === null) {
        Vg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return Q3(t, y);
        }
        var C = i.children, b = i.fallback;
        if (s) {
          var H = P3(t, C, b, a), A = t.child;
          return A.memoizedState = i1(a), t.memoizedState = a1, H;
        } else
          return l1(t, C);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var Y = $.dehydrated;
          if (Y !== null)
            return W3(e, t, f, i, Y, $, a);
        }
        if (s) {
          var X = i.fallback, _e = i.children, Ge = I3(e, t, _e, X, a), Be = t.child, xt = e.child.memoizedState;
          return Be.memoizedState = xt === null ? i1(a) : j3(xt, a), Be.childLanes = B3(e, a), t.memoizedState = a1, Ge;
        } else {
          var Ct = i.children, V = $3(e, t, Ct, a);
          return t.memoizedState = null, V;
        }
      }
    }
    function l1(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = o1(o, i);
      return s.return = e, e.child = s, s;
    }
    function P3(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, h, y;
      return (o & gt) === Xe && s !== null ? (h = s, h.childLanes = K, h.pendingProps = f, e.mode & Ke && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = Xu(a, o, i, null)) : (h = o1(f, o), y = Xu(a, o, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function o1(e, t, a) {
      return m2(e, t, K, null);
    }
    function mC(e, t) {
      return lc(e, t);
    }
    function $3(e, t, a, i) {
      var o = e.child, s = o.sibling, f = mC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & gt) === Xe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Ut) : h.push(s);
      }
      return t.child = f, f;
    }
    function I3(e, t, a, i, o) {
      var s = t.mode, f = e.child, h = f.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & gt) === Xe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var b = t.child;
        C = b, C.childLanes = K, C.pendingProps = y, t.mode & Ke && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = mC(f, y), C.subtreeFlags = f.subtreeFlags & Kn;
      var H;
      return h !== null ? H = lc(h, i) : (H = Xu(i, s, o, null), H.flags |= Kt), H.return = t, C.return = t, C.sibling = H, t.child = C, H;
    }
    function Gm(e, t, a, i) {
      i !== null && Bg(i), jf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = l1(t, s);
      return f.flags |= Kt, t.memoizedState = null, f;
    }
    function Y3(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, h = o1(f, s), y = Xu(i, s, o, null);
      return y.flags |= Kt, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & gt) !== Xe && jf(t, e.child, null, o), y;
    }
    function Q3(e, t, a) {
      return (e.mode & gt) === Xe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : Tg(t) ? e.lanes = vo : e.lanes = Yr, null;
    }
    function W3(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= ~yn;
          var V = W0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Gm(e, t, f, V);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var Z = i.children, B = i.fallback, ue = Y3(e, t, Z, B, f), Le = t.child;
          return Le.memoizedState = i1(f), t.memoizedState = a1, ue;
        }
      else {
        if (AR(), (t.mode & gt) === Xe)
          return Gm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Tg(o)) {
          var h, y, C;
          {
            var b = Kb(o);
            h = b.digest, y = b.message, C = b.stack;
          }
          var H;
          y ? H = new Error(y) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = W0(H, h, C);
          return Gm(e, t, f, A);
        }
        var $ = Qr(f, e.childLanes);
        if (Gi || $) {
          var Y = iy();
          if (Y !== null) {
            var X = Qy(Y, f);
            if (X !== Rt && X !== s.retryLane) {
              s.retryLane = X;
              var _e = Wt;
              _a(e, X), ur(Y, e, X, _e);
            }
          }
          D1();
          var Ge = W0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Gm(e, t, f, Ge);
        } else if (FS(o)) {
          t.flags |= rt, t.child = e.child;
          var Be = gx.bind(null, e);
          return Jb(o, Be), null;
        } else {
          FR(t, o, s.treeContext);
          var xt = i.children, Ct = l1(t, xt);
          return Ct.flags |= Ea, Ct;
        }
      }
    }
    function yC(e, t, a) {
      e.lanes = dt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = dt(i.lanes, t)), Qg(e.return, t, a);
    }
    function G3(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === re) {
          var o = i.memoizedState;
          o !== null && yC(i, a, e);
        } else if (i.tag === Ee)
          yC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function q3(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && km(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function X3(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !e1[e])
        if (e1[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Z3(e, t) {
      e !== void 0 && !Wm[e] && (e !== "collapsed" && e !== "hidden" ? (Wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function gC(e, t) {
      {
        var a = bt(e), i = !a && typeof Pa(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function K3(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (bt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!gC(e[a], a))
              return;
        } else {
          var i = Pa(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!gC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function u1(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function SC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      X3(o), Z3(s, o), K3(f, o), ua(e, t, f, a);
      var h = Qi.current, y = g0(h, Yp);
      if (y)
        h = S0(h, Yp), t.flags |= rt;
      else {
        var C = e !== null && (e.flags & rt) !== Qe;
        C && G3(t, t.child, a), h = Bf(h);
      }
      if (Pu(t, h), (t.mode & gt) === Xe)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var b = q3(t.child), H;
            b === null ? (H = t.child, t.child = null) : (H = b.sibling, b.sibling = null), u1(
              t,
              !1,
              // isBackwards
              H,
              b,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var Y = $.alternate;
              if (Y !== null && km(Y) === null) {
                t.child = $;
                break;
              }
              var X = $.sibling;
              $.sibling = A, A = $, $ = X;
            }
            u1(
              t,
              !0,
              // isBackwards
              A,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            u1(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function J3(e, t, a) {
      h0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : ua(e, t, i, a), t.child;
    }
    var EC = !1;
    function eT(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, h = s.value;
      {
        "value" in s || EC || (EC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && Pi(y, s, "prop", "Context.Provider");
      }
      if (oE(t, o, h), f !== null) {
        var C = f.value;
        if (Ae(C, h)) {
          if (f.children === s.children && !rm())
            return Ho(e, t, a);
        } else
          GR(t, o, a);
      }
      var b = s.children;
      return ua(e, t, b, a), t.child;
    }
    var CC = !1;
    function tT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (CC || (CC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ff(t, a);
      var f = Wn(i);
      Dl(t);
      var h;
      return Jp.current = t, Hr(!0), h = s(f), Hr(!1), co(), t.flags |= Cl, ua(e, t, h, a), t.child;
    }
    function tv() {
      Gi = !0;
    }
    function qm(e, t) {
      (t.mode & gt) === Xe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Kt);
    }
    function Ho(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), pv(t.lanes), Qr(a, t.childLanes) ? (l3(e, t), t.child) : null;
    }
    function nT(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= Kt, a;
      }
    }
    function s1(e, t) {
      var a = e.lanes;
      return !!Qr(a, t);
    }
    function rT(e, t, a) {
      switch (t.tag) {
        case F:
          pC(t), t.stateNode, zf();
          break;
        case Q:
          xE(t);
          break;
        case L: {
          var i = t.type;
          jl(i) && im(t);
          break;
        }
        case G:
          h0(t, t.stateNode.containerInfo);
          break;
        case ke: {
          var o = t.memoizedProps.value, s = t.type._context;
          oE(t, s, o);
          break;
        }
        case me:
          {
            var f = Qr(a, t.childLanes);
            f && (t.flags |= ft);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case re: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Pu(t, Bf(Qi.current)), t.flags |= rt, null;
            var C = t.child, b = C.childLanes;
            if (Qr(a, b))
              return hC(e, t, a);
            Pu(t, Bf(Qi.current));
            var H = Ho(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            Pu(t, Bf(Qi.current));
          break;
        }
        case Ee: {
          var A = (e.flags & rt) !== Qe, $ = Qr(a, t.childLanes);
          if (A) {
            if ($)
              return SC(e, t, a);
            t.flags |= rt;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Pu(t, Qi.current), $)
            break;
          return null;
        }
        case Ne:
        case it:
          return t.lanes = K, cC(e, t, a);
      }
      return Ho(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return nT(e, t, j1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || rm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Gi = !0;
        else {
          var s = s1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === Qe)
            return Gi = !1, rT(e, t, a);
          (e.flags & ws) !== Qe ? Gi = !0 : Gi = !1;
        }
      } else if (Gi = !1, Rr() && OR(t)) {
        var f = t.index, h = _R();
        qS(t, h, f);
      }
      switch (t.lanes = K, t.tag) {
        case M:
          return F3(e, t, t.type, a);
        case Fe: {
          var y = t.elementType;
          return z3(e, t, y, a);
        }
        case O: {
          var C = t.type, b = t.pendingProps, H = t.elementType === C ? b : Yi(C, b);
          return t1(e, t, C, H, a);
        }
        case L: {
          var A = t.type, $ = t.pendingProps, Y = t.elementType === A ? $ : Yi(A, $);
          return dC(e, t, A, Y, a);
        }
        case F:
          return M3(e, t, a);
        case Q:
          return U3(e, t, a);
        case ee:
          return A3(e, t);
        case re:
          return hC(e, t, a);
        case G:
          return J3(e, t, a);
        case he: {
          var X = t.type, _e = t.pendingProps, Ge = t.elementType === X ? _e : Yi(X, _e);
          return oC(e, t, X, Ge, a);
        }
        case se:
          return _3(e, t, a);
        case te:
          return L3(e, t, a);
        case me:
          return N3(e, t, a);
        case ke:
          return eT(e, t, a);
        case ve:
          return tT(e, t, a);
        case le: {
          var Be = t.type, xt = t.pendingProps, Ct = Yi(Be, xt);
          if (t.type !== t.elementType) {
            var V = Be.propTypes;
            V && Pi(
              V,
              Ct,
              // Resolved for outer only
              "prop",
              Dt(Be)
            );
          }
          return Ct = Yi(Be.type, Ct), uC(e, t, Be, Ct, a);
        }
        case ce:
          return sC(e, t, t.type, t.pendingProps, a);
        case Pe: {
          var Z = t.type, B = t.pendingProps, ue = t.elementType === Z ? B : Yi(Z, B);
          return H3(e, t, Z, ue, a);
        }
        case Ee:
          return SC(e, t, a);
        case et:
          break;
        case Ne:
          return cC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wf(e) {
      e.flags |= ft;
    }
    function bC(e) {
      e.flags |= jr, e.flags |= zd;
    }
    var RC, c1, TC, xC;
    RC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === Q || o.tag === ee)
          xb(e, o.stateNode);
        else if (o.tag !== G) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, c1 = function(e, t) {
    }, TC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, h = m0(), y = Db(f, a, s, i, o, h);
        t.updateQueue = y, y && Wf(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && Wf(t);
    };
    function nv(e, t) {
      if (!Rr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function xr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = K, i = Qe;
      if (t) {
        if ((e.mode & Ke) !== Xe) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = dt(a, dt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Kn, i |= C.flags & Kn, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var b = e.child; b !== null; )
            a = dt(a, dt(b.lanes, b.childLanes)), i |= b.subtreeFlags & Kn, i |= b.flags & Kn, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ke) !== Xe) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = dt(a, dt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = dt(a, dt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function aT(e, t, a) {
      if ($R() && (t.mode & gt) !== Xe && (t.flags & rt) === Qe)
        return nE(t), zf(), t.flags |= yn | na | Pn, !1;
      var i = cm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (BR(t), xr(t), (t.mode & Ke) !== Xe) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (zf(), (t.flags & rt) === Qe && (t.memoizedState = null), t.flags |= ft, xr(t), (t.mode & Ke) !== Xe) {
            var f = a !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rE(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (zg(t), t.tag) {
        case M:
        case Fe:
        case ce:
        case O:
        case he:
        case se:
        case te:
        case me:
        case ve:
        case le:
          return xr(t), null;
        case L: {
          var o = t.type;
          return jl(o) && am(t), xr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Vf(t), Ng(t), C0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = cm(t);
            if (f)
              Wf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== Qe) && (t.flags |= Sa, rE());
            }
          }
          return c1(e, t), xr(t), null;
        }
        case Q: {
          y0(t);
          var y = TE(), C = t.type;
          if (e !== null && t.stateNode != null)
            TC(e, t, C, i, y), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return xr(t), null;
            }
            var b = m0(), H = cm(t);
            if (H)
              jR(t, y, b) && Wf(t);
            else {
              var A = Tb(C, i, y, b, t);
              RC(A, t, !1, !1), t.stateNode = A, kb(A, C, i, y) && Wf(t);
            }
            t.ref !== null && bC(t);
          }
          return xr(t), null;
        }
        case ee: {
          var $ = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            xC(e, t, Y, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = TE(), _e = m0(), Ge = cm(t);
            Ge ? VR(t) && Wf(t) : t.stateNode = Ob($, X, _e, t);
          }
          return xr(t), null;
        }
        case re: {
          Pf(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = aT(e, t, Be);
            if (!xt)
              return t.flags & Pn ? t : null;
          }
          if ((t.flags & rt) !== Qe)
            return t.lanes = a, (t.mode & Ke) !== Xe && Q0(t), t;
          var Ct = Be !== null, V = e !== null && e.memoizedState !== null;
          if (Ct !== V && Ct) {
            var Z = t.child;
            if (Z.flags |= wl, (t.mode & gt) !== Xe) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ne);
              B || g0(Qi.current, DE) ? ix() : D1();
            }
          }
          var ue = t.updateQueue;
          if (ue !== null && (t.flags |= ft), xr(t), (t.mode & Ke) !== Xe && Ct) {
            var Le = t.child;
            Le !== null && (t.treeBaseDuration -= Le.treeBaseDuration);
          }
          return null;
        }
        case G:
          return Vf(t), c1(e, t), e === null && wR(t.stateNode.containerInfo), xr(t), null;
        case ke:
          var xe = t.type._context;
          return Yg(xe, t), xr(t), null;
        case Pe: {
          var nt = t.type;
          return jl(nt) && am(t), xr(t), null;
        }
        case Ee: {
          Pf(t);
          var ut = t.memoizedState;
          if (ut === null)
            return xr(t), null;
          var $t = (t.flags & rt) !== Qe, Nt = ut.rendering;
          if (Nt === null)
            if ($t)
              nv(ut, !1);
            else {
              var Hn = ox() && (e === null || (e.flags & rt) === Qe);
              if (!Hn)
                for (var Mt = t.child; Mt !== null; ) {
                  var On = km(Mt);
                  if (On !== null) {
                    $t = !0, t.flags |= rt, nv(ut, !1);
                    var Xr = On.updateQueue;
                    return Xr !== null && (t.updateQueue = Xr, t.flags |= ft), t.subtreeFlags = Qe, o3(t, a), Pu(t, S0(Qi.current, Yp)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              ut.tail !== null && fn() > GC() && (t.flags |= rt, $t = !0, nv(ut, !1), t.lanes = qd);
            }
          else {
            if (!$t) {
              var Lr = km(Nt);
              if (Lr !== null) {
                t.flags |= rt, $t = !0;
                var Ja = Lr.updateQueue;
                if (Ja !== null && (t.updateQueue = Ja, t.flags |= ft), nv(ut, !0), ut.tail === null && ut.tailMode === "hidden" && !Nt.alternate && !Rr())
                  return xr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                fn() * 2 - ut.renderingStartTime > GC() && a !== Yr && (t.flags |= rt, $t = !0, nv(ut, !1), t.lanes = qd);
            }
            if (ut.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var fa = ut.last;
              fa !== null ? fa.sibling = Nt : t.child = Nt, ut.last = Nt;
            }
          }
          if (ut.tail !== null) {
            var da = ut.tail;
            ut.rendering = da, ut.tail = da.sibling, ut.renderingStartTime = fn(), da.sibling = null;
            var Zr = Qi.current;
            return $t ? Zr = S0(Zr, Yp) : Zr = Bf(Zr), Pu(t, Zr), da;
          }
          return xr(t), null;
        }
        case et:
          break;
        case Ne:
        case it: {
          k1(t);
          var Po = t.memoizedState, td = Po !== null;
          if (e !== null) {
            var gv = e.memoizedState, Wl = gv !== null;
            Wl !== td && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= wl);
          }
          return !td || (t.mode & gt) === Xe ? xr(t) : Qr(Ql, Yr) && (xr(t), t.subtreeFlags & (Kt | ft) && (t.flags |= wl)), null;
        }
        case wt:
          return null;
        case We:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function iT(e, t, a) {
      switch (zg(t), t.tag) {
        case L: {
          var i = t.type;
          jl(i) && am(t);
          var o = t.flags;
          return o & Pn ? (t.flags = o & ~Pn | rt, (t.mode & Ke) !== Xe && Q0(t), t) : null;
        }
        case F: {
          t.stateNode, Vf(t), Ng(t), C0();
          var s = t.flags;
          return (s & Pn) !== Qe && (s & rt) === Qe ? (t.flags = s & ~Pn | rt, t) : null;
        }
        case Q:
          return y0(t), null;
        case re: {
          Pf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            zf();
          }
          var h = t.flags;
          return h & Pn ? (t.flags = h & ~Pn | rt, (t.mode & Ke) !== Xe && Q0(t), t) : null;
        }
        case Ee:
          return Pf(t), null;
        case G:
          return Vf(t), null;
        case ke:
          var y = t.type._context;
          return Yg(y, t), null;
        case Ne:
        case it:
          return k1(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function DC(e, t, a) {
      switch (zg(t), t.tag) {
        case L: {
          var i = t.type.childContextTypes;
          i != null && am(t);
          break;
        }
        case F: {
          t.stateNode, Vf(t), Ng(t), C0();
          break;
        }
        case Q: {
          y0(t);
          break;
        }
        case G:
          Vf(t);
          break;
        case re:
          Pf(t);
          break;
        case Ee:
          Pf(t);
          break;
        case ke:
          var o = t.type._context;
          Yg(o, t);
          break;
        case Ne:
        case it:
          k1(t);
          break;
      }
    }
    var OC = null;
    OC = /* @__PURE__ */ new Set();
    var Xm = !1, kr = !1, lT = typeof WeakSet == "function" ? WeakSet : Set, ze = null, Gf = null, qf = null;
    function oT(e) {
      uo(null, function() {
        throw e;
      }), Ud();
    }
    var uT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ke)
        try {
          Il(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function _C(e, t) {
      try {
        Yu(nr, e);
      } catch (a) {
        nn(e, t, a);
      }
    }
    function f1(e, t, a) {
      try {
        uT(e, a);
      } catch (i) {
        nn(e, t, i);
      }
    }
    function sT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        nn(e, t, i);
      }
    }
    function LC(e, t) {
      try {
        MC(e);
      } catch (a) {
        nn(e, t, a);
      }
    }
    function Xf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ct && St && e.mode & Ke)
              try {
                Il(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (o) {
            nn(e, t, o);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          a.current = null;
    }
    function Zm(e, t, a) {
      try {
        a();
      } catch (i) {
        nn(e, t, i);
      }
    }
    var NC = !1;
    function cT(e, t) {
      bb(e.containerInfo), ze = t, fT();
      var a = NC;
      return NC = !1, a;
    }
    function fT() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & fu) !== Qe && t !== null ? (t.return = e, ze = t) : dT();
      }
    }
    function dT() {
      for (; ze !== null; ) {
        var e = ze;
        zt(e);
        try {
          pT(e);
        } catch (a) {
          nn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function pT(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Sa) !== Qe) {
        switch (zt(e), e.tag) {
          case O:
          case he:
          case ce:
            break;
          case L: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !tc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Yi(e.type, i), o);
              {
                var h = OC;
                f === void 0 && !h.has(e.type) && (h.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", lt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var y = e.stateNode;
              Gb(y.containerInfo);
            }
            break;
          }
          case Q:
          case ee:
          case G:
          case Pe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function qi(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && ((e & Tr) !== La ? Fc(t) : (e & nr) !== La && jc(t), (e & Vl) !== La && hv(!0), Zm(t, a, h), (e & Vl) !== La && hv(!1), (e & Tr) !== La ? sh() : (e & nr) !== La && du());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Yu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Tr) !== La ? uh(t) : (e & nr) !== La && ch(t);
            var f = s.create;
            (e & Vl) !== La && hv(!0), s.destroy = f(), (e & Vl) !== La && hv(!1), (e & Tr) !== La ? Qd() : (e & nr) !== La && fh();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & nr) !== Qe ? y = "useLayoutEffect" : (s.tag & Vl) !== Qe ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                h === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + h, S("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function vT(e, t) {
      if ((t.flags & ft) !== Qe)
        switch (t.tag) {
          case me: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = eC(), h = t.alternate === null ? "mount" : "update";
            JE() && (h = "nested-update"), typeof s == "function" && s(o, h, a, f);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case F:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case me:
                    var b = y.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function hT(e, t, a, i) {
      if ((a.flags & fr) !== Qe)
        switch (a.tag) {
          case O:
          case he:
          case ce: {
            if (!kr)
              if (a.mode & Ke)
                try {
                  Il(), Yu(nr | tr, a);
                } finally {
                  $l(a);
                }
              else
                Yu(nr | tr, a);
            break;
          }
          case L: {
            var o = a.stateNode;
            if (a.flags & ft && !kr)
              if (t === null)
                if (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & Ke)
                  try {
                    Il(), o.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Yi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & Ke)
                  try {
                    Il(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !tc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), pE(a, h, o));
            break;
          }
          case F: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Q:
                    C = a.child.stateNode;
                    break;
                  case L:
                    C = a.child.stateNode;
                    break;
                }
              pE(a, y, C);
            }
            break;
          }
          case Q: {
            var b = a.stateNode;
            if (t === null && a.flags & ft) {
              var H = a.type, A = a.memoizedProps;
              Ub(b, H, A);
            }
            break;
          }
          case ee:
            break;
          case G:
            break;
          case me: {
            {
              var $ = a.memoizedProps, Y = $.onCommit, X = $.onRender, _e = a.stateNode.effectDuration, Ge = eC(), Be = t === null ? "mount" : "update";
              JE() && (Be = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ge);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Be, _e, Ge), dx(a);
                var xt = a.return;
                e:
                  for (; xt !== null; ) {
                    switch (xt.tag) {
                      case F:
                        var Ct = xt.stateNode;
                        Ct.effectDuration += _e;
                        break e;
                      case me:
                        var V = xt.stateNode;
                        V.effectDuration += _e;
                        break e;
                    }
                    xt = xt.return;
                  }
              }
            }
            break;
          }
          case re: {
            bT(e, a);
            break;
          }
          case Ee:
          case Pe:
          case et:
          case Ne:
          case it:
          case We:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      kr || a.flags & jr && MC(a);
    }
    function mT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          if (e.mode & Ke)
            try {
              Il(), _C(e, e.return);
            } finally {
              $l(e);
            }
          else
            _C(e, e.return);
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && sT(e, e.return, t), LC(e, e.return);
          break;
        }
        case Q: {
          LC(e, e.return);
          break;
        }
      }
    }
    function yT(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Q) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Ib(o) : Qb(i.stateNode, i.memoizedProps);
            } catch (f) {
              nn(e, e.return, f);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Yb(s) : Wb(s, i.memoizedProps);
            } catch (f) {
              nn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === it) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Ke)
            try {
              Il(), o = t(i);
            } finally {
              $l(e);
            }
          else
            o = t(i);
          typeof o == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", lt(e)), t.current = i;
      }
    }
    function gT(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Q) {
          var a = e.stateNode;
          a !== null && TR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ST(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === Q || e.tag === F || e.tag === G;
    }
    function zC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Q && t.tag !== ee && t.tag !== be; ) {
            if (t.flags & Kt || t.child === null || t.tag === G)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Kt))
            return t.stateNode;
        }
    }
    function ET(e) {
      var t = ST(e);
      switch (t.tag) {
        case Q: {
          var a = t.stateNode;
          t.flags & Ht && (HS(a), t.flags &= ~Ht);
          var i = zC(e);
          p1(e, i, a);
          break;
        }
        case F:
        case G: {
          var o = t.stateNode.containerInfo, s = zC(e);
          d1(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function d1(e, t, a) {
      var i = e.tag, o = i === Q || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? Vb(a, s, t) : Fb(a, s);
      } else if (i !== G) {
        var f = e.child;
        if (f !== null) {
          d1(f, t, a);
          for (var h = f.sibling; h !== null; )
            d1(h, t, a), h = h.sibling;
        }
      }
    }
    function p1(e, t, a) {
      var i = e.tag, o = i === Q || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? jb(a, s, t) : Hb(a, s);
      } else if (i !== G) {
        var f = e.child;
        if (f !== null) {
          p1(f, t, a);
          for (var h = f.sibling; h !== null; )
            p1(h, t, a), h = h.sibling;
        }
      }
    }
    var Dr = null, Xi = !1;
    function CT(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Q: {
                Dr = i.stateNode, Xi = !1;
                break e;
              }
              case F: {
                Dr = i.stateNode.containerInfo, Xi = !0;
                break e;
              }
              case G: {
                Dr = i.stateNode.containerInfo, Xi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Dr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Dr = null, Xi = !1;
      }
      gT(a);
    }
    function Qu(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (Id(a), a.tag) {
        case Q:
          kr || Xf(a, t);
        case ee: {
          {
            var i = Dr, o = Xi;
            Dr = null, Qu(e, t, a), Dr = i, Xi = o, Dr !== null && (Xi ? Pb(Dr, a.stateNode) : Bb(Dr, a.stateNode));
          }
          return;
        }
        case be: {
          Dr !== null && (Xi ? $b(Dr, a.stateNode) : Rg(Dr, a.stateNode));
          return;
        }
        case G: {
          {
            var s = Dr, f = Xi;
            Dr = a.stateNode.containerInfo, Xi = !0, Qu(e, t, a), Dr = s, Xi = f;
          }
          return;
        }
        case O:
        case he:
        case le:
        case ce: {
          if (!kr) {
            var h = a.updateQueue;
            if (h !== null) {
              var y = h.lastEffect;
              if (y !== null) {
                var C = y.next, b = C;
                do {
                  var H = b, A = H.destroy, $ = H.tag;
                  A !== void 0 && (($ & Vl) !== La ? Zm(a, t, A) : ($ & nr) !== La && (jc(a), a.mode & Ke ? (Il(), Zm(a, t, A), $l(a)) : Zm(a, t, A), du())), b = b.next;
                } while (b !== C);
              }
            }
          }
          Qu(e, t, a);
          return;
        }
        case L: {
          if (!kr) {
            Xf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && f1(a, t, Y);
          }
          Qu(e, t, a);
          return;
        }
        case et: {
          Qu(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & gt
          ) {
            var X = kr;
            kr = X || a.memoizedState !== null, Qu(e, t, a), kr = X;
          } else
            Qu(e, t, a);
          break;
        }
        default: {
          Qu(e, t, a);
          return;
        }
      }
    }
    function wT(e) {
      e.memoizedState;
    }
    function bT(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && uR(s);
          }
        }
      }
    }
    function FC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new lT()), t.forEach(function(i) {
          var o = Sx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jn)
              if (Gf !== null && qf !== null)
                vv(qf, Gf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function RT(e, t, a) {
      Gf = a, qf = e, zt(t), jC(t, e), zt(t), Gf = null, qf = null;
    }
    function Zi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            CT(e, t, s);
          } catch (y) {
            nn(s, t, y);
          }
        }
      var f = mc();
      if (t.subtreeFlags & Pr)
        for (var h = t.child; h !== null; )
          zt(h), jC(h, e), h = h.sibling;
      zt(f);
    }
    function jC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case O:
        case he:
        case le:
        case ce: {
          if (Zi(t, e), Yl(e), o & ft) {
            try {
              qi(Vl | tr, e, e.return), Yu(Vl | tr, e);
            } catch (nt) {
              nn(e, e.return, nt);
            }
            if (e.mode & Ke) {
              try {
                Il(), qi(nr | tr, e, e.return);
              } catch (nt) {
                nn(e, e.return, nt);
              }
              $l(e);
            } else
              try {
                qi(nr | tr, e, e.return);
              } catch (nt) {
                nn(e, e.return, nt);
              }
          }
          return;
        }
        case L: {
          Zi(t, e), Yl(e), o & jr && i !== null && Xf(i, i.return);
          return;
        }
        case Q: {
          Zi(t, e), Yl(e), o & jr && i !== null && Xf(i, i.return);
          {
            if (e.flags & Ht) {
              var s = e.stateNode;
              try {
                HS(s);
              } catch (nt) {
                nn(e, e.return, nt);
              }
            }
            if (o & ft) {
              var f = e.stateNode;
              if (f != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, C = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    Ab(f, b, C, y, h, e);
                  } catch (nt) {
                    nn(e, e.return, nt);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (Zi(t, e), Yl(e), o & ft) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, A = e.memoizedProps, $ = i !== null ? i.memoizedProps : A;
            try {
              zb(H, $, A);
            } catch (nt) {
              nn(e, e.return, nt);
            }
          }
          return;
        }
        case F: {
          if (Zi(t, e), Yl(e), o & ft && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                oR(t.containerInfo);
              } catch (nt) {
                nn(e, e.return, nt);
              }
          }
          return;
        }
        case G: {
          Zi(t, e), Yl(e);
          return;
        }
        case re: {
          Zi(t, e), Yl(e);
          var X = e.child;
          if (X.flags & wl) {
            var _e = X.stateNode, Ge = X.memoizedState, Be = Ge !== null;
            if (_e.isHidden = Be, Be) {
              var xt = X.alternate !== null && X.alternate.memoizedState !== null;
              xt || ax();
            }
          }
          if (o & ft) {
            try {
              wT(e);
            } catch (nt) {
              nn(e, e.return, nt);
            }
            FC(e);
          }
          return;
        }
        case Ne: {
          var Ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & gt
          ) {
            var V = kr;
            kr = V || Ct, Zi(t, e), kr = V;
          } else
            Zi(t, e);
          if (Yl(e), o & wl) {
            var Z = e.stateNode, B = e.memoizedState, ue = B !== null, Le = e;
            if (Z.isHidden = ue, ue && !Ct && (Le.mode & gt) !== Xe) {
              ze = Le;
              for (var xe = Le.child; xe !== null; )
                ze = xe, xT(xe), xe = xe.sibling;
            }
            yT(Le, ue);
          }
          return;
        }
        case Ee: {
          Zi(t, e), Yl(e), o & ft && FC(e);
          return;
        }
        case et:
          return;
        default: {
          Zi(t, e), Yl(e);
          return;
        }
      }
    }
    function Yl(e) {
      var t = e.flags;
      if (t & Kt) {
        try {
          ET(e);
        } catch (a) {
          nn(e, e.return, a);
        }
        e.flags &= ~Kt;
      }
      t & Ea && (e.flags &= ~Ea);
    }
    function TT(e, t, a) {
      Gf = a, qf = t, ze = e, VC(e, t, a), Gf = null, qf = null;
    }
    function VC(e, t, a) {
      for (var i = (e.mode & gt) !== Xe; ze !== null; ) {
        var o = ze, s = o.child;
        if (o.tag === Ne && i) {
          var f = o.memoizedState !== null, h = f || Xm;
          if (h) {
            v1(e, t, a);
            continue;
          } else {
            var y = o.alternate, C = y !== null && y.memoizedState !== null, b = C || kr, H = Xm, A = kr;
            Xm = h, kr = b, kr && !A && (ze = o, kT(o));
            for (var $ = s; $ !== null; )
              ze = $, VC(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            ze = o, Xm = H, kr = A, v1(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & fr) !== Qe && s !== null ? (s.return = o, ze = s) : v1(e, t, a);
      }
    }
    function v1(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & fr) !== Qe) {
          var o = i.alternate;
          zt(i);
          try {
            hT(t, o, i, a);
          } catch (f) {
            nn(i, i.return, f);
          }
          mn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ze = s;
          return;
        }
        ze = i.return;
      }
    }
    function xT(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case O:
          case he:
          case le:
          case ce: {
            if (t.mode & Ke)
              try {
                Il(), qi(nr, t, t.return);
              } finally {
                $l(t);
              }
            else
              qi(nr, t, t.return);
            break;
          }
          case L: {
            Xf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && f1(t, t.return, i);
            break;
          }
          case Q: {
            Xf(t, t.return);
            break;
          }
          case Ne: {
            var o = t.memoizedState !== null;
            if (o) {
              BC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : BC(e);
      }
    }
    function BC(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function kT(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            PC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : PC(e);
      }
    }
    function PC(e) {
      for (; ze !== null; ) {
        var t = ze;
        zt(t);
        try {
          mT(t);
        } catch (i) {
          nn(t, t.return, i);
        }
        if (mn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function DT(e, t, a, i) {
      ze = t, OT(t, e, a, i);
    }
    function OT(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze, s = o.child;
        (o.subtreeFlags & Ca) !== Qe && s !== null ? (s.return = o, ze = s) : _T(e, t, a, i);
      }
    }
    function _T(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze;
        if ((o.flags & on) !== Qe) {
          zt(o);
          try {
            LT(t, o, a, i);
          } catch (f) {
            nn(o, o.return, f);
          }
          mn();
        }
        if (o === e) {
          ze = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, ze = s;
          return;
        }
        ze = o.return;
      }
    }
    function LT(e, t, a, i) {
      switch (t.tag) {
        case O:
        case he:
        case ce: {
          if (t.mode & Ke) {
            Y0();
            try {
              Yu(Tr | tr, t);
            } finally {
              I0(t);
            }
          } else
            Yu(Tr | tr, t);
          break;
        }
      }
    }
    function NT(e) {
      ze = e, MT();
    }
    function MT() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Ut) !== Qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              ze = o, zT(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var h = f.sibling;
                    f.sibling = null, f = h;
                  } while (f !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & Ca) !== Qe && t !== null ? (t.return = e, ze = t) : UT();
      }
    }
    function UT() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & on) !== Qe && (zt(e), AT(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function AT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          e.mode & Ke ? (Y0(), qi(Tr | tr, e, e.return), I0(e)) : qi(Tr | tr, e, e.return);
          break;
        }
      }
    }
    function zT(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        zt(a), FT(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : HT(e);
      }
    }
    function HT(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (UC(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function FT(e, t) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          e.mode & Ke ? (Y0(), qi(Tr, e, t), I0(e)) : qi(Tr, e, t);
          break;
        }
      }
    }
    function jT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          try {
            Yu(nr | tr, e);
          } catch (a) {
            nn(e, e.return, a);
          }
          break;
        }
        case L: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            nn(e, e.return, a);
          }
          break;
        }
      }
    }
    function VT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          try {
            Yu(Tr | tr, e);
          } catch (t) {
            nn(e, e.return, t);
          }
          break;
        }
      }
    }
    function BT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce: {
          try {
            qi(nr | tr, e, e.return);
          } catch (a) {
            nn(e, e.return, a);
          }
          break;
        }
        case L: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && f1(e, e.return, t);
          break;
        }
      }
    }
    function PT(e) {
      switch (e.tag) {
        case O:
        case he:
        case ce:
          try {
            qi(Tr | tr, e, e.return);
          } catch (t) {
            nn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rv = Symbol.for;
      rv("selector.component"), rv("selector.has_pseudo_class"), rv("selector.role"), rv("selector.test_id"), rv("selector.text");
    }
    var $T = [];
    function IT() {
      $T.forEach(function(e) {
        return e();
      });
    }
    var YT = m.ReactCurrentActQueue;
    function QT(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function $C() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && YT.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var WT = Math.ceil, h1 = m.ReactCurrentDispatcher, m1 = m.ReactCurrentOwner, Or = m.ReactCurrentBatchConfig, Ki = m.ReactCurrentActQueue, ir = (
      /*             */
      0
    ), IC = (
      /*               */
      1
    ), _r = (
      /*                */
      2
    ), Si = (
      /*                */
      4
    ), Fo = 0, av = 1, nc = 2, Km = 3, iv = 4, YC = 5, y1 = 6, Tt = ir, sa = null, Rn = null, lr = K, Ql = K, g1 = zu(K), or = Fo, lv = null, Jm = K, ov = K, ey = K, uv = null, Na = null, S1 = 0, QC = 500, WC = 1 / 0, GT = 500, jo = null;
    function sv() {
      WC = fn() + GT;
    }
    function GC() {
      return WC;
    }
    var ty = !1, E1 = null, Zf = null, rc = !1, Wu = null, cv = K, C1 = [], w1 = null, qT = 50, fv = 0, b1 = null, R1 = !1, ny = !1, XT = 50, Kf = 0, ry = null, dv = Wt, ay = K, qC = !1;
    function iy() {
      return sa;
    }
    function ca() {
      return (Tt & (_r | Si)) !== ir ? fn() : (dv !== Wt || (dv = fn()), dv);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & gt) === Xe)
        return Je;
      if ((Tt & _r) !== ir && lr !== K)
        return Mn(lr);
      var a = QR() !== YR;
      if (a) {
        if (Or.transition !== null) {
          var i = Or.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ay === Rt && (ay = Kd()), ay;
      }
      var o = Ta();
      if (o !== Rt)
        return o;
      var s = _b();
      return s;
    }
    function ZT(e) {
      var t = e.mode;
      return (t & gt) === Xe ? Je : Yy();
    }
    function ur(e, t, a, i) {
      Cx(), qC && S("useInsertionEffect must not schedule updates."), R1 && (ny = !0), Co(e, a, i), (Tt & _r) !== K && e === sa ? Rx(t) : (Jn && rp(e, t, a), Tx(t), e === sa && ((Tt & _r) === ir && (ov = dt(ov, a)), or === iv && qu(e, lr)), Ma(e, i), a === Je && Tt === ir && (t.mode & gt) === Xe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ki.isBatchingLegacy && (sv(), GS()));
    }
    function KT(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), Ma(e, a);
    }
    function JT(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Tt & _r) !== ir
      );
    }
    function Ma(e, t) {
      var a = e.callbackNode;
      Py(e, t);
      var i = Ds(e, e === sa ? lr : K);
      if (i === K) {
        a !== null && f2(a), e.callbackNode = null, e.callbackPriority = Rt;
        return;
      }
      var o = kn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ki.current !== null && a !== L1)) {
        a == null && s !== Je && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && f2(a);
      var f;
      if (o === Je)
        e.tag === Hu ? (Ki.isBatchingLegacy !== null && (Ki.didScheduleLegacyUpdate = !0), DR(KC.bind(null, e))) : WS(KC.bind(null, e)), Ki.current !== null ? Ki.current.push(Fu) : Nb(function() {
          (Tt & (_r | Si)) === ir && Fu();
        }), f = null;
      else {
        var h;
        switch (Ms(i)) {
          case dr:
            h = Ac;
            break;
          case er:
            h = ia;
            break;
          case Hi:
            h = si;
            break;
          case Ls:
            h = Rl;
            break;
          default:
            h = si;
            break;
        }
        f = N1(h, XC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function XC(e, t) {
      if (C3(), dv = Wt, ay = K, (Tt & (_r | Si)) !== ir)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Bo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ds(e, e === sa ? lr : K);
      if (o === K)
        return null;
      var s = !_s(e, o) && !yh(e, o) && !t, f = s ? sx(e, o) : oy(e, o);
      if (f !== Fo) {
        if (f === nc) {
          var h = Xd(e);
          h !== K && (o = h, f = T1(e, h));
        }
        if (f === av) {
          var y = lv;
          throw ac(e, K), qu(e, o), Ma(e, fn()), y;
        }
        if (f === y1)
          qu(e, o);
        else {
          var C = !_s(e, o), b = e.current.alternate;
          if (C && !tx(b)) {
            if (f = oy(e, o), f === nc) {
              var H = Xd(e);
              H !== K && (o = H, f = T1(e, H));
            }
            if (f === av) {
              var A = lv;
              throw ac(e, K), qu(e, o), Ma(e, fn()), A;
            }
          }
          e.finishedWork = b, e.finishedLanes = o, ex(e, f, o);
        }
      }
      return Ma(e, fn()), e.callbackNode === a ? XC.bind(null, e) : null;
    }
    function T1(e, t) {
      var a = uv;
      if (An(e)) {
        var i = ac(e, t);
        i.flags |= yn, CR(e.containerInfo);
      }
      var o = oy(e, t);
      if (o !== nc) {
        var s = Na;
        Na = a, s !== null && ZC(s);
      }
      return o;
    }
    function ZC(e) {
      Na === null ? Na = e : Na.push.apply(Na, e);
    }
    function ex(e, t, a) {
      switch (t) {
        case Fo:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        case nc: {
          ic(e, Na, jo);
          break;
        }
        case Km: {
          if (qu(e, a), lf(a) && // do not delay if we're inside an act() scope
          !d2()) {
            var i = S1 + QC - fn();
            if (i > 10) {
              var o = Ds(e, K);
              if (o !== K)
                break;
              var s = e.suspendedLanes;
              if (!Eo(s, a)) {
                ca(), tp(e, s);
                break;
              }
              e.timeoutHandle = wg(ic.bind(null, e, Na, jo), i);
              break;
            }
          }
          ic(e, Na, jo);
          break;
        }
        case iv: {
          if (qu(e, a), mh(a))
            break;
          if (!d2()) {
            var f = hh(e, a), h = f, y = fn() - h, C = Ex(y) - y;
            if (C > 10) {
              e.timeoutHandle = wg(ic.bind(null, e, Na, jo), C);
              break;
            }
          }
          ic(e, Na, jo);
          break;
        }
        case YC: {
          ic(e, Na, jo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function tx(e) {
      for (var t = e; ; ) {
        if (t.flags & Cs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, h = s.value;
                try {
                  if (!Ae(f(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Cs && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function qu(e, t) {
      t = Su(t, ey), t = Su(t, ov), ep(e, t);
    }
    function KC(e) {
      if (w3(), (Tt & (_r | Si)) !== ir)
        throw new Error("Should not already be working.");
      Bo();
      var t = Ds(e, K);
      if (!Qr(t, Je))
        return Ma(e, fn()), null;
      var a = oy(e, t);
      if (e.tag !== Hu && a === nc) {
        var i = Xd(e);
        i !== K && (t = i, a = T1(e, i));
      }
      if (a === av) {
        var o = lv;
        throw ac(e, K), qu(e, t), Ma(e, fn()), o;
      }
      if (a === y1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ic(e, Na, jo), Ma(e, fn()), null;
    }
    function nx(e, t) {
      t !== K && (Eu(e, dt(t, Je)), Ma(e, fn()), (Tt & (_r | Si)) === ir && (sv(), Fu()));
    }
    function x1(e, t) {
      var a = Tt;
      Tt |= IC;
      try {
        return e(t);
      } finally {
        Tt = a, Tt === ir && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ki.isBatchingLegacy && (sv(), GS());
      }
    }
    function rx(e, t, a, i, o) {
      var s = Ta(), f = Or.transition;
      try {
        return Or.transition = null, Un(dr), e(t, a, i, o);
      } finally {
        Un(s), Or.transition = f, Tt === ir && sv();
      }
    }
    function Vo(e) {
      Wu !== null && Wu.tag === Hu && (Tt & (_r | Si)) === ir && Bo();
      var t = Tt;
      Tt |= IC;
      var a = Or.transition, i = Ta();
      try {
        return Or.transition = null, Un(dr), e ? e() : void 0;
      } finally {
        Un(i), Or.transition = a, Tt = t, (Tt & (_r | Si)) === ir && Fu();
      }
    }
    function JC() {
      return (Tt & (_r | Si)) !== ir;
    }
    function ly(e, t) {
      Gr(g1, Ql, e), Ql = dt(Ql, t);
    }
    function k1(e) {
      Ql = g1.current, Wr(g1, e);
    }
    function ac(e, t) {
      e.finishedWork = null, e.finishedLanes = K;
      var a = e.timeoutHandle;
      if (a !== bg && (e.timeoutHandle = bg, Lb(a)), Rn !== null)
        for (var i = Rn.return; i !== null; ) {
          var o = i.alternate;
          DC(o, i), i = i.return;
        }
      sa = e;
      var s = lc(e.current, null);
      return Rn = s, lr = Ql = t, or = Fo, lv = null, Jm = K, ov = K, ey = K, uv = null, Na = null, XR(), Ii.discardPendingWarnings(), s;
    }
    function e2(e, t) {
      do {
        var a = Rn;
        try {
          if (vm(), _E(), mn(), m1.current = null, a === null || a.return === null) {
            or = av, lv = t, Rn = null;
            return;
          }
          if (ct && a.mode & Ke && Qm(a, !0), pt)
            if (co(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              dh(a, i, lr);
            } else
              Vc(a, t, lr);
          k3(e, a.return, a, t, lr), a2(a);
        } catch (o) {
          t = o, Rn === a && a !== null ? (a = a.return, Rn = a) : a = Rn;
          continue;
        }
        return;
      } while (!0);
    }
    function t2() {
      var e = h1.current;
      return h1.current = Bm, e === null ? Bm : e;
    }
    function n2(e) {
      h1.current = e;
    }
    function ax() {
      S1 = fn();
    }
    function pv(e) {
      Jm = dt(e, Jm);
    }
    function ix() {
      or === Fo && (or = Km);
    }
    function D1() {
      (or === Fo || or === Km || or === nc) && (or = iv), sa !== null && (Os(Jm) || Os(ov)) && qu(sa, lr);
    }
    function lx(e) {
      or !== iv && (or = nc), uv === null ? uv = [e] : uv.push(e);
    }
    function ox() {
      return or === Fo;
    }
    function oy(e, t) {
      var a = Tt;
      Tt |= _r;
      var i = t2();
      if (sa !== e || lr !== t) {
        if (Jn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (vv(e, lr), o.clear()), sf(e, t);
        }
        jo = ap(), ac(e, t);
      }
      qa(t);
      do
        try {
          ux();
          break;
        } catch (s) {
          e2(e, s);
        }
      while (!0);
      if (vm(), Tt = a, n2(i), Rn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return vu(), sa = null, lr = K, or;
    }
    function ux() {
      for (; Rn !== null; )
        r2(Rn);
    }
    function sx(e, t) {
      var a = Tt;
      Tt |= _r;
      var i = t2();
      if (sa !== e || lr !== t) {
        if (Jn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (vv(e, lr), o.clear()), sf(e, t);
        }
        jo = ap(), sv(), ac(e, t);
      }
      qa(t);
      do
        try {
          cx();
          break;
        } catch (s) {
          e2(e, s);
        }
      while (!0);
      return vm(), n2(i), Tt = a, Rn !== null ? (Rs(), Fo) : (vu(), sa = null, lr = K, or);
    }
    function cx() {
      for (; Rn !== null && !Uc(); )
        r2(Rn);
    }
    function r2(e) {
      var t = e.alternate;
      zt(e);
      var a;
      (e.mode & Ke) !== Xe ? ($0(e), a = O1(t, e, Ql), Qm(e, !0)) : a = O1(t, e, Ql), mn(), e.memoizedProps = e.pendingProps, a === null ? a2(e) : Rn = a, m1.current = null;
    }
    function a2(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & na) === Qe) {
          zt(t);
          var o = void 0;
          if ((t.mode & Ke) === Xe ? o = kC(a, t, Ql) : ($0(t), o = kC(a, t, Ql), Qm(t, !1)), mn(), o !== null) {
            Rn = o;
            return;
          }
        } else {
          var s = iT(a, t);
          if (s !== null) {
            s.flags &= rh, Rn = s;
            return;
          }
          if ((t.mode & Ke) !== Xe) {
            Qm(t, !1);
            for (var f = t.actualDuration, h = t.child; h !== null; )
              f += h.actualDuration, h = h.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= na, i.subtreeFlags = Qe, i.deletions = null;
          else {
            or = y1, Rn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Rn = y;
          return;
        }
        t = i, Rn = t;
      } while (t !== null);
      or === Fo && (or = YC);
    }
    function ic(e, t, a) {
      var i = Ta(), o = Or.transition;
      try {
        Or.transition = null, Un(dr), fx(e, t, a, i);
      } finally {
        Or.transition = o, Un(i);
      }
      return null;
    }
    function fx(e, t, a, i) {
      do
        Bo();
      while (Wu !== null);
      if (wx(), (Tt & (_r | Si)) !== ir)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Hc(s), o === null)
        return Yd(), null;
      if (s === K && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = K, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Rt;
      var f = dt(o.lanes, o.childLanes);
      np(e, f), e === sa && (sa = null, Rn = null, lr = K), ((o.subtreeFlags & Ca) !== Qe || (o.flags & Ca) !== Qe) && (rc || (rc = !0, w1 = a, N1(si, function() {
        return Bo(), null;
      })));
      var h = (o.subtreeFlags & (fu | Pr | fr | Ca)) !== Qe, y = (o.flags & (fu | Pr | fr | Ca)) !== Qe;
      if (h || y) {
        var C = Or.transition;
        Or.transition = null;
        var b = Ta();
        Un(dr);
        var H = Tt;
        Tt |= Si, m1.current = null, cT(e, o), tC(), RT(e, o, s), Rb(e.containerInfo), e.current = o, ph(s), TT(o, e, s), pu(), lh(), Tt = H, Un(b), Or.transition = C;
      } else
        e.current = o, tC();
      var A = rc;
      if (rc ? (rc = !1, Wu = e, cv = s) : (Kf = 0, ry = null), f = e.pendingLanes, f === K && (Zf = null), A || u2(e.current, !1), Ui(o.stateNode, i), Jn && e.memoizedUpdaters.clear(), IT(), Ma(e, fn()), t !== null)
        for (var $ = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var X = t[Y], _e = X.stack, Ge = X.digest;
          $(X.value, {
            componentStack: _e,
            digest: Ge
          });
        }
      if (ty) {
        ty = !1;
        var Be = E1;
        throw E1 = null, Be;
      }
      return Qr(cv, Je) && e.tag !== Hu && Bo(), f = e.pendingLanes, Qr(f, Je) ? (E3(), e === b1 ? fv++ : (fv = 0, b1 = e)) : fv = 0, Fu(), Yd(), null;
    }
    function Bo() {
      if (Wu !== null) {
        var e = Ms(cv), t = Wy(Hi, e), a = Or.transition, i = Ta();
        try {
          return Or.transition = null, Un(t), px();
        } finally {
          Un(i), Or.transition = a;
        }
      }
      return !1;
    }
    function dx(e) {
      C1.push(e), rc || (rc = !0, N1(si, function() {
        return Bo(), null;
      }));
    }
    function px() {
      if (Wu === null)
        return !1;
      var e = w1;
      w1 = null;
      var t = Wu, a = cv;
      if (Wu = null, cv = K, (Tt & (_r | Si)) !== ir)
        throw new Error("Cannot flush passive effects while already rendering.");
      R1 = !0, ny = !1, vh(a);
      var i = Tt;
      Tt |= Si, NT(t.current), DT(t, t.current, a, e);
      {
        var o = C1;
        C1 = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          vT(t, f);
        }
      }
      bs(), u2(t.current, !0), Tt = i, Fu(), ny ? t === ry ? Kf++ : (Kf = 0, ry = t) : Kf = 0, R1 = !1, ny = !1, xl(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function i2(e) {
      return Zf !== null && Zf.has(e);
    }
    function vx(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function hx(e) {
      ty || (ty = !0, E1 = e);
    }
    var mx = hx;
    function l2(e, t, a) {
      var i = ec(a, t), o = rC(e, i, Je), s = Vu(e, o, Je), f = ca();
      s !== null && (Co(s, Je, f), Ma(s, f));
    }
    function nn(e, t, a) {
      if (oT(a), hv(!1), e.tag === F) {
        l2(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          l2(i, e, a);
          return;
        } else if (i.tag === L) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !i2(s)) {
            var f = ec(a, e), h = q0(i, f, Je), y = Vu(i, h, Je), C = ca();
            y !== null && (Co(y, Je, C), Ma(y, C));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function yx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ca();
      tp(e, a), xx(e), sa === e && Eo(lr, a) && (or === iv || or === Km && lf(lr) && fn() - S1 < QC ? ac(e, K) : ey = dt(ey, a)), Ma(e, o);
    }
    function o2(e, t) {
      t === Rt && (t = ZT(e));
      var a = ca(), i = _a(e, t);
      i !== null && (Co(i, t, a), Ma(i, a));
    }
    function gx(e) {
      var t = e.memoizedState, a = Rt;
      t !== null && (a = t.retryLane), o2(e, a);
    }
    function Sx(e, t) {
      var a = Rt, i;
      switch (e.tag) {
        case re:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ee:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), o2(e, a);
    }
    function Ex(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : WT(e / 1960) * 1960;
    }
    function Cx() {
      if (fv > qT)
        throw fv = 0, b1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kf > XT && (Kf = 0, ry = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function wx() {
      Ii.flushLegacyContextWarning(), Ii.flushPendingUnsafeLifecycleWarnings();
    }
    function u2(e, t) {
      zt(e), uy(e, Br, BT), t && uy(e, so, PT), uy(e, Br, jT), t && uy(e, so, VT), mn();
    }
    function uy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Qe ? i = i.child : ((i.flags & t) !== Qe && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var sy = null;
    function s2(e) {
      {
        if ((Tt & _r) !== ir || !(e.mode & gt))
          return;
        var t = e.tag;
        if (t !== M && t !== F && t !== L && t !== O && t !== he && t !== le && t !== ce)
          return;
        var a = lt(e) || "ReactComponent";
        if (sy !== null) {
          if (sy.has(a))
            return;
          sy.add(a);
        } else
          sy = /* @__PURE__ */ new Set([a]);
        var i = cn;
        try {
          zt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? zt(e) : mn();
        }
      }
    }
    var O1;
    {
      var bx = null;
      O1 = function(e, t, a) {
        var i = y2(bx, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (zR() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (vm(), _E(), DC(e, t), y2(t, i), t.mode & Ke && $0(t), uo(null, wC, null, e, t, a), Vy()) {
            var o = Ud();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var c2 = !1, _1;
    _1 = /* @__PURE__ */ new Set();
    function Rx(e) {
      if (zr && !y3())
        switch (e.tag) {
          case O:
          case he:
          case ce: {
            var t = Rn && lt(Rn) || "Unknown", a = t;
            if (!_1.has(a)) {
              _1.add(a);
              var i = lt(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case L: {
            c2 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), c2 = !0);
            break;
          }
        }
    }
    function vv(e, t) {
      if (Jn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rp(e, i, t);
        });
      }
    }
    var L1 = {};
    function N1(e, t) {
      {
        var a = Ki.current;
        return a !== null ? (a.push(t), L1) : Mc(e, t);
      }
    }
    function f2(e) {
      if (e !== L1)
        return ih(e);
    }
    function d2() {
      return Ki.current !== null;
    }
    function Tx(e) {
      {
        if (e.mode & gt) {
          if (!$C())
            return;
        } else if (!QT() || Tt !== ir || e.tag !== O && e.tag !== he && e.tag !== ce)
          return;
        if (Ki.current === null) {
          var t = cn;
          try {
            zt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, lt(e));
          } finally {
            t ? zt(e) : mn();
          }
        }
      }
    }
    function xx(e) {
      e.tag !== Hu && $C() && Ki.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hv(e) {
      qC = e;
    }
    var Ei = null, Jf = null, kx = function(e) {
      Ei = e;
    };
    function ed(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        return t === void 0 ? e : t.current;
      }
    }
    function M1(e) {
      return ed(e);
    }
    function U1(e) {
      {
        if (Ei === null)
          return e;
        var t = Ei(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ed(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: hn,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function p2(e, t) {
      {
        if (Ei === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case L: {
            typeof i == "function" && (o = !0);
            break;
          }
          case O: {
            (typeof i == "function" || s === Zn) && (o = !0);
            break;
          }
          case he: {
            (s === hn || s === Zn) && (o = !0);
            break;
          }
          case le:
          case ce: {
            (s === il || s === Zn) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Ei(a);
          if (f !== void 0 && f === Ei(i))
            return !0;
        }
        return !1;
      }
    }
    function v2(e) {
      {
        if (Ei === null || typeof WeakSet != "function")
          return;
        Jf === null && (Jf = /* @__PURE__ */ new WeakSet()), Jf.add(e);
      }
    }
    var Dx = function(e, t) {
      {
        if (Ei === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Bo(), Vo(function() {
          A1(e.current, i, a);
        });
      }
    }, Ox = function(e, t) {
      {
        if (e.context !== Za)
          return;
        Bo(), Vo(function() {
          mv(t, e, null, null);
        });
      }
    };
    function A1(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case O:
          case ce:
          case L:
            y = h;
            break;
          case he:
            y = h.render;
            break;
        }
        if (Ei === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, b = !1;
        if (y !== null) {
          var H = Ei(y);
          H !== void 0 && (a.has(H) ? b = !0 : t.has(H) && (f === L ? b = !0 : C = !0));
        }
        if (Jf !== null && (Jf.has(e) || i !== null && Jf.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || C) {
          var A = _a(e, Je);
          A !== null && ur(A, e, Je, Wt);
        }
        o !== null && !b && A1(o, t, a), s !== null && A1(s, t, a);
      }
    }
    var _x = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return z1(e.current, i, a), a;
      }
    };
    function z1(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, h = null;
        switch (s) {
          case O:
          case ce:
          case L:
            h = f;
            break;
          case he:
            h = f.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? Lx(e, a) : i !== null && z1(i, t, a), o !== null && z1(o, t, a);
      }
    }
    function Lx(e, t) {
      {
        var a = Nx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Q:
              t.add(i.stateNode);
              return;
            case G:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Nx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Q)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var H1;
    {
      H1 = !1;
      try {
        var h2 = Object.preventExtensions({});
      } catch {
        H1 = !0;
      }
    }
    function Mx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Qe, this.subtreeFlags = Qe, this.deletions = null, this.lanes = K, this.childLanes = K, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !H1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ka = function(e, t, a, i) {
      return new Mx(e, t, a, i);
    };
    function F1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ux(e) {
      return typeof e == "function" && !F1(e) && e.defaultProps === void 0;
    }
    function Ax(e) {
      if (typeof e == "function")
        return F1(e) ? L : O;
      if (e != null) {
        var t = e.$$typeof;
        if (t === hn)
          return he;
        if (t === il)
          return le;
      }
      return M;
    }
    function lc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ka(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Qe, a.subtreeFlags = Qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Kn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case O:
        case ce:
          a.type = ed(e.type);
          break;
        case L:
          a.type = M1(e.type);
          break;
        case he:
          a.type = U1(e.type);
          break;
      }
      return a;
    }
    function zx(e, t) {
      e.flags &= Kn | Kt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = K, e.lanes = t, e.child = null, e.subtreeFlags = Qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Hx(e, t, a) {
      var i;
      return e === lm ? (i = gt, t === !0 && (i |= dn, i |= ba)) : i = Xe, Jn && (i |= Ke), Ka(F, null, null, i);
    }
    function j1(e, t, a, i, o, s) {
      var f = M, h = e;
      if (typeof e == "function")
        F1(e) ? (f = L, h = M1(h)) : h = ed(h);
      else if (typeof e == "string")
        f = Q;
      else {
        e:
          switch (e) {
            case Ba:
              return Xu(a.children, o, s, t);
            case rl:
              f = te, o |= dn, (o & gt) !== Xe && (o |= ba);
              break;
            case al:
              return Fx(a, o, s, t);
            case va:
              return jx(a, o, s, t);
            case Kl:
              return Vx(a, o, s, t);
            case ns:
              return m2(a, o, s, t);
            case vc:
            case dc:
            case ud:
            case sd:
            case pc:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Qo:
                    f = ke;
                    break e;
                  case ts:
                    f = ve;
                    break e;
                  case hn:
                    f = he, h = U1(h);
                    break e;
                  case il:
                    f = le;
                    break e;
                  case Zn:
                    f = Fe, h = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? lt(i) : null;
                C && (y += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      }
      var b = Ka(f, a, t, o);
      return b.elementType = e, b.type = h, b.lanes = s, b._debugOwner = i, b;
    }
    function V1(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, h = j1(o, s, f, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function Xu(e, t, a, i) {
      var o = Ka(se, e, i, t);
      return o.lanes = a, o;
    }
    function Fx(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = Ka(me, e, i, t | Ke);
      return o.elementType = al, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function jx(e, t, a, i) {
      var o = Ka(re, e, i, t);
      return o.elementType = va, o.lanes = a, o;
    }
    function Vx(e, t, a, i) {
      var o = Ka(Ee, e, i, t);
      return o.elementType = Kl, o.lanes = a, o;
    }
    function m2(e, t, a, i) {
      var o = Ka(Ne, e, i, t);
      o.elementType = ns, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function B1(e, t, a) {
      var i = Ka(ee, e, null, t);
      return i.lanes = a, i;
    }
    function Bx() {
      var e = Ka(Q, null, null, Xe);
      return e.elementType = "DELETED", e;
    }
    function Px(e) {
      var t = Ka(be, null, null, Xe);
      return t.stateNode = e, t;
    }
    function P1(e, t, a) {
      var i = e.children !== null ? e.children : [], o = Ka(G, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function y2(e, t) {
      return e === null && (e = Ka(M, null, null, Xe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function $x(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = bg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Rt, this.eventTimes = uf(K), this.expirationTimes = uf(Wt), this.pendingLanes = K, this.suspendedLanes = K, this.pingedLanes = K, this.expiredLanes = K, this.mutableReadLanes = K, this.finishedLanes = K, this.entangledLanes = K, this.entanglements = uf(K), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < en; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case lm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function g2(e, t, a, i, o, s, f, h, y, C) {
      var b = new $x(e, t, a, h, y), H = Hx(t, s);
      b.current = H, H.stateNode = b;
      {
        var A = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        H.memoizedState = A;
      }
      return Xg(H), b;
    }
    var $1 = "18.2.0";
    function Ix(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ja(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ta,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var I1, Y1;
    I1 = !1, Y1 = {};
    function S2(e) {
      if (!e)
        return Za;
      var t = ga(e), a = kR(t);
      if (t.tag === L) {
        var i = t.type;
        if (jl(i))
          return YS(t, i, a);
      }
      return a;
    }
    function Yx(e, t) {
      {
        var a = ga(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = wa(a);
        if (o === null)
          return null;
        if (o.mode & dn) {
          var s = lt(a) || "Component";
          if (!Y1[s]) {
            Y1[s] = !0;
            var f = cn;
            try {
              zt(o), a.mode & dn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? zt(f) : mn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function E2(e, t, a, i, o, s, f, h) {
      var y = !1, C = null;
      return g2(e, t, y, C, a, i, o, s, f);
    }
    function C2(e, t, a, i, o, s, f, h, y, C) {
      var b = !0, H = g2(a, i, b, e, o, s, f, h, y);
      H.context = S2(null);
      var A = H.current, $ = ca(), Y = Gu(A), X = zo($, Y);
      return X.callback = t ?? null, Vu(A, X, Y), KT(H, Y, $), H;
    }
    function mv(e, t, a, i) {
      oh(t, e);
      var o = t.current, s = ca(), f = Gu(o);
      fo(f);
      var h = S2(a);
      t.context === null ? t.context = h : t.pendingContext = h, zr && cn !== null && !I1 && (I1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, lt(cn) || "Unknown"));
      var y = zo(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = Vu(o, y, f);
      return C !== null && (ur(C, o, f, s), Sm(C, o, f)), f;
    }
    function cy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Qx(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (An(t)) {
            var a = $y(t);
            nx(t, a);
          }
          break;
        }
        case re: {
          Vo(function() {
            var o = _a(e, Je);
            if (o !== null) {
              var s = ca();
              ur(o, e, Je, s);
            }
          });
          var i = Je;
          Q1(e, i);
          break;
        }
      }
    }
    function w2(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Sh(a.retryLane, t));
    }
    function Q1(e, t) {
      w2(e, t);
      var a = e.alternate;
      a && w2(a, t);
    }
    function Wx(e) {
      if (e.tag === re) {
        var t = hu, a = _a(e, t);
        if (a !== null) {
          var i = ca();
          ur(a, e, t, i);
        }
        Q1(e, t);
      }
    }
    function Gx(e) {
      if (e.tag === re) {
        var t = Gu(e), a = _a(e, t);
        if (a !== null) {
          var i = ca();
          ur(a, e, t, i);
        }
        Q1(e, t);
      }
    }
    function b2(e) {
      var t = ah(e);
      return t === null ? null : t.stateNode;
    }
    var R2 = function(e) {
      return null;
    };
    function qx(e) {
      return R2(e);
    }
    var T2 = function(e) {
      return !1;
    };
    function Xx(e) {
      return T2(e);
    }
    var x2 = null, k2 = null, D2 = null, O2 = null, _2 = null, L2 = null, N2 = null, M2 = null, U2 = null;
    {
      var A2 = function(e, t, a) {
        var i = t[a], o = bt(e) ? e.slice() : mt({}, e);
        return a + 1 === t.length ? (bt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = A2(e[i], t, a + 1), o);
      }, z2 = function(e, t) {
        return A2(e, t, 0);
      }, H2 = function(e, t, a, i) {
        var o = t[i], s = bt(e) ? e.slice() : mt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], bt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = H2(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, F2 = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return H2(e, t, a, 0);
      }, j2 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = bt(e) ? e.slice() : mt({}, e);
        return s[o] = j2(e[o], t, a + 1, i), s;
      }, V2 = function(e, t, a) {
        return j2(e, t, 0, a);
      }, W1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x2 = function(e, t, a, i) {
        var o = W1(e, t);
        if (o !== null) {
          var s = V2(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var f = _a(e, Je);
          f !== null && ur(f, e, Je, Wt);
        }
      }, k2 = function(e, t, a) {
        var i = W1(e, t);
        if (i !== null) {
          var o = z2(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = mt({}, e.memoizedProps);
          var s = _a(e, Je);
          s !== null && ur(s, e, Je, Wt);
        }
      }, D2 = function(e, t, a, i) {
        var o = W1(e, t);
        if (o !== null) {
          var s = F2(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = mt({}, e.memoizedProps);
          var f = _a(e, Je);
          f !== null && ur(f, e, Je, Wt);
        }
      }, O2 = function(e, t, a) {
        e.pendingProps = V2(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = _a(e, Je);
        i !== null && ur(i, e, Je, Wt);
      }, _2 = function(e, t) {
        e.pendingProps = z2(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = _a(e, Je);
        a !== null && ur(a, e, Je, Wt);
      }, L2 = function(e, t, a) {
        e.pendingProps = F2(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = _a(e, Je);
        i !== null && ur(i, e, Je, Wt);
      }, N2 = function(e) {
        var t = _a(e, Je);
        t !== null && ur(t, e, Je, Wt);
      }, M2 = function(e) {
        R2 = e;
      }, U2 = function(e) {
        T2 = e;
      };
    }
    function Zx(e) {
      var t = wa(e);
      return t === null ? null : t.stateNode;
    }
    function Kx(e) {
      return null;
    }
    function Jx() {
      return cn;
    }
    function e5(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return $d({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x2,
        overrideHookStateDeletePath: k2,
        overrideHookStateRenamePath: D2,
        overrideProps: O2,
        overridePropsDeletePath: _2,
        overridePropsRenamePath: L2,
        setErrorHandler: M2,
        setSuspenseHandler: U2,
        scheduleUpdate: N2,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Zx,
        findFiberByHostInstance: t || Kx,
        // React Refresh
        findHostInstancesForRefresh: _x,
        scheduleRefresh: Dx,
        scheduleRoot: Ox,
        setRefreshHandler: kx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Jx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $1
      });
    }
    var B2 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function G1(e) {
      this._internalRoot = e;
    }
    fy.prototype.render = G1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : dy(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== xn) {
          var i = b2(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mv(e, t, null, null);
    }, fy.prototype.unmount = G1.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Vo(function() {
          mv(null, e, null, null);
        }), VS(t);
      }
    };
    function t5(e, t) {
      if (!dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      P2(e);
      var a = !1, i = !1, o = "", s = B2;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === nl && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = E2(e, lm, null, a, i, o, s);
      Jh(f.current, e);
      var h = e.nodeType === xn ? e.parentNode : e;
      return Rp(h), new G1(f);
    }
    function fy(e) {
      this._internalRoot = e;
    }
    function n5(e) {
      e && kh(e);
    }
    fy.prototype.unstable_scheduleHydration = n5;
    function r5(e, t, a) {
      if (!dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      P2(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, h = "", y = B2;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = C2(t, null, e, lm, i, s, f, h, y);
      if (Jh(C.current, e), Rp(e), o)
        for (var b = 0; b < o.length; b++) {
          var H = o[b];
          f3(C, H);
        }
      return new fy(C);
    }
    function dy(e) {
      return !!(e && (e.nodeType === Fr || e.nodeType === Qa || e.nodeType === no || !we));
    }
    function yv(e) {
      return !!(e && (e.nodeType === Fr || e.nodeType === Qa || e.nodeType === no || e.nodeType === xn && e.nodeValue === " react-mount-point-unstable "));
    }
    function P2(e) {
      e.nodeType === Fr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ap(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var a5 = m.ReactCurrentOwner, $2;
    $2 = function(e) {
      if (e._reactRootContainer && e.nodeType !== xn) {
        var t = b2(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = q1(e), o = !!(i && Au(i));
      o && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Fr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function q1(e) {
      return e ? e.nodeType === Qa ? e.documentElement : e.firstChild : null;
    }
    function I2() {
    }
    function i5(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = cy(f);
            s.call(A);
          };
        }
        var f = C2(
          t,
          i,
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I2
        );
        e._reactRootContainer = f, Jh(f.current, e);
        var h = e.nodeType === xn ? e.parentNode : e;
        return Rp(h), Vo(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var A = cy(b);
            C.call(A);
          };
        }
        var b = E2(
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          I2
        );
        e._reactRootContainer = b, Jh(b.current, e);
        var H = e.nodeType === xn ? e.parentNode : e;
        return Rp(H), Vo(function() {
          mv(t, b, a, i);
        }), b;
      }
    }
    function l5(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function py(e, t, a, i, o) {
      $2(a), l5(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = i5(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var h = o;
          o = function() {
            var y = cy(f);
            h.call(y);
          };
        }
        mv(t, f, e, o);
      }
      return cy(f);
    }
    function o5(e) {
      {
        var t = a5.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Fr ? e : Yx(e, "findDOMNode");
    }
    function u5(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return py(null, e, t, !0, a);
    }
    function s5(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return py(null, e, t, !1, a);
    }
    function c5(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Es(e))
        throw new Error("parentComponent must be a valid React Component");
      return py(e, t, a, !1, i);
    }
    function f5(e) {
      if (!yv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ap(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = q1(e), i = a && !Au(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Vo(function() {
          py(null, null, e, !1, function() {
            e._reactRootContainer = null, VS(e);
          });
        }), !0;
      } else {
        {
          var o = q1(e), s = !!(o && Au(o)), f = e.nodeType === Fr && yv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Me(Qx), Ch(Wx), As(Gx), lp(Ta), bh(Ns), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), th(vb), Dc(x1, rx, Vo);
    function d5(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!dy(t))
        throw new Error("Target container is not a DOM element.");
      return Ix(e, t, null, a);
    }
    function p5(e, t, a, i) {
      return c5(e, t, a, i);
    }
    var X1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Au, Lf, em, kc, ys, x1]
    };
    function v5(e, t) {
      return X1.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), t5(e, t);
    }
    function h5(e, t, a) {
      return X1.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), r5(e, t, a);
    }
    function m5(e) {
      return JC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Vo(e);
    }
    var y5 = e5({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: $1,
      rendererPackageName: "react-dom"
    });
    if (!y5 && rn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Y2 = window.location.protocol;
      /^(https?|file):$/.test(Y2) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Y2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1, Aa.createPortal = d5, Aa.createRoot = v5, Aa.findDOMNode = o5, Aa.flushSync = m5, Aa.hydrate = u5, Aa.hydrateRoot = h5, Aa.render = s5, Aa.unmountComponentAtNode = f5, Aa.unstable_batchedUpdates = x1, Aa.unstable_renderSubtreeIntoContainer = p5, Aa.version = $1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Aa;
}
(function(d) {
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (m) {
        console.error(m);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (v(), d.exports = j5()) : d.exports = V5();
})(A5);
var za = "top", Ci = "bottom", wi = "right", Ha = "left", by = "auto", kv = [za, Ci, wi, Ha], rd = "start", Tv = "end", B5 = "clippingParents", Sw = "viewport", Sv = "popper", P5 = "reference", tw = /* @__PURE__ */ kv.reduce(function(d, v) {
  return d.concat([v + "-" + rd, v + "-" + Tv]);
}, []), Ew = /* @__PURE__ */ [].concat(kv, [by]).reduce(function(d, v) {
  return d.concat([v, v + "-" + rd, v + "-" + Tv]);
}, []), $5 = "beforeRead", I5 = "read", Y5 = "afterRead", Q5 = "beforeMain", W5 = "main", G5 = "afterMain", q5 = "beforeWrite", X5 = "write", Z5 = "afterWrite", eS = [$5, I5, Y5, Q5, W5, G5, q5, X5, Z5];
function ql(d) {
  return d ? (d.nodeName || "").toLowerCase() : null;
}
function ti(d) {
  if (d == null)
    return window;
  if (d.toString() !== "[object Window]") {
    var v = d.ownerDocument;
    return v && v.defaultView || window;
  }
  return d;
}
function sc(d) {
  var v = ti(d).Element;
  return d instanceof v || d instanceof Element;
}
function ei(d) {
  var v = ti(d).HTMLElement;
  return d instanceof v || d instanceof HTMLElement;
}
function iS(d) {
  if (typeof ShadowRoot > "u")
    return !1;
  var v = ti(d).ShadowRoot;
  return d instanceof v || d instanceof ShadowRoot;
}
function K5(d) {
  var v = d.state;
  Object.keys(v.elements).forEach(function(m) {
    var w = v.styles[m] || {}, T = v.attributes[m] || {}, k = v.elements[m];
    !ei(k) || !ql(k) || (Object.assign(k.style, w), Object.keys(T).forEach(function(S) {
      var U = T[S];
      U === !1 ? k.removeAttribute(S) : k.setAttribute(S, U === !0 ? "" : U);
    }));
  });
}
function J5(d) {
  var v = d.state, m = {
    popper: {
      position: v.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(v.elements.popper.style, m.popper), v.styles = m, v.elements.arrow && Object.assign(v.elements.arrow.style, m.arrow), function() {
    Object.keys(v.elements).forEach(function(w) {
      var T = v.elements[w], k = v.attributes[w] || {}, S = Object.keys(v.styles.hasOwnProperty(w) ? v.styles[w] : m[w]), U = S.reduce(function(O, L) {
        return O[L] = "", O;
      }, {});
      !ei(T) || !ql(T) || (Object.assign(T.style, U), Object.keys(k).forEach(function(O) {
        T.removeAttribute(O);
      }));
    });
  };
}
const e6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: K5,
  effect: J5,
  requires: ["computeStyles"]
};
function Ji(d) {
  return d.split("-")[0];
}
var uc = Math.max, Sy = Math.min, ad = Math.round;
function tS() {
  var d = navigator.userAgentData;
  return d != null && d.brands && Array.isArray(d.brands) ? d.brands.map(function(v) {
    return v.brand + "/" + v.version;
  }).join(" ") : navigator.userAgent;
}
function Cw() {
  return !/^((?!chrome|android).)*safari/i.test(tS());
}
function id(d, v, m) {
  v === void 0 && (v = !1), m === void 0 && (m = !1);
  var w = d.getBoundingClientRect(), T = 1, k = 1;
  v && ei(d) && (T = d.offsetWidth > 0 && ad(w.width) / d.offsetWidth || 1, k = d.offsetHeight > 0 && ad(w.height) / d.offsetHeight || 1);
  var S = sc(d) ? ti(d) : window, U = S.visualViewport, O = !Cw() && m, L = (w.left + (O && U ? U.offsetLeft : 0)) / T, M = (w.top + (O && U ? U.offsetTop : 0)) / k, F = w.width / T, G = w.height / k;
  return {
    width: F,
    height: G,
    top: M,
    right: L + F,
    bottom: M + G,
    left: L,
    x: L,
    y: M
  };
}
function lS(d) {
  var v = id(d), m = d.offsetWidth, w = d.offsetHeight;
  return Math.abs(v.width - m) <= 1 && (m = v.width), Math.abs(v.height - w) <= 1 && (w = v.height), {
    x: d.offsetLeft,
    y: d.offsetTop,
    width: m,
    height: w
  };
}
function ww(d, v) {
  var m = v.getRootNode && v.getRootNode();
  if (d.contains(v))
    return !0;
  if (m && iS(m)) {
    var w = v;
    do {
      if (w && d.isSameNode(w))
        return !0;
      w = w.parentNode || w.host;
    } while (w);
  }
  return !1;
}
function el(d) {
  return ti(d).getComputedStyle(d);
}
function t6(d) {
  return ["table", "td", "th"].indexOf(ql(d)) >= 0;
}
function Ju(d) {
  return ((sc(d) ? d.ownerDocument : (
    // $FlowFixMe[prop-missing]
    d.document
  )) || window.document).documentElement;
}
function Ry(d) {
  return ql(d) === "html" ? d : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    d.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    d.parentNode || // DOM Element detected
    (iS(d) ? d.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ju(d)
  );
}
function nw(d) {
  return !ei(d) || // https://github.com/popperjs/popper-core/issues/837
  el(d).position === "fixed" ? null : d.offsetParent;
}
function n6(d) {
  var v = /firefox/i.test(tS()), m = /Trident/i.test(tS());
  if (m && ei(d)) {
    var w = el(d);
    if (w.position === "fixed")
      return null;
  }
  var T = Ry(d);
  for (iS(T) && (T = T.host); ei(T) && ["html", "body"].indexOf(ql(T)) < 0; ) {
    var k = el(T);
    if (k.transform !== "none" || k.perspective !== "none" || k.contain === "paint" || ["transform", "perspective"].indexOf(k.willChange) !== -1 || v && k.willChange === "filter" || v && k.filter && k.filter !== "none")
      return T;
    T = T.parentNode;
  }
  return null;
}
function Dv(d) {
  for (var v = ti(d), m = nw(d); m && t6(m) && el(m).position === "static"; )
    m = nw(m);
  return m && (ql(m) === "html" || ql(m) === "body" && el(m).position === "static") ? v : m || n6(d) || v;
}
function oS(d) {
  return ["top", "bottom"].indexOf(d) >= 0 ? "x" : "y";
}
function bv(d, v, m) {
  return uc(d, Sy(v, m));
}
function r6(d, v, m) {
  var w = bv(d, v, m);
  return w > m ? m : w;
}
function bw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rw(d) {
  return Object.assign({}, bw(), d);
}
function Tw(d, v) {
  return v.reduce(function(m, w) {
    return m[w] = d, m;
  }, {});
}
var a6 = function(v, m) {
  return v = typeof v == "function" ? v(Object.assign({}, m.rects, {
    placement: m.placement
  })) : v, Rw(typeof v != "number" ? v : Tw(v, kv));
};
function i6(d) {
  var v, m = d.state, w = d.name, T = d.options, k = m.elements.arrow, S = m.modifiersData.popperOffsets, U = Ji(m.placement), O = oS(U), L = [Ha, wi].indexOf(U) >= 0, M = L ? "height" : "width";
  if (!(!k || !S)) {
    var F = a6(T.padding, m), G = lS(k), Q = O === "y" ? za : Ha, ee = O === "y" ? Ci : wi, se = m.rects.reference[M] + m.rects.reference[O] - S[O] - m.rects.popper[M], te = S[O] - m.rects.reference[O], ve = Dv(k), ke = ve ? O === "y" ? ve.clientHeight || 0 : ve.clientWidth || 0 : 0, he = se / 2 - te / 2, me = F[Q], re = ke - G[M] - F[ee], le = ke / 2 - G[M] / 2 + he, ce = bv(me, le, re), Fe = O;
    m.modifiersData[w] = (v = {}, v[Fe] = ce, v.centerOffset = ce - le, v);
  }
}
function l6(d) {
  var v = d.state, m = d.options, w = m.element, T = w === void 0 ? "[data-popper-arrow]" : w;
  if (T != null && !(typeof T == "string" && (T = v.elements.popper.querySelector(T), !T))) {
    if (process.env.NODE_ENV !== "production" && (ei(T) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !ww(v.elements.popper, T)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    v.elements.arrow = T;
  }
}
const o6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: i6,
  effect: l6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ld(d) {
  return d.split("-")[1];
}
var u6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function s6(d, v) {
  var m = d.x, w = d.y, T = v.devicePixelRatio || 1;
  return {
    x: ad(m * T) / T || 0,
    y: ad(w * T) / T || 0
  };
}
function rw(d) {
  var v, m = d.popper, w = d.popperRect, T = d.placement, k = d.variation, S = d.offsets, U = d.position, O = d.gpuAcceleration, L = d.adaptive, M = d.roundOffsets, F = d.isFixed, G = S.x, Q = G === void 0 ? 0 : G, ee = S.y, se = ee === void 0 ? 0 : ee, te = typeof M == "function" ? M({
    x: Q,
    y: se
  }) : {
    x: Q,
    y: se
  };
  Q = te.x, se = te.y;
  var ve = S.hasOwnProperty("x"), ke = S.hasOwnProperty("y"), he = Ha, me = za, re = window;
  if (L) {
    var le = Dv(m), ce = "clientHeight", Fe = "clientWidth";
    if (le === ti(m) && (le = Ju(m), el(le).position !== "static" && U === "absolute" && (ce = "scrollHeight", Fe = "scrollWidth")), le = le, T === za || (T === Ha || T === wi) && k === Tv) {
      me = Ci;
      var Pe = F && le === re && re.visualViewport ? re.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        le[ce]
      );
      se -= Pe - w.height, se *= O ? 1 : -1;
    }
    if (T === Ha || (T === za || T === Ci) && k === Tv) {
      he = wi;
      var be = F && le === re && re.visualViewport ? re.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        le[Fe]
      );
      Q -= be - w.width, Q *= O ? 1 : -1;
    }
  }
  var Ee = Object.assign({
    position: U
  }, L && u6), et = M === !0 ? s6({
    x: Q,
    y: se
  }, ti(m)) : {
    x: Q,
    y: se
  };
  if (Q = et.x, se = et.y, O) {
    var Ne;
    return Object.assign({}, Ee, (Ne = {}, Ne[me] = ke ? "0" : "", Ne[he] = ve ? "0" : "", Ne.transform = (re.devicePixelRatio || 1) <= 1 ? "translate(" + Q + "px, " + se + "px)" : "translate3d(" + Q + "px, " + se + "px, 0)", Ne));
  }
  return Object.assign({}, Ee, (v = {}, v[me] = ke ? se + "px" : "", v[he] = ve ? Q + "px" : "", v.transform = "", v));
}
function c6(d) {
  var v = d.state, m = d.options, w = m.gpuAcceleration, T = w === void 0 ? !0 : w, k = m.adaptive, S = k === void 0 ? !0 : k, U = m.roundOffsets, O = U === void 0 ? !0 : U;
  if (process.env.NODE_ENV !== "production") {
    var L = el(v.elements.popper).transitionProperty || "";
    S && ["transform", "top", "right", "bottom", "left"].some(function(F) {
      return L.indexOf(F) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var M = {
    placement: Ji(v.placement),
    variation: ld(v.placement),
    popper: v.elements.popper,
    popperRect: v.rects.popper,
    gpuAcceleration: T,
    isFixed: v.options.strategy === "fixed"
  };
  v.modifiersData.popperOffsets != null && (v.styles.popper = Object.assign({}, v.styles.popper, rw(Object.assign({}, M, {
    offsets: v.modifiersData.popperOffsets,
    position: v.options.strategy,
    adaptive: S,
    roundOffsets: O
  })))), v.modifiersData.arrow != null && (v.styles.arrow = Object.assign({}, v.styles.arrow, rw(Object.assign({}, M, {
    offsets: v.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: O
  })))), v.attributes.popper = Object.assign({}, v.attributes.popper, {
    "data-popper-placement": v.placement
  });
}
const f6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: c6,
  data: {}
};
var vy = {
  passive: !0
};
function d6(d) {
  var v = d.state, m = d.instance, w = d.options, T = w.scroll, k = T === void 0 ? !0 : T, S = w.resize, U = S === void 0 ? !0 : S, O = ti(v.elements.popper), L = [].concat(v.scrollParents.reference, v.scrollParents.popper);
  return k && L.forEach(function(M) {
    M.addEventListener("scroll", m.update, vy);
  }), U && O.addEventListener("resize", m.update, vy), function() {
    k && L.forEach(function(M) {
      M.removeEventListener("scroll", m.update, vy);
    }), U && O.removeEventListener("resize", m.update, vy);
  };
}
const p6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: d6,
  data: {}
};
var v6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hy(d) {
  return d.replace(/left|right|bottom|top/g, function(v) {
    return v6[v];
  });
}
var h6 = {
  start: "end",
  end: "start"
};
function aw(d) {
  return d.replace(/start|end/g, function(v) {
    return h6[v];
  });
}
function uS(d) {
  var v = ti(d), m = v.pageXOffset, w = v.pageYOffset;
  return {
    scrollLeft: m,
    scrollTop: w
  };
}
function sS(d) {
  return id(Ju(d)).left + uS(d).scrollLeft;
}
function m6(d, v) {
  var m = ti(d), w = Ju(d), T = m.visualViewport, k = w.clientWidth, S = w.clientHeight, U = 0, O = 0;
  if (T) {
    k = T.width, S = T.height;
    var L = Cw();
    (L || !L && v === "fixed") && (U = T.offsetLeft, O = T.offsetTop);
  }
  return {
    width: k,
    height: S,
    x: U + sS(d),
    y: O
  };
}
function y6(d) {
  var v, m = Ju(d), w = uS(d), T = (v = d.ownerDocument) == null ? void 0 : v.body, k = uc(m.scrollWidth, m.clientWidth, T ? T.scrollWidth : 0, T ? T.clientWidth : 0), S = uc(m.scrollHeight, m.clientHeight, T ? T.scrollHeight : 0, T ? T.clientHeight : 0), U = -w.scrollLeft + sS(d), O = -w.scrollTop;
  return el(T || m).direction === "rtl" && (U += uc(m.clientWidth, T ? T.clientWidth : 0) - k), {
    width: k,
    height: S,
    x: U,
    y: O
  };
}
function cS(d) {
  var v = el(d), m = v.overflow, w = v.overflowX, T = v.overflowY;
  return /auto|scroll|overlay|hidden/.test(m + T + w);
}
function xw(d) {
  return ["html", "body", "#document"].indexOf(ql(d)) >= 0 ? d.ownerDocument.body : ei(d) && cS(d) ? d : xw(Ry(d));
}
function Rv(d, v) {
  var m;
  v === void 0 && (v = []);
  var w = xw(d), T = w === ((m = d.ownerDocument) == null ? void 0 : m.body), k = ti(w), S = T ? [k].concat(k.visualViewport || [], cS(w) ? w : []) : w, U = v.concat(S);
  return T ? U : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    U.concat(Rv(Ry(S)))
  );
}
function nS(d) {
  return Object.assign({}, d, {
    left: d.x,
    top: d.y,
    right: d.x + d.width,
    bottom: d.y + d.height
  });
}
function g6(d, v) {
  var m = id(d, !1, v === "fixed");
  return m.top = m.top + d.clientTop, m.left = m.left + d.clientLeft, m.bottom = m.top + d.clientHeight, m.right = m.left + d.clientWidth, m.width = d.clientWidth, m.height = d.clientHeight, m.x = m.left, m.y = m.top, m;
}
function iw(d, v, m) {
  return v === Sw ? nS(m6(d, m)) : sc(v) ? g6(v, m) : nS(y6(Ju(d)));
}
function S6(d) {
  var v = Rv(Ry(d)), m = ["absolute", "fixed"].indexOf(el(d).position) >= 0, w = m && ei(d) ? Dv(d) : d;
  return sc(w) ? v.filter(function(T) {
    return sc(T) && ww(T, w) && ql(T) !== "body";
  }) : [];
}
function E6(d, v, m, w) {
  var T = v === "clippingParents" ? S6(d) : [].concat(v), k = [].concat(T, [m]), S = k[0], U = k.reduce(function(O, L) {
    var M = iw(d, L, w);
    return O.top = uc(M.top, O.top), O.right = Sy(M.right, O.right), O.bottom = Sy(M.bottom, O.bottom), O.left = uc(M.left, O.left), O;
  }, iw(d, S, w));
  return U.width = U.right - U.left, U.height = U.bottom - U.top, U.x = U.left, U.y = U.top, U;
}
function kw(d) {
  var v = d.reference, m = d.element, w = d.placement, T = w ? Ji(w) : null, k = w ? ld(w) : null, S = v.x + v.width / 2 - m.width / 2, U = v.y + v.height / 2 - m.height / 2, O;
  switch (T) {
    case za:
      O = {
        x: S,
        y: v.y - m.height
      };
      break;
    case Ci:
      O = {
        x: S,
        y: v.y + v.height
      };
      break;
    case wi:
      O = {
        x: v.x + v.width,
        y: U
      };
      break;
    case Ha:
      O = {
        x: v.x - m.width,
        y: U
      };
      break;
    default:
      O = {
        x: v.x,
        y: v.y
      };
  }
  var L = T ? oS(T) : null;
  if (L != null) {
    var M = L === "y" ? "height" : "width";
    switch (k) {
      case rd:
        O[L] = O[L] - (v[M] / 2 - m[M] / 2);
        break;
      case Tv:
        O[L] = O[L] + (v[M] / 2 - m[M] / 2);
        break;
    }
  }
  return O;
}
function xv(d, v) {
  v === void 0 && (v = {});
  var m = v, w = m.placement, T = w === void 0 ? d.placement : w, k = m.strategy, S = k === void 0 ? d.strategy : k, U = m.boundary, O = U === void 0 ? B5 : U, L = m.rootBoundary, M = L === void 0 ? Sw : L, F = m.elementContext, G = F === void 0 ? Sv : F, Q = m.altBoundary, ee = Q === void 0 ? !1 : Q, se = m.padding, te = se === void 0 ? 0 : se, ve = Rw(typeof te != "number" ? te : Tw(te, kv)), ke = G === Sv ? P5 : Sv, he = d.rects.popper, me = d.elements[ee ? ke : G], re = E6(sc(me) ? me : me.contextElement || Ju(d.elements.popper), O, M, S), le = id(d.elements.reference), ce = kw({
    reference: le,
    element: he,
    strategy: "absolute",
    placement: T
  }), Fe = nS(Object.assign({}, he, ce)), Pe = G === Sv ? Fe : le, be = {
    top: re.top - Pe.top + ve.top,
    bottom: Pe.bottom - re.bottom + ve.bottom,
    left: re.left - Pe.left + ve.left,
    right: Pe.right - re.right + ve.right
  }, Ee = d.modifiersData.offset;
  if (G === Sv && Ee) {
    var et = Ee[T];
    Object.keys(be).forEach(function(Ne) {
      var it = [wi, Ci].indexOf(Ne) >= 0 ? 1 : -1, wt = [za, Ci].indexOf(Ne) >= 0 ? "y" : "x";
      be[Ne] += et[wt] * it;
    });
  }
  return be;
}
function C6(d, v) {
  v === void 0 && (v = {});
  var m = v, w = m.placement, T = m.boundary, k = m.rootBoundary, S = m.padding, U = m.flipVariations, O = m.allowedAutoPlacements, L = O === void 0 ? Ew : O, M = ld(w), F = M ? U ? tw : tw.filter(function(ee) {
    return ld(ee) === M;
  }) : kv, G = F.filter(function(ee) {
    return L.indexOf(ee) >= 0;
  });
  G.length === 0 && (G = F, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var Q = G.reduce(function(ee, se) {
    return ee[se] = xv(d, {
      placement: se,
      boundary: T,
      rootBoundary: k,
      padding: S
    })[Ji(se)], ee;
  }, {});
  return Object.keys(Q).sort(function(ee, se) {
    return Q[ee] - Q[se];
  });
}
function w6(d) {
  if (Ji(d) === by)
    return [];
  var v = hy(d);
  return [aw(d), v, aw(v)];
}
function b6(d) {
  var v = d.state, m = d.options, w = d.name;
  if (!v.modifiersData[w]._skip) {
    for (var T = m.mainAxis, k = T === void 0 ? !0 : T, S = m.altAxis, U = S === void 0 ? !0 : S, O = m.fallbackPlacements, L = m.padding, M = m.boundary, F = m.rootBoundary, G = m.altBoundary, Q = m.flipVariations, ee = Q === void 0 ? !0 : Q, se = m.allowedAutoPlacements, te = v.options.placement, ve = Ji(te), ke = ve === te, he = O || (ke || !ee ? [hy(te)] : w6(te)), me = [te].concat(he).reduce(function(Ie, pt) {
      return Ie.concat(Ji(pt) === by ? C6(v, {
        placement: pt,
        boundary: M,
        rootBoundary: F,
        padding: L,
        flipVariations: ee,
        allowedAutoPlacements: se
      }) : pt);
    }, []), re = v.rects.reference, le = v.rects.popper, ce = /* @__PURE__ */ new Map(), Fe = !0, Pe = me[0], be = 0; be < me.length; be++) {
      var Ee = me[be], et = Ji(Ee), Ne = ld(Ee) === rd, it = [za, Ci].indexOf(et) >= 0, wt = it ? "width" : "height", We = xv(v, {
        placement: Ee,
        boundary: M,
        rootBoundary: F,
        altBoundary: G,
        padding: L
      }), Te = it ? Ne ? wi : Ha : Ne ? Ci : za;
      re[wt] > le[wt] && (Te = hy(Te));
      var de = hy(Te), He = [];
      if (k && He.push(We[et] <= 0), U && He.push(We[Te] <= 0, We[de] <= 0), He.every(function(Ie) {
        return Ie;
      })) {
        Pe = Ee, Fe = !1;
        break;
      }
      ce.set(Ee, He);
    }
    if (Fe)
      for (var _ = ee ? 3 : 1, ne = function(pt) {
        var ct = me.find(function(St) {
          var st = ce.get(St);
          if (st)
            return st.slice(0, pt).every(function(At) {
              return At;
            });
        });
        if (ct)
          return Pe = ct, "break";
      }, we = _; we > 0; we--) {
        var tt = ne(we);
        if (tt === "break")
          break;
      }
    v.placement !== Pe && (v.modifiersData[w]._skip = !0, v.placement = Pe, v.reset = !0);
  }
}
const R6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: b6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function lw(d, v, m) {
  return m === void 0 && (m = {
    x: 0,
    y: 0
  }), {
    top: d.top - v.height - m.y,
    right: d.right - v.width + m.x,
    bottom: d.bottom - v.height + m.y,
    left: d.left - v.width - m.x
  };
}
function ow(d) {
  return [za, wi, Ci, Ha].some(function(v) {
    return d[v] >= 0;
  });
}
function T6(d) {
  var v = d.state, m = d.name, w = v.rects.reference, T = v.rects.popper, k = v.modifiersData.preventOverflow, S = xv(v, {
    elementContext: "reference"
  }), U = xv(v, {
    altBoundary: !0
  }), O = lw(S, w), L = lw(U, T, k), M = ow(O), F = ow(L);
  v.modifiersData[m] = {
    referenceClippingOffsets: O,
    popperEscapeOffsets: L,
    isReferenceHidden: M,
    hasPopperEscaped: F
  }, v.attributes.popper = Object.assign({}, v.attributes.popper, {
    "data-popper-reference-hidden": M,
    "data-popper-escaped": F
  });
}
const x6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: T6
};
function k6(d, v, m) {
  var w = Ji(d), T = [Ha, za].indexOf(w) >= 0 ? -1 : 1, k = typeof m == "function" ? m(Object.assign({}, v, {
    placement: d
  })) : m, S = k[0], U = k[1];
  return S = S || 0, U = (U || 0) * T, [Ha, wi].indexOf(w) >= 0 ? {
    x: U,
    y: S
  } : {
    x: S,
    y: U
  };
}
function D6(d) {
  var v = d.state, m = d.options, w = d.name, T = m.offset, k = T === void 0 ? [0, 0] : T, S = Ew.reduce(function(M, F) {
    return M[F] = k6(F, v.rects, k), M;
  }, {}), U = S[v.placement], O = U.x, L = U.y;
  v.modifiersData.popperOffsets != null && (v.modifiersData.popperOffsets.x += O, v.modifiersData.popperOffsets.y += L), v.modifiersData[w] = S;
}
const O6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: D6
};
function _6(d) {
  var v = d.state, m = d.name;
  v.modifiersData[m] = kw({
    reference: v.rects.reference,
    element: v.rects.popper,
    strategy: "absolute",
    placement: v.placement
  });
}
const L6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _6,
  data: {}
};
function N6(d) {
  return d === "x" ? "y" : "x";
}
function M6(d) {
  var v = d.state, m = d.options, w = d.name, T = m.mainAxis, k = T === void 0 ? !0 : T, S = m.altAxis, U = S === void 0 ? !1 : S, O = m.boundary, L = m.rootBoundary, M = m.altBoundary, F = m.padding, G = m.tether, Q = G === void 0 ? !0 : G, ee = m.tetherOffset, se = ee === void 0 ? 0 : ee, te = xv(v, {
    boundary: O,
    rootBoundary: L,
    padding: F,
    altBoundary: M
  }), ve = Ji(v.placement), ke = ld(v.placement), he = !ke, me = oS(ve), re = N6(me), le = v.modifiersData.popperOffsets, ce = v.rects.reference, Fe = v.rects.popper, Pe = typeof se == "function" ? se(Object.assign({}, v.rects, {
    placement: v.placement
  })) : se, be = typeof Pe == "number" ? {
    mainAxis: Pe,
    altAxis: Pe
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Pe), Ee = v.modifiersData.offset ? v.modifiersData.offset[v.placement] : null, et = {
    x: 0,
    y: 0
  };
  if (le) {
    if (k) {
      var Ne, it = me === "y" ? za : Ha, wt = me === "y" ? Ci : wi, We = me === "y" ? "height" : "width", Te = le[me], de = Te + te[it], He = Te - te[wt], _ = Q ? -Fe[We] / 2 : 0, ne = ke === rd ? ce[We] : Fe[We], we = ke === rd ? -Fe[We] : -ce[We], tt = v.elements.arrow, Ie = Q && tt ? lS(tt) : {
        width: 0,
        height: 0
      }, pt = v.modifiersData["arrow#persistent"] ? v.modifiersData["arrow#persistent"].padding : bw(), ct = pt[it], St = pt[wt], st = bv(0, ce[We], Ie[We]), At = he ? ce[We] / 2 - _ - st - ct - be.mainAxis : ne - st - ct - be.mainAxis, Fa = he ? -ce[We] / 2 + _ + st + St + be.mainAxis : we + st + St + be.mainAxis, Fn = v.elements.arrow && Dv(v.elements.arrow), Kr = Fn ? me === "y" ? Fn.clientTop || 0 : Fn.clientLeft || 0 : 0, rn = (Ne = Ee == null ? void 0 : Ee[me]) != null ? Ne : 0, jn = Te + At - rn - Kr, sr = Te + Fa - rn, Gn = bv(Q ? Sy(de, jn) : de, Te, Q ? uc(He, sr) : He);
      le[me] = Gn, et[me] = Gn - Te;
    }
    if (U) {
      var En, Jr = me === "x" ? za : Ha, ja = me === "x" ? Ci : wi, an = le[re], _n = re === "y" ? "height" : "width", ea = an + te[Jr], qn = an - te[ja], gr = [za, Ha].indexOf(ve) !== -1, Xn = (En = Ee == null ? void 0 : Ee[re]) != null ? En : 0, Mr = gr ? ea : an - ce[_n] - Fe[_n] - Xn + be.altAxis, Tn = gr ? an + ce[_n] + Fe[_n] - Xn - be.altAxis : qn, cr = Q && gr ? r6(Mr, an, Tn) : bv(Q ? Mr : ea, an, Q ? Tn : qn);
      le[re] = cr, et[re] = cr - an;
    }
    v.modifiersData[w] = et;
  }
}
const U6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: M6,
  requiresIfExists: ["offset"]
};
function A6(d) {
  return {
    scrollLeft: d.scrollLeft,
    scrollTop: d.scrollTop
  };
}
function z6(d) {
  return d === ti(d) || !ei(d) ? uS(d) : A6(d);
}
function H6(d) {
  var v = d.getBoundingClientRect(), m = ad(v.width) / d.offsetWidth || 1, w = ad(v.height) / d.offsetHeight || 1;
  return m !== 1 || w !== 1;
}
function F6(d, v, m) {
  m === void 0 && (m = !1);
  var w = ei(v), T = ei(v) && H6(v), k = Ju(v), S = id(d, T, m), U = {
    scrollLeft: 0,
    scrollTop: 0
  }, O = {
    x: 0,
    y: 0
  };
  return (w || !w && !m) && ((ql(v) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  cS(k)) && (U = z6(v)), ei(v) ? (O = id(v, !0), O.x += v.clientLeft, O.y += v.clientTop) : k && (O.x = sS(k))), {
    x: S.left + U.scrollLeft - O.x,
    y: S.top + U.scrollTop - O.y,
    width: S.width,
    height: S.height
  };
}
function j6(d) {
  var v = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), w = [];
  d.forEach(function(k) {
    v.set(k.name, k);
  });
  function T(k) {
    m.add(k.name);
    var S = [].concat(k.requires || [], k.requiresIfExists || []);
    S.forEach(function(U) {
      if (!m.has(U)) {
        var O = v.get(U);
        O && T(O);
      }
    }), w.push(k);
  }
  return d.forEach(function(k) {
    m.has(k.name) || T(k);
  }), w;
}
function V6(d) {
  var v = j6(d);
  return eS.reduce(function(m, w) {
    return m.concat(v.filter(function(T) {
      return T.phase === w;
    }));
  }, []);
}
function B6(d) {
  var v;
  return function() {
    return v || (v = new Promise(function(m) {
      Promise.resolve().then(function() {
        v = void 0, m(d());
      });
    })), v;
  };
}
function Zu(d) {
  for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), w = 1; w < v; w++)
    m[w - 1] = arguments[w];
  return [].concat(m).reduce(function(T, k) {
    return T.replace(/%s/, k);
  }, d);
}
var oc = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', P6 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', uw = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $6(d) {
  d.forEach(function(v) {
    [].concat(Object.keys(v), uw).filter(function(m, w, T) {
      return T.indexOf(m) === w;
    }).forEach(function(m) {
      switch (m) {
        case "name":
          typeof v.name != "string" && console.error(Zu(oc, String(v.name), '"name"', '"string"', '"' + String(v.name) + '"'));
          break;
        case "enabled":
          typeof v.enabled != "boolean" && console.error(Zu(oc, v.name, '"enabled"', '"boolean"', '"' + String(v.enabled) + '"'));
          break;
        case "phase":
          eS.indexOf(v.phase) < 0 && console.error(Zu(oc, v.name, '"phase"', "either " + eS.join(", "), '"' + String(v.phase) + '"'));
          break;
        case "fn":
          typeof v.fn != "function" && console.error(Zu(oc, v.name, '"fn"', '"function"', '"' + String(v.fn) + '"'));
          break;
        case "effect":
          v.effect != null && typeof v.effect != "function" && console.error(Zu(oc, v.name, '"effect"', '"function"', '"' + String(v.fn) + '"'));
          break;
        case "requires":
          v.requires != null && !Array.isArray(v.requires) && console.error(Zu(oc, v.name, '"requires"', '"array"', '"' + String(v.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(v.requiresIfExists) || console.error(Zu(oc, v.name, '"requiresIfExists"', '"array"', '"' + String(v.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + v.name + '" modifier, valid properties are ' + uw.map(function(w) {
            return '"' + w + '"';
          }).join(", ") + '; but "' + m + '" was provided.');
      }
      v.requires && v.requires.forEach(function(w) {
        d.find(function(T) {
          return T.name === w;
        }) == null && console.error(Zu(P6, String(v.name), w, w));
      });
    });
  });
}
function I6(d, v) {
  var m = /* @__PURE__ */ new Set();
  return d.filter(function(w) {
    var T = v(w);
    if (!m.has(T))
      return m.add(T), !0;
  });
}
function Y6(d) {
  var v = d.reduce(function(m, w) {
    var T = m[w.name];
    return m[w.name] = T ? Object.assign({}, T, w, {
      options: Object.assign({}, T.options, w.options),
      data: Object.assign({}, T.data, w.data)
    }) : w, m;
  }, {});
  return Object.keys(v).map(function(m) {
    return v[m];
  });
}
var sw = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Q6 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", cw = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fw() {
  for (var d = arguments.length, v = new Array(d), m = 0; m < d; m++)
    v[m] = arguments[m];
  return !v.some(function(w) {
    return !(w && typeof w.getBoundingClientRect == "function");
  });
}
function W6(d) {
  d === void 0 && (d = {});
  var v = d, m = v.defaultModifiers, w = m === void 0 ? [] : m, T = v.defaultOptions, k = T === void 0 ? cw : T;
  return function(U, O, L) {
    L === void 0 && (L = k);
    var M = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, cw, k),
      modifiersData: {},
      elements: {
        reference: U,
        popper: O
      },
      attributes: {},
      styles: {}
    }, F = [], G = !1, Q = {
      state: M,
      setOptions: function(ve) {
        var ke = typeof ve == "function" ? ve(M.options) : ve;
        se(), M.options = Object.assign({}, k, M.options, ke), M.scrollParents = {
          reference: sc(U) ? Rv(U) : U.contextElement ? Rv(U.contextElement) : [],
          popper: Rv(O)
        };
        var he = V6(Y6([].concat(w, M.options.modifiers)));
        if (M.orderedModifiers = he.filter(function(Ee) {
          return Ee.enabled;
        }), process.env.NODE_ENV !== "production") {
          var me = I6([].concat(he, M.options.modifiers), function(Ee) {
            var et = Ee.name;
            return et;
          });
          if ($6(me), Ji(M.options.placement) === by) {
            var re = M.orderedModifiers.find(function(Ee) {
              var et = Ee.name;
              return et === "flip";
            });
            re || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var le = el(O), ce = le.marginTop, Fe = le.marginRight, Pe = le.marginBottom, be = le.marginLeft;
          [ce, Fe, Pe, be].some(function(Ee) {
            return parseFloat(Ee);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return ee(), Q.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!G) {
          var ve = M.elements, ke = ve.reference, he = ve.popper;
          if (!fw(ke, he)) {
            process.env.NODE_ENV !== "production" && console.error(sw);
            return;
          }
          M.rects = {
            reference: F6(ke, Dv(he), M.options.strategy === "fixed"),
            popper: lS(he)
          }, M.reset = !1, M.placement = M.options.placement, M.orderedModifiers.forEach(function(Ee) {
            return M.modifiersData[Ee.name] = Object.assign({}, Ee.data);
          });
          for (var me = 0, re = 0; re < M.orderedModifiers.length; re++) {
            if (process.env.NODE_ENV !== "production" && (me += 1, me > 100)) {
              console.error(Q6);
              break;
            }
            if (M.reset === !0) {
              M.reset = !1, re = -1;
              continue;
            }
            var le = M.orderedModifiers[re], ce = le.fn, Fe = le.options, Pe = Fe === void 0 ? {} : Fe, be = le.name;
            typeof ce == "function" && (M = ce({
              state: M,
              options: Pe,
              name: be,
              instance: Q
            }) || M);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: B6(function() {
        return new Promise(function(te) {
          Q.forceUpdate(), te(M);
        });
      }),
      destroy: function() {
        se(), G = !0;
      }
    };
    if (!fw(U, O))
      return process.env.NODE_ENV !== "production" && console.error(sw), Q;
    Q.setOptions(L).then(function(te) {
      !G && L.onFirstUpdate && L.onFirstUpdate(te);
    });
    function ee() {
      M.orderedModifiers.forEach(function(te) {
        var ve = te.name, ke = te.options, he = ke === void 0 ? {} : ke, me = te.effect;
        if (typeof me == "function") {
          var re = me({
            state: M,
            name: ve,
            instance: Q,
            options: he
          }), le = function() {
          };
          F.push(re || le);
        }
      });
    }
    function se() {
      F.forEach(function(te) {
        return te();
      }), F = [];
    }
    return Q;
  };
}
var G6 = [p6, L6, f6, e6, O6, R6, U6, o6, x6], q6 = /* @__PURE__ */ W6({
  defaultModifiers: G6
}), X6 = typeof Element < "u", Z6 = typeof Map == "function", K6 = typeof Set == "function", J6 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function my(d, v) {
  if (d === v)
    return !0;
  if (d && v && typeof d == "object" && typeof v == "object") {
    if (d.constructor !== v.constructor)
      return !1;
    var m, w, T;
    if (Array.isArray(d)) {
      if (m = d.length, m != v.length)
        return !1;
      for (w = m; w-- !== 0; )
        if (!my(d[w], v[w]))
          return !1;
      return !0;
    }
    var k;
    if (Z6 && d instanceof Map && v instanceof Map) {
      if (d.size !== v.size)
        return !1;
      for (k = d.entries(); !(w = k.next()).done; )
        if (!v.has(w.value[0]))
          return !1;
      for (k = d.entries(); !(w = k.next()).done; )
        if (!my(w.value[1], v.get(w.value[0])))
          return !1;
      return !0;
    }
    if (K6 && d instanceof Set && v instanceof Set) {
      if (d.size !== v.size)
        return !1;
      for (k = d.entries(); !(w = k.next()).done; )
        if (!v.has(w.value[0]))
          return !1;
      return !0;
    }
    if (J6 && ArrayBuffer.isView(d) && ArrayBuffer.isView(v)) {
      if (m = d.length, m != v.length)
        return !1;
      for (w = m; w-- !== 0; )
        if (d[w] !== v[w])
          return !1;
      return !0;
    }
    if (d.constructor === RegExp)
      return d.source === v.source && d.flags === v.flags;
    if (d.valueOf !== Object.prototype.valueOf && typeof d.valueOf == "function" && typeof v.valueOf == "function")
      return d.valueOf() === v.valueOf();
    if (d.toString !== Object.prototype.toString && typeof d.toString == "function" && typeof v.toString == "function")
      return d.toString() === v.toString();
    if (T = Object.keys(d), m = T.length, m !== Object.keys(v).length)
      return !1;
    for (w = m; w-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(v, T[w]))
        return !1;
    if (X6 && d instanceof Element)
      return !1;
    for (w = m; w-- !== 0; )
      if (!((T[w] === "_owner" || T[w] === "__v" || T[w] === "__o") && d.$$typeof) && !my(d[T[w]], v[T[w]]))
        return !1;
    return !0;
  }
  return d !== d && v !== v;
}
var e4 = function(v, m) {
  try {
    return my(v, m);
  } catch (w) {
    if ((w.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw w;
  }
}, t4 = [], n4 = function(v, m, w) {
  w === void 0 && (w = {});
  var T = Re.useRef(null), k = {
    onFirstUpdate: w.onFirstUpdate,
    placement: w.placement || "bottom",
    strategy: w.strategy || "absolute",
    modifiers: w.modifiers || t4
  }, S = Re.useState({
    styles: {
      popper: {
        position: k.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), U = S[0], O = S[1], L = Re.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(Q) {
        var ee = Q.state, se = Object.keys(ee.elements);
        J1.flushSync(function() {
          O({
            styles: G2(se.map(function(te) {
              return [te, ee.styles[te] || {}];
            })),
            attributes: G2(se.map(function(te) {
              return [te, ee.attributes[te]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), M = Re.useMemo(function() {
    var G = {
      onFirstUpdate: k.onFirstUpdate,
      placement: k.placement,
      strategy: k.strategy,
      modifiers: [].concat(k.modifiers, [L, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return e4(T.current, G) ? T.current || G : (T.current = G, G);
  }, [k.onFirstUpdate, k.placement, k.strategy, k.modifiers, L]), F = Re.useRef();
  return q2(function() {
    F.current && F.current.setOptions(M);
  }, [M]), q2(function() {
    if (!(v == null || m == null)) {
      var G = w.createPopper || q6, Q = G(v, m, M);
      return F.current = Q, function() {
        Q.destroy(), F.current = null;
      };
    }
  }, [v, m, w.createPopper]), {
    state: F.current ? F.current.state : null,
    styles: U.styles,
    attributes: U.attributes,
    update: F.current ? F.current.update : null,
    forceUpdate: F.current ? F.current.forceUpdate : null
  };
};
var od = /* @__PURE__ */ ((d) => (d.top = "top", d.bottom = "bottom", d.right = "right", d.left = "left", d.topStart = "top-start", d.topEnd = "top-end", d.bottomStart = "bottom-start", d.bottomEnd = "bottom-end", d.rightStart = "right-start", d.rightEnd = "right-end", d.leftStart = "left-start", d.leftEnd = "left-end", d.auto = "auto", d.autoStart = "auto-start", d.autoEnd = "auto-end", d))(od || {}), Ku = /* @__PURE__ */ ((d) => (d.click = "click", d.hover = "hover", d))(Ku || {});
const Ty = ({
  children: d,
  referenceNode: v,
  placement: m,
  arrow: w = !0,
  trigger: T = "click",
  wrapperClassName: k,
  fullRefWidth: S = !1,
  isOpen: U = !1,
  onChange: O
}) => {
  const [L, M] = Re.useState(U), [F, G] = Re.useState(null), [Q, ee] = Re.useState(null), [se, te] = Re.useState(null), ke = Re.useRef(document).current, { styles: he, attributes: me, forceUpdate: re } = n4(F, Q, {
    placement: m,
    modifiers: Re.useMemo(() => S ? [
      { name: "arrow", options: { element: se } },
      { name: "offset", options: { offset: [0, 5] } },
      {
        name: "sameWidth",
        options: {},
        enabled: !0,
        fn: ({ state: be }) => {
          be.styles.popper.width = `${be.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"]
      }
    ] : [
      { name: "arrow", options: { element: se } },
      { name: "offset", options: { offset: [0, 5] } }
    ], [S, se])
  });
  Re.useEffect(() => {
    U !== L && M(U);
  }, [U]), Re.useEffect(() => {
    const be = (Ee) => {
      const { top: et, bottom: Ne, left: it, right: wt } = Q == null ? void 0 : Q.getBoundingClientRect();
      !(F != null && F.contains(Ee.target)) && (Ee.clientY < et || Ee.clientY > Ne || Ee.clientX < it || Ee.clientX > wt) && (M(!1), O && O(!1));
    };
    return ke.addEventListener("click", be), () => {
      ke.removeEventListener("click", be);
    };
  }, [ke, Q, F, L, O]), Re.useEffect(() => {
    re && re();
  }, [L, re]);
  const le = (be) => {
    T === Ku.hover && (be.stopPropagation(), O ? O(!0) : M(!0));
  }, ce = (be) => {
    T === Ku.hover && (be.stopPropagation(), O ? O(!1) : M(!1));
  }, Fe = () => {
    T === Ku.click && (O ? O(!L) : M(!L));
  }, Pe = Re.cloneElement(v, {
    ref: G,
    onMouseEnter: le,
    onMouseLeave: ce,
    onClick: Fe,
    role: "button"
  });
  return /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("div", { className: "Popover-reference" }, Pe), /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        Popover: !0,
        [k || ""]: !!k
      })
    },
    /* @__PURE__ */ R.createElement(
      "div",
      {
        className: "Popover-content",
        ...me.popper,
        style: he.popper,
        ref: ee,
        "data-show": L
      },
      /* @__PURE__ */ R.createElement("div", null, L && d),
      /* @__PURE__ */ R.createElement(
        "span",
        {
          ref: te,
          style: he.arrow,
          ...me.arrow,
          className: "arrow",
          "data-hide": !w || !L
        }
      )
    )
  ));
};
const D4 = ({
  isOpen: d,
  children: v,
  onClose: m,
  closable: w = !1,
  escClose: T = !1,
  width: k,
  height: S,
  loading: U
}) => {
  const L = Re.useRef(document).current, M = (F) => {
    F.stopPropagation(), w && m && m();
  };
  return Re.useEffect(() => {
    const F = (G) => {
      T && G.key === "Escape" && m && m();
    };
    return d && (L.body.style.overflow = "hidden", L.addEventListener("keydown", F, !1)), () => {
      L.body.style.overflow = "unset", L.removeEventListener("keydown", F, !1);
    };
  }, [d, L, T, m]), d ? /* @__PURE__ */ R.createElement("div", { className: "Modal Modal-wrapper", onClick: M }, /* @__PURE__ */ R.createElement(
    "div",
    {
      className: "Modal-content",
      onClick: (F) => F.stopPropagation(),
      style: {
        width: k,
        height: S
      }
    },
    U && /* @__PURE__ */ R.createElement("div", { className: "Modal-spining" }, /* @__PURE__ */ R.createElement(Ey, null)),
    v
  )) : null;
};
const O4 = ({ onChange: d, items: v, divider: m = !0, activeKey: w = "" }) => {
  const [T, k] = Re.useState(v[0].key);
  Re.useEffect(() => {
    T !== v[0].key && k(w);
  }, [w]);
  const S = (U) => {
    U.onClick ? U.onClick(U) : d == null || d(U), k(U.key);
  };
  return /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        Tabs: !0,
        ["Tabs-with-bottom-border"]: m
      })
    },
    /* @__PURE__ */ R.createElement("div", { className: "Tabs-TabsNavigation" }, v.map((U) => /* @__PURE__ */ R.createElement(
      "div",
      {
        key: U.key,
        className: vt({
          ["Tabs-TabsNavigation-wrapper-item"]: !0,
          ["Tabs-TabsNavigation-wrapper-item-has-notification"]: U.notificationCount && U.notificationCount > 0
        })
      },
      /* @__PURE__ */ R.createElement(
        "button",
        {
          "aria-label": U.ariaLabel || "",
          onClick: () => S(U),
          disabled: U.disabled,
          className: vt({
            ["Tabs-TabsNavigation-item"]: !0,
            ["Tabs-TabsNavigation-item-active"]: T === U.key,
            ["Tabs-TabsNavigation-item-disabled"]: U.disabled
          })
        },
        U.name
      ),
      U.notificationCount && /* @__PURE__ */ R.createElement("span", { className: "Tabs-TabsNavigation-notificationCount" }, U.notificationCount > 99 ? "99+" : U.notificationCount)
    )))
  );
};
var Dw = /* @__PURE__ */ ((d) => (d.indeterminate = "indeterminate", d))(Dw || {});
const r4 = (d) => {
  const { disabled: v, children: m, value: w, label: T, className: k, onChange: S, ariaLabel: U, error: O } = d, [L, M] = Re.useState(!1), [F, G] = Re.useState(!1), [Q, ee] = Re.useState(!1), [se, te] = Re.useState(v), ve = (he) => {
    v || (M(!L), S && S(!L, he));
  }, ke = (he) => {
    (he.key === "Enter" || he.key === " ") && !v && (M(!L), S && S(!L));
  };
  return Re.useEffect(() => {
    te(v);
  }, [v]), Re.useEffect(() => {
    const he = typeof w == "boolean" ? w : !1;
    w === Dw.indeterminate ? (G(!0), M(!1)) : (G(!1), M(he));
  }, [w]), Re.useEffect(() => {
    ee(!!O);
  }, [O]), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("div", { className: "Checkbox" }, /* @__PURE__ */ R.createElement("label", null, /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        [k || ""]: !!k,
        ["Checkbox-checked"]: L || F,
        ["Checkbox-unchecked"]: !L && !F,
        ["Checkbox-error"]: Q,
        ["Checkbox-disabled"]: se
      })
    },
    /* @__PURE__ */ R.createElement(
      "div",
      {
        className: "Checkbox-container",
        role: "input",
        tabIndex: 0,
        onKeyDown: ke
      },
      /* @__PURE__ */ R.createElement(
        "input",
        {
          type: "checkbox",
          onChange: ve,
          "aria-label": U || "checkbox",
          tabIndex: -1,
          disabled: v
        }
      ),
      L && /* @__PURE__ */ R.createElement(D5, null),
      F && !L && /* @__PURE__ */ R.createElement(O5, null)
    )
  ), (T || m) && /* @__PURE__ */ R.createElement("div", { className: "Checkbox-label" }, T || m))));
};
var nd = /* @__PURE__ */ ((d) => (d.asc = "asc", d.desc = "desc", d))(nd || {}), a4 = /* @__PURE__ */ ((d) => (d.start = "start", d.center = "center", d.end = "end", d))(a4 || {}), Ow = /* @__PURE__ */ ((d) => (d.regular = "regular", d.minimal = "minimal", d))(Ow || {});
const i4 = ({ activeSort: d, onClick: v, children: m }) => {
  const w = (k) => {
    k.key === "Enter" && v();
  }, T = (k) => {
    k.stopPropagation(), v();
  };
  return /* @__PURE__ */ R.createElement(
    "div",
    {
      className: "Sorter",
      onClick: T,
      tabIndex: 0,
      role: "button",
      onKeyDown: w
    },
    m,
    /* @__PURE__ */ R.createElement("span", { className: "Sorter-inner" }, /* @__PURE__ */ R.createElement(
      "span",
      {
        role: "presentation",
        className: vt({
          ["Sorter-up"]: !0,
          icon: !0,
          active: d === nd.asc
        })
      },
      /* @__PURE__ */ R.createElement(_5, null)
    ), /* @__PURE__ */ R.createElement(
      "span",
      {
        role: "presentation",
        className: vt({
          ["Sorter-down"]: !0,
          icon: !0,
          active: d === nd.desc
        })
      },
      /* @__PURE__ */ R.createElement(L5, null)
    ))
  );
};
function _4({
  data: d,
  columns: v,
  hasSelected: m,
  scroll: w,
  loading: T,
  notFoundContent: k,
  rtl: S = !1,
  className: U,
  leftSideSelectedNode: O,
  rightSideSelectedNode: L,
  onChange: M,
  type: F = Ow.regular
}) {
  const [G, Q] = Re.useState({}), ee = Re.useMemo(() => v.map((ve) => ve != null && ve.width ? `${ve.width}%` : "1fr").join(" "), [v]), se = (te) => {
    var ke;
    let ve = null;
    G != null && G[te.key] || (ve = nd.asc), (G == null ? void 0 : G[te.key]) === nd.asc && (ve = nd.desc), Q({ [te.key]: ve }), (ke = te == null ? void 0 : te.onSort) == null || ke.call(te, te.key, ve);
  };
  return /* @__PURE__ */ R.createElement("div", { className: "Table-container" }, /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        Table: !0,
        ["Table-rtl"]: S,
        [U || ""]: !!U,
        [`Table-${F}`]: !!F
      })
    },
    /* @__PURE__ */ R.createElement(
      "div",
      {
        className: vt({
          ["Table-header"]: !0,
          action: !!m
        })
      },
      m ? /* @__PURE__ */ R.createElement(
        "div",
        {
          className: vt({
            ["Table-header-summary"]: !0,
            ["with-scroll"]: !!(w != null && w.y)
          })
        },
        /* @__PURE__ */ R.createElement("div", null, O),
        /* @__PURE__ */ R.createElement("div", null, L)
      ) : /* @__PURE__ */ R.createElement(
        "div",
        {
          className: vt({
            ["Table-row"]: !0,
            ["with-scroll"]: !!(w != null && w.y)
          }),
          style: { gridTemplateColumns: ee }
        },
        v.map((te) => /* @__PURE__ */ R.createElement(
          "div",
          {
            key: `table-header-key-${te.key}`,
            className: vt({
              ["Table-cell"]: !0,
              [`Table-cell-align-${te.align}`]: !!te.align
            })
          },
          /* @__PURE__ */ R.createElement("div", null, te.onSort ? /* @__PURE__ */ R.createElement(i4, { activeSort: G == null ? void 0 : G[te.key], onClick: () => se(te) }, /* @__PURE__ */ R.createElement("div", { className: "Table-cell-ellipsis" }, te.title)) : /* @__PURE__ */ R.createElement("div", { className: "Table-cell-ellipsis" }, te.title))
        ))
      )
    ),
    /* @__PURE__ */ R.createElement("div", { className: "Table-content" }, T && /* @__PURE__ */ R.createElement("div", { className: "Table-spining" }, /* @__PURE__ */ R.createElement(Ey, null)), d.length ? /* @__PURE__ */ R.createElement(
      "div",
      {
        className: "Table-body",
        style: { height: w == null ? void 0 : w.y, overflowY: w != null && w.y ? "scroll" : "hidden" }
      },
      d.map((te, ve) => /* @__PURE__ */ R.createElement(
        "div",
        {
          key: "table-body-row-key-" + ve,
          className: "Table-row",
          style: { gridTemplateColumns: ee },
          role: "button",
          onClick: () => M && M(te),
          tabIndex: 0
        },
        v.map((ke) => /* @__PURE__ */ R.createElement(
          "div",
          {
            key: `table-body-row-cell-key-${ke.key}`,
            className: vt({
              ["Table-cell"]: !0,
              [`Table-cell-align-${ke.align}`]: !!ke.align
            })
          },
          /* @__PURE__ */ R.createElement("div", { className: "Table-cell-ellipsis" }, ke.render ? ke.render(te, ke) : te[ke.key])
        ))
      ))
    ) : /* @__PURE__ */ R.createElement("div", { className: "Table-placeholder", style: { height: w == null ? void 0 : w.y } }, k))
  ));
}
const rS = [20, 40, 60, 80, 100], l4 = {
  go_to: "Go to",
  go_to_pages: "go to page",
  page: "page",
  pages: "pages",
  next_page: "next page",
  previous_page: "previous page",
  next_5_pages: "next 5 pages",
  of: "of",
  limit: "limit",
  previous_5_pages: "previous 5 pages"
};
const o4 = ({
  localization: d,
  totalPages: v,
  ariaLabel: m,
  onChange: w,
  limit: T
}) => {
  const [k, S] = Re.useState(""), U = (L) => {
    L.key == "Enter" && O(k);
  }, O = (L) => {
    const M = Number(L);
    return S(""), M > 0 ? w(M > v ? v : M, T) : L === "" ? !1 : w(1, T);
  };
  return /* @__PURE__ */ R.createElement("div", { className: "GoToPage" }, /* @__PURE__ */ R.createElement("span", null, d == null ? void 0 : d.go_to), /* @__PURE__ */ R.createElement(
    aS,
    {
      value: k,
      disabled: v === 1,
      handleChange: (L) => S(L.target.value),
      ariaLabel: m + " " + (d == null ? void 0 : d.go_to_pages),
      handleBlur: (L) => O(L.target.value),
      width: 40,
      handleKeyPress: U,
      type: Gl.number
    }
  ), /* @__PURE__ */ R.createElement("span", null, d == null ? void 0 : d.page));
};
const u4 = ({
  currentPage: d,
  totalItems: v,
  rangeLabel: m,
  limit: w,
  localization: T,
  ariaLabel: k,
  changeLimit: S,
  rangeDropDownPlacement: U = od.bottom
}) => {
  const [O, L] = Re.useState(!1), M = (F) => {
    S(F), L(!1);
  };
  return /* @__PURE__ */ R.createElement("div", { className: "RangeLimits" }, /* @__PURE__ */ R.createElement(
    Ty,
    {
      isOpen: O,
      onChange: (F) => L(F),
      arrow: !1,
      placement: U,
      wrapperClassName: "RangeLimits-range-drop-down",
      referenceNode: /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(
        Nr,
        {
          className: "RangeLimits-limiter-button",
          rightIcon: /* @__PURE__ */ R.createElement(k5, null),
          text: String(w),
          ariaLabel: k + " " + (T == null ? void 0 : T.limit)
        }
      )),
      trigger: Ku.click
    },
    /* @__PURE__ */ R.createElement("div", null, rS.map((F) => /* @__PURE__ */ R.createElement(
      Nr,
      {
        key: "range-limits-limit-item-" + F,
        handleClick: () => M(F),
        disabled: F === w,
        theme: Gt.noBorder,
        text: String(F),
        ariaLabel: k + " " + (T == null ? void 0 : T.limit) + " " + F
      }
    )))
  ), m && /* @__PURE__ */ R.createElement("div", { className: "RangeLimits-range-label" }, /* @__PURE__ */ R.createElement("span", { "data-testid": "paginationRangeFrom" }, d === 1 ? 1 : (d - 1) * w + 1), " - ", /* @__PURE__ */ R.createElement("span", { "data-testid": "paginationRangeTo" }, w * d <= v ? w * d : v || w, " "), v > 0 && /* @__PURE__ */ R.createElement(R.Fragment, null, T == null ? void 0 : T.of, " ", /* @__PURE__ */ R.createElement("span", { "data-testid": "paginationRangeTotal" }, v))));
};
const s4 = ({
  ariaLabel: d,
  localization: v,
  currentPage: m,
  onChange: w,
  limit: T,
  totalPages: k,
  totalItems: S
}) => {
  const U = (L) => {
    const M = m + L;
    return M > k || M < 1 ? M < 1 ? w(1, T) : w(k, T) : w(M, T);
  }, O = Re.useMemo(() => {
    const L = Array.from({ length: k }, (M, F) => F + 1);
    if (k <= 5)
      return L;
    if (k > 5) {
      const M = Math.max(m - 2, 1), F = Math.min(m + 2, L.length);
      return L.slice(M - 1, F);
    }
    return [];
  }, [k, m]);
  return /* @__PURE__ */ R.createElement("ul", { className: "PageSelector" }, /* @__PURE__ */ R.createElement("li", { className: "PageSelector-item PageSelector-item-navigation" }, /* @__PURE__ */ R.createElement(
    Nr,
    {
      centralIcon: /* @__PURE__ */ R.createElement(N5, null),
      ariaLabel: d + " " + (v == null ? void 0 : v.previous_page),
      handleClick: () => U(-1),
      disabled: m === 1,
      className: vt({
        ["PageSelector-item-disabled"]: m === 1
      }),
      theme: Gt.link
    }
  )), k > 5 && m > 3 && /* @__PURE__ */ R.createElement(
    "li",
    {
      className: vt({
        ["PageSelector-item"]: !0,
        ["PageSelector-item-active"]: m === 1
      })
    },
    /* @__PURE__ */ R.createElement(
      Nr,
      {
        text: "1",
        ariaLabel: d + " " + (v == null ? void 0 : v.page) + " 1",
        handleClick: () => w(1, T),
        theme: Gt.link
      }
    )
  ), k > 5 && m >= 5 && /* @__PURE__ */ R.createElement("li", { className: "PageSelector-item PageSelector-item-dots" }, /* @__PURE__ */ R.createElement(
    Nr,
    {
      ariaLabel: d + " " + (v == null ? void 0 : v.previous_5_pages),
      text: "•••",
      handleClick: () => U(-5),
      theme: Gt.link
    }
  )), O.map((L) => /* @__PURE__ */ R.createElement(
    "li",
    {
      key: "pagination-item-page-" + L,
      className: vt({
        ["PageSelector-item"]: !0,
        ["PageSelector-item-active"]: L === m
      })
    },
    /* @__PURE__ */ R.createElement(
      Nr,
      {
        ariaLabel: d + " " + (v == null ? void 0 : v.page) + " " + L,
        handleClick: () => w(L, T),
        theme: Gt.link,
        text: String(L)
      }
    )
  )), k > 5 && m < k - 3 && /* @__PURE__ */ R.createElement("li", { className: "PageSelector-item PageSelector-item-dots" }, /* @__PURE__ */ R.createElement(
    Nr,
    {
      ariaLabel: d + " " + (v == null ? void 0 : v.next_5_pages),
      handleClick: () => U(5),
      theme: Gt.link,
      text: "•••"
    }
  )), k > 5 && m <= k - 3 && /* @__PURE__ */ R.createElement(
    "li",
    {
      className: vt({
        ["PageSelector-item"]: !0,
        ["PageSelector-item-active"]: m === k
      })
    },
    /* @__PURE__ */ R.createElement(
      Nr,
      {
        text: String(k),
        ariaLabel: d + " " + (v == null ? void 0 : v.page) + " " + k,
        handleClick: () => w(k, T),
        theme: Gt.link
      }
    )
  ), /* @__PURE__ */ R.createElement("li", { className: "PageSelector-item PageSelector-item-navigation" }, /* @__PURE__ */ R.createElement(
    Nr,
    {
      centralIcon: /* @__PURE__ */ R.createElement(M5, null),
      ariaLabel: d + " " + (v == null ? void 0 : v.next_page),
      handleClick: () => U(1),
      disabled: m === k || S === 0,
      theme: Gt.link
    }
  )));
}, L4 = ({
  totalItems: d,
  onChange: v,
  ariaLabel: m,
  currentLimit: w = rS[0],
  currentPage: T = 1,
  rangeDropDown: k = !0,
  rangeLabel: S = !0,
  goToPage: U = !0,
  localization: O = l4,
  rangeDropDownPlacement: L = od.bottom
}) => {
  const [M, F] = Re.useState(w);
  Re.useEffect(() => {
    w !== rS[0] && F(w);
  }, [w]);
  const G = Re.useMemo(() => Math.ceil(d / M), [d, M]), Q = (ee) => {
    const se = T === 1 ? 1 : Math.floor((T - 1) * M / ee) + 1;
    v(se, ee), F(ee);
  };
  return /* @__PURE__ */ R.createElement("nav", { className: "Pagination" }, k && /* @__PURE__ */ R.createElement(
    u4,
    {
      rangeDropDownPlacement: L,
      currentPage: T,
      totalItems: d,
      rangeLabel: S,
      limit: M,
      localization: O,
      ariaLabel: m,
      changeLimit: Q
    }
  ), /* @__PURE__ */ R.createElement("div", { className: "Pagination-right-content" }, /* @__PURE__ */ R.createElement(
    s4,
    {
      ariaLabel: m,
      localization: O,
      currentPage: T,
      onChange: v,
      limit: M,
      totalPages: G,
      totalItems: d
    }
  ), U && /* @__PURE__ */ R.createElement(
    o4,
    {
      localization: O,
      totalPages: G,
      limit: M,
      onChange: v,
      ariaLabel: m
    }
  )));
};
var yy = /* @__PURE__ */ ((d) => (d.top = "top", d.right = "right", d.bottom = "bottom", d.left = "left", d))(yy || {});
const N4 = ({
  isOpen: d,
  footer: v,
  width: m,
  height: w,
  placement: T = yy.right,
  children: k,
  onClose: S,
  closable: U,
  escClose: O,
  className: L
}) => {
  const F = Re.useRef(document).current, G = (ee) => {
    ee.stopPropagation(), U && S && S();
  }, Q = Re.useCallback(
    (ee) => {
      O && ee.key === "Escape" && S && S();
    },
    [O, S]
  );
  return Re.useEffect(() => (d && (F.body.style.overflow = "hidden", F.addEventListener("keydown", Q, !1)), () => {
    F.body.style.overflow = "unset", F.removeEventListener("keydown", Q, !1);
  }), [d, F, O, S, Q]), d ? /* @__PURE__ */ R.createElement("div", { className: "Overlay" }, /* @__PURE__ */ R.createElement("div", { className: "Overlay-wrapper", onClick: G }, /* @__PURE__ */ R.createElement("div", { onClick: (ee) => ee.stopPropagation() }, /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        ["Overlay-content"]: !0,
        [`Overlay-${T}`]: !0,
        [L || ""]: !!L
      }),
      style: { width: m, height: w }
    },
    /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement("div", { className: "Overlay-body" }, k), (T === yy.left || T === yy.right) && v && /* @__PURE__ */ R.createElement("div", { className: "Overlay-footer" }, v))
  )))) : null;
}, _w = Re.createContext({}), M4 = () => Re.useContext(_w);
var c4 = /* @__PURE__ */ ((d) => (d.top = "top", d.bottom = "bottom", d.topLeft = "top-left", d.topRight = "top-right", d.bottomLeft = "bottom-left", d.bottomRight = "bottom-right", d))(c4 || {}), Ev = /* @__PURE__ */ ((d) => (d.warning = "warning", d.info = "info", d.error = "error", d.success = "success", d))(Ev || {});
const f4 = {
  [Ev.error]: /* @__PURE__ */ R.createElement(vw, null),
  [Ev.success]: /* @__PURE__ */ R.createElement(hw, null),
  [Ev.warning]: /* @__PURE__ */ R.createElement(mw, null),
  [Ev.info]: /* @__PURE__ */ R.createElement(yw, null)
}, d4 = ({ type: d, text: v, onClose: m, icon: w }) => /* @__PURE__ */ R.createElement(
  "div",
  {
    className: vt({
      Toaster: !0,
      [`Toaster-${d}`]: !0
    })
  },
  /* @__PURE__ */ R.createElement("div", { className: "Toaster-content-wrapper" }, w !== !1 ? /* @__PURE__ */ R.createElement(
    "div",
    {
      className: vt({
        ["Toaster-icon-wrapper"]: !0,
        [`Toaster-icon-wrapper-${d}`]: !0
      })
    },
    /* @__PURE__ */ R.createElement("div", { className: "Toaster-icon" }, w || f4[d])
  ) : null, /* @__PURE__ */ R.createElement("div", { className: "Toaster-content" }, v)),
  /* @__PURE__ */ R.createElement("div", { className: "Toaster-action" }, /* @__PURE__ */ R.createElement(
    Nr,
    {
      handleClick: () => m && m(),
      text: /* @__PURE__ */ R.createElement(pw, null),
      ariaLabel: "cross icon",
      theme: Gt.link
    }
  ))
), p4 = ({ toasters: d, placement: v, close: m }) => /* @__PURE__ */ R.createElement(
  "div",
  {
    className: vt({
      ToasterContainer: !0,
      [`ToasterContainer-${v}`]: !0
    })
  },
  d.map((w) => /* @__PURE__ */ R.createElement("div", { className: "ToasterContainer-content", key: w.id }, /* @__PURE__ */ R.createElement(
    d4,
    {
      text: w.text,
      type: w.type,
      onClose: () => m(w.id || ""),
      icon: w.icon
    }
  )))
), v4 = {};
process.env.NODE_ENV === "test" && Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => v4.randomUUID()
  }
});
const h4 = () => {
  var m;
  let d, v = "";
  return typeof self.crypto < "u" && (d = self.crypto, v = (m = d.randomUUID) == null ? void 0 : m.call(d)), v || "";
}, U4 = ({ children: d, placement: v }) => {
  const [m, w] = Re.useState([]), T = (S) => w((U) => U.filter((O) => O.id !== S)), k = ({ autoClose: S = !0, ...U }) => {
    const O = h4();
    return w((L) => [{ id: O, ...U }, ...L]), S && setTimeout(() => T(O), (U == null ? void 0 : U.duration) || 2e3), O;
  };
  return /* @__PURE__ */ R.createElement(_w.Provider, { value: { toaster: k, closeToaster: T } }, d, /* @__PURE__ */ R.createElement(p4, { placement: v, toasters: m, close: T }));
}, m4 = {
  selected: "selected",
  search: "Search",
  clear_selected: "Clear selected",
  no_data: "No data available"
};
const y4 = (d) => {
  var re;
  const {
    selectedItems: v,
    options: m,
    disabled: w,
    ariaLabel: T,
    value: k,
    error: S,
    errorText: U,
    placeholder: O,
    localization: L,
    showSelectedTags: M,
    isOpen: F,
    multiple: G
  } = d, [Q, ee] = Re.useState([]), [se, te] = Re.useState(!1), ve = Re.useRef(null), ke = Re.useRef([]), he = Re.useRef(null), me = (le) => {
    let ce = 0;
    const Fe = [];
    ke.current.map((Pe) => {
      var be;
      Pe && le - ce >= Pe.clientWidth && (ce += Pe.clientWidth, Fe.push(String((be = Pe.dataset) == null ? void 0 : be.value)));
    }), ee(Fe);
  };
  return Re.useEffect(() => {
    v !== k && (ee([]), te(!1));
  }, [k, v]), Re.useEffect(() => {
    const le = ve.current, ce = he.current;
    if (!se && ce && le) {
      const Fe = (ce == null ? void 0 : ce.clientWidth) - 80;
      (le == null ? void 0 : le.clientWidth) > Fe ? (me(Fe), te(!0)) : (te(!1), ee([]));
    }
  }, [v]), /* @__PURE__ */ R.createElement("div", { className: "InputTag" }, G && /* @__PURE__ */ R.createElement("div", { ref: ve, className: "InputTag-selected-items" }, !M && v.length > 0 && /* @__PURE__ */ R.createElement("div", { className: "InputTag-selected-item-hided" }, v.length + " " + (L == null ? void 0 : L.selected)), M && /* @__PURE__ */ R.createElement(R.Fragment, null, !se && v.map((le, ce) => {
    var Fe;
    return /* @__PURE__ */ R.createElement(
      "div",
      {
        key: "drop-down-selected-item-" + le,
        ref: (Pe) => ke.current[ce] = Pe,
        "data-value": le,
        className: "InputTag-selected-item"
      },
      (Fe = m == null ? void 0 : m.find((Pe) => Pe.value === le)) == null ? void 0 : Fe.label
    );
  }), se && Q.map((le) => {
    var ce;
    return /* @__PURE__ */ R.createElement(
      "div",
      {
        key: "drop-down-selected-item-" + le,
        "data-value": le,
        className: "InputTag-selected-item"
      },
      (ce = m == null ? void 0 : m.find((Fe) => Fe.value == le)) == null ? void 0 : ce.label
    );
  }), se && /* @__PURE__ */ R.createElement("div", { className: "InputTag-selected-item-hided" }, "+ ", v.length - Q.length, " ..."))), /* @__PURE__ */ R.createElement("div", { style: { width: "100%" }, ref: he }, /* @__PURE__ */ R.createElement(
    aS,
    {
      readOnly: !0,
      value: G ? "" : v[0] ? String((re = m == null ? void 0 : m.find((le) => le.value === v[0])) == null ? void 0 : re.label) : "",
      disabled: w,
      ariaLabel: T || "",
      error: S,
      errorText: U,
      placeholder: v.length === 0 ? O : "",
      firstIconButton: {
        icon: F ? /* @__PURE__ */ R.createElement(wy, null) : /* @__PURE__ */ R.createElement(Cy, null),
        ariaLabel: T || "",
        handleClick: () => !1
      }
    }
  )));
};
const fS = Re.memo((d) => {
  const { isSelected: v = !1, handleChange: m, multiple: w = !1, label: T, value: k, disabled: S } = d, U = Re.useCallback(
    (O) => {
      m && m(O, k);
    },
    [m, k]
  );
  return /* @__PURE__ */ R.createElement("div", { onClick: (O) => w ? O.stopPropagation() : !1, className: "Option" }, w && /* @__PURE__ */ R.createElement(
    r4,
    {
      disabled: S,
      ariaLabel: String(T),
      onChange: U,
      value: v,
      label: T
    }
  ), !w && /* @__PURE__ */ R.createElement(
    Nr,
    {
      theme: Gt.link,
      disabled: S,
      className: vt({
        ["Option-singlechoice-item"]: !0,
        ["Option-singlechoice-item-selected"]: v
      }),
      handleClick: (O) => {
        O.stopPropagation(), U(!0);
      },
      text: T,
      ariaLabel: String(T)
    }
  ));
});
fS.displayName = "Option";
const Lw = (d, v) => {
  const m = [], w = (T) => {
    d.forEach((k) => {
      k.parent_id === T && (m.push(k), w(k.id));
    });
  };
  return w(v), m;
}, g4 = (d, v) => {
  const m = [], w = (k) => {
    m.findIndex((S) => S.id === k.id) === -1 && m.push(k);
  }, T = (k) => {
    const S = d.find((U) => U.id === k);
    if (!S)
      return null;
    w(S), S.parent_id && T(S.parent_id);
  };
  return d.forEach((k) => {
    String(k.label).toLowerCase().includes(v.toLowerCase()) && (w(k), k.parent_id && T(k.parent_id), Lw(d, k.id).forEach((U) => {
      const O = d.find((L) => L.id === U.id);
      O && w(O);
    }));
  }), console.log(m), m;
}, Nw = ({
  handleChange: d,
  multiple: v = !1,
  options: m,
  selectedItems: w,
  idsToRender: T = [],
  level: k = 1
}) => {
  T.length || (T = m.filter((L) => !L.parent_id).map((L) => L.id));
  const [S, U] = Re.useState(T), O = (L) => {
    const M = m.filter((F) => F.parent_id === L);
    return M.length ? /* @__PURE__ */ R.createElement(
      Nw,
      {
        level: k + 1,
        multiple: v,
        options: m,
        idsToRender: M.map((F) => F.id),
        selectedItems: w,
        handleChange: d
      }
    ) : null;
  };
  return /* @__PURE__ */ R.createElement("div", { className: "OptionTree-item" }, T.map((L) => {
    const M = m.find((ee) => ee.id === L), F = Lw(m, L), G = w.includes(L), Q = S.includes(L);
    return /* @__PURE__ */ R.createElement(R.Fragment, { key: M == null ? void 0 : M.key }, /* @__PURE__ */ R.createElement(
      "div",
      {
        onClick: () => {
          U(Q ? S.filter((ee) => ee !== L) : [...S, L]);
        },
        style: { "--option-tree-item-padding": k * 12 + "px" },
        className: vt({
          ["OptionTree-item-current"]: !0,
          ["OptionTree-item-current-selected"]: G,
          ["OptionTree-item-current-disabled"]: M == null ? void 0 : M.disabled
        })
      },
      /* @__PURE__ */ R.createElement("div", { className: "OptionTree-item-current-arrow" }, /* @__PURE__ */ R.createElement(
        Nr,
        {
          disabled: F.length === 0,
          theme: Gt.noBorder,
          ariaLabel: String(M == null ? void 0 : M.label),
          centralIcon: !Q || F.length === 0 ? /* @__PURE__ */ R.createElement(Cy, null) : /* @__PURE__ */ R.createElement(wy, null)
        }
      )),
      /* @__PURE__ */ R.createElement(
        fS,
        {
          key: `option-tree-${M == null ? void 0 : M.key}`,
          isSelected: G,
          handleChange: (ee) => {
            d && d(ee, L);
          },
          multiple: v,
          label: M == null ? void 0 : M.label,
          value: (M == null ? void 0 : M.value) || "",
          disabled: M == null ? void 0 : M.disabled
        }
      )
    ), F.length > 0 && Q && /* @__PURE__ */ R.createElement("div", { className: "OptionTree-item-children" }, O(L)));
  }));
}, S4 = (d) => /* @__PURE__ */ R.createElement("div", { className: "OptionTree" }, /* @__PURE__ */ R.createElement(Nw, { ...d }));
const A4 = (d) => {
  const {
    options: v,
    placeholder: m,
    multiple: w = !1,
    error: T = !1,
    errorText: k = "",
    onChange: S,
    value: U = [],
    disabled: O = !1,
    tree: L = !1,
    ariaLabel: M,
    localization: F = m4,
    isLoading: G = !1,
    searchIsActive: Q = !0,
    onClearSelected: ee,
    showClearSelectedButton: se = !1,
    showSelectedTags: te = !0
  } = d, [ve, ke] = Re.useState(
    typeof U == "string" ? [U] : U
  ), [he, me] = Re.useState(!1), re = Re.useCallback(
    (be) => {
      he !== be && me(be);
    },
    [he]
  ), [le, ce] = Re.useState(v);
  Re.useEffect(() => {
    ce(v);
  }, [v]), Re.useEffect(() => {
    if (ve.toString() !== U.toString()) {
      const Ee = (typeof U == "string" ? [U] : U).filter(
        (et) => v.some((Ne) => Ne.value === et)
      );
      ke(Ee);
    }
  }, [U]);
  const Fe = Re.useCallback(
    (be, Ee) => {
      const et = w ? be ? [...ve, Ee] : ve.filter((Ne) => Ne !== Ee) : [Ee];
      S && S(w ? et : et[0]), w || re(!1);
    },
    [ve, S, w, re]
  ), Pe = (be) => {
    const Ee = be.target.value.toLowerCase();
    if (!Ee) {
      ce(v || []);
      return;
    }
    if (L) {
      const et = g4(v, Ee);
      ce(et || []);
    } else {
      const et = v == null ? void 0 : v.filter(
        (Ne) => String(Ne.label).toLowerCase().indexOf(Ee) >= 0
      );
      ce([...et]);
    }
  };
  return /* @__PURE__ */ R.createElement("div", { className: "DropDown" }, /* @__PURE__ */ R.createElement(
    Ty,
    {
      isOpen: he && !O,
      onChange: re,
      arrow: !1,
      trigger: Ku.click,
      fullRefWidth: !0,
      placement: od.bottom,
      referenceNode: /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(
        y4,
        {
          multiple: w,
          isOpen: he,
          ariaLabel: M,
          showSelectedTags: te,
          placeholder: m,
          error: T,
          errorText: k,
          value: U,
          disabled: O,
          setFilteredOptions: ce,
          selectedItems: ve,
          options: v,
          localization: F
        }
      ))
    },
    /* @__PURE__ */ R.createElement("div", null, !G && /* @__PURE__ */ R.createElement("div", { className: "DropDown-option-wrapper" }, Q && /* @__PURE__ */ R.createElement("div", { className: "DropDown-option-wrapper-search" }, /* @__PURE__ */ R.createElement(
      aS,
      {
        handleChange: Pe,
        icon: /* @__PURE__ */ R.createElement(U5, null),
        placeholder: F == null ? void 0 : F.search,
        ariaLabel: (F == null ? void 0 : F.search) || ""
      }
    )), se && ve.length > 0 && /* @__PURE__ */ R.createElement(
      Nr,
      {
        ariaLabel: (F == null ? void 0 : F.clear_selected) || "",
        handleClick: () => ee && ee(),
        leftIcon: /* @__PURE__ */ R.createElement(pw, null),
        className: "DropDown-clear",
        theme: Gt.link,
        text: F == null ? void 0 : F.clear_selected
      }
    ), !L && le.map((be) => /* @__PURE__ */ R.createElement(
      fS,
      {
        ...be,
        key: be.key,
        isSelected: ve.indexOf(be.value) >= 0,
        handleChange: Fe,
        multiple: w
      }
    )), L && /* @__PURE__ */ R.createElement(
      S4,
      {
        options: le,
        selectedItems: ve,
        handleChange: Fe,
        multiple: w
      }
    ), le.length === 0 && /* @__PURE__ */ R.createElement("div", { className: "DropDown-no-data" }, F.no_data)), G && /* @__PURE__ */ R.createElement("div", { className: "DropDown-loader" }, /* @__PURE__ */ R.createElement(Ey, null)))
  ));
};
var Mw = /* @__PURE__ */ ((d) => (d.none = "none", d.gray = "gray", d.red = "red", d.blue = "blue", d.green = "green", d.orange = "orange", d.violet = "violet", d))(Mw || {});
const E4 = ({
  isClickable: d = !1,
  children: v,
  color: m = Mw.none,
  disabled: w = !1,
  highlightBorder: T = !1,
  className: k = "",
  leftIcon: S,
  onClick: U,
  rightIcon: O
}) => /* @__PURE__ */ R.createElement(
  "div",
  {
    ...d ? {
      tabIndex: 0,
      onClick: U,
      onKeyPress: (L) => L.key === "Enter" && U && U()
    } : {},
    className: vt({
      Status: !0,
      ["Status-color-" + m]: !w,
      ["Status-disabled"]: w,
      ["Status-highlight-border"]: T,
      ["Status-clickable"]: d,
      ["Status-with-icon"]: O || S,
      [k || ""]: !!k
    })
  },
  S && /* @__PURE__ */ R.createElement("div", { className: "Status-left-icon" }, S),
  /* @__PURE__ */ R.createElement("div", { className: "Status-content" }, v),
  O && /* @__PURE__ */ R.createElement("div", { className: "Status-right-icon" }, O)
);
const z4 = (d) => {
  const { disabled: v = !1, onChange: m, value: w = "", options: T = [] } = d, [k, S] = Re.useState(T[0]), [U, O] = Re.useState(!1), L = (M) => {
    S(M), O(!1), m && m(M);
  };
  return Re.useEffect(() => {
    k.value !== w && S(T.find((M) => M.value === w) || T[0]);
  }, [w, S, T]), /* @__PURE__ */ R.createElement("div", { className: "DropDownStatus" }, /* @__PURE__ */ R.createElement(
    Ty,
    {
      isOpen: U,
      arrow: !1,
      onChange: (M) => !v && O(M),
      placement: od.bottom,
      referenceNode: /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(
        E4,
        {
          onClick: () => !v && O(!U),
          isClickable: !v,
          highlightBorder: !0,
          rightIcon: U ? /* @__PURE__ */ R.createElement(wy, null) : /* @__PURE__ */ R.createElement(Cy, null),
          ...d
        },
        k.label
      )),
      wrapperClassName: "DropDownStatus-popover",
      trigger: Ku.click
    },
    /* @__PURE__ */ R.createElement("div", { className: "DropDownStatus-options" }, T.filter((M) => M.value !== k.value).map((M) => /* @__PURE__ */ R.createElement(
      Nr,
      {
        key: "DropDownStatus-options-button-" + M.value,
        ariaLabel: M.label,
        className: "DropDownStatus-option",
        handleClick: () => L(M),
        theme: Gt.noBorder,
        text: M.label
      }
    )))
  ));
};
var Cv = /* @__PURE__ */ ((d) => (d.warning = "warning", d.info = "info", d.error = "error", d.success = "success", d))(Cv || {});
const C4 = {
  [Cv.error]: /* @__PURE__ */ R.createElement(vw, null),
  [Cv.success]: /* @__PURE__ */ R.createElement(hw, null),
  [Cv.warning]: /* @__PURE__ */ R.createElement(mw, null),
  [Cv.info]: /* @__PURE__ */ R.createElement(yw, null)
}, H4 = ({
  isOpen: d = !0,
  type: v,
  text: m,
  icon: w,
  backgroundColor: T,
  className: k
}) => d ? /* @__PURE__ */ R.createElement("div", { className: vt({ Message: !0, [k || ""]: !!k }) }, /* @__PURE__ */ R.createElement(
  "div",
  {
    className: vt({
      ["Message-wrapper"]: !0,
      [`Message-wrapper-${v}`]: !0
    }),
    style: { backgroundColor: T }
  },
  w !== !1 ? /* @__PURE__ */ R.createElement("div", { className: "Message-icon-wrapper" }, /* @__PURE__ */ R.createElement("div", { className: "Message-icon" }, w || C4[v])) : null,
  /* @__PURE__ */ R.createElement("div", { className: "Message-content" }, m)
)) : null;
const F4 = (d) => {
  const {
    options: v = [],
    onChange: m,
    value: w,
    disabled: T,
    placeholder: k,
    leftIcon: S,
    className: U,
    label: O,
    labelPrefix: L
  } = d, [M, F] = Re.useState(
    w && v && v.find((ve) => ve.value === w) || null
  ), [G, Q] = Re.useState(!1), ee = (ve) => {
    F(ve), Q(!1), m && m(ve);
  }, se = () => k && !(M != null && M.label) ? k : O || (M != null && M.label ? L ? `${L}: ${M == null ? void 0 : M.label}` : M == null ? void 0 : M.label : ""), te = (ve) => (M && M.value || "") === ve ? "active" : "";
  return /* @__PURE__ */ R.createElement("div", { className: `DropDownButton ${U && U}` }, /* @__PURE__ */ R.createElement(
    Ty,
    {
      isOpen: G,
      arrow: !1,
      onChange: (ve) => !T && Q(ve),
      placement: od.bottomStart,
      referenceNode: /* @__PURE__ */ R.createElement("div", null, /* @__PURE__ */ R.createElement(
        Nr,
        {
          className: "DropDownButton-reference-node",
          handleClick: () => !T && Q(!G),
          text: se(),
          leftIcon: S,
          ariaLabel: "Dropdown button",
          disabled: T
        }
      )),
      wrapperClassName: "DropDownButton-popover",
      trigger: Ku.click
    },
    /* @__PURE__ */ R.createElement("div", { className: "DropDownButton-options" }, v.map((ve) => /* @__PURE__ */ R.createElement(
      Nr,
      {
        key: "DropDownButton-options-button-" + ve.value,
        ariaLabel: "Dropdown option",
        className: `DropDownButton-option ${te(ve.value)}`,
        handleClick: () => ee(ve),
        theme: Gt.noBorder,
        text: ve.label,
        disabled: ve.disabled
      }
    )))
  ));
};
const j4 = (d) => {
  const [v, m] = Re.useState(d);
  Re.useEffect(() => {
    let k;
    return v > 0 && (k = setTimeout(() => m(v - 1), 1e3)), () => clearTimeout(k);
  }, [v]);
  const w = Math.floor(v / 60), T = Math.round(v % 60);
  return {
    countdown: /* @__PURE__ */ R.createElement("div", { className: "Countdown" }, w < 10 && "0", w, ":", T < 10 && "0", T),
    secondsLeft: v,
    isStopped: v <= 0,
    resetTo: (k) => m(k)
  };
}, V4 = (d, v) => {
  const [m, w] = Re.useState(d);
  return Re.useEffect(() => {
    const T = setTimeout(() => w(d), v || 2e3);
    return () => {
      clearTimeout(T);
    };
  }, [d, v]), m;
};
export {
  Gt as BUTTON_TYPE,
  Nr as Button,
  Dw as CHECKBOX_VALUE,
  a4 as COLUMN_ALIGN_TYPE,
  r4 as Checkbox,
  A4 as DropDown,
  F4 as DropDownButton,
  z4 as DropDownStatus,
  k4 as Expanded,
  Gl as INPUT_TYPE,
  aS as Input,
  $o as LOADER_COLOR,
  Ey as Loader,
  Cv as MESSAGE_TYPE,
  H4 as Message,
  D4 as Modal,
  yy as OVERLAY_PLACEMENT_TYPE,
  fS as Option,
  S4 as OptionTree,
  N4 as Overlay,
  od as PLACEMENT_TYPE,
  L4 as Pagination,
  Ty as Popover,
  nd as SORTER_TYPE,
  Mw as STATUS_COLOR,
  E4 as Status,
  Ow as TABLE_TYPE,
  c4 as TOASTER_PLACEMENT_TYPE,
  Ev as TOASTER_TYPE,
  Ku as TRIGGER_TYPE,
  _4 as Table,
  O4 as Tabs,
  x4 as Text,
  U4 as ToasterProvider,
  T4 as Toggle,
  h4 as generateUUID,
  j4 as useCountdown,
  V4 as useDebounce,
  M4 as useToaster
};
