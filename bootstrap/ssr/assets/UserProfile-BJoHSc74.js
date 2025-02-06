import { r as reactExports, m as me, j as jsxRuntimeExports, K } from "../ssr.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import AvatarInput from "./UserAvatar-C-GeSlva.js";
import { B as Button } from "./Button-CgnQqdf2.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
import { P as PhoneNumberInput, S as StateCityDropdown, D as DateInput } from "./PhoneNumberInput-DuItPaFr.js";
import { I as IconInput } from "./IconInput-s68mzIOB.js";
import { M as Modal } from "./Modal-A4e15-Yc.js";
import { A as AsyncPaginate } from "./index-CVBuDtJP.js";
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
import "./index-DJdchkJA.js";
import "./index-CbZhI6hK.js";
import "./index-St0ZXb81.js";
import "./floating-ui.dom-D9vmQZx1.js";
function DeleteAccountModal() {
  const [show, setShow] = reactExports.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { data, setData, errors, delete: destroy } = me({
    password: ""
  });
  const handleDeleteAccount = (e) => {
    e.preventDefault();
    destroy("/profile", {
      preserveScroll: true,
      preserveState: true
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { onClick: handleShow, href: "#", className: "btn btn-outline-extralight border btn-white text-dark", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: "Delete Account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show, onHide: handleClose, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Body, { className: "py-8 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-center text-primary", children: "Delete your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("form", { action: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          (errors == null ? void 0 : errors.password) && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors == null ? void 0 : errors.password }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { type: "password", onChange: (e) => setData("password", e.target.value), placeholder: "**" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { className: "d-flex justify-content-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleDeleteAccount, className: "btn btn-danger border btn-white text-white", children: "Confirm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { onClick: handleClose, href: "#", className: "btn btn-outline-extralight border btn-white text-dark", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: "Cancel" })
      ] })
    ] })
  ] }) });
}
const StateDropdown = ({ defaultValue, onChange, ...props }) => {
  const [value, setValue] = reactExports.useState(defaultValue);
  const fetchStates = async (search, loadedOptions, { page }) => {
    const response = await fetch(
      `/api/puppy/states?search=${search}&page=${page}`
    );
    const data = await response.json();
    return {
      options: data.data,
      hasMore: data.current_page !== data.last_page,
      additional: { page: data.current_page + 1 }
    };
  };
  const handleStateChange = (state) => {
    setValue(state);
    onChange == null ? void 0 : onChange(state.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AsyncPaginate,
    {
      loadOptions: fetchStates,
      onChange: handleStateChange,
      styles: {
        option: (baseStyles, state) => ({
          backgroundColor: state.isSelected ? "var(--bs-primary)" : state.isFocused ? "#f0f0f0" : "white",
          padding: "6px 10px"
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: state.isFocused ? "1px solid var(--bs-primary)" : "1px solid rgba(8, 49, 78, 0.2)",
          borderRadius: "100px",
          // border: "1p,x solid rgb(209 213 219 / 1)",
          outlineColor: "red",
          boxShadow: "none",
          "&:hover": {
            border: "auto"
          },
          padding: "3px 4px"
        })
      },
      ...props,
      className: "mb-4",
      value,
      additional: { page: 1 }
    }
  );
};
const UserProfile = () => {
  var _a, _b;
  const user = K().props.auth.user;
  const { post, data, setData, errors } = me({
    first_name: (user == null ? void 0 : user.first_name) ?? "",
    last_name: (user == null ? void 0 : user.last_name) ?? "",
    email: (user == null ? void 0 : user.email) ?? "",
    phone: (user == null ? void 0 : user.phone) ?? "",
    avatar: null,
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
    state: (user == null ? void 0 : user.state) ?? null,
    city: (user == null ? void 0 : user.city) ?? null,
    zip_code: user.zip_code ?? "",
    social_fb: (user == null ? void 0 : user.social_fb) ?? "",
    social_ig: (user == null ? void 0 : user.social_ig) ?? "",
    social_tiktok: (user == null ? void 0 : user.social_tiktok) ?? "",
    social_x: (user == null ? void 0 : user.social_x) ?? "",
    enable_notification: user.enable_notification,
    kennel_name: user.kennel_name ?? "",
    company_zip_code: user.company_zip_code ?? "",
    company_state: user.company_state ?? null,
    company_city: user.company_city ?? null,
    company_phone: user.company_phone ?? null,
    company_address: user.company_address ?? null,
    company_established_on: user.company_established_on ?? null,
    company_logo: user.company_logo ?? "",
    company_name: user.company_name ?? null,
    company_email_address: user.company_email_address ?? null,
    company_about: user.company_about ?? null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/profile");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { action: "", onSubmit: handleSubmit, encType: "multipart/form-data", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { disabled: true, type: "email", onChange: (e) => setData("email", e.target.value), placeholder: "Email", value: data.email }),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PhoneNumberInput,
              {
                value: data.phone,
                onChange: (e) => setData("phone", e),
                className: "phone-input form-control"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.phone })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Location Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StateCityDropdown, { formData: data, errors, setFormData: setData }) })
      ] }),
      (user == null ? void 0 : user.breeder_plan) && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Company Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Company Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row align-items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-2", children: data.company_logo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  style: {
                    height: "100px",
                    width: "100px"
                  },
                  className: " object-fit-cover  rounded-circle",
                  src: typeof data.company_logo === "string" ? data.company_logo : URL.createObjectURL(data.company_logo),
                  alt: "Company Logo"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { className: " file-upload-wrapper ", type: "file", onChange: (e) => setData("company_logo", e.target.files[0]) }) })
            ] }),
            errors.company_logo && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_logo })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "Full Name", onChange: (e) => setData("company_name", e.target.value), value: data.company_name ?? "" }),
            errors.company_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Kennel Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "Kennel Name", onChange: (e) => setData("kennel_name", e.target.value), value: data.kennel_name }),
            errors.kennel_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.kennel_name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Company Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "Company Email Address", onChange: (e) => setData("company_email_address", e.target.value), value: data.company_email_address ?? "" }),
            errors.company_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_email_address })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Company Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              PhoneNumberInput,
              {
                value: data.company_phone,
                onChange: (e) => setData("company_phone", e),
                className: "phone-input form-control"
              }
            ),
            errors.company_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_phone })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "Company Established on", isRequired: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DateInput, { name: "company_established_on", setData, value: data.company_established_on }),
            errors.company_established_on && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_established_on })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { value: data.company_address ?? "", onChange: (e) => setData("company_address", e.target.value) }),
            errors.company_address && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_address })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { value: data.company_city ?? "", onChange: (e) => setData("company_city", e.target.value) }),
            errors.company_address && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_city })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StateDropdown,
              {
                defaultValue: {
                  value: (_a = data == null ? void 0 : data.company_state) == null ? void 0 : _a.id,
                  label: (_b = data == null ? void 0 : data.company_state) == null ? void 0 : _b.name
                },
                onChange: (e) => setData("company_state", e)
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Zip Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { value: data.company_zip_code ?? "", onChange: (e) => setData("company_zip_code", e.target.value) }),
            errors.company_address && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_zip_code })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "About" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { placeholder: "About", onChange: (e) => setData("company_about", e.target.value), value: data.company_about ?? "" }),
            errors.company_about && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_about })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 mb-4 border-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-4 fs-7", children: "Social Profiles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled d-flex align-items-center gap-6 social-icon mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconInput, { value: data.social_fb, onChange: (e) => setData("social_fb", e.target.value), icon: "/images/svgs/icon-facebook-dark.svg" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconInput, { value: data.social_x, onChange: (e) => setData("social_x", e.target.value), icon: "/images/svgs/icon-twitter-dark.svg" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconInput, { value: data.social_tiktok, onChange: (e) => setData("social_tiktok", e.target.value), icon: "/images/svgs/icon-tiktok-dark.svg" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconInput, { value: data.social_ig, onChange: (e) => setData("social_ig", e.target.value), icon: "/images/svgs/icon-instagram-dark.svg" }) })
        ] }) }) })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteAccountModal, {})
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
              onChange: (e) => setData("enable_notification", e.target.checked),
              className: "form-check-input",
              type: "checkbox",
              role: "switch",
              id: "flexSwitchCheckChecked",
              checked: data.enable_notification
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
