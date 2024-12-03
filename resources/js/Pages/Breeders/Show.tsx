import React from 'react'

const Show = ({breeder} : {
    breeder: App.Data.BreederData
}) => {
    console.log(breeder.first_name);
  return (
    <div>{breeder.first_name}</div>
  )
}

export default Show
