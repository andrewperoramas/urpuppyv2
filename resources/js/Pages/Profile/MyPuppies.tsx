import React from 'react'

import { PaginatedCollection } from '@/types/global'
import PuppyCard from '@/Components/Puppy/Card'
import Button from '@/Components/ui/Button'
import { Link } from '@inertiajs/react'

const MyPuppies = ({puppies} : {
    puppies: PaginatedCollection<App.Data.PuppyData>
    // states: App.Data.StateData[],
    // breeds: App.Data.BreedData[]
}) => {

    console.log(puppies)

    return (
    <>

                    <div className="row">
                {
                    puppies?.data && puppies?.data.map((puppy: App.Data.PuppyData) => (
                        <>

                        <Link href={`/seller/create/${puppy.id}`}>Edit </Link>

                        <div className="col-md-6 col-lg-5 col-xl-5 mb-4">
                        <PuppyCard className="" puppy={puppy}/>
</div>

                        </>
                    ))
                }
                    </div>
        </>

    )

}

export default MyPuppies
