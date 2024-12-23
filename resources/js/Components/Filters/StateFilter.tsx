import React from 'react'
import { FilterBoxProps } from '../FilterBox';
import { usePage, WhenVisible } from '@inertiajs/react';


interface StateFilterProps {
  setState: React.Dispatch<React.SetStateAction<FilterBoxProps>>;
}

const StateFilter: React.FC<StateFilterProps> = ({setState}) => {
    const state_filter_list = usePage().props.state_filter_list as string[];
  const handleInputChange = (e: any) => {
    setState((prev: any) => ({
      ...prev,
      state: {label: e.target.value, value: e.target.value},
    }));
  };
  return (
  <>
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-map-pin.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">State</h6>
                    <input onChange={handleInputChange} className="form-control p-0 shadow-none border-0 fs-2" list="state-options"
                      id="exampleDataList" placeholder="e.g. (New York)" />
        <WhenVisible data="state_filter_list" fallback={<div></div>}>
        <datalist id="state-options">
            {
                            state_filter_list &&
                                state_filter_list.map((state: string) => (
                                      <option value={state} key={state} />
                                ))
                        }
        </datalist>
                </WhenVisible>

                  </div>


        </>
  )
}

export default StateFilter
