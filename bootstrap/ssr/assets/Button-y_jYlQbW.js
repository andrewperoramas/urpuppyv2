import { j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { c as clsx } from "./clsx-DgYk2OaC.js";
function cn(...inputs) {
  return clsx(inputs);
}
const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
const Button = ({ type = "a", className, size = "md", variant, ...props }) => {
  return type == "button" ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cn(buttonVariants({ variant, size }), className), ...props, children: props.children }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: props.href, as: type, className: cn(buttonVariants({ variant, size }), className), children: props.children });
};
const buttonVariants = cva(
  // Base styles shared by all variants
  "",
  {
    variants: {
      variant: {
        white: "btn btn-white text-dark bg-white",
        primary: "btn btn-primary ",
        secondary: "btn btn-secondary text-white font-redhat hover:opacity-75 focus:bg-gray-700 active:bg-secondary"
      },
      size: {
        sm: "text-[0.7em] px-2 py-1 font-semibold",
        md: "text-[0.8em] px-3 py-2 font-semibold rounded-full",
        lg: "text-[0.9em] px-3 py-2 font-semibold",
        full: "w-100"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
export {
  Button as B
};
