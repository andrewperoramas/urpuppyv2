import { j as jsxRuntimeExports, r as reactExports, U, K } from "../ssr.js";
import { S as StateManagedSelect$1, A as AsyncPaginate } from "./index-DAcb-atf.js";
import { M as Modal } from "./Modal-ayV8MtmB.js";
const filterStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "5px",
    border: "none",
    width: "160px",
    height: "21px",
    minHeight: "unset",
    backgroundColor: "transparent",
    padding: "0px",
    boxShadow: "none",
    fontSize: "0.875rem"
  }),
  input: (provided, state) => ({
    ...provided,
    height: "21px",
    padding: "0px",
    margin: "0px"
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "var(--bs-secondary)",
    height: "21px"
  }),
  group: (provided, state) => ({
    ...provided,
    height: "21px"
  }),
  indicatorsContainer: (provided, state) => ({
    display: "none",
    height: "21px"
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--bs-primary)" : null,
    color: state.isFocused ? "white" : null
  })
};
const SelectFilterInput = ({ options, onChange, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      styles: filterStyles,
      onChange,
      value: props.value,
      options
    }
  );
};
function GenericModal({ title, buttonTitle, children, setIsModalOpen, handleOk, ...props }) {
  const [show, setShow] = reactExports.useState(false);
  if (setIsModalOpen) {
    setIsModalOpen(show);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  reactExports.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: handleShow, className: "", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: buttonTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show, className: "modal-lg", ...props, onHide: handleClose, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Body, { className: "py-8 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-center text-primary", children: title }),
        children
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { className: "d-flex justify-content-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { onClick: handleClose, href: "#", className: "btn btn-outline-extralight border btn-white text-dark", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: "Cancel" }),
        handleOk && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { onClick: handleClose, href: "#", className: "btn  border btn-primary text-white", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: "Select" })
      ] })
    ] })
  ] }) });
}
var Te = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Rr() {
  if (He)
    return ee;
  He = 1;
  var m = U, l = Symbol.for("react.element"), o = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, f = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: true, ref: true, __self: true, __source: true };
  function E(R, v, S) {
    var h, C = {}, _ = null, O = null;
    S !== void 0 && (_ = "" + S), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (O = v.ref);
    for (h in v)
      g.call(v, h) && !u.hasOwnProperty(h) && (C[h] = v[h]);
    if (R && R.defaultProps)
      for (h in v = R.defaultProps, v)
        C[h] === void 0 && (C[h] = v[h]);
    return { $$typeof: l, type: R, key: _, ref: O, props: C, _owner: f.current };
  }
  return ee.Fragment = o, ee.jsx = E, ee.jsxs = E, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function _r() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var m = U, l = Symbol.for("react.element"), o = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), w = Symbol.iterator, N = "@@iterator";
    function U$1(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[N];
      return typeof r == "function" ? r : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        W("error", e, t);
      }
    }
    function W(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var B = false, F = false, q = false, te = false, z = false, L;
    L = Symbol.for("react.module.reference");
    function ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === u || z || e === f || e === S || e === h || te || e === O || B || F || q || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === C || e.$$typeof === E || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function J(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ne(r) + ".Consumer";
          case E:
            var t = e;
            return ne(t._context) + ".Provider";
          case v:
            return J(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case _: {
            var c = e, d = c._payload, s = c._init;
            try {
              return A(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, Y = 0, K2, V, X, ae, oe, a, T;
    function Z() {
    }
    Z.__reactDisabledLog = true;
    function Je() {
      {
        if (Y === 0) {
          K2 = console.log, V = console.info, X = console.warn, ae = console.error, oe = console.group, a = console.groupCollapsed, T = console.groupEnd;
          var e = {
            configurable: true,
            enumerable: true,
            value: Z,
            writable: true
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
        Y++;
      }
    }
    function Ke() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: K2
            }),
            info: k({}, e, {
              value: V
            }),
            warn: k({}, e, {
              value: X
            }),
            error: k({}, e, {
              value: ae
            }),
            group: k({}, e, {
              value: oe
            }),
            groupCollapsed: k({}, e, {
              value: a
            }),
            groupEnd: k({}, e, {
              value: T
            })
          });
        }
        Y < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = P.ReactCurrentDispatcher, he;
    function ie(e, r, t) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            he = n && n[1] || "";
          }
        return `
` + he + e;
      }
    }
    var me = false, se;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Xe();
    }
    function je(e, r) {
      if (!e || me)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      me = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = pe.current, pe.current = null, Je();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (M) {
              n = M;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (M) {
              n = M;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            n = M;
          }
          e();
        }
      } catch (M) {
        if (M && n && typeof M.stack == "string") {
          for (var i = M.stack.split(`
`), x = n.stack.split(`
`), b = i.length - 1, y = x.length - 1; b >= 1 && y >= 0 && i[b] !== x[y]; )
            y--;
          for (; b >= 1 && y >= 0; b--, y--)
            if (i[b] !== x[y]) {
              if (b !== 1 || y !== 1)
                do
                  if (b--, y--, y < 0 || i[b] !== x[y]) {
                    var j = `
` + i[b].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, j), j;
                  }
                while (b >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        me = false, pe.current = d, Ke(), Error.prepareStackTrace = c;
      }
      var H = e ? e.displayName || e.name : "", Ge = H ? ie(H) : "";
      return typeof e == "function" && se.set(e, Ge), Ge;
    }
    function Ze(e, r, t) {
      return je(e, false);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Qe(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case S:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ze(e.render);
          case C:
            return ue(e.type, r, t);
          case _: {
            var n = e, c = n._payload, d = n._init;
            try {
              return ue(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, De = {}, Ie = P.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    function er(e, r, t, n, c) {
      {
        var d = Function.call.bind(ce);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var x = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              i = b;
            }
            i && !(i instanceof Error) && (le(c), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), le(null)), i instanceof Error && !(i.message in De) && (De[i.message] = true, le(c), p("Failed %s type: %s", t, i.message), le(null));
          }
      }
    }
    var rr = Array.isArray;
    function ge(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function nr(e) {
      try {
        return Ae(e), false;
      } catch {
        return true;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Fe(e) {
      if (nr(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), Ae(e);
    }
    var Q = P.ReactCurrentOwner, ar = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    }, Ne, Me;
    function or(e) {
      if (ce.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && Q.current && r) ;
    }
    function ur(e, r) {
      {
        var t = function() {
          Ne || (Ne = true, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "key", {
          get: t,
          configurable: true
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Me || (Me = true, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "ref", {
          get: t,
          configurable: true
        });
      }
    }
    var lr = function(e, r, t, n, c, d, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }), Object.defineProperty(i, "_self", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function fr(e, r, t, n, c) {
      {
        var d, s = {}, i = null, x = null;
        t !== void 0 && (Fe(t), i = "" + t), ir(r) && (Fe(r.key), i = "" + r.key), or(r) && (x = r.ref, sr(r, c));
        for (d in r)
          ce.call(r, d) && !ar.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (d in b)
            s[d] === void 0 && (s[d] = b[d]);
        }
        if (i || x) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ur(s, y), x && cr(s, y);
        }
        return lr(e, i, x, c, n, Q.current, s);
      }
    }
    var be = P.ReactCurrentOwner, $e = P.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(t);
      } else
        $e.setExtraStackFrame(null);
    }
    var ye;
    ye = false;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function We() {
      {
        if (be.current) {
          var e = A(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      {
        return "";
      }
    }
    var Ye = {};
    function vr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = true;
        var t = vr(r);
        if (Ye[t])
          return;
        Ye[t] = true;
        var n = "";
        e && e._owner && e._owner !== be.current && (n = " It was passed a child from " + A(e._owner.type) + "."), G(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), G(null);
      }
    }
    function Ue(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Re(n) && Le(n, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = true);
        else if (e) {
          var c = U$1(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), s; !(s = d.next()).done; )
              Re(s.value) && Le(s.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          er(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ye) {
          ye = true;
          var c = A(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            G(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ve(e, r, t, n, c, d) {
      {
        var s = ve(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = dr();
          x ? i += x : i += We();
          var b;
          e === null ? b = "null" : ge(e) ? b = "array" : e !== void 0 && e.$$typeof === l ? (b = "<" + (A(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, i);
        }
        var y = fr(e, r, t, c, d);
        if (y == null)
          return y;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (ge(j)) {
                for (var H = 0; H < j.length; H++)
                  Ue(j[H], e);
                Object.freeze && Object.freeze(j);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(j, e);
        }
        return e === g ? hr(y) : pr(y), y;
      }
    }
    function mr(e, r, t) {
      return Ve(e, r, t, true);
    }
    function gr(e, r, t) {
      return Ve(e, r, t, false);
    }
    var Er = gr, br = mr;
    re.Fragment = g, re.jsx = Er, re.jsxs = br;
  }()), re;
}
process.env.NODE_ENV === "production" ? Te.exports = Rr() : Te.exports = _r();
var $ = Te.exports;
const Tr = 216, Pr = 36, Cr = "off", xe = reactExports.createContext(null);
xe.displayName = "PickerDataContext";
function Oe(m) {
  const l = reactExports.useContext(xe);
  if (l === null) {
    const o = new Error(`<${m} /> is missing a parent <Picker /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Oe), o;
  }
  return l;
}
const we = reactExports.createContext(null);
we.displayName = "PickerActionsContext";
function Se(m) {
  const l = reactExports.useContext(we);
  if (l === null) {
    const o = new Error(`<${m} /> is missing a parent <Picker /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Se), o;
  }
  return l;
}
function xr(m, l = (o) => o) {
  return m.slice().sort((o, g) => {
    const f = l(o), u = l(g);
    if (f === null || u === null)
      return 0;
    const E = f.compareDocumentPosition(u);
    return E & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : E & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Or(m, l) {
  switch (l.type) {
    case "REGISTER_OPTION": {
      const { key: o, option: g } = l;
      let f = [...m[o] || [], g];
      return f = xr(f, (u) => u.element.current), {
        ...m,
        [o]: f
      };
    }
    case "UNREGISTER_OPTION": {
      const { key: o, option: g } = l;
      return {
        ...m,
        [o]: (m[o] || []).filter((f) => f !== g)
      };
    }
    default:
      throw Error(`Unknown action: ${l.type}`);
  }
}
function wr(m) {
  const {
    style: l,
    children: o,
    value: g,
    onChange: f,
    height: u = Tr,
    itemHeight: E = Pr,
    wheelMode: R = Cr,
    ...v
  } = m, S = reactExports.useMemo(
    () => ({
      height: E,
      marginTop: -(E / 2),
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      pointerEvents: "none"
    }),
    [E]
  ), h = reactExports.useMemo(
    () => ({
      height: `${u}px`,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      maskImage: "linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)",
      WebkitMaskImage: "linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)"
    }),
    [u]
  ), [C, _] = reactExports.useReducer(Or, {}), O = reactExports.useMemo(
    () => ({ height: u, itemHeight: E, wheelMode: R, value: g, optionGroups: C }),
    [u, E, g, C, R]
  ), w = reactExports.useCallback((P, p) => {
    if (g[P] === p)
      return false;
    const W = { ...g, [P]: p };
    return f(W, P), true;
  }, [f, g]), N = reactExports.useCallback((P, p) => (_({ type: "REGISTER_OPTION", key: P, option: p }), () => _({ type: "UNREGISTER_OPTION", key: P, option: p })), []), U2 = reactExports.useMemo(
    () => ({ registerOption: N, change: w }),
    [N, w]
  );
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      style: {
        ...h,
        ...l
      },
      ...v,
      children: [
        /* @__PURE__ */ $.jsx(we.Provider, { value: U2, children: /* @__PURE__ */ $.jsx(xe.Provider, { value: O, children: o }) }),
        /* @__PURE__ */ $.jsxs(
          "div",
          {
            style: S,
            children: [
              /* @__PURE__ */ $.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    bottom: "auto",
                    left: 0,
                    right: "auto",
                    width: "100%",
                    height: "1px",
                    background: "#d9d9d9",
                    transform: "scaleY(0.5)"
                  }
                }
              ),
              /* @__PURE__ */ $.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "auto",
                    bottom: 0,
                    left: 0,
                    right: "auto",
                    width: "100%",
                    height: "1px",
                    background: "#d9d9d9",
                    transform: "scaleY(0.5)"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const ke = reactExports.createContext(null);
ke.displayName = "PickerColumnDataContext";
function ze(m) {
  const l = reactExports.useContext(ke);
  if (l === null) {
    const o = new Error(`<${m} /> is missing a parent <Picker.Column /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ze), o;
  }
  return l;
}
function Sr({
  style: m,
  children: l,
  name: o,
  ...g
}) {
  const { height: f, itemHeight: u, wheelMode: E, value: R, optionGroups: v } = Oe("Picker.Column"), S = reactExports.useMemo(
    () => R[o],
    [R, o]
  ), h = reactExports.useMemo(
    () => v[o] || [],
    [o, v]
  ), C = reactExports.useMemo(
    () => {
      let a = h.findIndex((T) => T.value === S);
      return a < 0 && (a = 0), a;
    },
    [h, S]
  ), _ = reactExports.useMemo(
    () => f / 2 - u * h.length + u / 2,
    [f, u, h]
  ), O = reactExports.useMemo(
    () => f / 2 - u / 2,
    [f, u]
  ), [w, N] = reactExports.useState(0);
  reactExports.useEffect(() => {
    N(f / 2 - u / 2 - C * u);
  }, [f, u, C]);
  const U2 = Se("Picker.Column"), P = reactExports.useRef(w);
  P.current = w;
  const p = reactExports.useCallback(() => {
    let a = 0;
    const T = P.current;
    T >= O ? a = 0 : T <= _ ? a = h.length - 1 : a = -Math.round((T - O) / u), U2.change(o, h[a].value) || N(f / 2 - u / 2 - a * u);
  }, [U2, f, u, o, O, _, h]), [W, B] = reactExports.useState(0), [F, q] = reactExports.useState(false), [te, z] = reactExports.useState(0), L = reactExports.useCallback((a) => {
    a < _ ? a = _ - Math.pow(_ - a, 0.8) : a > O && (a = O + Math.pow(a - O, 0.8)), N(a);
  }, [O, _]), ve = reactExports.useCallback((a) => {
    z(a.targetTouches[0].pageY), B(w);
  }, [w]), J = reactExports.useCallback((a) => {
    a.cancelable && a.preventDefault(), F || q(true);
    const T = W + a.targetTouches[0].pageY - te;
    L(T);
  }, [F, W, te, L]), ne = reactExports.useCallback(() => {
    F && (q(false), z(0), B(0), p());
  }, [p, F]), A = reactExports.useCallback(() => {
    F && (q(false), z(0), N(W), B(0));
  }, [F, W]), k = reactExports.useRef(null), Y = reactExports.useCallback((a) => {
    if (a.deltaY === 0)
      return;
    let T = a.deltaY * 0.1;
    Math.abs(T) < u && (T = u * Math.sign(T)), E === "normal" && (T = -T);
    const Z = w + T;
    L(Z);
  }, [u, w, L, E]), K2 = reactExports.useCallback(() => {
    p();
  }, [p]), V = reactExports.useCallback((a) => {
    E !== "off" && (a.cancelable && a.preventDefault(), Y(a), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      K2();
    }, 200));
  }, [K2, Y, k, E]), X = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const a = X.current;
    return a && (a.addEventListener("touchmove", J, { passive: false }), a.addEventListener("wheel", V, { passive: false })), () => {
      a && (a.removeEventListener("touchmove", J), a.removeEventListener("wheel", V));
    };
  }, [J, V]);
  const ae = reactExports.useMemo(
    () => ({
      flex: "1 1 0%",
      maxHeight: "100%",
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      transitionDuration: F ? "0ms" : "300ms",
      transform: `translate3d(0, ${w}px, 0)`
    }),
    [w, F]
  ), oe = reactExports.useMemo(
    () => ({ key: o }),
    [o]
  );
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      style: {
        ...ae,
        ...m
      },
      ref: X,
      onTouchStart: ve,
      onTouchEnd: ne,
      onTouchCancel: A,
      ...g,
      children: /* @__PURE__ */ $.jsx(ke.Provider, { value: oe, children: l })
    }
  );
}
function kr(m) {
  return typeof m == "function";
}
function jr({
  style: m,
  children: l,
  value: o,
  ...g
}) {
  const f = reactExports.useRef(null), { itemHeight: u, value: E } = Oe("Picker.Item"), R = Se("Picker.Item"), { key: v } = ze("Picker.Item");
  reactExports.useEffect(
    () => R.registerOption(v, { value: o, element: f }),
    [v, R, o]
  );
  const S = reactExports.useMemo(
    () => ({
      height: `${u}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }),
    [u]
  ), h = reactExports.useCallback(() => {
    R.change(v, o);
  }, [R, v, o]);
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      style: {
        ...S,
        ...m
      },
      ref: f,
      onClick: h,
      ...g,
      children: kr(l) ? l({ selected: E[v] === o }) : l
    }
  );
}
const Ir = Object.assign(wr, {
  Column: Sr,
  Item: jr
});
function MobilePicker({ options, title = "value", setMobileFilter }) {
  const [pickerValue, setPickerValue] = reactExports.useState({
    value: "All"
  });
  const handleChange = (value) => {
    setPickerValue(value);
    setMobileFilter(value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ir, { value: pickerValue, onChange: handleChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ir.Column, { name: title, children: options == null ? void 0 : options.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ir.Item, { value: label, children: label }, value)) }, "key") });
}
const SelectPaginate = ({
  loadOptions,
  selectedItem,
  handleInputChange,
  setIsModalOpen,
  options,
  handleMobileInputChange,
  title = ""
}) => {
  const isMobile = K().props.isMobile;
  return !isMobile ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    AsyncPaginate,
    {
      styles: filterStyles,
      loadOptions,
      additional: { page: 1 },
      value: selectedItem,
      onChange: handleInputChange
    },
    selectedItem ? selectedItem.value : "no-state"
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(GenericModal, { title, setIsModalOpen, centered: true, buttonTitle: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {}, className: "filter-custom-label", children: selectedItem == null ? void 0 : selectedItem.value }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobilePicker, { setMobileFilter: handleMobileInputChange, options }) });
};
const BreedFilter = ({ setBreed, title = "Breed", defaultValue }) => {
  const isMobile = K().props.isMobile;
  const [selectedBreed, setSelectedBreed] = reactExports.useState(defaultValue);
  const [options, setOptions] = reactExports.useState([]);
  const handleInputChange = (selected) => {
    setBreed((prev) => ({
      ...prev,
      breed: { label: selected.label, value: selected.label }
    }));
    setSelectedBreed(selected);
  };
  const fetchBreeds = async (search, loadedOptions, { page }) => {
    try {
      const response = await fetch(
        `/api/puppy/breeds?page=${page}&search=${search}&all=true`
      );
      const data = await response.json();
      console.log("Data from API:", data.data);
      if (isMobile) {
        setOptions(data.data);
      }
      return {
        options: data.data,
        hasMore: data.current_page !== data.last_page,
        additional: { page: data.current_page + 1 }
      };
    } catch (error) {
      return {
        options: [],
        hasMore: false,
        additional: { page: 1 }
      };
    }
  };
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchBreeds("", null, { page: 1 });
  }, [isModalOpen]);
  const handleMobileInputChange = (selected) => {
    setBreed((prev) => ({
      ...prev,
      breed: { label: selected.value, value: selected.value }
    }));
    setSelectedBreed({
      label: selected.value,
      value: selected.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-breed.svg", alt: "Breed Icon" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "filter-box", style: {
      paddingRight: "20px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-work-sans mb-0", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectPaginate,
        {
          loadOptions: fetchBreeds,
          selectedItem: selectedBreed,
          handleInputChange,
          handleMobileInputChange,
          setIsModalOpen,
          options
        }
      )
    ] })
  ] });
};
export {
  BreedFilter as B,
  GenericModal as G,
  MobilePicker as M,
  SelectPaginate as S,
  SelectFilterInput as a
};
