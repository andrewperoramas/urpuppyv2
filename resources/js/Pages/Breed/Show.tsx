import React from 'react'

const Show = ({breed} : {
    breed: App.Data.BreedData
}) => {
  return (
    <div>{breed.name}</div>
  )
}

export default Show
