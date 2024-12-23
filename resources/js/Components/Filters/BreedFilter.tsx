import React from 'react';
import { FilterBoxProps } from '../FilterBox';
import { usePage, WhenVisible } from '@inertiajs/react';

interface BreedFilterProps {
  setBreed: React.Dispatch<React.SetStateAction<FilterBoxProps>>;
}

const BreedFilter: React.FC<BreedFilterProps> = ({ setBreed }) => {

    const breed_filter_list = usePage().props.breed_filter_list as string[];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreed((prev: any) => ({
      ...prev,
      breed: {label: event.target.value, value: event.target.value},
    }));
  };

  return (
        <>
      <span className="flex-shrink-0">
        <img src="/images/svgs/icon-breed.svg" alt="Breed Icon" />
      </span>
      <div>
        <h6 className="font-work-sans mb-0">Breed</h6>
        <input
          className="form-control p-0 shadow-none border-0 fs-2"
          list="breed-options"
          id="breed-input"
          placeholder="e.g (Golden Retriever)"
          onChange={handleInputChange}
        />
        <WhenVisible data="breed_filter_list" fallback={<div></div>}>
        <datalist id="breed-options">
            {
                            breed_filter_list &&
                                breed_filter_list.map((breed: string) => (
                                      <option value={breed} key={breed} />
                                ))
                        }
        </datalist>
                </WhenVisible>
      </div>
</>
  );
};

export default BreedFilter;

