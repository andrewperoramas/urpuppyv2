import { K, j as jsxRuntimeExports, t as tt } from "../ssr.js";
const StateFilter = ({ setState }) => {
  const state_filter_list = K().props.state_filter_list;
  const handleInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      state: { label: e.target.value, value: e.target.value }
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-map-pin.svg", alt: "" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "font-work-sans mb-0", children: "State" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          onChange: handleInputChange,
          className: "form-control p-0 shadow-none border-0 fs-2",
          list: "state-options",
          id: "exampleDataList",
          placeholder: "e.g. (New York)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(tt, { data: "state_filter_list", fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx("datalist", { id: "state-options", children: state_filter_list && state_filter_list.map((state) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: state }, state)) }) })
    ] })
  ] });
};
export {
  StateFilter as S
};
