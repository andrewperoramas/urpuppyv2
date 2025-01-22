import React from 'react'

const InitialName = ({initial_name = "UP", size = 'sm'} : { initial_name?: string, size?: 'sm' | 'md'}) => {
  return (
        <div style={{
        userSelect: 'none',
        cursor: 'pointer'
        }} className=" w-100 h-100 bg-primary d-flex align-items-center justify-content-center text-white" >
            <span className={`${size == 'sm'  ? 'fs-4' : 'fs-9'}  fw-bold`}>{initial_name}</span>
        </div>
  )
}

export default InitialName

