import { j as jsxRuntimeExports } from "../ssr.js";
import { H as Hero } from "./Hero-D_7BoKIM.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
import { P as PlanCard } from "./PlanCard-Bsc7M2L0.js";
import { L as Layout } from "./Layout-CMIUCWw0.js";
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
import "./Avatar-wh5kThZW.js";
import "./index-BgmffWW1.js";
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "15", viewBox: "0 0 16 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1 7.5H15M15 7.5L9 13.5M15 7.5L9 1.5", stroke: "#08314E", "stroke-width": "1.5", strokeLinecap: "round", "stroke-linejoin": "round" }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5 me-n1 text-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "" }) })
  ] }) });
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Plans" }),
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
