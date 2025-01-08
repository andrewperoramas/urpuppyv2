import React from 'react'
import Tooltip from './Tooltip'

const SocialMediaButtons = ({igUrl, xUrl, fbUrl, tiktokUrl, webUrl} : {
    igUrl?: string | undefined,
    xUrl?: string | undefined,
    fbUrl?: string | undefined,
    tiktokUrl?: string | undefined,
    webUrl?: string | undefined
}) => {
  return (
    <ul className="list-unstyled d-flex align-items-center justify-content-center gap-6 social-icon mb-0">

            {fbUrl &&

                  <li>
                                <Tooltip
                                            tooltipMessage="Facebook"
                                            content={
                    <a href={fbUrl}
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-facebook-dark.svg" alt="" />
                    </a>
                                            }
                               id={`fburl`}
                                        />

                  </li>
            }

            {xUrl &&
                  <li>
                                <Tooltip
                                            tooltipMessage="X"
                                            content={
                    <a href={xUrl} data-bs-toggle="tooltip" data-bs-title="Twitter"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-twitter-dark.svg" alt=""/>
                    </a>
                    } id={"xurl"} />
                  </li>
            }

            {tiktokUrl &&
                  <li>
                                <Tooltip
                                            tooltipMessage="Tiktok"
                                            content={
                    <a href={tiktokUrl} data-bs-toggle="tooltip" data-bs-title="Tiktok"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-tiktok-dark.svg" alt="" />
                    </a> } id="tiktokurl" />
                  </li>
            }

            {igUrl &&
                  <li>
                                <Tooltip
                                            tooltipMessage="Instagram"
                                            content={
                    <a href={igUrl} data-bs-toggle="tooltip" data-bs-title="Instagram"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-instagram-dark.svg" alt="" />
                    </a>
                    } id={"igurl"} />
                  </li>
            }

            {
                webUrl &&
                  <li>
                                <Tooltip
                                tooltipMessage="Website"
                                content={
                    <a href={webUrl} data-bs-toggle="tooltip" data-bs-title="Website"
                      className="border d-flex align-items-center justify-content-center round-36 rounded-circle">
                      <img src="/images/svgs/icon-globe-dark.svg" alt="" />
                    </a>
                    } id={"weburl"} />
                  </li>

            }

    </ul>
  )
}

export default SocialMediaButtons
