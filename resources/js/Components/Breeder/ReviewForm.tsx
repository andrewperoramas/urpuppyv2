import { Rating } from '@smastrom/react-rating'
import React from 'react'
import '@smastrom/react-rating/style.css'

const ReviewForm = () => {
    const [value, setValue] = React.useState(0)
   const CustomStar = (
        <path xmlns="http://www.w3.org/2000/svg" d="M11.0008 16.75L4.82881 19.995L6.00781 13.122L1.00781 8.25495L7.90781 7.25495L10.9938 1.00195L14.0798 7.25495L20.9798 8.25495L15.9798 13.122L17.1588 19.995L11.0008 16.75Z" stroke="#08314E" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
)

    const myStyles = {
  itemShapes: CustomStar,
  itemStrokeWidth: 1,
  activeFillColor: 'var(--bs-primary)',
  activeStrokeColor: '',
  inactiveStrokeColor: 'transparent',
  inactiveFillColor: '',

}
  return (
            <div className="card border post-reviews">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-3 pb-1">
                  <img src="/images/svgs/icon-user-circle.svg" alt="" className="flex-shrink-0"/>
                  <div>
                    <h6 className="fs-3 mb-0">Post a review</h6>
                    <p className="mb-0 fs-2">Your opinion matters</p>
                  </div>
                </div>
                <div className="list-unstyled mb-3 pb-1 d-flex align-items-center gap-1">
                            <Rating
                            itemStyles={myStyles}

                            style={{ maxWidth: 125 }}  value={0}/>
                </div>

                <form action="">
                  <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1"
                      placeholder="Write a review"></textarea>
                  </div>
                  <div className="text-end">
                    <a className="btn btn-primary d-inline-flex align-items-center gap-2" href="#">Submit a Review <img
                        src="/images/svgs/icon-plus.svg" alt=""/></a>
                  </div>
                </form>
              </div>
            </div>
  )
}

export default ReviewForm
