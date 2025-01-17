import React from 'react'

import { PaginatedCollection } from '@/types/global'
import PuppyCard from '@/Components/Puppy/Card'
import Button from '@/Components/ui/Button'
import { Link, router } from '@inertiajs/react'

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
                    puppies?.data && puppies.data.length ? puppies?.data.map((puppy: App.Data.PuppyData) => (
                        <>


                        <div className="col-md-6 col-lg-5 col-xl-5 mb-4">

                        <PuppyCard className="" puppy={puppy}/>

                        <Link className="btn btn-primary mt-2 btn-sm" style={{marginRight: "4px"}} href={`/seller/create/${puppy.id}`}>Edit </Link>
                                <Link
  href="/subscriptions"
  method="delete"
  as="button"
  onClick={(e) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      router.delete(`/seller/delete/${puppy.id}`);
    }
  }}
  data-bs-toggle="modal"
  data-bs-target="#CancelPlan"
  className="btn btn-secondary btn-sm mt-2 "
>
                                    Delete
</Link>
</div>

                        </>
                    )): <h6 className="mb-4">No puppies found..</h6>
                }
                    </div>
        </>

    )

}

export default MyPuppies
