import React from 'react'

const Footer = () => {
  return (
        <footer className="footer bg-secondary">
    <div className="container">
      <div className="footer-wrapper pt-7 pt-md-9 pt-lg-10 pb-md-5 pb-lg-5">
        <div className="row">
          <div className="col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0">
            <div className="footer-logo">
              <a href="index.html">
                <img loading="lazy" src="/logo.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0 ps-lg-5">
            <h6 className="fw-semibold font-work-sans mb-6 text-white">Find A Puppy</h6>
            <ul className="list-unstyled footer-memu mb-0">
              <li className="mb-6">
                <a href="#" className="fs-3 d-block fw-normal">View All Puppies</a>
              </li>
              <li>
                <a href="#" className="fs-3 d-block fw-normal">View All Characteristics</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0">
            <h6 className="fw-semibold font-work-sans mb-6 text-white">Customers</h6>
            <ul className="list-unstyled footer-memu mb-0">
              <li className="mb-6">
                <a href="#" className="fs-3 d-block fw-normal">Support</a>
              </li>
              <li>
                <a href="#" className="fs-3 d-block fw-normal">Breeder Login</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0">
            <h6 className="fw-semibold font-work-sans mb-6 text-white">About urpuppy</h6>
            <ul className="list-unstyled footer-memu mb-0">
              <li className="mb-6">
                <a href="#" className="fs-3 d-block fw-normal">About Us</a>
              </li>
              <li>
                <a href="#" className="fs-3 d-block fw-normal">Contact Us</a>
              </li>
              <li>
                <a href="#" className="fs-3 d-block fw-normal">Dog Registration</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0">
            <h6 className="fw-semibold font-work-sans mb-6 text-white">Other</h6>
            <ul className="list-unstyled footer-memu mb-0">
              <li className="mb-6">
                <a href="#" className="fs-3 d-block fw-normal">Privacy Policy</a>
              </li>
              <li className="mb-6">
                <a href="#" className="fs-3 d-block fw-normal">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="fs-3 d-block fw-normal">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0">
            <h6 className="fw-semibold font-work-sans mb-6 text-white">Socials</h6>
            <ul className="list-unstyled d-flex align-items-center gap-6 social-icon mb-0">
              <li>
                <a href="#" data-bs-toggle="tooltip" data-bs-title="Twitter" className="bg-white bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle">
                  <img loading="lazy" src="/images/svgs/icon-twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" data-bs-toggle="tooltip" data-bs-title="Facebook" className="bg-white bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle">
                  <img loading="lazy" src="/images/svgs/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#" data-bs-toggle="tooltip" data-bs-title="Instagram" className="bg-white bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle">
                  <img loading="lazy" src="/images/svgs/icon-instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-top border-white border-opacity-10 py-3 d-md-flex align-items-center justify-content-between">
        <p className="mb-md-0 text-white fw-normal opacity-50">© 2024 urpuppy. All rights reserved.</p>
        <p className="mb-0 text-white fw-normal opacity-50 d-flex align-items-center gap-2"><img src="/images/svgs/icon-mail.svg" alt="" /> support@urpuppy.com</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer
