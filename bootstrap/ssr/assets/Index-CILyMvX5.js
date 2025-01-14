import { j as jsxRuntimeExports, b as U, U as Ue, r as reactExports, M as Me } from "../ssr.js";
import Banner from "./Banner-Cyz5X960.js";
import { S as Swiper, a as SwiperSlide } from "./create-element-if-not-defined-BZkVMZWb.js";
import { P as PuppyCard, F as FavoriteButton } from "./Card-BAmftY3V.js";
import { I as ImageSlider, S as ShareButton } from "./ShareButton-DAMf086x.js";
import { B as BreederCard } from "./BreederCard-D7TwvD5z.js";
import { L as Layout } from "./Layout-L7XXg1u_.js";
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
import "./BreedFilter-DBu7OSqh.js";
import "./StateFilter-BjZaxTix.js";
import "./index-Cu3W0YeZ.js";
import "net";
import "./Navbarv2-BbKDNqWY.js";
import "./ApplicationLogo-CiGjkOmI.js";
const Slider = ({ children, slidesPerView = 1 }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Swiper,
    {
      spaceBetween: 10,
      slidesPerView,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1368: {
          slidesPerView: 5,
          spaceBetween: 40
        }
      },
      children: U.Children.map(children, (child, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: child }, index))
    }
  ) });
};
const BreedCard = ({ breed }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item", "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "1000", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "featured-breeds-item", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { prefetch: true, cacheFor: "3m", href: `/breeds/${breed.slug}`, className: "featured-breeds-img mb-3 d-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: breed.image, alt: "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Ue,
      {
        prefetch: true,
        cacheFor: "3m",
        href: `/breeds/${breed.slug}`,
        className: "btn btn-outline-extralight text-dark d-inline-flex align-items-center gap-2",
        children: [
          breed.name,
          " for Sale",
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-chev-right.svg", alt: "", className: "w-auto", width: "6", height: "12" })
        ]
      }
    ) })
  ] }) });
};
const FeaturedBreeds = ({ featured_breeds }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "     ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "featured-breeds py-7 py-md-9 mb-xl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Featured Breeds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Ue,
          {
            className: "btn btn-outline-extralight btn-white text-dark d-none d-md-flex align-items-center gap-2",
            href: "/breeds",
            "data-aos": "fade-left",
            "data-aos-delay": "100",
            "data-aos-duration": "1000",
            children: "View More Breeds"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "featured-breeds-slider", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "owl-carousel owl-theme", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { slidesPerView: 1, children: featured_breeds.map((breed) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreedCard, { breed }, breed.slug)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          className: "btn btn-outline-extralight btn-white text-dark d-flex d-md-none align-items-center justify-content-center gap-2 mt-4",
          href: "/breeds",
          "data-aos": "fade-up",
          "data-aos-delay": "100",
          "data-aos-duration": "1000",
          children: "View More Breeds"
        }
      )
    ] }) })
  ] });
};
const PuppySpotlight = ({ puppy_spotlights }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "puppy-spotlight bg-extralight py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Puppy Spotlight" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          className: "btn btn-outline-extralight btn-white bg-white border text-dark d-none d-md-flex align-items-center gap-2",
          href: "/puppies",
          "data-aos": "fade-left",
          "data-aos-delay": "100",
          "data-aos-duration": "1000",
          children: "View More Breeds"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: puppy_spotlights.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "col-md-6 col-xl-3 mb-4 mb-xl-0", puppy, height: "310px" }, puppy.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        className: "btn btn-outline-extralight btn-white bg-white border text-dark d-flex d-md-none align-items-center justify-content-center gap-2",
        href: "/puppies",
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        "data-aos-duration": "1000",
        children: "View More Breeds"
      }
    )
  ] }) });
};
const TopPicks = ({ puppy }) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "top-picks py-5 pb-4 py-md-9 mb-xl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Top Picks For You" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "top-picks-slider mb-4 mb-lg-0",
          "data-aos": "fade-right",
          "data-aos-delay": "100",
          "data-aos-duration": "1000",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "sync1", className: "owl-carousel owl-theme mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageSlider, { images: puppy.preview_images }) })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top-picks-details ms-xl-8", "data-aos": "fade-left", "data-aos-delay": "200", "data-aos-duration": "1000", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-start justify-content-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 text-uppercase fw-medium text-muted", children: (_a = puppy.breeds[0]) == null ? void 0 : _a.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "fs-10", children: puppy.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FavoriteButton, { sellerId: puppy.seller.id, puppyId: puppy.id, isFavorite: puppy.is_favorite }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShareButton, { slug: puppy.slug })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 border-end pe-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-map-pin.svg", alt: "", width: "20", height: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: puppy.seller.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 border-end pe-3 ps-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-calendar.svg", alt: "", width: "20", height: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: puppy.age })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2 ps-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-male.svg", alt: "", width: "20", height: "20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0", children: puppy.gender })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-4 pb-4 mb-4 border-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 fs-2 fw-medium", children: "Our price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", children: puppy.formatted_price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Ue, { prefetch: true, className: "btn btn-primary d-flex align-items-center gap-2", href: `/puppies/${puppy.slug}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-paws.svg", alt: "" }),
            "View more"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 fs-8", children: [
          "About ",
          puppy.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3", children: puppy.description })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "top-picks-add text-center mt-5 mt-lg-10",
        "data-aos": "fade-up",
        "data-aos-delay": "300",
        "data-aos-duration": "1000",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/top-picks/top-picks-add.jpg", alt: "" })
      }
    )
  ] }) });
};
const TrustedBreeders = ({ breeders }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "trusted-breeders bg-extralight py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Trusted Breeders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          className: "btn btn-outline-extralight btn-white bg-white border text-dark d-none d-md-flex align-items-center gap-2",
          href: "breeders.html",
          "data-aos": "fade-left",
          "data-aos-delay": "200",
          "data-aos-duration": "1000",
          children: "Explore All Breeders"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: breeders.map((breeder) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreederCard, { breeder }, breeder.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        className: "btn btn-outline-extralight btn-white bg-white border text-dark d-flex d-md-none align-items-center justify-content-center gap-2",
        href: "breeders.html",
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        "data-aos-duration": "1000",
        children: "Explore All Breeders"
      }
    )
  ] }) });
};
const NewArrivals = ({ new_arrivals }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "new-arrivals py-5 py-md-9 mb-xl-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-xl-9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "New Arrivals!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Ue,
        {
          className: "btn btn-outline-extralight btn-white bg-white border text-dark d-none d-md-flex align-items-center gap-2",
          href: "/puppies",
          "data-aos": "fade-left",
          "data-aos-delay": "100",
          "data-aos-duration": "1000",
          children: "Discover new"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: new_arrivals.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { className: "col-md-6 col-xl-3 mb-4 mb-xl-0", puppy, height: "310px" }, puppy.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ue,
      {
        className: "btn btn-outline-extralight btn-white bg-white border text-dark d-flex d-md-none align-items-center justify-content-center gap-2",
        href: "/breeds",
        "data-aos": "fade-up",
        "data-aos-delay": "100",
        "data-aos-duration": "1000",
        children: "View More Breeds"
      }
    )
  ] }) });
};
function Index({
  users,
  auth,
  laravelVersion,
  phpVersion,
  puppy_spotlights,
  top_pick_puppy,
  trusted_breeders,
  new_arrivals,
  featured_breeds,
  header_label,
  subheader_label
}) {
  const [userState, setUserState] = reactExports.useState("");
  reactExports.useEffect(() => {
    setUserState(users);
  }, [users]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Banner, { header: header_label, subheader: subheader_label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Me, { title: "Welcome" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-wrapper position-relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedBreeds, { featured_breeds }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PuppySpotlight, { puppy_spotlights }),
      top_pick_puppy && /* @__PURE__ */ jsxRuntimeExports.jsx(TopPicks, { puppy: top_pick_puppy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustedBreeders, { breeders: trusted_breeders }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewArrivals, { new_arrivals })
    ] })
  ] }) });
}
export {
  Index as default
};
