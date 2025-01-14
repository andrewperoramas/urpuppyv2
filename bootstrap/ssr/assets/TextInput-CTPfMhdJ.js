import { r as reactExports, j as jsxRuntimeExports } from "../ssr.js";
const TextInput = reactExports.forwardRef(function TextInput2({
  type = "text",
  className = "",
  isFocused = false,
  ...props
}, ref) {
  const localRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  reactExports.useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, [isFocused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      type,
      className: "form-control" + className,
      ref: localRef
    }
  );
});
export {
  TextInput as T
};
