import { useState } from 'react';
import Picker from 'react-mobile-picker';

// Define the type for the selections object
type Selections = {
  value: string[];
};

// Define the type for the picker value
type PickerValue = {
  value: string;
};

function MobilePicker({options, title = "value", setMobileFilter}: any) {
  const [pickerValue, setPickerValue] = useState<PickerValue>({
    value: 'All',
  });

    const handleChange = (value: any) => {
        setPickerValue(value);
        setMobileFilter(value)
        // setFilter((prev: any) => ({
        //     ...prev,
        //     [title]: {label: value.value, value: value.value},
        // }));
    };

  return (
    <Picker value={pickerValue} onChange={handleChange}>
        <Picker.Column key={'key'} name={title}>
          {options?.map(({label, value}: {
                label: string;
                value: any;
            }) => (
            <Picker.Item key={value} value={label}>
              {label}
            </Picker.Item>
          ))}
        </Picker.Column>
    </Picker>
  );
}

export default MobilePicker;
