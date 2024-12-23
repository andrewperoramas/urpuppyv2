import React from 'react'
import { FilterBoxProps } from '../FilterBox';

interface GenderFilterProps {
  setGender: React.Dispatch<React.SetStateAction<FilterBoxProps>>;
}

const GenderFilter: React.FC<GenderFilterProps> = ({setGender}) => {

    const handleInputChange = (e: any) => {
    const selectedOption = e.target.selectedOptions[0]; // Get the selected option
    const label = selectedOption.textContent; // Get the label of the selected option
    console.log(selectedOption.value)
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
                    <select onChange={handleInputChange} className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option selected>e.g. (Male, Female)</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

        </>
  )
}

export default GenderFilter
