import React from 'react'
import SocialMediaButtons from './SocialMediaButtons'

const SellerCard = ({
    seller
}: {
    seller: App.Data.BreederData
}) => {
  return (

            <div className="card shadow">
              <div className="card-body">
                <div className="text-center position-relative mb-6 mx-auto d-table">
                  <div className="round-96 object-fit-cover rounded-circle position-relative overflow-hidden">
                    <img src={seller.avatar} alt=""
                      className="object-fit-cover w-100 h-100" />
                  </div>
                  <span
                    className="position-absolute bottom-0 end-0 d-block round-24 rounded-circle bg-primary d-flex align-items-center justify-content-center">
                    <img src="/images/svgs/icon-paws.svg" alt="" width="16" height="16" />
                  </span>
                </div>
                <h5 className="fs-5 text-center">{seller.full_name}</h5>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-1">
                  <img src="/images/svgs/icon-map-pin.svg" alt="" width="20" height="20" />
                  <p className="mb-0 fs-2">{seller.address}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                  <img src="/images/svgs/icon-user-dark.svg" alt="" width="14" height="14" />
                  <p className="mb-0 fs-2">Member since: {seller.member_since}</p>
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
                <SocialMediaButtons
                igUrl="#"
                xUrl="#"
                fbUrl="#"
                tiktokUrl="#"
                webUrl="#"
                />
              </div>
            </div>

  )
}

export default SellerCard
