import { V, j as jsxRuntimeExports, U as Ue } from "../ssr.js";
const FavoriteButton = ({ puppyId, sellerId, isFavorite }) => {
  var _a, _b;
  const user = (_b = (_a = V().props) == null ? void 0 : _a.auth) == null ? void 0 : _b.user;
  return (user == null ? void 0 : user.id) != sellerId && /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ue,
    {
      method: "patch",
      preserveScroll: true,
      href: `/favorites/${puppyId}`,
      "data-bs-toggle": "tooltip",
      "data-bs-title": "Add To Favourite",
      className: "bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle",
      children: isFavorite ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-heart-red.svg", alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-heart.svg", alt: "" })
    }
  );
};
const PuppyCard = ({ puppy, className = "col-md-6 col-lg-4 col-xl-3 mb-4", height = "225px" }) => {
  var _a;
  if (!puppy) {
    return null;
  }
  const user = V().props.auth.user;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "puppy-spotlight-item rounded-1 overflow-hidden",
      "data-aos": "fade-up",
      "data-aos-delay": "600",
      "data-aos-duration": "1000",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { prefetch: true, preserveScroll: false, href: `/puppies/${puppy.slug}`, className: "puppy-spotlight-img position-relative overflow-hidden d-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: puppy.image, alt: "", className: "w-100 object-fit-cover product-card-responsive-height" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "d-flex align-items-center justify-content-between position-absolute top-0 start-0 w-100 p-3 pb-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-block" }),
                user && /* @__PURE__ */ jsxRuntimeExports.jsx(FavoriteButton, { sellerId: puppy.seller.id, puppyId: puppy.id, isFavorite: puppy.is_favorite })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "puppy-spotlight-details", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-2 mb-1 text-uppercase fw-medium", children: puppy.breeds.map((breed) => breed.name).join(", ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-6 font-work-sans", children: puppy.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-map-pin.svg", alt: "", width: "20", height: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 ", children: (_a = puppy.seller) == null ? void 0 : _a.address })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-calendar.svg", alt: "", width: "20", height: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: puppy.age })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-female.svg", alt: "", width: "20", height: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: puppy.gender })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-eye.svg", alt: "", width: "20", height: "20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
                  puppy.view_count,
                  " Views"
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-top d-flex align-items-center justify-content-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fs-5 font-work-sans", children: puppy.formatted_price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { preserveScroll: false, href: `/puppies/${puppy.slug}`, className: "btn btn-primary d-flex align-items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-paws.svg", alt: "" }),
              "View more"
            ] })
          ] })
        ] })
      ]
    }
  ) }) });
};
export {
  FavoriteButton as F,
  PuppyCard as P
};
