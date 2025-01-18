import { j as jsxRuntimeExports, U as Ue } from "../ssr.js";
import Banner from "./Banner-Cyz5X960.js";
import { P as PuppyCard } from "./Card-Ds_RKnkL.js";
import { L as Layout } from "./Layout-BkOuLc1i.js";
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
import "./BreedFilter-DBu7OSqh.js";
import "./StateFilter-BjZaxTix.js";
import "./Navbarv2-BzRXazE3.js";
import "./ApplicationLogo-CiGjkOmI.js";
const PaginationButton = ({ page, isActive = false, className = "page-link " }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${className} ${isActive ? "active" : ""}`, dangerouslySetInnerHTML: { __html: page } });
};
function runOnClient(callback) {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    callback();
  }
}
const Pagination = ({ links }) => {
  const handlePaginationClick = (event) => {
    runOnClient(() => {
      const scrollTarget = document.getElementById("scroll-target");
      if (scrollTarget) {
        const targetPosition = scrollTarget.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  };
  const mergeQueryParams = (url) => {
    if (typeof window === "undefined") return url;
    const currentParams = new URLSearchParams(window.location.search);
    const urlObj = new URL(url, window.location.origin);
    currentParams.forEach((value, key) => {
      if (!urlObj.searchParams.has(key)) {
        urlObj.searchParams.append(key, value);
      }
    });
    return urlObj.toString();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "table-responsive pb-3 pb-lg-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "pagination mb-0 align-items-center justify-content-center ", children: links && links.length > 3 && links.map((link, index) => {
    if (!link.url) return null;
    const isFirst = index === 0;
    const isLast = index === links.length - 1;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        className: `page-item me-lg-6 `,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            href: mergeQueryParams(link.url),
            preserveState: true,
            prefetch: true,
            cacheFor: "10s",
            onClick: handlePaginationClick,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PaginationButton,
              {
                className: `page-link ${link.active ? "active" : ""} ${isFirst ? "border-0 me-4 text-dark" : ""} ${isLast ? "border-0 text-dark d-hidedn" : ""} `,
                page: link.label,
                isActive: link.active
              }
            )
          }
        )
      },
      index
    );
  }) }) });
};
const Index = ({ puppies, states, breeds }) => {
  console.log(states);
  console.log(breeds);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Banner, { header: `${puppies.total} Results`, subheader: "Below the search bar, you can filter your preferred breeds." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "puppy-spotlight py-7 py-md-5 py-xl-9", id: "scroll-target", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row mb-4 mb-lg-8", children: (puppies == null ? void 0 : puppies.data) && (puppies == null ? void 0 : puppies.data.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { puppy }))) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { links: puppies.links })
    ] })
  ] });
};
export {
  Index as default
};
