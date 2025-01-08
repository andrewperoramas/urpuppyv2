import React from 'react'

const ShareButton = ({
    xUrl,
    fbUrl,
    igUrl
}: {
    xUrl?: string | undefined,
    fbUrl?: string | undefined,
    igUrl?: string | undefined
    }) => {
  return xUrl || fbUrl || igUrl ? (

<div className="dropdown">
                        <button type="button" className="btn btn-secondary p-0 shadow-none bg-white border d-flex align-items-center justify-content-center round-40 rounded-circle flex-shrink-0 show" data-bs-toggle="dropdown" aria-expanded="true">
                          <img src="../images/svgs/icon-share.svg" alt="" />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-primary social-icon px-6"
                 style={{
    minWidth: "auto",
    position: "absolute",
    inset: "0px 0px auto auto",
    margin: "0px",
    transform: "translate(0px, 42px)"
  }}

            >
                          <div className="d-flex align-items-center justify-content-center gap-2">
                    {
                        xUrl && (
                            <li>
                              <a href={xUrl} className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img src="../images/svgs/icon-twitter.svg" alt="" width="16" height="16" />
                              </a>
                            </li>

                        )
                    }

                    {
                        fbUrl && (
                            <li>
                              <a href={fbUrl} className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img src="../images/svgs/icon-facebook.svg" alt="" width="16" height="16" />
                              </a>
                            </li>
                        )
                    }
                    {
                        igUrl && (
                            <li>
                              <a href={igUrl} className="dropdown-item p-0 bg-white bg-opacity-25 d-flex align-items-center justify-content-center round-35 rounded-circle">
                                <img src="../images/svgs/icon-instagram.svg" alt="" width="16" height="16" />
                              </a>
                            </li>
                        )
                    }
                          </div>
                        </ul>
                      </div>

  ) : null
}

export default ShareButton
