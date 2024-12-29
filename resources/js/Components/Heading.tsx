import React from 'react'

const Heading = ({title, description} : {
    title: string,
    description?: string
}) => {
  return (
    <div>
      <h3 className="mb-1 fs-8">{title}</h3>
        {description &&
      <p className="mb-0">{description}</p>
        }
    </div>
  )
}

export default Heading
