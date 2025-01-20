import { K, j as jsxRuntimeExports, t as tt } from "../ssr.js";
const BreedFilter = ({ setBreed, title = "Breed" }) => {
  const breed_filter_list = K().props.breed_filter_list;
  const handleInputChange = (event) => {
    setBreed((prev) => ({
      ...prev,
      breed: { label: event.target.value, value: event.target.value }
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-breed.svg", alt: "Breed Icon" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-work-sans mb-0", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "form-control p-0 shadow-none border-0 fs-2",
          list: "breed-options",
          id: "breed-input",
          placeholder: "e.g (Golden Retriever)",
          onChange: handleInputChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { data: "breed_filter_list", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "breed-options", children: breed_filter_list && breed_filter_list.map((breed) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: breed }, breed)) }) })
    ] })
  ] });
};
export {
  BreedFilter as B
};
