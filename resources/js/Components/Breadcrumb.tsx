import React from 'react'

const Breadcrumb = () => {
  return (
                <nav aria-label="breadcrumb">
          <ol className="breadcrumb align-items-center mb-4">
            <li className="breadcrumb-item fw-semibold d-flex align-items-center"><a
                className="text-dark d-flex align-items-center" href="index.html"><img
                  src="/images/svgs/icon-home.svg" alt="" width="16" height="16"/></a></li>
            <li className="breadcrumb-item fw-semibold d-flex align-items-center"><a className="text-dark"
                href="breeds.html">Breeds</a></li>
            <li className="breadcrumb-item fw-semibold d-flex align-items-center active" aria-current="page">Charlie</li>
          </ol>
        </nav>

  )
}

export default Breadcrumb
