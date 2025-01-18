import { j as jsxRuntimeExports, U as Ue, r as reactExports, V } from "../ssr.js";
import { A as ApplicationLogo } from "./ApplicationLogo-CiGjkOmI.js";
const AccountDropdownButton = ({ user }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown position-relative user-profile-dropdown", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary p-0 round-44 overflow-hidden rounded-circle d-flex align-items-center justify-content-center", href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-100 h-100", src: user.avatar, alt: "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "dropdown-menu dropdown-menu-end p-3", style: {
      width: "max-content"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-bottom pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0", children: "User Profile" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-6 my-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-circle overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: "", width: "50", height: "50" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0", children: user.full_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 fs-2 d-flex align-items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-mail-dark.svg", alt: "", width: "14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-muted", href: "mailto:support@urpuppy.com", children: user.email })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, className: "dropdown-item rounded py-2", href: "/profile", children: "Settings" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "My Subscription"
      }, children: "My Subscriptions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "Saved Search"
      }, children: "Saved Search" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "My Puppies"
      }, children: "My Puppies" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          method: "post",
          as: "button",
          href: "/logout",
          className: "btn btn-primary d-block w-100",
          children: "Logout"
        }
      ) })
    ] })
  ] });
};
const Navbarv2 = ({ type }) => {
  const [isSticky, setIsSticky] = reactExports.useState(false);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("offcanvasSidebar");
      if (sidebar) {
        import("./bootstrap.esm-A9rKVEe6.js").then(({ Offcanvas }) => {
          Offcanvas.getOrCreateInstance(sidebar);
        });
      }
    }
  }, []);
  const toggleOffcanvas = () => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("offcanvasSidebar");
      if (!sidebar) {
        return;
      }
      setIsOffcanvasVisible((prev) => !prev);
    }
  };
  const closeOffcanvas = () => {
    setIsOffcanvasVisible(false);
  };
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSticky(window.scrollY > 50);
    }
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const user = V().props.auth.user;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `main-header ${type == "secondary" ? "information-header" : ""} ${isSticky ? "sticky" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "navbar navbar-expand-xl py-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLogo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-xl-none d-flex align-items-center gap-3", children: [
        user && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "position-relative me-1 d-xl-none", href: "/favorites", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-heart-white.svg", alt: "" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccountDropdownButton, { user }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "d-inline-block d-xl-none nav-toggler text-decoration-none fs-9 text-white",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#offcanvasSidebar",
            "aria-controls": "offcanvasSidebar",
            onClick: toggleOffcanvas,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "ti ti-menu-2" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "collapse navbar-collapse justify-content-between", id: "menu-scroll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "navbar-nav align-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item nav-item-line ms-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link", href: "/puppies", children: "Puppies for Sale" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link ", href: "/breeds", children: "Breeds" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "nav-link", href: "/breeders", children: "Breeders" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link active", "aria-current": "page", href: "/seller/create", children: "+ List Ur Puppy" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center gap-6", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "position-relative me-1", href: "/favorites", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-heart-white.svg", alt: "" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccountDropdownButton, { user })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !user && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { preserveScroll: false, prefetch: true, className: "btn btn-white bg-white text-dark", href: "/login", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { preserveScroll: false, prefetch: true, className: "btn btn-primary d-flex align-items-center gap-2", href: "/register", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-user.svg", alt: "" }),
            " Sign Up"
          ] })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `offcanvas offcanvas-start `,
        tabIndex: -1,
        id: "offcanvasSidebar",
        "aria-labelledby": "offcanvasExampleLabel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offcanvas-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "navbar-brand py-0 me-0", href: "index.html", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.svg", alt: "" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "btn-close shadow-none text-reset ms-auto btn-close-white",
                "data-bs-dismiss": "offcanvas",
                "aria-label": "Close",
                onClick: closeOffcanvas
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offcanvas-body pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "navbar-nav", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link text-white", href: "/puppies", children: "Puppies for Sale" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link text-white", href: "/breeds", children: "Breeds" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { className: "nav-link text-white", href: "/breeders", children: "Breeders" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "5m", className: "nav-link text-white", href: "/seller/create", children: "+ List Ur Puppy" }) })
            ] }),
            !user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center flex-column gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { preserveScroll: false, prefetch: true, cacheFor: "5m", className: "btn btn-white bg-white text-dark w-100", href: "/login", children: "Login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { preserveScroll: false, prefetch: true, cacheFor: "5m", className: "btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100", href: "/register", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-user.svg", alt: "" }),
                " Sign Up"
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  Navbarv2 as N
};
