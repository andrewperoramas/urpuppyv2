import { K, r as reactExports, j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { P as PuppyCard } from "./Card-Cc0Fg7O7.js";
import { k as kt } from "./index-BgmffWW1.js";
function Guest({ variant = "primary", children, puppy, header = "", subHeader = "" }) {
  const { flash } = K().props;
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.success) {
      kt.success(
        flash.message.success,
        {
          duration: 3e3
        }
      );
    }
  }, [flash]);
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.error) {
      kt.error(flash.message.error, {
        duration: 3e3
      });
    }
  }, [flash]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "page-wrapper login-bg position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-7 order-last order-lg-first", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-info d-flex flex-column justify-content-center h-100 py-7 py-lg-0 px-3 ps-lg-0", children: [
          header !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: header }),
          subHeader != "" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 pb-2", children: subHeader }),
          children
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5 order-first order-lg-last", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `login-right-bg ${variant == "secondary" ? "signup-right-bg" : ""} position-relative overflow-hidden h-100 d-flex align-items-center justify-content-center p-4 pt-10 py-lg-10`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 pb-0 position-absolute top-0 end-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, cacheFor: "5m", href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/logos/logo-white.svg", alt: "" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card login-right-card mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "puppy-spotlight-item rounded-1 overflow-hidden", puppy }) }) })
            ]
          }
        ) })
      ] }) }) })
    }
  ) });
}
export {
  Guest as G
};
