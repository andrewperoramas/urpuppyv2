import { Link } from '@inertiajs/react'
import React from 'react'

const BreedCard = ({breed}: {breed: App.Data.BreedData}) => {
  return (
        <div className="item" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="featured-breeds-item">
                <Link prefetch cacheFor="3m"  href={`/breeds/${breed.slug}`} className="featured-breeds-img mb-3 d-block">
                  <img src={breed.image} alt="" />
                </Link>
                <div className="text-center">
                  <Link prefetch cacheFor="3m"  href={`/breeds/${breed.slug}`}  className="btn btn-outline-extralight text-dark d-inline-flex align-items-center gap-2"
                    >
                    {breed.name} for Sale
                    <img src="/images/svgs/icon-chev-right.svg" alt="" className="w-auto" width="6" height="12" />
                  </Link>
                </div>
              </div>
            </div>

  )
}

export default BreedCard
