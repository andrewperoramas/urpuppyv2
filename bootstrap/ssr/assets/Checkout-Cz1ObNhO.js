import { r as reactExports, K, j as jsxRuntimeExports, S as Sr } from "../ssr.js";
import { B as Breadcrumb } from "./Breadcrumb-BSuKYpeP.js";
import { B as Button } from "./Button-y_jYlQbW.js";
import { H as Heading } from "./Heading-BovzgIYZ.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
import { L as Layout } from "./Layout-B3ex8fkn.js";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "assert";
import "tty";
import "os";
import "zlib";
import "events";
import "process";
import "./clsx-DgYk2OaC.js";
import "./Navbarv2-MmrLApEr.js";
import "./ApplicationLogo-BTI8O77G.js";
import "./index-BgmffWW1.js";
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "5.5.0",
    startTime
  });
};
var stripePromise$1 = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError2(reject) {
  return function() {
    reject(new Error("Failed to load Stripe.js"));
  };
};
var onLoad = function onLoad2(resolve, reject) {
  return function() {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error("Stripe.js not available"));
    }
  };
};
var loadScript = function loadScript2(params) {
  if (stripePromise$1 !== null) {
    return stripePromise$1;
  }
  stripePromise$1 = new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) ;
      else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;
        script.removeEventListener("load", onLoadListener);
        script.removeEventListener("error", onErrorListener);
        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }
      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener("load", onLoadListener);
      script.addEventListener("error", onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise$1["catch"](function(error) {
    stripePromise$1 = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$2;
var loadCalled = false;
var getStripePromise = function getStripePromise2() {
  if (stripePromise$2) {
    return stripePromise$2;
  }
  stripePromise$2 = loadScript(null)["catch"](function(error) {
    stripePromise$2 = null;
    return Promise.reject(error);
  });
  return stripePromise$2;
};
Promise.resolve().then(function() {
  return getStripePromise();
})["catch"](function(error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return getStripePromise().then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};
const stripePromise = loadStripe("pk_test_51Q8Qm3CLBiXa7V6ipLsyAZoGS5TmgpRuFwAxiT0nQzePjkyICHQn8mForFcLOlus2DMrEjVVlvfXIwAvARTIWDpA00HsFtZ171");
const CheckoutV2Form = ({ clientSecret, plan_id }) => {
  const [elements, setElements] = reactExports.useState(null);
  const [stripe, setStripe] = reactExports.useState(null);
  const [message, setMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const initializeStripe = async () => {
      const appearance = {
        rules: {
          ".Input:focus": {
            boxShadow: "none",
            borderColor: "#E88325",
            borderWidth: "1px",
            outline: "none"
          },
          ".Tab--selected:focus": {
            boxShadow: "none",
            outline: "none",
            borderColor: "#E88325",
            color: "#08314E"
          },
          ".Tab:focus": {
            borderColor: "#E88325",
            color: "#08314E"
          },
          ".Tab--selected:hover": {
            color: "#08314E"
          },
          ".Tab--selected": {
            boxShadow: "none",
            borderColor: "#E88325",
            borderWidth: "2px",
            outline: "none",
            color: "#08314E"
          },
          ".Tab--hover": {
            boxShadow: "none",
            outline: "none",
            color: "#08314E"
          },
          ".Input": {
            borderRadius: "150px",
            boxShadow: "none"
          },
          "p-TabLabel:hover": {
            color: "08314E"
          },
          ".Label": {
            fontFamily: '"Work Sans", sans-serif',
            fontSize: "1rem",
            fontWeight: "500",
            color: "#08314E",
            marginBottom: "0.6rem"
          }
        }
      };
      const stripeInstance = await stripePromise;
      const elementsInstance = stripeInstance == null ? void 0 : stripeInstance.elements({ clientSecret, appearance });
      setStripe(stripeInstance);
      setElements(elementsInstance);
      const paymentElement = elementsInstance.create("payment", {
        address: {
          allowedCountries: ["US"]
        }
      });
      paymentElement.mount("#payment-element");
    };
    if (clientSecret) {
      initializeStripe();
    }
  }, [clientSecret]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const { setupIntent, error } = await (stripe == null ? void 0 : stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: "http://localhost:4242/public/checkout.html"
      },
      redirect: "if_required"
    }));
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else {
      const data = {
        paymentMethod: setupIntent.payment_method,
        plan_id,
        _token: csrf
      };
      Sr.post("/checkout/complete", data, {
        onError: (errors) => {
          setMessage("Failed to submit payment details.");
          setLoading(false);
        },
        onSuccess: () => {
          setLoading(false);
          setMessage("Payment details submitted successfully.");
        }
      });
    }
  };
  const csrf = K().props.csrf_token;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "payment-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "_token", value: csrf }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "plan_id", value: plan_id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "payment-element" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: loading, href: "#", type: "button", children: "Checkout" }) }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "payment-message", className: "mt-4 text-red-500", children: message })
  ] });
};
const Checkout = ({ plan_id, intent }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { navType: "secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "information pt-4 pb-8 pb-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { links: [{ label: "Plan", link: "/plans" }, { label: "Checkout", link: "/checkout" }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { title: "Checkout", description: "Checkout now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckoutV2Form, { clientSecret: intent.client_secret, plan_id })
      ] })
    ] }) }) })
  ] });
};
export {
  Checkout as default
};
