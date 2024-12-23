import Navbarv2 from '@/Components/Navigation/Navbarv2'
import React from 'react'
import Banner from '../Home/Sections/Banner'
import { PaginatedCollection } from '@/types/global'
import PuppyCard from '@/Components/Puppy/Card'
import BannerLayout from '@/Layouts/BannerLayout'
import Pagination from '@/Components/Pagination'

const Index = ({puppies, states, breeds} : {
    puppies: PaginatedCollection<App.Data.PuppyData>
    states: App.Data.StateData[],
    breeds: App.Data.BreedData[]
}) => {
    console.log(states);
    console.log(breeds);
  return (
    <BannerLayout header="" headerLabel={`${puppies.total} Results`} subheaderLabel="Below the search bar, you can filter your preferred breeds." >
        <section className="puppy-spotlight py-7 py-md-5 py-xl-9" id="scroll-target">
          <div className="container" >
            <div className="row mb-4 mb-lg-8">
                {
                    puppies?.data && puppies?.data.map((puppy: App.Data.PuppyData) => (
                        <PuppyCard puppy={puppy}/>
                    ))
                }

                </div>
                </div>

                <Pagination links={puppies.links}/>
                </section>
    </BannerLayout>
  )
}

export default Index
