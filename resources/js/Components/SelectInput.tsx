import React from 'react';
import Select from 'react-select';

export type Option = {
    value: string | number;
    label: string;
}

interface SelectInputProps {
  name: string; // Field name for setData
  multiple?: boolean; // Whether the select is multi-select
  options: Option[]; // Options for the select
  setData: (name: string, value: any) => void; // Function to update form data
}

const SelectInput: React.FC<SelectInputProps> = ({ multiple = false, options, setData, name }) => {
  const handleChange = (val: any) => {
    if (multiple) {
      const values = val ? val.map((option: any) => option.value) : [];
      setData(name, values);
    } else {
      const value = val ? val.value : null;
      setData(name, value);
    }
  };

  return (
    <Select
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
                     multiValue: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'var(--bs-primary)', // Background color for selected items
          borderRadius: '50px', // Makes the selected items pill-shaped
          color: 'white', // Text color
        }),
                    multiValueLabel: (baseStyles) => ({
          ...baseStyles,
          color: 'white', // Text color for selected items
          // fontWeight: 'bold', // Bold text for labels
        }),
                  multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color: 'white', // Color for the remove "x" icon
          cursor: 'pointer',
          ':hover': {
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            backgroundColor: '#f54242', // Red background on hover
            color: '#fff',
          },
        }),
                    }}
      onChange={(val) => handleChange(val)}
      isMulti={multiple}
      options={options}
    />
  );
};

export default SelectInput;

