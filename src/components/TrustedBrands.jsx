import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { brands } from '../Data'; // Import brands data

function TrustedBrands() {
  return (
    <div className="bg-white dark:bg-gray-900 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto rounded-lg border-2 dark:border-gray-700 py-5 mt-5 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            loop
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <img
                  alt={brand.alt}
                  src={brand.src}
                  className="max-h-12 w-full object-contain dark:filter dark:brightness-0 dark:invert"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TrustedBrands;
