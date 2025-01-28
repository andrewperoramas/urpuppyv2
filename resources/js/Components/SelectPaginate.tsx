import { usePage } from '@inertiajs/react';
import { AsyncPaginate } from 'react-select-async-paginate';
import React from 'react'
import { filterStyles } from './SelectFilterInput';
import GenericModal from './Modals/GenericModal';
import MobilePicker from './MobilePicker';

const SelectPaginate = ({
    loadOptions,
    selectedItem,
    handleInputChange,
    setIsModalOpen,
    options,
    handleMobileInputChange,
    title = ""

}: any) => {

    const isMobile = usePage().props.isMobile;
  return (
           !isMobile ?
        <AsyncPaginate
                    styles={filterStyles}
                        loadOptions={loadOptions}
                        key={selectedItem ? selectedItem.value : "no-state"}
                        additional={{ page: 1 }}
                        value={selectedItem}
                        onChange={handleInputChange}
                    /> : <GenericModal title={title} setIsModalOpen={setIsModalOpen} centered buttonTitle={
                        <div style={{

                        }} className="filter-custom-label">{selectedItem?.value}</div>
                    } >
                        <MobilePicker setMobileFilter={handleMobileInputChange}  options={options} />

                    </GenericModal>
  )
}

export default SelectPaginate
