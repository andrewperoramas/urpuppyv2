import React, { useState } from 'react';
import { FilterBoxProps } from '../FilterBox';

interface AgeFilterProps {
  setAge: React.Dispatch<React.SetStateAction<FilterBoxProps>>;
}

const AgeFilter: React.FC<AgeFilterProps> = ({ setAge }) => {

  const [value, setValue] = useState("1");
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {


    const selectedOption = e.target.selectedOptions[0];
    setValue(selectedOption.value)
    const label = selectedOption.textContent || '';
    setAge((prev) => ({
      ...prev,
      age: { label, value: selectedOption.value },
    }));
  };

  return (
    <>
      <span className="flex-shrink-0">
        <img src="/images/svgs/icon-calendar.svg" alt="" />
      </span>
      <div>
        <h6 className="font-work-sans mb-0">Age</h6>
        <select
          onChange={handleInputChange}
          value={value}
          className="form-select p-0 shadow-none border-0 fs-2"
          aria-label="Default select example"
        >
          <option value="1">e.g. (1 week)</option>
          <option value="2">Up to 2 Weeks</option>
          <option value="4">Up to 4 Weeks</option>
          <option value="10">Up to 10 Weeks</option>
          <option value="18">Up to 18 Weeks</option>
          <option value="0">Older than 18 Weeks</option>
        </select>
      </div>
    </>
  );
};

export default AgeFilter;

