import React from 'react'

const FooterVideos = () => {
  return (
            <section className="bringing-through-puppies bg-extralight py-7 py-md-5 py-xl-9">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4 mb-lg-8">
          <h2 className="mb-0" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Bringing Joy Through
            Puppies</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="bringing-through-puppies-blog position-relative overflow-hidden rounded-1 mb-4 mb-lg-0"
              data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <img src="/images/bringing-through-puppies/bringing-through-puppies-1.jpg" alt=""/>
              <div
                className="d-flex align-items-center gap-3 position-relative z-1 position-absolute bottom-0 start-0 w-100 p-4 pt-0">
                <button type="button"
                  className="btn btn-primary p-2 d-flex align-items-center justify-content-center round-48 rounded-circle flex-shrink-0"
                  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src="/images/svgs/icon-play.svg" alt=""/>
                </button>
                <h4 className="mb-0 text-white fs-8">Meet Our Puppies</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bringing-through-puppies-blog position-relative overflow-hidden rounded-1 mb-4 mb-lg-0"
              data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <img src="/images/bringing-through-puppies/bringing-through-puppies-2.jpg" alt=""/>
              <div
                className="d-flex align-items-center gap-3 position-relative z-1 position-absolute bottom-0 start-0 w-100 p-4 pt-0">
                <button type="button"
                  className="btn btn-primary p-2 d-flex align-items-center justify-content-center round-48 rounded-circle flex-shrink-0"
                  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src="/images/svgs/icon-play.svg" alt=""/>
                </button>
                <h4 className="mb-0 text-white fs-8">How We Care For Our Puppies</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bringing-through-puppies-blog position-relative overflow-hidden rounded-1" data-aos="fade-up"
              data-aos-delay="400" data-aos-duration="1000">
              <img src="/images/bringing-through-puppies/bringing-through-puppies-3.jpg" alt=""/>
              <div
                className="d-flex align-items-center gap-3 position-relative z-1 position-absolute bottom-0 start-0 w-100 p-4 pt-0">
                <button type="button"
                  className="btn btn-primary p-2 d-flex align-items-center justify-content-center round-48 rounded-circle flex-shrink-0"
                  data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src="/images/svgs/icon-play.svg" alt=""/>
                </button>
                <h4 className="mb-0 text-white fs-8">Why Choose Us?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterVideos
