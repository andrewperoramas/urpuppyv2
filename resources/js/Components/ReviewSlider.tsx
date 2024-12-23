import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface SliderProps {
    children: React.ReactNode[]; // Expect an array of React nodes
    slidesPerView?: number
}

const ReviewSlider: React.FC<SliderProps> = ({ children, slidesPerView = 2 }) => {
    return (
        <section className="review-slider position-relative">
            <Swiper
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                       pagination={{
                    clickable: true,
                    el: "#review-bullets",
                }}
                className="owl-carousel"
                modules={[Pagination, Autoplay]}
                slidesPerView={slidesPerView}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
            >
                <div className="owl-carousel owl-theme position-relative" >
                    {React.Children.map(children, (child, index) => (
                        <SwiperSlide className="owl-item" key={index}>{child}</SwiperSlide>
                    ))}
                </div>
            </Swiper>
            </section>
    );
};

export default ReviewSlider;

