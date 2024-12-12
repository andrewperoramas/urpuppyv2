import React, { useEffect, useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

const Navbarv2 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

      const toggleOffcanvas = () => {
    setIsOffcanvasVisible((prev) => !prev);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasVisible(false);
  };

  useEffect(() => {
    // Check initial scroll position
    if (typeof window !== 'undefined') {
      setIsSticky(window.scrollY > 50);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    // Add scroll event listener with passive mode for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl py-0">
          <div className="logo">
            <a className="navbar-brand py-0 me-0" href="index.html">
              <img src="./logo.svg" alt="" />
            </a>
          </div>
          <div className="d-xl-none d-flex align-items-center gap-3">
            <a className="position-relative me-1 d-xl-none" href="#">
              <img src="./icon-heart-white.svg" alt="" />
              <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9+
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
            <span
              className="d-inline-block d-xl-none nav-toggler text-decoration-none fs-9 text-white"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasExample"
                  onClick={toggleOffcanvas}
            >
              <IconMenu2 />
            </span>
          </div>
          <div className="collapse navbar-collapse justify-content-between" id="menu-scroll">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-item-line ms-4"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Puppies for Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Breeds
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Breeders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  + List Ur Puppy
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-6">
              <a className="position-relative me-1" href="#">
                <img src="./icon-heart-white.svg" alt="" />
                <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
              <a className="btn btn-white bg-white text-dark" href="#">
                Login
              </a>
              <a className="btn btn-primary d-flex align-items-center gap-2" href="#">
                <img src="./icon-user.svg" alt="" /> Register
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div
            className={`offcanvas offcanvas-start ${isOffcanvasVisible ? 'show' : ''}`}

                id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <div className="logo">
            <a className="navbar-brand py-0 me-0" href="index.html">
              <img src="./logo.svg" alt="" />
            </a>
          </div>
          <button
            type="button"
            className="btn-close shadow-none text-reset ms-auto btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={closeOffcanvas}
          ></button>
        </div>
        <div className="offcanvas-body pt-0">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Puppies for Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Breeds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Breeders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                + List Ur Puppy
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center flex-column gap-3 mt-4">
            <a className="btn btn-white bg-white text-dark w-100" href="#">
              Login
            </a>
            <a className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100" href="#">
              <img src="./icon-user.svg" alt="" /> Register
            </a>
          </div>
        </div>
      </div>



    </header>
  );
};

export default Navbarv2;

