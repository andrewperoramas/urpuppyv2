import { j as jsxRuntimeExports, U, $ as $e, r as reactExports } from "../ssr.js";
import Banner from "./Banner-Ba6cDCzQ.js";
import { S as Swiper, a as SwiperSlide } from "./create-element-if-not-defined-Lq8o-23T.js";
import { A as Autoplay } from "./autoplay-o8EHVtnj.js";
import { P as PuppyCard, F as FavoriteButton, G as Gender } from "./Card-KG1vFpgU.js";
import { I as ImageSlider } from "./ImageSlider-B203WMpI.js";
import { S as ShareButton } from "./ShareButton-C8v76dZk.js";
import { _ as __rest } from "./tslib.es6-iWu3F_1J.js";
import { B as BreederCard } from "./BreederCard-BDX4AMF4.js";
import { M as Modal } from "./Modal-BKi6mYmD.js";
import { L as Layout } from "./Layout-DMo-uI7y.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
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
import "./BreedFilter-D1sH3Omv.js";
import "./StateFilter-D2xKXu5R.js";
import "./Tooltip-DenE-Fw-.js";
import "./floating-ui.dom-D9vmQZx1.js";
import "./index-DbhDZzck.js";
import "net";
import "./index-CmL8UXgL.js";
import "./setPrototypeOf-CLzJYD18.js";
import "./index-BgmffWW1.js";
const Slider = ({ children, slidesPerView = 1, autoplay = false }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Swiper,
    {
      spaceBetween: 10,
      slidesPerView,
      loop: true,
      autoplay: autoplay ? { delay: 4e3, disableOnInteraction: false } : false,
      modules: [Autoplay],
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
    /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, cacheFor: "3m", href: `/breeds/${breed.slug}`, className: "featured-breeds-img mb-3 d-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: breed.image, alt: "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      $e,
      {
        prefetch: true,
        cacheFor: "3m",
        href: `/puppies?filter[breed]=${breed.name}`,
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
          $e,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "featured-breeds-slider", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "owl-carousel owl-theme", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { autoplay: true, slidesPerView: 1, children: featured_breeds.map((breed) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreedCard, { breed }, breed.slug)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
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
        $e,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: puppy_spotlights.map((puppy) => /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { location: "puppy-spotlight", className: "col-md-6 col-xl-3 mb-4 mb-xl-0", puppy, height: "310px" }, puppy.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
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
function Adsense(_a) {
  var { className = "", style = { display: "block" }, client, slot, layout = "", layoutKey = "", format = "auto", responsive = "false", pageLevelAds = false, adTest, children } = _a, rest = __rest(_a, ["className", "style", "client", "slot", "layout", "layoutKey", "format", "responsive", "pageLevelAds", "adTest", "children"]);
  reactExports.useEffect(() => {
    const p = {};
    if (pageLevelAds) {
      p.google_ad_client = client;
      p.enable_page_level_ads = true;
    }
    try {
      if (typeof window === "object") {
        (window.adsbygoogle = window.adsbygoogle || []).push(p);
      }
    } catch (_a2) {
    }
  }, []);
  return U.createElement("ins", Object.assign({ className: `adsbygoogle ${className}`, style, "data-ad-client": client, "data-ad-slot": slot, "data-ad-layout": layout, "data-ad-layout-key": layoutKey, "data-ad-format": format, "data-full-width-responsive": responsive, "data-adtest": adTest }, rest), children);
}
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(FavoriteButton, { uniqueId: "top-picks" + puppy.id, sellerId: puppy.seller.id, puppyId: puppy.id, isFavorite: puppy.is_favorite }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gender, { gender: puppy.gender })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-4 pb-4 mb-4 border-bottom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-0 fs-2 fw-medium", children: "Our price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", children: puppy.formatted_price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { prefetch: true, className: "btn btn-primary d-flex align-items-center gap-2", href: `/puppies/${puppy.slug}`, children: [
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
      Adsense,
      {
        client: "ca-pub-2165217194424630",
        slot: "3136480013",
        style: { display: "block" },
        layout: "in-article",
        format: "fluid"
      }
    )
  ] }) });
};
const TrustedBreeders = ({ breeders }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "trusted-breeders bg-extralight py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Trusted Breeders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          className: "btn btn-outline-extralight btn-white bg-white border text-dark d-none d-md-flex align-items-center gap-2",
          href: "/breeders",
          "data-aos": "fade-left",
          "data-aos-delay": "200",
          "data-aos-duration": "1000",
          children: "Explore All Breeders"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: breeders.map((breeder) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreederCard, { breeder }, breeder.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        className: "btn btn-outline-extralight btn-white bg-white border text-dark d-flex d-md-none align-items-center justify-content-center gap-2",
        href: "/breeders",
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
        $e,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      new_arrivals.map((puppy, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PuppyCard, { location: "new-arrivals", className: "col-md-6 col-xl-3 mb-4 mb-xl-0", puppy, height: "310px" }, puppy.slug)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-6 col-xl-3 mb-4 mb-xl-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Adsense,
        {
          client: "ca-pub-2165217194424630",
          slot: "1030827901",
          style: { display: "block" },
          layout: "in-article",
          format: "fluid"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
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
function GenericModal({ title, buttonTitle, children }) {
  const [show, setShow] = reactExports.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " text-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: handleShow, className: "", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: buttonTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show, className: "modal-lg ", onHide: handleClose, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Body, { className: "py-8 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-center text-primary", children: title }),
        children
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Footer, { className: "d-flex justify-content-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { onClick: handleClose, href: "#", className: "btn btn-outline-extralight border btn-white text-dark", "data-bs-toggle": "modal", "data-bs-target": "#SaveThisSearch", children: "Cancel" }) })
    ] })
  ] }) });
}
const FooterVideos = ({ videos }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bringing-through-puppies bg-extralight py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0 aos-init aos-animate", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Bringing Joy Through Puppies" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: videos.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bringing-through-puppies-blog position-relative overflow-hidden rounded-1 mb-4 mb-lg-0 aos-init aos-animate", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "1000", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: video.video_thumbnail ?? "", alt: "" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-3 position-relative z-1 position-absolute bottom-0 start-0 w-100 p-4 pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GenericModal, { buttonTitle: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-primary p-2 d-flex align-items-center justify-content-center round-48 rounded-circle flex-shrink-0", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-play.svg", alt: "" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { controls: true, className: "w-100", autoPlay: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: video.url }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-0 text-white fs-8", children: video.title })
      ] })
    ] }) })) })
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
  videos,
  subheader_label
}) {
  const [userState, setUserState] = reactExports.useState("");
  console.log(videos);
  reactExports.useEffect(() => {
    setUserState(users);
  }, [users]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Banner, { header: header_label, subheader: subheader_label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Home" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-wrapper position-relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedBreeds, { featured_breeds }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PuppySpotlight, { puppy_spotlights }),
      top_pick_puppy && /* @__PURE__ */ jsxRuntimeExports.jsx(TopPicks, { puppy: top_pick_puppy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustedBreeders, { breeders: trusted_breeders }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewArrivals, { new_arrivals }),
      videos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(FooterVideos, { videos })
    ] })
  ] }) });
}
export {
  Index as default
};
