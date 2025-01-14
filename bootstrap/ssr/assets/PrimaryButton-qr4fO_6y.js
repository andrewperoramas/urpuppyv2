import { j as jsxRuntimeExports } from "../ssr.js";
function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ...props,
      className: `${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
export {
  PrimaryButton as P
};
