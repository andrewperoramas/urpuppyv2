import { j as jsxRuntimeExports, $ as $e, S as Sr } from "../ssr.js";
import { P as PuppyCard } from "./Card-CUelPOFb.js";
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
const MyPuppies = ({ puppies }) => {
  console.log(puppies);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: (puppies == null ? void 0 : puppies.data) && puppies.data.length ? puppies == null ? void 0 : puppies.data.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-6 col-lg-5 col-xl-5 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "", puppy }),
    /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "btn btn-primary mt-2 btn-sm", style: { marginRight: "4px" }, href: `/seller/create/${puppy.id}`, children: "Edit " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        href: "/subscriptions",
        method: "delete",
        as: "button",
        onClick: (e) => {
          e.preventDefault();
          if (window.confirm("Are you sure?")) {
            Sr.delete(`/seller/delete/${puppy.id}`);
          }
        },
        "data-bs-toggle": "modal",
        "data-bs-target": "#CancelPlan",
        className: "btn btn-secondary btn-sm mt-2 ",
        children: "Delete"
      }
    )
  ] }) })) : /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-4", children: "No puppies found.." }) }) });
};
export {
  MyPuppies as default
};
