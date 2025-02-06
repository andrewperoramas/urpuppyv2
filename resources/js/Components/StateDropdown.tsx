import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const StateDropdown = ({defaultValue, onChange, ...props} : any) => {

  const [value, setValue] = useState<any>(defaultValue)

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

    const handleStateChange = (state: any) => {
        setValue(state);
        onChange?.(state.value);
    };

  return (
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
                    {...props}
                    className="mb-4"
                    value={value}
                    additional={{ page: 1 }}
                />
  )
}

export default StateDropdown
