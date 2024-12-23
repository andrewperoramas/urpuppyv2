import React from 'react'

const SmallBannerWithContent = () => {
  return (
              <div className="item d-flex align-items-end pb-5"
                    style={{
                        backgroundImage: `url(${`/images/breeds-slider/hero-inner-slider-1.jpg`})`,
                    }}
                >
                <div className="container position-relative z-2 pb-4 pb-lg-0">
                  <div>
                    <span className="badge text-bg-info mb-6">Featured Breed</span>
                    <h3 className="text-white fs-10 mb-3">Siberian Husky: Your Winter Companion</h3>
                    <div className="d-lg-flex align-items-center gap-3">
                      <a href="#"
                        className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 mb-3 mb-lg-0">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.3335 3.83334V7.04918C1.3335 7.49668 1.511 7.92584 1.82766 8.24251L8.591 15.0058C8.7477 15.1626 8.93374 15.2869 9.13849 15.3717C9.34325 15.4565 9.5627 15.5002 9.78433 15.5002C10.006 15.5002 10.2254 15.4565 10.4302 15.3717C10.6349 15.2869 10.821 15.1626 10.9777 15.0058L15.006 10.9775C15.1627 10.8208 15.287 10.6348 15.3719 10.43C15.4567 10.2253 15.5003 10.0058 15.5003 9.78418C15.5003 9.56255 15.4567 9.34309 15.3719 9.13834C15.287 8.93359 15.1627 8.74755 15.006 8.59084L8.24183 1.82751C7.92553 1.51126 7.49661 1.33352 7.04933 1.33334H3.8335C3.17045 1.33334 2.53457 1.59674 2.06573 2.06558C1.59689 2.53442 1.3335 3.1703 1.3335 3.83334Z"
                            stroke="#E88325" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Find Basset Hound Puppies
                        For Sale </a>
                      <a href="#"
                        className="btn btn-outline-white Border border-white text-white d-flex align-items-center justify-content-center gap-2"><img
                          className="w-auto" src="/images/svgs/icon-map-pin-white.svg" alt="" width="15"
                          height="15" />Find Basenji Breeder Near you</a>
                    </div>
                  </div>
                </div>
                </div>
  )
}

export default SmallBannerWithContent
