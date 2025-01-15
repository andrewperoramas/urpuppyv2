import React from 'react'
import ImageSlider from '../ImageSlider'
import { Link } from '@inertiajs/react'
import FavoriteButton from '../FavoriteButton'
import ShareButton from '../ShareButton'
import {Adsense} from '@ctrl/react-adsense';

const TopPicks = ({puppy}: { puppy: App.Data.PuppyData }) => {
  return (
            <section className="top-picks py-5 pb-4 py-md-9 mb-xl-10">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-lg-8">
          <h2 className="mb-0" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Top Picks For You</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
                                    <div className="top-picks-slider mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="100"
              data-aos-duration="1000">
              <div id="sync1" className="owl-carousel owl-theme mb-4">

                <ImageSlider images={puppy.preview_images}/>
          </div>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="top-picks-details ms-xl-8" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <p className="mb-1 text-uppercase fw-medium text-muted">{puppy.breeds[0]?.name}</p>
                  <h2 className="fs-10">{puppy.name}</h2>
                </div>
                <div className="d-flex align-items-center gap-6">
                    <FavoriteButton sellerId={puppy.seller.id} puppyId={puppy.id} isFavorite={puppy.is_favorite} />
                    <ShareButton slug={puppy.slug} />

                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center gap-2 border-end pe-3">
                  <img src="/images/svgs/icon-map-pin.svg" alt="" width="20" height="20" />
                  <p className="mb-0">{puppy.seller.address}</p>
                </div>
                <div className="d-flex align-items-center gap-2 border-end pe-3 ps-3">
                  <img src="/images/svgs/icon-calendar.svg" alt="" width="20" height="20"/>
                  <p className="mb-0">{puppy.age}</p>
                </div>
                <div className="d-flex align-items-center gap-2 ps-3">
                  <img src="/images/svgs/icon-male.svg" alt="" width="20" height="20"/>
                  <p className="mb-0">{puppy.gender}</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 pb-4 mb-4 border-bottom">
                <div>
                  <p className="mb-0 fs-2 fw-medium">Our price</p>
                  <h2 className="mb-0">{puppy.formatted_price}</h2>
                </div>

                <Link prefetch   className="btn btn-primary d-flex align-items-center gap-2" href={`/puppies/${puppy.slug}`}>
                  <img src="/images/svgs/icon-paws.svg" alt="" />
                  View more
                </Link>
              </div>
              <h3 className="mb-3 fs-8">About {puppy.name}</h3>
              <p className="mb-3">{puppy.description}</p>
                            {/*
              <div className="rounded-pill px-3 py-6 d-flex align-items-center align-items-start gap-6 bg-extralight">
                <img src="/images/svgs/icon-heart-plus.svg" alt="" />

                <p className="mb-0 text-dark">Charlie will be current on vaccinations & vet exams before going home</p>
              </div>

*/}
            </div>
          </div>
        </div>
        <div className="top-picks-add text-center mt-5 mt-lg-10" data-aos="fade-up" data-aos-delay="300"
          data-aos-duration="1000">
            <Adsense
              client="ca-pub-2165217194424630"
              slot="3136480013"
              style={{ display: 'block' }}
              layout="in-article"
              format="fluid"
            />
        </div>
      </div>
    </section>

    )}

export default TopPicks
