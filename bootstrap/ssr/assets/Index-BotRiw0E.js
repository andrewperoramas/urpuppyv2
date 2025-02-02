import { j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { L as Layout } from "./Layout-BDQOJcTp.js";
import Banner from "./Banner-C3ElKCdH.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
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
import "./BreedFilter-DsJB1QKs.js";
import "./index-DhnXZV0i.js";
import "./index-C2Evc1ab.js";
import "./index-CmL8UXgL.js";
import "./floating-ui.dom-D9vmQZx1.js";
import "./GenericModal-CMls0G9m.js";
import "./Modal-CFTG3Mxe.js";
import "./index-DbhDZzck.js";
import "./StateFilter-DGw8i07T.js";
const Card = ({ post }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-lg-4 col-xl-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "puppy-spotlight-item rounded-1 overflow-hidden",
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-duration": "1000",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { prefetch: true, preserveScroll: false, href: `/posts/${post.slug}`, className: "puppy-spotlight-img position-relative overflow-hidden d-block d-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: post.banner_url, alt: "", className: "w-100 object-fit-cover product-card-responsive-height" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "d-flex align-items-center justify-content-between position-absolute top-0 start-0 w-100 p-3 pb-0"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "puppy-spotlight-details", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-2 mb-1 text-uppercase fw-medium", children: post.category.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-6 font-work-sans", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: post.excerpt.length > 100 ? post.excerpt.substring(0, 93) + "..." : post.excerpt }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-user-circle.svg", alt: "", className: "rounded-circle", width: "18", height: "18" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: post.author.name })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-calendar.svg", alt: "", width: "20", height: "20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: post.published_at_formatted })
            ] }) })
          ] })
        ] }) })
      ]
    }
  ) }) });
};
const Index = ({ posts }) => {
  console.log(posts);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Banner, { header: "Blog", size: "md", enable_filter: false, subheader: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { url: `https://urpuppy.com/posts`, title: "Blog", description: "Blog", image: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "puppy-spotlight py-7 py-md-5 py-xl-9", id: "scroll-target", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row mb-4 mb-lg-8", children: posts.data.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: posts.data.map((post, index) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { post }, index);
    }) }) : "No posts found" }) }) })
  ] });
};
export {
  Index as default
};
