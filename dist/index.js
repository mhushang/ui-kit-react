import './index.css';
function gx(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var tS = { exports: {} }, Sv = {}, nS = { exports: {} }, Ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XE;
function D5() {
  if (XE)
    return Ut;
  XE = 1;
  var d = Symbol.for("react.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), S = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), z = Symbol.iterator;
  function q(N) {
    return N === null || typeof N != "object" ? null : (N = z && N[z] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, se = {};
  function re(N, ne, we) {
    this.props = N, this.context = ne, this.refs = se, this.updater = we || I;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(N, ne) {
    if (typeof N != "object" && typeof N != "function" && N != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, ne, "setState");
  }, re.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = re.prototype;
  function ge(N, ne, we) {
    this.props = N, this.context = ne, this.refs = se, this.updater = we || I;
  }
  var ye = ge.prototype = new pe();
  ye.constructor = ge, ee(ye, re.prototype), ye.isPureReactComponent = !0;
  var Se = Array.isArray, ae = Object.prototype.hasOwnProperty, ue = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(N, ne, we) {
    var at, Ge = {}, mt = null, dt = null;
    if (ne != null)
      for (at in ne.ref !== void 0 && (dt = ne.ref), ne.key !== void 0 && (mt = "" + ne.key), ne)
        ae.call(ne, at) && !ce.hasOwnProperty(at) && (Ge[at] = ne[at]);
    var xt = arguments.length - 2;
    if (xt === 1)
      Ge.children = we;
    else if (1 < xt) {
      for (var ut = Array(xt), At = 0; At < xt; At++)
        ut[At] = arguments[At + 2];
      Ge.children = ut;
    }
    if (N && N.defaultProps)
      for (at in xt = N.defaultProps, xt)
        Ge[at] === void 0 && (Ge[at] = xt[at]);
    return { $$typeof: d, type: N, key: mt, ref: dt, props: Ge, _owner: ue.current };
  }
  function Ie(N, ne) {
    return { $$typeof: d, type: N.type, key: ne, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ke(N) {
    return typeof N == "object" && N !== null && N.$$typeof === d;
  }
  function xe(N) {
    var ne = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(we) {
      return ne[we];
    });
  }
  var rt = /\/+/g;
  function Te(N, ne) {
    return typeof N == "object" && N !== null && N.key != null ? xe("" + N.key) : ne.toString(36);
  }
  function Ze(N, ne, we, at, Ge) {
    var mt = typeof N;
    (mt === "undefined" || mt === "boolean") && (N = null);
    var dt = !1;
    if (N === null)
      dt = !0;
    else
      switch (mt) {
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case d:
            case v:
              dt = !0;
          }
      }
    if (dt)
      return dt = N, Ge = Ge(dt), N = at === "" ? "." + Te(dt, 0) : at, Se(Ge) ? (we = "", N != null && (we = N.replace(rt, "$&/") + "/"), Ze(Ge, ne, we, "", function(At) {
        return At;
      })) : Ge != null && (ke(Ge) && (Ge = Ie(Ge, we + (!Ge.key || dt && dt.key === Ge.key ? "" : ("" + Ge.key).replace(rt, "$&/") + "/") + N)), ne.push(Ge)), 1;
    if (dt = 0, at = at === "" ? "." : at + ":", Se(N))
      for (var xt = 0; xt < N.length; xt++) {
        mt = N[xt];
        var ut = at + Te(mt, xt);
        dt += Ze(mt, ne, we, ut, Ge);
      }
    else if (ut = q(N), typeof ut == "function")
      for (N = ut.call(N), xt = 0; !(mt = N.next()).done; )
        mt = mt.value, ut = at + Te(mt, xt++), dt += Ze(mt, ne, we, ut, Ge);
    else if (mt === "object")
      throw ne = String(N), Error("Objects are not valid as a React child (found: " + (ne === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : ne) + "). If you meant to render a collection of children, use an array instead.");
    return dt;
  }
  function Et(N, ne, we) {
    if (N == null)
      return N;
    var at = [], Ge = 0;
    return Ze(N, at, "", "", function(mt) {
      return ne.call(we, mt, Ge++);
    }), at;
  }
  function Qe(N) {
    if (N._status === -1) {
      var ne = N._result;
      ne = ne(), ne.then(function(we) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = we);
      }, function(we) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = we);
      }), N._status === -1 && (N._status = 0, N._result = ne);
    }
    if (N._status === 1)
      return N._result.default;
    throw N._result;
  }
  var De = { current: null }, ve = { transition: null }, ze = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: ve, ReactCurrentOwner: ue };
  return Ut.Children = { map: Et, forEach: function(N, ne, we) {
    Et(N, function() {
      ne.apply(this, arguments);
    }, we);
  }, count: function(N) {
    var ne = 0;
    return Et(N, function() {
      ne++;
    }), ne;
  }, toArray: function(N) {
    return Et(N, function(ne) {
      return ne;
    }) || [];
  }, only: function(N) {
    if (!ke(N))
      throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Ut.Component = re, Ut.Fragment = m, Ut.Profiler = b, Ut.PureComponent = ge, Ut.StrictMode = E, Ut.Suspense = D, Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ze, Ut.cloneElement = function(N, ne, we) {
    if (N == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var at = ee({}, N.props), Ge = N.key, mt = N.ref, dt = N._owner;
    if (ne != null) {
      if (ne.ref !== void 0 && (mt = ne.ref, dt = ue.current), ne.key !== void 0 && (Ge = "" + ne.key), N.type && N.type.defaultProps)
        var xt = N.type.defaultProps;
      for (ut in ne)
        ae.call(ne, ut) && !ce.hasOwnProperty(ut) && (at[ut] = ne[ut] === void 0 && xt !== void 0 ? xt[ut] : ne[ut]);
    }
    var ut = arguments.length - 2;
    if (ut === 1)
      at.children = we;
    else if (1 < ut) {
      xt = Array(ut);
      for (var At = 0; At < ut; At++)
        xt[At] = arguments[At + 2];
      at.children = xt;
    }
    return { $$typeof: d, type: N.type, key: Ge, ref: mt, props: at, _owner: dt };
  }, Ut.createContext = function(N) {
    return N = { $$typeof: S, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: k, _context: N }, N.Consumer = N;
  }, Ut.createElement = He, Ut.createFactory = function(N) {
    var ne = He.bind(null, N);
    return ne.type = N, ne;
  }, Ut.createRef = function() {
    return { current: null };
  }, Ut.forwardRef = function(N) {
    return { $$typeof: U, render: N };
  }, Ut.isValidElement = ke, Ut.lazy = function(N) {
    return { $$typeof: L, _payload: { _status: -1, _result: N }, _init: Qe };
  }, Ut.memo = function(N, ne) {
    return { $$typeof: M, type: N, compare: ne === void 0 ? null : ne };
  }, Ut.startTransition = function(N) {
    var ne = ve.transition;
    ve.transition = {};
    try {
      N();
    } finally {
      ve.transition = ne;
    }
  }, Ut.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ut.useCallback = function(N, ne) {
    return De.current.useCallback(N, ne);
  }, Ut.useContext = function(N) {
    return De.current.useContext(N);
  }, Ut.useDebugValue = function() {
  }, Ut.useDeferredValue = function(N) {
    return De.current.useDeferredValue(N);
  }, Ut.useEffect = function(N, ne) {
    return De.current.useEffect(N, ne);
  }, Ut.useId = function() {
    return De.current.useId();
  }, Ut.useImperativeHandle = function(N, ne, we) {
    return De.current.useImperativeHandle(N, ne, we);
  }, Ut.useInsertionEffect = function(N, ne) {
    return De.current.useInsertionEffect(N, ne);
  }, Ut.useLayoutEffect = function(N, ne) {
    return De.current.useLayoutEffect(N, ne);
  }, Ut.useMemo = function(N, ne) {
    return De.current.useMemo(N, ne);
  }, Ut.useReducer = function(N, ne, we) {
    return De.current.useReducer(N, ne, we);
  }, Ut.useRef = function(N) {
    return De.current.useRef(N);
  }, Ut.useState = function(N) {
    return De.current.useState(N);
  }, Ut.useSyncExternalStore = function(N, ne, we) {
    return De.current.useSyncExternalStore(N, ne, we);
  }, Ut.useTransition = function() {
    return De.current.useTransition();
  }, Ut.version = "18.2.0", Ut;
}
var xv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
xv.exports;
var ZE;
function _5() {
  return ZE || (ZE = 1, function(d, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.2.0", E = Symbol.for("react.element"), b = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), M = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), se = Symbol.for("react.offscreen"), re = Symbol.iterator, pe = "@@iterator";
      function ge(g) {
        if (g === null || typeof g != "object")
          return null;
        var _ = re && g[re] || g[pe];
        return typeof _ == "function" ? _ : null;
      }
      var ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Se = {
        transition: null
      }, ae = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, He = null;
      function Ie(g) {
        He = g;
      }
      ce.setExtraStackFrame = function(g) {
        He = g;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var g = "";
        He && (g += He);
        var _ = ce.getCurrentStack;
        return _ && (g += _() || ""), g;
      };
      var ke = !1, xe = !1, rt = !1, Te = !1, Ze = !1, Et = {
        ReactCurrentDispatcher: ye,
        ReactCurrentBatchConfig: Se,
        ReactCurrentOwner: ue
      };
      Et.ReactDebugCurrentFrame = ce, Et.ReactCurrentActQueue = ae;
      function Qe(g) {
        {
          for (var _ = arguments.length, W = new Array(_ > 1 ? _ - 1 : 0), X = 1; X < _; X++)
            W[X - 1] = arguments[X];
          ve("warn", g, W);
        }
      }
      function De(g) {
        {
          for (var _ = arguments.length, W = new Array(_ > 1 ? _ - 1 : 0), X = 1; X < _; X++)
            W[X - 1] = arguments[X];
          ve("error", g, W);
        }
      }
      function ve(g, _, W) {
        {
          var X = Et.ReactDebugCurrentFrame, he = X.getStackAddendum();
          he !== "" && (_ += "%s", W = W.concat([he]));
          var it = W.map(function(_e) {
            return String(_e);
          });
          it.unshift("Warning: " + _), Function.prototype.apply.call(console[g], console, it);
        }
      }
      var ze = {};
      function N(g, _) {
        {
          var W = g.constructor, X = W && (W.displayName || W.name) || "ReactClass", he = X + "." + _;
          if (ze[he])
            return;
          De("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, X), ze[he] = !0;
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
        enqueueForceUpdate: function(g, _, W) {
          N(g, "forceUpdate");
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
        enqueueReplaceState: function(g, _, W, X) {
          N(g, "replaceState");
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
        enqueueSetState: function(g, _, W, X) {
          N(g, "setState");
        }
      }, we = Object.assign, at = {};
      Object.freeze(at);
      function Ge(g, _, W) {
        this.props = g, this.context = _, this.refs = at, this.updater = W || ne;
      }
      Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(g, _) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, _, "setState");
      }, Ge.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var mt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(g, _) {
          Object.defineProperty(Ge.prototype, g, {
            get: function() {
              Qe("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var xt in mt)
          mt.hasOwnProperty(xt) && dt(xt, mt[xt]);
      }
      function ut() {
      }
      ut.prototype = Ge.prototype;
      function At(g, _, W) {
        this.props = g, this.context = _, this.refs = at, this.updater = W || ne;
      }
      var br = At.prototype = new ut();
      br.constructor = At, we(br, Ge.prototype), br.isPureReactComponent = !0;
      function Hn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var Rr = Array.isArray;
      function un(g) {
        return Rr(g);
      }
      function Vn(g) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, W = _ && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return W;
        }
      }
      function Mn(g) {
        try {
          return Dn(g), !1;
        } catch {
          return !0;
        }
      }
      function Dn(g) {
        return "" + g;
      }
      function Sn(g) {
        if (Mn(g))
          return De("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(g)), Dn(g);
      }
      function Tr(g, _, W) {
        var X = g.displayName;
        if (X)
          return X;
        var he = _.displayName || _.name || "";
        return he !== "" ? W + "(" + he + ")" : W;
      }
      function kr(g) {
        return g.displayName || "Context";
      }
      function sn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && De("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case k:
            return "Fragment";
          case b:
            return "Portal";
          case U:
            return "Profiler";
          case S:
            return "StrictMode";
          case z:
            return "Suspense";
          case q:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case M:
              var _ = g;
              return kr(_) + ".Consumer";
            case D:
              var W = g;
              return kr(W._context) + ".Provider";
            case L:
              return Tr(g, g.render, "ForwardRef");
            case I:
              var X = g.displayName || null;
              return X !== null ? X : sn(g.type) || "Memo";
            case ee: {
              var he = g, it = he._payload, _e = he._init;
              try {
                return sn(_e(it));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var jn = Object.prototype.hasOwnProperty, sr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Qn, cr, Bn;
      Bn = {};
      function fr(g) {
        if (jn.call(g, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function cn(g) {
        if (jn.call(g, "key")) {
          var _ = Object.getOwnPropertyDescriptor(g, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function er(g, _) {
        var W = function() {
          Qn || (Qn = !0, De("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: W,
          configurable: !0
        });
      }
      function hi(g, _) {
        var W = function() {
          cr || (cr = !0, De("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        W.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: W,
          configurable: !0
        });
      }
      function ha(g) {
        if (typeof g.ref == "string" && ue.current && g.__self && ue.current.stateNode !== g.__self) {
          var _ = sn(ue.current.type);
          Bn[_] || (De('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, g.ref), Bn[_] = !0);
        }
      }
      var Ce = function(g, _, W, X, he, it, _e) {
        var tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: E,
          // Built-in properties that belong on the element
          type: g,
          key: _,
          ref: W,
          props: _e,
          // Record the component responsible for creating this element.
          _owner: it
        };
        return tt._store = {}, Object.defineProperty(tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.defineProperty(tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: he
        }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
      };
      function qe(g, _, W) {
        var X, he = {}, it = null, _e = null, tt = null, Tt = null;
        if (_ != null) {
          fr(_) && (_e = _.ref, ha(_)), cn(_) && (Sn(_.key), it = "" + _.key), tt = _.__self === void 0 ? null : _.__self, Tt = _.__source === void 0 ? null : _.__source;
          for (X in _)
            jn.call(_, X) && !sr.hasOwnProperty(X) && (he[X] = _[X]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          he.children = W;
        else if (Ht > 1) {
          for (var nn = Array(Ht), Jt = 0; Jt < Ht; Jt++)
            nn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(nn), he.children = nn;
        }
        if (g && g.defaultProps) {
          var rn = g.defaultProps;
          for (X in rn)
            he[X] === void 0 && (he[X] = rn[X]);
        }
        if (it || _e) {
          var pn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          it && er(he, pn), _e && hi(he, pn);
        }
        return Ce(g, it, _e, tt, Tt, ue.current, he);
      }
      function wt(g, _) {
        var W = Ce(g.type, _, g.ref, g._self, g._source, g._owner, g.props);
        return W;
      }
      function It(g, _, W) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var X, he = we({}, g.props), it = g.key, _e = g.ref, tt = g._self, Tt = g._source, Ht = g._owner;
        if (_ != null) {
          fr(_) && (_e = _.ref, Ht = ue.current), cn(_) && (Sn(_.key), it = "" + _.key);
          var nn;
          g.type && g.type.defaultProps && (nn = g.type.defaultProps);
          for (X in _)
            jn.call(_, X) && !sr.hasOwnProperty(X) && (_[X] === void 0 && nn !== void 0 ? he[X] = nn[X] : he[X] = _[X]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          he.children = W;
        else if (Jt > 1) {
          for (var rn = Array(Jt), pn = 0; pn < Jt; pn++)
            rn[pn] = arguments[pn + 2];
          he.children = rn;
        }
        return Ce(g.type, it, _e, tt, Tt, Ht, he);
      }
      function Wt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === E;
      }
      var Un = ".", xn = ":";
      function Dr(g) {
        var _ = /[=:]/g, W = {
          "=": "=0",
          ":": "=2"
        }, X = g.replace(_, function(he) {
          return W[he];
        });
        return "$" + X;
      }
      var Kt = !1, Ar = /\/+/g;
      function Qt(g) {
        return g.replace(Ar, "$&/");
      }
      function Gt(g, _) {
        return typeof g == "object" && g !== null && g.key != null ? (Sn(g.key), Dr("" + g.key)) : _.toString(36);
      }
      function ei(g, _, W, X, he) {
        var it = typeof g;
        (it === "undefined" || it === "boolean") && (g = null);
        var _e = !1;
        if (g === null)
          _e = !0;
        else
          switch (it) {
            case "string":
            case "number":
              _e = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case E:
                case b:
                  _e = !0;
              }
          }
        if (_e) {
          var tt = g, Tt = he(tt), Ht = X === "" ? Un + Gt(tt, 0) : X;
          if (un(Tt)) {
            var nn = "";
            Ht != null && (nn = Qt(Ht) + "/"), ei(Tt, _, nn, "", function(pd) {
              return pd;
            });
          } else
            Tt != null && (Wt(Tt) && (Tt.key && (!tt || tt.key !== Tt.key) && Sn(Tt.key), Tt = wt(
              Tt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              W + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Tt.key && (!tt || tt.key !== Tt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Qt("" + Tt.key) + "/"
              ) : "") + Ht
            )), _.push(Tt));
          return 1;
        }
        var Jt, rn, pn = 0, Ot = X === "" ? Un : X + xn;
        if (un(g))
          for (var Pi = 0; Pi < g.length; Pi++)
            Jt = g[Pi], rn = Ot + Gt(Jt, Pi), pn += ei(Jt, _, W, rn, he);
        else {
          var pu = ge(g);
          if (typeof pu == "function") {
            var vs = g;
            pu === vs.entries && (Kt || Qe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var dd = pu.call(vs), ai, hs = 0; !(ai = dd.next()).done; )
              Jt = ai.value, rn = Ot + Gt(Jt, hs++), pn += ei(Jt, _, W, rn, he);
          } else if (it === "object") {
            var ms = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (ms === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : ms) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pn;
      }
      function Oa(g, _, W) {
        if (g == null)
          return g;
        var X = [], he = 0;
        return ei(g, X, "", "", function(it) {
          return _.call(W, it, he++);
        }), X;
      }
      function yl(g) {
        var _ = 0;
        return Oa(g, function() {
          _++;
        }), _;
      }
      function so(g, _, W) {
        Oa(g, function() {
          _.apply(this, arguments);
        }, W);
      }
      function tu(g) {
        return Oa(g, function(_) {
          return _;
        }) || [];
      }
      function Hi(g) {
        if (!Wt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function gl(g) {
        var _ = {
          $$typeof: M,
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
        _.Provider = {
          $$typeof: D,
          _context: _
        };
        var W = !1, X = !1, he = !1;
        {
          var it = {
            $$typeof: M,
            _context: _
          };
          Object.defineProperties(it, {
            Provider: {
              get: function() {
                return X || (X = !0, De("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(_e) {
                _.Provider = _e;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(_e) {
                _._currentValue = _e;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(_e) {
                _._currentValue2 = _e;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(_e) {
                _._threadCount = _e;
              }
            },
            Consumer: {
              get: function() {
                return W || (W = !0, De("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(_e) {
                he || (Qe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", _e), he = !0);
              }
            }
          }), _.Consumer = it;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var ma = -1, mi = 0, ya = 1, yi = 2;
      function zr(g) {
        if (g._status === ma) {
          var _ = g._result, W = _();
          if (W.then(function(it) {
            if (g._status === mi || g._status === ma) {
              var _e = g;
              _e._status = ya, _e._result = it;
            }
          }, function(it) {
            if (g._status === mi || g._status === ma) {
              var _e = g;
              _e._status = yi, _e._result = it;
            }
          }), g._status === ma) {
            var X = g;
            X._status = mi, X._result = W;
          }
        }
        if (g._status === ya) {
          var he = g._result;
          return he === void 0 && De(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, he), "default" in he || De(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, he), he.default;
        } else
          throw g._result;
      }
      function ga(g) {
        var _ = {
          // We use these fields to store the result.
          _status: ma,
          _result: g
        }, W = {
          $$typeof: ee,
          _payload: _,
          _init: zr
        };
        {
          var X, he;
          Object.defineProperties(W, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(it) {
                De("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = it, Object.defineProperty(W, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return he;
              },
              set: function(it) {
                De("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), he = it, Object.defineProperty(W, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return W;
      }
      function gi(g) {
        g != null && g.$$typeof === I ? De("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? De("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && De("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && De("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: L,
          render: g
        };
        {
          var W;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(X) {
              W = X, !g.name && !g.displayName && (g.displayName = X);
            }
          });
        }
        return _;
      }
      var O;
      O = Symbol.for("react.module.reference");
      function ie(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === k || g === U || Ze || g === S || g === z || g === q || Te || g === se || ke || xe || rt || typeof g == "object" && g !== null && (g.$$typeof === ee || g.$$typeof === I || g.$$typeof === D || g.$$typeof === M || g.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === O || g.getModuleId !== void 0));
      }
      function Ee(g, _) {
        ie(g) || De("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var W = {
          $$typeof: I,
          type: g,
          compare: _ === void 0 ? null : _
        };
        {
          var X;
          Object.defineProperty(W, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return X;
            },
            set: function(he) {
              X = he, !g.name && !g.displayName && (g.displayName = he);
            }
          });
        }
        return W;
      }
      function je() {
        var g = ye.current;
        return g === null && De(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function yt(g) {
        var _ = je();
        if (g._context !== void 0) {
          var W = g._context;
          W.Consumer === g ? De("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : W.Provider === g && De("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(g);
      }
      function Lt(g) {
        var _ = je();
        return _.useState(g);
      }
      function gt(g, _, W) {
        var X = je();
        return X.useReducer(g, _, W);
      }
      function Je(g) {
        var _ = je();
        return _.useRef(g);
      }
      function Pn(g, _) {
        var W = je();
        return W.useEffect(g, _);
      }
      function fn(g, _) {
        var W = je();
        return W.useInsertionEffect(g, _);
      }
      function dn(g, _) {
        var W = je();
        return W.useLayoutEffect(g, _);
      }
      function dr(g, _) {
        var W = je();
        return W.useCallback(g, _);
      }
      function Si(g, _) {
        var W = je();
        return W.useMemo(g, _);
      }
      function nu(g, _, W) {
        var X = je();
        return X.useImperativeHandle(g, _, W);
      }
      function zt(g, _) {
        {
          var W = je();
          return W.useDebugValue(g, _);
        }
      }
      function cd() {
        var g = je();
        return g.useTransition();
      }
      function ti(g) {
        var _ = je();
        return _.useDeferredValue(g);
      }
      function Rt() {
        var g = je();
        return g.useId();
      }
      function Ci(g, _, W) {
        var X = je();
        return X.useSyncExternalStore(g, _, W);
      }
      var Sl = 0, ru, Cl, Kr, cs, Fr, fs, ds;
      function yc() {
      }
      yc.__reactDisabledLog = !0;
      function au() {
        {
          if (Sl === 0) {
            ru = console.log, Cl = console.info, Kr = console.warn, cs = console.error, Fr = console.group, fs = console.groupCollapsed, ds = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: yc,
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
          Sl++;
        }
      }
      function El() {
        {
          if (Sl--, Sl === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: we({}, g, {
                value: ru
              }),
              info: we({}, g, {
                value: Cl
              }),
              warn: we({}, g, {
                value: Kr
              }),
              error: we({}, g, {
                value: cs
              }),
              group: we({}, g, {
                value: Fr
              }),
              groupCollapsed: we({}, g, {
                value: fs
              }),
              groupEnd: we({}, g, {
                value: ds
              })
            });
          }
          Sl < 0 && De("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = Et.ReactCurrentDispatcher, Hr;
      function xl(g, _, W) {
        {
          if (Hr === void 0)
            try {
              throw Error();
            } catch (he) {
              var X = he.stack.trim().match(/\n( *(at )?)/);
              Hr = X && X[1] || "";
            }
          return `
` + Hr + g;
        }
      }
      var wl = !1, bl;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        bl = new iu();
      }
      function lu(g, _) {
        if (!g || wl)
          return "";
        {
          var W = bl.get(g);
          if (W !== void 0)
            return W;
        }
        var X;
        wl = !0;
        var he = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var it;
        it = ni.current, ni.current = null, au();
        try {
          if (_) {
            var _e = function() {
              throw Error();
            };
            if (Object.defineProperty(_e.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_e, []);
              } catch (Ot) {
                X = Ot;
              }
              Reflect.construct(g, [], _e);
            } else {
              try {
                _e.call();
              } catch (Ot) {
                X = Ot;
              }
              g.call(_e.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ot) {
              X = Ot;
            }
            g();
          }
        } catch (Ot) {
          if (Ot && X && typeof Ot.stack == "string") {
            for (var tt = Ot.stack.split(`
`), Tt = X.stack.split(`
`), Ht = tt.length - 1, nn = Tt.length - 1; Ht >= 1 && nn >= 0 && tt[Ht] !== Tt[nn]; )
              nn--;
            for (; Ht >= 1 && nn >= 0; Ht--, nn--)
              if (tt[Ht] !== Tt[nn]) {
                if (Ht !== 1 || nn !== 1)
                  do
                    if (Ht--, nn--, nn < 0 || tt[Ht] !== Tt[nn]) {
                      var Jt = `
` + tt[Ht].replace(" at new ", " at ");
                      return g.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", g.displayName)), typeof g == "function" && bl.set(g, Jt), Jt;
                    }
                  while (Ht >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          wl = !1, ni.current = it, El(), Error.prepareStackTrace = he;
        }
        var rn = g ? g.displayName || g.name : "", pn = rn ? xl(rn) : "";
        return typeof g == "function" && bl.set(g, pn), pn;
      }
      function Vi(g, _, W) {
        return lu(g, !1);
      }
      function fd(g) {
        var _ = g.prototype;
        return !!(_ && _.isReactComponent);
      }
      function Ei(g, _, W) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return lu(g, fd(g));
        if (typeof g == "string")
          return xl(g);
        switch (g) {
          case z:
            return xl("Suspense");
          case q:
            return xl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case L:
              return Vi(g.render);
            case I:
              return Ei(g.type, _, W);
            case ee: {
              var X = g, he = X._payload, it = X._init;
              try {
                return Ei(it(he), _, W);
              } catch {
              }
            }
          }
        return "";
      }
      var Bt = {}, ou = Et.ReactDebugCurrentFrame;
      function co(g) {
        if (g) {
          var _ = g._owner, W = Ei(g.type, g._source, _ ? _.type : null);
          ou.setExtraStackFrame(W);
        } else
          ou.setExtraStackFrame(null);
      }
      function uu(g, _, W, X, he) {
        {
          var it = Function.call.bind(jn);
          for (var _e in g)
            if (it(g, _e)) {
              var tt = void 0;
              try {
                if (typeof g[_e] != "function") {
                  var Tt = Error((X || "React class") + ": " + W + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Tt.name = "Invariant Violation", Tt;
                }
                tt = g[_e](_, _e, X, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                tt = Ht;
              }
              tt && !(tt instanceof Error) && (co(he), De("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", W, _e, typeof tt), co(null)), tt instanceof Error && !(tt.message in Bt) && (Bt[tt.message] = !0, co(he), De("Failed %s type: %s", W, tt.message), co(null));
            }
        }
      }
      function Ft(g) {
        if (g) {
          var _ = g._owner, W = Ei(g.type, g._source, _ ? _.type : null);
          Ie(W);
        } else
          Ie(null);
      }
      var su;
      su = !1;
      function cu() {
        if (ue.current) {
          var g = sn(ue.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function pt(g) {
        if (g !== void 0) {
          var _ = g.fileName.replace(/^.*[\\\/]/, ""), W = g.lineNumber;
          return `

Check your code at ` + _ + ":" + W + ".";
        }
        return "";
      }
      function fo(g) {
        return g != null ? pt(g.__source) : "";
      }
      var wn = {};
      function Jr(g) {
        var _ = cu();
        if (!_) {
          var W = typeof g == "string" ? g : g.displayName || g.name;
          W && (_ = `

Check the top-level render call using <` + W + ">.");
        }
        return _;
      }
      function Vr(g, _) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var W = Jr(_);
          if (!wn[W]) {
            wn[W] = !0;
            var X = "";
            g && g._owner && g._owner !== ue.current && (X = " It was passed a child from " + sn(g._owner.type) + "."), Ft(g), De('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, X), Ft(null);
          }
        }
      }
      function Rl(g, _) {
        if (typeof g == "object") {
          if (un(g))
            for (var W = 0; W < g.length; W++) {
              var X = g[W];
              Wt(X) && Vr(X, _);
            }
          else if (Wt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var he = ge(g);
            if (typeof he == "function" && he !== g.entries)
              for (var it = he.call(g), _e; !(_e = it.next()).done; )
                Wt(_e.value) && Vr(_e.value, _);
          }
        }
      }
      function _n(g) {
        {
          var _ = g.type;
          if (_ == null || typeof _ == "string")
            return;
          var W;
          if (typeof _ == "function")
            W = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === I))
            W = _.propTypes;
          else
            return;
          if (W) {
            var X = sn(_);
            uu(W, g.props, "prop", X, g);
          } else if (_.PropTypes !== void 0 && !su) {
            su = !0;
            var he = sn(_);
            De("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && De("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qt(g) {
        {
          for (var _ = Object.keys(g.props), W = 0; W < _.length; W++) {
            var X = _[W];
            if (X !== "children" && X !== "key") {
              Ft(g), De("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Ft(null);
              break;
            }
          }
          g.ref !== null && (Ft(g), De("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
        }
      }
      function gc(g, _, W) {
        var X = ie(g);
        if (!X) {
          var he = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = fo(_);
          it ? he += it : he += cu();
          var _e;
          g === null ? _e = "null" : un(g) ? _e = "array" : g !== void 0 && g.$$typeof === E ? (_e = "<" + (sn(g.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof g, De("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, he);
        }
        var tt = qe.apply(this, arguments);
        if (tt == null)
          return tt;
        if (X)
          for (var Tt = 2; Tt < arguments.length; Tt++)
            Rl(arguments[Tt], g);
        return g === k ? qt(tt) : _n(tt), tt;
      }
      var ea = !1;
      function tr(g) {
        var _ = gc.bind(null, g);
        return _.type = g, ea || (ea = !0, Qe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return Qe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), _;
      }
      function xi(g, _, W) {
        for (var X = It.apply(this, arguments), he = 2; he < arguments.length; he++)
          Rl(arguments[he], X.type);
        return _n(X), X;
      }
      function Sc(g, _) {
        var W = Se.transition;
        Se.transition = {};
        var X = Se.transition;
        Se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Se.transition = W, W === null && X._updatedFibers) {
            var he = X._updatedFibers.size;
            he > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), X._updatedFibers.clear();
          }
        }
      }
      var Bi = !1, Tl = null;
      function Cc(g) {
        if (Tl === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), W = d && d[_];
            Tl = W.call(d, "timers").setImmediate;
          } catch {
            Tl = function(he) {
              Bi === !1 && (Bi = !0, typeof MessageChannel > "u" && De("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var it = new MessageChannel();
              it.port1.onmessage = he, it.port2.postMessage(void 0);
            };
          }
        return Tl(g);
      }
      var La = 0, kl = !1;
      function Dl(g) {
        {
          var _ = La;
          La++, ae.current === null && (ae.current = []);
          var W = ae.isBatchingLegacy, X;
          try {
            if (ae.isBatchingLegacy = !0, X = g(), !W && ae.didScheduleLegacyUpdate) {
              var he = ae.current;
              he !== null && (ae.didScheduleLegacyUpdate = !1, Ol(he));
            }
          } catch (rn) {
            throw Na(_), rn;
          } finally {
            ae.isBatchingLegacy = W;
          }
          if (X !== null && typeof X == "object" && typeof X.then == "function") {
            var it = X, _e = !1, tt = {
              then: function(rn, pn) {
                _e = !0, it.then(function(Ot) {
                  Na(_), La === 0 ? fu(Ot, rn, pn) : rn(Ot);
                }, function(Ot) {
                  Na(_), pn(Ot);
                });
              }
            };
            return !kl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              _e || (kl = !0, De("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), tt;
          } else {
            var Tt = X;
            if (Na(_), La === 0) {
              var Ht = ae.current;
              Ht !== null && (Ol(Ht), ae.current = null);
              var nn = {
                then: function(rn, pn) {
                  ae.current === null ? (ae.current = [], fu(Tt, rn, pn)) : rn(Tt);
                }
              };
              return nn;
            } else {
              var Jt = {
                then: function(rn, pn) {
                  rn(Tt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function Na(g) {
        g !== La - 1 && De("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = g;
      }
      function fu(g, _, W) {
        {
          var X = ae.current;
          if (X !== null)
            try {
              Ol(X), Cc(function() {
                X.length === 0 ? (ae.current = null, _(g)) : fu(g, _, W);
              });
            } catch (he) {
              W(he);
            }
          else
            _(g);
        }
      }
      var _l = !1;
      function Ol(g) {
        if (!_l) {
          _l = !0;
          var _ = 0;
          try {
            for (; _ < g.length; _++) {
              var W = g[_];
              do
                W = W(!0);
              while (W !== null);
            }
            g.length = 0;
          } catch (X) {
            throw g = g.slice(_ + 1), X;
          } finally {
            _l = !1;
          }
        }
      }
      var po = gc, du = xi, ps = tr, ri = {
        map: Oa,
        forEach: so,
        count: yl,
        toArray: tu,
        only: Hi
      };
      v.Children = ri, v.Component = Ge, v.Fragment = k, v.Profiler = U, v.PureComponent = At, v.StrictMode = S, v.Suspense = z, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, v.cloneElement = du, v.createContext = gl, v.createElement = po, v.createFactory = ps, v.createRef = Hn, v.forwardRef = gi, v.isValidElement = Wt, v.lazy = ga, v.memo = Ee, v.startTransition = Sc, v.unstable_act = Dl, v.useCallback = dr, v.useContext = yt, v.useDebugValue = zt, v.useDeferredValue = ti, v.useEffect = Pn, v.useId = Rt, v.useImperativeHandle = nu, v.useInsertionEffect = fn, v.useLayoutEffect = dn, v.useMemo = Si, v.useReducer = gt, v.useRef = Je, v.useState = Lt, v.useSyncExternalStore = Ci, v.useTransition = cd, v.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(xv, xv.exports)), xv.exports;
}
process.env.NODE_ENV === "production" ? nS.exports = D5() : nS.exports = _5();
var Oe = nS.exports;
const O5 = /* @__PURE__ */ gx(Oe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KE;
function L5() {
  if (KE)
    return Sv;
  KE = 1;
  var d = Oe, v = Symbol.for("react.element"), m = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, b = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(U, D, M) {
    var L, z = {}, q = null, I = null;
    M !== void 0 && (q = "" + M), D.key !== void 0 && (q = "" + D.key), D.ref !== void 0 && (I = D.ref);
    for (L in D)
      E.call(D, L) && !k.hasOwnProperty(L) && (z[L] = D[L]);
    if (U && U.defaultProps)
      for (L in D = U.defaultProps, D)
        z[L] === void 0 && (z[L] = D[L]);
    return { $$typeof: v, type: U, key: q, ref: I, props: z, _owner: b.current };
  }
  return Sv.Fragment = m, Sv.jsx = S, Sv.jsxs = S, Sv;
}
var Cv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JE;
function N5() {
  return JE || (JE = 1, process.env.NODE_ENV !== "production" && function() {
    var d = Oe, v = Symbol.for("react.element"), m = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), U = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), ee = Symbol.iterator, se = "@@iterator";
    function re(O) {
      if (O === null || typeof O != "object")
        return null;
      var ie = ee && O[ee] || O[se];
      return typeof ie == "function" ? ie : null;
    }
    var pe = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ge(O) {
      {
        for (var ie = arguments.length, Ee = new Array(ie > 1 ? ie - 1 : 0), je = 1; je < ie; je++)
          Ee[je - 1] = arguments[je];
        ye("error", O, Ee);
      }
    }
    function ye(O, ie, Ee) {
      {
        var je = pe.ReactDebugCurrentFrame, yt = je.getStackAddendum();
        yt !== "" && (ie += "%s", Ee = Ee.concat([yt]));
        var Lt = Ee.map(function(gt) {
          return String(gt);
        });
        Lt.unshift("Warning: " + ie), Function.prototype.apply.call(console[O], console, Lt);
      }
    }
    var Se = !1, ae = !1, ue = !1, ce = !1, He = !1, Ie;
    Ie = Symbol.for("react.module.reference");
    function ke(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === E || O === k || He || O === b || O === M || O === L || ce || O === I || Se || ae || ue || typeof O == "object" && O !== null && (O.$$typeof === q || O.$$typeof === z || O.$$typeof === S || O.$$typeof === U || O.$$typeof === D || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === Ie || O.getModuleId !== void 0));
    }
    function xe(O, ie, Ee) {
      var je = O.displayName;
      if (je)
        return je;
      var yt = ie.displayName || ie.name || "";
      return yt !== "" ? Ee + "(" + yt + ")" : Ee;
    }
    function rt(O) {
      return O.displayName || "Context";
    }
    function Te(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case E:
          return "Fragment";
        case m:
          return "Portal";
        case k:
          return "Profiler";
        case b:
          return "StrictMode";
        case M:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case U:
            var ie = O;
            return rt(ie) + ".Consumer";
          case S:
            var Ee = O;
            return rt(Ee._context) + ".Provider";
          case D:
            return xe(O, O.render, "ForwardRef");
          case z:
            var je = O.displayName || null;
            return je !== null ? je : Te(O.type) || "Memo";
          case q: {
            var yt = O, Lt = yt._payload, gt = yt._init;
            try {
              return Te(gt(Lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, Et = 0, Qe, De, ve, ze, N, ne, we;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function Ge() {
      {
        if (Et === 0) {
          Qe = console.log, De = console.info, ve = console.warn, ze = console.error, N = console.group, ne = console.groupCollapsed, we = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Et++;
      }
    }
    function mt() {
      {
        if (Et--, Et === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, O, {
              value: Qe
            }),
            info: Ze({}, O, {
              value: De
            }),
            warn: Ze({}, O, {
              value: ve
            }),
            error: Ze({}, O, {
              value: ze
            }),
            group: Ze({}, O, {
              value: N
            }),
            groupCollapsed: Ze({}, O, {
              value: ne
            }),
            groupEnd: Ze({}, O, {
              value: we
            })
          });
        }
        Et < 0 && ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = pe.ReactCurrentDispatcher, xt;
    function ut(O, ie, Ee) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (yt) {
            var je = yt.stack.trim().match(/\n( *(at )?)/);
            xt = je && je[1] || "";
          }
        return `
` + xt + O;
      }
    }
    var At = !1, br;
    {
      var Hn = typeof WeakMap == "function" ? WeakMap : Map;
      br = new Hn();
    }
    function Rr(O, ie) {
      if (!O || At)
        return "";
      {
        var Ee = br.get(O);
        if (Ee !== void 0)
          return Ee;
      }
      var je;
      At = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Lt;
      Lt = dt.current, dt.current = null, Ge();
      try {
        if (ie) {
          var gt = function() {
            throw Error();
          };
          if (Object.defineProperty(gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(gt, []);
            } catch (zt) {
              je = zt;
            }
            Reflect.construct(O, [], gt);
          } else {
            try {
              gt.call();
            } catch (zt) {
              je = zt;
            }
            O.call(gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (zt) {
            je = zt;
          }
          O();
        }
      } catch (zt) {
        if (zt && je && typeof zt.stack == "string") {
          for (var Je = zt.stack.split(`
`), Pn = je.stack.split(`
`), fn = Je.length - 1, dn = Pn.length - 1; fn >= 1 && dn >= 0 && Je[fn] !== Pn[dn]; )
            dn--;
          for (; fn >= 1 && dn >= 0; fn--, dn--)
            if (Je[fn] !== Pn[dn]) {
              if (fn !== 1 || dn !== 1)
                do
                  if (fn--, dn--, dn < 0 || Je[fn] !== Pn[dn]) {
                    var dr = `
` + Je[fn].replace(" at new ", " at ");
                    return O.displayName && dr.includes("<anonymous>") && (dr = dr.replace("<anonymous>", O.displayName)), typeof O == "function" && br.set(O, dr), dr;
                  }
                while (fn >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        At = !1, dt.current = Lt, mt(), Error.prepareStackTrace = yt;
      }
      var Si = O ? O.displayName || O.name : "", nu = Si ? ut(Si) : "";
      return typeof O == "function" && br.set(O, nu), nu;
    }
    function un(O, ie, Ee) {
      return Rr(O, !1);
    }
    function Vn(O) {
      var ie = O.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Mn(O, ie, Ee) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Rr(O, Vn(O));
      if (typeof O == "string")
        return ut(O);
      switch (O) {
        case M:
          return ut("Suspense");
        case L:
          return ut("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case D:
            return un(O.render);
          case z:
            return Mn(O.type, ie, Ee);
          case q: {
            var je = O, yt = je._payload, Lt = je._init;
            try {
              return Mn(Lt(yt), ie, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Dn = Object.prototype.hasOwnProperty, Sn = {}, Tr = pe.ReactDebugCurrentFrame;
    function kr(O) {
      if (O) {
        var ie = O._owner, Ee = Mn(O.type, O._source, ie ? ie.type : null);
        Tr.setExtraStackFrame(Ee);
      } else
        Tr.setExtraStackFrame(null);
    }
    function sn(O, ie, Ee, je, yt) {
      {
        var Lt = Function.call.bind(Dn);
        for (var gt in O)
          if (Lt(O, gt)) {
            var Je = void 0;
            try {
              if (typeof O[gt] != "function") {
                var Pn = Error((je || "React class") + ": " + Ee + " type `" + gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pn.name = "Invariant Violation", Pn;
              }
              Je = O[gt](ie, gt, je, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              Je = fn;
            }
            Je && !(Je instanceof Error) && (kr(yt), ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", je || "React class", Ee, gt, typeof Je), kr(null)), Je instanceof Error && !(Je.message in Sn) && (Sn[Je.message] = !0, kr(yt), ge("Failed %s type: %s", Ee, Je.message), kr(null));
          }
      }
    }
    var jn = Array.isArray;
    function sr(O) {
      return jn(O);
    }
    function Qn(O) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, Ee = ie && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return Ee;
      }
    }
    function cr(O) {
      try {
        return Bn(O), !1;
      } catch {
        return !0;
      }
    }
    function Bn(O) {
      return "" + O;
    }
    function fr(O) {
      if (cr(O))
        return ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(O)), Bn(O);
    }
    var cn = pe.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, ha, Ce;
    Ce = {};
    function qe(O) {
      if (Dn.call(O, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function wt(O) {
      if (Dn.call(O, "key")) {
        var ie = Object.getOwnPropertyDescriptor(O, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function It(O, ie) {
      if (typeof O.ref == "string" && cn.current && ie && cn.current.stateNode !== ie) {
        var Ee = Te(cn.current.type);
        Ce[Ee] || (ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Te(cn.current.type), O.ref), Ce[Ee] = !0);
      }
    }
    function Wt(O, ie) {
      {
        var Ee = function() {
          hi || (hi = !0, ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        Ee.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Un(O, ie) {
      {
        var Ee = function() {
          ha || (ha = !0, ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        Ee.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var xn = function(O, ie, Ee, je, yt, Lt, gt) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: O,
        key: ie,
        ref: Ee,
        props: gt,
        // Record the component responsible for creating this element.
        _owner: Lt
      };
      return Je._store = {}, Object.defineProperty(Je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function Dr(O, ie, Ee, je, yt) {
      {
        var Lt, gt = {}, Je = null, Pn = null;
        Ee !== void 0 && (fr(Ee), Je = "" + Ee), wt(ie) && (fr(ie.key), Je = "" + ie.key), qe(ie) && (Pn = ie.ref, It(ie, yt));
        for (Lt in ie)
          Dn.call(ie, Lt) && !er.hasOwnProperty(Lt) && (gt[Lt] = ie[Lt]);
        if (O && O.defaultProps) {
          var fn = O.defaultProps;
          for (Lt in fn)
            gt[Lt] === void 0 && (gt[Lt] = fn[Lt]);
        }
        if (Je || Pn) {
          var dn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Je && Wt(gt, dn), Pn && Un(gt, dn);
        }
        return xn(O, Je, Pn, yt, je, cn.current, gt);
      }
    }
    var Kt = pe.ReactCurrentOwner, Ar = pe.ReactDebugCurrentFrame;
    function Qt(O) {
      if (O) {
        var ie = O._owner, Ee = Mn(O.type, O._source, ie ? ie.type : null);
        Ar.setExtraStackFrame(Ee);
      } else
        Ar.setExtraStackFrame(null);
    }
    var Gt;
    Gt = !1;
    function ei(O) {
      return typeof O == "object" && O !== null && O.$$typeof === v;
    }
    function Oa() {
      {
        if (Kt.current) {
          var O = Te(Kt.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function yl(O) {
      {
        if (O !== void 0) {
          var ie = O.fileName.replace(/^.*[\\\/]/, ""), Ee = O.lineNumber;
          return `

Check your code at ` + ie + ":" + Ee + ".";
        }
        return "";
      }
    }
    var so = {};
    function tu(O) {
      {
        var ie = Oa();
        if (!ie) {
          var Ee = typeof O == "string" ? O : O.displayName || O.name;
          Ee && (ie = `

Check the top-level render call using <` + Ee + ">.");
        }
        return ie;
      }
    }
    function Hi(O, ie) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var Ee = tu(ie);
        if (so[Ee])
          return;
        so[Ee] = !0;
        var je = "";
        O && O._owner && O._owner !== Kt.current && (je = " It was passed a child from " + Te(O._owner.type) + "."), Qt(O), ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, je), Qt(null);
      }
    }
    function gl(O, ie) {
      {
        if (typeof O != "object")
          return;
        if (sr(O))
          for (var Ee = 0; Ee < O.length; Ee++) {
            var je = O[Ee];
            ei(je) && Hi(je, ie);
          }
        else if (ei(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var yt = re(O);
          if (typeof yt == "function" && yt !== O.entries)
            for (var Lt = yt.call(O), gt; !(gt = Lt.next()).done; )
              ei(gt.value) && Hi(gt.value, ie);
        }
      }
    }
    function ma(O) {
      {
        var ie = O.type;
        if (ie == null || typeof ie == "string")
          return;
        var Ee;
        if (typeof ie == "function")
          Ee = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === D || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === z))
          Ee = ie.propTypes;
        else
          return;
        if (Ee) {
          var je = Te(ie);
          sn(Ee, O.props, "prop", je, O);
        } else if (ie.PropTypes !== void 0 && !Gt) {
          Gt = !0;
          var yt = Te(ie);
          ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mi(O) {
      {
        for (var ie = Object.keys(O.props), Ee = 0; Ee < ie.length; Ee++) {
          var je = ie[Ee];
          if (je !== "children" && je !== "key") {
            Qt(O), ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", je), Qt(null);
            break;
          }
        }
        O.ref !== null && (Qt(O), ge("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    function ya(O, ie, Ee, je, yt, Lt) {
      {
        var gt = ke(O);
        if (!gt) {
          var Je = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pn = yl(yt);
          Pn ? Je += Pn : Je += Oa();
          var fn;
          O === null ? fn = "null" : sr(O) ? fn = "array" : O !== void 0 && O.$$typeof === v ? (fn = "<" + (Te(O.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof O, ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, Je);
        }
        var dn = Dr(O, ie, Ee, yt, Lt);
        if (dn == null)
          return dn;
        if (gt) {
          var dr = ie.children;
          if (dr !== void 0)
            if (je)
              if (sr(dr)) {
                for (var Si = 0; Si < dr.length; Si++)
                  gl(dr[Si], O);
                Object.freeze && Object.freeze(dr);
              } else
                ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gl(dr, O);
        }
        return O === E ? mi(dn) : ma(dn), dn;
      }
    }
    function yi(O, ie, Ee) {
      return ya(O, ie, Ee, !0);
    }
    function zr(O, ie, Ee) {
      return ya(O, ie, Ee, !1);
    }
    var ga = zr, gi = yi;
    Cv.Fragment = E, Cv.jsx = ga, Cv.jsxs = gi;
  }()), Cv;
}
process.env.NODE_ENV === "production" ? tS.exports = L5() : tS.exports = N5();
var R = tS.exports;
function Sx(d) {
  var v, m, E = "";
  if (typeof d == "string" || typeof d == "number")
    E += d;
  else if (typeof d == "object")
    if (Array.isArray(d))
      for (v = 0; v < d.length; v++)
        d[v] && (m = Sx(d[v])) && (E && (E += " "), E += m);
    else
      for (v in d)
        d[v] && (E && (E += " "), E += v);
  return E;
}
function bt() {
  for (var d, v, m = 0, E = ""; m < arguments.length; )
    (d = arguments[m++]) && (v = Sx(d)) && (E && (E += " "), E += v);
  return E;
}
var eu = /* @__PURE__ */ ((d) => (d.orange = "orange", d.white = "white", d))(eu || {});
const xy = ({ color: d = eu.orange }) => /* @__PURE__ */ R.jsxs(
  "div",
  {
    className: bt({
      ["Loader-wrapper"]: !0,
      ["Loader-orange"]: d === eu.orange,
      ["Loader-white"]: d === eu.white
    }),
    children: [
      /* @__PURE__ */ R.jsx("div", { className: "Loader-dot-left" }),
      /* @__PURE__ */ R.jsx("div", { className: "Loader-dot-center" }),
      /* @__PURE__ */ R.jsx("div", { className: "Loader-dot-right" })
    ]
  }
);
var on = /* @__PURE__ */ ((d) => (d.default = "default", d.primaryOrange = "primary-orange", d.primaryGrey = "primary-grey", d.primaryGreen = "primary-green", d.primaryRed = "primary-red", d.noBorder = "no-border", d.link = "link", d.hoverUnderline = "hoverUnderline", d.underline = "underline", d))(on || {});
const Zr = ({
  ariaLabel: d,
  text: v,
  theme: m,
  error: E,
  disabled: b = !1,
  className: k,
  rightIcon: S,
  centralIcon: U,
  leftIcon: D,
  loading: M,
  handleClick: L,
  id: z,
  name: q,
  tabIndex: I,
  submit: ee = !1
}) => {
  const se = () => {
    switch (m) {
      case on.primaryGreen:
        return eu.white;
      case on.primaryGrey:
        return eu.white;
      case on.primaryOrange:
        return eu.white;
      case on.primaryRed:
        return eu.white;
      default:
        return eu.orange;
    }
  };
  return /* @__PURE__ */ R.jsxs(
    "button",
    {
      "aria-label": d || "button",
      onClick: L,
      disabled: b || M,
      className: bt({
        Button: !0,
        ["Button-default"]: !m || m === on.default,
        ["Button-no-border"]: m === on.noBorder,
        ["Button-link"]: m === on.link,
        ["Buton-link-hover-underline"]: m === on.hoverUnderline,
        ["Button-underline"]: m === on.underline,
        ["Button-primary-orange"]: m === on.primaryOrange,
        ["Button-primary-grey"]: m === on.primaryGrey,
        ["Button-primary-green"]: m === on.primaryGreen,
        ["Button-primary-red"]: m === on.primaryRed,
        ["Button-error"]: E,
        [k || ""]: !!k
      }),
      id: z,
      name: q,
      tabIndex: I,
      type: ee ? "submit" : "button",
      children: [
        !M && D && /* @__PURE__ */ R.jsx("div", { className: "left-icon", children: D }),
        M ? /* @__PURE__ */ R.jsx(xy, { color: se() }) : /* @__PURE__ */ R.jsx("div", { className: "center-icon", children: U || v }),
        !M && S && /* @__PURE__ */ R.jsx("div", { className: "right-icon", children: S })
      ]
    }
  );
};
const M5 = () => /* @__PURE__ */ R.jsx("svg", { width: "12", height: "10", viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.00005 1C7.38665 1 8.68178 1.53327 9.63 2.2395C10.1023 2.59129 10.4641 2.96813 10.6993 3.30955C10.9464 3.66814 11.0001 3.90699 11.0001 4C11.0001 4.09301 10.9464 4.33186 10.6993 4.69045C10.4641 5.03187 10.1023 5.40871 9.63 5.7605C8.68193 6.46662 7.38706 6.99983 6.00072 7H6.00005C4.61346 7 3.31833 6.46673 2.3701 5.7605C1.89777 5.40871 1.53603 5.03187 1.30079 4.69045C1.05373 4.33186 1.00005 4.09301 1.00005 4C1.00005 3.90699 1.05373 3.66814 1.30079 3.30955C1.53603 2.96813 1.89777 2.59129 2.3701 2.2395C3.31833 1.53327 4.61346 1 6.00005 1ZM5.50005 7.98066C4.92624 7.93639 4.37342 7.81802 3.85406 7.64553L3.48512 9.12127C3.41815 9.38916 3.14668 9.55205 2.87879 9.48507C2.61089 9.4181 2.44801 9.14663 2.51498 8.87873L2.91918 7.26193C2.48937 7.0504 2.09371 6.80445 1.74157 6.53912L0.916078 7.77735C0.762902 8.00711 0.452467 8.0692 0.222703 7.91603C-0.00706127 7.76285 -0.0691482 7.45241 0.0840279 7.22265L0.984272 5.87228C0.363508 5.22844 5.31203e-05 4.54759 5.31203e-05 4C5.31203e-05 2.5 2.72732 0 6.00005 0C9.27278 0 12.0001 2.5 12.0001 4C12.0001 4.54759 11.6366 5.22844 11.0158 5.87228L11.9161 7.22265C12.0693 7.45241 12.0072 7.76285 11.7774 7.91603C11.5476 8.0692 11.2372 8.00711 11.084 7.77735L10.2585 6.53912C9.9064 6.80445 9.51074 7.0504 9.08092 7.26193L9.48512 8.87873C9.5521 9.14663 9.38922 9.4181 9.12132 9.48507C8.85342 9.55205 8.58196 9.38916 8.51498 9.12127L8.14605 7.64553C7.62669 7.81802 7.07387 7.93639 6.50005 7.98066V9.5C6.50005 9.77614 6.2762 10 6.00005 10C5.72391 10 5.50005 9.77614 5.50005 9.5V7.98066Z",
    fill: "currentColor"
  }
) }), j5 = () => /* @__PURE__ */ R.jsx("svg", { width: "12", height: "10", viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.50005 0.5C6.50005 0.223858 6.2762 0 6.00005 0C5.72391 0 5.50005 0.223858 5.50005 0.5V2.01934C4.92624 2.06361 4.37342 2.18198 3.85406 2.35447L3.48512 0.878732C3.41815 0.610835 3.14668 0.447954 2.87879 0.514929C2.61089 0.581903 2.44801 0.85337 2.51498 1.12127L2.91918 2.73807C2.48937 2.94961 2.09371 3.19555 1.74157 3.46088L0.916078 2.22265C0.762902 1.99289 0.452467 1.9308 0.222703 2.08397C-0.00706134 2.23715 -0.0691482 2.54759 0.084028 2.77735L0.984273 4.12772C0.363508 4.77156 5.31629e-05 5.45241 5.31629e-05 6C5.31629e-05 7.5 2.72733 10 6.00005 10C9.27278 10 12.0001 7.5 12.0001 6C12.0001 5.45241 11.6366 4.77156 11.0158 4.12772L11.9161 2.77735C12.0693 2.54759 12.0072 2.23715 11.7774 2.08397C11.5476 1.9308 11.2372 1.99289 11.084 2.22265L10.2585 3.46088C9.9064 3.19555 9.51074 2.94961 9.08092 2.73807L9.48512 1.12127C9.5521 0.85337 9.38922 0.581903 9.12132 0.514929C8.85342 0.447954 8.58196 0.610835 8.51498 0.878732L8.14605 2.35447C7.62669 2.18198 7.07387 2.06361 6.50005 2.01934V0.5ZM6.00005 3C4.61346 3 3.31833 3.53327 2.3701 4.2395C1.89777 4.59129 1.53603 4.96813 1.30079 5.30955C1.05373 5.66814 1.00005 5.90699 1.00005 6C1.00005 6.09301 1.05373 6.33186 1.30079 6.69045C1.53603 7.03187 1.89777 7.40871 2.3701 7.7605C3.31833 8.46673 4.61346 9 6.00005 9C7.38665 9 8.68178 8.46673 9.63 7.7605C10.1023 7.40871 10.4641 7.03187 10.6993 6.69045C10.9464 6.33186 11.0001 6.09301 11.0001 6C11.0001 5.90699 10.9464 5.66814 10.6993 5.30955C10.4641 4.96813 10.1023 4.59129 9.63 4.2395C8.68178 3.53327 7.38665 3 6.00005 3ZM7.00005 6C7.00005 6.55228 6.55234 7 6.00005 7C5.44777 7 5.00005 6.55228 5.00005 6C5.00005 5.44772 5.44777 5 6.00005 5C6.55234 5 7.00005 5.44772 7.00005 6Z",
    fill: "currentColor"
  }
) }), wy = () => /* @__PURE__ */ R.jsx(
  "svg",
  {
    "data-testid": "arrow-down-bold",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ R.jsx(
      "path",
      {
        d: "M13.5303 5.46967C13.8232 5.76256 13.8232 6.23744 13.5303 6.53033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L2.46967 6.53033C2.17678 6.23744 2.17678 5.76256 2.46967 5.46967C2.76256 5.17678 3.23744 5.17678 3.53033 5.46967L8 9.93934L12.4697 5.46967C12.7626 5.17678 13.2374 5.17678 13.5303 5.46967Z",
        fill: "currentColor"
      }
    )
  }
), U5 = () => /* @__PURE__ */ R.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx("path", { d: "M13 6L8 11L3 6", stroke: "currentColor" }) }), by = () => /* @__PURE__ */ R.jsx(
  "svg",
  {
    "data-testid": "arrow-up-bold",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ R.jsx(
      "path",
      {
        d: "M2.21967 11.2803C1.92678 10.9874 1.92678 10.5126 2.21967 10.2197L7.21967 5.21967C7.51256 4.92678 7.98744 4.92678 8.28033 5.21967L13.2803 10.2197C13.5732 10.5126 13.5732 10.9874 13.2803 11.2803C12.9874 11.5732 12.5126 11.5732 12.2197 11.2803L7.75 6.81066L3.28033 11.2803C2.98744 11.5732 2.51256 11.5732 2.21967 11.2803Z",
        fill: "currentColor"
      }
    )
  }
), A5 = () => /* @__PURE__ */ R.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    d: "M11.4041 2.02822C11.6273 2.25141 11.6272 2.61322 11.404 2.83635L4.26117 9.97751C4.15372 10.0849 4.00789 10.1452 3.85594 10.1448C3.70399 10.1445 3.55843 10.0837 3.45143 9.97579L0.594289 7.09492C0.372057 6.87084 0.373553 6.50903 0.597631 6.2868C0.821708 6.06457 1.18351 6.06606 1.40575 6.29014L3.85888 8.76365L10.596 2.02813C10.8192 1.805 11.181 1.80504 11.4041 2.02822Z",
    fill: "white"
  }
) }), z5 = () => /* @__PURE__ */ R.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 6.5C10.5 6.77614 10.2761 7 10 7H1.5C1.22386 7 1 6.77614 1 6.5V6.5C1 6.22386 1.22386 6 1.5 6H10C10.2761 6 10.5 6.22386 10.5 6.5V6.5Z",
    fill: "white"
  }
) }), F5 = () => /* @__PURE__ */ R.jsx(
  "svg",
  {
    viewBox: "0 0 1024 1024",
    focusable: "false",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ R.jsx("path", { d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" })
  }
), H5 = () => /* @__PURE__ */ R.jsx(
  "svg",
  {
    viewBox: "0 0 1024 1024",
    focusable: "false",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ R.jsx("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" })
  }
), V5 = () => /* @__PURE__ */ R.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx("path", { d: "M8 13.0005L3 7.50049L8 1.00049", stroke: "currentColor" }) }), B5 = () => /* @__PURE__ */ R.jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx("path", { d: "M4 1.00049L9 7.00049L4 13.0005", stroke: "currentColor" }) }), Cx = () => /* @__PURE__ */ R.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    d: "M1.85355 1.14626C1.65829 0.951001 1.34171 0.951001 1.14645 1.14626C0.951185 1.34153 0.951185 1.65811 1.14645 1.85337L5.29289 5.99982L1.14645 10.1463C0.951185 10.3415 0.951185 10.6581 1.14645 10.8534C1.34171 11.0486 1.65829 11.0486 1.85355 10.8534L6 6.70692L10.1464 10.8534C10.3417 11.0486 10.6583 11.0486 10.8536 10.8534C11.0488 10.6581 11.0488 10.3415 10.8536 10.1463L6.70711 5.99982L10.8536 1.85337C11.0488 1.65811 11.0488 1.34153 10.8536 1.14626C10.6583 0.951001 10.3417 0.951001 10.1464 1.14626L6 5.29271L1.85355 1.14626Z",
    fill: "currentColor"
  }
) }), Ex = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "41",
    height: "41",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#F03E3E" }),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM16.0303 14.9697C15.7374 14.6768 15.2625 14.6768 14.9696 14.9697C14.6768 15.2626 14.6768 15.7374 14.9696 16.0303L19.4393 20.5L14.9696 24.9697C14.6768 25.2626 14.6768 25.7374 14.9696 26.0303C15.2625 26.3232 15.7374 26.3232 16.0303 26.0303L20.5 21.5607L24.9696 26.0303C25.2625 26.3232 25.7374 26.3232 26.0303 26.0303C26.3232 25.7374 26.3232 25.2626 26.0303 24.9697L21.5607 20.5L26.0303 16.0303C26.3232 15.7374 26.3232 15.2626 26.0303 14.9697C25.7374 14.6768 25.2625 14.6768 24.9696 14.9697L20.5 19.4393L16.0303 14.9697Z",
          fill: "white"
        }
      )
    ]
  }
), xx = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "41",
    height: "41",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#35C04C" }),
      /* @__PURE__ */ R.jsx("mask", { id: "path-2-inside-1_4021_73443", fill: "white", children: /* @__PURE__ */ R.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM26.6123 16.5513C27.0002 16.9445 26.9958 17.5777 26.6026 17.9655L19.4625 25.0082C19.2655 25.2025 19.0084 25.2983 18.7521 25.2962C18.5006 25.2947 18.2494 25.1988 18.0562 25.0082L15.2001 22.1911C14.8069 21.8033 14.8026 21.1701 15.1904 20.7769C15.5782 20.3837 16.2114 20.3794 16.6046 20.7672L18.7593 22.8926L25.1982 16.5416C25.5914 16.1538 26.2245 16.1581 26.6123 16.5513Z"
        }
      ) }),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20.5 32.5C27.1274 32.5 32.5 27.1274 32.5 20.5C32.5 13.8726 27.1274 8.5 20.5 8.5C13.8726 8.5 8.5 13.8726 8.5 20.5C8.5 27.1274 13.8726 32.5 20.5 32.5ZM26.6123 16.5513C27.0002 16.9445 26.9958 17.5777 26.6026 17.9655L19.4625 25.0082C19.2655 25.2025 19.0084 25.2983 18.7521 25.2962C18.5006 25.2947 18.2494 25.1988 18.0562 25.0082L15.2001 22.1911C14.8069 21.8033 14.8026 21.1701 15.1904 20.7769C15.5782 20.3837 16.2114 20.3794 16.6046 20.7672L18.7593 22.8926L25.1982 16.5416C25.5914 16.1538 26.2245 16.1581 26.6123 16.5513Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M26.6026 17.9655L25.9004 17.2535V17.2535L26.6026 17.9655ZM19.4625 25.0082L18.7602 24.2963L18.7602 24.2963L19.4625 25.0082ZM18.7521 25.2962L18.7602 24.2963L18.7583 24.2963L18.7521 25.2962ZM18.0562 25.0082L17.3539 25.7202L17.3539 25.7202L18.0562 25.0082ZM15.2001 22.1911L14.4979 22.9031H14.4979L15.2001 22.1911ZM15.1904 20.7769L15.9023 21.4792L15.9023 21.4792L15.1904 20.7769ZM16.6046 20.7672L17.3068 20.0553H17.3068L16.6046 20.7672ZM18.7593 22.8926L18.0571 23.6045L18.7593 24.2972L19.4616 23.6045L18.7593 22.8926ZM25.1982 16.5416L25.9004 17.2535L25.9004 17.2535L25.1982 16.5416ZM31.5 20.5C31.5 26.5751 26.5751 31.5 20.5 31.5V33.5C27.6797 33.5 33.5 27.6797 33.5 20.5H31.5ZM20.5 9.5C26.5751 9.5 31.5 14.4249 31.5 20.5H33.5C33.5 13.3203 27.6797 7.5 20.5 7.5V9.5ZM9.5 20.5C9.5 14.4249 14.4249 9.5 20.5 9.5V7.5C13.3203 7.5 7.5 13.3203 7.5 20.5H9.5ZM20.5 31.5C14.4249 31.5 9.5 26.5751 9.5 20.5H7.5C7.5 27.6797 13.3203 33.5 20.5 33.5V31.5ZM27.3049 18.6774C28.0913 17.9018 28.1 16.6355 27.3243 15.8491L25.9004 17.2535V17.2535L27.3049 18.6774ZM20.1647 25.7202L27.3049 18.6774L25.9004 17.2535L18.7602 24.2963L20.1647 25.7202ZM18.744 26.2962C19.2551 26.3004 19.771 26.1084 20.1647 25.7202L18.7602 24.2963L18.7602 24.2963L18.744 26.2962ZM17.3539 25.7202C17.7401 26.1011 18.2442 26.2931 18.7459 26.2962L18.7583 24.2963L18.7584 24.2963L17.3539 25.7202ZM14.4979 22.9031L17.3539 25.7202L18.7584 24.2963L15.9023 21.4792L14.4979 22.9031ZM14.4785 20.0747C13.7028 20.8611 13.7115 22.1274 14.4979 22.9031L15.9023 21.4792L15.9023 21.4792L14.4785 20.0747ZM17.3068 20.0553C16.5204 19.2796 15.2541 19.2883 14.4784 20.0747L15.9023 21.4792H15.9023L17.3068 20.0553ZM19.4616 22.1806L17.3068 20.0553L15.9023 21.4792L18.0571 23.6045L19.4616 22.1806ZM24.4959 15.8296L18.0571 22.1806L19.4616 23.6045L25.9004 17.2535L24.4959 15.8296ZM27.3243 15.8491C26.5486 15.0627 25.2823 15.054 24.4959 15.8296L25.9004 17.2535L25.9004 17.2535L27.3243 15.8491Z",
          fill: "white",
          mask: "url(#path-2-inside-1_4021_73443)"
        }
      )
    ]
  }
), wx = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "41",
    height: "41",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#FF881A" }),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M20.5 8.5C18.1266 8.5 15.8066 9.20379 13.8332 10.5224C11.8598 11.8409 10.3217 13.7151 9.41345 15.9078C8.5052 18.1005 8.26756 20.5133 8.73058 22.8411C9.1936 25.1689 10.3365 27.307 12.0147 28.9853C13.693 30.6635 15.8311 31.8064 18.1589 32.2694C20.4867 32.7324 22.8995 32.4948 25.0922 31.5865C27.2849 30.6783 29.1591 29.1402 30.4776 27.1668C31.7962 25.1934 32.5 22.8734 32.5 20.5C32.5 18.9241 32.1896 17.3637 31.5866 15.9078C30.9835 14.4519 30.0996 13.129 28.9853 12.0147C27.871 10.9004 26.5481 10.0165 25.0922 9.41345C23.6363 8.81039 22.0759 8.5 20.5 8.5ZM20.5 27.7C20.2437 27.7 19.9931 27.624 19.78 27.4816C19.5669 27.3392 19.4007 27.1368 19.3027 26.9C19.2046 26.6631 19.1789 26.4026 19.2289 26.1512C19.2789 25.8998 19.4023 25.6688 19.5836 25.4876C19.7648 25.3063 19.9958 25.1829 20.2472 25.1329C20.4986 25.0829 20.7591 25.1086 20.996 25.2066C21.2328 25.3047 21.4352 25.4709 21.5776 25.684C21.72 25.8971 21.796 26.1477 21.796 26.404C21.796 26.7477 21.6595 27.0774 21.4164 27.3204C21.1734 27.5635 20.8437 27.7 20.5 27.7ZM21.796 22.084C21.796 22.4277 21.6595 22.7574 21.4164 23.0004C21.1734 23.2435 20.8437 23.38 20.5 23.38C20.1563 23.38 19.8266 23.2435 19.5836 23.0004C19.3405 22.7574 19.204 22.4277 19.204 22.084V14.596C19.204 14.2523 19.3405 13.9226 19.5836 13.6796C19.8266 13.4365 20.1563 13.3 20.5 13.3C20.8437 13.3 21.1734 13.4365 21.4164 13.6796C21.6595 13.9226 21.796 14.2523 21.796 14.596V22.084Z",
          fill: "white"
        }
      )
    ]
  }
), bx = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "41",
    height: "41",
    viewBox: "0 0 41 41",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx("rect", { x: "0.5", y: "0.5", width: "40", height: "40", rx: "4", fill: "#CCD5DD" }),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M20.3394 8.50108C13.7134 8.58903 8.41197 14.0345 8.50111 20.6614C8.58905 27.2856 14.0341 32.5858 20.6606 32.4989C27.2854 32.4097 32.588 26.9642 32.4989 20.3386C32.4109 13.7132 26.9672 8.41308 20.3394 8.50108ZM21.53 12.5478C22.794 12.5478 23.1659 13.2653 23.1659 14.0838C23.1659 15.108 22.3273 16.0546 20.8992 16.0546C19.7047 16.0546 19.1339 15.4653 19.1674 14.4932C19.1687 13.6744 19.8687 12.5478 21.53 12.5478ZM18.7688 28.5003C17.9436 28.5003 17.3383 27.9644 17.9168 25.6056L18.8661 21.4242C19.0301 20.7534 19.058 20.4856 18.8661 20.4856C18.6181 20.4856 17.5447 20.9496 16.9115 21.4043L16.4994 20.6816C18.5101 18.8855 20.8194 17.8335 21.8099 17.8335C22.6365 17.8335 22.774 18.8788 22.3606 20.4869L21.2754 24.8831C21.0834 25.659 21.166 25.9271 21.3566 25.9271C21.6046 25.9271 22.4166 25.6043 23.2152 24.9337L23.6833 25.6045C21.7287 27.6952 19.5955 28.5006 18.7688 28.5006L18.7688 28.5003Z",
          fill: "white"
        }
      )
    ]
  }
), P5 = () => /* @__PURE__ */ R.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ R.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2043 6.70142C11.2043 8.9693 9.36575 10.8078 7.09783 10.8078C4.8299 10.8078 2.99139 8.9693 2.99139 6.70142C2.99139 4.43353 4.8299 2.59503 7.09783 2.59503C9.36575 2.59503 11.2043 4.43353 11.2043 6.70142ZM10.8917 10.1194C11.7076 9.21437 12.2043 8.01589 12.2043 6.70142C12.2043 3.88124 9.91803 1.59503 7.09783 1.59503C4.27762 1.59503 1.99139 3.88124 1.99139 6.70142C1.99139 9.52159 4.27762 11.8078 7.09783 11.8078C8.20964 11.8078 9.23846 11.4525 10.0769 10.8492L12.6055 13.3777C12.9046 13.6769 13.1645 13.591 13.3777 13.3778C13.591 13.1645 13.6769 12.9046 13.3778 12.6055L10.8917 10.1194Z",
    fill: "currentColor"
  }
) });
var oo = /* @__PURE__ */ ((d) => (d.text = "text", d.number = "number", d.password = "password", d))(oo || {});
const uS = ({
  readOnly: d = !1,
  ariaLabel: v,
  styles: m,
  placeholder: E,
  error: b,
  errorText: k,
  bigLabel: S,
  smallLabel: U,
  disabled: D,
  maxLength: M,
  width: L = "100%",
  value: z,
  type: q,
  icon: I,
  firstIconButton: ee,
  secondIconButton: se,
  handleChange: re,
  handleBlur: pe,
  handleKeyPress: ge,
  name: ye,
  id: Se,
  nativeProps: ae
}) => {
  const ue = z ? String(z).length : 0, [ce, He] = Oe.useState(ue), [Ie, ke] = Oe.useState(!1), xe = (Qe) => {
    He(Qe.target.value.length), re && re(Qe);
  }, rt = (Qe) => {
    pe && pe(Qe);
  }, Te = (Qe) => {
    ge && ge(Qe);
  }, Ze = () => q && q !== oo.password ? q : q === oo.password ? Ie || (ae == null ? void 0 : ae.autoComplete) === "off" ? oo.text : oo.password : oo.text, Et = (Qe) => {
    Qe.preventDefault(), ke(!Ie);
  };
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "Input-wrapper",
      style: {
        width: L
      },
      children: [
        (S || U || M) && /* @__PURE__ */ R.jsxs("div", { className: "Input-top-elements", style: { width: L }, children: [
          /* @__PURE__ */ R.jsxs("div", { children: [
            S && /* @__PURE__ */ R.jsx(
              "div",
              {
                className: bt({
                  ["Input-big-label"]: !0,
                  ["Input-big-label-default"]: !D || !b,
                  ["Input-big-label-disabled"]: D,
                  ["Input-big-label-error"]: b
                }),
                children: S
              }
            ),
            U && /* @__PURE__ */ R.jsx(
              "div",
              {
                className: bt({
                  ["Input-small-label"]: !0,
                  ["Input-small-label-default "]: !D || !b,
                  ["Input-small-label-disabled"]: D,
                  ["Input-small-label-error"]: b
                }),
                children: U
              }
            )
          ] }),
          M && /* @__PURE__ */ R.jsxs(
            "div",
            {
              className: bt({
                ["Input-counter"]: !0,
                ["Input-counter-disabled"]: D
              }),
              style: {
                top: S && "12px" || U && "3px" || ""
              },
              children: [
                ce,
                "/",
                M
              ]
            }
          )
        ] }),
        /* @__PURE__ */ R.jsxs(
          "div",
          {
            className: bt({
              Input: !0,
              ["Input-disabled"]: D,
              ["Input-error"]: b
            }),
            style: {
              width: L
            },
            children: [
              I && /* @__PURE__ */ R.jsx(
                "span",
                {
                  className: bt({
                    ["Input-icon"]: !0,
                    ["Input-icon-disabled"]: D
                  }),
                  children: I
                }
              ),
              /* @__PURE__ */ R.jsx(
                "input",
                {
                  readOnly: d,
                  ...ae,
                  className: bt({
                    ["Input-textfield"]: !0,
                    ["Input-textfield-disabled"]: D,
                    ["Input-security"]: oo.password && !Ie && (ae == null ? void 0 : ae.autoComplete) === "off",
                    [(ae == null ? void 0 : ae.className) || ""]: ae == null ? void 0 : ae.className
                  }),
                  "aria-label": v || "",
                  type: Ze(),
                  placeholder: E || "",
                  disabled: D,
                  maxLength: M,
                  onBlur: rt,
                  onChange: xe,
                  onKeyPress: Te,
                  value: z,
                  name: ye || v || "",
                  id: Se,
                  style: { width: L, ...m }
                }
              ),
              ee && /* @__PURE__ */ R.jsx(
                "button",
                {
                  className: bt({
                    ["Input-button"]: !0,
                    ["Input-button-disabled"]: D || ee.disabled
                  }),
                  onClick: ee.handleClick,
                  disabled: D || ee.disabled,
                  children: ee.icon
                }
              ),
              ee && se && /* @__PURE__ */ R.jsx("div", { className: "Input-button-divider" }),
              se && q !== `${oo.password}` && /* @__PURE__ */ R.jsx(
                "button",
                {
                  className: bt({
                    ["Input-button"]: !0,
                    ["Input-button-disabled"]: D || se.disabled
                  }),
                  onClick: se.handleClick,
                  disabled: D || se.disabled,
                  type: "button",
                  children: se.icon
                }
              ),
              q === `${oo.password}` && /* @__PURE__ */ R.jsx(
                "button",
                {
                  "aria-label": Ie ? "password visiable" : "password not visiable",
                  className: bt({
                    ["Input-button"]: !0,
                    ["Input-button-password"]: !0,
                    ["Input-button-disabled"]: D
                  }),
                  onClick: Et,
                  type: "button",
                  children: Ie ? /* @__PURE__ */ R.jsx(j5, {}) : /* @__PURE__ */ R.jsx(M5, {})
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ R.jsx("div", { className: "Input-error-text", children: k })
      ]
    }
  );
};
const M6 = ({
  ariaLabel: d,
  disabled: v,
  error: m,
  defaultValue: E,
  value: b,
  label: k,
  handleClick: S,
  handleChange: U
}) => {
  const D = (M) => {
    U && U(M.target.checked);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "Toggle-wrapper", children: [
    /* @__PURE__ */ R.jsxs(
      "label",
      {
        className: bt({
          Toggle: !0,
          ["Toggle-default"]: !0,
          ["Toggle-disabled"]: v,
          ["Toggle-error"]: m
        }),
        children: [
          /* @__PURE__ */ R.jsx(
            "input",
            {
              id: "toggle",
              type: "checkbox",
              className: "Toggle-focus",
              "aria-label": d || "",
              onClick: S,
              onChange: D,
              checked: b,
              defaultChecked: E,
              disabled: v
            }
          ),
          /* @__PURE__ */ R.jsx(
            "span",
            {
              className: bt({
                ["Toggle-slider"]: !0,
                ["Toggle-slider-default"]: !0,
                ["Toggle-slider-disabled"]: v,
                ["Toggle-slider-error"]: m
              })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ R.jsx(
      "label",
      {
        htmlFor: "toggle",
        className: bt({
          ["Toggle-label"]: !0,
          ["Toggle-label-error"]: m,
          ["Toggle-label-disabled"]: v
        }),
        children: k
      }
    )
  ] });
};
const j6 = ({
  children: d,
  size: v,
  bold: m,
  underline: E,
  uppercase: b,
  color: k,
  spacing: S,
  className: U,
  display: D
}) => /* @__PURE__ */ R.jsx(
  "div",
  {
    className: bt({
      Text: !0,
      ["Text-display "]: !!D,
      ["Text-bold"]: !!m,
      ["Text-underline"]: !!E,
      ["Text-uppercase"]: !!b,
      [U || ""]: !!U
    }),
    style: {
      fontSize: v,
      color: k,
      letterSpacing: S
    },
    children: d
  }
);
const U6 = ({
  header: d,
  ariaLabel: v,
  content: m,
  className: E,
  label: b
}) => {
  const [k, S] = Oe.useState(!1);
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: bt({
        Expanded: !0,
        ["Expanded-opened"]: k,
        [E || ""]: !!E
      }),
      children: [
        /* @__PURE__ */ R.jsxs("div", { className: "Expanded-header", children: [
          /* @__PURE__ */ R.jsx(
            Zr,
            {
              handleClick: () => S(!k),
              leftIcon: k ? /* @__PURE__ */ R.jsx(by, {}) : /* @__PURE__ */ R.jsx(wy, {}),
              theme: on.noBorder,
              ariaLabel: v,
              className: "Expanded-header-toggle-button",
              text: b
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "Expanded-header-content", children: d })
        ] }),
        k && /* @__PURE__ */ R.jsx("div", { className: "Expanded-content", children: m })
      ]
    }
  );
};
var ex = function(v) {
  return v.reduce(function(m, E) {
    var b = E[0], k = E[1];
    return m[b] = k, m;
  }, {});
}, tx = typeof window < "u" && window.document && window.document.createElement ? Oe.useLayoutEffect : Oe.useEffect, rS = { exports: {} }, Xa = {}, my = { exports: {} }, J1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nx;
function $5() {
  return nx || (nx = 1, function(d) {
    function v(ve, ze) {
      var N = ve.length;
      ve.push(ze);
      e:
        for (; 0 < N; ) {
          var ne = N - 1 >>> 1, we = ve[ne];
          if (0 < b(we, ze))
            ve[ne] = ze, ve[N] = we, N = ne;
          else
            break e;
        }
    }
    function m(ve) {
      return ve.length === 0 ? null : ve[0];
    }
    function E(ve) {
      if (ve.length === 0)
        return null;
      var ze = ve[0], N = ve.pop();
      if (N !== ze) {
        ve[0] = N;
        e:
          for (var ne = 0, we = ve.length, at = we >>> 1; ne < at; ) {
            var Ge = 2 * (ne + 1) - 1, mt = ve[Ge], dt = Ge + 1, xt = ve[dt];
            if (0 > b(mt, N))
              dt < we && 0 > b(xt, mt) ? (ve[ne] = xt, ve[dt] = N, ne = dt) : (ve[ne] = mt, ve[Ge] = N, ne = Ge);
            else if (dt < we && 0 > b(xt, N))
              ve[ne] = xt, ve[dt] = N, ne = dt;
            else
              break e;
          }
      }
      return ze;
    }
    function b(ve, ze) {
      var N = ve.sortIndex - ze.sortIndex;
      return N !== 0 ? N : ve.id - ze.id;
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
    var D = [], M = [], L = 1, z = null, q = 3, I = !1, ee = !1, se = !1, re = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ye(ve) {
      for (var ze = m(M); ze !== null; ) {
        if (ze.callback === null)
          E(M);
        else if (ze.startTime <= ve)
          E(M), ze.sortIndex = ze.expirationTime, v(D, ze);
        else
          break;
        ze = m(M);
      }
    }
    function Se(ve) {
      if (se = !1, ye(ve), !ee)
        if (m(D) !== null)
          ee = !0, Qe(ae);
        else {
          var ze = m(M);
          ze !== null && De(Se, ze.startTime - ve);
        }
    }
    function ae(ve, ze) {
      ee = !1, se && (se = !1, pe(He), He = -1), I = !0;
      var N = q;
      try {
        for (ye(ze), z = m(D); z !== null && (!(z.expirationTime > ze) || ve && !xe()); ) {
          var ne = z.callback;
          if (typeof ne == "function") {
            z.callback = null, q = z.priorityLevel;
            var we = ne(z.expirationTime <= ze);
            ze = d.unstable_now(), typeof we == "function" ? z.callback = we : z === m(D) && E(D), ye(ze);
          } else
            E(D);
          z = m(D);
        }
        if (z !== null)
          var at = !0;
        else {
          var Ge = m(M);
          Ge !== null && De(Se, Ge.startTime - ze), at = !1;
        }
        return at;
      } finally {
        z = null, q = N, I = !1;
      }
    }
    var ue = !1, ce = null, He = -1, Ie = 5, ke = -1;
    function xe() {
      return !(d.unstable_now() - ke < Ie);
    }
    function rt() {
      if (ce !== null) {
        var ve = d.unstable_now();
        ke = ve;
        var ze = !0;
        try {
          ze = ce(!0, ve);
        } finally {
          ze ? Te() : (ue = !1, ce = null);
        }
      } else
        ue = !1;
    }
    var Te;
    if (typeof ge == "function")
      Te = function() {
        ge(rt);
      };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), Et = Ze.port2;
      Ze.port1.onmessage = rt, Te = function() {
        Et.postMessage(null);
      };
    } else
      Te = function() {
        re(rt, 0);
      };
    function Qe(ve) {
      ce = ve, ue || (ue = !0, Te());
    }
    function De(ve, ze) {
      He = re(function() {
        ve(d.unstable_now());
      }, ze);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(ve) {
      ve.callback = null;
    }, d.unstable_continueExecution = function() {
      ee || I || (ee = !0, Qe(ae));
    }, d.unstable_forceFrameRate = function(ve) {
      0 > ve || 125 < ve ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ie = 0 < ve ? Math.floor(1e3 / ve) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, d.unstable_getFirstCallbackNode = function() {
      return m(D);
    }, d.unstable_next = function(ve) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var ze = 3;
          break;
        default:
          ze = q;
      }
      var N = q;
      q = ze;
      try {
        return ve();
      } finally {
        q = N;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(ve, ze) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ve = 3;
      }
      var N = q;
      q = ve;
      try {
        return ze();
      } finally {
        q = N;
      }
    }, d.unstable_scheduleCallback = function(ve, ze, N) {
      var ne = d.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? ne + N : ne) : N = ne, ve) {
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
      return we = N + we, ve = { id: L++, callback: ze, priorityLevel: ve, startTime: N, expirationTime: we, sortIndex: -1 }, N > ne ? (ve.sortIndex = N, v(M, ve), m(D) === null && ve === m(M) && (se ? (pe(He), He = -1) : se = !0, De(Se, N - ne))) : (ve.sortIndex = we, v(D, ve), ee || I || (ee = !0, Qe(ae))), ve;
    }, d.unstable_shouldYield = xe, d.unstable_wrapCallback = function(ve) {
      var ze = q;
      return function() {
        var N = q;
        q = ze;
        try {
          return ve.apply(this, arguments);
        } finally {
          q = N;
        }
      };
    };
  }(J1)), J1;
}
var eS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rx;
function I5() {
  return rx || (rx = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, m = !1, E = 5;
      function b(Ce, qe) {
        var wt = Ce.length;
        Ce.push(qe), U(Ce, qe, wt);
      }
      function k(Ce) {
        return Ce.length === 0 ? null : Ce[0];
      }
      function S(Ce) {
        if (Ce.length === 0)
          return null;
        var qe = Ce[0], wt = Ce.pop();
        return wt !== qe && (Ce[0] = wt, D(Ce, wt, 0)), qe;
      }
      function U(Ce, qe, wt) {
        for (var It = wt; It > 0; ) {
          var Wt = It - 1 >>> 1, Un = Ce[Wt];
          if (M(Un, qe) > 0)
            Ce[Wt] = qe, Ce[It] = Un, It = Wt;
          else
            return;
        }
      }
      function D(Ce, qe, wt) {
        for (var It = wt, Wt = Ce.length, Un = Wt >>> 1; It < Un; ) {
          var xn = (It + 1) * 2 - 1, Dr = Ce[xn], Kt = xn + 1, Ar = Ce[Kt];
          if (M(Dr, qe) < 0)
            Kt < Wt && M(Ar, Dr) < 0 ? (Ce[It] = Ar, Ce[Kt] = qe, It = Kt) : (Ce[It] = Dr, Ce[xn] = qe, It = xn);
          else if (Kt < Wt && M(Ar, qe) < 0)
            Ce[It] = Ar, Ce[Kt] = qe, It = Kt;
          else
            return;
        }
      }
      function M(Ce, qe) {
        var wt = Ce.sortIndex - qe.sortIndex;
        return wt !== 0 ? wt : Ce.id - qe.id;
      }
      var L = 1, z = 2, q = 3, I = 4, ee = 5;
      function se(Ce, qe) {
      }
      var re = typeof performance == "object" && typeof performance.now == "function";
      if (re) {
        var pe = performance;
        d.unstable_now = function() {
          return pe.now();
        };
      } else {
        var ge = Date, ye = ge.now();
        d.unstable_now = function() {
          return ge.now() - ye;
        };
      }
      var Se = 1073741823, ae = -1, ue = 250, ce = 5e3, He = 1e4, Ie = Se, ke = [], xe = [], rt = 1, Te = null, Ze = q, Et = !1, Qe = !1, De = !1, ve = typeof setTimeout == "function" ? setTimeout : null, ze = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ne(Ce) {
        for (var qe = k(xe); qe !== null; ) {
          if (qe.callback === null)
            S(xe);
          else if (qe.startTime <= Ce)
            S(xe), qe.sortIndex = qe.expirationTime, b(ke, qe);
          else
            return;
          qe = k(xe);
        }
      }
      function we(Ce) {
        if (De = !1, ne(Ce), !Qe)
          if (k(ke) !== null)
            Qe = !0, fr(at);
          else {
            var qe = k(xe);
            qe !== null && cn(we, qe.startTime - Ce);
          }
      }
      function at(Ce, qe) {
        Qe = !1, De && (De = !1, er()), Et = !0;
        var wt = Ze;
        try {
          var It;
          if (!m)
            return Ge(Ce, qe);
        } finally {
          Te = null, Ze = wt, Et = !1;
        }
      }
      function Ge(Ce, qe) {
        var wt = qe;
        for (ne(wt), Te = k(ke); Te !== null && !v && !(Te.expirationTime > wt && (!Ce || kr())); ) {
          var It = Te.callback;
          if (typeof It == "function") {
            Te.callback = null, Ze = Te.priorityLevel;
            var Wt = Te.expirationTime <= wt, Un = It(Wt);
            wt = d.unstable_now(), typeof Un == "function" ? Te.callback = Un : Te === k(ke) && S(ke), ne(wt);
          } else
            S(ke);
          Te = k(ke);
        }
        if (Te !== null)
          return !0;
        var xn = k(xe);
        return xn !== null && cn(we, xn.startTime - wt), !1;
      }
      function mt(Ce, qe) {
        switch (Ce) {
          case L:
          case z:
          case q:
          case I:
          case ee:
            break;
          default:
            Ce = q;
        }
        var wt = Ze;
        Ze = Ce;
        try {
          return qe();
        } finally {
          Ze = wt;
        }
      }
      function dt(Ce) {
        var qe;
        switch (Ze) {
          case L:
          case z:
          case q:
            qe = q;
            break;
          default:
            qe = Ze;
            break;
        }
        var wt = Ze;
        Ze = qe;
        try {
          return Ce();
        } finally {
          Ze = wt;
        }
      }
      function xt(Ce) {
        var qe = Ze;
        return function() {
          var wt = Ze;
          Ze = qe;
          try {
            return Ce.apply(this, arguments);
          } finally {
            Ze = wt;
          }
        };
      }
      function ut(Ce, qe, wt) {
        var It = d.unstable_now(), Wt;
        if (typeof wt == "object" && wt !== null) {
          var Un = wt.delay;
          typeof Un == "number" && Un > 0 ? Wt = It + Un : Wt = It;
        } else
          Wt = It;
        var xn;
        switch (Ce) {
          case L:
            xn = ae;
            break;
          case z:
            xn = ue;
            break;
          case ee:
            xn = Ie;
            break;
          case I:
            xn = He;
            break;
          case q:
          default:
            xn = ce;
            break;
        }
        var Dr = Wt + xn, Kt = {
          id: rt++,
          callback: qe,
          priorityLevel: Ce,
          startTime: Wt,
          expirationTime: Dr,
          sortIndex: -1
        };
        return Wt > It ? (Kt.sortIndex = Wt, b(xe, Kt), k(ke) === null && Kt === k(xe) && (De ? er() : De = !0, cn(we, Wt - It))) : (Kt.sortIndex = Dr, b(ke, Kt), !Qe && !Et && (Qe = !0, fr(at))), Kt;
      }
      function At() {
      }
      function br() {
        !Qe && !Et && (Qe = !0, fr(at));
      }
      function Hn() {
        return k(ke);
      }
      function Rr(Ce) {
        Ce.callback = null;
      }
      function un() {
        return Ze;
      }
      var Vn = !1, Mn = null, Dn = -1, Sn = E, Tr = -1;
      function kr() {
        var Ce = d.unstable_now() - Tr;
        return !(Ce < Sn);
      }
      function sn() {
      }
      function jn(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? Sn = Math.floor(1e3 / Ce) : Sn = E;
      }
      var sr = function() {
        if (Mn !== null) {
          var Ce = d.unstable_now();
          Tr = Ce;
          var qe = !0, wt = !0;
          try {
            wt = Mn(qe, Ce);
          } finally {
            wt ? Qn() : (Vn = !1, Mn = null);
          }
        } else
          Vn = !1;
      }, Qn;
      if (typeof N == "function")
        Qn = function() {
          N(sr);
        };
      else if (typeof MessageChannel < "u") {
        var cr = new MessageChannel(), Bn = cr.port2;
        cr.port1.onmessage = sr, Qn = function() {
          Bn.postMessage(null);
        };
      } else
        Qn = function() {
          ve(sr, 0);
        };
      function fr(Ce) {
        Mn = Ce, Vn || (Vn = !0, Qn());
      }
      function cn(Ce, qe) {
        Dn = ve(function() {
          Ce(d.unstable_now());
        }, qe);
      }
      function er() {
        ze(Dn), Dn = -1;
      }
      var hi = sn, ha = null;
      d.unstable_IdlePriority = ee, d.unstable_ImmediatePriority = L, d.unstable_LowPriority = I, d.unstable_NormalPriority = q, d.unstable_Profiling = ha, d.unstable_UserBlockingPriority = z, d.unstable_cancelCallback = Rr, d.unstable_continueExecution = br, d.unstable_forceFrameRate = jn, d.unstable_getCurrentPriorityLevel = un, d.unstable_getFirstCallbackNode = Hn, d.unstable_next = dt, d.unstable_pauseExecution = At, d.unstable_requestPaint = hi, d.unstable_runWithPriority = mt, d.unstable_scheduleCallback = ut, d.unstable_shouldYield = kr, d.unstable_wrapCallback = xt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(eS)), eS;
}
var ax;
function Rx() {
  return ax || (ax = 1, process.env.NODE_ENV === "production" ? my.exports = $5() : my.exports = I5()), my.exports;
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
var ix;
function Y5() {
  if (ix)
    return Xa;
  ix = 1;
  var d = Oe, v = Rx();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), b = {};
  function k(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++)
      E.add(r[n]);
  }
  var U = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, L = {}, z = {};
  function q(n) {
    return D.call(z, n) ? !0 : D.call(L, n) ? !1 : M.test(n) ? z[n] = !0 : (L[n] = !0, !1);
  }
  function I(n, r, l, u) {
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
    if (r === null || typeof r > "u" || I(n, r, l, u))
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
  function se(n, r, l, u, c, p, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = C;
  }
  var re = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    re[n] = new se(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    re[r] = new se(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    re[n] = new se(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    re[n] = new se(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    re[n] = new se(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    re[n] = new se(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    re[n] = new se(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    re[n] = new se(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    re[n] = new se(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var pe = /[\-:]([a-z])/g;
  function ge(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      pe,
      ge
    );
    re[r] = new se(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(pe, ge);
    re[r] = new se(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(pe, ge);
    re[r] = new se(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    re[n] = new se(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), re.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    re[n] = new se(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ye(n, r, l, u) {
    var c = re.hasOwnProperty(r) ? re[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, l, c, u) && (l = null), u || c === null ? q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Se = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ae = Symbol.for("react.element"), ue = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), xe = Symbol.for("react.context"), rt = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ve = Symbol.iterator;
  function ze(n) {
    return n === null || typeof n != "object" ? null : (n = ve && n[ve] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var N = Object.assign, ne;
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
  var at = !1;
  function Ge(n, r) {
    if (!n || at)
      return "";
    at = !0;
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
          } catch (G) {
            var u = G;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (G) {
            u = G;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          u = G;
        }
        n();
      }
    } catch (G) {
      if (G && u && typeof G.stack == "string") {
        for (var c = G.stack.split(`
`), p = u.stack.split(`
`), C = c.length - 1, T = p.length - 1; 1 <= C && 0 <= T && c[C] !== p[T]; )
          T--;
        for (; 1 <= C && 0 <= T; C--, T--)
          if (c[C] !== p[T]) {
            if (C !== 1 || T !== 1)
              do
                if (C--, T--, 0 > T || c[C] !== p[T]) {
                  var j = `
` + c[C].replace(" at new ", " at ");
                  return n.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", n.displayName)), j;
                }
              while (1 <= C && 0 <= T);
            break;
          }
      }
    } finally {
      at = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function mt(n) {
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
        return n = Ge(n.type, !1), n;
      case 11:
        return n = Ge(n.type.render, !1), n;
      case 1:
        return n = Ge(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ce:
        return "Fragment";
      case ue:
        return "Portal";
      case Ie:
        return "Profiler";
      case He:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case xe:
          return (n.displayName || "Context") + ".Consumer";
        case ke:
          return (n._context.displayName || "Context") + ".Provider";
        case rt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Et:
          return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
        case Qe:
          r = n._payload, n = n._init;
          try {
            return dt(n(r));
          } catch {
          }
      }
    return null;
  }
  function xt(n) {
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
        return dt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
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
  function ut(n) {
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
  function br(n) {
    var r = At(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(C) {
        u = "" + C, p.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(C) {
        u = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Hn(n) {
    n._valueTracker || (n._valueTracker = br(n));
  }
  function Rr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = At(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function un(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Vn(n, r) {
    var l = r.checked;
    return N({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Mn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = ut(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Dn(n, r) {
    r = r.checked, r != null && ye(n, "checked", r, !1);
  }
  function Sn(n, r) {
    Dn(n, r);
    var l = ut(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? kr(n, r.type, l) : r.hasOwnProperty("defaultValue") && kr(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Tr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function kr(n, r, l) {
    (r !== "number" || un(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var sn = Array.isArray;
  function jn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ut(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function sr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return N({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Qn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (sn(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ut(l) };
  }
  function cr(n, r) {
    var l = ut(r.value), u = ut(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function Bn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function fr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function cn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? fr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var er, hi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (er = er || document.createElement("div"), er.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = er.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ha(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ce = {
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
  }, qe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ce).forEach(function(n) {
    qe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ce[r] = Ce[n];
    });
  });
  function wt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ce.hasOwnProperty(n) && Ce[n] ? ("" + r).trim() : r + "px";
  }
  function It(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = wt(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Wt = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Un(n, r) {
    if (r) {
      if (Wt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function xn(n, r) {
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
  var Dr = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ar = null, Qt = null, Gt = null;
  function ei(n) {
    if (n = ks(n)) {
      if (typeof Ar != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = Ke(r), Ar(n.stateNode, n.type, r));
    }
  }
  function Oa(n) {
    Qt ? Gt ? Gt.push(n) : Gt = [n] : Qt = n;
  }
  function yl() {
    if (Qt) {
      var n = Qt, r = Gt;
      if (Gt = Qt = null, ei(n), r)
        for (n = 0; n < r.length; n++)
          ei(r[n]);
    }
  }
  function so(n, r) {
    return n(r);
  }
  function tu() {
  }
  var Hi = !1;
  function gl(n, r, l) {
    if (Hi)
      return n(r, l);
    Hi = !0;
    try {
      return so(n, r, l);
    } finally {
      Hi = !1, (Qt !== null || Gt !== null) && (tu(), yl());
    }
  }
  function ma(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = Ke(l);
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
  var mi = !1;
  if (U)
    try {
      var ya = {};
      Object.defineProperty(ya, "passive", { get: function() {
        mi = !0;
      } }), window.addEventListener("test", ya, ya), window.removeEventListener("test", ya, ya);
    } catch {
      mi = !1;
    }
  function yi(n, r, l, u, c, p, C, T, j) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, G);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var zr = !1, ga = null, gi = !1, O = null, ie = { onError: function(n) {
    zr = !0, ga = n;
  } };
  function Ee(n, r, l, u, c, p, C, T, j) {
    zr = !1, ga = null, yi.apply(ie, arguments);
  }
  function je(n, r, l, u, c, p, C, T, j) {
    if (Ee.apply(this, arguments), zr) {
      if (zr) {
        var G = ga;
        zr = !1, ga = null;
      } else
        throw Error(m(198));
      gi || (gi = !0, O = G);
    }
  }
  function yt(n) {
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
  function Lt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function gt(n) {
    if (yt(n) !== n)
      throw Error(m(188));
  }
  function Je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = yt(n), r === null)
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
            return gt(c), n;
          if (p === u)
            return gt(c), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== u.return)
        l = c, u = p;
      else {
        for (var C = !1, T = c.child; T; ) {
          if (T === l) {
            C = !0, l = c, u = p;
            break;
          }
          if (T === u) {
            C = !0, u = c, l = p;
            break;
          }
          T = T.sibling;
        }
        if (!C) {
          for (T = p.child; T; ) {
            if (T === l) {
              C = !0, l = p, u = c;
              break;
            }
            if (T === u) {
              C = !0, u = p, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!C)
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
  function Pn(n) {
    return n = Je(n), n !== null ? fn(n) : null;
  }
  function fn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = fn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = v.unstable_scheduleCallback, dr = v.unstable_cancelCallback, Si = v.unstable_shouldYield, nu = v.unstable_requestPaint, zt = v.unstable_now, cd = v.unstable_getCurrentPriorityLevel, ti = v.unstable_ImmediatePriority, Rt = v.unstable_UserBlockingPriority, Ci = v.unstable_NormalPriority, Sl = v.unstable_LowPriority, ru = v.unstable_IdlePriority, Cl = null, Kr = null;
  function cs(n) {
    if (Kr && typeof Kr.onCommitFiberRoot == "function")
      try {
        Kr.onCommitFiberRoot(Cl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Fr = Math.clz32 ? Math.clz32 : yc, fs = Math.log, ds = Math.LN2;
  function yc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fs(n) / ds | 0) | 0;
  }
  var au = 64, El = 4194304;
  function ni(n) {
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
  function Hr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, C = l & 268435455;
    if (C !== 0) {
      var T = C & ~c;
      T !== 0 ? u = ni(T) : (p &= C, p !== 0 && (u = ni(p)));
    } else
      C = l & ~c, C !== 0 ? u = ni(C) : p !== 0 && (u = ni(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Fr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function xl(n, r) {
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
  function wl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var C = 31 - Fr(p), T = 1 << C, j = c[C];
      j === -1 ? (!(T & l) || T & u) && (c[C] = xl(T, r)) : j <= r && (n.expiredLanes |= T), p &= ~T;
    }
  }
  function bl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = au;
    return au <<= 1, !(au & 4194240) && (au = 64), n;
  }
  function lu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Fr(r), n[r] = l;
  }
  function fd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Fr(l), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~p;
    }
  }
  function Ei(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Fr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Bt = 0;
  function ou(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var co, uu, Ft, su, cu, pt = !1, fo = [], wn = null, Jr = null, Vr = null, Rl = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), qt = [], gc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ea(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        wn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        Vr = null;
        break;
      case "pointerover":
      case "pointerout":
        Rl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(r.pointerId);
    }
  }
  function tr(n, r, l, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = ks(r), r !== null && uu(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function xi(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return wn = tr(wn, n, r, l, u, c), !0;
      case "dragenter":
        return Jr = tr(Jr, n, r, l, u, c), !0;
      case "mouseover":
        return Vr = tr(Vr, n, r, l, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return Rl.set(p, tr(Rl.get(p) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, _n.set(p, tr(_n.get(p) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Sc(n) {
    var r = ja(n.target);
    if (r !== null) {
      var l = yt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Lt(l), r !== null) {
            n.blockedOn = r, cu(n.priority, function() {
              Ft(l);
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
  function Bi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = du(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        Dr = u, l.target.dispatchEvent(u), Dr = null;
      } else
        return r = ks(l), r !== null && uu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Tl(n, r, l) {
    Bi(n) && l.delete(r);
  }
  function Cc() {
    pt = !1, wn !== null && Bi(wn) && (wn = null), Jr !== null && Bi(Jr) && (Jr = null), Vr !== null && Bi(Vr) && (Vr = null), Rl.forEach(Tl), _n.forEach(Tl);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, pt || (pt = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Cc)));
  }
  function kl(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < fo.length) {
      La(fo[0], n);
      for (var l = 1; l < fo.length; l++) {
        var u = fo[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (wn !== null && La(wn, n), Jr !== null && La(Jr, n), Vr !== null && La(Vr, n), Rl.forEach(r), _n.forEach(r), l = 0; l < qt.length; l++)
      u = qt[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < qt.length && (l = qt[0], l.blockedOn === null); )
      Sc(l), l.blockedOn === null && qt.shift();
  }
  var Dl = Se.ReactCurrentBatchConfig, Na = !0;
  function fu(n, r, l, u) {
    var c = Bt, p = Dl.transition;
    Dl.transition = null;
    try {
      Bt = 1, Ol(n, r, l, u);
    } finally {
      Bt = c, Dl.transition = p;
    }
  }
  function _l(n, r, l, u) {
    var c = Bt, p = Dl.transition;
    Dl.transition = null;
    try {
      Bt = 4, Ol(n, r, l, u);
    } finally {
      Bt = c, Dl.transition = p;
    }
  }
  function Ol(n, r, l, u) {
    if (Na) {
      var c = du(n, r, l, u);
      if (c === null)
        _c(n, r, u, po, l), ea(n, u);
      else if (xi(c, n, r, l, u))
        u.stopPropagation();
      else if (ea(n, u), r & 4 && -1 < gc.indexOf(n)) {
        for (; c !== null; ) {
          var p = ks(c);
          if (p !== null && co(p), p = du(n, r, l, u), p === null && _c(n, r, u, po, l), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        _c(n, r, u, null, l);
    }
  }
  var po = null;
  function du(n, r, l, u) {
    if (po = null, n = Kt(u), n = ja(n), n !== null)
      if (r = yt(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Lt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return po = n, null;
  }
  function ps(n) {
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
          case ti:
            return 1;
          case Rt:
            return 4;
          case Ci:
          case Sl:
            return 16;
          case ru:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, g = null, _ = null;
  function W() {
    if (_)
      return _;
    var n, r = g, l = r.length, u, c = "value" in ri ? ri.value : ri.textContent, p = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var C = l - n;
    for (u = 1; u <= C && r[l - u] === c[p - u]; u++)
      ;
    return _ = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function X(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function he() {
    return !0;
  }
  function it() {
    return !1;
  }
  function _e(n) {
    function r(l, u, c, p, C) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = C, this.currentTarget = null;
      for (var T in n)
        n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(p) : p[T]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? he : it, this.isPropagationStopped = it, this;
    }
    return N(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = he);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = he);
    }, persist: function() {
    }, isPersistent: he }), r;
  }
  var tt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tt = _e(tt), Ht = N({}, tt, { view: 0, detail: 0 }), nn = _e(Ht), Jt, rn, pn, Ot = N({}, Ht, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: md, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== pn && (pn && n.type === "mousemove" ? (Jt = n.screenX - pn.screenX, rn = n.screenY - pn.screenY) : rn = Jt = 0, pn = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : rn;
  } }), Pi = _e(Ot), pu = N({}, Ot, { dataTransfer: 0 }), vs = _e(pu), dd = N({}, Ht, { relatedTarget: 0 }), ai = _e(dd), hs = N({}, tt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ms = _e(hs), pd = N({}, tt, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dy = _e(pd), _y = N({}, tt, { data: 0 }), vd = _e(_y), hd = {
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
  }, Lv = {
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
  }, Nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Mv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Nv[n]) ? !!r[n] : !1;
  }
  function md() {
    return Mv;
  }
  var $i = N({}, Ht, { key: function(n) {
    if (n.key) {
      var r = hd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = X(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Lv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: md, charCode: function(n) {
    return n.type === "keypress" ? X(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? X(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Oy = _e($i), yd = N({}, Ot, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = _e(yd), gd = N({}, Ht, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: md }), Ly = _e(gd), xc = N({}, tt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jv = _e(xc), ta = N({}, Ot, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = _e(ta), $n = [9, 13, 27, 32], ii = U && "CompositionEvent" in window, vo = null;
  U && "documentMode" in document && (vo = document.documentMode);
  var wc = U && "TextEvent" in window && !vo, Uv = U && (!ii || vo && 8 < vo && 11 >= vo), vu = String.fromCharCode(32), Av = !1;
  function zv(n, r) {
    switch (n) {
      case "keyup":
        return $n.indexOf(r.keyCode) !== -1;
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
  function bc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var hu = !1;
  function Ny(n, r) {
    switch (n) {
      case "compositionend":
        return bc(r);
      case "keypress":
        return r.which !== 32 ? null : (Av = !0, vu);
      case "textInput":
        return n = r.data, n === vu && Av ? null : n;
      default:
        return null;
    }
  }
  function My(n, r) {
    if (hu)
      return n === "compositionend" || !ii && zv(n, r) ? (n = W(), _ = g = ri = null, hu = !1, n) : null;
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
        return Uv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Fv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Fv[n.type] : r === "textarea";
  }
  function Vv(n, r, l, u) {
    Oa(u), r = bs(r, "onChange"), 0 < r.length && (l = new Tt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var ys = null, mu = null;
  function yu(n) {
    Dc(n, 0);
  }
  function gu(n) {
    var r = Cu(n);
    if (Rr(r))
      return n;
  }
  function Bv(n, r) {
    if (n === "change")
      return r;
  }
  var Sd = !1;
  if (U) {
    var Cd;
    if (U) {
      var Ed = "oninput" in document;
      if (!Ed) {
        var Pv = document.createElement("div");
        Pv.setAttribute("oninput", "return;"), Ed = typeof Pv.oninput == "function";
      }
      Cd = Ed;
    } else
      Cd = !1;
    Sd = Cd && (!document.documentMode || 9 < document.documentMode);
  }
  function $v() {
    ys && (ys.detachEvent("onpropertychange", Iv), mu = ys = null);
  }
  function Iv(n) {
    if (n.propertyName === "value" && gu(mu)) {
      var r = [];
      Vv(r, mu, n, Kt(n)), gl(yu, r);
    }
  }
  function jy(n, r, l) {
    n === "focusin" ? ($v(), ys = r, mu = l, ys.attachEvent("onpropertychange", Iv)) : n === "focusout" && $v();
  }
  function Uy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return gu(mu);
  }
  function Ay(n, r) {
    if (n === "click")
      return gu(r);
  }
  function Yv(n, r) {
    if (n === "input" || n === "change")
      return gu(r);
  }
  function zy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ma = typeof Object.is == "function" ? Object.is : zy;
  function gs(n, r) {
    if (Ma(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!D.call(r, c) || !Ma(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Wv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Qv(n, r) {
    var l = Wv(n);
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
      l = Wv(l);
    }
  }
  function Gv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Gv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Rc() {
    for (var n = window, r = un(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = un(n.document);
    }
    return r;
  }
  function Yi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Tc(n) {
    var r = Rc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Gv(l.ownerDocument.documentElement, l)) {
      if (u !== null && Yi(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = Qv(l, p);
          var C = Qv(
            l,
            u
          );
          c && C && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var qv = U && "documentMode" in document && 11 >= document.documentMode, li = null, xd = null, Ss = null, wd = !1;
  function Xv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    wd || li == null || li !== un(u) || (u = li, "selectionStart" in u && Yi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Ss && gs(Ss, u) || (Ss = u, u = bs(xd, "onSelect"), 0 < u.length && (r = new Tt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = li)));
  }
  function kc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ho = { animationend: kc("Animation", "AnimationEnd"), animationiteration: kc("Animation", "AnimationIteration"), animationstart: kc("Animation", "AnimationStart"), transitionend: kc("Transition", "TransitionEnd") }, bd = {}, Rd = {};
  U && (Rd = document.createElement("div").style, "AnimationEvent" in window || (delete ho.animationend.animation, delete ho.animationiteration.animation, delete ho.animationstart.animation), "TransitionEvent" in window || delete ho.transitionend.transition);
  function nr(n) {
    if (bd[n])
      return bd[n];
    if (!ho[n])
      return n;
    var r = ho[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Rd)
        return bd[n] = r[l];
    return n;
  }
  var Td = nr("animationend"), Zv = nr("animationiteration"), Kv = nr("animationstart"), Jv = nr("transitionend"), eh = /* @__PURE__ */ new Map(), th = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wi(n, r) {
    eh.set(n, r), k(r, [n]);
  }
  for (var Cs = 0; Cs < th.length; Cs++) {
    var mo = th[Cs], Fy = mo.toLowerCase(), Es = mo[0].toUpperCase() + mo.slice(1);
    Wi(Fy, "on" + Es);
  }
  Wi(Td, "onAnimationEnd"), Wi(Zv, "onAnimationIteration"), Wi(Kv, "onAnimationStart"), Wi("dblclick", "onDoubleClick"), Wi("focusin", "onFocus"), Wi("focusout", "onBlur"), Wi(Jv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), k("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));
  function nh(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, je(u, r, void 0, n), n.currentTarget = null;
  }
  function Dc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var C = u.length - 1; 0 <= C; C--) {
            var T = u[C], j = T.instance, G = T.currentTarget;
            if (T = T.listener, j !== p && c.isPropagationStopped())
              break e;
            nh(c, T, G), p = j;
          }
        else
          for (C = 0; C < u.length; C++) {
            if (T = u[C], j = T.instance, G = T.currentTarget, T = T.listener, j !== p && c.isPropagationStopped())
              break e;
            nh(c, T, G), p = j;
          }
      }
    }
    if (gi)
      throw n = O, gi = !1, O = null, n;
  }
  function an(n, r) {
    var l = r[Md];
    l === void 0 && (l = r[Md] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (rh(r, n, 2, !1), l.add(u));
  }
  function Ll(n, r, l) {
    var u = 0;
    r && (u |= 4), rh(l, n, u, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(n) {
    if (!n[Qi]) {
      n[Qi] = !0, E.forEach(function(l) {
        l !== "selectionchange" && (Hy.has(l) || Ll(l, !1, n), Ll(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, Ll("selectionchange", !1, r));
    }
  }
  function rh(n, r, l, u) {
    switch (ps(r)) {
      case 1:
        var c = fu;
        break;
      case 4:
        c = _l;
        break;
      default:
        c = Ol;
    }
    l = c.bind(null, r, l, n), c = void 0, !mi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function _c(n, r, l, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var C = u.tag;
          if (C === 3 || C === 4) {
            var T = u.stateNode.containerInfo;
            if (T === c || T.nodeType === 8 && T.parentNode === c)
              break;
            if (C === 4)
              for (C = u.return; C !== null; ) {
                var j = C.tag;
                if ((j === 3 || j === 4) && (j = C.stateNode.containerInfo, j === c || j.nodeType === 8 && j.parentNode === c))
                  return;
                C = C.return;
              }
            for (; T !== null; ) {
              if (C = ja(T), C === null)
                return;
              if (j = C.tag, j === 5 || j === 6) {
                u = p = C;
                continue e;
              }
              T = T.parentNode;
            }
          }
          u = u.return;
        }
    gl(function() {
      var G = p, oe = Kt(l), fe = [];
      e: {
        var le = eh.get(n);
        if (le !== void 0) {
          var Ne = Tt, Ve = n;
          switch (n) {
            case "keypress":
              if (X(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ne = Oy;
              break;
            case "focusin":
              Ve = "focus", Ne = ai;
              break;
            case "focusout":
              Ve = "blur", Ne = ai;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = ai;
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
              Ne = Pi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = vs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = Ly;
              break;
            case Td:
            case Zv:
            case Kv:
              Ne = ms;
              break;
            case Jv:
              Ne = jv;
              break;
            case "scroll":
              Ne = nn;
              break;
            case "wheel":
              Ne = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = Ec;
          }
          var $e = (r & 4) !== 0, zn = !$e && n === "scroll", V = $e ? le !== null ? le + "Capture" : null : le;
          $e = [];
          for (var F = G, $; F !== null; ) {
            $ = F;
            var me = $.stateNode;
            if ($.tag === 5 && me !== null && ($ = me, V !== null && (me = ma(F, V), me != null && $e.push(ws(F, me, $)))), zn)
              break;
            F = F.return;
          }
          0 < $e.length && (le = new Ne(le, Ve, null, l, oe), fe.push({ event: le, listeners: $e }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Ne = n === "mouseout" || n === "pointerout", le && l !== Dr && (Ve = l.relatedTarget || l.fromElement) && (ja(Ve) || Ve[Gi]))
            break e;
          if ((Ne || le) && (le = oe.window === oe ? oe : (le = oe.ownerDocument) ? le.defaultView || le.parentWindow : window, Ne ? (Ve = l.relatedTarget || l.toElement, Ne = G, Ve = Ve ? ja(Ve) : null, Ve !== null && (zn = yt(Ve), Ve !== zn || Ve.tag !== 5 && Ve.tag !== 6) && (Ve = null)) : (Ne = null, Ve = G), Ne !== Ve)) {
            if ($e = Pi, me = "onMouseLeave", V = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && ($e = Ec, me = "onPointerLeave", V = "onPointerEnter", F = "pointer"), zn = Ne == null ? le : Cu(Ne), $ = Ve == null ? le : Cu(Ve), le = new $e(me, F + "leave", Ne, l, oe), le.target = zn, le.relatedTarget = $, me = null, ja(oe) === G && ($e = new $e(V, F + "enter", Ve, l, oe), $e.target = $, $e.relatedTarget = zn, me = $e), zn = me, Ne && Ve)
              t: {
                for ($e = Ne, V = Ve, F = 0, $ = $e; $; $ = yo($))
                  F++;
                for ($ = 0, me = V; me; me = yo(me))
                  $++;
                for (; 0 < F - $; )
                  $e = yo($e), F--;
                for (; 0 < $ - F; )
                  V = yo(V), $--;
                for (; F--; ) {
                  if ($e === V || V !== null && $e === V.alternate)
                    break t;
                  $e = yo($e), V = yo(V);
                }
                $e = null;
              }
            else
              $e = null;
            Ne !== null && kd(fe, le, Ne, $e, !1), Ve !== null && zn !== null && kd(fe, zn, Ve, $e, !0);
          }
        }
        e: {
          if (le = G ? Cu(G) : window, Ne = le.nodeName && le.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && le.type === "file")
            var Ye = Bv;
          else if (Hv(le))
            if (Sd)
              Ye = Yv;
            else {
              Ye = Uy;
              var Be = jy;
            }
          else
            (Ne = le.nodeName) && Ne.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Ye = Ay);
          if (Ye && (Ye = Ye(n, G))) {
            Vv(fe, Ye, l, oe);
            break e;
          }
          Be && Be(n, le, G), n === "focusout" && (Be = le._wrapperState) && Be.controlled && le.type === "number" && kr(le, "number", le.value);
        }
        switch (Be = G ? Cu(G) : window, n) {
          case "focusin":
            (Hv(Be) || Be.contentEditable === "true") && (li = Be, xd = G, Ss = null);
            break;
          case "focusout":
            Ss = xd = li = null;
            break;
          case "mousedown":
            wd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wd = !1, Xv(fe, l, oe);
            break;
          case "selectionchange":
            if (qv)
              break;
          case "keydown":
          case "keyup":
            Xv(fe, l, oe);
        }
        var Xe;
        if (ii)
          e: {
            switch (n) {
              case "compositionstart":
                var ft = "onCompositionStart";
                break e;
              case "compositionend":
                ft = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ft = "onCompositionUpdate";
                break e;
            }
            ft = void 0;
          }
        else
          hu ? zv(n, l) && (ft = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
        ft && (Uv && l.locale !== "ko" && (hu || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && hu && (Xe = W()) : (ri = oe, g = "value" in ri ? ri.value : ri.textContent, hu = !0)), Be = bs(G, ft), 0 < Be.length && (ft = new vd(ft, n, null, l, oe), fe.push({ event: ft, listeners: Be }), Xe ? ft.data = Xe : (Xe = bc(l), Xe !== null && (ft.data = Xe)))), (Xe = wc ? Ny(n, l) : My(n, l)) && (G = bs(G, "onBeforeInput"), 0 < G.length && (oe = new vd("onBeforeInput", "beforeinput", null, l, oe), fe.push({ event: oe, listeners: G }), oe.data = Xe));
      }
      Dc(fe, r);
    });
  }
  function ws(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function bs(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = ma(n, l), p != null && u.unshift(ws(n, p, c)), p = ma(n, r), p != null && u.push(ws(n, p, c))), n = n.return;
    }
    return u;
  }
  function yo(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kd(n, r, l, u, c) {
    for (var p = r._reactName, C = []; l !== null && l !== u; ) {
      var T = l, j = T.alternate, G = T.stateNode;
      if (j !== null && j === u)
        break;
      T.tag === 5 && G !== null && (T = G, c ? (j = ma(l, p), j != null && C.unshift(ws(l, j, T))) : c || (j = ma(l, p), j != null && C.push(ws(l, j, T)))), l = l.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Dd = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function _d(n) {
    return (typeof n == "string" ? n : "" + n).replace(Dd, `
`).replace(Vy, "");
  }
  function Oc(n, r, l) {
    if (r = _d(r), _d(n) !== r && l)
      throw Error(m(425));
  }
  function Lc() {
  }
  var Od = null, go = null;
  function Rs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var So = typeof setTimeout == "function" ? setTimeout : void 0, ah = typeof clearTimeout == "function" ? clearTimeout : void 0, Ld = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ld < "u" ? function(n) {
    return Ld.resolve(null).then(n).catch(By);
  } : So;
  function By(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Nl(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (u === 0) {
            n.removeChild(c), kl(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    kl(r);
  }
  function oi(n) {
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
  function Ts(n) {
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
  var Ml = Math.random().toString(36).slice(2), wi = "__reactFiber$" + Ml, Co = "__reactProps$" + Ml, Gi = "__reactContainer$" + Ml, Md = "__reactEvents$" + Ml, Py = "__reactListeners$" + Ml, jd = "__reactHandles$" + Ml;
  function ja(n) {
    var r = n[wi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Gi] || l[wi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ts(n); n !== null; ) {
            if (l = n[wi])
              return l;
            n = Ts(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ks(n) {
    return n = n[wi] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Cu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function Ke(n) {
    return n[Co] || null;
  }
  var jl = [], vn = -1;
  function St(n) {
    return { current: n };
  }
  function Yt(n) {
    0 > vn || (n.current = jl[vn], jl[vn] = null, vn--);
  }
  function Xt(n, r) {
    vn++, jl[vn] = n.current, n.current = r;
  }
  var bi = {}, ct = St(bi), On = St(!1), na = bi;
  function Ua(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return bi;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in l)
      c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Aa() {
    Yt(On), Yt(ct);
  }
  function Ul(n, r, l) {
    if (ct.current !== bi)
      throw Error(m(168));
    Xt(ct, r), Xt(On, l);
  }
  function Ds(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(m(108, xt(n) || "Unknown", c));
    return N({}, l, u);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || bi, na = ct.current, Xt(ct, n), Xt(On, On.current), !0;
  }
  function ih(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(m(169));
    l ? (n = Ds(n, r, na), u.__reactInternalMemoizedMergedChildContext = n, Yt(On), Yt(ct), Xt(ct, n)) : Yt(On), Xt(On, l);
  }
  var Sa = null, rr = !1, _s = !1;
  function Ud(n) {
    Sa === null ? Sa = [n] : Sa.push(n);
  }
  function Ad(n) {
    rr = !0, Ud(n);
  }
  function ra() {
    if (!_s && Sa !== null) {
      _s = !0;
      var n = 0, r = Bt;
      try {
        var l = Sa;
        for (Bt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Sa = null, rr = !1;
      } catch (c) {
        throw Sa !== null && (Sa = Sa.slice(n + 1)), dn(ti, ra), c;
      } finally {
        Bt = r, _s = !1;
      }
    }
    return null;
  }
  var Al = [], aa = 0, Eo = null, Eu = 0, ia = [], _r = 0, za = null, pr = 1, qi = "";
  function Ca(n, r) {
    Al[aa++] = Eu, Al[aa++] = Eo, Eo = n, Eu = r;
  }
  function zd(n, r, l) {
    ia[_r++] = pr, ia[_r++] = qi, ia[_r++] = za, za = n;
    var u = pr;
    n = qi;
    var c = 32 - Fr(u) - 1;
    u &= ~(1 << c), l += 1;
    var p = 32 - Fr(r) + c;
    if (30 < p) {
      var C = c - c % 5;
      p = (u & (1 << C) - 1).toString(32), u >>= C, c -= C, pr = 1 << 32 - Fr(r) + c | l << c | u, qi = p + n;
    } else
      pr = 1 << p | l << c | u, qi = n;
  }
  function Mc(n) {
    n.return !== null && (Ca(n, 1), zd(n, 1, 0));
  }
  function Fd(n) {
    for (; n === Eo; )
      Eo = Al[--aa], Al[aa] = null, Eu = Al[--aa], Al[aa] = null;
    for (; n === za; )
      za = ia[--_r], ia[_r] = null, qi = ia[--_r], ia[_r] = null, pr = ia[--_r], ia[_r] = null;
  }
  var Ea = null, la = null, hn = !1, Fa = null;
  function Hd(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function lh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ea = n, la = oi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ea = n, la = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = za !== null ? { id: pr, overflow: qi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ea = n, la = null, !0) : !1;
      default:
        return !1;
    }
  }
  function jc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Uc(n) {
    if (hn) {
      var r = la;
      if (r) {
        var l = r;
        if (!lh(n, r)) {
          if (jc(n))
            throw Error(m(418));
          r = oi(l.nextSibling);
          var u = Ea;
          r && lh(n, r) ? Hd(u, l) : (n.flags = n.flags & -4097 | 2, hn = !1, Ea = n);
        }
      } else {
        if (jc(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, hn = !1, Ea = n;
      }
    }
  }
  function oh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ea = n;
  }
  function Ac(n) {
    if (n !== Ea)
      return !1;
    if (!hn)
      return oh(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Rs(n.type, n.memoizedProps)), r && (r = la)) {
      if (jc(n))
        throw uh(), Error(m(418));
      for (; r; )
        Hd(n, r), r = oi(r.nextSibling);
    }
    if (oh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                la = oi(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        la = null;
      }
    } else
      la = Ea ? oi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function uh() {
    for (var n = la; n; )
      n = oi(n.nextSibling);
  }
  function bn() {
    la = Ea = null, hn = !1;
  }
  function Vd(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var zc = Se.ReactCurrentBatchConfig;
  function xa(n, r) {
    if (n && n.defaultProps) {
      r = N({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ri = St(null), Fc = null, zl = null, Bd = null;
  function Pd() {
    Bd = zl = Fc = null;
  }
  function Fl(n) {
    var r = Ri.current;
    Yt(Ri), n._currentValue = r;
  }
  function ar(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function be(n, r) {
    Fc = n, Bd = zl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (In = !0), n.firstContext = null);
  }
  function An(n) {
    var r = n._currentValue;
    if (Bd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, zl === null) {
        if (Fc === null)
          throw Error(m(308));
        zl = n, Fc.dependencies = { lanes: 0, firstContext: n };
      } else
        zl = zl.next = n;
    return r;
  }
  var vr = null;
  function $d(n) {
    vr === null ? vr = [n] : vr.push(n);
  }
  function sh(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, $d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Xi(n, u);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Hl = !1;
  function Id(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Gn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Vl(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Dt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Xi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, $d(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Xi(n, l);
  }
  function Hc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ei(n, l);
    }
  }
  function Yd(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var C = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? c = p = C : p = p.next = C, l = l.next;
        } while (l !== null);
        p === null ? c = p = r : p = p.next = r;
      } else
        c = p = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Bl(n, r, l, u) {
    var c = n.updateQueue;
    Hl = !1;
    var p = c.firstBaseUpdate, C = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var j = T, G = j.next;
      j.next = null, C === null ? p = G : C.next = G, C = j;
      var oe = n.alternate;
      oe !== null && (oe = oe.updateQueue, T = oe.lastBaseUpdate, T !== C && (T === null ? oe.firstBaseUpdate = G : T.next = G, oe.lastBaseUpdate = j));
    }
    if (p !== null) {
      var fe = c.baseState;
      C = 0, oe = G = j = null, T = p;
      do {
        var le = T.lane, Ne = T.eventTime;
        if ((u & le) === le) {
          oe !== null && (oe = oe.next = {
            eventTime: Ne,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Ve = n, $e = T;
            switch (le = r, Ne = l, $e.tag) {
              case 1:
                if (Ve = $e.payload, typeof Ve == "function") {
                  fe = Ve.call(Ne, fe, le);
                  break e;
                }
                fe = Ve;
                break e;
              case 3:
                Ve.flags = Ve.flags & -65537 | 128;
              case 0:
                if (Ve = $e.payload, le = typeof Ve == "function" ? Ve.call(Ne, fe, le) : Ve, le == null)
                  break e;
                fe = N({}, fe, le);
                break e;
              case 2:
                Hl = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [T] : le.push(T));
        } else
          Ne = { eventTime: Ne, lane: le, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, oe === null ? (G = oe = Ne, j = fe) : oe = oe.next = Ne, C |= le;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null)
            break;
          le = T, T = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (1);
      if (oe === null && (j = fe), c.baseState = j, c.firstBaseUpdate = G, c.lastBaseUpdate = oe, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          C |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      tl |= C, n.lanes = C, n.memoizedState = fe;
    }
  }
  function xo(n, r, l) {
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
  var ch = new d.Component().refs;
  function Wd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : N({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Vc = { isMounted: function(n) {
    return (n = n._reactInternals) ? yt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = Mr(), c = Yn(n), p = Zi(u, c);
    p.payload = r, l != null && (p.callback = l), r = Vl(n, p, c), r !== null && (jr(r, n, c, u), Hc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = Mr(), c = Yn(n), p = Zi(u, c);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = Vl(n, p, c), r !== null && (jr(r, n, c, u), Hc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Mr(), u = Yn(n), c = Zi(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Vl(n, c, u), r !== null && (jr(r, n, u, l), Hc(r, n, u));
  } };
  function fh(n, r, l, u, c, p, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, C) : r.prototype && r.prototype.isPureReactComponent ? !gs(l, u) || !gs(c, p) : !0;
  }
  function dh(n, r, l) {
    var u = !1, c = bi, p = r.contextType;
    return typeof p == "object" && p !== null ? p = An(p) : (c = Cn(r) ? na : ct.current, u = r.contextTypes, p = (u = u != null) ? Ua(n, c) : bi), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Vc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function ph(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Vc.enqueueReplaceState(r, r.state, null);
  }
  function Bc(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = ch, Id(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = An(p) : (p = Cn(r) ? na : ct.current, c.context = Ua(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Wd(n, r, p, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Vc.enqueueReplaceState(c, c.state, null), Bl(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xu(n, r, l) {
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
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(C) {
          var T = c.refs;
          T === ch && (T = c.refs = {}), C === null ? delete T[p] : T[p] = C;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function Pc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function vh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function hh(n) {
    function r(V, F) {
      if (n) {
        var $ = V.deletions;
        $ === null ? (V.deletions = [F], V.flags |= 16) : $.push(F);
      }
    }
    function l(V, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r(V, F), F = F.sibling;
      return null;
    }
    function u(V, F) {
      for (V = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? V.set(F.key, F) : V.set(F.index, F), F = F.sibling;
      return V;
    }
    function c(V, F) {
      return V = ql(V, F), V.index = 0, V.sibling = null, V;
    }
    function p(V, F, $) {
      return V.index = $, n ? ($ = V.alternate, $ !== null ? ($ = $.index, $ < F ? (V.flags |= 2, F) : $) : (V.flags |= 2, F)) : (V.flags |= 1048576, F);
    }
    function C(V) {
      return n && V.alternate === null && (V.flags |= 2), V;
    }
    function T(V, F, $, me) {
      return F === null || F.tag !== 6 ? (F = Gs($, V.mode, me), F.return = V, F) : (F = c(F, $), F.return = V, F);
    }
    function j(V, F, $, me) {
      var Ye = $.type;
      return Ye === ce ? oe(V, F, $.props.children, me, $.key) : F !== null && (F.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Qe && vh(Ye) === F.type) ? (me = c(F, $.props), me.ref = xu(V, F, $), me.return = V, me) : (me = Ef($.type, $.key, $.props, null, V.mode, me), me.ref = xu(V, F, $), me.return = V, me);
    }
    function G(V, F, $, me) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== $.containerInfo || F.stateNode.implementation !== $.implementation ? (F = Bo($, V.mode, me), F.return = V, F) : (F = c(F, $.children || []), F.return = V, F);
    }
    function oe(V, F, $, me, Ye) {
      return F === null || F.tag !== 7 ? (F = Vo($, V.mode, me, Ye), F.return = V, F) : (F = c(F, $), F.return = V, F);
    }
    function fe(V, F, $) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = Gs("" + F, V.mode, $), F.return = V, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ae:
            return $ = Ef(F.type, F.key, F.props, null, V.mode, $), $.ref = xu(V, null, F), $.return = V, $;
          case ue:
            return F = Bo(F, V.mode, $), F.return = V, F;
          case Qe:
            var me = F._init;
            return fe(V, me(F._payload), $);
        }
        if (sn(F) || ze(F))
          return F = Vo(F, V.mode, $, null), F.return = V, F;
        Pc(V, F);
      }
      return null;
    }
    function le(V, F, $, me) {
      var Ye = F !== null ? F.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number")
        return Ye !== null ? null : T(V, F, "" + $, me);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ae:
            return $.key === Ye ? j(V, F, $, me) : null;
          case ue:
            return $.key === Ye ? G(V, F, $, me) : null;
          case Qe:
            return Ye = $._init, le(
              V,
              F,
              Ye($._payload),
              me
            );
        }
        if (sn($) || ze($))
          return Ye !== null ? null : oe(V, F, $, me, null);
        Pc(V, $);
      }
      return null;
    }
    function Ne(V, F, $, me, Ye) {
      if (typeof me == "string" && me !== "" || typeof me == "number")
        return V = V.get($) || null, T(F, V, "" + me, Ye);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case ae:
            return V = V.get(me.key === null ? $ : me.key) || null, j(F, V, me, Ye);
          case ue:
            return V = V.get(me.key === null ? $ : me.key) || null, G(F, V, me, Ye);
          case Qe:
            var Be = me._init;
            return Ne(V, F, $, Be(me._payload), Ye);
        }
        if (sn(me) || ze(me))
          return V = V.get($) || null, oe(F, V, me, Ye, null);
        Pc(F, me);
      }
      return null;
    }
    function Ve(V, F, $, me) {
      for (var Ye = null, Be = null, Xe = F, ft = F = 0, or = null; Xe !== null && ft < $.length; ft++) {
        Xe.index > ft ? (or = Xe, Xe = null) : or = Xe.sibling;
        var Vt = le(V, Xe, $[ft], me);
        if (Vt === null) {
          Xe === null && (Xe = or);
          break;
        }
        n && Xe && Vt.alternate === null && r(V, Xe), F = p(Vt, F, ft), Be === null ? Ye = Vt : Be.sibling = Vt, Be = Vt, Xe = or;
      }
      if (ft === $.length)
        return l(V, Xe), hn && Ca(V, ft), Ye;
      if (Xe === null) {
        for (; ft < $.length; ft++)
          Xe = fe(V, $[ft], me), Xe !== null && (F = p(Xe, F, ft), Be === null ? Ye = Xe : Be.sibling = Xe, Be = Xe);
        return hn && Ca(V, ft), Ye;
      }
      for (Xe = u(V, Xe); ft < $.length; ft++)
        or = Ne(Xe, V, ft, $[ft], me), or !== null && (n && or.alternate !== null && Xe.delete(or.key === null ? ft : or.key), F = p(or, F, ft), Be === null ? Ye = or : Be.sibling = or, Be = or);
      return n && Xe.forEach(function(Xl) {
        return r(V, Xl);
      }), hn && Ca(V, ft), Ye;
    }
    function $e(V, F, $, me) {
      var Ye = ze($);
      if (typeof Ye != "function")
        throw Error(m(150));
      if ($ = Ye.call($), $ == null)
        throw Error(m(151));
      for (var Be = Ye = null, Xe = F, ft = F = 0, or = null, Vt = $.next(); Xe !== null && !Vt.done; ft++, Vt = $.next()) {
        Xe.index > ft ? (or = Xe, Xe = null) : or = Xe.sibling;
        var Xl = le(V, Xe, Vt.value, me);
        if (Xl === null) {
          Xe === null && (Xe = or);
          break;
        }
        n && Xe && Xl.alternate === null && r(V, Xe), F = p(Xl, F, ft), Be === null ? Ye = Xl : Be.sibling = Xl, Be = Xl, Xe = or;
      }
      if (Vt.done)
        return l(
          V,
          Xe
        ), hn && Ca(V, ft), Ye;
      if (Xe === null) {
        for (; !Vt.done; ft++, Vt = $.next())
          Vt = fe(V, Vt.value, me), Vt !== null && (F = p(Vt, F, ft), Be === null ? Ye = Vt : Be.sibling = Vt, Be = Vt);
        return hn && Ca(V, ft), Ye;
      }
      for (Xe = u(V, Xe); !Vt.done; ft++, Vt = $.next())
        Vt = Ne(Xe, V, ft, Vt.value, me), Vt !== null && (n && Vt.alternate !== null && Xe.delete(Vt.key === null ? ft : Vt.key), F = p(Vt, F, ft), Be === null ? Ye = Vt : Be.sibling = Vt, Be = Vt);
      return n && Xe.forEach(function(ug) {
        return r(V, ug);
      }), hn && Ca(V, ft), Ye;
    }
    function zn(V, F, $, me) {
      if (typeof $ == "object" && $ !== null && $.type === ce && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case ae:
            e: {
              for (var Ye = $.key, Be = F; Be !== null; ) {
                if (Be.key === Ye) {
                  if (Ye = $.type, Ye === ce) {
                    if (Be.tag === 7) {
                      l(V, Be.sibling), F = c(Be, $.props.children), F.return = V, V = F;
                      break e;
                    }
                  } else if (Be.elementType === Ye || typeof Ye == "object" && Ye !== null && Ye.$$typeof === Qe && vh(Ye) === Be.type) {
                    l(V, Be.sibling), F = c(Be, $.props), F.ref = xu(V, Be, $), F.return = V, V = F;
                    break e;
                  }
                  l(V, Be);
                  break;
                } else
                  r(V, Be);
                Be = Be.sibling;
              }
              $.type === ce ? (F = Vo($.props.children, V.mode, me, $.key), F.return = V, V = F) : (me = Ef($.type, $.key, $.props, null, V.mode, me), me.ref = xu(V, F, $), me.return = V, V = me);
            }
            return C(V);
          case ue:
            e: {
              for (Be = $.key; F !== null; ) {
                if (F.key === Be)
                  if (F.tag === 4 && F.stateNode.containerInfo === $.containerInfo && F.stateNode.implementation === $.implementation) {
                    l(V, F.sibling), F = c(F, $.children || []), F.return = V, V = F;
                    break e;
                  } else {
                    l(V, F);
                    break;
                  }
                else
                  r(V, F);
                F = F.sibling;
              }
              F = Bo($, V.mode, me), F.return = V, V = F;
            }
            return C(V);
          case Qe:
            return Be = $._init, zn(V, F, Be($._payload), me);
        }
        if (sn($))
          return Ve(V, F, $, me);
        if (ze($))
          return $e(V, F, $, me);
        Pc(V, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" ? ($ = "" + $, F !== null && F.tag === 6 ? (l(V, F.sibling), F = c(F, $), F.return = V, V = F) : (l(V, F), F = Gs($, V.mode, me), F.return = V, V = F), C(V)) : l(V, F);
    }
    return zn;
  }
  var wu = hh(!0), mh = hh(!1), Os = {}, ui = St(Os), Ls = St(Os), bu = St(Os);
  function wo(n) {
    if (n === Os)
      throw Error(m(174));
    return n;
  }
  function Qd(n, r) {
    switch (Xt(bu, r), Xt(Ls, n), Xt(ui, Os), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : cn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = cn(r, n);
    }
    Yt(ui), Xt(ui, r);
  }
  function Pl() {
    Yt(ui), Yt(Ls), Yt(bu);
  }
  function nt(n) {
    wo(bu.current);
    var r = wo(ui.current), l = cn(r, n.type);
    r !== l && (Xt(Ls, n), Xt(ui, l));
  }
  function kt(n) {
    Ls.current === n && (Yt(ui), Yt(Ls));
  }
  var lt = St(0);
  function Rn(n) {
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
  var Ha = [];
  function $c() {
    for (var n = 0; n < Ha.length; n++)
      Ha[n]._workInProgressVersionPrimary = null;
    Ha.length = 0;
  }
  var Ic = Se.ReactCurrentDispatcher, Gd = Se.ReactCurrentBatchConfig, bo = 0, mn = null, J = null, Nt = null, ot = !1, Ti = !1, wa = 0, Ro = 0;
  function yn() {
    throw Error(m(321));
  }
  function To(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Ma(n[l], r[l]))
        return !1;
    return !0;
  }
  function $l(n, r, l, u, c, p) {
    if (bo = p, mn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ic.current = n === null || n.memoizedState === null ? Iy : Yy, n = l(u, c), Ti) {
      p = 0;
      do {
        if (Ti = !1, wa = 0, 25 <= p)
          throw Error(m(301));
        p += 1, Nt = J = null, r.updateQueue = null, Ic.current = Xd, n = l(u, c);
      } while (Ti);
    }
    if (Ic.current = of, r = J !== null && J.next !== null, bo = 0, Nt = J = mn = null, ot = !1, r)
      throw Error(m(300));
    return n;
  }
  function ko() {
    var n = wa !== 0;
    return wa = 0, n;
  }
  function Va() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? mn.memoizedState = Nt = n : Nt = Nt.next = n, Nt;
  }
  function oa() {
    if (J === null) {
      var n = mn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = J.next;
    var r = Nt === null ? mn.memoizedState : Nt.next;
    if (r !== null)
      Nt = r, J = n;
    else {
      if (n === null)
        throw Error(m(310));
      J = n, n = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, Nt === null ? mn.memoizedState = Nt = n : Nt = Nt.next = n;
    }
    return Nt;
  }
  function Do(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ns(n) {
    var r = oa(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = J, c = u.baseQueue, p = l.pending;
    if (p !== null) {
      if (c !== null) {
        var C = c.next;
        c.next = p.next, p.next = C;
      }
      u.baseQueue = c = p, l.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var T = C = null, j = null, G = p;
      do {
        var oe = G.lane;
        if ((bo & oe) === oe)
          j !== null && (j = j.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), u = G.hasEagerState ? G.eagerState : n(u, G.action);
        else {
          var fe = {
            lane: oe,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          j === null ? (T = j = fe, C = u) : j = j.next = fe, mn.lanes |= oe, tl |= oe;
        }
        G = G.next;
      } while (G !== null && G !== p);
      j === null ? C = u : j.next = T, Ma(u, r.memoizedState) || (In = !0), r.memoizedState = u, r.baseState = C, r.baseQueue = j, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, mn.lanes |= p, tl |= p, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ms(n) {
    var r = oa(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, p = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var C = c = c.next;
      do
        p = n(p, C.action), C = C.next;
      while (C !== c);
      Ma(p, r.memoizedState) || (In = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, u];
  }
  function Yc() {
  }
  function Wc(n, r) {
    var l = mn, u = oa(), c = r(), p = !Ma(u.memoizedState, c);
    if (p && (u.memoizedState = c, In = !0), u = u.queue, js(qc.bind(null, l, u, n), [n]), u.getSnapshot !== r || p || Nt !== null && Nt.memoizedState.tag & 1) {
      if (l.flags |= 2048, _o(9, Gc.bind(null, l, u, c, r), void 0, null), Tn === null)
        throw Error(m(349));
      bo & 30 || Qc(l, r, c);
    }
    return c;
  }
  function Qc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Gc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Xc(r) && Zc(n);
  }
  function qc(n, r, l) {
    return l(function() {
      Xc(r) && Zc(n);
    });
  }
  function Xc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ma(n, l);
    } catch {
      return !0;
    }
  }
  function Zc(n) {
    var r = Xi(n, 1);
    r !== null && jr(r, n, 1, -1);
  }
  function Kc(n) {
    var r = Va();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Do, lastRenderedState: n }, r.queue = n, n = n.dispatch = lf.bind(null, mn, n), [r.memoizedState, n];
  }
  function _o(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Jc() {
    return oa().memoizedState;
  }
  function Oo(n, r, l, u) {
    var c = Va();
    mn.flags |= n, c.memoizedState = _o(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Ki(n, r, l, u) {
    var c = oa();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (J !== null) {
      var C = J.memoizedState;
      if (p = C.destroy, u !== null && To(u, C.deps)) {
        c.memoizedState = _o(r, l, p, u);
        return;
      }
    }
    mn.flags |= n, c.memoizedState = _o(1 | r, l, p, u);
  }
  function ef(n, r) {
    return Oo(8390656, 8, n, r);
  }
  function js(n, r) {
    return Ki(2048, 8, n, r);
  }
  function tf(n, r) {
    return Ki(4, 2, n, r);
  }
  function nf(n, r) {
    return Ki(4, 4, n, r);
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
  function Ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ki(4, 4, qd.bind(null, r, n), l);
  }
  function rf() {
  }
  function Tu(n, r) {
    var l = oa();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && To(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Il(n, r) {
    var l = oa();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && To(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function ua(n, r, l) {
    return bo & 21 ? (Ma(l, r) || (l = iu(), mn.lanes |= l, tl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, In = !0), n.memoizedState = l);
  }
  function $y(n, r) {
    var l = Bt;
    Bt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Gd.transition;
    Gd.transition = {};
    try {
      n(!1), r();
    } finally {
      Bt = l, Gd.transition = u;
    }
  }
  function ln() {
    return oa().memoizedState;
  }
  function af(n, r, l) {
    var u = Yn(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, ku(n))
      Us(r, l);
    else if (l = sh(n, r, l, u), l !== null) {
      var c = Mr();
      jr(l, n, u, c), yh(l, r, u);
    }
  }
  function lf(n, r, l) {
    var u = Yn(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ku(n))
      Us(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var C = r.lastRenderedState, T = p(C, l);
          if (c.hasEagerState = !0, c.eagerState = T, Ma(T, C)) {
            var j = r.interleaved;
            j === null ? (c.next = c, $d(r)) : (c.next = j.next, j.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = sh(n, r, c, u), l !== null && (c = Mr(), jr(l, n, u, c), yh(l, r, u));
    }
  }
  function ku(n) {
    var r = n.alternate;
    return n === mn || r !== null && r === mn;
  }
  function Us(n, r) {
    Ti = ot = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function yh(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ei(n, l);
    }
  }
  var of = { readContext: An, useCallback: yn, useContext: yn, useEffect: yn, useImperativeHandle: yn, useInsertionEffect: yn, useLayoutEffect: yn, useMemo: yn, useReducer: yn, useRef: yn, useState: yn, useDebugValue: yn, useDeferredValue: yn, useTransition: yn, useMutableSource: yn, useSyncExternalStore: yn, useId: yn, unstable_isNewReconciler: !1 }, Iy = { readContext: An, useCallback: function(n, r) {
    return Va().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: An, useEffect: ef, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Oo(
      4194308,
      4,
      qd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Oo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Oo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Va();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Va();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = af.bind(null, mn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Va();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Kc, useDebugValue: rf, useDeferredValue: function(n) {
    return Va().memoizedState = n;
  }, useTransition: function() {
    var n = Kc(!1), r = n[0];
    return n = $y.bind(null, n[1]), Va().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = mn, c = Va();
    if (hn) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), Tn === null)
        throw Error(m(349));
      bo & 30 || Qc(u, r, l);
    }
    c.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return c.queue = p, ef(qc.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, _o(9, Gc.bind(null, u, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Va(), r = Tn.identifierPrefix;
    if (hn) {
      var l = qi, u = pr;
      l = (u & ~(1 << 32 - Fr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wa++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Ro++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yy = {
    readContext: An,
    useCallback: Tu,
    useContext: An,
    useEffect: js,
    useImperativeHandle: Ru,
    useInsertionEffect: tf,
    useLayoutEffect: nf,
    useMemo: Il,
    useReducer: Ns,
    useRef: Jc,
    useState: function() {
      return Ns(Do);
    },
    useDebugValue: rf,
    useDeferredValue: function(n) {
      var r = oa();
      return ua(r, J.memoizedState, n);
    },
    useTransition: function() {
      var n = Ns(Do)[0], r = oa().memoizedState;
      return [n, r];
    },
    useMutableSource: Yc,
    useSyncExternalStore: Wc,
    useId: ln,
    unstable_isNewReconciler: !1
  }, Xd = { readContext: An, useCallback: Tu, useContext: An, useEffect: js, useImperativeHandle: Ru, useInsertionEffect: tf, useLayoutEffect: nf, useMemo: Il, useReducer: Ms, useRef: Jc, useState: function() {
    return Ms(Do);
  }, useDebugValue: rf, useDeferredValue: function(n) {
    var r = oa();
    return J === null ? r.memoizedState = n : ua(r, J.memoizedState, n);
  }, useTransition: function() {
    var n = Ms(Do)[0], r = oa().memoizedState;
    return [n, r];
  }, useMutableSource: Yc, useSyncExternalStore: Wc, useId: ln, unstable_isNewReconciler: !1 };
  function Du(n, r) {
    try {
      var l = "", u = r;
      do
        l += mt(u), u = u.return;
      while (u);
      var c = l;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function As(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function uf(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Wy = typeof WeakMap == "function" ? WeakMap : Map;
  function gh(n, r, l) {
    l = Zi(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      hf || (hf = !0, Uo = u), uf(n, r);
    }, l;
  }
  function zs(n, r, l) {
    l = Zi(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        uf(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      uf(n, r), typeof u != "function" && (_i === null ? _i = /* @__PURE__ */ new Set([this]) : _i.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), l;
  }
  function Sh(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Wy();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Jy.bind(null, n, r, l), r.then(n, n));
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Vl(l, r, 1))), l.lanes |= 1), n);
  }
  var Qy = Se.ReactCurrentOwner, In = !1;
  function qn(n, r, l, u) {
    r.child = n === null ? mh(r, null, l, u) : wu(r, n.child, l, u);
  }
  function Yl(n, r, l, u, c) {
    l = l.render;
    var p = r.ref;
    return be(r, c), u = $l(n, r, l, u, p, c), l = ko(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, hr(n, r, c)) : (hn && l && Mc(r), r.flags |= 1, qn(n, r, u, c), r.child);
  }
  function sf(n, r, l, u, c) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !yp(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, sa(n, r, p, u, c)) : (n = Ef(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var C = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : gs, l(C, u) && n.ref === r.ref)
        return hr(n, r, c);
    }
    return r.flags |= 1, n = ql(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function sa(n, r, l, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (gs(p, u) && n.ref === r.ref)
        if (In = !1, r.pendingProps = u = p, (n.lanes & c) !== 0)
          n.flags & 131072 && (In = !0);
        else
          return r.lanes = n.lanes, hr(n, r, c);
    }
    return _u(n, r, l, u, c);
  }
  function Lo(n, r, l) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xt(Uu, ba), ba |= l;
      else {
        if (!(l & 1073741824))
          return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Xt(Uu, ba), ba |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : l, Xt(Uu, ba), ba |= u;
      }
    else
      p !== null ? (u = p.baseLanes | l, r.memoizedState = null) : u = l, Xt(Uu, ba), ba |= u;
    return qn(n, r, c, l), r.child;
  }
  function Ct(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function _u(n, r, l, u, c) {
    var p = Cn(l) ? na : ct.current;
    return p = Ua(r, p), be(r, c), l = $l(n, r, l, u, p, c), u = ko(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, hr(n, r, c)) : (hn && u && Mc(r), r.flags |= 1, qn(n, r, l, c), r.child);
  }
  function Jd(n, r, l, u, c) {
    if (Cn(l)) {
      var p = !0;
      Nc(r);
    } else
      p = !1;
    if (be(r, c), r.stateNode === null)
      Or(n, r), dh(r, l, u), Bc(r, l, u, c), u = !0;
    else if (n === null) {
      var C = r.stateNode, T = r.memoizedProps;
      C.props = T;
      var j = C.context, G = l.contextType;
      typeof G == "object" && G !== null ? G = An(G) : (G = Cn(l) ? na : ct.current, G = Ua(r, G));
      var oe = l.getDerivedStateFromProps, fe = typeof oe == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      fe || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (T !== u || j !== G) && ph(r, C, u, G), Hl = !1;
      var le = r.memoizedState;
      C.state = le, Bl(r, u, C, c), j = r.memoizedState, T !== u || le !== j || On.current || Hl ? (typeof oe == "function" && (Wd(r, l, oe, u), j = r.memoizedState), (T = Hl || fh(r, l, T, u, le, j, G)) ? (fe || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), C.props = u, C.state = j, C.context = G, u = T) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      C = r.stateNode, Gn(n, r), T = r.memoizedProps, G = r.type === r.elementType ? T : xa(r.type, T), C.props = G, fe = r.pendingProps, le = C.context, j = l.contextType, typeof j == "object" && j !== null ? j = An(j) : (j = Cn(l) ? na : ct.current, j = Ua(r, j));
      var Ne = l.getDerivedStateFromProps;
      (oe = typeof Ne == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (T !== fe || le !== j) && ph(r, C, u, j), Hl = !1, le = r.memoizedState, C.state = le, Bl(r, u, C, c);
      var Ve = r.memoizedState;
      T !== fe || le !== Ve || On.current || Hl ? (typeof Ne == "function" && (Wd(r, l, Ne, u), Ve = r.memoizedState), (G = Hl || fh(r, l, G, u, le, Ve, j) || !1) ? (oe || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(u, Ve, j), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(u, Ve, j)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || T === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ve), C.props = u, C.state = Ve, C.context = j, u = G) : (typeof C.componentDidUpdate != "function" || T === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ch(n, r, l, u, p, c);
  }
  function Ch(n, r, l, u, c, p) {
    Ct(n, r);
    var C = (r.flags & 128) !== 0;
    if (!u && !C)
      return c && ih(r, l, !1), hr(n, r, p);
    u = r.stateNode, Qy.current = r;
    var T = C && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && C ? (r.child = wu(r, n.child, null, p), r.child = wu(r, null, T, p)) : qn(n, r, T, p), r.memoizedState = u.state, c && ih(r, l, !0), r.child;
  }
  function Eh(n) {
    var r = n.stateNode;
    r.pendingContext ? Ul(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ul(n, r.context, !1), Qd(n, r.containerInfo);
  }
  function cf(n, r, l, u, c) {
    return bn(), Vd(c), r.flags |= 256, qn(n, r, l, u), r.child;
  }
  var No = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ep(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function tp(n, r, l) {
    var u = r.pendingProps, c = lt.current, p = !1, C = (r.flags & 128) !== 0, T;
    if ((T = C) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Xt(lt, c & 1), n === null)
      return Uc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, C = { mode: "hidden", children: C }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = C) : p = Qs(C, u, 0, null), n = Vo(n, u, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = ep(l), r.memoizedState = No, n) : np(r, C));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null))
      return Gy(n, r, C, u, T, c, l);
    if (p) {
      p = u.fallback, C = r.mode, c = n.child, T = c.sibling;
      var j = { mode: "hidden", children: u.children };
      return !(C & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = ql(c, j), u.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? p = ql(T, p) : (p = Vo(p, C, l, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, C = n.child.memoizedState, C = C === null ? ep(l) : { baseLanes: C.baseLanes | l, cachePool: null, transitions: C.transitions }, p.memoizedState = C, p.childLanes = n.childLanes & ~l, r.memoizedState = No, u;
    }
    return p = n.child, n = p.sibling, u = ql(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function np(n, r) {
    return r = Qs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ou(n, r, l, u) {
    return u !== null && Vd(u), wu(r, n.child, null, l), n = np(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Gy(n, r, l, u, c, p, C) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = As(Error(m(422))), Ou(n, r, C, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = Qs({ mode: "visible", children: u.children }, c, 0, null), p = Vo(p, c, C, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && wu(r, n.child, null, C), r.child.memoizedState = ep(C), r.memoizedState = No, p);
    if (!(r.mode & 1))
      return Ou(n, r, C, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var T = u.dgst;
      return u = T, p = Error(m(419)), u = As(p, u, void 0), Ou(n, r, C, u);
    }
    if (T = (C & n.childLanes) !== 0, In || T) {
      if (u = Tn, u !== null) {
        switch (C & -C) {
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
        c = c & (u.suspendedLanes | C) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, Xi(n, c), jr(u, n, c, -1));
      }
      return vp(), u = As(Error(m(421))), Ou(n, r, C, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = eg.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, la = oi(c.nextSibling), Ea = r, hn = !0, Fa = null, n !== null && (ia[_r++] = pr, ia[_r++] = qi, ia[_r++] = za, pr = n.id, qi = n.overflow, za = r), r = np(r, u.children), r.flags |= 4096, r);
  }
  function rp(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), ar(n.return, r, l);
  }
  function ff(n, r, l, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = l, p.tailMode = c);
  }
  function ap(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (qn(n, r, u.children, l), u = lt.current, u & 2)
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
    if (Xt(lt, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Rn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ff(r, !1, c, l, p);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Rn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          ff(r, !0, l, null, p);
          break;
        case "together":
          ff(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Or(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function hr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), tl |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = ql(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ji(n, r, l) {
    switch (r.tag) {
      case 3:
        Eh(r), bn();
        break;
      case 5:
        nt(r);
        break;
      case 1:
        Cn(r.type) && Nc(r);
        break;
      case 4:
        Qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Xt(Ri, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Xt(lt, lt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? tp(n, r, l) : (Xt(lt, lt.current & 1), n = hr(n, r, l), n !== null ? n.sibling : null);
        Xt(lt, lt.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return ap(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Xt(lt, lt.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Lo(n, r, l);
    }
    return hr(n, r, l);
  }
  var Fs, Mo, Ba, Xn;
  Fs = function(n, r) {
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
  }, Mo = function() {
  }, Ba = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, wo(ui.current);
      var p = null;
      switch (l) {
        case "input":
          c = Vn(n, c), u = Vn(n, u), p = [];
          break;
        case "select":
          c = N({}, c, { value: void 0 }), u = N({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = sr(n, c), u = sr(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Lc);
      }
      Un(l, u);
      var C;
      l = null;
      for (G in c)
        if (!u.hasOwnProperty(G) && c.hasOwnProperty(G) && c[G] != null)
          if (G === "style") {
            var T = c[G];
            for (C in T)
              T.hasOwnProperty(C) && (l || (l = {}), l[C] = "");
          } else
            G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (b.hasOwnProperty(G) ? p || (p = []) : (p = p || []).push(G, null));
      for (G in u) {
        var j = u[G];
        if (T = c != null ? c[G] : void 0, u.hasOwnProperty(G) && j !== T && (j != null || T != null))
          if (G === "style")
            if (T) {
              for (C in T)
                !T.hasOwnProperty(C) || j && j.hasOwnProperty(C) || (l || (l = {}), l[C] = "");
              for (C in j)
                j.hasOwnProperty(C) && T[C] !== j[C] && (l || (l = {}), l[C] = j[C]);
            } else
              l || (p || (p = []), p.push(
                G,
                l
              )), l = j;
          else
            G === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, T = T ? T.__html : void 0, j != null && T !== j && (p = p || []).push(G, j)) : G === "children" ? typeof j != "string" && typeof j != "number" || (p = p || []).push(G, "" + j) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (b.hasOwnProperty(G) ? (j != null && G === "onScroll" && an("scroll", n), p || T === j || (p = [])) : (p = p || []).push(G, j));
      }
      l && (p = p || []).push("style", l);
      var G = p;
      (r.updateQueue = G) && (r.flags |= 4);
    }
  }, Xn = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Hs(n, r) {
    if (!hn)
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
  function Lr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function qy(n, r, l) {
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
        return Lr(r), null;
      case 1:
        return Cn(r.type) && Aa(), Lr(r), null;
      case 3:
        return u = r.stateNode, Pl(), Yt(On), Yt(ct), $c(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Ac(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Ws(Fa), Fa = null))), Mo(n, r), Lr(r), null;
      case 5:
        kt(r);
        var c = wo(bu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ba(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(m(166));
            return Lr(r), null;
          }
          if (n = wo(ui.current), Ac(r)) {
            u = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (u[wi] = r, u[Co] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                an("cancel", u), an("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                an("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xs.length; c++)
                  an(xs[c], u);
                break;
              case "source":
                an("error", u);
                break;
              case "img":
              case "image":
              case "link":
                an(
                  "error",
                  u
                ), an("load", u);
                break;
              case "details":
                an("toggle", u);
                break;
              case "input":
                Mn(u, p), an("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, an("invalid", u);
                break;
              case "textarea":
                Qn(u, p), an("invalid", u);
            }
            Un(l, p), c = null;
            for (var C in p)
              if (p.hasOwnProperty(C)) {
                var T = p[C];
                C === "children" ? typeof T == "string" ? u.textContent !== T && (p.suppressHydrationWarning !== !0 && Oc(u.textContent, T, n), c = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (p.suppressHydrationWarning !== !0 && Oc(
                  u.textContent,
                  T,
                  n
                ), c = ["children", "" + T]) : b.hasOwnProperty(C) && T != null && C === "onScroll" && an("scroll", u);
              }
            switch (l) {
              case "input":
                Hn(u), Tr(u, p, !0);
                break;
              case "textarea":
                Hn(u), Bn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Lc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            C = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = C.createElement(l, { is: u.is }) : (n = C.createElement(l), l === "select" && (C = n, u.multiple ? C.multiple = !0 : u.size && (C.size = u.size))) : n = C.createElementNS(n, l), n[wi] = r, n[Co] = u, Fs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = xn(l, u), l) {
                case "dialog":
                  an("cancel", n), an("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  an("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xs.length; c++)
                    an(xs[c], n);
                  c = u;
                  break;
                case "source":
                  an("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  an(
                    "error",
                    n
                  ), an("load", n), c = u;
                  break;
                case "details":
                  an("toggle", n), c = u;
                  break;
                case "input":
                  Mn(n, u), c = Vn(n, u), an("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = N({}, u, { value: void 0 }), an("invalid", n);
                  break;
                case "textarea":
                  Qn(n, u), c = sr(n, u), an("invalid", n);
                  break;
                default:
                  c = u;
              }
              Un(l, c), T = c;
              for (p in T)
                if (T.hasOwnProperty(p)) {
                  var j = T[p];
                  p === "style" ? It(n, j) : p === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && hi(n, j)) : p === "children" ? typeof j == "string" ? (l !== "textarea" || j !== "") && ha(n, j) : typeof j == "number" && ha(n, "" + j) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (b.hasOwnProperty(p) ? j != null && p === "onScroll" && an("scroll", n) : j != null && ye(n, p, j, C));
                }
              switch (l) {
                case "input":
                  Hn(n), Tr(n, u, !1);
                  break;
                case "textarea":
                  Hn(n), Bn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ut(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? jn(n, !!u.multiple, p, !1) : u.defaultValue != null && jn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Lc);
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
        return Lr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Xn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = wo(bu.current), wo(ui.current), Ac(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[wi] = r, (p = u.nodeValue !== l) && (n = Ea, n !== null))
              switch (n.tag) {
                case 3:
                  Oc(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Oc(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[wi] = r, r.stateNode = u;
        }
        return Lr(r), null;
      case 13:
        if (Yt(lt), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && la !== null && r.mode & 1 && !(r.flags & 128))
            uh(), bn(), r.flags |= 98560, p = !1;
          else if (p = Ac(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(m(317));
              p[wi] = r;
            } else
              bn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Lr(r), p = !1;
          } else
            Fa !== null && (Ws(Fa), Fa = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || lt.current & 1 ? Kn === 0 && (Kn = 3) : vp())), r.updateQueue !== null && (r.flags |= 4), Lr(r), null);
      case 4:
        return Pl(), Mo(n, r), n === null && Su(r.stateNode.containerInfo), Lr(r), null;
      case 10:
        return Fl(r.type._context), Lr(r), null;
      case 17:
        return Cn(r.type) && Aa(), Lr(r), null;
      case 19:
        if (Yt(lt), p = r.memoizedState, p === null)
          return Lr(r), null;
        if (u = (r.flags & 128) !== 0, C = p.rendering, C === null)
          if (u)
            Hs(p, !1);
          else {
            if (Kn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = Rn(n), C !== null) {
                  for (r.flags |= 128, Hs(p, !1), u = C.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    p = l, n = u, p.flags &= 14680066, C = p.alternate, C === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = C.childLanes, p.lanes = C.lanes, p.child = C.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = C.memoizedProps, p.memoizedState = C.memoizedState, p.updateQueue = C.updateQueue, p.type = C.type, n = C.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Xt(lt, lt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && zt() > zu && (r.flags |= 128, u = !0, Hs(p, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Rn(C), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Hs(p, !0), p.tail === null && p.tailMode === "hidden" && !C.alternate && !hn)
                return Lr(r), null;
            } else
              2 * zt() - p.renderingStartTime > zu && l !== 1073741824 && (r.flags |= 128, u = !0, Hs(p, !1), r.lanes = 4194304);
          p.isBackwards ? (C.sibling = r.child, r.child = C) : (l = p.last, l !== null ? l.sibling = C : r.child = C, p.last = C);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = zt(), r.sibling = null, l = lt.current, Xt(lt, u ? l & 1 | 2 : l & 1), r) : (Lr(r), null);
      case 22:
      case 23:
        return pp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ba & 1073741824 && (Lr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Lr(r), null;
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
        return Cn(r.type) && Aa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Pl(), Yt(On), Yt(ct), $c(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return kt(r), null;
      case 13:
        if (Yt(lt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          bn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Yt(lt), null;
      case 4:
        return Pl(), null;
      case 10:
        return Fl(r.type._context), null;
      case 22:
      case 23:
        return pp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Vs = !1, Zn = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function Lu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Nn(n, r, u);
        }
      else
        l.current = null;
  }
  function Bs(n, r, l) {
    try {
      l();
    } catch (u) {
      Nn(n, r, u);
    }
  }
  var wh = !1;
  function bh(n, r) {
    if (Od = Na, n = Rc(), Yi(n)) {
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
            var C = 0, T = -1, j = -1, G = 0, oe = 0, fe = n, le = null;
            t:
              for (; ; ) {
                for (var Ne; fe !== l || c !== 0 && fe.nodeType !== 3 || (T = C + c), fe !== p || u !== 0 && fe.nodeType !== 3 || (j = C + u), fe.nodeType === 3 && (C += fe.nodeValue.length), (Ne = fe.firstChild) !== null; )
                  le = fe, fe = Ne;
                for (; ; ) {
                  if (fe === n)
                    break t;
                  if (le === l && ++G === c && (T = C), le === p && ++oe === u && (j = C), (Ne = fe.nextSibling) !== null)
                    break;
                  fe = le, le = fe.parentNode;
                }
                fe = Ne;
              }
            l = T === -1 || j === -1 ? null : { start: T, end: j };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (go = { focusedElem: n, selectionRange: l }, Na = !1, Fe = r; Fe !== null; )
      if (r = Fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Fe = n;
      else
        for (; Fe !== null; ) {
          r = Fe;
          try {
            var Ve = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Ve !== null) {
                    var $e = Ve.memoizedProps, zn = Ve.memoizedState, V = r.stateNode, F = V.getSnapshotBeforeUpdate(r.elementType === r.type ? $e : xa(r.type, $e), zn);
                    V.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var $ = r.stateNode.containerInfo;
                  $.nodeType === 1 ? $.textContent = "" : $.nodeType === 9 && $.documentElement && $.removeChild($.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (me) {
            Nn(r, r.return, me);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Fe = n;
            break;
          }
          Fe = r.return;
        }
    return Ve = wh, wh = !1, Ve;
  }
  function Ps(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && Bs(r, l, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function $s(n, r) {
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
    r !== null && (n.alternate = null, op(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[wi], delete r[Co], delete r[Md], delete r[Py], delete r[jd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Rh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function df(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Rh(n.return))
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
  function Nu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Lc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Nu(n, r, l), n = n.sibling; n !== null; )
        Nu(n, r, l), n = n.sibling;
  }
  function ki(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (ki(n, r, l), n = n.sibling; n !== null; )
        ki(n, r, l), n = n.sibling;
  }
  var En = null, ir = !1;
  function Pa(n, r, l) {
    for (l = l.child; l !== null; )
      Mu(n, r, l), l = l.sibling;
  }
  function Mu(n, r, l) {
    if (Kr && typeof Kr.onCommitFiberUnmount == "function")
      try {
        Kr.onCommitFiberUnmount(Cl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Zn || Lu(l, r);
      case 6:
        var u = En, c = ir;
        En = null, Pa(n, r, l), En = u, ir = c, En !== null && (ir ? (n = En, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : En.removeChild(l.stateNode));
        break;
      case 18:
        En !== null && (ir ? (n = En, l = l.stateNode, n.nodeType === 8 ? Nl(n.parentNode, l) : n.nodeType === 1 && Nl(n, l), kl(n)) : Nl(En, l.stateNode));
        break;
      case 4:
        u = En, c = ir, En = l.stateNode.containerInfo, ir = !0, Pa(n, r, l), En = u, ir = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Zn && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, C = p.destroy;
            p = p.tag, C !== void 0 && (p & 2 || p & 4) && Bs(l, r, C), c = c.next;
          } while (c !== u);
        }
        Pa(n, r, l);
        break;
      case 1:
        if (!Zn && (Lu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (T) {
            Nn(l, r, T);
          }
        Pa(n, r, l);
        break;
      case 21:
        Pa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Zn = (u = Zn) || l.memoizedState !== null, Pa(n, r, l), Zn = u) : Pa(n, r, l);
        break;
      default:
        Pa(n, r, l);
    }
  }
  function el(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new xh()), r.forEach(function(u) {
        var c = tg.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function si(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        try {
          var p = n, C = r, T = C;
          e:
            for (; T !== null; ) {
              switch (T.tag) {
                case 5:
                  En = T.stateNode, ir = !1;
                  break e;
                case 3:
                  En = T.stateNode.containerInfo, ir = !0;
                  break e;
                case 4:
                  En = T.stateNode.containerInfo, ir = !0;
                  break e;
              }
              T = T.return;
            }
          if (En === null)
            throw Error(m(160));
          Mu(p, C, c), En = null, ir = !1;
          var j = c.alternate;
          j !== null && (j.return = null), c.return = null;
        } catch (G) {
          Nn(c, r, G);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Th(r, n), r = r.sibling;
  }
  function Th(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (si(r, n), Di(n), u & 4) {
          try {
            Ps(3, n, n.return), $s(3, n);
          } catch ($e) {
            Nn(n, n.return, $e);
          }
          try {
            Ps(5, n, n.return);
          } catch ($e) {
            Nn(n, n.return, $e);
          }
        }
        break;
      case 1:
        si(r, n), Di(n), u & 512 && l !== null && Lu(l, l.return);
        break;
      case 5:
        if (si(r, n), Di(n), u & 512 && l !== null && Lu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ha(c, "");
          } catch ($e) {
            Nn(n, n.return, $e);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, C = l !== null ? l.memoizedProps : p, T = n.type, j = n.updateQueue;
          if (n.updateQueue = null, j !== null)
            try {
              T === "input" && p.type === "radio" && p.name != null && Dn(c, p), xn(T, C);
              var G = xn(T, p);
              for (C = 0; C < j.length; C += 2) {
                var oe = j[C], fe = j[C + 1];
                oe === "style" ? It(c, fe) : oe === "dangerouslySetInnerHTML" ? hi(c, fe) : oe === "children" ? ha(c, fe) : ye(c, oe, fe, G);
              }
              switch (T) {
                case "input":
                  Sn(c, p);
                  break;
                case "textarea":
                  cr(c, p);
                  break;
                case "select":
                  var le = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var Ne = p.value;
                  Ne != null ? jn(c, !!p.multiple, Ne, !1) : le !== !!p.multiple && (p.defaultValue != null ? jn(
                    c,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : jn(c, !!p.multiple, p.multiple ? [] : "", !1));
              }
              c[Co] = p;
            } catch ($e) {
              Nn(n, n.return, $e);
            }
        }
        break;
      case 6:
        if (si(r, n), Di(n), u & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch ($e) {
            Nn(n, n.return, $e);
          }
        }
        break;
      case 3:
        if (si(r, n), Di(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            kl(r.containerInfo);
          } catch ($e) {
            Nn(n, n.return, $e);
          }
        break;
      case 4:
        si(r, n), Di(n);
        break;
      case 13:
        si(r, n), Di(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (cp = zt())), u & 4 && el(n);
        break;
      case 22:
        if (oe = l !== null && l.memoizedState !== null, n.mode & 1 ? (Zn = (G = Zn) || oe, si(r, n), Zn = G) : si(r, n), Di(n), u & 8192) {
          if (G = n.memoizedState !== null, (n.stateNode.isHidden = G) && !oe && n.mode & 1)
            for (Fe = n, oe = n.child; oe !== null; ) {
              for (fe = Fe = oe; Fe !== null; ) {
                switch (le = Fe, Ne = le.child, le.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ps(4, le, le.return);
                    break;
                  case 1:
                    Lu(le, le.return);
                    var Ve = le.stateNode;
                    if (typeof Ve.componentWillUnmount == "function") {
                      u = le, l = le.return;
                      try {
                        r = u, Ve.props = r.memoizedProps, Ve.state = r.memoizedState, Ve.componentWillUnmount();
                      } catch ($e) {
                        Nn(u, l, $e);
                      }
                    }
                    break;
                  case 5:
                    Lu(le, le.return);
                    break;
                  case 22:
                    if (le.memoizedState !== null) {
                      up(fe);
                      continue;
                    }
                }
                Ne !== null ? (Ne.return = le, Fe = Ne) : up(fe);
              }
              oe = oe.sibling;
            }
          e:
            for (oe = null, fe = n; ; ) {
              if (fe.tag === 5) {
                if (oe === null) {
                  oe = fe;
                  try {
                    c = fe.stateNode, G ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (T = fe.stateNode, j = fe.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null, T.style.display = wt("display", C));
                  } catch ($e) {
                    Nn(n, n.return, $e);
                  }
                }
              } else if (fe.tag === 6) {
                if (oe === null)
                  try {
                    fe.stateNode.nodeValue = G ? "" : fe.memoizedProps;
                  } catch ($e) {
                    Nn(n, n.return, $e);
                  }
              } else if ((fe.tag !== 22 && fe.tag !== 23 || fe.memoizedState === null || fe === n) && fe.child !== null) {
                fe.child.return = fe, fe = fe.child;
                continue;
              }
              if (fe === n)
                break e;
              for (; fe.sibling === null; ) {
                if (fe.return === null || fe.return === n)
                  break e;
                oe === fe && (oe = null), fe = fe.return;
              }
              oe === fe && (oe = null), fe.sibling.return = fe.return, fe = fe.sibling;
            }
        }
        break;
      case 19:
        si(r, n), Di(n), u & 4 && el(n);
        break;
      case 21:
        break;
      default:
        si(
          r,
          n
        ), Di(n);
    }
  }
  function Di(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Rh(l)) {
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
            u.flags & 32 && (ha(c, ""), u.flags &= -33);
            var p = df(n);
            ki(n, p, c);
            break;
          case 3:
          case 4:
            var C = u.stateNode.containerInfo, T = df(n);
            Nu(n, T, C);
            break;
          default:
            throw Error(m(161));
        }
      } catch (j) {
        Nn(n, n.return, j);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function kh(n, r, l) {
    Fe = n, ju(n);
  }
  function ju(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Fe !== null; ) {
      var c = Fe, p = c.child;
      if (c.tag === 22 && u) {
        var C = c.memoizedState !== null || Vs;
        if (!C) {
          var T = c.alternate, j = T !== null && T.memoizedState !== null || Zn;
          T = Vs;
          var G = Zn;
          if (Vs = C, (Zn = j) && !G)
            for (Fe = c; Fe !== null; )
              C = Fe, j = C.child, C.tag === 22 && C.memoizedState !== null ? _h(c) : j !== null ? (j.return = C, Fe = j) : _h(c);
          for (; p !== null; )
            Fe = p, ju(p), p = p.sibling;
          Fe = c, Vs = T, Zn = G;
        }
        Dh(n);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, Fe = p) : Dh(n);
    }
  }
  function Dh(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Zn || $s(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !Zn)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : xa(r.type, l.memoizedProps);
                    u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && xo(r, p, u);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  xo(r, C, l);
                }
                break;
              case 5:
                var T = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = T;
                  var j = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      j.autoFocus && l.focus();
                      break;
                    case "img":
                      j.src && (l.src = j.src);
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
                  var G = r.alternate;
                  if (G !== null) {
                    var oe = G.memoizedState;
                    if (oe !== null) {
                      var fe = oe.dehydrated;
                      fe !== null && kl(fe);
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
          Zn || r.flags & 512 && lp(r);
        } catch (le) {
          Nn(r, r.return, le);
        }
      }
      if (r === n) {
        Fe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function up(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === n) {
        Fe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function _h(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              $s(4, r);
            } catch (j) {
              Nn(r, l, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                Nn(r, c, j);
              }
            }
            var p = r.return;
            try {
              lp(r);
            } catch (j) {
              Nn(r, p, j);
            }
            break;
          case 5:
            var C = r.return;
            try {
              lp(r);
            } catch (j) {
              Nn(r, C, j);
            }
        }
      } catch (j) {
        Nn(r, r.return, j);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Fe = T;
        break;
      }
      Fe = r.return;
    }
  }
  var pf = Math.ceil, Is = Se.ReactCurrentDispatcher, sp = Se.ReactCurrentOwner, Nr = Se.ReactCurrentBatchConfig, Dt = 0, Tn = null, Ln = null, lr = 0, ba = 0, Uu = St(0), Kn = 0, Ys = null, tl = 0, vf = 0, Au = 0, jo = null, Br = null, cp = 0, zu = 1 / 0, nl = null, hf = !1, Uo = null, _i = null, Wl = !1, Ql = null, mf = 0, Fu = 0, yf = null, Ao = -1, zo = 0;
  function Mr() {
    return Dt & 6 ? zt() : Ao !== -1 ? Ao : Ao = zt();
  }
  function Yn(n) {
    return n.mode & 1 ? Dt & 2 && lr !== 0 ? lr & -lr : zc.transition !== null ? (zo === 0 && (zo = iu()), zo) : (n = Bt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ps(n.type)), n) : 1;
  }
  function jr(n, r, l, u) {
    if (50 < Fu)
      throw Fu = 0, yf = null, Error(m(185));
    Vi(n, l, u), (!(Dt & 2) || n !== Tn) && (n === Tn && (!(Dt & 2) && (vf |= l), Kn === 4 && $a(n, lr)), Ur(n, u), l === 1 && Dt === 0 && !(r.mode & 1) && (zu = zt() + 500, rr && ra()));
  }
  function Ur(n, r) {
    var l = n.callbackNode;
    wl(n, r);
    var u = Hr(n, n === Tn ? lr : 0);
    if (u === 0)
      l !== null && dr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && dr(l), r === 1)
        n.tag === 0 ? Ad(Oh.bind(null, n)) : Ud(Oh.bind(null, n)), Nd(function() {
          !(Dt & 6) && ra();
        }), l = null;
      else {
        switch (ou(u)) {
          case 1:
            l = ti;
            break;
          case 4:
            l = Rt;
            break;
          case 16:
            l = Ci;
            break;
          case 536870912:
            l = ru;
            break;
          default:
            l = Ci;
        }
        l = mp(l, Hu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Hu(n, r) {
    if (Ao = -1, zo = 0, Dt & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (Bu() && n.callbackNode !== l)
      return null;
    var u = Hr(n, n === Tn ? lr : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Sf(n, u);
    else {
      r = u;
      var c = Dt;
      Dt |= 2;
      var p = gf();
      (Tn !== n || lr !== r) && (nl = null, zu = zt() + 500, Fo(n, r));
      do
        try {
          Zy();
          break;
        } catch (T) {
          Lh(n, T);
        }
      while (1);
      Pd(), Is.current = p, Dt = c, Ln !== null ? r = 0 : (Tn = null, lr = 0, r = Kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = bl(n), c !== 0 && (u = c, r = fp(n, c))), r === 1)
        throw l = Ys, Fo(n, 0), $a(n, u), Ur(n, zt()), l;
      if (r === 6)
        $a(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !dp(c) && (r = Sf(n, u), r === 2 && (p = bl(n), p !== 0 && (u = p, r = fp(n, p))), r === 1))
          throw l = Ys, Fo(n, 0), $a(n, u), Ur(n, zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Ho(n, Br, nl);
            break;
          case 3:
            if ($a(n, u), (u & 130023424) === u && (r = cp + 500 - zt(), 10 < r)) {
              if (Hr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Mr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = So(Ho.bind(null, n, Br, nl), r);
              break;
            }
            Ho(n, Br, nl);
            break;
          case 4:
            if ($a(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var C = 31 - Fr(u);
              p = 1 << C, C = r[C], C > c && (c = C), u &= ~p;
            }
            if (u = c, u = zt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * pf(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = So(Ho.bind(null, n, Br, nl), u);
              break;
            }
            Ho(n, Br, nl);
            break;
          case 5:
            Ho(n, Br, nl);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ur(n, zt()), n.callbackNode === l ? Hu.bind(null, n) : null;
  }
  function fp(n, r) {
    var l = jo;
    return n.current.memoizedState.isDehydrated && (Fo(n, r).flags |= 256), n = Sf(n, r), n !== 2 && (r = Br, Br = l, r !== null && Ws(r)), n;
  }
  function Ws(n) {
    Br === null ? Br = n : Br.push.apply(Br, n);
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
              if (!Ma(p(), c))
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
  function $a(n, r) {
    for (r &= ~Au, r &= ~vf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Fr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Oh(n) {
    if (Dt & 6)
      throw Error(m(327));
    Bu();
    var r = Hr(n, 0);
    if (!(r & 1))
      return Ur(n, zt()), null;
    var l = Sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = bl(n);
      u !== 0 && (r = u, l = fp(n, u));
    }
    if (l === 1)
      throw l = Ys, Fo(n, 0), $a(n, r), Ur(n, zt()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ho(n, Br, nl), Ur(n, zt()), null;
  }
  function Vu(n, r) {
    var l = Dt;
    Dt |= 1;
    try {
      return n(r);
    } finally {
      Dt = l, Dt === 0 && (zu = zt() + 500, rr && ra());
    }
  }
  function Gl(n) {
    Ql !== null && Ql.tag === 0 && !(Dt & 6) && Bu();
    var r = Dt;
    Dt |= 1;
    var l = Nr.transition, u = Bt;
    try {
      if (Nr.transition = null, Bt = 1, n)
        return n();
    } finally {
      Bt = u, Nr.transition = l, Dt = r, !(Dt & 6) && ra();
    }
  }
  function pp() {
    ba = Uu.current, Yt(Uu);
  }
  function Fo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ah(l)), Ln !== null)
      for (l = Ln.return; l !== null; ) {
        var u = l;
        switch (Fd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Aa();
            break;
          case 3:
            Pl(), Yt(On), Yt(ct), $c();
            break;
          case 5:
            kt(u);
            break;
          case 4:
            Pl();
            break;
          case 13:
            Yt(lt);
            break;
          case 19:
            Yt(lt);
            break;
          case 10:
            Fl(u.type._context);
            break;
          case 22:
          case 23:
            pp();
        }
        l = l.return;
      }
    if (Tn = n, Ln = n = ql(n.current, null), lr = ba = r, Kn = 0, Ys = null, Au = vf = tl = 0, Br = jo = null, vr !== null) {
      for (r = 0; r < vr.length; r++)
        if (l = vr[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var c = u.next, p = l.pending;
          if (p !== null) {
            var C = p.next;
            p.next = c, u.next = C;
          }
          l.pending = u;
        }
      vr = null;
    }
    return n;
  }
  function Lh(n, r) {
    do {
      var l = Ln;
      try {
        if (Pd(), Ic.current = of, ot) {
          for (var u = mn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          ot = !1;
        }
        if (bo = 0, Nt = J = mn = null, Ti = !1, wa = 0, sp.current = null, l === null || l.return === null) {
          Kn = 1, Ys = r, Ln = null;
          break;
        }
        e: {
          var p = n, C = l.return, T = l, j = r;
          if (r = lr, T.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var G = j, oe = T, fe = oe.tag;
            if (!(oe.mode & 1) && (fe === 0 || fe === 11 || fe === 15)) {
              var le = oe.alternate;
              le ? (oe.updateQueue = le.updateQueue, oe.memoizedState = le.memoizedState, oe.lanes = le.lanes) : (oe.updateQueue = null, oe.memoizedState = null);
            }
            var Ne = Zd(C);
            if (Ne !== null) {
              Ne.flags &= -257, Kd(Ne, C, T, p, r), Ne.mode & 1 && Sh(p, G, r), r = Ne, j = G;
              var Ve = r.updateQueue;
              if (Ve === null) {
                var $e = /* @__PURE__ */ new Set();
                $e.add(j), r.updateQueue = $e;
              } else
                Ve.add(j);
              break e;
            } else {
              if (!(r & 1)) {
                Sh(p, G, r), vp();
                break e;
              }
              j = Error(m(426));
            }
          } else if (hn && T.mode & 1) {
            var zn = Zd(C);
            if (zn !== null) {
              !(zn.flags & 65536) && (zn.flags |= 256), Kd(zn, C, T, p, r), Vd(Du(j, T));
              break e;
            }
          }
          p = j = Du(j, T), Kn !== 4 && (Kn = 2), jo === null ? jo = [p] : jo.push(p), p = C;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var V = gh(p, j, r);
                Yd(p, V);
                break e;
              case 1:
                T = j;
                var F = p.type, $ = p.stateNode;
                if (!(p.flags & 128) && (typeof F.getDerivedStateFromError == "function" || $ !== null && typeof $.componentDidCatch == "function" && (_i === null || !_i.has($)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var me = zs(p, T, r);
                  Yd(p, me);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        hp(l);
      } catch (Ye) {
        r = Ye, Ln === l && l !== null && (Ln = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function gf() {
    var n = Is.current;
    return Is.current = of, n === null ? of : n;
  }
  function vp() {
    (Kn === 0 || Kn === 3 || Kn === 2) && (Kn = 4), Tn === null || !(tl & 268435455) && !(vf & 268435455) || $a(Tn, lr);
  }
  function Sf(n, r) {
    var l = Dt;
    Dt |= 2;
    var u = gf();
    (Tn !== n || lr !== r) && (nl = null, Fo(n, r));
    do
      try {
        Xy();
        break;
      } catch (c) {
        Lh(n, c);
      }
    while (1);
    if (Pd(), Dt = l, Is.current = u, Ln !== null)
      throw Error(m(261));
    return Tn = null, lr = 0, Kn;
  }
  function Xy() {
    for (; Ln !== null; )
      Nh(Ln);
  }
  function Zy() {
    for (; Ln !== null && !Si(); )
      Nh(Ln);
  }
  function Nh(n) {
    var r = jh(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? hp(n) : Ln = r, sp.current = null;
  }
  function hp(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ip(l, r), l !== null) {
          l.flags &= 32767, Ln = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Kn = 6, Ln = null;
          return;
        }
      } else if (l = qy(l, r, ba), l !== null) {
        Ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Ln = r;
        return;
      }
      Ln = r = n;
    } while (r !== null);
    Kn === 0 && (Kn = 5);
  }
  function Ho(n, r, l) {
    var u = Bt, c = Nr.transition;
    try {
      Nr.transition = null, Bt = 1, Ky(n, r, l, u);
    } finally {
      Nr.transition = c, Bt = u;
    }
    return null;
  }
  function Ky(n, r, l, u) {
    do
      Bu();
    while (Ql !== null);
    if (Dt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (fd(n, p), n === Tn && (Ln = Tn = null, lr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Wl || (Wl = !0, mp(Ci, function() {
      return Bu(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = Nr.transition, Nr.transition = null;
      var C = Bt;
      Bt = 1;
      var T = Dt;
      Dt |= 4, sp.current = null, bh(n, l), Th(l, n), Tc(go), Na = !!Od, go = Od = null, n.current = l, kh(l), nu(), Dt = T, Bt = C, Nr.transition = p;
    } else
      n.current = l;
    if (Wl && (Wl = !1, Ql = n, mf = c), p = n.pendingLanes, p === 0 && (_i = null), cs(l.stateNode), Ur(n, zt()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (hf)
      throw hf = !1, n = Uo, Uo = null, n;
    return mf & 1 && n.tag !== 0 && Bu(), p = n.pendingLanes, p & 1 ? n === yf ? Fu++ : (Fu = 0, yf = n) : Fu = 0, ra(), null;
  }
  function Bu() {
    if (Ql !== null) {
      var n = ou(mf), r = Nr.transition, l = Bt;
      try {
        if (Nr.transition = null, Bt = 16 > n ? 16 : n, Ql === null)
          var u = !1;
        else {
          if (n = Ql, Ql = null, mf = 0, Dt & 6)
            throw Error(m(331));
          var c = Dt;
          for (Dt |= 4, Fe = n.current; Fe !== null; ) {
            var p = Fe, C = p.child;
            if (Fe.flags & 16) {
              var T = p.deletions;
              if (T !== null) {
                for (var j = 0; j < T.length; j++) {
                  var G = T[j];
                  for (Fe = G; Fe !== null; ) {
                    var oe = Fe;
                    switch (oe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(8, oe, p);
                    }
                    var fe = oe.child;
                    if (fe !== null)
                      fe.return = oe, Fe = fe;
                    else
                      for (; Fe !== null; ) {
                        oe = Fe;
                        var le = oe.sibling, Ne = oe.return;
                        if (op(oe), oe === G) {
                          Fe = null;
                          break;
                        }
                        if (le !== null) {
                          le.return = Ne, Fe = le;
                          break;
                        }
                        Fe = Ne;
                      }
                  }
                }
                var Ve = p.alternate;
                if (Ve !== null) {
                  var $e = Ve.child;
                  if ($e !== null) {
                    Ve.child = null;
                    do {
                      var zn = $e.sibling;
                      $e.sibling = null, $e = zn;
                    } while ($e !== null);
                  }
                }
                Fe = p;
              }
            }
            if (p.subtreeFlags & 2064 && C !== null)
              C.return = p, Fe = C;
            else
              e:
                for (; Fe !== null; ) {
                  if (p = Fe, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ps(9, p, p.return);
                    }
                  var V = p.sibling;
                  if (V !== null) {
                    V.return = p.return, Fe = V;
                    break e;
                  }
                  Fe = p.return;
                }
          }
          var F = n.current;
          for (Fe = F; Fe !== null; ) {
            C = Fe;
            var $ = C.child;
            if (C.subtreeFlags & 2064 && $ !== null)
              $.return = C, Fe = $;
            else
              e:
                for (C = F; Fe !== null; ) {
                  if (T = Fe, T.flags & 2048)
                    try {
                      switch (T.tag) {
                        case 0:
                        case 11:
                        case 15:
                          $s(9, T);
                      }
                    } catch (Ye) {
                      Nn(T, T.return, Ye);
                    }
                  if (T === C) {
                    Fe = null;
                    break e;
                  }
                  var me = T.sibling;
                  if (me !== null) {
                    me.return = T.return, Fe = me;
                    break e;
                  }
                  Fe = T.return;
                }
          }
          if (Dt = c, ra(), Kr && typeof Kr.onPostCommitFiberRoot == "function")
            try {
              Kr.onPostCommitFiberRoot(Cl, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Bt = l, Nr.transition = r;
      }
    }
    return !1;
  }
  function Mh(n, r, l) {
    r = Du(l, r), r = gh(n, r, 1), n = Vl(n, r, 1), r = Mr(), n !== null && (Vi(n, 1, r), Ur(n, r));
  }
  function Nn(n, r, l) {
    if (n.tag === 3)
      Mh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Mh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (_i === null || !_i.has(u))) {
            n = Du(l, n), n = zs(r, n, 1), r = Vl(r, n, 1), n = Mr(), r !== null && (Vi(r, 1, n), Ur(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Jy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Mr(), n.pingedLanes |= n.suspendedLanes & l, Tn === n && (lr & l) === l && (Kn === 4 || Kn === 3 && (lr & 130023424) === lr && 500 > zt() - cp ? Fo(n, 0) : Au |= l), Ur(n, r);
  }
  function Cf(n, r) {
    r === 0 && (n.mode & 1 ? (r = El, El <<= 1, !(El & 130023424) && (El = 4194304)) : r = 1);
    var l = Mr();
    n = Xi(n, r), n !== null && (Vi(n, r, l), Ur(n, l));
  }
  function eg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Cf(n, l);
  }
  function tg(n, r) {
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
    u !== null && u.delete(r), Cf(n, l);
  }
  var jh;
  jh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || On.current)
        In = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return In = !1, Ji(n, r, l);
        In = !!(n.flags & 131072);
      }
    else
      In = !1, hn && r.flags & 1048576 && zd(r, Eu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Or(n, r), n = r.pendingProps;
        var c = Ua(r, ct.current);
        be(r, l), c = $l(null, r, u, n, c, l);
        var p = ko();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Cn(u) ? (p = !0, Nc(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Id(r), c.updater = Vc, r.stateNode = c, c._reactInternals = r, Bc(r, u, n, l), r = Ch(null, r, u, !0, p, l)) : (r.tag = 0, hn && p && Mc(r), qn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Or(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = rg(u), n = xa(u, n), c) {
            case 0:
              r = _u(null, r, u, n, l);
              break e;
            case 1:
              r = Jd(null, r, u, n, l);
              break e;
            case 11:
              r = Yl(null, r, u, n, l);
              break e;
            case 14:
              r = sf(null, r, u, xa(u.type, n), l);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), _u(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Jd(n, r, u, c, l);
      case 3:
        e: {
          if (Eh(r), n === null)
            throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, Gn(n, r), Bl(r, u, null, l);
          var C = r.memoizedState;
          if (u = C.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = Du(Error(m(423)), r), r = cf(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = Du(Error(m(424)), r), r = cf(n, r, u, l, c);
              break e;
            } else
              for (la = oi(r.stateNode.containerInfo.firstChild), Ea = r, hn = !0, Fa = null, l = mh(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (bn(), u === c) {
              r = hr(n, r, l);
              break e;
            }
            qn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return nt(r), n === null && Uc(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, C = c.children, Rs(u, c) ? C = null : p !== null && Rs(u, p) && (r.flags |= 32), Ct(n, r), qn(n, r, C, l), r.child;
      case 6:
        return n === null && Uc(r), null;
      case 13:
        return tp(n, r, l);
      case 4:
        return Qd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = wu(r, null, u, l) : qn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Yl(n, r, u, c, l);
      case 7:
        return qn(n, r, r.pendingProps, l), r.child;
      case 8:
        return qn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return qn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, C = c.value, Xt(Ri, u._currentValue), u._currentValue = C, p !== null)
            if (Ma(p.value, C)) {
              if (p.children === c.children && !On.current) {
                r = hr(n, r, l);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var T = p.dependencies;
                if (T !== null) {
                  C = p.child;
                  for (var j = T.firstContext; j !== null; ) {
                    if (j.context === u) {
                      if (p.tag === 1) {
                        j = Zi(-1, l & -l), j.tag = 2;
                        var G = p.updateQueue;
                        if (G !== null) {
                          G = G.shared;
                          var oe = G.pending;
                          oe === null ? j.next = j : (j.next = oe.next, oe.next = j), G.pending = j;
                        }
                      }
                      p.lanes |= l, j = p.alternate, j !== null && (j.lanes |= l), ar(
                        p.return,
                        l,
                        r
                      ), T.lanes |= l;
                      break;
                    }
                    j = j.next;
                  }
                } else if (p.tag === 10)
                  C = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (C = p.return, C === null)
                    throw Error(m(341));
                  C.lanes |= l, T = C.alternate, T !== null && (T.lanes |= l), ar(C, l, r), C = p.sibling;
                } else
                  C = p.child;
                if (C !== null)
                  C.return = p;
                else
                  for (C = p; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (p = C.sibling, p !== null) {
                      p.return = C.return, C = p;
                      break;
                    }
                    C = C.return;
                  }
                p = C;
              }
          qn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, be(r, l), c = An(c), u = u(c), r.flags |= 1, qn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = xa(u, r.pendingProps), c = xa(u.type, c), sf(n, r, u, c, l);
      case 15:
        return sa(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : xa(u, c), Or(n, r), r.tag = 1, Cn(u) ? (n = !0, Nc(r)) : n = !1, be(r, l), dh(r, u, c), Bc(r, u, c, l), Ch(null, r, u, !0, n, l);
      case 19:
        return ap(n, r, l);
      case 22:
        return Lo(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function mp(n, r) {
    return dn(n, r);
  }
  function ng(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, u) {
    return new ng(n, r, l, u);
  }
  function yp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function rg(n) {
    if (typeof n == "function")
      return yp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === rt)
        return 11;
      if (n === Et)
        return 14;
    }
    return 2;
  }
  function ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ef(n, r, l, u, c, p) {
    var C = 2;
    if (u = n, typeof n == "function")
      yp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case ce:
            return Vo(l.children, c, p, r);
          case He:
            C = 8, c |= 8;
            break;
          case Ie:
            return n = Ia(12, l, r, c | 2), n.elementType = Ie, n.lanes = p, n;
          case Te:
            return n = Ia(13, l, r, c), n.elementType = Te, n.lanes = p, n;
          case Ze:
            return n = Ia(19, l, r, c), n.elementType = Ze, n.lanes = p, n;
          case De:
            return Qs(l, c, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ke:
                  C = 10;
                  break e;
                case xe:
                  C = 9;
                  break e;
                case rt:
                  C = 11;
                  break e;
                case Et:
                  C = 14;
                  break e;
                case Qe:
                  C = 16, u = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = Ia(C, l, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function Vo(n, r, l, u) {
    return n = Ia(7, n, u, r), n.lanes = l, n;
  }
  function Qs(n, r, l, u) {
    return n = Ia(22, n, u, r), n.elementType = De, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Gs(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function Bo(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ag(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function xf(n, r, l, u, c, p, C, T, j) {
    return n = new ag(n, r, l, T, j), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = Ia(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Id(p), n;
  }
  function Uh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ue, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function gp(n) {
    if (!n)
      return bi;
    n = n._reactInternals;
    e: {
      if (yt(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Cn(r.type)) {
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
      if (Cn(l))
        return Ds(n, l, r);
    }
    return r;
  }
  function Ah(n, r, l, u, c, p, C, T, j) {
    return n = xf(l, u, !0, n, c, p, C, T, j), n.context = gp(null), l = n.current, u = Mr(), c = Yn(l), p = Zi(u, c), p.callback = r ?? null, Vl(l, p, c), n.current.lanes = c, Vi(n, c, u), Ur(n, u), n;
  }
  function qs(n, r, l, u) {
    var c = r.current, p = Mr(), C = Yn(c);
    return l = gp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zi(p, C), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Vl(c, r, C), n !== null && (jr(n, c, C, p), Hc(n, c, C)), C;
  }
  function wf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function zh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Sp(n, r) {
    zh(n, r), (n = n.alternate) && zh(n, r);
  }
  function Fh() {
    return null;
  }
  var Cp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function bf(n) {
    this._internalRoot = n;
  }
  rl.prototype.render = bf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    qs(n, r, null, null);
  }, rl.prototype.unmount = bf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Gl(function() {
        qs(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function rl(n) {
    this._internalRoot = n;
  }
  rl.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = su();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qt.length && r !== 0 && r < qt[l].priority; l++)
        ;
      qt.splice(l, 0, n), l === 0 && Sc(n);
    }
  };
  function Ep(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hh() {
  }
  function ig(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var G = wf(C);
          p.call(G);
        };
      }
      var C = Ah(r, u, n, 0, null, !1, !1, "", Hh);
      return n._reactRootContainer = C, n[Gi] = C.current, Su(n.nodeType === 8 ? n.parentNode : n), Gl(), C;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var T = u;
      u = function() {
        var G = wf(j);
        T.call(G);
      };
    }
    var j = xf(n, 0, !1, null, null, !1, !1, "", Hh);
    return n._reactRootContainer = j, n[Gi] = j.current, Su(n.nodeType === 8 ? n.parentNode : n), Gl(function() {
      qs(r, j, l, u);
    }), j;
  }
  function Tf(n, r, l, u, c) {
    var p = l._reactRootContainer;
    if (p) {
      var C = p;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var j = wf(C);
          T.call(j);
        };
      }
      qs(r, C, n, c);
    } else
      C = ig(l, r, n, c, u);
    return wf(C);
  }
  co = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ni(r.pendingLanes);
          l !== 0 && (Ei(r, l | 1), Ur(r, zt()), !(Dt & 6) && (zu = zt() + 500, ra()));
        }
        break;
      case 13:
        Gl(function() {
          var u = Xi(n, 1);
          if (u !== null) {
            var c = Mr();
            jr(u, n, 1, c);
          }
        }), Sp(n, 1);
    }
  }, uu = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var l = Mr();
        jr(r, n, 134217728, l);
      }
      Sp(n, 134217728);
    }
  }, Ft = function(n) {
    if (n.tag === 13) {
      var r = Yn(n), l = Xi(n, r);
      if (l !== null) {
        var u = Mr();
        jr(l, n, r, u);
      }
      Sp(n, r);
    }
  }, su = function() {
    return Bt;
  }, cu = function(n, r) {
    var l = Bt;
    try {
      return Bt = n, r();
    } finally {
      Bt = l;
    }
  }, Ar = function(n, r, l) {
    switch (r) {
      case "input":
        if (Sn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Ke(u);
              if (!c)
                throw Error(m(90));
              Rr(u), Sn(u, c);
            }
          }
        }
        break;
      case "textarea":
        cr(n, l);
        break;
      case "select":
        r = l.value, r != null && jn(n, !!l.multiple, r, !1);
    }
  }, so = Vu, tu = Gl;
  var lg = { usingClientEntryPoint: !1, Events: [ks, Cu, Ke, Oa, yl, Vu] }, Pu = { findFiberByHostInstance: ja, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, og = { bundleType: Pu.bundleType, version: Pu.version, rendererPackageName: Pu.rendererPackageName, rendererConfig: Pu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Pn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Pu.findFiberByHostInstance || Fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!kf.isDisabled && kf.supportsFiber)
      try {
        Cl = kf.inject(og), Kr = kf;
      } catch {
      }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ep(r))
      throw Error(m(200));
    return Uh(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!Ep(n))
      throw Error(m(299));
    var l = !1, u = "", c = Cp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = xf(n, 1, !1, null, null, l, !1, u, c), n[Gi] = r.current, Su(n.nodeType === 8 ? n.parentNode : n), new bf(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Pn(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Gl(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!Rf(r))
      throw Error(m(200));
    return Tf(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!Ep(n))
      throw Error(m(405));
    var u = l != null && l.hydratedSources || null, c = !1, p = "", C = Cp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (C = l.onRecoverableError)), r = Ah(r, null, n, 1, l ?? null, c, !1, p, C), n[Gi] = r.current, Su(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new rl(r);
  }, Xa.render = function(n, r, l) {
    if (!Rf(r))
      throw Error(m(200));
    return Tf(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!Rf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Gl(function() {
      Tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Vu, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Rf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Tf(n, r, l, !1, u);
  }, Xa.version = "18.2.0-next-9e3b772b8-20220608", Xa;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lx;
function W5() {
  return lx || (lx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = Oe, v = Rx(), m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function b(e) {
      E = e;
    }
    function k(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function S(e) {
      if (!E) {
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
    var D = 0, M = 1, L = 2, z = 3, q = 4, I = 5, ee = 6, se = 7, re = 8, pe = 9, ge = 10, ye = 11, Se = 12, ae = 13, ue = 14, ce = 15, He = 16, Ie = 17, ke = 18, xe = 19, rt = 21, Te = 22, Ze = 23, Et = 24, Qe = 25, De = !0, ve = !1, ze = !1, N = !1, ne = !1, we = !0, at = !1, Ge = !1, mt = !0, dt = !0, xt = !0, ut = /* @__PURE__ */ new Set(), At = {}, br = {};
    function Hn(e, t) {
      Rr(e, t), Rr(e + "Capture", t);
    }
    function Rr(e, t) {
      At[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), At[e] = t;
      {
        var a = e.toLowerCase();
        br[a] = e, e === "onDoubleClick" && (br.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vn = Object.prototype.hasOwnProperty;
    function Mn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Dn(e) {
      try {
        return Sn(e), !1;
      } catch {
        return !0;
      }
    }
    function Sn(e) {
      return "" + e;
    }
    function Tr(e, t) {
      if (Dn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Sn(e);
    }
    function kr(e) {
      if (Dn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Sn(e);
    }
    function sn(e, t) {
      if (Dn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Sn(e);
    }
    function jn(e, t) {
      if (Dn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Mn(e)), Sn(e);
    }
    function sr(e) {
      if (Dn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Mn(e)), Sn(e);
    }
    function Qn(e) {
      if (Dn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Mn(e)), Sn(e);
    }
    var cr = 0, Bn = 1, fr = 2, cn = 3, er = 4, hi = 5, ha = 6, Ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", qe = Ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", wt = new RegExp("^[" + Ce + "][" + qe + "]*$"), It = {}, Wt = {};
    function Un(e) {
      return Vn.call(Wt, e) ? !0 : Vn.call(It, e) ? !1 : wt.test(e) ? (Wt[e] = !0, !0) : (It[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === cr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Dr(e, t, a, i) {
      if (a !== null && a.type === cr)
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
    function Kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Dr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case cn:
            return !t;
          case er:
            return t === !1;
          case hi:
            return isNaN(t);
          case ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ar(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function Qt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === fr || t === cn || t === er, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Gt = {}, ei = [
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
    ei.forEach(function(e) {
      Gt[e] = new Qt(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new Qt(
        t,
        Bn,
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
      Gt[e] = new Qt(
        e,
        fr,
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
      Gt[e] = new Qt(
        e,
        fr,
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
      Gt[e] = new Qt(
        e,
        cn,
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
      Gt[e] = new Qt(
        e,
        cn,
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
      Gt[e] = new Qt(
        e,
        er,
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
      Gt[e] = new Qt(
        e,
        ha,
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
      Gt[e] = new Qt(
        e,
        hi,
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
    var Oa = /[\-\:]([a-z])/g, yl = function(e) {
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
      var t = e.replace(Oa, yl);
      Gt[t] = new Qt(
        t,
        Bn,
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
      var t = e.replace(Oa, yl);
      Gt[t] = new Qt(
        t,
        Bn,
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
      var t = e.replace(Oa, yl);
      Gt[t] = new Qt(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Bn,
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
    var so = "xlinkHref";
    Gt[so] = new Qt(
      "xlinkHref",
      Bn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new Qt(
        e,
        Bn,
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
    var tu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Hi = !1;
    function gl(e) {
      !Hi && tu.test(e) && (Hi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ma(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Tr(a, t), i.sanitizeURL && gl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === er) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : Kt(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (Kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === cn)
            return a;
          f = e.getAttribute(s);
        }
        return Kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function mi(e, t, a, i) {
      {
        if (!Un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Tr(a, t), o === "" + a ? a : o;
      }
    }
    function ya(e, t, a, i) {
      var o = Ar(t);
      if (!xn(t, o, i)) {
        if (Kt(t, a, o, i) && (a = null), i || o === null) {
          if (Un(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Tr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var h = o.propertyName;
          if (a === null) {
            var y = o.type;
            e[h] = y === cn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var x = o.attributeName, w = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var H = o.type, A;
          H === cn || H === er && a === !0 ? A = "" : (Tr(a, x), A = "" + a, o.sanitizeURL && gl(A.toString())), w ? e.setAttributeNS(w, x, A) : e.setAttribute(x, A);
        }
      }
    }
    var yi = Symbol.for("react.element"), zr = Symbol.for("react.portal"), ga = Symbol.for("react.fragment"), gi = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), Ee = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Pn = Symbol.for("react.scope"), fn = Symbol.for("react.debug_trace_mode"), dn = Symbol.for("react.offscreen"), dr = Symbol.for("react.legacy_hidden"), Si = Symbol.for("react.cache"), nu = Symbol.for("react.tracing_marker"), zt = Symbol.iterator, cd = "@@iterator";
    function ti(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = zt && e[zt] || e[cd];
      return typeof t == "function" ? t : null;
    }
    var Rt = Object.assign, Ci = 0, Sl, ru, Cl, Kr, cs, Fr, fs;
    function ds() {
    }
    ds.__reactDisabledLog = !0;
    function yc() {
      {
        if (Ci === 0) {
          Sl = console.log, ru = console.info, Cl = console.warn, Kr = console.error, cs = console.group, Fr = console.groupCollapsed, fs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ds,
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
        Ci++;
      }
    }
    function au() {
      {
        if (Ci--, Ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Rt({}, e, {
              value: Sl
            }),
            info: Rt({}, e, {
              value: ru
            }),
            warn: Rt({}, e, {
              value: Cl
            }),
            error: Rt({}, e, {
              value: Kr
            }),
            group: Rt({}, e, {
              value: cs
            }),
            groupCollapsed: Rt({}, e, {
              value: Fr
            }),
            groupEnd: Rt({}, e, {
              value: fs
            })
          });
        }
        Ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var El = m.ReactCurrentDispatcher, ni;
    function Hr(e, t, a) {
      {
        if (ni === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            ni = i && i[1] || "";
          }
        return `
` + ni + e;
      }
    }
    var xl = !1, wl;
    {
      var bl = typeof WeakMap == "function" ? WeakMap : Map;
      wl = new bl();
    }
    function iu(e, t) {
      if (!e || xl)
        return "";
      {
        var a = wl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      xl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = El.current, El.current = null, yc();
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
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Q) {
              i = Q;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var h = Q.stack.split(`
`), y = i.stack.split(`
`), x = h.length - 1, w = y.length - 1; x >= 1 && w >= 0 && h[x] !== y[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (h[x] !== y[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || h[x] !== y[w]) {
                    var H = `
` + h[x].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && wl.set(e, H), H;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        xl = !1, El.current = s, au(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", Y = A ? Hr(A) : "";
      return typeof e == "function" && wl.set(e, Y), Y;
    }
    function lu(e, t, a) {
      return iu(e, !0);
    }
    function Vi(e, t, a) {
      return iu(e, !1);
    }
    function fd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ei(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, fd(e));
      if (typeof e == "string")
        return Hr(e);
      switch (e) {
        case yt:
          return Hr("Suspense");
        case Lt:
          return Hr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case je:
            return Vi(e.render);
          case gt:
            return Ei(e.type, t, a);
          case Je: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Ei(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Bt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return Hr(e.type);
        case He:
          return Hr("Lazy");
        case ae:
          return Hr("Suspense");
        case xe:
          return Hr("SuspenseList");
        case D:
        case L:
        case ce:
          return Vi(e.type);
        case ye:
          return Vi(e.type.render);
        case M:
          return lu(e.type);
        default:
          return "";
      }
    }
    function ou(e) {
      try {
        var t = "", a = e;
        do
          t += Bt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function co(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function Ft(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ga:
          return "Fragment";
        case zr:
          return "Portal";
        case O:
          return "Profiler";
        case gi:
          return "StrictMode";
        case yt:
          return "Suspense";
        case Lt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ee:
            var t = e;
            return uu(t) + ".Consumer";
          case ie:
            var a = e;
            return uu(a._context) + ".Provider";
          case je:
            return co(e, e.render, "ForwardRef");
          case gt:
            var i = e.displayName || null;
            return i !== null ? i : Ft(e.type) || "Memo";
          case Je: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Ft(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function su(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function cu(e) {
      return e.displayName || "Context";
    }
    function pt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Et:
          return "Cache";
        case pe:
          var i = a;
          return cu(i) + ".Consumer";
        case ge:
          var o = a;
          return cu(o._context) + ".Provider";
        case ke:
          return "DehydratedFragment";
        case ye:
          return su(a, a.render, "ForwardRef");
        case se:
          return "Fragment";
        case I:
          return a;
        case q:
          return "Portal";
        case z:
          return "Root";
        case ee:
          return "Text";
        case He:
          return Ft(a);
        case re:
          return a === gi ? "StrictMode" : "Mode";
        case Te:
          return "Offscreen";
        case Se:
          return "Profiler";
        case rt:
          return "Scope";
        case ae:
          return "Suspense";
        case xe:
          return "SuspenseList";
        case Qe:
          return "TracingMarker";
        case M:
        case D:
        case Ie:
        case L:
        case ue:
        case ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fo = m.ReactDebugCurrentFrame, wn = null, Jr = !1;
    function Vr() {
      {
        if (wn === null)
          return null;
        var e = wn._debugOwner;
        if (e !== null && typeof e < "u")
          return pt(e);
      }
      return null;
    }
    function Rl() {
      return wn === null ? "" : ou(wn);
    }
    function _n() {
      fo.getCurrentStack = null, wn = null, Jr = !1;
    }
    function qt(e) {
      fo.getCurrentStack = e === null ? null : Rl, wn = e, Jr = !1;
    }
    function gc() {
      return wn;
    }
    function ea(e) {
      Jr = e;
    }
    function tr(e) {
      return "" + e;
    }
    function xi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Qn(e), e;
        default:
          return "";
      }
    }
    var Sc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Bi(e, t) {
      Sc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Tl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Cc(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function kl(e) {
      var t = "";
      return e && (Tl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Dl(e) {
      var t = Tl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Qn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(h) {
            Qn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            Qn(h), i = "" + h;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Na(e) {
      Cc(e) || (e._valueTracker = Dl(e));
    }
    function fu(e) {
      if (!e)
        return !1;
      var t = Cc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = kl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _l(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ol = !1, po = !1, du = !1, ps = !1;
    function ri(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, o = Rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function _(e, t) {
      Bi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !po && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), po = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ol && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component", t.type), Ol = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: xi(t.value != null ? t.value : i),
        controlled: ri(t)
      };
    }
    function W(e, t) {
      var a = e, i = t.checked;
      i != null && ya(a, "checked", i, !1);
    }
    function X(e, t) {
      var a = e;
      {
        var i = ri(t);
        !a._wrapperState.controlled && i && !ps && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ps = !0), a._wrapperState.controlled && !i && !du && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), du = !0);
      }
      W(e, t);
      var o = xi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = tr(o)) : a.value !== tr(o) && (a.value = tr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? tt(a, t.type, o) : t.hasOwnProperty("defaultValue") && tt(a, t.type, xi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function he(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function it(e, t) {
      var a = e;
      X(a, t), _e(a, t);
    }
    function _e(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Tr(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var h = nm(f);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fu(f), X(f, h);
          }
        }
      }
    }
    function tt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _l(e.ownerDocument) !== e) && (a == null ? e.defaultValue = tr(e._wrapperState.initialValue) : e.defaultValue !== tr(a) && (e.defaultValue = tr(a)));
    }
    var Tt = !1, Ht = !1, nn = !1;
    function Jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (nn || (nn = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Tt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tt = !0);
    }
    function rn(e, t) {
      t.value != null && e.setAttribute("value", tr(xi(t.value)));
    }
    var pn = Array.isArray;
    function Ot(e) {
      return pn(e);
    }
    var Pi;
    Pi = !1;
    function pu() {
      var e = Vr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var vs = ["value", "defaultValue"];
    function dd(e) {
      {
        Bi("select", e);
        for (var t = 0; t < vs.length; t++) {
          var a = vs[t];
          if (e[a] != null) {
            var i = Ot(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, pu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, pu());
          }
        }
      }
    }
    function ai(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, h = 0; h < s.length; h++)
          f["$" + s[h]] = !0;
        for (var y = 0; y < o.length; y++) {
          var x = f.hasOwnProperty("$" + o[y].value);
          o[y].selected !== x && (o[y].selected = x), x && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var w = tr(xi(a)), H = null, A = 0; A < o.length; A++) {
          if (o[A].value === w) {
            o[A].selected = !0, i && (o[A].defaultSelected = !0);
            return;
          }
          H === null && !o[A].disabled && (H = o[A]);
        }
        H !== null && (H.selected = !0);
      }
    }
    function hs(e, t) {
      return Rt({}, t, {
        value: void 0
      });
    }
    function ms(e, t) {
      var a = e;
      dd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Pi && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Pi = !0);
    }
    function pd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ai(a, !!t.multiple, i, !1) : t.defaultValue != null && ai(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? ai(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? ai(a, !!t.multiple, t.defaultValue, !0) : ai(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function _y(e, t) {
      var a = e, i = t.value;
      i != null && ai(a, !!t.multiple, i, !1);
    }
    var vd = !1;
    function hd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Lv(e, t) {
      var a = e;
      Bi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vd && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Vr() || "A component"), vd = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ot(o)) {
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
        initialValue: xi(i)
      };
    }
    function Nv(e, t) {
      var a = e, i = xi(t.value), o = xi(t.defaultValue);
      if (i != null) {
        var s = tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = tr(o));
    }
    function Mv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function md(e, t) {
      Nv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Oy = "http://www.w3.org/1998/Math/MathML", yd = "http://www.w3.org/2000/svg";
    function Ec(e) {
      switch (e) {
        case "svg":
          return yd;
        case "math":
          return Oy;
        default:
          return $i;
      }
    }
    function gd(e, t) {
      return e == null || e === $i ? Ec(t) : e === yd && t === "foreignObject" ? $i : e;
    }
    var Ly = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, xc, jv = Ly(function(e, t) {
      if (e.namespaceURI === yd && !("innerHTML" in e)) {
        xc = xc || document.createElement("div"), xc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = xc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ta = 1, Ii = 3, $n = 8, ii = 9, vo = 11, wc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ii) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Uv = {
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
    }, vu = {
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
    function Av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var zv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(vu).forEach(function(e) {
      zv.forEach(function(t) {
        vu[Av(t, e)] = vu[e];
      });
    });
    function bc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(vu.hasOwnProperty(e) && vu[e]) ? t + "px" : (jn(t, e), ("" + t).trim());
    }
    var hu = /([A-Z])/g, Ny = /^ms-/;
    function My(e) {
      return e.replace(hu, "-$1").toLowerCase().replace(Ny, "-ms-");
    }
    var Fv = function() {
    };
    {
      var Hv = /^(?:webkit|moz|o)[A-Z]/, Vv = /^-ms-/, ys = /-(.)/g, mu = /;\s*$/, yu = {}, gu = {}, Bv = !1, Sd = !1, Cd = function(e) {
        return e.replace(ys, function(t, a) {
          return a.toUpperCase();
        });
      }, Ed = function(e) {
        yu.hasOwnProperty(e) && yu[e] || (yu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cd(e.replace(Vv, "ms-"))
        ));
      }, Pv = function(e) {
        yu.hasOwnProperty(e) && yu[e] || (yu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, $v = function(e, t) {
        gu.hasOwnProperty(t) && gu[t] || (gu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(mu, "")));
      }, Iv = function(e, t) {
        Bv || (Bv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, jy = function(e, t) {
        Sd || (Sd = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Fv = function(e, t) {
        e.indexOf("-") > -1 ? Ed(e) : Hv.test(e) ? Pv(e) : mu.test(t) && $v(e, t), typeof t == "number" && (isNaN(t) ? Iv(e, t) : isFinite(t) || jy(e, t));
      };
    }
    var Uy = Fv;
    function Ay(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : My(i)) + ":", t += bc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Uy(i, t[i]);
          var s = bc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function zy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ma(e) {
      var t = {};
      for (var a in e)
        for (var i = Uv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function gs(e, t) {
      {
        if (!t)
          return;
        var a = Ma(e), i = Ma(t), o = {};
        for (var s in a) {
          var f = a[s], h = i[s];
          if (h && f !== h) {
            var y = f + "," + h;
            if (o[y])
              continue;
            o[y] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", zy(e[f]) ? "Removing" : "Updating", f, h);
          }
        }
      }
    }
    var Wv = {
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
    }, Qv = Rt({
      menuitem: !0
    }, Wv), Gv = "__html";
    function Rc(e, t) {
      if (t) {
        if (Qv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Yi(e, t) {
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
    var Tc = {
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
    }, qv = {
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
    }, li = {}, xd = new RegExp("^(aria)-[" + qe + "]*$"), Ss = new RegExp("^(aria)[A-Z][" + qe + "]*$");
    function wd(e, t) {
      {
        if (Vn.call(li, t) && li[t])
          return !0;
        if (Ss.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = qv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), li[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), li[t] = !0, !0;
        }
        if (xd.test(t)) {
          var o = t.toLowerCase(), s = qv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return li[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), li[t] = !0, !0;
        }
      }
      return !0;
    }
    function Xv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = wd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function kc(e, t) {
      Yi(e, t) || Xv(e, t);
    }
    var ho = !1;
    function bd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ho && (ho = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Rd = function() {
    };
    {
      var nr = {}, Td = /^on./, Zv = /^on[^A-Z]/, Kv = new RegExp("^(aria)-[" + qe + "]*$"), Jv = new RegExp("^(aria)[A-Z][" + qe + "]*$");
      Rd = function(e, t, a, i) {
        if (Vn.call(nr, t) && nr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), nr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = f.hasOwnProperty(o) ? f[o] : null;
          if (h != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, h), nr[t] = !0, !0;
          if (Td.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), nr[t] = !0, !0;
        } else if (Td.test(t))
          return Zv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), nr[t] = !0, !0;
        if (Kv.test(t) || Jv.test(t))
          return !0;
        if (o === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), nr[t] = !0, !0;
        if (o === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), nr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), nr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), nr[t] = !0, !0;
        var y = Ar(t), x = y !== null && y.type === cr;
        if (Tc.hasOwnProperty(o)) {
          var w = Tc[o];
          if (w !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, w), nr[t] = !0, !0;
        } else if (!x && t !== o)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), nr[t] = !0, !0;
        return typeof a == "boolean" && Dr(t, a, y, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), nr[t] = !0, !0) : x ? !0 : Dr(t, a, y, !1) ? (nr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === cn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), nr[t] = !0), !0);
      };
    }
    var eh = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Rd(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function th(e, t, a) {
      Yi(e, t) || eh(e, t, a);
    }
    var Wi = 1, Cs = 2, mo = 4, Fy = Wi | Cs | mo, Es = null;
    function xs(e) {
      Es !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Es = e;
    }
    function Hy() {
      Es === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Es = null;
    }
    function nh(e) {
      return e === Es;
    }
    function Dc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ii ? t.parentNode : t;
    }
    var an = null, Ll = null, Qi = null;
    function Su(e) {
      var t = Yu(e);
      if (t) {
        if (typeof an != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = nm(a);
          an(t.stateNode, t.type, i);
        }
      }
    }
    function rh(e) {
      an = e;
    }
    function _c(e) {
      Ll ? Qi ? Qi.push(e) : Qi = [e] : Ll = e;
    }
    function ws() {
      return Ll !== null || Qi !== null;
    }
    function bs() {
      if (Ll) {
        var e = Ll, t = Qi;
        if (Ll = null, Qi = null, Su(e), t)
          for (var a = 0; a < t.length; a++)
            Su(t[a]);
      }
    }
    var yo = function(e, t) {
      return e(t);
    }, kd = function() {
    }, Dd = !1;
    function Vy() {
      var e = ws();
      e && (kd(), bs());
    }
    function _d(e, t, a) {
      if (Dd)
        return e(t, a);
      Dd = !0;
      try {
        return yo(e, t, a);
      } finally {
        Dd = !1, Vy();
      }
    }
    function Oc(e, t, a) {
      yo = e, kd = a;
    }
    function Lc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Od(e, t, a) {
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
          return !!(a.disabled && Lc(t));
        default:
          return !1;
      }
    }
    function go(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = nm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Od(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Rs = !1;
    if (un)
      try {
        var So = {};
        Object.defineProperty(So, "passive", {
          get: function() {
            Rs = !0;
          }
        }), window.addEventListener("test", So, So), window.removeEventListener("test", So, So);
      } catch {
        Rs = !1;
      }
    function ah(e, t, a, i, o, s, f, h, y) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (w) {
        this.onError(w);
      }
    }
    var Ld = ah;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Nd = document.createElement("react");
      Ld = function(t, a, i, o, s, f, h, y, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var w = document.createEvent("Event"), H = !1, A = !0, Y = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Nd.removeEventListener(K, et, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Y);
        }
        var Ue = Array.prototype.slice.call(arguments, 3);
        function et() {
          H = !0, Z(), a.apply(i, Ue), A = !1;
        }
        var We, jt = !1, _t = !1;
        function B(P) {
          if (We = P.error, jt = !0, We === null && P.colno === 0 && P.lineno === 0 && (_t = !0), P.defaultPrevented && We != null && typeof We == "object")
            try {
              We._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", B), Nd.addEventListener(K, et, !1), w.initEvent(K, !1, !1), Nd.dispatchEvent(w), Q && Object.defineProperty(window, "event", Q), H && A && (jt ? _t && (We = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : We = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(We)), window.removeEventListener("error", B), !H)
          return Z(), ah.apply(this, arguments);
      };
    }
    var By = Ld, Nl = !1, oi = null, Ts = !1, Ml = null, wi = {
      onError: function(e) {
        Nl = !0, oi = e;
      }
    };
    function Co(e, t, a, i, o, s, f, h, y) {
      Nl = !1, oi = null, By.apply(wi, arguments);
    }
    function Gi(e, t, a, i, o, s, f, h, y) {
      if (Co.apply(this, arguments), Nl) {
        var x = jd();
        Ts || (Ts = !0, Ml = x);
      }
    }
    function Md() {
      if (Ts) {
        var e = Ml;
        throw Ts = !1, Ml = null, e;
      }
    }
    function Py() {
      return Nl;
    }
    function jd() {
      if (Nl) {
        var e = oi;
        return Nl = !1, oi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ja(e) {
      return e._reactInternals;
    }
    function ks(e) {
      return e._reactInternals !== void 0;
    }
    function Cu(e, t) {
      e._reactInternals = t;
    }
    var Ke = (
      /*                      */
      0
    ), jl = (
      /*                */
      1
    ), vn = (
      /*                    */
      2
    ), St = (
      /*                       */
      4
    ), Yt = (
      /*                */
      16
    ), Xt = (
      /*                 */
      32
    ), bi = (
      /*                     */
      64
    ), ct = (
      /*                   */
      128
    ), On = (
      /*            */
      256
    ), na = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), Cn = (
      /*                      */
      2048
    ), Aa = (
      /*                    */
      4096
    ), Ul = (
      /*                   */
      8192
    ), Ds = (
      /*             */
      16384
    ), Nc = Cn | St | bi | na | Ua | Ds, ih = (
      /*               */
      32767
    ), Sa = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), _s = (
      /* */
      131072
    ), Ud = (
      /*                       */
      1048576
    ), Ad = (
      /*                    */
      2097152
    ), ra = (
      /*                 */
      4194304
    ), Al = (
      /*                */
      8388608
    ), aa = (
      /*               */
      16777216
    ), Eo = (
      /*              */
      33554432
    ), Eu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      St | Ua | 0
    ), ia = vn | St | Yt | Xt | na | Aa | Ul, _r = St | bi | na | Ul, za = Cn | Yt, pr = ra | Al | Ad, qi = m.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (vn | Aa)) !== Ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === z ? a : null;
    }
    function zd(e) {
      if (e.tag === ae) {
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
    function Mc(e) {
      return e.tag === z ? e.stateNode.containerInfo : null;
    }
    function Fd(e) {
      return Ca(e) === e;
    }
    function Ea(e) {
      {
        var t = qi.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", pt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = ja(e);
      return o ? Ca(o) === o : !1;
    }
    function la(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function hn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
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
              return la(s), e;
            if (y === o)
              return la(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var x = !1, w = s.child; w; ) {
            if (w === i) {
              x = !0, i = s, o = f;
              break;
            }
            if (w === o) {
              x = !0, o = s, i = f;
              break;
            }
            w = w.sibling;
          }
          if (!x) {
            for (w = f.child; w; ) {
              if (w === i) {
                x = !0, i = f, o = s;
                break;
              }
              if (w === o) {
                x = !0, o = f, i = s;
                break;
              }
              w = w.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Fa(e) {
      var t = hn(e);
      return t !== null ? Hd(t) : null;
    }
    function Hd(e) {
      if (e.tag === I || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function lh(e) {
      var t = hn(e);
      return t !== null ? jc(t) : null;
    }
    function jc(e) {
      if (e.tag === I || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = jc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Uc = v.unstable_scheduleCallback, oh = v.unstable_cancelCallback, Ac = v.unstable_shouldYield, uh = v.unstable_requestPaint, bn = v.unstable_now, Vd = v.unstable_getCurrentPriorityLevel, zc = v.unstable_ImmediatePriority, xa = v.unstable_UserBlockingPriority, Ri = v.unstable_NormalPriority, Fc = v.unstable_LowPriority, zl = v.unstable_IdlePriority, Bd = v.unstable_yieldValue, Pd = v.unstable_setDisableYieldValue, Fl = null, ar = null, be = null, An = !1, vr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function $d(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        mt && (e = Rt({}, e, {
          getLaneLabelMap: Vl,
          injectProfilingHooks: Zi
        })), Fl = t.inject(e), ar = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function sh(e, t) {
      if (ar && typeof ar.onScheduleFiberRoot == "function")
        try {
          ar.onScheduleFiberRoot(Fl, e, t);
        } catch (a) {
          An || (An = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Xi(e, t) {
      if (ar && typeof ar.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ct) === ct;
          if (dt) {
            var i;
            switch (t) {
              case Or:
                i = zc;
                break;
              case hr:
                i = xa;
                break;
              case Ji:
                i = Ri;
                break;
              case Fs:
                i = zl;
                break;
              default:
                i = Ri;
                break;
            }
            ar.onCommitFiberRoot(Fl, e, i, a);
          }
        } catch (o) {
          An || (An = !0, S("React instrumentation encountered an error: %s", o));
        }
    }
    function Hl(e) {
      if (ar && typeof ar.onPostCommitFiberRoot == "function")
        try {
          ar.onPostCommitFiberRoot(Fl, e);
        } catch (t) {
          An || (An = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Id(e) {
      if (ar && typeof ar.onCommitFiberUnmount == "function")
        try {
          ar.onCommitFiberUnmount(Fl, e);
        } catch (t) {
          An || (An = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Gn(e) {
      if (typeof Bd == "function" && (Pd(e), b(e)), ar && typeof ar.setStrictMode == "function")
        try {
          ar.setStrictMode(Fl, e);
        } catch (t) {
          An || (An = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Zi(e) {
      be = e;
    }
    function Vl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < mn; a++) {
          var i = $y(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Hc(e) {
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(e);
    }
    function Yd() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function Bl(e) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(e);
    }
    function xo() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function ch(e) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(e);
    }
    function Wd() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function Vc(e) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(e);
    }
    function fh() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function dh(e) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(e);
    }
    function ph() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function Bc(e) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(e);
    }
    function xu() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function Pc(e, t, a) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(e, t, a);
    }
    function vh(e, t, a) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(e, t, a);
    }
    function hh(e) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(e);
    }
    function wu() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function mh(e) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(e);
    }
    function Os() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function ui(e) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(e);
    }
    function Ls() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function bu() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function wo(e) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(e);
    }
    function Qd(e, t) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(e, t);
    }
    function Pl(e, t) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(e, t);
    }
    var nt = (
      /*                         */
      0
    ), kt = (
      /*                 */
      1
    ), lt = (
      /*                    */
      2
    ), Rn = (
      /*               */
      8
    ), Ha = (
      /*              */
      16
    ), $c = Math.clz32 ? Math.clz32 : bo, Ic = Math.log, Gd = Math.LN2;
    function bo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ic(t) / Gd | 0) | 0;
    }
    var mn = 31, J = (
      /*                        */
      0
    ), Nt = (
      /*                          */
      0
    ), ot = (
      /*                        */
      1
    ), Ti = (
      /*    */
      2
    ), wa = (
      /*             */
      4
    ), Ro = (
      /*            */
      8
    ), yn = (
      /*                     */
      16
    ), To = (
      /*                */
      32
    ), $l = (
      /*                       */
      4194240
    ), ko = (
      /*                        */
      64
    ), Va = (
      /*                        */
      128
    ), oa = (
      /*                        */
      256
    ), Do = (
      /*                        */
      512
    ), Ns = (
      /*                        */
      1024
    ), Ms = (
      /*                        */
      2048
    ), Yc = (
      /*                        */
      4096
    ), Wc = (
      /*                        */
      8192
    ), Qc = (
      /*                        */
      16384
    ), Gc = (
      /*                       */
      32768
    ), qc = (
      /*                       */
      65536
    ), Xc = (
      /*                       */
      131072
    ), Zc = (
      /*                       */
      262144
    ), Kc = (
      /*                       */
      524288
    ), _o = (
      /*                       */
      1048576
    ), Jc = (
      /*                       */
      2097152
    ), Oo = (
      /*                            */
      130023424
    ), Ki = (
      /*                             */
      4194304
    ), ef = (
      /*                             */
      8388608
    ), js = (
      /*                             */
      16777216
    ), tf = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), qd = Ki, Ru = (
      /*          */
      134217728
    ), rf = (
      /*                          */
      268435455
    ), Tu = (
      /*               */
      268435456
    ), Il = (
      /*                        */
      536870912
    ), ua = (
      /*                   */
      1073741824
    );
    function $y(e) {
      {
        if (e & ot)
          return "Sync";
        if (e & Ti)
          return "InputContinuousHydration";
        if (e & wa)
          return "InputContinuous";
        if (e & Ro)
          return "DefaultHydration";
        if (e & yn)
          return "Default";
        if (e & To)
          return "TransitionHydration";
        if (e & $l)
          return "Transition";
        if (e & Oo)
          return "Retry";
        if (e & Ru)
          return "SelectiveHydration";
        if (e & Tu)
          return "IdleHydration";
        if (e & Il)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var ln = -1, af = ko, lf = Ki;
    function ku(e) {
      switch (In(e)) {
        case ot:
          return ot;
        case Ti:
          return Ti;
        case wa:
          return wa;
        case Ro:
          return Ro;
        case yn:
          return yn;
        case To:
          return To;
        case ko:
        case Va:
        case oa:
        case Do:
        case Ns:
        case Ms:
        case Yc:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Zc:
        case Kc:
        case _o:
        case Jc:
          return e & $l;
        case Ki:
        case ef:
        case js:
        case tf:
        case nf:
          return e & Oo;
        case Ru:
          return Ru;
        case Tu:
          return Tu;
        case Il:
          return Il;
        case ua:
          return ua;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Us(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, o = e.suspendedLanes, s = e.pingedLanes, f = a & rf;
      if (f !== J) {
        var h = f & ~o;
        if (h !== J)
          i = ku(h);
        else {
          var y = f & s;
          y !== J && (i = ku(y));
        }
      } else {
        var x = a & ~o;
        x !== J ? i = ku(x) : s !== J && (i = ku(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === J) {
        var w = In(i), H = In(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          w >= H || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          w === yn && (H & $l) !== J
        )
          return t;
      }
      (i & wa) !== J && (i |= a & yn);
      var A = e.entangledLanes;
      if (A !== J)
        for (var Y = e.entanglements, Q = i & A; Q > 0; ) {
          var Z = Yl(Q), Ue = 1 << Z;
          i |= Y[Z], Q &= ~Ue;
        }
      return i;
    }
    function yh(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var o = Yl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function of(e, t) {
      switch (e) {
        case ot:
        case Ti:
        case wa:
          return t + 250;
        case Ro:
        case yn:
        case To:
        case ko:
        case Va:
        case oa:
        case Do:
        case Ns:
        case Ms:
        case Yc:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Zc:
        case Kc:
        case _o:
        case Jc:
          return t + 5e3;
        case Ki:
        case ef:
        case js:
        case tf:
        case nf:
          return ln;
        case Ru:
        case Tu:
        case Il:
        case ua:
          return ln;
        default:
          return S("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function Iy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Yl(f), y = 1 << h, x = s[h];
        x === ln ? ((y & i) === J || (y & o) !== J) && (s[h] = of(y, t)) : x <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function Yy(e) {
      return ku(e.pendingLanes);
    }
    function Xd(e) {
      var t = e.pendingLanes & ~ua;
      return t !== J ? t : t & ua ? ua : J;
    }
    function Du(e) {
      return (e & ot) !== J;
    }
    function As(e) {
      return (e & rf) !== J;
    }
    function uf(e) {
      return (e & Oo) === e;
    }
    function Wy(e) {
      var t = ot | wa | yn;
      return (e & t) === J;
    }
    function gh(e) {
      return (e & $l) === e;
    }
    function zs(e, t) {
      var a = Ti | wa | Ro | yn;
      return (t & a) !== J;
    }
    function Sh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Zd(e) {
      return (e & $l) !== J;
    }
    function Kd() {
      var e = af;
      return af <<= 1, (af & $l) === J && (af = ko), e;
    }
    function Qy() {
      var e = lf;
      return lf <<= 1, (lf & Oo) === J && (lf = Ki), e;
    }
    function In(e) {
      return e & -e;
    }
    function qn(e) {
      return In(e);
    }
    function Yl(e) {
      return 31 - $c(e);
    }
    function sf(e) {
      return Yl(e);
    }
    function sa(e, t) {
      return (e & t) !== J;
    }
    function Lo(e, t) {
      return (e & t) === t;
    }
    function Ct(e, t) {
      return e | t;
    }
    function _u(e, t) {
      return e & ~t;
    }
    function Jd(e, t) {
      return e & t;
    }
    function Ch(e) {
      return e;
    }
    function Eh(e, t) {
      return e !== Nt && e < t ? e : t;
    }
    function cf(e) {
      for (var t = [], a = 0; a < mn; a++)
        t.push(e);
      return t;
    }
    function No(e, t, a) {
      e.pendingLanes |= t, t !== Il && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, o = sf(t);
      i[o] = a;
    }
    function ep(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Yl(i), s = 1 << o;
        a[o] = ln, i &= ~s;
      }
    }
    function tp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function np(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = Yl(f), y = 1 << h;
        i[h] = J, o[h] = ln, s[h] = ln, f &= ~y;
      }
    }
    function Ou(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Yl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Gy(e, t) {
      var a = In(t), i;
      switch (a) {
        case wa:
          i = Ti;
          break;
        case yn:
          i = Ro;
          break;
        case ko:
        case Va:
        case oa:
        case Do:
        case Ns:
        case Ms:
        case Yc:
        case Wc:
        case Qc:
        case Gc:
        case qc:
        case Xc:
        case Zc:
        case Kc:
        case _o:
        case Jc:
        case Ki:
        case ef:
        case js:
        case tf:
        case nf:
          i = To;
          break;
        case Il:
          i = Tu;
          break;
        default:
          i = Nt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Nt ? Nt : i;
    }
    function rp(e, t, a) {
      if (vr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = sf(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function ff(e, t) {
      if (vr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = sf(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), f.clear()), t &= ~s;
        }
    }
    function ap(e, t) {
      return null;
    }
    var Or = ot, hr = wa, Ji = yn, Fs = Il, Mo = Nt;
    function Ba() {
      return Mo;
    }
    function Xn(e) {
      Mo = e;
    }
    function Hs(e, t) {
      var a = Mo;
      try {
        return Mo = e, t();
      } finally {
        Mo = a;
      }
    }
    function Lr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ip(e, t) {
      return e !== 0 && e < t;
    }
    function Vs(e) {
      var t = In(e);
      return ip(Or, t) ? ip(hr, t) ? As(t) ? Ji : Fs : hr : Or;
    }
    function Zn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var xh;
    function Fe(e) {
      xh = e;
    }
    function Lu(e) {
      xh(e);
    }
    var Bs;
    function wh(e) {
      Bs = e;
    }
    var bh;
    function Ps(e) {
      bh = e;
    }
    var $s;
    function lp(e) {
      $s = e;
    }
    var op;
    function Rh(e) {
      op = e;
    }
    var df = !1, Nu = [], ki = null, En = null, ir = null, Pa = /* @__PURE__ */ new Map(), Mu = /* @__PURE__ */ new Map(), el = [], si = [
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
    function Th(e) {
      return si.indexOf(e) > -1;
    }
    function Di(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function kh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ki = null;
          break;
        case "dragenter":
        case "dragleave":
          En = null;
          break;
        case "mouseover":
        case "mouseout":
          ir = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Pa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Mu.delete(i);
          break;
        }
      }
    }
    function ju(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Di(t, a, i, o, s);
        if (t !== null) {
          var h = Yu(t);
          h !== null && Bs(h);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function Dh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return ki = ju(ki, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return En = ju(En, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var h = o;
          return ir = ju(ir, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var y = o, x = y.pointerId;
          return Pa.set(x, ju(Pa.get(x) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var w = o, H = w.pointerId;
          return Mu.set(H, ju(Mu.get(H) || null, e, t, a, i, w)), !0;
        }
      }
      return !1;
    }
    function up(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ae) {
            var o = zd(a);
            if (o !== null) {
              e.blockedOn = o, op(e.priority, function() {
                bh(a);
              });
              return;
            }
          } else if (i === z) {
            var s = a.stateNode;
            if (Zn(s)) {
              e.blockedOn = Mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function _h(e) {
      for (var t = $s(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < el.length && ip(t, el[i].priority); i++)
        ;
      el.splice(i, 0, a), i === 0 && up(a);
    }
    function pf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = jo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          xs(s), o.target.dispatchEvent(s), Hy();
        } else {
          var f = Yu(i);
          return f !== null && Bs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Is(e, t, a) {
      pf(e) && a.delete(t);
    }
    function sp() {
      df = !1, ki !== null && pf(ki) && (ki = null), En !== null && pf(En) && (En = null), ir !== null && pf(ir) && (ir = null), Pa.forEach(Is), Mu.forEach(Is);
    }
    function Nr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, df || (df = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, sp)));
    }
    function Dt(e) {
      if (Nu.length > 0) {
        Nr(Nu[0], e);
        for (var t = 1; t < Nu.length; t++) {
          var a = Nu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ki !== null && Nr(ki, e), En !== null && Nr(En, e), ir !== null && Nr(ir, e);
      var i = function(h) {
        return Nr(h, e);
      };
      Pa.forEach(i), Mu.forEach(i);
      for (var o = 0; o < el.length; o++) {
        var s = el[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; el.length > 0; ) {
        var f = el[0];
        if (f.blockedOn !== null)
          break;
        up(f), f.blockedOn === null && el.shift();
      }
    }
    var Tn = m.ReactCurrentBatchConfig, Ln = !0;
    function lr(e) {
      Ln = !!e;
    }
    function ba() {
      return Ln;
    }
    function Uu(e, t, a) {
      var i = Br(t), o;
      switch (i) {
        case Or:
          o = Kn;
          break;
        case hr:
          o = Ys;
          break;
        case Ji:
        default:
          o = tl;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Kn(e, t, a, i) {
      var o = Ba(), s = Tn.transition;
      Tn.transition = null;
      try {
        Xn(Or), tl(e, t, a, i);
      } finally {
        Xn(o), Tn.transition = s;
      }
    }
    function Ys(e, t, a, i) {
      var o = Ba(), s = Tn.transition;
      Tn.transition = null;
      try {
        Xn(hr), tl(e, t, a, i);
      } finally {
        Xn(o), Tn.transition = s;
      }
    }
    function tl(e, t, a, i) {
      Ln && vf(e, t, a, i);
    }
    function vf(e, t, a, i) {
      var o = jo(e, t, a, i);
      if (o === null) {
        hg(e, t, i, Au, a), kh(e, i);
        return;
      }
      if (Dh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (kh(e, i), t & mo && Th(e)) {
        for (; o !== null; ) {
          var s = Yu(o);
          s !== null && Lu(s);
          var f = jo(e, t, a, i);
          if (f === null && hg(e, t, i, Au, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      hg(e, t, i, null, a);
    }
    var Au = null;
    function jo(e, t, a, i) {
      Au = null;
      var o = Dc(i), s = Ks(o);
      if (s !== null) {
        var f = Ca(s);
        if (f === null)
          s = null;
        else {
          var h = f.tag;
          if (h === ae) {
            var y = zd(f);
            if (y !== null)
              return y;
            s = null;
          } else if (h === z) {
            var x = f.stateNode;
            if (Zn(x))
              return Mc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Au = s, null;
    }
    function Br(e) {
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
          return Or;
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
          return hr;
        case "message": {
          var t = Vd();
          switch (t) {
            case zc:
              return Or;
            case xa:
              return hr;
            case Ri:
            case Fc:
              return Ji;
            case zl:
              return Fs;
            default:
              return Ji;
          }
        }
        default:
          return Ji;
      }
    }
    function cp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function zu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function nl(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function hf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Uo = null, _i = null, Wl = null;
    function Ql(e) {
      return Uo = e, _i = yf(), !0;
    }
    function mf() {
      Uo = null, _i = null, Wl = null;
    }
    function Fu() {
      if (Wl)
        return Wl;
      var e, t = _i, a = t.length, i, o = yf(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Wl = o.slice(e, h), Wl;
    }
    function yf() {
      return "value" in Uo ? Uo.value : Uo.textContent;
    }
    function Ao(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function zo() {
      return !0;
    }
    function Mr() {
      return !1;
    }
    function Yn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var x = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return x ? this.isDefaultPrevented = zo : this.isDefaultPrevented = Mr, this.isPropagationStopped = Mr, this;
      }
      return Rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zo);
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
        isPersistent: zo
      }), t;
    }
    var jr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ur = Yn(jr), Hu = Rt({}, jr, {
      view: 0,
      detail: 0
    }), fp = Yn(Hu), Ws, dp, $a;
    function Oh(e) {
      e !== $a && ($a && e.type === "mousemove" ? (Ws = e.screenX - $a.screenX, dp = e.screenY - $a.screenY) : (Ws = 0, dp = 0), $a = e);
    }
    var Vu = Rt({}, Hu, {
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
      getModifierState: Cf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Oh(e), Ws);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dp;
      }
    }), Gl = Yn(Vu), pp = Rt({}, Vu, {
      dataTransfer: 0
    }), Fo = Yn(pp), Lh = Rt({}, Hu, {
      relatedTarget: 0
    }), gf = Yn(Lh), vp = Rt({}, jr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sf = Yn(vp), Xy = Rt({}, jr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zy = Yn(Xy), Nh = Rt({}, jr, {
      data: 0
    }), hp = Yn(Nh), Ho = hp, Ky = {
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
    }, Bu = {
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
    function Mh(e) {
      if (e.key) {
        var t = Ky[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ao(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Bu[e.keyCode] || "Unidentified" : "";
    }
    var Nn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Jy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Nn[e];
      return i ? !!a[i] : !1;
    }
    function Cf(e) {
      return Jy;
    }
    var eg = Rt({}, Hu, {
      key: Mh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ao(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), tg = Yn(eg), jh = Rt({}, Vu, {
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
    }), mp = Yn(jh), ng = Rt({}, Hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cf
    }), Ia = Yn(ng), yp = Rt({}, jr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), rg = Yn(yp), ql = Rt({}, Vu, {
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
    }), Ef = Yn(ql), Vo = [9, 13, 27, 32], Qs = 229, Gs = un && "CompositionEvent" in window, Bo = null;
    un && "documentMode" in document && (Bo = document.documentMode);
    var ag = un && "TextEvent" in window && !Bo, xf = un && (!Gs || Bo && Bo > 8 && Bo <= 11), Uh = 32, gp = String.fromCharCode(Uh);
    function Ah() {
      Hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Hn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qs = !1;
    function wf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function zh(e) {
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
      return e === "keydown" && t.keyCode === Qs;
    }
    function Fh(e, t) {
      switch (e) {
        case "keyup":
          return Vo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function bf(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function Ep(e, t, a, i, o) {
      var s, f;
      if (Gs ? s = zh(t) : rl ? Fh(t, i) && (s = "onCompositionEnd") : Sp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      xf && !bf(i) && (!rl && s === "onCompositionStart" ? rl = Ql(o) : s === "onCompositionEnd" && rl && (f = Fu()));
      var h = $h(a, s);
      if (h.length > 0) {
        var y = new hp(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: h
        }), f)
          y.data = f;
        else {
          var x = Cp(i);
          x !== null && (y.data = x);
        }
      }
    }
    function Rf(e, t) {
      switch (e) {
        case "compositionend":
          return Cp(t);
        case "keypress":
          var a = t.which;
          return a !== Uh ? null : (qs = !0, gp);
        case "textInput":
          var i = t.data;
          return i === gp && qs ? null : i;
        default:
          return null;
      }
    }
    function Hh(e, t) {
      if (rl) {
        if (e === "compositionend" || !Gs && Fh(e, t)) {
          var a = Fu();
          return mf(), rl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!wf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xf && !bf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ig(e, t, a, i, o) {
      var s;
      if (ag ? s = Rf(t, i) : s = Hh(t, i), !s)
        return null;
      var f = $h(a, "onBeforeInput");
      if (f.length > 0) {
        var h = new Ho("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: h,
          listeners: f
        }), h.data = s;
      }
    }
    function Tf(e, t, a, i, o, s, f) {
      Ep(e, t, a, i, o), ig(e, t, a, i, o);
    }
    var lg = {
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
    function Pu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!lg[e.type] : t === "textarea";
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
    function og(e) {
      if (!un)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function kf() {
      Hn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      _c(i);
      var o = $h(t, "onChange");
      if (o.length > 0) {
        var s = new Ur("onChange", "change", null, a, i);
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
      n(t, l, e, Dc(e)), _d(p, t);
    }
    function p(e) {
      DS(e, 0);
    }
    function C(e) {
      var t = Mf(e);
      if (fu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var j = !1;
    un && (j = og("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", fe);
    }
    function oe() {
      r && (r.detachEvent("onpropertychange", fe), r = null, l = null);
    }
    function fe(e) {
      e.propertyName === "value" && C(l) && c(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (oe(), G(t, a)) : e === "focusout" && oe();
    }
    function Ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(l);
    }
    function Ve(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function $e(e, t) {
      if (e === "click")
        return C(t);
    }
    function zn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function V(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || tt(e, "number", e.value);
    }
    function F(e, t, a, i, o, s, f) {
      var h = a ? Mf(a) : window, y, x;
      if (u(h) ? y = T : Pu(h) ? j ? y = zn : (y = Ne, x = le) : Ve(h) && (y = $e), y) {
        var w = y(t, a);
        if (w) {
          n(e, w, i, o);
          return;
        }
      }
      x && x(t, h, a), t === "focusout" && V(h);
    }
    function $() {
      Rr("onMouseEnter", ["mouseout", "mouseover"]), Rr("onMouseLeave", ["mouseout", "mouseover"]), Rr("onPointerEnter", ["pointerout", "pointerover"]), Rr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function me(e, t, a, i, o, s, f) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !nh(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Ks(x) || Up(x)))
          return;
      }
      if (!(!y && !h)) {
        var w;
        if (o.window === o)
          w = o;
        else {
          var H = o.ownerDocument;
          H ? w = H.defaultView || H.parentWindow : w = window;
        }
        var A, Y;
        if (y) {
          var Q = i.relatedTarget || i.toElement;
          if (A = a, Y = Q ? Ks(Q) : null, Y !== null) {
            var Z = Ca(Y);
            (Y !== Z || Y.tag !== I && Y.tag !== ee) && (Y = null);
          }
        } else
          A = null, Y = a;
        if (A !== Y) {
          var Ue = Gl, et = "onMouseLeave", We = "onMouseEnter", jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ue = mp, et = "onPointerLeave", We = "onPointerEnter", jt = "pointer");
          var _t = A == null ? w : Mf(A), B = Y == null ? w : Mf(Y), K = new Ue(et, jt + "leave", A, i, o);
          K.target = _t, K.relatedTarget = B;
          var P = null, de = Ks(o);
          if (de === a) {
            var Ae = new Ue(We, jt + "enter", Y, i, o);
            Ae.target = B, Ae.relatedTarget = _t, P = Ae;
          }
          ow(e, K, P, A, Y);
        }
      }
    }
    function Ye(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Be = typeof Object.is == "function" ? Object.is : Ye;
    function Xe(e, t) {
      if (Be(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!Vn.call(t, s) || !Be(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ft(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function or(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Vt(e, t) {
      for (var a = ft(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Ii) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = ft(or(a));
      }
    }
    function Xl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return ug(e, o, s, f, h);
    }
    function ug(e, t, a, i, o) {
      var s = 0, f = -1, h = -1, y = 0, x = 0, w = e, H = null;
      e:
        for (; ; ) {
          for (var A = null; w === t && (a === 0 || w.nodeType === Ii) && (f = s + a), w === i && (o === 0 || w.nodeType === Ii) && (h = s + o), w.nodeType === Ii && (s += w.nodeValue.length), (A = w.firstChild) !== null; )
            H = w, w = A;
          for (; ; ) {
            if (w === e)
              break e;
            if (H === t && ++y === a && (f = s), H === i && ++x === o && (h = s), (A = w.nextSibling) !== null)
              break;
            w = H, H = w.parentNode;
          }
          w = A;
        }
      return f === -1 || h === -1 ? null : {
        start: f,
        end: h
      };
    }
    function Px(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), h = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > h) {
          var y = h;
          h = f, f = y;
        }
        var x = Vt(e, f), w = Vt(e, h);
        if (x && w) {
          if (o.rangeCount === 1 && o.anchorNode === x.node && o.anchorOffset === x.offset && o.focusNode === w.node && o.focusOffset === w.offset)
            return;
          var H = a.createRange();
          H.setStart(x.node, x.offset), o.removeAllRanges(), f > h ? (o.addRange(H), o.extend(w.node, w.offset)) : (H.setEnd(w.node, w.offset), o.addRange(H));
        }
      }
    }
    function mS(e) {
      return e && e.nodeType === Ii;
    }
    function yS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : mS(e) ? !1 : mS(t) ? yS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function $x(e) {
      return e && e.ownerDocument && yS(e.ownerDocument.documentElement, e);
    }
    function Ix(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function gS() {
      for (var e = window, t = _l(); t instanceof e.HTMLIFrameElement; ) {
        if (Ix(t))
          e = t.contentWindow;
        else
          return t;
        t = _l(e.document);
      }
      return t;
    }
    function sg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Yx() {
      var e = gS();
      return {
        focusedElem: e,
        selectionRange: sg(e) ? Qx(e) : null
      };
    }
    function Wx(e) {
      var t = gS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && $x(a)) {
        i !== null && sg(a) && Gx(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === ta && o.push({
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
    function Qx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Xl(e), t || {
        start: 0,
        end: 0
      };
    }
    function Gx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Px(e, t);
    }
    var qx = un && "documentMode" in document && document.documentMode <= 11;
    function Xx() {
      Hn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Df = null, cg = null, xp = null, fg = !1;
    function Zx(e) {
      if ("selectionStart" in e && sg(e))
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
    function Kx(e) {
      return e.window === e ? e.document : e.nodeType === ii ? e : e.ownerDocument;
    }
    function SS(e, t, a) {
      var i = Kx(a);
      if (!(fg || Df == null || Df !== _l(i))) {
        var o = Zx(Df);
        if (!xp || !Xe(xp, o)) {
          xp = o;
          var s = $h(cg, "onSelect");
          if (s.length > 0) {
            var f = new Ur("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Df;
          }
        }
      }
    }
    function Jx(e, t, a, i, o, s, f) {
      var h = a ? Mf(a) : window;
      switch (t) {
        case "focusin":
          (Pu(h) || h.contentEditable === "true") && (Df = h, cg = a, xp = null);
          break;
        case "focusout":
          Df = null, cg = null, xp = null;
          break;
        case "mousedown":
          fg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fg = !1, SS(e, i, o);
          break;
        case "selectionchange":
          if (qx)
            break;
        case "keydown":
        case "keyup":
          SS(e, i, o);
      }
    }
    function Vh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var _f = {
      animationend: Vh("Animation", "AnimationEnd"),
      animationiteration: Vh("Animation", "AnimationIteration"),
      animationstart: Vh("Animation", "AnimationStart"),
      transitionend: Vh("Transition", "TransitionEnd")
    }, dg = {}, CS = {};
    un && (CS = document.createElement("div").style, "AnimationEvent" in window || (delete _f.animationend.animation, delete _f.animationiteration.animation, delete _f.animationstart.animation), "TransitionEvent" in window || delete _f.transitionend.transition);
    function Bh(e) {
      if (dg[e])
        return dg[e];
      if (!_f[e])
        return e;
      var t = _f[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in CS)
          return dg[e] = t[a];
      return e;
    }
    var ES = Bh("animationend"), xS = Bh("animationiteration"), wS = Bh("animationstart"), bS = Bh("transitionend"), RS = /* @__PURE__ */ new Map(), TS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function $u(e, t) {
      RS.set(e, t), Hn(t, [e]);
    }
    function ew() {
      for (var e = 0; e < TS.length; e++) {
        var t = TS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        $u(a, "on" + i);
      }
      $u(ES, "onAnimationEnd"), $u(xS, "onAnimationIteration"), $u(wS, "onAnimationStart"), $u("dblclick", "onDoubleClick"), $u("focusin", "onFocus"), $u("focusout", "onBlur"), $u(bS, "onTransitionEnd");
    }
    function tw(e, t, a, i, o, s, f) {
      var h = RS.get(t);
      if (h !== void 0) {
        var y = Ur, x = t;
        switch (t) {
          case "keypress":
            if (Ao(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = tg;
            break;
          case "focusin":
            x = "focus", y = gf;
            break;
          case "focusout":
            x = "blur", y = gf;
            break;
          case "beforeblur":
          case "afterblur":
            y = gf;
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
            y = Gl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Fo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ia;
            break;
          case ES:
          case xS:
          case wS:
            y = Sf;
            break;
          case bS:
            y = rg;
            break;
          case "scroll":
            y = fp;
            break;
          case "wheel":
            y = Ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Zy;
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
        var w = (s & mo) !== 0;
        {
          var H = !w && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", A = iw(a, h, i.type, w, H);
          if (A.length > 0) {
            var Y = new y(h, x, null, i, o);
            e.push({
              event: Y,
              listeners: A
            });
          }
        }
      }
    }
    ew(), $(), kf(), Xx(), Ah();
    function nw(e, t, a, i, o, s, f) {
      tw(e, t, a, i, o, s);
      var h = (s & Fy) === 0;
      h && (me(e, t, a, i, o), F(e, t, a, i, o), Jx(e, t, a, i, o), Tf(e, t, a, i, o));
    }
    var wp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], pg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wp));
    function kS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Gi(i, t, void 0, e), e.currentTarget = null;
    }
    function rw(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, h = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          kS(e, y, h), i = f;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var w = t[x], H = w.instance, A = w.currentTarget, Y = w.listener;
          if (H !== i && e.isPropagationStopped())
            return;
          kS(e, Y, A), i = H;
        }
    }
    function DS(e, t) {
      for (var a = (t & mo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        rw(s, f, a);
      }
      Md();
    }
    function aw(e, t, a, i, o) {
      var s = Dc(a), f = [];
      nw(f, e, i, a, s, t), DS(f, t);
    }
    function kn(e, t) {
      pg.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = jb(t), o = uw(e, a);
      i.has(o) || (_S(t, e, Cs, a), i.add(o));
    }
    function vg(e, t, a) {
      pg.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= mo), _S(a, e, i, t);
    }
    var Ph = "_reactListening" + Math.random().toString(36).slice(2);
    function bp(e) {
      if (!e[Ph]) {
        e[Ph] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (pg.has(a) || vg(a, !1, e), vg(a, !0, e));
        });
        var t = e.nodeType === ii ? e : e.ownerDocument;
        t !== null && (t[Ph] || (t[Ph] = !0, vg("selectionchange", !1, t)));
      }
    }
    function _S(e, t, a, i, o) {
      var s = Uu(e, t, a), f = void 0;
      Rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? nl(e, t, s, f) : zu(e, t, s) : f !== void 0 ? hf(e, t, s, f) : cp(e, t, s);
    }
    function OS(e, t) {
      return e === t || e.nodeType === $n && e.parentNode === t;
    }
    function hg(e, t, a, i, o) {
      var s = i;
      if (!(t & Wi) && !(t & Cs)) {
        var f = o;
        if (i !== null) {
          var h = i;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var y = h.tag;
              if (y === z || y === q) {
                var x = h.stateNode.containerInfo;
                if (OS(x, f))
                  break;
                if (y === q)
                  for (var w = h.return; w !== null; ) {
                    var H = w.tag;
                    if (H === z || H === q) {
                      var A = w.stateNode.containerInfo;
                      if (OS(A, f))
                        return;
                    }
                    w = w.return;
                  }
                for (; x !== null; ) {
                  var Y = Ks(x);
                  if (Y === null)
                    return;
                  var Q = Y.tag;
                  if (Q === I || Q === ee) {
                    h = s = Y;
                    continue e;
                  }
                  x = x.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      _d(function() {
        return aw(e, t, a, s);
      });
    }
    function Rp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function iw(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, y = [], x = e, w = null; x !== null; ) {
        var H = x, A = H.stateNode, Y = H.tag;
        if (Y === I && A !== null && (w = A, h !== null)) {
          var Q = go(x, h);
          Q != null && y.push(Rp(x, Q, w));
        }
        if (o)
          break;
        x = x.return;
      }
      return y;
    }
    function $h(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, h = s.tag;
        if (h === I && f !== null) {
          var y = f, x = go(o, a);
          x != null && i.unshift(Rp(o, x, y));
          var w = go(o, t);
          w != null && i.push(Rp(o, w, y));
        }
        o = o.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function lw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Of(s))
        o++;
      for (var f = 0, h = i; h; h = Of(h))
        f++;
      for (; o - f > 0; )
        a = Of(a), o--;
      for (; f - o > 0; )
        i = Of(i), f--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function LS(e, t, a, i, o) {
      for (var s = t._reactName, f = [], h = a; h !== null && h !== i; ) {
        var y = h, x = y.alternate, w = y.stateNode, H = y.tag;
        if (x !== null && x === i)
          break;
        if (H === I && w !== null) {
          var A = w;
          if (o) {
            var Y = go(h, s);
            Y != null && f.unshift(Rp(h, Y, A));
          } else if (!o) {
            var Q = go(h, s);
            Q != null && f.push(Rp(h, Q, A));
          }
        }
        h = h.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ow(e, t, a, i, o) {
      var s = i && o ? lw(i, o) : null;
      i !== null && LS(e, t, i, s, !1), o !== null && a !== null && LS(e, a, o, s, !0);
    }
    function uw(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ya = !1, Tp = "dangerouslySetInnerHTML", Ih = "suppressContentEditableWarning", Iu = "suppressHydrationWarning", NS = "autoFocus", Xs = "children", Zs = "style", Yh = "__html", mg, Wh, kp, MS, Qh, jS, US;
    mg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Wh = function(e, t) {
      kc(e, t), bd(e, t), th(e, t, {
        registrationNameDependencies: At,
        possibleRegistrationNames: br
      });
    }, jS = un && !document.documentMode, kp = function(e, t, a) {
      if (!Ya) {
        var i = Gh(a), o = Gh(t);
        o !== i && (Ya = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, MS = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Qh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, US = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var sw = /\r\n?/g, cw = /\u0000|\uFFFD/g;
    function Gh(e) {
      sr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(sw, `
`).replace(cw, "");
    }
    function qh(e, t, a, i) {
      var o = Gh(t), s = Gh(e);
      if (s !== o && (i && (Ya || (Ya = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && De))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function AS(e) {
      return e.nodeType === ii ? e : e.ownerDocument;
    }
    function fw() {
    }
    function Xh(e) {
      e.onclick = fw;
    }
    function dw(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), Yv(t, f);
          else if (s === Tp) {
            var h = f ? f[Yh] : void 0;
            h != null && jv(t, h);
          } else if (s === Xs)
            if (typeof f == "string") {
              var y = e !== "textarea" || f !== "";
              y && wc(t, f);
            } else
              typeof f == "number" && wc(t, "" + f);
          else
            s === Ih || s === Iu || s === NS || (At.hasOwnProperty(s) ? f != null && (typeof f != "function" && Qh(s, f), s === "onScroll" && kn("scroll", t)) : f != null && ya(t, s, f, o));
        }
    }
    function pw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Zs ? Yv(e, f) : s === Tp ? jv(e, f) : s === Xs ? wc(e, f) : ya(e, s, f, i);
      }
    }
    function vw(e, t, a, i) {
      var o, s = AS(a), f, h = i;
      if (h === $i && (h = Ec(e)), h === $i) {
        if (o = Yi(e, t), !o && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var x = y.firstChild;
          f = y.removeChild(x);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var w = f;
          t.multiple ? w.multiple = !0 : t.size && (w.size = t.size);
        }
      } else
        f = s.createElementNS(h, e);
      return h === $i && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Vn.call(mg, e) && (mg[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function hw(e, t) {
      return AS(t).createTextNode(e);
    }
    function mw(e, t, a, i) {
      var o = Yi(t, a);
      Wh(t, a);
      var s;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < wp.length; f++)
            kn(wp[f], e);
          s = a;
          break;
        case "source":
          kn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), s = a;
          break;
        case "details":
          kn("toggle", e), s = a;
          break;
        case "input":
          _(e, a), s = g(e, a), kn("invalid", e);
          break;
        case "option":
          Jt(e, a), s = a;
          break;
        case "select":
          ms(e, a), s = hs(e, a), kn("invalid", e);
          break;
        case "textarea":
          Lv(e, a), s = hd(e, a), kn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), dw(t, e, i, s, o), t) {
        case "input":
          Na(e), he(e, a, !1);
          break;
        case "textarea":
          Na(e), Mv(e);
          break;
        case "option":
          rn(e, a);
          break;
        case "select":
          pd(e, a);
          break;
        default:
          typeof s.onClick == "function" && Xh(e);
          break;
      }
    }
    function yw(e, t, a, i, o) {
      Wh(t, i);
      var s = null, f, h;
      switch (t) {
        case "input":
          f = g(e, a), h = g(e, i), s = [];
          break;
        case "select":
          f = hs(e, a), h = hs(e, i), s = [];
          break;
        case "textarea":
          f = hd(e, a), h = hd(e, i), s = [];
          break;
        default:
          f = a, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && Xh(e);
          break;
      }
      Rc(t, h);
      var y, x, w = null;
      for (y in f)
        if (!(h.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === Zs) {
            var H = f[y];
            for (x in H)
              H.hasOwnProperty(x) && (w || (w = {}), w[x] = "");
          } else
            y === Tp || y === Xs || y === Ih || y === Iu || y === NS || (At.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var A = h[y], Y = f != null ? f[y] : void 0;
        if (!(!h.hasOwnProperty(y) || A === Y || A == null && Y == null))
          if (y === Zs)
            if (A && Object.freeze(A), Y) {
              for (x in Y)
                Y.hasOwnProperty(x) && (!A || !A.hasOwnProperty(x)) && (w || (w = {}), w[x] = "");
              for (x in A)
                A.hasOwnProperty(x) && Y[x] !== A[x] && (w || (w = {}), w[x] = A[x]);
            } else
              w || (s || (s = []), s.push(y, w)), w = A;
          else if (y === Tp) {
            var Q = A ? A[Yh] : void 0, Z = Y ? Y[Yh] : void 0;
            Q != null && Z !== Q && (s = s || []).push(y, Q);
          } else
            y === Xs ? (typeof A == "string" || typeof A == "number") && (s = s || []).push(y, "" + A) : y === Ih || y === Iu || (At.hasOwnProperty(y) ? (A != null && (typeof A != "function" && Qh(y, A), y === "onScroll" && kn("scroll", e)), !s && Y !== A && (s = [])) : (s = s || []).push(y, A));
      }
      return w && (gs(w, h[Zs]), (s = s || []).push(Zs, w)), s;
    }
    function gw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && W(e, o);
      var s = Yi(a, i), f = Yi(a, o);
      switch (pw(e, t, s, f), a) {
        case "input":
          X(e, o);
          break;
        case "textarea":
          Nv(e, o);
          break;
        case "select":
          Dy(e, o);
          break;
      }
    }
    function Sw(e) {
      {
        var t = e.toLowerCase();
        return Tc.hasOwnProperty(t) && Tc[t] || null;
      }
    }
    function Cw(e, t, a, i, o, s, f) {
      var h, y;
      switch (h = Yi(t, a), Wh(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < wp.length; x++)
            kn(wp[x], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          _(e, a), kn("invalid", e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          ms(e, a), kn("invalid", e);
          break;
        case "textarea":
          Lv(e, a), kn("invalid", e);
          break;
      }
      Rc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var w = e.attributes, H = 0; H < w.length; H++) {
          var A = w[H].name.toLowerCase();
          switch (A) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(w[H].name);
          }
        }
      }
      var Y = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var Z = a[Q];
          if (Q === Xs)
            typeof Z == "string" ? e.textContent !== Z && (a[Iu] !== !0 && qh(e.textContent, Z, s, f), Y = [Xs, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[Iu] !== !0 && qh(e.textContent, Z, s, f), Y = [Xs, "" + Z]);
          else if (At.hasOwnProperty(Q))
            Z != null && (typeof Z != "function" && Qh(Q, Z), Q === "onScroll" && kn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var Ue = void 0, et = h && at ? null : Ar(Q);
            if (a[Iu] !== !0) {
              if (!(Q === Ih || Q === Iu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Tp) {
                  var We = e.innerHTML, jt = Z ? Z[Yh] : void 0;
                  if (jt != null) {
                    var _t = US(e, jt);
                    _t !== We && kp(Q, We, _t);
                  }
                } else if (Q === Zs) {
                  if (y.delete(Q), jS) {
                    var B = Ay(Z);
                    Ue = e.getAttribute("style"), B !== Ue && kp(Q, Ue, B);
                  }
                } else if (h && !at)
                  y.delete(Q.toLowerCase()), Ue = mi(e, Q, Z), Z !== Ue && kp(Q, Ue, Z);
                else if (!xn(Q, et, h) && !Kt(Q, Z, et, h)) {
                  var K = !1;
                  if (et !== null)
                    y.delete(et.attributeName), Ue = ma(e, Q, Z, et);
                  else {
                    var P = i;
                    if (P === $i && (P = Ec(t)), P === $i)
                      y.delete(Q.toLowerCase());
                    else {
                      var de = Sw(Q);
                      de !== null && de !== Q && (K = !0, y.delete(de)), y.delete(Q);
                    }
                    Ue = mi(e, Q, Z);
                  }
                  var Ae = at;
                  !Ae && Z !== Ue && !K && kp(Q, Ue, Z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Iu] !== !0 && MS(y), t) {
        case "input":
          Na(e), he(e, a, !0);
          break;
        case "textarea":
          Na(e), Mv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Xh(e);
          break;
      }
      return Y;
    }
    function Ew(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function yg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function gg(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Sg(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Cg(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function xw(e, t, a) {
      switch (t) {
        case "input":
          it(e, a);
          return;
        case "textarea":
          md(e, a);
          return;
        case "select":
          _y(e, a);
          return;
      }
    }
    var Dp = function() {
    }, _p = function() {
    };
    {
      var ww = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], zS = [
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
      ], bw = zS.concat(["button"]), Rw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      _p = function(e, t) {
        var a = Rt({}, e || FS), i = {
          tag: t
        };
        return zS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), bw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), ww.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Tw = function(e, t) {
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
            return Rw.indexOf(t) === -1;
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
      }, kw = function(e, t) {
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
      }, HS = {};
      Dp = function(e, t, a) {
        a = a || FS;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Tw(e, o) ? null : i, f = s ? null : kw(e, a), h = s || f;
        if (h) {
          var y = h.tag, x = !!s + "|" + e + "|" + y;
          if (!HS[x]) {
            HS[x] = !0;
            var w = e, H = "";
            if (e === "#text" ? /\S/.test(t) ? w = "Text nodes" : (w = "Whitespace text nodes", H = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : w = "<" + e + ">", s) {
              var A = "";
              y === "table" && e === "tr" && (A += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", w, y, H, A);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", w, y);
          }
        }
      };
    }
    var Zh = "suppressHydrationWarning", Kh = "$", Jh = "/$", Op = "$?", Lp = "$!", Dw = "style", Eg = null, xg = null;
    function _w(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ii:
        case vo: {
          t = i === ii ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : gd(null, "");
          break;
        }
        default: {
          var s = i === $n ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = gd(f, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = _p(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function Ow(e, t, a) {
      {
        var i = e, o = gd(i.namespace, t), s = _p(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function O6(e) {
      return e;
    }
    function Lw(e) {
      Eg = ba(), xg = Yx();
      var t = null;
      return lr(!1), t;
    }
    function Nw(e) {
      Wx(xg), lr(Eg), Eg = null, xg = null;
    }
    function Mw(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (Dp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = _p(f.ancestorInfo, e);
          Dp(null, h, y);
        }
        s = f.namespace;
      }
      var x = vw(e, t, a, s);
      return jp(o, x), Og(x, t), x;
    }
    function jw(e, t) {
      e.appendChild(t);
    }
    function Uw(e, t, a, i, o) {
      switch (mw(e, t, a, i), t) {
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
    function Aw(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = _p(f.ancestorInfo, t);
          Dp(null, h, y);
        }
      }
      return yw(e, t, a, i);
    }
    function wg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function zw(e, t, a, i) {
      {
        var o = a;
        Dp(null, e, o.ancestorInfo);
      }
      var s = hw(e, t);
      return jp(i, s), s;
    }
    function Fw() {
      var e = window.event;
      return e === void 0 ? Ji : Br(e.type);
    }
    var bg = typeof setTimeout == "function" ? setTimeout : void 0, Hw = typeof clearTimeout == "function" ? clearTimeout : void 0, Rg = -1, VS = typeof Promise == "function" ? Promise : void 0, Vw = typeof queueMicrotask == "function" ? queueMicrotask : typeof VS < "u" ? function(e) {
      return VS.resolve(null).then(e).catch(Bw);
    } : bg;
    function Bw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Pw(e, t, a, i) {
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
    function $w(e, t, a, i, o, s) {
      gw(e, t, a, i, o), Og(e, o);
    }
    function BS(e) {
      wc(e, "");
    }
    function Iw(e, t, a) {
      e.nodeValue = a;
    }
    function Yw(e, t) {
      e.appendChild(t);
    }
    function Ww(e, t) {
      var a;
      e.nodeType === $n ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Xh(a);
    }
    function Qw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Gw(e, t, a) {
      e.nodeType === $n ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function qw(e, t) {
      e.removeChild(t);
    }
    function Xw(e, t) {
      e.nodeType === $n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Tg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === $n) {
          var s = o.data;
          if (s === Jh)
            if (i === 0) {
              e.removeChild(o), Dt(t);
              return;
            } else
              i--;
          else
            (s === Kh || s === Op || s === Lp) && i++;
        }
        a = o;
      } while (a);
      Dt(t);
    }
    function Zw(e, t) {
      e.nodeType === $n ? Tg(e.parentNode, t) : e.nodeType === ta && Tg(e, t), Dt(e);
    }
    function Kw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Jw(e) {
      e.nodeValue = "";
    }
    function eb(e, t) {
      e = e;
      var a = t[Dw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bc("display", i);
    }
    function tb(e, t) {
      e.nodeValue = t;
    }
    function nb(e) {
      e.nodeType === ta ? e.textContent = "" : e.nodeType === ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function rb(e, t, a) {
      return e.nodeType !== ta || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ab(e, t) {
      return t === "" || e.nodeType !== Ii ? null : e;
    }
    function ib(e) {
      return e.nodeType !== $n ? null : e;
    }
    function PS(e) {
      return e.data === Op;
    }
    function kg(e) {
      return e.data === Lp;
    }
    function lb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function ob(e, t) {
      e._reactRetry = t;
    }
    function em(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ta || t === Ii)
          break;
        if (t === $n) {
          var a = e.data;
          if (a === Kh || a === Lp || a === Op)
            break;
          if (a === Jh)
            return null;
        }
      }
      return e;
    }
    function Np(e) {
      return em(e.nextSibling);
    }
    function ub(e) {
      return em(e.firstChild);
    }
    function sb(e) {
      return em(e.firstChild);
    }
    function cb(e) {
      return em(e.nextSibling);
    }
    function fb(e, t, a, i, o, s, f) {
      jp(s, e), Og(e, a);
      var h;
      {
        var y = o;
        h = y.namespace;
      }
      var x = (s.mode & kt) !== nt;
      return Cw(e, t, a, h, i, x, f);
    }
    function db(e, t, a, i) {
      return jp(a, e), a.mode & kt, Ew(e, t);
    }
    function pb(e, t) {
      jp(t, e);
    }
    function vb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Jh) {
            if (a === 0)
              return Np(t);
            a--;
          } else
            (i === Kh || i === Lp || i === Op) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $S(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $n) {
          var i = t.data;
          if (i === Kh || i === Lp || i === Op) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Jh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function hb(e) {
      Dt(e);
    }
    function mb(e) {
      Dt(e);
    }
    function yb(e) {
      return e !== "head" && e !== "body";
    }
    function gb(e, t, a, i) {
      var o = !0;
      qh(t.nodeValue, a, i, o);
    }
    function Sb(e, t, a, i, o, s) {
      if (t[Zh] !== !0) {
        var f = !0;
        qh(i.nodeValue, o, s, f);
      }
    }
    function Cb(e, t) {
      t.nodeType === ta ? yg(e, t) : t.nodeType === $n || gg(e, t);
    }
    function Eb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ta ? yg(a, t) : t.nodeType === $n || gg(a, t));
      }
    }
    function xb(e, t, a, i, o) {
      (o || t[Zh] !== !0) && (i.nodeType === ta ? yg(a, i) : i.nodeType === $n || gg(a, i));
    }
    function wb(e, t, a) {
      Sg(e, t);
    }
    function bb(e, t) {
      Cg(e, t);
    }
    function Rb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Sg(i, t);
      }
    }
    function Tb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Cg(a, t);
      }
    }
    function kb(e, t, a, i, o, s) {
      (s || t[Zh] !== !0) && Sg(a, i);
    }
    function Db(e, t, a, i, o) {
      (o || t[Zh] !== !0) && Cg(a, i);
    }
    function _b(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Ob(e) {
      bp(e);
    }
    var Lf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Lf, Dg = "__reactProps$" + Lf, Mp = "__reactContainer$" + Lf, _g = "__reactEvents$" + Lf, Lb = "__reactListeners$" + Lf, Nb = "__reactHandles$" + Lf;
    function Mb(e) {
      delete e[Nf], delete e[Dg], delete e[_g], delete e[Lb], delete e[Nb];
    }
    function jp(e, t) {
      t[Nf] = e;
    }
    function tm(e, t) {
      t[Mp] = e;
    }
    function IS(e) {
      e[Mp] = null;
    }
    function Up(e) {
      return !!e[Mp];
    }
    function Ks(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Mp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = $S(e); o !== null; ) {
              var s = o[Nf];
              if (s)
                return s;
              o = $S(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Yu(e) {
      var t = e[Nf] || e[Mp];
      return t && (t.tag === I || t.tag === ee || t.tag === ae || t.tag === z) ? t : null;
    }
    function Mf(e) {
      if (e.tag === I || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function nm(e) {
      return e[Dg] || null;
    }
    function Og(e, t) {
      e[Dg] = t;
    }
    function jb(e) {
      var t = e[_g];
      return t === void 0 && (t = e[_g] = /* @__PURE__ */ new Set()), t;
    }
    var YS = {}, WS = m.ReactDebugCurrentFrame;
    function rm(e) {
      if (e) {
        var t = e._owner, a = Ei(e.type, e._source, t ? t.type : null);
        WS.setExtraStackFrame(a);
      } else
        WS.setExtraStackFrame(null);
    }
    function al(e, t, a, i, o) {
      {
        var s = Function.call.bind(Vn);
        for (var f in e)
          if (s(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              h = x;
            }
            h && !(h instanceof Error) && (rm(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof h), rm(null)), h instanceof Error && !(h.message in YS) && (YS[h.message] = !0, rm(o), S("Failed %s type: %s", a, h.message), rm(null));
          }
      }
    }
    var Lg = [], am;
    am = [];
    var Po = -1;
    function Wu(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Po < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== am[Po] && S("Unexpected Fiber popped."), e.current = Lg[Po], Lg[Po] = null, am[Po] = null, Po--;
    }
    function fa(e, t, a) {
      Po++, Lg[Po] = e.current, am[Po] = a, e.current = t;
    }
    var Ng;
    Ng = {};
    var ci = {};
    Object.freeze(ci);
    var $o = Wu(ci), Zl = Wu(!1), Mg = ci;
    function jf(e, t, a) {
      return a && Kl(t) ? Mg : $o.current;
    }
    function QS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Uf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var h = pt(e) || "Unknown";
          al(i, s, "context", h);
        }
        return o && QS(e, t, s), s;
      }
    }
    function im() {
      return Zl.current;
    }
    function Kl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function lm(e) {
      ca(Zl, e), ca($o, e);
    }
    function jg(e) {
      ca(Zl, e), ca($o, e);
    }
    function GS(e, t, a) {
      {
        if ($o.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa($o, t, e), fa(Zl, a, e);
      }
    }
    function qS(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = pt(e) || "Unknown";
            Ng[s] || (Ng[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var h in f)
          if (!(h in o))
            throw new Error((pt(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = pt(e) || "Unknown";
          al(o, f, "child context", y);
        }
        return Rt({}, a, f);
      }
    }
    function om(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return Mg = $o.current, fa($o, a, e), fa(Zl, Zl.current, e), !0;
      }
    }
    function XS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = qS(e, t, Mg);
          i.__reactInternalMemoizedMergedChildContext = o, ca(Zl, e), ca($o, e), fa($o, o, e), fa(Zl, a, e);
        } else
          ca(Zl, e), fa(Zl, a, e);
      }
    }
    function Ub(e) {
      {
        if (!Fd(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case z:
              return t.stateNode.context;
            case M: {
              var a = t.type;
              if (Kl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, um = 1, Io = null, Ug = !1, Ag = !1;
    function ZS(e) {
      Io === null ? Io = [e] : Io.push(e);
    }
    function Ab(e) {
      Ug = !0, ZS(e);
    }
    function KS() {
      Ug && Gu();
    }
    function Gu() {
      if (!Ag && Io !== null) {
        Ag = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Io;
          for (Xn(Or); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Io = null, Ug = !1;
        } catch (s) {
          throw Io !== null && (Io = Io.slice(e + 1)), Uc(zc, Gu), s;
        } finally {
          Xn(t), Ag = !1;
        }
      }
      return null;
    }
    var Af = [], zf = 0, sm = null, cm = 0, Oi = [], Li = 0, Js = null, Yo = 1, Wo = "";
    function zb(e) {
      return tc(), (e.flags & Ud) !== Ke;
    }
    function Fb(e) {
      return tc(), cm;
    }
    function Hb() {
      var e = Wo, t = Yo, a = t & ~Vb(t);
      return a.toString(32) + e;
    }
    function ec(e, t) {
      tc(), Af[zf++] = cm, Af[zf++] = sm, sm = e, cm = t;
    }
    function JS(e, t, a) {
      tc(), Oi[Li++] = Yo, Oi[Li++] = Wo, Oi[Li++] = Js, Js = e;
      var i = Yo, o = Wo, s = fm(i) - 1, f = i & ~(1 << s), h = a + 1, y = fm(t) + s;
      if (y > 30) {
        var x = s - s % 5, w = (1 << x) - 1, H = (f & w).toString(32), A = f >> x, Y = s - x, Q = fm(t) + Y, Z = h << Y, Ue = Z | A, et = H + o;
        Yo = 1 << Q | Ue, Wo = et;
      } else {
        var We = h << s, jt = We | f, _t = o;
        Yo = 1 << y | jt, Wo = _t;
      }
    }
    function zg(e) {
      tc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ec(e, a), JS(e, a, i);
      }
    }
    function fm(e) {
      return 32 - $c(e);
    }
    function Vb(e) {
      return 1 << fm(e) - 1;
    }
    function Fg(e) {
      for (; e === sm; )
        sm = Af[--zf], Af[zf] = null, cm = Af[--zf], Af[zf] = null;
      for (; e === Js; )
        Js = Oi[--Li], Oi[Li] = null, Wo = Oi[--Li], Oi[Li] = null, Yo = Oi[--Li], Oi[Li] = null;
    }
    function Bb() {
      return tc(), Js !== null ? {
        id: Yo,
        overflow: Wo
      } : null;
    }
    function Pb(e, t) {
      tc(), Oi[Li++] = Yo, Oi[Li++] = Wo, Oi[Li++] = Js, Yo = t.id, Wo = t.overflow, Js = e;
    }
    function tc() {
      $r() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Ni = null, il = !1, nc = !1, qu = null;
    function $b() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eC() {
      nc = !0;
    }
    function Ib() {
      return nc;
    }
    function Yb(e) {
      var t = e.stateNode.containerInfo;
      return Ni = sb(t), Pr = e, il = !0, qu = null, nc = !1, !0;
    }
    function Wb(e, t, a) {
      return Ni = cb(t), Pr = e, il = !0, qu = null, nc = !1, a !== null && Pb(e, a), !0;
    }
    function tC(e, t) {
      switch (e.tag) {
        case z: {
          Cb(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
          var a = (e.mode & kt) !== nt;
          xb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ae: {
          var i = e.memoizedState;
          i.dehydrated !== null && Eb(i.dehydrated, t);
          break;
        }
      }
    }
    function nC(e, t) {
      tC(e, t);
      var a = q3();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Yt) : i.push(a);
    }
    function Hg(e, t) {
      {
        if (nc)
          return;
        switch (e.tag) {
          case z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, wb(a, i);
                break;
              case ee:
                var o = t.pendingProps;
                bb(a, o);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, f = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case I: {
                var y = t.type, x = t.pendingProps, w = (e.mode & kt) !== nt;
                kb(
                  s,
                  f,
                  h,
                  y,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
              case ee: {
                var H = t.pendingProps, A = (e.mode & kt) !== nt;
                Db(
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
          case ae: {
            var Y = e.memoizedState, Q = Y.dehydrated;
            if (Q !== null)
              switch (t.tag) {
                case I:
                  var Z = t.type;
                  t.pendingProps, Rb(Q, Z);
                  break;
                case ee:
                  var Ue = t.pendingProps;
                  Tb(Q, Ue);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function rC(e, t) {
      t.flags = t.flags & ~Aa | vn, Hg(e, t);
    }
    function aC(e, t) {
      switch (e.tag) {
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = rb(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Ni = ub(i), !0) : !1;
        }
        case ee: {
          var o = e.pendingProps, s = ab(t, o);
          return s !== null ? (e.stateNode = s, Pr = e, Ni = null, !0) : !1;
        }
        case ae: {
          var f = ib(t);
          if (f !== null) {
            var h = {
              dehydrated: f,
              treeContext: Bb(),
              retryLane: ua
            };
            e.memoizedState = h;
            var y = X3(f);
            return y.return = e, e.child = y, Pr = e, Ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Vg(e) {
      return (e.mode & kt) !== nt && (e.flags & ct) === Ke;
    }
    function Bg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Pg(e) {
      if (il) {
        var t = Ni;
        if (!t) {
          Vg(e) && (Hg(Pr, e), Bg()), rC(Pr, e), il = !1, Pr = e;
          return;
        }
        var a = t;
        if (!aC(e, t)) {
          Vg(e) && (Hg(Pr, e), Bg()), t = Np(a);
          var i = Pr;
          if (!t || !aC(e, t)) {
            rC(Pr, e), il = !1, Pr = e;
            return;
          }
          nC(i, a);
        }
      }
    }
    function Qb(e, t, a) {
      var i = e.stateNode, o = !nc, s = fb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Gb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = db(t, a, e);
      if (i) {
        var o = Pr;
        if (o !== null)
          switch (o.tag) {
            case z: {
              var s = o.stateNode.containerInfo, f = (o.mode & kt) !== nt;
              gb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case I: {
              var h = o.type, y = o.memoizedProps, x = o.stateNode, w = (o.mode & kt) !== nt;
              Sb(
                h,
                y,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                w
              );
              break;
            }
          }
      }
      return i;
    }
    function qb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      pb(a, e);
    }
    function Xb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return vb(a);
    }
    function iC(e) {
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== z && t.tag !== ae; )
        t = t.return;
      Pr = t;
    }
    function dm(e) {
      if (e !== Pr)
        return !1;
      if (!il)
        return iC(e), il = !0, !1;
      if (e.tag !== z && (e.tag !== I || yb(e.type) && !wg(e.type, e.memoizedProps))) {
        var t = Ni;
        if (t)
          if (Vg(e))
            lC(e), Bg();
          else
            for (; t; )
              nC(e, t), t = Np(t);
      }
      return iC(e), e.tag === ae ? Ni = Xb(e) : Ni = Pr ? Np(e.stateNode) : null, !0;
    }
    function Zb() {
      return il && Ni !== null;
    }
    function lC(e) {
      for (var t = Ni; t; )
        tC(e, t), t = Np(t);
    }
    function Ff() {
      Pr = null, Ni = null, il = !1, nc = !1;
    }
    function oC() {
      qu !== null && (tE(qu), qu = null);
    }
    function $r() {
      return il;
    }
    function $g(e) {
      qu === null ? qu = [e] : qu.push(e);
    }
    var Kb = m.ReactCurrentBatchConfig, Jb = null;
    function eR() {
      return Kb.transition;
    }
    var ll = {
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
      var tR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Rn && (t = a), a = a.return;
        return t;
      }, rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ap = [], zp = [], Fp = [], Hp = [], Vp = [], Bp = [], ac = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillMount == "function" && zp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Vp.push(e), e.mode & Rn && typeof t.UNSAFE_componentWillUpdate == "function" && Bp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(A) {
          e.add(pt(A) || "Component"), ac.add(A.type);
        }), Ap = []);
        var t = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(A) {
          t.add(pt(A) || "Component"), ac.add(A.type);
        }), zp = []);
        var a = /* @__PURE__ */ new Set();
        Fp.length > 0 && (Fp.forEach(function(A) {
          a.add(pt(A) || "Component"), ac.add(A.type);
        }), Fp = []);
        var i = /* @__PURE__ */ new Set();
        Hp.length > 0 && (Hp.forEach(function(A) {
          i.add(pt(A) || "Component"), ac.add(A.type);
        }), Hp = []);
        var o = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(A) {
          o.add(pt(A) || "Component"), ac.add(A.type);
        }), Vp = []);
        var s = /* @__PURE__ */ new Set();
        if (Bp.length > 0 && (Bp.forEach(function(A) {
          s.add(pt(A) || "Component"), ac.add(A.type);
        }), Bp = []), t.size > 0) {
          var f = rc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var h = rc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var y = rc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var x = rc(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var w = rc(a);
          k(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
        if (o.size > 0) {
          var H = rc(o);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, H);
        }
      };
      var pm = /* @__PURE__ */ new Map(), uC = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = tR(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uC.has(e.type)) {
          var i = pm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], pm.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(pt(s) || "Component"), uC.add(s.type);
            });
            var o = rc(i);
            try {
              qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              _n();
            }
          }
        });
      }, ll.discardPendingWarnings = function() {
        Ap = [], zp = [], Fp = [], Hp = [], Vp = [], Bp = [], pm = /* @__PURE__ */ new Map();
      };
    }
    function ol(e, t) {
      if (e && e.defaultProps) {
        var a = Rt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var Ig = Wu(null), Yg;
    Yg = {};
    var vm = null, Hf = null, Wg = null, hm = !1;
    function mm() {
      vm = null, Hf = null, Wg = null, hm = !1;
    }
    function sC() {
      hm = !0;
    }
    function cC() {
      hm = !1;
    }
    function fC(e, t, a) {
      fa(Ig, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Yg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Yg;
    }
    function Qg(e, t) {
      var a = Ig.current;
      ca(Ig, t), e._currentValue = a;
    }
    function Gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Lo(i.childLanes, t) ? o !== null && !Lo(o.childLanes, t) && (o.childLanes = Ct(o.childLanes, t)) : (i.childLanes = Ct(i.childLanes, t), o !== null && (o.childLanes = Ct(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function nR(e, t, a) {
      rR(e, t, a);
    }
    function rR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === M) {
                var h = qn(a), y = Qo(ln, h);
                y.tag = gm;
                var x = i.updateQueue;
                if (x !== null) {
                  var w = x.shared, H = w.pending;
                  H === null ? y.next = y : (y.next = H.next, H.next = y), w.pending = y;
                }
              }
              i.lanes = Ct(i.lanes, a);
              var A = i.alternate;
              A !== null && (A.lanes = Ct(A.lanes, a)), Gg(i.return, a, e), s.lanes = Ct(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ge)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === ke) {
          var Y = i.return;
          if (Y === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Y.lanes = Ct(Y.lanes, a);
          var Q = Y.alternate;
          Q !== null && (Q.lanes = Ct(Q.lanes, a)), Gg(Y, a, e), o = i.sibling;
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
            var Z = o.sibling;
            if (Z !== null) {
              Z.return = o.return, o = Z;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Vf(e, t) {
      vm = e, Hf = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && tv(), a.firstContext = null);
      }
    }
    function ur(e) {
      hm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Hf === null) {
          if (vm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Hf = a, vm.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          Hf = Hf.next = a;
      }
      return t;
    }
    var ic = null;
    function qg(e) {
      ic === null ? ic = [e] : ic.push(e);
    }
    function aR() {
      if (ic !== null) {
        for (var e = 0; e < ic.length; e++) {
          var t = ic[e], a = t.interleaved;
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
        ic = null;
      }
    }
    function dC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, ym(e, i);
    }
    function iR(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function lR(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, qg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, ym(e, i);
    }
    function Wa(e, t) {
      return ym(e, t);
    }
    var oR = ym;
    function ym(e, t) {
      e.lanes = Ct(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ct(a.lanes, t)), a === null && (e.flags & (vn | Aa)) !== Ke && pE(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = Ct(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = Ct(a.childLanes, t) : (o.flags & (vn | Aa)) !== Ke && pE(e), i = o, o = o.return;
      if (i.tag === z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var pC = 0, vC = 1, gm = 2, Xg = 3, Sm = !1, Zg, Cm;
    Zg = !1, Cm = null;
    function Kg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function hC(e, t) {
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
    function Qo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: pC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Xu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Cm === o && !Zg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Zg = !0), o3()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, oR(e, a);
      } else
        return lR(e, o, t, a);
    }
    function Em(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Zd(a)) {
          var s = o.lanes;
          s = Jd(s, e.pendingLanes);
          var f = Ct(s, a);
          o.lanes = f, Ou(e, f);
        }
      }
    }
    function Jg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var y = h;
            do {
              var x = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              f === null ? s = f = x : (f.next = x, f = x), y = y.next;
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
      var w = a.lastBaseUpdate;
      w === null ? a.firstBaseUpdate = t : w.next = t, a.lastBaseUpdate = t;
    }
    function uR(e, t, a, i, o, s) {
      switch (a.tag) {
        case vC: {
          var f = a.payload;
          if (typeof f == "function") {
            sC();
            var h = f.call(s, i, o);
            {
              if (e.mode & Rn) {
                Gn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  Gn(!1);
                }
              }
              cC();
            }
            return h;
          }
          return f;
        }
        case Xg:
          e.flags = e.flags & ~rr | ct;
        case pC: {
          var y = a.payload, x;
          if (typeof y == "function") {
            sC(), x = y.call(s, i, o);
            {
              if (e.mode & Rn) {
                Gn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  Gn(!1);
                }
              }
              cC();
            }
          } else
            x = y;
          return x == null ? i : Rt({}, i, x);
        }
        case gm:
          return Sm = !0, i;
      }
      return i;
    }
    function xm(e, t, a, i) {
      var o = e.updateQueue;
      Sm = !1, Cm = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, x = y.next;
        y.next = null, f === null ? s = x : f.next = x, f = y;
        var w = e.alternate;
        if (w !== null) {
          var H = w.updateQueue, A = H.lastBaseUpdate;
          A !== f && (A === null ? H.firstBaseUpdate = x : A.next = x, H.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var Y = o.baseState, Q = J, Z = null, Ue = null, et = null, We = s;
        do {
          var jt = We.lane, _t = We.eventTime;
          if (Lo(i, jt)) {
            if (et !== null) {
              var K = {
                eventTime: _t,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                tag: We.tag,
                payload: We.payload,
                callback: We.callback,
                next: null
              };
              et = et.next = K;
            }
            Y = uR(e, o, We, Y, t, a);
            var P = We.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            We.lane !== Nt) {
              e.flags |= bi;
              var de = o.effects;
              de === null ? o.effects = [We] : de.push(We);
            }
          } else {
            var B = {
              eventTime: _t,
              lane: jt,
              tag: We.tag,
              payload: We.payload,
              callback: We.callback,
              next: null
            };
            et === null ? (Ue = et = B, Z = Y) : et = et.next = B, Q = Ct(Q, jt);
          }
          if (We = We.next, We === null) {
            if (h = o.shared.pending, h === null)
              break;
            var Ae = h, Le = Ae.next;
            Ae.next = null, We = Le, o.lastBaseUpdate = Ae, o.shared.pending = null;
          }
        } while (!0);
        et === null && (Z = Y), o.baseState = Z, o.firstBaseUpdate = Ue, o.lastBaseUpdate = et;
        var st = o.shared.interleaved;
        if (st !== null) {
          var ht = st;
          do
            Q = Ct(Q, ht.lane), ht = ht.next;
          while (ht !== st);
        } else
          s === null && (o.shared.lanes = J);
        pv(Q), e.lanes = Q, e.memoizedState = Y;
      }
      Cm = null;
    }
    function sR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function mC() {
      Sm = !1;
    }
    function wm() {
      return Sm;
    }
    function yC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, sR(f, a));
        }
    }
    var e0 = {}, gC = new d.Component().refs, t0, n0, r0, a0, i0, SC, bm, l0, o0, u0;
    {
      t0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), i0 = /* @__PURE__ */ new Set(), o0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set();
      var CC = /* @__PURE__ */ new Set();
      bm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          CC.has(a) || (CC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, SC = function(e, t) {
        if (t === void 0) {
          var a = Ft(e) || "Component";
          i0.has(a) || (i0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(e0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(e0);
    }
    function s0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Rn) {
          Gn(!0);
          try {
            s = a(i, o);
          } finally {
            Gn(!1);
          }
        }
        SC(t, s);
      }
      var f = s == null ? o : Rt({}, o, s);
      if (e.memoizedState = f, e.lanes === J) {
        var h = e.updateQueue;
        h.baseState = f;
      }
    }
    var c0 = {
      isMounted: Ea,
      enqueueSetState: function(e, t, a) {
        var i = ja(e), o = ka(), s = as(i), f = Qo(o, s);
        f.payload = t, a != null && (bm(a, "setState"), f.callback = a);
        var h = Xu(i, f, s);
        h !== null && (wr(h, i, s, o), Em(h, i, s)), Pl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ja(e), o = ka(), s = as(i), f = Qo(o, s);
        f.tag = vC, f.payload = t, a != null && (bm(a, "replaceState"), f.callback = a);
        var h = Xu(i, f, s);
        h !== null && (wr(h, i, s, o), Em(h, i, s)), Pl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ja(e), i = ka(), o = as(a), s = Qo(i, o);
        s.tag = gm, t != null && (bm(t, "forceUpdate"), s.callback = t);
        var f = Xu(a, s, o);
        f !== null && (wr(f, a, o, i), Em(f, a, o)), Qd(a, o);
      }
    };
    function EC(e, t, a, i, o, s, f) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Rn) {
            Gn(!0);
            try {
              y = h.shouldComponentUpdate(i, s, f);
            } finally {
              Gn(!1);
            }
          }
          y === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ft(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xe(a, i) || !Xe(o, s) : !0;
    }
    function cR(e, t, a) {
      var i = e.stateNode;
      {
        var o = Ft(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !o0.has(t) && (o0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ft(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !r0.has(t) && (r0.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ft(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = i.state;
        h && (typeof h != "object" || Ot(h)) && S("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function xC(e, t) {
      t.updater = c0, e.stateNode = t, Cu(t, e), t._reactInternalInstance = e0;
    }
    function wC(e, t, a) {
      var i = !1, o = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Ee && f._context === void 0
        );
        if (!h && !u0.has(t)) {
          u0.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === ie ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ft(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ur(f);
      else {
        o = jf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, s = i ? Uf(e, o) : ci;
      }
      var w = new t(a, s);
      if (e.mode & Rn) {
        Gn(!0);
        try {
          w = new t(a, s);
        } finally {
          Gn(!1);
        }
      }
      var H = e.memoizedState = w.state !== null && w.state !== void 0 ? w.state : null;
      xC(e, w);
      {
        if (typeof t.getDerivedStateFromProps == "function" && H === null) {
          var A = Ft(t) || "Component";
          n0.has(A) || (n0.add(A), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", A, w.state === null ? "null" : "undefined", A));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof w.getSnapshotBeforeUpdate == "function") {
          var Y = null, Q = null, Z = null;
          if (typeof w.componentWillMount == "function" && w.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof w.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof w.componentWillReceiveProps == "function" && w.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof w.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof w.componentWillUpdate == "function" && w.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof w.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), Y !== null || Q !== null || Z !== null) {
            var Ue = Ft(t) || "Component", et = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            a0.has(Ue) || (a0.add(Ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ue, et, Y !== null ? `
  ` + Y : "", Q !== null ? `
  ` + Q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && QS(e, o, s), w;
    }
    function fR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", pt(e) || "Component"), c0.enqueueReplaceState(t, t.state, null));
    }
    function bC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = pt(e) || "Component";
          t0.has(s) || (t0.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        c0.enqueueReplaceState(t, t.state, null);
      }
    }
    function f0(e, t, a, i) {
      cR(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = gC, Kg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ur(s);
      else {
        var f = jf(e, t, !0);
        o.context = Uf(e, f);
      }
      {
        if (o.state === a) {
          var h = Ft(t) || "Component";
          l0.has(h) || (l0.add(h), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Rn && ll.recordLegacyContextWarning(e, o), ll.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (s0(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (fR(e, o), xm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var x = St;
        x |= ra, (e.mode & Ha) !== nt && (x |= aa), e.flags |= x;
      }
    }
    function dR(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, h = t.contextType, y = ci;
      if (typeof h == "object" && h !== null)
        y = ur(h);
      else {
        var x = jf(e, t, !0);
        y = Uf(e, x);
      }
      var w = t.getDerivedStateFromProps, H = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !H && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== y) && bC(e, o, a, y), mC();
      var A = e.memoizedState, Y = o.state = A;
      if (xm(e, a, o, i), Y = e.memoizedState, s === a && A === Y && !im() && !wm()) {
        if (typeof o.componentDidMount == "function") {
          var Q = St;
          Q |= ra, (e.mode & Ha) !== nt && (Q |= aa), e.flags |= Q;
        }
        return !1;
      }
      typeof w == "function" && (s0(e, t, w, a), Y = e.memoizedState);
      var Z = wm() || EC(e, t, s, a, A, Y, y);
      if (Z) {
        if (!H && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ue = St;
          Ue |= ra, (e.mode & Ha) !== nt && (Ue |= aa), e.flags |= Ue;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var et = St;
          et |= ra, (e.mode & Ha) !== nt && (et |= aa), e.flags |= et;
        }
        e.memoizedProps = a, e.memoizedState = Y;
      }
      return o.props = a, o.state = Y, o.context = y, Z;
    }
    function pR(e, t, a, i, o) {
      var s = t.stateNode;
      hC(e, t);
      var f = t.memoizedProps, h = t.type === t.elementType ? f : ol(t.type, f);
      s.props = h;
      var y = t.pendingProps, x = s.context, w = a.contextType, H = ci;
      if (typeof w == "object" && w !== null)
        H = ur(w);
      else {
        var A = jf(t, a, !0);
        H = Uf(t, A);
      }
      var Y = a.getDerivedStateFromProps, Q = typeof Y == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || x !== H) && bC(t, s, i, H), mC();
      var Z = t.memoizedState, Ue = s.state = Z;
      if (xm(t, i, s, o), Ue = t.memoizedState, f === y && Z === Ue && !im() && !wm() && !ze)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof Y == "function" && (s0(t, a, Y, i), Ue = t.memoizedState);
      var et = wm() || EC(t, a, h, i, Z, Ue, H) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ze;
      return et ? (!Q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ue, H), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ue, H)), typeof s.componentDidUpdate == "function" && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= St), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = Ue), s.props = i, s.state = Ue, s.context = H, et;
    }
    var d0, p0, v0, h0, m0, RC = function(e, t) {
    };
    d0 = !1, p0 = !1, v0 = {}, h0 = {}, m0 = {}, RC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = pt(t) || "Component";
        h0[a] || (h0[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Rn || Ge) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = pt(e) || "Component";
          v0[o] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), v0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var h = s;
            if (h.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = h.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = f;
          sn(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var w = function(H) {
            var A = y.refs;
            A === gC && (A = y.refs = {}), H === null ? delete A[x] : A[x] = H;
          };
          return w._stringRef = x, w;
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
    function Rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Tm(e) {
      {
        var t = pt(e) || "Component";
        if (m0[t])
          return;
        m0[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kC(e) {
      function t(B, K) {
        if (e) {
          var P = B.deletions;
          P === null ? (B.deletions = [K], B.flags |= Yt) : P.push(K);
        }
      }
      function a(B, K) {
        if (!e)
          return null;
        for (var P = K; P !== null; )
          t(B, P), P = P.sibling;
        return null;
      }
      function i(B, K) {
        for (var P = /* @__PURE__ */ new Map(), de = K; de !== null; )
          de.key !== null ? P.set(de.key, de) : P.set(de.index, de), de = de.sibling;
        return P;
      }
      function o(B, K) {
        var P = pc(B, K);
        return P.index = 0, P.sibling = null, P;
      }
      function s(B, K, P) {
        if (B.index = P, !e)
          return B.flags |= Ud, K;
        var de = B.alternate;
        if (de !== null) {
          var Ae = de.index;
          return Ae < K ? (B.flags |= vn, K) : Ae;
        } else
          return B.flags |= vn, K;
      }
      function f(B) {
        return e && B.alternate === null && (B.flags |= vn), B;
      }
      function h(B, K, P, de) {
        if (K === null || K.tag !== ee) {
          var Ae = $1(P, B.mode, de);
          return Ae.return = B, Ae;
        } else {
          var Le = o(K, P);
          return Le.return = B, Le;
        }
      }
      function y(B, K, P, de) {
        var Ae = P.type;
        if (Ae === ga)
          return w(B, K, P.props.children, de, P.key);
        if (K !== null && (K.elementType === Ae || // Keep this check inline so it only runs on the false path:
        yE(K, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === Je && TC(Ae) === K.type)) {
          var Le = o(K, P.props);
          return Le.ref = Pp(B, K, P), Le.return = B, Le._debugSource = P._source, Le._debugOwner = P._owner, Le;
        }
        var st = P1(P, B.mode, de);
        return st.ref = Pp(B, K, P), st.return = B, st;
      }
      function x(B, K, P, de) {
        if (K === null || K.tag !== q || K.stateNode.containerInfo !== P.containerInfo || K.stateNode.implementation !== P.implementation) {
          var Ae = I1(P, B.mode, de);
          return Ae.return = B, Ae;
        } else {
          var Le = o(K, P.children || []);
          return Le.return = B, Le;
        }
      }
      function w(B, K, P, de, Ae) {
        if (K === null || K.tag !== se) {
          var Le = ls(P, B.mode, de, Ae);
          return Le.return = B, Le;
        } else {
          var st = o(K, P);
          return st.return = B, st;
        }
      }
      function H(B, K, P) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var de = $1("" + K, B.mode, P);
          return de.return = B, de;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case yi: {
              var Ae = P1(K, B.mode, P);
              return Ae.ref = Pp(B, null, K), Ae.return = B, Ae;
            }
            case zr: {
              var Le = I1(K, B.mode, P);
              return Le.return = B, Le;
            }
            case Je: {
              var st = K._payload, ht = K._init;
              return H(B, ht(st), P);
            }
          }
          if (Ot(K) || ti(K)) {
            var tn = ls(K, B.mode, P, null);
            return tn.return = B, tn;
          }
          Rm(B, K);
        }
        return typeof K == "function" && Tm(B), null;
      }
      function A(B, K, P, de) {
        var Ae = K !== null ? K.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Ae !== null ? null : h(B, K, "" + P, de);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case yi:
              return P.key === Ae ? y(B, K, P, de) : null;
            case zr:
              return P.key === Ae ? x(B, K, P, de) : null;
            case Je: {
              var Le = P._payload, st = P._init;
              return A(B, K, st(Le), de);
            }
          }
          if (Ot(P) || ti(P))
            return Ae !== null ? null : w(B, K, P, de, null);
          Rm(B, P);
        }
        return typeof P == "function" && Tm(B), null;
      }
      function Y(B, K, P, de, Ae) {
        if (typeof de == "string" && de !== "" || typeof de == "number") {
          var Le = B.get(P) || null;
          return h(K, Le, "" + de, Ae);
        }
        if (typeof de == "object" && de !== null) {
          switch (de.$$typeof) {
            case yi: {
              var st = B.get(de.key === null ? P : de.key) || null;
              return y(K, st, de, Ae);
            }
            case zr: {
              var ht = B.get(de.key === null ? P : de.key) || null;
              return x(K, ht, de, Ae);
            }
            case Je:
              var tn = de._payload, Pt = de._init;
              return Y(B, K, P, Pt(tn), Ae);
          }
          if (Ot(de) || ti(de)) {
            var Jn = B.get(P) || null;
            return w(K, Jn, de, Ae, null);
          }
          Rm(K, de);
        }
        return typeof de == "function" && Tm(K), null;
      }
      function Q(B, K, P) {
        {
          if (typeof B != "object" || B === null)
            return K;
          switch (B.$$typeof) {
            case yi:
            case zr:
              RC(B, P);
              var de = B.key;
              if (typeof de != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(de);
                break;
              }
              if (!K.has(de)) {
                K.add(de);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", de);
              break;
            case Je:
              var Ae = B._payload, Le = B._init;
              Q(Le(Ae), K, P);
              break;
          }
        }
        return K;
      }
      function Z(B, K, P, de) {
        for (var Ae = null, Le = 0; Le < P.length; Le++) {
          var st = P[Le];
          Ae = Q(st, Ae, B);
        }
        for (var ht = null, tn = null, Pt = K, Jn = 0, $t = 0, Wn = null; Pt !== null && $t < P.length; $t++) {
          Pt.index > $t ? (Wn = Pt, Pt = null) : Wn = Pt.sibling;
          var pa = A(B, Pt, P[$t], de);
          if (pa === null) {
            Pt === null && (Pt = Wn);
            break;
          }
          e && Pt && pa.alternate === null && t(B, Pt), Jn = s(pa, Jn, $t), tn === null ? ht = pa : tn.sibling = pa, tn = pa, Pt = Wn;
        }
        if ($t === P.length) {
          if (a(B, Pt), $r()) {
            var Xr = $t;
            ec(B, Xr);
          }
          return ht;
        }
        if (Pt === null) {
          for (; $t < P.length; $t++) {
            var di = H(B, P[$t], de);
            di !== null && (Jn = s(di, Jn, $t), tn === null ? ht = di : tn.sibling = di, tn = di);
          }
          if ($r()) {
            var Da = $t;
            ec(B, Da);
          }
          return ht;
        }
        for (var _a = i(B, Pt); $t < P.length; $t++) {
          var va = Y(_a, B, $t, P[$t], de);
          va !== null && (e && va.alternate !== null && _a.delete(va.key === null ? $t : va.key), Jn = s(va, Jn, $t), tn === null ? ht = va : tn.sibling = va, tn = va);
        }
        if (e && _a.forEach(function(rd) {
          return t(B, rd);
        }), $r()) {
          var Jo = $t;
          ec(B, Jo);
        }
        return ht;
      }
      function Ue(B, K, P, de) {
        var Ae = ti(P);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (p0 || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), p0 = !0), P.entries === Ae && (d0 || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), d0 = !0);
          var Le = Ae.call(P);
          if (Le)
            for (var st = null, ht = Le.next(); !ht.done; ht = Le.next()) {
              var tn = ht.value;
              st = Q(tn, st, B);
            }
        }
        var Pt = Ae.call(P);
        if (Pt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, $t = null, Wn = K, pa = 0, Xr = 0, di = null, Da = Pt.next(); Wn !== null && !Da.done; Xr++, Da = Pt.next()) {
          Wn.index > Xr ? (di = Wn, Wn = null) : di = Wn.sibling;
          var _a = A(B, Wn, Da.value, de);
          if (_a === null) {
            Wn === null && (Wn = di);
            break;
          }
          e && Wn && _a.alternate === null && t(B, Wn), pa = s(_a, pa, Xr), $t === null ? Jn = _a : $t.sibling = _a, $t = _a, Wn = di;
        }
        if (Da.done) {
          if (a(B, Wn), $r()) {
            var va = Xr;
            ec(B, va);
          }
          return Jn;
        }
        if (Wn === null) {
          for (; !Da.done; Xr++, Da = Pt.next()) {
            var Jo = H(B, Da.value, de);
            Jo !== null && (pa = s(Jo, pa, Xr), $t === null ? Jn = Jo : $t.sibling = Jo, $t = Jo);
          }
          if ($r()) {
            var rd = Xr;
            ec(B, rd);
          }
          return Jn;
        }
        for (var gv = i(B, Wn); !Da.done; Xr++, Da = Pt.next()) {
          var lo = Y(gv, B, Xr, Da.value, de);
          lo !== null && (e && lo.alternate !== null && gv.delete(lo.key === null ? Xr : lo.key), pa = s(lo, pa, Xr), $t === null ? Jn = lo : $t.sibling = lo, $t = lo);
        }
        if (e && gv.forEach(function(k5) {
          return t(B, k5);
        }), $r()) {
          var T5 = Xr;
          ec(B, T5);
        }
        return Jn;
      }
      function et(B, K, P, de) {
        if (K !== null && K.tag === ee) {
          a(B, K.sibling);
          var Ae = o(K, P);
          return Ae.return = B, Ae;
        }
        a(B, K);
        var Le = $1(P, B.mode, de);
        return Le.return = B, Le;
      }
      function We(B, K, P, de) {
        for (var Ae = P.key, Le = K; Le !== null; ) {
          if (Le.key === Ae) {
            var st = P.type;
            if (st === ga) {
              if (Le.tag === se) {
                a(B, Le.sibling);
                var ht = o(Le, P.props.children);
                return ht.return = B, ht._debugSource = P._source, ht._debugOwner = P._owner, ht;
              }
            } else if (Le.elementType === st || // Keep this check inline so it only runs on the false path:
            yE(Le, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof st == "object" && st !== null && st.$$typeof === Je && TC(st) === Le.type) {
              a(B, Le.sibling);
              var tn = o(Le, P.props);
              return tn.ref = Pp(B, Le, P), tn.return = B, tn._debugSource = P._source, tn._debugOwner = P._owner, tn;
            }
            a(B, Le);
            break;
          } else
            t(B, Le);
          Le = Le.sibling;
        }
        if (P.type === ga) {
          var Pt = ls(P.props.children, B.mode, de, P.key);
          return Pt.return = B, Pt;
        } else {
          var Jn = P1(P, B.mode, de);
          return Jn.ref = Pp(B, K, P), Jn.return = B, Jn;
        }
      }
      function jt(B, K, P, de) {
        for (var Ae = P.key, Le = K; Le !== null; ) {
          if (Le.key === Ae)
            if (Le.tag === q && Le.stateNode.containerInfo === P.containerInfo && Le.stateNode.implementation === P.implementation) {
              a(B, Le.sibling);
              var st = o(Le, P.children || []);
              return st.return = B, st;
            } else {
              a(B, Le);
              break;
            }
          else
            t(B, Le);
          Le = Le.sibling;
        }
        var ht = I1(P, B.mode, de);
        return ht.return = B, ht;
      }
      function _t(B, K, P, de) {
        var Ae = typeof P == "object" && P !== null && P.type === ga && P.key === null;
        if (Ae && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case yi:
              return f(We(B, K, P, de));
            case zr:
              return f(jt(B, K, P, de));
            case Je:
              var Le = P._payload, st = P._init;
              return _t(B, K, st(Le), de);
          }
          if (Ot(P))
            return Z(B, K, P, de);
          if (ti(P))
            return Ue(B, K, P, de);
          Rm(B, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? f(et(B, K, "" + P, de)) : (typeof P == "function" && Tm(B), a(B, K));
      }
      return _t;
    }
    var Bf = kC(!0), DC = kC(!1);
    function vR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function hR(e, t) {
      for (var a = e.child; a !== null; )
        I3(a, t), a = a.sibling;
    }
    var $p = {}, Zu = Wu($p), Ip = Wu($p), km = Wu($p);
    function Dm(e) {
      if (e === $p)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function _C() {
      var e = Dm(km.current);
      return e;
    }
    function y0(e, t) {
      fa(km, t, e), fa(Ip, e, e), fa(Zu, $p, e);
      var a = _w(t);
      ca(Zu, e), fa(Zu, a, e);
    }
    function Pf(e) {
      ca(Zu, e), ca(Ip, e), ca(km, e);
    }
    function g0() {
      var e = Dm(Zu.current);
      return e;
    }
    function OC(e) {
      Dm(km.current);
      var t = Dm(Zu.current), a = Ow(t, e.type);
      t !== a && (fa(Ip, e, e), fa(Zu, a, e));
    }
    function S0(e) {
      Ip.current === e && (ca(Zu, e), ca(Ip, e));
    }
    var mR = 0, LC = 1, NC = 1, Yp = 2, ul = Wu(mR);
    function C0(e, t) {
      return (e & t) !== 0;
    }
    function $f(e) {
      return e & LC;
    }
    function E0(e, t) {
      return e & LC | t;
    }
    function yR(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      fa(ul, t, e);
    }
    function If(e) {
      ca(ul, e);
    }
    function gR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function _m(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ae) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PS(i) || kg(i))
              return t;
          }
        } else if (t.tag === xe && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & ct) !== Ke;
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
    var Qa = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), Jl = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Ir = (
      /*   */
      8
    ), x0 = [];
    function w0() {
      for (var e = 0; e < x0.length; e++) {
        var t = x0[e];
        t._workInProgressVersionPrimary = null;
      }
      x0.length = 0;
    }
    function SR(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = m.ReactCurrentDispatcher, Wp = m.ReactCurrentBatchConfig, b0, Yf;
    b0 = /* @__PURE__ */ new Set();
    var lc = J, en = null, gr = null, Sr = null, Om = !1, Qp = !1, Gp = 0, CR = 0, ER = 25, te = null, Mi = null, Ju = -1, R0 = !1;
    function Zt() {
      {
        var e = te;
        Mi === null ? Mi = [e] : Mi.push(e);
      }
    }
    function Re() {
      {
        var e = te;
        Mi !== null && (Ju++, Mi[Ju] !== e && xR(e));
      }
    }
    function Wf(e) {
      e != null && !Ot(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function xR(e) {
      {
        var t = pt(en);
        if (!b0.has(t) && (b0.add(t), Mi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Ju; o++) {
            for (var s = Mi[o], f = o === Ju ? e : s, h = o + 1 + ". " + s; h.length < i; )
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
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function T0(e, t) {
      if (R0)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Be(e[a], t[a]))
          return !1;
      return !0;
    }
    function Qf(e, t, a, i, o, s) {
      lc = s, en = t, Mi = e !== null ? e._debugHookTypes : null, Ju = -1, R0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? Me.current = e2 : Mi !== null ? Me.current = JC : Me.current = KC;
      var f = a(i, o);
      if (Qp) {
        var h = 0;
        do {
          if (Qp = !1, Gp = 0, h >= ER)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, R0 = !1, gr = null, Sr = null, t.updateQueue = null, Ju = -1, Me.current = t2, f = a(i, o);
        } while (Qp);
      }
      Me.current = $m, t._debugHookTypes = Mi;
      var y = gr !== null && gr.next !== null;
      if (lc = J, en = null, gr = null, Sr = null, te = null, Mi = null, Ju = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & kt) !== nt && S("Internal React error: Expected static flag was missing. Please notify the React team."), Om = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Gf() {
      var e = Gp !== 0;
      return Gp = 0, e;
    }
    function MC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ha) !== nt ? t.flags &= ~(Eo | aa | Cn | St) : t.flags &= ~(Cn | St), e.lanes = _u(e.lanes, a);
    }
    function jC() {
      if (Me.current = $m, Om) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Om = !1;
      }
      lc = J, en = null, gr = null, Sr = null, Mi = null, Ju = -1, te = null, QC = !1, Qp = !1, Gp = 0;
    }
    function eo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? en.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function ji() {
      var e;
      if (gr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = en.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? en.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function UC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function k0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function D0(e, t, a) {
      var i = eo(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = TR.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function _0(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = gr, f = s.baseQueue, h = o.pending;
      if (h !== null) {
        if (f !== null) {
          var y = f.next, x = h.next;
          f.next = x, h.next = y;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = h, o.pending = null;
      }
      if (f !== null) {
        var w = f.next, H = s.baseState, A = null, Y = null, Q = null, Z = w;
        do {
          var Ue = Z.lane;
          if (Lo(lc, Ue)) {
            if (Q !== null) {
              var We = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nt,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              Q = Q.next = We;
            }
            if (Z.hasEagerState)
              H = Z.eagerState;
            else {
              var jt = Z.action;
              H = e(H, jt);
            }
          } else {
            var et = {
              lane: Ue,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            Q === null ? (Y = Q = et, A = H) : Q = Q.next = et, en.lanes = Ct(en.lanes, Ue), pv(Ue);
          }
          Z = Z.next;
        } while (Z !== null && Z !== w);
        Q === null ? A = H : Q.next = Y, Be(H, i.memoizedState) || tv(), i.memoizedState = H, i.baseState = A, i.baseQueue = Q, o.lastRenderedState = H;
      }
      var _t = o.interleaved;
      if (_t !== null) {
        var B = _t;
        do {
          var K = B.lane;
          en.lanes = Ct(en.lanes, K), pv(K), B = B.next;
        } while (B !== _t);
      } else
        f === null && (o.lanes = J);
      var P = o.dispatch;
      return [i.memoizedState, P];
    }
    function O0(e, t, a) {
      var i = ji(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, h = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var y = f.next, x = y;
        do {
          var w = x.action;
          h = e(h, w), x = x.next;
        } while (x !== y);
        Be(h, i.memoizedState) || tv(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), o.lastRenderedState = h;
      }
      return [h, s];
    }
    function L6(e, t, a) {
    }
    function N6(e, t, a) {
    }
    function L0(e, t, a) {
      var i = en, o = eo(), s, f = $r();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Yf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      } else {
        if (s = t(), !Yf) {
          var h = t();
          Be(s, h) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
        }
        var y = oy();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(y, lc) || AC(i, t, s);
      }
      o.memoizedState = s;
      var x = {
        value: s,
        getSnapshot: t
      };
      return o.queue = x, Um(FC.bind(null, i, x, e), [e]), i.flags |= Cn, qp(mr | Ir, zC.bind(null, i, x, s, t), void 0, null), s;
    }
    function Lm(e, t, a) {
      var i = en, o = ji(), s = t();
      if (!Yf) {
        var f = t();
        Be(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Yf = !0);
      }
      var h = o.memoizedState, y = !Be(h, s);
      y && (o.memoizedState = s, tv());
      var x = o.queue;
      if (Zp(FC.bind(null, i, x, e), [e]), x.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= Cn, qp(mr | Ir, zC.bind(null, i, x, s, t), void 0, null);
        var w = oy();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        zs(w, lc) || AC(i, t, s);
      }
      return s;
    }
    function AC(e, t, a) {
      e.flags |= Ds;
      var i = {
        getSnapshot: t,
        value: a
      }, o = en.updateQueue;
      if (o === null)
        o = UC(), en.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function zC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HC(t) && VC(e);
    }
    function FC(e, t, a) {
      var i = function() {
        HC(t) && VC(e);
      };
      return a(i);
    }
    function HC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Be(a, i);
      } catch {
        return !0;
      }
    }
    function VC(e) {
      var t = Wa(e, ot);
      t !== null && wr(t, e, ot, ln);
    }
    function Nm(e) {
      var t = eo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: k0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = kR.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function N0(e) {
      return _0(k0);
    }
    function M0(e) {
      return O0(k0);
    }
    function qp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = en.updateQueue;
      if (s === null)
        s = UC(), en.updateQueue = s, s.lastEffect = o.next = o;
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
    function j0(e) {
      var t = eo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Mm(e) {
      var t = ji();
      return t.memoizedState;
    }
    function Xp(e, t, a, i) {
      var o = eo(), s = i === void 0 ? null : i;
      en.flags |= e, o.memoizedState = qp(mr | t, a, void 0, s);
    }
    function jm(e, t, a, i) {
      var o = ji(), s = i === void 0 ? null : i, f = void 0;
      if (gr !== null) {
        var h = gr.memoizedState;
        if (f = h.destroy, s !== null) {
          var y = h.deps;
          if (T0(s, y)) {
            o.memoizedState = qp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, o.memoizedState = qp(mr | t, a, f, s);
    }
    function Um(e, t) {
      return (en.mode & Ha) !== nt ? Xp(Eo | Cn | Al, Ir, e, t) : Xp(Cn | Al, Ir, e, t);
    }
    function Zp(e, t) {
      return jm(Cn, Ir, e, t);
    }
    function U0(e, t) {
      return Xp(St, Jl, e, t);
    }
    function Am(e, t) {
      return jm(St, Jl, e, t);
    }
    function A0(e, t) {
      var a = St;
      return a |= ra, (en.mode & Ha) !== nt && (a |= aa), Xp(a, yr, e, t);
    }
    function zm(e, t) {
      return jm(St, yr, e, t);
    }
    function BC(e, t) {
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
    function z0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = St;
      return o |= ra, (en.mode & Ha) !== nt && (o |= aa), Xp(o, yr, BC.bind(null, t, e), i);
    }
    function Fm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return jm(St, yr, BC.bind(null, t, e), i);
    }
    function wR(e, t) {
    }
    var Hm = wR;
    function F0(e, t) {
      var a = eo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Vm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (T0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function H0(e, t) {
      var a = eo(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Bm(e, t) {
      var a = ji(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (T0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function V0(e) {
      var t = eo();
      return t.memoizedState = e, e;
    }
    function PC(e) {
      var t = ji(), a = gr, i = a.memoizedState;
      return IC(t, i, e);
    }
    function $C(e) {
      var t = ji();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return IC(t, a, e);
    }
    function IC(e, t, a) {
      var i = !Wy(lc);
      if (i) {
        if (!Be(a, t)) {
          var o = Kd();
          en.lanes = Ct(en.lanes, o), pv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tv()), e.memoizedState = a, a;
    }
    function bR(e, t, a) {
      var i = Ba();
      Xn(Lr(i, hr)), e(!0);
      var o = Wp.transition;
      Wp.transition = {};
      var s = Wp.transition;
      Wp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Xn(i), Wp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function B0() {
      var e = Nm(!1), t = e[0], a = e[1], i = bR.bind(null, a), o = eo();
      return o.memoizedState = i, [t, i];
    }
    function YC() {
      var e = N0(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    function WC() {
      var e = M0(), t = e[0], a = ji(), i = a.memoizedState;
      return [t, i];
    }
    var QC = !1;
    function RR() {
      return QC;
    }
    function P0() {
      var e = eo(), t = oy(), a = t.identifierPrefix, i;
      if ($r()) {
        var o = Hb();
        i = ":" + a + "R" + o;
        var s = Gp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = CR++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Pm() {
      var e = ji(), t = e.memoizedState;
      return t;
    }
    function TR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        qC(t, o);
      else {
        var s = dC(e, t, o, i);
        if (s !== null) {
          var f = ka();
          wr(s, e, i, f), XC(s, t, i);
        }
      }
      ZC(e, i);
    }
    function kR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = as(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        qC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var h;
            h = Me.current, Me.current = sl;
            try {
              var y = t.lastRenderedState, x = f(y, a);
              if (o.hasEagerState = !0, o.eagerState = x, Be(x, y)) {
                iR(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Me.current = h;
            }
          }
        }
        var w = dC(e, t, o, i);
        if (w !== null) {
          var H = ka();
          wr(w, e, i, H), XC(w, t, i);
        }
      }
      ZC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function qC(e, t) {
      Qp = Om = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function XC(e, t, a) {
      if (Zd(a)) {
        var i = t.lanes;
        i = Jd(i, e.pendingLanes);
        var o = Ct(i, a);
        t.lanes = o, Ou(e, o);
      }
    }
    function ZC(e, t, a) {
      Pl(e, t);
    }
    var $m = {
      readContext: ur,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: ve
    }, KC = null, JC = null, e2 = null, t2 = null, to = null, sl = null, Im = null;
    {
      var $0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      KC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Zt(), Wf(t), F0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Zt(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Zt(), Wf(t), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Zt(), Wf(a), z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Zt(), Wf(t), U0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Zt(), Wf(t), A0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Zt(), Wf(t);
          var a = Me.current;
          Me.current = to;
          try {
            return H0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Zt();
          var i = Me.current;
          Me.current = to;
          try {
            return D0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Zt(), j0(e);
        },
        useState: function(e) {
          te = "useState", Zt();
          var t = Me.current;
          Me.current = to;
          try {
            return Nm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Zt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Zt(), V0(e);
        },
        useTransition: function() {
          return te = "useTransition", Zt(), B0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Zt(), L0(e, t, a);
        },
        useId: function() {
          return te = "useId", Zt(), P0();
        },
        unstable_isNewReconciler: ve
      }, JC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Re(), F0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Re(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Re(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Re(), z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Re(), U0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Re(), A0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Re();
          var a = Me.current;
          Me.current = to;
          try {
            return H0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Re();
          var i = Me.current;
          Me.current = to;
          try {
            return D0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Re(), j0(e);
        },
        useState: function(e) {
          te = "useState", Re();
          var t = Me.current;
          Me.current = to;
          try {
            return Nm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Re(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Re(), V0(e);
        },
        useTransition: function() {
          return te = "useTransition", Re(), B0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Re(), L0(e, t, a);
        },
        useId: function() {
          return te = "useId", Re(), P0();
        },
        unstable_isNewReconciler: ve
      }, e2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Re(), Vm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Re(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Re(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Re(), Fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Re(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Re(), zm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Re();
          var a = Me.current;
          Me.current = sl;
          try {
            return Bm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Re();
          var i = Me.current;
          Me.current = sl;
          try {
            return _0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Re(), Mm();
        },
        useState: function(e) {
          te = "useState", Re();
          var t = Me.current;
          Me.current = sl;
          try {
            return N0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Re(), Hm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Re(), PC(e);
        },
        useTransition: function() {
          return te = "useTransition", Re(), YC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Re(), Lm(e, t);
        },
        useId: function() {
          return te = "useId", Re(), Pm();
        },
        unstable_isNewReconciler: ve
      }, t2 = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Re(), Vm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Re(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Re(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Re(), Fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Re(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Re(), zm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Re();
          var a = Me.current;
          Me.current = Im;
          try {
            return Bm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Re();
          var i = Me.current;
          Me.current = Im;
          try {
            return O0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Re(), Mm();
        },
        useState: function(e) {
          te = "useState", Re();
          var t = Me.current;
          Me.current = Im;
          try {
            return M0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Re(), Hm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Re(), $C(e);
        },
        useTransition: function() {
          return te = "useTransition", Re(), WC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Re(), Lm(e, t);
        },
        useId: function() {
          return te = "useId", Re(), Pm();
        },
        unstable_isNewReconciler: ve
      }, to = {
        readContext: function(e) {
          return $0(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", vt(), Zt(), F0(e, t);
        },
        useContext: function(e) {
          return te = "useContext", vt(), Zt(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", vt(), Zt(), Um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", vt(), Zt(), z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", vt(), Zt(), U0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", vt(), Zt(), A0(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", vt(), Zt();
          var a = Me.current;
          Me.current = to;
          try {
            return H0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", vt(), Zt();
          var i = Me.current;
          Me.current = to;
          try {
            return D0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", vt(), Zt(), j0(e);
        },
        useState: function(e) {
          te = "useState", vt(), Zt();
          var t = Me.current;
          Me.current = to;
          try {
            return Nm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", vt(), Zt(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", vt(), Zt(), V0(e);
        },
        useTransition: function() {
          return te = "useTransition", vt(), Zt(), B0();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", vt(), Zt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", vt(), Zt(), L0(e, t, a);
        },
        useId: function() {
          return te = "useId", vt(), Zt(), P0();
        },
        unstable_isNewReconciler: ve
      }, sl = {
        readContext: function(e) {
          return $0(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", vt(), Re(), Vm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", vt(), Re(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", vt(), Re(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", vt(), Re(), Fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", vt(), Re(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", vt(), Re(), zm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", vt(), Re();
          var a = Me.current;
          Me.current = sl;
          try {
            return Bm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", vt(), Re();
          var i = Me.current;
          Me.current = sl;
          try {
            return _0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", vt(), Re(), Mm();
        },
        useState: function(e) {
          te = "useState", vt(), Re();
          var t = Me.current;
          Me.current = sl;
          try {
            return N0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", vt(), Re(), Hm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", vt(), Re(), PC(e);
        },
        useTransition: function() {
          return te = "useTransition", vt(), Re(), YC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", vt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", vt(), Re(), Lm(e, t);
        },
        useId: function() {
          return te = "useId", vt(), Re(), Pm();
        },
        unstable_isNewReconciler: ve
      }, Im = {
        readContext: function(e) {
          return $0(), ur(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", vt(), Re(), Vm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", vt(), Re(), ur(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", vt(), Re(), Zp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", vt(), Re(), Fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", vt(), Re(), Am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", vt(), Re(), zm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", vt(), Re();
          var a = Me.current;
          Me.current = sl;
          try {
            return Bm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", vt(), Re();
          var i = Me.current;
          Me.current = sl;
          try {
            return O0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", vt(), Re(), Mm();
        },
        useState: function(e) {
          te = "useState", vt(), Re();
          var t = Me.current;
          Me.current = sl;
          try {
            return M0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", vt(), Re(), Hm();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", vt(), Re(), $C(e);
        },
        useTransition: function() {
          return te = "useTransition", vt(), Re(), WC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", vt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", vt(), Re(), Lm(e, t);
        },
        useId: function() {
          return te = "useId", vt(), Re(), Pm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var es = v.unstable_now, n2 = 0, Ym = -1, Kp = -1, Wm = -1, I0 = !1, Qm = !1;
    function r2() {
      return I0;
    }
    function DR() {
      Qm = !0;
    }
    function _R() {
      I0 = !1, Qm = !1;
    }
    function OR() {
      I0 = Qm, Qm = !1;
    }
    function a2() {
      return n2;
    }
    function i2() {
      n2 = es();
    }
    function Y0(e) {
      Kp = es(), e.actualStartTime < 0 && (e.actualStartTime = es());
    }
    function l2(e) {
      Kp = -1;
    }
    function Gm(e, t) {
      if (Kp >= 0) {
        var a = es() - Kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Kp = -1;
      }
    }
    function no(e) {
      if (Ym >= 0) {
        var t = es() - Ym;
        Ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Se:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function W0(e) {
      if (Wm >= 0) {
        var t = es() - Wm;
        Wm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Se:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ro() {
      Ym = es();
    }
    function Q0() {
      Wm = es();
    }
    function G0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: ou(t),
        digest: null
      };
    }
    function q0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function LR(e, t) {
      return !0;
    }
    function X0(e, t) {
      try {
        var a = LR(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(i);
        }
        var h = o ? pt(o) : null, y = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === z)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var w = pt(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + w + ".");
        }
        var H = y + `
` + f + `

` + ("" + x);
        console.error(H);
      } catch (A) {
        setTimeout(function() {
          throw A;
        });
      }
    }
    var NR = typeof WeakMap == "function" ? WeakMap : Map;
    function o2(e, t, a) {
      var i = Qo(ln, a);
      i.tag = Xg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        b3(o), X0(e, t);
      }, i;
    }
    function Z0(e, t, a) {
      var i = Qo(ln, a);
      i.tag = Xg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          gE(e), X0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gE(e), X0(e, t), typeof o != "function" && x3(this);
        var y = t.value, x = t.stack;
        this.componentDidCatch(y, {
          componentStack: x !== null ? x : ""
        }), typeof o != "function" && (sa(e.lanes, ot) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", pt(e) || "Unknown"));
      }), i;
    }
    function u2(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new NR(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = R3.bind(null, e, t, a);
        vr && vv(e, a), t.then(s, s);
      }
    }
    function MR(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function jR(e, t) {
      var a = e.tag;
      if ((e.mode & kt) === nt && (a === D || a === ye || a === ce)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function s2(e) {
      var t = e;
      do {
        if (t.tag === ae && gR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function c2(e, t, a, i, o) {
      if ((e.mode & kt) === nt) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= ct, a.flags |= _s, a.flags &= ~(Nc | Sa), a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ie;
            else {
              var f = Qo(ln, ot);
              f.tag = gm, Xu(a, f, ot);
            }
          }
          a.lanes = Ct(a.lanes, ot);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = o, e;
    }
    function UR(e, t, a, i, o) {
      if (a.flags |= Sa, vr && vv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        jR(a), $r() && a.mode & kt && eC();
        var f = s2(t);
        if (f !== null) {
          f.flags &= ~On, c2(f, t, a, e, o), f.mode & kt && u2(e, s, o), MR(f, e, s);
          return;
        } else {
          if (!Du(o)) {
            u2(e, s, o), O1();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if ($r() && a.mode & kt) {
        eC();
        var y = s2(t);
        if (y !== null) {
          (y.flags & rr) === Ke && (y.flags |= On), c2(y, t, a, e, o), $g(oc(i, a));
          return;
        }
      }
      i = oc(i, a), v3(i);
      var x = t;
      do {
        switch (x.tag) {
          case z: {
            var w = i;
            x.flags |= rr;
            var H = qn(o);
            x.lanes = Ct(x.lanes, H);
            var A = o2(x, w, H);
            Jg(x, A);
            return;
          }
          case M:
            var Y = i, Q = x.type, Z = x.stateNode;
            if ((x.flags & ct) === Ke && (typeof Q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !sE(Z))) {
              x.flags |= rr;
              var Ue = qn(o);
              x.lanes = Ct(x.lanes, Ue);
              var et = Z0(x, Y, Ue);
              Jg(x, et);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function AR() {
      return null;
    }
    var Jp = m.ReactCurrentOwner, cl = !1, K0, ev, J0, e1, t1, uc, n1, qm;
    K0 = {}, ev = {}, J0 = {}, e1 = {}, t1 = {}, uc = !1, n1 = {}, qm = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = DC(t, null, a, i) : t.child = Bf(t, e.child, a, i);
    }
    function zR(e, t, a, i) {
      t.child = Bf(t, e.child, null, i), t.child = Bf(t, null, a, i);
    }
    function f2(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var f = a.render, h = t.ref, y, x;
      Vf(t, o), Bl(t);
      {
        if (Jp.current = t, ea(!0), y = Qf(e, t, f, i, h, o), x = Gf(), t.mode & Rn) {
          Gn(!0);
          try {
            y = Qf(e, t, f, i, h, o), x = Gf();
          } finally {
            Gn(!1);
          }
        }
        ea(!1);
      }
      return xo(), e !== null && !cl ? (MC(e, t, o), Go(e, t, o)) : ($r() && x && zg(t), t.flags |= jl, Ra(e, t, y, o), t.child);
    }
    function d2(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (P3(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nd(s), t.tag = ce, t.type = f, i1(t, s), p2(e, t, f, i, o);
        }
        {
          var h = s.propTypes;
          h && al(
            h,
            i,
            // Resolved props
            "prop",
            Ft(s)
          );
        }
        var y = B1(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var x = a.type, w = x.propTypes;
        w && al(
          w,
          i,
          // Resolved props
          "prop",
          Ft(x)
        );
      }
      var H = e.child, A = f1(e, o);
      if (!A) {
        var Y = H.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Xe, Q(Y, i) && e.ref === t.ref)
          return Go(e, t, o);
      }
      t.flags |= jl;
      var Z = pc(H, i);
      return Z.ref = t.ref, Z.return = t, t.child = Z, Z;
    }
    function p2(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Je) {
          var f = s, h = f._payload, y = f._init;
          try {
            s = y(h);
          } catch {
            s = null;
          }
          var x = s && s.propTypes;
          x && al(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ft(s)
          );
        }
      }
      if (e !== null) {
        var w = e.memoizedProps;
        if (Xe(w, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = w, f1(e, o))
            (e.flags & _s) !== Ke && (cl = !0);
          else
            return t.lanes = e.lanes, Go(e, t, o);
      }
      return r1(e, t, a, i, o);
    }
    function v2(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || N)
        if ((t.mode & kt) === nt) {
          var f = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, uy(t, a);
        } else if (sa(a, ua)) {
          var H = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = H;
          var A = s !== null ? s.baseLanes : a;
          uy(t, A);
        } else {
          var h = null, y;
          if (s !== null) {
            var x = s.baseLanes;
            y = Ct(x, a);
          } else
            y = a;
          t.lanes = t.childLanes = ua;
          var w = {
            baseLanes: y,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = w, t.updateQueue = null, uy(t, y), null;
        }
      else {
        var Y;
        s !== null ? (Y = Ct(s.baseLanes, a), t.memoizedState = null) : Y = a, uy(t, Y);
      }
      return Ra(e, t, o, a), t.child;
    }
    function FR(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function HR(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function VR(e, t, a) {
      {
        t.flags |= St;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ra(e, t, s, a), t.child;
    }
    function h2(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= na, t.flags |= Ad);
    }
    function r1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          Ft(a)
        );
      }
      var f;
      {
        var h = jf(t, a, !0);
        f = Uf(t, h);
      }
      var y, x;
      Vf(t, o), Bl(t);
      {
        if (Jp.current = t, ea(!0), y = Qf(e, t, a, i, f, o), x = Gf(), t.mode & Rn) {
          Gn(!0);
          try {
            y = Qf(e, t, a, i, f, o), x = Gf();
          } finally {
            Gn(!1);
          }
        }
        ea(!1);
      }
      return xo(), e !== null && !cl ? (MC(e, t, o), Go(e, t, o)) : ($r() && x && zg(t), t.flags |= jl, Ra(e, t, y, o), t.child);
    }
    function m2(e, t, a, i, o) {
      {
        switch (r5(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, h = new f(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= ct, t.flags |= rr;
            var x = new Error("Simulated error coming from DevTools"), w = qn(o);
            t.lanes = Ct(t.lanes, w);
            var H = Z0(t, oc(x, t), w);
            Jg(t, H);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var A = a.propTypes;
          A && al(
            A,
            i,
            // Resolved props
            "prop",
            Ft(a)
          );
        }
      }
      var Y;
      Kl(a) ? (Y = !0, om(t)) : Y = !1, Vf(t, o);
      var Q = t.stateNode, Z;
      Q === null ? (Zm(e, t), wC(t, a, i), f0(t, a, i, o), Z = !0) : e === null ? Z = dR(t, a, i, o) : Z = pR(e, t, a, i, o);
      var Ue = a1(e, t, a, Z, Y, o);
      {
        var et = t.stateNode;
        Z && et.props !== i && (uc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", pt(t) || "a component"), uc = !0);
      }
      return Ue;
    }
    function a1(e, t, a, i, o, s) {
      h2(e, t);
      var f = (t.flags & ct) !== Ke;
      if (!i && !f)
        return o && XS(t, a, !1), Go(e, t, s);
      var h = t.stateNode;
      Jp.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, l2();
      else {
        Bl(t);
        {
          if (ea(!0), y = h.render(), t.mode & Rn) {
            Gn(!0);
            try {
              h.render();
            } finally {
              Gn(!1);
            }
          }
          ea(!1);
        }
        xo();
      }
      return t.flags |= jl, e !== null && f ? zR(e, t, y, s) : Ra(e, t, y, s), t.memoizedState = h.state, o && XS(t, a, !0), t.child;
    }
    function y2(e) {
      var t = e.stateNode;
      t.pendingContext ? GS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && GS(e, t.context, !1), y0(e, t.containerInfo);
    }
    function BR(e, t, a) {
      if (y2(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      hC(e, t), xm(t, i, null, a);
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
        }, x = t.updateQueue;
        if (x.baseState = y, t.memoizedState = y, t.flags & On) {
          var w = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return g2(e, t, h, a, w);
        } else if (h !== s) {
          var H = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return g2(e, t, h, a, H);
        } else {
          Yb(t);
          var A = DC(t, null, h, a);
          t.child = A;
          for (var Y = A; Y; )
            Y.flags = Y.flags & ~vn | Aa, Y = Y.sibling;
        }
      } else {
        if (Ff(), h === s)
          return Go(e, t, a);
        Ra(e, t, h, a);
      }
      return t.child;
    }
    function g2(e, t, a, i, o) {
      return Ff(), $g(o), t.flags |= On, Ra(e, t, a, i), t.child;
    }
    function PR(e, t, a) {
      OC(t), e === null && Pg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, h = wg(i, o);
      return h ? f = null : s !== null && wg(i, s) && (t.flags |= Xt), h2(e, t), Ra(e, t, f, a), t.child;
    }
    function $R(e, t) {
      return e === null && Pg(t), null;
    }
    function IR(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s = a, f = s._payload, h = s._init, y = h(f);
      t.type = y;
      var x = t.tag = $3(y), w = ol(y, o), H;
      switch (x) {
        case D:
          return i1(t, y), t.type = y = nd(y), H = r1(null, t, y, w, i), H;
        case M:
          return t.type = y = U1(y), H = m2(null, t, y, w, i), H;
        case ye:
          return t.type = y = A1(y), H = f2(null, t, y, w, i), H;
        case ue: {
          if (t.type !== t.elementType) {
            var A = y.propTypes;
            A && al(
              A,
              w,
              // Resolved for outer only
              "prop",
              Ft(y)
            );
          }
          return H = d2(
            null,
            t,
            y,
            ol(y.type, w),
            // The inner type can have defaults too
            i
          ), H;
        }
      }
      var Y = "";
      throw y !== null && typeof y == "object" && y.$$typeof === Je && (Y = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + Y));
    }
    function YR(e, t, a, i, o) {
      Zm(e, t), t.tag = M;
      var s;
      return Kl(a) ? (s = !0, om(t)) : s = !1, Vf(t, o), wC(t, a, i), f0(t, a, i, o), a1(null, t, a, !0, s, o);
    }
    function WR(e, t, a, i) {
      Zm(e, t);
      var o = t.pendingProps, s;
      {
        var f = jf(t, a, !1);
        s = Uf(t, f);
      }
      Vf(t, i);
      var h, y;
      Bl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = Ft(a) || "Unknown";
          K0[x] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), K0[x] = !0);
        }
        t.mode & Rn && ll.recordLegacyContextWarning(t, null), ea(!0), Jp.current = t, h = Qf(null, t, a, o, s, i), y = Gf(), ea(!1);
      }
      if (xo(), t.flags |= jl, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var w = Ft(a) || "Unknown";
        ev[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), ev[w] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var H = Ft(a) || "Unknown";
          ev[H] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", H, H, H), ev[H] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var A = !1;
        return Kl(a) ? (A = !0, om(t)) : A = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Kg(t), xC(t, h), f0(t, a, o, i), a1(null, t, a, !0, A, i);
      } else {
        if (t.tag = D, t.mode & Rn) {
          Gn(!0);
          try {
            h = Qf(null, t, a, o, s, i), y = Gf();
          } finally {
            Gn(!1);
          }
        }
        return $r() && y && zg(t), Ra(null, t, h, i), i1(t, a), t.child;
      }
    }
    function i1(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Vr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), t1[o] || (t1[o] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Ft(t) || "Unknown";
          e1[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), e1[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Ft(t) || "Unknown";
          J0[h] || (S("%s: Function components do not support contextType.", h), J0[h] = !0);
        }
      }
    }
    var l1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Nt
    };
    function o1(e) {
      return {
        baseLanes: e,
        cachePool: AR(),
        transitions: null
      };
    }
    function QR(e, t) {
      var a = null;
      return {
        baseLanes: Ct(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function GR(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return C0(e, Yp);
    }
    function qR(e, t) {
      return _u(e.childLanes, t);
    }
    function S2(e, t, a) {
      var i = t.pendingProps;
      a5(t) && (t.flags |= ct);
      var o = ul.current, s = !1, f = (t.flags & ct) !== Ke;
      if (f || GR(o, e) ? (s = !0, t.flags &= ~ct) : (e === null || e.memoizedState !== null) && (o = yR(o, NC)), o = $f(o), Ku(t, o), e === null) {
        Pg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return eT(t, y);
        }
        var x = i.children, w = i.fallback;
        if (s) {
          var H = XR(t, x, w, a), A = t.child;
          return A.memoizedState = o1(a), t.memoizedState = l1, H;
        } else
          return u1(t, x);
      } else {
        var Y = e.memoizedState;
        if (Y !== null) {
          var Q = Y.dehydrated;
          if (Q !== null)
            return tT(e, t, f, i, Q, Y, a);
        }
        if (s) {
          var Z = i.fallback, Ue = i.children, et = KR(e, t, Ue, Z, a), We = t.child, jt = e.child.memoizedState;
          return We.memoizedState = jt === null ? o1(a) : QR(jt, a), We.childLanes = qR(e, a), t.memoizedState = l1, et;
        } else {
          var _t = i.children, B = ZR(e, t, _t, a);
          return t.memoizedState = null, B;
        }
      }
    }
    function u1(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = s1(o, i);
      return s.return = e, e.child = s, s;
    }
    function XR(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, h, y;
      return (o & kt) === nt && s !== null ? (h = s, h.childLanes = J, h.pendingProps = f, e.mode & lt && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = ls(a, o, i, null)) : (h = s1(f, o), y = ls(a, o, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function s1(e, t, a) {
      return CE(e, t, J, null);
    }
    function C2(e, t) {
      return pc(e, t);
    }
    function ZR(e, t, a, i) {
      var o = e.child, s = o.sibling, f = C2(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & kt) === nt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Yt) : h.push(s);
      }
      return t.child = f, f;
    }
    function KR(e, t, a, i, o) {
      var s = t.mode, f = e.child, h = f.sibling, y = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & kt) === nt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var w = t.child;
        x = w, x.childLanes = J, x.pendingProps = y, t.mode & lt && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = f.selfBaseDuration, x.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        x = C2(f, y), x.subtreeFlags = f.subtreeFlags & pr;
      var H;
      return h !== null ? H = pc(h, i) : (H = ls(i, s, o, null), H.flags |= vn), H.return = t, x.return = t, x.sibling = H, t.child = x, H;
    }
    function Xm(e, t, a, i) {
      i !== null && $g(i), Bf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = u1(t, s);
      return f.flags |= vn, t.memoizedState = null, f;
    }
    function JR(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, h = s1(f, s), y = ls(i, s, o, null);
      return y.flags |= vn, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & kt) !== nt && Bf(t, e.child, null, o), y;
    }
    function eT(e, t, a) {
      return (e.mode & kt) === nt ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ot) : kg(t) ? e.lanes = Ro : e.lanes = ua, null;
    }
    function tT(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & On) {
          t.flags &= ~On;
          var B = q0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Xm(e, t, f, B);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ct, null;
          var K = i.children, P = i.fallback, de = JR(e, t, K, P, f), Ae = t.child;
          return Ae.memoizedState = o1(f), t.memoizedState = l1, de;
        }
      else {
        if ($b(), (t.mode & kt) === nt)
          return Xm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (kg(o)) {
          var h, y, x;
          {
            var w = lb(o);
            h = w.digest, y = w.message, x = w.stack;
          }
          var H;
          y ? H = new Error(y) : H = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var A = q0(H, h, x);
          return Xm(e, t, f, A);
        }
        var Y = sa(f, e.childLanes);
        if (cl || Y) {
          var Q = oy();
          if (Q !== null) {
            var Z = Gy(Q, f);
            if (Z !== Nt && Z !== s.retryLane) {
              s.retryLane = Z;
              var Ue = ln;
              Wa(e, Z), wr(Q, e, Z, Ue);
            }
          }
          O1();
          var et = q0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Xm(e, t, f, et);
        } else if (PS(o)) {
          t.flags |= ct, t.child = e.child;
          var We = T3.bind(null, e);
          return ob(o, We), null;
        } else {
          Wb(t, o, s.treeContext);
          var jt = i.children, _t = u1(t, jt);
          return _t.flags |= Aa, _t;
        }
      }
    }
    function E2(e, t, a) {
      e.lanes = Ct(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ct(i.lanes, t)), Gg(e.return, t, a);
    }
    function nT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ae) {
          var o = i.memoizedState;
          o !== null && E2(i, a, e);
        } else if (i.tag === xe)
          E2(i, a, e);
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
    function rT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && _m(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function aT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !n1[e])
        if (n1[e] = !0, typeof e == "string")
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
    function iT(e, t) {
      e !== void 0 && !qm[e] && (e !== "collapsed" && e !== "hidden" ? (qm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function x2(e, t) {
      {
        var a = Ot(e), i = !a && typeof ti(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function lT(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ot(e)) {
          for (var a = 0; a < e.length; a++)
            if (!x2(e[a], a))
              return;
        } else {
          var i = ti(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!x2(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function c1(e, t, a, i, o) {
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
    function w2(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      aT(o), iT(s, o), lT(f, o), Ra(e, t, f, a);
      var h = ul.current, y = C0(h, Yp);
      if (y)
        h = E0(h, Yp), t.flags |= ct;
      else {
        var x = e !== null && (e.flags & ct) !== Ke;
        x && nT(t, t.child, a), h = $f(h);
      }
      if (Ku(t, h), (t.mode & kt) === nt)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var w = rT(t.child), H;
            w === null ? (H = t.child, t.child = null) : (H = w.sibling, w.sibling = null), c1(
              t,
              !1,
              // isBackwards
              H,
              w,
              s
            );
            break;
          }
          case "backwards": {
            var A = null, Y = t.child;
            for (t.child = null; Y !== null; ) {
              var Q = Y.alternate;
              if (Q !== null && _m(Q) === null) {
                t.child = Y;
                break;
              }
              var Z = Y.sibling;
              Y.sibling = A, A = Y, Y = Z;
            }
            c1(
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
            c1(
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
    function oT(e, t, a) {
      y0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Bf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var b2 = !1;
    function uT(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, h = s.value;
      {
        "value" in s || b2 || (b2 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && al(y, s, "prop", "Context.Provider");
      }
      if (fC(t, o, h), f !== null) {
        var x = f.value;
        if (Be(x, h)) {
          if (f.children === s.children && !im())
            return Go(e, t, a);
        } else
          nR(t, o, a);
      }
      var w = s.children;
      return Ra(e, t, w, a), t.child;
    }
    var R2 = !1;
    function sT(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R2 || (R2 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Vf(t, a);
      var f = ur(i);
      Bl(t);
      var h;
      return Jp.current = t, ea(!0), h = s(f), ea(!1), xo(), t.flags |= jl, Ra(e, t, h, a), t.child;
    }
    function tv() {
      cl = !0;
    }
    function Zm(e, t) {
      (t.mode & kt) === nt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= vn);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), l2(), pv(t.lanes), sa(a, t.childLanes) ? (vR(e, t), t.child) : null;
    }
    function cT(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Yt) : s.push(e), a.flags |= vn, a;
      }
    }
    function f1(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function fT(e, t, a) {
      switch (t.tag) {
        case z:
          y2(t), t.stateNode, Ff();
          break;
        case I:
          OC(t);
          break;
        case M: {
          var i = t.type;
          Kl(i) && om(t);
          break;
        }
        case q:
          y0(t, t.stateNode.containerInfo);
          break;
        case ge: {
          var o = t.memoizedProps.value, s = t.type._context;
          fC(t, s, o);
          break;
        }
        case Se:
          {
            var f = sa(a, t.childLanes);
            f && (t.flags |= St);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case ae: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Ku(t, $f(ul.current)), t.flags |= ct, null;
            var x = t.child, w = x.childLanes;
            if (sa(a, w))
              return S2(e, t, a);
            Ku(t, $f(ul.current));
            var H = Go(e, t, a);
            return H !== null ? H.sibling : null;
          } else
            Ku(t, $f(ul.current));
          break;
        }
        case xe: {
          var A = (e.flags & ct) !== Ke, Y = sa(a, t.childLanes);
          if (A) {
            if (Y)
              return w2(e, t, a);
            t.flags |= ct;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), Ku(t, ul.current), Y)
            break;
          return null;
        }
        case Te:
        case Ze:
          return t.lanes = J, v2(e, t, a);
      }
      return Go(e, t, a);
    }
    function T2(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return cT(e, t, B1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || im() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = f1(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ct) === Ke)
            return cl = !1, fT(e, t, a);
          (e.flags & _s) !== Ke ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, $r() && zb(t)) {
        var f = t.index, h = Fb();
        JS(t, h, f);
      }
      switch (t.lanes = J, t.tag) {
        case L:
          return WR(e, t, t.type, a);
        case He: {
          var y = t.elementType;
          return IR(e, t, y, a);
        }
        case D: {
          var x = t.type, w = t.pendingProps, H = t.elementType === x ? w : ol(x, w);
          return r1(e, t, x, H, a);
        }
        case M: {
          var A = t.type, Y = t.pendingProps, Q = t.elementType === A ? Y : ol(A, Y);
          return m2(e, t, A, Q, a);
        }
        case z:
          return BR(e, t, a);
        case I:
          return PR(e, t, a);
        case ee:
          return $R(e, t);
        case ae:
          return S2(e, t, a);
        case q:
          return oT(e, t, a);
        case ye: {
          var Z = t.type, Ue = t.pendingProps, et = t.elementType === Z ? Ue : ol(Z, Ue);
          return f2(e, t, Z, et, a);
        }
        case se:
          return FR(e, t, a);
        case re:
          return HR(e, t, a);
        case Se:
          return VR(e, t, a);
        case ge:
          return uT(e, t, a);
        case pe:
          return sT(e, t, a);
        case ue: {
          var We = t.type, jt = t.pendingProps, _t = ol(We, jt);
          if (t.type !== t.elementType) {
            var B = We.propTypes;
            B && al(
              B,
              _t,
              // Resolved for outer only
              "prop",
              Ft(We)
            );
          }
          return _t = ol(We.type, _t), d2(e, t, We, _t, a);
        }
        case ce:
          return p2(e, t, t.type, t.pendingProps, a);
        case Ie: {
          var K = t.type, P = t.pendingProps, de = t.elementType === K ? P : ol(K, P);
          return YR(e, t, K, de, a);
        }
        case xe:
          return w2(e, t, a);
        case rt:
          break;
        case Te:
          return v2(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= St;
    }
    function k2(e) {
      e.flags |= na, e.flags |= Ad;
    }
    var D2, d1, _2, O2;
    D2 = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === I || o.tag === ee)
          jw(e, o.stateNode);
        else if (o.tag !== q) {
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
    }, d1 = function(e, t) {
    }, _2 = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, h = g0(), y = Aw(f, a, s, i, o, h);
        t.updateQueue = y, y && qf(t);
      }
    }, O2 = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function nv(e, t) {
      if (!$r())
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
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = Ke;
      if (t) {
        if ((e.mode & lt) !== nt) {
          for (var y = e.selfBaseDuration, x = e.child; x !== null; )
            a = Ct(a, Ct(x.lanes, x.childLanes)), i |= x.subtreeFlags & pr, i |= x.flags & pr, y += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = y;
        } else
          for (var w = e.child; w !== null; )
            a = Ct(a, Ct(w.lanes, w.childLanes)), i |= w.subtreeFlags & pr, i |= w.flags & pr, w.return = e, w = w.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & lt) !== nt) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ct(a, Ct(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = Ct(a, Ct(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function dT(e, t, a) {
      if (Zb() && (t.mode & kt) !== nt && (t.flags & ct) === Ke)
        return lC(t), Ff(), t.flags |= On | Sa | rr, !1;
      var i = dm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (qb(t), Yr(t), (t.mode & lt) !== nt) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ff(), (t.flags & ct) === Ke && (t.memoizedState = null), t.flags |= St, Yr(t), (t.mode & lt) !== nt) {
            var f = a !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oC(), !0;
    }
    function L2(e, t, a) {
      var i = t.pendingProps;
      switch (Fg(t), t.tag) {
        case L:
        case He:
        case ce:
        case D:
        case ye:
        case se:
        case re:
        case Se:
        case pe:
        case ue:
          return Yr(t), null;
        case M: {
          var o = t.type;
          return Kl(o) && lm(t), Yr(t), null;
        }
        case z: {
          var s = t.stateNode;
          if (Pf(t), jg(t), w0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = dm(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & On) !== Ke) && (t.flags |= Ua, oC());
            }
          }
          return d1(e, t), Yr(t), null;
        }
        case I: {
          S0(t);
          var y = _C(), x = t.type;
          if (e !== null && t.stateNode != null)
            _2(e, t, x, i, y), e.ref !== t.ref && k2(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var w = g0(), H = dm(t);
            if (H)
              Qb(t, y, w) && qf(t);
            else {
              var A = Mw(x, i, y, w, t);
              D2(A, t, !1, !1), t.stateNode = A, Uw(A, x, i, y) && qf(t);
            }
            t.ref !== null && k2(t);
          }
          return Yr(t), null;
        }
        case ee: {
          var Y = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            O2(e, t, Q, Y);
          } else {
            if (typeof Y != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = _C(), Ue = g0(), et = dm(t);
            et ? Gb(t) && qf(t) : t.stateNode = zw(Y, Z, Ue, t);
          }
          return Yr(t), null;
        }
        case ae: {
          If(t);
          var We = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var jt = dT(e, t, We);
            if (!jt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & ct) !== Ke)
            return t.lanes = a, (t.mode & lt) !== nt && G0(t), t;
          var _t = We !== null, B = e !== null && e.memoizedState !== null;
          if (_t !== B && _t) {
            var K = t.child;
            if (K.flags |= Ul, (t.mode & kt) !== nt) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ne);
              P || C0(ul.current, NC) ? p3() : O1();
            }
          }
          var de = t.updateQueue;
          if (de !== null && (t.flags |= St), Yr(t), (t.mode & lt) !== nt && _t) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case q:
          return Pf(t), d1(e, t), e === null && Ob(t.stateNode.containerInfo), Yr(t), null;
        case ge:
          var Le = t.type._context;
          return Qg(Le, t), Yr(t), null;
        case Ie: {
          var st = t.type;
          return Kl(st) && lm(t), Yr(t), null;
        }
        case xe: {
          If(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Yr(t), null;
          var tn = (t.flags & ct) !== Ke, Pt = ht.rendering;
          if (Pt === null)
            if (tn)
              nv(ht, !1);
            else {
              var Jn = h3() && (e === null || (e.flags & ct) === Ke);
              if (!Jn)
                for (var $t = t.child; $t !== null; ) {
                  var Wn = _m($t);
                  if (Wn !== null) {
                    tn = !0, t.flags |= ct, nv(ht, !1);
                    var pa = Wn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= St), t.subtreeFlags = Ke, hR(t, a), Ku(t, E0(ul.current, Yp)), t.child;
                  }
                  $t = $t.sibling;
                }
              ht.tail !== null && bn() > K2() && (t.flags |= ct, tn = !0, nv(ht, !1), t.lanes = qd);
            }
          else {
            if (!tn) {
              var Xr = _m(Pt);
              if (Xr !== null) {
                t.flags |= ct, tn = !0;
                var di = Xr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= St), nv(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !Pt.alternate && !$r())
                  return Yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                bn() * 2 - ht.renderingStartTime > K2() && a !== ua && (t.flags |= ct, tn = !0, nv(ht, !1), t.lanes = qd);
            }
            if (ht.isBackwards)
              Pt.sibling = t.child, t.child = Pt;
            else {
              var Da = ht.last;
              Da !== null ? Da.sibling = Pt : t.child = Pt, ht.last = Pt;
            }
          }
          if (ht.tail !== null) {
            var _a = ht.tail;
            ht.rendering = _a, ht.tail = _a.sibling, ht.renderingStartTime = bn(), _a.sibling = null;
            var va = ul.current;
            return tn ? va = E0(va, Yp) : va = $f(va), Ku(t, va), _a;
          }
          return Yr(t), null;
        }
        case rt:
          break;
        case Te:
        case Ze: {
          _1(t);
          var Jo = t.memoizedState, rd = Jo !== null;
          if (e !== null) {
            var gv = e.memoizedState, lo = gv !== null;
            lo !== rd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !N && (t.flags |= Ul);
          }
          return !rd || (t.mode & kt) === nt ? Yr(t) : sa(io, ua) && (Yr(t), t.subtreeFlags & (vn | St) && (t.flags |= Ul)), null;
        }
        case Et:
          return null;
        case Qe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function pT(e, t, a) {
      switch (Fg(t), t.tag) {
        case M: {
          var i = t.type;
          Kl(i) && lm(t);
          var o = t.flags;
          return o & rr ? (t.flags = o & ~rr | ct, (t.mode & lt) !== nt && G0(t), t) : null;
        }
        case z: {
          t.stateNode, Pf(t), jg(t), w0();
          var s = t.flags;
          return (s & rr) !== Ke && (s & ct) === Ke ? (t.flags = s & ~rr | ct, t) : null;
        }
        case I:
          return S0(t), null;
        case ae: {
          If(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ff();
          }
          var h = t.flags;
          return h & rr ? (t.flags = h & ~rr | ct, (t.mode & lt) !== nt && G0(t), t) : null;
        }
        case xe:
          return If(t), null;
        case q:
          return Pf(t), null;
        case ge:
          var y = t.type._context;
          return Qg(y, t), null;
        case Te:
        case Ze:
          return _1(t), null;
        case Et:
          return null;
        default:
          return null;
      }
    }
    function N2(e, t, a) {
      switch (Fg(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && lm(t);
          break;
        }
        case z: {
          t.stateNode, Pf(t), jg(t), w0();
          break;
        }
        case I: {
          S0(t);
          break;
        }
        case q:
          Pf(t);
          break;
        case ae:
          If(t);
          break;
        case xe:
          If(t);
          break;
        case ge:
          var o = t.type._context;
          Qg(o, t);
          break;
        case Te:
        case Ze:
          _1(t);
          break;
      }
    }
    var M2 = null;
    M2 = /* @__PURE__ */ new Set();
    var Km = !1, Wr = !1, vT = typeof WeakSet == "function" ? WeakSet : Set, Pe = null, Xf = null, Zf = null;
    function hT(e) {
      Co(null, function() {
        throw e;
      }), jd();
    }
    var mT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & lt)
        try {
          ro(), t.componentWillUnmount();
        } finally {
          no(e);
        }
      else
        t.componentWillUnmount();
    };
    function j2(e, t) {
      try {
        ts(yr, e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function p1(e, t, a) {
      try {
        mT(e, a);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function yT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        gn(e, t, i);
      }
    }
    function U2(e, t) {
      try {
        z2(e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function Kf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && xt && e.mode & lt)
              try {
                ro(), i = a(null);
              } finally {
                no(e);
              }
            else
              i = a(null);
          } catch (o) {
            gn(e, t, o);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          a.current = null;
    }
    function Jm(e, t, a) {
      try {
        a();
      } catch (i) {
        gn(e, t, i);
      }
    }
    var A2 = !1;
    function gT(e, t) {
      Lw(e.containerInfo), Pe = t, ST();
      var a = A2;
      return A2 = !1, a;
    }
    function ST() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        (e.subtreeFlags & Eu) !== Ke && t !== null ? (t.return = e, Pe = t) : CT();
      }
    }
    function CT() {
      for (; Pe !== null; ) {
        var e = Pe;
        qt(e);
        try {
          ET(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        _n();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function ET(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ke) {
        switch (qt(e), e.tag) {
          case D:
          case ye:
          case ce:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !uc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ol(e.type, i), o);
              {
                var h = M2;
                f === void 0 && !h.has(e.type) && (h.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", pt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case z: {
            {
              var y = e.stateNode;
              nb(y.containerInfo);
            }
            break;
          }
          case I:
          case ee:
          case q:
          case Ie:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        _n();
      }
    }
    function fl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && ((e & Ir) !== Qa ? Vc(t) : (e & yr) !== Qa && Bc(t), (e & Jl) !== Qa && hv(!0), Jm(t, a, h), (e & Jl) !== Qa && hv(!1), (e & Ir) !== Qa ? fh() : (e & yr) !== Qa && xu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function ts(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Ir) !== Qa ? ch(t) : (e & yr) !== Qa && dh(t);
            var f = s.create;
            (e & Jl) !== Qa && hv(!0), s.destroy = f(), (e & Jl) !== Qa && hv(!1), (e & Ir) !== Qa ? Wd() : (e & yr) !== Qa && ph();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & yr) !== Ke ? y = "useLayoutEffect" : (s.tag & Jl) !== Ke ? y = "useInsertionEffect" : y = "useEffect";
                var x = void 0;
                h === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? x = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + h, S("%s must not return anything besides a function, which is used for clean-up.%s", y, x);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function xT(e, t) {
      if ((t.flags & St) !== Ke)
        switch (t.tag) {
          case Se: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = a2(), h = t.alternate === null ? "mount" : "update";
            r2() && (h = "nested-update"), typeof s == "function" && s(o, h, a, f);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case z:
                    var x = y.stateNode;
                    x.passiveEffectDuration += a;
                    break e;
                  case Se:
                    var w = y.stateNode;
                    w.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function wT(e, t, a, i) {
      if ((a.flags & _r) !== Ke)
        switch (a.tag) {
          case D:
          case ye:
          case ce: {
            if (!Wr)
              if (a.mode & lt)
                try {
                  ro(), ts(yr | mr, a);
                } finally {
                  no(a);
                }
              else
                ts(yr | mr, a);
            break;
          }
          case M: {
            var o = a.stateNode;
            if (a.flags & St && !Wr)
              if (t === null)
                if (a.type === a.elementType && !uc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & lt)
                  try {
                    ro(), o.componentDidMount();
                  } finally {
                    no(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ol(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !uc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), a.mode & lt)
                  try {
                    ro(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    no(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !uc && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", pt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", pt(a) || "instance")), yC(a, h, o));
            break;
          }
          case z: {
            var y = a.updateQueue;
            if (y !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
                    x = a.child.stateNode;
                    break;
                  case M:
                    x = a.child.stateNode;
                    break;
                }
              yC(a, y, x);
            }
            break;
          }
          case I: {
            var w = a.stateNode;
            if (t === null && a.flags & St) {
              var H = a.type, A = a.memoizedProps;
              Pw(w, H, A);
            }
            break;
          }
          case ee:
            break;
          case q:
            break;
          case Se: {
            {
              var Y = a.memoizedProps, Q = Y.onCommit, Z = Y.onRender, Ue = a.stateNode.effectDuration, et = a2(), We = t === null ? "mount" : "update";
              r2() && (We = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, We, a.actualDuration, a.treeBaseDuration, a.actualStartTime, et);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, We, Ue, et), C3(a);
                var jt = a.return;
                e:
                  for (; jt !== null; ) {
                    switch (jt.tag) {
                      case z:
                        var _t = jt.stateNode;
                        _t.effectDuration += Ue;
                        break e;
                      case Se:
                        var B = jt.stateNode;
                        B.effectDuration += Ue;
                        break e;
                    }
                    jt = jt.return;
                  }
              }
            }
            break;
          }
          case ae: {
            LT(e, a);
            break;
          }
          case xe:
          case Ie:
          case rt:
          case Te:
          case Ze:
          case Qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & na && z2(a);
    }
    function bT(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          if (e.mode & lt)
            try {
              ro(), j2(e, e.return);
            } finally {
              no(e);
            }
          else
            j2(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && yT(e, e.return, t), U2(e, e.return);
          break;
        }
        case I: {
          U2(e, e.return);
          break;
        }
      }
    }
    function RT(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Kw(o) : eb(i.stateNode, i.memoizedProps);
            } catch (f) {
              gn(e, e.return, f);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Jw(s) : tb(s, i.memoizedProps);
            } catch (f) {
              gn(e, e.return, f);
            }
        } else if (!((i.tag === Te || i.tag === Ze) && i.memoizedState !== null && i !== e)) {
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
    function z2(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case I:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & lt)
            try {
              ro(), o = t(i);
            } finally {
              no(e);
            }
          else
            o = t(i);
          typeof o == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", pt(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", pt(e)), t.current = i;
      }
    }
    function TT(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function F2(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, F2(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
          var a = e.stateNode;
          a !== null && Mb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function kT(e) {
      for (var t = e.return; t !== null; ) {
        if (H2(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function H2(e) {
      return e.tag === I || e.tag === z || e.tag === q;
    }
    function V2(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || H2(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== ee && t.tag !== ke; ) {
            if (t.flags & vn || t.child === null || t.tag === q)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & vn))
            return t.stateNode;
        }
    }
    function DT(e) {
      var t = kT(e);
      switch (t.tag) {
        case I: {
          var a = t.stateNode;
          t.flags & Xt && (BS(a), t.flags &= ~Xt);
          var i = V2(e);
          h1(e, i, a);
          break;
        }
        case z:
        case q: {
          var o = t.stateNode.containerInfo, s = V2(e);
          v1(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function v1(e, t, a) {
      var i = e.tag, o = i === I || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? Gw(a, s, t) : Ww(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          v1(f, t, a);
          for (var h = f.sibling; h !== null; )
            v1(h, t, a), h = h.sibling;
        }
      }
    }
    function h1(e, t, a) {
      var i = e.tag, o = i === I || i === ee;
      if (o) {
        var s = e.stateNode;
        t ? Qw(a, s, t) : Yw(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          h1(f, t, a);
          for (var h = f.sibling; h !== null; )
            h1(h, t, a), h = h.sibling;
        }
      }
    }
    var Qr = null, dl = !1;
    function _T(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case I: {
                Qr = i.stateNode, dl = !1;
                break e;
              }
              case z: {
                Qr = i.stateNode.containerInfo, dl = !0;
                break e;
              }
              case q: {
                Qr = i.stateNode.containerInfo, dl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B2(e, t, a), Qr = null, dl = !1;
      }
      TT(a);
    }
    function ns(e, t, a) {
      for (var i = a.child; i !== null; )
        B2(e, t, i), i = i.sibling;
    }
    function B2(e, t, a) {
      switch (Id(a), a.tag) {
        case I:
          Wr || Kf(a, t);
        case ee: {
          {
            var i = Qr, o = dl;
            Qr = null, ns(e, t, a), Qr = i, dl = o, Qr !== null && (dl ? Xw(Qr, a.stateNode) : qw(Qr, a.stateNode));
          }
          return;
        }
        case ke: {
          Qr !== null && (dl ? Zw(Qr, a.stateNode) : Tg(Qr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Qr, f = dl;
            Qr = a.stateNode.containerInfo, dl = !0, ns(e, t, a), Qr = s, dl = f;
          }
          return;
        }
        case D:
        case ye:
        case ue:
        case ce: {
          if (!Wr) {
            var h = a.updateQueue;
            if (h !== null) {
              var y = h.lastEffect;
              if (y !== null) {
                var x = y.next, w = x;
                do {
                  var H = w, A = H.destroy, Y = H.tag;
                  A !== void 0 && ((Y & Jl) !== Qa ? Jm(a, t, A) : (Y & yr) !== Qa && (Bc(a), a.mode & lt ? (ro(), Jm(a, t, A), no(a)) : Jm(a, t, A), xu())), w = w.next;
                } while (w !== x);
              }
            }
          }
          ns(e, t, a);
          return;
        }
        case M: {
          if (!Wr) {
            Kf(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && p1(a, t, Q);
          }
          ns(e, t, a);
          return;
        }
        case rt: {
          ns(e, t, a);
          return;
        }
        case Te: {
          if (
            // TODO: Remove this dead flag
            a.mode & kt
          ) {
            var Z = Wr;
            Wr = Z || a.memoizedState !== null, ns(e, t, a), Wr = Z;
          } else
            ns(e, t, a);
          break;
        }
        default: {
          ns(e, t, a);
          return;
        }
      }
    }
    function OT(e) {
      e.memoizedState;
    }
    function LT(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && mb(s);
          }
        }
      }
    }
    function P2(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new vT()), t.forEach(function(i) {
          var o = k3.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), vr)
              if (Xf !== null && Zf !== null)
                vv(Zf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function NT(e, t, a) {
      Xf = a, Zf = e, qt(t), $2(t, e), qt(t), Xf = null, Zf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            _T(e, t, s);
          } catch (y) {
            gn(s, t, y);
          }
        }
      var f = gc();
      if (t.subtreeFlags & ia)
        for (var h = t.child; h !== null; )
          qt(h), $2(h, e), h = h.sibling;
      qt(f);
    }
    function $2(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case D:
        case ye:
        case ue:
        case ce: {
          if (pl(t, e), ao(e), o & St) {
            try {
              fl(Jl | mr, e, e.return), ts(Jl | mr, e);
            } catch (st) {
              gn(e, e.return, st);
            }
            if (e.mode & lt) {
              try {
                ro(), fl(yr | mr, e, e.return);
              } catch (st) {
                gn(e, e.return, st);
              }
              no(e);
            } else
              try {
                fl(yr | mr, e, e.return);
              } catch (st) {
                gn(e, e.return, st);
              }
          }
          return;
        }
        case M: {
          pl(t, e), ao(e), o & na && i !== null && Kf(i, i.return);
          return;
        }
        case I: {
          pl(t, e), ao(e), o & na && i !== null && Kf(i, i.return);
          {
            if (e.flags & Xt) {
              var s = e.stateNode;
              try {
                BS(s);
              } catch (st) {
                gn(e, e.return, st);
              }
            }
            if (o & St) {
              var f = e.stateNode;
              if (f != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, x = e.type, w = e.updateQueue;
                if (e.updateQueue = null, w !== null)
                  try {
                    $w(f, w, x, y, h, e);
                  } catch (st) {
                    gn(e, e.return, st);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (pl(t, e), ao(e), o & St) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var H = e.stateNode, A = e.memoizedProps, Y = i !== null ? i.memoizedProps : A;
            try {
              Iw(H, Y, A);
            } catch (st) {
              gn(e, e.return, st);
            }
          }
          return;
        }
        case z: {
          if (pl(t, e), ao(e), o & St && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                hb(t.containerInfo);
              } catch (st) {
                gn(e, e.return, st);
              }
          }
          return;
        }
        case q: {
          pl(t, e), ao(e);
          return;
        }
        case ae: {
          pl(t, e), ao(e);
          var Z = e.child;
          if (Z.flags & Ul) {
            var Ue = Z.stateNode, et = Z.memoizedState, We = et !== null;
            if (Ue.isHidden = We, We) {
              var jt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              jt || d3();
            }
          }
          if (o & St) {
            try {
              OT(e);
            } catch (st) {
              gn(e, e.return, st);
            }
            P2(e);
          }
          return;
        }
        case Te: {
          var _t = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & kt
          ) {
            var B = Wr;
            Wr = B || _t, pl(t, e), Wr = B;
          } else
            pl(t, e);
          if (ao(e), o & Ul) {
            var K = e.stateNode, P = e.memoizedState, de = P !== null, Ae = e;
            if (K.isHidden = de, de && !_t && (Ae.mode & kt) !== nt) {
              Pe = Ae;
              for (var Le = Ae.child; Le !== null; )
                Pe = Le, jT(Le), Le = Le.sibling;
            }
            RT(Ae, de);
          }
          return;
        }
        case xe: {
          pl(t, e), ao(e), o & St && P2(e);
          return;
        }
        case rt:
          return;
        default: {
          pl(t, e), ao(e);
          return;
        }
      }
    }
    function ao(e) {
      var t = e.flags;
      if (t & vn) {
        try {
          DT(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        e.flags &= ~vn;
      }
      t & Aa && (e.flags &= ~Aa);
    }
    function MT(e, t, a) {
      Xf = a, Zf = t, Pe = e, I2(e, t, a), Xf = null, Zf = null;
    }
    function I2(e, t, a) {
      for (var i = (e.mode & kt) !== nt; Pe !== null; ) {
        var o = Pe, s = o.child;
        if (o.tag === Te && i) {
          var f = o.memoizedState !== null, h = f || Km;
          if (h) {
            m1(e, t, a);
            continue;
          } else {
            var y = o.alternate, x = y !== null && y.memoizedState !== null, w = x || Wr, H = Km, A = Wr;
            Km = h, Wr = w, Wr && !A && (Pe = o, UT(o));
            for (var Y = s; Y !== null; )
              Pe = Y, I2(
                Y,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Y = Y.sibling;
            Pe = o, Km = H, Wr = A, m1(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & _r) !== Ke && s !== null ? (s.return = o, Pe = s) : m1(e, t, a);
      }
    }
    function m1(e, t, a) {
      for (; Pe !== null; ) {
        var i = Pe;
        if ((i.flags & _r) !== Ke) {
          var o = i.alternate;
          qt(i);
          try {
            wT(t, o, i, a);
          } catch (f) {
            gn(i, i.return, f);
          }
          _n();
        }
        if (i === e) {
          Pe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Pe = s;
          return;
        }
        Pe = i.return;
      }
    }
    function jT(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        switch (t.tag) {
          case D:
          case ye:
          case ue:
          case ce: {
            if (t.mode & lt)
              try {
                ro(), fl(yr, t, t.return);
              } finally {
                no(t);
              }
            else
              fl(yr, t, t.return);
            break;
          }
          case M: {
            Kf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && p1(t, t.return, i);
            break;
          }
          case I: {
            Kf(t, t.return);
            break;
          }
          case Te: {
            var o = t.memoizedState !== null;
            if (o) {
              Y2(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Pe = a) : Y2(e);
      }
    }
    function Y2(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        if (t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function UT(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        if (t.tag === Te) {
          var i = t.memoizedState !== null;
          if (i) {
            W2(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Pe = a) : W2(e);
      }
    }
    function W2(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        qt(t);
        try {
          bT(t);
        } catch (i) {
          gn(t, t.return, i);
        }
        if (_n(), t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function AT(e, t, a, i) {
      Pe = t, zT(t, e, a, i);
    }
    function zT(e, t, a, i) {
      for (; Pe !== null; ) {
        var o = Pe, s = o.child;
        (o.subtreeFlags & za) !== Ke && s !== null ? (s.return = o, Pe = s) : FT(e, t, a, i);
      }
    }
    function FT(e, t, a, i) {
      for (; Pe !== null; ) {
        var o = Pe;
        if ((o.flags & Cn) !== Ke) {
          qt(o);
          try {
            HT(t, o, a, i);
          } catch (f) {
            gn(o, o.return, f);
          }
          _n();
        }
        if (o === e) {
          Pe = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Pe = s;
          return;
        }
        Pe = o.return;
      }
    }
    function HT(e, t, a, i) {
      switch (t.tag) {
        case D:
        case ye:
        case ce: {
          if (t.mode & lt) {
            Q0();
            try {
              ts(Ir | mr, t);
            } finally {
              W0(t);
            }
          } else
            ts(Ir | mr, t);
          break;
        }
      }
    }
    function VT(e) {
      Pe = e, BT();
    }
    function BT() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        if ((Pe.flags & Yt) !== Ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Pe = o, IT(o, e);
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
            Pe = e;
          }
        }
        (e.subtreeFlags & za) !== Ke && t !== null ? (t.return = e, Pe = t) : PT();
      }
    }
    function PT() {
      for (; Pe !== null; ) {
        var e = Pe;
        (e.flags & Cn) !== Ke && (qt(e), $T(e), _n());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function $T(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          e.mode & lt ? (Q0(), fl(Ir | mr, e, e.return), W0(e)) : fl(Ir | mr, e, e.return);
          break;
        }
      }
    }
    function IT(e, t) {
      for (; Pe !== null; ) {
        var a = Pe;
        qt(a), WT(a, t), _n();
        var i = a.child;
        i !== null ? (i.return = a, Pe = i) : YT(e);
      }
    }
    function YT(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.sibling, i = t.return;
        if (F2(t), t === e) {
          Pe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Pe = a;
          return;
        }
        Pe = i;
      }
    }
    function WT(e, t) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          e.mode & lt ? (Q0(), fl(Ir, e, t), W0(e)) : fl(Ir, e, t);
          break;
        }
      }
    }
    function QT(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          try {
            ts(yr | mr, e);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
      }
    }
    function GT(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          try {
            ts(Ir | mr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function qT(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce: {
          try {
            fl(yr | mr, e, e.return);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && p1(e, e.return, t);
          break;
        }
      }
    }
    function XT(e) {
      switch (e.tag) {
        case D:
        case ye:
        case ce:
          try {
            fl(Ir | mr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rv = Symbol.for;
      rv("selector.component"), rv("selector.has_pseudo_class"), rv("selector.role"), rv("selector.test_id"), rv("selector.text");
    }
    var ZT = [];
    function KT() {
      ZT.forEach(function(e) {
        return e();
      });
    }
    var JT = m.ReactCurrentActQueue;
    function e3(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Q2() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && JT.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var t3 = Math.ceil, y1 = m.ReactCurrentDispatcher, g1 = m.ReactCurrentOwner, Gr = m.ReactCurrentBatchConfig, vl = m.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), G2 = (
      /*               */
      1
    ), qr = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), qo = 0, av = 1, sc = 2, ey = 3, iv = 4, q2 = 5, S1 = 6, Mt = Cr, Ta = null, Fn = null, Er = J, io = J, C1 = Wu(J), xr = qo, lv = null, ty = J, ov = J, ny = J, uv = null, Ga = null, E1 = 0, X2 = 500, Z2 = 1 / 0, n3 = 500, Xo = null;
    function sv() {
      Z2 = bn() + n3;
    }
    function K2() {
      return Z2;
    }
    var ry = !1, x1 = null, Jf = null, cc = !1, rs = null, cv = J, w1 = [], b1 = null, r3 = 50, fv = 0, R1 = null, T1 = !1, ay = !1, a3 = 50, ed = 0, iy = null, dv = ln, ly = J, J2 = !1;
    function oy() {
      return Ta;
    }
    function ka() {
      return (Mt & (qr | Ui)) !== Cr ? bn() : (dv !== ln || (dv = bn()), dv);
    }
    function as(e) {
      var t = e.mode;
      if ((t & kt) === nt)
        return ot;
      if ((Mt & qr) !== Cr && Er !== J)
        return qn(Er);
      var a = eR() !== Jb;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return ly === Nt && (ly = Kd()), ly;
      }
      var o = Ba();
      if (o !== Nt)
        return o;
      var s = Fw();
      return s;
    }
    function i3(e) {
      var t = e.mode;
      return (t & kt) === nt ? ot : Qy();
    }
    function wr(e, t, a, i) {
      _3(), J2 && S("useInsertionEffect must not schedule updates."), T1 && (ay = !0), No(e, a, i), (Mt & qr) !== J && e === Ta ? N3(t) : (vr && rp(e, t, a), M3(t), e === Ta && ((Mt & qr) === Cr && (ov = Ct(ov, a)), xr === iv && is(e, Er)), qa(e, i), a === ot && Mt === Cr && (t.mode & kt) === nt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (sv(), KS()));
    }
    function l3(e, t, a) {
      var i = e.current;
      i.lanes = t, No(e, t, a), qa(e, a);
    }
    function o3(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & qr) !== Cr
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      Iy(e, t);
      var i = Us(e, e === Ta ? Er : J);
      if (i === J) {
        a !== null && hE(a), e.callbackNode = null, e.callbackPriority = Nt;
        return;
      }
      var o = In(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== M1)) {
        a == null && s !== ot && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hE(a);
      var f;
      if (o === ot)
        e.tag === Qu ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), Ab(nE.bind(null, e))) : ZS(nE.bind(null, e)), vl.current !== null ? vl.current.push(Gu) : Vw(function() {
          (Mt & (qr | Ui)) === Cr && Gu();
        }), f = null;
      else {
        var h;
        switch (Vs(i)) {
          case Or:
            h = zc;
            break;
          case hr:
            h = xa;
            break;
          case Ji:
            h = Ri;
            break;
          case Fs:
            h = zl;
            break;
          default:
            h = Ri;
            break;
        }
        f = j1(h, eE.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function eE(e, t) {
      if (_R(), dv = ln, ly = J, (Mt & (qr | Ui)) !== Cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ko();
      if (i && e.callbackNode !== a)
        return null;
      var o = Us(e, e === Ta ? Er : J);
      if (o === J)
        return null;
      var s = !zs(e, o) && !Sh(e, o) && !t, f = s ? y3(e, o) : sy(e, o);
      if (f !== qo) {
        if (f === sc) {
          var h = Xd(e);
          h !== J && (o = h, f = k1(e, h));
        }
        if (f === av) {
          var y = lv;
          throw fc(e, J), is(e, o), qa(e, bn()), y;
        }
        if (f === S1)
          is(e, o);
        else {
          var x = !zs(e, o), w = e.current.alternate;
          if (x && !s3(w)) {
            if (f = sy(e, o), f === sc) {
              var H = Xd(e);
              H !== J && (o = H, f = k1(e, H));
            }
            if (f === av) {
              var A = lv;
              throw fc(e, J), is(e, o), qa(e, bn()), A;
            }
          }
          e.finishedWork = w, e.finishedLanes = o, u3(e, f, o);
        }
      }
      return qa(e, bn()), e.callbackNode === a ? eE.bind(null, e) : null;
    }
    function k1(e, t) {
      var a = uv;
      if (Zn(e)) {
        var i = fc(e, t);
        i.flags |= On, _b(e.containerInfo);
      }
      var o = sy(e, t);
      if (o !== sc) {
        var s = Ga;
        Ga = a, s !== null && tE(s);
      }
      return o;
    }
    function tE(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function u3(e, t, a) {
      switch (t) {
        case qo:
        case av:
          throw new Error("Root did not complete. This is a bug in React.");
        case sc: {
          dc(e, Ga, Xo);
          break;
        }
        case ey: {
          if (is(e, a), uf(a) && // do not delay if we're inside an act() scope
          !mE()) {
            var i = E1 + X2 - bn();
            if (i > 10) {
              var o = Us(e, J);
              if (o !== J)
                break;
              var s = e.suspendedLanes;
              if (!Lo(s, a)) {
                ka(), tp(e, s);
                break;
              }
              e.timeoutHandle = bg(dc.bind(null, e, Ga, Xo), i);
              break;
            }
          }
          dc(e, Ga, Xo);
          break;
        }
        case iv: {
          if (is(e, a), gh(a))
            break;
          if (!mE()) {
            var f = yh(e, a), h = f, y = bn() - h, x = D3(y) - y;
            if (x > 10) {
              e.timeoutHandle = bg(dc.bind(null, e, Ga, Xo), x);
              break;
            }
          }
          dc(e, Ga, Xo);
          break;
        }
        case q2: {
          dc(e, Ga, Xo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function s3(e) {
      for (var t = e; ; ) {
        if (t.flags & Ds) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, h = s.value;
                try {
                  if (!Be(f(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Ds && y !== null) {
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
    function is(e, t) {
      t = _u(t, ny), t = _u(t, ov), ep(e, t);
    }
    function nE(e) {
      if (OR(), (Mt & (qr | Ui)) !== Cr)
        throw new Error("Should not already be working.");
      Ko();
      var t = Us(e, J);
      if (!sa(t, ot))
        return qa(e, bn()), null;
      var a = sy(e, t);
      if (e.tag !== Qu && a === sc) {
        var i = Xd(e);
        i !== J && (t = i, a = k1(e, i));
      }
      if (a === av) {
        var o = lv;
        throw fc(e, J), is(e, t), qa(e, bn()), o;
      }
      if (a === S1)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, dc(e, Ga, Xo), qa(e, bn()), null;
    }
    function c3(e, t) {
      t !== J && (Ou(e, Ct(t, ot)), qa(e, bn()), (Mt & (qr | Ui)) === Cr && (sv(), Gu()));
    }
    function D1(e, t) {
      var a = Mt;
      Mt |= G2;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (sv(), KS());
      }
    }
    function f3(e, t, a, i, o) {
      var s = Ba(), f = Gr.transition;
      try {
        return Gr.transition = null, Xn(Or), e(t, a, i, o);
      } finally {
        Xn(s), Gr.transition = f, Mt === Cr && sv();
      }
    }
    function Zo(e) {
      rs !== null && rs.tag === Qu && (Mt & (qr | Ui)) === Cr && Ko();
      var t = Mt;
      Mt |= G2;
      var a = Gr.transition, i = Ba();
      try {
        return Gr.transition = null, Xn(Or), e ? e() : void 0;
      } finally {
        Xn(i), Gr.transition = a, Mt = t, (Mt & (qr | Ui)) === Cr && Gu();
      }
    }
    function rE() {
      return (Mt & (qr | Ui)) !== Cr;
    }
    function uy(e, t) {
      fa(C1, io, e), io = Ct(io, t);
    }
    function _1(e) {
      io = C1.current, ca(C1, e);
    }
    function fc(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== Rg && (e.timeoutHandle = Rg, Hw(a)), Fn !== null)
        for (var i = Fn.return; i !== null; ) {
          var o = i.alternate;
          N2(o, i), i = i.return;
        }
      Ta = e;
      var s = pc(e.current, null);
      return Fn = s, Er = io = t, xr = qo, lv = null, ty = J, ov = J, ny = J, uv = null, Ga = null, aR(), ll.discardPendingWarnings(), s;
    }
    function aE(e, t) {
      do {
        var a = Fn;
        try {
          if (mm(), jC(), _n(), g1.current = null, a === null || a.return === null) {
            xr = av, lv = t, Fn = null;
            return;
          }
          if (dt && a.mode & lt && Gm(a, !0), mt)
            if (xo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vh(a, i, Er);
            } else
              Pc(a, t, Er);
          UR(e, a.return, a, t, Er), uE(a);
        } catch (o) {
          t = o, Fn === a && a !== null ? (a = a.return, Fn = a) : a = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function iE() {
      var e = y1.current;
      return y1.current = $m, e === null ? $m : e;
    }
    function lE(e) {
      y1.current = e;
    }
    function d3() {
      E1 = bn();
    }
    function pv(e) {
      ty = Ct(e, ty);
    }
    function p3() {
      xr === qo && (xr = ey);
    }
    function O1() {
      (xr === qo || xr === ey || xr === sc) && (xr = iv), Ta !== null && (As(ty) || As(ov)) && is(Ta, Er);
    }
    function v3(e) {
      xr !== iv && (xr = sc), uv === null ? uv = [e] : uv.push(e);
    }
    function h3() {
      return xr === qo;
    }
    function sy(e, t) {
      var a = Mt;
      Mt |= qr;
      var i = iE();
      if (Ta !== e || Er !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (vv(e, Er), o.clear()), ff(e, t);
        }
        Xo = ap(), fc(e, t);
      }
      ui(t);
      do
        try {
          m3();
          break;
        } catch (s) {
          aE(e, s);
        }
      while (!0);
      if (mm(), Mt = a, lE(i), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bu(), Ta = null, Er = J, xr;
    }
    function m3() {
      for (; Fn !== null; )
        oE(Fn);
    }
    function y3(e, t) {
      var a = Mt;
      Mt |= qr;
      var i = iE();
      if (Ta !== e || Er !== t) {
        if (vr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (vv(e, Er), o.clear()), ff(e, t);
        }
        Xo = ap(), sv(), fc(e, t);
      }
      ui(t);
      do
        try {
          g3();
          break;
        } catch (s) {
          aE(e, s);
        }
      while (!0);
      return mm(), lE(i), Mt = a, Fn !== null ? (Ls(), qo) : (bu(), Ta = null, Er = J, xr);
    }
    function g3() {
      for (; Fn !== null && !Ac(); )
        oE(Fn);
    }
    function oE(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & lt) !== nt ? (Y0(e), a = L1(t, e, io), Gm(e, !0)) : a = L1(t, e, io), _n(), e.memoizedProps = e.pendingProps, a === null ? uE(e) : Fn = a, g1.current = null;
    }
    function uE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Sa) === Ke) {
          qt(t);
          var o = void 0;
          if ((t.mode & lt) === nt ? o = L2(a, t, io) : (Y0(t), o = L2(a, t, io), Gm(t, !1)), _n(), o !== null) {
            Fn = o;
            return;
          }
        } else {
          var s = pT(a, t);
          if (s !== null) {
            s.flags &= ih, Fn = s;
            return;
          }
          if ((t.mode & lt) !== nt) {
            Gm(t, !1);
            for (var f = t.actualDuration, h = t.child; h !== null; )
              f += h.actualDuration, h = h.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Sa, i.subtreeFlags = Ke, i.deletions = null;
          else {
            xr = S1, Fn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Fn = y;
          return;
        }
        t = i, Fn = t;
      } while (t !== null);
      xr === qo && (xr = q2);
    }
    function dc(e, t, a) {
      var i = Ba(), o = Gr.transition;
      try {
        Gr.transition = null, Xn(Or), S3(e, t, a, i);
      } finally {
        Gr.transition = o, Xn(i);
      }
      return null;
    }
    function S3(e, t, a, i) {
      do
        Ko();
      while (rs !== null);
      if (O3(), (Mt & (qr | Ui)) !== Cr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Hc(s), o === null)
        return Yd(), null;
      if (s === J && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Nt;
      var f = Ct(o.lanes, o.childLanes);
      np(e, f), e === Ta && (Ta = null, Fn = null, Er = J), ((o.subtreeFlags & za) !== Ke || (o.flags & za) !== Ke) && (cc || (cc = !0, b1 = a, j1(Ri, function() {
        return Ko(), null;
      })));
      var h = (o.subtreeFlags & (Eu | ia | _r | za)) !== Ke, y = (o.flags & (Eu | ia | _r | za)) !== Ke;
      if (h || y) {
        var x = Gr.transition;
        Gr.transition = null;
        var w = Ba();
        Xn(Or);
        var H = Mt;
        Mt |= Ui, g1.current = null, gT(e, o), i2(), NT(e, o, s), Nw(e.containerInfo), e.current = o, hh(s), MT(o, e, s), wu(), uh(), Mt = H, Xn(w), Gr.transition = x;
      } else
        e.current = o, i2();
      var A = cc;
      if (cc ? (cc = !1, rs = e, cv = s) : (ed = 0, iy = null), f = e.pendingLanes, f === J && (Jf = null), A || dE(e.current, !1), Xi(o.stateNode, i), vr && e.memoizedUpdaters.clear(), KT(), qa(e, bn()), t !== null)
        for (var Y = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var Z = t[Q], Ue = Z.stack, et = Z.digest;
          Y(Z.value, {
            componentStack: Ue,
            digest: et
          });
        }
      if (ry) {
        ry = !1;
        var We = x1;
        throw x1 = null, We;
      }
      return sa(cv, ot) && e.tag !== Qu && Ko(), f = e.pendingLanes, sa(f, ot) ? (DR(), e === R1 ? fv++ : (fv = 0, R1 = e)) : fv = 0, Gu(), Yd(), null;
    }
    function Ko() {
      if (rs !== null) {
        var e = Vs(cv), t = qy(Ji, e), a = Gr.transition, i = Ba();
        try {
          return Gr.transition = null, Xn(t), E3();
        } finally {
          Xn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function C3(e) {
      w1.push(e), cc || (cc = !0, j1(Ri, function() {
        return Ko(), null;
      }));
    }
    function E3() {
      if (rs === null)
        return !1;
      var e = b1;
      b1 = null;
      var t = rs, a = cv;
      if (rs = null, cv = J, (Mt & (qr | Ui)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      T1 = !0, ay = !1, mh(a);
      var i = Mt;
      Mt |= Ui, VT(t.current), AT(t, t.current, a, e);
      {
        var o = w1;
        w1 = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          xT(t, f);
        }
      }
      Os(), dE(t.current, !0), Mt = i, Gu(), ay ? t === iy ? ed++ : (ed = 0, iy = t) : ed = 0, T1 = !1, ay = !1, Hl(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sE(e) {
      return Jf !== null && Jf.has(e);
    }
    function x3(e) {
      Jf === null ? Jf = /* @__PURE__ */ new Set([e]) : Jf.add(e);
    }
    function w3(e) {
      ry || (ry = !0, x1 = e);
    }
    var b3 = w3;
    function cE(e, t, a) {
      var i = oc(a, t), o = o2(e, i, ot), s = Xu(e, o, ot), f = ka();
      s !== null && (No(s, ot, f), qa(s, f));
    }
    function gn(e, t, a) {
      if (hT(a), hv(!1), e.tag === z) {
        cE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === z) {
          cE(i, e, a);
          return;
        } else if (i.tag === M) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sE(s)) {
            var f = oc(a, e), h = Z0(i, f, ot), y = Xu(i, h, ot), x = ka();
            y !== null && (No(y, ot, x), qa(y, x));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function R3(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = ka();
      tp(e, a), j3(e), Ta === e && Lo(Er, a) && (xr === iv || xr === ey && uf(Er) && bn() - E1 < X2 ? fc(e, J) : ny = Ct(ny, a)), qa(e, o);
    }
    function fE(e, t) {
      t === Nt && (t = i3(e));
      var a = ka(), i = Wa(e, t);
      i !== null && (No(i, t, a), qa(i, a));
    }
    function T3(e) {
      var t = e.memoizedState, a = Nt;
      t !== null && (a = t.retryLane), fE(e, a);
    }
    function k3(e, t) {
      var a = Nt, i;
      switch (e.tag) {
        case ae:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case xe:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fE(e, a);
    }
    function D3(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : t3(e / 1960) * 1960;
    }
    function _3() {
      if (fv > r3)
        throw fv = 0, R1 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ed > a3 && (ed = 0, iy = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function O3() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function dE(e, t) {
      qt(e), cy(e, aa, qT), t && cy(e, Eo, XT), cy(e, aa, QT), t && cy(e, Eo, GT), _n();
    }
    function cy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Ke ? i = i.child : ((i.flags & t) !== Ke && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var fy = null;
    function pE(e) {
      {
        if ((Mt & qr) !== Cr || !(e.mode & kt))
          return;
        var t = e.tag;
        if (t !== L && t !== z && t !== M && t !== D && t !== ye && t !== ue && t !== ce)
          return;
        var a = pt(e) || "ReactComponent";
        if (fy !== null) {
          if (fy.has(a))
            return;
          fy.add(a);
        } else
          fy = /* @__PURE__ */ new Set([a]);
        var i = wn;
        try {
          qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : _n();
        }
      }
    }
    var L1;
    {
      var L3 = null;
      L1 = function(e, t, a) {
        var i = EE(L3, t);
        try {
          return T2(e, t, a);
        } catch (s) {
          if (Ib() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (mm(), jC(), N2(e, t), EE(t, i), t.mode & lt && Y0(t), Co(null, T2, null, e, t, a), Py()) {
            var o = jd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vE = !1, N1;
    N1 = /* @__PURE__ */ new Set();
    function N3(e) {
      if (Jr && !RR())
        switch (e.tag) {
          case D:
          case ye:
          case ce: {
            var t = Fn && pt(Fn) || "Unknown", a = t;
            if (!N1.has(a)) {
              N1.add(a);
              var i = pt(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case M: {
            vE || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vE = !0);
            break;
          }
        }
    }
    function vv(e, t) {
      if (vr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rp(e, i, t);
        });
      }
    }
    var M1 = {};
    function j1(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), M1) : Uc(e, t);
      }
    }
    function hE(e) {
      if (e !== M1)
        return oh(e);
    }
    function mE() {
      return vl.current !== null;
    }
    function M3(e) {
      {
        if (e.mode & kt) {
          if (!Q2())
            return;
        } else if (!e3() || Mt !== Cr || e.tag !== D && e.tag !== ye && e.tag !== ce)
          return;
        if (vl.current === null) {
          var t = wn;
          try {
            qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, pt(e));
          } finally {
            t ? qt(e) : _n();
          }
        }
      }
    }
    function j3(e) {
      e.tag !== Qu && Q2() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hv(e) {
      J2 = e;
    }
    var Ai = null, td = null, U3 = function(e) {
      Ai = e;
    };
    function nd(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function U1(e) {
      return nd(e);
    }
    function A1(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: je,
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
    function yE(e, t) {
      {
        if (Ai === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (o = !0);
            break;
          }
          case D: {
            (typeof i == "function" || s === Je) && (o = !0);
            break;
          }
          case ye: {
            (s === je || s === Je) && (o = !0);
            break;
          }
          case ue:
          case ce: {
            (s === gt || s === Je) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Ai(a);
          if (f !== void 0 && f === Ai(i))
            return !0;
        }
        return !1;
      }
    }
    function gE(e) {
      {
        if (Ai === null || typeof WeakSet != "function")
          return;
        td === null && (td = /* @__PURE__ */ new WeakSet()), td.add(e);
      }
    }
    var A3 = function(e, t) {
      {
        if (Ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ko(), Zo(function() {
          z1(e.current, i, a);
        });
      }
    }, z3 = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Ko(), Zo(function() {
          mv(t, e, null, null);
        });
      }
    };
    function z1(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, h = e.type, y = null;
        switch (f) {
          case D:
          case ce:
          case M:
            y = h;
            break;
          case ye:
            y = h.render;
            break;
        }
        if (Ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, w = !1;
        if (y !== null) {
          var H = Ai(y);
          H !== void 0 && (a.has(H) ? w = !0 : t.has(H) && (f === M ? w = !0 : x = !0));
        }
        if (td !== null && (td.has(e) || i !== null && td.has(i)) && (w = !0), w && (e._debugNeedsRemount = !0), w || x) {
          var A = Wa(e, ot);
          A !== null && wr(A, e, ot, ln);
        }
        o !== null && !w && z1(o, t, a), s !== null && z1(s, t, a);
      }
    }
    var F3 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return F1(e.current, i, a), a;
      }
    };
    function F1(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, h = null;
        switch (s) {
          case D:
          case ce:
          case M:
            h = f;
            break;
          case ye:
            h = f.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? H3(e, a) : i !== null && F1(i, t, a), o !== null && F1(o, t, a);
      }
    }
    function H3(e, t) {
      {
        var a = V3(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case I:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function V3(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === I)
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
        var SE = Object.preventExtensions({});
      } catch {
        H1 = !0;
      }
    }
    function B3(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !H1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new B3(e, t, a, i);
    };
    function V1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function P3(e) {
      return typeof e == "function" && !V1(e) && e.defaultProps === void 0;
    }
    function $3(e) {
      if (typeof e == "function")
        return V1(e) ? M : D;
      if (e != null) {
        var t = e.$$typeof;
        if (t === je)
          return ye;
        if (t === gt)
          return ue;
      }
      return L;
    }
    function pc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ke, a.subtreeFlags = Ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & pr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case L:
        case D:
        case ce:
          a.type = nd(e.type);
          break;
        case M:
          a.type = U1(e.type);
          break;
        case ye:
          a.type = A1(e.type);
          break;
      }
      return a;
    }
    function I3(e, t) {
      e.flags &= pr | vn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Y3(e, t, a) {
      var i;
      return e === um ? (i = kt, t === !0 && (i |= Rn, i |= Ha)) : i = nt, vr && (i |= lt), fi(z, null, null, i);
    }
    function B1(e, t, a, i, o, s) {
      var f = L, h = e;
      if (typeof e == "function")
        V1(e) ? (f = M, h = U1(h)) : h = nd(h);
      else if (typeof e == "string")
        f = I;
      else
        e:
          switch (e) {
            case ga:
              return ls(a.children, o, s, t);
            case gi:
              f = re, o |= Rn, (o & kt) !== nt && (o |= Ha);
              break;
            case O:
              return W3(a, o, s, t);
            case yt:
              return Q3(a, o, s, t);
            case Lt:
              return G3(a, o, s, t);
            case dn:
              return CE(a, o, s, t);
            case dr:
            case Pn:
            case Si:
            case nu:
            case fn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    f = ge;
                    break e;
                  case Ee:
                    f = pe;
                    break e;
                  case je:
                    f = ye, h = A1(h);
                    break e;
                  case gt:
                    f = ue;
                    break e;
                  case Je:
                    f = He, h = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var x = i ? pt(i) : null;
                x && (y += `

Check the render method of \`` + x + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var w = fi(f, a, t, o);
      return w.elementType = e, w.type = h, w.lanes = s, w._debugOwner = i, w;
    }
    function P1(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, h = B1(o, s, f, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function ls(e, t, a, i) {
      var o = fi(se, e, i, t);
      return o.lanes = a, o;
    }
    function W3(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = fi(Se, e, i, t | lt);
      return o.elementType = O, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function Q3(e, t, a, i) {
      var o = fi(ae, e, i, t);
      return o.elementType = yt, o.lanes = a, o;
    }
    function G3(e, t, a, i) {
      var o = fi(xe, e, i, t);
      return o.elementType = Lt, o.lanes = a, o;
    }
    function CE(e, t, a, i) {
      var o = fi(Te, e, i, t);
      o.elementType = dn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function $1(e, t, a) {
      var i = fi(ee, e, null, t);
      return i.lanes = a, i;
    }
    function q3() {
      var e = fi(I, null, null, nt);
      return e.elementType = "DELETED", e;
    }
    function X3(e) {
      var t = fi(ke, null, null, nt);
      return t.stateNode = e, t;
    }
    function I1(e, t, a) {
      var i = e.children !== null ? e.children : [], o = fi(q, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function EE(e, t) {
      return e === null && (e = fi(L, null, null, nt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Z3(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Rg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Nt, this.eventTimes = cf(J), this.expirationTimes = cf(ln), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = cf(J), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < mn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case um:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xE(e, t, a, i, o, s, f, h, y, x) {
      var w = new Z3(e, t, a, h, y), H = Y3(t, s);
      w.current = H, H.stateNode = w;
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
      return Kg(H), w;
    }
    var Y1 = "18.2.0";
    function K3(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return kr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: zr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var W1, Q1;
    W1 = !1, Q1 = {};
    function wE(e) {
      if (!e)
        return ci;
      var t = ja(e), a = Ub(t);
      if (t.tag === M) {
        var i = t.type;
        if (Kl(i))
          return qS(t, i, a);
      }
      return a;
    }
    function J3(e, t) {
      {
        var a = ja(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Fa(a);
        if (o === null)
          return null;
        if (o.mode & Rn) {
          var s = pt(a) || "Component";
          if (!Q1[s]) {
            Q1[s] = !0;
            var f = wn;
            try {
              qt(o), a.mode & Rn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? qt(f) : _n();
            }
          }
        }
        return o.stateNode;
      }
    }
    function bE(e, t, a, i, o, s, f, h) {
      var y = !1, x = null;
      return xE(e, t, y, x, a, i, o, s, f);
    }
    function RE(e, t, a, i, o, s, f, h, y, x) {
      var w = !0, H = xE(a, i, w, e, o, s, f, h, y);
      H.context = wE(null);
      var A = H.current, Y = ka(), Q = as(A), Z = Qo(Y, Q);
      return Z.callback = t ?? null, Xu(A, Z, Q), l3(H, Q, Y), H;
    }
    function mv(e, t, a, i) {
      sh(t, e);
      var o = t.current, s = ka(), f = as(o);
      wo(f);
      var h = wE(a);
      t.context === null ? t.context = h : t.pendingContext = h, Jr && wn !== null && !W1 && (W1 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, pt(wn) || "Unknown"));
      var y = Qo(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var x = Xu(o, y, f);
      return x !== null && (wr(x, o, f, s), Em(x, o, f)), f;
    }
    function dy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function e5(e) {
      switch (e.tag) {
        case z: {
          var t = e.stateNode;
          if (Zn(t)) {
            var a = Yy(t);
            c3(t, a);
          }
          break;
        }
        case ae: {
          Zo(function() {
            var o = Wa(e, ot);
            if (o !== null) {
              var s = ka();
              wr(o, e, ot, s);
            }
          });
          var i = ot;
          G1(e, i);
          break;
        }
      }
    }
    function TE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Eh(a.retryLane, t));
    }
    function G1(e, t) {
      TE(e, t);
      var a = e.alternate;
      a && TE(a, t);
    }
    function t5(e) {
      if (e.tag === ae) {
        var t = Ru, a = Wa(e, t);
        if (a !== null) {
          var i = ka();
          wr(a, e, t, i);
        }
        G1(e, t);
      }
    }
    function n5(e) {
      if (e.tag === ae) {
        var t = as(e), a = Wa(e, t);
        if (a !== null) {
          var i = ka();
          wr(a, e, t, i);
        }
        G1(e, t);
      }
    }
    function kE(e) {
      var t = lh(e);
      return t === null ? null : t.stateNode;
    }
    var DE = function(e) {
      return null;
    };
    function r5(e) {
      return DE(e);
    }
    var _E = function(e) {
      return !1;
    };
    function a5(e) {
      return _E(e);
    }
    var OE = null, LE = null, NE = null, ME = null, jE = null, UE = null, AE = null, zE = null, FE = null;
    {
      var HE = function(e, t, a) {
        var i = t[a], o = Ot(e) ? e.slice() : Rt({}, e);
        return a + 1 === t.length ? (Ot(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = HE(e[i], t, a + 1), o);
      }, VE = function(e, t) {
        return HE(e, t, 0);
      }, BE = function(e, t, a, i) {
        var o = t[i], s = Ot(e) ? e.slice() : Rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], Ot(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = BE(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, PE = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BE(e, t, a, 0);
      }, $E = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Ot(e) ? e.slice() : Rt({}, e);
        return s[o] = $E(e[o], t, a + 1, i), s;
      }, IE = function(e, t, a) {
        return $E(e, t, 0, a);
      }, q1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      OE = function(e, t, a, i) {
        var o = q1(e, t);
        if (o !== null) {
          var s = IE(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Wa(e, ot);
          f !== null && wr(f, e, ot, ln);
        }
      }, LE = function(e, t, a) {
        var i = q1(e, t);
        if (i !== null) {
          var o = VE(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Rt({}, e.memoizedProps);
          var s = Wa(e, ot);
          s !== null && wr(s, e, ot, ln);
        }
      }, NE = function(e, t, a, i) {
        var o = q1(e, t);
        if (o !== null) {
          var s = PE(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Rt({}, e.memoizedProps);
          var f = Wa(e, ot);
          f !== null && wr(f, e, ot, ln);
        }
      }, ME = function(e, t, a) {
        e.pendingProps = IE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, ot);
        i !== null && wr(i, e, ot, ln);
      }, jE = function(e, t) {
        e.pendingProps = VE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, ot);
        a !== null && wr(a, e, ot, ln);
      }, UE = function(e, t, a) {
        e.pendingProps = PE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, ot);
        i !== null && wr(i, e, ot, ln);
      }, AE = function(e) {
        var t = Wa(e, ot);
        t !== null && wr(t, e, ot, ln);
      }, zE = function(e) {
        DE = e;
      }, FE = function(e) {
        _E = e;
      };
    }
    function i5(e) {
      var t = Fa(e);
      return t === null ? null : t.stateNode;
    }
    function l5(e) {
      return null;
    }
    function o5() {
      return wn;
    }
    function u5(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return $d({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: OE,
        overrideHookStateDeletePath: LE,
        overrideHookStateRenamePath: NE,
        overrideProps: ME,
        overridePropsDeletePath: jE,
        overridePropsRenamePath: UE,
        setErrorHandler: zE,
        setSuspenseHandler: FE,
        scheduleUpdate: AE,
        currentDispatcherRef: a,
        findHostInstanceByFiber: i5,
        findFiberByHostInstance: t || l5,
        // React Refresh
        findHostInstancesForRefresh: F3,
        scheduleRefresh: A3,
        scheduleRoot: z3,
        setRefreshHandler: U3,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: o5,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Y1
      });
    }
    var YE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function X1(e) {
      this._internalRoot = e;
    }
    py.prototype.render = X1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : vy(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== $n) {
          var i = kE(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mv(e, t, null, null);
    }, py.prototype.unmount = X1.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rE() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zo(function() {
          mv(null, e, null, null);
        }), IS(t);
      }
    };
    function s5(e, t) {
      if (!vy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WE(e);
      var a = !1, i = !1, o = "", s = YE;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === yi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = bE(e, um, null, a, i, o, s);
      tm(f.current, e);
      var h = e.nodeType === $n ? e.parentNode : e;
      return bp(h), new X1(f);
    }
    function py(e) {
      this._internalRoot = e;
    }
    function c5(e) {
      e && _h(e);
    }
    py.prototype.unstable_scheduleHydration = c5;
    function f5(e, t, a) {
      if (!vy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WE(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, h = "", y = YE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var x = RE(t, null, e, um, i, s, f, h, y);
      if (tm(x.current, e), bp(e), o)
        for (var w = 0; w < o.length; w++) {
          var H = o[w];
          SR(x, H);
        }
      return new py(x);
    }
    function vy(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ii || e.nodeType === vo || !we));
    }
    function yv(e) {
      return !!(e && (e.nodeType === ta || e.nodeType === ii || e.nodeType === vo || e.nodeType === $n && e.nodeValue === " react-mount-point-unstable "));
    }
    function WE(e) {
      e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Up(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var d5 = m.ReactCurrentOwner, QE;
    QE = function(e) {
      if (e._reactRootContainer && e.nodeType !== $n) {
        var t = kE(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = Z1(e), o = !!(i && Yu(i));
      o && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ta && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Z1(e) {
      return e ? e.nodeType === ii ? e.documentElement : e.firstChild : null;
    }
    function GE() {
    }
    function p5(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var A = dy(f);
            s.call(A);
          };
        }
        var f = RE(
          t,
          i,
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GE
        );
        e._reactRootContainer = f, tm(f.current, e);
        var h = e.nodeType === $n ? e.parentNode : e;
        return bp(h), Zo(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var A = dy(w);
            x.call(A);
          };
        }
        var w = bE(
          e,
          Qu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GE
        );
        e._reactRootContainer = w, tm(w.current, e);
        var H = e.nodeType === $n ? e.parentNode : e;
        return bp(H), Zo(function() {
          mv(t, w, a, i);
        }), w;
      }
    }
    function v5(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function hy(e, t, a, i, o) {
      QE(a), v5(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = p5(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var h = o;
          o = function() {
            var y = dy(f);
            h.call(y);
          };
        }
        mv(t, f, e, o);
      }
      return dy(f);
    }
    function h5(e) {
      {
        var t = d5.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ft(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ta ? e : J3(e, "findDOMNode");
    }
    function m5(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return hy(null, e, t, !0, a);
    }
    function y5(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return hy(null, e, t, !1, a);
    }
    function g5(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ks(e))
        throw new Error("parentComponent must be a valid React Component");
      return hy(e, t, a, !1, i);
    }
    function S5(e) {
      if (!yv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Up(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Z1(e), i = a && !Yu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Zo(function() {
          hy(null, null, e, !1, function() {
            e._reactRootContainer = null, IS(e);
          });
        }), !0;
      } else {
        {
          var o = Z1(e), s = !!(o && Yu(o)), f = e.nodeType === ta && yv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fe(e5), wh(t5), Ps(n5), lp(Ba), Rh(Hs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), rh(xw), Oc(D1, f3, Zo);
    function C5(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!vy(t))
        throw new Error("Target container is not a DOM element.");
      return K3(e, t, null, a);
    }
    function E5(e, t, a, i) {
      return g5(e, t, a, i);
    }
    var K1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Yu, Mf, nm, _c, bs, D1]
    };
    function x5(e, t) {
      return K1.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), s5(e, t);
    }
    function w5(e, t, a) {
      return K1.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), f5(e, t, a);
    }
    function b5(e) {
      return rE() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zo(e);
    }
    var R5 = u5({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: Y1,
      rendererPackageName: "react-dom"
    });
    if (!R5 && un && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qE = window.location.protocol;
      /^(https?|file):$/.test(qE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K1, Za.createPortal = C5, Za.createRoot = x5, Za.findDOMNode = h5, Za.flushSync = b5, Za.hydrate = m5, Za.hydrateRoot = w5, Za.render = y5, Za.unmountComponentAtNode = S5, Za.unstable_batchedUpdates = D1, Za.unstable_renderSubtreeIntoContainer = E5, Za.version = Y1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
function Tx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tx);
    } catch (d) {
      console.error(d);
    }
  }
}
process.env.NODE_ENV === "production" ? (Tx(), rS.exports = Y5()) : rS.exports = W5();
var Q5 = rS.exports, Ka = "top", zi = "bottom", Fi = "right", Ja = "left", Ry = "auto", _v = [Ka, zi, Fi, Ja], id = "start", kv = "end", G5 = "clippingParents", kx = "viewport", Ev = "popper", q5 = "reference", ox = /* @__PURE__ */ _v.reduce(function(d, v) {
  return d.concat([v + "-" + id, v + "-" + kv]);
}, []), Dx = /* @__PURE__ */ [].concat(_v, [Ry]).reduce(function(d, v) {
  return d.concat([v, v + "-" + id, v + "-" + kv]);
}, []), X5 = "beforeRead", Z5 = "read", K5 = "afterRead", J5 = "beforeMain", ek = "main", tk = "afterMain", nk = "beforeWrite", rk = "write", ak = "afterWrite", aS = [X5, Z5, K5, J5, ek, tk, nk, rk, ak];
function uo(d) {
  return d ? (d.nodeName || "").toLowerCase() : null;
}
function vi(d) {
  if (d == null)
    return window;
  if (d.toString() !== "[object Window]") {
    var v = d.ownerDocument;
    return v && v.defaultView || window;
  }
  return d;
}
function mc(d) {
  var v = vi(d).Element;
  return d instanceof v || d instanceof Element;
}
function pi(d) {
  var v = vi(d).HTMLElement;
  return d instanceof v || d instanceof HTMLElement;
}
function sS(d) {
  if (typeof ShadowRoot > "u")
    return !1;
  var v = vi(d).ShadowRoot;
  return d instanceof v || d instanceof ShadowRoot;
}
function ik(d) {
  var v = d.state;
  Object.keys(v.elements).forEach(function(m) {
    var E = v.styles[m] || {}, b = v.attributes[m] || {}, k = v.elements[m];
    !pi(k) || !uo(k) || (Object.assign(k.style, E), Object.keys(b).forEach(function(S) {
      var U = b[S];
      U === !1 ? k.removeAttribute(S) : k.setAttribute(S, U === !0 ? "" : U);
    }));
  });
}
function lk(d) {
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
    Object.keys(v.elements).forEach(function(E) {
      var b = v.elements[E], k = v.attributes[E] || {}, S = Object.keys(v.styles.hasOwnProperty(E) ? v.styles[E] : m[E]), U = S.reduce(function(D, M) {
        return D[M] = "", D;
      }, {});
      !pi(b) || !uo(b) || (Object.assign(b.style, U), Object.keys(k).forEach(function(D) {
        b.removeAttribute(D);
      }));
    });
  };
}
const ok = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ik,
  effect: lk,
  requires: ["computeStyles"]
};
function hl(d) {
  return d.split("-")[0];
}
var hc = Math.max, Ey = Math.min, ld = Math.round;
function iS() {
  var d = navigator.userAgentData;
  return d != null && d.brands && Array.isArray(d.brands) ? d.brands.map(function(v) {
    return v.brand + "/" + v.version;
  }).join(" ") : navigator.userAgent;
}
function _x() {
  return !/^((?!chrome|android).)*safari/i.test(iS());
}
function od(d, v, m) {
  v === void 0 && (v = !1), m === void 0 && (m = !1);
  var E = d.getBoundingClientRect(), b = 1, k = 1;
  v && pi(d) && (b = d.offsetWidth > 0 && ld(E.width) / d.offsetWidth || 1, k = d.offsetHeight > 0 && ld(E.height) / d.offsetHeight || 1);
  var S = mc(d) ? vi(d) : window, U = S.visualViewport, D = !_x() && m, M = (E.left + (D && U ? U.offsetLeft : 0)) / b, L = (E.top + (D && U ? U.offsetTop : 0)) / k, z = E.width / b, q = E.height / k;
  return {
    width: z,
    height: q,
    top: L,
    right: M + z,
    bottom: L + q,
    left: M,
    x: M,
    y: L
  };
}
function cS(d) {
  var v = od(d), m = d.offsetWidth, E = d.offsetHeight;
  return Math.abs(v.width - m) <= 1 && (m = v.width), Math.abs(v.height - E) <= 1 && (E = v.height), {
    x: d.offsetLeft,
    y: d.offsetTop,
    width: m,
    height: E
  };
}
function Ox(d, v) {
  var m = v.getRootNode && v.getRootNode();
  if (d.contains(v))
    return !0;
  if (m && sS(m)) {
    var E = v;
    do {
      if (E && d.isSameNode(E))
        return !0;
      E = E.parentNode || E.host;
    } while (E);
  }
  return !1;
}
function ml(d) {
  return vi(d).getComputedStyle(d);
}
function uk(d) {
  return ["table", "td", "th"].indexOf(uo(d)) >= 0;
}
function ss(d) {
  return ((mc(d) ? d.ownerDocument : (
    // $FlowFixMe[prop-missing]
    d.document
  )) || window.document).documentElement;
}
function Ty(d) {
  return uo(d) === "html" ? d : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    d.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    d.parentNode || // DOM Element detected
    (sS(d) ? d.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ss(d)
  );
}
function ux(d) {
  return !pi(d) || // https://github.com/popperjs/popper-core/issues/837
  ml(d).position === "fixed" ? null : d.offsetParent;
}
function sk(d) {
  var v = /firefox/i.test(iS()), m = /Trident/i.test(iS());
  if (m && pi(d)) {
    var E = ml(d);
    if (E.position === "fixed")
      return null;
  }
  var b = Ty(d);
  for (sS(b) && (b = b.host); pi(b) && ["html", "body"].indexOf(uo(b)) < 0; ) {
    var k = ml(b);
    if (k.transform !== "none" || k.perspective !== "none" || k.contain === "paint" || ["transform", "perspective"].indexOf(k.willChange) !== -1 || v && k.willChange === "filter" || v && k.filter && k.filter !== "none")
      return b;
    b = b.parentNode;
  }
  return null;
}
function Ov(d) {
  for (var v = vi(d), m = ux(d); m && uk(m) && ml(m).position === "static"; )
    m = ux(m);
  return m && (uo(m) === "html" || uo(m) === "body" && ml(m).position === "static") ? v : m || sk(d) || v;
}
function fS(d) {
  return ["top", "bottom"].indexOf(d) >= 0 ? "x" : "y";
}
function Rv(d, v, m) {
  return hc(d, Ey(v, m));
}
function ck(d, v, m) {
  var E = Rv(d, v, m);
  return E > m ? m : E;
}
function Lx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Nx(d) {
  return Object.assign({}, Lx(), d);
}
function Mx(d, v) {
  return v.reduce(function(m, E) {
    return m[E] = d, m;
  }, {});
}
var fk = function(v, m) {
  return v = typeof v == "function" ? v(Object.assign({}, m.rects, {
    placement: m.placement
  })) : v, Nx(typeof v != "number" ? v : Mx(v, _v));
};
function dk(d) {
  var v, m = d.state, E = d.name, b = d.options, k = m.elements.arrow, S = m.modifiersData.popperOffsets, U = hl(m.placement), D = fS(U), M = [Ja, Fi].indexOf(U) >= 0, L = M ? "height" : "width";
  if (!(!k || !S)) {
    var z = fk(b.padding, m), q = cS(k), I = D === "y" ? Ka : Ja, ee = D === "y" ? zi : Fi, se = m.rects.reference[L] + m.rects.reference[D] - S[D] - m.rects.popper[L], re = S[D] - m.rects.reference[D], pe = Ov(k), ge = pe ? D === "y" ? pe.clientHeight || 0 : pe.clientWidth || 0 : 0, ye = se / 2 - re / 2, Se = z[I], ae = ge - q[L] - z[ee], ue = ge / 2 - q[L] / 2 + ye, ce = Rv(Se, ue, ae), He = D;
    m.modifiersData[E] = (v = {}, v[He] = ce, v.centerOffset = ce - ue, v);
  }
}
function pk(d) {
  var v = d.state, m = d.options, E = m.element, b = E === void 0 ? "[data-popper-arrow]" : E;
  if (b != null && !(typeof b == "string" && (b = v.elements.popper.querySelector(b), !b))) {
    if (process.env.NODE_ENV !== "production" && (pi(b) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Ox(v.elements.popper, b)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    v.elements.arrow = b;
  }
}
const vk = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: dk,
  effect: pk,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ud(d) {
  return d.split("-")[1];
}
var hk = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mk(d, v) {
  var m = d.x, E = d.y, b = v.devicePixelRatio || 1;
  return {
    x: ld(m * b) / b || 0,
    y: ld(E * b) / b || 0
  };
}
function sx(d) {
  var v, m = d.popper, E = d.popperRect, b = d.placement, k = d.variation, S = d.offsets, U = d.position, D = d.gpuAcceleration, M = d.adaptive, L = d.roundOffsets, z = d.isFixed, q = S.x, I = q === void 0 ? 0 : q, ee = S.y, se = ee === void 0 ? 0 : ee, re = typeof L == "function" ? L({
    x: I,
    y: se
  }) : {
    x: I,
    y: se
  };
  I = re.x, se = re.y;
  var pe = S.hasOwnProperty("x"), ge = S.hasOwnProperty("y"), ye = Ja, Se = Ka, ae = window;
  if (M) {
    var ue = Ov(m), ce = "clientHeight", He = "clientWidth";
    if (ue === vi(m) && (ue = ss(m), ml(ue).position !== "static" && U === "absolute" && (ce = "scrollHeight", He = "scrollWidth")), ue = ue, b === Ka || (b === Ja || b === Fi) && k === kv) {
      Se = zi;
      var Ie = z && ue === ae && ae.visualViewport ? ae.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        ue[ce]
      );
      se -= Ie - E.height, se *= D ? 1 : -1;
    }
    if (b === Ja || (b === Ka || b === zi) && k === kv) {
      ye = Fi;
      var ke = z && ue === ae && ae.visualViewport ? ae.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        ue[He]
      );
      I -= ke - E.width, I *= D ? 1 : -1;
    }
  }
  var xe = Object.assign({
    position: U
  }, M && hk), rt = L === !0 ? mk({
    x: I,
    y: se
  }, vi(m)) : {
    x: I,
    y: se
  };
  if (I = rt.x, se = rt.y, D) {
    var Te;
    return Object.assign({}, xe, (Te = {}, Te[Se] = ge ? "0" : "", Te[ye] = pe ? "0" : "", Te.transform = (ae.devicePixelRatio || 1) <= 1 ? "translate(" + I + "px, " + se + "px)" : "translate3d(" + I + "px, " + se + "px, 0)", Te));
  }
  return Object.assign({}, xe, (v = {}, v[Se] = ge ? se + "px" : "", v[ye] = pe ? I + "px" : "", v.transform = "", v));
}
function yk(d) {
  var v = d.state, m = d.options, E = m.gpuAcceleration, b = E === void 0 ? !0 : E, k = m.adaptive, S = k === void 0 ? !0 : k, U = m.roundOffsets, D = U === void 0 ? !0 : U;
  if (process.env.NODE_ENV !== "production") {
    var M = ml(v.elements.popper).transitionProperty || "";
    S && ["transform", "top", "right", "bottom", "left"].some(function(z) {
      return M.indexOf(z) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var L = {
    placement: hl(v.placement),
    variation: ud(v.placement),
    popper: v.elements.popper,
    popperRect: v.rects.popper,
    gpuAcceleration: b,
    isFixed: v.options.strategy === "fixed"
  };
  v.modifiersData.popperOffsets != null && (v.styles.popper = Object.assign({}, v.styles.popper, sx(Object.assign({}, L, {
    offsets: v.modifiersData.popperOffsets,
    position: v.options.strategy,
    adaptive: S,
    roundOffsets: D
  })))), v.modifiersData.arrow != null && (v.styles.arrow = Object.assign({}, v.styles.arrow, sx(Object.assign({}, L, {
    offsets: v.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: D
  })))), v.attributes.popper = Object.assign({}, v.attributes.popper, {
    "data-popper-placement": v.placement
  });
}
const gk = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: yk,
  data: {}
};
var yy = {
  passive: !0
};
function Sk(d) {
  var v = d.state, m = d.instance, E = d.options, b = E.scroll, k = b === void 0 ? !0 : b, S = E.resize, U = S === void 0 ? !0 : S, D = vi(v.elements.popper), M = [].concat(v.scrollParents.reference, v.scrollParents.popper);
  return k && M.forEach(function(L) {
    L.addEventListener("scroll", m.update, yy);
  }), U && D.addEventListener("resize", m.update, yy), function() {
    k && M.forEach(function(L) {
      L.removeEventListener("scroll", m.update, yy);
    }), U && D.removeEventListener("resize", m.update, yy);
  };
}
const Ck = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sk,
  data: {}
};
var Ek = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function gy(d) {
  return d.replace(/left|right|bottom|top/g, function(v) {
    return Ek[v];
  });
}
var xk = {
  start: "end",
  end: "start"
};
function cx(d) {
  return d.replace(/start|end/g, function(v) {
    return xk[v];
  });
}
function dS(d) {
  var v = vi(d), m = v.pageXOffset, E = v.pageYOffset;
  return {
    scrollLeft: m,
    scrollTop: E
  };
}
function pS(d) {
  return od(ss(d)).left + dS(d).scrollLeft;
}
function wk(d, v) {
  var m = vi(d), E = ss(d), b = m.visualViewport, k = E.clientWidth, S = E.clientHeight, U = 0, D = 0;
  if (b) {
    k = b.width, S = b.height;
    var M = _x();
    (M || !M && v === "fixed") && (U = b.offsetLeft, D = b.offsetTop);
  }
  return {
    width: k,
    height: S,
    x: U + pS(d),
    y: D
  };
}
function bk(d) {
  var v, m = ss(d), E = dS(d), b = (v = d.ownerDocument) == null ? void 0 : v.body, k = hc(m.scrollWidth, m.clientWidth, b ? b.scrollWidth : 0, b ? b.clientWidth : 0), S = hc(m.scrollHeight, m.clientHeight, b ? b.scrollHeight : 0, b ? b.clientHeight : 0), U = -E.scrollLeft + pS(d), D = -E.scrollTop;
  return ml(b || m).direction === "rtl" && (U += hc(m.clientWidth, b ? b.clientWidth : 0) - k), {
    width: k,
    height: S,
    x: U,
    y: D
  };
}
function vS(d) {
  var v = ml(d), m = v.overflow, E = v.overflowX, b = v.overflowY;
  return /auto|scroll|overlay|hidden/.test(m + b + E);
}
function jx(d) {
  return ["html", "body", "#document"].indexOf(uo(d)) >= 0 ? d.ownerDocument.body : pi(d) && vS(d) ? d : jx(Ty(d));
}
function Tv(d, v) {
  var m;
  v === void 0 && (v = []);
  var E = jx(d), b = E === ((m = d.ownerDocument) == null ? void 0 : m.body), k = vi(E), S = b ? [k].concat(k.visualViewport || [], vS(E) ? E : []) : E, U = v.concat(S);
  return b ? U : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    U.concat(Tv(Ty(S)))
  );
}
function lS(d) {
  return Object.assign({}, d, {
    left: d.x,
    top: d.y,
    right: d.x + d.width,
    bottom: d.y + d.height
  });
}
function Rk(d, v) {
  var m = od(d, !1, v === "fixed");
  return m.top = m.top + d.clientTop, m.left = m.left + d.clientLeft, m.bottom = m.top + d.clientHeight, m.right = m.left + d.clientWidth, m.width = d.clientWidth, m.height = d.clientHeight, m.x = m.left, m.y = m.top, m;
}
function fx(d, v, m) {
  return v === kx ? lS(wk(d, m)) : mc(v) ? Rk(v, m) : lS(bk(ss(d)));
}
function Tk(d) {
  var v = Tv(Ty(d)), m = ["absolute", "fixed"].indexOf(ml(d).position) >= 0, E = m && pi(d) ? Ov(d) : d;
  return mc(E) ? v.filter(function(b) {
    return mc(b) && Ox(b, E) && uo(b) !== "body";
  }) : [];
}
function kk(d, v, m, E) {
  var b = v === "clippingParents" ? Tk(d) : [].concat(v), k = [].concat(b, [m]), S = k[0], U = k.reduce(function(D, M) {
    var L = fx(d, M, E);
    return D.top = hc(L.top, D.top), D.right = Ey(L.right, D.right), D.bottom = Ey(L.bottom, D.bottom), D.left = hc(L.left, D.left), D;
  }, fx(d, S, E));
  return U.width = U.right - U.left, U.height = U.bottom - U.top, U.x = U.left, U.y = U.top, U;
}
function Ux(d) {
  var v = d.reference, m = d.element, E = d.placement, b = E ? hl(E) : null, k = E ? ud(E) : null, S = v.x + v.width / 2 - m.width / 2, U = v.y + v.height / 2 - m.height / 2, D;
  switch (b) {
    case Ka:
      D = {
        x: S,
        y: v.y - m.height
      };
      break;
    case zi:
      D = {
        x: S,
        y: v.y + v.height
      };
      break;
    case Fi:
      D = {
        x: v.x + v.width,
        y: U
      };
      break;
    case Ja:
      D = {
        x: v.x - m.width,
        y: U
      };
      break;
    default:
      D = {
        x: v.x,
        y: v.y
      };
  }
  var M = b ? fS(b) : null;
  if (M != null) {
    var L = M === "y" ? "height" : "width";
    switch (k) {
      case id:
        D[M] = D[M] - (v[L] / 2 - m[L] / 2);
        break;
      case kv:
        D[M] = D[M] + (v[L] / 2 - m[L] / 2);
        break;
    }
  }
  return D;
}
function Dv(d, v) {
  v === void 0 && (v = {});
  var m = v, E = m.placement, b = E === void 0 ? d.placement : E, k = m.strategy, S = k === void 0 ? d.strategy : k, U = m.boundary, D = U === void 0 ? G5 : U, M = m.rootBoundary, L = M === void 0 ? kx : M, z = m.elementContext, q = z === void 0 ? Ev : z, I = m.altBoundary, ee = I === void 0 ? !1 : I, se = m.padding, re = se === void 0 ? 0 : se, pe = Nx(typeof re != "number" ? re : Mx(re, _v)), ge = q === Ev ? q5 : Ev, ye = d.rects.popper, Se = d.elements[ee ? ge : q], ae = kk(mc(Se) ? Se : Se.contextElement || ss(d.elements.popper), D, L, S), ue = od(d.elements.reference), ce = Ux({
    reference: ue,
    element: ye,
    strategy: "absolute",
    placement: b
  }), He = lS(Object.assign({}, ye, ce)), Ie = q === Ev ? He : ue, ke = {
    top: ae.top - Ie.top + pe.top,
    bottom: Ie.bottom - ae.bottom + pe.bottom,
    left: ae.left - Ie.left + pe.left,
    right: Ie.right - ae.right + pe.right
  }, xe = d.modifiersData.offset;
  if (q === Ev && xe) {
    var rt = xe[b];
    Object.keys(ke).forEach(function(Te) {
      var Ze = [Fi, zi].indexOf(Te) >= 0 ? 1 : -1, Et = [Ka, zi].indexOf(Te) >= 0 ? "y" : "x";
      ke[Te] += rt[Et] * Ze;
    });
  }
  return ke;
}
function Dk(d, v) {
  v === void 0 && (v = {});
  var m = v, E = m.placement, b = m.boundary, k = m.rootBoundary, S = m.padding, U = m.flipVariations, D = m.allowedAutoPlacements, M = D === void 0 ? Dx : D, L = ud(E), z = L ? U ? ox : ox.filter(function(ee) {
    return ud(ee) === L;
  }) : _v, q = z.filter(function(ee) {
    return M.indexOf(ee) >= 0;
  });
  q.length === 0 && (q = z, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var I = q.reduce(function(ee, se) {
    return ee[se] = Dv(d, {
      placement: se,
      boundary: b,
      rootBoundary: k,
      padding: S
    })[hl(se)], ee;
  }, {});
  return Object.keys(I).sort(function(ee, se) {
    return I[ee] - I[se];
  });
}
function _k(d) {
  if (hl(d) === Ry)
    return [];
  var v = gy(d);
  return [cx(d), v, cx(v)];
}
function Ok(d) {
  var v = d.state, m = d.options, E = d.name;
  if (!v.modifiersData[E]._skip) {
    for (var b = m.mainAxis, k = b === void 0 ? !0 : b, S = m.altAxis, U = S === void 0 ? !0 : S, D = m.fallbackPlacements, M = m.padding, L = m.boundary, z = m.rootBoundary, q = m.altBoundary, I = m.flipVariations, ee = I === void 0 ? !0 : I, se = m.allowedAutoPlacements, re = v.options.placement, pe = hl(re), ge = pe === re, ye = D || (ge || !ee ? [gy(re)] : _k(re)), Se = [re].concat(ye).reduce(function(Ge, mt) {
      return Ge.concat(hl(mt) === Ry ? Dk(v, {
        placement: mt,
        boundary: L,
        rootBoundary: z,
        padding: M,
        flipVariations: ee,
        allowedAutoPlacements: se
      }) : mt);
    }, []), ae = v.rects.reference, ue = v.rects.popper, ce = /* @__PURE__ */ new Map(), He = !0, Ie = Se[0], ke = 0; ke < Se.length; ke++) {
      var xe = Se[ke], rt = hl(xe), Te = ud(xe) === id, Ze = [Ka, zi].indexOf(rt) >= 0, Et = Ze ? "width" : "height", Qe = Dv(v, {
        placement: xe,
        boundary: L,
        rootBoundary: z,
        altBoundary: q,
        padding: M
      }), De = Ze ? Te ? Fi : Ja : Te ? zi : Ka;
      ae[Et] > ue[Et] && (De = gy(De));
      var ve = gy(De), ze = [];
      if (k && ze.push(Qe[rt] <= 0), U && ze.push(Qe[De] <= 0, Qe[ve] <= 0), ze.every(function(Ge) {
        return Ge;
      })) {
        Ie = xe, He = !1;
        break;
      }
      ce.set(xe, ze);
    }
    if (He)
      for (var N = ee ? 3 : 1, ne = function(mt) {
        var dt = Se.find(function(xt) {
          var ut = ce.get(xt);
          if (ut)
            return ut.slice(0, mt).every(function(At) {
              return At;
            });
        });
        if (dt)
          return Ie = dt, "break";
      }, we = N; we > 0; we--) {
        var at = ne(we);
        if (at === "break")
          break;
      }
    v.placement !== Ie && (v.modifiersData[E]._skip = !0, v.placement = Ie, v.reset = !0);
  }
}
const Lk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ok,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dx(d, v, m) {
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
function px(d) {
  return [Ka, Fi, zi, Ja].some(function(v) {
    return d[v] >= 0;
  });
}
function Nk(d) {
  var v = d.state, m = d.name, E = v.rects.reference, b = v.rects.popper, k = v.modifiersData.preventOverflow, S = Dv(v, {
    elementContext: "reference"
  }), U = Dv(v, {
    altBoundary: !0
  }), D = dx(S, E), M = dx(U, b, k), L = px(D), z = px(M);
  v.modifiersData[m] = {
    referenceClippingOffsets: D,
    popperEscapeOffsets: M,
    isReferenceHidden: L,
    hasPopperEscaped: z
  }, v.attributes.popper = Object.assign({}, v.attributes.popper, {
    "data-popper-reference-hidden": L,
    "data-popper-escaped": z
  });
}
const Mk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Nk
};
function jk(d, v, m) {
  var E = hl(d), b = [Ja, Ka].indexOf(E) >= 0 ? -1 : 1, k = typeof m == "function" ? m(Object.assign({}, v, {
    placement: d
  })) : m, S = k[0], U = k[1];
  return S = S || 0, U = (U || 0) * b, [Ja, Fi].indexOf(E) >= 0 ? {
    x: U,
    y: S
  } : {
    x: S,
    y: U
  };
}
function Uk(d) {
  var v = d.state, m = d.options, E = d.name, b = m.offset, k = b === void 0 ? [0, 0] : b, S = Dx.reduce(function(L, z) {
    return L[z] = jk(z, v.rects, k), L;
  }, {}), U = S[v.placement], D = U.x, M = U.y;
  v.modifiersData.popperOffsets != null && (v.modifiersData.popperOffsets.x += D, v.modifiersData.popperOffsets.y += M), v.modifiersData[E] = S;
}
const Ak = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Uk
};
function zk(d) {
  var v = d.state, m = d.name;
  v.modifiersData[m] = Ux({
    reference: v.rects.reference,
    element: v.rects.popper,
    strategy: "absolute",
    placement: v.placement
  });
}
const Fk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: zk,
  data: {}
};
function Hk(d) {
  return d === "x" ? "y" : "x";
}
function Vk(d) {
  var v = d.state, m = d.options, E = d.name, b = m.mainAxis, k = b === void 0 ? !0 : b, S = m.altAxis, U = S === void 0 ? !1 : S, D = m.boundary, M = m.rootBoundary, L = m.altBoundary, z = m.padding, q = m.tether, I = q === void 0 ? !0 : q, ee = m.tetherOffset, se = ee === void 0 ? 0 : ee, re = Dv(v, {
    boundary: D,
    rootBoundary: M,
    padding: z,
    altBoundary: L
  }), pe = hl(v.placement), ge = ud(v.placement), ye = !ge, Se = fS(pe), ae = Hk(Se), ue = v.modifiersData.popperOffsets, ce = v.rects.reference, He = v.rects.popper, Ie = typeof se == "function" ? se(Object.assign({}, v.rects, {
    placement: v.placement
  })) : se, ke = typeof Ie == "number" ? {
    mainAxis: Ie,
    altAxis: Ie
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Ie), xe = v.modifiersData.offset ? v.modifiersData.offset[v.placement] : null, rt = {
    x: 0,
    y: 0
  };
  if (ue) {
    if (k) {
      var Te, Ze = Se === "y" ? Ka : Ja, Et = Se === "y" ? zi : Fi, Qe = Se === "y" ? "height" : "width", De = ue[Se], ve = De + re[Ze], ze = De - re[Et], N = I ? -He[Qe] / 2 : 0, ne = ge === id ? ce[Qe] : He[Qe], we = ge === id ? -He[Qe] : -ce[Qe], at = v.elements.arrow, Ge = I && at ? cS(at) : {
        width: 0,
        height: 0
      }, mt = v.modifiersData["arrow#persistent"] ? v.modifiersData["arrow#persistent"].padding : Lx(), dt = mt[Ze], xt = mt[Et], ut = Rv(0, ce[Qe], Ge[Qe]), At = ye ? ce[Qe] / 2 - N - ut - dt - ke.mainAxis : ne - ut - dt - ke.mainAxis, br = ye ? -ce[Qe] / 2 + N + ut + xt + ke.mainAxis : we + ut + xt + ke.mainAxis, Hn = v.elements.arrow && Ov(v.elements.arrow), Rr = Hn ? Se === "y" ? Hn.clientTop || 0 : Hn.clientLeft || 0 : 0, un = (Te = xe == null ? void 0 : xe[Se]) != null ? Te : 0, Vn = De + At - un - Rr, Mn = De + br - un, Dn = Rv(I ? Ey(ve, Vn) : ve, De, I ? hc(ze, Mn) : ze);
      ue[Se] = Dn, rt[Se] = Dn - De;
    }
    if (U) {
      var Sn, Tr = Se === "x" ? Ka : Ja, kr = Se === "x" ? zi : Fi, sn = ue[ae], jn = ae === "y" ? "height" : "width", sr = sn + re[Tr], Qn = sn - re[kr], cr = [Ka, Ja].indexOf(pe) !== -1, Bn = (Sn = xe == null ? void 0 : xe[ae]) != null ? Sn : 0, fr = cr ? sr : sn - ce[jn] - He[jn] - Bn + ke.altAxis, cn = cr ? sn + ce[jn] + He[jn] - Bn - ke.altAxis : Qn, er = I && cr ? ck(fr, sn, cn) : Rv(I ? fr : sr, sn, I ? cn : Qn);
      ue[ae] = er, rt[ae] = er - sn;
    }
    v.modifiersData[E] = rt;
  }
}
const Bk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vk,
  requiresIfExists: ["offset"]
};
function Pk(d) {
  return {
    scrollLeft: d.scrollLeft,
    scrollTop: d.scrollTop
  };
}
function $k(d) {
  return d === vi(d) || !pi(d) ? dS(d) : Pk(d);
}
function Ik(d) {
  var v = d.getBoundingClientRect(), m = ld(v.width) / d.offsetWidth || 1, E = ld(v.height) / d.offsetHeight || 1;
  return m !== 1 || E !== 1;
}
function Yk(d, v, m) {
  m === void 0 && (m = !1);
  var E = pi(v), b = pi(v) && Ik(v), k = ss(v), S = od(d, b, m), U = {
    scrollLeft: 0,
    scrollTop: 0
  }, D = {
    x: 0,
    y: 0
  };
  return (E || !E && !m) && ((uo(v) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vS(k)) && (U = $k(v)), pi(v) ? (D = od(v, !0), D.x += v.clientLeft, D.y += v.clientTop) : k && (D.x = pS(k))), {
    x: S.left + U.scrollLeft - D.x,
    y: S.top + U.scrollTop - D.y,
    width: S.width,
    height: S.height
  };
}
function Wk(d) {
  var v = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), E = [];
  d.forEach(function(k) {
    v.set(k.name, k);
  });
  function b(k) {
    m.add(k.name);
    var S = [].concat(k.requires || [], k.requiresIfExists || []);
    S.forEach(function(U) {
      if (!m.has(U)) {
        var D = v.get(U);
        D && b(D);
      }
    }), E.push(k);
  }
  return d.forEach(function(k) {
    m.has(k.name) || b(k);
  }), E;
}
function Qk(d) {
  var v = Wk(d);
  return aS.reduce(function(m, E) {
    return m.concat(v.filter(function(b) {
      return b.phase === E;
    }));
  }, []);
}
function Gk(d) {
  var v;
  return function() {
    return v || (v = new Promise(function(m) {
      Promise.resolve().then(function() {
        v = void 0, m(d());
      });
    })), v;
  };
}
function os(d) {
  for (var v = arguments.length, m = new Array(v > 1 ? v - 1 : 0), E = 1; E < v; E++)
    m[E - 1] = arguments[E];
  return [].concat(m).reduce(function(b, k) {
    return b.replace(/%s/, k);
  }, d);
}
var vc = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', qk = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', vx = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Xk(d) {
  d.forEach(function(v) {
    [].concat(Object.keys(v), vx).filter(function(m, E, b) {
      return b.indexOf(m) === E;
    }).forEach(function(m) {
      switch (m) {
        case "name":
          typeof v.name != "string" && console.error(os(vc, String(v.name), '"name"', '"string"', '"' + String(v.name) + '"'));
          break;
        case "enabled":
          typeof v.enabled != "boolean" && console.error(os(vc, v.name, '"enabled"', '"boolean"', '"' + String(v.enabled) + '"'));
          break;
        case "phase":
          aS.indexOf(v.phase) < 0 && console.error(os(vc, v.name, '"phase"', "either " + aS.join(", "), '"' + String(v.phase) + '"'));
          break;
        case "fn":
          typeof v.fn != "function" && console.error(os(vc, v.name, '"fn"', '"function"', '"' + String(v.fn) + '"'));
          break;
        case "effect":
          v.effect != null && typeof v.effect != "function" && console.error(os(vc, v.name, '"effect"', '"function"', '"' + String(v.fn) + '"'));
          break;
        case "requires":
          v.requires != null && !Array.isArray(v.requires) && console.error(os(vc, v.name, '"requires"', '"array"', '"' + String(v.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(v.requiresIfExists) || console.error(os(vc, v.name, '"requiresIfExists"', '"array"', '"' + String(v.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + v.name + '" modifier, valid properties are ' + vx.map(function(E) {
            return '"' + E + '"';
          }).join(", ") + '; but "' + m + '" was provided.');
      }
      v.requires && v.requires.forEach(function(E) {
        d.find(function(b) {
          return b.name === E;
        }) == null && console.error(os(qk, String(v.name), E, E));
      });
    });
  });
}
function Zk(d, v) {
  var m = /* @__PURE__ */ new Set();
  return d.filter(function(E) {
    var b = v(E);
    if (!m.has(b))
      return m.add(b), !0;
  });
}
function Kk(d) {
  var v = d.reduce(function(m, E) {
    var b = m[E.name];
    return m[E.name] = b ? Object.assign({}, b, E, {
      options: Object.assign({}, b.options, E.options),
      data: Object.assign({}, b.data, E.data)
    }) : E, m;
  }, {});
  return Object.keys(v).map(function(m) {
    return v[m];
  });
}
var hx = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Jk = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", mx = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yx() {
  for (var d = arguments.length, v = new Array(d), m = 0; m < d; m++)
    v[m] = arguments[m];
  return !v.some(function(E) {
    return !(E && typeof E.getBoundingClientRect == "function");
  });
}
function e6(d) {
  d === void 0 && (d = {});
  var v = d, m = v.defaultModifiers, E = m === void 0 ? [] : m, b = v.defaultOptions, k = b === void 0 ? mx : b;
  return function(U, D, M) {
    M === void 0 && (M = k);
    var L = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mx, k),
      modifiersData: {},
      elements: {
        reference: U,
        popper: D
      },
      attributes: {},
      styles: {}
    }, z = [], q = !1, I = {
      state: L,
      setOptions: function(pe) {
        var ge = typeof pe == "function" ? pe(L.options) : pe;
        se(), L.options = Object.assign({}, k, L.options, ge), L.scrollParents = {
          reference: mc(U) ? Tv(U) : U.contextElement ? Tv(U.contextElement) : [],
          popper: Tv(D)
        };
        var ye = Qk(Kk([].concat(E, L.options.modifiers)));
        if (L.orderedModifiers = ye.filter(function(xe) {
          return xe.enabled;
        }), process.env.NODE_ENV !== "production") {
          var Se = Zk([].concat(ye, L.options.modifiers), function(xe) {
            var rt = xe.name;
            return rt;
          });
          if (Xk(Se), hl(L.options.placement) === Ry) {
            var ae = L.orderedModifiers.find(function(xe) {
              var rt = xe.name;
              return rt === "flip";
            });
            ae || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var ue = ml(D), ce = ue.marginTop, He = ue.marginRight, Ie = ue.marginBottom, ke = ue.marginLeft;
          [ce, He, Ie, ke].some(function(xe) {
            return parseFloat(xe);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return ee(), I.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!q) {
          var pe = L.elements, ge = pe.reference, ye = pe.popper;
          if (!yx(ge, ye)) {
            process.env.NODE_ENV !== "production" && console.error(hx);
            return;
          }
          L.rects = {
            reference: Yk(ge, Ov(ye), L.options.strategy === "fixed"),
            popper: cS(ye)
          }, L.reset = !1, L.placement = L.options.placement, L.orderedModifiers.forEach(function(xe) {
            return L.modifiersData[xe.name] = Object.assign({}, xe.data);
          });
          for (var Se = 0, ae = 0; ae < L.orderedModifiers.length; ae++) {
            if (process.env.NODE_ENV !== "production" && (Se += 1, Se > 100)) {
              console.error(Jk);
              break;
            }
            if (L.reset === !0) {
              L.reset = !1, ae = -1;
              continue;
            }
            var ue = L.orderedModifiers[ae], ce = ue.fn, He = ue.options, Ie = He === void 0 ? {} : He, ke = ue.name;
            typeof ce == "function" && (L = ce({
              state: L,
              options: Ie,
              name: ke,
              instance: I
            }) || L);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Gk(function() {
        return new Promise(function(re) {
          I.forceUpdate(), re(L);
        });
      }),
      destroy: function() {
        se(), q = !0;
      }
    };
    if (!yx(U, D))
      return process.env.NODE_ENV !== "production" && console.error(hx), I;
    I.setOptions(M).then(function(re) {
      !q && M.onFirstUpdate && M.onFirstUpdate(re);
    });
    function ee() {
      L.orderedModifiers.forEach(function(re) {
        var pe = re.name, ge = re.options, ye = ge === void 0 ? {} : ge, Se = re.effect;
        if (typeof Se == "function") {
          var ae = Se({
            state: L,
            name: pe,
            instance: I,
            options: ye
          }), ue = function() {
          };
          z.push(ae || ue);
        }
      });
    }
    function se() {
      z.forEach(function(re) {
        return re();
      }), z = [];
    }
    return I;
  };
}
var t6 = [Ck, Fk, gk, ok, Ak, Lk, Bk, vk, Mk], n6 = /* @__PURE__ */ e6({
  defaultModifiers: t6
}), r6 = typeof Element < "u", a6 = typeof Map == "function", i6 = typeof Set == "function", l6 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Sy(d, v) {
  if (d === v)
    return !0;
  if (d && v && typeof d == "object" && typeof v == "object") {
    if (d.constructor !== v.constructor)
      return !1;
    var m, E, b;
    if (Array.isArray(d)) {
      if (m = d.length, m != v.length)
        return !1;
      for (E = m; E-- !== 0; )
        if (!Sy(d[E], v[E]))
          return !1;
      return !0;
    }
    var k;
    if (a6 && d instanceof Map && v instanceof Map) {
      if (d.size !== v.size)
        return !1;
      for (k = d.entries(); !(E = k.next()).done; )
        if (!v.has(E.value[0]))
          return !1;
      for (k = d.entries(); !(E = k.next()).done; )
        if (!Sy(E.value[1], v.get(E.value[0])))
          return !1;
      return !0;
    }
    if (i6 && d instanceof Set && v instanceof Set) {
      if (d.size !== v.size)
        return !1;
      for (k = d.entries(); !(E = k.next()).done; )
        if (!v.has(E.value[0]))
          return !1;
      return !0;
    }
    if (l6 && ArrayBuffer.isView(d) && ArrayBuffer.isView(v)) {
      if (m = d.length, m != v.length)
        return !1;
      for (E = m; E-- !== 0; )
        if (d[E] !== v[E])
          return !1;
      return !0;
    }
    if (d.constructor === RegExp)
      return d.source === v.source && d.flags === v.flags;
    if (d.valueOf !== Object.prototype.valueOf && typeof d.valueOf == "function" && typeof v.valueOf == "function")
      return d.valueOf() === v.valueOf();
    if (d.toString !== Object.prototype.toString && typeof d.toString == "function" && typeof v.toString == "function")
      return d.toString() === v.toString();
    if (b = Object.keys(d), m = b.length, m !== Object.keys(v).length)
      return !1;
    for (E = m; E-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(v, b[E]))
        return !1;
    if (r6 && d instanceof Element)
      return !1;
    for (E = m; E-- !== 0; )
      if (!((b[E] === "_owner" || b[E] === "__v" || b[E] === "__o") && d.$$typeof) && !Sy(d[b[E]], v[b[E]]))
        return !1;
    return !0;
  }
  return d !== d && v !== v;
}
var o6 = function(v, m) {
  try {
    return Sy(v, m);
  } catch (E) {
    if ((E.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw E;
  }
};
const u6 = /* @__PURE__ */ gx(o6);
var s6 = [], c6 = function(v, m, E) {
  E === void 0 && (E = {});
  var b = Oe.useRef(null), k = {
    onFirstUpdate: E.onFirstUpdate,
    placement: E.placement || "bottom",
    strategy: E.strategy || "absolute",
    modifiers: E.modifiers || s6
  }, S = Oe.useState({
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
  }), U = S[0], D = S[1], M = Oe.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(I) {
        var ee = I.state, se = Object.keys(ee.elements);
        Q5.flushSync(function() {
          D({
            styles: ex(se.map(function(re) {
              return [re, ee.styles[re] || {}];
            })),
            attributes: ex(se.map(function(re) {
              return [re, ee.attributes[re]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), L = Oe.useMemo(function() {
    var q = {
      onFirstUpdate: k.onFirstUpdate,
      placement: k.placement,
      strategy: k.strategy,
      modifiers: [].concat(k.modifiers, [M, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return u6(b.current, q) ? b.current || q : (b.current = q, q);
  }, [k.onFirstUpdate, k.placement, k.strategy, k.modifiers, M]), z = Oe.useRef();
  return tx(function() {
    z.current && z.current.setOptions(L);
  }, [L]), tx(function() {
    if (!(v == null || m == null)) {
      var q = E.createPopper || n6, I = q(v, m, L);
      return z.current = I, function() {
        I.destroy(), z.current = null;
      };
    }
  }, [v, m, E.createPopper]), {
    state: z.current ? z.current.state : null,
    styles: U.styles,
    attributes: U.attributes,
    update: z.current ? z.current.update : null,
    forceUpdate: z.current ? z.current.forceUpdate : null
  };
};
var sd = /* @__PURE__ */ ((d) => (d.top = "top", d.bottom = "bottom", d.right = "right", d.left = "left", d.topStart = "top-start", d.topEnd = "top-end", d.bottomStart = "bottom-start", d.bottomEnd = "bottom-end", d.rightStart = "right-start", d.rightEnd = "right-end", d.leftStart = "left-start", d.leftEnd = "left-end", d.auto = "auto", d.autoStart = "auto-start", d.autoEnd = "auto-end", d))(sd || {}), us = /* @__PURE__ */ ((d) => (d.click = "click", d.hover = "hover", d))(us || {});
const ky = ({
  children: d,
  referenceNode: v,
  placement: m,
  arrow: E = !0,
  trigger: b = "click",
  wrapperClassName: k,
  fullRefWidth: S = !1,
  isOpen: U = !1,
  onChange: D
}) => {
  const [M, L] = Oe.useState(U), [z, q] = Oe.useState(null), [I, ee] = Oe.useState(null), [se, re] = Oe.useState(null), ge = Oe.useRef(document).current, { styles: ye, attributes: Se, forceUpdate: ae } = c6(z, I, {
    placement: m,
    modifiers: Oe.useMemo(() => S ? [
      { name: "arrow", options: { element: se } },
      { name: "offset", options: { offset: [0, 5] } },
      {
        name: "sameWidth",
        options: {},
        enabled: !0,
        fn: ({ state: ke }) => {
          ke.styles.popper.width = `${ke.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"]
      }
    ] : [
      { name: "arrow", options: { element: se } },
      { name: "offset", options: { offset: [0, 5] } }
    ], [S, se])
  });
  Oe.useEffect(() => {
    U !== M && L(U);
  }, [U]), Oe.useEffect(() => {
    const ke = (xe) => {
      const { top: rt, bottom: Te, left: Ze, right: Et } = I == null ? void 0 : I.getBoundingClientRect();
      !(z != null && z.contains(xe.target)) && (xe.clientY < rt || xe.clientY > Te || xe.clientX < Ze || xe.clientX > Et) && (L(!1), D && D(!1));
    };
    return ge.addEventListener("click", ke), () => {
      ge.removeEventListener("click", ke);
    };
  }, [ge, I, z, M, D]), Oe.useEffect(() => {
    ae && ae();
  }, [M, ae]);
  const ue = (ke) => {
    b === us.hover && (ke.stopPropagation(), D ? D(!0) : L(!0));
  }, ce = (ke) => {
    b === us.hover && (ke.stopPropagation(), D ? D(!1) : L(!1));
  }, He = () => {
    b === us.click && (D ? D(!M) : L(!M));
  }, Ie = Oe.cloneElement(v, {
    ref: q,
    onMouseEnter: ue,
    onMouseLeave: ce,
    onClick: He,
    role: "button"
  });
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx("div", { className: "Popover-reference", children: Ie }),
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: bt({
          Popover: !0,
          [k || ""]: !!k
        }),
        children: /* @__PURE__ */ R.jsxs(
          "div",
          {
            className: "Popover-content",
            ...Se.popper,
            style: ye.popper,
            ref: ee,
            "data-show": M,
            children: [
              /* @__PURE__ */ R.jsx("div", { children: M && d }),
              /* @__PURE__ */ R.jsx(
                "span",
                {
                  ref: re,
                  style: ye.arrow,
                  ...Se.arrow,
                  className: "arrow",
                  "data-hide": !E || !M
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
const A6 = ({
  isOpen: d,
  children: v,
  onClose: m,
  closable: E = !1,
  escClose: b = !1,
  width: k,
  height: S,
  loading: U
}) => {
  const M = Oe.useRef(document).current, L = (z) => {
    z.stopPropagation(), E && m && m();
  };
  return Oe.useEffect(() => {
    const z = (q) => {
      b && q.key === "Escape" && m && m();
    };
    return d && (M.body.style.overflow = "hidden", M.addEventListener("keydown", z, !1)), () => {
      M.body.style.overflow = "unset", M.removeEventListener("keydown", z, !1);
    };
  }, [d, M, b, m]), d ? /* @__PURE__ */ R.jsx("div", { className: "Modal Modal-wrapper", onClick: L, children: /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "Modal-content",
      onClick: (z) => z.stopPropagation(),
      style: {
        width: k,
        height: S
      },
      children: [
        U && /* @__PURE__ */ R.jsx("div", { className: "Modal-spining", children: /* @__PURE__ */ R.jsx(xy, {}) }),
        v
      ]
    }
  ) }) : null;
};
const z6 = ({ onChange: d, items: v, divider: m = !0, activeKey: E = "" }) => {
  const [b, k] = Oe.useState(v[0].key);
  Oe.useEffect(() => {
    b !== v[0].key && k(E);
  }, [E]);
  const S = (U) => {
    U.onClick ? U.onClick(U) : d == null || d(U), k(U.key);
  };
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: bt({
        Tabs: !0,
        ["Tabs-with-bottom-border"]: m
      }),
      children: /* @__PURE__ */ R.jsx("div", { className: "Tabs-TabsNavigation", children: v.map((U) => /* @__PURE__ */ R.jsxs(
        "div",
        {
          className: bt({
            ["Tabs-TabsNavigation-wrapper-item"]: !0,
            ["Tabs-TabsNavigation-wrapper-item-has-notification"]: U.notificationCount && U.notificationCount > 0
          }),
          children: [
            /* @__PURE__ */ R.jsx(
              "button",
              {
                "aria-label": U.ariaLabel || "",
                onClick: () => S(U),
                disabled: U.disabled,
                className: bt({
                  ["Tabs-TabsNavigation-item"]: !0,
                  ["Tabs-TabsNavigation-item-active"]: b === U.key,
                  ["Tabs-TabsNavigation-item-disabled"]: U.disabled
                }),
                children: U.name
              }
            ),
            U.notificationCount && /* @__PURE__ */ R.jsx("span", { className: "Tabs-TabsNavigation-notificationCount", children: U.notificationCount > 99 ? "99+" : U.notificationCount })
          ]
        },
        U.key
      )) })
    }
  );
};
var Ax = /* @__PURE__ */ ((d) => (d.indeterminate = "indeterminate", d))(Ax || {});
const f6 = (d) => {
  const { disabled: v, children: m, value: E, label: b, className: k, onChange: S, ariaLabel: U, error: D } = d, [M, L] = Oe.useState(!1), [z, q] = Oe.useState(!1), [I, ee] = Oe.useState(!1), [se, re] = Oe.useState(v), pe = (ye) => {
    v || (L(!M), S && S(!M, ye));
  }, ge = (ye) => {
    (ye.key === "Enter" || ye.key === " ") && !v && (L(!M), S && S(!M));
  };
  return Oe.useEffect(() => {
    re(v);
  }, [v]), Oe.useEffect(() => {
    const ye = typeof E == "boolean" ? E : !1;
    E === Ax.indeterminate ? (q(!0), L(!1)) : (q(!1), L(ye));
  }, [E]), Oe.useEffect(() => {
    ee(!!D);
  }, [D]), /* @__PURE__ */ R.jsx(R.Fragment, { children: /* @__PURE__ */ R.jsx("div", { className: "Checkbox", children: /* @__PURE__ */ R.jsxs("label", { children: [
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: bt({
          [k || ""]: !!k,
          ["Checkbox-checked"]: M || z,
          ["Checkbox-unchecked"]: !M && !z,
          ["Checkbox-error"]: I,
          ["Checkbox-disabled"]: se
        }),
        children: /* @__PURE__ */ R.jsxs(
          "div",
          {
            className: "Checkbox-container",
            role: "input",
            tabIndex: 0,
            onKeyDown: ge,
            children: [
              /* @__PURE__ */ R.jsx(
                "input",
                {
                  type: "checkbox",
                  onChange: pe,
                  "aria-label": U || "checkbox",
                  tabIndex: -1,
                  disabled: v
                }
              ),
              M && /* @__PURE__ */ R.jsx(A5, {}),
              z && !M && /* @__PURE__ */ R.jsx(z5, {})
            ]
          }
        )
      }
    ),
    (b || m) && /* @__PURE__ */ R.jsx("div", { className: "Checkbox-label", children: b || m })
  ] }) }) });
};
var ad = /* @__PURE__ */ ((d) => (d.asc = "asc", d.desc = "desc", d))(ad || {}), d6 = /* @__PURE__ */ ((d) => (d.start = "start", d.center = "center", d.end = "end", d))(d6 || {}), zx = /* @__PURE__ */ ((d) => (d.regular = "regular", d.minimal = "minimal", d))(zx || {});
const p6 = ({ activeSort: d, onClick: v, children: m }) => {
  const E = (k) => {
    k.key === "Enter" && v();
  }, b = (k) => {
    k.stopPropagation(), v();
  };
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "Sorter",
      onClick: b,
      tabIndex: 0,
      role: "button",
      onKeyDown: E,
      children: [
        m,
        /* @__PURE__ */ R.jsxs("span", { className: "Sorter-inner", children: [
          /* @__PURE__ */ R.jsx(
            "span",
            {
              role: "presentation",
              className: bt({
                ["Sorter-up"]: !0,
                icon: !0,
                active: d === ad.asc
              }),
              children: /* @__PURE__ */ R.jsx(F5, {})
            }
          ),
          /* @__PURE__ */ R.jsx(
            "span",
            {
              role: "presentation",
              className: bt({
                ["Sorter-down"]: !0,
                icon: !0,
                active: d === ad.desc
              }),
              children: /* @__PURE__ */ R.jsx(H5, {})
            }
          )
        ] })
      ]
    }
  );
};
function F6({
  data: d,
  columns: v,
  hasSelected: m,
  scroll: E,
  loading: b,
  notFoundContent: k,
  rtl: S = !1,
  className: U,
  leftSideSelectedNode: D,
  rightSideSelectedNode: M,
  onChange: L,
  type: z = zx.regular
}) {
  const [q, I] = Oe.useState({}), ee = Oe.useMemo(() => v.map((pe) => pe != null && pe.width ? `${pe.width}%` : "1fr").join(" "), [v]), se = (re) => {
    var ge;
    let pe = null;
    q != null && q[re.key] || (pe = ad.asc), (q == null ? void 0 : q[re.key]) === ad.asc && (pe = ad.desc), I({ [re.key]: pe }), (ge = re == null ? void 0 : re.onSort) == null || ge.call(re, re.key, pe);
  };
  return /* @__PURE__ */ R.jsx("div", { className: "Table-container", children: /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: bt({
        Table: !0,
        ["Table-rtl"]: S,
        [U || ""]: !!U,
        [`Table-${z}`]: !!z
      }),
      children: [
        /* @__PURE__ */ R.jsx(
          "div",
          {
            className: bt({
              ["Table-header"]: !0,
              action: !!m
            }),
            children: m ? /* @__PURE__ */ R.jsxs(
              "div",
              {
                className: bt({
                  ["Table-header-summary"]: !0,
                  ["with-scroll"]: !!(E != null && E.y)
                }),
                children: [
                  /* @__PURE__ */ R.jsx("div", { children: D }),
                  /* @__PURE__ */ R.jsx("div", { children: M })
                ]
              }
            ) : /* @__PURE__ */ R.jsx(
              "div",
              {
                className: bt({
                  ["Table-row"]: !0,
                  ["with-scroll"]: !!(E != null && E.y)
                }),
                style: { gridTemplateColumns: ee },
                children: v.map((re) => /* @__PURE__ */ R.jsx(
                  "div",
                  {
                    className: bt({
                      ["Table-cell"]: !0,
                      [`Table-cell-align-${re.align}`]: !!re.align
                    }),
                    children: /* @__PURE__ */ R.jsx("div", { children: re.onSort ? /* @__PURE__ */ R.jsx(
                      p6,
                      {
                        activeSort: q == null ? void 0 : q[re.key],
                        onClick: () => se(re),
                        children: /* @__PURE__ */ R.jsx("div", { className: "Table-cell-ellipsis", children: re.title })
                      }
                    ) : /* @__PURE__ */ R.jsx("div", { className: "Table-cell-ellipsis", children: re.title }) })
                  },
                  `table-header-key-${re.key}`
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ R.jsxs("div", { className: "Table-content", children: [
          b && /* @__PURE__ */ R.jsx("div", { className: "Table-spining", children: /* @__PURE__ */ R.jsx(xy, {}) }),
          d.length ? /* @__PURE__ */ R.jsx(
            "div",
            {
              className: "Table-body",
              style: {
                height: E == null ? void 0 : E.y,
                overflowY: E != null && E.y ? "scroll" : "hidden"
              },
              children: d.map((re, pe) => /* @__PURE__ */ R.jsx(
                "div",
                {
                  className: "Table-row",
                  style: { gridTemplateColumns: ee },
                  role: "button",
                  onClick: () => L && L(re),
                  tabIndex: 0,
                  children: v.map((ge) => /* @__PURE__ */ R.jsx(
                    "div",
                    {
                      className: bt({
                        ["Table-cell"]: !0,
                        [`Table-cell-align-${ge.align}`]: !!ge.align
                      }),
                      children: /* @__PURE__ */ R.jsx("div", { className: "Table-cell-ellipsis", children: ge.render ? ge.render(re, ge) : re[ge.key] })
                    },
                    `table-body-row-cell-key-${ge.key}`
                  ))
                },
                "table-body-row-key-" + pe
              ))
            }
          ) : /* @__PURE__ */ R.jsx("div", { className: "Table-placeholder", style: { height: E == null ? void 0 : E.y }, children: k })
        ] })
      ]
    }
  ) });
}
const oS = [20, 40, 60, 80, 100], v6 = {
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
const h6 = ({
  localization: d,
  totalPages: v,
  ariaLabel: m,
  onChange: E,
  limit: b
}) => {
  const [k, S] = Oe.useState(""), U = (M) => {
    M.key == "Enter" && D(k);
  }, D = (M) => {
    const L = Number(M);
    return S(""), L > 0 ? E(L > v ? v : L, b) : M === "" ? !1 : E(1, b);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "GoToPage", children: [
    /* @__PURE__ */ R.jsx("span", { children: d == null ? void 0 : d.go_to }),
    /* @__PURE__ */ R.jsx(
      uS,
      {
        value: k,
        disabled: v === 1,
        handleChange: (M) => S(M.target.value),
        ariaLabel: m + " " + (d == null ? void 0 : d.go_to_pages),
        handleBlur: (M) => D(M.target.value),
        width: 40,
        handleKeyPress: U,
        type: oo.number
      }
    ),
    /* @__PURE__ */ R.jsx("span", { children: d == null ? void 0 : d.page })
  ] });
};
const m6 = ({
  currentPage: d,
  totalItems: v,
  rangeLabel: m,
  limit: E,
  localization: b,
  ariaLabel: k,
  changeLimit: S,
  rangeDropDownPlacement: U = sd.bottom
}) => {
  const [D, M] = Oe.useState(!1), L = (z) => {
    S(z), M(!1);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "RangeLimits", children: [
    /* @__PURE__ */ R.jsx(
      ky,
      {
        isOpen: D,
        onChange: (z) => M(z),
        arrow: !1,
        placement: U,
        wrapperClassName: "RangeLimits-range-drop-down",
        referenceNode: /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
          Zr,
          {
            className: "RangeLimits-limiter-button",
            rightIcon: /* @__PURE__ */ R.jsx(U5, {}),
            text: String(E),
            ariaLabel: k + " " + (b == null ? void 0 : b.limit)
          }
        ) }),
        trigger: us.click,
        children: /* @__PURE__ */ R.jsx("div", { children: oS.map((z) => /* @__PURE__ */ R.jsx(
          Zr,
          {
            handleClick: () => L(z),
            disabled: z === E,
            theme: on.noBorder,
            text: String(z),
            ariaLabel: k + " " + (b == null ? void 0 : b.limit) + " " + z
          },
          "range-limits-limit-item-" + z
        )) })
      }
    ),
    m && /* @__PURE__ */ R.jsxs("div", { className: "RangeLimits-range-label", children: [
      /* @__PURE__ */ R.jsx("span", { "data-testid": "paginationRangeFrom", children: d === 1 ? 1 : (d - 1) * E + 1 }),
      " - ",
      /* @__PURE__ */ R.jsxs("span", { "data-testid": "paginationRangeTo", children: [
        E * d <= v ? E * d : v || E,
        " "
      ] }),
      v > 0 && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        b == null ? void 0 : b.of,
        " ",
        /* @__PURE__ */ R.jsx("span", { "data-testid": "paginationRangeTotal", children: v })
      ] })
    ] })
  ] });
};
const y6 = ({
  ariaLabel: d,
  localization: v,
  currentPage: m,
  onChange: E,
  limit: b,
  totalPages: k,
  totalItems: S
}) => {
  const U = (M) => {
    const L = m + M;
    return L > k || L < 1 ? L < 1 ? E(1, b) : E(k, b) : E(L, b);
  }, D = Oe.useMemo(() => {
    const M = Array.from({ length: k }, (L, z) => z + 1);
    if (k <= 5)
      return M;
    if (k > 5) {
      const L = Math.max(m - 2, 1), z = Math.min(m + 2, M.length);
      return M.slice(L - 1, z);
    }
    return [];
  }, [k, m]);
  return /* @__PURE__ */ R.jsxs("ul", { className: "PageSelector", children: [
    /* @__PURE__ */ R.jsx("li", { className: "PageSelector-item PageSelector-item-navigation", children: /* @__PURE__ */ R.jsx(
      Zr,
      {
        centralIcon: /* @__PURE__ */ R.jsx(V5, {}),
        ariaLabel: d + " " + (v == null ? void 0 : v.previous_page),
        handleClick: () => U(-1),
        disabled: m === 1,
        className: bt({
          ["PageSelector-item-disabled"]: m === 1
        }),
        theme: on.link
      }
    ) }),
    k > 5 && m > 3 && /* @__PURE__ */ R.jsx(
      "li",
      {
        className: bt({
          ["PageSelector-item"]: !0,
          ["PageSelector-item-active"]: m === 1
        }),
        children: /* @__PURE__ */ R.jsx(
          Zr,
          {
            text: "1",
            ariaLabel: d + " " + (v == null ? void 0 : v.page) + " 1",
            handleClick: () => E(1, b),
            theme: on.link
          }
        )
      }
    ),
    k > 5 && m >= 5 && /* @__PURE__ */ R.jsx("li", { className: "PageSelector-item PageSelector-item-dots", children: /* @__PURE__ */ R.jsx(
      Zr,
      {
        ariaLabel: d + " " + (v == null ? void 0 : v.previous_5_pages),
        text: "•••",
        handleClick: () => U(-5),
        theme: on.link
      }
    ) }),
    D.map((M) => /* @__PURE__ */ R.jsx(
      "li",
      {
        className: bt({
          ["PageSelector-item"]: !0,
          ["PageSelector-item-active"]: M === m
        }),
        children: /* @__PURE__ */ R.jsx(
          Zr,
          {
            ariaLabel: d + " " + (v == null ? void 0 : v.page) + " " + M,
            handleClick: () => E(M, b),
            theme: on.link,
            text: String(M)
          }
        )
      },
      "pagination-item-page-" + M
    )),
    k > 5 && m < k - 3 && /* @__PURE__ */ R.jsx("li", { className: "PageSelector-item PageSelector-item-dots", children: /* @__PURE__ */ R.jsx(
      Zr,
      {
        ariaLabel: d + " " + (v == null ? void 0 : v.next_5_pages),
        handleClick: () => U(5),
        theme: on.link,
        text: "•••"
      }
    ) }),
    k > 5 && m <= k - 3 && /* @__PURE__ */ R.jsx(
      "li",
      {
        className: bt({
          ["PageSelector-item"]: !0,
          ["PageSelector-item-active"]: m === k
        }),
        children: /* @__PURE__ */ R.jsx(
          Zr,
          {
            text: String(k),
            ariaLabel: d + " " + (v == null ? void 0 : v.page) + " " + k,
            handleClick: () => E(k, b),
            theme: on.link
          }
        )
      }
    ),
    /* @__PURE__ */ R.jsx("li", { className: "PageSelector-item PageSelector-item-navigation", children: /* @__PURE__ */ R.jsx(
      Zr,
      {
        centralIcon: /* @__PURE__ */ R.jsx(B5, {}),
        ariaLabel: d + " " + (v == null ? void 0 : v.next_page),
        handleClick: () => U(1),
        disabled: m === k || S === 0,
        theme: on.link
      }
    ) })
  ] });
}, H6 = ({
  totalItems: d,
  onChange: v,
  ariaLabel: m,
  currentLimit: E = oS[0],
  currentPage: b = 1,
  rangeDropDown: k = !0,
  rangeLabel: S = !0,
  goToPage: U = !0,
  localization: D = v6,
  rangeDropDownPlacement: M = sd.bottom
}) => {
  const [L, z] = Oe.useState(E);
  Oe.useEffect(() => {
    E !== oS[0] && z(E);
  }, [E]);
  const q = Oe.useMemo(() => Math.ceil(d / L), [d, L]), I = (ee) => {
    const se = b === 1 ? 1 : Math.floor((b - 1) * L / ee) + 1;
    v(se, ee), z(ee);
  };
  return /* @__PURE__ */ R.jsxs("nav", { className: "Pagination", children: [
    k && /* @__PURE__ */ R.jsx(
      m6,
      {
        rangeDropDownPlacement: M,
        currentPage: b,
        totalItems: d,
        rangeLabel: S,
        limit: L,
        localization: D,
        ariaLabel: m,
        changeLimit: I
      }
    ),
    /* @__PURE__ */ R.jsxs("div", { className: "Pagination-right-content", children: [
      /* @__PURE__ */ R.jsx(
        y6,
        {
          ariaLabel: m,
          localization: D,
          currentPage: b,
          onChange: v,
          limit: L,
          totalPages: q,
          totalItems: d
        }
      ),
      U && /* @__PURE__ */ R.jsx(
        h6,
        {
          localization: D,
          totalPages: q,
          limit: L,
          onChange: v,
          ariaLabel: m
        }
      )
    ] })
  ] });
};
var Cy = /* @__PURE__ */ ((d) => (d.top = "top", d.right = "right", d.bottom = "bottom", d.left = "left", d))(Cy || {});
const V6 = ({
  isOpen: d,
  footer: v,
  width: m,
  height: E,
  placement: b = Cy.right,
  children: k,
  onClose: S,
  closable: U,
  escClose: D,
  className: M
}) => {
  const z = Oe.useRef(document).current, q = (ee) => {
    ee.stopPropagation(), U && S && S();
  }, I = Oe.useCallback(
    (ee) => {
      D && ee.key === "Escape" && S && S();
    },
    [D, S]
  );
  return Oe.useEffect(() => (d && (z.body.style.overflow = "hidden", z.addEventListener("keydown", I, !1)), () => {
    z.body.style.overflow = "unset", z.removeEventListener("keydown", I, !1);
  }), [d, z, D, S, I]), d ? /* @__PURE__ */ R.jsx("div", { className: "Overlay", children: /* @__PURE__ */ R.jsx("div", { className: "Overlay-wrapper", onClick: q, children: /* @__PURE__ */ R.jsx("div", { onClick: (ee) => ee.stopPropagation(), children: /* @__PURE__ */ R.jsx(
    "div",
    {
      className: bt({
        ["Overlay-content"]: !0,
        [`Overlay-${b}`]: !0,
        [M || ""]: !!M
      }),
      style: { width: m, height: E },
      children: /* @__PURE__ */ R.jsxs("div", { children: [
        /* @__PURE__ */ R.jsx("div", { className: "Overlay-body", children: k }),
        (b === Cy.left || b === Cy.right) && v && /* @__PURE__ */ R.jsx("div", { className: "Overlay-footer", children: v })
      ] })
    }
  ) }) }) }) : null;
}, Fx = Oe.createContext({}), B6 = () => Oe.useContext(Fx);
var g6 = /* @__PURE__ */ ((d) => (d.top = "top", d.bottom = "bottom", d.topLeft = "top-left", d.topRight = "top-right", d.bottomLeft = "bottom-left", d.bottomRight = "bottom-right", d))(g6 || {}), wv = /* @__PURE__ */ ((d) => (d.warning = "warning", d.info = "info", d.error = "error", d.success = "success", d))(wv || {});
const S6 = {
  [wv.error]: /* @__PURE__ */ R.jsx(Ex, {}),
  [wv.success]: /* @__PURE__ */ R.jsx(xx, {}),
  [wv.warning]: /* @__PURE__ */ R.jsx(wx, {}),
  [wv.info]: /* @__PURE__ */ R.jsx(bx, {})
}, C6 = ({ type: d, text: v, onClose: m, icon: E }) => /* @__PURE__ */ R.jsxs(
  "div",
  {
    className: bt({
      Toaster: !0,
      [`Toaster-${d}`]: !0
    }),
    children: [
      /* @__PURE__ */ R.jsxs("div", { className: "Toaster-content-wrapper", children: [
        E !== !1 ? /* @__PURE__ */ R.jsx(
          "div",
          {
            className: bt({
              ["Toaster-icon-wrapper"]: !0,
              [`Toaster-icon-wrapper-${d}`]: !0
            }),
            children: /* @__PURE__ */ R.jsx("div", { className: "Toaster-icon", children: E || S6[d] })
          }
        ) : null,
        /* @__PURE__ */ R.jsx("div", { className: "Toaster-content", children: v })
      ] }),
      /* @__PURE__ */ R.jsx("div", { className: "Toaster-action", children: /* @__PURE__ */ R.jsx(
        Zr,
        {
          handleClick: () => m && m(),
          text: /* @__PURE__ */ R.jsx(Cx, {}),
          ariaLabel: "cross icon",
          theme: on.link
        }
      ) })
    ]
  }
), E6 = ({ toasters: d, placement: v, close: m }) => /* @__PURE__ */ R.jsx(
  "div",
  {
    className: bt({
      ToasterContainer: !0,
      [`ToasterContainer-${v}`]: !0
    }),
    children: d.map((E) => /* @__PURE__ */ R.jsx("div", { className: "ToasterContainer-content", children: /* @__PURE__ */ R.jsx(
      C6,
      {
        text: E.text,
        type: E.type,
        onClose: () => m(E.id || ""),
        icon: E.icon
      }
    ) }, E.id))
  }
), x6 = {};
process.env.NODE_ENV === "test" && Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => x6.randomUUID()
  }
});
const w6 = () => {
  var m;
  let d, v = "";
  return typeof self.crypto < "u" && (d = self.crypto, v = (m = d.randomUUID) == null ? void 0 : m.call(d)), v || "";
}, P6 = ({ children: d, placement: v }) => {
  const [m, E] = Oe.useState([]), b = (S) => E((U) => U.filter((D) => D.id !== S)), k = ({ autoClose: S = !0, ...U }) => {
    const D = w6();
    return E((M) => [{ id: D, ...U }, ...M]), S && setTimeout(() => b(D), (U == null ? void 0 : U.duration) || 2e3), D;
  };
  return /* @__PURE__ */ R.jsxs(Fx.Provider, { value: { toaster: k, closeToaster: b }, children: [
    d,
    /* @__PURE__ */ R.jsx(E6, { placement: v, toasters: m, close: b })
  ] });
}, b6 = {
  selected: "selected",
  search: "Search",
  clear_selected: "Clear selected",
  no_data: "No data available"
};
const R6 = (d) => {
  var ae;
  const {
    selectedItems: v,
    options: m,
    disabled: E,
    ariaLabel: b,
    value: k,
    error: S,
    errorText: U,
    placeholder: D,
    localization: M,
    showSelectedTags: L,
    isOpen: z,
    multiple: q
  } = d, [I, ee] = Oe.useState([]), [se, re] = Oe.useState(!1), pe = Oe.useRef(null), ge = Oe.useRef([]), ye = Oe.useRef(null), Se = (ue) => {
    let ce = 0;
    const He = [];
    ge.current.map((Ie) => {
      var ke;
      Ie && ue - ce >= Ie.clientWidth && (ce += Ie.clientWidth, He.push(String((ke = Ie.dataset) == null ? void 0 : ke.value)));
    }), ee(He);
  };
  return Oe.useEffect(() => {
    v !== k && (ee([]), re(!1));
  }, [k, v]), Oe.useEffect(() => {
    const ue = pe.current, ce = ye.current;
    if (!se && ce && ue) {
      const He = (ce == null ? void 0 : ce.clientWidth) - 80;
      (ue == null ? void 0 : ue.clientWidth) > He ? (Se(He), re(!0)) : (re(!1), ee([]));
    }
  }, [v]), /* @__PURE__ */ R.jsxs("div", { className: "InputTag", children: [
    q && /* @__PURE__ */ R.jsxs("div", { ref: pe, className: "InputTag-selected-items", children: [
      !L && v.length > 0 && /* @__PURE__ */ R.jsx("div", { className: "InputTag-selected-item-hided", children: v.length + " " + (M == null ? void 0 : M.selected) }),
      L && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        !se && v.map((ue, ce) => {
          var He;
          return /* @__PURE__ */ R.jsx(
            "div",
            {
              ref: (Ie) => ge.current[ce] = Ie,
              "data-value": ue,
              className: "InputTag-selected-item",
              children: (He = m == null ? void 0 : m.find((Ie) => Ie.value === ue)) == null ? void 0 : He.label
            },
            "drop-down-selected-item-" + ue
          );
        }),
        se && I.map((ue) => {
          var ce;
          return /* @__PURE__ */ R.jsx(
            "div",
            {
              "data-value": ue,
              className: "InputTag-selected-item",
              children: (ce = m == null ? void 0 : m.find((He) => He.value == ue)) == null ? void 0 : ce.label
            },
            "drop-down-selected-item-" + ue
          );
        }),
        se && /* @__PURE__ */ R.jsxs("div", { className: "InputTag-selected-item-hided", children: [
          "+ ",
          v.length - I.length,
          " ..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ R.jsx("div", { style: { width: "100%" }, ref: ye, children: /* @__PURE__ */ R.jsx(
      uS,
      {
        readOnly: !0,
        value: q ? "" : v[0] ? String((ae = m == null ? void 0 : m.find((ue) => ue.value === v[0])) == null ? void 0 : ae.label) : "",
        disabled: E,
        ariaLabel: b || "",
        error: S,
        errorText: U,
        placeholder: v.length === 0 ? D : "",
        firstIconButton: {
          icon: z ? /* @__PURE__ */ R.jsx(by, {}) : /* @__PURE__ */ R.jsx(wy, {}),
          ariaLabel: b || "",
          handleClick: () => !1
        }
      }
    ) })
  ] });
};
const hS = Oe.memo((d) => {
  const { isSelected: v = !1, handleChange: m, multiple: E = !1, label: b, value: k, disabled: S } = d, U = Oe.useCallback(
    (D) => {
      m && m(D, k);
    },
    [m, k]
  );
  return /* @__PURE__ */ R.jsxs("div", { onClick: (D) => E ? D.stopPropagation() : !1, className: "Option", children: [
    E && /* @__PURE__ */ R.jsx(
      f6,
      {
        disabled: S,
        ariaLabel: String(b),
        onChange: U,
        value: v,
        label: b
      }
    ),
    !E && /* @__PURE__ */ R.jsx(
      Zr,
      {
        theme: on.link,
        disabled: S,
        className: bt({
          ["Option-singlechoice-item"]: !0,
          ["Option-singlechoice-item-selected"]: v
        }),
        handleClick: (D) => {
          D.stopPropagation(), U(!0);
        },
        text: b,
        ariaLabel: String(b)
      }
    )
  ] });
});
hS.displayName = "Option";
const Hx = (d, v) => {
  const m = [], E = (b) => {
    d.forEach((k) => {
      k.parent_id === b && (m.push(k), E(k.id));
    });
  };
  return E(v), m;
}, T6 = (d, v) => {
  const m = [], E = (k) => {
    m.findIndex((S) => S.id === k.id) === -1 && m.push(k);
  }, b = (k) => {
    const S = d.find((U) => U.id === k);
    if (!S)
      return null;
    E(S), S.parent_id && b(S.parent_id);
  };
  return d.forEach((k) => {
    String(k.label).toLowerCase().includes(v.toLowerCase()) && (E(k), k.parent_id && b(k.parent_id), Hx(d, k.id).forEach((U) => {
      const D = d.find((M) => M.id === U.id);
      D && E(D);
    }));
  }), console.log(m), m;
}, Vx = ({
  handleChange: d,
  multiple: v = !1,
  options: m,
  selectedItems: E,
  idsToRender: b = [],
  level: k = 1
}) => {
  b.length || (b = m.filter((M) => !M.parent_id).map((M) => M.id));
  const [S, U] = Oe.useState(b), D = (M) => {
    const L = m.filter((z) => z.parent_id === M);
    return L.length ? /* @__PURE__ */ R.jsx(
      Vx,
      {
        level: k + 1,
        multiple: v,
        options: m,
        idsToRender: L.map((z) => z.id),
        selectedItems: E,
        handleChange: d
      }
    ) : null;
  };
  return /* @__PURE__ */ R.jsx("div", { className: "OptionTree-item", children: b.map((M) => {
    const L = m.find((ee) => ee.id === M), z = Hx(m, M), q = E.includes(M), I = S.includes(M);
    return /* @__PURE__ */ R.jsxs(O5.Fragment, { children: [
      /* @__PURE__ */ R.jsxs(
        "div",
        {
          onClick: () => {
            U(I ? S.filter((ee) => ee !== M) : [...S, M]);
          },
          style: { "--option-tree-item-padding": k * 12 + "px" },
          className: bt({
            ["OptionTree-item-current"]: !0,
            ["OptionTree-item-current-selected"]: q,
            ["OptionTree-item-current-disabled"]: L == null ? void 0 : L.disabled
          }),
          children: [
            /* @__PURE__ */ R.jsx("div", { className: "OptionTree-item-current-arrow", children: /* @__PURE__ */ R.jsx(
              Zr,
              {
                disabled: z.length === 0,
                theme: on.noBorder,
                ariaLabel: String(L == null ? void 0 : L.label),
                centralIcon: !I || z.length === 0 ? /* @__PURE__ */ R.jsx(wy, {}) : /* @__PURE__ */ R.jsx(by, {})
              }
            ) }),
            /* @__PURE__ */ R.jsx(
              hS,
              {
                isSelected: q,
                handleChange: (ee) => {
                  d && d(ee, M);
                },
                multiple: v,
                label: L == null ? void 0 : L.label,
                value: (L == null ? void 0 : L.value) || "",
                disabled: L == null ? void 0 : L.disabled
              },
              `option-tree-${L == null ? void 0 : L.key}`
            )
          ]
        }
      ),
      z.length > 0 && I && /* @__PURE__ */ R.jsx("div", { className: "OptionTree-item-children", children: D(M) })
    ] }, L == null ? void 0 : L.key);
  }) });
}, k6 = (d) => /* @__PURE__ */ R.jsx("div", { className: "OptionTree", children: /* @__PURE__ */ R.jsx(Vx, { ...d }) });
const $6 = (d) => {
  const {
    options: v,
    placeholder: m,
    multiple: E = !1,
    error: b = !1,
    errorText: k = "",
    onChange: S,
    value: U = [],
    disabled: D = !1,
    tree: M = !1,
    ariaLabel: L,
    localization: z = b6,
    isLoading: q = !1,
    searchIsActive: I = !0,
    onClearSelected: ee,
    showClearSelectedButton: se = !1,
    showSelectedTags: re = !0
  } = d, [pe, ge] = Oe.useState(
    typeof U == "string" ? [U] : U
  ), [ye, Se] = Oe.useState(!1), ae = Oe.useCallback(
    (ke) => {
      ye !== ke && Se(ke);
    },
    [ye]
  ), [ue, ce] = Oe.useState(v);
  Oe.useEffect(() => {
    ce(v);
  }, [v]), Oe.useEffect(() => {
    if (pe.toString() !== U.toString()) {
      const xe = (typeof U == "string" ? [U] : U).filter(
        (rt) => v.some((Te) => Te.value === rt)
      );
      ge(xe);
    }
  }, [U]);
  const He = Oe.useCallback(
    (ke, xe) => {
      const rt = E ? ke ? [...pe, xe] : pe.filter((Te) => Te !== xe) : [xe];
      S && S(E ? rt : rt[0]), E || ae(!1);
    },
    [pe, S, E, ae]
  ), Ie = (ke) => {
    const xe = ke.target.value.toLowerCase();
    if (!xe) {
      ce(v || []);
      return;
    }
    if (M) {
      const rt = T6(v, xe);
      ce(rt || []);
    } else {
      const rt = v == null ? void 0 : v.filter(
        (Te) => String(Te.label).toLowerCase().indexOf(xe) >= 0
      );
      ce([...rt]);
    }
  };
  return /* @__PURE__ */ R.jsx("div", { className: "DropDown", children: /* @__PURE__ */ R.jsx(
    ky,
    {
      isOpen: ye && !D,
      onChange: ae,
      arrow: !1,
      trigger: us.click,
      fullRefWidth: !0,
      placement: sd.bottom,
      referenceNode: /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
        R6,
        {
          multiple: E,
          isOpen: ye,
          ariaLabel: L,
          showSelectedTags: re,
          placeholder: m,
          error: b,
          errorText: k,
          value: U,
          disabled: D,
          setFilteredOptions: ce,
          selectedItems: pe,
          options: v,
          localization: z
        }
      ) }),
      children: /* @__PURE__ */ R.jsxs("div", { children: [
        !q && /* @__PURE__ */ R.jsxs("div", { className: "DropDown-option-wrapper", children: [
          I && /* @__PURE__ */ R.jsx("div", { className: "DropDown-option-wrapper-search", children: /* @__PURE__ */ R.jsx(
            uS,
            {
              handleChange: Ie,
              icon: /* @__PURE__ */ R.jsx(P5, {}),
              placeholder: z == null ? void 0 : z.search,
              ariaLabel: (z == null ? void 0 : z.search) || ""
            }
          ) }),
          se && pe.length > 0 && /* @__PURE__ */ R.jsx(
            Zr,
            {
              ariaLabel: (z == null ? void 0 : z.clear_selected) || "",
              handleClick: () => ee && ee(),
              leftIcon: /* @__PURE__ */ R.jsx(Cx, {}),
              className: "DropDown-clear",
              theme: on.link,
              text: z == null ? void 0 : z.clear_selected
            }
          ),
          !M && ue.map((ke) => /* @__PURE__ */ Oe.createElement(
            hS,
            {
              ...ke,
              key: ke.key,
              isSelected: pe.indexOf(ke.value) >= 0,
              handleChange: He,
              multiple: E
            }
          )),
          M && /* @__PURE__ */ R.jsx(
            k6,
            {
              options: ue,
              selectedItems: pe,
              handleChange: He,
              multiple: E
            }
          ),
          ue.length === 0 && /* @__PURE__ */ R.jsx("div", { className: "DropDown-no-data", children: z.no_data })
        ] }),
        q && /* @__PURE__ */ R.jsx("div", { className: "DropDown-loader", children: /* @__PURE__ */ R.jsx(xy, {}) })
      ] })
    }
  ) });
};
var Bx = /* @__PURE__ */ ((d) => (d.none = "none", d.gray = "gray", d.red = "red", d.blue = "blue", d.green = "green", d.orange = "orange", d.violet = "violet", d))(Bx || {});
const D6 = ({
  isClickable: d = !1,
  children: v,
  color: m = Bx.none,
  disabled: E = !1,
  highlightBorder: b = !1,
  className: k = "",
  leftIcon: S,
  onClick: U,
  rightIcon: D
}) => /* @__PURE__ */ R.jsxs(
  "div",
  {
    ...d ? {
      tabIndex: 0,
      onClick: U,
      onKeyPress: (M) => M.key === "Enter" && U && U()
    } : {},
    className: bt({
      Status: !0,
      ["Status-color-" + m]: !E,
      ["Status-disabled"]: E,
      ["Status-highlight-border"]: b,
      ["Status-clickable"]: d,
      ["Status-with-icon"]: D || S,
      [k || ""]: !!k
    }),
    children: [
      S && /* @__PURE__ */ R.jsx("div", { className: "Status-left-icon", children: S }),
      /* @__PURE__ */ R.jsx("div", { className: "Status-content", children: v }),
      D && /* @__PURE__ */ R.jsx("div", { className: "Status-right-icon", children: D })
    ]
  }
);
const I6 = (d) => {
  const { disabled: v = !1, onChange: m, value: E = "", options: b = [] } = d, [k, S] = Oe.useState(b[0]), [U, D] = Oe.useState(!1), M = (L) => {
    S(L), D(!1), m && m(L);
  };
  return Oe.useEffect(() => {
    k.value !== E && S(b.find((L) => L.value === E) || b[0]);
  }, [E, S, b]), /* @__PURE__ */ R.jsx("div", { className: "DropDownStatus", children: /* @__PURE__ */ R.jsx(
    ky,
    {
      isOpen: U,
      arrow: !1,
      onChange: (L) => !v && D(L),
      placement: sd.bottom,
      referenceNode: /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
        D6,
        {
          onClick: () => !v && D(!U),
          isClickable: !v,
          highlightBorder: !0,
          rightIcon: U ? /* @__PURE__ */ R.jsx(by, {}) : /* @__PURE__ */ R.jsx(wy, {}),
          ...d,
          children: k.label
        }
      ) }),
      wrapperClassName: "DropDownStatus-popover",
      trigger: us.click,
      children: /* @__PURE__ */ R.jsx("div", { className: "DropDownStatus-options", children: b.filter((L) => L.value !== k.value).map((L) => /* @__PURE__ */ R.jsx(
        Zr,
        {
          ariaLabel: L.label,
          className: "DropDownStatus-option",
          handleClick: () => M(L),
          theme: on.noBorder,
          text: L.label
        },
        "DropDownStatus-options-button-" + L.value
      )) })
    }
  ) });
};
var bv = /* @__PURE__ */ ((d) => (d.warning = "warning", d.info = "info", d.error = "error", d.success = "success", d))(bv || {});
const _6 = {
  [bv.error]: /* @__PURE__ */ R.jsx(Ex, {}),
  [bv.success]: /* @__PURE__ */ R.jsx(xx, {}),
  [bv.warning]: /* @__PURE__ */ R.jsx(wx, {}),
  [bv.info]: /* @__PURE__ */ R.jsx(bx, {})
}, Y6 = ({
  isOpen: d = !0,
  type: v,
  text: m,
  icon: E,
  backgroundColor: b,
  className: k
}) => d ? /* @__PURE__ */ R.jsx("div", { className: bt({ Message: !0, [k || ""]: !!k }), children: /* @__PURE__ */ R.jsxs(
  "div",
  {
    className: bt({
      ["Message-wrapper"]: !0,
      [`Message-wrapper-${v}`]: !0
    }),
    style: { backgroundColor: b },
    children: [
      E !== !1 ? /* @__PURE__ */ R.jsx("div", { className: "Message-icon-wrapper", children: /* @__PURE__ */ R.jsx("div", { className: "Message-icon", children: E || _6[v] }) }) : null,
      /* @__PURE__ */ R.jsx("div", { className: "Message-content", children: m })
    ]
  }
) }) : null;
const W6 = (d) => {
  const {
    options: v = [],
    onChange: m,
    value: E,
    disabled: b,
    placeholder: k,
    leftIcon: S,
    className: U,
    label: D,
    labelPrefix: M
  } = d, [L, z] = Oe.useState(
    E && v && v.find((pe) => pe.value === E) || null
  ), [q, I] = Oe.useState(!1), ee = (pe) => {
    z(pe), I(!1), m && m(pe);
  }, se = () => k && !(L != null && L.label) ? k : D || (L != null && L.label ? M ? `${M}: ${L == null ? void 0 : L.label}` : L == null ? void 0 : L.label : ""), re = (pe) => (L && L.value || "") === pe ? "active" : "";
  return /* @__PURE__ */ R.jsx("div", { className: `DropDownButton ${U && U}`, children: /* @__PURE__ */ R.jsx(
    ky,
    {
      isOpen: q,
      arrow: !1,
      onChange: (pe) => !b && I(pe),
      placement: sd.bottomStart,
      referenceNode: /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
        Zr,
        {
          className: "DropDownButton-reference-node",
          handleClick: () => !b && I(!q),
          text: se(),
          leftIcon: S,
          ariaLabel: "Dropdown button",
          disabled: b
        }
      ) }),
      wrapperClassName: "DropDownButton-popover",
      trigger: us.click,
      children: /* @__PURE__ */ R.jsx("div", { className: "DropDownButton-options", children: v.map((pe) => /* @__PURE__ */ R.jsx(
        Zr,
        {
          ariaLabel: "Dropdown option",
          className: `DropDownButton-option ${re(pe.value)}`,
          handleClick: () => ee(pe),
          theme: on.noBorder,
          text: pe.label,
          disabled: pe.disabled
        },
        "DropDownButton-options-button-" + pe.value
      )) })
    }
  ) });
};
const Q6 = (d) => {
  const [v, m] = Oe.useState(d);
  Oe.useEffect(() => {
    let k;
    return v > 0 && (k = setTimeout(() => m(v - 1), 1e3)), () => clearTimeout(k);
  }, [v]);
  const E = Math.floor(v / 60), b = Math.round(v % 60);
  return {
    countdown: /* @__PURE__ */ R.jsxs("div", { className: "Countdown", children: [
      E < 10 && "0",
      E,
      ":",
      b < 10 && "0",
      b
    ] }),
    secondsLeft: v,
    isStopped: v <= 0,
    resetTo: (k) => m(k)
  };
}, G6 = (d, v) => {
  const [m, E] = Oe.useState(d);
  return Oe.useEffect(() => {
    const b = setTimeout(() => E(d), v || 2e3);
    return () => {
      clearTimeout(b);
    };
  }, [d, v]), m;
};
export {
  on as BUTTON_TYPE,
  Zr as Button,
  Ax as CHECKBOX_VALUE,
  d6 as COLUMN_ALIGN_TYPE,
  f6 as Checkbox,
  $6 as DropDown,
  W6 as DropDownButton,
  I6 as DropDownStatus,
  U6 as Expanded,
  oo as INPUT_TYPE,
  uS as Input,
  eu as LOADER_COLOR,
  xy as Loader,
  bv as MESSAGE_TYPE,
  Y6 as Message,
  A6 as Modal,
  Cy as OVERLAY_PLACEMENT_TYPE,
  hS as Option,
  k6 as OptionTree,
  V6 as Overlay,
  sd as PLACEMENT_TYPE,
  H6 as Pagination,
  ky as Popover,
  ad as SORTER_TYPE,
  Bx as STATUS_COLOR,
  D6 as Status,
  zx as TABLE_TYPE,
  g6 as TOASTER_PLACEMENT_TYPE,
  wv as TOASTER_TYPE,
  us as TRIGGER_TYPE,
  F6 as Table,
  z6 as Tabs,
  j6 as Text,
  P6 as ToasterProvider,
  M6 as Toggle,
  w6 as generateUUID,
  Q6 as useCountdown,
  G6 as useDebounce,
  B6 as useToaster
};
