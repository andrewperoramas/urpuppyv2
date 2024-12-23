import React, { useEffect, useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import {Offcanvas} from 'bootstrap'
import { Link } from '@inertiajs/react';
import ApplicationLogo from '../ApplicationLogo';

const Navbarv2 = ({type} : {type?: string|undefined}) => {

  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

      const toggleOffcanvas = () => {
      const sidebar = document.getElementById('offcanvasSidebar');
         if (!sidebar) {
            return;
          }


        const offcanvasInstance = Offcanvas.getOrCreateInstance(sidebar); // Initialize or get existing instance
       // const offcanvas = new window.bootstrap.Offcanvas(sidebar);
      // offcanvasInstance.toggle();
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
    <header className={`main-header ${type == 'secondary' ? 'information-header' : ''} ${isSticky && type != 'secondary' ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl py-0">
          <div className="logo">

            <ApplicationLogo />
          </div>
          <div className="d-xl-none d-flex align-items-center gap-3">
            <a className="position-relative me-1 d-xl-none" href="#">
              <img src="/icon-heart-white.svg" alt="" />
              <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9+
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
                                  <div className="dropdown">
            <a className="btn btn-primary p-0 round-44 overflow-hidden rounded-circle d-flex align-items-center justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/images/logos/user-1.jpg" alt="" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end p-3" style={{
                                width: 'max-content'
                        }} >
              <div className="border-bottom pb-2">
                <h5 className="mb-0">User Profile</h5>
              </div>
              <div className="d-flex align-items-center gap-6 my-4">
                <span className="rounded-circle overflow-hidden flex-shrink-0">
                  <img src="/images/logos/user-1.jpg" alt="" width="50" height="50" />
                </span>
                <div>
                  <h6 className="mb-0">David McMichael</h6>
                  <p className="mb-0 fs-2 d-flex align-items-center gap-2">
                    <img src="/images/svgs/icon-mail-dark.svg" alt="" width="14" />
                    <a className="text-muted" href="mailto:support@urpuppy.com"> support@urpuppy.com</a>
                  </p>
                </div>
              </div>
              <li><a className="dropdown-item rounded py-2" href="#">Settings</a></li>
              <li><a className="dropdown-item rounded py-2" href="#">My Subscriptions</a></li>
              <li><a className="dropdown-item rounded py-2" href="#">Saved Search</a></li>
              <li><a className="dropdown-item rounded py-2" href="#">Change Password </a></li>
              <div className="mt-3">
                <a className="btn btn-primary d-block w-100" href="login.html">Log Out</a>
              </div>
            </ul>
            </div>

            <span
              className="d-inline-block d-xl-none nav-toggler text-decoration-none fs-9 text-white"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasSidebar"
              aria-controls="offcanvasSidebar"
                  onClick={toggleOffcanvas}
            >
            <i className="ti ti-menu-2"></i>
            </span>
          </div>
          <div className="collapse navbar-collapse justify-content-between" id="menu-scroll">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-item-line ms-4"></li>
              <li className="nav-item">
                <Link className="nav-link" href="/puppies">
                  Puppies for Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch cacheFor="5m" className="nav-link " href="/breeds">
                Breeds
              </Link>
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
                <img src="/icon-heart-white.svg" alt="" />
                <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
              <Link className="btn btn-white bg-white text-dark" href="/login">
                Login
              </Link>
              <Link className="btn btn-primary d-flex align-items-center gap-2" href="/register">
                <img src="/icon-user.svg" alt="" /> Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div
            className={`offcanvas offcanvas-start `}

                tabIndex={-1}
            id="offcanvasSidebar" aria-labelledby="offcanvasExampleLabel">
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
                <Link prefetch cacheFor="5m" className="nav-link text-white" href="/puppies">
                  Puppies for Sale
                </Link>
            </li>
            <li className="nav-item">
            <Link prefetch cacheFor="5m" className="nav-link text-white" href="/breeds">
                Breeds
              </Link>
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
            <Link className="btn btn-white bg-white text-dark w-100" href="/login">
              Login
            </Link>
            <Link className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100" href="/register">
              <img src="/icon-user.svg" alt="" /> Sign Up
            </Link>
          </div>
        </div>
      </div>



    </header>
  );
};

export default Navbarv2;

