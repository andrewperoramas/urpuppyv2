import Navbarv2 from '@/Components/Navigation/Navbarv2'
import React from 'react'
import Banner from '../Home/Sections/Banner'
import { PaginatedCollection } from '@/types/global'
import PuppyCard from '@/Components/Puppy/Card'
import Pagination from '@/Components/Pagination'
import Layout from '@/Layouts/Layout'
import MetaTags from '@/Components/MetaTags'

const Index = ({puppies, states, breeds} : {
    puppies: PaginatedCollection<App.Data.PuppyData>
    states: App.Data.StateData[],
    breeds: App.Data.BreedData[]
}) => {
    console.log(states);
    console.log(breeds);
  return (
    <Layout>
        <MetaTags title="Puppies"  />
        <Banner header={`${puppies.total} Results`} subheader="Below the search bar, you can filter your preferred breeds."/>
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
    </Layout>
  )
}

export default Index
