import { j as jsxRuntimeExports } from "../ssr.js";
function InputError({
  message,
  className = "",
  ...props
}) {
  return message ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ...props,
      className: "text-sm text-danger mt-2 " + className,
      children: message
    }
  ) : null;
}
export {
  InputError as I
};
