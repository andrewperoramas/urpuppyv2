import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperInstance } from "swiper/types";

// Slider Component
const ImageSlider = ({
    images,
    enableNavigation = false,
}: {
        images: (string)[];
        enableNavigation?: boolean;
    }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    // const swiperRef = useRef<SwiperInstance | null>(null);
    const swiperRef = useRef<any>(null); // Ref for Swiper instance

    // Effect to call swiper.update when the modal is visible
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.update();
        }
    }, [images]); // Dependency on images and thumbnails

    return (
        images?.length >= 1 && (
         <>
                <Swiper
                    ref={swiperRef}
                    zoom={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".custom-prev-1",
                        nextEl: ".custom-next-1",
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Zoom, Thumbs, FreeMode]}
                    className="responsive-big-image"
                >
                    {images?.map((file, index) => (
                        <SwiperSlide key={index} className=" puppy-spotlight-img  position-relative overflow-hidden rounded-1">

                                <img
                                    src={file}
                                    alt={`Media ${index + 1}`}
                                    className=" w-100 h-100 object-fit-cover rounded-1 "
                                />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {enableNavigation && images.length > 1 && (
                    <>
                        <button className="custom-prev-1 z-50 absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                            <IoIosArrowRoundBack className="text-gray-800 text-2xl" />
                        </button>
                        <button className="custom-next-1 z-50 absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                            <IoIosArrowRoundForward className="text-gray-800 text-2xl" />
                        </button>
                    </>
                )}

                {images.length > 1 && (
                    <Swiper
                        modules={[Thumbs, Navigation, FreeMode]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={5}
                        className="mt-4"
                        spaceBetween={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >

                        <div style={{
                            marginRight: '16px!important',
                        }}>
                        {images?.map((file, index) => (
                            <SwiperSlide key={index} className="item overflow-hidden" style={{
                                maxWidth: '105px',
                                height: '90px',
                            }}>
                                <img
                                        style={{
                                            height: '90px',
                                            width: '90px',
                                            borderRadius: 'var(--bs-border-radius-sm)',
                                        }}
                                    className=" h-100 object-fit-cover slide"
                                    src={file}
                                    alt={`Thumbnail ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
</div>
                    </Swiper>
                )}
            </>
        )
    );
};

export default ImageSlider;
