import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function TrustedBrands() {
  const brands = [
    {
      alt: 'Transistor',
      src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg',
    },
    {
      alt: 'Reform',
      src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      alt: 'Tuple',
      src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg',
    },
    {
      alt: 'SavvyCal',
      src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg',
    },
    {
      alt: 'Statamic',
      src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg',
    },
  ];

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto rounded-lg border-2 py-5 mt-5 max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
          {/* <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            loop
          > */}
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
                  className="max-h-12 w-full object-contain"
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
