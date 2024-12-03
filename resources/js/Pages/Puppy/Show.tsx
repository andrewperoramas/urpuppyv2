import React from 'react'

const Show = ({puppy}: {
    puppy: App.Data.PuppyData
}) => {

    console.log(puppy.name)
  return (
    <div>{puppy.name}</div>
  )
}

export default Show
