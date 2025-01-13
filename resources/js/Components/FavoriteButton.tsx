import React from 'react'
import { Link, usePage } from '@inertiajs/react'

const FavoriteButton = ({puppyId, sellerId, isFavorite} : {
    puppyId: number
    sellerId: number,
    isFavorite?: boolean | null
}) => {
  const user = usePage().props?.auth?.user

  return user?.id != sellerId && (

                          <Link method="patch" preserveScroll href={`/favorites/${puppyId}`} data-bs-toggle="tooltip" data-bs-title="Add To Favourite"
                            className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle">
                {
                    isFavorite ? (
                        <img src="/images/svgs/icon-heart-red.svg" alt="" />
                    ) : (
                        <img src="/images/svgs/icon-heart.svg" alt="" />
                    )
                }
                          </Link>
  )
}


export default FavoriteButton
