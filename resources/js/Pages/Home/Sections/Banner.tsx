import EaseUp from '@/Components/Animation/EaseUp'
import EaseUpContainer from '@/Components/Animation/EaseUpContainer'
import FilterBox from '@/Components/FilterBox'
import React from 'react'

const Banner = ({
    header = "Find Ur Perfect Puppy Today!",
    subheader = "Discover healthy, happy puppies from trusted breeders across the USA"
}: {
        header?: string | undefined,
        subheader?: string | undefined
    }) => {
  return (
                    <section className="hero-section position-relative d-flex align-items-center">
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-xl-10">

                        <EaseUpContainer>

                        <EaseUp>
            <h1 className="text-white text-center fs-11 mb-1" data-aos="fade-up" data-aos-delay="100"
              data-aos-duration="1000">{header}</h1>
                        </EaseUp>

                        <EaseUp>
            <p className="text-white text-center fs-7 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200"
              data-aos-duration="1000">{subheader}</p>
                        </EaseUp>


                        <EaseUp>

                        <FilterBox/>
                        </EaseUp>
</EaseUpContainer>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Banner
