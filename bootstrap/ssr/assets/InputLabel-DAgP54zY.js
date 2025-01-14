import { j as jsxRuntimeExports } from "../ssr.js";
function InputLabel({
  value,
  className = "",
  isRequired = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        ...props,
        className: `form-label` + className,
        children: value ? value : children
      }
    ),
    isRequired && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-danger", children: " *" })
  ] });
}
export {
  InputLabel as I
};
