import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import "swiper/css";


const CarouselBanner = () => {
    const slides = [
        '/img/banner/banner-1.png',
        '/img/banner/banner-2.png',
        '/img/banner/banner-1.png',
        '/img/banner/banner-2.png',
        '/img/banner/banner-1.png',
        '/img/banner/banner-2.png',
    ];

    return (
        <section className="my-8 px-2">
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
            >
                {slides.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img src={src} alt={`banner-${idx}`} className="h-32 w-full object-cover" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CarouselBanner;
