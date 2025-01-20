import { m as me, j as jsxRuntimeExports } from "../ssr.js";
import { B as Breadcrumb } from "./Breadcrumb-BSuKYpeP.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { S as SemiHeading, a as SelectInput, D as DateInput, Y as YesOrNoRadioInput, F as FileUpload } from "./DateInput-weHZC_Br.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
import { S as StateCityDropdown } from "./StateCityDropdown-BKRcIAe7.js";
import { H as Heading } from "./Heading-BovzgIYZ.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
import { L as Layout } from "./Layout-B4wBRyB1.js";
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
import "./tslib.es6-iWu3F_1J.js";
import "./index-DAt-2Nmr.js";
import "./clsx-DgYk2OaC.js";
import "./floating-ui.dom-D9vmQZx1.js";
import "./Navbarv2-C27t1POb.js";
import "./ApplicationLogo-BTI8O77G.js";
import "./index-BgmffWW1.js";
const BreederRegistrationForm = ({ breeds }) => {
  const { data, setData, post, errors } = me({
    health_certificate: "yes",
    vaccinated: "yes",
    vet_exam: "yes",
    has_usda_registration: "no",
    about_company: "",
    established_date: "",
    phone: "",
    kennel_name: "",
    fullname: "",
    email: "",
    travel_ready: "yes",
    delivery_included: "yes",
    breeds: [],
    city_id: null,
    state_id: null,
    zip_code: "",
    are_you_a_breeder: "yes",
    gallery: [],
    company_logo: null,
    videos: []
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/breeders");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-details border-bottom mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-5 mb-3 pb-1", children: "Contact Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("fullname", e.target.value) }),
          errors.fullname && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.fullname })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "contact-details border-bottom mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Kennel Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("kennel_name", e.target.value) }),
          errors.kennel_name && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.kennel_name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Upload a Company Logo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { className: " file-upload-wrapper", type: "file", onChange: (e) => setData("company_logo", e.target.files[0]) }),
          errors.company_logo && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.company_logo })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "contact-details border-bottom mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { type: "email", onChange: (e) => setData("email", e.target.value) }),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, value: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("phone", e.target.value) }),
          errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.phone })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "location-details border-bottom mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SemiHeading, { title: "Location Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StateCityDropdown, { errors, setFormData: setData })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "location-details border-bottom mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Breed Type ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fs-1", children: " ( Max 4 Type ) " })
          ] }), isRequired: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectInput, { name: "breeds", setData, multiple: true, options: breeds }),
          errors.breeds && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.breeds })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "When did you start your business?", isRequired: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DateInput, { name: "established_date", setData, value: data.established_date }),
          errors.established_date && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.established_date })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { value: "About Us", isRequired: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { onChange: (e) => setData("about_company", e.target.value) }),
          errors.about_company && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.about_company })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "why-stand-out border-bottom mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-lg-4 col-xxl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(YesOrNoRadioInput, { title: "USDA Registered", value: data.has_usda_registration, name: "has_usda_registration", setData }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-details", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg-6 mb-4 mb-lg-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-5 mb-3 pb-1", children: "Upload a Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FileUpload,
            {
              errors,
              setData: (name, files) => setData("gallery", files),
              name: "gallery",
              required: true
            }
          ),
          errors.gallery && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.gallery })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-5 mb-3 pb-1", children: "Upload a Video" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FileUpload,
            {
              name: "videos",
              setData: (name, files) => setData("videos", files),
              required: true
            }
          ),
          errors.videos && /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.videos })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn btn-primary d-flex align-items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "../images/svgs/icon-arrow-right.svg",
          alt: ""
        }
      ),
      "Submit Registration"
    ] })
  ] });
};
const Registration = ({ breeds }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { navType: "secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Registration" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "information pt-4 pb-8 pb-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { links: [
        {
          label: "Registration",
          link: "/register"
        }
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { title: "Breeder Registration", description: "Create your Breeder profile to connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BreederRegistrationForm, { breeds })
      ] })
    ] }) }) })
  ] });
};
export {
  Registration as default
};
