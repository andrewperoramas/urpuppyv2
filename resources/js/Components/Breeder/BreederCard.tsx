
import { Link } from '@inertiajs/react'
import React from 'react'


const BreederCard = ({breeder, hasBorder=false }: { breeder: App.Data.BreederFullData, hasBorder?: boolean }) => {
  return (
          <div className="col-lg-6">
            <div className={`card position-relative overflow-hidden ${hasBorder && 'border'}`} data-aos="fade-up" data-aos-delay="300"
              data-aos-duration="1000">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-lg-stretch">
                  <Link preserveState href={`/breeders/${breeder.slug}`} className="trusted-breeders-img position-relative overflow-hidden w-100">
                    <img loading="lazy" className="w-100 h-100 object-fit-cover"
                      src={breeder.avatar} alt="" />
                  </Link>
                </div>
                <div className="col-xl-8 d-flex align-items-lg-stretch">
                  <div
                    className="trusted-breeders-details card-body ps-xl-0 pe-4 d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <Link preserveState href={`/breeders/${breeder.slug}`}>
                        <h6 className="btn-link fs-5 font-work-sans mb-6">{breeder.company_name}</h6>
                      </Link>
                        {breeder.breeds.length &&
                      <div className="d-flex align-items-center gap-6 mb-6">
                        <img loading="lazy" src="/images/svgs/icon-paws-dark.svg" alt="" width="24" height="24" />
                        <p className="mb-0">{breeder?.breeds[0]?.name}</p>
                      </div>
    }
                      <div className="d-flex align-items-center gap-6 mb-6">
                        <img loading="lazy" src="/images/svgs/icon-map-pin.svg" alt="" width="24" height="24" />
                        <p className="mb-0 flex-xl-shrink-0">{breeder.address}</p>
                      </div>
                      <div className="d-flex align-items-center gap-6">
                        <img loading="lazy" src="/images/svgs/icon-user-dark.svg" alt="" width="24" height="24"/>
                        <p className="mb-0">{breeder.full_name}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <a href="my-favourite-puppies.html" data-bs-toggle="tooltip" data-bs-title="Add To Favourite"
                        className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle flex-shrink-0">
                        <img loading="lazy" src="/images/svgs/icon-heart.svg" alt=""/>
                      </a>
                      <div className="dropdown">
                        <button type="button"
                          className="btn btn-secondary p-0 shadow-none bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle flex-shrink-0"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          <img loading="lazy" src="/images/svgs/icon-share.svg" alt=""/>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-primary social-icon px-6"
                          style={{minWidth: 'auto'}}>
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <li>
                              <a href="#"
                                className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img loading="lazy" src="/images/svgs/icon-twitter.svg" alt="" width="16" height="16"/>
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img loading="lazy" src="/images/svgs/icon-facebook.svg" alt="" width="16" height="16" />
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img loading="lazy" src="/images/svgs/icon-instagram.svg" alt="" width="16" height="16"/>
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default BreederCard
