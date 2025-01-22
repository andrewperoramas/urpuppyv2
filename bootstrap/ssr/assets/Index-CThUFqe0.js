import { r as reactExports, j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { B as BannerSlider, S as SmallBannerWithContent } from "./SmallBannerWithContent-CO86sZ1K.js";
import { B as BreederCard } from "./BreederCard-CPFOirJt.js";
import { B as BreedFilter } from "./BreedFilter-D1sH3Omv.js";
import { S as StateFilter } from "./StateFilter-D2xKXu5R.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
import { L as Layout } from "./Layout-DoCl5VGI.js";
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
import "./create-element-if-not-defined-Lq8o-23T.js";
import "./autoplay-DYmj4v-y.js";
import "./ShareButton-ByO0mwhb.js";
import "./index-DbhDZzck.js";
import "net";
import "./index-BgmffWW1.js";
const Index = ({ breeders }) => {
  var _a, _b;
  const [filter, setFilter] = reactExports.useState({
    breed: {
      value: "",
      label: "All breeds"
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { title: "Breeders" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BannerSlider, { slidesPerView: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SmallBannerWithContent, { title: "Register as a breeder", pill: "Feature", background_image: "/images/breeds-slider/hero-inner-slider-2.jpg" }, 1)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "find-ur-breeds bg-extralight position-relative z-1 py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg-7 col-xl-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-7 pb-1 text-center", "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Find Breeders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-filter d-none d-lg-block aos-init aos-animate", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "1000", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "breed d-flex gap-2 border-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreedFilter, { title: "Find a breed", setBreed: setFilter }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "breed d-flex gap-2 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StateFilter, { setState: setFilter }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          $e,
          {
            preserveState: true,
            href: `/breeders?breed=${(_a = filter == null ? void 0 : filter.breed) == null ? void 0 : _a.value}&state=${(_b = filter == null ? void 0 : filter.state) == null ? void 0 : _b.value}`,
            className: "btn btn-primary round-48 flex-shrink-0 p-2 d-flex align-items-center justify-content-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-search.svg", alt: "" })
          }
        )
      ] }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "choose-your-breeds py-7 py-md-5 py-xl-9", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center justify-content-between mb-4 mb-lg-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-0", "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000", children: "Choose your Breeders" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row mb-4 mb-lg-8", children: breeders.data && breeders.data.map((breeder) => /* @__PURE__ */ jsxRuntimeExports.jsx(BreederCard, { hasBorder: true, breeder }, breeder.slug)) })
    ] }) })
  ] });
};
export {
  Index as default
};
