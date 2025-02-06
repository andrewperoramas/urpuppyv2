import React, { useState, useCallback, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// import InputLabel from "../InputLabel";
import useAuth from "@/hooks/useAuth";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import InputError from "./InputError";

const StateCityDropdown = ({ formData, setFormData, errors, variant="lg" }: any) => {
    const [selectedCountry, setSelectedCountry] = useState(
        formData?.country || { value: 1, label: "United States" },
    );
    const [selectedState, setSelectedState] = useState(formData?.state || "");
    const [selectedCity, setSelectedCity] = useState(formData?.city || "");
    const [zipCode, setZipCode] = useState(formData?.zip_code || "");

    const user = useAuth();

    const fetchCountries = async (search: any, loadOptions: any, { page }: any) => {
        const response = await fetch(`/api/puppy/countries?page=${page}`);
        const data = await response.json();
        return {
            options: data.data,
            hasMore: false,
            additional: { page: page + 1 },
        };
    };

    const fetchStates = async (search: any, loadedOptions: any, { page }: any) => {
        const response = await fetch(
            `/api/puppy/states?search=${search}&page=${page}`,
        );
        const data = await response.json();

        return {
            options: data.data,
            hasMore: data.current_page !== data.last_page,
            additional: { page: data.current_page + 1 },
        };
    };

    useEffect(() => {
        setFormData(
             'country' , selectedCountry.value,
        );

        // if (user?.city) {

        //     const transformedCity = {
        //       value: user?.city?.id,
        //       label: user?.city?.name
        //     };

        //     setSelectedCity(transformedCity);
        // }

        if (user?.state) {

            const transformedCity = {
              value: user?.state?.id,
              label: user?.state?.name
            };

            setSelectedState(transformedCity);
        }

    }, [])

    const handleStateChange = (state: any) => {
        setSelectedState(state);
        setFormData('state_id' , state.value ); // Update form data with selected state
    };

    const handleCityChange = (e: any) => {
        setSelectedCity(e.target.value);
        setFormData('city', e.target.value );
    };

    const handleZipCodeChange = (e: any) => {
        setZipCode(e.target.value);
        setFormData('zip_code', e.target.value );
    };

    return (
        <div className="row">
            <div className="mt-4 d-none">
                <InputLabel htmlFor="country" value="Country" />
                <AsyncPaginate
                    className="mt-1"
                    loadOptions={fetchCountries}
                    additional={{ page: 1 }}
                    value={selectedCountry}
                    onChange={(selected) => {
                        setSelectedCountry(selected);
                        setFormData('country', selected.value );
                    }}
                />
            </div>


            <div className="col-lg-4">

                <div>
                <InputLabel isRequired={true} htmlFor="city" value="City" />
                <TextInput
                    id="city"
                    type="text"
                    name="city"
                    value={selectedCity}
                    autoComplete="city"
                    className="mb-4 form-control"
                    onChange={handleCityChange}
                    />

                <InputError
                    message={errors?.city}
                    className="mt-2"
                />

            </div>
            </div>


            <div className="col-lg-4">
                <div>
                <InputLabel isRequired={true} htmlFor="state" value="State" />

                <AsyncPaginate
                    loadOptions={fetchStates}
                    onChange={handleStateChange}
                     styles={{
                            option: (baseStyles, state) => ({
                                    backgroundColor: state.isSelected ? 'var(--bs-primary)' : state.isFocused ? '#f0f0f0' : 'white',
                                padding: '6px 10px',
                            }),
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          border: state.isFocused ? '1px solid var(--bs-primary)' :  '1px solid rgba(8, 49, 78, 0.2)',
                            borderRadius: '100px',
                                    // border: "1p,x solid rgb(209 213 219 / 1)",
                            outlineColor:'red',
                            boxShadow: 'none',
                          '&:hover': {
                            border: 'auto',
                            },
                            padding: '3px 4px'
                        }),
                    }}

                    className="mb-4"
                    value={selectedState}
                    additional={{ page: 1 }}
                />
                    <InputError
                        message={errors?.state_id}
                        className="mt-2"
                    />
                </div>
            </div>

            <div className="col-lg-4">
                <InputLabel isRequired={true} htmlFor="zip_code" value="Zip Code" />
                <TextInput
                    id="zip_code"
                    type="text"
                    name="zip_code"
                    value={zipCode}
                    autoComplete="zip_code"
                    className="mb-4 form-control"
                    onChange={handleZipCodeChange}
                />
                    <InputError
                        message={errors?.zip_code}
                        className="mt-2"
                    />

            </div>
        </div>
    );
};

export default StateCityDropdown;
