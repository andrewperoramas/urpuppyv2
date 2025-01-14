import { j as jsxRuntimeExports, U as Ue } from "../ssr.js";
import { H as Hero } from "./Hero-D_7BoKIM.js";
import { L as Layout } from "./Layout-L7XXg1u_.js";
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
import "./Navbarv2-BbKDNqWY.js";
import "./ApplicationLogo-CiGjkOmI.js";
const Jumbotron = ({ title, description, image }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "get-started-today p-4 p-lg-5 pe-0 pe-lg-0 bg-primary rounded-1 overflow-hidden bg-opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row align-items-center justify-content-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5 mb-8 mb-lg-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pe-4 pe-lg-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-4", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#",
          className: "link text-decoration-underline fs-4 text-dark fw-semibold d-flex align-items-center gap-6",
          children: [
            "Subscribe Now",
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "15", viewBox: "0 0 16 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 7.5H15M15 7.5L9 13.5M15 7.5L9 1.5", stroke: "#08314E", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5 me-n1 text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "" }) })
  ] }) });
};
const PlanCard = ({ plan }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card subscription-plans-box border border-2 position-relative w-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-end position-absolute top-0 end-0 mt-n4 z-n1", children: plan.badge_color == "primary" ? plan.badge_title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-top fw-medium px-6 py-1 bg-info text-white fs-3 me-6", children: plan.badge_title }) : plan.badge_title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-top fw-medium px-6 py-1 bg-dark bg-opacity-10 text-muted fs-3 me-6", children: plan.badge_title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-dark fs-5 mb-0", children: plan.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: plan.logo ?? "", alt: "", width: "48", height: "48" })
      ] }),
      plan.type == "free" ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-9", children: [
        " ",
        plan.plan_days,
        " "
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-6", children: [
        plan.money_formatted,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "fs-5 text-muted", children: [
          "/",
          plan.plan_days
        ] })
      ] }) }),
      plan.savings_label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-dark mb-4 pb-2", children: plan.savings_label }),
      plan.is_highlight ? /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, className: "btn btn-primary w-100 mb-7", href: `/checkout/${plan.id}`, children: "Select plan" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, className: "btn btn-outline-extralight border btn-white text-dark w-100 mb-7", href: `/checkout/${plan.id}`, children: "Select plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: plan.features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Features:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-unstyled mb-0 d-flex flex-column gap-6", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "d-flex align-items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-check-filled.svg", alt: "", className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-3 mb-0 font-work-sans fw-normal", children: feature.name })
        ] })) })
      ] }) })
    ] })
  ] });
};
const SecondaryJumbotron = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "fs-10 mb-5 mb-lg-0", children: "Why Choose UrPuppy.com?" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-4 mb-7 mb-md-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-reach-thousands-buyers.svg", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-5 font-work-sans mt-3", children: "Reach Thousands of Buyers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Our platform connects you with eager pet lovers nationwide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-4 mb-7 mb-md-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-easy-to-use-tool.svg", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-5 font-work-sans mt-3", children: "Easy-to-Use Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Upload photos, videos, and descriptions seamlessly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-boosted-visibility.svg", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-5 font-work-sans mt-3", children: "Boosted Visibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Featured listings help you stand out from the competition." })
      ] })
    ] }) })
  ] });
};
const Index = ({ plans }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { title: "Join the Pack", bgImage: "/images/subscription-plans/subscription-plans-bg.jpg", description: "Exclusive Subscription Plans for Pet Lovers. " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "subscription-plans pb-0 pb-md-0 py-7 py-md-5 py-xl-9 pb-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row mt-8", children: plans.length > 0 && plans.map(
      (plan) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-xl-3 mb-7 mb-xl-0 d-flex align-items-stretch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlanCard, { plan }) })
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-extralight my-4 my-lg-5 py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryJumbotron, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Jumbotron,
      {
        title: "Get Started Today!",
        description: "Choose the plan that fits your budget and start selling your puppies with confidence. Whether you’re a\n                  first-time seller or an experienced breeder, UrPuppy.com has the perfect plan for you!\n",
        image: "../images/subscription-plans/get-started-today.png"
      }
    ) }) })
  ] });
};
export {
  Index as default
};
