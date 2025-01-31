import { j as jsxRuntimeExports } from "../ssr.js";
import { L as Layout } from "./Layout-BUwNjJp8.js";
import { P as PuppyCard } from "./Card-DIW6Rm1f.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
import { P as Pagination } from "./Pagination-BnURosuv.js";
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
import "./Tooltip-DenE-Fw-.js";
import "./floating-ui.dom-D9vmQZx1.js";
import "./index-DbhDZzck.js";
const Index = ({ favorite_puppies }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Favorites" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "hero-section position-relative d-flex align-items-center pt-11 pb-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container position-relative z-1 pt-lg-1 mt-lg-3 mb-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-xl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-white text-center fs-11 mb-1",
            "data-aos": "fade-up",
            "data-aos-delay": "100",
            "data-aos-duration": "1000",
            children: "My Favorite Puppies"
          }
        ) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "puppy-spotlight py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row mb-4 mb-lg-8", children: favorite_puppies.data && favorite_puppies.data.length > 0 && favorite_puppies.data.map((puppy) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { puppy }, puppy.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { links: favorite_puppies.links })
    ] }) })
  ] });
};
export {
  Index as default
};
