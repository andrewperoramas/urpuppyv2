import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '../ApplicationLogo';
import AccountDropdownButton from './AccountDropdownButton';
import { runOnClient } from '@/utils/runOnClient';

const Navbarv2 = ({type} : {type?: string|undefined}) => {

  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  let offcanvasInstance: any = null;

     useEffect(() => {
    if (typeof document !== 'undefined') {
      const sidebar = document.getElementById('offcanvasSidebar');
      if (sidebar) {
        import('bootstrap').then(({ Offcanvas }) => {
          offcanvasInstance = Offcanvas.getOrCreateInstance(sidebar);
        });
      }
    }
  }, []); // This effect runs only once when the component mounts

      const toggleOffcanvas = () => {
    if (typeof document !== 'undefined') {
      const sidebar = document.getElementById('offcanvasSidebar');
      if (!sidebar) {
        return;
      }

      // Defer Offcanvas initialization to the client
      // import('bootstrap').then(({ Offcanvas }) => {
      //   Offcanvas.getOrCreateInstance(sidebar);
      // });

      setIsOffcanvasVisible((prev) => !prev);
    }
  };


  const closeOffcanvas = () => {
    setIsOffcanvasVisible(false);
  };

  useEffect(() => {
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

    const user = usePage().props.auth.user;

  return (
    <header className={`main-header ${type == 'secondary' ? 'information-header' : ''} ${isSticky && type != 'secondary' ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-xl py-0">
          <div className="logo">

           <ApplicationLogo />
          </div>
          <div className="d-xl-none d-flex align-items-center gap-3">

             { user && <>
            <a className="position-relative me-1 d-xl-none" href="#">
              <img src="/icon-heart-white.svg" alt="" />
              <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9+
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
                            <AccountDropdownButton user={user}/> </> }

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
                <Link prefetch cacheFor="5m" className="nav-link" href="/puppies">
                  Puppies for Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch cacheFor="5m" className="nav-link " href="/breeds">
                Breeds
              </Link>
              </li>
              <li className="nav-item">
                <Link prefetch cacheFor="5m" className="nav-link" href="/breeders">
                  Breeders
                </Link>
              </li>
              <li className="nav-item">
                <Link prefetch cacheFor="5m" className="nav-link active" aria-current="page" href="/seller/create">
                  + List Ur Puppy
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-6">


                {user ? (
                                <>
              <a className="position-relative me-1" href="#">
                <img src="/icon-heart-white.svg" alt="" />
                <span className="position-absolute fs-1 p-1 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>
                <AccountDropdownButton user={user}/>
                                </>
                ) : (
                                    <>
              {!user && <>
              <Link className="btn btn-white bg-white text-dark" href="/login">
                Login
              </Link>
              <Link className="btn btn-primary d-flex align-items-center gap-2" href="/register">
                <img src="/icon-user.svg" alt="" /> Sign Up
              </Link>

                                        </>}

</>
                )
                            }
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
              <img src="/logo.svg" alt="" />
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
              <Link prefetch cacheFor="5m" className="nav-link text-white" href="/breeders">
                Breeders
              </Link>
            </li>
            <li className="nav-item">
              <Link prefetch cacheFor="5m" className="nav-link text-white" href="/seller/create">
                + List Ur Puppy
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center flex-column gap-3 mt-4">

            <Link prefetch cacheFor="5m" className="btn btn-white bg-white text-dark w-100" href="/login">
              Login
            </Link>
            <Link prefetch cacheFor="5m" className="btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100" href="/register">
              <img src="/icon-user.svg" alt="" /> Sign Up
            </Link>
          </div>
        </div>
      </div>



    </header>
  );
};

export default Navbarv2;

