import { j as jsxRuntimeExports } from "../ssr.js";
import { B as Breadcrumb } from "./Breadcrumb-BSuKYpeP.js";
import { H as Heading } from "./Heading-BovzgIYZ.js";
import { L as Layout } from "./Layout-CLsZFRNi.js";
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
import "./index-BgmffWW1.js";
const PaymentMethodForm = ({ payment_methods }) => {
  console.log(payment_methods);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "PaymentMethod" });
};
const PaymentMethod = ({ payment_methods }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { navType: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "information pt-4 pb-8 pb-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { links: [{ label: "Plan", link: "/" }, { label: "Checkout", link: "/checkout" }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { title: "Checkout", description: "Create a new listing for your puppy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PaymentMethodForm,
        {
          payment_methods
        }
      )
    ] })
  ] }) }) }) });
};
export {
  PaymentMethod as default
};
