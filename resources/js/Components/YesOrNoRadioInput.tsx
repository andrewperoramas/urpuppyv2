import React from 'react'
import { useForm } from '@inertiajs/react'

interface YesOrNoRadioInputProps {
  title: string
  name: string  // Form field name (required for useForm)
  value: string // Current value from form (useForm data binding)
  setData: (name: string, value: string) => void  // useForm's setData function
}

const YesOrNoRadioInput = ({ title, name, value, setData }: YesOrNoRadioInputProps) => {
  const handleChange = (newValue: string) => {
    setData(name, newValue) // Update form state
  }

  return (
    <div className="card border round">
      <div className="card-body p-3">
        <p className="mb-2 fw-semibold">{title}</p>
        <div className="d-flex align-items-center">
          <div className="form-check form-check-inline mb-0">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value="yes"
              checked={value === 'yes'}
              onChange={() => handleChange('yes')}
            />
            <label
              onClick={() => handleChange('yes')}
              className="form-check-label fs-2"
            >
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline mb-0">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value="no"
              checked={value === 'no'}
              onChange={() => handleChange('no')}
            />
            <label
              onClick={() => handleChange('no')}
              className="form-check-label fs-2"
            >
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YesOrNoRadioInput

