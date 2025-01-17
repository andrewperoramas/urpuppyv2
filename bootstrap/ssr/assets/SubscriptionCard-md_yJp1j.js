import { j as jsxRuntimeExports, U as Ue, h as hr } from "../ssr.js";
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
const SubscriptionCard = ({ plan, next_billing, cancel_at }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-13 pb-13 border-bottom fs-7", children: "Current Plan" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-13 mb-13 border-bottom d-md-flex align-items-start justify-content-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 mb-md-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-6 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: plan.logo ?? "", alt: "", width: "48", height: "48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-dark fs-5 mb-0", children: plan.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-2", children: [
          plan.money_formatted,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-5 text-muted", children: [
            "/",
            plan.plan_days
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-dark", children: [
          cancel_at ? "Ends at: " : "Next Billing Date:",
          " ",
          next_billing
        ] }) }),
        cancel_at && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 badge bg-danger", children: "Cancelled plan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: !cancel_at && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          href: "/subscriptions",
          method: "delete",
          as: "button",
          onClick: (e) => {
            e.preventDefault();
            if (window.confirm("Are you sure?")) {
              hr.delete("/subscriptions");
            }
          },
          "data-bs-toggle": "modal",
          "data-bs-target": "#CancelPlan",
          className: "btn btn-outline-extralight border btn-white text-dark d-block",
          children: "Cancel Plan"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Features:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-unstyled mb-0 d-flex flex-column gap-6", children: plan.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "d-flex align-items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-check-filled.svg", alt: "", className: "flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-3 mb-0 font-work-sans fw-normal", children: feature.name })
      ] })) })
    ] })
  ] }) });
};
export {
  SubscriptionCard as default
};
