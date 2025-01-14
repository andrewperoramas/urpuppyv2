import { a as ae, j as jsxRuntimeExports, M as Me } from "../ssr.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { P as PrimaryButton } from "./PrimaryButton-qr4fO_6y.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { G as Guest } from "./GuestLayout-CbiomB2D.js";
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
import "./ApplicationLogo-CiGjkOmI.js";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = ae({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Guest, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { title: "Confirm Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm text-gray-600", children: "This is a secure area of the application. Please confirm your password before continuing." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Confirm" }) })
    ] })
  ] });
}
export {
  ConfirmPassword as default
};
