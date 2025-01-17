import { a as ae, j as jsxRuntimeExports, M as Me, U as Ue } from "../ssr.js";
import { B as Button } from "./Button-CK40ntNT.js";
import { L as Layout } from "./Layout-D8cvxuXM.js";
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
import "./Navbarv2-CUQKrkW6.js";
import "./ApplicationLogo-CiGjkOmI.js";
function VerifyEmail({ status }) {
  const { post, processing } = ae({});
  const submit = (e) => {
    e.preventDefault();
    post("/email/verification-notification");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { navType: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "information pt-4 pb-8 pb-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { title: "Email Verification" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm text-gray-600", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", href: "", children: "Resend Verification Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          href: "/logout",
          method: "post",
          as: "button",
          className: "btn btn-secondary",
          children: "Log Out"
        }
      )
    ] }) })
  ] }) }) }) });
}
export {
  VerifyEmail as default
};
