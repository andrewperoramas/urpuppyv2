import { j as jsxRuntimeExports, g as getDefaultExportFromCjs, r as reactExports, b as U, t as t$1, c as commonjsGlobal, V } from "../ssr.js";
import { r as reactDomExports } from "./index-Cji0mEl5.js";
import { c as clsx } from "./clsx-DgYk2OaC.js";
import { a as autoUpdate } from "./floating-ui.dom-BR6icdf6.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
const SemiHeading = ({ title }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-5 mb-3 pb-1", children: title });
};
const YesOrNoRadioInput = ({ title, name, value, setData }) => {
  const handleChange = (newValue) => {
    setData(name, newValue);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border round", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 fw-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-check form-check-inline mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name,
            value: "yes",
            checked: value === "yes",
            onChange: () => handleChange("yes")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            onClick: () => handleChange("yes"),
            className: "form-check-label fs-2",
            children: "Yes"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-check form-check-inline mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-check-input",
            type: "radio",
            name,
            value: "no",
            checked: value === "no",
            onChange: () => handleChange("no")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            onClick: () => handleChange("no"),
            className: "form-check-label fs-2",
            children: "No"
          }
        )
      ] })
    ] })
  ] }) });
};
var propTypes = { exports: {} };
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min$1;
function requireReactIs_production_min$1() {
  if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
  hasRequiredReactIs_production_min$1 = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e2 = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n2 = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t2 = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w2 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e2:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n2:
                case t2:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min$1.AsyncMode = l;
  reactIs_production_min$1.ConcurrentMode = m;
  reactIs_production_min$1.ContextConsumer = k;
  reactIs_production_min$1.ContextProvider = h;
  reactIs_production_min$1.Element = c;
  reactIs_production_min$1.ForwardRef = n2;
  reactIs_production_min$1.Fragment = e2;
  reactIs_production_min$1.Lazy = t2;
  reactIs_production_min$1.Memo = r;
  reactIs_production_min$1.Portal = d;
  reactIs_production_min$1.Profiler = g;
  reactIs_production_min$1.StrictMode = f;
  reactIs_production_min$1.Suspense = p;
  reactIs_production_min$1.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min$1.isConcurrentMode = A;
  reactIs_production_min$1.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min$1.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min$1.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min$1.isForwardRef = function(a) {
    return z(a) === n2;
  };
  reactIs_production_min$1.isFragment = function(a) {
    return z(a) === e2;
  };
  reactIs_production_min$1.isLazy = function(a) {
    return z(a) === t2;
  };
  reactIs_production_min$1.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min$1.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min$1.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min$1.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min$1.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min$1.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e2 || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t2 || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n2 || a.$$typeof === w2 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min$1.typeOf = z;
  return reactIs_production_min$1;
}
var reactIs_development$1 = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development$1;
function requireReactIs_development$1() {
  if (hasRequiredReactIs_development$1) return reactIs_development$1;
  hasRequiredReactIs_development$1 = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development$1.AsyncMode = AsyncMode;
      reactIs_development$1.ConcurrentMode = ConcurrentMode;
      reactIs_development$1.ContextConsumer = ContextConsumer;
      reactIs_development$1.ContextProvider = ContextProvider;
      reactIs_development$1.Element = Element;
      reactIs_development$1.ForwardRef = ForwardRef;
      reactIs_development$1.Fragment = Fragment;
      reactIs_development$1.Lazy = Lazy;
      reactIs_development$1.Memo = Memo;
      reactIs_development$1.Portal = Portal;
      reactIs_development$1.Profiler = Profiler;
      reactIs_development$1.StrictMode = StrictMode;
      reactIs_development$1.Suspense = Suspense;
      reactIs_development$1.isAsyncMode = isAsyncMode;
      reactIs_development$1.isConcurrentMode = isConcurrentMode;
      reactIs_development$1.isContextConsumer = isContextConsumer;
      reactIs_development$1.isContextProvider = isContextProvider;
      reactIs_development$1.isElement = isElement;
      reactIs_development$1.isForwardRef = isForwardRef;
      reactIs_development$1.isFragment = isFragment;
      reactIs_development$1.isLazy = isLazy;
      reactIs_development$1.isMemo = isMemo;
      reactIs_development$1.isPortal = isPortal;
      reactIs_development$1.isProfiler = isProfiler;
      reactIs_development$1.isStrictMode = isStrictMode;
      reactIs_development$1.isSuspense = isSuspense;
      reactIs_development$1.isValidElementType = isValidElementType;
      reactIs_development$1.typeOf = typeOf;
    })();
  }
  return reactIs_development$1;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs$2.exports;
  hasRequiredReactIs = 1;
  if (process.env.NODE_ENV === "production") {
    reactIs$2.exports = requireReactIs_production_min$1();
  } else {
    reactIs$2.exports = requireReactIs_development$1();
  }
  return reactIs$2.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
        return test2[n2];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from2;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from2 = Object(arguments[s]);
      for (var key in from2) {
        if (hasOwnProperty.call(from2, key)) {
          to[key] = from2[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from2);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from2, symbols[i])) {
            to[symbols[i]] = from2[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has2 = requireHas();
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has2(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign2 = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has2 = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var preciseType = getPreciseType(propValue);
          return new PropTypeError(
            "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
            { expectedType }
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has2(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError(
        (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
      );
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign2({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has2(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs();
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
const COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  ["1km", "application/vnd.1000minds.decision-model+xml"],
  ["3dml", "text/vnd.in3d.3dml"],
  ["3ds", "image/x-3ds"],
  ["3g2", "video/3gpp2"],
  ["3gp", "video/3gp"],
  ["3gpp", "video/3gpp"],
  ["3mf", "model/3mf"],
  ["7z", "application/x-7z-compressed"],
  ["7zip", "application/x-7z-compressed"],
  ["123", "application/vnd.lotus-1-2-3"],
  ["aab", "application/x-authorware-bin"],
  ["aac", "audio/x-acc"],
  ["aam", "application/x-authorware-map"],
  ["aas", "application/x-authorware-seg"],
  ["abw", "application/x-abiword"],
  ["ac", "application/vnd.nokia.n-gage.ac+xml"],
  ["ac3", "audio/ac3"],
  ["acc", "application/vnd.americandynamics.acc"],
  ["ace", "application/x-ace-compressed"],
  ["acu", "application/vnd.acucobol"],
  ["acutc", "application/vnd.acucorp"],
  ["adp", "audio/adpcm"],
  ["aep", "application/vnd.audiograph"],
  ["afm", "application/x-font-type1"],
  ["afp", "application/vnd.ibm.modcap"],
  ["ahead", "application/vnd.ahead.space"],
  ["ai", "application/pdf"],
  ["aif", "audio/x-aiff"],
  ["aifc", "audio/x-aiff"],
  ["aiff", "audio/x-aiff"],
  ["air", "application/vnd.adobe.air-application-installer-package+zip"],
  ["ait", "application/vnd.dvb.ait"],
  ["ami", "application/vnd.amiga.ami"],
  ["amr", "audio/amr"],
  ["apk", "application/vnd.android.package-archive"],
  ["apng", "image/apng"],
  ["appcache", "text/cache-manifest"],
  ["application", "application/x-ms-application"],
  ["apr", "application/vnd.lotus-approach"],
  ["arc", "application/x-freearc"],
  ["arj", "application/x-arj"],
  ["asc", "application/pgp-signature"],
  ["asf", "video/x-ms-asf"],
  ["asm", "text/x-asm"],
  ["aso", "application/vnd.accpac.simply.aso"],
  ["asx", "video/x-ms-asf"],
  ["atc", "application/vnd.acucorp"],
  ["atom", "application/atom+xml"],
  ["atomcat", "application/atomcat+xml"],
  ["atomdeleted", "application/atomdeleted+xml"],
  ["atomsvc", "application/atomsvc+xml"],
  ["atx", "application/vnd.antix.game-component"],
  ["au", "audio/x-au"],
  ["avi", "video/x-msvideo"],
  ["avif", "image/avif"],
  ["aw", "application/applixware"],
  ["azf", "application/vnd.airzip.filesecure.azf"],
  ["azs", "application/vnd.airzip.filesecure.azs"],
  ["azv", "image/vnd.airzip.accelerator.azv"],
  ["azw", "application/vnd.amazon.ebook"],
  ["b16", "image/vnd.pco.b16"],
  ["bat", "application/x-msdownload"],
  ["bcpio", "application/x-bcpio"],
  ["bdf", "application/x-font-bdf"],
  ["bdm", "application/vnd.syncml.dm+wbxml"],
  ["bdoc", "application/x-bdoc"],
  ["bed", "application/vnd.realvnc.bed"],
  ["bh2", "application/vnd.fujitsu.oasysprs"],
  ["bin", "application/octet-stream"],
  ["blb", "application/x-blorb"],
  ["blorb", "application/x-blorb"],
  ["bmi", "application/vnd.bmi"],
  ["bmml", "application/vnd.balsamiq.bmml+xml"],
  ["bmp", "image/bmp"],
  ["book", "application/vnd.framemaker"],
  ["box", "application/vnd.previewsystems.box"],
  ["boz", "application/x-bzip2"],
  ["bpk", "application/octet-stream"],
  ["bpmn", "application/octet-stream"],
  ["bsp", "model/vnd.valve.source.compiled-map"],
  ["btif", "image/prs.btif"],
  ["buffer", "application/octet-stream"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["c", "text/x-c"],
  ["c4d", "application/vnd.clonk.c4group"],
  ["c4f", "application/vnd.clonk.c4group"],
  ["c4g", "application/vnd.clonk.c4group"],
  ["c4p", "application/vnd.clonk.c4group"],
  ["c4u", "application/vnd.clonk.c4group"],
  ["c11amc", "application/vnd.cluetrust.cartomobile-config"],
  ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
  ["cab", "application/vnd.ms-cab-compressed"],
  ["caf", "audio/x-caf"],
  ["cap", "application/vnd.tcpdump.pcap"],
  ["car", "application/vnd.curl.car"],
  ["cat", "application/vnd.ms-pki.seccat"],
  ["cb7", "application/x-cbr"],
  ["cba", "application/x-cbr"],
  ["cbr", "application/x-cbr"],
  ["cbt", "application/x-cbr"],
  ["cbz", "application/x-cbr"],
  ["cc", "text/x-c"],
  ["cco", "application/x-cocoa"],
  ["cct", "application/x-director"],
  ["ccxml", "application/ccxml+xml"],
  ["cdbcmsg", "application/vnd.contact.cmsg"],
  ["cda", "application/x-cdf"],
  ["cdf", "application/x-netcdf"],
  ["cdfx", "application/cdfx+xml"],
  ["cdkey", "application/vnd.mediastation.cdkey"],
  ["cdmia", "application/cdmi-capability"],
  ["cdmic", "application/cdmi-container"],
  ["cdmid", "application/cdmi-domain"],
  ["cdmio", "application/cdmi-object"],
  ["cdmiq", "application/cdmi-queue"],
  ["cdr", "application/cdr"],
  ["cdx", "chemical/x-cdx"],
  ["cdxml", "application/vnd.chemdraw+xml"],
  ["cdy", "application/vnd.cinderella"],
  ["cer", "application/pkix-cert"],
  ["cfs", "application/x-cfs-compressed"],
  ["cgm", "image/cgm"],
  ["chat", "application/x-chat"],
  ["chm", "application/vnd.ms-htmlhelp"],
  ["chrt", "application/vnd.kde.kchart"],
  ["cif", "chemical/x-cif"],
  ["cii", "application/vnd.anser-web-certificate-issue-initiation"],
  ["cil", "application/vnd.ms-artgalry"],
  ["cjs", "application/node"],
  ["cla", "application/vnd.claymore"],
  ["class", "application/octet-stream"],
  ["clkk", "application/vnd.crick.clicker.keyboard"],
  ["clkp", "application/vnd.crick.clicker.palette"],
  ["clkt", "application/vnd.crick.clicker.template"],
  ["clkw", "application/vnd.crick.clicker.wordbank"],
  ["clkx", "application/vnd.crick.clicker"],
  ["clp", "application/x-msclip"],
  ["cmc", "application/vnd.cosmocaller"],
  ["cmdf", "chemical/x-cmdf"],
  ["cml", "chemical/x-cml"],
  ["cmp", "application/vnd.yellowriver-custom-menu"],
  ["cmx", "image/x-cmx"],
  ["cod", "application/vnd.rim.cod"],
  ["coffee", "text/coffeescript"],
  ["com", "application/x-msdownload"],
  ["conf", "text/plain"],
  ["cpio", "application/x-cpio"],
  ["cpp", "text/x-c"],
  ["cpt", "application/mac-compactpro"],
  ["crd", "application/x-mscardfile"],
  ["crl", "application/pkix-crl"],
  ["crt", "application/x-x509-ca-cert"],
  ["crx", "application/x-chrome-extension"],
  ["cryptonote", "application/vnd.rig.cryptonote"],
  ["csh", "application/x-csh"],
  ["csl", "application/vnd.citationstyles.style+xml"],
  ["csml", "chemical/x-csml"],
  ["csp", "application/vnd.commonspace"],
  ["csr", "application/octet-stream"],
  ["css", "text/css"],
  ["cst", "application/x-director"],
  ["csv", "text/csv"],
  ["cu", "application/cu-seeme"],
  ["curl", "text/vnd.curl"],
  ["cww", "application/prs.cww"],
  ["cxt", "application/x-director"],
  ["cxx", "text/x-c"],
  ["dae", "model/vnd.collada+xml"],
  ["daf", "application/vnd.mobius.daf"],
  ["dart", "application/vnd.dart"],
  ["dataless", "application/vnd.fdsn.seed"],
  ["davmount", "application/davmount+xml"],
  ["dbf", "application/vnd.dbf"],
  ["dbk", "application/docbook+xml"],
  ["dcr", "application/x-director"],
  ["dcurl", "text/vnd.curl.dcurl"],
  ["dd2", "application/vnd.oma.dd2+xml"],
  ["ddd", "application/vnd.fujixerox.ddd"],
  ["ddf", "application/vnd.syncml.dmddf+xml"],
  ["dds", "image/vnd.ms-dds"],
  ["deb", "application/x-debian-package"],
  ["def", "text/plain"],
  ["deploy", "application/octet-stream"],
  ["der", "application/x-x509-ca-cert"],
  ["dfac", "application/vnd.dreamfactory"],
  ["dgc", "application/x-dgc-compressed"],
  ["dic", "text/x-c"],
  ["dir", "application/x-director"],
  ["dis", "application/vnd.mobius.dis"],
  ["disposition-notification", "message/disposition-notification"],
  ["dist", "application/octet-stream"],
  ["distz", "application/octet-stream"],
  ["djv", "image/vnd.djvu"],
  ["djvu", "image/vnd.djvu"],
  ["dll", "application/octet-stream"],
  ["dmg", "application/x-apple-diskimage"],
  ["dmn", "application/octet-stream"],
  ["dmp", "application/vnd.tcpdump.pcap"],
  ["dms", "application/octet-stream"],
  ["dna", "application/vnd.dna"],
  ["doc", "application/msword"],
  ["docm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["dot", "application/msword"],
  ["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
  ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
  ["dp", "application/vnd.osgi.dp"],
  ["dpg", "application/vnd.dpgraph"],
  ["dra", "audio/vnd.dra"],
  ["drle", "image/dicom-rle"],
  ["dsc", "text/prs.lines.tag"],
  ["dssc", "application/dssc+der"],
  ["dtb", "application/x-dtbook+xml"],
  ["dtd", "application/xml-dtd"],
  ["dts", "audio/vnd.dts"],
  ["dtshd", "audio/vnd.dts.hd"],
  ["dump", "application/octet-stream"],
  ["dvb", "video/vnd.dvb.file"],
  ["dvi", "application/x-dvi"],
  ["dwd", "application/atsc-dwd+xml"],
  ["dwf", "model/vnd.dwf"],
  ["dwg", "image/vnd.dwg"],
  ["dxf", "image/vnd.dxf"],
  ["dxp", "application/vnd.spotfire.dxp"],
  ["dxr", "application/x-director"],
  ["ear", "application/java-archive"],
  ["ecelp4800", "audio/vnd.nuera.ecelp4800"],
  ["ecelp7470", "audio/vnd.nuera.ecelp7470"],
  ["ecelp9600", "audio/vnd.nuera.ecelp9600"],
  ["ecma", "application/ecmascript"],
  ["edm", "application/vnd.novadigm.edm"],
  ["edx", "application/vnd.novadigm.edx"],
  ["efif", "application/vnd.picsel"],
  ["ei6", "application/vnd.pg.osasli"],
  ["elc", "application/octet-stream"],
  ["emf", "image/emf"],
  ["eml", "message/rfc822"],
  ["emma", "application/emma+xml"],
  ["emotionml", "application/emotionml+xml"],
  ["emz", "application/x-msmetafile"],
  ["eol", "audio/vnd.digital-winds"],
  ["eot", "application/vnd.ms-fontobject"],
  ["eps", "application/postscript"],
  ["epub", "application/epub+zip"],
  ["es", "application/ecmascript"],
  ["es3", "application/vnd.eszigno3+xml"],
  ["esa", "application/vnd.osgi.subsystem"],
  ["esf", "application/vnd.epson.esf"],
  ["et3", "application/vnd.eszigno3+xml"],
  ["etx", "text/x-setext"],
  ["eva", "application/x-eva"],
  ["evy", "application/x-envoy"],
  ["exe", "application/octet-stream"],
  ["exi", "application/exi"],
  ["exp", "application/express"],
  ["exr", "image/aces"],
  ["ext", "application/vnd.novadigm.ext"],
  ["ez", "application/andrew-inset"],
  ["ez2", "application/vnd.ezpix-album"],
  ["ez3", "application/vnd.ezpix-package"],
  ["f", "text/x-fortran"],
  ["f4v", "video/mp4"],
  ["f77", "text/x-fortran"],
  ["f90", "text/x-fortran"],
  ["fbs", "image/vnd.fastbidsheet"],
  ["fcdt", "application/vnd.adobe.formscentral.fcdt"],
  ["fcs", "application/vnd.isac.fcs"],
  ["fdf", "application/vnd.fdf"],
  ["fdt", "application/fdt+xml"],
  ["fe_launch", "application/vnd.denovo.fcselayout-link"],
  ["fg5", "application/vnd.fujitsu.oasysgp"],
  ["fgd", "application/x-director"],
  ["fh", "image/x-freehand"],
  ["fh4", "image/x-freehand"],
  ["fh5", "image/x-freehand"],
  ["fh7", "image/x-freehand"],
  ["fhc", "image/x-freehand"],
  ["fig", "application/x-xfig"],
  ["fits", "image/fits"],
  ["flac", "audio/x-flac"],
  ["fli", "video/x-fli"],
  ["flo", "application/vnd.micrografx.flo"],
  ["flv", "video/x-flv"],
  ["flw", "application/vnd.kde.kivio"],
  ["flx", "text/vnd.fmi.flexstor"],
  ["fly", "text/vnd.fly"],
  ["fm", "application/vnd.framemaker"],
  ["fnc", "application/vnd.frogans.fnc"],
  ["fo", "application/vnd.software602.filler.form+xml"],
  ["for", "text/x-fortran"],
  ["fpx", "image/vnd.fpx"],
  ["frame", "application/vnd.framemaker"],
  ["fsc", "application/vnd.fsc.weblaunch"],
  ["fst", "image/vnd.fst"],
  ["ftc", "application/vnd.fluxtime.clip"],
  ["fti", "application/vnd.anser-web-funds-transfer-initiation"],
  ["fvt", "video/vnd.fvt"],
  ["fxp", "application/vnd.adobe.fxp"],
  ["fxpl", "application/vnd.adobe.fxp"],
  ["fzs", "application/vnd.fuzzysheet"],
  ["g2w", "application/vnd.geoplan"],
  ["g3", "image/g3fax"],
  ["g3w", "application/vnd.geospace"],
  ["gac", "application/vnd.groove-account"],
  ["gam", "application/x-tads"],
  ["gbr", "application/rpki-ghostbusters"],
  ["gca", "application/x-gca-compressed"],
  ["gdl", "model/vnd.gdl"],
  ["gdoc", "application/vnd.google-apps.document"],
  ["geo", "application/vnd.dynageo"],
  ["geojson", "application/geo+json"],
  ["gex", "application/vnd.geometry-explorer"],
  ["ggb", "application/vnd.geogebra.file"],
  ["ggt", "application/vnd.geogebra.tool"],
  ["ghf", "application/vnd.groove-help"],
  ["gif", "image/gif"],
  ["gim", "application/vnd.groove-identity-message"],
  ["glb", "model/gltf-binary"],
  ["gltf", "model/gltf+json"],
  ["gml", "application/gml+xml"],
  ["gmx", "application/vnd.gmx"],
  ["gnumeric", "application/x-gnumeric"],
  ["gpg", "application/gpg-keys"],
  ["gph", "application/vnd.flographit"],
  ["gpx", "application/gpx+xml"],
  ["gqf", "application/vnd.grafeq"],
  ["gqs", "application/vnd.grafeq"],
  ["gram", "application/srgs"],
  ["gramps", "application/x-gramps-xml"],
  ["gre", "application/vnd.geometry-explorer"],
  ["grv", "application/vnd.groove-injector"],
  ["grxml", "application/srgs+xml"],
  ["gsf", "application/x-font-ghostscript"],
  ["gsheet", "application/vnd.google-apps.spreadsheet"],
  ["gslides", "application/vnd.google-apps.presentation"],
  ["gtar", "application/x-gtar"],
  ["gtm", "application/vnd.groove-tool-message"],
  ["gtw", "model/vnd.gtw"],
  ["gv", "text/vnd.graphviz"],
  ["gxf", "application/gxf"],
  ["gxt", "application/vnd.geonext"],
  ["gz", "application/gzip"],
  ["gzip", "application/gzip"],
  ["h", "text/x-c"],
  ["h261", "video/h261"],
  ["h263", "video/h263"],
  ["h264", "video/h264"],
  ["hal", "application/vnd.hal+xml"],
  ["hbci", "application/vnd.hbci"],
  ["hbs", "text/x-handlebars-template"],
  ["hdd", "application/x-virtualbox-hdd"],
  ["hdf", "application/x-hdf"],
  ["heic", "image/heic"],
  ["heics", "image/heic-sequence"],
  ["heif", "image/heif"],
  ["heifs", "image/heif-sequence"],
  ["hej2", "image/hej2k"],
  ["held", "application/atsc-held+xml"],
  ["hh", "text/x-c"],
  ["hjson", "application/hjson"],
  ["hlp", "application/winhlp"],
  ["hpgl", "application/vnd.hp-hpgl"],
  ["hpid", "application/vnd.hp-hpid"],
  ["hps", "application/vnd.hp-hps"],
  ["hqx", "application/mac-binhex40"],
  ["hsj2", "image/hsj2"],
  ["htc", "text/x-component"],
  ["htke", "application/vnd.kenameaapp"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["hvd", "application/vnd.yamaha.hv-dic"],
  ["hvp", "application/vnd.yamaha.hv-voice"],
  ["hvs", "application/vnd.yamaha.hv-script"],
  ["i2g", "application/vnd.intergeo"],
  ["icc", "application/vnd.iccprofile"],
  ["ice", "x-conference/x-cooltalk"],
  ["icm", "application/vnd.iccprofile"],
  ["ico", "image/x-icon"],
  ["ics", "text/calendar"],
  ["ief", "image/ief"],
  ["ifb", "text/calendar"],
  ["ifm", "application/vnd.shana.informed.formdata"],
  ["iges", "model/iges"],
  ["igl", "application/vnd.igloader"],
  ["igm", "application/vnd.insors.igm"],
  ["igs", "model/iges"],
  ["igx", "application/vnd.micrografx.igx"],
  ["iif", "application/vnd.shana.informed.interchange"],
  ["img", "application/octet-stream"],
  ["imp", "application/vnd.accpac.simply.imp"],
  ["ims", "application/vnd.ms-ims"],
  ["in", "text/plain"],
  ["ini", "text/plain"],
  ["ink", "application/inkml+xml"],
  ["inkml", "application/inkml+xml"],
  ["install", "application/x-install-instructions"],
  ["iota", "application/vnd.astraea-software.iota"],
  ["ipfix", "application/ipfix"],
  ["ipk", "application/vnd.shana.informed.package"],
  ["irm", "application/vnd.ibm.rights-management"],
  ["irp", "application/vnd.irepository.package+xml"],
  ["iso", "application/x-iso9660-image"],
  ["itp", "application/vnd.shana.informed.formtemplate"],
  ["its", "application/its+xml"],
  ["ivp", "application/vnd.immervision-ivp"],
  ["ivu", "application/vnd.immervision-ivu"],
  ["jad", "text/vnd.sun.j2me.app-descriptor"],
  ["jade", "text/jade"],
  ["jam", "application/vnd.jam"],
  ["jar", "application/java-archive"],
  ["jardiff", "application/x-java-archive-diff"],
  ["java", "text/x-java-source"],
  ["jhc", "image/jphc"],
  ["jisp", "application/vnd.jisp"],
  ["jls", "image/jls"],
  ["jlt", "application/vnd.hp-jlyt"],
  ["jng", "image/x-jng"],
  ["jnlp", "application/x-java-jnlp-file"],
  ["joda", "application/vnd.joost.joda-archive"],
  ["jp2", "image/jp2"],
  ["jpe", "image/jpeg"],
  ["jpeg", "image/jpeg"],
  ["jpf", "image/jpx"],
  ["jpg", "image/jpeg"],
  ["jpg2", "image/jp2"],
  ["jpgm", "video/jpm"],
  ["jpgv", "video/jpeg"],
  ["jph", "image/jph"],
  ["jpm", "video/jpm"],
  ["jpx", "image/jpx"],
  ["js", "application/javascript"],
  ["json", "application/json"],
  ["json5", "application/json5"],
  ["jsonld", "application/ld+json"],
  // https://jsonlines.org/
  ["jsonl", "application/jsonl"],
  ["jsonml", "application/jsonml+json"],
  ["jsx", "text/jsx"],
  ["jxr", "image/jxr"],
  ["jxra", "image/jxra"],
  ["jxrs", "image/jxrs"],
  ["jxs", "image/jxs"],
  ["jxsc", "image/jxsc"],
  ["jxsi", "image/jxsi"],
  ["jxss", "image/jxss"],
  ["kar", "audio/midi"],
  ["karbon", "application/vnd.kde.karbon"],
  ["kdb", "application/octet-stream"],
  ["kdbx", "application/x-keepass2"],
  ["key", "application/x-iwork-keynote-sffkey"],
  ["kfo", "application/vnd.kde.kformula"],
  ["kia", "application/vnd.kidspiration"],
  ["kml", "application/vnd.google-earth.kml+xml"],
  ["kmz", "application/vnd.google-earth.kmz"],
  ["kne", "application/vnd.kinar"],
  ["knp", "application/vnd.kinar"],
  ["kon", "application/vnd.kde.kontour"],
  ["kpr", "application/vnd.kde.kpresenter"],
  ["kpt", "application/vnd.kde.kpresenter"],
  ["kpxx", "application/vnd.ds-keypoint"],
  ["ksp", "application/vnd.kde.kspread"],
  ["ktr", "application/vnd.kahootz"],
  ["ktx", "image/ktx"],
  ["ktx2", "image/ktx2"],
  ["ktz", "application/vnd.kahootz"],
  ["kwd", "application/vnd.kde.kword"],
  ["kwt", "application/vnd.kde.kword"],
  ["lasxml", "application/vnd.las.las+xml"],
  ["latex", "application/x-latex"],
  ["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
  ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
  ["les", "application/vnd.hhe.lesson-player"],
  ["less", "text/less"],
  ["lgr", "application/lgr+xml"],
  ["lha", "application/octet-stream"],
  ["link66", "application/vnd.route66.link66+xml"],
  ["list", "text/plain"],
  ["list3820", "application/vnd.ibm.modcap"],
  ["listafp", "application/vnd.ibm.modcap"],
  ["litcoffee", "text/coffeescript"],
  ["lnk", "application/x-ms-shortcut"],
  ["log", "text/plain"],
  ["lostxml", "application/lost+xml"],
  ["lrf", "application/octet-stream"],
  ["lrm", "application/vnd.ms-lrm"],
  ["ltf", "application/vnd.frogans.ltf"],
  ["lua", "text/x-lua"],
  ["luac", "application/x-lua-bytecode"],
  ["lvp", "audio/vnd.lucent.voice"],
  ["lwp", "application/vnd.lotus-wordpro"],
  ["lzh", "application/octet-stream"],
  ["m1v", "video/mpeg"],
  ["m2a", "audio/mpeg"],
  ["m2v", "video/mpeg"],
  ["m3a", "audio/mpeg"],
  ["m3u", "text/plain"],
  ["m3u8", "application/vnd.apple.mpegurl"],
  ["m4a", "audio/x-m4a"],
  ["m4p", "application/mp4"],
  ["m4s", "video/iso.segment"],
  ["m4u", "application/vnd.mpegurl"],
  ["m4v", "video/x-m4v"],
  ["m13", "application/x-msmediaview"],
  ["m14", "application/x-msmediaview"],
  ["m21", "application/mp21"],
  ["ma", "application/mathematica"],
  ["mads", "application/mads+xml"],
  ["maei", "application/mmt-aei+xml"],
  ["mag", "application/vnd.ecowin.chart"],
  ["maker", "application/vnd.framemaker"],
  ["man", "text/troff"],
  ["manifest", "text/cache-manifest"],
  ["map", "application/json"],
  ["mar", "application/octet-stream"],
  ["markdown", "text/markdown"],
  ["mathml", "application/mathml+xml"],
  ["mb", "application/mathematica"],
  ["mbk", "application/vnd.mobius.mbk"],
  ["mbox", "application/mbox"],
  ["mc1", "application/vnd.medcalcdata"],
  ["mcd", "application/vnd.mcd"],
  ["mcurl", "text/vnd.curl.mcurl"],
  ["md", "text/markdown"],
  ["mdb", "application/x-msaccess"],
  ["mdi", "image/vnd.ms-modi"],
  ["mdx", "text/mdx"],
  ["me", "text/troff"],
  ["mesh", "model/mesh"],
  ["meta4", "application/metalink4+xml"],
  ["metalink", "application/metalink+xml"],
  ["mets", "application/mets+xml"],
  ["mfm", "application/vnd.mfmp"],
  ["mft", "application/rpki-manifest"],
  ["mgp", "application/vnd.osgeo.mapguide.package"],
  ["mgz", "application/vnd.proteus.magazine"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mie", "application/x-mie"],
  ["mif", "application/vnd.mif"],
  ["mime", "message/rfc822"],
  ["mj2", "video/mj2"],
  ["mjp2", "video/mj2"],
  ["mjs", "application/javascript"],
  ["mk3d", "video/x-matroska"],
  ["mka", "audio/x-matroska"],
  ["mkd", "text/x-markdown"],
  ["mks", "video/x-matroska"],
  ["mkv", "video/x-matroska"],
  ["mlp", "application/vnd.dolby.mlp"],
  ["mmd", "application/vnd.chipnuts.karaoke-mmd"],
  ["mmf", "application/vnd.smaf"],
  ["mml", "text/mathml"],
  ["mmr", "image/vnd.fujixerox.edmics-mmr"],
  ["mng", "video/x-mng"],
  ["mny", "application/x-msmoney"],
  ["mobi", "application/x-mobipocket-ebook"],
  ["mods", "application/mods+xml"],
  ["mov", "video/quicktime"],
  ["movie", "video/x-sgi-movie"],
  ["mp2", "audio/mpeg"],
  ["mp2a", "audio/mpeg"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mp4a", "audio/mp4"],
  ["mp4s", "application/mp4"],
  ["mp4v", "video/mp4"],
  ["mp21", "application/mp21"],
  ["mpc", "application/vnd.mophun.certificate"],
  ["mpd", "application/dash+xml"],
  ["mpe", "video/mpeg"],
  ["mpeg", "video/mpeg"],
  ["mpg", "video/mpeg"],
  ["mpg4", "video/mp4"],
  ["mpga", "audio/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["mpm", "application/vnd.blueice.multipass"],
  ["mpn", "application/vnd.mophun.application"],
  ["mpp", "application/vnd.ms-project"],
  ["mpt", "application/vnd.ms-project"],
  ["mpy", "application/vnd.ibm.minipay"],
  ["mqy", "application/vnd.mobius.mqy"],
  ["mrc", "application/marc"],
  ["mrcx", "application/marcxml+xml"],
  ["ms", "text/troff"],
  ["mscml", "application/mediaservercontrol+xml"],
  ["mseed", "application/vnd.fdsn.mseed"],
  ["mseq", "application/vnd.mseq"],
  ["msf", "application/vnd.epson.msf"],
  ["msg", "application/vnd.ms-outlook"],
  ["msh", "model/mesh"],
  ["msi", "application/x-msdownload"],
  ["msl", "application/vnd.mobius.msl"],
  ["msm", "application/octet-stream"],
  ["msp", "application/octet-stream"],
  ["msty", "application/vnd.muvee.style"],
  ["mtl", "model/mtl"],
  ["mts", "model/vnd.mts"],
  ["mus", "application/vnd.musician"],
  ["musd", "application/mmt-usd+xml"],
  ["musicxml", "application/vnd.recordare.musicxml+xml"],
  ["mvb", "application/x-msmediaview"],
  ["mvt", "application/vnd.mapbox-vector-tile"],
  ["mwf", "application/vnd.mfer"],
  ["mxf", "application/mxf"],
  ["mxl", "application/vnd.recordare.musicxml"],
  ["mxmf", "audio/mobile-xmf"],
  ["mxml", "application/xv+xml"],
  ["mxs", "application/vnd.triscape.mxs"],
  ["mxu", "video/vnd.mpegurl"],
  ["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
  ["n3", "text/n3"],
  ["nb", "application/mathematica"],
  ["nbp", "application/vnd.wolfram.player"],
  ["nc", "application/x-netcdf"],
  ["ncx", "application/x-dtbncx+xml"],
  ["nfo", "text/x-nfo"],
  ["ngdat", "application/vnd.nokia.n-gage.data"],
  ["nitf", "application/vnd.nitf"],
  ["nlu", "application/vnd.neurolanguage.nlu"],
  ["nml", "application/vnd.enliven"],
  ["nnd", "application/vnd.noblenet-directory"],
  ["nns", "application/vnd.noblenet-sealer"],
  ["nnw", "application/vnd.noblenet-web"],
  ["npx", "image/vnd.net-fpx"],
  ["nq", "application/n-quads"],
  ["nsc", "application/x-conference"],
  ["nsf", "application/vnd.lotus-notes"],
  ["nt", "application/n-triples"],
  ["ntf", "application/vnd.nitf"],
  ["numbers", "application/x-iwork-numbers-sffnumbers"],
  ["nzb", "application/x-nzb"],
  ["oa2", "application/vnd.fujitsu.oasys2"],
  ["oa3", "application/vnd.fujitsu.oasys3"],
  ["oas", "application/vnd.fujitsu.oasys"],
  ["obd", "application/x-msbinder"],
  ["obgx", "application/vnd.openblox.game+xml"],
  ["obj", "model/obj"],
  ["oda", "application/oda"],
  ["odb", "application/vnd.oasis.opendocument.database"],
  ["odc", "application/vnd.oasis.opendocument.chart"],
  ["odf", "application/vnd.oasis.opendocument.formula"],
  ["odft", "application/vnd.oasis.opendocument.formula-template"],
  ["odg", "application/vnd.oasis.opendocument.graphics"],
  ["odi", "application/vnd.oasis.opendocument.image"],
  ["odm", "application/vnd.oasis.opendocument.text-master"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogex", "model/vnd.opengex"],
  ["ogg", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["omdoc", "application/omdoc+xml"],
  ["onepkg", "application/onenote"],
  ["onetmp", "application/onenote"],
  ["onetoc", "application/onenote"],
  ["onetoc2", "application/onenote"],
  ["opf", "application/oebps-package+xml"],
  ["opml", "text/x-opml"],
  ["oprc", "application/vnd.palm"],
  ["opus", "audio/ogg"],
  ["org", "text/x-org"],
  ["osf", "application/vnd.yamaha.openscoreformat"],
  ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
  ["osm", "application/vnd.openstreetmap.data+xml"],
  ["otc", "application/vnd.oasis.opendocument.chart-template"],
  ["otf", "font/otf"],
  ["otg", "application/vnd.oasis.opendocument.graphics-template"],
  ["oth", "application/vnd.oasis.opendocument.text-web"],
  ["oti", "application/vnd.oasis.opendocument.image-template"],
  ["otp", "application/vnd.oasis.opendocument.presentation-template"],
  ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
  ["ott", "application/vnd.oasis.opendocument.text-template"],
  ["ova", "application/x-virtualbox-ova"],
  ["ovf", "application/x-virtualbox-ovf"],
  ["owl", "application/rdf+xml"],
  ["oxps", "application/oxps"],
  ["oxt", "application/vnd.openofficeorg.extension"],
  ["p", "text/x-pascal"],
  ["p7a", "application/x-pkcs7-signature"],
  ["p7b", "application/x-pkcs7-certificates"],
  ["p7c", "application/pkcs7-mime"],
  ["p7m", "application/pkcs7-mime"],
  ["p7r", "application/x-pkcs7-certreqresp"],
  ["p7s", "application/pkcs7-signature"],
  ["p8", "application/pkcs8"],
  ["p10", "application/x-pkcs10"],
  ["p12", "application/x-pkcs12"],
  ["pac", "application/x-ns-proxy-autoconfig"],
  ["pages", "application/x-iwork-pages-sffpages"],
  ["pas", "text/x-pascal"],
  ["paw", "application/vnd.pawaafile"],
  ["pbd", "application/vnd.powerbuilder6"],
  ["pbm", "image/x-portable-bitmap"],
  ["pcap", "application/vnd.tcpdump.pcap"],
  ["pcf", "application/x-font-pcf"],
  ["pcl", "application/vnd.hp-pcl"],
  ["pclxl", "application/vnd.hp-pclxl"],
  ["pct", "image/x-pict"],
  ["pcurl", "application/vnd.curl.pcurl"],
  ["pcx", "image/x-pcx"],
  ["pdb", "application/x-pilot"],
  ["pde", "text/x-processing"],
  ["pdf", "application/pdf"],
  ["pem", "application/x-x509-user-cert"],
  ["pfa", "application/x-font-type1"],
  ["pfb", "application/x-font-type1"],
  ["pfm", "application/x-font-type1"],
  ["pfr", "application/font-tdpfr"],
  ["pfx", "application/x-pkcs12"],
  ["pgm", "image/x-portable-graymap"],
  ["pgn", "application/x-chess-pgn"],
  ["pgp", "application/pgp"],
  ["php", "application/x-httpd-php"],
  ["php3", "application/x-httpd-php"],
  ["php4", "application/x-httpd-php"],
  ["phps", "application/x-httpd-php-source"],
  ["phtml", "application/x-httpd-php"],
  ["pic", "image/x-pict"],
  ["pkg", "application/octet-stream"],
  ["pki", "application/pkixcmp"],
  ["pkipath", "application/pkix-pkipath"],
  ["pkpass", "application/vnd.apple.pkpass"],
  ["pl", "application/x-perl"],
  ["plb", "application/vnd.3gpp.pic-bw-large"],
  ["plc", "application/vnd.mobius.plc"],
  ["plf", "application/vnd.pocketlearn"],
  ["pls", "application/pls+xml"],
  ["pm", "application/x-perl"],
  ["pml", "application/vnd.ctc-posml"],
  ["png", "image/png"],
  ["pnm", "image/x-portable-anymap"],
  ["portpkg", "application/vnd.macports.portpkg"],
  ["pot", "application/vnd.ms-powerpoint"],
  ["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
  ["ppa", "application/vnd.ms-powerpoint"],
  ["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
  ["ppd", "application/vnd.cups-ppd"],
  ["ppm", "image/x-portable-pixmap"],
  ["pps", "application/vnd.ms-powerpoint"],
  ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
  ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
  ["ppt", "application/powerpoint"],
  ["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["pqa", "application/vnd.palm"],
  ["prc", "application/x-pilot"],
  ["pre", "application/vnd.lotus-freelance"],
  ["prf", "application/pics-rules"],
  ["provx", "application/provenance+xml"],
  ["ps", "application/postscript"],
  ["psb", "application/vnd.3gpp.pic-bw-small"],
  ["psd", "application/x-photoshop"],
  ["psf", "application/x-font-linux-psf"],
  ["pskcxml", "application/pskc+xml"],
  ["pti", "image/prs.pti"],
  ["ptid", "application/vnd.pvi.ptid1"],
  ["pub", "application/x-mspublisher"],
  ["pvb", "application/vnd.3gpp.pic-bw-var"],
  ["pwn", "application/vnd.3m.post-it-notes"],
  ["pya", "audio/vnd.ms-playready.media.pya"],
  ["pyv", "video/vnd.ms-playready.media.pyv"],
  ["qam", "application/vnd.epson.quickanime"],
  ["qbo", "application/vnd.intu.qbo"],
  ["qfx", "application/vnd.intu.qfx"],
  ["qps", "application/vnd.publishare-delta-tree"],
  ["qt", "video/quicktime"],
  ["qwd", "application/vnd.quark.quarkxpress"],
  ["qwt", "application/vnd.quark.quarkxpress"],
  ["qxb", "application/vnd.quark.quarkxpress"],
  ["qxd", "application/vnd.quark.quarkxpress"],
  ["qxl", "application/vnd.quark.quarkxpress"],
  ["qxt", "application/vnd.quark.quarkxpress"],
  ["ra", "audio/x-realaudio"],
  ["ram", "audio/x-pn-realaudio"],
  ["raml", "application/raml+yaml"],
  ["rapd", "application/route-apd+xml"],
  ["rar", "application/x-rar"],
  ["ras", "image/x-cmu-raster"],
  ["rcprofile", "application/vnd.ipunplugged.rcprofile"],
  ["rdf", "application/rdf+xml"],
  ["rdz", "application/vnd.data-vision.rdz"],
  ["relo", "application/p2p-overlay+xml"],
  ["rep", "application/vnd.businessobjects"],
  ["res", "application/x-dtbresource+xml"],
  ["rgb", "image/x-rgb"],
  ["rif", "application/reginfo+xml"],
  ["rip", "audio/vnd.rip"],
  ["ris", "application/x-research-info-systems"],
  ["rl", "application/resource-lists+xml"],
  ["rlc", "image/vnd.fujixerox.edmics-rlc"],
  ["rld", "application/resource-lists-diff+xml"],
  ["rm", "audio/x-pn-realaudio"],
  ["rmi", "audio/midi"],
  ["rmp", "audio/x-pn-realaudio-plugin"],
  ["rms", "application/vnd.jcp.javame.midlet-rms"],
  ["rmvb", "application/vnd.rn-realmedia-vbr"],
  ["rnc", "application/relax-ng-compact-syntax"],
  ["rng", "application/xml"],
  ["roa", "application/rpki-roa"],
  ["roff", "text/troff"],
  ["rp9", "application/vnd.cloanto.rp9"],
  ["rpm", "audio/x-pn-realaudio-plugin"],
  ["rpss", "application/vnd.nokia.radio-presets"],
  ["rpst", "application/vnd.nokia.radio-preset"],
  ["rq", "application/sparql-query"],
  ["rs", "application/rls-services+xml"],
  ["rsa", "application/x-pkcs7"],
  ["rsat", "application/atsc-rsat+xml"],
  ["rsd", "application/rsd+xml"],
  ["rsheet", "application/urc-ressheet+xml"],
  ["rss", "application/rss+xml"],
  ["rtf", "text/rtf"],
  ["rtx", "text/richtext"],
  ["run", "application/x-makeself"],
  ["rusd", "application/route-usd+xml"],
  ["rv", "video/vnd.rn-realvideo"],
  ["s", "text/x-asm"],
  ["s3m", "audio/s3m"],
  ["saf", "application/vnd.yamaha.smaf-audio"],
  ["sass", "text/x-sass"],
  ["sbml", "application/sbml+xml"],
  ["sc", "application/vnd.ibm.secure-container"],
  ["scd", "application/x-msschedule"],
  ["scm", "application/vnd.lotus-screencam"],
  ["scq", "application/scvp-cv-request"],
  ["scs", "application/scvp-cv-response"],
  ["scss", "text/x-scss"],
  ["scurl", "text/vnd.curl.scurl"],
  ["sda", "application/vnd.stardivision.draw"],
  ["sdc", "application/vnd.stardivision.calc"],
  ["sdd", "application/vnd.stardivision.impress"],
  ["sdkd", "application/vnd.solent.sdkm+xml"],
  ["sdkm", "application/vnd.solent.sdkm+xml"],
  ["sdp", "application/sdp"],
  ["sdw", "application/vnd.stardivision.writer"],
  ["sea", "application/octet-stream"],
  ["see", "application/vnd.seemail"],
  ["seed", "application/vnd.fdsn.seed"],
  ["sema", "application/vnd.sema"],
  ["semd", "application/vnd.semd"],
  ["semf", "application/vnd.semf"],
  ["senmlx", "application/senml+xml"],
  ["sensmlx", "application/sensml+xml"],
  ["ser", "application/java-serialized-object"],
  ["setpay", "application/set-payment-initiation"],
  ["setreg", "application/set-registration-initiation"],
  ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
  ["sfs", "application/vnd.spotfire.sfs"],
  ["sfv", "text/x-sfv"],
  ["sgi", "image/sgi"],
  ["sgl", "application/vnd.stardivision.writer-global"],
  ["sgm", "text/sgml"],
  ["sgml", "text/sgml"],
  ["sh", "application/x-sh"],
  ["shar", "application/x-shar"],
  ["shex", "text/shex"],
  ["shf", "application/shf+xml"],
  ["shtml", "text/html"],
  ["sid", "image/x-mrsid-image"],
  ["sieve", "application/sieve"],
  ["sig", "application/pgp-signature"],
  ["sil", "audio/silk"],
  ["silo", "model/mesh"],
  ["sis", "application/vnd.symbian.install"],
  ["sisx", "application/vnd.symbian.install"],
  ["sit", "application/x-stuffit"],
  ["sitx", "application/x-stuffitx"],
  ["siv", "application/sieve"],
  ["skd", "application/vnd.koan"],
  ["skm", "application/vnd.koan"],
  ["skp", "application/vnd.koan"],
  ["skt", "application/vnd.koan"],
  ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
  ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
  ["slim", "text/slim"],
  ["slm", "text/slim"],
  ["sls", "application/route-s-tsid+xml"],
  ["slt", "application/vnd.epson.salt"],
  ["sm", "application/vnd.stepmania.stepchart"],
  ["smf", "application/vnd.stardivision.math"],
  ["smi", "application/smil"],
  ["smil", "application/smil"],
  ["smv", "video/x-smv"],
  ["smzip", "application/vnd.stepmania.package"],
  ["snd", "audio/basic"],
  ["snf", "application/x-font-snf"],
  ["so", "application/octet-stream"],
  ["spc", "application/x-pkcs7-certificates"],
  ["spdx", "text/spdx"],
  ["spf", "application/vnd.yamaha.smaf-phrase"],
  ["spl", "application/x-futuresplash"],
  ["spot", "text/vnd.in3d.spot"],
  ["spp", "application/scvp-vp-response"],
  ["spq", "application/scvp-vp-request"],
  ["spx", "audio/ogg"],
  ["sql", "application/x-sql"],
  ["src", "application/x-wais-source"],
  ["srt", "application/x-subrip"],
  ["sru", "application/sru+xml"],
  ["srx", "application/sparql-results+xml"],
  ["ssdl", "application/ssdl+xml"],
  ["sse", "application/vnd.kodak-descriptor"],
  ["ssf", "application/vnd.epson.ssf"],
  ["ssml", "application/ssml+xml"],
  ["sst", "application/octet-stream"],
  ["st", "application/vnd.sailingtracker.track"],
  ["stc", "application/vnd.sun.xml.calc.template"],
  ["std", "application/vnd.sun.xml.draw.template"],
  ["stf", "application/vnd.wt.stf"],
  ["sti", "application/vnd.sun.xml.impress.template"],
  ["stk", "application/hyperstudio"],
  ["stl", "model/stl"],
  ["stpx", "model/step+xml"],
  ["stpxz", "model/step-xml+zip"],
  ["stpz", "model/step+zip"],
  ["str", "application/vnd.pg.format"],
  ["stw", "application/vnd.sun.xml.writer.template"],
  ["styl", "text/stylus"],
  ["stylus", "text/stylus"],
  ["sub", "text/vnd.dvb.subtitle"],
  ["sus", "application/vnd.sus-calendar"],
  ["susp", "application/vnd.sus-calendar"],
  ["sv4cpio", "application/x-sv4cpio"],
  ["sv4crc", "application/x-sv4crc"],
  ["svc", "application/vnd.dvb.service"],
  ["svd", "application/vnd.svd"],
  ["svg", "image/svg+xml"],
  ["svgz", "image/svg+xml"],
  ["swa", "application/x-director"],
  ["swf", "application/x-shockwave-flash"],
  ["swi", "application/vnd.aristanetworks.swi"],
  ["swidtag", "application/swid+xml"],
  ["sxc", "application/vnd.sun.xml.calc"],
  ["sxd", "application/vnd.sun.xml.draw"],
  ["sxg", "application/vnd.sun.xml.writer.global"],
  ["sxi", "application/vnd.sun.xml.impress"],
  ["sxm", "application/vnd.sun.xml.math"],
  ["sxw", "application/vnd.sun.xml.writer"],
  ["t", "text/troff"],
  ["t3", "application/x-t3vm-image"],
  ["t38", "image/t38"],
  ["taglet", "application/vnd.mynfc"],
  ["tao", "application/vnd.tao.intent-module-archive"],
  ["tap", "image/vnd.tencent.tap"],
  ["tar", "application/x-tar"],
  ["tcap", "application/vnd.3gpp2.tcap"],
  ["tcl", "application/x-tcl"],
  ["td", "application/urc-targetdesc+xml"],
  ["teacher", "application/vnd.smart.teacher"],
  ["tei", "application/tei+xml"],
  ["teicorpus", "application/tei+xml"],
  ["tex", "application/x-tex"],
  ["texi", "application/x-texinfo"],
  ["texinfo", "application/x-texinfo"],
  ["text", "text/plain"],
  ["tfi", "application/thraud+xml"],
  ["tfm", "application/x-tex-tfm"],
  ["tfx", "image/tiff-fx"],
  ["tga", "image/x-tga"],
  ["tgz", "application/x-tar"],
  ["thmx", "application/vnd.ms-officetheme"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["tk", "application/x-tcl"],
  ["tmo", "application/vnd.tmobile-livetv"],
  ["toml", "application/toml"],
  ["torrent", "application/x-bittorrent"],
  ["tpl", "application/vnd.groove-tool-template"],
  ["tpt", "application/vnd.trid.tpt"],
  ["tr", "text/troff"],
  ["tra", "application/vnd.trueapp"],
  ["trig", "application/trig"],
  ["trm", "application/x-msterminal"],
  ["ts", "video/mp2t"],
  ["tsd", "application/timestamped-data"],
  ["tsv", "text/tab-separated-values"],
  ["ttc", "font/collection"],
  ["ttf", "font/ttf"],
  ["ttl", "text/turtle"],
  ["ttml", "application/ttml+xml"],
  ["twd", "application/vnd.simtech-mindmapper"],
  ["twds", "application/vnd.simtech-mindmapper"],
  ["txd", "application/vnd.genomatix.tuxedo"],
  ["txf", "application/vnd.mobius.txf"],
  ["txt", "text/plain"],
  ["u8dsn", "message/global-delivery-status"],
  ["u8hdr", "message/global-headers"],
  ["u8mdn", "message/global-disposition-notification"],
  ["u8msg", "message/global"],
  ["u32", "application/x-authorware-bin"],
  ["ubj", "application/ubjson"],
  ["udeb", "application/x-debian-package"],
  ["ufd", "application/vnd.ufdl"],
  ["ufdl", "application/vnd.ufdl"],
  ["ulx", "application/x-glulx"],
  ["umj", "application/vnd.umajin"],
  ["unityweb", "application/vnd.unity"],
  ["uoml", "application/vnd.uoml+xml"],
  ["uri", "text/uri-list"],
  ["uris", "text/uri-list"],
  ["urls", "text/uri-list"],
  ["usdz", "model/vnd.usdz+zip"],
  ["ustar", "application/x-ustar"],
  ["utz", "application/vnd.uiq.theme"],
  ["uu", "text/x-uuencode"],
  ["uva", "audio/vnd.dece.audio"],
  ["uvd", "application/vnd.dece.data"],
  ["uvf", "application/vnd.dece.data"],
  ["uvg", "image/vnd.dece.graphic"],
  ["uvh", "video/vnd.dece.hd"],
  ["uvi", "image/vnd.dece.graphic"],
  ["uvm", "video/vnd.dece.mobile"],
  ["uvp", "video/vnd.dece.pd"],
  ["uvs", "video/vnd.dece.sd"],
  ["uvt", "application/vnd.dece.ttml+xml"],
  ["uvu", "video/vnd.uvvu.mp4"],
  ["uvv", "video/vnd.dece.video"],
  ["uvva", "audio/vnd.dece.audio"],
  ["uvvd", "application/vnd.dece.data"],
  ["uvvf", "application/vnd.dece.data"],
  ["uvvg", "image/vnd.dece.graphic"],
  ["uvvh", "video/vnd.dece.hd"],
  ["uvvi", "image/vnd.dece.graphic"],
  ["uvvm", "video/vnd.dece.mobile"],
  ["uvvp", "video/vnd.dece.pd"],
  ["uvvs", "video/vnd.dece.sd"],
  ["uvvt", "application/vnd.dece.ttml+xml"],
  ["uvvu", "video/vnd.uvvu.mp4"],
  ["uvvv", "video/vnd.dece.video"],
  ["uvvx", "application/vnd.dece.unspecified"],
  ["uvvz", "application/vnd.dece.zip"],
  ["uvx", "application/vnd.dece.unspecified"],
  ["uvz", "application/vnd.dece.zip"],
  ["vbox", "application/x-virtualbox-vbox"],
  ["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
  ["vcard", "text/vcard"],
  ["vcd", "application/x-cdlink"],
  ["vcf", "text/x-vcard"],
  ["vcg", "application/vnd.groove-vcard"],
  ["vcs", "text/x-vcalendar"],
  ["vcx", "application/vnd.vcx"],
  ["vdi", "application/x-virtualbox-vdi"],
  ["vds", "model/vnd.sap.vds"],
  ["vhd", "application/x-virtualbox-vhd"],
  ["vis", "application/vnd.visionary"],
  ["viv", "video/vnd.vivo"],
  ["vlc", "application/videolan"],
  ["vmdk", "application/x-virtualbox-vmdk"],
  ["vob", "video/x-ms-vob"],
  ["vor", "application/vnd.stardivision.writer"],
  ["vox", "application/x-authorware-bin"],
  ["vrml", "model/vrml"],
  ["vsd", "application/vnd.visio"],
  ["vsf", "application/vnd.vsf"],
  ["vss", "application/vnd.visio"],
  ["vst", "application/vnd.visio"],
  ["vsw", "application/vnd.visio"],
  ["vtf", "image/vnd.valve.source.texture"],
  ["vtt", "text/vtt"],
  ["vtu", "model/vnd.vtu"],
  ["vxml", "application/voicexml+xml"],
  ["w3d", "application/x-director"],
  ["wad", "application/x-doom"],
  ["wadl", "application/vnd.sun.wadl+xml"],
  ["war", "application/java-archive"],
  ["wasm", "application/wasm"],
  ["wav", "audio/x-wav"],
  ["wax", "audio/x-ms-wax"],
  ["wbmp", "image/vnd.wap.wbmp"],
  ["wbs", "application/vnd.criticaltools.wbs+xml"],
  ["wbxml", "application/wbxml"],
  ["wcm", "application/vnd.ms-works"],
  ["wdb", "application/vnd.ms-works"],
  ["wdp", "image/vnd.ms-photo"],
  ["weba", "audio/webm"],
  ["webapp", "application/x-web-app-manifest+json"],
  ["webm", "video/webm"],
  ["webmanifest", "application/manifest+json"],
  ["webp", "image/webp"],
  ["wg", "application/vnd.pmi.widget"],
  ["wgt", "application/widget"],
  ["wks", "application/vnd.ms-works"],
  ["wm", "video/x-ms-wm"],
  ["wma", "audio/x-ms-wma"],
  ["wmd", "application/x-ms-wmd"],
  ["wmf", "image/wmf"],
  ["wml", "text/vnd.wap.wml"],
  ["wmlc", "application/wmlc"],
  ["wmls", "text/vnd.wap.wmlscript"],
  ["wmlsc", "application/vnd.wap.wmlscriptc"],
  ["wmv", "video/x-ms-wmv"],
  ["wmx", "video/x-ms-wmx"],
  ["wmz", "application/x-msmetafile"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["word", "application/msword"],
  ["wpd", "application/vnd.wordperfect"],
  ["wpl", "application/vnd.ms-wpl"],
  ["wps", "application/vnd.ms-works"],
  ["wqd", "application/vnd.wqd"],
  ["wri", "application/x-mswrite"],
  ["wrl", "model/vrml"],
  ["wsc", "message/vnd.wfa.wsc"],
  ["wsdl", "application/wsdl+xml"],
  ["wspolicy", "application/wspolicy+xml"],
  ["wtb", "application/vnd.webturbo"],
  ["wvx", "video/x-ms-wvx"],
  ["x3d", "model/x3d+xml"],
  ["x3db", "model/x3d+fastinfoset"],
  ["x3dbz", "model/x3d+binary"],
  ["x3dv", "model/x3d-vrml"],
  ["x3dvz", "model/x3d+vrml"],
  ["x3dz", "model/x3d+xml"],
  ["x32", "application/x-authorware-bin"],
  ["x_b", "model/vnd.parasolid.transmit.binary"],
  ["x_t", "model/vnd.parasolid.transmit.text"],
  ["xaml", "application/xaml+xml"],
  ["xap", "application/x-silverlight-app"],
  ["xar", "application/vnd.xara"],
  ["xav", "application/xcap-att+xml"],
  ["xbap", "application/x-ms-xbap"],
  ["xbd", "application/vnd.fujixerox.docuworks.binder"],
  ["xbm", "image/x-xbitmap"],
  ["xca", "application/xcap-caps+xml"],
  ["xcs", "application/calendar+xml"],
  ["xdf", "application/xcap-diff+xml"],
  ["xdm", "application/vnd.syncml.dm+xml"],
  ["xdp", "application/vnd.adobe.xdp+xml"],
  ["xdssc", "application/dssc+xml"],
  ["xdw", "application/vnd.fujixerox.docuworks"],
  ["xel", "application/xcap-el+xml"],
  ["xenc", "application/xenc+xml"],
  ["xer", "application/patch-ops-error+xml"],
  ["xfdf", "application/vnd.adobe.xfdf"],
  ["xfdl", "application/vnd.xfdl"],
  ["xht", "application/xhtml+xml"],
  ["xhtml", "application/xhtml+xml"],
  ["xhvml", "application/xv+xml"],
  ["xif", "image/vnd.xiff"],
  ["xl", "application/excel"],
  ["xla", "application/vnd.ms-excel"],
  ["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
  ["xlc", "application/vnd.ms-excel"],
  ["xlf", "application/xliff+xml"],
  ["xlm", "application/vnd.ms-excel"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
  ["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xlt", "application/vnd.ms-excel"],
  ["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
  ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
  ["xlw", "application/vnd.ms-excel"],
  ["xm", "audio/xm"],
  ["xml", "application/xml"],
  ["xns", "application/xcap-ns+xml"],
  ["xo", "application/vnd.olpc-sugar"],
  ["xop", "application/xop+xml"],
  ["xpi", "application/x-xpinstall"],
  ["xpl", "application/xproc+xml"],
  ["xpm", "image/x-xpixmap"],
  ["xpr", "application/vnd.is-xpr"],
  ["xps", "application/vnd.ms-xpsdocument"],
  ["xpw", "application/vnd.intercon.formnet"],
  ["xpx", "application/vnd.intercon.formnet"],
  ["xsd", "application/xml"],
  ["xsl", "application/xml"],
  ["xslt", "application/xslt+xml"],
  ["xsm", "application/vnd.syncml+xml"],
  ["xspf", "application/xspf+xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["xvm", "application/xv+xml"],
  ["xvml", "application/xv+xml"],
  ["xwd", "image/x-xwindowdump"],
  ["xyz", "chemical/x-xyz"],
  ["xz", "application/x-xz"],
  ["yaml", "text/yaml"],
  ["yang", "application/yang"],
  ["yin", "application/yin+xml"],
  ["yml", "text/yaml"],
  ["ymp", "text/x-suse-ymp"],
  ["z", "application/x-compress"],
  ["z1", "application/x-zmachine"],
  ["z2", "application/x-zmachine"],
  ["z3", "application/x-zmachine"],
  ["z4", "application/x-zmachine"],
  ["z5", "application/x-zmachine"],
  ["z6", "application/x-zmachine"],
  ["z7", "application/x-zmachine"],
  ["z8", "application/x-zmachine"],
  ["zaz", "application/vnd.zzazz.deck+xml"],
  ["zip", "application/zip"],
  ["zir", "application/vnd.zul"],
  ["zirz", "application/vnd.zul"],
  ["zmm", "application/vnd.handheld-entertainment+xml"],
  ["zsh", "text/x-scriptzsh"]
]);
function toFileWithPath(file, path, h) {
  const f = withMimeType(file);
  const { webkitRelativePath } = file;
  const p = typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : `./${file.name}`;
  if (typeof f.path !== "string") {
    setObjProp(f, "path", p);
  }
  setObjProp(f, "relativePath", p);
  return f;
}
function withMimeType(file) {
  const { name } = file;
  const hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    const ext = name.split(".").pop().toLowerCase();
    const type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}
function setObjProp(f, key, value) {
  Object.defineProperty(f, key, {
    value,
    writable: false,
    configurable: false,
    enumerable: true
  });
}
const FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function* () {
    if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
      return getDataTransferFiles(evt.dataTransfer, evt.type);
    } else if (isChangeEvt(evt)) {
      return getInputFiles(evt);
    } else if (Array.isArray(evt) && evt.every((item) => "getFile" in item && typeof item.getFile === "function")) {
      return getFsHandleFiles(evt);
    }
    return [];
  });
}
function isDataTransfer(value) {
  return isObject(value);
}
function isChangeEvt(value) {
  return isObject(value) && isObject(value.target);
}
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map((file) => toFileWithPath(file));
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function* () {
    const files = yield Promise.all(handles.map((h) => h.getFile()));
    return files.map((file) => toFileWithPath(file));
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function* () {
    if (dt.items) {
      const items = fromList(dt.items).filter((item) => item.kind === "file");
      if (type !== "drop") {
        return items;
      }
      const files = yield Promise.all(items.map(toFilePromises));
      return noIgnoredFiles(flatten(files));
    }
    return noIgnoredFiles(fromList(dt.files).map((file) => toFileWithPath(file)));
  });
}
function noIgnoredFiles(files) {
  return files.filter((file) => FILES_TO_IGNORE.indexOf(file.name) === -1);
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  const files = [];
  for (let i = 0; i < items.length; i++) {
    const file = items[i];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  const entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item, entry);
}
function flatten(items) {
  return items.reduce((acc, files) => [
    ...acc,
    ...Array.isArray(files) ? flatten(files) : [files]
  ], []);
}
function fromDataTransferItem(item, entry) {
  return __awaiter(this, void 0, void 0, function* () {
    var _a;
    if (globalThis.isSecureContext && typeof item.getAsFileSystemHandle === "function") {
      const h = yield item.getAsFileSystemHandle();
      if (h === null) {
        throw new Error(`${item} is not a File`);
      }
      if (h !== void 0) {
        const file2 = yield h.getFile();
        file2.handle = h;
        return toFileWithPath(file2);
      }
    }
    const file = item.getAsFile();
    if (!file) {
      throw new Error(`${item} is not a File`);
    }
    const fwp = toFileWithPath(file, (_a = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _a !== void 0 ? _a : void 0);
    return fwp;
  });
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function* () {
    return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
  });
}
function fromDirEntry(entry) {
  const reader = entry.createReader();
  return new Promise((resolve, reject) => {
    const entries = [];
    function readEntries() {
      reader.readEntries((batch) => __awaiter(this, void 0, void 0, function* () {
        if (!batch.length) {
          try {
            const files = yield Promise.all(entries);
            resolve(files);
          } catch (err) {
            reject(err);
          }
        } else {
          const items = Promise.all(batch.map(fromEntry));
          entries.push(items);
          readEntries();
        }
      }), (err) => {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      entry.file((file) => {
        const fwp = toFileWithPath(file, entry.fullPath);
        resolve(fwp);
      }, (err) => {
        reject(err);
      });
    });
  });
}
var _default$1 = function(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
    if (acceptedFilesArray.length === 0) {
      return true;
    }
    var fileName = file.name || "";
    var mimeType = (file.type || "").toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, "");
    return acceptedFilesArray.some(function(type) {
      var validType = type.trim().toLowerCase();
      if (validType.charAt(0) === ".") {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith("/*")) {
        return baseMimeType === validType.replace(/\/.*$/, "");
      }
      return mimeType === validType;
    });
  }
  return true;
};
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
var accepts = typeof _default$1 === "function" ? _default$1 : _default$1.default;
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2() {
  var accept = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var acceptArr = accept.split(",");
  var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(msg)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref3) {
  var files = _ref3.files, accept = _ref3.accept, minSize = _ref3.minSize, maxSize = _ref3.maxSize, multiple = _ref3.multiple, maxFiles = _ref3.maxFiles, validator = _ref3.validator;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray$2(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$2(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    var customErrors = validator ? validator(file) : null;
    return accepted && sizeMatch && !customErrors;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function pickerOptionsFromAccept(accept) {
  if (isDefined(accept)) {
    var acceptForPicker = Object.entries(accept).filter(function(_ref22) {
      var _ref3 = _slicedToArray$2(_ref22, 2), mimeType = _ref3[0], ext = _ref3[1];
      var ok = true;
      if (!isMIMEType(mimeType)) {
        console.warn('Skipped "'.concat(mimeType, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'));
        ok = false;
      }
      if (!Array.isArray(ext) || !ext.every(isExt)) {
        console.warn('Skipped "'.concat(mimeType, '" because an invalid file extension was provided.'));
        ok = false;
      }
      return ok;
    }).reduce(function(agg, _ref4) {
      var _ref5 = _slicedToArray$2(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
      return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$2({}, mimeType, ext));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: acceptForPicker
    }];
  }
  return accept;
}
function acceptPropAsAcceptAttr(accept) {
  if (isDefined(accept)) {
    return Object.entries(accept).reduce(function(a, _ref6) {
      var _ref7 = _slicedToArray$2(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
      return [].concat(_toConsumableArray$2(a), [mimeType], _toConsumableArray$2(ext));
    }, []).filter(function(v) {
      return isMIMEType(v) || isExt(v);
    }).join(",");
  }
  return void 0;
}
function isAbort(v) {
  return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
function isSecurityError(v) {
  return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
function isMIMEType(v) {
  return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
}
function isExt(v) {
  return /^.*\.[\w]+$/.test(v);
}
var _excluded$7 = ["children"], _excluded2$2 = ["open"], _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], _excluded4 = ["refKey", "onChange", "onClick"];
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = /* @__PURE__ */ reactExports.forwardRef(function(_ref3, ref) {
  var children = _ref3.children, params = _objectWithoutProperties$1(_ref3, _excluded$7);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties$1(_useDropzone, _excluded2$2);
  reactExports.useImperativeHandle(ref, function() {
    return {
      open
    };
  }, [open]);
  return /* @__PURE__ */ U.createElement(reactExports.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps$1 = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: false,
  autoFocus: false
};
Dropzone.defaultProps = defaultProps$1;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: PropTypes.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: PropTypes.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: PropTypes.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: PropTypes.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: PropTypes.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: PropTypes.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: PropTypes.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: PropTypes.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: PropTypes.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: PropTypes.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: PropTypes.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: PropTypes.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: PropTypes.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: PropTypes.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: PropTypes.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: PropTypes.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: PropTypes.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: PropTypes.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: PropTypes.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: PropTypes.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: PropTypes.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: PropTypes.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps$1), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
  var acceptAttr = reactExports.useMemo(function() {
    return acceptPropAsAcceptAttr(accept);
  }, [accept]);
  var pickerTypes = reactExports.useMemo(function() {
    return pickerOptionsFromAccept(accept);
  }, [accept]);
  var onFileDialogOpenCb = reactExports.useMemo(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop$1;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = reactExports.useMemo(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop$1;
  }, [onFileDialogCancel]);
  var rootRef = reactExports.useRef(null);
  var inputRef = reactExports.useRef(null);
  var _useReducer = reactExports.useReducer(reducer, initialState), _useReducer2 = _slicedToArray$1(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
  var fsAccessApiWorksRef = reactExports.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  reactExports.useEffect(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = reactExports.useRef([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  reactExports.useEffect(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  reactExports.useEffect(function() {
    if (!disabled && autoFocus && rootRef.current) {
      rootRef.current.focus();
    }
    return function() {
    };
  }, [rootRef, autoFocus, disabled]);
  var onErrCb = reactExports.useCallback(function(e2) {
    if (onError) {
      onError(e2);
    } else {
      console.error(e2);
    }
  }, [onError]);
  var onDragEnterCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray$1(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        var fileCount = files.length;
        var isDragAccept = fileCount > 0 && allFilesAccepted({
          files,
          accept: acceptAttr,
          minSize,
          maxSize,
          multiple,
          maxFiles,
          validator
        });
        var isDragReject = fileCount > 0 && !isDragAccept;
        dispatch({
          isDragAccept,
          isDragReject,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      }).catch(function(e2) {
        return onErrCb(e2);
      });
    }
  }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
  var onDragOverCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      type: "setDraggedFiles",
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = reactExports.useCallback(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, acceptAttr), _fileAccepted2 = _slicedToArray$1(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e2) {
            return e2;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      isDragReject: fileRejections.length > 0,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = reactExports.useCallback(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      }).catch(function(e2) {
        return onErrCb(e2);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]);
  var openFileDialog = reactExports.useCallback(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: pickerTypes
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e2) {
        if (isAbort(e2)) {
          onFileDialogCancelCb(e2);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e2)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          } else {
            onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
          }
        } else {
          onErrCb(e2);
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]);
  var onKeyDownCb = reactExports.useCallback(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = reactExports.useCallback(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = reactExports.useCallback(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = reactExports.useCallback(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = reactExports.useMemo(function() {
    return function() {
      var _ref22 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref22.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref22.role, onKeyDown = _ref22.onKeyDown, onFocus3 = _ref22.onFocus, onBlur = _ref22.onBlur, onClick = _ref22.onClick, onDragEnter2 = _ref22.onDragEnter, onDragOver2 = _ref22.onDragOver, onDragLeave2 = _ref22.onDragLeave, onDrop2 = _ref22.onDrop, rest = _objectWithoutProperties$1(_ref22, _excluded3);
      return _objectSpread(_objectSpread(_defineProperty$1({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus3, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "presentation"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = reactExports.useCallback(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = reactExports.useMemo(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange2 = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties$1(_ref3, _excluded4);
      var inputProps = _defineProperty$1({
        accept: acceptAttr,
        multiple,
        type: "file",
        style: {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          clipPath: "inset(50%)",
          height: "1px",
          margin: "0 -1px -1px 0",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
          whiteSpace: "nowrap"
        },
        onChange: composeHandler(composeEventHandlers(onChange2, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread(_objectSpread({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  return _objectSpread(_objectSpread({}, state), {}, {
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread(_objectSpread({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        isDragActive: action.isDragActive,
        isDragAccept: action.isDragAccept,
        isDragReject: action.isDragReject
      });
    case "setFiles":
      return _objectSpread(_objectSpread({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections,
        isDragReject: action.isDragReject
      });
    case "reset":
      return _objectSpread({}, initialState);
    default:
      return state;
  }
}
function noop$1() {
}
function FileUpload({
  required,
  name,
  setData,
  defaultFiles = [],
  defaultUrls = []
}) {
  const hiddenInputRef = reactExports.useRef(null);
  const [files, setFiles] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [initializedUrls, setInitializedUrls] = reactExports.useState([]);
  const urlToFile = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const filename = url.split("/").pop() || "image";
      const fileExtension = blob.type.split("/")[1] || "jpg";
      return new File([blob], `${filename}.${fileExtension}`, { type: blob.type });
    } catch (error) {
      console.error(`Error converting URL to File:`, error);
      throw error;
    }
  };
  reactExports.useEffect(() => {
    const newUrls = defaultUrls.filter((url) => !initializedUrls.includes(url));
    if (newUrls.length === 0) return;
    const loadUrlFiles = async () => {
      setIsLoading(true);
      try {
        const filePromises = newUrls.map((url) => urlToFile(url));
        const loadedFiles = await Promise.all(filePromises);
        setFiles((prevFiles) => {
          const newFiles = [...prevFiles, ...loadedFiles];
          setData(name, newFiles);
          if (hiddenInputRef.current) {
            const dataTransfer = new DataTransfer();
            newFiles.forEach((file) => {
              dataTransfer.items.add(file);
            });
            hiddenInputRef.current.files = dataTransfer.files;
          }
          return newFiles;
        });
        setInitializedUrls((prev2) => [...prev2, ...newUrls]);
      } catch (error) {
        console.error("Error loading files from URLs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUrlFiles();
  }, [defaultUrls.join(",")]);
  const onDrop = reactExports.useCallback(
    (incomingFiles) => {
      const newFiles = [...files, ...incomingFiles];
      setFiles(newFiles);
      setData(name, newFiles);
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        newFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
    [files, name, setData]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true
  });
  const handleRemove = reactExports.useCallback(
    (fileToRemove, e2) => {
      e2.stopPropagation();
      const newFiles = files.filter((f) => f !== fileToRemove);
      setFiles(newFiles);
      setData(name, newFiles);
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        newFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
    [files, name, setData]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getRootProps(), className: `dropzone ${isDragActive ? "dz-drag-hover" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        name,
        style: { opacity: 0, position: "absolute" },
        ref: hiddenInputRef,
        multiple: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-message-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading images..." }) }) }) : files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-message-text", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Drop files here or click to upload" }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-preview-container", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dz-preview dz-file-preview", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-image", children: file.type.startsWith("image/") ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: URL.createObjectURL(file), alt: file.name }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-file-representation", children: "📄" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dz-details", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-filename", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: file.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dz-size", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          (file.size / 1024).toFixed(1),
          " KB"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "dz-remove",
          onClick: (e2) => handleRemove(file, e2),
          role: "button",
          tabIndex: 0,
          children: "✕"
        }
      )
    ] }, file.name + file.size)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .dropzone {
          border: 2px dashed #0087F7;
          border-radius: 5px;
          background: white;
          min-height: 150px;
          padding: 20px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dropzone.dz-drag-hover {
          border-color: #00a65a;
          background: #f0f9ff;
        }

        .dz-message {
          text-align: center;
          margin: 2em 0;
        }

        .dz-message-text {
          margin-bottom: 1em;
        }

        .dz-preview-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .dz-preview {
          background: white;
          border-radius: 4px;
          border: 1px solid #ddd;
          padding: 6px;
          position: relative;
        }

        .dz-image {
          width: 100%;
          height: 120px;
          overflow: hidden;
          border-radius: 4px;
          background: #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dz-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .dz-file-representation {
          font-size: 48px;
          color: #666;
        }

        .dz-details {
          padding: 8px;
          font-size: 13px;
        }

        .dz-filename {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 4px;
        }

        .dz-size {
          color: #666;
          font-size: 12px;
        }

        .dz-remove {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 20px;
          height: 20px;
          background: #ff0000;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 12px;
          font-weight: bold;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .dz-preview:hover .dz-remove {
          opacity: 1;
        }
      ` })
  ] });
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function toPrimitive$1(t2, r) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function toPropertyKey$1(t2) {
  var i = toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _defineProperty(e2, r, t2) {
  return (r = toPropertyKey$1(r)) in e2 ? Object.defineProperty(e2, r, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r] = t2, e2;
}
function ownKeys(e2, r) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e2, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e2;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u, a = [], f = true, o = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l) {
        if (Object(t2) !== t2) return;
        f = false;
      } else for (; !(f = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n2 = r2;
    } finally {
      try {
        if (!f && null != t2["return"] && (u = t2["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n2;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r[e2];
  return n2;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e2) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e2) || _unsupportedIterableToArray(r, e2) || _nonIterableRest();
}
function _objectWithoutPropertiesLoose(r, e2) {
  if (null == r) return {};
  var t2 = {};
  for (var n2 in r) if ({}.hasOwnProperty.call(r, n2)) {
    if (e2.includes(n2)) continue;
    t2[n2] = r[n2];
  }
  return t2;
}
function _objectWithoutProperties(e2, t2) {
  if (null == e2) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e2);
    for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
  }
  return i;
}
var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref3.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref3.inputValue, propsMenuIsOpen = _ref3.menuIsOpen, propsOnChange = _ref3.onChange, propsOnInputChange = _ref3.onInputChange, propsOnMenuClose = _ref3.onMenuClose, propsOnMenuOpen = _ref3.onMenuOpen, propsValue = _ref3.value, restSelectProps = _objectWithoutProperties(_ref3, _excluded$6);
  var _useState = reactExports.useState(propsInputValue !== void 0 ? propsInputValue : defaultInputValue), _useState2 = _slicedToArray(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
  var _useState3 = reactExports.useState(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = _slicedToArray(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
  var _useState5 = reactExports.useState(propsValue !== void 0 ? propsValue : defaultValue), _useState6 = _slicedToArray(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
  var onChange2 = reactExports.useCallback(function(value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }
    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = reactExports.useCallback(function(value2, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }
    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = reactExports.useCallback(function() {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = reactExports.useCallback(function() {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
}
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r in t2) ({}).hasOwnProperty.call(t2, r) && (n2[r] = t2[r]);
    }
    return n2;
  }, _extends$1.apply(null, arguments);
}
function _classCallCheck(a, n2) {
  if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    var o = r[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey$1(o.key), o);
  }
}
function _createClass(e2, r, t2) {
  return r && _defineProperties(e2.prototype, r), t2 && _defineProperties(e2, t2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inherits(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: t2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t2, "prototype", {
    writable: false
  }), e2 && _setPrototypeOf(t2, e2);
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _possibleConstructorReturn(t2, e2) {
  if (e2 && ("object" == _typeof$1(e2) || "function" == typeof e2)) return e2;
  if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t2);
}
function _createSuper(t2) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e2, o = _getPrototypeOf(t2);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e2 = Reflect.construct(o, arguments, s);
    } else e2 = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e2);
  };
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
var isDevelopment$2 = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options2) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options2.key);
  if (options2.nonce !== void 0) {
    tag.setAttribute("nonce", options2.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options2) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options2.speedy === void 0 ? !isDevelopment$2 : options2.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options2.nonce;
    this.key = options2.key;
    this.container = options2.container;
    this.prepend = options2.prepend;
    this.insertionPoint = options2.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var isBrowser$5 = typeof document !== "undefined";
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var getServerStylisCache = isBrowser$5 ? void 0 : weakMemoize(function() {
  return memoize(function() {
    var cache = {};
    return function(name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options2) {
  var key = options2.key;
  if (isBrowser$5 && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser$5) {
    container = options2.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (isBrowser$5) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis2(styles) {
      return serialize(compile(styles), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules3 = function getRules4(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules3(selector, serialized);
      if (cache.compat === void 0) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options2.nonce,
      speedy: options2.speedy,
      prepend: options2.prepend,
      insertionPoint: options2.insertionPoint
    }),
    nonce: options2.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e2 = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n2 = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t2 = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w2 = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e2:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n2:
                case t2:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n2;
  reactIs_production_min.Fragment = e2;
  reactIs_production_min.Lazy = t2;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return z(a) === n2;
  };
  reactIs_production_min.isFragment = function(a) {
    return z(a) === e2;
  };
  reactIs_production_min.isLazy = function(a) {
    return z(a) === t2;
  };
  reactIs_production_min.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e2 || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t2 || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n2 || a.$$typeof === w2 || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
if (process.env.NODE_ENV === "production") {
  reactIs$1.exports = requireReactIs_production_min();
} else {
  reactIs$1.exports = requireReactIs_development();
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser$4 = typeof document !== "undefined";
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className2) {
    if (registered[className2] !== void 0) {
      registeredStyles.push(registered[className2] + ";");
    } else if (className2) {
      rawClassName += className2 + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className2 = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$4 === false && cache.compat !== void 0) && cache.registered[className2] === void 0
  ) {
    cache.registered[className2] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className2 = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = "";
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className2 : "", current, cache.sheet, true);
      if (!isBrowser$4 && maybeStyles !== void 0) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== void 0);
    if (!isBrowser$4 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var isDevelopment$1 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes3 = interpolation;
      if (keyframes3.anim === 1) {
        cursor = {
          name: keyframes3.name,
          styles: keyframes3.styles,
          next: cursor
        };
        return keyframes3.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  {
    return asString;
  }
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && registered == null) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}
var isBrowser$3 = typeof document !== "undefined";
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = t$1["useInsertionEffect"] ? t$1["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$3 ? syncFallback : useInsertionEffect || syncFallback;
var isDevelopment = false;
var isBrowser$2 = typeof document !== "undefined";
var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var cache = reactExports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache3(func) {
    return function(props) {
      var cache = reactExports.useContext(EmotionCacheContext);
      if (cache === null) {
        cache = createCache({
          key: "css"
        });
        return /* @__PURE__ */ reactExports.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwn.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref3) {
  var cache = _ref3.cache, serialized = _ref3.serialized, isStringTag = _ref3.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser$2 && rules !== void 0) {
    var _ref22;
    var serializedNames = serialized.name;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      next2 = next2.next;
    }
    return /* @__PURE__ */ reactExports.createElement("style", (_ref22 = {}, _ref22["data-emotion"] = cache.key + " " + serializedNames, _ref22.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref22.nonce = cache.sheet.nonce, _ref22));
  }
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(
  /* <any, any> */
  function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className2 = "";
    if (typeof props.className === "string") {
      className2 = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className2 = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, reactExports.useContext(ThemeContext));
    className2 += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && !isDevelopment) {
        newProps[key] = props[key];
      }
    }
    newProps.className = className2;
    if (ref) {
      newProps.ref = ref;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ reactExports.createElement(WrappedComponent, newProps));
  }
);
var Emotion$1 = Emotion;
var _extends = { exports: {} };
(function(module) {
  function _extends2() {
    return module.exports = _extends2 = Object.assign ? Object.assign.bind() : function(n2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        for (var r in t2) ({}).hasOwnProperty.call(t2, r) && (n2[r] = t2[r]);
      }
      return n2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends2.apply(null, arguments);
  }
  module.exports = _extends2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_extends);
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwn.call(props, "css")) {
    return reactExports.createElement.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return reactExports.createElement.apply(null, createElementArgArray);
};
function css$2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css$2.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function _taggedTemplateLiteral(e2, t2) {
  return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, {
    raw: {
      value: Object.freeze(t2)
    }
  }));
}
var isClient = typeof document !== "undefined";
var index = isClient ? reactExports.useLayoutEffect : reactExports.useEffect;
var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
var noop = function noop2() {
};
function applyPrefixToName(prefix2, name) {
  if (!name) {
    return prefix2;
  } else if (name[0] === "-") {
    return prefix2 + name;
  } else {
    return prefix2 + "__" + name;
  }
}
function classNames(prefix2, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix2) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix2, key)));
      }
    }
  }
  return arr.filter(function(i) {
    return i;
  }).map(function(i) {
    return String(i).trim();
  }).join(" ");
}
var cleanValue = function cleanValue2(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof$1(value) === "object" && value !== null) return [value];
  return [];
};
var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return _objectSpread2({}, innerProps);
};
var getStyleProps = function getStyleProps2(props, name, classNamesState) {
  var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className2 = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className2)
  };
};
function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}
function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}
function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed") return document.documentElement;
  for (var parent = element; parent = parent.parentElement; ) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}
function easeOutCubic(t2, b, c, d) {
  return c * ((t2 = t2 / d - 1) * t2 * t2 + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}
function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e2) {
    return false;
  }
}
function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e2) {
    return false;
  }
}
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var w = typeof window !== "undefined" ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps2(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function(_ref3) {
    var _ref22 = _slicedToArray(_ref3, 1), key = _ref22[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function(newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"], _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref3) {
  var preferredMaxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, preferredPlacement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, controlHeight2 = _ref3.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight: preferredMaxHeight
  };
  if (!menuEl || !menuEl.offsetParent) return defaultState;
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }
      if (preferredPlacement === "auto" || isFixedPosition) {
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight2, preferredMaxHeight);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }
      if (preferredPlacement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: "bottom",
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: preferredMaxHeight
        };
      }
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }
      return {
        placement: "bottom",
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
  }
  return defaultState;
}
function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}
var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};
var menuCSS = function menuCSS2(_ref22, unstyled) {
  var _objectSpread2$1;
  var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
  return _objectSpread2((_objectSpread2$1 = {
    label: "menu"
  }, _defineProperty(_objectSpread2$1, alignToControl(placement), "100%"), _defineProperty(_objectSpread2$1, "position", "absolute"), _defineProperty(_objectSpread2$1, "width", "100%"), _defineProperty(_objectSpread2$1, "zIndex", 1), _objectSpread2$1), unstyled ? {} : {
    backgroundColor: colors2.neutral0,
    borderRadius: borderRadius2,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: spacing2.menuGutter,
    marginTop: spacing2.menuGutter
  });
};
var PortalPlacementContext = /* @__PURE__ */ reactExports.createContext(null);
var MenuPlacer = function MenuPlacer2(props) {
  var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
  var _ref3 = reactExports.useContext(PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
  var ref = reactExports.useRef(null);
  var _useState = reactExports.useState(maxMenuHeight), _useState2 = _slicedToArray(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
  var controlHeight2 = theme.spacing.controlHeight;
  index(function() {
    var menuEl = ref.current;
    if (!menuEl) return;
    var isFixedPosition = menuPosition === "fixed";
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
      controlHeight: controlHeight2
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight2]);
  return children({
    ref,
    placerProps: _objectSpread2(_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight
    })
  });
};
var Menu = function Menu2(props) {
  var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "menu", {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;
var menuListCSS = function menuListCSS2(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
  return _objectSpread2({
    maxHeight,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, unstyled ? {} : {
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2
  });
};
var MenuList$1 = function MenuList(props) {
  var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
  return jsx("div", _extends$1({}, getStyleProps(props, "menuList", {
    "menu-list": true,
    "menu-list--is-multi": isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};
var noticeCSS = function noticeCSS2(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
  return _objectSpread2({
    textAlign: "center"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage2(_ref6) {
  var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return jsx("div", _extends$1({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "noOptionsMessage", {
    "menu-notice": true,
    "menu-notice--no-options": true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage2(_ref7) {
  var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return jsx("div", _extends$1({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children,
    innerProps
  }), "loadingMessage", {
    "menu-notice": true,
    "menu-notice--loading": true
  }), innerProps), children);
};
var menuPortalCSS = function menuPortalCSS2(_ref8) {
  var rect = _ref8.rect, offset = _ref8.offset, position2 = _ref8.position;
  return {
    left: rect.left,
    position: position2,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal2(props) {
  var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
  var menuPortalRef = reactExports.useRef(null);
  var cleanupRef = reactExports.useRef(null);
  var _useState5 = reactExports.useState(coercePlacement(menuPlacement)), _useState6 = _slicedToArray(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
  var portalPlacementContext = reactExports.useMemo(function() {
    return {
      setPortalPlacement
    };
  }, []);
  var _useState7 = reactExports.useState(null), _useState8 = _slicedToArray(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
  var updateComputedPosition = reactExports.useCallback(function() {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset,
        rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  index(function() {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = reactExports.useCallback(function() {
    if (typeof cleanupRef.current === "function") {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: "ResizeObserver" in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  index(function() {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = reactExports.useCallback(function(menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);
  if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
  var menuWrapper = jsx("div", _extends$1({
    ref: setMenuPortalElement
  }, getStyleProps(_objectSpread2(_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), "menuPortal", {
    "menu-portal": true
  }), innerProps), children);
  return jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /* @__PURE__ */ reactDomExports.createPortal(menuWrapper, appendTo) : menuWrapper);
};
var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
};
var SelectContainer = function SelectContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
  return jsx("div", _extends$1({}, getStyleProps(props, "container", {
    "--is-disabled": isDisabled,
    "--is-rtl": isRtl
  }), innerProps), children);
};
var valueContainerCSS = function valueContainerCSS2(_ref22, unstyled) {
  var spacing2 = _ref22.theme.spacing, isMulti = _ref22.isMulti, hasValue = _ref22.hasValue, controlShouldRenderValue = _ref22.selectProps.controlShouldRenderValue;
  return _objectSpread2({
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, unstyled ? {} : {
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer2(props) {
  var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
  return jsx("div", _extends$1({}, getStyleProps(props, "valueContainer", {
    "value-container": true,
    "value-container--is-multi": isMulti,
    "value-container--has-value": hasValue
  }), innerProps), children);
};
var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "indicatorsContainer", {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"], _excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__$3() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2$2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};
var Svg = function Svg2(_ref3) {
  var size = _ref3.size, props = _objectWithoutProperties(_ref3, _excluded$2);
  return jsx("svg", _extends$1({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2$2
  }, props));
};
var CrossIcon = function CrossIcon2(props) {
  return jsx(Svg, _extends$1({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron2(props) {
  return jsx(Svg, _extends$1({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};
var baseCSS = function baseCSS2(_ref3, unstyled) {
  var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
  return _objectSpread2({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2,
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "dropdownIndicator", {
    indicator: true,
    "dropdown-indicator": true
  }), innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "clearIndicator", {
    indicator: true,
    "clear-indicator": true
  }), innerProps), children || jsx(CrossIcon, null));
};
var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
  return _objectSpread2({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator2(props) {
  var innerProps = props.innerProps;
  return jsx("span", _extends$1({}, innerProps, getStyleProps(props, "indicatorSeparator", {
    "indicator-separator": true
  })));
};
var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5, unstyled) {
  var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
  return _objectSpread2({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  }, unstyled ? {} : {
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    padding: baseUnit2 * 2
  });
};
var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay, offset = _ref6.offset;
  return jsx("span", {
    css: /* @__PURE__ */ css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
};
var LoadingIndicator = function LoadingIndicator2(_ref7) {
  var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? 4 : _ref7$size, restProps = _objectWithoutProperties(_ref7, _excluded2);
  return jsx("div", _extends$1({}, getStyleProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    innerProps,
    isRtl,
    size
  }), "loadingIndicator", {
    indicator: true,
    "loading-indicator": true
  }), innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
  return _objectSpread2({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  });
};
var Control = function Control2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends$1({
    ref: innerRef
  }, getStyleProps(props, "control", {
    control: true,
    "control--is-disabled": isDisabled,
    "control--is-focused": isFocused,
    "control--menu-is-open": menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || void 0
  }), children);
};
var Control$1 = Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS2(_ref3, unstyled) {
  var spacing2 = _ref3.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};
var Group = function Group2(props) {
  var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "group", {
    group: true
  }), innerProps), jsx(Heading, _extends$1({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    getClassNames,
    cx
  }), label), jsx("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, colors2 = _ref2$theme.colors, spacing2 = _ref2$theme.spacing;
  return _objectSpread2({
    label: "group",
    cursor: "default",
    display: "block"
  }, unstyled ? {} : {
    color: colors2.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  });
};
var GroupHeading = function GroupHeading2(props) {
  var _cleanCommonProps = cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return jsx("div", _extends$1({}, getStyleProps(props, "groupHeading", {
    "group-heading": true
  }), innerProps));
};
var Group$1 = Group;
var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, value = _ref3.value, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2(_objectSpread2({
    visibility: isDisabled ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? "translateZ(0)" : ""
  }, containerStyle), unstyled ? {} : {
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    color: colors2.neutral80
  });
};
var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};
var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};
var Input$1 = function Input(props) {
  var cx = props.cx, value = props.value;
  var _cleanCommonProps = cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
  return jsx("div", _extends$1({}, getStyleProps(props, "input", {
    "input-container": true
  }), {
    "data-value": value || ""
  }), jsx("input", _extends$1({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1$1 = Input$1;
var multiValueCSS = function multiValueCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    margin: spacing2.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS2(_ref22, unstyled) {
  var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
  return _objectSpread2({
    overflow: "hidden",
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
  return _objectSpread2({
    alignItems: "center",
    display: "flex"
  }, unstyled ? {} : {
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children, innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children, innerProps = _ref5.innerProps;
  return jsx("div", _extends$1({
    role: "button"
  }, innerProps), children || jsx(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue2(props) {
  var children = props.children, components2 = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps3 = props.removeProps, selectProps = props.selectProps;
  var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
  return jsx(Container, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValue", {
      "multi-value": true,
      "multi-value--is-disabled": isDisabled
    })), innerProps),
    selectProps
  }, jsx(Label, {
    data,
    innerProps: _objectSpread2({}, getStyleProps(props, "multiValueLabel", {
      "multi-value__label": true
    })),
    selectProps
  }, children), jsx(Remove, {
    data,
    innerProps: _objectSpread2(_objectSpread2({}, getStyleProps(props, "multiValueRemove", {
      "multi-value__remove": true
    })), {}, {
      "aria-label": "Remove ".concat(children || "option")
    }, removeProps3),
    selectProps
  }));
};
var MultiValue$1 = MultiValue;
var optionCSS = function optionCSS2(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  });
};
var Option = function Option2(props) {
  var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "option", {
    option: true,
    "option--is-disabled": isDisabled,
    "option--is-focused": isFocused,
    "option--is-selected": isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;
var placeholderCSS = function placeholderCSS2(_ref3, unstyled) {
  var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, unstyled ? {} : {
    color: colors2.neutral50,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var Placeholder = function Placeholder2(props) {
  var children = props.children, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "placeholder", {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;
var css2 = function css3(_ref3, unstyled) {
  var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
  return _objectSpread2({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, unstyled ? {} : {
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  });
};
var SingleValue = function SingleValue2(props) {
  var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
  return jsx("div", _extends$1({}, getStyleProps(props, "singleValue", {
    "single-value": true,
    "single-value--is-disabled": isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;
var components = {
  ClearIndicator,
  Control: Control$1,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group: Group$1,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input: Input$1$1,
  LoadingIndicator,
  Menu: Menu$1,
  MenuList: MenuList$1,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer
};
var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText2(props) {
  return jsx("span", _extends$1({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable, isMulti = props.isMulti, tabSelectsValue = props.tabSelectsValue, context = props.context, isInitialFocus = props.isInitialFocus;
    switch (context) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return isInitialFocus ? "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context, focused = props.focused, options2 = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected, isAppleDevice2 = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };
    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === "menu" && isAppleDevice2) {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? " selected" : "").concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }
    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};
var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id, isAppleDevice2 = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel4 = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled3 = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options2 = selectProps.options, screenReaderStatus2 = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue, isLoading = selectProps.isLoading;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = reactExports.useMemo(function() {
    var message = "";
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];
      var onChangeProps = _objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = reactExports.useMemo(function() {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? "menu" : "value",
        selectValue,
        isAppleDevice: isAppleDevice2
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, focusableOptions, selectValue, isAppleDevice2]);
  var ariaResults = reactExports.useMemo(function() {
    var resultsMsg = "";
    if (menuIsOpen && options2.length && !isLoading && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  var ariaGuidance = reactExports.useMemo(function() {
    var guidanceMsg = "";
    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue,
        isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = jsx(reactExports.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-focused"
  }, ariaFocused), jsx("span", {
    id: "aria-results"
  }, ariaResults), jsx("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return jsx(reactExports.Fragment, null, jsx(A11yText$1, {
    id
  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;
var diacritics = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function(match2) {
    return diacriticToBase[match2];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};
var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter2(config) {
  return function(option, rawInput) {
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify2 = _ignoreCase$ignoreAcc.stringify, trim2 = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim2 ? trimString(rawInput) : rawInput;
    var candidate = trim2 ? trimString(stringify2(option)) : stringify2(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var _excluded = ["innerRef"];
function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef, props = _objectWithoutProperties(_ref3, _excluded);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return jsx("input", _extends$1({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */ css$2({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var cancelScroll = function cancelScroll2(event) {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var isBottom = reactExports.useRef(false);
  var isTop = reactExports.useRef(false);
  var touchStart = reactExports.useRef(0);
  var scrollTarget = reactExports.useRef(null);
  var handleEventDelta = reactExports.useCallback(function(event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = reactExports.useCallback(function(event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = reactExports.useCallback(function(event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = reactExports.useCallback(function(event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = reactExports.useCallback(function(el) {
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = reactExports.useCallback(function(el) {
    if (!el) return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  reactExports.useEffect(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function() {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function(element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function preventTouchMove(e2) {
  if (e2.cancelable) e2.preventDefault();
}
function allowTouchMove(e2) {
  e2.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled, _ref$accountForScroll = _ref3.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = reactExports.useRef({});
  var scrollTarget = reactExports.useRef(null);
  var addScrollLock = reactExports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function(key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function(key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }
    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = reactExports.useCallback(function(touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function(key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }
    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  reactExports.useEffect(function() {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function() {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function(element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput2(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref3) {
  var children = _ref3.children, lockEnabled = _ref3.lockEnabled, _ref$captureEnabled = _ref3.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref3.onBottomArrive, onBottomLeave = _ref3.onBottomLeave, onTopArrive = _ref3.onTopArrive, onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return jsx(reactExports.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput2(_ref3) {
  var name = _ref3.name, onFocus3 = _ref3.onFocus;
  return jsx("input", {
    required: true,
    name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus3,
    css: _ref2,
    value: "",
    onChange: function onChange2() {
    }
  });
};
var RequiredInput$1 = RequiredInput;
function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window$navigator$use = window.navigator["userAgentData"]) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}
var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css2,
  valueContainer: valueContainerCSS
};
var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index2) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index: index2
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function(groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function(categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function(option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}
var getFocusedOptionId = function getFocusedOptionId2(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function(option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue2(props, option);
  return selectValue.some(function(i) {
    return getOptionValue2(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
  if (hideSelectedOptions === void 0) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /* @__PURE__ */ function(_Component) {
  _inherits(Select2, _Component);
  var _super = _createSuper(Select2);
  function Select2(_props) {
    var _this;
    _classCallCheck(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.isAppleDevice = isAppleDevice();
    _this.controlRef = null;
    _this.getControlRef = function(ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function(ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function(ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function(ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function(newValue, actionMeta) {
      var _this$props = _this.props, onChange2 = _this$props.onChange, name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange2(newValue, actionMeta);
    };
    _this.setValue = function(newValue, action, option) {
      var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action,
        option
      });
    };
    _this.selectOption = function(newValue) {
      var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function(i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function(removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function(i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function() {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };
    _this.popValue = function() {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      if (lastSelectedValue) {
        _this.onChange(newValue, {
          action: "pop-value",
          removedValue: lastSelectedValue
        });
      }
    };
    _this.getFocusedOptionId = function(focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function() {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId("option"));
    };
    _this.getValue = function() {
      return _this.state.selectValue;
    };
    _this.cx = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function(data) {
      return getOptionLabel2(_this.props, data);
    };
    _this.getOptionValue = function(data) {
      return getOptionValue2(_this.props, data);
    };
    _this.getStyles = function(key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function(key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function(element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function() {
      return defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function() {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function() {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function() {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function() {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function(value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function(event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function(event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function() {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function(event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function() {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function() {
      _this.isComposing = false;
    };
    _this.onTouchStart = function(_ref22) {
      var touches = _ref22.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function(_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function(event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function(event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function(event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function(event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function(focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options2 = _this.getFocusableOptions();
      var focusedOptionIndex = options2.indexOf(focusedOption);
      _this.setState({
        focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function() {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function(event) {
      var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === "function") {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }
      _this.blockOptionHover = true;
      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue) return;
          _this.focusValue("previous");
          break;
        case "ArrowRight":
          if (!isMulti || inputValue) return;
          _this.focusValue("next");
          break;
        case "Delete":
        case "Backspace":
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case "Tab":
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case "Enter":
          if (event.keyCode === 229) {
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case " ":
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu("first");
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }
          break;
        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }
          break;
        case "PageUp":
          if (!menuIsOpen) return;
          _this.focusOption("pageup");
          break;
        case "PageDown":
          if (!menuIsOpen) return;
          _this.focusOption("pagedown");
          break;
        case "Home":
          if (!menuIsOpen) return;
          _this.focusOption("first");
          break;
        case "End":
          if (!menuIsOpen) return;
          _this.focusOption("last");
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  _createClass(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
        // ensure focus is restored correctly when the control becomes enabled
        isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
        isFocused && menuIsOpen && !prevProps.menuIsOpen
      ) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        this.setState({
          isFocused: true
        });
      }
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function() {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length) return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1) nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options2[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function getTheme() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
      }
    )
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue2 = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
      var isMulti = props.isMulti, isRtl = props.isRtl, options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getClassNames,
        getValue: getValue2,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props, isClearable2 = _this$props7.isClearable, isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0) return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function renderInput() {
        var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
        var _this$getComponents = this.getComponents(), Input3 = _this$getComponents.Input;
        var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
        var commonProps = this.commonProps;
        var id = inputId || this.getElementId("input");
        var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
          "aria-autocomplete": "list",
          "aria-expanded": menuIsOpen,
          "aria-haspopup": true,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": required,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, menuIsOpen && {
          "aria-controls": this.getElementId("listbox")
        }), !isSearchable && {
          "aria-readonly": true
        }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        if (!isSearchable) {
          return /* @__PURE__ */ reactExports.createElement(DummyInput, _extends$1({
            id,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            disabled: isDisabled,
            tabIndex,
            inputMode: "none",
            form,
            value: ""
          }, ariaAttributes));
        }
        return /* @__PURE__ */ reactExports.createElement(Input3, _extends$1({}, commonProps, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex,
          form,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(), MultiValue3 = _this$getComponents2.MultiValue, MultiValueContainer2 = _this$getComponents2.MultiValueContainer, MultiValueLabel2 = _this$getComponents2.MultiValueLabel, MultiValueRemove2 = _this$getComponents2.MultiValueRemove, SingleValue3 = _this$getComponents2.SingleValue, Placeholder3 = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
      var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */ reactExports.createElement(Placeholder3, _extends$1({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function(opt, index2) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */ reactExports.createElement(MultiValue3, _extends$1({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index: index2,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e2) {
                e2.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /* @__PURE__ */ reactExports.createElement(SingleValue3, _extends$1({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(), ClearIndicator3 = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(ClearIndicator3, _extends$1({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(), LoadingIndicator3 = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading) return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(LoadingIndicator3, _extends$1({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(), DropdownIndicator3 = _this$getComponents5.DropdownIndicator, IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;
      if (!DropdownIndicator3 || !IndicatorSeparator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */ reactExports.createElement(IndicatorSeparator3, _extends$1({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(), DropdownIndicator3 = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ reactExports.createElement(DropdownIndicator3, _extends$1({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(), Group3 = _this$getComponents7.Group, GroupHeading3 = _this$getComponents7.GroupHeading, Menu3 = _this$getComponents7.Menu, MenuList3 = _this$getComponents7.MenuList, MenuPortal3 = _this$getComponents7.MenuPortal, LoadingMessage3 = _this$getComponents7.LoadingMessage, NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage, Option3 = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage2 = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage2 = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;
      var render = function render2(props, id) {
        var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function() {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function() {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: "option",
          "aria-selected": _this4.isAppleDevice ? void 0 : isSelected
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ reactExports.createElement(Option3, _extends$1({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function(item) {
          if (item.type === "group") {
            var _data = item.data, options2 = item.options, groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */ reactExports.createElement(Group3, _extends$1({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function(option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null) return null;
        menuUI = /* @__PURE__ */ reactExports.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });
        if (_message === null) return null;
        menuUI = /* @__PURE__ */ reactExports.createElement(NoOptionsMessage3, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */ reactExports.createElement(MenuPlacer, _extends$1({}, commonProps, menuPlacementProps), function(_ref4) {
        var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */ reactExports.createElement(Menu3, _extends$1({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading,
          placement
        }), /* @__PURE__ */ reactExports.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function(scrollTargetRef) {
          return /* @__PURE__ */ reactExports.createElement(MenuList3, _extends$1({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": commonProps.isMulti,
              id: _this4.getElementId("listbox")
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ reactExports.createElement(MenuPortal3, _extends$1({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props, delimiter2 = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /* @__PURE__ */ reactExports.createElement(RequiredInput$1, {
          name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled) return;
      if (isMulti) {
        if (delimiter2) {
          var value = selectValue.map(function(opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter2);
          return /* @__PURE__ */ reactExports.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
            return /* @__PURE__ */ reactExports.createElement("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */ reactExports.createElement("input", {
            name,
            type: "hidden",
            value: ""
          });
          return /* @__PURE__ */ reactExports.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
        return /* @__PURE__ */ reactExports.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */ reactExports.createElement(LiveRegion$1, _extends$1({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(), Control3 = _this$getComponents8.Control, IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer, SelectContainer3 = _this$getComponents8.SelectContainer, ValueContainer3 = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props, className2 = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ reactExports.createElement(SelectContainer3, _extends$1({}, commonProps, {
        className: className2,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */ reactExports.createElement(Control3, _extends$1({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */ reactExports.createElement(ValueContainer3, _extends$1({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ reactExports.createElement(IndicatorsContainer3, _extends$1({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused, instancePrefix = state.instancePrefix;
      var options2 = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedOptionId,
          focusableOptionsWithIds,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(reactExports.Component);
Select.defaultProps = defaultProps;
var objectSpread2 = { exports: {} };
var defineProperty = { exports: {} };
var toPropertyKey = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
var _typeofExports = _typeof.exports;
var toPrimitive = { exports: {} };
(function(module) {
  var _typeof2 = _typeofExports["default"];
  function toPrimitive2(t2, r) {
    if ("object" != _typeof2(t2) || !t2) return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i = e2.call(t2, r || "default");
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toPrimitive);
var toPrimitiveExports = toPrimitive.exports;
(function(module) {
  var _typeof2 = _typeofExports["default"];
  var toPrimitive2 = toPrimitiveExports;
  function toPropertyKey2(t2) {
    var i = toPrimitive2(t2, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toPropertyKey);
var toPropertyKeyExports = toPropertyKey.exports;
(function(module) {
  var toPropertyKey2 = toPropertyKeyExports;
  function _defineProperty2(e2, r, t2) {
    return (r = toPropertyKey2(r)) in e2 ? Object.defineProperty(e2, r, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[r] = t2, e2;
  }
  module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);
var definePropertyExports = defineProperty.exports;
(function(module) {
  var defineProperty2 = definePropertyExports;
  function ownKeys2(e2, r) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e2);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
      })), t2.push.apply(t2, o);
    }
    return t2;
  }
  function _objectSpread22(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var t2 = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t2), true).forEach(function(r2) {
        defineProperty2(e2, r2, t2[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys2(Object(t2)).forEach(function(r2) {
        Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
      });
    }
    return e2;
  }
  module.exports = _objectSpread22, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectSpread2);
var slicedToArray = { exports: {} };
var arrayWithHoles = { exports: {} };
(function(module) {
  function _arrayWithHoles2(r) {
    if (Array.isArray(r)) return r;
  }
  module.exports = _arrayWithHoles2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithHoles);
var arrayWithHolesExports = arrayWithHoles.exports;
var iterableToArrayLimit = { exports: {} };
(function(module) {
  function _iterableToArrayLimit2(r, l) {
    var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t2) {
      var e2, n2, i, u, a = [], f = true, o = false;
      try {
        if (i = (t2 = t2.call(r)).next, 0 === l) {
          if (Object(t2) !== t2) return;
          f = false;
        } else for (; !(f = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l); f = true) ;
      } catch (r2) {
        o = true, n2 = r2;
      } finally {
        try {
          if (!f && null != t2["return"] && (u = t2["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n2;
        }
      }
      return a;
    }
  }
  module.exports = _iterableToArrayLimit2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArrayLimit);
var iterableToArrayLimitExports = iterableToArrayLimit.exports;
var unsupportedIterableToArray = { exports: {} };
var arrayLikeToArray = { exports: {} };
(function(module) {
  function _arrayLikeToArray2(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r[e2];
    return n2;
  }
  module.exports = _arrayLikeToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayLikeToArray);
var arrayLikeToArrayExports = arrayLikeToArray.exports;
(function(module) {
  var arrayLikeToArray2 = arrayLikeToArrayExports;
  function _unsupportedIterableToArray2(r, a) {
    if (r) {
      if ("string" == typeof r) return arrayLikeToArray2(r, a);
      var t2 = {}.toString.call(r).slice(8, -1);
      return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? arrayLikeToArray2(r, a) : void 0;
    }
  }
  module.exports = _unsupportedIterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(unsupportedIterableToArray);
var unsupportedIterableToArrayExports = unsupportedIterableToArray.exports;
var nonIterableRest = { exports: {} };
(function(module) {
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableRest);
var nonIterableRestExports = nonIterableRest.exports;
(function(module) {
  var arrayWithHoles2 = arrayWithHolesExports;
  var iterableToArrayLimit2 = iterableToArrayLimitExports;
  var unsupportedIterableToArray2 = unsupportedIterableToArrayExports;
  var nonIterableRest2 = nonIterableRestExports;
  function _slicedToArray2(r, e2) {
    return arrayWithHoles2(r) || iterableToArrayLimit2(r, e2) || unsupportedIterableToArray2(r, e2) || nonIterableRest2();
  }
  module.exports = _slicedToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(slicedToArray);
var objectWithoutProperties = { exports: {} };
var objectWithoutPropertiesLoose = { exports: {} };
(function(module) {
  function _objectWithoutPropertiesLoose2(r, e2) {
    if (null == r) return {};
    var t2 = {};
    for (var n2 in r) if ({}.hasOwnProperty.call(r, n2)) {
      if (e2.includes(n2)) continue;
      t2[n2] = r[n2];
    }
    return t2;
  }
  module.exports = _objectWithoutPropertiesLoose2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectWithoutPropertiesLoose);
var objectWithoutPropertiesLooseExports = objectWithoutPropertiesLoose.exports;
(function(module) {
  var objectWithoutPropertiesLoose2 = objectWithoutPropertiesLooseExports;
  function _objectWithoutProperties2(e2, t2) {
    if (null == e2) return {};
    var o, r, i = objectWithoutPropertiesLoose2(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e2);
      for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
    }
    return i;
  }
  module.exports = _objectWithoutProperties2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectWithoutProperties);
var classCallCheck = { exports: {} };
(function(module) {
  function _classCallCheck2(a, n2) {
    if (!(a instanceof n2)) throw new TypeError("Cannot call a class as a function");
  }
  module.exports = _classCallCheck2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(classCallCheck);
var createClass = { exports: {} };
(function(module) {
  var toPropertyKey2 = toPropertyKeyExports;
  function _defineProperties2(e2, r) {
    for (var t2 = 0; t2 < r.length; t2++) {
      var o = r[t2];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, toPropertyKey2(o.key), o);
    }
  }
  function _createClass2(e2, r, t2) {
    return r && _defineProperties2(e2.prototype, r), t2 && _defineProperties2(e2, t2), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  module.exports = _createClass2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(createClass);
var inherits = { exports: {} };
var setPrototypeOf = { exports: {} };
(function(module) {
  function _setPrototypeOf2(t2, e2) {
    return module.exports = _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
      return t3.__proto__ = e3, t3;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf2(t2, e2);
  }
  module.exports = _setPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(setPrototypeOf);
var setPrototypeOfExports = setPrototypeOf.exports;
(function(module) {
  var setPrototypeOf2 = setPrototypeOfExports;
  function _inherits2(t2, e2) {
    if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
    t2.prototype = Object.create(e2 && e2.prototype, {
      constructor: {
        value: t2,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t2, "prototype", {
      writable: false
    }), e2 && setPrototypeOf2(t2, e2);
  }
  module.exports = _inherits2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(inherits);
var createSuper = { exports: {} };
var getPrototypeOf = { exports: {} };
(function(module) {
  function _getPrototypeOf2(t2) {
    return module.exports = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
      return t3.__proto__ || Object.getPrototypeOf(t3);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf2(t2);
  }
  module.exports = _getPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(getPrototypeOf);
var getPrototypeOfExports = getPrototypeOf.exports;
var isNativeReflectConstruct = { exports: {} };
(function(module) {
  function _isNativeReflectConstruct2() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (module.exports = _isNativeReflectConstruct2 = function _isNativeReflectConstruct3() {
      return !!t2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
  }
  module.exports = _isNativeReflectConstruct2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(isNativeReflectConstruct);
var isNativeReflectConstructExports = isNativeReflectConstruct.exports;
var possibleConstructorReturn = { exports: {} };
var assertThisInitialized = { exports: {} };
(function(module) {
  function _assertThisInitialized2(e2) {
    if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  module.exports = _assertThisInitialized2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(assertThisInitialized);
var assertThisInitializedExports = assertThisInitialized.exports;
(function(module) {
  var _typeof2 = _typeofExports["default"];
  var assertThisInitialized2 = assertThisInitializedExports;
  function _possibleConstructorReturn2(t2, e2) {
    if (e2 && ("object" == _typeof2(e2) || "function" == typeof e2)) return e2;
    if (void 0 !== e2) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized2(t2);
  }
  module.exports = _possibleConstructorReturn2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(possibleConstructorReturn);
var possibleConstructorReturnExports = possibleConstructorReturn.exports;
(function(module) {
  var getPrototypeOf2 = getPrototypeOfExports;
  var isNativeReflectConstruct2 = isNativeReflectConstructExports;
  var possibleConstructorReturn2 = possibleConstructorReturnExports;
  function _createSuper2(t2) {
    var r = isNativeReflectConstruct2();
    return function() {
      var e2, o = getPrototypeOf2(t2);
      if (r) {
        var s = getPrototypeOf2(this).constructor;
        e2 = Reflect.construct(o, arguments, s);
      } else e2 = o.apply(this, arguments);
      return possibleConstructorReturn2(this, e2);
    };
  }
  module.exports = _createSuper2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(createSuper);
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
(function(module) {
  var arrayLikeToArray2 = arrayLikeToArrayExports;
  function _arrayWithoutHoles2(r) {
    if (Array.isArray(r)) return arrayLikeToArray2(r);
  }
  module.exports = _arrayWithoutHoles2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithoutHoles);
var arrayWithoutHolesExports = arrayWithoutHoles.exports;
var iterableToArray = { exports: {} };
(function(module) {
  function _iterableToArray2(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  module.exports = _iterableToArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArray);
var iterableToArrayExports = iterableToArray.exports;
var nonIterableSpread = { exports: {} };
(function(module) {
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableSpread);
var nonIterableSpreadExports = nonIterableSpread.exports;
(function(module) {
  var arrayWithoutHoles2 = arrayWithoutHolesExports;
  var iterableToArray2 = iterableToArrayExports;
  var unsupportedIterableToArray2 = unsupportedIterableToArrayExports;
  var nonIterableSpread2 = nonIterableSpreadExports;
  function _toConsumableArray2(r) {
    return arrayWithoutHoles2(r) || iterableToArray2(r) || unsupportedIterableToArray2(r) || nonIterableSpread2();
  }
  module.exports = _toConsumableArray2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toConsumableArray);
var taggedTemplateLiteral = { exports: {} };
(function(module) {
  function _taggedTemplateLiteral2(e2, t2) {
    return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, {
      raw: {
        value: Object.freeze(t2)
      }
    }));
  }
  module.exports = _taggedTemplateLiteral2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(taggedTemplateLiteral);
var StateManagedSelect = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */ reactExports.createElement(Select, _extends$1({
    ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;
const SelectInput = ({ multiple = false, options: options2, setData, name, value }) => {
  const [selectedValue, setSelectedValue] = reactExports.useState(null);
  const formatInitialValue = (value2) => {
    if (!value2) return null;
    if (multiple) {
      const values = Array.isArray(value2) ? value2 : [value2];
      return values.map((val) => {
        if (typeof val === "object" && "value" in val && "label" in val) {
          return val;
        }
        const option = options2.find((opt) => opt.value === val);
        return option || null;
      }).filter(Boolean);
    } else {
      if (typeof value2 === "object" && "value" in value2 && "label" in value2) {
        return value2;
      }
      const option = options2.find((opt) => opt.value === value2);
      return option || null;
    }
  };
  reactExports.useEffect(() => {
    const formattedValue = formatInitialValue(value);
    setSelectedValue(formattedValue);
  }, [value, options2]);
  const handleChange = (val) => {
    setSelectedValue(val);
    if (multiple) {
      const values = val ? val.map((option) => option.value) : [];
      setData(name, values);
    } else {
      const value2 = val ? val.value : null;
      setData(name, value2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StateManagedSelect$1,
    {
      value: selectedValue,
      styles: {
        option: (baseStyles, state) => ({
          backgroundColor: state.isSelected ? "var(--bs-primary)" : state.isFocused ? "#f0f0f0" : "white",
          padding: "6px 10px"
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: state.isFocused ? "1px solid var(--bs-primary)" : "1px solid rgba(8, 49, 78, 0.2)",
          borderRadius: "100px",
          outlineColor: "red",
          boxShadow: "none",
          "&:hover": {
            border: "auto"
          },
          padding: "3px 4px"
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "var(--bs-primary)",
          borderRadius: "50px",
          color: "white"
        }),
        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: "white"
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color: "white",
          cursor: "pointer",
          ":hover": {
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            backgroundColor: "#f54242",
            color: "#fff"
          }
        })
      },
      onChange: handleChange,
      isMulti: multiple,
      options: options2
    }
  );
};
var __spreadArray$3 = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
var clipboardEvents = ["onCopy", "onCut", "onPaste"];
var compositionEvents = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
];
var focusEvents = ["onFocus", "onBlur"];
var formEvents = ["onInput", "onInvalid", "onReset", "onSubmit"];
var imageEvents = ["onLoad", "onError"];
var keyboardEvents = ["onKeyDown", "onKeyPress", "onKeyUp"];
var mediaEvents = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
];
var mouseEvents = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
];
var dragEvents = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
];
var selectionEvents = ["onSelect"];
var touchEvents = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"];
var pointerEvents = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
];
var uiEvents = ["onScroll"];
var wheelEvents = ["onWheel"];
var animationEvents = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
];
var transitionEvents = ["onTransitionEnd"];
var otherEvents = ["onToggle"];
var changeEvents = ["onChange"];
var allEvents = __spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3(__spreadArray$3([], clipboardEvents, true), compositionEvents, true), focusEvents, true), formEvents, true), imageEvents, true), keyboardEvents, true), mediaEvents, true), mouseEvents, true), dragEvents, true), selectionEvents, true), touchEvents, true), pointerEvents, true), uiEvents, true), wheelEvents, true), animationEvents, true), transitionEvents, true), changeEvents, true), otherEvents, true);
function makeEventProps(props, getArgs) {
  var eventProps = {};
  allEvents.forEach(function(eventName) {
    var eventHandler = props[eventName];
    if (!eventHandler) {
      return;
    }
    {
      eventProps[eventName] = eventHandler;
    }
  });
  return eventProps;
}
const copyProperty = (to, from2, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype") {
    return;
  }
  if (property === "arguments" || property === "caller") {
    return;
  }
  const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  const fromDescriptor = Object.getOwnPropertyDescriptor(from2, property);
  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }
  Object.defineProperty(to, property, fromDescriptor);
};
const canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};
const changePrototype = (to, from2) => {
  const fromPrototype = Object.getPrototypeOf(from2);
  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }
  Object.setPrototypeOf(to, fromPrototype);
};
const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
const changeToString = (to, from2, name) => {
  const withName = name === "" ? "" : `with ${name.trim()}() `;
  const newToString = wrappedToString.bind(null, withName, from2.toString());
  Object.defineProperty(newToString, "name", toStringName);
  Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
};
const mimicFn$1 = (to, from2, { ignoreNonConfigurable = false } = {}) => {
  const { name } = to;
  for (const property of Reflect.ownKeys(from2)) {
    copyProperty(to, from2, property, ignoreNonConfigurable);
  }
  changePrototype(to, from2);
  changeToString(to, from2, name);
  return to;
};
var mimicFn_1 = mimicFn$1;
var dist$1 = { exports: {} };
var pDefer = () => {
  const ret = {};
  ret.promise = new Promise((resolve, reject) => {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
};
(function(module, exports) {
  var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function(resolve2) {
          resolve2(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  const p_defer_1 = __importDefault(pDefer);
  function mapAgeCleaner2(map, property = "maxAge") {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = () => __awaiter2(this, void 0, void 0, function* () {
      if (processingKey !== void 0) {
        return;
      }
      const setupTimer = (item) => __awaiter2(this, void 0, void 0, function* () {
        processingDeferred = p_defer_1.default();
        const delay = item[1][property] - Date.now();
        if (delay <= 0) {
          map.delete(item[0]);
          processingDeferred.resolve();
          return;
        }
        processingKey = item[0];
        processingTimer = setTimeout(() => {
          map.delete(item[0]);
          if (processingDeferred) {
            processingDeferred.resolve();
          }
        }, delay);
        if (typeof processingTimer.unref === "function") {
          processingTimer.unref();
        }
        return processingDeferred.promise;
      });
      try {
        for (const entry of map) {
          yield setupTimer(entry);
        }
      } catch (_a) {
      }
      processingKey = void 0;
    });
    const reset = () => {
      processingKey = void 0;
      if (processingTimer !== void 0) {
        clearTimeout(processingTimer);
        processingTimer = void 0;
      }
      if (processingDeferred !== void 0) {
        processingDeferred.reject(void 0);
        processingDeferred = void 0;
      }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value) => {
      if (map.has(key)) {
        map.delete(key);
      }
      const result = originalSet(key, value);
      if (processingKey && processingKey === key) {
        reset();
      }
      cleanup();
      return result;
    };
    cleanup();
    return map;
  }
  exports.default = mapAgeCleaner2;
  module.exports = mapAgeCleaner2;
  module.exports.default = mapAgeCleaner2;
})(dist$1, dist$1.exports);
var distExports = dist$1.exports;
const mimicFn = mimicFn_1;
const mapAgeCleaner = distExports;
const decoratorInstanceMap = /* @__PURE__ */ new WeakMap();
const cacheStore = /* @__PURE__ */ new WeakMap();
const mem = (fn, { cacheKey, cache = /* @__PURE__ */ new Map(), maxAge } = {}) => {
  if (typeof maxAge === "number") {
    mapAgeCleaner(cache);
  }
  const memoized = function(...arguments_) {
    const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
    const cacheItem = cache.get(key);
    if (cacheItem) {
      return cacheItem.data;
    }
    const result = fn.apply(this, arguments_);
    cache.set(key, {
      data: result,
      maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
    });
    return result;
  };
  mimicFn(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
};
mem.decorator = (options2 = {}) => (target, propertyKey, descriptor) => {
  const input = target[propertyKey];
  if (typeof input !== "function") {
    throw new TypeError("The decorated value must be a function");
  }
  delete descriptor.value;
  delete descriptor.writable;
  descriptor.get = function() {
    if (!decoratorInstanceMap.has(this)) {
      const value = mem(input, options2);
      decoratorInstanceMap.set(this, value);
      return value;
    }
    return decoratorInstanceMap.get(this);
  };
};
mem.clear = (fn) => {
  const cache = cacheStore.get(fn);
  if (!cache) {
    throw new TypeError("Can't clear a function that was not memoized!");
  }
  if (typeof cache.clear !== "function") {
    throw new TypeError("The cache Map can't be cleared!");
  }
  cache.clear();
};
var dist = mem;
const mem$1 = /* @__PURE__ */ getDefaultExportFromCjs(dist);
function isString(el) {
  return typeof el === "string";
}
function isUnique(el, index2, arr) {
  return arr.indexOf(el) === index2;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(",") === -1 ? el : el.split(",");
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === "C" || locale === "posix" || locale === "POSIX") {
    return "en-US";
  }
  if (locale.indexOf(".") !== -1) {
    var _a = locale.split(".")[0], actualLocale = _a === void 0 ? "" : _a;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("@") !== -1) {
    var _b = locale.split("@")[0], actualLocale = _b === void 0 ? "" : _b;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("-") === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c = locale.split("-"), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? "" : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
  var languageList = [];
  if (typeof navigator !== "undefined") {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = mem$1(getUserLocalesInternal, { cacheKey: JSON.stringify });
function getUserLocaleInternal(options2) {
  return getUserLocales(options2)[0] || null;
}
var getUserLocale = mem$1(getUserLocaleInternal, { cacheKey: JSON.stringify });
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd2) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd2(date)];
  };
}
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === "number") {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === "string" && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }
  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = /* @__PURE__ */ new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = /* @__PURE__ */ new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = /* @__PURE__ */ new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = /* @__PURE__ */ new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = /* @__PURE__ */ new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}
function padStart(num, val) {
  if (val === void 0) {
    val = 2;
  }
  var numStr = "".concat(num);
  if (numStr.length >= val) {
    return num;
  }
  return "0000".concat(numStr).slice(-val);
}
function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
var CALENDAR_TYPES = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
};
var CALENDAR_TYPE_LOCALES = {
  gregory: [
    "en-CA",
    "en-US",
    "es-AR",
    "es-BO",
    "es-CL",
    "es-CO",
    "es-CR",
    "es-DO",
    "es-EC",
    "es-GT",
    "es-HN",
    "es-MX",
    "es-NI",
    "es-PA",
    "es-PE",
    "es-PR",
    "es-SV",
    "es-VE",
    "pt-BR"
  ],
  hebrew: ["he", "he-IL"],
  islamic: [
    // ar-LB, ar-MA intentionally missing
    "ar",
    "ar-AE",
    "ar-BH",
    "ar-DZ",
    "ar-EG",
    "ar-IQ",
    "ar-JO",
    "ar-KW",
    "ar-LY",
    "ar-OM",
    "ar-QA",
    "ar-SA",
    "ar-SD",
    "ar-SY",
    "ar-YE",
    "dv",
    "dv-MV",
    "ps",
    "ps-AR"
  ]
};
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
var formatterCache$1 = /* @__PURE__ */ new Map();
function getFormatter$1(options2) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || getUserLocale();
    if (!formatterCache$1.has(localeWithDefault)) {
      formatterCache$1.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache$1.get(localeWithDefault);
    if (!formatterCacheLocale.has(options2)) {
      formatterCacheLocale.set(options2, new Intl.DateTimeFormat(localeWithDefault || void 0, options2).format);
    }
    return formatterCacheLocale.get(options2)(date);
  };
}
function toSafeHour$1(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter$1(options2) {
  return function(locale, date) {
    return getFormatter$1(options2)(locale, toSafeHour$1(date));
  };
}
var formatDayOptions = { day: "numeric" };
var formatLongDateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
var formatMonthOptions$1 = { month: "long" };
var formatMonthYearOptions = {
  month: "long",
  year: "numeric"
};
var formatShortWeekdayOptions = { weekday: "short" };
var formatWeekdayOptions = { weekday: "long" };
var formatYearOptions = { year: "numeric" };
var formatDay = getSafeFormatter$1(formatDayOptions);
var formatLongDate = getSafeFormatter$1(formatLongDateOptions);
var formatMonth$1 = getSafeFormatter$1(formatMonthOptions$1);
var formatMonthYear = getSafeFormatter$1(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter$1(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter$1(formatWeekdayOptions);
var formatYear = getSafeFormatter$1(formatYearOptions);
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (864e5 * 7)) + 1;
}
function getBegin$1(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyStart(date);
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyStart(date);
    case "decade":
      return getPreviousDecadeStart(date);
    case "year":
      return getPreviousYearStart(date);
    case "month":
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getNextCenturyStart(date);
    case "decade":
      return getNextDecadeStart(date);
    case "year":
      return getNextYearStart(date);
    case "month":
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeStart(date, -100);
    case "year":
      return getPreviousYearStart(date, -10);
    case "month":
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getNextDecadeStart(date, 100);
    case "year":
      return getNextYearStart(date, 10);
    case "month":
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd$1(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyEnd(date);
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyEnd(date);
    case "decade":
      return getPreviousDecadeEnd(date);
    case "year":
      return getPreviousYearEnd(date);
    case "month":
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeEnd(date, -100);
    case "year":
      return getPreviousYearEnd(date, -10);
    case "month":
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getRange(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyRange(date);
    case "decade":
      return getDecadeRange(date);
    case "year":
      return getYearRange(date);
    case "month":
      return getMonthRange(date);
    case "day":
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function(a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin$1(rangeType, rawNextValue[0]), getEnd$1(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear$1, dates) {
  return dates.map(function(date) {
    return (formatYear$1 || formatYear)(locale, date);
  }).join(" – ");
}
function getCenturyLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getCenturyRange(date));
}
function getDecadeLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getDecadeRange(date));
}
function isCurrentDayOfWeek(date) {
  return date.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var className$6 = "react-calendar__navigation";
function Navigation(_a) {
  var activeStartDate = _a.activeStartDate, drillUp = _a.drillUp, _b = _a.formatMonthYear, formatMonthYear$1 = _b === void 0 ? formatMonthYear : _b, _c = _a.formatYear, formatYear$1 = _c === void 0 ? formatYear : _c, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, _d = _a.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a.navigationAriaLive, navigationLabel = _a.navigationLabel, _e = _a.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a.next2Label, next2Label = _f === void 0 ? "»" : _f, _g = _a.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a.nextLabel, nextLabel = _h === void 0 ? "›" : _h, _j = _a.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a.prev2Label, prev2Label = _k === void 0 ? "«" : _k, _l = _a.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a.prevLabel, prevLabel = _m === void 0 ? "‹" : _m, setActiveStartDate = _a.setActiveStartDate, showDoubleView = _a.showDoubleView, view = _a.view, views = _a.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== "century";
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : void 0;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : void 0;
  var prevButtonDisabled = function() {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, "prev");
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, "prev2");
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, "next");
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, "next2");
  }
  function renderLabel(date) {
    var label = function() {
      switch (view) {
        case "century":
          return getCenturyLabel(locale, formatYear$1, date);
        case "decade":
          return getDecadeLabel(locale, formatYear$1, date);
        case "year":
          return formatYear$1(locale, date);
        case "month":
          return formatMonthYear$1(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale() || void 0,
      view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className$6, "__label");
    return jsxRuntimeExports.jsxs("button", { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button", children: [jsxRuntimeExports.jsx("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from"), children: renderLabel(activeStartDate) }), showDoubleView ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("span", { className: "".concat(labelClassName, "__divider"), children: " – " }), jsxRuntimeExports.jsx("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to"), children: renderLabel(nextActiveStartDate) })] }) : null] });
  }
  return jsxRuntimeExports.jsxs("div", { className: className$6, children: [prev2Label !== null && shouldShowPrevNext2Buttons ? jsxRuntimeExports.jsx("button", { "aria-label": prev2AriaLabel, className: "".concat(className$6, "__arrow ").concat(className$6, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button", children: prev2Label }) : null, prevLabel !== null && jsxRuntimeExports.jsx("button", { "aria-label": prevAriaLabel, className: "".concat(className$6, "__arrow ").concat(className$6, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button", children: prevLabel }), renderButton(), nextLabel !== null && jsxRuntimeExports.jsx("button", { "aria-label": nextAriaLabel, className: "".concat(className$6, "__arrow ").concat(className$6, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button", children: nextLabel }), next2Label !== null && shouldShowPrevNext2Buttons ? jsxRuntimeExports.jsx("button", { "aria-label": next2AriaLabel, className: "".concat(className$6, "__arrow ").concat(className$6, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button", children: next2Label }) : null] });
}
var __assign$k = function() {
  __assign$k = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$k.apply(this, arguments);
};
var __rest$f = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a) {
  var children = _a.children, className2 = _a.className, count = _a.count, direction = _a.direction, offset = _a.offset, style = _a.style, wrap = _a.wrap, otherProps = __rest$f(_a, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return jsxRuntimeExports.jsx("div", __assign$k({ className: className2, style: __assign$k({ display: "flex", flexDirection: direction, flexWrap: wrap ? "wrap" : "nowrap" }, style) }, otherProps, { children: reactExports.Children.map(children, function(child, index2) {
    var marginInlineStart = offset && index2 === 0 ? toPercent(100 * offset / count) : null;
    return reactExports.cloneElement(child, __assign$k(__assign$k({}, child.props), { style: {
      flexBasis: toPercent(100 / count),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: marginInlineStart,
      marginInlineStart,
      marginInlineEnd: 0
    } }));
  }) }));
}
function between$1(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName2) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange) {
    classes.push(baseClassName2);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName2, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName2, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName2, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error("args is required");
  }
  var value = args.value, date = args.date, hover = args.hover;
  var className2 = "react-calendar__tile";
  var classes = [className2];
  if (!date) {
    return classes;
  }
  var now = /* @__PURE__ */ new Date();
  var dateRange = function() {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className2, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function() {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className2, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className2, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className2, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className2, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}
function TileGroup(_a) {
  var className2 = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date,
        dateType,
        hover,
        value,
        valueType
      }),
      date
    }));
  }
  return jsxRuntimeExports.jsx(Flex, { className: className2, count, offset, wrap: true, children: tiles });
}
function Tile(props) {
  var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
  var tileClassName = reactExports.useMemo(function() {
    var args = { activeStartDate, date, view };
    return typeof tileClassNameProps === "function" ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = reactExports.useMemo(function() {
    var args = { activeStartDate, date, view };
    return typeof tileContentProps === "function" ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return jsxRuntimeExports.jsxs("button", { className: clsx(classes, tileClassName), disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || (tileDisabled === null || tileDisabled === void 0 ? void 0 : tileDisabled({ activeStartDate, date, view })), onClick: onClick ? function(event) {
    return onClick(date, event);
  } : void 0, onFocus: onMouseOver ? function() {
    return onMouseOver(date);
  } : void 0, onMouseOver: onMouseOver ? function() {
    return onMouseOver(date);
  } : void 0, style, type: "button", children: [formatAbbr ? jsxRuntimeExports.jsx("abbr", { "aria-label": formatAbbr(locale, date), children }) : children, tileContent] });
}
var __assign$j = function() {
  __assign$j = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$j.apply(this, arguments);
};
var __rest$e = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var className$5 = "react-calendar__century-view__decades__decade";
function Decade(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a.currentCentury, _c = _a.formatYear, formatYear$1 = _c === void 0 ? formatYear : _c, otherProps = __rest$e(_a, ["classes", "currentCentury", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  {
    classesProps.push(className$5);
  }
  if (getCenturyStart(date).getFullYear() !== currentCentury) {
    classesProps.push("".concat(className$5, "--neighboringCentury"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$j({}, otherProps, { classes: classesProps, maxDateTransform: getDecadeEnd, minDateTransform: getDecadeStart, view: "century", children: getDecadeLabel(locale, formatYear$1, date) }));
}
var __assign$i = function() {
  __assign$i = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$i.apply(this, arguments);
};
var __rest$d = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest$d(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + (showNeighboringCentury ? 119 : 99);
  return jsxRuntimeExports.jsx(TileGroup, { className: "react-calendar__century-view__decades", dateTransform: getDecadeStart, dateType: "decade", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest$d(_a, ["date"]);
    return jsxRuntimeExports.jsx(Decade, __assign$i({}, otherProps, otherTileProps, { activeStartDate, currentCentury: start, date }), date.getTime());
  }, start, step: 10, value, valueType });
}
var __assign$h = function() {
  __assign$h = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$h.apply(this, arguments);
};
function CenturyView(props) {
  function renderDecades() {
    return jsxRuntimeExports.jsx(Decades, __assign$h({}, props));
  }
  return jsxRuntimeExports.jsx("div", { className: "react-calendar__century-view", children: renderDecades() });
}
var __assign$g = function() {
  __assign$g = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$g.apply(this, arguments);
};
var __rest$c = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var className$4 = "react-calendar__decade-view__years__year";
function Year(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a.currentDecade, _c = _a.formatYear, formatYear$1 = _c === void 0 ? formatYear : _c, otherProps = __rest$c(_a, ["classes", "currentDecade", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  {
    classesProps.push(className$4);
  }
  if (getDecadeStart(date).getFullYear() !== currentDecade) {
    classesProps.push("".concat(className$4, "--neighboringDecade"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$g({}, otherProps, { classes: classesProps, maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade", children: formatYear$1(locale, date) }));
}
var __assign$f = function() {
  __assign$f = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$f.apply(this, arguments);
};
var __rest$b = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function Years(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest$b(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + (showNeighboringDecade ? 11 : 9);
  return jsxRuntimeExports.jsx(TileGroup, { className: "react-calendar__decade-view__years", dateTransform: getYearStart, dateType: "year", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest$b(_a, ["date"]);
    return jsxRuntimeExports.jsx(Year, __assign$f({}, otherProps, otherTileProps, { activeStartDate, currentDecade: start, date }), date.getTime());
  }, start, value, valueType });
}
var __assign$e = function() {
  __assign$e = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$e.apply(this, arguments);
};
function DecadeView(props) {
  function renderYears() {
    return jsxRuntimeExports.jsx(Years, __assign$e({}, props));
  }
  return jsxRuntimeExports.jsx("div", { className: "react-calendar__decade-view", children: renderYears() });
}
var __assign$d = function() {
  __assign$d = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$d.apply(this, arguments);
};
var __rest$a = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var __spreadArray$2 = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
var className$3 = "react-calendar__year-view__months__month";
function Month(_a) {
  var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth2 = _c === void 0 ? formatMonth$1 : _c, _d = _a.formatMonthYear, formatMonthYear$1 = _d === void 0 ? formatMonthYear : _d, otherProps = __rest$a(_a, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return jsxRuntimeExports.jsx(Tile, __assign$d({}, otherProps, { classes: __spreadArray$2(__spreadArray$2([], classes, true), [className$3], false), formatAbbr: formatMonthYear$1, maxDateTransform: getMonthEnd, minDateTransform: getMonthStart, view: "year", children: formatMonth2(locale, date) }));
}
var __assign$c = function() {
  __assign$c = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$c.apply(this, arguments);
};
var __rest$9 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function Months(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest$9(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return jsxRuntimeExports.jsx(TileGroup, { className: "react-calendar__year-view__months", dateTransform: function(monthIndex) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, 1);
    return getMonthStart(date);
  }, dateType: "month", end, hover, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest$9(_a, ["date"]);
    return jsxRuntimeExports.jsx(Month, __assign$c({}, otherProps, otherTileProps, { activeStartDate, date }), date.getTime());
  }, start, value, valueType });
}
var __assign$b = function() {
  __assign$b = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$b.apply(this, arguments);
};
function YearView(props) {
  function renderMonths() {
    return jsxRuntimeExports.jsx(Months, __assign$b({}, props));
  }
  return jsxRuntimeExports.jsx("div", { className: "react-calendar__year-view", children: renderMonths() });
}
var __assign$a = function() {
  __assign$a = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$a.apply(this, arguments);
};
var __rest$8 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var className$2 = "react-calendar__month-view__days__day";
function Day(_a) {
  var calendarType = _a.calendarType, _b = _a.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a.currentMonthIndex, _c = _a.formatDay, formatDay$1 = _c === void 0 ? formatDay : _c, _d = _a.formatLongDate, formatLongDate$1 = _d === void 0 ? formatLongDate : _d, otherProps = __rest$8(_a, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  {
    classesProps.push(className$2);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className$2, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className$2, "--neighboringMonth"));
  }
  return jsxRuntimeExports.jsx(Tile, __assign$a({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate$1, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month", children: formatDay$1(locale, date) }));
}
var __assign$9 = function() {
  __assign$9 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$9.apply(this, arguments);
};
var __rest$7 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function Days(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest$7(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  var end = function() {
    if (showFixedNumberOfWeeks) {
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = /* @__PURE__ */ new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return jsxRuntimeExports.jsx(TileGroup, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(day) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, day);
    return getDayStart(date);
  }, dateType: "day", hover, end, renderTile: function(_a) {
    var date = _a.date, otherTileProps = __rest$7(_a, ["date"]);
    return jsxRuntimeExports.jsx(Day, __assign$9({}, otherProps, otherTileProps, { activeStartDate, calendarType, currentMonthIndex: monthIndex, date }), date.getTime());
  }, offset, start, value, valueType });
}
var className$1 = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className$1, "__weekday");
function Weekdays(props) {
  var calendarType = props.calendarType, _a = props.formatShortWeekday, formatShortWeekday$1 = _a === void 0 ? formatShortWeekday : _a, _b = props.formatWeekday, formatWeekday$1 = _b === void 0 ? formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
  var anyDate = /* @__PURE__ */ new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday$1(locale, weekdayDate);
    weekdays.push(jsxRuntimeExports.jsx("div", { className: clsx(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")), children: jsxRuntimeExports.jsx("abbr", { "aria-label": abbr, title: abbr, children: formatShortWeekday$1(locale, weekdayDate).replace(".", "") }) }, weekday));
  }
  return jsxRuntimeExports.jsx(Flex, { className: className$1, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave, children: weekdays });
}
var __assign$8 = function() {
  __assign$8 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$8.apply(this, arguments);
};
var __rest$6 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var className = "react-calendar__tile";
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
  var children = jsxRuntimeExports.jsx("span", { children: weekNumber });
  if (onClickWeekNumber) {
    var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest$6(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return jsxRuntimeExports.jsx("button", __assign$8({}, otherProps, { className, onClick: function(event) {
      return onClickWeekNumber_1(weekNumber_1, date_1, event);
    }, type: "button", children }));
  } else {
    props.date;
    props.onClickWeekNumber;
    props.weekNumber;
    var otherProps = __rest$6(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return jsxRuntimeExports.jsx("div", __assign$8({}, otherProps, { className, children }));
  }
}
function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var numberOfWeeks = function() {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function() {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index2 = 0; index2 < numberOfWeeks; index2 += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index2 * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function(date) {
    return getWeekNumber(date, calendarType);
  });
  return jsxRuntimeExports.jsx(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 }, children: weekNumbers.map(function(weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error("date is not defined");
    }
    return jsxRuntimeExports.jsx(WeekNumber, { date, onClickWeekNumber, weekNumber }, weekNumber);
  }) });
}
var __assign$7 = function() {
  __assign$7 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$7.apply(this, arguments);
};
var __rest$5 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
      var _b = _a[_i], calendarType = _b[0], locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
function MonthView(props) {
  var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest$5(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return jsxRuntimeExports.jsx(Weekdays, { calendarType, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, locale, onMouseLeave });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return jsxRuntimeExports.jsx(WeekNumbers, { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks });
  }
  function renderDays() {
    return jsxRuntimeExports.jsx(Days, __assign$7({ calendarType }, childProps));
  }
  var className2 = "react-calendar__month-view";
  return jsxRuntimeExports.jsx("div", { className: clsx(className2, showWeekNumbers ? "".concat(className2, "--weekNumbers") : ""), children: jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    alignItems: "flex-end"
  }, children: [renderWeekNumbers(), jsxRuntimeExports.jsxs("div", { style: {
    flexGrow: 1,
    width: "100%"
  }, children: [renderWeekdays(), renderDays()] })] }) });
}
var __assign$6 = function() {
  __assign$6 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$6.apply(this, arguments);
};
var baseClassName$1 = "react-calendar";
var allViews$1 = ["century", "decade", "year", "month"];
var allValueTypes$1 = ["decade", "year", "month", "day"];
var defaultMinDate$1 = /* @__PURE__ */ new Date();
defaultMinDate$1.setFullYear(1, 0, 1);
defaultMinDate$1.setHours(0, 0, 0, 0);
var defaultMaxDate$1 = /* @__PURE__ */ new Date(864e13);
function toDate$1(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getLimitedViews(minDetail, maxDetail) {
  return allViews$1.slice(allViews$1.indexOf(minDetail), allViews$1.indexOf(maxDetail) + 1);
}
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
function getValueType$1(view) {
  var index2 = allViews$1.indexOf(view);
  return allValueTypes$1[index2];
}
function getValue$1(value, index2) {
  var rawValue = Array.isArray(value) ? value[index2] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate$1(rawValue);
  if (Number.isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue$1(_a, index2) {
  var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
  var valuePiece = getValue$1(value, index2);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType$1(maxDetail);
  var detailValueFrom = function() {
    switch (index2) {
      case 0:
        return getBegin$1(valueType, valuePiece);
      case 1:
        return getEnd$1(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index2));
    }
  }();
  return between$1(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom$1 = function(args) {
  return getDetailValue$1(args, 0);
};
var getDetailValueTo$1 = function(args) {
  return getDetailValue$1(args, 1);
};
var getDetailValueArray$1 = function(args) {
  return [getDetailValueFrom$1, getDetailValueTo$1].map(function(fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a) {
  var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom$1({
    value,
    minDate,
    maxDate,
    maxDetail
  }) || /* @__PURE__ */ new Date();
  return getBegin$1(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
  var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin$1(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = reactExports.forwardRef(function Calendar2(props, ref) {
  var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className2 = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay2 = props.formatDay, formatLongDate2 = props.formatLongDate, formatMonth2 = props.formatMonth, formatMonthYear2 = props.formatMonthYear, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, formatYear2 = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate$1 : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? "month" : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate$1 : _d, _e = props.minDetail, minDetail = _e === void 0 ? "century" : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? "start" : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
  var _j = reactExports.useState(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
  var _k = reactExports.useState(null), hoverState = _k[0], setHoverState = _k[1];
  var _l = reactExports.useState(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
    return el !== null ? toDate$1(el) : null;
  }) : defaultValue !== null && defaultValue !== void 0 ? toDate$1(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
  var _m = reactExports.useState(defaultView), viewState = _m[0], setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate,
    defaultValue,
    defaultView,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function() {
    var rawValue = function() {
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== void 0 ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function(el) {
      return el !== null ? toDate$1(el) : null;
    }) : rawValue !== null ? toDate$1(rawValue) : null;
  }();
  var valueType = getValueType$1(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = reactExports.useCallback(function(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom$1;
        case "end":
          return getDetailValueTo$1;
        case "range":
          return getDetailValueArray$1;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      maxDate,
      maxDetail,
      minDate,
      value: value2
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = reactExports.useCallback(function(nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action,
      activeStartDate: nextActiveStartDate,
      value,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = reactExports.useCallback(function(value2, event) {
    var callback = function() {
      switch (view) {
        case "century":
          return onClickDecade;
        case "decade":
          return onClickYear;
        case "year":
          return onClickMonth;
        case "month":
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback)
      callback(value2, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = reactExports.useCallback(function(nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error("Attempted to drill down from the lowest view.");
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillDown",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [
    activeStartDate,
    drillDownAvailable,
    onActiveStartDateChange,
    onClickTile,
    onDrillDown,
    onViewChange,
    value,
    view,
    views
  ]);
  var drillUp = reactExports.useCallback(function() {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error("Attempted to drill up from the highest view.");
    }
    var nextActiveStartDate = getBegin$1(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillUp",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [
    activeStartDate,
    drillUpAvailable,
    onActiveStartDateChange,
    onDrillUp,
    onViewChange,
    value,
    view,
    views
  ]);
  var onChange2 = reactExports.useCallback(function(rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      if (isFirstValueInRange) {
        nextValue = getBegin$1(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error("previousValue is required");
        }
        if (Array.isArray(previousValue)) {
          throw new Error("previousValue must not be an array");
        }
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate = (
      // Range selection turned off
      !selectRange || // Range selection turned on, first value
      isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      goToRangeStartOnSelect ? getActiveStartDate({
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        value: nextValue,
        view
      }) : null
    );
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: "onChange",
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error("value must not be an array");
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [
    activeStartDate,
    allowPartialRange,
    getProcessedValue,
    goToRangeStartOnSelect,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    onActiveStartDateChange,
    onChangeProps,
    onClickTile,
    selectRange,
    value,
    valueType,
    view
  ]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  reactExports.useImperativeHandle(ref, function() {
    return {
      activeStartDate,
      drillDown,
      drillUp,
      onChange: onChange2,
      setActiveStartDate,
      value,
      view
    };
  }, [activeStartDate, drillDown, drillUp, onChange2, setActiveStartDate, value, view]);
  function renderContent(next2) {
    var currentActiveStartDate = next2 ? getBeginNext(view, activeStartDate) : getBegin$1(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange2;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover,
      locale,
      maxDate,
      minDate,
      onClick,
      onMouseOver: selectRange ? onMouseOver : void 0,
      tileClassName,
      tileContent,
      tileDisabled,
      value,
      valueType
    };
    switch (view) {
      case "century": {
        return jsxRuntimeExports.jsx(CenturyView, __assign$6({ formatYear: formatYear2, showNeighboringCentury }, commonProps));
      }
      case "decade": {
        return jsxRuntimeExports.jsx(DecadeView, __assign$6({ formatYear: formatYear2, showNeighboringDecade }, commonProps));
      }
      case "year": {
        return jsxRuntimeExports.jsx(YearView, __assign$6({ formatMonth: formatMonth2, formatMonthYear: formatMonthYear2 }, commonProps));
      }
      case "month": {
        return jsxRuntimeExports.jsx(MonthView, __assign$6({ calendarType, formatDay: formatDay2, formatLongDate: formatLongDate2, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : void 0, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView, showNeighboringMonth, showWeekNumbers }, commonProps));
      }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return jsxRuntimeExports.jsx(Navigation, { activeStartDate, drillUp, formatMonthYear: formatMonthYear2, formatYear: formatYear2, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate, showDoubleView, view, views });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return jsxRuntimeExports.jsxs("div", { className: clsx(baseClassName$1, selectRange && valueArray.length === 1 && "".concat(baseClassName$1, "--selectRange"), showDoubleView && "".concat(baseClassName$1, "--doubleView"), className2), ref: inputRef, children: [renderNavigation(), jsxRuntimeExports.jsxs("div", { className: "".concat(baseClassName$1, "__viewContainer"), onBlur: selectRange ? onMouseLeave : void 0, onMouseLeave: selectRange ? onMouseLeave : void 0, children: [renderContent(), showDoubleView ? renderContent(true) : null] })] });
});
function getRect(element) {
  return element.getBoundingClientRect();
}
function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },
    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },
    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },
    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },
    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },
    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },
    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },
    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }
  };
}
var __DEV__ = process.env.NODE_ENV !== "production";
var warning = function() {
};
if (__DEV__) {
  var printWarning = function printWarning2(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = "Warning: " + format.replace(/%s/g, function() {
      return args[argIndex++];
    });
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === void 0) {
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}
var warning_1 = warning;
const warning$1 = /* @__PURE__ */ getDefaultExportFromCjs(warning_1);
var __assign$5 = function() {
  __assign$5 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$5.apply(this, arguments);
};
var __rest$4 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var isBrowser$1 = typeof document !== "undefined";
var isMutationObserverSupported = isBrowser$1 && "MutationObserver" in window;
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function findScrollContainer(element) {
  var parent = element.parentElement;
  while (parent) {
    var overflow = window.getComputedStyle(parent).overflow;
    if (overflow.split(" ").every(function(o) {
      return o === "auto" || o === "scroll";
    })) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return document.documentElement;
}
function alignAxis(_a) {
  var axis = _a.axis, container = _a.container, element = _a.element, invertAxis = _a.invertAxis, scrollContainer = _a.scrollContainer, secondary = _a.secondary, spacing2 = _a.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  if (!parent) {
    return;
  }
  var scrollContainerCollisions = detectElementOverflow(parent, scrollContainer);
  var documentCollisions = detectElementOverflow(parent, document.documentElement);
  var isX = axis === "x";
  var startProperty = isX ? "left" : "top";
  var endProperty = isX ? "right" : "bottom";
  var sizeProperty = isX ? "width" : "height";
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var startSpacing = typeof spacing2 === "object" ? spacing2[startProperty] : spacing2;
  var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
  var endSpacing = typeof spacing2 === "object" ? spacing2[endProperty] : spacing2;
  var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;
  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }
  var offsetSize = element[offsetSizeProperty];
  function displayStart() {
    element.style[startProperty] = "auto";
    element.style[endProperty] = secondary ? "0" : "100%";
  }
  function displayEnd() {
    element.style[startProperty] = secondary ? "0" : "100%";
    element.style[endProperty] = "auto";
  }
  function displayIfFits(availableSpace, display) {
    var fits2 = offsetSize <= availableSpace;
    if (fits2) {
      display();
    }
    return fits2;
  }
  function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  }
  function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  }
  function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var rawMinSize = style.getPropertyValue(minSizeProperty);
    var minSize = rawMinSize ? parseInt(rawMinSize, 10) : null;
    function shrinkToSize(size) {
      warning$1(!minSize || size >= minSize, "<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      var newSize = Math.max(size, minSize || 0);
      warning$1(false, "<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    }
    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  }
  var fits;
  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }
  if (!fits) {
    displayWhereverShrinkedFits();
  }
}
function alignMainAxis(args) {
  alignAxis(args);
}
function alignSecondaryAxis(args) {
  alignAxis(__assign$5(__assign$5({}, args), { axis: args.axis === "x" ? "y" : "x", secondary: true }));
}
function alignBothAxis(args) {
  var invertAxis = args.invertAxis, invertSecondaryAxis = args.invertSecondaryAxis, commonArgs = __rest$4(args, ["invertAxis", "invertSecondaryAxis"]);
  alignMainAxis(__assign$5(__assign$5({}, commonArgs), { invertAxis }));
  alignSecondaryAxis(__assign$5(__assign$5({}, commonArgs), { invertAxis: invertSecondaryAxis }));
}
function Fit(_a) {
  var children = _a.children, invertAxis = _a.invertAxis, invertSecondaryAxis = _a.invertSecondaryAxis, _b = _a.mainAxis, mainAxis = _b === void 0 ? "y" : _b, _c = _a.spacing, spacing2 = _c === void 0 ? 8 : _c;
  var container = reactExports.useRef(void 0);
  var element = reactExports.useRef(void 0);
  var elementWidth = reactExports.useRef(void 0);
  var elementHeight = reactExports.useRef(void 0);
  var scrollContainer = reactExports.useRef(void 0);
  var fit = reactExports.useCallback(function() {
    if (!scrollContainer.current || !container.current || !element.current) {
      return;
    }
    var currentElementWidth = element.current.clientWidth;
    var currentElementHeight = element.current.clientHeight;
    if (elementWidth.current === currentElementWidth && elementHeight.current === currentElementHeight) {
      return;
    }
    elementWidth.current = currentElementWidth;
    elementHeight.current = currentElementHeight;
    var parent = container.current.parentElement;
    if (!parent) {
      return;
    }
    var style = window.getComputedStyle(element.current);
    var position2 = style.position;
    if (position2 !== "absolute") {
      element.current.style.position = "absolute";
    }
    var parentStyle = window.getComputedStyle(parent);
    var parentPosition = parentStyle.position;
    if (parentPosition !== "relative" && parentPosition !== "absolute") {
      parent.style.position = "relative";
    }
    alignBothAxis({
      axis: mainAxis,
      container: container.current,
      element: element.current,
      invertAxis,
      invertSecondaryAxis,
      scrollContainer: scrollContainer.current,
      spacing: spacing2
    });
  }, [invertAxis, invertSecondaryAxis, mainAxis, spacing2]);
  var child = reactExports.Children.only(children);
  reactExports.useEffect(function() {
    fit();
    function onMutation() {
      fit();
    }
    if (isMutationObserverSupported && element.current) {
      var mutationObserver = new MutationObserver(onMutation);
      mutationObserver.observe(element.current, {
        attributes: true,
        attributeFilter: ["class", "style"]
      });
    }
  }, [fit]);
  function assignRefs(domElement) {
    if (!domElement || !(domElement instanceof HTMLElement)) {
      return;
    }
    element.current = domElement;
    scrollContainer.current = findScrollContainer(domElement);
  }
  return jsxRuntimeExports.jsx("span", { ref: function(domContainer) {
    if (!domContainer) {
      return;
    }
    container.current = domContainer;
    var domElement = domContainer === null || domContainer === void 0 ? void 0 : domContainer.firstElementChild;
    assignRefs(domElement);
  }, style: { display: "contents" }, children: child });
}
function Divider(_a) {
  var children = _a.children;
  return jsxRuntimeExports.jsx("span", { className: "react-date-picker__inputGroup__divider", children });
}
var allowedVariants = ["normal", "small-caps"];
function getFontShorthand(element) {
  if (!element) {
    return "";
  }
  var style = window.getComputedStyle(element);
  if (style.font) {
    return style.font;
  }
  var isFontDefined = style.fontFamily !== "";
  if (!isFontDefined) {
    return "";
  }
  var fontVariant = allowedVariants.includes(style.fontVariant) ? style.fontVariant : "normal";
  return "".concat(style.fontStyle, " ").concat(fontVariant, " ").concat(style.fontWeight, " ").concat(style.fontSize, " / ").concat(style.lineHeight, " ").concat(style.fontFamily);
}
var cachedCanvas;
function measureText(text, font) {
  var canvas = cachedCanvas || (cachedCanvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  if (!context) {
    return null;
  }
  context.font = font;
  var width = context.measureText(text).width;
  return Math.ceil(width);
}
function updateInputWidth(element) {
  if (typeof document === "undefined" || !element) {
    return null;
  }
  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);
  if (width === null) {
    return null;
  }
  element.style.width = "".concat(width, "px");
  return width;
}
var isBrowser = typeof document !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;
var isIEOrEdgeLegacy = isBrowser && /(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent);
var isFirefox = isBrowser && /Firefox/.test(navigator.userAgent);
function onFocus2(event) {
  var target = event.target;
  if (isIEOrEdgeLegacy) {
    requestAnimationFrame(function() {
      return target.select();
    });
  } else {
    target.select();
  }
}
function updateInputWidthOnLoad(element) {
  if (document.readyState === "complete") {
    return;
  }
  function onLoad() {
    updateInputWidth(element);
  }
  window.addEventListener("load", onLoad);
}
function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }
  var font = getFontShorthand(element);
  if (!font) {
    return;
  }
  var isFontLoaded = document.fonts.check(font);
  if (isFontLoaded) {
    return;
  }
  function onLoadingDone() {
    updateInputWidth(element);
  }
  document.fonts.addEventListener("loadingdone", onLoadingDone);
}
function getSelectionString(input) {
  if (input && "selectionStart" in input && input.selectionStart !== null && "selectionEnd" in input && input.selectionEnd !== null) {
    return input.value.slice(input.selectionStart, input.selectionEnd);
  }
  if ("getSelection" in window) {
    var selection = window.getSelection();
    return selection && selection.toString();
  }
  return null;
}
function makeOnKeyPress(maxLength) {
  if (maxLength === null) {
    return void 0;
  }
  return function onKeyPress(event) {
    if (isFirefox) {
      return;
    }
    var key = event.key, input = event.target;
    var value = input.value;
    var isNumberKey = key.length === 1 && /\d/.test(key);
    var selection = getSelectionString(input);
    if (!isNumberKey || !(selection || value.length < maxLength)) {
      event.preventDefault();
    }
  };
}
function Input2(_a) {
  var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className2 = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, max = _a.max, min = _a.min, name = _a.name, nameForClass = _a.nameForClass, onChange2 = _a.onChange, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, _b = _a.placeholder, placeholder = _b === void 0 ? "--" : _b, required = _a.required, showLeadingZeros = _a.showLeadingZeros, step = _a.step, value = _a.value;
  useIsomorphicLayoutEffect(function() {
    if (!inputRef || !inputRef.current) {
      return;
    }
    updateInputWidth(inputRef.current);
    updateInputWidthOnLoad(inputRef.current);
    updateInputWidthOnFontLoad(inputRef.current);
  }, [inputRef, value]);
  var hasLeadingZero = showLeadingZeros && value && Number(value) < 10 && (value === "0" || !value.toString().startsWith("0"));
  var maxLength = max ? max.toString().length : null;
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [hasLeadingZero ? jsxRuntimeExports.jsx("span", { className: "".concat(className2, "__leadingZero"), children: "0" }) : null, jsxRuntimeExports.jsx("input", {
    "aria-label": ariaLabel,
    autoComplete: "off",
    autoFocus,
    className: clsx("".concat(className2, "__input"), "".concat(className2, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className2, "__input--hasLeadingZero")),
    "data-input": "true",
    disabled,
    inputMode: "numeric",
    max,
    min,
    name,
    onChange: onChange2,
    onFocus: onFocus2,
    onKeyDown,
    onKeyPress: makeOnKeyPress(maxLength),
    onKeyUp: function(event) {
      updateInputWidth(event.target);
      if (onKeyUp) {
        onKeyUp(event);
      }
    },
    placeholder,
    // Assertion is needed for React 18 compatibility
    ref: inputRef,
    required,
    step,
    type: "number",
    value: value !== null ? value : ""
  })] });
}
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}
function safeMin() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Math.min.apply(Math, args.filter(isValidNumber));
}
function safeMax() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return Math.max.apply(Math, args.filter(isValidNumber));
}
var __assign$4 = function() {
  __assign$4 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$4.apply(this, arguments);
};
var __rest$3 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function DayInput(_a) {
  var maxDate = _a.maxDate, minDate = _a.minDate, month = _a.month, year = _a.year, otherProps = __rest$3(_a, ["maxDate", "minDate", "month", "year"]);
  var currentMonthMaxDays = function() {
    if (!month) {
      return 31;
    }
    return getDaysInMonth(new Date(Number(year), Number(month) - 1, 1));
  }();
  function isSameMonth(date) {
    return year === getYear(date).toString() && month === getMonthHuman(date).toString();
  }
  var maxDay = safeMin(currentMonthMaxDays, maxDate && isSameMonth(maxDate) && getDate(maxDate));
  var minDay = safeMax(1, minDate && isSameMonth(minDate) && getDate(minDate));
  return jsxRuntimeExports.jsx(Input2, __assign$4({ max: maxDay, min: minDay, name: "day" }, otherProps));
}
var __assign$3 = function() {
  __assign$3 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$3.apply(this, arguments);
};
var __rest$2 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function MonthInput(_a) {
  var maxDate = _a.maxDate, minDate = _a.minDate, year = _a.year, otherProps = __rest$2(_a, ["maxDate", "minDate", "year"]);
  function isSameYear(date) {
    return date && year === getYear(date).toString();
  }
  var maxMonth = safeMin(12, maxDate && isSameYear(maxDate) && getMonthHuman(maxDate));
  var minMonth = safeMax(1, minDate && isSameYear(minDate) && getMonthHuman(minDate));
  return jsxRuntimeExports.jsx(Input2, __assign$3({ max: maxMonth, min: minMonth, name: "month" }, otherProps));
}
var formatterCache = /* @__PURE__ */ new Map();
function getFormatter(options2) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || getUserLocale();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options2)) {
      formatterCacheLocale.set(options2, new Intl.DateTimeFormat(localeWithDefault || void 0, options2).format);
    }
    return formatterCacheLocale.get(options2)(date);
  };
}
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options2) {
  return function(locale, date) {
    return getFormatter(options2)(locale, toSafeHour(date));
  };
}
var formatMonthOptions = { month: "long" };
var formatShortMonthOptions = { month: "short" };
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatShortMonth = getSafeFormatter(formatShortMonthOptions);
var __spreadArray$1 = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
function MonthSelect(_a) {
  var ariaLabel = _a.ariaLabel, autoFocus = _a.autoFocus, className2 = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, locale = _a.locale, maxDate = _a.maxDate, minDate = _a.minDate, onChange2 = _a.onChange, onKeyDown = _a.onKeyDown, _b = _a.placeholder, placeholder = _b === void 0 ? "--" : _b, required = _a.required, short = _a.short, value = _a.value, year = _a.year;
  function isSameYear(date) {
    return date && year === getYear(date).toString();
  }
  var maxMonth = safeMin(12, maxDate && isSameYear(maxDate) && getMonthHuman(maxDate));
  var minMonth = safeMax(1, minDate && isSameYear(minDate) && getMonthHuman(minDate));
  var dates = __spreadArray$1([], Array(12), true).map(function(el, index2) {
    return new Date(2019, index2, 1);
  });
  var name = "month";
  var formatter = short ? formatShortMonth : formatMonth;
  return jsxRuntimeExports.jsxs("select", {
    "aria-label": ariaLabel,
    autoFocus,
    className: clsx("".concat(className2, "__input"), "".concat(className2, "__").concat(name)),
    "data-input": "true",
    "data-select": "true",
    disabled,
    name,
    onChange: onChange2,
    onKeyDown,
    // Assertion is needed for React 18 compatibility
    ref: inputRef,
    required,
    value: value !== null ? value : "",
    children: [!value && jsxRuntimeExports.jsx("option", { value: "", children: placeholder }), dates.map(function(date) {
      var month = getMonthHuman(date);
      var disabled2 = month < minMonth || month > maxMonth;
      return jsxRuntimeExports.jsx("option", { disabled: disabled2, value: month, children: formatter(locale, date) }, month);
    })]
  });
}
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
var __rest$1 = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
function YearInput(_a) {
  var maxDate = _a.maxDate, minDate = _a.minDate, _b = _a.placeholder, placeholder = _b === void 0 ? "----" : _b, valueType = _a.valueType, otherProps = __rest$1(_a, ["maxDate", "minDate", "placeholder", "valueType"]);
  var maxYear = safeMin(275760, maxDate && getYear(maxDate));
  var minYear = safeMax(1, minDate && getYear(minDate));
  var yearStep = function() {
    if (valueType === "century") {
      return 10;
    }
    return 1;
  }();
  return jsxRuntimeExports.jsx(Input2, __assign$2({ max: maxYear, min: minYear, name: "year", placeholder, step: yearStep }, otherProps));
}
function NativeInput(_a) {
  var ariaLabel = _a.ariaLabel, disabled = _a.disabled, maxDate = _a.maxDate, minDate = _a.minDate, name = _a.name, onChange2 = _a.onChange, required = _a.required, value = _a.value, valueType = _a.valueType;
  var nativeInputType = function() {
    switch (valueType) {
      case "decade":
      case "year":
        return "number";
      case "month":
        return "month";
      case "day":
        return "date";
      default:
        throw new Error("Invalid valueType");
    }
  }();
  var nativeValueParser = function() {
    switch (valueType) {
      case "decade":
      case "year":
        return getYear;
      case "month":
        return getISOLocalMonth;
      case "day":
        return getISOLocalDate;
      default:
        throw new Error("Invalid valueType");
    }
  }();
  function stopPropagation(event) {
    event.stopPropagation();
  }
  return jsxRuntimeExports.jsx("input", { "aria-label": ariaLabel, disabled, hidden: true, max: maxDate ? nativeValueParser(maxDate) : void 0, min: minDate ? nativeValueParser(minDate) : void 0, name, onChange: onChange2, onFocus: stopPropagation, required, style: {
    visibility: "hidden",
    position: "absolute",
    zIndex: "-999"
  }, type: nativeInputType, value: value ? nativeValueParser(value) : "" });
}
function getBegin(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __spreadArray = function(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
};
var getFormatterOptionsCache = {};
var defaultMinDate = /* @__PURE__ */ new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = /* @__PURE__ */ new Date(864e13);
var allViews = ["century", "decade", "year", "month"];
var allValueTypes = __spreadArray(__spreadArray([], allViews.slice(1), true), ["day"], false);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getValueType(view) {
  var index2 = allViews.indexOf(view);
  return allValueTypes[index2];
}
function getValue(value, index2) {
  var rawValue = Array.isArray(value) ? value[index2] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a, index2) {
  var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
  var valuePiece = getValue(value, index2);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function() {
    switch (index2) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index2));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
  return [getDetailValueFrom, getDetailValueTo].map(function(fn) {
    return fn(args);
  });
};
function isInternalInput(element) {
  return element.dataset.input === "true";
}
function findInput(element, property) {
  var nextElement = element;
  do {
    nextElement = nextElement[property];
  } while (nextElement && !isInternalInput(nextElement));
  return nextElement;
}
function focus(element) {
  if (element) {
    element.focus();
  }
}
function renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function(el) {
    return "".concat(el, "+");
  }).join("|"), "g");
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function(arr, element, index2) {
    var divider = element && // eslint-disable-next-line react/no-array-index-key
    jsxRuntimeExports.jsx(Divider, { children: element }, "separator_".concat(index2));
    arr.push(divider);
    var currentMatch = matches && matches[index2];
    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function(elementFunction) {
        return currentMatch.match(elementFunction);
      })];
      if (!renderFunction) {
        return arr;
      }
      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        arr.push(currentMatch);
      } else {
        arr.push(renderFunction(currentMatch, index2));
        usedFunctions.push(renderFunction);
      }
    }
    return arr;
  }, []);
}
function DateInput$1(_a) {
  var autoFocus = _a.autoFocus, className2 = _a.className, dayAriaLabel = _a.dayAriaLabel, dayPlaceholder = _a.dayPlaceholder, disabled = _a.disabled, format = _a.format, _b = _a.isCalendarOpen, isCalendarOpenProps = _b === void 0 ? null : _b, locale = _a.locale, maxDate = _a.maxDate, _c = _a.maxDetail, maxDetail = _c === void 0 ? "month" : _c, minDate = _a.minDate, monthAriaLabel = _a.monthAriaLabel, monthPlaceholder = _a.monthPlaceholder, _d = _a.name, name = _d === void 0 ? "date" : _d, nativeInputAriaLabel = _a.nativeInputAriaLabel, onChangeProps = _a.onChange, onInvalidChange = _a.onInvalidChange, required = _a.required, _e = _a.returnValue, returnValue = _e === void 0 ? "start" : _e, showLeadingZeros = _a.showLeadingZeros, valueProps = _a.value, yearAriaLabel = _a.yearAriaLabel, yearPlaceholder = _a.yearPlaceholder;
  var _f = reactExports.useState(null), year = _f[0], setYear = _f[1];
  var _g = reactExports.useState(null), month = _g[0], setMonth = _g[1];
  var _h = reactExports.useState(null), day = _h[0], setDay = _h[1];
  var _j = reactExports.useState(null), value = _j[0], setValue = _j[1];
  var yearInput = reactExports.useRef(null);
  var monthInput = reactExports.useRef(null);
  var monthSelect = reactExports.useRef(null);
  var dayInput = reactExports.useRef(null);
  var _k = reactExports.useState(isCalendarOpenProps), isCalendarOpen = _k[0], setIsCalendarOpen = _k[1];
  var lastPressedKey = reactExports.useRef(void 0);
  reactExports.useEffect(function() {
    setIsCalendarOpen(isCalendarOpenProps);
  }, [isCalendarOpenProps]);
  reactExports.useEffect(function() {
    var nextValue = getDetailValueFrom({
      value: valueProps,
      minDate,
      maxDate,
      maxDetail
    });
    if (nextValue) {
      setYear(getYear(nextValue).toString());
      setMonth(getMonthHuman(nextValue).toString());
      setDay(getDate(nextValue).toString());
      setValue(nextValue);
    } else {
      setYear(null);
      setMonth(null);
      setDay(null);
      setValue(null);
    }
  }, [
    valueProps,
    minDate,
    maxDate,
    maxDetail,
    // Toggling calendar visibility resets values
    isCalendarOpen
  ]);
  var valueType = getValueType(maxDetail);
  var formatDate = function() {
    var level = allViews.indexOf(maxDetail);
    var formatterOptions = getFormatterOptionsCache[level] || function() {
      var options2 = { year: "numeric" };
      if (level >= 2) {
        options2.month = "numeric";
      }
      if (level >= 3) {
        options2.day = "numeric";
      }
      getFormatterOptionsCache[level] = options2;
      return options2;
    }();
    return getFormatter(formatterOptions);
  }();
  function getProcessedValue(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom;
        case "end":
          return getDetailValueTo;
        case "range":
          return getDetailValueArray;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      value: value2,
      minDate,
      maxDate,
      maxDetail
    });
  }
  var placeholder = format || function() {
    var year2 = 2017;
    var monthIndex = 11;
    var day2 = 11;
    var date = new Date(year2, monthIndex, day2);
    var formattedDate = formatDate(locale, date);
    var datePieces = ["year", "month", "day"];
    var datePieceReplacements = ["y", "M", "d"];
    function formatDatePiece(name2, dateToFormat) {
      var formatterOptions = getFormatterOptionsCache[name2] || function() {
        var _a2;
        var options2 = (_a2 = {}, _a2[name2] = "numeric", _a2);
        getFormatterOptionsCache[name2] = options2;
        return options2;
      }();
      return getFormatter(formatterOptions)(locale, dateToFormat).match(/\d{1,}/);
    }
    var placeholder2 = formattedDate;
    datePieces.forEach(function(datePiece, index2) {
      var match2 = formatDatePiece(datePiece, date);
      if (match2) {
        var formattedDatePiece = match2[0];
        var datePieceReplacement = datePieceReplacements[index2];
        placeholder2 = placeholder2.replace(formattedDatePiece, datePieceReplacement);
      }
    });
    placeholder2 = placeholder2.replace("17", "y");
    return placeholder2;
  }();
  var divider = function() {
    var dividers = placeholder.match(/[^0-9a-z]/i);
    return dividers ? dividers[0] : null;
  }();
  function onClick(event) {
    if (event.target === event.currentTarget) {
      var firstInput = event.target.children[1];
      focus(firstInput);
    }
  }
  function onKeyDown(event) {
    lastPressedKey.current = event.key;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
      case divider: {
        event.preventDefault();
        var input = event.target;
        var property = event.key === "ArrowLeft" ? "previousElementSibling" : "nextElementSibling";
        var nextInput = findInput(input, property);
        focus(nextInput);
        break;
      }
    }
  }
  function onKeyUp(event) {
    var key = event.key, input = event.target;
    var isLastPressedKey = lastPressedKey.current === key;
    if (!isLastPressedKey) {
      return;
    }
    var isNumberKey = !isNaN(Number(key));
    if (!isNumberKey) {
      return;
    }
    var max = input.getAttribute("max");
    if (!max) {
      return;
    }
    var value2 = input.value;
    if (Number(value2) * 10 > Number(max) || value2.length >= max.length) {
      var property = "nextElementSibling";
      var nextInput = findInput(input, property);
      focus(nextInput);
    }
  }
  function onChangeExternal() {
    if (!onChangeProps) {
      return;
    }
    function filterBoolean(value2) {
      return Boolean(value2);
    }
    var formElements = [
      dayInput.current,
      monthInput.current,
      monthSelect.current,
      yearInput.current
    ].filter(filterBoolean);
    var values = {};
    formElements.forEach(function(formElement) {
      values[formElement.name] = "valueAsNumber" in formElement ? formElement.valueAsNumber : Number(formElement.value);
    });
    var isEveryValueEmpty = formElements.every(function(formElement) {
      return !formElement.value;
    });
    if (isEveryValueEmpty) {
      onChangeProps(null, false);
      return;
    }
    var isEveryValueFilled = formElements.every(function(formElement) {
      return formElement.value;
    });
    var isEveryValueValid = formElements.every(function(formElement) {
      return formElement.validity.valid;
    });
    if (isEveryValueFilled && isEveryValueValid) {
      var year_1 = Number(values.year || (/* @__PURE__ */ new Date()).getFullYear());
      var monthIndex = Number(values.month || 1) - 1;
      var day_1 = Number(values.day || 1);
      var proposedValue = /* @__PURE__ */ new Date();
      proposedValue.setFullYear(year_1, monthIndex, day_1);
      proposedValue.setHours(0, 0, 0, 0);
      var processedValue = getProcessedValue(proposedValue);
      onChangeProps(processedValue, false);
      return;
    }
    if (!onInvalidChange) {
      return;
    }
    onInvalidChange();
  }
  function onChange2(event) {
    var _a2 = event.target, name2 = _a2.name, value2 = _a2.value;
    switch (name2) {
      case "year":
        setYear(value2);
        break;
      case "month":
        setMonth(value2);
        break;
      case "day":
        setDay(value2);
        break;
    }
    onChangeExternal();
  }
  function onChangeNative(event) {
    var value2 = event.target.value;
    if (!onChangeProps) {
      return;
    }
    var processedValue = function() {
      if (!value2) {
        return null;
      }
      var _a2 = value2.split("-"), yearString = _a2[0], monthString = _a2[1], dayString = _a2[2];
      var year2 = Number(yearString);
      var monthIndex = Number(monthString) - 1 || 0;
      var day2 = Number(dayString) || 1;
      var proposedValue = /* @__PURE__ */ new Date();
      proposedValue.setFullYear(year2, monthIndex, day2);
      proposedValue.setHours(0, 0, 0, 0);
      return proposedValue;
    }();
    onChangeProps(processedValue, false);
  }
  var commonInputProps = {
    className: className2,
    disabled,
    maxDate: maxDate || defaultMaxDate,
    minDate: minDate || defaultMinDate,
    onChange: onChange2,
    onKeyDown,
    onKeyUp,
    // This is only for showing validity when editing
    required: Boolean(required || isCalendarOpen)
  };
  function renderDay(currentMatch, index2) {
    if (currentMatch && currentMatch.length > 2) {
      throw new Error("Unsupported token: ".concat(currentMatch));
    }
    var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
    return jsxRuntimeExports.jsx(DayInput, __assign$1({}, commonInputProps, {
      ariaLabel: dayAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index2 === 0 && autoFocus,
      inputRef: dayInput,
      month,
      placeholder: dayPlaceholder,
      showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
      value: day,
      year
    }), "day");
  }
  function renderMonth(currentMatch, index2) {
    if (currentMatch && currentMatch.length > 4) {
      throw new Error("Unsupported token: ".concat(currentMatch));
    }
    if (currentMatch.length > 2) {
      return jsxRuntimeExports.jsx(MonthSelect, __assign$1({}, commonInputProps, {
        ariaLabel: monthAriaLabel,
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus: index2 === 0 && autoFocus,
        inputRef: monthSelect,
        locale,
        placeholder: monthPlaceholder,
        short: currentMatch.length === 3,
        value: month,
        year
      }), "month");
    }
    var showLeadingZerosFromFormat = currentMatch && currentMatch.length === 2;
    return jsxRuntimeExports.jsx(MonthInput, __assign$1({}, commonInputProps, {
      ariaLabel: monthAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index2 === 0 && autoFocus,
      inputRef: monthInput,
      placeholder: monthPlaceholder,
      showLeadingZeros: showLeadingZerosFromFormat || showLeadingZeros,
      value: month,
      year
    }), "month");
  }
  function renderYear(currentMatch, index2) {
    return jsxRuntimeExports.jsx(YearInput, __assign$1({}, commonInputProps, {
      ariaLabel: yearAriaLabel,
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: index2 === 0 && autoFocus,
      inputRef: yearInput,
      placeholder: yearPlaceholder,
      value: year,
      valueType
    }), "year");
  }
  function renderCustomInputsInternal() {
    var elementFunctions = {
      d: renderDay,
      M: renderMonth,
      y: renderYear
    };
    var allowMultipleInstances = typeof format !== "undefined";
    return renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
  }
  function renderNativeInput() {
    return jsxRuntimeExports.jsx(NativeInput, { ariaLabel: nativeInputAriaLabel, disabled, maxDate: maxDate || defaultMaxDate, minDate: minDate || defaultMinDate, name, onChange: onChangeNative, required, value, valueType }, "date");
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    jsxRuntimeExports.jsxs("div", { className: className2, onClick, children: [renderNativeInput(), renderCustomInputsInternal()] })
  );
}
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
};
var baseClassName = "react-date-picker";
var outsideActionEvents = ["mousedown", "focusin", "touchstart"];
var iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 19,
  height: 19,
  viewBox: "0 0 19 19",
  stroke: "black",
  strokeWidth: 2
};
var CalendarIcon = jsxRuntimeExports.jsxs("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__calendar-button__icon ").concat(baseClassName, "__button__icon"), children: [jsxRuntimeExports.jsx("rect", { fill: "none", height: "15", width: "15", x: "2", y: "2" }), jsxRuntimeExports.jsx("line", { x1: "6", x2: "6", y1: "0", y2: "4" }), jsxRuntimeExports.jsx("line", { x1: "13", x2: "13", y1: "0", y2: "4" })] }));
var ClearIcon = jsxRuntimeExports.jsxs("svg", __assign({}, iconProps, { className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon"), children: [jsxRuntimeExports.jsx("line", { x1: "4", x2: "15", y1: "4", y2: "15" }), jsxRuntimeExports.jsx("line", { x1: "15", x2: "4", y1: "4", y2: "15" })] }));
function DatePicker(props) {
  var autoFocus = props.autoFocus, calendarAriaLabel = props.calendarAriaLabel, _a = props.calendarIcon, calendarIcon = _a === void 0 ? CalendarIcon : _a, className2 = props.className, clearAriaLabel = props.clearAriaLabel, _b = props.clearIcon, clearIcon = _b === void 0 ? ClearIcon : _b, _c = props.closeCalendar, shouldCloseCalendarOnSelect = _c === void 0 ? true : _c, dataTestid = props["data-testid"], dayAriaLabel = props.dayAriaLabel, dayPlaceholder = props.dayPlaceholder, disableCalendar = props.disableCalendar, disabled = props.disabled, format = props.format, id = props.id, _d = props.isOpen, isOpenProps = _d === void 0 ? null : _d, locale = props.locale, maxDate = props.maxDate, _e = props.maxDetail, maxDetail = _e === void 0 ? "month" : _e, minDate = props.minDate, monthAriaLabel = props.monthAriaLabel, monthPlaceholder = props.monthPlaceholder, _f = props.name, name = _f === void 0 ? "date" : _f, nativeInputAriaLabel = props.nativeInputAriaLabel, onCalendarClose = props.onCalendarClose, onCalendarOpen = props.onCalendarOpen, onChangeProps = props.onChange, onFocusProps = props.onFocus, onInvalidChange = props.onInvalidChange, _g = props.openCalendarOnFocus, openCalendarOnFocus = _g === void 0 ? true : _g, required = props.required, _h = props.returnValue, returnValue = _h === void 0 ? "start" : _h, shouldCloseCalendar = props.shouldCloseCalendar, shouldOpenCalendar = props.shouldOpenCalendar, showLeadingZeros = props.showLeadingZeros, value = props.value, yearAriaLabel = props.yearAriaLabel, yearPlaceholder = props.yearPlaceholder, otherProps = __rest(props, ["autoFocus", "calendarAriaLabel", "calendarIcon", "className", "clearAriaLabel", "clearIcon", "closeCalendar", "data-testid", "dayAriaLabel", "dayPlaceholder", "disableCalendar", "disabled", "format", "id", "isOpen", "locale", "maxDate", "maxDetail", "minDate", "monthAriaLabel", "monthPlaceholder", "name", "nativeInputAriaLabel", "onCalendarClose", "onCalendarOpen", "onChange", "onFocus", "onInvalidChange", "openCalendarOnFocus", "required", "returnValue", "shouldCloseCalendar", "shouldOpenCalendar", "showLeadingZeros", "value", "yearAriaLabel", "yearPlaceholder"]);
  var _j = reactExports.useState(isOpenProps), isOpen = _j[0], setIsOpen = _j[1];
  var wrapper = reactExports.useRef(null);
  var calendarWrapper = reactExports.useRef(null);
  reactExports.useEffect(function() {
    setIsOpen(isOpenProps);
  }, [isOpenProps]);
  function openCalendar(_a2) {
    var reason = _a2.reason;
    if (shouldOpenCalendar) {
      if (!shouldOpenCalendar({ reason })) {
        return;
      }
    }
    setIsOpen(true);
    if (onCalendarOpen) {
      onCalendarOpen();
    }
  }
  var closeCalendar = reactExports.useCallback(function(_a2) {
    var reason = _a2.reason;
    if (shouldCloseCalendar) {
      if (!shouldCloseCalendar({ reason })) {
        return;
      }
    }
    setIsOpen(false);
    if (onCalendarClose) {
      onCalendarClose();
    }
  }, [onCalendarClose, shouldCloseCalendar]);
  function toggleCalendar() {
    if (isOpen) {
      closeCalendar({ reason: "buttonClick" });
    } else {
      openCalendar({ reason: "buttonClick" });
    }
  }
  function onChange2(value2, shouldCloseCalendar2) {
    if (shouldCloseCalendar2 === void 0) {
      shouldCloseCalendar2 = shouldCloseCalendarOnSelect;
    }
    if (shouldCloseCalendar2) {
      closeCalendar({ reason: "select" });
    }
    if (onChangeProps) {
      onChangeProps(value2);
    }
  }
  function onFocus3(event) {
    if (onFocusProps) {
      onFocusProps(event);
    }
    if (
      // Internet Explorer still fires onFocus on disabled elements
      disabled || isOpen || !openCalendarOnFocus || event.target.dataset.select === "true"
    ) {
      return;
    }
    openCalendar({ reason: "focus" });
  }
  var onKeyDown = reactExports.useCallback(function(event) {
    if (event.key === "Escape") {
      closeCalendar({ reason: "escape" });
    }
  }, [closeCalendar]);
  function clear() {
    onChange2(null);
  }
  function stopPropagation(event) {
    event.stopPropagation();
  }
  var onOutsideAction = reactExports.useCallback(function(event) {
    var wrapperEl = wrapper.current;
    var calendarWrapperEl = calendarWrapper.current;
    var target = "composedPath" in event ? event.composedPath()[0] : event.target;
    if (target && wrapperEl && !wrapperEl.contains(target) && (!calendarWrapperEl || !calendarWrapperEl.contains(target))) {
      closeCalendar({ reason: "outsideAction" });
    }
  }, [calendarWrapper, closeCalendar, wrapper]);
  var handleOutsideActionListeners = reactExports.useCallback(function(shouldListen) {
    if (shouldListen === void 0) {
      shouldListen = isOpen;
    }
    outsideActionEvents.forEach(function(event) {
      if (shouldListen) {
        document.addEventListener(event, onOutsideAction);
      } else {
        document.removeEventListener(event, onOutsideAction);
      }
    });
    if (shouldListen) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
  }, [isOpen, onOutsideAction, onKeyDown]);
  reactExports.useEffect(function() {
    handleOutsideActionListeners();
    return function() {
      handleOutsideActionListeners(false);
    };
  }, [handleOutsideActionListeners]);
  function renderInputs() {
    var valueFrom = (Array.isArray(value) ? value : [value])[0];
    var ariaLabelProps = {
      dayAriaLabel,
      monthAriaLabel,
      nativeInputAriaLabel,
      yearAriaLabel
    };
    var placeholderProps = {
      dayPlaceholder,
      monthPlaceholder,
      yearPlaceholder
    };
    return jsxRuntimeExports.jsxs("div", { className: "".concat(baseClassName, "__wrapper"), children: [jsxRuntimeExports.jsx(DateInput$1, __assign({}, ariaLabelProps, placeholderProps, {
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus,
      className: "".concat(baseClassName, "__inputGroup"),
      disabled,
      format,
      isCalendarOpen: isOpen,
      locale,
      maxDate,
      maxDetail,
      minDate,
      name,
      onChange: onChange2,
      onInvalidChange,
      required,
      returnValue,
      showLeadingZeros,
      value: valueFrom
    })), clearIcon !== null && jsxRuntimeExports.jsx("button", { "aria-label": clearAriaLabel, className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"), disabled, onClick: clear, onFocus: stopPropagation, type: "button", children: typeof clearIcon === "function" ? reactExports.createElement(clearIcon) : clearIcon }), calendarIcon !== null && !disableCalendar && jsxRuntimeExports.jsx("button", { "aria-expanded": isOpen || false, "aria-label": calendarAriaLabel, className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"), disabled, onClick: toggleCalendar, onFocus: stopPropagation, type: "button", children: typeof calendarIcon === "function" ? reactExports.createElement(calendarIcon) : calendarIcon })] });
  }
  function renderCalendar() {
    if (isOpen === null || disableCalendar) {
      return null;
    }
    var calendarProps = props.calendarProps, portalContainer = props.portalContainer, value2 = props.value;
    var className3 = "".concat(baseClassName, "__calendar");
    var classNames2 = clsx(className3, "".concat(className3, "--").concat(isOpen ? "open" : "closed"));
    var calendar = jsxRuntimeExports.jsx(Calendar, __assign({ locale, maxDate, maxDetail, minDate, onChange: function(value3) {
      return onChange2(value3);
    }, value: value2 }, calendarProps));
    return portalContainer ? reactDomExports.createPortal(jsxRuntimeExports.jsx("div", { ref: calendarWrapper, className: classNames2, children: calendar }), portalContainer) : jsxRuntimeExports.jsx(Fit, { children: jsxRuntimeExports.jsx("div", { ref: function(ref) {
      if (ref && !isOpen) {
        ref.removeAttribute("style");
      }
    }, className: classNames2, children: calendar }) });
  }
  var eventProps = reactExports.useMemo(function() {
    return makeEventProps(otherProps);
  }, [otherProps]);
  return jsxRuntimeExports.jsxs("div", __assign({ className: clsx(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? "open" : "closed"), "".concat(baseClassName, "--").concat(disabled ? "disabled" : "enabled"), className2), "data-testid": dataTestid, id }, eventProps, { onFocus: onFocus3, ref: wrapper, children: [renderInputs(), renderCalendar()] }));
}
const DateInput = ({ setData, value, name }) => {
  const resetCalendar = () => {
    console.log("reset");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DatePicker,
    {
      onCalendarClose: resetCalendar,
      onFocus: resetCalendar,
      onChange: (e2) => setData(
        name,
        e2 == null ? void 0 : e2.toLocaleString()
      ),
      calendarIcon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-calendar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 3v4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 3v4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 11h16" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 15h1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 15v3" })
      ] }),
      clearIcon: null,
      name: "birth_date",
      value
    }
  );
};
var EMPTY_VALUE = Symbol("useLazyRef empty value");
var useLazyRef = (init) => {
  const resultRef = reactExports.useRef(EMPTY_VALUE);
  if (resultRef.current === EMPTY_VALUE) {
    resultRef.current = init();
  }
  return resultRef;
};
function useIsMountedRef() {
  var isMountedRef = reactExports.useRef(false);
  reactExports.useEffect(function() {
    isMountedRef.current = true;
    return function() {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef;
}
var useLatest = function useLatest2(value) {
  var ref = reactExports.useRef(value);
  index(function() {
    ref.current = value;
  });
  return ref;
};
function Ok(result) {
  const self = {
    isOk: () => true,
    isOkAnd: (fn) => fn(result),
    isErr: () => false,
    isErrAnd: () => false,
    ok: () => Some(result),
    err: () => None(),
    map: (fn) => Ok(fn(result)),
    mapOr: (_, fn) => fn(result),
    mapOrElse: (_, fn) => fn(result),
    mapErr: () => Ok(result),
    expect: () => result,
    expectErr: (msg) => {
      throw new Error(msg);
    },
    unwrap: () => result,
    unwrapErr: () => {
      throw new Error(`${result}`);
    },
    unwrapOr: () => result,
    unwrapOrElse: () => result,
    and: (res) => res,
    andThen: (getRes) => getRes(result),
    or: () => Ok(result),
    orElse: () => Ok(result)
  };
  return self;
}
function Err(err) {
  const self = {
    isOk: () => false,
    isOkAnd: () => false,
    isErr: () => true,
    isErrAnd: (fn) => fn(err),
    ok: () => None(),
    err: () => Some(err),
    map: () => Err(err),
    mapOr: (defaultValue) => defaultValue,
    mapOrElse: (getDefaultValue) => getDefaultValue(err),
    mapErr: (fn) => Err(fn(err)),
    expect: (msg) => {
      throw new Error(msg);
    },
    expectErr: () => err,
    unwrap: () => {
      throw new Error(`${err}`);
    },
    unwrapErr: () => err,
    unwrapOr: (defaultValue) => defaultValue,
    unwrapOrElse: (getDefaultValue) => getDefaultValue(err),
    and: () => Err(err),
    andThen: () => Err(err),
    or: (res) => res,
    orElse: (getRes) => getRes(err)
  };
  return self;
}
function None() {
  const self = {
    and: () => None(),
    andThen: () => None(),
    expect: (msg) => {
      throw new Error(msg);
    },
    filter: () => self,
    isSome: () => false,
    isSomeAnd: () => false,
    isNone: () => true,
    map: () => None(),
    mapOr: (defaultValue) => defaultValue,
    mapOrElse: (getDefaultValue) => getDefaultValue(),
    okOr: (err) => Err(err),
    okOrElse: (getErr) => Err(getErr()),
    or: (opt) => opt,
    orElse: (fn) => fn(),
    unwrap: () => {
      throw new Error("panic! call `unwrap` on a `None` value");
    },
    unwrapOr: (defaultValue) => defaultValue,
    unwrapOrElse: (getDefaultValue) => getDefaultValue(),
    xor: (opt) => {
      if (opt.isSome()) {
        return opt;
      }
      return self;
    }
  };
  return self;
}
function Some(value) {
  const self = {
    and: (opt) => opt,
    andThen: (fn) => fn(value),
    expect: () => value,
    filter: (fn) => {
      if (fn(value)) {
        return self;
      }
      return None();
    },
    isSome: () => true,
    isSomeAnd: (fn) => fn(value),
    isNone: () => false,
    map: (fn) => Some(fn(value)),
    mapOr: (_, fn) => fn(value),
    mapOrElse: (_, fn) => fn(value),
    okOr: () => Ok(value),
    okOrElse: () => Ok(value),
    or: () => self,
    orElse: () => self,
    unwrap: () => value,
    unwrapOr: () => value,
    unwrapOrElse: () => value,
    xor: (opt) => {
      if (opt.isNone()) {
        return self;
      }
      return None();
    }
  };
  return self;
}
function getResult(promise) {
  return promise.then(
    (response) => Ok(response),
    (err) => Err(err)
  );
}
var e = setTimeout;
function t(t2, n2) {
  var u = n2.useCachedSetTimeout ? e : setTimeout;
  return new Promise(function(e2) {
    u(e2, t2);
  });
}
function n(e2) {
  var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = n2.useCachedSetTimeout, r = t(e2, { useCachedSetTimeout: u });
  function o(e3) {
    return r.then(function() {
      return e3;
    });
  }
  return o.then = function() {
    return r.then.apply(r, arguments);
  }, o.catch = Promise.resolve().catch, o;
}
var composeRefs$1 = {};
Object.defineProperty(composeRefs$1, "__esModule", { value: true });
function composeRefs() {
  var refs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }
  if (refs.length === 2) {
    return composeTwoRefs(refs[0], refs[1]) || null;
  }
  var composedRef = refs.slice(1).reduce(function(semiCombinedRef, refToInclude) {
    return composeTwoRefs(semiCombinedRef, refToInclude);
  }, refs[0]);
  return composedRef || null;
}
var _default = composeRefs$1.default = composeRefs;
var composedRefCache = /* @__PURE__ */ new WeakMap();
function composeTwoRefs(ref1, ref2) {
  if (ref1 && ref2) {
    var ref1Cache = composedRefCache.get(ref1) || /* @__PURE__ */ new WeakMap();
    composedRefCache.set(ref1, ref1Cache);
    var composedRef = ref1Cache.get(ref2) || function(instance) {
      updateRef(ref1, instance);
      updateRef(ref2, instance);
    };
    ref1Cache.set(ref2, composedRef);
    return composedRef;
  }
  if (!ref1) {
    return ref2;
  } else {
    return ref1;
  }
}
function updateRef(ref, instance) {
  if (typeof ref === "function") {
    ref(instance);
  } else {
    ref.current = instance;
  }
}
var defaultReduceOptions = (prevOptions, loadedOptions) => [...prevOptions, ...loadedOptions];
var AVAILABLE_DELTA = 10;
var defaultShouldLoadMore = (scrollHeight, clientHeight, scrollTop) => {
  const bottomBorder = scrollHeight - clientHeight - AVAILABLE_DELTA;
  return bottomBorder < scrollTop;
};
var getInitialCache = (params) => ({
  isFirstLoad: true,
  options: [],
  hasMore: true,
  isLoading: false,
  lockedUntil: 0,
  additional: params.additional
});
var getInitialOptionsCache = ({
  options: options2,
  defaultOptions,
  additional,
  defaultAdditional
}) => {
  const initialOptions = defaultOptions === true ? null : Array.isArray(defaultOptions) ? defaultOptions : options2;
  if (initialOptions) {
    return {
      "": {
        isFirstLoad: false,
        isLoading: false,
        options: initialOptions,
        hasMore: true,
        lockedUntil: 0,
        additional: defaultAdditional || additional
      }
    };
  }
  return {};
};
var errorText = '[react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.';
var checkIsResponse = (response) => {
  if (!response) {
    return false;
  }
  const { options: options2, hasMore } = response;
  if (!Array.isArray(options2)) {
    return false;
  }
  if (typeof hasMore !== "boolean" && typeof hasMore !== "undefined") {
    return false;
  }
  return true;
};
var validateResponse = (response) => {
  if (!checkIsResponse(response)) {
    console.error(errorText, "Received:", response);
    throw new Error(errorText);
  }
  return true;
};
var requestOptions = async (caller, paramsRef, optionsCacheRef, debounceTimeout, setOptionsCache, reduceOptions, isMountedRef) => {
  const currentInputValue = paramsRef.current.inputValue;
  const isCacheEmpty = !optionsCacheRef.current[currentInputValue];
  const currentOptions = isCacheEmpty ? getInitialCache(paramsRef.current) : optionsCacheRef.current[currentInputValue];
  if (currentOptions.isLoading || !currentOptions.hasMore || currentOptions.lockedUntil > Date.now()) {
    return;
  }
  setOptionsCache(
    (prevOptionsCache) => ({
      ...prevOptionsCache,
      [currentInputValue]: {
        ...currentOptions,
        isLoading: true
      }
    })
  );
  if (debounceTimeout > 0 && caller === "input-change") {
    await n(debounceTimeout);
    const newInputValue = paramsRef.current.inputValue;
    if (currentInputValue !== newInputValue) {
      setOptionsCache((prevOptionsCache) => {
        if (isCacheEmpty) {
          const { [currentInputValue]: itemForDelete, ...restCache } = prevOptionsCache;
          return restCache;
        }
        return {
          ...prevOptionsCache,
          [currentInputValue]: {
            ...currentOptions,
            isLoading: false
          }
        };
      });
      return;
    }
  }
  const { loadOptions, reloadOnErrorTimeout = 0 } = paramsRef.current;
  const result = await getResult(
    Promise.resolve().then(
      () => loadOptions(
        currentInputValue,
        currentOptions.options,
        currentOptions.additional
      )
    )
  );
  if (!isMountedRef.current) {
    return;
  }
  if (result.isErr()) {
    setOptionsCache((prevOptionsCache) => ({
      ...prevOptionsCache,
      [currentInputValue]: {
        ...currentOptions,
        isLoading: false,
        lockedUntil: Date.now() + reloadOnErrorTimeout
      }
    }));
    return;
  }
  const response = result.unwrap();
  if (validateResponse(response)) {
    const { options: options2, hasMore } = response;
    const newAdditional = Object.hasOwn(response, "additional") ? response.additional : currentOptions.additional;
    setOptionsCache((prevOptionsCache) => ({
      ...prevOptionsCache,
      [currentInputValue]: {
        ...currentOptions,
        options: reduceOptions(currentOptions.options, options2, newAdditional),
        hasMore: !!hasMore,
        isLoading: false,
        isFirstLoad: false,
        additional: newAdditional
      }
    }));
  }
};
var increaseStateId = (prevStateId) => prevStateId + 1;
var useAsyncPaginateBase = (params, deps = []) => {
  const {
    defaultOptions,
    loadOptionsOnMenuOpen = true,
    debounceTimeout = 0,
    inputValue,
    menuIsOpen,
    filterOption = null,
    reduceOptions = defaultReduceOptions,
    shouldLoadMore = defaultShouldLoadMore
  } = params;
  const isMountedRef = useIsMountedRef();
  const reduceOptionsRef = useLatest(reduceOptions);
  const loadOptionsOnMenuOpenRef = useLatest(loadOptionsOnMenuOpen);
  const isInitRef = reactExports.useRef(true);
  const paramsRef = reactExports.useRef(params);
  paramsRef.current = params;
  const [_stateId, setStateId] = reactExports.useState(0);
  const optionsCacheRef = useLazyRef(() => getInitialOptionsCache(params));
  const callRequestOptionsRef = useLatest(
    (caller) => {
      requestOptions(
        caller,
        paramsRef,
        optionsCacheRef,
        debounceTimeout,
        (reduceState) => {
          optionsCacheRef.current = reduceState(optionsCacheRef.current);
          if (isMountedRef.current) {
            setStateId(increaseStateId);
          }
        },
        reduceOptionsRef.current,
        isMountedRef
      );
    }
  );
  const handleScrolledToBottom = reactExports.useCallback(() => {
    const currentInputValue = paramsRef.current.inputValue;
    const currentOptions2 = optionsCacheRef.current[currentInputValue];
    if (currentOptions2) {
      callRequestOptionsRef.current("menu-scroll");
    }
  }, [callRequestOptionsRef, optionsCacheRef]);
  reactExports.useEffect(() => {
    if (isInitRef.current) {
      isInitRef.current = false;
    } else {
      optionsCacheRef.current = {};
      setStateId(increaseStateId);
    }
    if (defaultOptions === true) {
      callRequestOptionsRef.current("autoload");
    }
  }, deps);
  reactExports.useEffect(() => {
    if (menuIsOpen && !optionsCacheRef.current[inputValue]) {
      callRequestOptionsRef.current("input-change");
    }
  }, [callRequestOptionsRef, inputValue, menuIsOpen, optionsCacheRef]);
  reactExports.useEffect(() => {
    if (menuIsOpen && !optionsCacheRef.current[""] && loadOptionsOnMenuOpenRef.current) {
      callRequestOptionsRef.current("menu-toggle");
    }
  }, [
    callRequestOptionsRef,
    loadOptionsOnMenuOpenRef,
    menuIsOpen,
    optionsCacheRef
  ]);
  const currentOptions = optionsCacheRef.current[inputValue] || getInitialCache(params);
  return {
    handleScrolledToBottom,
    shouldLoadMore,
    filterOption,
    isLoading: currentOptions.isLoading || currentOptions.lockedUntil > Date.now(),
    isFirstLoad: currentOptions.isFirstLoad,
    options: currentOptions.options
  };
};
var useAsyncPaginate = (params, deps = []) => {
  const {
    inputValue: inputValueParam,
    menuIsOpen: menuIsOpenParam,
    defaultInputValue: defaultInputValueParam,
    defaultMenuIsOpen: defaultMenuIsOpenParam,
    onInputChange: onInputChangeParam,
    onMenuClose: onMenuCloseParam,
    onMenuOpen: onMenuOpenParam
  } = params;
  const [inputValueState, setInputValue] = reactExports.useState(
    defaultInputValueParam || ""
  );
  const [menuIsOpenState, setMenuIsOpen] = reactExports.useState(!!defaultMenuIsOpenParam);
  const inputValue = typeof inputValueParam === "string" ? inputValueParam : inputValueState;
  const menuIsOpen = typeof menuIsOpenParam === "boolean" ? menuIsOpenParam : menuIsOpenState;
  const onInputChange = reactExports.useCallback(
    (nextInputValue, actionMeta) => {
      if (onInputChangeParam) {
        onInputChangeParam(nextInputValue, actionMeta);
      }
      setInputValue(nextInputValue);
    },
    [onInputChangeParam]
  );
  const onMenuClose = reactExports.useCallback(() => {
    if (onMenuCloseParam) {
      onMenuCloseParam();
    }
    setMenuIsOpen(false);
  }, [onMenuCloseParam]);
  const onMenuOpen = reactExports.useCallback(() => {
    if (onMenuOpenParam) {
      onMenuOpenParam();
    }
    setMenuIsOpen(true);
  }, [onMenuOpenParam]);
  const baseResult = useAsyncPaginateBase(
    {
      ...params,
      inputValue,
      menuIsOpen
    },
    deps
  );
  return {
    ...baseResult,
    inputValue,
    menuIsOpen,
    onInputChange,
    onMenuClose,
    onMenuOpen
  };
};
var CHECK_TIMEOUT = 300;
function wrapMenuList(MenuList22) {
  function WrappedMenuList(props) {
    const { selectProps, innerRef } = props;
    const { handleScrolledToBottom, shouldLoadMore } = selectProps;
    const checkTimeoutRef = reactExports.useRef(null);
    const menuListRef = reactExports.useRef(null);
    const shouldHandle = reactExports.useCallback(() => {
      const el = menuListRef.current;
      if (!el) {
        return false;
      }
      const { scrollTop, scrollHeight, clientHeight } = el;
      return shouldLoadMore(scrollHeight, clientHeight, scrollTop);
    }, [shouldLoadMore]);
    const checkAndHandle = reactExports.useCallback(() => {
      if (shouldHandle()) {
        if (handleScrolledToBottom) {
          handleScrolledToBottom();
        }
      }
    }, [shouldHandle, handleScrolledToBottom]);
    const setCheckAndHandleTimeout = reactExports.useMemo(() => {
      const res = () => {
        checkAndHandle();
        checkTimeoutRef.current = setTimeout(res, CHECK_TIMEOUT);
      };
      return res;
    }, [checkAndHandle]);
    reactExports.useEffect(() => {
      setCheckAndHandleTimeout();
      return () => {
        if (checkTimeoutRef.current) {
          clearTimeout(checkTimeoutRef.current);
        }
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MenuList22,
      {
        ...props,
        innerRef: _default(innerRef, menuListRef)
      }
    );
  }
  return WrappedMenuList;
}
var MenuList2 = wrapMenuList(
  // biome-ignore lint/suspicious/noExplicitAny: fix types
  components.MenuList
);
var useComponents = (components2) => reactExports.useMemo(
  () => ({
    MenuList: MenuList2,
    ...components2
  }),
  [components2]
);
var defaultCacheUniqs = [];
var defaultComponents22 = {};
function withAsyncPaginate(SelectComponent) {
  function WithAsyncPaginate(props) {
    const {
      components: components2 = defaultComponents22,
      selectRef = void 0,
      isLoading: isLoadingProp,
      cacheUniqs = defaultCacheUniqs,
      ...rest
    } = props;
    const asyncPaginateProps = useAsyncPaginate(rest, cacheUniqs);
    const processedComponents = useComponents(
      components2
    );
    const isLoading = typeof isLoadingProp === "boolean" ? isLoadingProp : asyncPaginateProps.isLoading;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SelectComponent,
      {
        ...props,
        ...asyncPaginateProps,
        isLoading,
        components: processedComponents,
        ref: selectRef
      }
    );
  }
  return WithAsyncPaginate;
}
var AsyncPaginate = withAsyncPaginate(StateManagedSelect$1);
function useAuth() {
  const user = V().props.auth.user;
  if (!user) {
    return null;
  }
  return user;
}
const StateCityDropdown = ({ formData, setFormData, errors, variant = "lg" }) => {
  const [selectedCountry, setSelectedCountry] = reactExports.useState(
    (formData == null ? void 0 : formData.country) || { value: 1, label: "United States" }
  );
  const [selectedState, setSelectedState] = reactExports.useState((formData == null ? void 0 : formData.state) || "");
  const [selectedCity, setSelectedCity] = reactExports.useState((formData == null ? void 0 : formData.city) || "");
  const [zipCode, setZipCode] = reactExports.useState((formData == null ? void 0 : formData.zip_code) || "");
  const user = useAuth();
  const fetchCountries = async (search, loadOptions, { page }) => {
    const response = await fetch(`/api/puppy/countries?page=${page}`);
    const data = await response.json();
    return {
      options: data.data,
      hasMore: false,
      additional: { page: page + 1 }
    };
  };
  const fetchStates = async (search, loadedOptions, { page }) => {
    const response = await fetch(
      `/api/puppy/states?search=${search}&page=${page}`
    );
    const data = await response.json();
    return {
      options: data.data,
      hasMore: data.current_page !== data.last_page,
      additional: { page: data.current_page + 1 }
    };
  };
  const fetchCities = async (search, loadedOptions, { page }) => {
    const response = await fetch(
      `/api/puppy/cities?page=${page}&search=${search}`
    );
    const data = await response.json();
    return {
      options: data.data,
      hasMore: data.current_page !== data.last_page,
      additional: { page: data.current_page + 1 }
    };
  };
  reactExports.useEffect(() => {
    var _a, _b, _c, _d;
    setFormData(
      "country",
      selectedCountry.value
    );
    if (user == null ? void 0 : user.city) {
      const transformedCity = {
        value: (_a = user == null ? void 0 : user.city) == null ? void 0 : _a.id,
        label: (_b = user == null ? void 0 : user.city) == null ? void 0 : _b.name
      };
      setSelectedCity(transformedCity);
    }
    if (user == null ? void 0 : user.state) {
      const transformedCity = {
        value: (_c = user == null ? void 0 : user.state) == null ? void 0 : _c.id,
        label: (_d = user == null ? void 0 : user.state) == null ? void 0 : _d.name
      };
      setSelectedState(transformedCity);
    }
  }, []);
  const handleStateChange = (state) => {
    setSelectedState(state);
    setFormData("state_id", state.value);
  };
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setFormData("city_id", city.value);
  };
  const handleZipCodeChange = (e2) => {
    setZipCode(e2.target.value);
    setFormData("zip_code", e2.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 d-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "country", value: "Country" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AsyncPaginate,
        {
          className: "mt-1",
          loadOptions: fetchCountries,
          additional: { page: 1 },
          value: selectedCountry,
          onChange: (selected) => {
            setSelectedCountry(selected);
            setFormData("country", selected.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "city", value: "City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AsyncPaginate,
        {
          styles: {
            option: (baseStyles, state) => ({
              backgroundColor: state.isSelected ? "var(--bs-primary)" : state.isFocused ? "#f0f0f0" : "white",
              padding: "6px 10px"
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? "1px solid var(--bs-primary)" : "1px solid rgba(8, 49, 78, 0.2)",
              borderRadius: "100px",
              // border: "1p,x solid rgb(209 213 219 / 1)",
              outlineColor: "red",
              boxShadow: "none",
              "&:hover": {
                border: "auto"
              },
              padding: "3px 4px"
            })
          },
          loadOptions: fetchCities,
          onChange: handleCityChange,
          className: "mb-4",
          value: selectedCity,
          additional: { page: 1 }
        },
        selectedState ? selectedState.value : "no-state"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.city_id,
          className: "mt-2"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "state", value: "State" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AsyncPaginate,
        {
          loadOptions: fetchStates,
          onChange: handleStateChange,
          styles: {
            option: (baseStyles, state) => ({
              backgroundColor: state.isSelected ? "var(--bs-primary)" : state.isFocused ? "#f0f0f0" : "white",
              padding: "6px 10px"
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? "1px solid var(--bs-primary)" : "1px solid rgba(8, 49, 78, 0.2)",
              borderRadius: "100px",
              // border: "1p,x solid rgb(209 213 219 / 1)",
              outlineColor: "red",
              boxShadow: "none",
              "&:hover": {
                border: "auto"
              },
              padding: "3px 4px"
            })
          },
          className: "mb-4",
          value: selectedState,
          additional: { page: 1 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.state_id,
          className: "mt-2"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "zip_code", value: "Zip Code" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          id: "zip_code",
          type: "text",
          name: "zip_code",
          value: zipCode,
          autoComplete: "zip_code",
          className: "mb-4 form-control",
          onChange: handleZipCodeChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.zip_code,
          className: "mt-2"
        }
      )
    ] })
  ] });
};
export {
  DateInput as D,
  FileUpload as F,
  SemiHeading as S,
  YesOrNoRadioInput as Y,
  StateCityDropdown as a,
  SelectInput as b
};
