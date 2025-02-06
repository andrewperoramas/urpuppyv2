import { j as jsxRuntimeExports } from "../ssr.js";
import { T as TwitterShareButton$1, F as FacebookShareButton$1 } from "./index-CpAMPVps.js";
import { T as Tooltip } from "./Tooltip-DsbihE_i.js";
const ShareButton = ({
  slug,
  route = "puppies"
}) => {
  let currentUrl = `https://urpuppy.com/${route}/${slug}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-secondary p-0 shadow-none bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle flex-shrink-0 show", "data-bs-toggle": "dropdown", "aria-expanded": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-share.svg", alt: "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "ul",
      {
        className: "dropdown-menu dropdown-menu-end bg-primary social-icon px-6",
        style: {
          minWidth: "auto",
          position: "absolute",
          inset: "0px 0px auto auto",
          margin: "0px",
          transform: "translate(0px, 42px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterShareButton$1, { url: currentUrl, className: "dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-twitter.svg", alt: "", width: "16", height: "16" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FacebookShareButton$1, { url: currentUrl, className: "dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-facebook.svg", alt: "", width: "16", height: "16" }) }) })
        ] })
      }
    )
  ] }), id: `share-${slug}`, tooltipMessage: "Share" });
};
export {
  ShareButton as S
};
