import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export type Option = {
    value: string | number;
    label: string;
}

interface SelectInputProps {
    name: string;
    multiple?: boolean;
    value?: Option | Option[] | string | string[] | number | number[];
    options: Option[];
    setData: (name: string, value: any) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ multiple = false, options, setData, name, value }) => {
    const [selectedValue, setSelectedValue] = useState<Option | Option[] | null>(null);

    // Function to convert initial value to Option format
    const formatInitialValue = (value: any): Option | Option[] | null => {
        if (!value) return null;

        if (multiple) {
            // Handle array of values
            const values = Array.isArray(value) ? value : [value];
            return values.map(val => {
                // If value is already an Option type
                if (typeof val === 'object' && 'value' in val && 'label' in val) {
                    return val;
                }
                // Find matching option
                const option = options.find(opt => opt.value === val);
                return option || null;
            }).filter(Boolean) as Option[];
        } else {
            // Handle single value
            if (typeof value === 'object' && 'value' in value && 'label' in value) {
                return value;
            }
            const option = options.find(opt => opt.value === value);
            return option || null;
        }
    };

    // Initialize value
    useEffect(() => {
        const formattedValue = formatInitialValue(value);
        setSelectedValue(formattedValue);
    }, [value, options]);

    const handleChange = (val: any) => {
        setSelectedValue(val);

        if (multiple) {
            const values = val ? val.map((option: Option) => option.value) : [];
            setData(name, values);
        } else {
            const value = val ? val.value : null;
            setData(name, value);
        }
    };

    return (
        <Select
            value={selectedValue}
            styles={{
                option: (baseStyles, state) => ({
                    backgroundColor: state.isSelected ? 'var(--bs-primary)' : state.isFocused ? '#f0f0f0' : 'white',
                    padding: '6px 10px',
                }),
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: state.isFocused ? '1px solid var(--bs-primary)' : '1px solid rgba(8, 49, 78, 0.2)',
                    borderRadius: '100px',
                    outlineColor: 'red',
                    boxShadow: 'none',
                    '&:hover': {
                        border: 'auto',
                    },
                    padding: '3px 4px'
                }),
                multiValue: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--bs-primary)',
                    borderRadius: '50px',
                    color: 'white',
                }),
                multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: 'white',
                }),
                multiValueRemove: (baseStyles) => ({
                    ...baseStyles,
                    color: 'white',
                    cursor: 'pointer',
                    ':hover': {
                        borderTopRightRadius: '50px',
                        borderBottomRightRadius: '50px',
                        backgroundColor: '#f54242',
                        color: '#fff',
                    },
                }),
            }}
            onChange={handleChange}
            isMulti={multiple}
            options={options}
        />
    );
};

export default SelectInput;
