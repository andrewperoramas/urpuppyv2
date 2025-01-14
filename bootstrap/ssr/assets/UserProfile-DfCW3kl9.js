import { V, a as ae, j as jsxRuntimeExports } from "../ssr.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import AvatarInput from "./UserAvatar-BVv4_fus.js";
import { B as Button } from "./Button-CK40ntNT.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
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
const UserProfile = () => {
  const user = V().props.auth.user;
  console.log(user);
  alert("gagi");
  const { patch, data, setData, errors } = ae({
    first_name: (user == null ? void 0 : user.first_name) ?? "",
    last_name: (user == null ? void 0 : user.last_name) ?? "",
    email: (user == null ? void 0 : user.email) ?? "",
    avatar: null,
    current_password: "",
    new_password: "",
    new_password_confirmation: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    patch("/profile");
  };
  console.log(data);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: "", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Profile Picture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarInput,
          {
            onChange: (e) => setData((prevData) => ({
              ...prevData,
              avatar: e.target.files[0]
            }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Account Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "First Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "First Name", onChange: (e) => setData("first_name", e.target.value), value: data.first_name }),
            errors.first_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.first_name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Last Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "Last Name", onChange: (e) => setData("last_name", e.target.value), value: data.last_name }),
            errors.last_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.last_name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { type: "email", onChange: (e) => setData("email", e.target.value), placeholder: "Email", value: data.email }),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Change Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Current Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("current_password", e.target.value), type: "password", placeholder: "**********" }),
            errors.current_password && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.current_password })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("new_password", e.target.value), type: "password", placeholder: "**********" }),
            errors.new_password && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.new_password })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Confirm Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("new_password_confirmation", e.target.value), type: "password", placeholder: "**********" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 pb-1 fs-7", children: "Manage Account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-md-flex align-items-center justify-content-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 mb-md-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 fs-4 font-work-sans", children: "Delete Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "Permanently delete your urpuppy.com account." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-outline-extralight border btn-white text-dark", href: "#", children: "Delete Account" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-3 pb-1 fs-7", children: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-md-flex align-items-center justify-content-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 mb-md-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0 fs-4 font-work-sans", children: "Account Notifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: "We will send you notifications to inform you of any updates and/or changes as events occur for you" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-check form-switch", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "form-check-input",
              type: "checkbox",
              role: "switch",
              id: "flexSwitchCheckChecked",
              checked: true
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { href: "#", type: "button", variant: "primary", children: "Update Settings" })
  ] });
};
export {
  UserProfile as default
};
