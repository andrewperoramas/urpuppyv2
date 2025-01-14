import { j as jsxRuntimeExports, U as Ue, h as hr, r as reactExports } from "../ssr.js";
import { L as Layout } from "./Layout-L7XXg1u_.js";
import SubscriptionCard from "./SubscriptionCard-PLfyOsUh.js";
import UserProfile from "./UserProfile-cMQA9lch.js";
import MyPuppies from "./MyPuppies-DtVnjQGY.js";
import { B as Button } from "./Button-CK40ntNT.js";
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
import "./Navbarv2-BbKDNqWY.js";
import "./ApplicationLogo-CiGjkOmI.js";
import "./InputLabel-DAgP54zY.js";
import "./TextInput-CTPfMhdJ.js";
import "./UserAvatar-BVv4_fus.js";
import "./InputError-BrGvvBAw.js";
import "./clsx-DgYk2OaC.js";
import "./Card-BAmftY3V.js";
const ListPill = ({ name, href, logo, tab }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", role: "presentation", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: `nav-link d-flex align-items-center gap-3 rounded-pill d-block w-100 fw-medium text-start ${name === tab ? "active" : ""} `,
      "data-bs-toggle": "pill",
      "data-bs-target": href,
      type: "button",
      role: "tab",
      "aria-controls": href,
      "aria-selected": "false",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "",
            width: "20",
            height: "20"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-none d-md-block", children: name }),
        " "
      ]
    }
  ) });
};
const SavedSearchCard = ({ saved_search }) => {
  console.log(saved_search.payload.filter);
  const handleSearch = () => {
    const payload = Object.entries(saved_search.payload.filter).map(([key, obj]) => ({
      [key]: (obj == null ? void 0 : obj.value) ?? obj
    }));
    console.log(payload);
    const flattenedPayload = payload.reduce((acc, current) => {
      const [key, value] = Object.entries(current)[0];
      acc[key] = value;
      return acc;
    }, {});
    hr.visit(`/puppies`, {
      data: { filter: flattenedPayload },
      only: [
        "puppies",
        "breed_filter_list",
        "state_filter_list"
      ],
      method: "get",
      preserveState: true
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-4", children: saved_search.created_at }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: handleSearch, className: "btn btn-primary fs-2", href: "#", children: "View Search" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "btn btn-outline-extralight border btn-white text-dark fs-2", href: `/saved-search/${saved_search.id}`, children: "Delete" })
    ] })
  ] }) });
};
const NavigationSettings = [
  { name: "Account Settings", href: "#pills-account-settings", id: "pills-account-settings-tab", logo: "../images/svgs/icon-user-dark.svg" },
  { name: "My Subscription", href: "#pills-my-subscription", id: "pills-my-subscription-tab", logo: "../images/svgs/icon-card.svg" },
  { name: "Saved Search", href: "#pills-saved-search", id: "pills-saved-search-tab", logo: "../images/svgs/icon-bookmarks.svg" },
  { name: "My Puppies", href: "#pills-my-puppies", id: "pills-my-puppies-tab", logo: "../images/svgs/icon-paws-dark.svg" }
];
function Edit({
  mustVerifyEmail,
  status,
  plan,
  breeder_plan,
  puppies,
  saved_searches,
  plan_next_billing,
  plan_cancel_at,
  breeder_next_billing,
  breeder_cancel_at,
  tab
}) {
  const [currentTab, setCurrentTab] = reactExports.useState(tab ?? "Account Settings");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Layout,
    {
      navType: "secondary",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-wrapper position-relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "account-settings py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ul",
          {
            className: "nav nav-pills justify-content-center flex-lg-column gap-2 mb-4 mb-lg-0",
            id: "pills-tab",
            role: "tablist",
            children: NavigationSettings.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListPill, { tab, name: item.name, logo: item.logo, href: item.href }, index))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab-content", id: "pills-tabContent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: ` tab-pane fade  ${currentTab == "Account Settings" ? "show active" : ""} `,
              id: "pills-account-settings",
              role: "tabpanel",
              "aria-labelledby": "pills-account-settings-tab",
              tabIndex: 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserProfile, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: ` tab-pane fade ${currentTab == "My Subscription" ? "show active" : ""} `,
              id: "pills-my-subscription",
              role: "tabpanel",
              "aria-labelledby": "pills-my-subscription-tab",
              tabIndex: 0,
              children: [
                plan ? /* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionCard, { next_billing: plan_next_billing, cancel_at: plan_cancel_at, plan }) : "",
                breeder_plan && /* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionCard, { next_billing: breeder_next_billing, cancel_at: breeder_cancel_at, plan: breeder_plan })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: ` tab-pane fade ${currentTab == "Saved Search" ? "show active" : ""} `,
              id: "pills-saved-search",
              role: "tabpanel",
              "aria-labelledby": "pills-saved-search-tab",
              tabIndex: 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: saved_searches.length > 0 && saved_searches.map((saved_search, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-xx-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SavedSearchCard, { saved_search }) })) }) }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: ` tab-pane fade ${currentTab == "My Puppies" ? "show active" : ""} `,
              id: "pills-my-puppies",
              role: "tabpanel",
              "aria-labelledby": "pills-my-puppies-tab",
              tabIndex: 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-body pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyPuppies, { puppies }) }) })
            }
          )
        ] }) })
      ] }) }) }) })
    }
  );
}
export {
  Edit as default
};
