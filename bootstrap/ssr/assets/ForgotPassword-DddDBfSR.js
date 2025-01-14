import { a as ae, j as jsxRuntimeExports, M as Me } from "../ssr.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { B as Button } from "./Button-CK40ntNT.js";
import { L as Layout } from "./Layout-L7XXg1u_.js";
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
import "./Navbarv2-BbKDNqWY.js";
import "./ApplicationLogo-CiGjkOmI.js";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = ae({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { navType: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "information pt-4 pb-8 pb-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { title: "Forgot Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: status }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "col-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", href: "#", className: "ms-4", children: "Email Password Reset Link" }) })
    ] })
  ] }) }) }) });
}
export {
  ForgotPassword as default
};
