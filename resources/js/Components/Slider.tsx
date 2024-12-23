import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SliderProps {
    children: React.ReactNode[]; // Expect an array of React nodes
    slidesPerView: number
}

const Slider: React.FC<SliderProps> = ({ children, slidesPerView = 1 }) => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={slidesPerView}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1368: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;

