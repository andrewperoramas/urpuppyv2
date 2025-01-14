import { j as jsxRuntimeExports, U as Ue } from "../ssr.js";
import { P as PuppyCard } from "./Card-BAmftY3V.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: (puppies == null ? void 0 : puppies.data) && (puppies == null ? void 0 : puppies.data.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { href: `/seller/create/${puppy.id}`, children: "Edit " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-lg-5 col-xl-5 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "", puppy }) })
  ] }))) }) });
};
export {
  MyPuppies as default
};
