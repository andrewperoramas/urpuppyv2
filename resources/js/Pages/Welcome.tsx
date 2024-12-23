import Footer from '@/Components/Navigation/Footer';
import Navbarv2 from '@/Components/Navigation/Navbarv2';
import { PageProps } from '@/types';
import { Head, Link, WhenVisible } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";


export default function Welcome({
    users,
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string; users: string }>) {

    const [userState, setUserState] = useState('');

    useEffect(() => {
        setUserState(users);
    }, [users])

    return (
        <>
            <Head title="Welcome" />

            <Navbarv2 />
            <div className="page-wrapper position-relative overflow-hidden">

                    <section className="hero-section position-relative d-flex align-items-center">
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <h1 className="text-white text-center fs-11 mb-1" data-aos="fade-up" data-aos-delay="100"
              data-aos-duration="1000">Find Ur Perfect Puppy Today!</h1>
            <p className="text-white text-center fs-7 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="200"
              data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>
            <div className="grid-filter d-none d-lg-block" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="d-flex align-items-center justify-content-between">
                <div className="breed d-flex gap-2 border-end">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-breed.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Breed</h6>
                    <input className="form-control p-0 shadow-none border-0 fs-2" list="datalistOptions1"
                      id="exampleDataList" placeholder="e.g (Golden Retriever)" />

                  </div>
                </div>
                <div className="sex d-flex gap-2 border-end">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-gender.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Sex</h6>
                    <select className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option selected>e.g. (Male, Female)</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
                <div className="age d-flex gap-2 border-end">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-calendar.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Age</h6>
                    <select className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option selected>e.g. (1 week)</option>
                      <option value="1">Up to 2 Week</option>
                      <option value="1">Up to 4 Week</option>
                      <option value="1">Up to 10 Week</option>
                      <option value="1">Up to 18 Week</option>
                      <option value="1">Older than 18 Week</option>
                    </select>
                  </div>
                </div>
                <div className="price-range d-flex gap-2 border-end flex-shrink-0">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-dollar.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Price range</h6>
                    <div className="dropdown">
                      <button type="button"
                        className="btn btn-primary p-0 bg-white border-0 text-dark fs-2 fw-normal shadow-none"
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        e.g.

                      </button>
                      <div className="dropdown-menu p-3">
                        <input type="text" className="js-range-slider" name="my_range" value="" data-skin="round"
                          data-type="double" data-min="50" data-max="500" data-grid="false" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="state d-flex gap-2">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-map-pin.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">State</h6>
                    <input className="form-control p-0 shadow-none border-0 fs-2" list="datalistOptions2"
                      id="exampleDataList" placeholder="e.g. (New York)" />

                  </div>
                </div>
                <a href="results.html"
                  className="btn btn-primary round-48 flex-shrink-0 p-2 d-flex align-items-center justify-content-center">
                  <img src="/images/svgs/icon-search.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="grid-filter-mobile dropdown d-grid d-lg-none" data-aos="fade-up" data-aos-delay="300"
              data-aos-duration="1000">
              <button type="button"
                className="btn btn-white bg-white py-6 d-flex align-items-center justify-content-between gap-4"
                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <div className="breed d-flex gap-2">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-breed.svg" alt="" /></span>
                  <div className="text-start">
                    <h6 className="font-work-sans mb-0">Find your puppy</h6>
                    <p className="mb-0 fs-2 text-muted fw-normal">Golden Retriever ・Male ・1 week</p>
                  </div>
                </div>
                <a href="#"
                  className="btn btn-primary round-48 flex-shrink-0 p-2 d-flex align-items-center justify-content-center">
                  <img src="/images/svgs/icon-search.svg" alt="" />
                </a>
              </button>
              <div className="dropdown-menu px-4 py-3 w-100 mt-n1">
                <div className="breed d-flex gap-2 border-bottom py-6">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-breed.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Breed</h6>
                    <input className="form-control p-0 shadow-none border-0 fs-2" list="datalistOptionstwo"
                      id="exampleDataListtwo" placeholder="e.g (Golden Retriever)" />

                  </div>
                </div>

                <div className="sex d-flex gap-2 border-bottom py-6">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-gender.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Sex</h6>
                    <select className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option selected>e.g. (Male, Female)</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>

                <div className="age d-flex gap-2 border-bottom py-6">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-calendar.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Age</h6>
                    <select className="form-select p-0 shadow-none border-0 fs-2" aria-label="Default select example">
                      <option selected>e.g. (1 week)</option>
                      <option value="1">Up to 2 Week</option>
                      <option value="1">Up to 4 Week</option>
                      <option value="1">Up to 10 Week</option>
                      <option value="1">Up to 18 Week</option>
                      <option value="1">Older than 18 Week</option>
                    </select>
                  </div>
                </div>

                <div className="price-range d-flex gap-2 border-bottom py-6">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-dollar.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">Price range</h6>
                    <div className="dropdown">
                      <button type="button"
                        className="btn btn-primary p-0 bg-white border-0 text-dark fs-2 fw-normal shadow-none"
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        e.g.
                      </button>
                      <div className="dropdown-menu p-3">
                        <input type="text" className="js-range-slider" name="my_range" value="" data-skin="round"
                          data-type="double" data-min="50" data-max="500" data-grid="false" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="state d-flex gap-2 py-6">
                  <span className="flex-shrink-0"><img src="/images/svgs/icon-map-pin.svg" alt="" /></span>
                  <div>
                    <h6 className="font-work-sans mb-0">State</h6>
                    <input className="form-control p-0 shadow-none border-0 fs-2" list="datalistOptionsthree"
                      id="exampleDataListthree" placeholder="e.g. (New York)" />

                  </div>
                </div>

                <a href="#" className="btn btn-primary w-100 d-flex align-items-center justify-content-center mt-3">
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>
                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>


                                 <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                                <p className="text-white text-center fs-7 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Discover healthy, happy puppies from trusted breeders across the
              USA</p>

                adi ching

                burat
                <div>

                    <motion.div
  initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
>
                        <h1>

  Sliding Up Content
                        </h1>
</motion.div>


                    <motion.div
  initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
  whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
  transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
>
                        <h1>

  Sliding Up Content
                        </h1>
</motion.div>

                    <WhenVisible data="users" fallback={<div>Loading...</div>}>
                        <div>
                        burat ni {users}
                        </div>
                    </WhenVisible>


</div>


            </div>

        </>
    );
}
