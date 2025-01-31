import { m as me, j as jsxRuntimeExports, L as Le } from "../ssr.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { B as Button } from "./Button-DC7MyolU.js";
import { G as Guest } from "./GuestLayout-YqxqRnoD.js";
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
import "./Card-DIW6Rm1f.js";
import "./Tooltip-DenE-Fw-.js";
import "./floating-ui.dom-D9vmQZx1.js";
import "./index-DbhDZzck.js";
import "./index-BgmffWW1.js";
function ResetPassword({
  token,
  email,
  puppy
}) {
  const { data, setData, post, processing, errors, reset } = me({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/reset-password", {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Guest, { puppy, header: "Reset Password", subHeader: "Reset Password", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Reset Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            autoComplete: "username",
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            autoComplete: "new-password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputLabel,
          {
            htmlFor: "password_confirmation",
            value: "Confirm Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            type: "password",
            name: "password_confirmation",
            value: data.password_confirmation,
            autoComplete: "new-password",
            onChange: (e) => setData("password_confirmation", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputError,
          {
            message: errors.password_confirmation,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { href: "", type: "button", className: "btn mt-3 btn-primary w-100 mb-3", children: "Reset Password" })
    ] })
  ] });
}
export {
  ResetPassword as default
};
