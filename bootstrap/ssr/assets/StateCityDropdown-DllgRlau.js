import { K, r as reactExports, j as jsxRuntimeExports } from "../ssr.js";
import { A as AsyncPaginate } from "./index-Bzttp7Wk.js";
import { T as TextInput } from "./TextInput-CTPfMhdJ.js";
import { I as InputLabel } from "./InputLabel-DAgP54zY.js";
import { I as InputError } from "./InputError-BrGvvBAw.js";
function useAuth() {
  const user = K().props.auth.user;
  if (!user) {
    return null;
  }
  return user;
}
const StateCityDropdown = ({ formData, setFormData, errors, variant = "lg" }) => {
  const [selectedCountry, setSelectedCountry] = reactExports.useState(
    (formData == null ? void 0 : formData.country) || { value: 1, label: "United States" }
  );
  const [selectedState, setSelectedState] = reactExports.useState((formData == null ? void 0 : formData.state) || "");
  const [selectedCity, setSelectedCity] = reactExports.useState((formData == null ? void 0 : formData.city) || "");
  const [zipCode, setZipCode] = reactExports.useState((formData == null ? void 0 : formData.zip_code) || "");
  const user = useAuth();
  const fetchCountries = async (search, loadOptions, { page }) => {
    const response = await fetch(`/api/puppy/countries?page=${page}`);
    const data = await response.json();
    return {
      options: data.data,
      hasMore: false,
      additional: { page: page + 1 }
    };
  };
  const fetchStates = async (search, loadedOptions, { page }) => {
    const response = await fetch(
      `/api/puppy/states?search=${search}&page=${page}`
    );
    const data = await response.json();
    return {
      options: data.data,
      hasMore: data.current_page !== data.last_page,
      additional: { page: data.current_page + 1 }
    };
  };
  reactExports.useEffect(() => {
    var _a, _b;
    setFormData(
      "country",
      selectedCountry.value
    );
    if (user == null ? void 0 : user.state) {
      const transformedCity = {
        value: (_a = user == null ? void 0 : user.state) == null ? void 0 : _a.id,
        label: (_b = user == null ? void 0 : user.state) == null ? void 0 : _b.name
      };
      setSelectedState(transformedCity);
    }
  }, []);
  const handleStateChange = (state) => {
    setSelectedState(state);
    setFormData("state_id", state.value);
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setFormData("city", e.target.value);
  };
  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
    setFormData("zip_code", e.target.value);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 d-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "country", value: "Country" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AsyncPaginate,
        {
          className: "mt-1",
          loadOptions: fetchCountries,
          additional: { page: 1 },
          value: selectedCountry,
          onChange: (selected) => {
            setSelectedCountry(selected);
            setFormData("country", selected.value);
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "city", value: "City" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          id: "city",
          type: "text",
          name: "city",
          value: selectedCity,
          autoComplete: "city",
          className: "mb-4 form-control",
          onChange: handleCityChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.city,
          className: "mt-2"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "state", value: "State" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AsyncPaginate,
        {
          loadOptions: fetchStates,
          onChange: handleStateChange,
          styles: {
            option: (baseStyles, state) => ({
              backgroundColor: state.isSelected ? "var(--bs-primary)" : state.isFocused ? "#f0f0f0" : "white",
              padding: "6px 10px"
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: state.isFocused ? "1px solid var(--bs-primary)" : "1px solid rgba(8, 49, 78, 0.2)",
              borderRadius: "100px",
              // border: "1p,x solid rgb(209 213 219 / 1)",
              outlineColor: "red",
              boxShadow: "none",
              "&:hover": {
                border: "auto"
              },
              padding: "3px 4px"
            })
          },
          className: "mb-4",
          value: selectedState,
          additional: { page: 1 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.state_id,
          className: "mt-2"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-lg-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { isRequired: true, htmlFor: "zip_code", value: "Zip Code" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          id: "zip_code",
          type: "text",
          name: "zip_code",
          value: zipCode,
          autoComplete: "zip_code",
          className: "mb-4 form-control",
          onChange: handleZipCodeChange
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        InputError,
        {
          message: errors == null ? void 0 : errors.zip_code,
          className: "mt-2"
        }
      )
    ] })
  ] });
};
export {
  StateCityDropdown as S
};
