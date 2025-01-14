import { j as jsxRuntimeExports } from "../ssr.js";
const Hero = ({ title, bgImage = null, description = null }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      style: {
        backgroundImage: `url(${bgImage ?? "/images/banner-img/banner-bg.jpg"})`
      },
      className: "hero-section position-relative d-flex align-items-center pt-11 pb-10",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container position-relative z-1 pt-lg-1 mt-lg-3 mb-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-xl-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-white text-center fs-11 mb-0",
            "data-aos": "fade-up",
            "data-aos-delay": "100",
            "data-aos-duration": "1000",
            children: title
          }
        ),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-center fs-7 mb-0 aos-init aos-animate", "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "1000", children: description })
      ] }) }) })
    }
  );
};
export {
  Hero as H
};
