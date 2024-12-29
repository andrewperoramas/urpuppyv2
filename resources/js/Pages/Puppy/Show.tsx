import React from 'react';
import ImageSlider from '@/Components/ImageSlider';
import PuppyCard from '@/Components/Puppy/Card';
import Layout from '@/Layouts/Layout';
import SiblingCard from '@/Components/Puppy/SiblingCard';

const Show = ({ related_puppies, puppy, siblings }: {
    related_puppies: App.Data.PuppyData[]
    puppy: App.Data.PuppyData,
    siblings: App.Data.PuppyData[]
}) => {
    // useEffect(() => {
    //     const debouncedVisit = debounce(() => {

    //         // alert('wew');
    //         if (query == null) {
    //             return;
    //         }

    //         router.visit('/puppies', {
    //             data: query,
    //             preserveState: true,
    //             onSuccess: () => {
    //                 console.log('Filter applied:', query);
    //                 // console.log(puppies.data)
    //             },
    //         });
    //     }, 300);

    //     debouncedVisit();

    //     return () => {
    //         debouncedVisit.cancel();
    //     };


    // }, [query]);

    return (
            <Layout>
  <div className="page-wrapper position-relative overflow-hidden">

    <section
                    className="hero-section position-relative d-flex align-items-center pt-11 pb-10">
      <div className="container position-relative z-1 pt-lg-1 mt-lg-3 mb-lg-4">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <h1 className="text-white text-center fs-11 mb-1" data-aos="fade-up" data-aos-delay="100"
              data-aos-duration="1000">{puppy.breeds[0].name}</h1>
          </div>
        </div>
      </div>
    </section>


    <section className="golden-retriever py-7 py-md-5 py-xl-9">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="card border">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-7 mb-4 mb-md-5 mb-xl-0">
                    <div className="top-picks-slider me-xl-4">
                      <div id="sync1" className="owl-carousel owl-theme mb-4">
                                    <ImageSlider images={puppy.preview_images}/>

                      </div>

                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="top-picks-details">
                      <div className="d-flex align-items-start justify-content-between mb-4">
                        <h2 className="fs-10 mb-0">{puppy.name}</h2>
                        <div className="d-flex align-items-center gap-2">
                          <a href="my-favourite-puppies.html" data-bs-toggle="tooltip" data-bs-title="Add To Favourite"
                            className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle">
                            <img src="/images/svgs/icon-heart.svg" alt="" />
                          </a>
                          <a href="#" data-bs-toggle="tooltip" data-bs-title="Print"
                            className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle">
                            <img src="/images/svgs/icon-print.svg" alt="" />
                          </a>
                          <a href="#" data-bs-toggle="tooltip" data-bs-title="Share"
                            className="bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle">
                            <img src="/images/svgs/icon-share.svg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <div className="d-flex align-items-center gap-2 mb-3 border-end pe-6">
                          <img src="/images/svgs/icon-time.svg" alt="" width="20" height="20" />
                          <p className="mb-0">{puppy.published_at}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-3 border-end pe-6 ps-6">
                          <img src="/images/svgs/icon-map-pin.svg" alt="" width="20" height="20" />
                          <p className="mb-0">{puppy.breeder.address}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-3 border-end pe-6 ps-6">
                          <img src="/images/svgs/icon-calendar.svg" alt="" width="20" height="20" />
                          <p className="mb-0">{puppy.age}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-3 border-end pe-6 ps-6">
                          <img src="/images/svgs/icon-female.svg" alt="" width="20" height="20" />
                          <p className="mb-0">{puppy.gender}</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-3 pe-6 ps-6">
                          <img src="/images/svgs/icon-eye.svg" alt="" width="20" height="20" />
                          <p className="mb-0">{puppy.view_count} Views</p>
                        </div>
                      </div>
                      <p className="mb-1 fs-2 fw-medium">Our price</p>
                      <h2 className="mb-4">{puppy.formatted_price}</h2>
                      <div className="hstack gap-6 mb-3">
                        <p className="mb-0 fw-medium">Pattern:</p>
                        <p className="mb-0">Solid Black, Ticked</p>
                      </div>
                      <div className="colors hstack gap-6 mb-4 pb-4 border-bottom">
                        <p className="mb-0 fw-medium">Colors:</p>
                        <div className="hstack gap-6">
                          <div className="hstack gap-1">
                            <span className="flex-shrink-0 d-block round-20 rounded-circle bg-dark"></span>
                            <p className="mb-0">Black</p>
                          </div>
                          <div className="hstack gap-1">
                            <span className="flex-shrink-0 d-block round-20 rounded-circle bg-primary"></span>
                            <p className="mb-0">Orange</p>
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 fs-8">About Charlie</h3>
                      <p className="mb-6">{puppy.description}</p>
                      <p className="mb-3"></p>
                      <div className="d-flex align-items-center align-items-start gap-2">
                        <img src="/images/svgs/icon-flag.svg" alt="" />
                        <h6 className="mb-0 fs-2 fw-semibold text-muted text-decoration-underline">Report This Listing</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border">
              <div className="card-body">
                <div className="charlies-characteristics pb-3 border-bottom">
                  <h5 className="mb-3 pb-1 fs-5">Charlie’s Characteristics</h5>
                  <div className="d-flex align-items-center flex-wrap gap-4 pb-1">
                    <div className="hstack gap-3">
                      <img src="/images/svgs/icon-check.svg" alt="" />
                      <p className="mb-0">Champion Sired</p>
                    </div>
                    <div className="hstack gap-3">
                      <img src="/images/svgs/icon-check.svg" alt="" />
                      <p className="mb-0">Champion Bloodline</p>
                    </div>
                    <div className="hstack gap-3">
                      <img src="/images/svgs/icon-check.svg" alt="" />
                      <p className="mb-0">Current Vaccinations</p>
                    </div>
                  </div>
                </div>
                <div className="charlies-features mt-3 pt-1">
                  <h5 className="mb-3 pb-1 fs-5">Charlie’s Features</h5>
                  <div className="d-flex align-items-center flex-wrap gap-4">
                    <div className="hstack gap-3">
                      <img src="/images/svgs/icon-check.svg" alt="" />
                      <p className="mb-0">Vaccinated</p>
                    </div>
                    <div className="hstack gap-3">
                      <img src="/images/svgs/icon-check.svg" alt="" />
                      <p className="mb-0">Passport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="card shadow">
              <div className="card-body">
                <div className="text-center position-relative mb-6 mx-auto d-table">
                  <div className="round-96 object-fit-cover rounded-circle position-relative overflow-hidden">
                    <img src={puppy.breeder.avatar} alt=""
                      className="object-fit-cover w-100 h-100" />
                  </div>
                  <span
                    className="position-absolute bottom-0 end-0 d-block round-24 rounded-circle bg-primary d-flex align-items-center justify-content-center">
                    <img src="/images/svgs/icon-paws.svg" alt="" width="16" height="16" />
                  </span>
                </div>
                <h5 className="fs-5 text-center">{puppy.breeder.full_name}</h5>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                  <img src="/images/svgs/icon-map-pin.svg" alt="" width="20" height="20" />
                  <p className="mb-0 fs-2">{puppy.breeder.address}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                  <img src="/images/svgs/icon-user-dark.svg" alt="" width="14" height="14" />
                  <p className="mb-0 fs-2">Member since: {puppy.breeder.member_since}</p>
                </div>
                <a className="btn btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-6"
                  href="login.html">
                  <img src="/images/svgs/icon-mail-dark.svg" alt="" />
                  Show Email Address
                </a>
                <a className="btn btn-outline-extralight btn-white text-dark hstack justify-content-center gap-2 mb-4"
                  href="#">
                  <img src="/images/svgs/icon-call.svg" alt="" />
                  Show Phone Number
                </a>
                <p className="text-center">Follow me:</p>
                <ul className="list-unstyled d-flex align-items-center justify-content-center gap-6 social-icon mb-0">
                  <li>
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Facebook"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-facebook-dark.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Twitter"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-twitter-dark.svg" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Tiktok"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-tiktok-dark.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Instagram"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-instagram-dark.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="tooltip" data-bs-title="Website"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-globe-dark.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card border">
              <div className="card-body">
                <h5 className="fs-5 mb-3 pb-1">Charlie’s Siblings</h5>
                <div className="row">
                                            {
                                                siblings.map((sibling: App.Data.PuppyData) => (
                                                <SiblingCard key={sibling.slug} puppy={sibling} />

                                                ))
                                            }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bringing-through-puppies bg-extralight py-7 py-md-5 py-xl-9">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-lg-8">
          <h2 className="mb-0" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Other {puppy.breeds[0].name } List</h2>
        </div>

        <div className="row">
            {
                                related_puppies && related_puppies.map((puppy: App.Data.PuppyData) => (
                                    <PuppyCard key={puppy.slug} className="col-md-6 col-xl-3 mb-4 mb-xl-0" puppy={puppy}/>

                                ))
                            }

        </div>
      </div>
    </section>

            </div>
</Layout>
    );
};

export default Show;

