import { j as jsxRuntimeExports, r as reactExports } from "../ssr.js";
import { T as Tooltip } from "./Tooltip-DenE-Fw-.js";
import { A as Avatar } from "./Layout-CLsZFRNi.js";
const SocialMediaButtons = ({ igUrl, xUrl, fbUrl, tiktokUrl, webUrl }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled d-flex align-items-center justify-content-center gap-6 social-icon mb-0", children: [
    fbUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        tooltipMessage: "Facebook",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            target: "_blank",
            href: fbUrl,
            className: "border d-flex align-items-center justify-content-center round-36 rounded-circle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-facebook-dark.svg", alt: "" })
          }
        ),
        id: `fburl`
      }
    ) }),
    xUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        tooltipMessage: "X",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            target: "_blank",
            href: xUrl,
            "data-bs-toggle": "tooltip",
            "data-bs-title": "Twitter",
            className: "border d-flex align-items-center justify-content-center round-36 rounded-circle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-twitter-dark.svg", alt: "" })
          }
        ),
        id: "xurl"
      }
    ) }),
    tiktokUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        tooltipMessage: "Tiktok",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            target: "_blank",
            href: tiktokUrl,
            "data-bs-toggle": "tooltip",
            "data-bs-title": "Tiktok",
            className: "border d-flex align-items-center justify-content-center round-36 rounded-circle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-tiktok-dark.svg", alt: "" })
          }
        ),
        id: "tiktokurl"
      }
    ) }),
    igUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        tooltipMessage: "Instagram",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            target: "_blank",
            href: igUrl,
            "data-bs-toggle": "tooltip",
            "data-bs-title": "Instagram",
            className: "border d-flex align-items-center justify-content-center round-36 rounded-circle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-instagram-dark.svg", alt: "" })
          }
        ),
        id: "igurl"
      }
    ) }),
    webUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tooltip,
      {
        tooltipMessage: "Website",
        content: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            target: "_blank",
            href: webUrl,
            "data-bs-toggle": "tooltip",
            "data-bs-title": "Website",
            className: "border d-flex align-items-center justify-content-center round-36 rounded-circle",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-globe-dark.svg", alt: "" })
          }
        ),
        id: "weburl"
      }
    ) })
  ] });
};
const SellerCard = ({
  seller
}) => {
  const [emailVisible, setEmailVisible] = reactExports.useState(false);
  const [phoneVisible, setPhoneVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center position-relative mb-6 mx-auto d-table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { image_url: seller.avatar }),
      seller.is_breeder && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "position-absolute bottom-0 end-0 d-block round-24 rounded-circle bg-primary d-flex align-items-center justify-content-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-paws.svg", alt: "", width: "16", height: "16" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "fs-5 text-center", children: seller.full_name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-center gap-2 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-map-pin.svg", alt: "", width: "20", height: "20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 fs-2", children: seller.address })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-user-dark.svg", alt: "", width: "14", height: "14" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 fs-2", children: [
        "Member since: ",
        seller.member_since
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      !emailVisible ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          onClick: () => setEmailVisible(true),
          style: { userSelect: "text" },
          className: "btn btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-6",
          href: "#",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-mail-dark.svg", alt: "" }),
            "Show Email Address"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-6", children: seller.email }),
      !phoneVisible ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          onClick: () => setPhoneVisible(true),
          className: "btn btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-4",
          href: "#",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-call.svg", alt: "" }),
            "Show Phone Number"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-6", children: seller.phone })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: "Follow me:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SocialMediaButtons,
      {
        igUrl: seller == null ? void 0 : seller.social_ig,
        xUrl: seller.social_x,
        fbUrl: seller.social_fb,
        tiktokUrl: seller.social_tiktok,
        webUrl: seller.website
      }
    )
  ] }) });
};
export {
  SellerCard as S
};
