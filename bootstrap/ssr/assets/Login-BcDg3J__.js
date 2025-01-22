import { j as jsxRuntimeExports, m as me, K, r as reactExports, L as Le, $ as $e } from "../ssr.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { P as PuppyCard } from "./Card-DpGc5G6K.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { B as Button } from "./Button-y_jYlQbW.js";
import { k as kt } from "./index-BgmffWW1.js";
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
import "./clsx-DgYk2OaC.js";
function Checkbox({
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "form-check-input primary" + className
    }
  );
}
function Login({
  status,
  canResetPassword,
  puppy
}) {
  const { data, setData, post, processing, errors, reset } = me({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post("/login", {
      onFinish: () => reset("password")
    });
  };
  const { flash } = K().props;
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.success) {
      kt.success(
        flash.message.success,
        {
          duration: 3e3
        }
      );
    }
  }, [flash]);
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.error) {
      kt.error(flash.message.error, {
        duration: 3e3
      });
    }
  }, [flash]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Log in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "page-wrapper login-bg position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-7 order-last order-lg-first", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "login-info d-flex flex-column justify-content-center h-100 py-7 py-lg-0 px-3 ps-lg-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Let's Login" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 pb-2", children: "Explore the best dog breeds! Log in now to discover more." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "email", value: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextInput,
                  {
                    id: "email",
                    type: "email",
                    name: "email",
                    value: data.email,
                    autoComplete: "username",
                    isFocused: true,
                    onChange: (e) => setData("email", e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "password", value: "Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TextInput,
                  {
                    id: "password",
                    type: "password",
                    name: "password",
                    value: data.password,
                    autoComplete: "current-password",
                    onChange: (e) => setData("password", e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-check", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      name: "remember",
                      className: "form-check-input primary",
                      checked: data.remember,
                      onChange: (e) => setData("remember", e.target.checked)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-check-label text-dark fs-3", children: "Remember me" })
                ] }),
                canResetPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  $e,
                  {
                    href: "/forgot-password",
                    className: "text-dark fs-3 fw-semibold text-decoration-underline",
                    children: "Forgot your password?"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { href: "", type: "button", className: "btn btn-primary w-100 mb-3", children: "Login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-4 mb-0", children: "I don’t have an account?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "text-dark fw-semibold text-decoration-underline ms-2", href: "/register", children: "Create Account" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-5 order-first order-lg-last", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "login-right-bg position-relative overflow-hidden h-100 d-flex align-items-center justify-content-center p-4 pt-10 py-lg-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 pb-0 position-absolute top-0 end-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, cacheFor: "5m", href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/logos/logo-white.svg", alt: "" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card login-right-card mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "puppy-spotlight-item rounded-1 overflow-hidden", puppy }) }) })
              ]
            }
          ) })
        ] }) }) })
      }
    )
  ] });
}
export {
  Login as default
};
