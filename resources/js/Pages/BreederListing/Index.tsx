import { PaginatedCollection } from '@/types/global'
import React from 'react'

const Index = ( { listings } : {
    listings: PaginatedCollection<App.Data.PuppyData>
} ) => {
    console.log(listings.data)
  return (
    <div>Index</div>
  )
}

export default Index
