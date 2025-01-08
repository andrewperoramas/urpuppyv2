import React, { useState } from 'react'
import { FilterBoxProps } from '../FilterBox';

interface GenderFilterProps {
  setGender: React.Dispatch<React.SetStateAction<FilterBoxProps>>;
}

const GenderFilter: React.FC<GenderFilterProps> = ({setGender}) => {


    const [value, setValue] = useState("");
    const handleInputChange = (e: any) => {
    const selectedOption = e.target.selectedOptions[0]; // Get the selected option
    const label = selectedOption.textContent; // Get the label of the selected option
    setValue(selectedOption.value)
    setGender((prev) => ({
      ...prev,
      gender: { label, value: selectedOption.value },
    }));
  };

  return (
  <>
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-gender.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Sex</h6>
                    <select value={value}  onChange={handleInputChange} className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

        </>
  )
}

export default GenderFilter
