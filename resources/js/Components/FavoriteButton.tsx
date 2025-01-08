import React from 'react'
import { Link } from '@inertiajs/react'

const FavoriteButton = ({puppyId, isFavorite} : {
    puppyId: number
    isFavorite?: boolean | null
}) => {
  return (

                          <Link method="patch" href={`/favorites/${puppyId}`} data-bs-toggle="tooltip" data-bs-title="Add To Favourite"
                            className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle">
                {
                    isFavorite ? (
                        <img src="/images/svgs/icon-heart-fill.svg" alt="" />
                    ) : (
                        <img src="/images/svgs/icon-heart-red.svg" alt="" />
                    )
                }
                          </Link>
  )
}


export default FavoriteButton
