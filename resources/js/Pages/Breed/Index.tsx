import { PaginatedCollection } from '@/types/global'
import React from 'react'

const Index = ({breeds} : {
    breeds: PaginatedCollection<App.Data.BreedData>
}) => {

  return (
    <div>
        <h1>Breeds</h1>

            {
                breeds.data.map((breed, index) => (
                    <div key={index}>
                        <p>{breed.name}</p>
                    </div>
                ))
            }


        </div>
  )
}

export default Index
